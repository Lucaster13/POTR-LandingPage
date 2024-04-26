import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import nav from "@/styles/nav";
import NavLinks from "./nav-links";

export default function Nav() {
  const className = cn(nav({}));

  return (
    <div className={className}>
      <NavigationMenu className="flex-auto justify-end">
        <NavigationMenuList>
          <NavLinks />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
