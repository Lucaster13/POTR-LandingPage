import { Application } from "@splinetool/runtime";
import RightArrow from "../right-arrow";
import { Button } from "../ui/button";

export default function Cta({
  splineApp,
}: {
  splineApp: Application | undefined;
}) {
  return (
    <div className="flex gap-4 z-10 flex-col md:flex-row items-center md:items-start">
      <Button
        onMouseOver={() => splineApp?.setVariable("isParticlesOn", true)}
        onMouseOut={() => splineApp?.setVariable("isParticlesOn", false)}
      >
        MINT A POTR
      </Button>
      <Button className="hover:pe-9 group/button" variant="secondary">
        ENTER THE KINGDOM
        <RightArrow className="absolute fill-purple-500 right-0 inline group-hover/button:opacity-100 opacity-0 transition-opacity duration-300" />
      </Button>
    </div>
  );
}
