import { ExternalLinkIcon } from "@/components/icons";
import { WorkStub } from "@/components/work-stub";

/**
 * Coursify.me. Product description is its own; the brand work and the
 * concentric-waves origin come from Alex's own study documents.
 */
export function CoursifyStub() {
  return (
    <WorkStub
      eyebrow="Co-founded · 2012–2014"
      title="Coursify.me"
      intro="An online course platform. The UX, the UI and the brand were all mine."
    >
      <p>
        Coursify.me let any person or company build a school and sell courses,
        tutorials and ebooks online. The job was connecting teachers and
        companies to their students. It reached 50,000 students and is still
        running.
      </p>
      <p>
        I was the founder designer, and the design work was the whole
        product, not just the mark. The UX covered both sides of the
        marketplace: how a teacher built a school and put courses up for sale,
        and how a student found them, enrolled and learned. I drew the UI for
        every screen those flows ran through.
      </p>
      <p>
        The brand started from a sketch of a person broadcasting concentric
        rings, on the idea that knowledge travels like an electromagnetic wave.
        That sketch became the mark: a C drawn as four nested arcs radiating
        from a centre, so the letter and the transmission are the same shape.
        The construction was geometric rather than decorative, built on
        overlapping circles and axes, with a four-colour palette that had to
        survive being reduced, flipped and blurred down to pure light.
      </p>
      <p>
        <a href="https://coursify.me/" target="_blank" rel="noopener">
          coursify.me
          <ExternalLinkIcon size={12} className="external-mark" />
        </a>
      </p>
    </WorkStub>
  );
}
