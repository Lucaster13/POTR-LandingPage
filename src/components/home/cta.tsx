"use client";

import { Application } from "@splinetool/runtime";
import RightArrow from "../right-arrow";
import { Button } from "../ui/button";
import { DISCORD_URL } from "@/lib/routes";
import { cn, openNewTab } from "@/lib/utils";
import { BaseProps } from "@/styles/base";
import ArrowGhostButton from "../arrow-ghost-button";

export type CtaProps = { exploreCollection?: boolean } & BaseProps;

export default function Cta({ className, exploreCollection }: CtaProps) {
  const cName = cn(
    "flex gap-4 z-10 flex-col md:flex-row items-center justify-center lg:justify-start md:items-start",
    className
  );
  return (
    <div className={cName}>
      <Button>MINT A POTR</Button>
      <ArrowGhostButton href={DISCORD_URL}>ENTER THE KINGDOM</ArrowGhostButton>
      {exploreCollection && (
        <ArrowGhostButton href={DISCORD_URL}>
          EXPLORE THE COLLECTION
        </ArrowGhostButton>
      )}
    </div>
  );
}
