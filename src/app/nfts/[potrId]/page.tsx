import Nft, { NftHeader } from "@/components/nfts/nft";
import { Potr } from "potr-common";

type NftDetailsPageProps = {
  params: {
    potrId?: string;
  };
};

export default async function NftDetailsPage({ params }: NftDetailsPageProps) {
  const potrId = Number(params.potrId) || 0;
  const metadata = await Potr.getMetadata(potrId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-4 order-2 md:order-1">
        <div className="relative flex glass rounded-lg p-4 border">
          <NftHeader className="relative">
            <span className="text-xl tracking-wide">{metadata.name}</span>
          </NftHeader>
          <NftHeader className="ms-auto relative">
            <span className="text-xl tracking-wide">
              Lvl. {metadata.traits.Level}
            </span>
          </NftHeader>
        </div>
        <div className="flex flex-col glass rounded-lg border p-4 divide-y divide-normal-600">
          {Object.entries(metadata.traits)
            .filter(([t]) => t !== "Level")
            .map(([t, tVal]) => (
              <div className="flex py-4 items-center px-6" key={t}>
                <NftHeader className="relative">
                  <span className="text-lg tracking-wide">{t}:</span>
                </NftHeader>
                <span className="ms-auto text-lg tracking-wide">{tVal}</span>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-center items-center order-1 md:order-2">
        <Nft metadata={metadata} hoverable={false} hideHeader size={400} />
      </div>
    </div>
  );
}
