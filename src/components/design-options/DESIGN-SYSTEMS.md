# Design Systems — Design Options Showcase

Single source of truth for the two alternate directions. **Every `frontend-design` build
must follow the relevant section.** Both directions share the Foundations below.

Derived from `ui-ux-pro-max` (Accessible & Ethical baseline + Bento Grid / Editorial
patterns) adapted to the locked Alabama Hands & Voices brand. Light theme only.

---

## Foundations (apply to BOTH directions)

### Brand palette (Tailwind tokens — already in `tailwind.config.ts`)

- `hvblue` (#141B4B) primary; shades `hvblue-50` #4859CE → `hvblue-600` #080B1F.
- `hvorange` (#FF7F32) accent; shades `hvorange-50` #FFF2EA → `hvorange-900` #511E00.
- Neutrals: Tailwind `white`, `slate`/`gray` (use `slate-50/100/200` surfaces,
  `slate-600/700` secondary text, `hvblue` for primary text).

### ⚠️ Contrast rules (CRITICAL — audience includes deaf/HoH families; WCAG AA)

Bright `hvorange` (#FF7F32) is **~2.6:1 on white — it FAILS for text and for white-on-orange.**
Follow these exactly:

- **Body / normal text:** `text-hvblue` (≈15:1 on white ✓) or `text-slate-700`. Never
  `text-hvorange` for normal text on white.
- **Orange text accents** (small headings, links, eyebrows): use `text-hvorange-700`
  (#C14800 ≈ 5.6:1 ✓) or `text-hvorange-800`. Not the bright `hvorange`.
- **Orange as a fill** (`bg-hvorange`): put **dark text on it** — `text-hvblue` (✓ high
  contrast). Do **not** put white text on bright `bg-hvorange`.
- **Orange buttons with white text:** use `bg-hvorange-600 hover:bg-hvorange-700`
  (white on #C14800 ✓). Bright `bg-hvorange` is for dark-text chips/fills only.
- **Blue fills:** `bg-hvblue` with `text-white` ✓ (primary device for v3 color blocks).
- Verify any new pairing meets 4.5:1 (normal) / 3:1 (large ≥24px bold).

### Accessibility (both)

- Focus rings on every interactive element: `focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2`.
- Body text ≥16px (`text-base`+). Line-height 1.5–1.75 (`leading-relaxed` for prose).
- Sequential headings (one `h1` per page, then `h2`→`h3`). Don't skip levels.
- All meaningful images need real `alt`; decorative images `alt=""`.
- Icons: SVG only (inline SVG or `@heroicons/react` if available — check before importing;
  otherwise inline SVG). **No emoji as icons.**
- Touch targets ≥44px; `cursor-pointer` on clickables; respect `prefers-reduced-motion`.
- Color never the sole signal (pair with text/icon).

### Responsive & spacing (both)

- Mobile-first. Test 375 / 768 / 1024 / 1440px. No horizontal scroll.
- 4/8px spacing rhythm. Section vertical padding: `py-16 md:py-24` (v2) / `py-14 md:py-20`
  (v3). Content container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
- Prose measure: `max-w-2xl`/`max-w-prose` for long text.

### Images (real assets in `public/images`)

- Always `next/image` with `sizes`; set `width/height` or `fill` + aspect container to
  avoid CLS. Mark the LCP hero image `priority`.
- Prefer lighter sources for performance: `family.jpg`, `retreat3.jpg`, `retreat9.jpeg`,
  `retreat11.jpeg`, `homePageTwoBoys.jpg`. Hero candidates: `homePageBanner.jpg`,
  `aboutUsWhoWeAreFamily.jpg`, `aboutUsWhoWeAre1.jpg`, `family.jpg` (some originals are
  large — `next/image` optimizes them, still set `sizes`).
- Logos: `/images/hvlogo.svg`, `/images/alabamahvlogo.svg`, `/images/alabamahvlogo.png`.
  Program logos: `/images/gbys-logo.png`, `/images/AstraLogo.png`, `/images/ehdiLogo.png`.
- Board/staff headshots come from the **collection entry's own image field** — use that,
  don't hardcode headshot filenames.

### Animation (both)

- Micro-interactions 150–300ms, `transition` on `transform`/`opacity`/`colors` only.
- Subtle hover lift on cards (`hover:-translate-y-0.5 hover:shadow-lg`). Respect reduced motion.

---

## DIRECTION v2 — "Warm & Editorial"

**Feel:** human, reassuring, parent-to-parent, magazine-like. Photo-forward, soft, calm,
generous whitespace.

### Typography (no new fonts)

- **Display headings (h1/h2):** `font-serif` (system serif) for an editorial voice,
  `font-semibold`/`font-bold`, `tracking-tight`, `text-hvblue`.
  - h1: `text-4xl md:text-6xl`; h2: `text-3xl md:text-4xl`; h3: `text-xl md:text-2xl`.
- **Body:** default sans, `text-base md:text-lg leading-relaxed text-slate-700`.
- **Decorative accent:** `font-kaushan text-hvorange-700` for short emotional lines /
  eyebrows / the hero tagline only (never long copy). Pair with a plain text label for a11y.
- **Eyebrow labels:** `text-sm font-semibold uppercase tracking-wide text-hvorange-700`.

### Color usage

- Backgrounds alternate `bg-white` and warm tints `bg-hvorange-50` / `bg-slate-50`.
- `hvblue` for text and structure. `hvorange` strictly as a *gentle accent*: thin
  underlines/rules (`border-hvorange`), small dot/leaf shapes, the orange-600 buttons,
  stat numbers in `text-hvorange-700`.
- Generous whitespace; let photography carry the emotion.

### Cards

- `rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70` with soft hover lift.
- Image cards: rounded image (`rounded-2xl overflow-hidden`), caption below.

### Buttons

- **Primary:** `inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-6 py-3
  text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700` + focus ring.
- **Secondary:** `rounded-full border-2 border-hvblue px-6 py-3 font-semibold text-hvblue
  hover:bg-hvblue hover:text-white`.
- **Text link:** `font-semibold text-hvorange-700 underline-offset-4 hover:underline`.

### Section rhythm

Big editorial sections, alternating image-left / image-right. `py-16 md:py-24`. Use
asymmetric two-column splits (`lg:grid-cols-2 gap-10 lg:gap-16`), pull-quotes in serif,
and a soft full-bleed photo band for testimonials/stats.

---

## DIRECTION v3 — "Bold & Uplifting"

**Feel:** confident, energetic, decisive, modern — still friendly. Full-bleed color
blocks, bento grids, big type, punchy CTAs.

### Typography (no new fonts)

- **Display headings:** default sans, `font-extrabold tracking-tight` for a geometric,
  confident voice.
  - h1: `text-5xl md:text-7xl leading-[1.05]`; h2: `text-3xl md:text-5xl`; h3: `text-xl md:text-2xl font-bold`.
  - On color blocks: white headings on `bg-hvblue`; `text-hvblue` headings on `bg-hvorange`.
- **Body:** default sans, `text-base md:text-lg leading-relaxed` (`text-slate-700` on
  light; `text-white/90` on hvblue blocks; `text-hvblue/90` on orange blocks).
- **Eyebrow labels:** `text-sm font-bold uppercase tracking-widest` (color per surface).
- `font-kaushan` used sparingly — at most one accent word, `text-hvorange-700` on light.

### Color usage (color blocks are the signature)

- Large solid fields: `bg-hvblue` (white text ✓) and `bg-hvorange` (**hvblue text** ✓).
- Alternate full-bleed sections: white → hvblue block → white → orange block.
- Bento grid mixes: white cards with `ring-1 ring-slate-200`, one hvblue card, one orange
  card, one photo card — varied col/row spans (`md:col-span-2`, `md:row-span-2`).

### Cards (bento)

- `rounded-3xl p-6 md:p-8` blocks. Surfaces: `bg-white ring-1 ring-slate-200`,
  `bg-hvblue text-white`, `bg-hvorange text-hvblue`, or a `fill` photo card.
- Big stat numbers: `text-5xl md:text-6xl font-extrabold` (`text-hvorange-700` on white,
  white on hvblue, hvblue on orange).

### Buttons

- **Primary:** `inline-flex items-center gap-2 rounded-xl bg-hvorange-600 px-7 py-3.5
  text-base font-bold text-white transition hover:bg-hvorange-700` + focus ring.
- **On hvblue blocks:** `bg-white text-hvblue font-bold hover:bg-hvorange-50`.
- **On hvorange blocks:** `bg-hvblue text-white font-bold hover:bg-hvblue-400`.
- **Secondary/ghost:** `rounded-xl border-2 border-current px-7 py-3.5 font-bold`.

### Section rhythm

Tighter, punchier: `py-14 md:py-20`. Hero = bold color-block with huge headline + 2 CTAs
(Donate / Get Support). Follow with a bento grid, then alternating full-bleed color
sections, sharp dividers, strong CTA band before footer.

---

## Per-direction one-liners (for the showcase index)

- **v2 — Warm & Editorial:** "Human and reassuring — photo-forward storytelling that
  feels like one parent talking to another."
- **v3 — Bold & Uplifting:** "Confident and energetic — bold color blocks and clear calls
  to action that move families to connect, join, and give."
