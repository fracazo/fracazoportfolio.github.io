import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { WritingArticle } from "@/components/writing-article";

const title = "Effort and impact are not the same thing";

export const metadata: Metadata = {
  title: "Effort and impact are not the same thing Alex Fracazo",
  description:
    "Why effort and impact are not the same thing, and the four words that changed how I mentor designers.",
  openGraph: {
    title: "Effort and impact are not the same thing Alex Fracazo",
    description:
    "Why effort and impact are not the same thing, and the four words that changed how I mentor designers.",
    images: ["/images/opengraph.jpg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Effort and impact are not the same thing Alex Fracazo",
    description:
    "Why effort and impact are not the same thing, and the four words that changed how I mentor designers.",
    images: ["/images/opengraph.jpg"],
  },
};

export default function EffortAndImpact() {
  return (
    <AppShell>
      <WritingArticle
        tags={["Mentoring", "Design", "Career"]}
        title={title}
        meta="4 min read"
        prev={{
          href: "/writing/titles-are-a-trap",
          title: "Titles are a trap. And the inner critic knows it.",
        }}
      >
        <p>
          One of my mentees once spent six weeks on a research document. It was
          genuinely beautiful. Colour-coded tabs, a literature review, forty
          pages of careful synthesis. When I finished reading it I went quiet,
          because I had to ask the question neither of us wanted out loud.
        </p>

        <p>&ldquo;So what do we build differently now?&rdquo;</p>

        <p>
          She didn&rsquo;t have an answer. Six weeks of late nights and sharp
          thinking, and nothing in there told anyone what to do next. The
          document proved how hard she had looked. It didn&rsquo;t decide
          anything.
        </p>

        <p>
          She wasn&rsquo;t careless. She was one of the most thorough people
          I&rsquo;ve worked with. Nobody had ever told her that effort and
          impact are not the same thing.
        </p>

        <hr className="writing-rule" />

        <h2>The four words</h2>

        <p>
          A mentor gave me a line years earlier that I&rsquo;ve never stopped
          using: <em>speed to inform, rigor to influence.</em>
        </p>

        <p>
          It doesn&rsquo;t say speed is sloppy or that rigor is slow. It says
          they do two different jobs, and most designers only ever learn one.
        </p>

        <p>
          Speed is for when you don&rsquo;t know yet. You explore, you generate,
          you throw things away, you keep the conversation open. You move fast
          precisely because you&rsquo;re not sure, and moving fast is how you
          find out.
        </p>

        <p>
          Rigor is for when you do know, and now you have to make the case. You
          go deep. You build the evidence. You document the trade-offs so the
          work survives a room full of people who didn&rsquo;t design it and
          don&rsquo;t owe it the benefit of the doubt.
        </p>

        <p>
          She had spent six weeks doing rigor on a question that needed speed.
          She&rsquo;d gone deep before she&rsquo;d gone wide.
        </p>

        <hr className="writing-rule" />

        <h2>What it looks like when you only pick one</h2>

        <p>
          I&rsquo;ve seen both failure modes enough times to spot them in a
          session or two.
        </p>

        <p>
          The speed-only designers are a joy at first. Fast, energetic, they
          keep up with any pace a team sets. Then someone challenges a decision
          and the whole thing wobbles, because the work was hollow underneath.
          The screens looked finished, but there was no reasoning to defend.
          Over a few months these designers get quietly reclassified, thinker to
          executor, and they rarely notice it happening.
        </p>

        <p>
          The rigor-only designers are just as stuck. Deep, careful, the kind
          who read the whole paper instead of the abstract. But by the time they
          surface, the team has moved on, or the document is so dense nobody
          opens it. That was her. Convinced that more thoroughness was always
          the safer bet. It usually felt safer. It almost never was.
        </p>

        <div className="writing-callout">
          Without one or the other, design becomes a service to someone
          else&rsquo;s ideas, the good ones and the bad ones, and you
          don&rsquo;t get to pick which.
        </div>

        <p>
          The three sentences a stuck designer says are really one sentence
          wearing three outfits.
        </p>

        <div className="writing-code-block">
          <span className="code-label">the same sentence, three ways</span>
          <pre>
            {`"I need more time to research before I can show anything."
"I'll sketch something once I understand the problem better."
"I don't want to show it until it's more finished."

`}
            <span className="comment">
              {`All three mean the same thing: I'm waiting to feel certain
before I start. But it runs the other way. You don't wait
for confidence to begin. Beginning is how it shows up.`}
            </span>
          </pre>
        </div>

        <hr className="writing-rule" />

        <h2>What actually worked</h2>

        <p>
          My first instinct was to push her toward speed. Sketch faster, show me
          ugly work, stop polishing. It helped a little. But I was treating her
          depth as a flaw to correct, when it was her best instinct pointed at
          the wrong moment.
        </p>

        <p>
          What worked wasn&rsquo;t less thoroughness. It was one question to ask
          before she started anything: what is this phase for?
        </p>

        <p>
          If she was exploring, the answer was speed. Rough sketches, low
          fidelity, thrown away without ceremony. A rough sketch tells the room,
          and tells you, that the thinking isn&rsquo;t done and the door is
          still open.
        </p>

        <p>
          If she was building conviction, her thoroughness was suddenly the
          asset. Cite the research. Document the trade-offs. Make the logic
          impossible to wave away. The same instinct that produced a useless
          forty-page document produced, in the right phase, the most defensible
          argument in the room.
        </p>

        <p>
          She didn&rsquo;t need to become a different designer. She needed to
          aim what she already had.
        </p>

        <p>
          We worked together a few months, on the craft and then on interview
          prep. She went out and got multiple offers. I didn&rsquo;t fix her. I
          handed her four words and a question, and she did the rest.
        </p>

        <p>
          And if you recognised yourself in one half of this, the fast one who
          can&rsquo;t defend the work or the slow one who never ships,
          you&rsquo;re both making the same mistake from opposite ends. Stop
          asking whether to be fast or thorough. Ask what the phase in front of
          you is for. Then aim what you&rsquo;ve got at it.
        </p>
      </WritingArticle>
    </AppShell>
  );
}
