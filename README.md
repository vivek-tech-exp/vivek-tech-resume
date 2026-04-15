# Vivek Tech Resume

Public Next.js codebase for a personal resume website.

## Status

Foundation scaffold in place.

Project docs:

- [docs/implementation-plan.md](docs/implementation-plan.md)
- [docs/coding-standards.md](docs/coding-standards.md)

## Scope

- landing page
- Notion-backed project content on the landing page
- GitHub repo link or selected repository links
- LinkedIn link
- responsive layout
- WCAG 2.1 AA accessibility
- strong performance with minimal client-side JavaScript

## Tech Direction

- Next.js App Router
- TypeScript in strict mode
- Server Components by default
- static-first rendering with controlled revalidation for external content

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`

## Environment

Use [.env.example](/Users/vivekmankonda/Documents/GitHub/vivek-tech-resume/.env.example) as the reference.

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GITHUB_URL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `NOTION_TOKEN`
- `NOTION_PROJECTS_DATABASE_ID`

## Public Repo Rules

- never commit secrets
- only document environment variable names, never values
- do not commit private Notion IDs or private content
- keep personal data in docs limited to what is intentionally public

## Notes

- only add a public resume PDF if it has been redacted for public release
