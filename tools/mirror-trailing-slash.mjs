/*
  Makes /resume/ work as well as /resume and /resume.html.

  next.config.ts sets trailingSlash: false on purpose, so the export emits
  page.html rather than page/index.html and every legacy inbound .html URL
  from the old static site keeps resolving. The side effect is that a URL
  with a trailing slash 404s: GitHub Pages looks for page/index.html, and the
  exported page/ directory holds only RSC .txt payloads.

  This copies each exported page.html to page/index.html after the build, so
  all three URL shapes resolve. Pages checks page.html before page/index.html,
  so the plain /resume form still serves the same file it always did.

  Runs automatically via the postbuild script in package.json.
*/

import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname;

// index.html is already the directory default, 404.html is GitHub Pages'
// special case, and _next / _not-found are Next internals nobody links to.
const skip = (name) =>
  name === "index.html" || name === "404.html" || name.startsWith("_");

async function mirror(dir) {
  let mirrored = 0;

  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "_next") continue;
      mirrored += await mirror(path);
      continue;
    }

    if (!entry.name.endsWith(".html") || skip(entry.name)) continue;

    const target = join(dir, entry.name.replace(/\.html$/, ""));
    await mkdir(target, { recursive: true });
    await writeFile(join(target, "index.html"), await readFile(path));
    mirrored += 1;
  }

  return mirrored;
}

const count = await mirror(OUT);
console.log(`mirror-trailing-slash: wrote ${count} index.html files`);
