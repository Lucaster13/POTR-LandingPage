"use client";

import Footer from "@/components/footer";
import Loading from "./loading";
import Scene from "@/components/home/scene";
import Nav from "@/components/nav";
import { useStore } from "@/lib/store";
import { lazy } from "react";

const Content = lazy(() => import("@/components/home/content"));

export default function Home() {
  const homeSceneIsLoaded = useStore((s) => s.homeSceneIsLoaded);

  return (
    <main className="overflow-x-visible relative h-full">
      <div className="container relative h-full">
        <Nav />
        <Footer />
        <Content faded={!homeSceneIsLoaded} />
      </div>
      <Scene />
      <Loading faded={homeSceneIsLoaded} />
    </main>
  );
}
