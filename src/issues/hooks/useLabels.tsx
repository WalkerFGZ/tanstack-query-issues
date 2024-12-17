import { getLabels } from "../actions";
import { useQuery } from "@tanstack/react-query";
import { GithubLabel } from "../interfaces/label.interface";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hour state time
    placeholderData: [
      {
        id: 739777675,
        node_id: "MDU6TGFiZWw3Mzk3Nzc2NzU=",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
        name: "Component: Component API",
        color: "d4c5f9",
        default: false,
      } satisfies GithubLabel,
      {
        id: 69105383,
        node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        name: "Browser: IE",
        color: "c7def8",
        default: false,
      } satisfies GithubLabel,
    ],
    // initialData: [
    //   {
    //     id: 739777675,
    //     node_id: "MDU6TGFiZWw3Mzk3Nzc2NzU=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
    //     name: "Component: Component API",
    //     color: "d4c5f9",
    //     default: false,
    //   } satisfies GithubLabel,
    //   {
    //     id: 69105383,
    //     node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
    //     url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
    //     name: "Browser: IE",
    //     color: "c7def8",
    //     default: false,
    //   } satisfies GithubLabel,
    // ],
  });
  return { labelsQuery };
};
