import { GoogleGenerativeAI } from "@google/generative-ai";

export const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = gemini.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const aiSummariseCommit = async (diff: string) => {
  // URL example for reference : (`${githubUrl}/commit/${commitHash}.diff`)
  // eg: https://github.com/Manish-Syal123/AI-Mock-Interviewer/commit/4a790e142681de3ed06f79d5d826e2c6c12f8c8a.diff

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
};

// Example usage
// console.log(
//   await aiSummariseCommit(
//     `diff --git a/README.md b/README.md
// index 0dc9ea2..a9644e6 100644
// --- a/README.md
// +++ b/README.md
// @@ -14,6 +14,10 @@ pnpm dev
// bun dev \`\`\`

// +### Check Payment integration Flow
// +
// +Open [https://app.eraser.io/workspace/VJpvrpJEdMU9AEjBXPrw](app.eraser.io) with your browser to see the Payment integration Flow.
// +
// Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
// You can start editing the page by modifying \`app/page.js\`. The page auto-updates as you edit the file.`,
//   ),
// );
