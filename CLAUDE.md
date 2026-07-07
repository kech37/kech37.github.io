# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site for Carlos Pinho, hosted via GitHub Pages at [cpinho.com](https://cpinho.com). Built with **Astro 7** (static output), no UI framework.

## Dev commands

```bash
npm run dev      # dev server at http://localhost:4321 with hot reload
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
  layouts/Base.astro   <html>, <head>, Google Fonts links
  pages/index.astro    assembles all sections
  styles/global.css    all CSS (single file — see note below)
public/
  me.jpeg        portrait photo
  CNAME          custom domain
```

**CSS**: All styles live in `src/styles/global.css` as a single file imported in `index.astro`. Per-component `<style>` blocks are intentionally avoided — the CSS uses cross-cutting constructs (`body::before`, `::selection`, `.hero > *` child-combinator animations, `section:last-of-type`) that don't work well with Astro's scoped styles.

**Content as data**: Career entries, stack cells, testimonials, and offstage facts live in `src/data/*.ts` as typed arrays. To add a new career entry, edit `src/data/career.ts` — no HTML to touch.

**Theming**: CSS custom properties on `:root` with a `@media (prefers-color-scheme: dark)` override. Primary accent `--cobalt`, secondary `--warm`, background `--paper`.

**JS**: One `<script>` block in `Hero.astro` toggles `.zoomed` on the portrait image click. That's the entire client-side JS surface.

**Section order**: hero → whoami (inlined in `index.astro`) → CareerTimeline → Stack → Voices → Offstage → Footer. The `whoami` section has no dynamic data and is inlined directly in `index.astro`.
