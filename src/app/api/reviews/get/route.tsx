import mongoClientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { option } = await req.json();

  const client = await mongoClientPromise;

  try {
    const reviews = client.db("dp-psu-website").collection("reviews");

    const result = await reviews
      .find({
        option: option,
      })
      .toArray();

    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error getting reviews", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
