# Coding Standards

## Purpose

This repository is public to show the code quality behind a resume website.

The standard is simple: clear code, strong fundamentals, minimal overhead.

## Core rules

- prefer simple, explicit code over clever abstractions
- optimize for readability and maintainability
- keep route files thin
- keep content data separate from presentation
- avoid unnecessary dependencies

## TypeScript

- use strict mode
- do not use `any`
- keep domain types explicit in `src/lib/resume-data.ts`
- keep UI copy centralized in `resumeData.uiStrings`

## Next.js and React

- use Server Components by default
- add `"use client"` only when required
- keep components small and focused
- prefer static rendering for the landing page

Current client components:

- theme toggle

## Architecture

- `src/app` for routes and layouts
- `src/features` for feature-owned UI
- `src/components` for shared building blocks
- `src/lib` for resume data, site config, theme, and SEO helpers

## Content updates

When changing public resume content:

1. update `src/lib/resume-data.ts`
2. keep copy concise and factual
3. prefer one-line teasers and highlights over long blocks
4. verify the landing page still reads clearly on mobile

## Styling

- use a restrained custom design, not template UI
- use CSS variables in `globals.css` for color and theme
- keep motion subtle and purposeful
- avoid decorative patterns that add visual noise

## Accessibility

WCAG 2.1 AA is the target.

Minimum rules:

- semantic HTML first
- keyboard access for all interactive elements
- visible focus styles
- sufficient color contrast
- correct labels and link text
- reduced-motion support

## Performance

- keep client-side JavaScript minimal
- prefer server rendering and static generation
- do not ship decorative widgets that do not help the reader
- use progressive disclosure for secondary content

## SEO

Keep these in sync when content or routes change:

- `src/app/layout.tsx` metadata
- `src/lib/structured-data.ts`
- `src/lib/llms-content.ts`
- `src/app/sitemap.ts`

## Testing

At minimum, before merging:

- `npm run lint`
- `npm run build`
- manual check of hero clarity, links, and mobile layout

## Public repo rules

- never commit secrets
- never commit private tokens or IDs
- do not put private content in docs
- document environment variable names only

## Definition of done

Work is complete when:

- the code is clear
- types are sound
- the main flows work
- accessibility has been checked
- performance impact is acceptable
- docs are current
