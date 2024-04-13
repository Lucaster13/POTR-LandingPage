import NftsList from "@/components/nfts/nfts-list";
import PageLayout from "@/components/page-layout";

export default function NFTs() {
  return (
    <PageLayout
      header="NFTs"
      description="Explore the Protectors of The Rand collection below"
      container
      allowScrollToTop
    >
      <NftsList />
    </PageLayout>
  );
}
