import type { ReactNode } from "react";

/**
 * Chip — a small, muted metric/status pill. Hairline border, faint warm fill,
 * mono label, secondary text. Deliberately quiet so metrics read as supporting
 * detail rather than shouting. Numbers use tabular figures so they sit evenly.
 */
export function Chip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-md border border-border bg-panel-2 px-2.5 py-1 font-mono text-[11px] leading-none tracking-[0.01em] text-text-secondary tabular-nums ${className}`}
    >
      {children}
    </span>
  );
}
