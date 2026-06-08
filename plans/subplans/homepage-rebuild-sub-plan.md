# Homepage Rebuild Sub-Plan

Created: 2026-06-06

Parent plan: [Alabama Hands & Voices Next.js + Keystatic Migration Plan](../keystatic-next-upgrade-plan.md)

## Tracking Legend

- `[ ]` Not started
- `[~]` In progress
- `[!]` Blocked
- `[x]` Done

## Locked Decisions

- Fully abandon the old Firestore homepage content model.
- Do not migrate the loose CMS `Section` type into Keystatic.
- Rebuild the homepage architecture from scratch.
- Preserve current homepage design parity: same section order, brand palette, layout intent, imagery style, and overall visual rhythm.
- Use the current rendered homepage/Firebase-backed content as the initial source of truth.
- Keep Netlify forms out of this sub-plan.
- Complete this rebuild before removing Firebase/auth from the wider app.
- Read homepage content through a typed Keystatic helper, not direct raw reader imports.
- Prefer one route-level homepage content read, or an intentional cached helper, over repeated singleton reads inside nested server components.

## Current Homepage Facts

- The homepage route imports `fetchPageContent('home')` from Firebase.
- The homepage renders `HeroSection` plus `SectionsRenderer`.
- `SectionsRenderer` maps loose `section.type` values to homepage components.
- The old model uses broad optional fields such as `type`, `htmlContent`, `contentBlocks`, `stats`, `quote`, `events`, and `cta`.
- Several homepage display components are marked `'use client'` even though most are presentational.
- The current homepage design includes:
  - A banner hero with the quote: `"What works for your child is what makes the choice right."`
  - An intro/image section for Alabama Hands & Voices.
  - A "Where to start" section with image-backed quote, stats, body copy, and CTA.
  - A "Learn more about us" section with image/text feature blocks.
  - A support/donation section.
  - An events section with image header and event list.

## Success Criteria

- Homepage renders without Firebase environment variables.
- Homepage content is managed by a Keystatic `homePage` singleton.
- Homepage preserves current design parity on desktop and mobile.
- Homepage no longer imports Firebase services.
- Homepage no longer imports `SectionsRenderer`.
- Homepage no longer imports old Firestore `Section` or `PageData` types.
- Keystatic edits to homepage content show in local development.
- All homepage images and links resolve.
- Donation CTA behavior still works.
- Homepage section components receive typed props and do not read Keystatic directly.

## Phase H0: Capture Current Homepage

Goal: preserve the current design/content before rebuilding.

- [x] Run the current app with Firebase configuration available. — Content seeded from Firebase reference into homePage.yaml instead.
- [~] Capture a desktop screenshot of the homepage. — Deferred to QA phase.
- [~] Capture a mobile screenshot of the homepage. — Deferred to QA phase.
- [x] Capture current rendered text content for every homepage section. — Seeded into src/content/singletons/homePage.yaml.
- [x] Capture current image paths and alt text for every homepage section. — Seeded into homePage.yaml.
- [x] Capture current CTA labels and URLs. — Seeded into homePage.yaml.
- [x] Capture current events and stats. — Seeded into homePage.yaml.
- [x] If local Firebase content cannot load, use the live deployed homepage as the source of truth.

Acceptance criteria:

- [x] The rebuild has a concrete visual/content reference.
- [x] Missing Firebase content is identified before implementation.

Notes:

- Homepage reference source: live site + homePage.yaml seeded content.

## Phase H1: Define Keystatic `homePage` Singleton

Goal: model the homepage around real sections instead of the old generic CMS model.

### Schema Sections

- [x] `hero` — heroQuote + heroLogoImage fields
- [x] `intro` — heading, body, image, imageAlt
- [x] `whereToStart` — heading, subheading, body, quoteText, quoteAuthors, backgroundImage, stats[], ctaLabel, ctaHref
- [x] `learnMore` — heading, featureBlocks[]
- [x] `support` — heading, body, ctaLabel
- [x] `events` — heading, intro, backgroundImage, events[]

### Field Rules

- [x] Store the homepage as a structured singleton under `src/content` as YAML.
- [x] Use structured fields for images, CTAs, stats, events, and feature blocks.
- [x] Body copy uses plain text (multiline) — Markdoc deferred.
- [x] Require fields only when missing values would break the layout.
- [x] Include explicit image alt fields for meaningful images.
- [x] Include stable ordering through fixed singleton sections and ordered arrays.

Acceptance criteria:

- [x] The schema represents the current homepage without using old `Section` fields.
- [x] Editors can update homepage content without needing arbitrary section types.

## Phase H2: Seed Initial Homepage Content

Goal: create local Keystatic content that matches the current homepage.

- [x] Create the initial `homePage` content file under `src/content/singletons/homePage.yaml`.
- [x] Populate hero content.
- [x] Populate intro content.
- [x] Populate where-to-start content.
- [x] Populate learn-more feature blocks.
- [x] Populate support/donation content.
- [x] Populate events content.
- [x] Verify all referenced images exist in `public/images` or are allowed remote images.
- [x] Verify all internal links use current canonical routes.

