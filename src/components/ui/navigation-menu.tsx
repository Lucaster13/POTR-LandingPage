"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative group/nav z-10 flex max-w-max flex-col flex-1 bg-none items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 h-6 gap-4 list-none justify-center items-center",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuListLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    external?: boolean;
    noUnderline?: boolean;
  }
>(
  (
    { className, title, children, href, external, noUnderline, ...props },
    ref
  ) => {
    return (
      <NavigationMenuItem
        className="bg-none  transition-all flex duration-300 items-center 
    justify-center text-sm text-gradient-primary font-medium disabled:pointer-events-none disabled:opacity-50"
      >
        <Link
          ref={ref}
          className={cn(
            "select-none outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-medium",
            className
          )}
          href={href ?? ""}
          target={external ? "_blank" : ""}
          rel={external ? "noreferrer" : ""}
          {...props}
        >
          <NavigationMenuLink
            asChild
            className="text-gradient-primary text-center group/navLink"
          >
            <span>
              {title ?? children}
              {!noUnderline && (
                <span className="block max-w-0 transition-all duration-300 group-hover/navLink:max-w-full h-px bg-gradient-primary" />
              )}
            </span>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  }
);
NavigationMenuListLink.displayName = "NavigationMenuListLink";

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuListLink,
};
