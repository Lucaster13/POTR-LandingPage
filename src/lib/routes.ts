import { PageLayoutProps } from "@/components/page-layout";

const DISCORD_URL = "https://discord.gg/dzJ3qJVG";
const X_URL = "https://twitter.com/POTR_nft";

const enum Route {
  HOME = "/",
  ABOUT = "/about",
  NFTS = "/nfts",
}

const ROUTE_CONFIG: Record<Route, PageLayoutProps> = {
  [Route.HOME]: {},
  [Route.ABOUT]: {
    header: "About",
    description:
      "POTR is a limited supply mutable-trait NFT collection that uses the Algorand ARC-69 standard.",
    container: true,
    scrollable: true,
  },
  [Route.NFTS]: {
    header: "NFTs",
    description: "Explore the Protectors of The Rand collection below",
    container: true,
    className: "h-full",
  },
};

export { DISCORD_URL, X_URL, Route, ROUTE_CONFIG };
