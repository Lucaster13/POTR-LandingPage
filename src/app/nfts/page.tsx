import NftDetail from "@/components/nfts/nft-detail";
import NftList from "@/components/nfts/nft-list";
import { cn } from "@/lib/utils";
import { Potr } from "potr-common";

type NFTsPageProps = {
  params: {
    potrId?: string;
  };
  searchParams: {
    viewMode?: "full" | "list";
    pageNum?: string;
  };
};

export default async function NftsPage({
  params,
  searchParams,
}: NFTsPageProps) {
  const metadata = await Potr.getAllMetadatasWithoutTraits();
  const { viewMode } = searchParams;
  const pageNum = Number(searchParams.pageNum) || undefined;
  const { potrId } = params;
  const selectedPotrAsaId = Number(potrId) || undefined;

  if (selectedPotrAsaId && viewMode === "full") {
    return <NftDetail asaId={selectedPotrAsaId} isFullScreen />;
  }

  return (
    <div className={cn("flex items-center flex-1 overflow-visible")}>
      <NftList
        metadata={metadata}
        selectedPotrAsaId={Number(selectedPotrAsaId)}
        pageNum={pageNum}
      />
      {selectedPotrAsaId && <NftDetail asaId={selectedPotrAsaId} />}
    </div>
  );
}
