import { IssueView, ListView } from "../issues/views";
import { Navigate, createBrowserRouter } from "react-router-dom";

import { GitApp } from "../GitApp";
import { ListViewInfinite } from "../issues/views/ListViewInfinite";

export const router = createBrowserRouter([
  {
    path: "/issues",
    element: <GitApp />,
    children: [
      { path: "list", element: <ListView /> },
      { path: "list-infinite", element: <ListViewInfinite /> },
      { path: "issue/:issueNumber", element: <IssueView /> },
      { path: "*", element: <Navigate to="list" /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to="issues/list" />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);
