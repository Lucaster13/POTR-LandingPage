import { create } from "zustand";

type Store = {
  homeSceneIsLoaded: boolean;
  isHomePage: boolean;
  coinDisplayIsLoaded: boolean;
  set: (s: Partial<Store>) => void;
};

export const useStore = create<Store>((set) => ({
  homeSceneIsLoaded: false,
  coinDisplayIsLoaded: false,
  isHomePage: false,
  set,
}));
