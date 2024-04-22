"use client";

import { Button } from "../ui/button";
import { DISCORD_URL } from "@/lib/routes";
import { BaseProps, cn } from "@/lib/utils";
import ArrowGhostButton from "../ui/arrow-ghost-button";

export type CtaProps = { exploreCollection?: boolean } & BaseProps;

export default function Cta({ className, exploreCollection }: CtaProps) {
  const cName = cn(
    "flex gap-4 z-10 flex-col md:flex-row items-center justify-center lg:justify-start md:items-start",
    className
  );
  return (
    <div className={cName}>
      <Button>MINT A POTR</Button>
      <ArrowGhostButton href={DISCORD_URL} external>
        ENTER THE KINGDOM
      </ArrowGhostButton>
      {exploreCollection && (
        <ArrowGhostButton href={"/nfts"}>
          EXPLORE THE COLLECTION
        </ArrowGhostButton>
      )}
    </div>
  );
}
