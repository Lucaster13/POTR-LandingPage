import NftList from "@/components/nfts/nft-list";
import { Potr, sleep } from "potr-common";

type NFTsPageProps = {
  searchParams: {
    pageNum?: string;
  };
};

export default async function NftsPage({ searchParams }: NFTsPageProps) {
  const metadata = await Potr.getAllMetadatasWithoutTraits();
  const pageNum = Number(searchParams.pageNum) || undefined;

  return <NftList metadata={metadata} pageNum={pageNum} />;
}
