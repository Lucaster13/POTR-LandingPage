import { Application } from "@splinetool/runtime";
import RightArrow from "../right-arrow";

export default function Cta({
  splineApp,
}: {
  splineApp: Application | undefined;
}) {
  return (
    <div className="flex gap-4 z-10 flex-col md:flex-row items-center md:items-start">
      <button
        className="bg-gradient-to-br
            from-sky-500 to-purple-500 hover:text-dark 
            duration-300 hover:brightness-125
            transition-all p-2 px-4 rounded-full w-fit"
        onMouseOver={() => splineApp?.setVariable("isParticlesOn", true)}
        onMouseOut={() => splineApp?.setVariable("isParticlesOn", false)}
      >
        MINT A POTR
      </button>
      <button
        className="w-fit outline relative p-2 px-4 rounded-full 
          hover:pe-14 transition-all duration-300 flex gap-2 items-center group/button"
      >
        ENTER THE KINGDOM
        <RightArrow className="absolute right-0 invert inline group-hover/button:opacity-100 opacity-0 transition-opacity duration-300" />
      </button>
    </div>
  );
}
