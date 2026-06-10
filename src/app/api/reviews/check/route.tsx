import { NextResponse } from "next/server";

// --- Spam heuristics (replaces Perspective SPAM category) ---
function detectSpam(text: string): { isSpam: boolean; reason?: string } {
  // URLs: http/https links, bare www., or common commercial TLDs
  const urlPattern =
    /https?:\/\/[^\s]+|www\.[^\s]+|\b\w+\.(com|net|org|io|co|shop|store|click|link)\b/gi;
  if (urlPattern.test(text)) {
    return { isSpam: true, reason: "Contains URLs" };
  }

  // Same word repeated 3+ times in a row (e.g. "buy buy buy")
  const repeatedWordsPattern = /\b(\w+)\b(?:\s+\1\b){2,}/i;
  if (repeatedWordsPattern.test(text)) {
    return { isSpam: true, reason: "Contains repeated words" };
  }

  // Same character repeated 5+ times (e.g. "aaaaa", "!!!!!")
  const repeatedCharsPattern = /(.)\1{4,}/;
  if (repeatedCharsPattern.test(text)) {
    return { isSpam: true, reason: "Contains excessive repeated characters" };
  }

  // Common spam phrases
  const spamKeywords = [
    "click here",
    "buy now",
    "free offer",
    "limited time",
    "act now",
    "discount code",
    "promo code",
    "special offer",
    "order now",
    "shop now",
    "make money",
    "earn money",
    "work from home",
    "100% free",
    "risk free",
    "you've been selected",
    "you have been selected",
    "congratulations you",
  ];
  const lowerText = text.toLowerCase();
  const foundKeyword = spamKeywords.find((kw) => lowerText.includes(kw));
  if (foundKeyword) {
    return { isSpam: true, reason: `Contains spam phrase: "${foundKeyword}"` };
  }

  // Excessive caps: >60% uppercase letters on texts longer than 10 chars
  const letters = text.replace(/[^a-zA-Z]/g, "");
  if (letters.length > 10) {
    const upperCount = (text.match(/[A-Z]/g) ?? []).length;
    if (upperCount / letters.length > 0.6) {
      return { isSpam: true, reason: "Excessive uppercase" };
    }
  }

  return { isSpam: false };
}

export async function POST(req: Request) {
  const { _option, _name, _rating, review } = await req.json();

  if (!review.length)
    return new NextResponse(
      JSON.stringify({ status: 200, message: "Review has no text." }),
      { status: 200, statusText: "Review has no text." },
    );

  // Spam heuristics
  const spamResult = detectSpam(review);
  if (spamResult.isSpam)
    return new NextResponse(
      JSON.stringify({
        status: 400,
        message: `Review spam threshold exceeded: ${spamResult.reason}`,
      }),
      { status: 400, statusText: "Spam threshold exceeded" },
    );

  // OpenAI Moderation API
  const moderationReq = await fetch("https://api.openai.com/v1/moderations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_MODERATION_API_KEY}`,
    },
    body: JSON.stringify({
      model: "omni-moderation-latest",
      input: review,
    }),
  });

  const data = await moderationReq.json();
  const scores = data.results[0].category_scores;

  // Toxicity: harassment or hate speech above threshold
  // Mirrors the original 0.7 threshold from Perspective TOXICITY
  if (scores.harassment > 0.7 || scores.hate > 0.7)
    return new NextResponse(
      JSON.stringify({
        status: 400,
        message: "Review toxicity threshold exceeded",
      }),
      { status: 400, statusText: "Toxicity threshold exceeded" },
    );

  // Profanity: harassment/threatening or hate/threatening
  // Mirrors the original 0.7 threshold from Perspective PROFANITY
  if (
    scores["harassment/threatening"] > 0.7 ||
    scores["hate/threatening"] > 0.7
  )
    return new NextResponse(
      JSON.stringify({
        status: 400,
        message: "Review profanity threshold exceeded",
      }),
      { status: 400, statusText: "Profanity threshold exceeded" },
    );

  return new NextResponse(
    JSON.stringify({ status: 200, message: "OK to submit review" }),
    { status: 200, statusText: "OK to submit review." },
  );
}
