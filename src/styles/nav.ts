import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Fade, { FadeProps } from "./fade";

const navVariants = cva(
  `absolute inset-0 px-6 z-30 h-fit w-fit font-extrabold flex items-center
    gap-6 rounded-full border glass
    transition-all duration-300 shadow-sm`,
  {
    variants: {
      variant: {
        default: "mt-8 py-3 me-3 2xl:me-0 ms-auto",
        footer: "mb-8 py-3 mt-auto mx-auto",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface navProps
  extends React.HTMLAttributes<HTMLElement>,
    FadeProps,
    VariantProps<typeof navVariants> {}

export default function nav({ variant, fadeOut }: navProps) {
  return cn(navVariants({ variant }), Fade(fadeOut));
}
