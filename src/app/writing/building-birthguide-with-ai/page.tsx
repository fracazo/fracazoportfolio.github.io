import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { WritingArticle } from "@/components/writing-article";

const title = "Building BirthGuide as a solo designer using AI";

export const metadata: Metadata = {
  title: `${title} - Alex Fracazo`,
  description:
    "How I actually used AI to ship BirthGuide solo, from zero to production: rules, Figma MCP, prompting, and what I still do myself.",
  openGraph: {
    title: `${title} - Alex Fracazo`,
    description:
      "How I actually used AI to ship BirthGuide solo, from zero to production: rules, Figma MCP, prompting, and what I still do myself.",
    images: ["/images/opengraph.jpg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} - Alex Fracazo`,
    description:
      "How I actually used AI to ship BirthGuide solo, from zero to production: rules, Figma MCP, prompting, and what I still do myself.",
    images: ["/images/opengraph.jpg"],
  },
};

export default function BuildingBirthGuideWithAI() {
  return (
    <AppShell>
      <WritingArticle
        tags={["AI", "Design engineering", "BirthGuide", "Solo building"]}
        title={title}
        meta="6 min read"
        next={{
          href: "/writing/titles-are-a-trap",
          title: "Titles are a trap. And the inner critic knows it.",
        }}
      >
        <p>
          I&rsquo;m a designer who codes. I&rsquo;ve been doing both for 20
          years, long enough to have a strong opinion about craft, and skeptical
          enough about AI to not just hand things over blindly. But I built{" "}
          <a href="https://birthguide.com.au">BirthGuide</a> solo this year,
          from zero to production, and my position shifted in ways I
          didn&rsquo;t expect.
        </p>

        <p>This is how I actually used AI to ship it.</p>

        <hr className="writing-rule" />

        <h2>The honest thing about AI and iteration</h2>

        <p>
          The way I used to work: spend hours exploring a concept, not sure if
          it&rsquo;s right, commit to it anyway because switching costs too much
          time. The way I work now: try the concept in minutes, throw it away if
          it doesn&rsquo;t feel right, try another.
        </p>

        <p>
          That&rsquo;s the real shift. Not that AI writes my code for me.
          It&rsquo;s that the cost of being wrong dropped so low that I can
          explore more honestly. I&rsquo;m not married to decisions I&rsquo;ve
          spent two days on. I can change my mind.
        </p>

        <div className="writing-callout">
          I don&rsquo;t use AI to come up with ideas or replace my own thinking.
          I use it to find out faster whether my ideas are actually good.
        </div>

        <p>
          The important thing, though: you have to stay in charge. AI works best
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
            <span className="name">Tailwind CSS</span>
            <span className="role">Styling</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Claude (Anthropic)</span>
            <span className="role">AI chat assistant</span>
            <span className="writing-ai-tag">AI feature</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Claude + OpenCode</span>
            <span className="role">My dev tools</span>
            <span className="writing-ai-tag">AI tooling</span>
          </div>
          <div className="writing-stack-row">
            <span className="name">Figma + Figma MCP</span>
            <span className="role">UI design</span>
          </div>
        </div>

        <hr className="writing-rule" />

        <h2>Setup</h2>

        <p>
          Whether you use Claude Code, OpenCode, Cursor, or something else, the
          setup matters more than the tool. I use OpenCode, a chat interface
          similar to Cursor but without the IDE layer. Install it as an app,
          open a project, and work from there. I find it cleaner for focused
          sessions.
        </p>

        <p>
          The first thing I do when starting a project is write rules for the
          codebase. Before any prompting starts, the agent needs to know how I
          work: what patterns I follow, what I want to avoid, what the
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
          One other thing that made a big difference: I always assume the agent
          has no context at the start of a session. Even if we worked on
          something yesterday, I re-explain the relevant state. AI doesn&rsquo;t
          carry memory across conversations the way a human collaborator would.
          Treating each session as fresh leads to much better output.
        </p>

        <hr className="writing-rule" />

        <h2>Figma and the Figma MCP</h2>

        <p>
          For complex UI I still design in Figma first. Not because iterating in
          code is expensive. With AI it genuinely is not anymore. But because I
          care about the UX decisions and I think better visually. Figma is
          where I work out hierarchy, spacing, how a flow feels to move through.
          That thinking is mine and I want to own it.
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

        <h2>Prompting</h2>

        <p>
          Specificity is the whole job. The more precisely I describe what I
          want: inputs, outputs, edge cases, what to avoid, the less I have to
          correct afterward. Vague prompts produce vague work, same as vague
          briefs.
        </p>

        <div className="writing-code-block">
          <span className="code-label">prompt pattern: specific beats vague</span>
          <pre>
            <span className="comment">{"// This"}</span>
            {"\n"}
            <span className="str">
              {`"Add a Stripe webhook handler that:
1. Listens for checkout.session.completed
2. Updates the Supabase user record: plan_purchased = true
3. Sends a confirmation email via Resend
4. Returns 200 on success, 400 if session data is missing"`}
            </span>
            {"\n\n"}
            <span className="comment">{"// Not this"}</span>
            {"\n"}
            <span className="str">{`"Add Stripe webhooks"`}</span>
          </pre>
        </div>

        <p>
          For bigger tasks I break the prompt into steps rather than asking for
          everything at once. One task, confirm it works, then the next. The
          output is better and it&rsquo;s easier to follow what&rsquo;s
          happening.
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
    </AppShell>
  );
}
