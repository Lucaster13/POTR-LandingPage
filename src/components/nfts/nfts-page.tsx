"use client";

import { PotrAssetMetadata } from "potr-common";
import { BaseProps, cn } from "@/lib/utils";
import useSearchParam from "@/lib/hooks/useSearchParam";
import Link from "next/link";
import Nft from "./nft";
import useMetadata from "@/lib/hooks/useMetadata";
import Spinner from "../icons/spinner";
import useHref from "@/lib/hooks/useHref";
import Fade from "@/styles/fade";

export default function NftsPage({
  metadata,
}: {
  metadata: PotrAssetMetadata[];
}) {
  const { value: potrAsaId } = useSearchParam("potrAsaId");

  return (
    <div className={cn("flex items-center flex-1 overflow-visible")}>
      <NftsList metadata={metadata.slice(0, 5)} potrAsaId={Number(potrAsaId)} />
      {potrAsaId && <NftDetail id={Number(potrAsaId)} />}
    </div>
  );
}

function NftsList({
  metadata,
  potrAsaId,
}: {
  metadata: PotrAssetMetadata[];
  potrAsaId?: number;
}) {
  return (
    <div
      className={Fade(
        false,
        "flex justify-center gap-1 h-full overflow-y-auto mx-auto",
        potrAsaId && "w-1/3 mx-0"
      )}
    >
      {metadata.map((md) => (
        <NftLink
          metadata={md}
          key={md.id}
          className={cn(potrAsaId === md.id && "bg-slate-300", "h-fit")}
        />
      ))}
    </div>
  );
}

function NftLink({
  metadata,
  className,
}: { metadata: PotrAssetMetadata } & BaseProps) {
  const potrUnitNameSearchParam = useSearchParam("potrUnitName");
  const potrAsaIdSearchParam = useSearchParam("potrAsaId");

  // create href for link
  const href = useHref(
    [
      potrUnitNameSearchParam.createQueryString(metadata.unitName),
      potrAsaIdSearchParam.createQueryString(metadata.id.toString()),
    ].join("&")
  );

  return (
    <Link href={href} className={className}>
      <Nft metadata={metadata} rounded size={80} />
    </Link>
  );
}

function NftDetail({ id }: { id: number }) {
  const { metadata, isLoading } = useMetadata(id);

  return (
    <div className="w-2/3 flex justify-center items-center">
      <div className="">
        <h2>
          {isLoading && <Spinner />}
          {metadata && metadata.name}
        </h2>
        {metadata && <Nft metadata={metadata} />}
      </div>
    </div>
  );
}
