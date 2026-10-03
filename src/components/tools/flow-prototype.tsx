import type { ReactNode } from "react";
import { CopyCommand } from "@/components/copy-command";
import { LoopingHeroStage } from "@/components/hero-scenes";
import { ExternalLinkIcon } from "@/components/icons";

/**
 * Body of the Flow prototype tool page, without the route chrome, so the same
 * content renders as /tools/flow-prototype and inside the side panel.
 * `breadcrumb` is the route's slot; the panel leaves it empty.
 *
 * Copy follows the skill's own SKILL.md and README: any device, not only
 * iPhone, and the two views are Map and Live.
 */
export function FlowPrototypeContent({
  breadcrumb,
}: {
  breadcrumb?: ReactNode;
} = {}) {
  return (
    <section className="section case-study-content">
      <div className="case-study-main">
        {breadcrumb}

        <header className="case-header">
          <p className="mb-2 text-meta font-medium tracking-[0.06em] text-muted uppercase">
            Claude Code skill · 2026
          </p>
          <h1 className="case-title">Flow prototype</h1>
          <p className="case-intro">
            A clickable prototype of every screen in a product, built by your
            coding agent from one markdown file. Map shows every screen at
            once. Live walks one path, screen by screen, in the device&rsquo;s
            own frame.
          </p>
        </header>

        <LoopingHeroStage
          kind="flow"
          label="Animation: the Live view walks an onboarding flow one screen at a time, then zooms out to the map of every screen and the path between them."
        />

        {/* min-w-0 lets the command scroll inside its box on phones instead
            of widening the page. */}
        <div className="mt-8 grid min-w-0 gap-3 [&>*]:min-w-0">
          <CopyCommand command="npx skills add fracazo/flow-prototype" />
          <p className="m-0 text-meta">
            <a
              href="https://skills.sh/fracazo/flow-prototype"
              target="_blank"
              rel="noopener"
            >
              skills.sh/fracazo/flow-prototype
              <ExternalLinkIcon size={12} className="external-mark" />
            </a>
          </p>
        </div>

        <div className="case-study-section">
          <h2>What you get</h2>
          <ul>
            <li>
              <strong>Map</strong> puts every screen of every flow on one page.
              Flows are rows, screens sit left to right, and the edges between
              them are coloured by type: happy, branch, refusal, back, sheet and
              inline.
            </li>
            <li>
              <strong>Live</strong> shows one screen at the product&rsquo;s real
              size, with why the screen exists and where it can go next. Arrow
              keys follow the path forward and back.
            </li>
            <li>
              <strong>Any device.</strong> iPhone, Android, web, watch or TV.
              The frame matches the device&rsquo;s real size and never gets
              stretched.
            </li>
          </ul>

          <h2>How it works</h2>
          <p>
            Two files drive it. <code>flows.md</code> says what exists: the
            flows, the screens in each, their copy and the edges between them.{" "}
            <code>design.md</code> says how it looks. Screens read their words
            from <code>flows.md</code>, so the copy lives in one place.
          </p>
          <p>
            On load, the viewer checks the file and lists what is wrong: an
            edge pointing at a screen that does not exist, a screen with no
            reason to exist, a dead end. It lists them instead of crashing.
          </p>

          <h2>Get started</h2>
          <ol>
            <li>Install the skill with the command above.</li>
            <li>
              Copy the skill&rsquo;s <code>template/</code> folder into an empty
              project and run <code>npm install</code>.
            </li>
            <li>
              Replace <code>flows.md</code> with your product, then ask your
              agent to build the screens.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
