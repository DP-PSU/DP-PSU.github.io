import { NextResponse } from "next/server";
import mongoClientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const { option, name, rating, review } = await req.json();

  const client = await mongoClientPromise;

  try {
    const reviews = client.db("dp-psu-website").collection("reviews");

    const result = await reviews.insertOne({
      option: option,
      name: name,
      rating: rating,
      reviewText: review,
    });

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
