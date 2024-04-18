"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { Algo, Potr, potrConfig } from "potr-common";
import { useStore } from "../store";
import { chunkList } from "../utils";
import { CHUNK_SIZE } from "../constants";

export default function usePotrMetadata() {
  const store = useStore();
  const { mutate: fetchPotrMetadata } = useMutation({
    mutationFn: (asaIds: number[]) => Promise.all(asaIds.map(Potr.getMetadata)),
    onSuccess: (potrMetadataPage) => {
      const potrMetadataCopy = store.potrMetadata;

      potrMetadataPage.map((md) => (potrMetadataCopy[md.id] = md));

      store.set({ potrMetadata: potrMetadataCopy });
    },
  });

  const { isLoading, error } = useQuery({
    queryKey: ["potr-metadata"],
    queryFn: async () => {
      const chunks = chunkList(
        potrConfig.asaIds[Algo.getAlgoNetwork()],
        CHUNK_SIZE
      );

      return await Promise.all(
        chunks.map((asaIds) =>
          fetchPotrMetadata(
            asaIds.filter((asaId) => !Boolean(store.potrMetadata[asaId]))
          )
        )
      );
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    error,
  };
}
