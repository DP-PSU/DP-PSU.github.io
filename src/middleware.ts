import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigins = [
  "https://dp-psu.vercel.app",
  "https://psu-transfer-credit.vercel.app",
  "http://localhost:3000",
];

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (!origin || !allowedOrigins.includes(origin)) {
    return new NextResponse("Origin not allowed", {
      status: 403,
      statusText: "Forbidden",
    });
  }

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": origin || "",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  const response = NextResponse.next();

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
  }

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
