import { lazy } from "react";
import { RouteObject } from "react-router";

const LandingPage = lazy(() => import("./pages/landing"));

const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
];

export default ROUTES;
