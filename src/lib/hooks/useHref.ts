"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function useHref(queryString: string, pathname?: string) {
  const currentPathname = usePathname();
  const searchParams = useSearchParams();

  // dedupe queryString
  const updatedSearchParams = useMemo(
    () =>
      new URLSearchParams({
        ...Object.fromEntries(new URLSearchParams(searchParams.toString())),
        ...Object.fromEntries(new URLSearchParams(queryString)),
      }),
    [searchParams, queryString]
  );

  return `${pathname ?? currentPathname}?${updatedSearchParams}`;
}
