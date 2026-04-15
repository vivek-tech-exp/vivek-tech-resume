# Vivek Tech Resume

Public Next.js codebase for a personal resume website.

The goal is simple:

- replace a static PDF-style resume with a fast, accessible website
- keep the repository public so the implementation quality is visible

## Status

Planning phase.

Project docs:

- [docs/implementation-plan.md](docs/implementation-plan.md)
- [docs/coding-standards.md](docs/coding-standards.md)

## Scope

- landing page
- project pages sourced from Notion
- GitHub repo link or selected repository links
- LinkedIn link
- resume PDF download
- responsive layout
- WCAG 2.1 AA accessibility
- strong performance with minimal client-side JavaScript

## Tech Direction

- Next.js App Router
- TypeScript in strict mode
- Server Components by default
- static-first rendering with controlled revalidation for external content

## Public Repo Rules

- never commit secrets
- only document environment variable names, never values
- do not commit private Notion IDs or private content
- keep personal data in docs limited to what is intentionally public

## Notes

This repo is meant to show both the resume content and the quality of the code behind it.
