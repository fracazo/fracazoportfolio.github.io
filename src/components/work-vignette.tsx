"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import {
  VIGNETTE_REPLACES_IMAGE,
  type WorkVignetteKind,
} from "./work-vignette-kinds";
import { useScrollPlay } from "./use-scroll-play";

export type { WorkVignetteKind };

/**
 * Hover scenes for work-row thumbnails. Each project gets its own vignette
 * animating that product's core moment: GLQL renders a typed query into an
 * embedded view, Wiki pins a comment to a highlighted line, BirthGuide draws
 * its winding route through the stages.
 *
 * Standalone kinds (see VIGNETTE_REPLACES_IMAGE) are the thumbnail itself:
 * they rest settled, so reduced motion, the split-panel list, and the no-JS
 * export all show the finished composition, and hover replays the animation
 * from the start. Overlay kinds sit hidden over a screenshot and play on
 * hover. Either way the stage is aria-hidden, ignores pointer events so
 * PanelLink keeps the click, and hover is gated to fine pointers. Touch has
 * no hover, so there the scene plays while the row sits mid-viewport
 * instead, replaying on each pass.
 */
export function WorkVignette({ kind }: { kind: WorkVignetteKind }) {
  const standalone = VIGNETTE_REPLACES_IMAGE[kind];
  const rootRef = useRef<HTMLDivElement>(null);
  const hovered = useRowHover(rootRef);
  const scrolledTo = useScrollPlay(
    rootRef,
    ".work-row, .work-row-compact",
    HOVER_QUERY,
  );
  const active = hovered || scrolledTo;
  const scale = useCanvasScale(rootRef, standalone);
  const [mode, setMode] = useState<SceneMode>(
    standalone ? "settled" : "hidden",
  );

  useEffect(() => {
    if (!active) {
      setMode(standalone ? "settled" : "hidden");
      return;
    }
    if (!standalone) {
      setMode("play");
      return;
    }
    // Replay: briefly clear the settled composition, then run the timeline.
    setMode("reset");
    const timer = window.setTimeout(() => setMode("play"), RESET_MS);
    return () => clearTimeout(timer);
  }, [active, standalone]);

  const scene =
    kind === "glql" ? (
      <GlqlScene mode={mode} />
    ) : kind === "wiki" ? (
      <WikiScene mode={mode} />
    ) : kind === "coursify" ? (
      <CoursifyScene mode={mode} />
    ) : kind === "mr-summary" ? (
      <MrSummaryScene mode={mode} />
    ) : kind === "mymix" ? (
      <MymixScene mode={mode} />
    ) : kind === "bemdireto" ? (
      <BemDiretoScene mode={mode} />
    ) : (
      <BirthGuideScene mode={mode} />
    );

  if (standalone) {
    return (
      <div
        ref={rootRef}
        aria-hidden="true"
        className="work-vignette work-vignette-standalone pointer-events-none absolute inset-0 overflow-hidden bg-panel-2"
      >
        {/* Fixed canvas scaled to the container, so the composition behaves
            like an image: the same picture at 88px in the split list and at
            full column width stacked. */}
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${scale})`,
          }}
        >
          {scene}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="work-vignette work-vignette-overlay vignette-fade pointer-events-none absolute inset-0 bg-panel-2"
      style={{ opacity: mode === "hidden" ? 0 : 1 }}
    >
      {scene}
    </div>
  );
}

type SceneMode = "hidden" | "settled" | "reset" | "play";

const HOVER_INTENT_MS = 400;
const RESET_MS = 220;

/* Shared between the hover path (must match) and the scroll path (must NOT
   match), so exactly one trigger owns any given device. */
const HOVER_QUERY = "(hover: hover) and (pointer: fine)";

/* The thumb's exact 16:10 at its two-column size; scenes lay out against
   this and the standalone shell scales it. */
const CANVAS_W = 280;
const CANVAS_H = 175;

/* Hover on the whole row, not just the thumb. The row root is PanelLink's
   anchor (or PanelButton for stub rows), carrying `.work-row` /
   `.work-row-compact`, the same hooks the `.group:hover .thumb-frame` shadow
   already keys off, so listeners attach to it rather than threading state
   through the server-rendered row. Gates are checked per-entry so OS-level
   setting changes apply without a reload. The delay is hover intent: sweeping
   the cursor down the page should not fire every scene. */
function useRowHover(rootRef: RefObject<HTMLDivElement | null>) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const row = rootRef.current?.closest(".work-row, .work-row-compact");
    if (!row) return;
    let timer: number | undefined;
    const enter = () => {
      if (row.closest("[data-panel-split]")) return;
      if (!window.matchMedia(HOVER_QUERY).matches) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timer = window.setTimeout(() => setActive(true), HOVER_INTENT_MS);
    };
    const leave = () => {
      clearTimeout(timer);
      setActive(false);
    };
    row.addEventListener("pointerenter", enter);
    row.addEventListener("pointerleave", leave);
    return () => {
      clearTimeout(timer);
      row.removeEventListener("pointerenter", enter);
      row.removeEventListener("pointerleave", leave);
    };
  }, [rootRef]);

  return active;
}

function useCanvasScale(
  rootRef: RefObject<HTMLDivElement | null>,
  enabled: boolean,
) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = rootRef.current;
    if (!enabled || !el) return;
    const measure = () => setScale(el.clientWidth / CANVAS_W);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootRef, enabled]);

  return scale;
}

/* ---- GLQL: a typed query renders into an embedded view ---- */

const GLQL_QUERY = "assignee = currentUser()";

function GlqlScene({ mode }: { mode: SceneMode }) {
  const [chars, setChars] = useState(GLQL_QUERY.length);
  const [rendered, setRendered] = useState(true);

  useEffect(() => {
    let timer: number | undefined;
    if (mode === "settled" || mode === "hidden") {
      setChars(GLQL_QUERY.length);
      setRendered(true);
    } else if (mode === "reset") {
      setChars(0);
      setRendered(false);
    } else if (chars < GLQL_QUERY.length) {
      timer = window.setTimeout(() => setChars((n) => n + 1), 40);
    } else if (!rendered) {
      timer = window.setTimeout(() => setRendered(true), 250);
    }
    return () => clearTimeout(timer);
  }, [mode, chars, rendered]);

  return (
    <>
      <div className="vignette-card absolute inset-x-[7%] top-[8%] rounded-lg bg-surface px-3 py-1.5 font-mono text-meta whitespace-nowrap">
        <span className="text-text">{GLQL_QUERY.slice(0, chars)}</span>
        {chars === 0 && <span className="text-muted">&nbsp;</span>}
        {mode === "play" && chars < GLQL_QUERY.length && (
          <span className="vignette-caret ml-px inline-block h-3 w-px bg-current align-middle text-text" />
        )}
      </div>
      <div
        className="vignette-card absolute inset-x-[7%] bottom-[8%] rounded-lg bg-surface px-3 pt-1.5 pb-2.5"
        style={{
          opacity: rendered ? 1 : 0,
          transform: rendered ? "none" : "translateY(6px)",
          transition: "opacity 250ms ease, transform 250ms ease",
        }}
      >
        <div className="font-mono text-meta text-muted">3 issues</div>
        <div className="mt-1.5 flex flex-col gap-2">
          {[68, 54, 61].map((width, i) => (
            <div
              key={width}
              className="flex items-center gap-2"
              style={{
                opacity: rendered ? 1 : 0,
                transform: rendered ? "none" : "translateY(4px)",
                transition: "opacity 250ms ease, transform 250ms ease",
                transitionDelay: rendered ? `${100 + i * 90}ms` : "0ms",
              }}
            >
              <span className="size-1.5 shrink-0 rounded-full bg-accent" />
              <span
                className="h-1.5 rounded-full bg-border"
                style={{ width: `${width}%` }}
              />
              <span className="ml-auto h-1.5 w-6 shrink-0 rounded-full bg-border" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---- Wiki: a highlight sweeps a line, a comment pins to it ---- */

function WikiScene({ mode }: { mode: SceneMode }) {
  const shown = mode === "settled" || mode === "play";
  // Enter delays sequence the story only while replaying; settling back and
  // the reset both move everything together.
  const delay = (ms: number) => (mode === "play" ? `${ms}ms` : "0ms");

  return (
    <div className="vignette-card absolute inset-x-[7%] inset-y-[9%] rounded-lg bg-surface p-3.5">
      {/* Page title, then body lines kept clear of the comment column. */}
      <div className="h-2.5 w-[38%] rounded-full bg-border" />
      <div className="mt-3 flex w-[52%] flex-col gap-2">
        {[
          { width: "100%", highlight: false },
          { width: "92%", highlight: false },
          { width: "96%", highlight: true },
          { width: "58%", highlight: false },
        ].map((line, i) => (
          <div key={i} className="relative h-2" style={{ width: line.width }}>
            <span className="absolute inset-0 rounded-full bg-border" />
            {line.highlight && (
              <span
                className="absolute -inset-x-1 -inset-y-[3px] rounded-sm bg-accent/30"
                style={{
                  width: shown ? "calc(100% + 8px)" : "0%",
                  transition: "width 350ms ease",
                  transitionDelay: delay(250),
                }}
              />
            )}
            {line.highlight && (
              <span
                className="absolute top-1/2 -right-3 size-1.5 -translate-y-1/2 rounded-full bg-accent"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: `translateY(-50%) scale(${shown ? 1 : 0.5})`,
                  transition: "opacity 200ms ease, transform 200ms ease",
                  transitionDelay: delay(550),
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Margin comment, anchored beside the highlighted line. */}
      <div
        className="vignette-card absolute top-[30%] right-[5%] w-[36%] rounded-lg bg-surface p-2.5"
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? "none" : "translateY(6px) scale(0.96)",
          transition: "opacity 250ms ease, transform 250ms ease",
          transitionDelay: delay(700),
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 shrink-0 rounded-full bg-accent" />
          <span className="h-1.5 w-10 rounded-full bg-border" />
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-border" />
        <div
          className="mt-1.5 h-1.5 w-[64%] rounded-full bg-border"
          style={{
            opacity: shown ? 1 : 0,
            transition: "opacity 250ms ease",
            transitionDelay: delay(1050),
          }}
        />
      </div>
    </div>
  );
}

/* ---- Coursify: a course assembles, then goes on sale ---- */

function CoursifyScene({ mode }: { mode: SceneMode }) {
  const shown = mode === "settled" || mode === "play";
  const delay = (ms: number) => (mode === "play" ? `${ms}ms` : "0ms");
  const reveal = (ms: number, hiddenTransform = "translateY(4px)") => ({
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : hiddenTransform,
    transition: "opacity 250ms ease, transform 250ms ease",
    transitionDelay: delay(ms),
  });

  return (
    <>
      {/* Course cover with its play button, then a title line under it. */}
      <div
        className="vignette-card absolute top-[10%] left-[7%] h-[46%] w-[40%] rounded-lg bg-surface"
        style={reveal(0, "scale(0.96)")}
      >
        <span
          className="absolute top-1/2 left-1/2 flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent"
          style={{
            opacity: shown ? 1 : 0,
            transform: `translate(-50%, -50%) scale(${shown ? 1 : 0.4})`,
            transition: "opacity 220ms ease, transform 220ms ease",
            transitionDelay: delay(250),
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M3 1.5 L8 5 L3 8.5 Z" fill="var(--on-accent)" />
          </svg>
        </span>
      </div>
      <div
        className="absolute top-[64%] left-[7%] h-2 w-[32%] rounded-full bg-border"
        style={reveal(400)}
      />

      {/* Lesson list building up beside the cover. */}
      <div className="absolute top-[12%] right-[7%] left-[54%] flex flex-col gap-2.5">
        {[100, 84, 68].map((width, i) => (
          <div
            key={width}
            className="flex items-center gap-2"
            style={reveal(450 + i * 150)}
          >
            <span className="size-2 shrink-0 rounded-sm bg-border" />
            <span
              className="h-1.5 rounded-full bg-border"
              style={{ width: `${width}%` }}
            />
          </div>
        ))}
      </div>

      {/* The sell moment. */}
      <div
        className="absolute right-[7%] bottom-[12%] rounded-full bg-accent px-2.5 py-1 font-mono text-meta text-on-accent"
        style={reveal(950, "scale(0.9)")}
      >
        Publish
      </div>
    </>
  );
}

/* ---- MR summary: a diff streams into an AI summary ---- */

const DIFF_ROWS: Array<{ sign: "+" | "-"; width: number }> = [
  { sign: "+", width: 72 },
  { sign: "-", width: 58 },
  { sign: "+", width: 84 },
];

function MrSummaryScene({ mode }: { mode: SceneMode }) {
  const shown = mode === "settled" || mode === "play";
  const delay = (ms: number) => (mode === "play" ? `${ms}ms` : "0ms");

  return (
    <>
      {/* The diff under review. */}
      <div className="vignette-card absolute inset-x-[7%] top-[8%] rounded-lg bg-surface px-3 py-1.5">
        {DIFF_ROWS.map((row, i) => (
          <div
            key={i}
            className="flex items-center gap-2 font-mono text-meta"
            style={{
              opacity: shown ? 1 : 0,
              transition: "opacity 200ms ease",
              transitionDelay: delay(i * 120),
            }}
          >
            <span
              className={`w-2 shrink-0 ${row.sign === "+" ? "text-accent" : "text-muted"}`}
            >
              {row.sign}
            </span>
            <span
              className="h-1.5 rounded-full bg-border"
              style={{ width: `${row.width}%` }}
            />
          </div>
        ))}
      </div>

      {/* The summary streaming in below it. */}
      <div
        className="vignette-card absolute inset-x-[7%] bottom-[8%] rounded-lg bg-surface px-3 pt-1.5 pb-2.5"
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? "none" : "translateY(6px)",
          transition: "opacity 250ms ease, transform 250ms ease",
          transitionDelay: delay(550),
        }}
      >
        <div className="flex items-center gap-1.5 font-mono text-meta text-muted">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="var(--accent)">
            <path d="M6 0 L7.3 4.7 L12 6 L7.3 7.3 L6 12 L4.7 7.3 L0 6 L4.7 4.7 Z" />
          </svg>
          Summary
        </div>
        <div className="mt-1.5 flex flex-col gap-2">
          {[100, 62].map((width, i) => (
            <span
              key={width}
              className="h-1.5 rounded-full bg-border"
              style={{
                width: `${width}%`,
                opacity: shown ? 1 : 0,
                transition: "opacity 250ms ease",
                transitionDelay: delay(800 + i * 200),
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

/* ---- MyMix: four picks lock in and the price range narrows to one ---- */

/* Each row is one inclusion: pill widths echo the builder's uneven option
   labels, `pick` is the option that gets chosen, `dims` grey out after an
   earlier pick removes them, nodding at the constraint logic. */
const MYMIX_ROWS: Array<{
  pills: number[];
  pick: number;
  dims?: number[];
}> = [
  { pills: [44, 52, 48], pick: 1 },
  { pills: [50, 38, 36, 38], pick: 1, dims: [3] },
  { pills: [56, 48], pick: 1 },
  { pills: [42, 50, 62], pick: 2, dims: [0] },
];

function MymixScene({ mode }: { mode: SceneMode }) {
  const shown = mode === "settled" || mode === "play";
  const delay = (ms: number) => (mode === "play" ? `${ms}ms` : "0ms");
  // One pick every 320ms; a row's casualties grey out just after its pick.
  const pickAt = (row: number) => 200 + row * 320;

  return (
    <div className="vignette-card absolute inset-x-[7%] inset-y-[8%] rounded-lg bg-surface px-3.5 py-3">
      <div className="flex h-full flex-col justify-between">
        {MYMIX_ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-1.5">
            {row.pills.map((width, pillIndex) => {
              const picked = shown && pillIndex === row.pick;
              const dimmed = shown && row.dims?.includes(pillIndex);
              return (
                <span
                  key={pillIndex}
                  className="h-[13px] rounded-[5px] border"
                  style={{
                    width,
                    borderColor: picked ? "var(--accent)" : "var(--border)",
                    background: picked
                      ? "color-mix(in srgb, var(--accent) 22%, var(--surface))"
                      : "var(--surface)",
                    opacity: dimmed ? 0.35 : 1,
                    transition:
                      "border-color 200ms ease, background 200ms ease, opacity 300ms ease",
                    transitionDelay: delay(
                      dimmed ? pickAt(rowIndex) + 140 : pickAt(rowIndex),
                    ),
                  }}
                />
              );
            })}
          </div>
        ))}

        {/* The price band: a full-width range that narrows one step per pick
            until only the mix's own price is left. steps() makes the width
            jump with each selection instead of gliding. */}
        <div className="flex h-[15px] items-center justify-center rounded-[5px] bg-panel-2 px-1">
          <span
            className="h-[7px] rounded-full bg-accent"
            style={{
              width: shown ? "10%" : "88%",
              /* The stepped narrowing only runs forward; resetting (and
                 settling back after an aborted hover) snaps, so an
                 interrupted step transition can't strand the band. */
              transition:
                mode === "play"
                  ? "width 1280ms steps(4, jump-end) 320ms"
                  : "width 150ms ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ---- Bem Direto: an agent buys a lead and the contact unlocks ---- */

/* The app's paid moment: a buyer's phone stays masked until the agent pays
   the lead's price, so the reveal IS the transaction. Digits and prices are
   the app's own (2012 Rio numbers were 8 digits). */
const BEMDIRETO_UNLOCK_MS = 1050;

function BemDiretoScene({ mode }: { mode: SceneMode }) {
  const shown = mode === "settled" || mode === "play";
  const delay = (ms: number) => (mode === "play" ? `${ms}ms` : "0ms");
  const reveal = (ms: number, hiddenTransform = "translateY(4px)") => ({
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : hiddenTransform,
    transition: "opacity 250ms ease, transform 250ms ease",
    transitionDelay: delay(ms),
  });
  // Both sides of the unlock share one moment; swaps land together.
  const swap = (visible: boolean, extraMs = 0) => ({
    opacity: visible ? 1 : 0,
    transition: "opacity 200ms ease",
    transitionDelay: delay(BEMDIRETO_UNLOCK_MS + extraMs),
  });

  return (
    <>
      {/* The lead: who wants to buy, and what the contact costs the agent. */}
      <div className="vignette-card absolute inset-x-[7%] top-[8%] rounded-lg bg-surface px-3 py-2.5">
        <div className="flex items-center gap-2" style={reveal(0)}>
          <span className="size-3 shrink-0 rounded-full bg-border" />
          <span className="h-1.5 w-14 rounded-full bg-border" />
          <span className="ml-auto font-mono text-meta text-accent">
            R$ 9,90
          </span>
        </div>
        <div
          className="mt-2.5 h-1.5 w-[85%] rounded-full bg-border"
          style={reveal(150)}
        />
        <div
          className="mt-1.5 h-1.5 w-[55%] rounded-full bg-border"
          style={reveal(250)}
        />
      </div>

      {/* The contact: masked digits until the buy, then the number is real. */}
      <div
        className="vignette-card absolute inset-x-[7%] bottom-[8%] flex items-center justify-between rounded-lg bg-surface px-3 py-2"
        style={reveal(450)}
      >
        <span className="font-mono text-meta text-text">
          (021) 8187{" "}
          <span className="relative">
            <span className="text-muted" style={swap(!shown)}>
              ****
            </span>
            <span className="absolute left-0" style={swap(shown)}>
              3452
            </span>
          </span>
        </span>
        <span className="relative h-[21px] w-[76px] shrink-0">
          <span
            className="absolute inset-0 flex items-center justify-center rounded-full bg-accent font-mono text-meta text-on-accent"
            style={{
              ...swap(!shown),
              transform: shown ? "scale(0.92)" : "none",
              transition: "opacity 200ms ease, transform 200ms ease",
            }}
          >
            Comprar
          </span>
          <span
            className="absolute top-1/2 right-0 flex size-[18px] items-center justify-center rounded-full bg-accent"
            style={{
              opacity: shown ? 1 : 0,
              transform: `translateY(-50%) scale(${shown ? 1 : 0.4})`,
              transition: "opacity 200ms ease, transform 200ms ease",
              transitionDelay: delay(BEMDIRETO_UNLOCK_MS + 80),
            }}
          >
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
              <path
                d="M1.5 5.5 L4 8 L8.5 2"
                stroke="var(--on-accent)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </div>
    </>
  );
}

/* ---- BirthGuide: the winding route draws through its stages ---- */

/* Dots sit on the two cubic segments' endpoints, so they are on-path by
   construction rather than measured. */
const ROUTE_D = "M 28 112 C 92 112 92 36 132 36 C 172 36 176 96 214 84";
const ROUTE_DOTS: Array<[number, number]> = [
  [28, 112],
  [132, 36],
  [214, 84],
];

function BirthGuideScene({ mode }: { mode: SceneMode }) {
  const active = mode === "play";
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) setLength(pathRef.current.getTotalLength());
  }, []);

  return (
    <>
      <svg
        viewBox="0 0 240 148"
        className="absolute inset-x-[8%] top-[4%] h-[78%] w-[84%]"
        fill="none"
      >
        <path
          ref={pathRef}
          d={ROUTE_D}
          stroke="var(--brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: length || 1,
            strokeDashoffset: active ? 0 : length || 1,
            opacity: length ? 1 : 0,
            transition: active
              ? "stroke-dashoffset 900ms ease 150ms"
              : "stroke-dashoffset 400ms ease",
          }}
        />
        {ROUTE_DOTS.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="5"
            fill={
              i === ROUTE_DOTS.length - 1 ? "var(--brand)" : "var(--surface)"
            }
            stroke="var(--brand)"
            strokeWidth="2"
            style={{
              opacity: active ? 1 : 0,
              transform: `scale(${active ? 1 : 0.4})`,
              transformOrigin: `${x}px ${y}px`,
              transition: "opacity 220ms ease, transform 220ms ease",
              transitionDelay: active ? `${250 + i * 350}ms` : "0ms",
            }}
          />
        ))}
      </svg>
      <div
        className="absolute right-[9%] bottom-[9%] font-mono text-meta text-muted"
        style={{
          opacity: active ? 1 : 0,
          transition: "opacity 300ms ease",
          transitionDelay: active ? "1150ms" : "0ms",
        }}
      >
        Stage by stage
      </div>
    </>
  );
}
