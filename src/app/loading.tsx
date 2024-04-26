"use client";

import Spinner from "@/components/icons/spinner";
import { useStore } from "@/lib/store";
import Fade from "@/styles/fade";

export default function Loading() {
  return (
    <section
      className={
        "absolute inset-0 h-dynamic-screen w-screen flex items-center flex-col gap-12 justify-center transition-opacity bg-base duration-1000"
      }
    >
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-wrap font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-primary">
          PROTECTORS
          <br />
          OF THE
          <br />
          RAND
        </span>
      </h1>
      <Spinner />
    </section>
  );
}
