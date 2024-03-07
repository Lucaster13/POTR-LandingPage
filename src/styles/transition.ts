import { cn } from "@/lib/utils";
import { BaseProps } from "./base";

export type AnimatedProps = {} & BaseProps;

export default function Animated({ className }: AnimatedProps) {
  return cn("transition-all duration-300", className);
}
