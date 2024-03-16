"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuListLink,
} from "@/components/ui/navigation-menu";
import { Route } from "@/lib/routes";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export default function Nav() {
  const isHomePage = useStore((s) => s.isHomePage);
  const pathname = usePathname();

  const linkProps: ComponentProps<typeof NavigationMenuListLink>[] = [
    {
      href: Route.ABOUT,
      title: "About",
      className: "ms-auto",
    },
    {
      href: Route.NFTS,
      title: "NFTs",
    },
  ].map((props) => ({
    active: pathname === props.href,
    ...props,
  }));

  const className = cn(
    "absolute inset-0 container z-40 flex gap-6 items-center bg-gradient-to-b md:bg-none from-dark h-fit py-10 font-extrabold"
  );

  return (
    <div className={className}>
      {!isHomePage && (
        <Link
          href={Route.HOME}
          className="font-extrabold text-2xl text-gradient-primary"
        >
          POTR
        </Link>
      )}
      <NavigationMenu className="ms-auto flex-auto justify-end">
        <NavigationMenuList>
          {linkProps.map((props) => (
            <NavigationMenuListLink key={props.href} {...props} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
