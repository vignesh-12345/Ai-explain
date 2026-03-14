import { GoogleGenerativeAI } from "@google/generative-ai";

export async function explainTopic(topic: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
  });

  const prompt = `Explain the following topic in simple, clear terms for a student aged 13-20.

Topic: ${topic}

Provide a clear and concise explanation using simple language. Include an analogy or example if helpful. Keep it between 100-200 words. Be encouraging and positive.

Explanation:`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  if (!text) {
    throw new Error("No explanation was generated. Please try again.");
  }

  return text.trim();
}