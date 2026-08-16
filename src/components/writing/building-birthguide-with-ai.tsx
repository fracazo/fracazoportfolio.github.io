import { HoverJoke } from "@/components/hover-joke";
import { WritingArticle } from "@/components/writing-article";
import type { ReactNode } from "react";

const title = "Building BirthGuide as a solo designer using AI";


/** Body of the building-birthguide-with-ai essay, without the route chrome. */
export function BuildingBirthguideWithAiContent({ back }: { back?: ReactNode } = {}) {
  return (
      <WritingArticle
        back={back}
        tags={["AI", "Design engineering", "BirthGuide", "Solo building"]}
        title={title}
        meta="7 min read"
        next={{
          href: "/writing/titles-are-a-trap",
          title: "Titles are a trap. And the inner critic knows it.",
        }}
      >
        <p>
          I&rsquo;m a designer who started my career in 2005 as a web designer,{" "}
          <HoverJoke
            id="photoshop-joke"
            word="designing"
            src="/images/photoshop-grandma.jpg"
            alt="Meme: an elderly woman with a walking frame says 'I used to design websites in photoshop', and the young woman helping her replies 'Sure you did grandma, let's get you back in bed'."
            width={640}
            height={446}
          />{" "}
          and coding with tables, then tableless.
          That&rsquo;s how I learned to code, and after the basics the rest was a
          simple evolution. I&rsquo;ve been doing design and code for a long
          time, long enough to have a strong opinion about craft, and skeptical
          enough about AI to not just hand things over blindly. I built{" "}
          <a href="https://birthguide.com.au">BirthGuide</a>{" "}
          solo this year, from zero to production, and my position shifted in
          ways I didn&rsquo;t expect.
        </p>

        <p>This is how I actually used AI to ship it.</p>

        <hr className="writing-rule" />

        <h2>The honest thing about AI and iteration</h2>

        <p>
          The way I used to work: spend hours designing a concept just to find
          out whether it was worth keeping. The way I work now: try it in
          minutes, throw it away if it doesn&rsquo;t feel right, and try another.
        </p>

        <p>
          That&rsquo;s the real shift. AI writing my code for me was never the
          point. Being wrong got cheap, and that let me explore more honestly.
          I&rsquo;m not married to decisions I produced quickly. I can change my
          mind if I have a good reason to do so.
        </p>

        <div className="writing-callout">
          I don&rsquo;t use AI to come up with ideas or replace my own thinking.
          I use it to find out faster whether my ideas are actually good.
        </div>

        <p>
          The important thing, though, is to stay in charge. AI works best
          when you know what you want and you&rsquo;re directing the work, not
          when you&rsquo;re hoping the agent figures it out. The moment you stop
          understanding what&rsquo;s being built, the quality drops and the
          debugging gets painful.
        </p>

        <hr className="writing-rule" />

        <h2>The stack</h2>

        <div className="writing-stack">
          <div className="writing-stack-row">
            <span className="name">Next.js 15 + React 19</span>
            <span className="role">Framework</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Supabase</span>
            <span className="role">Database + Auth</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Stripe</span>
            <span className="role">Payments</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Resend</span>
            <span className="role">Transactional email</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Tailwind CSS</span>
            <span className="role">Styling</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Claude (Anthropic)</span>
            <span className="role">AI chat assistant</span>
            <span className="writing-ai-tag">AI feature</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Claude Code</span>
            <span className="role">My dev tool</span>
            <span className="writing-ai-tag">AI tooling</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Figma + Figma MCP</span>
            <span className="role">UI design</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Microsoft Clarity</span>
            <span className="role">Session replay + heatmaps</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Google Analytics</span>
            <span className="role">Traffic + behavior</span>
          </div>
        </div>

        <hr className="writing-rule" />

        <h2>Setup</h2>

        <p>
          Whether you use Claude Code, OpenCode, Cursor, or something else, the
          setup matters more than the tool. I started on OpenCode, a chat
          interface similar to Cursor but without the IDE layer, and later moved
          to Claude Code. The workflow is the same either way. Open a project and
          work from there, one focused session at a time.
        </p>

        <p>
          The first thing I do when starting a project is write rules for the
          codebase. Before any prompting starts, the agent needs to know how I
          work, which patterns I follow, what I want to avoid, and what the
          conventions are. Without this, every session starts from scratch and
          you spend half your time re-explaining yourself.
        </p>

        <p>For BirthGuide, my rules covered things like:</p>

        <div className="writing-code-block">
          <span className="code-label">opencode rules: examples</span>
          <pre>
            <span className="comment">{"// Styling"}</span>
            {`
Always use Tailwind utility classes. Never write custom CSS
unless it cannot be done with Tailwind.

`}
            <span className="comment">{"// Components"}</span>
            {`
Use the cn() utility for conditional classNames.
Never use template literals for class composition.

`}
            <span className="comment">{"// State"}</span>
            {`
Prefer React state over external libraries for simple UI state.
Use Supabase for anything that needs to persist.

`}
            <span className="comment">{"// Code style"}</span>
            {`
No unnecessary comments. No defensive checks in trusted paths.
Keep components small and focused.`}
          </pre>
        </div>

        <p>
          Keep rules short and specific. Copying rules you don&rsquo;t
          understand is worse than having none. You&rsquo;ll get output you
          can&rsquo;t explain and won&rsquo;t know how to fix.
        </p>

        <p>
          One other thing made a big difference. I always assume the agent has
          no context at the start of a session. Even if we worked on
          something yesterday, I re-explain the relevant state. AI doesn&rsquo;t
          carry memory across conversations the way a human collaborator would.
          Treating each session as fresh leads to much better output.
        </p>

        <hr className="writing-rule" />

        <h2>Figma and the Figma MCP</h2>

        <p>
          For complex UI components I still design in Figma first. I care about
          the UX decisions on specific parts of the interface, and I think better
          visually. Figma is where I work out hierarchy, spacing, and how a screen
          feels to move through. That thinking is mine and I want to own it. AI is
          faster than me in a working flow, and prototyping by iterating in code
          is very cheap now. It still can&rsquo;t hit the level of craft I expect,
          though.
        </p>

        <p>
          Once the design is in Figma, the Figma MCP closes the gap to
          production faster than anything I&rsquo;ve used before. I point the
          agent at a frame and it scaffolds the component. It&rsquo;s not
          perfect. I always polish afterward, but the scaffolding for complex
          screens that would have taken hours takes minutes.
        </p>

        <div className="writing-callout">
          The Figma MCP works well when your codebase rules are set up well.
          Without rules, the output looks like the agent guessed. With rules, it
          looks like it read your mind.
        </div>

        <hr className="writing-rule" />

        <h2>The design system lives in the rules</h2>

        <p>
          One rule shaped how everything else got built. The{" "}
          <a href="https://birthguide-storybook.vercel.app/?path=/docs/design-system-principles--docs">
            design system
          </a>{" "}
          is part of what the agent reads before it starts. I didn&rsquo;t just
          tell it &ldquo;use Tailwind.&rdquo; I built a proper system, color,
          spacing and type as tokens, with components on top, and put it in the
          rules so the agent uses it by default.
        </p>

        <p>
          So everything I build stays consistent. When I ask for a new screen or
          a new component, the agent doesn&rsquo;t make up a color or guess at
          spacing. It uses the tokens that already exist. And because the system
          lives in the rules, it does this on every session, without me having
          to remind it.
        </p>

        <div className="writing-callout">
          Most coding rules cover how to write code. Mine also cover how the
          product should look, so the agent builds UI that fits the system
          instead of guessing at it.
        </div>

        <p>
          There&rsquo;s also a lint rule that blocks raw color values in the
          code. If I try to drop in a hex code or an rgb value instead of a
          token, the build fails. It keeps every color coming from the system,
          so nothing slowly drifts out of line.
        </p>

        <p>
          Because every color runs through a token, I can change the system
          safely. When I edit a token, the pages shouldn&rsquo;t look any
          different, and a script checks that for me instead of me eyeballing
          it:
        </p>

        <div className="writing-code-block">
          <span className="code-label">make sure nothing changed visually</span>
          <pre>
            {`pnpm design:snapshot baseline.json
`}
            <span className="comment">{"# make the change"}</span>
            {`
pnpm design:snapshot after.json
pnpm design:compare baseline.json after.json   `}
            <span className="comment">{"# must exit 0"}</span>
          </pre>
        </div>

        <p>
          The check captures every token in both light and dark mode. If a
          change alters anything on screen, it fails and I catch it before it
          ships. So I can tidy up the system without worrying I quietly broke a
          screen.
        </p>

        <hr className="writing-rule" />

        <h2>Dark mode, almost for free</h2>

        <p>
          The payoff showed up when I added dark mode. Every color in the app
          resolves through a token, never a hardcoded hex, so I never had to
          hunt through components. I set the dark values once at the token layer
          and the whole app followed.
        </p>

        <div className="writing-code-block">
          <span className="code-label">one system, two themes</span>
          <pre>
            {`:root {
  --surface: <light>;
  --text:    <light>;
  --border:  <light>;
}
[data-theme="dark"] {
  --surface: <dark>;
  --text:    <dark>;
  --border:  <dark>;
}
`}
            <span className="comment">{"// components only ever read var(--surface), var(--text)"}</span>
          </pre>
        </div>

        <p>
          That&rsquo;s the real point of tokens. You set the values once, and
          everything else just uses them.
        </p>

        <hr className="writing-rule" />

        <h2>Prompting</h2>

        <p>
          Specificity is the whole job. The more precisely I describe what I
          want, the less I have to fix afterward. Vague prompts produce vague
          work, same as vague briefs.
        </p>

        <p>
          This matters most with UI, and it&rsquo;s where being a designer who
          codes earns its keep. A designer feels when something is wrong but
          usually names the symptom. This looks cramped, that feels off, the
          page is janky. The agent can&rsquo;t act on a feeling. My job is to
          name the layer the problem actually lives in. Once I do, the fix is
          obvious.
        </p>

        <p>
          When a paragraph feels cramped, I don&rsquo;t ask the agent to
          &ldquo;make it breathe.&rdquo; I tell it the line length is too wide to
          read comfortably. Cap it with <code>max-w-prose</code>, open up the
          leading with <code>leading-relaxed</code>, use the existing text scale,
          and don&rsquo;t drop to a smaller text size to make it fit. Same
          feeling, but now it knows what to change.
        </p>

        <p>
          When a long article title shoves the Save button off the edge of a
          card, &ldquo;the button looks squished&rdquo; only gets me a guess.
          Naming the behavior works. Put <code>shrink-0</code> on the icon and
          button so they hold their size, and <code>min-w-0</code> with{" "}
          <code>truncate</code> on the title so it clips instead of pushing them
          out.
        </p>

        <p>
          When the week-by-week guide jumps around while its illustrations load,
          the real cause is unreserved space. I tell the agent to give each image
          a fixed <code>aspect-[4/3]</code> so its slot exists before it loads,
          and to size the skeleton to the final card height. People read this
          one-handed at 3am. The layout has to hold still.
        </p>

        <p>
          The same holds for structure. I ask for a real checkbox with a label
          instead of a styled div, a button instead of a clickable card, because
          native elements come with keyboard and screen reader behavior built in.
          On something people lean on through a pregnancy, that isn&rsquo;t a
          nice-to-have.
        </p>

        <p>
          For bigger tasks I break the prompt into steps instead of asking for
          everything at once. One task, confirm it works, then the next. The
          output is better and it&rsquo;s easier to follow what&rsquo;s
          happening.
        </p>

        <hr className="writing-rule" />

        <h2>Watching how people actually use it</h2>

        <p>
          I built BirthGuide with no budget. At a bigger company I&rsquo;d run
          proper user research, recruiting people, sitting in on sessions, and
          paying for the tools that make it work. On a solo project I don&rsquo;t have any of
          that, so I watch how people use the product instead.
        </p>

        <p>
          Google Analytics tells me what pages people land on and where they
          leave. Microsoft Clarity shows me the actual sessions, recordings and
          heatmaps of people using the tool, and it&rsquo;s the one I check
          most. It&rsquo;s where I see people making decisions, hesitating,
          scrolling past the thing I wanted them to notice, clicking something I
          didn&rsquo;t expect.
        </p>

        <p>
          I&rsquo;ve caught more bugs and UX problems this way than any other.
          You watch someone get stuck on a screen you were sure was obvious, and
          it&rsquo;s immediately clear what to fix. It isn&rsquo;t the same as
          talking to users, but for a project with no research budget, it&rsquo;s
          the closest I get to sitting behind someone while they use it.
        </p>

        <hr className="writing-rule" />

        <h2>What I still do myself</h2>

        <p>
          All of the design decisions. Every call about what the product should
          do and why. Every review of the code the agent produces, not because I
          distrust it, but because I need to understand what&rsquo;s in the
          codebase. Something will break eventually and if I don&rsquo;t
          understand the code, I&rsquo;m stuck.
        </p>

        <p>
          The craft still matters. It matters more now, actually. The bar for
          launching something has dropped so far that the only differentiator
          left is whether the product was actually thought through. AI can build
          fast. It can&rsquo;t care.
        </p>
      </WritingArticle>
  );
}
