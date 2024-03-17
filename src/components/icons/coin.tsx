import { cn } from "@/lib/utils";
import { BaseProps } from "@/styles/base";
import SvgGradient from "../svg-gradient";

export default function Coin({ className }: BaseProps) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.000000 19.000000"
      preserveAspectRatio="xMidYMid meet"
      className={cn(
        className?.replace("animate-icon-stroke", "animate-coin-stroke"), // kill prev animation
        "stroke-[0.2rem] group-hover/iconCard:stroke-[0.3rem] rotate-90"
      )}
    >
      <SvgGradient />
      <g transform="translate(0.000000,19.000000) scale(0.100000,-0.100000)">
        <path
          d="M51 176 c-13 -7 -30 -24 -37 -37 -51 -92 72 -183 146 -109 43 43 32
            118 -21 145 -34 18 -57 18 -88 1z m83 -7 c47 -22 58 -95 20 -133 -38 -38 -111
            -27 -133 20 -35 78 35 148 113 113z M102 124 c-12 -8 -22 -21 -22 -27 0 -7 5 -4 11 6 5 9 17 17 24 17 8
            0 15 5 15 10 0 13 -2 13 -28 -6z M42 98 c2 -24 9 -34 23 -36 20 -4 20 -3 1 11 -13 9 -17 21 -13 36 3
            11 1 21 -5 21 -5 0 -8 -15 -6 -32z M119 81 c13 -8 13 -12 1 -28 -13 -17 -13 -17 4 -1 19 16 15 38 -7 38
            -8 0 -7 -4 2 -9z"
        />
      </g>
    </svg>
  );
}
