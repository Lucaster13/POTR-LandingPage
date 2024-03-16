import Description from "@/components/about/description";
import IconCards from "@/components/about/icon-cards";
import Title from "@/components/about/title";

export default function About() {
  return (
    <main className="h-full w-full py-36 overflow-y-auto">
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col gap-4">
          <Title>Protectors of The Rand: A New Era of Interactive NFTs</Title>
          <Description>
            <span>
              POTR is a limited supply NFT collection that uses the Algorand
              ARC-69 standard.
            </span>
          </Description>
        </div>
        <IconCards />
        [Button: Explore the Collection] [Button: Discover the Lore]
      </div>
    </main>
  );
}
