import { Application } from "@splinetool/runtime";
import Fade, { FadeProps } from "@/styles/fade";
import Cta from "./cta";
import Title from "./title";
import Description from "./description";

type ContentProps = { splineApp?: Application } & FadeProps;

export default function Content({ splineApp, fadeOut }: ContentProps) {
  const className = Fade(
    fadeOut,
    `z-10 mx-auto sm:ps-0 lg:pe-96 xl:pe-[28rem] px-4 
    flex w-fit justify-center flex-col gap-5 md:gap-8 duration-1000 delay-200`
  );
  return (
    <section className={className}>
      <Title />
      <Description />
      <Cta />
    </section>
  );
}
