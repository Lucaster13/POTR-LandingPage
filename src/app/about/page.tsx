import IconCards from "@/components/about/icon-cards";
import Cta from "@/components/home/cta";
import Link from "next/link";

export default function About() {
  return (
    <main className="h-full w-full py-36 overflow-y-auto">
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl lg:w-2/3 text-pretty font-extrabold text-gradient-primary">
            Protectors of The Rand: A New Era of Interactive NFTs
          </h2>
          <span className="text-lg lg:w-2/3 text-pretty font-bold text-normal-300">
            POTR is a limited supply mutable-trait NFT collection that uses the
            Algorand ARC-69 standard.
          </span>
        </div>
        <IconCards />
        <Cta
          className="md:flex-col mx-auto md:items-center"
          exploreCollection
        />
      </div>
    </main>
  );
}
