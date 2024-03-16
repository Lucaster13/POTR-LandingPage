import BasicCard, { BasicCardProps } from "@/components/basic-card";
import { cn } from "@/lib/utils";

const CARD_PROPS: BasicCardProps[] = [
  {
    header: "TRAIN",
    content: `At Protectors of The Rand, we're pioneering the fusion of NFT
    collectibles with interactive narratives on the Algorand
    blockchain. Our NFTs are more than art; they're heroes in an
    immersive realm where your strategy and choices craft the saga.`,
  },
  {
    header: "EQUIP",
    content: `Crafted with the nostalgia of pixel art and powered by
  blockchain's ingenuity, our NFTs are your entry into
  Protectors of The Rand's vivid landscape. We've created
  a space where the Algorand community's passion for technology
  and storytelling converge.`,
  },
  {
    header: "Your Journey Awaits",
    content: `Our ecosystem is a crucible of innovation — every hero's tale
  is unique, shaped by quests and the community's wisdom. As
  you embark on this odyssey, your NFT evolves, celebrating your
  legacy within Protectors of The Rand.`,
  },
];

export default function About() {
  return (
    <main className="h-full w-full py-36 overflow-y-auto">
      <div className="container flex flex-col gap-[8rem]">
        <Title>Protectors of The Rand: A New Era of Interactive NFTs</Title>
        <div className="flex gap-16 flex-wrap justify-center">
          {CARD_PROPS.map((props) => (
            <BasicCard key={props.header?.toString()} {...props} />
          ))}
        </div>
        [Button: Explore the Collection] [Button: Discover the Lore]
      </div>
    </main>
  );
}

function Title({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-5xl lg:w-2/3 text-pretty font-extrabold text-gradient-primary",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
