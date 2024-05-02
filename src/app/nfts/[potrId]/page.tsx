import Nft, { potrClassVariants } from "@/components/nfts/nft";
import { cn } from "@/lib/utils";
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
    <div className="relative overflow-x-visible flex flex-col group">
      <div
        className={cn(
          "relative flex w-full h-fit flex-col peer/header group-hover:brightness-125 justify-center items-end glass",
          "rounded-sm py-4 px-10 z-10 border -left-16 group-hover:left-0 -skew-x-24 transition-default",
          potrClassVariants({ class: metadata.traits.Class }),
          "bg-gradient-to-bl from-normal-900 from-35%"
        )}
      >
        <h1 className="text-7xl tracking-wide font-extrabold text-gradient-primary">
          {metadata.name}
        </h1>
        <h3 className="text-lg font-bold text-secondary">
          Lvl. {metadata.traits.Level}
        </h3>
      </div>
      <div className="flex relative">
        <Nft
          potrId={potrId}
          className="-top-24 hover:cursor-default hover:scale-105 peer/nft group-hover:rotate-1 z-10"
          hideHeader
          hoverable
          size={400}
        />
        <div className="flex relative -left-48 peer-hover/nft:left-0 hover:left-0 h-fit transition-default">
          <div className="flex p-4 rounded-lg flex-wrap flex-col items-center h-fit w-fit gap-2">
            {Object.entries(metadata.traits)
              .filter(([t]) => t !== "Level")
              .map(([t, tVal]) => (
                <span
                  className="whitespace-nowrap flex text-center justify-end w-full hover:text-gradient-primary
                 transition-default glass border px-2 py-1 rounded-lg"
                  key={t}
                >
                  {t} | {tVal}
                </span>
              ))}
          </div>
          <div className="relative glass border w-fit px-10 py-1 rounded-lg h-fit my-auto rotate-90 -left-12">
            <span className="text-gradient-primary font-extrabold tracking-wider">
              TRAITS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
