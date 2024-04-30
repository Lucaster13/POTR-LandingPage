import { PotrAssetMetadata, PotrMetadata } from "potr-common";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { BaseProps, cn } from "@/lib/utils";
import { Suspense } from "react";
import { GradientBorder } from "../gradient-border";

type NftProps = {
  metadata: PotrAssetMetadata | PotrMetadata;
  size?: number;
  hoverable?: boolean;
  hideHeader?: boolean;
} & BaseProps;

// sometimes we will display potr's that only have their asset metadata so we need
// to differentiate b/w the use cases
const isPotrMetadata = (
  md: PotrAssetMetadata | PotrMetadata
): md is PotrMetadata => Object.hasOwn(md, "traits");

export default function Nft({
  metadata,
  size = 720,
  hoverable = true,
  hideHeader = false,
  className,
}: NftProps) {
  const isSmall = size < 200;

  return (
    <Card
      className={cn(
        "transition-default p-1 shadow-normal-900 shadow-md relative rounded-lg w-fit h-fit",
        hoverable &&
          "hover:scale-110 hover:-rotate-3 hover:cursor-pointer hover:z-20",
        className
      )}
    >
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

      <CardContent className={cn("flex justify-center items-center p-0")}>
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

function NftHeader({ children, className }: BaseProps) {
  return (
    <CardHeader className={cn("absolute p-0 h-fit w-fit", className)}>
      <CardTitle className="p-0 h-fit w-fit">
        <GradientBorder
          containerClassName={cn("flex items-center")}
          className={cn("text-xs font-extrabold px-2 py-1")}
          skewed
          rounded
        >
          {children}
        </GradientBorder>
      </CardTitle>
    </CardHeader>
  );
}
