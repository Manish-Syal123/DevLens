"use server";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateEmbedding } from "@/lib/gemini";
import { db } from "@/server/db";
import dotenv from "dotenv";

dotenv.config();

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function askQuestion(question: string, projectId: string) {
  const stream = createStreamableValue();

  //generating the vector embedding of the question
  const queryVector = await generateEmbedding(question);
  const vectorQuery = `[${queryVector.join(",")}]`;

  //searching the documents in "sourceCodeEmbedding" tabel whose summaryEmbedding is similar to the questionEmbedding & whose similarity is greater than .5 (0.5 is the threshold value)
  const result = (await db.$queryRaw`
    SELECT "fileName", "sourceCode", "summary",
    1 - ("summaryEmbedding" <=> ${vectorQuery}::vector) AS similarity
    FROM "SourceCodeEmbedding"
    WHERE 1 - ("summaryEmbedding" <=> ${vectorQuery}::vector) > 0.4
    AND "projectId" = ${projectId}
    ORDER BY similarity DESC
    LIMIT 10
    `) as { fileName: string; sourceCode: string; summary: string }[];

  //the result is an array of objects, result=[{fileName: string, sourceCode: string, summary: string},{...},{...}, ..... 10-objects]

  let context = "";
  // function truncate(text: string, maxLength: number = 500): string {
  //   return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  // }

  //passing all the relevent information of result in one context block
  for (const doc of result) {
    context += `source: ${doc.fileName}\n code content: ${doc.sourceCode}\n summary of file: ${doc.summary}\n\n`;
    // context += `source: ${doc.fileName}\n code content: ${truncate(doc.sourceCode)}\n summary: ${truncate(doc.summary)}\n\n`;
  }

  // console.log("context ✅✅=>", context);
  // console.log("Database results:", result);

  (async () => {
    try {
      const { textStream } = streamText({
        model: google("gemini-1.5-flash"),
        prompt: `
                You are a ai code assistant who answers questions about the codebase. Your target audience is a technical intern who need your assistance to understand the codebase.
                AI assistant is a brand new, powerful, human-like artificial intelligence.
                The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
                AI is a well-behaved and well-mannered individual.
                AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
                AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in in conversation.
                If the question is asking about code or a specific file. AI will provide the detailed answer, giving step-by-step instructions.
                Your responses must strictly follow Markdown syntax. 
                ### Guidelines for Answers:
                - Use **Headings** (e.g., \`### Overview\`) for different sections.
                - Include **Code Blocks** (\`\`\`) for code snippets.
                - Use **Bullet Points** (- or *) for lists.
                - Use **Inline Code** (\`) for variable or file names.
                - Be as **detailed** as possible, with step-by-step explanations when applicable.
                - Summarize context if needed and provide clear, concise answers.

                ### Response Formatting Example:
                1. **Provide a summary of the question and relevant files.**
                2. **Explain the purpose of the code or functionality in question.**
                3. **Break down the explanation into sections if needed.**

                #### Step-by-Step Explanation
                1. **What does the code do?**
                  - Detailed explanation of functionality.
                2. **How to interpret the results?**
                  - Instructions or insights into the output.
                3. **Potential modifications or improvements?**
                  - Suggestions for extending or optimizing the code.
                START CONTEXT BLOCK
                ${context}
                END OF CONTEXT BLOCK
    
                START QUESTION
                ${question}
                END OF QUESTION
                AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
                If the context does not provide the answer to question, the AI assistant will say, "I'm sorry, but I don't know the answer to that question".
                AI assistant will not apologize for previous responses, but instead will indicated new information was gained.
                AI assistant will not invent anything that is not drawn directly from the context.
                Answer in markdown syntax, with code snippets if needed. Be as detailed as possible when answering.
                Your response must be complete, accurate, and formatted using Markdown syntax. If context is insufficient, acknowledge it and avoid speculation.
                `,
        maxTokens: 1000,
        temperature: 0.2,
        topP: 0.9,
      });

      for await (const delta of textStream) {
        stream.update(delta);
      }

      stream.done();
    } catch (error) {
      console.error("Error in streaming:", error);
    }
  })();

  return {
    output: stream.value,
    filesReferences: result,
  };
}
