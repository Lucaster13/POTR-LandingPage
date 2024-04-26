import { BaseProps, cn } from "@/lib/utils";
import Fade from "@/styles/fade";
import Link from "next/link";
import { PotrAssetMetadata } from "potr-common";
import Nft from "./nft";
import { Route } from "@/lib/routes";
import { Suspense } from "react";
import Spinner from "../icons/spinner";

type NftListProps = {
  metadata: PotrAssetMetadata[];
  selectedPotrAsaId?: number;
  pageNum?: number;
};

export default function NftList({
  metadata,
  selectedPotrAsaId,
  pageNum,
}: NftListProps) {
  return (
    <div
      className={Fade(
        false,
        "flex justify-center gap-1 h-full overflow-y-auto mx-auto",
        selectedPotrAsaId && "w-1/3 mx-0"
      )}
    >
      <Suspense fallback={<Spinner />}>
        {metadata.map((md) => (
          <NftListItem
            metadata={md}
            key={md.id}
            isActive={md.id === selectedPotrAsaId}
          />
        ))}
      </Suspense>
    </div>
  );
}

function NftListItem({
  metadata,
  isActive,
}: { metadata: PotrAssetMetadata; isActive?: boolean } & BaseProps) {
  return (
    <Link
      href={`${Route.NFTS}/${metadata.id}`}
      className={cn(isActive && "bg-slate-300", "h-fit")}
    >
      <Nft metadata={metadata} rounded size={80} />
    </Link>
  );
}
