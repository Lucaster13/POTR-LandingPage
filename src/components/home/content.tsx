import { Application } from "@splinetool/runtime";
import { FadeableProps, fadeable } from "@/styles/fadeable";
import Cta from "./cta";
import Title from "./title";
import Description from "./description";

export default function Content({
  splineApp,
  faded,
}: { splineApp?: Application } & FadeableProps) {
  const className = fadeable({
    className: `z-10 mx-auto pt-48 lg:pt-32 sm:ps-0 lg:pe-96 xl:pe-[28rem] px-4 
      flex w-fit justify-center flex-col gap-5 md:gap-8 duration-1000 delay-200`,
    faded,
  });
  return (
    <section className={className}>
      <Title />
      <Description />
      <Cta splineApp={splineApp} />
    </section>
  );
}
