import { getIssues } from "../actions/get-issues";
import { useQuery } from "@tanstack/react-query";

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: getIssues,
    staleTime: 1000 * 60 * 5,
  });

  return {
    issuesQuery,
  };
};
