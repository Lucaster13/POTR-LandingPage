"use client";

import Footer from "@/components/footer";
import Loading from "./loading";
import Scene from "@/components/home/scene";
import Nav from "@/components/nav";
import { useStore } from "@/lib/store";
import { lazy } from "react";
import PageLayout from "@/components/page-layout";

const Content = lazy(() => import("@/components/home/content"));

export default function Home() {
  const homeSceneIsLoaded = useStore((s) => s.homeSceneIsLoaded);

  return (
    <PageLayout>
      <Content faded={!homeSceneIsLoaded} />
      <Scene />
      <Loading faded={homeSceneIsLoaded} />
    </PageLayout>
  );
}
