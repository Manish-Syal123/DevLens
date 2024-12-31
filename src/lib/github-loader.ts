import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";
import { Document } from "@langchain/core/documents";
import { generateEmbedding, summariseCode } from "./gemini";
import { db } from "@/server/db";
import { getDefaultBranch } from "./github";
import { Octokit } from "octokit";

const gitFileCount = async (
  path: string,
  octokit: Octokit,
  githubOwner: string,
  githubRepo: string,
  acc: number = 0,
) => {
  const { data } = await octokit.rest.repos.getContent({
    owner: githubOwner,
    repo: githubRepo,
    path,
  });
  if (!Array.isArray(data) && data.type === "file") {
    return acc + 1;
  }
  if (Array.isArray(data)) {
    let fileCount = 0;
    const directories: string[] = [];

    for (const item of data) {
      if (item.type === "dir") {
        directories.push(item.path);
      } else {
        fileCount++;
      }
    }

    if (directories.length > 0) {
      const directoryCounts = await Promise.all(
        directories.map((dirPath) =>
          gitFileCount(dirPath, octokit, githubOwner, githubRepo, 0),
        ),
      );
      fileCount += directoryCounts.reduce((a, count) => a + count, 0);
    }

    return acc + fileCount;
  }

  return acc;
};
export const checkCredits = async (githubUrl: string, githubToken?: string) => {
  //find out how many files are in the repo
  const octokit = new Octokit({
    auth: githubToken,
  });
  const githubOwner = githubUrl.split("/")[3];
  const githubRepo = githubUrl.split("/")[4];
  if (!githubOwner || !githubRepo) {
    return 0;
  }

  const fileCount = await gitFileCount("", octokit, githubOwner, githubRepo, 0);
  return fileCount;
};

// Load GitHub repo files dynamically based on the default branch
export const loadGithubRepo = async (
  githubUrl: string,
  githubToken?: string,
) => {
  const [owner, repo] = githubUrl.split("/").slice(-2);
  if (!owner || !repo) {
    throw new Error("Invalid GitHub URL");
  }

  // Dynamically fetch the default branch
  const branch = await getDefaultBranch(owner, repo, githubToken);

  const loader = new GithubRepoLoader(githubUrl, {
    accessToken: githubToken || "",
    branch,
    ignoreFiles: [
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
      "npm-lock.yaml",
      "bun.lockb",
      "**/*.lock",
      "**/node_modules/**",
    ],
    recursive: true,
    unknown: "warn",
    maxConcurrency: 5,
  });

  const doc = await loader.load();
  return doc;
};

export const indexGithubRepo = async (
  projectId: string,
  githubUrl: string,
  githubToken?: string,
) => {
  const docs = await loadGithubRepo(githubUrl, githubToken);
  const allEmbeddings = await generateEmbeddings(docs);

  await Promise.allSettled(
    allEmbeddings.map(async (embedding, index) => {
      console.log(`Processing ${index + 1} of ${allEmbeddings.length}`);
      if (!embedding) return;

      const sourceCodeEmbedding = await db.sourceCodeEmbedding.create({
        data: {
          summary: embedding.summary,
          sourceCode: embedding.sourceCode,
          fileName: embedding.fileName,
          projectId,
        },
      });

      await db.$executeRaw`
        UPDATE "SourceCodeEmbedding"
        SET "summaryEmbedding" = ${embedding.embedding}::vector
        WHERE "id" = ${sourceCodeEmbedding.id}
      `;
    }),
  );
};

const generateEmbeddings = async (docs: Document[]) => {
  return await Promise.all(
    docs.map(async (doc) => {
      const summary = await summariseCode(doc);
      const embedding = await generateEmbedding(summary);
      return {
        summary,
        embedding,
        sourceCode: JSON.parse(JSON.stringify(doc.pageContent)),
        fileName: doc.metadata.source,
      };
    }),
  );
};
