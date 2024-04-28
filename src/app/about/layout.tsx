import PageLayout from "@/components/page-layout";
import MintPotrButton from "@/components/ui/button/mint-potr-button";
import { ROUTE_CONFIG, Route } from "@/lib/routes";
import { BaseProps } from "@/lib/utils";

export default function AboutPageLayout(props: BaseProps) {
  return (
    <PageLayout
      {...ROUTE_CONFIG[Route.ABOUT]}
      {...props}
      actions={<MintPotrButton />}
    />
  );
}
