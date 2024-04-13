import { PotrMetadata } from "potr-common";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Animated from "@/styles/transition";
import Link from "next/link";
import { Route } from "@/lib/routes";

type NftProps = {
  metadata: PotrMetadata;
};

export default function Nft({ metadata }: NftProps) {
  const className = Animated(
    "border-none bg-gradient-primary p-px hover:rotate-3 hover:scale-105"
  );

  return (
    <Card className={className}>
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
        <Link href={`${Route.NFTS}/${metadata.unitName}`}>
          <Image
            alt={metadata.name}
            src={metadata.url}
            width={240}
            height={240}
            className="rounded-lg"
          />
        </Link>
      </CardContent>
    </Card>
  );
}
