import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { Velocity } from "velocity-api";

export async function POST(req: Request) {
  const { option, name, rating, review } = await req.json();

  // check review for toxicity, spam, or any
  if (process.env.VELOCITY_API_KEY) {
    const velocityAPI = new Velocity(process.env.VELOCITY_API_KEY!);
    const reviewScores = await velocityAPI.processMessage(review, {
      attributes: ["TOXICITY", "PROFANITY", "SPAM"],
      languages: ["en"],
      doNotStore: true,
    });

    if (
      reviewScores.SPAM > 0.7 ||
      reviewScores.PROFANITY > 0.7 ||
      reviewScores.TOXICITY > 0.7
    ) {
      return new NextResponse(
        JSON.stringify({
          message: "Review contains spam, profanity, or toxicity",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
  }

  const client = new MongoClient(process.env.MONGODB_CONNECTION_URI!);

  try {
    await client.connect();

    const reviews = client.db("dp-psu-website").collection("reviews");

    const result = await reviews.insertOne({
      option: option,
      name: name,
      rating: rating,
      reviewText: review,
    });

    client.close();

    return new NextResponse(
      JSON.stringify({ message: "Review added successfully", result }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error adding review", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
