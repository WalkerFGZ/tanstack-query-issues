import { State } from "../interfaces/issues.interface";
import { getIssues } from "../actions/get-issues";
import { useQuery } from "@tanstack/react-query";

interface Props {
  state: State;
  selectedLabels: string[];
}
export const useIssues = ({ state, selectedLabels }: Props) => {
  const issuesQuery = useQuery({
    queryKey: ["issues", { state, selectedLabels }],
    queryFn: () => getIssues(state, selectedLabels),
    staleTime: 1000 * 60 * 5,
  });

  return {
    issuesQuery,
  };
};
