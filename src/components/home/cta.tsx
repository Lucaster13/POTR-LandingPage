import { Application } from "@splinetool/runtime";
import RightArrow from "../right-arrow";
import { Button } from "../ui/button";

export default function Cta({
  splineApp,
}: {
  splineApp: Application | undefined;
}) {
  return (
    <div className="flex gap-4 z-10 flex-col md:flex-row items-center justify-center lg:justify-start md:items-start">
      <Button
        onMouseOver={() => splineApp?.setVariable("isParticlesOn", true)}
        onMouseOut={() => splineApp?.setVariable("isParticlesOn", false)}
      >
        MINT A POTR
      </Button>
      <Button className="hover:pe-10 group/button" variant="secondary">
        ENTER THE KINGDOM
        <RightArrow
          className="absolute fill-primary right-1 inline 
            group-hover/button:opacity-100 -skew-y-6 -rotate-12 group-hover/button:skew-y-0
            group-hover/button:rotate-0 opacity-0 transition-all duration-300"
        />
      </Button>
    </div>
  );
}
