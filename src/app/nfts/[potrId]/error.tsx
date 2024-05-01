"use client";

import { Button } from "@/components/ui/button";
import ErrorPageTemplate, {
  BaseErrorPageProps,
} from "@/components/ui/templates/error";
import { Route } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NftDetailsErrorPage(props: BaseErrorPageProps) {
  const pathname = usePathname();
  const potrAsaId = pathname.split("/").at(-1);
  return (
    <ErrorPageTemplate
      {...props}
      title="Failed to load NFT"
      content={`POTR ASA ID ${potrAsaId}`}
      actions={
        <Link href={Route.NFTS}>
          <Button variant="tertiary">Back to Nfts</Button>
        </Link>
      }
    />
  );
}
