# Brilliance Exposed — Figma Design System Reference

Snapshot of the design system defined in the Figma file. Use this as the source of truth instead of re-querying Figma every session. Update whenever the file changes materially.

- **File:** `Brilliance Exposed Website Design`
- **File URL:** https://www.figma.com/design/I0TJiq5eA0nflNvxIEgpRx/Brilliance-Exposed-Website-Design
- **File key:** `I0TJiq5eA0nflNvxIEgpRx`
- **Last synced:** 2026-04-16 (updated after About v2 build)

---

## Pages

| Page | Node ID | Purpose |
|------|---------|---------|
| Lofi/ Midfi | `0:1` | Earlier iterations, sketches, WIP component sets. Do not ship from here. |
| Revised Designs | `259:290` | Current approved revised frames for the 6 core pages. |
| Design System | `606:362` | Foundations: type, color palette, spacing, base components. |

---

## Revised Designs — frame IDs

All on page `259:290`. Desktop 1440 width. Use hairline dividers (no diamond ornament).

| Page | Frame ID | Size | Notes |
|------|----------|------|-------|
| About (original) | `1179:1060` | 1440 × 4100 | Earlier revision. Kept for comparison. |
| **About v2** | `1332:1168` | **1440 × 5036** | **Current. Implemented on the live site.** |
| Contact (original) | `1182:1077` | 1440 × 1060 | Earlier revision. |
| **Contact v2** | `1342:1228` | **1440 × 1614** | Hero + two-column (info / form) + press note + Footer. |
| Shop (original) | `1185:1095` | 1440 × 1740 | Earlier revision. |
| **Shop v2** | `1343:1279` | **1440 × 2431** | Hero + featured product + More Products 3-col grid + Footer. |
| Gallery (original) | `1187:1113` | 1440 × 3280 | Earlier revision. |
| **Gallery v2** | `1344:1330` | **1440 × 3715** | Hero + featured portrait + All Portraits tabs + 3×3 grid + Footer. |
| Events (original) | `1189:1130` | 1440 × 2260 | Earlier revision. |
| **Events v2** | `1345:1381` | **1440 × 2687** | Hero + Current Exhibition + Upcoming 2-col + Past note + Footer. |
| Donate (original) | `1191:1148` | 1440 × 1880 | Earlier revision. |
| **Donate v2** | `1346:1432` | **1440 × 2374** | Hero + Ways to Give 3 tiers + Your Impact testimonial + Major Gifts + Footer. |

---

## Color palette

The Design System page shows labeled swatches but these are **not yet Figma Variables** — they are rectangles with hardcoded fills. Creating proper color variables with these exact values is a pending foundation task.

| Token | Hex / value | Usage | Source |
|-------|-------------|-------|--------|
| `bg-primary` | `#000000` | Page background | Figma swatch confirmed |
| `bg-elevated` | `#0a0a0a` | Card surface on `bg-primary` | From live site `styles.css` |
| `bg-secondary` | label only | — | Figma label (unmapped) |
| `bg-dark` | label only | — | Figma label (unmapped) |
| `text-primary` | `#e0e0e0` | Body copy on dark | Figma swatch confirmed |
| `text-secondary` | `rgba(224,224,224,0.62)` | Muted paragraph text | From live site |
| `text-muted` | `rgba(224,224,224,0.55)` | Captions, roles | From live site |
| `text-on-dark` | `#e0e0e0` | alias of `text-primary` | Figma label |
| `accent` | `#d4a574` | Gold CTAs, highlights | Figma swatch confirmed |
| `accent-hover` | `#e0b683` | Gold button hover | From live site |
| `border-subtle` | `rgba(224,224,224,0.10)` | Hairlines | From live site |
| `border-visible` | `rgba(224,224,224,0.22)` | Stronger dividers | From live site |
| `border-gold` | `rgba(212,165,116,0.35)` | Accent-tinted borders | From live site |

When binding color variables, use scopes `["FRAME_FILL", "SHAPE_FILL"]` for backgrounds, `["TEXT_FILL"]` for text, `["STROKE"]` for borders — never `ALL_SCOPES` for colors.

---

## Typography — local text styles

All confirmed in Figma as **local text styles** (not remote). Letter-spacing is 0.7px on almost everything (the exception is `Italic Quote`).

