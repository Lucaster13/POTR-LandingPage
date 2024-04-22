import { PotrAssetMetadata, PotrMetadata } from "potr-common";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

type NftProps = {
  metadata: PotrAssetMetadata;
  rounded?: boolean;
  size?: number;
};

export default function Nft({ metadata, rounded, size }: NftProps) {
  const className = cn(
    "transition border-none bg-gradient-primary p-px hover:scale-110 hover:rotate-3 hover:cursor-pointer hover:z-20 hover:shadow-normal-800 shadow-lg",
    rounded && "rounded-full"
  );

  return (
    <Card className={className}>
      {!rounded && (
        <CardHeader className="absolute bg-gradient-primary p-px h-fit inset-0 w-fit top-4 start-5 rounded-md flex items-center -skew-x-24">
          <CardTitle className="text-xs font-extrabold bg-dark rounded-md py-1 px-2">
            {metadata.name}
          </CardTitle>
        </CardHeader>
      )}

      {/* {metadata.traits && (
        <CardHeader className="absolute bg-gradient-primary p-px h-fit w-fit top-4 end-5 rounded-md flex items-center -skew-x-24">
          <CardTitle className="text-xs font-extrabold bg-dark rounded-md py-1 px-2">
            Lvl. {metadata.traits.Level}
          </CardTitle>
        </CardHeader>
      )} */}

      <CardContent
        className={cn(
          "bg-dark p-1 rounded-lg flex justify-center items-center",
          rounded && "rounded-full"
        )}
      >
        <Image
          alt={metadata.name}
          src={metadata.url}
          width={size ?? 240}
          height={size ?? 240}
          className={cn("rounded-lg", rounded && "rounded-full")}
          priority
        />
      </CardContent>
    </Card>
  );
}
