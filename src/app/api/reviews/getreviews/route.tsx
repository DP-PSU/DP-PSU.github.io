import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { option } = await req.json();

  const client = new MongoClient(process.env.MONGODB_CONNECTION_URI!);

  try {
    await client.connect();

    const reviews = client.db("dp-psu-website").collection("reviews");

    const result = await reviews
      .find({
        option: option,
      })
      .toArray();

    client.close();

    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error getting reviews", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
