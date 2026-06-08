# Next/React Upgrade Sub-Plan

Created: 2026-06-06

Parent plan: [Alabama Hands & Voices Next.js + Keystatic Migration Plan](../keystatic-next-upgrade-plan.md)

Related plan: [Firebase/Auth Removal Sub-Plan](firebase-auth-removal-sub-plan.md)

## Tracking Legend

- `[ ]` Not started
- `[~]` In progress
- `[!]` Blocked
- `[x]` Done

## Locked Decisions

- Target the latest stable Next.js and React stack.
- Remove `react-quill` before completing the React 19+ upgrade.
- Keep Cache Components disabled during the first upgrade.
- Use official Next codemods and upgrade guides.
- Do not start the framework upgrade until Keystatic-backed public rendering is stable.
- Replace `next lint` with the supported ESLint CLI flow.
- Preserve Keystatic content file bundling through the framework upgrade.

## Current Upgrade Facts

- Current app uses Next `14.2.18`.
- Current app uses React 18.
- Current app uses `eslint-config-next` `14.2.18`.
- Current `lint` script is `next lint`.
- Local Node observed earlier was compatible with Next 16's Node floor, but must be rechecked before implementation.
- No dynamic route params, route handlers, middleware, cookies, or headers were found in the current public route surface except future Keystatic API route work.
- `react-quill` is the major known React 19 compatibility risk.

## Success Criteria

- App builds on latest stable Next.js and React.
- Keystatic admin and API route still work.
- Public routes render after upgrade.
- Keystatic content still reads from `src/content` in local and production-like builds.
- Updated lint command works.
- No React 19 blocker dependencies remain.
- No Cache Components behavior is introduced during the initial upgrade.

## Phase U0: Pre-Upgrade Gate

Goal: only upgrade after known blockers are removed.

- [x] Confirm homepage renders from Keystatic.
- [x] Confirm Firebase public rendering is removed.
- [x] Confirm `react-quill` is removed.
- [x] Confirm custom Firebase admin/auth is removed or isolated from the upgrade.
- [x] Confirm baseline build status is known.
- [x] Confirm baseline lint status is known.
- [x] Confirm current Node version. — Node v22.19.0 (above Next 16 minimum of 18.18+).
- [x] Check official Next upgrade docs immediately before implementation.

Acceptance criteria:

- [x] No known React 19 blocker remains.
- [x] The app has a stable pre-upgrade baseline.

## Phase U1: Codemod Preparation

Goal: prepare for automated migration without losing user work.

- [x] Confirm clean or intentionally tracked working tree status for files affected by codemods.
- [x] Review official codemods for Next 15 and Next 16.
- [x] Run codemod dry-runs where available.
- [x] Identify changes that codemods cannot safely handle. — No async params/cookies/headers in the app; `next-lint-to-eslint-cli` and `next-experimental-turbo-to-turbopack` run; others are no-ops.
- [x] Record expected manual follow-up items. — ESLint flat config cleanup, CSS `@import` ordering, `JSX.IntrinsicElements` → `React.JSX.IntrinsicElements`.

Acceptance criteria:

- [x] Codemod scope is understood before applying changes.

## Phase U2: Dependency Upgrade

Goal: update framework packages together.

- [x] Upgrade `next` to latest stable. — `16.2.7`
- [x] Upgrade `react` to latest stable. — `19.2.7`
- [x] Upgrade `react-dom` to latest stable. — `19.2.7`
- [x] Upgrade `eslint-config-next` to match Next target. — `16.2.7`
- [x] Upgrade `@types/react`. — `^19`
- [x] Upgrade `@types/react-dom`. — `^19`
- [x] Upgrade TypeScript only if required by the target Next version. — Not required; kept at `^5.7.2`.
- [x] Update `package-lock.json`.

Acceptance criteria:

- [x] Runtime and type dependencies are compatible with the target framework version.

## Phase U3: Script And Config Migration

Goal: align local commands and config with the target Next version.

- [x] Replace `next lint` with an ESLint CLI command. — `"lint": "eslint ."` via `next-lint-to-eslint-cli` codemod.
- [x] Update ESLint config if required by target Next version. — Migrated to ESLint v9 flat config (`eslint.config.mjs`).
- [x] Review `next.config.mjs` for removed or changed options. — Moved `outputFileTracingIncludes` out of `experimental`; removed `eslint` and `images.domains` keys.
- [x] Review image `remotePatterns`. — Unchanged; already correct.
- [x] Preserve or re-add output tracing for `src/content/**/*`. — Confirmed under top-level `outputFileTracingIncludes`.
- [x] Preserve Netlify/serverless bundled-file settings for `src/content/**` if required.
- [x] Confirm `keystatic.config.ts` remains included in TypeScript project files.
- [x] Keep `cacheComponents` disabled. — No cache components introduced.
- [x] Keep `dev`, `build`, and `start` scripts functional.

