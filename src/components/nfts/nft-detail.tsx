import Nft from "./nft";
import { Potr } from "potr-common";
import { cn } from "@/lib/utils";

type NftDetailProps = {
  asaId: number;
  isFullScreen?: boolean;
};

export default async function NftDetail({
  asaId,
  isFullScreen,
}: NftDetailProps) {
  const metadata = await Potr.getMetadata(asaId);

  return (
    <div
      className={cn(
        "w-2/3 flex justify-center items-center",
        isFullScreen && "w-full h-full"
      )}
    >
      <div className="flex flex-col gap-6">
        <h2>{metadata.name}</h2>
        <Nft metadata={metadata} />
      </div>
    </div>
  );
}
