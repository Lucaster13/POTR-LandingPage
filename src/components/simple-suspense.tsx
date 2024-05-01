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
    <div className="flex flex-col w-full h-96 items-center gap-6 justify-center">
      <Spinner className="h-20 w-20" />
      <span className="text-gradient-primary text-3xl font-extrabold">
        {message}
      </span>
    </div>
  );
}
