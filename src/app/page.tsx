"use client";

import Loading from "./loading";
import Scene from "@/components/home/scene";
import { useStore } from "@/lib/store";
import { lazy } from "react";

const Content = lazy(() => import("@/components/home/content"));

export default function Home() {
  const splineIsLoaded = useStore((s) => s.splineIsLoaded);

  return (
    <main className="overflow-hidden">
      <Content faded={!splineIsLoaded} />
      <Scene />
      <Loading faded={splineIsLoaded} />
    </main>
  );
}
