import { BaseProps } from "@/lib/utils";
import { Suspense } from "react";
import Spinner from "./icons/spinner";

type SimpleSuspenseProps = {
  message?: string;
} & BaseProps;

export default function SimpleSuspense({
  children,
  message,
}: SimpleSuspenseProps) {
  return (
    <Suspense fallback={<SimpleSuspenseFallback message={message} />}>
      {children}
    </Suspense>
  );
}

function SimpleSuspenseFallback({ message }: SimpleSuspenseProps) {
  return (
    <div className="flex flex-col h-96 w-full items-center justify-center gap-6">
      <Spinner className="h-24 w-24" />
      <span className="text-gradient-primary text-3xl font-extrabold">
        {message}
      </span>
    </div>
  );
}
