"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { VignetteStage } from "./work-vignette";
import type { WorkVignetteKind } from "./work-vignette-kinds";

/**
 * Large scenes for the featured hero's stage. The row thumbnails keep their
 * small WorkVignette scenes; these are drawn for the stage's real size, so
 * they carry more of the product (tabs, columns, the generated query) than a
 * 280px thumb can hold. A kind without a hero scene yet falls back to its
 * thumbnail scene, scaled up.
 *
 * Scenes run on elapsed time: `t` is milliseconds since the replay started,
 * or Infinity for the settled frame, so the finished composition and every
 * moment of the timeline are plain functions of one number.
 */
export function HeroStage({
  kind,
  playToken,
}: {
  kind: WorkVignetteKind;
  playToken: number;
}) {
  const scene = HERO_SCENES[kind];
  if (!scene) return <VignetteStage kind={kind} playToken={playToken} />;
  return <HeroCanvas scene={scene} playToken={playToken} />;
}

/** How long each hero scene's loop runs, including its held final frame. */
export const HERO_LOOP_MS: Partial<Record<WorkVignetteKind, number>> = {
  glql: 7600,
  pages: 6800,
};

type HeroScene = (props: { t: number }) => ReactNode;

const HERO_SCENES: Partial<Record<WorkVignetteKind, HeroScene>> = {
  glql: GlqlHeroScene,
  pages: PagesHeroScene,
};

/* 16:10 like the stage, at about its rendered width, so text sits near 1:1. */
const HERO_W = 560;
const HERO_H = 350;
const TICK_MS = 50;
/* Past every scene's last cue: the clock stops and the final frame holds. */
const RUN_MS = 10000;
const RESET_MS = 220;

