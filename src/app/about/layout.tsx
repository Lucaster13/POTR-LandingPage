import PageLayout from "@/components/page-layout";
import MintAPotrButton from "@/components/ui/mint-a-potr-button";
import { ROUTE_CONFIG, Route } from "@/lib/routes";
import { BaseProps } from "@/lib/utils";

export default function AboutPageLayout(props: BaseProps) {
  return (
    <PageLayout
      {...ROUTE_CONFIG[Route.ABOUT]}
      {...props}
      actions={<MintAPotrButton />}
    />
  );
}
