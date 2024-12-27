import { useEffect, useState } from "react";

import { State } from "../interfaces/issues.interface";
import { getIssues } from "../actions/get-issues";
import { useQuery } from "@tanstack/react-query";

interface Props {
  state: State;
  selectedLabels: string[];
}
export const useIssues = ({ state, selectedLabels }: Props) => {
  const [page, setPage] = useState(1);
  const issuesQuery = useQuery({
    queryKey: ["issues", { state, selectedLabels, page }],
    queryFn: () => getIssues(state, selectedLabels, page),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    setPage(1);
  }, [state, selectedLabels]);

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return;

    setPage((prev) => prev + 1);
  };

  const previousPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  return {
    issuesQuery,
    page,
    nextPage,
    previousPage,
  };
};
