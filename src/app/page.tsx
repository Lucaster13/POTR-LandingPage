import { lazy } from "react";
import PageLayout from "@/components/page-layout";
import { ROUTE_CONFIG, Route } from "@/lib/routes";

const homeRouteConfig = ROUTE_CONFIG[Route.HOME];

const Content = lazy(() => import("@/components/home/content"));
const Scene = lazy(() => import("@/components/home/scene"));

export default function HomePage() {
  return (
    <PageLayout {...homeRouteConfig} className="py-36">
      <Content />
      <Scene />
    </PageLayout>
  );
}
