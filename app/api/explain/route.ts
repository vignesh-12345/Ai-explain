import { NextRequest, NextResponse } from "next/server";
import { explainTopic } from "@/lib/aiClient";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic } = body as { topic?: string };

    // Validate input
    if (!topic || typeof topic !== "string" || topic.trim().length === 0) {
      return NextResponse.json(
        { error: "Please enter a topic to continue." },
        { status: 400 }
      );
    }

    const trimmedTopic = topic.trim();

    if (trimmedTopic.length > 200) {
      return NextResponse.json(
        { error: "Topic is too long. Please keep it under 200 characters." },
        { status: 400 }
      );
    }

    // Generate explanation via Gemini
    const explanation = await explainTopic(trimmedTopic);

    return NextResponse.json({ explanation }, { status: 200 });
  } catch (error: unknown) {
    console.error("[API /explain] Error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again.";

    // Don't expose internal error details in production
    const safeMessage =
      process.env.NODE_ENV === "development"
        ? message
        : "Failed to generate explanation. Please try again.";

    return NextResponse.json({ error: safeMessage }, { status: 500 });
  }
}

// Only allow POST
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}