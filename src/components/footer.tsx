import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuListLink,
} from "@/components/ui/navigation-menu";
import { DISCORD_URL, X_URL } from "@/lib/routes";
import Image from "next/image";
import X from "./icons/x";
import Discord from "./icons/discord";

export default function Footer() {
  return (
    <div className="container z-40 absolute inset-0 pb-10 bg-gradient-to-t md:bg-none from-dark flex mt-auto gap-4 items-center justify-center h-fit">
      <NavigationMenu className="group/nav">
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
