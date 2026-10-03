"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
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

/* Loop for scenes without their own length (the scaled thumbnail scenes):
   one pass plus a held final frame, so each reads finished before replaying. */
const DEFAULT_LOOP_MS = 4500;
/* Small lead-in so the first play starts after the page reveal settles. */
const FIRST_PLAY_MS = 400;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Drives a stage's playToken: plays once the stage is on screen, then loops
 * every `loopMs` while it stays there. `replay` restarts the scene and the
 * loop clock now (the hero calls it on selection). Reduced motion never
 * plays, so the stage rests on its settled frame.
 */
export function useScenePlayback(
  stageRef: RefObject<HTMLElement | null>,
  kind: WorkVignetteKind,
) {
  const [playToken, setPlayToken] = useState(0);
  const [onScreen, setOnScreen] = useState(false);
  const loopMs = HERO_LOOP_MS[kind] ?? DEFAULT_LOOP_MS;

  // display:none never intersects, so a hidden stage never runs a timer.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, [stageRef]);

  useEffect(() => {
    if (!onScreen || prefersReducedMotion()) return;
    const timer = window.setTimeout(
      () => setPlayToken((token) => token + 1),
      playToken === 0 ? FIRST_PLAY_MS : loopMs,
    );
    return () => clearTimeout(timer);
  }, [onScreen, playToken, loopMs]);

  const replay = useCallback(() => {
    if (!prefersReducedMotion()) setPlayToken((token) => token + 1);
  }, []);

  return { playToken, replay };
}

/**
 * A framed stage that plays one hero scene on its own, looping while on
 * screen: the tool pages use it above their write-up. `label` describes the
 * animation for screen readers, since the scene itself is aria-hidden.
 */
