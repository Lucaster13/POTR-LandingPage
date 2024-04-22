import { ReactNode } from "react";
import Nav from "./ui/nav";
import Footer from "./footer";
import { BaseProps, cn } from "@/lib/utils";
import ScrollToTopButton from "./ui/scroll-to-top-button";

export type PageLayoutProps = {
  header?: ReactNode;
  description?: ReactNode;
  container?: boolean;
  allowScrollToTop?: boolean;
  scrollable?: boolean;
} & BaseProps;

export default function PageLayout({
  children,
  header,
  description,
  container,
  className,
  allowScrollToTop,
  scrollable,
}: PageLayoutProps) {
  return (
    <main className="relative h-full w-full">
      <div className="absolute h-full container inset-0">
        <Nav />
        <Footer />
      </div>

      <div
        className={cn(
          "overflow-x-visible relative h-full w-screen py-36",
          scrollable ? "overflow-y-auto" : "overflow-y-visible"
        )}
      >
        <div
          className={cn(
            container && "container flex flex-col gap-20",
            className
          )}
        >
          <PageHeader header={header} description={description} />
          {children}
          {allowScrollToTop && (
            <div className="mx-auto">
              <ScrollToTopButton />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function PageHeader({
  header,
  description,
}: Pick<PageLayoutProps, "header" | "description">) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-5xl lg:w-2/3 text-pretty font-extrabold text-gradient-primary">
        {header}
      </h2>
      {description && (
        <span className="text-lg lg:w-1/2  text-pretty font-bold text-normal-300">
          {description}
        </span>
      )}
    </div>
  );
}
