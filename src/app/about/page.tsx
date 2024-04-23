import IconCards from "@/components/about/icon-cards";
import Cta from "@/components/home/cta";
import PageLayout from "@/components/page-layout";
import MintAPotrButton from "@/components/ui/mint-a-potr-button";
import { ROUTE_CONFIG, Route } from "@/lib/routes";

export default function About() {
  return (
    <PageLayout {...ROUTE_CONFIG[Route.ABOUT]} actions={<MintAPotrButton />}>
      <IconCards />
      <Cta
        className="md:flex-col relative md:items-center my-10 mx-auto w-fit"
        exploreCollection
      />
    </PageLayout>
  );
}
