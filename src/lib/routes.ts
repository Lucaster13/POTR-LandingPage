import { ErrorPageTemplateProps } from "@/components/ui/templates/error";
import { PageLayoutProps } from "@/components/ui/templates/page";

const DISCORD_URL = "https://discord.gg/cZN4aY3cSs";
const X_URL = "https://twitter.com/POTR_nft";

const enum Route {
  ROOT = "/",
  ABOUT = "/about",
  NFTS = "/nfts",
}

type RouteConfig = {} & PageLayoutProps;

const ROUTE_CONFIG: Record<Route, RouteConfig> = {
  [Route.ROOT]: {},
  [Route.ABOUT]: {
    header: "About",
    description:
      "POTR is a limited supply mutable-trait NFT collection that uses the Algorand ARC-69 standard.",
    container: true,
    scrollable: true,
    loadingMessage: "Writing the about page...",
  },
  [Route.NFTS]: {
    header: "NFTs",
    description: "Explore the Protectors of The Rand collection below",
    container: true,
    scrollable: true,
    loadingMessage: "Calling all POTRs...",
  },
};

export { DISCORD_URL, X_URL, Route, ROUTE_CONFIG };
