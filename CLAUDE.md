# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page website for **El Lobo Financiero**, a Spanish-language financial education brand. No build tools, frameworks, or package managers — just vanilla HTML, CSS, and JS served directly.

## Architecture

- **`index.html`** — Single HTML file containing all sections, anchor-navigated (`#contenido`, `#lobotracker`, `#contacto`, `#privacidad`)
- **`styles.css`** — All styling (~18K lines). Uses CSS custom properties defined in `:root` for theming. Mobile-first responsive with breakpoints at 768px and 1100px
- **`script.js`** — Hamburger menu toggle, optional YouTube Data API subscriber count (falls back to hardcoded "1.5K"), and IntersectionObserver-based scroll reveal animations (`.reveal` class)
- **`public/`** — All static assets (images, favicons). Recent commits focused on image compression (PNG→JPG)
- **`content.md`** — Canonical copy and section structure reference
- **`assets-manifest.md`** — Design tokens (colors, typography scale), asset inventory, and external links

## Design Tokens

Colors are CSS variables: `--coral` (#EC5C73), `--blue-a` (#08599D), `--yellow` (#F9DC5C), `--white` (#F5F8FB), `--dark` (#2E2828). Typography uses Google Fonts DM Sans (400/500/700) with `clamp()`-based fluid sizing.

## Hosting & Deployment

- **GitHub**: `LoboFinanciero/lobofinanciero-website` (the org is `LoboFinanciero`)
- **Vercel**: Connected to the GitHub repo, auto-deploys on every push to `main`
  - Framework preset: **Other** (static site)
  - Build command: none
  - Output directory: `.` (root — must be overridden from default)
  - Default URL: `lobofinanciero-website.vercel.app`
- **Domain**: `lobofinanciero.com`, purchased on **Namecheap** (~$7/year)
- **DNS** (configured in Namecheap Advanced DNS):
  - A record: `@` → `216.198.79.1` (Vercel)
  - CNAME: `www` → `f9d719885f3e1989.vercel-dns-017.com`
  - `www.lobofinanciero.com` is primary; root redirects to www (307)
- **SSL/HTTPS**: Automatically managed by Vercel (Let's Encrypt)

### Deployment Workflow

Edit locally → `git add . && git commit && git push` → Vercel auto-deploys (~10-20s). Every push also creates a preview deployment URL.

## Key Conventions

- All site content is in **Spanish**
- YouTube subscriber count uses the YouTube Data API v3 with an empty API key by default (graceful fallback)
- TikTok follower count is hardcoded and updated manually
- `--blue-b` (#1A7FCF) exists as an alternate YouTube card color option (client decides)
- Images go in `/public/`. Logo requires dark/transparent backgrounds
- No build step — edit files directly and refresh