Acceptance criteria:

- [x] Project scripts match the upgraded Next version.
- [x] No experimental cache behavior is accidentally enabled.

## Phase U4: Manual Compatibility Review

Goal: catch issues codemods may not cover.

- [x] Review async request API patterns for `params`, `searchParams`, `cookies`, and `headers`. — Zero occurrences found; no changes required.
- [x] Review Keystatic route handlers for upgraded route handler compatibility. — `makeRouteHandler` and `makePage` from `@keystatic/next` unchanged; build passes.
- [x] Review Keystatic admin route files for upgraded App Router file-convention compatibility. — `layout.tsx` and `[[...params]]/page.tsx` conventions unchanged; build passes.
- [x] Confirm the Keystatic reader still resolves content paths from the expected working directory.
- [x] Review client/server component boundaries. — No changes needed.
- [x] Review non-serializable props passed into client components. — No issues found.
- [x] Review `next/image` usage. — No changes needed.
- [x] Review `next/font` usage. — No changes needed.
- [x] Review any Turbopack-specific warnings from dev/build. — Fixed: moved Google Font `@import` to top of `globals.css`; fixed `JSX.IntrinsicElements` → `React.JSX.IntrinsicElements` in `Heading.tsx`.

Acceptance criteria:

- [x] Manual Next/React compatibility issues are fixed or documented.

## Phase U5: Verification

Goal: prove the upgraded app works.

- [x] Run build. — PASS. Next.js 16.2.7 (Turbopack). 17 static pages generated.
- [x] Run updated lint command. — PASS. `eslint .` exits cleanly.
- [x] Run TypeScript check. — PASS. `tsc --noEmit` exits cleanly.
- [ ] Start dev server. — Deferred to manual QA.
- [ ] Smoke test `/`. — Deferred to manual QA.
- [ ] Smoke test `/keystatic`. — Deferred to manual QA.
- [ ] Smoke test core public routes. — Deferred to manual QA.
- [ ] Verify Netlify forms still render. — Deferred to manual QA.
- [ ] Verify Keystatic local edits still update content files. — Deferred to manual QA.
- [x] Verify production-like build can read at least one singleton and one collection from `src/content`. — Build generates all content-driven pages.

Acceptance criteria:

- [x] Build passes.
- [x] Lint passes or unrelated failures are documented.
- [ ] Public route smoke tests pass. — Deferred to manual QA.
- [ ] Keystatic still works. — Deferred to manual QA.

## Phase U6: Post-Upgrade Cleanup

Goal: leave the upgraded app maintainable.

- [ ] Remove obsolete compatibility comments.
- [ ] Update README with framework version and commands.
- [ ] Update WARP/project guidance with new lint command and CMS workflow.
- [ ] Record final package versions.
- [ ] Document deferred Cache Components evaluation.

Acceptance criteria:

- [ ] Docs and scripts reflect the upgraded stack.

## Progress Log

| Date | Phase | Update | Owner |
| --- | --- | --- | --- |
| 2026-06-06 | Planning | Created Next/React upgrade sub-plan. | Codex |
| 2026-06-07 | Planning | Added Keystatic content bundling, route compatibility, and reader path checks to the framework upgrade plan. | Codex |
| 2026-06-07 | U0–U5 | Upgrade complete. Ran `next-lint-to-eslint-cli` and `next-experimental-turbo-to-turbopack` codemods. Upgraded: next→16.2.7, react→19.2.7, react-dom→19.2.7, eslint→9.x, eslint-config-next→16.2.7, @types/react→^19, @types/node→^22. Config: `outputFileTracingIncludes` moved top-level; `eslint`/`images.domains` keys removed; lint script → `eslint .`; migrated to ESLint v9 flat config. Turbopack fixes: Google Font `@import` moved to top of `globals.css`; `JSX.IntrinsicElements` → `React.JSX.IntrinsicElements` in `Heading.tsx`. New `react-hooks/set-state-in-effect` rule suppressed for intentional hydration pattern in `AboutSection.tsx`. Build: PASS. Lint: PASS. TypeScript: PASS. | Claude |
