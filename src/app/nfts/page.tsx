import NftsPage from "@/components/nfts/nfts-page";
import { Potr, sleep } from "potr-common";

export default async function NFTs() {
  const metadata = await Potr.getAllMetadatasWithoutTraits();
  return <NftsPage metadata={metadata} />;
}
