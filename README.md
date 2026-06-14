# Alabama Hands & Voices Website

This repository contains the Alabama Hands & Voices website. It uses Next.js 16, React 19, TypeScript, Tailwind CSS, Keystatic, and Netlify.

## Features

- Next.js App Router with fixed, code-reviewed SEO metadata.
- Keystatic local-file editing during development and Keystatic Cloud in production.
- Git-backed YAML content under `src/content/`.
- Controlled CMS fields that keep routes, payments, and other functional values in code.
- Netlify Forms for membership and program forms.
- Playwright coverage for public routes, Chromium, Firefox, WebKit, mobile Chromium, and WCAG 2.2 A/AA Axe checks.

## Development

### Prerequisites

- Node.js 20.9 or newer
- npm

No environment variables are required for normal local development.

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
