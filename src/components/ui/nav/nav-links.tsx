"use client";

import { ComponentProps, useMemo } from "react";
import { NavigationMenuListLink } from "../navigation-menu";
import { Route } from "@/lib/routes";
import { usePathname } from "next/navigation";

const NAV_LINK_PROPS: ComponentProps<typeof NavigationMenuListLink>[] = [
  {
    href: Route.ROOT,
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

export default function NavLinks() {
  const pathname = usePathname();

  const linkProps = useMemo(() => {
    const isHomePage = pathname === Route.ROOT;
    return NAV_LINK_PROPS.filter(
      // hide home link on home page
      (props) => !isHomePage || props.href !== Route.ROOT
    ).map((props) => ({
      active: pathname === props.href,
      ...props,
    }));
  }, [pathname]);

  return linkProps.map((props) => (
    <NavigationMenuListLink key={props.href} {...props} />
  ));
}
