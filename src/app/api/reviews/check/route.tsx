import { NextResponse } from "next/server";
import allowedOrigins from "../submit/route";

export async function POST(req: Request) {
  if (!allowedOrigins.includes(req.headers.get("origin")!))
    return new NextResponse(null, { status: 403, statusText: "Forbidden" });

  const { _option, _name, _rating, review } = await req.json();

  const perspectiveReq = await fetch(
    `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${process.env.PERSPECTIVE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: { text: review },
        languages: ["en"],
        requestedAttributes: { TOXICITY: {}, SPAM: {}, PROFANITY: {} },
      }),
    }
  );

  const data = await perspectiveReq.json();
  const scores = Object.entries(data.attributeScores).map(([key, value]) => [
    key,
    Object.entries(value as Object)[1][1].value,
  ]);

  // check toxicity
  if (scores[0][1] > 0.7)
    return new NextResponse(
      JSON.stringify({
        status: 400,
        message: "Review toxicity threshold exceeded",
      }),
      {
        status: 400,
        statusText: "Toxicity threshold exceeeded",
      }
    );
  // check spam
  if (scores[1][1] > 0.95)
    return new NextResponse(
      JSON.stringify({
        status: 400,
        message: "Review spam threshold exceeded",
      }),
      {
        status: 400,
        statusText: "Spam threshold exceeeded",
      }
    );
  // check profanity
  if (scores[2][1] > 0.7)
    return new NextResponse(
      JSON.stringify({
        status: 400,
        message: "Review profanity threshold exceeded",
      }),
      {
        status: 400,
        statusText: "Profanity threshold exceeeded",
      }
    );

  return new NextResponse(
    JSON.stringify({ status: 200, message: "OK to submit review" }),
    {
      status: 200,
      statusText: "OK to submit review.",
    }
  );
}
