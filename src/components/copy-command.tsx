"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A shell command with a copy button, for install lines on the tool pages.
 * When the clipboard API is refused (embedded browsers, denied permission),
 * the button selects the command and tries the legacy copy command; if that
 * fails too, the command is left selected so ⌘C / Ctrl+C finishes the job.
 * The status line is a live region, so the result is announced as well.
 */
export function CopyCommand({ command }: { command: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setStatus("copied");
      return;
    } catch {
      // Fall through to selecting the text.
    }
    const code = codeRef.current?.querySelector("[data-command]");
    const selection = window.getSelection();
    if (!code || !selection) return setStatus("failed");
    const range = document.createRange();
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
    // Deprecated, but still the only copy path when the async API is blocked.
    setStatus(document.execCommand("copy") ? "copied" : "failed");
  };

  return (
    <div className="flex w-full min-w-0 items-center gap-3 rounded-card border border-border bg-panel-2 py-2 pr-2 pl-4">
      <code
        ref={codeRef}
        className="min-w-0 flex-1 overflow-x-auto font-mono text-meta whitespace-nowrap text-text"
      >
        <span className="text-muted select-none">$ </span>
        <span data-command>{command}</span>
      </code>
      <button
        type="button"
        onClick={copy}
        className="btn shrink-0 px-3 py-1.5 whitespace-nowrap"
      >
        {status === "copied"
          ? "Copied"
          : status === "failed"
            ? "Selected"
            : "Copy"}
      </button>
      <span className="sr-only" aria-live="polite">
        {status === "copied"
          ? "Command copied"
          : status === "failed"
            ? "Copy failed. The command is selected; press Command or Control C to copy it."
            : ""}
      </span>
    </div>
  );
}
