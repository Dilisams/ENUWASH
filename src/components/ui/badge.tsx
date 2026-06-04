import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-blue-900/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-950 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
