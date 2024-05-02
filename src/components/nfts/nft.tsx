import { Potr, PotrAssetMetadata, PotrClass, PotrMetadata } from "potr-common";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { BaseProps, cn } from "@/lib/utils";
import { GradientBorder } from "../gradient-border";
import { cva } from "class-variance-authority";

export const potrClassVariants = cva("", {
  variants: {
    class: {
      [PotrClass.HUMAN]:
        "text-neutral-300 border-neutral-300 bg-neutral-300 to-neutral-300",
      [PotrClass.WIZARD]:
        "text-blue-600 border-blue-600 bg-blue-600 to-blue-600",
      [PotrClass.BERSERKER]:
        "text-red-700 border-red-700 bg-red-700 to-red-700",
      [PotrClass.RANGER]:
        "text-emerald-400 border-emerald-400 bg-emerald-400 to-emerald-400",
      [PotrClass.NECROMANCER]:
        "text-violet-400 border-violet-400 bg-violet-400 to-violet-400",
      [PotrClass.ASSASSIN]:
        "text-slate-700 border-slate-700 bg-slate-700 to-slate-700",
      [PotrClass.CRUSADER]:
        "text-yellow-200 border-yellow-200 bg-yellow-200 to-yellow-300",
      [PotrClass.ARCHANGEL]:
        "text-sky-300 border-sky-300 bg-sky-300 to-sky-300",
    } as Partial<Record<PotrClass, string>>,
  },
});

type NftProps = {
  potrId: number;
  size?: number;
  hoverable?: boolean;
  hideHeader?: boolean;
} & BaseProps;

// sometimes we will display potr's that only have their asset metadata so we need
// to differentiate b/w the use cases
const isPotrMetadata = (
  md: PotrAssetMetadata | PotrMetadata
): md is PotrMetadata => Object.hasOwn(md, "traits");

export default async function Nft({
  potrId,
  size = 720,
  hoverable = true,
  hideHeader = false,
  className,
}: NftProps) {
  const isSmall = size < 200;
  const metadata = await Potr.getMetadata(potrId);
  const classStyle = cn(
    isPotrMetadata(metadata) &&
      potrClassVariants({ class: metadata.traits.Class })
  );

  return (
    <Card
      className={cn(
        "transition-default p-0.5 shadow-normal-900 shadow-md relative rounded-lg w-fit h-fit",
        hoverable &&
          "hover:scale-110 hover:-rotate-3 hover:cursor-pointer hover:z-20",
        className,
        classStyle
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
            <NftHeader className={cn("top-4 end-5", isSmall && "top-2 end-3")}>
              Lvl. {metadata.traits.Level}
            </NftHeader>
          )}
        </>
      )}

      <CardContent className={cn("flex justify-center items-center p-0")}>
        <Image
          alt={metadata.name}
          src={metadata.url}
          width={size}
          height={size}
          className={cn("rounded-lg object-scale-down")}
          priority
        />
      </CardContent>
    </Card>
  );
}

function NftHeader({ children, className }: BaseProps) {
  return (
    <CardHeader className={cn("absolute p-0 h-fit w-fit", className)}>
      <CardTitle className="p-0 h-fit w-fit">
        <GradientBorder
          containerClassName={cn("flex items-center shadow-sm shadow-dark")}
          className={cn("text-xs font-extrabold px-2 py-1 text-primary")}
          skewed
          rounded
        >
          {children}
        </GradientBorder>
      </CardTitle>
    </CardHeader>
  );
}
