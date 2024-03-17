"use client";

import { useStore } from "@/lib/store";
import Spline from "@splinetool/react-spline";

export default function CoinDisplayCase() {
  const store = useStore();
  return (
    <Spline
      scene="https://prod.spline.design/580N2k3XZZ0NCCBV/scene.splinecode"
      onLoad={() => store.set({ coinDisplayIsLoaded: true })}
    />
  );
}
