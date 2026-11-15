# AY Folio

A single Next.js application for AY's professional portfolio. The current version is a multi-page editorial portfolio preview, organized as one modular app.

## Run locally

Use Node.js 20.16 or newer and pnpm 10.27.0.

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

## Vercel Web Analytics

The root layout mounts `Analytics` from `@vercel/analytics/next` once for the
whole site. It tracks page views and client-side navigation, including case-study
routes. The SDK selects development mode locally and production mode in deployed
builds. No analytics API key or additional environment variable is required for
this Vercel-hosted setup.

Web Analytics must be enabled for the Vercel project. After deploying this change,
visit the deployed site, navigate between pages, then check the project's Web
Analytics dashboard. Local development does not confirm production ingestion.
See [Vercel's setup guide](https://vercel.com/docs/analytics/quickstart).

## Project images and PDF documents

Project service galleries accept images and original PDF files. Document entries
are configured beside images in `project-work-samples.ts`; optional page counts
and section links help visitors navigate longer documents. The supplied
production-planning document is available under Project coordination and management.

The PDF reader loads on selection and renders one page at a time, with selectable
text, page navigation, zoom, section links and an expanded reading view.
File selection and page selection are separate, and the selected PDF page is
retained when switching files or expanding the reader. Loading failures provide
retry and an original-file link. PDFs are served from this application.
The dedicated PDF download action is omitted in both gallery views at the owner's
request.

`react-pdf` and `pdfjs-dist` are pinned to matching versions. Update both together
so the bundled PDF.js worker continues to match the renderer. The client-only
reader keeps PDF.js out of server rendering and image-only initial bundles.

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
