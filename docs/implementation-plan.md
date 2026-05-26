# Implementation Plan

## Goal

Build a personal resume website in Next.js.

This is not a product site. It is a clear, fast, well-built web version of a resume, with the code kept public to show implementation quality.

## Current scope

- single landing page with profile, selected work, experience, and contact links
- resume content stored in `src/lib/resume-data.ts`
- external links to GitHub, LinkedIn, live apps, repos, and Notion case studies
- SEO and discoverability via metadata, sitemap, robots.txt, JSON-LD, and `/llms.txt`

## Routes

- `/`
- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`

## Data model

All public resume content is typed and stored in `src/lib/resume-data.ts`:

- profile basics
- proof points
- experience highlights
- side projects
- case studies
- core stack
- UI copy

External content is linked, not fetched at runtime.

## Design direction

The site should feel understated, minimal, and precise.

Rules:

- no generic portfolio UI
- no skill bars or decorative dashboards
- no unnecessary animation
- plain language and one idea per section
- let typography, spacing, and content do most of the work

## Technical direction

- Next.js App Router
- TypeScript strict mode
- Server Components by default
- static generation for the landing page
- minimal client-side JavaScript

Structure:

- `src/app` — routes, layouts, SEO endpoints
- `src/features/home` — landing page UI
- `src/components` — shared UI such as theme toggle
- `src/lib` — resume data, site config, theme, SEO helpers

## Client JavaScript

Only small client islands are used:

- theme toggle in the header
- optional hero atmosphere on desktop (`three` + HTML-in-Canvas when supported)

Everything else is server-rendered HTML.

## Experimental hero atmosphere

The hero can load a deferred Three.js scene on desktop browsers that allow motion.

- **Three.js** renders a subtle floating panel behind the hero.
- **HTML-in-Canvas** (`HTMLTexture` in Three.js r184) maps real DOM text onto the panel when the browser supports it.
- The readable hero remains normal HTML for SEO, accessibility, and fast first read.
- The effect is skipped for reduced motion, coarse pointers, save-data mode, and small screens.

HTML-in-Canvas is still experimental in Chrome ([origin trial](https://developer.chrome.com/blog/html-in-canvas-origin-trial)). When unsupported, the scene falls back to a simple shaded plane.

## Quality bar

### Accessibility

WCAG 2.1 AA is the target.

Minimum expectations:

- semantic HTML
- keyboard access
- visible focus states
- sufficient contrast
- reduced-motion support
- meaningful labels

### Performance

Minimum expectations:

- small client bundle
- no decorative runtime widgets
- static HTML for primary content
- deferred rendering only where it helps below-the-fold sections

## Build order

1. Scaffold the Next.js app and baseline tooling.
2. Set up layout, typography, tokens, and accessibility baseline.
3. Build the landing page from typed resume data.
4. Add SEO endpoints and structured metadata.
5. Run accessibility, responsive, and performance checks.

## Public repo constraints

- no secrets in the repo
- no private IDs in docs
- no private personal information unless intentionally public
- docs should stay short and public-safe
