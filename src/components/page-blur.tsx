import { fadeable } from "@/styles/fadeable";
import Circle from "./icons/circle";

export default function PageBlur() {
  const className = fadeable({
    faded: false,
    className: "absolute container inset-0 -z-50",
  });
  return (
    <div className={className}>
      <Circle className="h-[60rem] blur-[8rem] w-[60rem] brightness-[20%] skew-y-[45deg] skew-x-12 -rotate-12" />
    </div>
  );
}
