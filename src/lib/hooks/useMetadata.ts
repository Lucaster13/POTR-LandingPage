"use client";

import { useQuery } from "@tanstack/react-query";
import { Potr } from "potr-common";
import { useStore } from "../store";
import { useState } from "react";

export default function useMetadata(asaId: number) {
  const setPotrMetadata = useStore((s) => s.setPotrMetadata);
  const potrMetadata = useStore((s) => s.potrMetadata);

  const { isLoading } = useQuery({
    queryKey: ["potr-metadata", asaId],
    queryFn: () =>
      Potr.getMetadata(asaId).then((md) => {
        setPotrMetadata(md);
        return md;
      }),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { isLoading, metadata: potrMetadata[asaId] };
}
