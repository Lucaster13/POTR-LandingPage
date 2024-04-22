"use client";

import Loading from "./loading";
import Scene from "@/components/home/scene";
import { useStore } from "@/lib/store";
import { lazy } from "react";
import PageLayout from "@/components/page-layout";
import { ROUTE_CONFIG, Route } from "@/lib/routes";

const Content = lazy(() => import("@/components/home/content"));

export default function Home() {
  const homeSceneIsLoaded = useStore((s) => s.homeSceneIsLoaded);

  return (
    <PageLayout {...ROUTE_CONFIG[Route.HOME]}>
      <Content fadeOut={!homeSceneIsLoaded} />
      <Scene />
      <Loading fadeOut={homeSceneIsLoaded} />
    </PageLayout>
  );
}
