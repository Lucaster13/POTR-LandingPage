import { create } from "zustand";

type Store = {
  splineIsLoaded: boolean;
  set: (s: Partial<Store>) => void;
};

export const useStore = create<Store>((set) => ({
  splineIsLoaded: false,
  set,
}));
