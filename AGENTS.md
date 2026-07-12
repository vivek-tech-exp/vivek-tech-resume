# AI Agent Guidelines & Context (AGENTS.md)

You are an expert software engineer working on a public personal resume website. This repository is public to show code quality behind the site. The standard is clear code, strong fundamentals, and minimal overhead.

**This file is the only source of truth** for stack, architecture, and coding standards. Prefer it over assumptions from other projects.

**Related docs:**

| Doc | Role |
| --- | --- |
| `README.md` | Project overview, scripts, env vars |
| `docs/implementation-plan.md` | Implementation notes |

---

## 1. Core Tech Stack & Dependencies

- **Framework:** Next.js 16 (App Router, React Server Components by default)
- **Runtime:** React 19 / react-dom 19 (do **not** target React 18)
- **Language:** TypeScript strict mode (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`; no `any`)
- **Node:** `>=20.11.0` (see `package.json` engines)
- **Styling:** Tailwind CSS 4 + CSS variables in `globals.css`
- **Deployment:** Vercel (static generation for the landing page)

This repo has **no database**, ORM, auth provider, or heavy state library. Do not introduce them without explicit approval.

---

## 2. Engineering & Design Principles

- Prefer simple, explicit code over clever abstractions.
- Optimize for readability and maintainability.
- Keep route files thin; keep content data separate from presentation.
- Avoid unnecessary dependencies — prefer Web APIs, Next.js, and existing `src/lib/*`.
- Keep functions and components small; decompose when concerns mix.
- Prefer composition (`children`) over flag-heavy components.
- Avoid hasty abstraction: duplicate twice before extracting shared helpers.

---

## 3. Architectural Rules

### Layout

- `src/app` — routes, layouts, metadata, robots, sitemap, `llms.txt`
- `src/features` — feature-owned UI (e.g. `features/home`)
- `src/components` — shared building blocks (theme toggle, structured data)
- `src/lib` — resume content, site config, theme, SEO helpers

Resume content lives in `src/lib/resume-data.ts`. Keep domain types explicit there and UI copy centralized in `resumeData.uiStrings`.

### Next.js & React

- Server Components by default. Add `"use client"` only when hooks, browser APIs, or handlers require it (today: theme toggle and related interactive UI).
- Prefer static rendering for the landing page.
- Keep client-side JavaScript minimal; do not ship decorative widgets that do not help the reader.
- Prefer progressive disclosure for secondary content.
- Do not emit Pages Router code (`pages/`, `getServerSideProps`, `getStaticProps`).
- Async Next.js APIs (`headers()`, `cookies()`, route `params`, `searchParams`) are Promises — **await** them when used.
- Existing `src/middleware.ts` only redirects legacy resume file paths; do not expand middleware without a clear need.

### Content & SEO

When changing public resume content:

1. Update `src/lib/resume-data.ts`
2. Keep copy concise and factual
3. Prefer one-line teasers and highlights over long blocks
4. Verify the landing page still reads clearly on mobile

Keep these in sync when content or routes change:

- `src/app/layout.tsx` metadata
- `src/lib/structured-data.ts`
- `src/lib/llms-content.ts`
- `src/app/sitemap.ts`
- `src/app/robots.ts` (allow public indexing; disallow internal paths like `/api/` and `/admin/`)

### Styling & Accessibility

- Restrained custom design, not template UI; CSS variables for color and theme.
- Subtle, purposeful motion; avoid decorative patterns that add visual noise.
- Honor `prefers-reduced-motion`.
- WCAG 2.1 AA target: semantic HTML, keyboard access, visible focus, contrast, clear labels/link text.

### Public repo rules

- Never commit secrets, private tokens, or IDs.
- Document environment variable **names** only (see `.env.example`).
- Do not put private content in docs; keep personal data limited to what is intentionally public.

---

## 4. Rules of Engagement for AI Interactions

1. **Strict versioning:** Next.js 16 + React 19. Prefer React 19–compatible patterns.
2. **Prioritize simplicity:** No new npm packages or heavy libraries without explicit approval.
3. **Surgical diffs:** Small targeted fixes; no speculative refactors or drive-by renames.
4. **Complete code only:** No placeholders, stubs, or `// TODO: implement` bodies.
5. **Content updates:** Prefer editing `src/lib/resume-data.ts` over hardcoding copy in components.
6. **Before claiming done:** `npm run lint`, `npm run typecheck`, and `npm run build` must pass; manually check hero clarity, links, and mobile layout. Accessibility and performance impact should be acceptable; this file stays current when standards change.
