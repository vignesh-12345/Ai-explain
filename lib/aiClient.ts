import { GoogleGenerativeAI } from "@google/generative-ai";

export async function explainTopic(topic: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

  const prompt = `You are a friendly and knowledgeable tutor. A student has asked you to explain the following topic in simple, clear terms.

Topic: "${topic}"

Please provide:
1. A clear and concise explanation suitable for a student (ages 13–20).
2. Use simple language, avoiding unnecessary jargon. If you must use technical terms, define them briefly.
3. Include a helpful analogy or real-world example where appropriate.
4. Keep the explanation between 100–200 words.
5. Write in paragraph form (no bullet points or headers).
6. Be encouraging and positive in tone.

Explanation:`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  if (!text) {
    throw new Error("No explanation was generated. Please try again.");
  }

  return text.trim();
}