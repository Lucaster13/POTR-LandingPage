import IconCards from "@/components/about/icon-cards";
import Cta from "@/components/home/cta";
import PageLayout from "@/components/page-layout";

export default function About() {
  return (
    <PageLayout
      header="Protectors of The Rand NFTs"
      description="POTR is a limited supply mutable-trait NFT collection that uses the
      Algorand ARC-69 standard."
      container
    >
      <IconCards />
      <Cta
        className="md:flex-col relative md:items-center my-10 mx-auto w-fit"
        exploreCollection
      />
    </PageLayout>
  );
}
