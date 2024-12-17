import { GithubLabel } from "../interfaces/label.interface";
import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers/sleep";

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(1500);
  const { data } = await githubApi.get<GithubLabel[]>("/labels");
  console.log(data);
  return data;
};