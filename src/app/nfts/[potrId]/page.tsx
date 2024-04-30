import Nft from "@/components/nfts/nft";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="relative overflow-x-visible pt-10 flex flex-col gap-6">
      <div className="relative group/header h-24 transition-default">
        <div
          className="absolute inset-0 flex w-full h-fit flex-col group-hover/header:brightness-125 justify-center items-end glass
            rounded-sm py-4 px-10 z-10 border -left-32 group-hover/header:left-0 -skew-x-24 transition-default"
        >
          <h1 className="w-fit h-fit text-4xl tracking-wide font-extrabold text-gradient-primary">
            {metadata.name}
          </h1>
          <h3 className="w-fit h-fit text-lg font-bold text-normal-400">
            Lvl. {metadata.traits.Level}
          </h3>
        </div>
        <Nft
          metadata={metadata}
          className={
            "absolute inset-0 -top-10 hover:cursor-default group-hover/header:rotate-1 group-hover/header:shadow-normal-800 z-10"
          }
          hideHeader
          hoverable
          size={400}
        />
      </div>

      <div className="flex flex-wrap justify-center mx-auto w-1/3 me-72 p-4 text-center border glass rounded-lg z-50 divide-x">
        {Object.entries(metadata.traits)
          .filter(([t]) => t !== "Level")
          .map(([t, tVal]) => (
            <span
              className="text-center px-2 text-lg font-light whitespace-nowrap"
              key={t}
            >
              {t} - {tVal}
            </span>
          ))}
      </div>
    </div>
  );
}
