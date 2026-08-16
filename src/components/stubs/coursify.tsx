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
      intro="An online course platform, and the brand identity behind it."
    >
      <p>
        Coursify.me let any person or company build a school and sell courses,
        tutorials and ebooks online. The job was connecting teachers and
        companies to their students, which is a marketplace problem wearing a
        publishing tool&rsquo;s clothes. It reached 50,000 students and is still
        running.
      </p>
      <p>
        I designed the brand. It started from a sketch of a person broadcasting
        concentric rings, on the idea that knowledge travels like an
        electromagnetic wave. That sketch became the mark: a C drawn as four
        nested arcs radiating from a centre, so the letter and the transmission
        are the same shape.
      </p>
      <p>
        The work behind it was geometric rather than decorative. The letterform
        was constructed on overlapping circles and axes, tested against Open
        Sans, Roboto, Segoe UI and Inter to find a C that was properly circular,
        and explored both ways: as a solid counterform and as the nested arcs
        that won. The four-colour palette had to survive being reduced,
        flipped, and blurred down to pure light.
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
