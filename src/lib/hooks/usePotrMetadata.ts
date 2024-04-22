"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { Algo, Potr, PotrAssetMetadata, potrConfig } from "potr-common";
import { useStore } from "../store";
import { chunkList } from "../utils";
import { CHUNK_SIZE } from "../constants";

export default function usePotrMetadata(metadata: PotrAssetMetadata[]) {
  const store = useStore();

  const { mutate: fetchPotrMetadata } = useMutation({
    mutationFn: (asaIds: number[]) => Promise.all(asaIds.map(Potr.getMetadata)),
    onSuccess: (potrMetadataPage) => store.setPotrMetadata(potrMetadataPage),
  });

  const { isLoading, error } = useQuery({
    queryKey: ["potr-metadata"],
    queryFn: async () => {
      const potrAsaIdChunks = chunkList(
        metadata.map((md) => md.id),
        CHUNK_SIZE
      );

      return await Promise.all(
        potrAsaIdChunks.map((asaIds) =>
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
