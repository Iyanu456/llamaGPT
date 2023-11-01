import { ReplicateStream, StreamingTextResponse } from 'ai';
import Replicate from 'replicate';
import { experimental_buildLlama2Prompt } from 'ai/prompts';
 
// Create a Replicate API client (that's edge friendly!)
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY || 'r8_MikRAjUgm4dBlVjYsIf7zx8hR6Z3ZUs3tanpv',
});
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req) {
  const { messages } = await req.json();
 
  const response = await replicate.predictions.create({
    // You must enable streaming.
    stream: true,
    // The model must support streaming. See https://replicate.com/docs/streaming
    // This is the model ID for Llama 2 70b Chat
    version: '02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3',
    // Format the message list into the format expected by Llama 2
    // @see https://github.com/vercel/ai/blob/99cf16edf0a09405d15d3867f997c96a8da869c6/packages/core/prompts/huggingface.ts#L53C1-L78C2
    input: {
      prompt: experimental_buildLlama2Prompt(messages),
    },
  });
 
  // Convert the response into a friendly text-stream
  const stream = await ReplicateStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}