function HeroCanvas({
  scene: Scene,
  playToken,
}: {
  scene: HeroScene;
  playToken: number;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  // Elapsed time of the current replay, tagged with the token it belongs to
  // so a new replay never shows the previous run's last frame.
  const [clock, setClock] = useState({ token: 0, t: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const measure = () => setScale(el.clientWidth / HERO_W);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (playToken === 0) return;
    let interval: number | undefined;
    // A short cleared beat before the timeline, like the thumbnail replays.
    const start = window.setTimeout(() => {
      const startedAt = performance.now();
      interval = window.setInterval(() => {
        const t = performance.now() - startedAt;
        setClock({ token: playToken, t });
        if (t > RUN_MS) clearInterval(interval);
      }, TICK_MS);
    }, RESET_MS);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [playToken]);

  const t =
    playToken === 0 ? Infinity : clock.token === playToken ? clock.t : 0;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="work-vignette pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{ width: HERO_W, height: HERO_H, transform: `scale(${scale})` }}
      >
        <Scene t={t} />
      </div>
    </div>
  );
}

/* Shared enter transition: hidden until `at`, then fades and settles in. */
function reveal(t: number, at: number, from = "translateY(6px)") {
  const shown = t >= at;
  return {
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : from,
    transition: "opacity 250ms ease, transform 250ms ease",
  };
}

/* ---- GLQL: ask Duo in plain language, get filters, a table, and the query ---- */

const GLQL_PROMPT = "Show me Jamie's UX issues";
const GLQL_TYPE_START = 200;
const GLQL_CHAR_MS = 45;
const GLQL_TYPED = GLQL_TYPE_START + GLQL_PROMPT.length * GLQL_CHAR_MS;
const GLQL_CUE = {
  think: GLQL_TYPED + 150,
  filters: GLQL_TYPED + 550,
  generated: GLQL_TYPED + 850,
  table: GLQL_TYPED + 1150,
  // The Query code tab shows the GLQL Duo wrote: the view is inspectable,
  // not a black box.
  code: GLQL_TYPED + 2700,
  back: GLQL_TYPED + 4600,
};
const GLQL_FILTERS = [
  { key: "Label", value: "~UX" },
  { key: "Author", value: "Jamie" },
];
const GLQL_CODE = [
  ["display", "table"],
  ["fields", "state, title, assignee, labels"],
  ["query", 'label = "UX" and author = "jamie"'],
];
const GLQL_ROWS = [
  { open: true, title: 78 },
  { open: true, title: 64 },
  { open: true, title: 72 },
  { open: false, title: 56 },
];

function GlqlHeroScene({ t }: { t: number }) {
  const chars = Math.max(
    0,
    Math.min(
      GLQL_PROMPT.length,
      Math.floor((t - GLQL_TYPE_START) / GLQL_CHAR_MS),
    ),
  );
  const typing = t >= GLQL_TYPE_START && t < GLQL_TYPED;
  const codeTab = t >= GLQL_CUE.code && t < GLQL_CUE.back;
  const thinking = t >= GLQL_CUE.think && t < GLQL_CUE.filters;

  return (
    <div className="vignette-card absolute inset-4 rounded-xl bg-surface p-3.5">
      {/* Panel title and the two tabs; the underline slides between them. */}
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <span className="text-meta font-semibold text-text">
          Embedded view with Duo
        </span>
        <div className="relative flex gap-4 text-meta">
          <span className={codeTab ? "text-muted" : "text-text"}>Duo</span>
          <span className={codeTab ? "text-text" : "text-muted"}>
            Query code
          </span>
          <span
            className="absolute -bottom-[11px] left-0 h-[2px] rounded-full bg-accent"
            style={{
              width: codeTab ? 74 : 26,
              transform: `translateX(${codeTab ? 42 : 0}px)`,
              transition: "transform 300ms ease, width 300ms ease",
            }}
          />
        </div>
      </div>

      {/* Ask and answer share one slot: the Duo prompt with its generated
          filters, or the GLQL it compiled to. */}
      <div className="relative mt-3 h-[76px]">
        <div
          className="absolute inset-0"
          style={{
            opacity: codeTab ? 0 : 1,
            transition: "opacity 250ms ease",
          }}
        >
          <div className="flex h-9 items-center gap-2 rounded-lg border border-border px-3 text-meta">
            <svg
              viewBox="0 0 12 12"
              width="12"
              height="12"
              className="shrink-0"
              style={{
                transform: `scale(${thinking ? 1.3 : 1}) rotate(${thinking ? 45 : 0}deg)`,
                transition: "transform 300ms ease",
              }}
            >
              <path
                d="M6 0 7.3 4.7 12 6 7.3 7.3 6 12 4.7 7.3 0 6 4.7 4.7Z"
                fill="var(--accent)"
              />
            </svg>
            <span className="whitespace-nowrap text-text">
              {GLQL_PROMPT.slice(0, chars)}
            </span>
            {typing && (
              <span className="vignette-caret -ml-1.5 inline-block h-3.5 w-px bg-current text-text" />
            )}
            <span className="ml-auto flex size-6 items-center justify-center rounded-md bg-accent">
              <svg viewBox="0 0 12 12" width="10" height="10">
                <path
                  d="M2 6h8M7 3l3 3-3 3"
                  fill="none"
                  stroke="var(--panel)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            {GLQL_FILTERS.map((filter, i) => (
              <span
                key={filter.key}
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-0.5 text-meta whitespace-nowrap"
                style={reveal(t, GLQL_CUE.filters + i * 140, "scale(0.92)")}
              >
                <span className="text-muted">{filter.key} is</span>
                <span className="rounded-sm bg-accent/20 px-1 text-text">
                  {filter.value}
                </span>
              </span>
            ))}
            <span
              className="ml-auto text-meta text-muted"
              style={reveal(t, GLQL_CUE.generated, "none")}
            >
              Generated by AI
            </span>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-lg bg-panel-2 px-3 py-2 font-mono text-meta leading-[1.5]"
          style={{
            opacity: codeTab ? 1 : 0,
            transition: "opacity 250ms ease",
          }}
        >
          {GLQL_CODE.map(([key, value], i) => (
            <div
              key={key}
              className="whitespace-nowrap"
              style={
                codeTab
                  ? reveal(t, GLQL_CUE.code + 150 + i * 160, "translateX(-4px)")
                  : undefined
              }
            >
              <span className="text-accent">{key}</span>
              <span className="text-muted">: </span>
              <span className="text-text">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The embedded view itself. */}
      <div
        className="mt-2.5 rounded-lg border border-border"
        style={reveal(t, GLQL_CUE.table)}
      >
        <div className="flex items-center justify-between px-3 pt-2 pb-1.5 text-meta">
          <span className="font-semibold text-text">GLQL table</span>
          <span className="text-muted">{GLQL_ROWS.length} items</span>
        </div>
        <div className="grid grid-cols-[64px_1fr_76px_56px] gap-x-3 border-y border-border bg-panel-2 px-3 py-1 text-meta text-muted">
          <span>State</span>
          <span>Title</span>
          <span>Assignee</span>
          <span>Labels</span>
        </div>
        {GLQL_ROWS.map((row, i) => (
          <div
            key={i}
            className="grid h-6 grid-cols-[64px_1fr_76px_56px] items-center gap-x-3 px-3"
            style={reveal(t, GLQL_CUE.table + 120 + i * 90, "translateY(4px)")}
          >
            <span
              className={`w-fit rounded-full px-2 text-meta leading-[18px] ${
                row.open ? "bg-accent/20 text-text" : "bg-border text-muted"
              }`}
            >
              {row.open ? "Open" : "Closed"}
            </span>
            <span
              className="h-2 rounded-full bg-border"
              style={{ width: `${row.title}%` }}
            />
            <span className="flex items-center gap-1.5 text-meta text-text-body">
              <span className="size-3.5 rounded-full bg-accent/40" />
              Jamie
            </span>
            <span className="w-fit rounded-sm bg-accent/20 px-1 text-meta text-text">
              ~UX
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Typed text: how many characters of `text` show at time `t`. */
function typed(t: number, start: number, text: string, charMs: number) {
  return text.slice(
    0,
    Math.max(0, Math.min(text.length, Math.floor((t - start) / charMs))),
  );
}

/* ---- Pages: status first, then deployments, with a new one going live ---- */

const PAGES_URL = "https://docs.company.com";
const PAGES_CUE = {
  status: 200,
  url: 500,
  visit: 500 + PAGES_URL.length * 30 + 100,
  list: 1700,
  deploying: 2900,
  live: 4000,
};
const PAGES_TABS = ["Overview", "Pages deployments", "Domain & settings"];
/* Newest first. mr4 is the deployment that lands during the scene. */
const PAGES_DEPLOYS = ["mr4", "mr3", "mr2", "mr1"];
const PAGES_ROW_H = 38;

function PagesHeroScene({ t }: { t: number }) {
  const deploying = t >= PAGES_CUE.deploying;
  const live = t >= PAGES_CUE.live;
  const count = live ? 4 : 3;

  return (
    <div className="vignette-card absolute inset-4 rounded-xl bg-surface p-3.5">
      {/* Overview leads: the redesign's answer to "is my site up?" */}
      <div className="flex gap-5 border-b border-border text-meta">
        {PAGES_TABS.map((tab, i) => (
          <span
            key={tab}
            className={`relative pb-2 ${i === 0 ? "font-semibold text-text" : "text-muted"}`}
          >
            {tab}
            {i === 0 && (
              <span className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-accent" />
            )}
          </span>
        ))}
      </div>

      <div
        className="mt-3 flex items-center gap-3 rounded-lg border border-border px-3 py-2.5"
        style={reveal(t, PAGES_CUE.status)}
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 text-meta whitespace-nowrap">
            <span className="font-semibold text-text">
              Your pages site is live at
            </span>
            <span className="font-semibold text-accent">
              {typed(t, PAGES_CUE.url, PAGES_URL, 30)}
            </span>
          </div>
          <div className="mt-0.5 text-meta whitespace-nowrap text-muted">
            Deploy job {live ? 788 : 787} by Alex ·{" "}
            {live ? "just now" : "3 minutes ago"}
          </div>
        </div>
        <span
          className="shrink-0 rounded-md border border-border px-2.5 py-1 text-meta text-text"
          style={reveal(t, PAGES_CUE.visit, "scale(0.9)")}
        >
          Visit site
        </span>
      </div>

      <div
        className="mt-3 rounded-lg border border-border"
        style={reveal(t, PAGES_CUE.list)}
      >
        <div className="flex items-center gap-2 border-b border-border px-3 py-2 text-meta">
          <span className="font-semibold text-text">
            Recent pages deployments
          </span>
          {/* The deployment limit, visible where people deploy. */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-panel-2 px-2 text-muted">
            <svg viewBox="0 0 12 12" width="11" height="11">
              <circle
                cx="6"
                cy="6"
                r="4.5"
                fill="none"
                stroke="var(--border)"
                strokeWidth="2"
              />
              <circle
                cx="6"
                cy="6"
                r="4.5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray={`${Math.max(2, (count / 100) * 28.3)} 28.3`}
                transform="rotate(-90 6 6)"
              />
            </svg>
            <span className="tabular-nums">{count}/100</span>
          </span>
        </div>
        {/* Three rows show; the new deployment opens at the top and pushes
            the oldest out of view. */}
        <div className="overflow-hidden" style={{ height: PAGES_ROW_H * 3 }}>
          {PAGES_DEPLOYS.map((name, i) => {
            const isNew = i === 0;
            const active = !isNew || live;
            return (
              <div
                key={name}
                className="overflow-hidden"
                style={{
                  height: isNew && !deploying ? 0 : PAGES_ROW_H,
                  transition: "height 350ms ease",
                }}
              >
                <div
                  className="grid h-full grid-cols-[40px_1fr_auto] items-center gap-x-3 border-b border-border px-3 text-meta"
                  style={
                    isNew
                      ? undefined
                      : reveal(t, PAGES_CUE.list + 150 + i * 90, "translateY(4px)")
                  }
                >
                  <span className="text-accent">{name}</span>
                  <span className="flex min-w-0 items-center gap-2 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 leading-[18px] ${
                        active ? "bg-accent/20 text-text" : "bg-panel-2 text-muted"
                      }`}
                    >
                      {active ? (
                        <svg viewBox="0 0 12 12" width="10" height="10">
                          <circle cx="6" cy="6" r="6" fill="var(--accent)" />
                          <path
                            d="M3.5 6.2 5.3 8 8.6 4.6"
                            fill="none"
                            stroke="var(--panel)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <span className="size-2.5 animate-spin rounded-full border-2 border-border border-t-accent" />
                      )}
                      {active ? "Active" : "Deploying"}
                    </span>
                    <span className="text-muted">docs.gitlab.io/{name}</span>
                  </span>
                  <span className="text-muted">
                    {active ? "Expires in 23 hours" : "Just now"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-3 py-2 text-meta text-accent">
          Show more pages deployments
        </div>
      </div>
    </div>
  );
}
