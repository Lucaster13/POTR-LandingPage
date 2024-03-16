import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Circle from "@/components/icons/circle";
import PageBlur from "@/components/page-blur";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POTR",
  description:
    "Mint, train, and evolve interactive NFT heroes on the Algorand blockchain. Join The Rand Kingdom!",
  keywords:
    "NFT, Protectors of The Rand, POTR, Algorand, NFT Collectibles, NFT, Interactive NFT, Blockchain Gaming, NFT Adventure, NFT Quest, Evolving NFT",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Nav />
        <Footer />
        {children}
      </body>
    </html>
  );
}
