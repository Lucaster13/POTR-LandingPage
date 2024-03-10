"use client";

import { useState, lazy, useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import { fadeable } from "@/styles/fadeable";
import Loading from "./loading";

const Content = lazy(() => import("@/components/home/content"));
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Home() {
  const [sceneVisible, setSceneVisible] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const splineApp = useRef<Application>();

  // loads in UI a second after spline scene to make it more fluid
  useEffect(() => {
    const t = setTimeout(() => setSceneVisible(true), 1000);
    return () => clearTimeout(t);
  }, [splineLoaded]);

  return (
    <main>
      <Content faded={!sceneVisible} splineApp={splineApp.current} />
      <Spline
        className={fadeable({
          className: `inset-0 absolute z-0`,
          faded: !sceneVisible,
        })}
        onLoad={(spline) => {
          setSplineLoaded(true);
          splineApp.current = spline;
        }}
        scene="https://prod.spline.design/2qvrhVg1x6Zg7181/scene.splinecode"
      />

      <Loading faded={sceneVisible} />
    </main>
  );
}
