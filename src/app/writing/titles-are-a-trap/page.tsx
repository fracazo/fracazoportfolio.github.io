import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { WritingArticle } from "@/components/writing-article";

const title = "Titles are a trap. And the inner critic knows it.";

export const metadata: Metadata = {
  title: `${title} - Alex Fracazo`,
  description:
    "Titles reflect the minimum expected of us, not the maximum that is open to us. On job titles, agency, and the inner critic.",
  openGraph: {
    title: `${title} - Alex Fracazo`,
    description:
      "Titles reflect the minimum expected of us, not the maximum that is open to us. On job titles, agency, and the inner critic.",
    images: ["/images/opengraph.jpg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} - Alex Fracazo`,
    description:
      "Titles reflect the minimum expected of us, not the maximum that is open to us. On job titles, agency, and the inner critic.",
    images: ["/images/opengraph.jpg"],
  },
};

export default function TitlesAreATrap() {
  return (
    <AppShell>
      <WritingArticle
        tags={["Career", "Design", "Impostor syndrome"]}
        title={title}
        meta="5 min read"
        prev={{
          href: "/writing/building-birthguide-with-ai",
          title: "Building BirthGuide as a solo designer using AI",
        }}
        next={{
          href: "/writing/effort-and-impact-are-not-the-same-thing",
          title: "Effort and impact are not the same thing",
        }}
      >
        <p>
          For most of my career I have been waiting. Waiting to feel senior
          enough to have opinions worth sharing. Waiting to be given a bigger
          title before doing bigger work. Waiting for someone to officially make
          me the person in charge before acting like it. I dressed this up as
          humility. It wasn&rsquo;t. It was doubtbot3000 wearing a job
          description as a disguise.
        </p>

        <p>
          I read a line recently that stopped me cold:{" "}
          <em>
            titles reflect the minimum expected of us, not the maximum that is
            open to us.
          </em>{" "}
          We treat our job description as a ceiling. In reality it is a floor.
        </p>

        <div className="writing-code-block">
          <span className="code-label">doubtbot3000 // title mode</span>
          <pre>{`That's a Staff-level decision. You're Senior. Not your call.
Wait until you're promoted before taking on that kind of work.
Who are you to push back on this? You're not the lead.
Do the minimum well. Keep your head down. Then maybe.

The title was never protecting you. It was just limiting you.`}</pre>
        </div>

        <p>
          Doubtbot3000 is a term from Ioana Teleanu&rsquo;s book{" "}
          <em>Surviving Design</em>, her name for the inner critic that tells
          you you&rsquo;re not qualified, not ready, not enough. She recommends
          naming it to separate yourself from it. What I&rsquo;ve noticed is
          that doubtbot3000 doesn&rsquo;t only attack your confidence. It
          attacks your agency. And job titles are its favourite weapon.
        </p>

        <hr className="writing-rule" />

        <h2>The proof was always there</h2>

        <p>
          I grew up in Araguari, a small city in Minas Gerais, Brazil. I taught
          myself web design at 18 because a computer was available and I was
          curious. No design school pedigree, no industry connections, no
          obvious path into the kind of career I wanted.
        </p>

        <p>
          In 2015 I moved to Australia. I arrived without a local network,
          without a reputation anyone here could verify, without the cultural
          fluency that makes job interviews easy. Everything I had built in
          Brazil didn&rsquo;t automatically transfer. I had to start again, in a
          second language, in a city where nobody knew my work.
        </p>

        <p>
          I didn&rsquo;t wait for permission to do that. I didn&rsquo;t have a
          title that authorised it. I just moved because I could see it was the
          right thing to do, I was capable of surviving it, and I wanted the
          life that would come from it. That&rsquo;s the whole framework, right
          there, applied to an entire continent.
        </p>

        <div className="writing-callout">
          The biggest career move I ever made had no job description. No title.
          No one asked me to do it. I just did it.
        </div>

        <p>
          And yet, back inside a company with a proper org chart and a
          performance review cycle, doubtbot3000 found its footing again.
          Suddenly I was waiting. Waiting for the right level. Waiting for the
          promotion that would make the bigger work officially mine to do.
        </p>

        <hr className="writing-rule" />

        <h2>The intersection</h2>

        <p>
          There is a framework I keep returning to. Stop asking what your title
          allows you to do. Start asking what sits at the intersection of three
          things:
        </p>

        <div className="writing-stack">
          <div className="writing-stack-row">
            <span className="num">01</span>
            <span className="row-label">
              What you can see needs to be done, that isn&rsquo;t being done
            </span>
          </div>
          <div className="writing-stack-row">
            <span className="num">02</span>
            <span className="row-label">What you are capable of doing</span>
          </div>
          <div className="writing-stack-row">
            <span className="num">03</span>
            <span className="row-label">
              What you would find genuinely rewarding to do
            </span>
          </div>
        </div>

        <p>
          That intersection is the work. Not the work in your job description,
          the work that matters, that moves things, that makes you someone
          people want around regardless of what the org chart says.
        </p>

        <p>
          The best work I&rsquo;ve done in my career has almost never been in my
          job description. It was stuff I did because I could see it needed
          doing.
        </p>

        <ul className="writing-examples">
          <li>
            I shipped code to production as a designer because I could see the
            gap between design specs and engineering output was costing quality.
            <span className="note">
              Nobody asked me to learn the codebase well enough to do this.
            </span>
          </li>
          <li>
            I wrote a tutorial for the company blog because the product had no
            good onboarding content and users were struggling.
            <span className="note">Nobody asked me to write documentation.</span>
          </li>
          <li>
            I built BirthGuide solo (design, code, product, copy, payments,
            everything) because I wanted to know if I actually could, and
            because first-time parents in Australia needed something better.
            <span className="note">Nobody asked me to do any of it.</span>
          </li>
          <li>
            I started writing publicly, after 20 years of not doing it, because
            doubtbot3000 finally ran out of arguments.
            <span className="note">Nobody asked me to do this either.</span>
          </li>
        </ul>

        <p>
          None of it required a different title. It required deciding that the
          title wasn&rsquo;t the point.
        </p>

        <hr className="writing-rule" />

        <h2>What the inner critic is actually afraid of</h2>

        <p>
          Ioana writes that impostor syndrome intensifies with visibility. The
          more people who can see your work, the louder the voice gets. This is
          exactly why doubtbot3000 loves titles. They create the illusion that
          visibility is someone else&rsquo;s decision to grant you. You
          can&rsquo;t be seen until you&rsquo;re promoted. You can&rsquo;t have
          opinions until you&rsquo;re senior enough. You can&rsquo;t do the
          bigger work until the title catches up.
        </p>

        <p>
          It&rsquo;s a perfect holding pattern. Comfortable, deniable, and
          completely self-defeating.
        </p>

        <p>
          The move from Brazil to Australia broke that pattern for me once, by
          force of circumstance. Building BirthGuide broke it again, by choice.
          Writing this is breaking it a third time. Each time, doubtbot3000 said
          wait. Each time, the actual outcome of not waiting was better than
          waiting would have been.
        </p>

        <div className="writing-closing-box">
          <p>
            Keep your boss happy. Support your teammates. Do your actual job
            well. None of this is optional.
          </p>
          <p>
            But don&rsquo;t wait for a title to do the work that sits in that
            intersection: the work that&rsquo;s obviously needed, that
            you&rsquo;re capable of, that you&rsquo;d find genuinely rewarding.
            That work is available to you right now, at whatever level
            you&rsquo;re at.
          </p>
          <p>
            Doubtbot3000 will tell you to wait for permission. It will dress
            that advice up as professionalism, as patience, as knowing your
            place.
          </p>
          <p>It&rsquo;s still just a bug. Don&rsquo;t let it vote.</p>
        </div>
      </WritingArticle>
    </AppShell>
  );
}
