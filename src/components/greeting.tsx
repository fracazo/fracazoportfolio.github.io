import type { ReactNode } from "react";

/**
 * The hero greeting follows the visitor's clock, the way Brazilians actually
 * use it: "bom dia" until noon, "boa tarde" until dark, "boa noite" from
 * then on, 3am included. The emoji and the English half carry the meaning
 * for anyone who doesn't read Portuguese.
 *
 * Bands are [from, to) in local hours; `to` below `from` wraps past midnight.
 */
const bands: { part: string; from: number; to: number; line: ReactNode }[] = [
  { part: "early", from: 5, to: 9, line: <>☕ <span lang="pt">Bom dia</span>, you&rsquo;re up early.</> },
  { part: "morning", from: 9, to: 12, line: <>☀️ <span lang="pt">Bom dia</span>!</> },
  { part: "lunch", from: 12, to: 14, line: <>🥪 <span lang="pt">Boa tarde</span>, lunch break browsing?</> },
  { part: "afternoon", from: 14, to: 18, line: <>👋 <span lang="pt">Boa tarde</span>!</> },
  { part: "evening", from: 18, to: 22, line: <>🌇 <span lang="pt">Boa noite</span>, winding down?</> },
  { part: "late", from: 22, to: 1, line: <>🌙 <span lang="pt">Boa noite</span>, up late too?</> },
  { part: "night", from: 1, to: 5, line: <>🦉 <span lang="pt">Boa noite</span>, night owl.</> },
];

/**
 * Stamps the visitor's band on <html> (`data-daypart`) before first paint,
 * like the theme script, so the right line is there from the first frame and
 * React never sees a mismatch. Built from `bands`, so the two can't drift.
 */
export const greetingInit = `(function(){try{var h=new Date().getHours();var b=${JSON.stringify(
  bands.map(({ part, from, to }) => [part, from, to]),
)};for(var i=0;i<b.length;i++){var f=b[i][1],t=b[i][2];if(f<t?h>=f&&h<t:h>=f||h<t){document.documentElement.dataset.daypart=b[i][0];break;}}}catch(e){}})();`;

/**
 * Every line is in the HTML and globals.css shows the one for the stamped
 * band. "👋 Olá" is the fallback: what shows without JavaScript, to search
 * engines, and if the script fails.
 */
export function Greeting() {
  return (
    <>
      <span className="greeting" data-part="default">
        👋 <span lang="pt">Olá</span>,
      </span>
      {bands.map(({ part, line }) => (
        <span key={part} className="greeting" data-part={part}>
          {line}
        </span>
      ))}{" "}
    </>
  );
}
