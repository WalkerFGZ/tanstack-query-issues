import { State } from "../interfaces/issues.interface";
import { getIssues } from "../actions/get-issues";
import { useQuery } from "@tanstack/react-query";

interface Props {
  state: State;
}
export const useIssues = ({ state }: Props) => {
  const issuesQuery = useQuery({
    queryKey: ["issues", { state }],
    queryFn: () => getIssues(state),
    staleTime: 1000 * 60 * 5,
  });

  return {
    issuesQuery,
  };
};
