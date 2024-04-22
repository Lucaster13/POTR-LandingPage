import { PotrMetadata } from "potr-common";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  homeSceneIsLoaded: boolean;
  isHomePage: boolean;
  coinDisplayIsLoaded: boolean;
  potrMetadata: Record<number, PotrMetadata>;
  setPotrMetadata: (md: PotrMetadata | PotrMetadata[]) => void;
  set: (state: Partial<Omit<Store, "PotrMetadata">>) => void;
};

export const useStore = create(
  persist<Store>(
    (set) => ({
      homeSceneIsLoaded: false,
      coinDisplayIsLoaded: false,
      isHomePage: false,
      potrMetadata: {},
      set,
      setPotrMetadata: (metadata) => {
        const mdToAdd = Array.isArray(metadata) ? metadata : [metadata];
        set((state) => ({
          potrMetadata: {
            ...state.potrMetadata,
            ...Object.fromEntries(mdToAdd.map((md) => [md.id, md])),
          },
        }));
      },
    }),
    {
      name: "potr-store",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            ["potrMetadata"].includes(key)
          )
        ) as Store,
    }
  )
);
