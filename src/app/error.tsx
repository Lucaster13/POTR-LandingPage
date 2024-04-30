"use client";

import { WifiOff } from "lucide-react";

export default function ErrorPage() {
  return (
    <main
      className={
        "h-dynamic-screen w-screen flex items-center flex-col gap-12 justify-center bg-dark"
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

      <div className="flex gap-2 text-normal-400 opacity-75">
        Currently Offline
        <WifiOff />
      </div>
    </main>
  );
}
