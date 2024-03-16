import { usePathname } from "next/navigation";
import { useStore } from "../store";
import { useEffect } from "react";
import { Route } from "../routes";

export default function useLocation() {
  const store = useStore();
  const pathname = usePathname();

  // isHomePage
  useEffect(() => {
    console.log(pathname);
    store.set({ isHomePage: pathname === Route.HOME });
  }, [pathname]);
}
