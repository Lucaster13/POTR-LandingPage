import { PotrAssetMetadata, PotrMetadata } from "potr-common";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { BaseProps, cn } from "@/lib/utils";
import { Suspense } from "react";

type NftProps = {
  metadata: PotrAssetMetadata | PotrMetadata;
  size?: number;
  hoverable?: boolean;
  hideHeader?: boolean;
};

const isPotrMetadata = (
  md: PotrAssetMetadata | PotrMetadata
): md is PotrMetadata => Object.hasOwn(md, "traits");

export default function Nft({
  metadata,
  size = 720,
  hoverable = true,
  hideHeader = false,
}: NftProps) {
  const isSmall = size < 200;
  const className = cn(
    "transition border-none bg-gradient-primary h-fit p-px shadow-normal-800 shadow-lg overflow-clip",
    hoverable &&
      "hover:scale-110 hover:-rotate-3 hover:cursor-pointer hover:z-10"
  );

  return (
    <Card className={className}>
      {!hideHeader && (
        <>
          <NftHeader
            className={cn("inset-0 top-4 start-5", isSmall && "top-2 start-3")}
          >
            {isSmall ? metadata.unitName.replace("POTR", "") : metadata.name}
          </NftHeader>

          {isPotrMetadata(metadata) && (
            <NftHeader className="top-4 end-5">
              Lvl. {metadata.traits.Level}
            </NftHeader>
          )}
        </>
      )}

      <CardContent
        className={cn(
          "bg-dark p-1 rounded-lg flex justify-center items-center"
        )}
      >
        <Suspense>
          <Image
            alt={metadata.name}
            src={metadata.url}
            width={size}
            height={size}
            className={cn("rounded-lg object-scale-down")}
            priority
          />
        </Suspense>
      </CardContent>
    </Card>
  );
}

type NftHeaderProps = {} & BaseProps;

export function NftHeader({ children, className }: NftHeaderProps) {
  return (
    <CardHeader
      className={cn(
        "absolute bg-gradient-primary p-px h-fit w-fit rounded-md flex items-center -skew-x-24",
        className
      )}
    >
      <CardTitle
        className={cn("text-xs font-extrabold bg-dark rounded-md py-1 px-2")}
      >
        {children}
      </CardTitle>
    </CardHeader>
  );
}
