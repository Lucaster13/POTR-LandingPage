"use client";

import Link from "next/link";
import BasicCard, { BasicCardProps } from "../basic-card";
import {
  CircuitBoard,
  Crown,
  FileBadge,
  Goal,
  LucideIcon,
  Swords,
} from "lucide-react";

export const enum IconCardIconType {
  EVOLVE = "evolve",
  SUMMON = "summon",
  GATHER = "gather",
  EQUIP = "equip",
  TRAIN = "train",
}

const ICONS: Record<IconCardIconType, LucideIcon> = {
  evolve: Crown,
  gather: FileBadge,
  summon: CircuitBoard,
  equip: Swords,
  train: Goal,
};

export type IconCardProps = {
  icon: IconCardIconType;
} & Omit<BasicCardProps, "header">;

const $POTRLink = (
  <Link href="" className="text-gradient-primary text-nowrap inline w-fit">
    $POTR
  </Link>
);

/* TODO: Add learn more link */
const $POTRLearnMoreLink = (
  <Link href="" className="text-gradient-primary text-nowrap inline w-fit">
    Learn More
  </Link>
);

/* TODO: Add rand kingdom link */
const PotrAppLink = (
  <Link href="" className="text-gradient-primary text-nowrap inline w-fit">
    The Rand Kingdom
  </Link>
);

const CARD_PROPS: IconCardProps[] = [
  {
    icon: IconCardIconType.SUMMON,
    content: (
      <>
        Your POTR can be summoned in {PotrAppLink} through a secure Algorand
        smart contract. Each POTR is minted at level 1 with base traits.
      </>
    ),
  },
  {
    icon: IconCardIconType.GATHER,
    content: (
      <>
        {$POTRLink} is the currency used throughout The Rand Kingdom. It can be
        earned by completing quests or bought through various means, choose your
        path. {$POTRLearnMoreLink}
      </>
    ),
  },
  {
    icon: IconCardIconType.TRAIN,
    content: (
      <>
        Use {$POTRLink} to level up your NFT, unlocking new areas of The Rand
        Kingdom.
      </>
    ),
  },
  {
    icon: IconCardIconType.EQUIP,
    content: (
      <>
        {$POTRLink} can also be used to acquire new traits and consumables to
        use on your quests.
      </>
    ),
  },
  {
    icon: IconCardIconType.EVOLVE,
    content: (
      <>
        On rare occasions POTRs may have the opportunity to evolve if the owner
        chooses to do so.
      </>
    ),
  },
];

export default function IconCards() {
  return (
    <section className="flex gap-16 flex-wrap justify-center">
      {CARD_PROPS.map((p) => (
        <IconCard key={p.icon} {...p} />
      ))}
    </section>
  );
}

function IconCard({ icon, ...props }: IconCardProps) {
  const Icon = ICONS[icon];

  return (
    <BasicCard
      {...props}
      header={icon.toUpperCase()}
      content={
        <div className="flex flex-col items-center h-fit">
          <span className="h-40">{props.content}</span>
          <Icon className="my-4 h-16 w-16 stroke-[0.03rem] my-auto stroke-[url(#gradient-primary)] fill-none animate-icon-stroke" />
        </div>
      }
    />
  );
}
