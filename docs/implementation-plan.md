# Implementation Plan

## Goal

Build a personal resume website in Next.js.

This is not a product site. It is a clear, fast, well-built web version of a resume, with the code kept public to show implementation quality.

## Scope

- short landing page with profile, selected work, and links
- project detail pages sourced from Notion
- GitHub link or selected repository links
- LinkedIn link
- resume PDF download

## Routes

- `/`
- `/work/[slug]`
- `/resume`

`/resume` can redirect to the PDF asset or render a minimal page with the download link.

## Data Sources

### Notion

Use Notion for project content.

Rules:

- fetch server-side only
- map raw Notion data into internal types before rendering
- keep a stable slug for each project

Suggested fields:

- `name`
- `slug`
- `summary`
- `role`
- `period`
- `featured`
- `github_url`
- `external_url`

### GitHub

Use GitHub as a simple proof surface.

Rules:

- show only selected repositories or a direct profile link
- fetch server-side only
- do not build a noisy activity feed

### Resume PDF

Store the PDF as a static asset, for example:

- `public/resume/vivek-mankonda-resume.pdf`

Use a normal link for download, not a JavaScript-triggered button.

## Design Direction

The site should feel understated, minimal, and precise.

Rules:

- no generic portfolio UI
- no skill bars
- no testimonial carousels
- no loud hero section
- no unnecessary animation
- let typography, spacing, and content do most of the work

## Technical Direction

- Next.js App Router
- TypeScript strict mode
- Server Components by default
- static-first rendering
- controlled revalidation for external content
- minimal client-side JavaScript

Recommended structure:

- `src/app`
- `src/features`
- `src/components`
- `src/lib/integrations`
- `public`

## Quality Bar

### Accessibility

WCAG 2.1 AA is required.

Minimum expectations:

- semantic HTML
- keyboard access
- visible focus states
- sufficient contrast
- reduced-motion support
- meaningful labels and alt text

### Performance

Minimum expectations:

- small client bundle
- optimized images
- intentional font loading
- no heavy UI libraries unless clearly justified

## Build Order

1. Scaffold the Next.js app and baseline tooling.
2. Set up layout, typography, tokens, and accessibility baseline.
3. Build the Notion and GitHub integration layer.
4. Build the landing page, work pages, and resume download flow.
5. Run accessibility, responsive, and performance checks.

## Public Repo Constraints

- no secrets in the repo
- no private IDs in docs
- no private personal information unless intentionally public
- docs should stay short and public-safe
