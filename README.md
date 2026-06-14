# Alabama Hands & Voices Website

This repository contains the source code for the **Alabama Hands & Voices** website. The site is built with [Next.js](https://nextjs.org/) (App Router), TypeScript and Tailwind CSS. Content is managed with [Keystatic](https://keystatic.com/) and the site is deployed via [Netlify](https://www.netlify.com/).

## Features

- **Next.js 16 App Router** with React 19 — pages are async server components.
- **Keystatic CMS** in local-file storage mode: content lives as YAML files in `src/content/` and is edited through the admin UI at `/keystatic`.
- **Tailwind CSS** with custom brand palette (`hvblue` #141B4B, `hvorange` #FF7F32) and the Kaushan Script decorative font.
- **Netlify Forms** for contact/membership form submissions.
- Component library in `src/components` using Headless UI and Framer Motion.

## Development

### Prerequisites

- Node.js 18+
- npm

No environment variables are required for local development.

### Install and run

```bash
npm install
npm run dev
```

Open:

- Site: <http://localhost:3000>
- Local Keystatic editor: <http://localhost:3000/keystatic>

In development, `keystatic.config.ts` selects `storage.kind: 'local'`. Saving in the local editor writes YAML files directly under `src/content/`; commit those files through the normal Git workflow.

### Verification commands

Install Playwright browsers once:

```bash
npx playwright install
```

Run the project checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run test:e2e
```

Run a focused browser project or test:

```bash
npx playwright test --project=chromium
npx playwright test tests/e2e/accessibility.spec.ts --project=mobile-chromium
npx playwright test tests/e2e/keystatic.spec.ts --project=chromium
```

## Content Management

Content schemas are defined in `keystatic.config.ts`.

- Singletons contain global settings, navigation copy, and page content.
- Collections contain board members, staff members, and videos.
- Server-only readers live in `src/lib/keystatic/`.
- Functional constants such as routes, navigation order, membership prices/titles, and PayPal IDs remain in code.

See the [Keystatic Editor Guide](docs/keystatic-editor-guide.md) for staff instructions and protected-field details.

### Production Cloud workflow

Production uses Keystatic Cloud project `al-hands-and-voices/al-hands-and-voices`.

1. Open <https://alabama-hands-and-voices-redesign.netlify.app/keystatic>.
2. Authenticate through the Keystatic Cloud login screen.
3. Edit an allowed field and save the entry.
4. Keystatic stores the content change in the connected GitHub repository.
5. Netlify builds and publishes the updated `main` branch.
6. Verify the public page after the Netlify production deploy reaches `ready`.

The production editor does not write to the deployed server filesystem. Git remains the content source of truth.

## Project Structure

```text
src/
  app/              # Public routes, metadata routes, Keystatic, and API routes
  components/       # Layout, page, and UI components
  content/          # Keystatic-managed YAML content
  lib/keystatic/    # Server-only content readers
  lib/seo.ts        # Fixed route metadata and canonical route list
  types/            # Shared TypeScript types
  utils/            # Form helpers
tests/e2e/           # Playwright, Axe, CMS, and SEO checks
```

## Deployment

Netlify deploys pushes to `main` using `npm run build`. Production verification should include:

- The deploy commit matches the intended GitHub commit.
- `/keystatic` displays the Cloud login/editor surface.
- Public navigation, membership values, payment IDs, and video galleries still match their tests.
- `/sitemap.xml`, `/robots.txt`, and an unknown-route 404 render correctly.

The canonical production URL is <https://alabama-hands-and-voices-redesign.netlify.app>.

## Additional Documentation

- [Staff Keystatic Editor Guide](docs/keystatic-editor-guide.md)
- [Accessibility Findings](docs/accessibility-findings.md)
- [Migration Plan](plans/keystatic-next-upgrade-plan.md)

## License

This project is maintained by Alabama Hands & Voices. All rights reserved.
