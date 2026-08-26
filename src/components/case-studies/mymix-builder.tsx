"use client";

import { useRef, useState } from "react";
import {
  type Combo,
  type Trait,
  RECHARGE,
  TRAITS,
  VOUCHER_30,
} from "./mymix-data";

/**
 * Working rebuild of the 2015 Pick & Mix test rig, running the original
 * pricing matrix. Two interaction hypotheses (buttons and sliders) over two
 * scenarios (open card recharge, $30 voucher), the same grid we put in front
 * of customers. Styled with the site's tokens rather than Vodafone's brand:
 * the point is the interaction model, not a replica.
 */

const ORDER: Record<Trait, string[]> = {
  Expiry: ["7 days", "28 days", "60 days"],
  Data: ["500MB", "2GB", "4GB", "6GB"],
  Voice: ["300 mins", "Infinite"],
  International: ["0 mins", "90 mins", "90 mins + Inf 10", "Infinite+"],
};

type Scenario = "card" | "voucher";
type Mode = "buttons" | "sliders";
type Filter = Partial<Record<Trait, string>>;

const matrixFor = (s: Scenario) => (s === "card" ? RECHARGE : VOUCHER_30);

function matches(rows: Combo[], filter: Filter) {
  return rows.filter((row) =>
    Object.entries(filter).every(([trait, value]) => row[trait as Trait] === value),
  );
}

function optionsFor(rows: Combo[], trait: Trait) {
  const present = new Set(rows.map((row) => row[trait]));
  return ORDER[trait].filter((value) => present.has(value));
}

