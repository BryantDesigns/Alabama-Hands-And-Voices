# Tailwind CSS v3 → v4 Migration Plan

This document details every step to migrate the **Alabama Hands & Voices** Next.js project from Tailwind CSS v3 (`^3.4.1`) to the CSS-first architecture of Tailwind CSS v4.

> **What changed fundamentally:** v4 replaces `tailwind.config.ts` with native CSS variables and the `@theme` directive. It ships a new Rust-powered engine, a new PostCSS plugin (`@tailwindcss/postcss`), automatic content detection, and dozens of renamed/removed utility classes.

---

## Pre-Flight Checklist

Before starting, verify the following:

- [ ] **Node.js 20+** is installed — the `@tailwindcss/upgrade` CLI requires it
- [ ] **Create a new git branch** — `git checkout -b chore/tailwind-v4-migration`
- [ ] **Browser support is acceptable** — v4 requires Safari 16.4+, Chrome 111+, Firefox 128+ (uses `@property`, `color-mix()`, and other modern CSS features)
- [ ] **Commit all pending work** — the upgrade CLI modifies files in-place

---

## Step 1: Upgrade Dependencies

Remove the old packages and install v4. Since v4 is now the stable release, no `@next` tag is needed.

**Commands to run:**
```bash
# Install v4 core + PostCSS plugin
npm install tailwindcss @tailwindcss/postcss

# Upgrade the forms plugin to v4-compatible version
npm install @tailwindcss/forms@latest

# Check that prettier-plugin-tailwindcss is v4-compatible (0.6+ should work)
npm install prettier-plugin-tailwindcss@latest
```

**Current dependencies being replaced:**
| Package | Current | Target |
|---------|---------|--------|
| `tailwindcss` | `^3.4.1` | `^4.x` |
| `@tailwindcss/forms` | `^0.5.9` | Latest v4-compatible |
| `prettier-plugin-tailwindcss` | `^0.6.9` | Latest |
| `@tailwindcss/postcss` | *(new)* | `^4.x` |

---

## Step 2: Update PostCSS Config

Tailwind v4 ships its own PostCSS plugin under a new package name. It also handles `postcss-import`, `autoprefixer`, and `postcss-nesting` internally — do **not** add any of those.