| Style | Figma ID | Font | Size | Line-height | Letter-spacing | Case |
|-------|----------|------|------|-------------|----------------|------|
| Display | `S:7a7ec17617b6d7ed5ab274f66dc08e4fefe22c78,` | Cormorant Garamond SemiBold | 64 | 110% | 0.7px | original |
| Heading 1 | `S:cc4c638af99951dfbad99f99d4ec20e500840d14,` | Cormorant Garamond SemiBold | 40 | 120% | 0.7px | original |
| Heading 2 | `S:7ae4b2a462c2ffd5180593fb355c15b5137fea0f,` | Cormorant Garamond Medium | 32 | 130% | 0.7px | original |
| Heading 3 | `S:249638d295dac434d4b09f10b8d4c1035424a5c0,` | Cormorant Garamond Medium | 22 | 130% | 0.7px | original |
| Italic Quote | `S:33908574b37553899627b6fb321800dd909ee232,` | Cormorant Garamond Italic | 18 | 140% | 0 | original |
| Body | `S:1cc56ebe07e8b5d5180c0eee349b24f4dd2f9a72,` | Inter Regular | 16 | 160% | 0.7px | original |
| Body-sm | `S:31a5b923c29a3465b80376e9b3c66215da4eb9dc,` | Inter Regular | 14 | 150% | 0.7px | original |
| Label | `S:9d360aabc6ce18be091c1ed0700812ed13803c79,` | Inter Regular | 14 | 140% | 0.7px | **UPPER** |

**Font loading note:** Cormorant Garamond uses style names `SemiBold`, `Medium`, `Italic` — no space for SemiBold in this file. Inter's `Semi Bold` would need a space, but only Regular is used here.

**Type usage:**
- Display — top-of-page hero H1 (e.g., "From Me, to We, to All Humanity")
- Heading 1 — section H2 like "Brilliance — An American Ideal"
- Heading 2 — sub-section H3 like creator names ("Alexis Dixon")
- Heading 3 — card titles, smaller section headings
- Italic Quote — pull quotes, epigraphs
- Body — paragraph body copy
- Body-sm — secondary paragraph, metadata
- Label — eyebrow tags, "OUR MISSION", "THE CREATORS", nav links, button labels

---

## Spacing — variable collection `Spacing`

Local collection, one mode `Value`. Scope is `ALL_SCOPES` for these (works because spacing is unambiguous).

| Variable | Value (px) | ID |
|----------|------------|----|
| `space-xs` | 4 | `VariableID:620:366` |
| `space-sm` | 8 | `VariableID:620:367` |
| `space-md` | 16 | `VariableID:622:368` |
| `space-lg` | 24 | `VariableID:622:369` |
| `space-xl` | 32 | `VariableID:622:370` |
| `space-2xl` | 48 | `VariableID:622:371` |
| `space-3xl` | 64 | `VariableID:622:372` |

The same collection also holds two STRING variables (`STEAM`, `Names (Science)`) used by gallery carousel components — not design-system primitives.

---

## Layout & breakpoints

Design System page has three breakpoint frames at `623:373`, `623:378`, `623:380`.

| Breakpoint | Frame width | Content width | Side padding |
|------------|-------------|---------------|--------------|
| Desktop | 1440 | 1280 | 80 |
| Tablet | 768 | 704 | 32 |
| Mobile | 390 | 350 | 20 |

All revised frames are at desktop (1440). Tablet and mobile versions are not yet built.

---

## Components — existing

### Design System page (shared, intended to be reused)

| Component | Node ID | Key | Size | Notes |
|-----------|---------|-----|------|-------|
| Navbar | `68:274` | `ef42932bbf7b954fe2a2448bb78a2655e3b7b7b1` | 1280 × 190 | Already instanced in About and About v2. |
| Gold Button | `659:445` | `0520f8656b49d7725f586bc42afeb165c13f45ef` | 86 × 52 | Fill `#d4a574`, corner radius 0. |
| Hairline Divider | `1328:1060` | `9f92d36c2a155fdd074d8761fee166b2f0265f3b` | 1280 × 1 | Bound to `border/subtle`. Stretch horizontally via `layoutSizingHorizontal = 'FILL'`. Replaces the diamond ornament. |
| Section Eyebrow | `1328:1062` | `6fbc0f6f6c1710a4bd39d8acd751bba2c0ab2ffd` | auto × auto | 40px accent rule + Label text. Override label on instance via `findOne('Label')`. |
| Footer | `1329:1060` | `a2dbb6a3866d8a088f4a6de1e15e6a0e23b67646` | 1440 × 456 | Brand / Explore / Support / Newsletter columns + copyright/socials row. Full width. |
| Page Header | `1331:1060` | `76f3a12820d69424aec002c5e03ae7aba3c9bf78` | 640 × 181 | Display H1 + italic intro. Override Title/Intro text on each instance. |

