"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "./button";

export default function ScrollToTopButton() {
  return (
    <Button
      className="flex gap-1"
      variant="secondary"
      onClick={() => {
        window.scroll({ top: 0 });
      }}
    >
      To top <ChevronUp />
    </Button>
  );
}
