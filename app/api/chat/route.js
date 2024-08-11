import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  const openai = new OpenAI({ apikey: process.env.OPENAI_API_KEY, baseURL: "https://openrouter.ai/api/v1" });
  const data = await req.json();

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "" }, ...data],
    model: "openai/gpt-3.5-turbo",
    stream: true,
  });
  const stream = new ReadableStream({
    //stream starts here
    async start(controller) {
      const encoder = new TextEncoder();

      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content;

          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }
      } catch (error) {
        controller.error(error);
      } finally {
        controller.close();
      }
    },
  });

  return new NextResponse(stream);
}
