import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FadeableProps, fadeable } from "./fadeable";

const navVariants = cva(
  `container relative z-40 h-fit w-fit font-extrabold flex items-center
    gap-6 rounded-full border border-normal-800 backdrop-blur-md bg-normal-950 bg-opacity-5
    transition-all duration-300 shadow-sm`,
  {
    variants: {
      variant: {
        default: "mt-8 py-3 ms-auto me-0",
        footer: "mb-8 py-3 mt-auto",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface navProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navVariants>,
    FadeableProps {}

export default function nav({ variant, faded }: navProps) {
  return cn(navVariants({ variant }), fadeable({ faded }));
}
