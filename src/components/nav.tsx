"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuListLink,
} from "@/components/ui/navigation-menu";
import useLocation from "@/lib/hooks/useLocation";
import { Route } from "@/lib/routes";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import nav from "@/styles/nav";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

const NAV_LINK_PROPS: ComponentProps<typeof NavigationMenuListLink>[] = [
  {
    href: Route.HOME,
    title: "Home",
  },
  {
    href: Route.ABOUT,
    title: "About",
    className: "ms-auto",
  },
  {
    href: Route.NFTS,
    title: "NFTs",
  },
];

export default function Nav() {
  const isHomePage = useStore((s) => s.isHomePage);
  const pathname = usePathname();
  useLocation();

  const linkProps = NAV_LINK_PROPS.map((props) => ({
    active: pathname === props.href,
    ...props,
  }));
  const className = cn(nav({}));

  return (
    <div className={className}>
      <NavigationMenu className="flex-auto justify-end">
        <NavigationMenuList>
          {linkProps
            .filter((p) => !isHomePage || p.href !== Route.HOME) // hide home on home page
            .map((props) => (
              <NavigationMenuListLink key={props.href} {...props} />
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
