"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

export default function useSearchParam(key: string) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const value = useMemo(() => searchParams.get(key) ?? "", [searchParams, key]);

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (value: string) => {
      // dedup the search params
      const params = new URLSearchParams(
        Object.fromEntries(new URLSearchParams(searchParams.toString()))
      );
      params.set(key, value);
      return params.toString();
    },
    [searchParams, pathname, key]
  );

  const setValue = useCallback(
    (value: string) => {
      // <pathname>?sort=asc
      router.push(createQueryString(value));
    },
    [pathname, createQueryString]
  );

  return { value: value, setValue, createQueryString };
}