**Changes to `postcss.config.mjs`:**
```javascript
// BEFORE
const config = {
  plugins: {
    tailwindcss: {},
  },
};
export default config;

// AFTER
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

---

## Step 3: Run the Official Upgrade CLI

Tailwind provides an automated CLI tool that scans the entire codebase and handles the bulk of deprecation renames.

**Command to run:**
```bash
npx @tailwindcss/upgrade
```

### What the CLI does automatically

Based on our codebase scan, the CLI should handle these changes across all `.tsx` files:

| Change | Count Found | What the CLI Does |
|--------|-------------|-------------------|
| `shadow-sm` → `shadow-xs` | **50+** | Renames |
| `shadow` (bare) → `shadow-sm` | ~9 | Renames (scale shift) |
| `rounded-sm` → `rounded-xs` | 7 | Renames |
| `rounded` (bare) → `rounded-sm` | ~17 | Renames (scale shift) |
| `outline-none` → `outline-hidden` | **50+** | Renames |
| `bg-gradient-to-*` → `bg-linear-to-*` | **24** | Renames |
| `grow` → `grow` | 2 | Renames |
| `shrink` → `shrink` | 0 | N/A |
| `!important` prefix → suffix (`!p-4` → `p-4!`) | 0 | N/A (none found) |
| `[--var]` → `(--var)` for CSS variable syntax | 0 | N/A (none found) |
| `text-ellipsis` → `text-ellipsis` | 0 | N/A (none found) |
| `@tailwind base/components/utilities` → `@import "tailwindcss"` | 3 | Converts |
| `tailwind.config.ts` → `@theme` in CSS | 1 file | Attempts conversion |
| `postcss.config.mjs` plugin name | 1 file | Updates |

> **⚠️ Important:** The CLI does NOT handle all edge cases. Steps 4–8 below cover everything that needs manual verification or fixing after the CLI runs.

---

## Step 4: Verify the Scale-Shifted Renames

This is the **#1 source of visual regressions**. The v3 → v4 rename isn't just a simple find/replace — the entire scale shifted down by one tier:

| v3 Class | v4 Equivalent | Instances | Visual Impact |
|----------|--------------|-----------|---------------|
| `shadow-sm` | `shadow-xs` | 50+ | Shadows get smaller |
| `shadow` (bare) | `shadow-sm` | ~9 | ⚠️ Easy to miss |
| `shadow-md` | `shadow-md` | 8 | No change |
| `shadow-lg` | `shadow-lg` | 30+ | No change |
| `rounded-sm` | `rounded-xs` | 7 | Radii get smaller |
| `rounded` (bare) | `rounded-sm` | ~17 | ⚠️ Easy to miss |
| `blur-sm` | `blur-xs` | 0 | N/A |

**After the CLI runs**, grep for any remaining bare `shadow` or `rounded` classes to confirm they were properly converted:
```bash
# These should return zero results if the CLI did its job
grep -rn 'shadow"' src/ --include="*.tsx" | grep -v 'shadow-'
grep -rn '"rounded"' src/ --include="*.tsx" | grep -v 'rounded-'
```

---

## Step 5: Fix Patterns the CLI Misses

### 5a. Opacity Utilities (2 occurrences)

The `bg-opacity-*`, `text-opacity-*`, etc. utilities are **removed** in v4. Use the `/` modifier syntax instead:

| File | Line | Before | After |
|------|------|--------|-------|
| `src/components/common/PayPalDonation.tsx` | 25 | `hover:bg-opacity-90` | `hover:bg-hvorange/90` (merge with color) |
| `src/components/pages/homepage/HeroSection.tsx` | 15 | `bg-opacity-50` | `bg-hvblue/50` (merge with color) |

> **Note:** You must combine the opacity with the color class. For example, `bg-hvorange hover:bg-opacity-90` becomes `bg-hvorange hover:bg-hvorange/90`.

### 5b. Transform Classes (8 occurrences)

The `transform` utility is **removed** in v4 — transforms now apply automatically. `transform-gpu` is also removed.

| File | Lines | Change |
|------|-------|--------|
| `src/components/layout/Header.tsx` | 265, 294 | Remove bare `transform` |
| `src/components/ui/examples/OverlappingLogoHeader.tsx` | 289, 318 | Remove bare `transform` |
| `src/components/ui/examples/TwoTierHeader.tsx` | 282, 311 | Remove bare `transform` |
| `src/components/pages/homepage/WhereToStart.tsx` | 51 | Remove `transform-gpu` |
| `src/components/ui/examples/contactSections/Centered.tsx` | 8 | Remove `transform-gpu` |

### 5c. `ring-inset` → `inset-ring-*` (8 occurrences)

v4 replaces `ring-inset ring-{color}` with the new composable `inset-ring` utility:

```html
<!-- BEFORE (v3) -->
<div class="ring-1 ring-inset ring-gray-300">

<!-- AFTER (v4) -->
<div class="inset-ring inset-ring-gray-300">
```

### 5d. Default Border Color (visual regression risk)

In v4, `border` without a color defaults to `currentColor` instead of `gray-200`. Scan for bare `border` usages and add an explicit color where the gray default was intended:

```html
<!-- BEFORE (v3 — defaulted to gray-200) -->
<div class="border">

<!-- AFTER (v4 — explicit color) -->
<div class="border border-gray-200">
```

### 5e. Default Ring Behavior

`ring` now defaults to **1px width** and **`currentColor`** (was 3px and blue-500 in v3). If any bare `ring` usage relied on the v3 defaults:

```html
<!-- BEFORE (v3 — 3px blue-500) -->
<div class="ring">

<!-- AFTER (v4 — explicit) -->
<div class="ring-3 ring-blue-500">
```

---

## Step 6: Manual Configuration Migration

The CLI will attempt to convert `tailwind.config.ts` → `@theme` in CSS, but complex color palettes and dark mode config often need manual verification.

### 6a. The target `src/app/globals.css`

After migration, `globals.css` should look like this:

```css
/* Google font — must come BEFORE the Tailwind import */
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

