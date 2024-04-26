import Fade from "@/styles/fade";
import Cta from "./cta";
import Title from "./title";
import Description from "./description";
import { useStore } from "@/lib/store";

export default function Content() {
  return (
    <section
      className={`z-10 mx-auto sm:ps-0 lg:pe-96 xl:pe-[28rem] px-4 
    flex w-fit justify-center flex-col gap-5 md:gap-8 duration-1000 delay-200`}
    >
      <Title />
      <Description />
      <Cta />
    </section>
  );
}
