// app/api/chat/route.ts

import { ReplicateStream, StreamingTextResponse } from 'ai';
import Replicate from 'replicate';
import { experimental_buildLlama2Prompt } from 'ai/prompts';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY || '',
});

export const runtime = 'edge';

export async function POST(req) {
 console.log(process.env.REPLICATE_API_KEY)
 
  const { messages } = await req.json();

  const response = await replicate.predictions.create({
    stream: true,
    version: 'de18b8b68ef78f4f52c87eb7e3a0244d18b45b3c67affef2d5055ddc9c2fb678',
    input: {
      prompt: experimental_buildLlama2Prompt(messages),
    },
  });

  const stream = await ReplicateStream(response);
  return new StreamingTextResponse(stream);
}
