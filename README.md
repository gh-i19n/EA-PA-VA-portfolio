# AY Folio

A single Next.js application for AY's professional portfolio. The current version is a multi-page editorial portfolio preview, organized as one modular app.

## Run locally

Use Node.js 20.9 or newer and pnpm 10.27.0.

```bash
pnpm install
pnpm dev
```

## Contact email delivery

The contact form sends requests through Resend from the server. Set these in
`.env.local` for local development and in the deployment environment for the
hosted site:

```dotenv
RESEND_API_KEY=re_your_resend_api_key
RESEND_FROM_EMAIL="Ayomide Ajibola <contact@your-verified-domain.com>"
```

The sender address must use a domain verified in Resend. Keep the API key out of
source control and browser code.

Useful checks:

```bash
pnpm lint
pnpm check-types
pnpm build
```

## Application structure

```text
src/
  app/                 Next.js routes, layouts, metadata, and handlers
  components/ui/        App-wide, app-owned interface compositions
  components/primitives/ Private shadcn implementation details
  config/               App-wide routes and presentation configuration
  features/<workflow>/  Workflow modules, organized by the work they own
  infrastructure/       Providers, integrations, and runtime setup
  shared/ui/             Shared UI helpers and class utilities
  shared/<domain>/       Helpers used by more than one workflow
public/                 Static files served from the site root
```

Keep routes thin and compose feature entry points from `src/features`. A workflow owns its components, hooks, services, schemas, types, configuration, and utilities; create only the folders it needs. Keep shared helpers in `src/shared` only when multiple workflows use them. No workspace packages or separate apps are part of this project.

shadcn generates its primitives into `src/components/primitives`. Only complete,
app-owned compositions in `src/components/ui` consume them. Routes and features
use compositions such as `TextField`, `TextAreaField`, and `SelectField`; they
never import primitives or build raw inputs. Field compositions own their label,
description, validation, disabled state, focus treatment and control. ESLint
enforces both the import boundary and the restriction on raw form controls.

## Portfolio routes

- `/` — home
- `/about` — profile
- `/services` — services
- `/skills-and-tools` — capabilities and tools
- `/case-studies` — case study index and detail pages
- `/credentials` — testimonials and certificates
- `/contact` — contact

The preview uses a temporary stock portrait and an example contact address. Case studies are labeled illustrative scenarios; client testimonials and certificates are empty until AY supplies approved material. See `research/design-direction.md` for the visual direction and asset credits.