/* Replace @tailwind base/components/utilities with a single import */
@import "tailwindcss";

/* Load the forms plugin via CSS */
@plugin "@tailwindcss/forms";

/* Define custom theme tokens */
@theme {
  /* Core variables */
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  /* The hvblue palette */
  --color-hvblue: #141B4B;
  --color-hvblue-50: #4859CE;
  --color-hvblue-100: #384BCA;
  --color-hvblue-200: #2E3EAC;
  --color-hvblue-300: #25328B;
  --color-hvblue-400: #1D276B;
  --color-hvblue-500: #141B4B;
  --color-hvblue-600: #080B1F;

  /* The hvorange palette */
  --color-hvorange: #FF7F32;
  --color-hvorange-50: #FFF2EA;
  --color-hvorange-100: #FFE5D5;
  --color-hvorange-200: #FFCBAC;
  --color-hvorange-300: #FFB284;
  --color-hvorange-400: #FF985B;
  --color-hvorange-500: #FF7F32;
  --color-hvorange-600: #F95D00;
  --color-hvorange-700: #C14800;
  --color-hvorange-800: #893300;
  --color-hvorange-900: #511E00;

  /* Custom fonts */
  --font-kaushan: "Kaushan Script", cursive;
}

/*
 * Dark mode: the v3 config used darkMode: ['class', '[data-color-scheme="dark"]']
 * In v4, we register a custom variant to match either selector.
 */
@custom-variant dark (&:is(.dark *));

/*
 * Restore cursor: pointer on buttons (v4 preflight sets cursor: default)
 */
@layer base {
  button, [role="button"] {
    cursor: pointer;
  }
}

