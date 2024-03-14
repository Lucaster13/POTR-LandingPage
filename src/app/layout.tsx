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
  description: "Join The Rand Kingdom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={cn(
          inter.className,
          "h-dynamic-screen relative antialiased w-screen bg-base text-light overflow-hidden"
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
