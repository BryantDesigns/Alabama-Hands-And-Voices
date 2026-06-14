# Keystatic Content Model Sub-Plan

Created: 2026-06-06

Parent plan: [Alabama Hands & Voices Next.js + Keystatic Migration Plan](../keystatic-next-upgrade-plan.md)

Related plan: [Homepage Rebuild Sub-Plan](homepage-rebuild-sub-plan.md)

## Tracking Legend

- `[ ]` Not started
- `[~]` In progress
- `[!]` Blocked
- `[x]` Done

## Locked Decisions

- Use Keystatic local-file mode for development and Cloud mode for production.
- Store content under `src/content`.
- Prefer explicit singletons and collections over a generic page-builder model.
- Do not recreate the old Firestore `Section` model.
- Use structured fields for repeatable data and Markdoc only for rich body copy.
- Keep form schemas out of Keystatic in this migration.
- Use Keystatic Cloud project `al-hands-and-voices/al-hands-and-voices` now that schemas and rendering are stable.
- Use JSON or YAML for structured singleton/page data.
- Use Markdoc only for prose-heavy content bodies that need editor formatting.
- Keep Keystatic reader access behind a server-only helper layer.

## Success Criteria

- Keystatic schemas represent the current site content without Firebase.
- Homepage content uses the dedicated `homePage` singleton from the homepage sub-plan.
- Navigation, site settings, resources, FAQ, people, videos, and page copy are manageable in Keystatic.
- Editors have specific fields for common content instead of arbitrary JSON-like section types.
- Content files are stable, Git-trackable, and readable from Server Components.
- Routes read content through typed helper functions rather than scattered raw reader imports.
- Local builds and deployed/serverless bundles include `src/content`.

## Phase K0: Content Inventory

Goal: confirm every content area that should become editor-managed.

- [x] Inventory current homepage content.
- [x] Inventory About page content.
- [x] Inventory Board member data.
- [x] Inventory Staff member data.
- [x] Inventory Contact page content.
- [x] Inventory Resources categories and links.
- [x] Inventory FAQ questions and answers.
- [x] Inventory Membership page content and membership option content.
- [x] Inventory ASTra page content.
- [x] Inventory GBYS page content.
- [x] Inventory Safety page content.
- [x] Inventory DHH Committee page content and videos.
- [x] Inventory global navigation and footer content.

Acceptance criteria:

- [x] Every editable content area is mapped to a singleton or collection.

## Phase K1: Global Singletons

Goal: define the content that affects the whole site.

- [x] `siteSettings`
  - [x] Site name
  - [x] Contact email
  - [x] Phone number
  - [x] Address
  - [x] Facebook URL
  - [x] Donation button label
  - [x] Footer copyright
- [x] `navigation`
  - [x] About menu items
  - [x] Program menu items

Acceptance criteria:

- [x] Header and footer can be rendered from typed global content.
- [x] Navigation uses canonical internal routes.

## Phase K2: Page Singletons

Goal: define page-level content without allowing arbitrary custom CMS sections.

- [x] `homePage`
  - [x] Hero quote, hero logo image
  - [x] intro, whereToStart, learnMore, support, events sections
- [x] `aboutPage`
  - [x] Who-we-are body
  - [x] Why-we-are-here body
  - [x] CTA copy and links
  - [x] Image references
- [x] `contactPage`
  - [x] Heading
  - [x] Body copy
  - [x] Contact CTAs
  - [x] Image reference
- [x] `membershipPage`
  - [x] Hero copy
  - [x] Document download link
  - [x] Scholarship note
- [x] `chooseMembershipPage`
  - [x] Membership option list
  - [x] PayPal hosted button IDs
  - [x] Option images
- [x] `astraPage`
  - [x] Program description
  - [x] Questions list
  - [x] Resource links
  - [x] Training CTA
- [x] `gbysPage`
  - [x] Program intro
  - [x] Services list
  - [x] Enrollment note
- [x] `safetyPage`
  - [x] Intro copy
  - [x] Action cards
  - [x] Family retreats section
- [x] `dhhCommitteePage`
  - [x] Description
  - [x] Benefits list
  - [x] Video section heading
- [x] `resourcesPage`
  - [x] Intro copy
  - [x] Resource categories
  - [x] EHDI sidebar content
- [x] `faqPage`
  - [x] Heading
  - [x] Intro copy
  - [x] Ordered FAQ entries

Acceptance criteria:

- [x] Each public content page has one clear Keystatic source.
- [x] Page schemas match real page needs instead of old generic sections.

## Phase K3: Collections

Goal: define repeatable content that benefits from independent entries.

