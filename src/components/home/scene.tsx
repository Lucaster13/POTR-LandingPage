"use client";

import { lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Scene() {
  return (
    <Spline
      className={"inset-0 absolute z-0"}
      scene="https://prod.spline.design/2qvrhVg1x6Zg7181/scene.splinecode"
    />
  );
}
