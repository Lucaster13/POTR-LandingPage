"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useHref() {
  const currentPathname = usePathname();
  const searchParams = useSearchParams();

  // dedupe queryString
  const makeHref = useCallback(
    (queryParams: Record<string, string>, pathname?: string) => {
      const updatedSearchParams = new URLSearchParams({
        ...Object.fromEntries(new URLSearchParams(searchParams.toString())),
        ...Object.fromEntries(new URLSearchParams(queryParams)),
      });

      return `${pathname ?? currentPathname}?${updatedSearchParams}`;
    },
    [searchParams]
  );

  return makeHref;
}
