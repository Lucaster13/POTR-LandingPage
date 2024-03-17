import CoinDisplayCase from "@/components/about/coin-display-case";
import IconCards from "@/components/about/icon-cards";
import Cta from "@/components/home/cta";

export default function About() {
  return (
    <main className="h-full overflow-y-auto w-screen mx-auto py-36">
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl lg:w-2/3 text-pretty font-extrabold text-gradient-primary">
            Protectors of The Rand NFTs
          </h2>
          <span className="text-lg lg:w-1/2  text-pretty font-bold text-normal-300">
            POTR is a limited supply mutable-trait NFT collection that uses the
            Algorand ARC-69 standard.
          </span>
        </div>
        <IconCards />
        <Cta
          className="md:flex-col relative md:items-center my-10 mx-auto w-fit"
          exploreCollection
        />
      </div>
    </main>
  );
}