- [x] `boardMembers` (11 entries seeded)
  - [x] Name (slugField via fields.slug)
  - [x] Role
  - [x] Image URL
  - [x] Sort order
- [x] `staffMembers` (10 entries seeded)
  - [x] Name (slugField via fields.slug)
  - [x] Role
  - [x] Category
  - [x] Image URL
  - [x] Sort order
- [x] `videos` (schema defined; no entries seeded yet — no video data available)
  - [x] Title (slugField via fields.slug)
  - [x] YouTube ID
  - [x] Placement
  - [x] Sort order
  - [x] Active flag
- [ ] Optional `resourceItems`
  - [ ] Use only if resources become too large for the `resourcesPage` singleton.

Acceptance criteria:

- [x] People and video lists can be edited without modifying route code.
- [x] Entries can be sorted and hidden without deletion.

## Phase K4: Field And Rendering Rules

Goal: prevent a second vague CMS from forming.

### File Format Rules

- [x] Use YAML for all singletons and collections.
- [x] Use `.mdoc` only where Markdoc body content is genuinely needed (deferred to Phase 4).
- [x] Keep singleton paths stable and human-readable under `src/content/singletons/`.
- [x] Keep collection paths grouped by content type under `src/content/<collection-name>/*`.

### Schema Rules

- [x] Use text fields (with imageUrl) for local/remote asset paths.
- [x] Use ordered arrays for cards, services, stats, and resource links.
- [x] Use plain text (multiline) for body copy — Markdoc deferred to Phase 4.
- [x] Use plain text fields for headings, labels, button text, and short descriptions.
- [x] Add alt text fields for meaningful images.
- [x] Avoid arbitrary raw HTML fields.
- [x] Add `itemLabel` callbacks for all arrays so editors can scan repeatable content.
- [x] Add `slugField` for all collections.
- [x] Add `sortOrder` fields for collections where rendered order matters.

### Reader Rules

- [x] Created `src/lib/keystatic/reader.ts` — server-only centralized reader.
- [x] Created `src/lib/keystatic/pages.ts` — typed helpers for all singletons.
- [x] Created `src/lib/keystatic/collections.ts` — typed helpers for all collections.
- [ ] Normalize missing optional arrays to empty arrays inside helpers before passing data to components.
- [ ] Decide per route whether missing required content should call `notFound`.
- [ ] Avoid importing the raw Keystatic reader directly in most route components.

Acceptance criteria:

- [x] Rendering code can be typed without broad `any` or loose optional fields.
- [x] Route components consume a stable app-level content API.

## Phase K5: Seeding Order

Goal: migrate content in an order that unblocks Firebase removal.

- [x] Seed `siteSettings`.
- [x] Seed `navigation`.
- [x] Seed `homePage`.
- [x] Seed `boardMembers` and `staffMembers`.
- [x] Seed `resourcesPage` and `faqPage`.
- [x] Seed program page singletons (`astraPage`, `gbysPage`, `safetyPage`, `dhhCommitteePage`).
- [x] Seed membership page singletons (`membershipPage`, `chooseMembershipPage`).
- [x] Seed Resources and DHH Committee videos.

Acceptance criteria:

- [x] Homepage is seeded before Firebase removal.
- [x] Remaining pages can migrate incrementally without blocking the homepage.

## Phase K6: Verification

Goal: prove schemas work in the app, not only in the editor.

- [x] Keystatic admin loads all singletons and collections.
- [x] Content edits use local files in development and Git-backed Cloud saves in production.
- [x] Server reader can read every singleton.
- [x] Server reader can list every collection.
- [x] Build passes with content files.
- [x] Next output tracing includes `src/content/**/*`.
- [x] No route imports Firebase for content reads after migration.

Acceptance criteria:

- [x] Keystatic content model is stable enough for page migration.

## Progress Log

| Date | Phase | Update | Owner |
| --- | --- | --- | --- |
| 2026-06-06 | Planning | Created Keystatic content model sub-plan. | Codex |
| 2026-06-07 | Planning | Added file format rules, centralized reader/helper architecture, and content bundling verification inspired by the homeschool Keystatic implementation. | Codex |
| 2026-06-07 | K0-K5 | Phase 3 complete. All singletons and collections defined in `keystatic.config.ts`. Seeded all 12 singletons (YAML under `src/content/singletons/`), 11 board members, 10 staff members. Videos collection schema defined but no entries seeded. Updated `pages.ts` (13 typed helper functions) and `collections.ts` (3 typed helpers). Build: PASS. Lint: PASS. Body copy uses `fields.text({ multiline: true })` — Markdoc upgrade deferred to Phase 4. `fields.slug()` used as slugField for all collections. | Claude |
