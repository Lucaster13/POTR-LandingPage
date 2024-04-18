"use client";

import usePotrMetadata from "@/lib/hooks/usePotrMetadata";
import NftsPage from "./nfts-page";

export default function NftsList() {
  usePotrMetadata();

  return (
    <div className="flex flex-col items-center gap-20">
      <NftsPage />
    </div>
  );
}
