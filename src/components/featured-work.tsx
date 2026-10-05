"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Chip } from "./chip";
import { PanelLink } from "./panel-link";
import { WorkRow } from "./work-row";
import { HeroStage, useScenePlayback } from "./hero-scenes";
import type { WorkVignetteKind } from "./work-vignette-kinds";

export type FeaturedItem = {
  href: string;
  /** Company and year, e.g. "GitLab · 2025": names the client up front. */
  meta: string;
  title: string;
  tagline: string;
  /** "·"-separated facts; each becomes a Chip, as in WorkRow. */
  outcome?: string;
  vignette: WorkVignetteKind;
};

/* How long the pointer has to rest on a project before the stage switches,
   so crossing the list on the way to the stage doesn't flip it. */
const HOVER_INTENT_MS = 180;
/* The plate's corner radius, and the concave fillets where the selected
   row's bar meets the stage. Matches rounded-card. */
const PLATE_RADIUS = 12;
/* How far a scene travels as it leaves or arrives. */
const SCENE_SHIFT_PX = 24;
const PLATE_EASE = "cubic-bezier(0.2, 0.8, 0.2, 1)";

type Plate = {
  /** The selected row, relative to the hero. */
  top: number;
  height: number;
  left: number;
  stageLeft: number;
  /** How far the stage follows the selection down, and where that puts it. */
  stageShift: number;
  stageTop: number;
  stageHeight: number;
};

/**
 * Home-page hero for the lead case studies: a list on the leading edge and
 * one large stage on the trailing edge. One panel-2 plate holds the stage
 * and reaches across to the selected project, so the project and its scene
 * read as one object. Picking another project slides the bar to it, the
 * stage follows (centred on the row, kept within the list's height, so the
 * bar always meets its side), and the scenes move the same way. Each scene plays once when
 * selected and holds its final frame (reduced motion: settled, no slide).
 *
 * Selection follows hover only after a short rest, and ignores the synthetic
 * hovers a scroll produces, so the stage never changes under a still mouse.
 * Keyboard focus selects at once.
 *
 * Below the two-column width (phones, and the narrow split-panel list) the
 * stage has no room, so the same projects render as ordinary WorkRows,
 * which play their own scenes on hover or scroll.
 */
