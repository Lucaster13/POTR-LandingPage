import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { BaseProps, cn } from "@/lib/utils";
import PageBlur from "@/components/page-blur";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/nav/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POTR",
  description:
    "Mint, train, and evolve interactive NFT heroes on the Algorand blockchain. Join The Rand Kingdom!",
  keywords:
    "NFT, Protectors of The Rand, POTR, Algorand, NFT Collectibles, NFT, Interactive NFT, Blockchain Gaming, NFT Adventure, NFT Quest, Evolving NFT",
  robots: "index, follow",
};

export default function RootLayout({ children }: BaseProps) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="[potrnft.xyz]" />
      </head>
      <body
        className={cn(
          inter.className,
          "h-dynamic-screen relative antialiased w-screen bg-base text-light overflow-clip"
        )}
      >
        <PageBlur />
        <div className="absolute h-full container inset-0">
          <Nav />
          <Footer />
        </div>
        {children}
      </body>
    </html>
  );
}