/* Accessibility: custom focus-visible ring */
@layer base {
  :where(a, button, input, select, textarea):focus-visible {
    outline: 3px solid #c14800;
    outline-offset: 3px;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Custom hero banner utility — wrapped in @utility for variant support */
@utility header-banner-bg {
  background-image: url('/images/homePageBanner.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

### 6b. Delete `tailwind.config.ts`

Once the CSS config is confirmed working, delete the old JavaScript config file:
```bash
rm tailwind.config.ts
```

**Removed config options that are no longer needed:**
- `content: [...]` — v4 auto-detects files via `.gitignore`
- `darkMode: [...]` — replaced by `@custom-variant` in CSS
- `theme.extend.colors` — replaced by `@theme` variables
- `theme.extend.fontFamily` — replaced by `@theme` variables
- `plugins: [require('@tailwindcss/forms')]` — replaced by `@plugin` directive

---

## Step 7: Handle Behavioral Changes

These won't cause build errors but **will cause visual regressions** if not tested:

### 7a. Button Cursor Change
v4's preflight sets `cursor: default` on all buttons. We've added a global fix in `globals.css` (Step 6a) to restore `cursor: pointer`. Verify all buttons across the site still show the pointer cursor.

### 7b. Placeholder Color Change
v4 uses **50% opacity of `currentColor`** for placeholder text instead of a fixed gray. Check all forms:
- GBYS Form (`src/components/pages/gbyspage/GBYSForm.tsx`)
- Example Forms (`src/components/pages/gbyspage/ExampleForms.tsx`)
- Contact sections

### 7c. `space-y-*` / `space-x-*` Behavior
v4 changed the selector from `> * + *` to `> :not(:last-child)`. This means **hidden siblings will now still create spacing gaps**. There are **50+ uses of `space-y-*`** and 2 uses of `space-x-*` across the project. Test layouts with conditionally hidden children.

### 7d. Gradient Rename Verification
Verify all 24 instances of `bg-gradient-to-*` were renamed to `bg-linear-to-*` by the CLI:
```bash
# This should return zero results after the CLI runs
grep -rn 'bg-gradient-to-' src/ --include="*.tsx"
```

**Key files to check:**
- `src/components/design-options/v2/` — 17 occurrences
- `src/components/design-options/v3/` — 4 occurrences
- `src/app/(pages)/about/page.tsx`
- `src/components/pages/homepage/EventsSection.tsx`
- `src/components/pages/homepage/WhereToStart.tsx`

---

## Step 8: Verification & Testing

### 8a. Build Verification
```bash
npm run build    # Ensure Next.js compiles without PostCSS or Tailwind errors
npm run lint     # Ensure no syntax errors were introduced
```

### 8b. Visual Regression Checklist

Run `npm run dev` and manually check every item:

- [ ] **Colors** — `hvblue` and `hvorange` palettes render correctly on buttons, headers, links
- [ ] **Font** — `Kaushan Script` is still active where used
- [ ] **Shadows** — Compare shadow sizes visually (the scale shifted, so verify the shadows *look* the same)
- [ ] **Border radii** — Verify rounded corners haven't changed size unexpectedly
- [ ] **Borders** — Check that borders aren't darker than expected (new `currentColor` default)
- [ ] **Buttons** — All `<button>` elements show `cursor: pointer` on hover
- [ ] **Forms** — Placeholder text has acceptable contrast (new `currentColor`-relative styling)
- [ ] **Gradients** — All gradient backgrounds render correctly (24 instances renamed)
- [ ] **Ring styles** — Any focus rings or decorative rings still look correct
- [ ] **Dark mode** — Toggle dark mode and verify the `.dark` class variant works
- [ ] **Spacing** — Layouts using `space-y-*` still look correct, especially with conditional content
- [ ] **Responsive** — Test all breakpoints (sm, md, lg, xl)
- [ ] **Accessibility** — Focus-visible outlines still work (our custom `#c14800` ring)
- [ ] **Reduced motion** — Verify `prefers-reduced-motion` media query still functions

### 8c. Verification Commands
```bash
# Confirm no v3 patterns remain
grep -rn '@tailwind' src/ --include="*.css"           # Should be 0
grep -rn 'bg-gradient-to-' src/ --include="*.tsx"     # Should be 0
grep -rn 'bg-opacity-' src/ --include="*.tsx"         # Should be 0
grep -rn 'text-opacity-' src/ --include="*.tsx"       # Should be 0
grep -rn 'grow' src/ --include="*.tsx"            # Should be 0
grep -rn 'ring-inset' src/ --include="*.tsx"           # Should be 0
ls tailwind.config.ts 2>/dev/null && echo "REMOVE THIS FILE" # Should not exist
```

---

## Summary of All Changes

| Category | What Changes | Count | Handled By |
|----------|-------------|-------|------------|
| Dependencies | Upgrade `tailwindcss`, `@tailwindcss/forms`, add `@tailwindcss/postcss` | 3 pkgs | Step 1 |
| PostCSS | `tailwindcss` → `@tailwindcss/postcss` | 1 file | Step 2 |
| CSS imports | `@tailwind base/components/utilities` → `@import "tailwindcss"` | 1 file | CLI (Step 3) |
| Gradients | `bg-gradient-to-*` → `bg-linear-to-*` | 24 | CLI (Step 3) |
| Shadow scale | `shadow-sm` → `shadow-xs`, `shadow` → `shadow-sm` | ~59 | CLI (Step 3) |
| Rounded scale | `rounded-sm` → `rounded-xs`, `rounded` → `rounded-sm` | ~24 | CLI (Step 3) |
| Outline | `outline-none` → `outline-hidden` | 50+ | CLI (Step 3) |
| Flex | `grow` → `grow` | 2 | CLI (Step 3) |
| Opacity | `bg-opacity-*` → `/` modifier | 2 | Manual (Step 5a) |
| Transform | Remove `transform`, `transform-gpu` | 8 | Manual (Step 5b) |
| Ring inset | `ring-inset` → `inset-ring` | 8 | Manual (Step 5c) |
| Border color | Add explicit colors to bare `border` | Variable | Manual (Step 5d) |
| Config | `tailwind.config.ts` → `@theme` in CSS | 1 file | Manual (Step 6) |
| Cursor | Global `cursor: pointer` fix for buttons | 1 rule | Manual (Step 6a) |
| Custom utility | `.header-banner-bg` → `@utility` | 1 class | Manual (Step 6a) |

---

**Note:** Because Tailwind v4 no longer requires content paths (it automatically detects files using the fast Rust engine), we do not need to port over the `content: ['./src/...']` array. It will "just work."
