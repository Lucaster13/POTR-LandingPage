"use client";

import usePotrMetadata from "@/lib/hooks/usePotrMetadata";

export default function NFTs() {
  usePotrMetadata();
  return (
    <main className="h-full overflow-y-auto w-screen mx-auto py-36">
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl lg:w-2/3 text-pretty font-extrabold text-gradient-primary">
            NFTs
          </h2>
        </div>
      </div>
    </main>
  );
}
