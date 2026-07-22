import { google } from '@ai-sdk/google';
import { streamText, tool } from 'ai';
import { z } from 'zod';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, pathname } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'),
    system: `You are an AI assistant embedded in Marzella Capin's VS Code-style portfolio. 
The user is currently viewing the file/route: ${pathname || 'the root directory'}. 
If they ask "what is this?" or refer to the current page, use this location context to guide your answer. 
Answer questions about her projects, skills (React, Next.js, CSS), and experience concisely. Format responses in Markdown.`,
    messages,
    tools: {
      navigate: tool({
        description: "Navigates the user to a different page in the portfolio. Use this when the user asks to see your projects, about page, or contact info.",
        parameters: z.object({
          path: z.string().describe("The standard URL path to navigate to, e.g., '/', '/projects', '/about', '/contact'"),
        }),
      }),
    },
  });

  return result.toDataStreamResponse();
}
