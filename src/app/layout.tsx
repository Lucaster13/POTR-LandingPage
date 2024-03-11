import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
          "h-screen relative antialiased w-screen bg-dark text-light"
        )}
      >
        <Nav />
        <Footer />
        {children}
      </body>
    </html>
  );
}
