import { lazy } from "react";
import PageTemplate from "@/components/ui/templates/page";
import { ROUTE_CONFIG, Route } from "@/lib/routes";

const rootRouteConfig = ROUTE_CONFIG[Route.ROOT];

const Content = lazy(() => import("@/components/home/content"));
const Scene = lazy(() => import("@/components/home/scene"));

export default function RootPage() {
  return (
    <PageTemplate {...rootRouteConfig} className="py-36">
      <Content />
      <Scene />
    </PageTemplate>
  );
}