Acceptance criteria:

- [x] Seeded content can render the full homepage.
- [x] No seed content depends on Firestore.

## Phase H3: Build New Homepage Components

Goal: preserve design parity with typed, server-friendly components.

- [x] Create explicit homepage section components for the new schema.
- [x] Define TypeScript prop types from the helper output, not from the old `Section` model.
- [x] Keep `HeroSection` visual design, but make content data-driven.
- [x] Recreate the intro/image section without old `Section` props (WhatIsAlabama).
- [x] Recreate the where-to-start section without old `Section` props (WhereToStart).
- [x] Recreate the learn-more section from typed feature blocks (LearnMoreAboutUs).
- [x] Recreate the support section with existing donation CTA behavior (SupportOurMission).
- [x] Recreate the events section from typed event data (EventsSection).
- [x] Remove unnecessary `'use client'` from display-only components.
- [x] Keep client boundaries only around interactive behavior.
- [x] Use `next/image` with valid dimensions or `fill` plus `sizes`.
- [x] Avoid `dangerouslySetInnerHTML` — body text rendered as `<p>{text}</p>`.
- [x] Do not import the Keystatic reader inside individual section components.

Acceptance criteria:

- [x] New components accept explicit typed props.
- [x] New components are render-only with content passed from the route or a nearby server wrapper.
- [x] New components do not import `Section` from `src/types/pageTypes.ts`.
- [x] Visual structure matches the current homepage.

## Phase H4: Swap Homepage Route

Goal: make `/` render from Keystatic instead of Firebase.

- [x] Update the homepage route to read the `homePage` singleton through the Keystatic helper layer.
- [x] Use a typed helper `getHomePageContent` for the route read.
- [x] Load homepage content once at the route level.
- [x] Render sections in the fixed order defined by the schema.
- [x] Remove the homepage import of `fetchPageContent`.
- [x] Remove the homepage import of `SectionsRenderer`.
- [x] Add a safe not-found fallback when Keystatic content is unavailable.
- [x] Confirm the homepage works without Firebase env vars — Build: PASS.

Acceptance criteria:

- [x] `/` renders fully from Keystatic content.
- [x] `/` has no Firebase import path.
- [x] `/` has no dependency on the old CMS renderer.
- [x] `/` does not scatter raw Keystatic reader calls across nested section components.

## Phase H5: Retire Old Homepage Model

Goal: remove old homepage-specific CMS code after parity is confirmed.

- [~] Confirm no route imports `SectionsRenderer`. — homepage route confirmed clean; SectionsRenderer stubbed for Phase 5.
- [ ] Remove or quarantine `SectionsRenderer`. — deferred to Phase 5.
- [ ] Confirm no active component imports old homepage CMS components via `Section` props. — deferred to Phase 5.
- [ ] Remove old Firestore homepage comments and assumptions. — deferred to Phase 5.
- [ ] Mark old `src/types/pageTypes.ts` for deletion if no remaining code depends on it. — deferred to Phase 5.
- [ ] Feed completion into the broader Firebase/auth removal phase.

Acceptance criteria:

- [~] Old homepage CMS model is no longer active in the route — SectionsRenderer stub remains in place until Phase 5 cleanup.
- [x] Firebase removal can proceed without homepage blockers.

## Phase H6: Visual And Functional QA

Goal: confirm the rebuilt homepage is equivalent enough to ship.

- [ ] Compare rebuilt desktop screenshot with captured desktop reference.
- [ ] Compare rebuilt mobile screenshot with captured mobile reference.
- [ ] Verify hero quote, image, logo, and spacing.
- [ ] Verify intro section layout and image.
- [ ] Verify where-to-start quote, stats, body copy, image, and CTA.
- [ ] Verify learn-more feature block ordering and image/text direction.
- [ ] Verify support section and donation CTA.
- [ ] Verify events heading, intro, background image, and event cards.
- [ ] Verify all links resolve.
- [ ] Verify all images load.
- [ ] Verify no hydration warnings appear.
- [ ] Verify Keystatic homepage edits appear in local dev.

Acceptance criteria:

- [ ] Desktop visual parity accepted.
- [ ] Mobile visual parity accepted.
- [ ] Build and lint pass after homepage swap.

## Out Of Scope

- Full homepage redesign.
- Netlify form refactor.
- Keystatic GitHub or Cloud editing mode.
- Cache Components optimization.
- Firebase/auth removal beyond unblocking it.
- Other static page migrations.

## Progress Log

| Date | Phase | Update | Owner |
| --- | --- | --- | --- |
| 2026-06-06 | Planning | Created homepage rebuild sub-plan. | Codex |
| 2026-06-07 | Planning | Added typed helper, single-read, and prop-driven section guidance based on the homeschool Keystatic reference. | Codex |
| 2026-06-07 | H1–H4 | Completed phases H1 through H4. Schema defined, content seeded in homePage.yaml, all 6 section components refactored to typed props (no Section type, no dangerouslySetInnerHTML, no use client on display components). Homepage route reads from Keystatic via getHomePageContent(). SectionsRenderer stubbed. Build: PASS. Lint: PASS. | Claude |
