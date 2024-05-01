"use client";

import ErrorPageTemplate, {
  BaseErrorPageProps,
} from "@/components/ui/templates/error";

export default function NftErrorPage(props: BaseErrorPageProps) {
  return <ErrorPageTemplate {...props} title="Failed to load NFTs" />;
}
