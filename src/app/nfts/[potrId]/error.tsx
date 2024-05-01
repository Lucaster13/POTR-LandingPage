"use client";

import { Button } from "@/components/ui/button";
import { Route } from "@/lib/routes";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NftDetailsPageErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function NftDetailsPageError({
  error,
  reset,
}: NftDetailsPageErrorProps) {
  const pathname = usePathname();
  const potrAsaId = pathname.split("/").at(-1);
  return (
    <div
      className="container glass border rounded-lg h-96 flex flex-col gap-4 
        text-pretty justify-center text-center items-center w-fit"
    >
      <AlertCircle className="h-24 w-24 stroke-error" />
      <h1 className="text-3xl font-extrabold text-error flex gap-4 items-center">
        Failed to load
      </h1>
      <code>POTR ASA ID {potrAsaId}</code>
      <h4 className="text-sm text-normal-600">
        Please update the ASA ID or refresh the page below.
      </h4>

      <div className="flex items-center gap-4 mt-4">
        <Button variant={"secondary"} onClick={() => reset()}>
          Refresh
        </Button>
        <Link href={Route.NFTS}>
          <Button variant="tertiary">Back to Nfts</Button>
        </Link>
      </div>
    </div>
  );
}