export function LoopingHeroStage({
  kind,
  label,
}: {
  kind: WorkVignetteKind;
  label: string;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const { playToken } = useScenePlayback(stageRef, kind);
  return (
    <div
      ref={stageRef}
      role="img"
      aria-label={label}
      className="thumb-frame relative aspect-[16/10] overflow-hidden rounded-card bg-panel-2"
    >
      <HeroStage kind={kind} playToken={playToken} />
    </div>
  );
}

/** How long each hero scene's loop runs, including its held final frame. */
export const HERO_LOOP_MS: Partial<Record<WorkVignetteKind, number>> = {
  glql: 7600,
  pages: 6800,
  flow: 8400,
};

type HeroScene = (props: { t: number }) => ReactNode;

const HERO_SCENES: Partial<Record<WorkVignetteKind, HeroScene>> = {
  glql: GlqlHeroScene,
  pages: PagesHeroScene,
  flow: FlowHeroScene,
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

/* ---- Flow prototype: Live walks one path, then Map shows every screen ---- */

/* The map canvas, in the scene body's own pixels: at scale 1 the whole map
   fits the body, and Live is the same canvas zoomed onto one screen. */
const FLOW_BODY_W = 504;
const FLOW_BODY_H = 258;
const FLOW_PHONE_W = 69;
const FLOW_PHONE_H = 150;
const FLOW_PHONE_TOP = 70;
const FLOW_LIVE_SCALE = 1.35;
/* Live frames a little above the screen's centre, so the edge leaving it
   (and its arrowhead on the next screen) stays in view while it walks. */
const FLOW_LIVE_LIFT = 18;
const FLOW_SCREENS = [
  { x: 30, beat: "1.1", title: "Welcome", action: "Continue" },
  { x: 155, beat: "1.2", title: "Your email", action: "Continue" },
  { x: 280, beat: "1.3", title: "Check your inbox", action: "Verify" },
  { x: 405, beat: "1.4", title: "You're in", action: "Open app" },
];
/* Tap on screen i, then the camera follows the edge to screen i + 1. */
const FLOW_STEP_MS = 1300;
const FLOW_FIRST_TAP = 700;
const flowTapAt = (i: number) => FLOW_FIRST_TAP + i * FLOW_STEP_MS;
const flowArriveAt = (i: number) => (i === 0 ? 0 : flowTapAt(i - 1) + 300);
const FLOW_MAP_AT = flowTapAt(FLOW_SCREENS.length - 1);

function FlowHeroScene({ t }: { t: number }) {
  const mapView = t >= FLOW_MAP_AT;
  // The screen the Live camera is on: the last one it has arrived at.
  let current = 0;
  FLOW_SCREENS.forEach((_, i) => {
    if (t >= flowArriveAt(i)) current = i;
  });
  const focus = FLOW_SCREENS[current];
  const cx = focus.x + FLOW_PHONE_W / 2;
  const cy = FLOW_PHONE_TOP + FLOW_PHONE_H / 2 - FLOW_LIVE_LIFT;
  const camera = mapView
    ? "translate(0px, 0px) scale(1)"
    : `translate(${FLOW_BODY_W / 2 - FLOW_LIVE_SCALE * cx}px, ${
        FLOW_BODY_H / 2 - FLOW_LIVE_SCALE * cy
      }px) scale(${FLOW_LIVE_SCALE})`;

  return (
    <div className="vignette-card absolute inset-4 flex flex-col rounded-xl bg-surface p-3">
      <div className="flex h-7 items-center justify-between">
        <div className="leading-tight">
          <div className="text-meta text-muted">Flow map</div>
          <div className="text-meta font-semibold text-text">Onboarding</div>
        </div>
        <div className="flex rounded-full bg-panel-2 p-0.5 text-meta">
          {["Map", "Live"].map((label) => {
            const on = (label === "Map") === mapView;
            return (
              <span
                key={label}
                className={`rounded-full px-3 py-0.5 ${on ? "bg-text text-surface" : "text-muted"}`}
                style={{ transition: "background-color 250ms ease, color 250ms ease" }}
              >
                {label}
              </span>
            );
          })}
        </div>
      </div>

      <div
        className="relative mt-2 overflow-hidden rounded-lg bg-panel-2"
        style={{ width: FLOW_BODY_W, height: FLOW_BODY_H }}
      >
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{
            width: FLOW_BODY_W,
            height: FLOW_BODY_H,
            transform: camera,
            transition: "transform 700ms cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        >
          <svg
            className="absolute inset-0"
            width={FLOW_BODY_W}
            height={FLOW_BODY_H}
            viewBox={`0 0 ${FLOW_BODY_W} ${FLOW_BODY_H}`}
          >
            {/* The template's back edge: dotted, from 1.2 home to 1.1. */}
            <path
              d={flowArc(1, 0, 30)}
              fill="none"
              stroke="var(--muted)"
              strokeOpacity="0.6"
              strokeWidth="1.5"
              strokeDasharray="2 4"
              strokeLinecap="round"
            />
            <path d={flowArrowHead(0)} fill="var(--muted)" fillOpacity="0.6" />
            {FLOW_SCREENS.slice(0, -1).map((_, i) => (
              <g key={i}>
                <path
                  d={flowArc(i, i + 1, 40)}
                  fill="none"
                  stroke="var(--muted)"
                  strokeOpacity="0.6"
                  strokeWidth="1.5"
                />
                {/* The walked path draws over the edge as the camera
                    follows it. */}
                <path
                  d={flowArc(i, i + 1, 40)}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1"
                  style={{
                    strokeDashoffset: t >= flowTapAt(i) ? 0 : 1,
                    transition: "stroke-dashoffset 600ms ease",
                  }}
                />
                <path
                  d={flowArrowHead(i + 1)}
                  fill={t >= flowArriveAt(i + 1) ? "var(--accent)" : "var(--muted)"}
                  fillOpacity={t >= flowArriveAt(i + 1) ? 1 : 0.6}
                  style={{ transition: "fill 200ms ease, fill-opacity 200ms ease" }}
                />
              </g>
            ))}
          </svg>

          {FLOW_SCREENS.map((screen, i) => (
            <FlowPhone
              key={screen.beat}
              index={i}
              visited={t >= flowArriveAt(i)}
              tapped={t >= flowTapAt(i) && t < flowTapAt(i) + 400}
            />
          ))}
        </div>

        {/* Fixed map chrome: the edge legend and zoom controls. */}
        <div
          className="absolute top-2 left-2 flex gap-1.5 text-meta"
          style={{ opacity: mapView ? 1 : 0, transition: "opacity 300ms ease" }}
        >
          {[
            { label: "happy", dash: undefined },
            { label: "back", dash: "2 3" },
          ].map((edge) => (
            <span
              key={edge.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-surface px-2 py-0.5 text-text-body"
            >
              <svg width="14" height="2" viewBox="0 0 14 2">
                <line
                  x1="0"
                  y1="1"
                  x2="14"
                  y2="1"
                  stroke="var(--muted)"
                  strokeWidth="1.5"
                  strokeDasharray={edge.dash}
                />
              </svg>
              {edge.label}
            </span>
          ))}
        </div>
        {/* Zoom controls arrive just before the zoom out, and "−" presses
            as the camera pulls back: the canvas is something you zoom. */}
        <div
          className="absolute right-2 bottom-2 flex flex-col overflow-hidden rounded-md bg-surface text-meta leading-none text-muted"
          style={{
            opacity: t >= FLOW_MAP_AT - 400 ? 1 : 0,
            transition: "opacity 250ms ease",
          }}
        >
          {["+", "−"].map((sign) => {
            const pressed =
              sign === "−" && t >= FLOW_MAP_AT - 150 && t < FLOW_MAP_AT + 350;
            return (
              <span
                key={sign}
                className="flex size-5 items-center justify-center"
                style={{
                  background: pressed
                    ? "color-mix(in oklab, var(--accent) 30%, transparent)"
                    : undefined,
                  color: pressed ? "var(--text)" : undefined,
                  transition: "background-color 150ms ease, color 150ms ease",
                }}
              >
                {sign}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* An edge from the top centre of screen `from` to the top centre of `to`,
   bowing up to `peak`: the flow map's lane shape. */
/* Arrowheads are solid triangles whose tip touches the target screen; the
   edge ends at the triangle's base so the line never pokes through it. */
const FLOW_HEAD_TIP = FLOW_PHONE_TOP - 2;
const FLOW_HEAD_LEN = 8;
const FLOW_HEAD_HALF = 5;

function flowArc(from: number, to: number, peak: number) {
  const x1 = FLOW_SCREENS[from].x + FLOW_PHONE_W / 2;
  const x2 = FLOW_SCREENS[to].x + FLOW_PHONE_W / 2;
  const start = FLOW_PHONE_TOP - 4;
  const end = FLOW_HEAD_TIP - FLOW_HEAD_LEN + 1;
  return `M ${x1} ${start} C ${x1} ${peak}, ${x2} ${peak}, ${x2} ${end}`;
}

function flowArrowHead(to: number) {
  const x = FLOW_SCREENS[to].x + FLOW_PHONE_W / 2;
  const base = FLOW_HEAD_TIP - FLOW_HEAD_LEN;
  return `M ${x - FLOW_HEAD_HALF} ${base} L ${x + FLOW_HEAD_HALF} ${base} L ${x} ${FLOW_HEAD_TIP} Z`;
}

function FlowPhone({
  index,
  visited,
  tapped,
}: {
  index: number;
  visited: boolean;
  tapped: boolean;
}) {
  const screen = FLOW_SCREENS[index];
  return (
    <>
      <div
        className="absolute rounded-[14px] border-2 bg-surface"
        style={{
          left: screen.x,
          top: FLOW_PHONE_TOP,
          width: FLOW_PHONE_W,
          height: FLOW_PHONE_H,
          borderColor: visited ? "var(--accent)" : "var(--border)",
          transition: "border-color 250ms ease",
        }}
      >
        <span className="absolute top-1.5 left-1/2 h-[5px] w-[18px] -translate-x-1/2 rounded-full bg-text" />
        <div className="absolute inset-x-[7px] top-[18px]">
          <span className="block h-[3px] w-5 rounded-full bg-border" />
          <span className="mt-1 block text-[8px] leading-[10px] font-semibold text-text">
            {screen.title}
          </span>
          <FlowScreenBody index={index} />
        </div>
        <span className="absolute inset-x-[7px] bottom-[10px] flex h-3 items-center justify-center rounded-full bg-text text-[6px] font-medium text-surface">
          {screen.action}
        </span>
        {/* Tap: a ring pulses out from the primary action. */}
        <span
          className="absolute bottom-[4px] left-1/2 size-6 -translate-x-1/2 rounded-full border-2 border-accent"
          style={{
            opacity: tapped ? 1 : 0,
            transform: `translateX(-50%) scale(${tapped ? 1.4 : 0.6})`,
            transition: tapped
              ? "opacity 100ms ease, transform 400ms ease-out"
              : "opacity 250ms ease, transform 0ms",
          }}
        />
      </div>
      <div
        className="absolute flex items-center gap-1 text-meta whitespace-nowrap text-text"
        style={{ left: screen.x, top: FLOW_PHONE_TOP + FLOW_PHONE_H + 6 }}
      >
        <span className="size-1.5 rounded-full bg-accent" />
        {screen.beat}
      </div>
    </>
  );
}

/* Just enough of each screen to tell them apart: copy, a field, a code, a
   done mark. */
function FlowScreenBody({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="mt-1.5 flex flex-col gap-1">
        <span className="h-[3px] w-full rounded-full bg-border" />
        <span className="h-[3px] w-[70%] rounded-full bg-border" />
      </div>
    );
  }
  if (index === 1) {
    return (
      <span className="mt-2 block h-3 rounded-[3px] border border-border" />
    );
  }
  if (index === 2) {
    return (
      <div className="mt-2 flex gap-1">
        {[0, 1, 2, 3].map((box) => (
          <span key={box} className="h-3.5 flex-1 rounded-[3px] border border-border" />
        ))}
      </div>
    );
  }
  return (
    <svg className="mt-3" viewBox="0 0 16 16" width="16" height="16">
      <circle cx="8" cy="8" r="8" fill="var(--accent)" />
      <path
        d="M4.6 8.2 7 10.5 11.4 5.8"
        fill="none"
        stroke="var(--panel)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
