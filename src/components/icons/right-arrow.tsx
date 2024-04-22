import SvgGradient from "../svg-gradient";
import { BaseProps, cn } from "@/lib/utils";

export default function RightArrow({ className }: BaseProps) {
  return (
    <svg
      height="2rem"
      width="2rem"
      version="1.1"
      id="Layer_1"
      className={cn("fill-[url(#gradient-primary)]", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <SvgGradient />
      <polygon
        points="12,7 13,7 13,9 15,9 15,11 3,11 3,13 15,13 15,15 13,15 13,17 12,17 12,19 15,19 15,17 17,17 17,15 19,15 19,14 
	        20,14 20,13 21,13 21,11 20,11 20,10 19,10 19,9 17,9 17,7 15,7 15,5 12,5 "
      />
    </svg>
  );
}
