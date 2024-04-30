"use client";

import { Button } from "@/components/ui/button";

type NftDetailsPageErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function NftDetailsPageError({
  error,
  reset,
}: NftDetailsPageErrorProps) {
  return (
    <div className="container h-96 flex flex-col gap-4 justify-center text-center items-center">
      <span>
        Oh no! Something went wrong. Please check the ASA ID or retry below.
      </span>
      <Button variant={"secondary"} onClick={() => reset()}>
        Retry
      </Button>
    </div>
  );
}