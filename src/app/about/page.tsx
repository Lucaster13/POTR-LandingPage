import IconCards from "@/components/about/icon-cards";
import Cta from "@/components/home/cta";

export default function AboutPage() {
  return (
    <>
      <IconCards />
      <Cta
        className="md:flex-col relative md:items-center mt-10 mx-auto w-fit"
        exploreCollection
      />
    </>
  );
}
