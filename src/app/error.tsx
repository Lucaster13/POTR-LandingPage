"use client";

import ErrorPageTemplate, {
  BaseErrorPageProps,
} from "@/components/ui/templates/error";

export default function RootErrorPage(props: BaseErrorPageProps) {
  return <ErrorPageTemplate {...props} type="connection" />;
}
