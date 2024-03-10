import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuListLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="container z-50 absolute inset-0 flex items-center h-fit mt-4 font-extrabold">
      <NavigationMenu className="ms-auto group/nav">
        <NavigationMenuList>
          <NavigationMenuListLink href="/nfts">
            <Image src={"/x.svg"} alt="twitter" width={15} height={15} />
          </NavigationMenuListLink>
          <NavigationMenuListLink href="/nfts">
            <Image src={"/discord.svg"} alt="discord" width={20} height={20} />
          </NavigationMenuListLink>
          <NavigationMenuListLink href="/about" title="About" />
          <NavigationMenuListLink href="/nfts" title="NFTs" />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
