import { GoogleGenerativeAI } from "@google/generative-ai";
import { Document } from "@langchain/core/documents";
import { retry } from "./utils";
export const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// URL example for reference : (`${githubUrl}/commit/${commitHash}.diff`)
// eg: https://github.com/Manish-Syal123/AI-Mock-Interviewer/commit/4a790e142681de3ed06f79d5d826e2c6c12f8c8a.diff
export const aiSummariseCommit = async (diff: string) => {
  if (!diff.trim()) {
    // console.warn("Empty diff provided, skipping summary generation.");
    return "No significant changes detected.";
  }

  return await retry(async () => {
    const response = await model.generateContent([
      `You are an expert programmer, and you are trying to summarize a git diff. 
    Reminders about the git diff format: 
    For every file, there are a few metadata lines, like (for example): 
    \`\`\` 
    diff --git a/lib/index.js b/lib/index.js  
    index aadf691..bfef603 100644 
    --- a/lib/index.js 
    +++ b/lib/index.js 
    \`\`\` 
    This means that \`lib/index.js\` was modified in this commit. Note that this is only an example. 
    Then there is a specifier of the lines that were modified. 
    A line starting with \`+\`  means it was added. 
    A line starting with \`-\` means that line was deleted. 
    A line that starts with neither \`+\` nor \`-\` is code given for context and better understanding. 
    It is not part of the diff.
    [...]
    EXAMPLE SUMMARY COMMENTS:
    \`\`\`
    * Raised the amount of returned recordings from \`10\` to \`1001\` [packages/server/recordings_api.ts], [packages/server/constants.ts] 
    * Fixed a typo in the github action name [.github/workflows/gpt-commit-summarizer.yml] 
    * Moved the \`octokit\` initialization to a separate file ([src/octokit.ts], [src/index.ts]) 
    * Added an OpenAI API for completions ([packages/utils/apis/openai.ts]) 
    * Lowered numeric tolerance for test files
    \`\`\`
    Most commits will have fewer comments than this example list. 
    The last comment does not include the file names, 
    because there were more than two relevant files in the hypothetical commit.
    Do not include parts of the example in your summary.
    It is given only as an example of appropriate comments.`,
      `Please summarize the following diff file: \n\n${diff}`,
    ]);
    return response.response.text();
  });
};

export async function summariseCode(doc: Document) {
  console.log("getting summary for", doc.metadata.source);

  if (!doc.pageContent.trim()) {
    console.warn("Empty code content for", doc.metadata.source);
    return "No code content to summarize.";
  }

  return await retry(async () => {
    const code = doc.pageContent.slice(0, 10000); // limit to 10000 characters
    const response = await model.generateContent([
      `You are an intelligent senior software engineer who specialises in onboarding junior software engineers onto project.`,
      `You are onboarding a junior software engineer and explaining to them the purpose of the ${doc.metadata.source} file.
        Here is the code:
        ---
        ${code}
        ---
        Give a summary no more than 100 words of the code above`,
    ]);

    return response.response.text();
  });
}

//this will generate 'embedding' for the imput summary of each code
export async function generateEmbedding(summary: string) {
  if (!summary.trim()) {
    console.warn("Empty summary provided for embedding.");
    return [];
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "text-embedding-004",
    });
    return retry(async () => {
      const result = await model.embedContent(summary);
      return result.embedding.values; // An array of floats (numbers)
    });
  } catch (error) {
    console.error("Failed to generate embedding:", error);
    return [];
  }
}
