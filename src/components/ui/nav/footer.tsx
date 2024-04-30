"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuListLink,
} from "@/components/ui/navigation-menu";
import { DISCORD_URL, X_URL } from "@/lib/routes";
import X from "../../icons/x";
import Discord from "../../icons/discord";
import nav from "@/styles/nav";
import { cn } from "@/lib/utils";

export default function Footer() {
  const className = cn(nav({ variant: "footer" }));
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
