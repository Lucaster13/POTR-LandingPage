import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuListLink,
} from "@/components/ui/navigation-menu";
import { DISCORD_URL, X_URL } from "@/lib/routes";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="container z-40 absolute inset-0 mb-4 flex mt-auto gap-4 items-center justify-center h-fit">
      <NavigationMenu className="group/nav">
        <NavigationMenuList className="text-gradient-primary">
          <NavigationMenuListLink
            href="/"
            className=" relative text-xl font-extrabold"
            title="POTR"
          />
          <div className="w-px h-6 inline-block bg-gradient-primary" />
          <NavigationMenuListLink href={X_URL} external>
            <Image src={"/x.svg"} alt="twitter" width={15} height={15} />
          </NavigationMenuListLink>
          <NavigationMenuListLink href={DISCORD_URL} external>
            <Image src={"/discord.svg"} alt="discord" width={20} height={20} />
          </NavigationMenuListLink>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
