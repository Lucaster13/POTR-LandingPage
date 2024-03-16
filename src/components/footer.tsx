"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuListLink,
} from "@/components/ui/navigation-menu";
import { DISCORD_URL, Route, X_URL } from "@/lib/routes";
import X from "./icons/x";
import Discord from "./icons/discord";
import { cn } from "@/lib/utils";
import { useStore } from "@/lib/store";

export default function Footer() {
  const isHomePage = useStore((s) => s.isHomePage);
  const className = cn(
    "container z-40 absolute inset-0 py-10 bg-gradient-to-t md:bg-none from-dark flex mt-auto gap-4 items-center justify-center h-fit",
    !isHomePage && "md:bg-gradient-to-t"
  );
  return (
    <div className={className}>
      <NavigationMenu className="justify-center">
        <NavigationMenuList className="text-gradient-primary">
          <NavigationMenuListLink
            href="/"
            className="relative text-md font-extrabold"
            title="POTR"
            noUnderline
          />
          <div className="w-px h-6 inline-block bg-gradient-primary" />
          <NavigationMenuListLink href={X_URL} external noUnderline>
            <X />
          </NavigationMenuListLink>
          <NavigationMenuListLink href={DISCORD_URL} external noUnderline>
            <Discord />
          </NavigationMenuListLink>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
