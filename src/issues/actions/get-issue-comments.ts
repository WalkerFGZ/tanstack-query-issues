import { GithubIssue } from "../interfaces/issues.interface";
import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers/sleep";

export const getIssueComments = async (
  issueNumber: number
): Promise<GithubIssue[]> => {
  await sleep(1500);

  const { data } = await githubApi.get<GithubIssue[]>(
    `/issues/${issueNumber}/comments`
  );

  return data;
};
