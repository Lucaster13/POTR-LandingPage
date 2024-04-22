"use client";

import { useState, lazy, useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import Fade from "@/styles/fade";
import { useStore } from "@/lib/store";
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Scene() {
  const store = useStore();
  const splineApp = useRef<Application>();

  return (
    <Spline
      className={Fade(!store.homeSceneIsLoaded, "inset-0 absolute z-0")}
      onLoad={(spline) => {
        setTimeout(() => store.set({ homeSceneIsLoaded: true }), 0);
        splineApp.current = spline;
      }}
      scene="https://prod.spline.design/2qvrhVg1x6Zg7181/scene.splinecode"
    />
  );
}
