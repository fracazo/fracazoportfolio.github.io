/**
 * The reading context captured when the panel expands to the full page, so
 * the trip back (browser back or the full page's Back pill) can reopen the
 * split exactly where the reader left it. sessionStorage on purpose: the
 * context belongs to this tab's own back/forward trail.
 */
export type PanelReturnContext = {
  /** Panel registry key, which is also the full page's route. */
  panel: string;
  /** Scroll offset of the index column. */
  index: number;
  /** Scroll offset of the panel body. */
  body: number;
};

const KEY = "panel-return-context";

export function saveReturnContext(ctx: PanelReturnContext) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(ctx));
  } catch {
    /* private browsing: the trip back just starts from the top */
  }
}

export function readReturnContext(): PanelReturnContext | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const ctx = JSON.parse(raw);
    return typeof ctx?.panel === "string" ? ctx : null;
  } catch {
    return null;
  }
}

export function clearReturnContext() {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    /* nothing to clear */
  }
}

/** Trailing-slash-insensitive route match; the static host mirrors slashes. */
export function sameRoute(a: string, b: string) {
  const norm = (p: string) => p.replace(/\/+$/, "") || "/";
  return norm(a) === norm(b);
}
