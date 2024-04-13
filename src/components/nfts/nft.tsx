import { PotrMetadata } from "potr-common";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Animated from "@/styles/transition";
import { Route } from "@/lib/routes";
import { useRouter } from "next/navigation";

type NftProps = {
  metadata: PotrMetadata;
};

export default function Nft({ metadata }: NftProps) {
  const router = useRouter();

  // href for the details page for this specific nft
  const detailPageHref = `${Route.NFTS}/${metadata.unitName}`;

  const className = Animated(
    "border-none bg-gradient-primary p-px hover:rotate-3 hover:scale-105 hover:cursor-pointer"
  );

  return (
    <Card className={className} onClick={() => router.push(detailPageHref)}>
      <CardHeader className="absolute bg-gradient-primary p-px h-fit inset-0 w-fit top-4 start-5 rounded-md flex items-center -skew-x-24">
        <CardTitle className="text-xs font-extrabold bg-dark rounded-md py-1 px-2">
          {metadata.name}
        </CardTitle>
      </CardHeader>

      <CardHeader className="absolute bg-gradient-primary p-px h-fit w-fit top-4 end-5 rounded-md flex items-center -skew-x-24">
        <CardTitle className="text-xs font-extrabold bg-dark rounded-md py-1 px-2">
          Lvl. {metadata.traits.Level}
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-dark p-1 rounded-lg">
        <Image
          alt={metadata.name}
          src={metadata.url}
          loading="lazy"
          width={240}
          height={240}
          className="rounded-lg"
        />
      </CardContent>
    </Card>
  );
}
