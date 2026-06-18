import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "Style Guide - Alex Fracazo",
  description: "Design system documentation: typography, colors, and components.",
  robots: { index: false },
};

export default function StyleGuide() {
  return (
    <AppShell>
      <section className="section">
        <h1 className="h1">Style Guide</h1>
        <p className="text">Design system documentation for typography, colors, and components used across the site.</p>

        {/* Typography */}
        <div className="styleguide-section styleguide-section-first">
          <h2 className="styleguide-title">Typography</h2>
          <div className="styleguide-grid">
            <div>
              <div className="styleguide-item">
                <div className="styleguide-label">H1 - 40px / 1.15</div>
                <h1 className="h1">Heading 1</h1>
              </div>
              <div className="styleguide-item">
                <div className="styleguide-label">H2 - 28px / 1.2</div>
                <h2 className="h2">Heading 2</h2>
              </div>
              <div className="styleguide-item">
                <div className="styleguide-label">H3 - 20px / 1.35</div>
                <h3 className="h3">Heading 3</h3>
              </div>
            </div>
            <div>
              <div className="styleguide-item">
                <div className="styleguide-label">Body - 16px / 1.75</div>
                <p className="demo-body">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="styleguide-item">
                <div className="styleguide-label">Text (muted) - 16px / 1.8</div>
                <p className="text demo-text">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="styleguide-item">
                <div className="styleguide-label">Small - 14px</div>
                <p className="demo-small">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="styleguide-item">
                <div className="styleguide-label">Link</div>
                <a href="#">Link Text</a>
              </div>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="styleguide-section">
          <h2 className="styleguide-title">Colors - Dark Mode</h2>
          <div className="color-grid">
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#1a1612" }}></div>
              <div className="color-name">Background</div>
              <div className="color-value">#1a1612</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#24201b" }}></div>
              <div className="color-name">Surface</div>
              <div className="color-value">#24201b</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#ece7df" }}></div>
              <div className="color-name">Text primary</div>
              <div className="color-value">#ece7df</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#a2988c" }}></div>
              <div className="color-name">Text secondary</div>
              <div className="color-value">#a2988c</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#c8855a" }}></div>
              <div className="color-name">Accent</div>
              <div className="color-value">#c8855a</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#2e2922" }}></div>
              <div className="color-name">Border</div>
              <div className="color-value">#2e2922</div>
            </div>
          </div>
        </div>

        <div className="styleguide-section">
          <h2 className="styleguide-title">Colors - Light Mode</h2>
          <div className="color-grid">
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#faf8f2", borderColor: "#e7e3db" }}></div>
              <div className="color-name">Background</div>
              <div className="color-value">#faf8f2</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#fffdf8", borderColor: "#e7e3db" }}></div>
              <div className="color-name">Surface</div>
              <div className="color-value">#fffdf8</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#1c1917" }}></div>
              <div className="color-name">Text primary</div>
              <div className="color-value">#1c1917</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#57534e" }}></div>
              <div className="color-name">Text secondary</div>
              <div className="color-value">#57534e</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#9c5a34" }}></div>
              <div className="color-name">Accent</div>
              <div className="color-value">#9c5a34</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: "#e7e3db" }}></div>
              <div className="color-name">Border</div>
              <div className="color-value">#e7e3db</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="styleguide-section">
          <h2 className="styleguide-title">Buttons</h2>
          <div className="button-grid">
            <button className="form-submit">Primary Button</button>
            <button className="btn">Secondary Button</button>
            <button className="btn btn-ghost">Ghost Button</button>
          </div>
        </div>

        {/* Form Elements */}
        <div className="styleguide-section">
          <h2 className="styleguide-title">Form Elements</h2>
          <div className="form-sample">
            <div className="form-group">
              <label className="form-label" htmlFor="demo-name">Your name</label>
              <input className="form-input" type="text" id="demo-name" placeholder="e.g. David Ogilvy" />
            </div>
            <div className="form-group mt-5">
              <label className="form-label" htmlFor="demo-email">Email address</label>
              <input className="form-input" type="email" id="demo-email" placeholder="e.g. david@ogilvy.com" />
            </div>
            <div className="form-group mt-5">
              <label className="form-label" htmlFor="demo-message">Your message</label>
              <textarea className="form-textarea" id="demo-message" placeholder="Type anything..."></textarea>
            </div>
            <button className="form-submit mt-5">Submit</button>
          </div>
        </div>

        {/* Rich Text */}
        <div className="styleguide-section">
          <h2 className="styleguide-title">Rich Text</h2>
          <div className="rich-text-sample">
            <h1>Title for Heading 1</h1>
            <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually.</p>
            <h2>Title for Heading 2</h2>
            <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page. <a href="#">For dynamic content</a>, add a rich text field to any collection.</p>
            <h3>Title for Heading 3</h3>
            <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled. <strong>Bold text stands out.</strong></p>
            <ul>
              <li>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place.</li>
              <li>Instead of having to add and format them individually.</li>
              <li>Just double-click and easily create content.</li>
            </ul>
            <blockquote>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing.</blockquote>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="section" aria-labelledby="footer-title">
        <footer role="contentinfo">
          <div className="footer-inner">
            <p id="footer-title" className="text footer-location">Based in Melbourne. Working globally.</p>
            <p className="text footer-links">
              You can find me on <a href="http://www.linkedin.com/in/fracazo" target="_blank">LinkedIn</a>, or <a href="/contact">reach me by email</a>.
            </p>
          </div>
        </footer>
      </section>
    </AppShell>
  );
}
