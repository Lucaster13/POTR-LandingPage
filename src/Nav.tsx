/// <reference types="vite-plugin-svgr/client" />
import { ComponentProps } from "react";
import GoldCoin from "./assets/gold-coin.svg?react";

export default function Nav() {
  return (
    <nav className="mt-6 flex flex-row">
      <Nav.Brand />
    </nav>
  );
}

type NavLinkProps = ComponentProps<"a">;
Nav.Link = ({ href, children }: NavLinkProps) => <a href={href}>{children}</a>;
Nav.Brand = ({}) => <GoldCoin className="hover:animate-spin h-10" />;
