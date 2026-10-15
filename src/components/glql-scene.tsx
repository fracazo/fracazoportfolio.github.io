"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

/**
 * GLQL as it shipped: a GitLab comment in the rich text editor, a short
 * `glql` block, and the embedded view it renders underneath. The query is
 * the cause, so it stays small; the table is the payoff, so it gets the
 * width and bleeds off the frame like a crop of a real page.
 *
 * Drawn in GitLab's own Pajamas colours (the .glql-scene tokens in
 * globals.css): GitLab dark on the site's dark mode, GitLab light on its
 * light mode. Avatars are identicons, so no real names appear.
 *
 * `t` is milliseconds since the replay started, or Infinity for the settled
 * frame. `compact` is the tighter crop for row thumbnails and phones: fewer
 * columns and no toolbar, so the text can be larger.
 */
export function GlqlScene({
  t,
  compact = false,
}: {
  t: number;
  compact?: boolean;
}) {
  const chars = Math.max(
    0,
    Math.min(GLQL_QUERY.length, Math.floor((t - CUE.type) / CHAR_MS)),
  );
  const typing = t >= CUE.type && t < CUE.typed;
  const size = compact ? COMPACT : WIDE;

  return (
    <div
      className="glql-scene absolute inset-0"
      style={{ fontFamily: GL_SANS, color: "var(--gl-text)" }}
    >
      {/* The comment editor, cropped: only its top-left corner is inside
          the frame, the rest of the page runs off the edges. */}
      <div
        className="absolute rounded-tl-[10px] border-t border-l border-[var(--gl-border)] bg-[var(--gl-page)]"
        style={{
          left: size.inset,
          top: size.inset,
          right: -12,
          bottom: -12,
          boxShadow: "var(--gl-page-shadow)",
        }}
      >
        {!compact && <Toolbar />}

        <div style={{ padding: size.bodyPad }}>
          {/* The glql block, as the rich text editor shows it. */}
          <div
            className="relative rounded border border-[var(--gl-border)] bg-[var(--gl-subtle)]"
            style={{
              fontFamily: GL_MONO,
              fontSize: size.code,
              lineHeight: `${size.codeLine}px`,
              padding: "7px 10px",
            }}
          >
            <span
              className="absolute top-[6px] right-[10px] text-[var(--gl-text-subtle)]"
              style={{ fontFamily: GL_SANS, fontSize: size.code - 1 }}
            >
              glql
            </span>
            <CodeLine name="title" value={<Str>Knowledge · 18.5</Str>} />
            <CodeLine
              name="fields"
              value={
                compact
                  ? "title, state, health"
                  : "title, state, health, assignee, updated"
              }
            />
            <div className="whitespace-nowrap">
              <Key>query</Key>
              <QueryText chars={chars} />
              {typing && (
                <span className="vignette-caret ml-px inline-block h-[1.05em] w-px translate-y-[2px] bg-[var(--gl-text-strong)]" />
              )}
            </div>
          </div>

          {/* The embedded view the block renders. */}
          <div
            className="overflow-hidden rounded-l-lg border-y border-l border-[var(--gl-border)] bg-[var(--gl-page)]"
            style={{
              marginTop: size.gap,
              marginRight: -size.bodyPad - 1,
              ...reveal(t, CUE.view),
            }}
          >
            <ViewHeader t={t} size={size} />
            <TableHead size={size} compact={compact} />
            {GLQL_ROWS.map((row, i) =>
              t < CUE.rows + i * ROW_STAGGER_MS ? (
                <SkeletonRow key={row.title} size={size} />
              ) : (
                <Row key={row.title} row={row} size={size} compact={compact} />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * The same scene driven by a row's hover mode rather than a stage's clock:
 * "settled" and "hidden" rest on the final frame, "reset" clears it, and
 * "play" runs the timeline. Drawn on a larger canvas than the row's and
 * scaled into it, so the text holds up on a phone-width card.
 */
export function GlqlRowScene({
  mode,
  canvasWidth,
}: {
  mode: "hidden" | "settled" | "reset" | "play";
  canvasWidth: number;
}) {
  // Elapsed time of the current play; the other modes are fixed frames.
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (mode !== "play") return;
    const startedAt = performance.now();
    const interval = window.setInterval(() => {
      const now = performance.now() - startedAt;
      setElapsed(now);
      if (now > CUE.done) clearInterval(interval);
    }, 50);
    return () => {
      clearInterval(interval);
      setElapsed(0);
    };
  }, [mode]);

  const t = mode === "play" ? elapsed : mode === "reset" ? 0 : Infinity;
  const scale = canvasWidth / ROW_CANVAS.w;
  return (
    <div
      className="absolute top-0 left-0 origin-top-left"
      style={{
        width: ROW_CANVAS.w,
        height: ROW_CANVAS.h,
        transform: `scale(${scale})`,
      }}
    >
      <GlqlScene t={t} compact />
    </div>
  );
}

/* ---- Content ---- */

const GLQL_QUERY = 'label = "group::knowledge" and milestone = %18.5';

type Health = "on-track" | "attention" | "risk" | null;
type GlqlRow = {
  title: string;
  open: boolean;
  health: Health;
  /** Identicon letter and colour slot (1 to 7, as GitLab assigns them). */
  assignees: Array<[string, number]>;
  updated: string;
};

/* Plausible Knowledge group work, the kind of issues the group tracked in
   public. Written for this scene, not copied from real issues. */
const GLQL_ROWS: GlqlRow[] = [
  {
    title: "Sort views by any column",
    open: true,
    health: "on-track",
    assignees: [
      ["R", 4],
      ["K", 2],
    ],
    updated: "2 hours ago",
  },
  {
    title: "Pin wiki comments to a line",
    open: true,
    health: "attention",
    assignees: [["M", 5]],
    updated: "yesterday",
  },
  {
    title: "Show epic progress in tables",
    open: false,
    health: null,
    assignees: [["D", 3]],
    updated: "3 days ago",
  },
  {
    title: "Paste tables from spreadsheets",
    open: true,
    health: "risk",
    assignees: [
      ["S", 1],
      ["A", 6],
    ],
    updated: "4 days ago",
  },
  {
    title: "Faster views over 100 items",
    open: false,
    health: null,
    assignees: [["J", 7]],
    updated: "1 week ago",
  },
];

/* ---- Timing ---- */

const CHAR_MS = 32;
const ROW_STAGGER_MS = 90;
const CUE = (() => {
  const type = 300;
  const typed = type + GLQL_QUERY.length * CHAR_MS;
  const view = typed + 250;
  const rows = view + 700;
  return {
    type,
    typed,
    view,
    rows,
    done: rows + GLQL_ROWS.length * ROW_STAGGER_MS + 300,
  };
})();

/** How long the stage holds the scene before a loop replays it. */
export const GLQL_LOOP_MS = CUE.done + 3500;

/* ---- Layout ---- */

/* The row scene's canvas: 16:10, larger than the 280px row canvas so the
   scaled text stays readable at phone width (about 335px wide). */
const ROW_CANVAS = { w: 400, h: 250 };

type Size = typeof WIDE;
const WIDE = {
  inset: 28,
  bodyPad: 10,
  gap: 10,
  code: 11.5,
  codeLine: 16,
  text: 13,
  head: 12,
  title: 13.5,
  headerH: 38,
  thH: 26,
  rowH: 30,
  cols: [230, 70, 120, 70, 100],
};
const COMPACT: Size = {
  inset: 20,
  bodyPad: 8,
  gap: 8,
  code: 11,
  codeLine: 15,
  text: 13,
  head: 12,
  title: 13.5,
  headerH: 34,
  thH: 24,
  rowH: 29,
  cols: [206, 70, 122],
};

const GL_SANS =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Helvetica Neue", sans-serif';
const GL_MONO =
  '"JetBrains Mono", Menlo, "DejaVu Sans Mono", Consolas, monospace';

/* ---- Parts ---- */

function Toolbar() {
  return (
    <div
      className="flex h-[28px] items-center gap-[14px] border-b border-[var(--gl-border)] px-[10px] text-[var(--gl-text-subtle)]"
      style={{ fontSize: 12 }}
    >
      <span className="flex items-center gap-1 text-[var(--gl-text)]">
        Normal text
        <Chevron down />
      </span>
      <span className="font-bold">B</span>
      <span className="italic">I</span>
      <span className="line-through">S</span>
      <Icon d="M5.5 4.5 2 8l3.5 3.5M10.5 4.5 14 8l-3.5 3.5" />
      <Icon d="M7 9a3 3 0 0 0 4.2.2l2-2a3 3 0 0 0-4.2-4.2l-1 1M9 7a3 3 0 0 0-4.2-.2l-2 2a3 3 0 0 0 4.2 4.2l1-1" />
      <Icon d="M6 4h8M6 8h8M6 12h8M2.5 4h.5M2.5 8h.5M2.5 12h.5" />
      <Icon d="M2.5 2.5h11v11h-11zM2.5 6.5h11M2.5 10h11M6.5 6.5v7" />
      <span className="flex items-center gap-1">
        <Icon d="M8 3v10M3 8h10" />
        <Chevron down />
      </span>
    </div>
  );
}

function ViewHeader({ t, size }: { t: number; size: Size }) {
  return (
    <div
      className="flex items-center justify-between pr-[16px] pl-[12px]"
      style={{ height: size.headerH }}
    >
      <span className="flex items-center gap-2">
        <span
          className="font-semibold text-[var(--gl-text-strong)]"
          style={{ fontSize: size.title }}
        >
          Knowledge · 18.5
        </span>
        <span
          className="rounded-full bg-[var(--gl-badge-neutral)] px-[6px] text-[11px] leading-[16px] text-[var(--gl-badge-neutral-text)]"
          style={{
            opacity: t >= CUE.rows ? 1 : 0,
            transition: "opacity 200ms ease",
          }}
        >
          12
        </span>
      </span>
      <span className="flex items-center gap-3 text-[var(--gl-text-subtle)]">
        <Icon d="M8 3.5v.01M8 8v.01M8 12.5v.01" strokeWidth={2.4} />
        <Chevron />
      </span>
    </div>
  );
}

const HEADINGS = ["Title", "State", "Health", "Assignee", "Updated"];

function TableHead({ size, compact }: { size: Size; compact: boolean }) {
  return (
    <div
      className="flex items-center border-y border-[var(--gl-border)] bg-[var(--gl-subtle)] pl-[12px] font-semibold text-[var(--gl-text-subtle)]"
      style={{ height: size.thH, fontSize: size.head }}
    >
      {HEADINGS.slice(0, compact ? 3 : 5).map((heading, i) => (
        <span
          key={heading}
          className="shrink-0"
          style={{ width: size.cols[i] }}
        >
          {heading}
        </span>
      ))}
    </div>
  );
}

function Row({
  row,
  size,
  compact,
}: {
  row: GlqlRow;
  size: Size;
  compact: boolean;
}) {
  return (
    <div
      className="glql-row flex items-center border-b border-[var(--gl-border-muted)] pl-[12px] whitespace-nowrap"
      style={{ height: size.rowH, fontSize: size.text }}
    >
      <span
        className="shrink-0 overflow-hidden pr-3 text-ellipsis text-[var(--gl-text-strong)]"
        style={{ width: size.cols[0] }}
      >
        {row.title}
      </span>
      <span className="shrink-0" style={{ width: size.cols[1] }}>
        <StateBadge open={row.open} />
      </span>
      <span className="shrink-0" style={{ width: size.cols[2] }}>
        <HealthStatus health={row.health} />
      </span>
      {!compact && (
        <>
          <span className="flex shrink-0" style={{ width: size.cols[3] }}>
            {row.assignees.map(([letter, slot], i) => (
              <Identicon
                key={letter}
                letter={letter}
                slot={slot}
                overlap={i > 0}
              />
            ))}
          </span>
          <span
            className="shrink-0 text-[var(--gl-text)]"
            style={{ width: size.cols[4] }}
          >
            {row.updated}
          </span>
        </>
      )}
    </div>
  );
}

function SkeletonRow({ size }: { size: Size }) {
  return (
    <div
      className="flex items-center gap-4 border-b border-[var(--gl-border-muted)] pl-[12px]"
      style={{ height: size.rowH }}
    >
      <span className="glql-skeleton h-[8px] w-[150px] rounded-full" />
      <span className="glql-skeleton h-[8px] w-[46px] rounded-full" />
      <span className="glql-skeleton h-[8px] w-[80px] rounded-full" />
    </div>
  );
}

function StateBadge({ open }: { open: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full pr-[7px] pl-[5px] text-[11.5px] leading-[18px]"
      style={{
        background: open ? "var(--gl-success-bg)" : "var(--gl-info-bg)",
        color: open ? "var(--gl-success-text)" : "var(--gl-info-text)",
      }}
    >
      <Icon
        size={12}
        d={
          open
            ? "M8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
            : "M8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM5.5 8.2l1.7 1.6 3.3-3.6"
        }
        strokeWidth={1.6}
      />
      {open ? "Open" : "Closed"}
    </span>
  );
}

const HEALTH: Record<
  Exclude<Health, null>,
  { label: string; color: string; d: string }
> = {
  "on-track": {
    label: "On track",
    color: "var(--gl-health-ok)",
    d: "M8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM5.5 8.2l1.7 1.6 3.3-3.6",
  },
  attention: {
    label: "Needs attention",
    color: "var(--gl-health-attention)",
    d: "M8 2.5 14 13H2L8 2.5ZM8 6.5v3M8 11.3v.01",
  },
  risk: {
    label: "At risk",
    color: "var(--gl-health-risk)",
    d: "M8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM8 5.3v3.2M8 10.6v.01",
  },
};

function HealthStatus({ health }: { health: Health }) {
  if (!health) {
    return <span className="text-[var(--gl-text-subtle)] italic">None</span>;
  }
  const { label, color, d } = HEALTH[health];
  return (
    <span className="inline-flex items-center gap-1" style={{ color }}>
      <Icon size={13} d={d} strokeWidth={1.6} />
      {label}
    </span>
  );
}

function Identicon({
  letter,
  slot,
  overlap,
}: {
  letter: string;
  slot: number;
  overlap: boolean;
}) {
  return (
    <span
      className="flex size-[20px] items-center justify-center rounded-full text-[10px] font-semibold"
      style={{
        background: `var(--gl-id-${slot}-bg)`,
        color: `var(--gl-id-${slot}-text)`,
        marginLeft: overlap ? -5 : 0,
        boxShadow: "0 0 0 1.5px var(--gl-page)",
      }}
    >
      {letter}
    </span>
  );
}

function CodeLine({ name, value }: { name: string; value: ReactNode }) {
  return (
    <div className="whitespace-nowrap">
      <Key>{name}</Key>
      <span className="text-[var(--gl-text-strong)]">{value}</span>
    </div>
  );
}

function Key({ children }: { children: string }) {
  return (
    <span className="text-[var(--gl-code-key)]">
      {children}
      <span className="text-[var(--gl-text-subtle)]">: </span>
    </span>
  );
}

function Str({ children }: { children: string }) {
  return <span className="text-[var(--gl-code-string)]">{children}</span>;
}

/* The query, highlighted as it types: strings and the milestone get their
   colours only once they're on screen. */
function QueryText({ chars }: { chars: number }) {
  const parts: Array<[string, string]> = [
    ["label = ", "var(--gl-text-strong)"],
    ['"group::knowledge"', "var(--gl-code-string)"],
    [" and milestone = ", "var(--gl-text-strong)"],
    ["%18.5", "var(--gl-code-ref)"],
  ];
  let left = chars;
  return (
    <>
      {parts.map(([text, color]) => {
        const shown = text.slice(0, Math.max(0, left));
        left -= text.length;
        return shown ? (
          <span key={text} style={{ color }}>
            {shown}
          </span>
        ) : null;
      })}
    </>
  );
}

function Icon({
  d,
  size = 14,
  strokeWidth = 1.4,
}: {
  d: string;
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d={d} />
    </svg>
  );
}

function Chevron({ down = false }: { down?: boolean }) {
  return (
    <Icon
      size={12}
      d={down ? "M4 6l4 4 4-4" : "M4 10l4-4 4 4"}
      strokeWidth={1.6}
    />
  );
}

function reveal(t: number, at: number): CSSProperties {
  const shown = t >= at;
  return {
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : "translateY(6px)",
    transition: "opacity 250ms ease, transform 250ms ease",
  };
}
