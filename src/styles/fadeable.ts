import { cn } from "@/lib/utils";
import Animated, { AnimatedProps } from "./transition";

export type FadeableProps = {
  faded?: Boolean;
} & AnimatedProps;

export const fadeable = ({ faded, className }: FadeableProps) =>
  cn(faded && "opacity-0", Animated({ className }));
