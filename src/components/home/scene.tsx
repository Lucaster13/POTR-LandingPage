"use client";

import { useState, lazy, useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import { fadeable } from "@/styles/fadeable";
import { useStore } from "@/lib/store";
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Scene() {
  const store = useStore();
  const splineApp = useRef<Application>();

  return (
    <Spline
      className={fadeable({
        className: `inset-0 absolute z-0`,
        faded: !store.splineIsLoaded,
      })}
      onLoad={(spline) => {
        setTimeout(() => store.set({ splineIsLoaded: true }), 1000);
        splineApp.current = spline;
      }}
      scene="https://prod.spline.design/2qvrhVg1x6Zg7181/scene.splinecode"
    />
  );
}