### Color variables — collection `Color`

Collection ID: `VariableCollectionId:1327:1060`

| Variable | Key | Value |
|----------|-----|-------|
| `bg/primary` | `74b0bb92bbb428fbe4d8238d678194ebce67ec1d` | `#000000` |
| `bg/elevated` | `a8e6a6864e03136c2264e929d0903af5f040edfb` | `#0a0a0a` |
| `text/primary` | `ba08acfe7357f18683130d08e165cb906244fea1` | `#e0e0e0` |
| `text/secondary` | `8dfa8d1bc7b6778bcfbca5ea9b2907a1869195c6` | `rgba(224,224,224,0.62)` |
| `text/muted` | `4a4270979dca22d2a6e5c7dd339c55cdd36f87bc` | `rgba(224,224,224,0.55)` |
| `accent/default` | `3f63e0e572b0ff606cfe045be561e8e30a9ddf52` | `#d4a574` |
| `accent/hover` | `d08d50d9496e3473c48961e6893a432b00debfee` | `#e0b683` |
| `border/subtle` | `70906c6746cb5bc0e6b93a4899b9fb4fd2c0c24e` | `rgba(224,224,224,0.10)` |
| `border/visible` | `6591c5f18cd817f546e407108b63aee10e37704f` | `rgba(224,224,224,0.22)` |
| `border/gold` | `3464ba39a5d370eb668782a345cbfabbfb375ce7` | `rgba(212,165,116,0.35)` |

### Lofi/ Midfi page (page-specific, not yet promoted to the system)

These exist but are scoped to WIP gallery/donate explorations — do **not** depend on them for new pages unless they are later moved into the Design System page and stabilized.

- Honoree portrait cards (multiple): `bianca jones marlin`, `Willis Jenkins`, `Gentry Patrick`, `ZACH GREEN`, `alena analeigh`, `Yasmin Hurd`
- `STEAM` category pill set (5 variants)
- `Exhibit Carousel` (3 variants)
- `Monthly` / `One Time` donation tier sets
- `button`, `video hover`, `Carousel`, `Discover More`, plus V1/V2/V3/V4/V5 generic sets

---

## Components — still missing (build when first needed)

These primitives aren't used on About so they weren't built yet. Add them when starting the page that first needs them.

1. **Ghost Button** — ghost/outline secondary CTA for Contact ("Send Message" alt style), Shop ("Add to Cart" alt), etc. Text in Label style with underline accent.
2. **Card Surface** — `bg/elevated` frame with consistent padding for donation tiers, shop products, event cards.
3. **Newsletter Input (extracted)** — currently inline inside the Footer. Pull out if reused elsewhere.

---

## Build conventions for new frames

When composing new pages in Figma:

- Wrap every page in an auto-layout vertical frame at 1440 wide, hug-content height, padding-X 80.
- Use component **instances**, not copies. If a primitive doesn't exist, build it on the Design System page first, then instance it on the page.
- Bind colors via `setBoundVariableForPaint`, spacing via `setBoundVariable('paddingX' | 'itemSpacing', …)`. Never hardcode hex or px when a variable exists.
- Apply text styles via `node.textStyleId = style.id`. Never set font/size/lineHeight manually.
- Hairline dividers replace the diamond ornament from the live site.
- Section rhythm: `Section Eyebrow` → content → `Hairline Divider`. Vertical spacing between sections uses `space-2xl` (48) or `space-3xl` (64).

---

## Relationship to live site (`styles.css`)

The live site at `styles.css:10-53` already defines matching CSS custom properties. The Figma color variables (when created) must use the exact same hex values so design and code stay in sync. See the "Color palette" table above for the mapping.

Typography scale in the live site uses `clamp()` for fluid responsive sizing; Figma uses fixed sizes per breakpoint. This is expected — do not try to encode `clamp()` into Figma.
