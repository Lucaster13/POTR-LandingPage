import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuListLink,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  return (
    <div className="container z-40 absolute inset-0 flex gap-6 items-center h-fit mt-4 font-extrabold">
      <NavigationMenu className="ms-auto group/nav">
        <NavigationMenuList>
          <NavigationMenuListLink href="/about" title="About" />
          <NavigationMenuListLink href="/nfts" title="NFTs" />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
