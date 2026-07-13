# Vivek Tech Resume

Public Next.js codebase for a personal resume website.

Live site: [vivek-tech-resume.vercel.app](https://vivek-tech-resume.vercel.app)

## What this is

A single-page resume site with:

- a clear hero and proof points
- selected side projects and case-study links
- work history, tools, and contact links
- SEO metadata, sitemap, robots.txt, JSON-LD, and `/llms.txt`

Project docs:

- [AGENTS.md](AGENTS.md) — stack, architecture, and coding standards
- [docs/implementation-plan.md](docs/implementation-plan.md)

## Stack

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- Server Components by default
- static generation for the landing page

## Project layout

```text
src/
  app/                 routes, metadata, robots, sitemap, llms.txt
  components/          shared UI such as theme toggle and structured data
  features/home/       landing page sections and project cards
  lib/                 resume content, site config, theme, SEO helpers
```

Resume content lives in `src/lib/resume-data.ts`.

## Getting started

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

Use [.env.example](.env.example) as the reference.

Optional variables:

- `NEXT_PUBLIC_SITE_URL` — canonical production URL for SEO metadata
- `NEXT_PUBLIC_GITHUB_URL` — override GitHub profile URL (profile only, not a repo)
- `NEXT_PUBLIC_LINKEDIN_URL` — override LinkedIn profile link

If `NEXT_PUBLIC_SITE_URL` is unset on Vercel, the deployment URL is used automatically.

## Deployment

Deploy with Vercel or any Next.js-compatible host.

Example:

```bash
vercel link
vercel --prod
```

## Public repo rules

- never commit secrets
- only document environment variable names, never values
- keep personal data in docs limited to what is intentionally public

## Notes

- only add a public resume PDF if it has been redacted for public release
