"use client";

import type { ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
  side?: "top" | "bottom";
}

export function Tooltip({ content, children, side = "top" }: TooltipProps) {
  return (
    <span className="group relative inline-flex">
      <span className="inline-flex">{children}</span>

      <span
        role="tooltip"
        className={[
          "pointer-events-none absolute left-1/2 z-50 w-max max-w-56 -translate-x-1/2 rounded-lg border border-border bg-surface px-3 py-2 text-xs leading-5 text-foreground opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100",
          side === "top" ? "bottom-full mb-2" : "top-full mt-2",
        ].join(" ")}
      >
        {content}
      </span>
    </span>
  );
}
