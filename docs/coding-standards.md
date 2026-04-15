# Coding Standards

## Purpose

This repository is public to show the code quality behind a resume website.

The standard is simple: clear code, strong fundamentals, minimal overhead.

## Core Rules

- prefer simple, explicit code over clever abstractions
- optimize for readability and maintainability
- keep route files thin
- keep external integrations isolated from UI code
- avoid unnecessary dependencies

## TypeScript

- use strict mode
- do not use `any`
- use `unknown` at boundaries and narrow deliberately
- validate external data before using it
- keep domain types explicit

## Next.js And React

- use Server Components by default
- add `"use client"` only when required
- fetch primary content on the server
- do not pass raw Notion or GitHub payloads into UI components
- keep components small and focused

## Architecture

- `src/app` for routes and layouts
- `src/features` for feature-owned UI
- `src/components` for shared building blocks
- `src/lib/integrations` for Notion and GitHub access
- `public` for static assets such as the resume PDF

## Styling

- use a restrained custom design, not template UI
- use design tokens for spacing, color, type, and motion
- keep motion subtle and purposeful
- avoid decorative patterns that add visual noise

## Accessibility

WCAG 2.1 AA is required.

Minimum rules:

- semantic HTML first
- keyboard access for all interactive elements
- visible focus styles
- sufficient color contrast
- correct labels and alt text
- reduced-motion support

## Performance

- keep client-side JavaScript minimal
- prefer static rendering and server rendering
- optimize images and fonts
- avoid large component or animation libraries unless justified
- do not ship code that is not needed for the initial experience

## Content And Data

- keep copy concise
- prefer facts, decisions, and outcomes over hype
- keep slugs stable
- normalize Notion and GitHub data before rendering

## Testing

At minimum, cover:

- data mapping and utility logic
- main route rendering
- resume download link behavior
- accessibility checks for key pages

## Public Repo Rules

- never commit secrets
- never commit private tokens or IDs
- do not put private content in docs
- document environment variable names only

## Definition Of Done

Work is complete when:

- the code is clear
- types are sound
- the main flows work
- accessibility has been checked
- performance impact is acceptable
- docs are current
