import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
const allowedOrigins = [
  "https://dp-psu-next.vercel.app",
  "http://localhost:3000",
];

export async function POST(req: Request) {
  if (!allowedOrigins.includes(req.headers.get("origin")!))
    return new NextResponse(null, { status: 403, statusText: "Forbidden" });

  const { option, name, rating, review } = await req.json();

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
