import { BaseProps, cn } from "@/lib/utils";
import Link from "next/link";
import { PotrAssetMetadata } from "potr-common";
import Nft from "./nft";
import { Route } from "@/lib/routes";
import NftPagination from "./nft-pagination";

type NftListProps = {
  metadata: PotrAssetMetadata[];
  selectedPotrAsaId?: number;
  pageNum?: number;
};

const NFT_LIST_PAGE_SIZE = 50;
const makePageSlice = (pageNum: number) => [
  (pageNum - 1) * NFT_LIST_PAGE_SIZE,
  pageNum * NFT_LIST_PAGE_SIZE,
];

export default function NftList({
  metadata,
  selectedPotrAsaId,
  pageNum = 1,
}: NftListProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center gap-10 h-full w-full ",
        selectedPotrAsaId && "w-1/3 mx-0" // show a split view when a potr is selected
      )}
    >
      <NftPagination
        pageNum={pageNum}
        numPages={Math.ceil(metadata.length / NFT_LIST_PAGE_SIZE)}
      />
      <div className="flex gap-2 flex-wrap justify-center">
        {metadata.slice(...makePageSlice(pageNum)).map((md) => (
          <NftListItem
            metadata={md}
            key={md.id}
            isActive={md.id === selectedPotrAsaId}
          />
        ))}
      </div>
      <NftPagination
        pageNum={pageNum}
        numPages={Math.ceil(metadata.length / NFT_LIST_PAGE_SIZE)}
      />
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
      className={cn(isActive && "bg-slate-300", "h-fit w-fit")}
    >
      <Nft metadata={metadata} size={160} />
    </Link>
  );
}
