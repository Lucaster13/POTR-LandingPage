import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export type FadeProps = {
  fadeOut?: Boolean;
};

export default function Fade(
  fadeOut?: FadeProps["fadeOut"],
  ...extraInputs: ClassValue[]
) {
  return cn(fadeOut && "opacity-0", "transition-default", ...extraInputs);
}
