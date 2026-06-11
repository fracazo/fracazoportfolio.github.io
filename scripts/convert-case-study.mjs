// One-shot migration helper: converts a static case-study HTML page into a
// Next.js page.tsx wrapped in CaseStudyShell. Mechanical transforms only;
// output is reviewed by hand. Safe to delete once the migration lands.
import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

function pascalCase(slug) {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function styleToJsx(css) {
  const decls = css
    .split(";")
    .map((d) => d.trim())
    .filter(Boolean)
    .map((d) => {
      const i = d.indexOf(":");
      const prop = d.slice(0, i).trim();
      const val = d.slice(i + 1).trim();
      const camel = prop.replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
      return `${camel}: "${val.replace(/"/g, "'")}"`;
    })
    .join(", ");
  return `style={{ ${decls} }}`;
}

function convert(html) {
  let out = html;

  // HTML comments -> JSX comments
  out = out.replace(/<!--([\s\S]*?)-->/g, (_, c) => `{/*${c.replace(/\*\//g, "*\\/")}*/}`);

  // Attribute casing
  out = out
    .replace(/\bclass="/g, 'className="')
    .replace(/\bsrcset="/g, 'srcSet="')
    .replace(/\bfill-rule=/g, "fillRule=")
    .replace(/\bclip-rule=/g, "clipRule=")
    .replace(/\bstroke-width=/g, "strokeWidth=")
    .replace(/\bstroke-linecap=/g, "strokeLinecap=")
    .replace(/\bstroke-linejoin=/g, "strokeLinejoin=")
    .replace(/\bstroke-miterlimit=/g, "strokeMiterlimit=")
    .replace(/\bstop-color=/g, "stopColor=")
    .replace(/\bstop-opacity=/g, "stopOpacity=")
    .replace(/\ballowfullscreen\b/g, "allowFullScreen")
    .replace(/\bframeborder="0"\s*/g, "")
    .replace(/\btabindex=/g, "tabIndex=");

  // Video boolean attrs
  out = out.replace(/<video([^>]*)>/g, (_, attrs) => {
    const fixed = attrs
      .replace(/\bautoplay\b/g, "autoPlay")
      .replace(/\bplaysinline\b/g, "playsInline");
    return `<video${fixed}>`;
  });

  // Inline styles -> objects
  out = out.replace(/style="([^"]*)"/g, (_, css) => styleToJsx(css));

  // Void elements must self-close
  out = out.replace(
    /<(img|hr|br|source|input)(\b[^>]*?)\s*\/?>/g,
    (_, tag, attrs) => `<${tag}${attrs} />`,
  );

  // Route rewrites (relative .html -> clean URLs)
  out = out
    .replace(/href="\.\.\/index\.html(#[^"]*)?"/g, 'href="/$1"')
    .replace(/href="\.\.\/work\.html"/g, 'href="/work"')
    .replace(/href="\.\.\/contact\.html"/g, 'href="/contact"')
    .replace(/href="\.\.\/experiments\.html"/g, 'href="/experiments"')
    .replace(/href="\.\.\/writing\/index\.html"/g, 'href="/writing"')
    .replace(/href="\.\.\/writing\/([\w-]+)\.html"/g, 'href="/writing/$1"')
    // Footers link "contact.html" from within case-studies/ — the intent is
    // the root contact page (case-studies/contact.html never existed).
    .replace(/href="contact\.html"/g, 'href="/contact"')
    .replace(/href="([\w-]+)\.html"/g, 'href="/case-studies/$1"')
    .replace(/href="\.\.\/files\//g, 'href="/files/');

  // JSX collapses newlines in text nodes, which destroys <pre> formatting.
  // Wrap plain-text <pre> content in a template literal to preserve it.
  out = out.replace(
    /(<pre\b[^>]*>)([\s\S]*?)(<\/pre>)/g,
    (m, open, inner, close) => {
      if (inner.includes("<") || inner.includes("`") || inner.includes("${")) return m;
      const text = inner
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
      return `${open}{\`${text}\`}${close}`;
    },
  );

  // Asset path rewrites
  out = out.replace(/src="\.\.\/images\//g, 'src="/images/');
  out = out.replace(/srcSet="([^"]*)"/g, (_, v) => `srcSet="${v.replace(/\.\.\/images\//g, "/images/")}"`);

  return out;
}

function extract(html, startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  if (start === -1 || end === -1) throw new Error(`markers not found`);
  return html.slice(start + startMarker.length, end);
}

for (const file of process.argv.slice(2)) {
  const html = fs.readFileSync(file, "utf8");
  const slug = path.basename(file, ".html");

  const title = extract(html, "<title>", "</title>").trim();
  const descMatch = html.match(/<meta content="([^"]*)" name="description">/);
  const description = descMatch ? descMatch[1] : "";

  const mainInner = extract(html, '<main id="content" role="main">', "</main>");
  const body = convert(mainInner).trim();

  // Sidebar back link: sub-case-studies point at their parent page
  const backMatch = html.match(
    /<a href="([^"]+)" class="back-link">[\s\S]*?<\/svg>\s*([^<\n]+)/,
  );
  let shellProps = "";
  if (backMatch && backMatch[1] !== "../work.html") {
    const backHref = convert(`href="${backMatch[1]}"`).match(/href="([^"]+)"/)[1];
    shellProps = ` backHref="${backHref}" backLabel="${backMatch[2].trim()}"`;
  }

  const page = `import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";

const title = ${JSON.stringify(title)};
const description = ${JSON.stringify(description)};

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/opengraph.jpg"],
  },
};

export default function ${pascalCase(slug)}() {
  return (
    <CaseStudyShell${shellProps}>
      ${body}
    </CaseStudyShell>
  );
}
`;

  const outDir = path.join(repoRoot, "src/app/case-studies", slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "page.tsx"), page);
  console.log(`wrote src/app/case-studies/${slug}/page.tsx`);
}
