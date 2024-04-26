"use client";

import { Button } from "./button";
import { BaseProps, openNewTab } from "@/lib/utils";
import RightArrow from "../icons/right-arrow";
import { useRouter } from "next/navigation";

type ArrowGhostButtonProps = {
  href: string;
  external?: boolean;
} & BaseProps;

export default function ArrowGhostButton({
  href,
  children,
  external,
}: ArrowGhostButtonProps) {
  const router = useRouter();
  return (
    <Button
      className="hover:pe-10 group/button"
      variant="secondary"
      onClick={() => (external ? openNewTab(href) : router.push(href))}
    >
      {children}
      <RightArrow
        className="absolute right-1 inline 
        group-hover/button:opacity-100 -skew-y-6 -rotate-12 group-hover/button:skew-y-0
        group-hover/button:rotate-0 opacity-0 transition-all duration-300"
      />
    </Button>
  );
}
