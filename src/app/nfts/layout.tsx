import FilterForm from "@/components/nfts/filter-form";
import PageTemplate from "@/components/ui/templates/page";
import { ROUTE_CONFIG, Route } from "@/lib/routes";
import { BaseProps } from "@/lib/utils";

const nftsRouteConfig = ROUTE_CONFIG[Route.NFTS];

export default async function NftsPageLayout(props: BaseProps) {
  return (
    <PageTemplate {...nftsRouteConfig} {...props} actions={<FilterForm />} />
  );
}
