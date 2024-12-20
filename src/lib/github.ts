import { db } from "@/server/db";
import { Octokit } from "octokit";
import axios from "axios";
import { aiSummariseCommit } from "./gemini";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

type Response = {
  commitMessage: string;
  commitHash: string;
  commitAuthorName: string;
  commitAuthorAvatar: string;
  commitDate: string;
};

// Get the default branch of a repository
export const getDefaultBranch = async (
  owner: string,
  repo: string,
  githubToken?: string,
) => {
  const response = await octokit.rest.repos.get({
    owner,
    repo,
  });

  return response.data.default_branch || "main"; // Fallback to 'main'
};

export const getCommitHashes = async (
  githubUrl: string,
  githubToken?: string,
): Promise<Response[]> => {
  const [owner, repo] = githubUrl.split("/").slice(-2);
  if (!owner || !repo) {
    throw new Error("Invalid GitHub URL");
  }

  const branch = await getDefaultBranch(owner, repo, githubToken);
  const { data } = await octokit.rest.repos.listCommits({
    owner,
    repo,
    sha: branch,
  });

  const sortedCommits = data.sort(
    (a: any, b: any) =>
      new Date(b.commit.author.date).getTime() -
      new Date(a.commit.author.date).getTime(),
  );

  return sortedCommits.slice(0, 10).map((commit: any) => ({
    commitHash: commit.sha,
    commitMessage: commit.commit.message ?? "",
    commitAuthorName: commit.commit?.author?.name ?? "",
    commitAuthorAvatar: commit?.author?.avatar_url ?? "",
    commitDate: commit.commit?.author?.date ?? "",
  }));
};

export const pollCommits = async (projectId: string) => {
  const { project, githubUrl } = await fetchProjectGithubUrl(projectId);
  const commitHashes = await getCommitHashes(githubUrl);
  const unprocessedCommits = await filterUnprocessedCommits(
    projectId,
    commitHashes,
  );

  const summaryResponses = await Promise.allSettled(
    unprocessedCommits.map(async (commit) => {
      return await summariseCommit(githubUrl, commit.commitHash);
    }),
  );

  const summaries = summaryResponses.map((response) => {
    if (response.status === "fulfilled") {
      return response.value as string;
    }
    return "";
  });

  const commits = await db.commit.createMany({
    data: summaries.map((summary, index) => ({
      projectId,
      commitHash: unprocessedCommits[index]!.commitHash,
      commitMessage: unprocessedCommits[index]!.commitMessage,
      commitAuthorName: unprocessedCommits[index]!.commitAuthorName,
      commitAuthorAvatar: unprocessedCommits[index]!.commitAuthorAvatar,
      commitDate: unprocessedCommits[index]!.commitDate,
      summary,
    })),
  });

  return commits;
};

const summariseCommit = async (githubUrl: string, commitHash: string) => {
  const { data } = await axios.get(`${githubUrl}/commit/${commitHash}.diff`, {
    headers: {
      Accept: "application/vnd.github.v3.diff",
    },
  });
  return (await aiSummariseCommit(data)) || "";
};

const fetchProjectGithubUrl = async (projectId: string) => {
  try {
    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
      select: {
        id: true,
        githubUrl: true,
      },
    });

    if (!project) {
      throw new Error(`No project found with ID: ${projectId}`);
    }

    if (!project?.githubUrl) throw new Error("Project has no Github URL");
    return { project, githubUrl: project.githubUrl };
  } catch (error) {
    throw error;
  }
};

const filterUnprocessedCommits = async (
  projectId: string,
  commitHashes: Response[],
) => {
  const processedCommits = await db.commit.findMany({
    where: { projectId },
  });

  return commitHashes.filter(
    (commit) =>
      !processedCommits.some(
        // (processedCommit) =>
        //   processedCommit.commitHash === commit.commitHash &&
        //   processedCommit.id === projectId,
        (processedCommit) => processedCommit.commitHash === commit.commitHash,
      ),
  );
};
