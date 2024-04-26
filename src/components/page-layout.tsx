import { ReactNode, Suspense } from "react";
import { BaseProps, cn } from "@/lib/utils";
import ScrollToTopButton from "./ui/scroll-to-top-button";
import Spinner from "./icons/spinner";

export type PageLayoutProps = {
  header?: ReactNode;
  description?: ReactNode;
  container?: boolean;
  allowScrollToTop?: boolean;
  scrollable?: boolean;
  actions?: ReactNode;
} & BaseProps;

export default function PageLayout({
  children,
  header,
  description,
  container,
  className,
  allowScrollToTop,
  scrollable,
  actions,
}: PageLayoutProps) {
  return (
    <main
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
        {header && (
          <PageHeader
            header={header}
            actions={actions}
            description={description}
          />
        )}

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
    </main>
  );
}

function PageHeader({
  header,
  description,
  actions,
}: Pick<PageLayoutProps, "header" | "description" | "actions">) {
  return (
    <div className="sticky -top-12 z-20 w-full">
      <div
        className="flex justify-end flex-col md:flex-row items-start gap-4 md:items-end
       pt-24 glass border-s border-e border-b bg-opacity-30
        rounded-br-lg rounded-bl-lg container pb-6 "
      >
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-5xl lg:w-2/3 text-pretty font-extrabold text-gradient-primary">
            {header}
          </h2>
          {description && (
            <span className="text-sm md:text-md xl:text-lg lg:w-1/2 text-pretty font-bold text-normal-300">
              {description}
            </span>
          )}
        </div>
        {actions}
      </div>
    </div>
  );
}
