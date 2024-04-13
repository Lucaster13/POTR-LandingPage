"use client";
import usePotrMetadata from "@/lib/hooks/usePotrMetadata";
import { useStore } from "@/lib/store";
import { PotrBaseClass, PotrMetadata, PotrTraits } from "potr-common";
import Nft from "./nft";
import nftImage from "/Users/lucasterr/Documents/_code/Protectors-Of-The-Rand/POTR-Nfts/image-generation/nfts/POTR0001.png";
import nftImage2 from "/Users/lucasterr/Documents/_code/Protectors-Of-The-Rand/POTR-Nfts/image-generation/nfts/POTR0002.png";
import nftImage3 from "/Users/lucasterr/Documents/_code/Protectors-Of-The-Rand/POTR-Nfts/image-generation/nfts/POTR0003.png";
import nftImage4 from "/Users/lucasterr/Documents/_code/Protectors-Of-The-Rand/POTR-Nfts/image-generation/nfts/POTR0004.png";
import nftImage5 from "/Users/lucasterr/Documents/_code/Protectors-Of-The-Rand/POTR-Nfts/image-generation/nfts/POTR0005.png";

const potrMetadata: Record<number, PotrMetadata> = {
  1: {
    balance: 1,
    description: "POTR 1",
    id: 1,
    baseClass: "Humanoid" as PotrBaseClass,
    name: "POTR 0001",
    traits: {
      PotrBackground: "Light Red",
      PotrClass: "Crusader",
      Body: "None",
      Head: "Blond Hair",
      Eyes: "Blue",
      Mouth: "Normal",
      Back: "None",
      Level: 1,
    } as any as PotrTraits,
    unitName: "POTR0001",
    url: nftImage as any as string,
  },
  2: {
    balance: 1,
    description: "POTR 1",
    id: 1,
    baseClass: "Humanoid" as PotrBaseClass,
    name: "POTR 0002",
    traits: {
      PotrBackground: "Light Blue",
      PotrClass: "Berserker",
      Body: "None",
      Head: "Brown Hair",
      Eyes: "X",
      Mouth: "Normal",
      Back: "None",
      Level: 1,
    } as any as PotrTraits,
    unitName: "POTR0002",
    url: nftImage2 as any as string,
  },
  3: {
    balance: 1,
    description: "POTR 1",
    id: 1,
    baseClass: "Humanoid" as PotrBaseClass,
    name: "POTR 0003",
    traits: {
      PotrBackground: "Light Blue",
      PotrClass: "Berserker",
      Body: "None",
      Head: "Buzzcut",
      Eyes: "Stone",
      Mouth: "Normal",
      Back: "None",
      Level: 1,
    } as any as PotrTraits,
    unitName: "POTR0003",
    url: nftImage3 as any as string,
  },
  4: {
    balance: 1,
    description: "POTR 4",
    id: 1,
    baseClass: "Humanoid" as PotrBaseClass,
    name: "POTR 0004",
    traits: {
      PotrBackground: "Light Blue",
      PotrClass: "Berserker",
      Body: "None",
      Head: "Brown Hair",
      Eyes: "X",
      Mouth: "Normal",
      Back: "None",
      Level: 1,
    } as any as PotrTraits,
    unitName: "POTR0004",
    url: nftImage4 as any as string,
  },
  5: {
    balance: 1,
    description: "POTR 5",
    id: 1,
    baseClass: "Humanoid" as PotrBaseClass,
    name: "POTR 0005",
    traits: {
      PotrBackground: "Light Blue",
      PotrClass: "Berserker",
      Body: "None",
      Head: "Buzzcut",
      Eyes: "Stone",
      Mouth: "Normal",
      Back: "None",
      Level: 1,
    } as any as PotrTraits,
    unitName: "POTR0005",
    url: nftImage5 as any as string,
  },
};

export default async function NftsList() {
  //   usePotrMetadata();

  return (
    <div className="flex flex-col items-center gap-20">
      <NftsPage />
    </div>
  );
}

function NftsPage() {
  const potrMetadatas = [
    ...Object.values(potrMetadata),
    ...Object.values(potrMetadata),
    ...Object.values(potrMetadata),
    ...Object.values(potrMetadata),
    ...Object.values(potrMetadata),
    ...Object.values(potrMetadata),
    ...Object.values(potrMetadata),
    ...Object.values(potrMetadata),
    ...Object.values(potrMetadata),
  ];
  return (
    <div className="container flex flex-wrap gap-10 justify-center">
      {potrMetadatas.map((md) => (
        <Nft metadata={md} />
      ))}
    </div>
  );
}