function priceLabel(rows: Combo[]) {
  const prices = rows.map((row) => row.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? `$${min}` : `$${min}-${max}`;
}

/** Positions of the first matrix row, so sliders start on a valid mix. */
function initialPositions(rows: Combo[]): Record<Trait, number> {
  const first = rows[0];
  return Object.fromEntries(
    TRAITS.map((trait) => [trait, optionsFor(rows, trait).indexOf(first[trait])]),
  ) as Record<Trait, number>;
}

export function MymixBuilder() {
  const [mode, setMode] = useState<Mode>("buttons");
  const [scenario, setScenario] = useState<Scenario>("card");
  const [filter, setFilter] = useState<Filter>({});
  const [positions, setPositions] = useState<Record<Trait, number>>(() =>
    initialPositions(matrixFor("card")),
  );
  const [oops, setOops] = useState(false);

  const rows = matrixFor(scenario);

  const switchScenario = (next: Scenario) => {
    setScenario(next);
    setFilter({});
    setPositions(initialPositions(matrixFor(next)));
    setOops(false);
  };

  return (
    <div className="mymix-embed">
      <div className="mymix-controls">
        <div className="mymix-seg" role="tablist" aria-label="Interaction hypothesis">
          {(
            [
              ["buttons", "Buttons (shipped)"],
              ["sliders", "Sliders (tested)"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={mode === value}
              className="mymix-seg-btn"
              onClick={() => {
                setMode(value);
                setOops(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mymix-seg" role="tablist" aria-label="Payment scenario">
          {(
            [
              ["card", "Credit card"],
              ["voucher", "$30 voucher"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={scenario === value}
              className="mymix-seg-btn"
              onClick={() => switchScenario(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {mode === "buttons" ? (
        <ButtonsRig rows={rows} filter={filter} setFilter={setFilter} />
      ) : (
        <SlidersRig
          rows={rows}
          positions={positions}
          setPositions={setPositions}
          showOops={() => setOops(true)}
        />
      )}

      {oops && (
        <div className="mymix-oops" role="alertdialog" aria-label="Combination not available">
          <p className="mymix-oops-title">Oops&hellip; Sorry</p>
          <p>
            {scenario === "voucher"
              ? "The option you have chosen isn't available at this voucher value."
              : "That combination isn't on the price list."}
          </p>
          <button type="button" className="mymix-oops-ok" autoFocus onClick={() => setOops(false)}>
            OK
          </button>
        </div>
      )}

      <p className="mymix-embed-note">
        A working model of the original test rig, running the real 2015 pricing
        matrix ({RECHARGE.length} combinations). Continue goes nowhere; the
        pricing is long retired.
      </p>
    </div>
  );
}

function ButtonsRig({
  rows,
  filter,
  setFilter,
}: {
  rows: Combo[];
  filter: Filter;
  setFilter: (f: Filter) => void;
}) {
  const matching = matches(rows, filter);
  const complete = TRAITS.every((trait) => filter[trait]);

  // Port of the original prototype's three button states: an option is
  // available if it exists among rows matching every current selection, and
  // semi-available if it would exist once this trait's own selection changed.
  const availability = (trait: Trait, option: string) => {
    if (filter[trait] === option) return "selected";
    if (matching.some((row) => row[trait] === option)) return "open";
    if (filter[trait]) {
      const others = { ...filter };
      delete others[trait];
      if (matches(rows, others).some((row) => row[trait] === option)) return "semi";
    }
    return "closed";
  };

  const toggle = (trait: Trait, option: string) => {
    const next = { ...filter };
    if (next[trait] === option) delete next[trait];
    else next[trait] = option;
    setFilter(next);
  };

  return (
    <div>
      {TRAITS.map((trait) => (
        <div key={trait} className="mymix-group">
          <p className="mymix-group-label">
            {trait === "International" ? "International calls" : trait}
          </p>
          <div className="mymix-options">
            {optionsFor(rows, trait).map((option) => {
              const state = availability(trait, option);
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={state === "selected"}
                  disabled={state === "closed"}
                  data-state={state}
                  className="mymix-opt"
                  onClick={() => toggle(trait, option)}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mymix-price" aria-live="polite">
        <span className="mymix-price-value">{priceLabel(matching)}</span>
        <span className="mymix-price-note">
          {complete
            ? "Your mix, priced."
            : `${matching.length} of ${rows.length} combinations still possible`}
        </span>
      </div>

      <div className="mymix-actions">
        <button type="button" className="mymix-continue" aria-disabled={!complete} data-ready={complete}>
          Continue
        </button>
        <button type="button" className="mymix-reset" onClick={() => setFilter({})}>
          Reset
        </button>
      </div>
    </div>
  );
}

function SlidersRig({
  rows,
  positions,
  setPositions,
  showOops,
}: {
  rows: Combo[];
  positions: Record<Trait, number>;
  setPositions: (p: Record<Trait, number>) => void;
  showOops: () => void;
}) {
  // Draft position while a handle is mid-drag; committed on release, and
  // reverted with the original prototype's apology when the mix doesn't exist.
  const [draft, setDraft] = useState<{ trait: Trait; index: number } | null>(null);
  const trackRefs = useRef<Partial<Record<Trait, HTMLDivElement | null>>>({});

  const commit = (trait: Trait, index: number) => {
    setDraft(null);
    if (index === positions[trait]) return;
    const candidate = { ...positions, [trait]: index };
    const exists = rows.some((row) =>
      TRAITS.every((t) => row[t] === optionsFor(rows, t)[candidate[t]]),
    );
    if (exists) setPositions(candidate);
    else showOops();
  };

  const indexFromPointer = (trait: Trait, clientY: number) => {
    const track = trackRefs.current[trait];
    const count = optionsFor(rows, trait).length;
    if (!track || count < 2) return 0;
    const rect = track.getBoundingClientRect();
    const ratio = (rect.bottom - clientY) / rect.height;
    return Math.min(count - 1, Math.max(0, Math.round(ratio * (count - 1))));
  };

  const current = rows.find((row) =>
    TRAITS.every((t) => row[t] === optionsFor(rows, t)[positions[t]]),
  );

  return (
    <div>
      <div className="mymix-sliders">
        {TRAITS.map((trait) => {
          const options = optionsFor(rows, trait);
          const index = draft?.trait === trait ? draft.index : positions[trait];
          const ratio = options.length < 2 ? 0 : index / (options.length - 1);
          return (
            <div key={trait} className="mymix-slider">
              <p className="mymix-group-label">
                {trait === "International" ? "Int. calls" : trait}
              </p>
              <div
                ref={(el) => {
                  trackRefs.current[trait] = el;
                }}
                className="mymix-track"
                onPointerDown={(event) => {
                  event.currentTarget.setPointerCapture(event.pointerId);
                  setDraft({ trait, index: indexFromPointer(trait, event.clientY) });
                }}
                onPointerMove={(event) => {
                  if (draft?.trait === trait)
                    setDraft({ trait, index: indexFromPointer(trait, event.clientY) });
                }}
                onPointerUp={(event) => {
                  commit(trait, indexFromPointer(trait, event.clientY));
                }}
              >
                {options.map((option, optionIndex) => (
                  <span
                    key={option}
                    className="mymix-detent"
                    style={{
                      bottom: `${
                        options.length < 2 ? 0 : (optionIndex / (options.length - 1)) * 100
                      }%`,
                    }}
                  >
                    {option}
                  </span>
                ))}
                <span
                  role="slider"
                  tabIndex={0}
                  aria-orientation="vertical"
                  aria-label={trait}
                  aria-valuemin={0}
                  aria-valuemax={options.length - 1}
                  aria-valuenow={index}
                  aria-valuetext={options[index]}
                  className="mymix-handle"
                  style={{ bottom: `${ratio * 100}%` }}
                  onKeyDown={(event) => {
                    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
                    event.preventDefault();
                    const step = event.key === "ArrowUp" ? 1 : -1;
                    const next = Math.min(
                      options.length - 1,
                      Math.max(0, positions[trait] + step),
                    );
                    commit(trait, next);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mymix-price" aria-live="polite">
        <span className="mymix-price-value">{current ? `$${current.price}` : "?"}</span>
        <span className="mymix-price-note">Drag a handle. Every position looks legal.</span>
      </div>

      <div className="mymix-actions">
        <button type="button" className="mymix-continue" data-ready={true}>
          I want this one
        </button>
      </div>
    </div>
  );
}
