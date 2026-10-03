"use client";

import { useRef, useState } from "react";
import { Chip } from "./chip";
import { PanelLink } from "./panel-link";
import { WorkRow } from "./work-row";
import { HeroStage, useScenePlayback } from "./hero-scenes";
import type { WorkVignetteKind } from "./work-vignette-kinds";

export type FeaturedItem = {
  href: string;
  title: string;
  tagline: string;
  /** "·"-separated facts; each becomes a Chip, as in WorkRow. */
  outcome?: string;
  vignette: WorkVignetteKind;
};

/**
 * Home-page hero for the lead case studies: a list on the leading edge and
 * one large stage on the trailing edge. The first project is selected and
 * plays on arrival; hovering or focusing another project swaps the stage to
 * its scene and plays it. The selected scene loops while the stage is on
 * screen, and rests on its finished frame for reduced motion.
 *
 * Below the two-column width (phones, and the narrow split-panel list) the
 * stage has no room, so the same projects render as ordinary WorkRows,
 * which play their own scenes on hover or scroll.
 */
export function FeaturedWork({ items }: { items: FeaturedItem[] }) {
  const [selected, setSelected] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const { playToken, replay } = useScenePlayback(
    stageRef,
    items[selected].vignette,
  );

  const select = (index: number) => {
    if (index === selected) return;
    setSelected(index);
    // Replays the new scene now and restarts the loop clock.
    replay();
  };

  return (
    <>
      <div className="hidden grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-10 @min-[760px]:grid">
        <ul role="list" className="m-0 -ml-5 flex list-none flex-col gap-1 p-0">
          {items.map((item, index) => {
            const isSelected = index === selected;
            return (
              <li key={item.href}>
                <PanelLink
                  href={item.href}
                  onMouseEnter={() => select(index)}
                  onFocus={() => select(index)}
                  data-featured-selected={isSelected ? "" : undefined}
                  /* The selected project sits in a filled pill, pairing it
                     with the stage it is playing on. */
                  className={`group block rounded-card px-5 py-4 no-underline transition-colors duration-200 hover:no-underline ${
                    isSelected ? "bg-panel-2" : "bg-transparent"
                  }`}
                >
                  <h3 className="m-0 text-subhead-sm font-semibold text-text transition-colors duration-200 group-hover:text-brand">
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

        <div
          ref={stageRef}
          className="thumb-frame relative aspect-[16/10] overflow-hidden rounded-card bg-panel-2"
        >
          {items.map((item, index) => (
            <div
              key={item.href}
              className="vignette-fade absolute inset-0"
              style={{ opacity: index === selected ? 1 : 0 }}
            >
              <HeroStage
                kind={item.vignette}
                playToken={index === selected ? playToken : 0}
              />
            </div>
          ))}
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
