import FilterForm from "@/components/nfts/filter-form";
import PageLayout from "@/components/page-layout";
import { ROUTE_CONFIG, Route } from "@/lib/routes";
import { BaseProps } from "@/lib/utils";

const nftsRouteConfig = ROUTE_CONFIG[Route.NFTS];

export default async function NftsPageLayout(props: BaseProps) {
  return (
    <PageLayout {...nftsRouteConfig} {...props} actions={<FilterForm />} />
  );
}
