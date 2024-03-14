import { BaseProps } from "@/styles/base";
import SvgGradient from "../svg-gradient";
import { cn } from "@/lib/utils";

type CircleProps = {} & BaseProps;

export default function Circle({ className }: CircleProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <SvgGradient />
      <g>
        <circle
          cx="12"
          cy="12"
          r="9.5"
          className="fill-[url(#gradient-primary)]"
        />
      </g>
    </svg>
  );
}
