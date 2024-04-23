import { ReactNode, Suspense } from "react";
import Nav from "./ui/nav";
import Footer from "./footer";
import { BaseProps, cn } from "@/lib/utils";
import ScrollToTopButton from "./ui/scroll-to-top-button";
import Spinner from "./icons/spinner";

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
          "overflow-x-visible relative h-full w-screen",
          scrollable ? "overflow-y-auto" : "overflow-y-visible"
        )}
      >
        <div
          className={cn(
            container && "container flex flex-col gap-20 pb-24",
            !header && "py-24",
            className
          )}
        >
          {header && <PageHeader header={header} description={description} />}

          <div className={cn(container && "container")}>
            <Suspense
              fallback={
                <div className="w-full flex items-start justify-center h-full">
                  <Spinner />
                </div>
              }
            >
              {children}
            </Suspense>
          </div>

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
    <div
      className="flex flex-col gap-4 pt-24 glass border-s border-e border-b bg-opacity-30
        rounded-br-lg rounded-bl-lg container pb-6 sticky -top-12 z-20"
    >
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
