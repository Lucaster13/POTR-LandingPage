import { useStore } from "@/lib/store";
import Nft from "./nft";

export default function NftsPage() {
  const potrMetadatas = useStore((s) => Object.values(s.potrMetadata));
  return (
    <div className="container flex flex-wrap gap-10 justify-center">
      {potrMetadatas.map((md) => (
        <Nft metadata={md} key={md.id} />
      ))}
    </div>
  );
}
