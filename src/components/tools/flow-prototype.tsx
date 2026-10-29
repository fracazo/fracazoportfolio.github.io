import { CaseStudyLayout } from "@/components/case-study-layout";
import { CopyCommand } from "@/components/copy-command";

/**
 * Body of the Flow prototype tool page, without the route chrome, so the same
 * content renders as /tools/flow-prototype and inside the side panel.
 *
 * A skill has no icon: its slash command is its name, so the title is the
 * command, the slash muted like a prompt.
 *
 * Copy follows the skill's own SKILL.md and README: any device, not only
 * iPhone, and the two views are Map and Live.
 */
export function FlowPrototypeContent() {
  return (
    <CaseStudyLayout
      title={
        <>
          <span className="cs-slash" aria-hidden="true">/</span>flow-prototype
        </>
      }
      subtitle="Every screen of a prototype on one canvas"
      meta={[
        { label: "Role", value: ["Product designer", "Sole builder"] },
        { label: "Project type", value: ["Agent skill", "Open source"] },
        { label: "Works with", value: ["Claude Code", "Cursor", "Codex"] },
      ]}
      chapters={[
        { id: "fp-install", label: "Install" },
        { id: "fp-get", label: "What you get" },
        { id: "fp-how", label: "How it works" },
      ]}
      link={{
        href: "https://github.com/fracazo/flow-prototype",
        label: "github.com/fracazo/flow-prototype",
      }}
      hero={
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/flow-demo-poster.jpg"
          aria-label="Flow prototype at work: the map of every flow, one screen opened, the Live view stepping through screens, then the canvas zoomed out to every screen and path"
        >
          <source src="/videos/flow-demo.mp4" type="video/mp4" />
        </video>
      }
    >
      <section className="section case-study-content">
        <div className="case-study-main">
          <p className="cs-intro">
            AI coding tools can build a prototype, but they show it to you one
            screen at a time.
          </p>

          <div className="case-study-section">
            <p>
              Flow prototype puts every screen on one canvas, connected by the
              paths between them, so you can zoom out to see the whole product
              and zoom in to check any single screen. Live then walks one path,
              screen by screen, in the device&rsquo;s own frame.
            </p>
          </div>

          <div className="case-study-section">
            <h2 id="fp-install">Install</h2>
            {/* min-w-0 lets the command scroll inside its box on phones
                instead of widening the page; 24px below, like a paragraph. */}
            <div className="mb-6 grid min-w-0 [&>*]:min-w-0">
              <CopyCommand command="npx skills add fracazo/flow-prototype" />
            </div>
            {/* The command runs npm, so it needs an agent with a terminal:
                Claude Code, Cursor and Codex can run it; Figma Make cannot. */}
            <p>
              Copy the command and paste it into your coding agent. It works
              with Claude Code, Cursor, Codex or any other agent that can run
              terminal commands.
            </p>
          </div>

          <div className="case-study-section">
            <h2 id="fp-get">What you get</h2>
            <ul>
              <li>
                <strong>Map</strong>{" "}
                is a canvas with every screen of every flow on it. Zoom out to
                see how the whole product connects, zoom in to read one screen.
                Flows are rows, screens sit left to right, and the edges between
                them are coloured by type: happy, branch, refusal, back, sheet
                and inline.
              </li>
              <li>
                <strong>Live</strong>{" "}
                shows one screen at the product&rsquo;s real size, with why the
                screen exists and where it can go next. Arrow keys follow the
                path forward and back.
              </li>
              <li>
                <strong>Any device.</strong>{" "}
                iPhone, Android, web, watch or TV. The frame matches the
                device&rsquo;s real size and never gets stretched.
              </li>
            </ul>
          </div>

          <div className="case-study-section">
            <h2 id="fp-how">How it works</h2>
            <p>
              Two files drive it. <code>flows.md</code> says what exists: the
              flows, the screens in each, their copy and the edges between
              them. <code>design.md</code> says how it looks. Screens read their
              words from <code>flows.md</code>, so the copy lives in one place.
            </p>
            <p>
              On load, the viewer checks the file and lists what is wrong: an
              edge pointing at a screen that does not exist, a screen with no
              reason to exist, a dead end. It lists them instead of crashing.
            </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
