import type { ReactNode } from "react";
import { AppShell } from "./app-shell";

/**
 * Case study chrome: the standard site shell around an 800px reading column.
 *
 * Previously this swapped the primary nav for a back link plus a generated
 * table of contents, and added a dyslexia-friendly reading toggle. Both are
 * gone: case studies are moving to a panel beside the work index, where a
 * sidebar has neither the room nor a job, and the breadcrumb inside each study
 * already carries the way back. Dropping them here keeps the standalone route
 * and the panel rendering the same content rather than diverging.
 */
export function CaseStudyShell({ children }: { children: ReactNode }) {
  return (
    <AppShell>
      <div className="mx-auto grid w-full max-w-[800px] gap-16 [&>*]:min-w-0">
        {children}
      </div>
    </AppShell>
  );
}
