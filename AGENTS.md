<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Application architecture

- This repository is one Next.js application. Keep application code in `src/`; do not add workspace packages or separate apps.
- Keep `src/app` routes, layouts, metadata, and handlers thin. Routes compose feature entry points.
- Put each workflow in `src/features/<workflow>`. A feature owns its components, hooks, services, schemas, types, configuration, and utilities; create only the folders it needs.
- Put app-wide route and presentation configuration in `src/config`, providers and runtime setup in `src/infrastructure`, and helpers genuinely shared by multiple workflows in `src/shared`.
- Use `src/components/ui` for reusable, app-owned interface compositions. Keep workflow-specific presentation inside its feature.
- Do not add or consume raw shadcn primitives. shadcn is configured for the app's design tokens and future component workflow; build purposeful app-owned compositions in `src/components/ui`.
- Keep contracts, schemas, and configuration independent of rendering, workflow hooks, and request services.
