import Spinner from "@/components/icons/spinner";
import PageLayout from "@/components/page-layout";
import { ROUTE_CONFIG, Route } from "@/lib/routes";
import { Suspense } from "react";

export default async function NftsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout {...ROUTE_CONFIG[Route.NFTS]}>{children}</PageLayout>;
}