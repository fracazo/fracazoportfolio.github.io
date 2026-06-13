# alexfracazo.com

Personal portfolio for Alex Fracazo — product designer and front-end engineer.
Built with Next.js (App Router) and Tailwind CSS v4, deployed to GitHub Pages
as a static export.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # static export to ./out
npm run lint
```

`next.config.ts` sets `output: "export"` with `trailingSlash: false`, so the
build emits plain `.html` files (`/work` → `work.html`) that preserve the
site's original URLs. There is no Node server at runtime.

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes `./out` to GitHub Pages. This runs
only while the repository's **Settings → Pages → Source** is set to
**GitHub Actions**.

The custom domain is held by [`public/CNAME`](public/CNAME), which is copied
into every build.

## Structure

- `src/app/` — routes (App Router). One folder per page; case studies under
  `src/app/case-studies/`, essays under `src/app/writing/`.
- `src/components/` — shared UI: app shell (sidebar + nav + theme toggle),
  case-study shell (TOC scrollspy + dyslexia mode), cards, footer.
- `src/app/globals.css` — design tokens (`@theme`), light/dark theming, and
  long-form prose styles. Young Serif display face + Geist for everything else.
- `public/` — static assets served at the site root (`images/`, `files/`,
  `CNAME`).
- `tools/opengraph-source.html` — generator for the Open Graph image (not
  served; regeneration instructions are in the file header).
