import { cn } from "@/lib/utils";

export default function Animated(className?: string) {
  return cn("transition-all duration-300", className);
}