export function FeaturedWork({ items }: { items: FeaturedItem[] }) {
  const [selected, setSelected] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const intentRef = useRef<{ index: number; timer: number } | null>(null);
  const [bar, setBar] = useState<Plate | null>(null);
  const { playToken, replay } = useScenePlayback(
    stageRef,
    items[selected].vignette,
    { loop: false },
  );

  const select = (index: number) => {
    if (index === selected) return;
    setSelected(index);
    replay();
  };

  const cancelIntent = () => {
    if (intentRef.current) clearTimeout(intentRef.current.timer);
    intentRef.current = null;
  };

  // A real pointer move starts the rest timer; a scroll's synthetic move
  // carries no movement and is ignored.
  const onPointerMove = (index: number, event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    if (event.movementX === 0 && event.movementY === 0) return;
    if (intentRef.current?.index === index) return;
    cancelIntent();
    intentRef.current = {
      index,
      timer: window.setTimeout(() => {
        intentRef.current = null;
        select(index);
      }, HOVER_INTENT_MS),
    };
  };

  // Measure the selected row and place the stage beside it, again on any
  // resize. Offsets, not client rects: they ignore the stage's own
  // transform, so a measurement mid-slide is still right.
  useLayoutEffect(() => {
    const root = rootRef.current;
    const list = listRef.current;
    const stage = stageRef.current;
    const item = itemRefs.current[selected];
    if (!root || !list || !stage || !item) return;
    const measure = () => {
      const top = list.offsetTop + item.offsetTop;
      const height = item.offsetHeight;
      const stageHeight = stage.offsetHeight;
      const room = Math.max(0, list.offsetTop + list.offsetHeight - stageHeight);
      const centred = top + height / 2 - stageHeight / 2 - stage.offsetTop;
      const stageShift = Math.min(Math.max(0, centred), room);
      setBar({
        top,
        height,
        left: list.offsetLeft + item.offsetLeft,
        stageLeft: stage.offsetLeft,
        stageShift,
        stageTop: stage.offsetTop + stageShift,
        stageHeight,
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [selected]);

  const slide = `350ms ${PLATE_EASE}`;
  // Fillets only where the bar meets the stage's straight left edge.
  const topFillet = bar && bar.top - bar.stageTop >= PLATE_RADIUS * 2;
  const bottomFillet =
    bar &&
    bar.stageTop + bar.stageHeight - (bar.top + bar.height) >= PLATE_RADIUS * 2;

  return (
    <>
      <div
        ref={rootRef}
        className="featured-plate relative hidden grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-10 @min-[760px]:grid"
      >
        {/* The bar: the plate's reach from the stage to the selected row. It
            runs under the stage's left edge so the two read as one shape. */}
        {bar && (
          <>
            <div
              aria-hidden="true"
              className="featured-plate-slide pointer-events-none absolute rounded-card bg-panel-2"
              style={{
                top: bar.top,
                height: bar.height,
                left: bar.left,
                width: bar.stageLeft - bar.left + PLATE_RADIUS * 2,
                transition: `top ${slide}, height ${slide}`,
              }}
            />
            <span
              aria-hidden="true"
              className="featured-plate-slide pointer-events-none absolute"
              style={{
                top: bar.top - PLATE_RADIUS,
                left: bar.stageLeft - PLATE_RADIUS,
                width: PLATE_RADIUS,
                height: PLATE_RADIUS,
                background: `radial-gradient(circle at 0 0, transparent ${PLATE_RADIUS - 0.5}px, var(--panel-2) ${PLATE_RADIUS}px)`,
                opacity: topFillet ? 1 : 0,
                transition: `top ${slide}, opacity 150ms ease`,
              }}
            />
            <span
              aria-hidden="true"
              className="featured-plate-slide pointer-events-none absolute"
              style={{
                top: bar.top + bar.height,
                left: bar.stageLeft - PLATE_RADIUS,
                width: PLATE_RADIUS,
                height: PLATE_RADIUS,
                background: `radial-gradient(circle at 0 100%, transparent ${PLATE_RADIUS - 0.5}px, var(--panel-2) ${PLATE_RADIUS}px)`,
                opacity: bottomFillet ? 1 : 0,
                transition: `top ${slide}, opacity 150ms ease`,
              }}
            />
          </>
        )}

        <ul
          ref={listRef}
          role="list"
          className="relative m-0 -ml-5 flex list-none flex-col gap-1 p-0"
          onPointerLeave={cancelIntent}
        >
          {items.map((item, index) => {
            const isSelected = index === selected;
            return (
              <li key={item.href}>
                <PanelLink
                  ref={(el: HTMLAnchorElement | null) => {
                    itemRefs.current[index] = el;
                  }}
                  href={item.href}
                  onPointerMove={(event: React.PointerEvent) =>
                    onPointerMove(index, event)
                  }
                  onFocus={() => select(index)}
                  data-featured-selected={isSelected ? "" : undefined}
                  className="group block rounded-card px-5 py-4 no-underline hover:no-underline"
                >
                  <p className="m-0 mb-1 text-meta text-muted">{item.meta}</p>
                  <h3
                    className={`m-0 text-subhead-sm font-semibold transition-colors duration-200 group-hover:text-brand ${
                      isSelected ? "text-text" : "text-text-body"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1 mb-0 text-body leading-[1.3] font-normal text-text-body">
                    {item.tagline}
                  </p>
                  {item.outcome && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.outcome
                        .split("·")
                        .map((part) => part.trim())
                        .filter(Boolean)
                        .map((metric) => (
                          <Chip key={metric}>{metric}</Chip>
                        ))}
                    </div>
                  )}
                </PanelLink>
              </li>
            );
          })}
        </ul>

        {/* The stage is the plate's body: same fill as the bar, no frame of
            its own, so the bar joins it without a seam. */}
        <div
          ref={stageRef}
          className="featured-plate-slide relative aspect-[16/10] overflow-hidden rounded-card bg-panel-2"
          style={{
            transform: `translateY(${bar?.stageShift ?? 0}px)`,
            transition: `transform ${slide}`,
          }}
        >
          {items.map((item, index) => {
            // Scenes above the selection sit up, below it sit down, so a
            // switch moves both in the direction the bar travelled.
            const offset =
              index === selected ? 0 : index < selected ? -SCENE_SHIFT_PX : SCENE_SHIFT_PX;
            return (
              <div
                key={item.href}
                className="featured-plate-slide absolute inset-0"
                style={{
                  opacity: index === selected ? 1 : 0,
                  transform: `translateY(${offset}px)`,
                  transition: `opacity 250ms ease, transform ${slide}`,
                }}
              >
                <HeroStage
                  kind={item.vignette}
                  playToken={index === selected ? playToken : 0}
                />
              </div>
            );
          })}
        </div>
      </div>

      <ul
        role="list"
        className="m-0 flex list-none flex-col gap-1 p-0 @min-[760px]:hidden"
      >
        {items.map((item, index) => (
          <li key={item.href}>
            <WorkRow {...item} priority={index === 0} />
          </li>
        ))}
      </ul>
    </>
  );
}
