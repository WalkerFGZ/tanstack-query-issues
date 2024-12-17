import { getIssue } from "../actions/get-issue";
import { getIssueComments } from "../actions/get-issue-comments";
import { useQuery } from "@tanstack/react-query";

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  // const commentsQuery = useQuery({
  //   queryKey: ["issues", issueNumber, "comments"],
  //   queryFn: () => getIssueComments(issueNumber),
  //   staleTime: 1000 * 60 * 5,
  //   retry: 1,
  // });

  const commentsQuery = useQuery({
    queryKey: ["issues", issueQuery.data?.number, "comments"],
    queryFn: () => getIssueComments(issueQuery.data!.number),
    staleTime: 1000 * 60 * 5,
    retry: false,
    enabled: issueQuery.data !== undefined,
  });
  return {
    issueQuery,
    commentsQuery,
  };
};
