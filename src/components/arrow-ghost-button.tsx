import { BaseProps } from "@/styles/base";
import { Button } from "./ui/button";
import { openNewTab } from "@/lib/utils";
import RightArrow from "./right-arrow";

type ArrowGhostButtonProps = {
  href: string;
} & BaseProps;

export default function ArrowGhostButton({
  href,
  children,
}: ArrowGhostButtonProps) {
  return (
    <Button
      className="hover:pe-10 group/button"
      variant="secondary"
      onClick={() => openNewTab(href)}
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
