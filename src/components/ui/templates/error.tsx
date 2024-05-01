"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  HelpCircle,
  LucideIcon,
  WifiOff,
  XCircle,
} from "lucide-react";
import { ReactNode } from "react";

export type BaseErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export type ErrorPageTemplateProps = {
  title?: string;
  content?: ReactNode;
  description?: string;
  actions?: ReactNode;
  noRefresh?: boolean;
  type?: "error" | "warning" | "info" | "connection";
} & BaseErrorPageProps;

const Icons = {
  error: XCircle,
  warning: AlertTriangle,
  info: HelpCircle,
  connection: WifiOff,
};

export default function ErrorPageTemplate({
  error,
  reset,
  title,
  content,
  description,
  actions,
  noRefresh,
  type = "error",
}: ErrorPageTemplateProps) {
  const Icon = Icons[type];
  const color = cn(
    type === "error" && "stroke-error text-error",
    type === "warning" && "stroke-warning text-warning",
    type === "info" && "stroke-info text-info",
    type === "connection" && "stroke-secondary text-secondary"
  );
  return (
    <div
      className="container glass border rounded-lg h-96 flex flex-col gap-4 
        text-pretty justify-center text-center items-center w-fit"
    >
      <Icon className={cn("h-24 w-24", color)} />

      <h1
        className={cn("text-3xl font-extrabold flex gap-4 items-center", color)}
      >
        {title ?? "Uh Oh!"}
      </h1>

      <code>{content ?? "Something went wrong :("}</code>

      <h4 className="text-sm text-normal-600">
        {description ??
          "Please check your internet connection and wait a bit before refreshing the page."}
      </h4>

      <div className="flex items-center gap-4 mt-4">
        {!noRefresh && (
          <Button variant={"secondary"} onClick={() => reset()}>
            Refresh
          </Button>
        )}
        {actions}
      </div>
    </div>
  );
}
