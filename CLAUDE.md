# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site for Carlos Pinho, hosted via GitHub Pages at [cpinho.com](https://cpinho.com). Built with **Astro 7** (static output), no UI framework.

## Dev commands

```bash
npm run dev      # dev server at http://localhost:4321 with hot reload
npm run check    # astro check — type-checks .astro/.ts files (also runs in CI)
npm run build    # builds to dist/
npm run preview  # serves dist/ locally
```

## Deploying

Push to `main`. A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and deploys to GitHub Pages automatically. The `public/CNAME` file maps the custom domain `cpinho.com`.

Before the first deploy on a fresh repo, go to **GitHub Settings → Pages → Source** and switch from "Deploy from a branch" to "GitHub Actions".

## Architecture

```
src/
  components/    one .astro file per section
  data/          typed TS arrays — edit these to update content
  layouts/Base.astro   <html>, <head>, meta/OG tags, self-hosted Fontsource font imports
  pages/index.astro    assembles all sections
  pages/404.astro      terminal-styled 404, served by Pages for any dead path under the domain
  styles/global.css    all CSS (single file — see note below)
public/
  me.jpeg        portrait photo
  CNAME          custom domain
```

**CSS**: All styles live in `src/styles/global.css` as a single file imported in `index.astro`. Per-component `<style>` blocks are intentionally avoided — the CSS uses cross-cutting constructs (`body::before`, `::selection`, `.hero > *` child-combinator animations, `section:last-of-type`) that don't work well with Astro's scoped styles.

**Content as data**: Career entries, stack cells, testimonials, and offstage facts live in `src/data/*.ts` as typed arrays. To add a new career entry, edit `src/data/career.ts` — no HTML to touch.

**Theming**: dark-only. CSS custom properties on `:root` with `color-scheme: dark`; there is no light theme. Primary accent `--cobalt`, secondary `--warm`, background `--paper`.

**Fonts**: self-hosted via `@fontsource/*` packages imported in `Base.astro` (no Google Fonts requests). Font family names in CSS match the Fontsource defaults, so adding a weight means importing another `<weight>.css` file.

**JS**: One `<script>` block in `Hero.astro` toggles `.zoomed` on the portrait when the wrapping `.portrait-btn` button is clicked (keyboard-accessible, syncs `aria-pressed`). That's the entire client-side JS surface.

**Section order**: hero → whoami (inlined in `index.astro`) → CareerTimeline → Stack → Voices → Tools → Offstage → Footer. The `whoami` section has no dynamic data and is inlined directly in `index.astro`.

**Tools section**: `src/data/tools.ts` lists vibe-coded side-project tools; the section renders nothing while the array is empty. Each tool lives in its own public repo with GitHub Pages enabled — because this site's CNAME is `cpinho.com`, a repo named `<tool>` is served at `cpinho.com/<tool>/` automatically (the tool's build must set its base path to `/<tool>/`).
