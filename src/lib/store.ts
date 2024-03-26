import { PotrMetadata } from "potr-common";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  homeSceneIsLoaded: boolean;
  isHomePage: boolean;
  coinDisplayIsLoaded: boolean;
  potrMetadata: Record<number, PotrMetadata>;
  set: (s: Partial<Store>) => void;
};

export const useStore = create(
  persist<Store>(
    (set) => ({
      homeSceneIsLoaded: false,
      coinDisplayIsLoaded: false,
      isHomePage: false,
      potrMetadata: {},
      set,
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
