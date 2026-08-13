# Experience Brief — Brilliance Exposed Redesign

**Date:** 2026-08-12 · **Author:** Claude (art direction pass for Joon)
**Job:** Exhibition site. One job: make a visitor understand *what this is* in 5 seconds and want to see it in person.

## Concept statement
A photograph develops out of darkness — the site behaves like a print in a developer bath: every portrait, every section is *exposed* into view from black, and the gold is the light doing the exposing.

## Entrance design
- Keep the tested intro (quote → logo) but compress to ~3.5s total, skippable on any input, and exit as a veil INTO the hero (A1 — no hard cut). Copy in brand voice; no "Loading…".
- First viewport: ONE statement (A2) — the concrete mission in giant Cormorant with gold emphasis swaps, over a full-bleed portrait that carries name + discipline (fixes "no idea who these people are").
- "NOW SHOWING · Detroit — through June 21" live chip in the hero (D16). Sound: none, on purpose.

## Scroll grammar + chaptering
- Homepage chaptered with exposure-numbered rail: 01 Mission · 02 Portraits · 03 Exhibition · 04 Voices · 05 Support (B6, like Shopify #4's numeral rail, lighter).
- Reveals = develop-from-black (opacity + 12px rise + grain), never sideways slides. Scroll tells one story: dark → exposed.

## Metaphor/material commitment
- **The darkroom exposure** (C9). Laws: things emerge from black slowly and settle (no bouncy easing); gold = light; hairlines = frame edges; film-grain overlay at 3% on hero and portraits; metadata chips styled as film-can labels: "EXPOSURE 01 — SCIENCE" (D17, Siena #15).
- The medium demonstrates the message (C10): the site literally *exposes* brilliance from darkness.

## Data-display moments
- "50 minds · 1 collective brilliance" as metric monuments (D15, Zentry #22): numerals ≥ 5rem in gold, caption lines beneath.
- Stats as story beat with reversal (D13): "50 portraits. 5 disciplines. 1 question: *what if you never saw yourself in successful roles?*"
- Live "Now Showing" chip in nav area (D16, The Line #19).

## Type system
- LOCKED by design system: Cormorant Garamond (emotion) + Inter (facts) (E18). Emphasis mechanic: mid-sentence swap into Cormorant Italic gold, ≤3 per viewport (Lando #7 pattern).
- Type-as-image moment (E20): one hero word "BRILLIANCE" oversized, portrait visible through letter spacing — restraint version: giant outlined text behind hero portrait. ONE per site.
- Fix tested issues: body 18px minimum, no tiny italic blocks, title case headings sitewide.

## Motion budget + reduced-motion plan
- Quiet-loud: one signature moment (intro + hero develop), everything else subtle. CSS + IntersectionObserver only. Transform + opacity only. No WebGL, no gate (G26: this is a product with jobs — school kids and donors on old laptops must get in).
- `prefers-reduced-motion`: no intro overlay, everything visible immediately, carousel becomes static first frame.

## Craft checklist
- 404 page in metaphor voice: "This frame hasn't been developed yet." (F21)
- Gallery empty slots designed as "In development" film frames, not "Coming Soon" text (F21).
- Selection color gold, gold focus rings, styled scrollbar, favicon, OG tags (F22).
- Copy as interaction layer (F23): CTAs are imperative and warm — "Step into the gallery", "Plan your visit", "Help us keep growing" (restores V1's tested Donate copy).
- Money path boring-usable (F24): exhibition dates/venue/tickets in plain DOM near the top of home + events; donate reachable in 1 click from everywhere.

## WebGL-gating decision
None. No gate. Static-host friendly (GitHub Pages / Vercel).

## Success bar
- Persona scoreboard ≥ 9/10 average (art enthusiast · gallery director · college student).
- Awwwards-frame calibration: 85+ (SOTD-plausible). Lighthouse ≥ 95 on reader pages.
- Research fixes verified: mission concrete + unmissable, exhibition info ≤ 1 scroll from top, portraits named, celebratory not funereal, all interactive things obviously interactive.

## Design-system constants (unchangeable)
`#000` bg · `#0a0a0a` elevated · `#e0e0e0` text · `#d4a574` gold (+`#e0b683` hover) · borders at 10/22% white, gold 35% · Cormorant Garamond + Inter · existing images in `/Images` + `/assets` · existing logo files.
