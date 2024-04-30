import { ReactNode } from "react";
import { BaseProps, cn } from "@/lib/utils";
import ScrollToTopButton from "./ui/button/scroll-to-top-button";
import SimpleSuspense from "./simple-suspense";

export type PageLayoutProps = {
  header?: ReactNode;
  description?: ReactNode;
  container?: boolean;
  allowScrollToTop?: boolean;
  scrollable?: boolean;
  actions?: ReactNode;
  loadingMessage?: string;
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
  loadingMessage,
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
          container && "container flex flex-col gap-12 pb-32",
          !header && "py-32",
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

        <div className={cn(container && "container", "h-full")}>
          <SimpleSuspense message={loadingMessage}>{children}</SimpleSuspense>
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
    <div className="sticky -top-12 z-30 w-full">
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
