import { cn } from "@/lib/utils";
import Animated from "./transition";
import { BaseProps } from "./base";

export type FadeableProps = {
  faded?: Boolean;
} & BaseProps;

export const fadeable = ({ faded, className }: FadeableProps) =>
  cn(faded && "opacity-0", Animated(className));
