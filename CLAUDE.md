# Brilliance Exposed — Project Context

## What This Project Is

Brilliance Exposed is an international photographic exhibition and cultural initiative founded by **Alexis Dixon** that honors Black-presenting professionals in STEAM (Science, Technology, Engineering, Arts, and Math) through striking black-and-white portraiture. The exhibition has secured commitments from Detroit's Charles Wright Museum, galleries in Paris, and Tiffany & Co. is hosting a reception at its flagship store.

Our team at **Design for America (DFA) UCSD** is designing and building the exhibition's companion website. The previous site (www.brillianceexposed.com) was down/inaccessible, so we are designing from scratch — not enhancing an existing site.

## Project Scope

**Timeline:** January – March 2026 (12 weeks)
**Status:** In Progress (currently in Weeks 10-12, Final Deliverables phase)
**Scope:** Website & Visual Design Enhancement — this is design-focused. Backend engineering, hosting, and full marketing campaigns are **excluded**.

### Project Goals
- Elevate visual quality to museum-level, fine-art standard
- Improve UX so navigation feels intuitive and guided
- Strengthen digital storytelling around portraits, interviews, and biographies
- Increase audience engagement through interactive or reflective features
- Apply Human-Centered Design (empathy, ideation, prototyping, testing)

### Project Milestones
- Weeks 1–2: Review & Insight (completed)
- Weeks 3–5: Concepts & Direction (completed)
- Weeks 6–9: Prototyping & Testing (completed)
- Weeks 10–12: Final Deliverables (current phase)

## Website Architecture (Information Architecture)

7 main sections with subpages:

```
Navigation Bar
├── Home (1.0)
├── About (2.0)
│   ├── About the Exhibition
│   └── The Creators
├── Gallery (3.0)
│   ├── Portraits
│   │   └── Descriptions of each portrait
│   └── Videos (3.1)
├── Events (4.0)
│   ├── Current Exhibitions (4.1)
│   ├── Future Exhibitions
│   └── Past Exhibitions (4.2)
├── Shop (5.0)
│   └── Products
│       └── Descriptions of each product
├── Contact (6.0)
│   ├── Contact Information
│   └── Leave a Message
└── Donate (7.0)
```

## Team

**7-person team** — 4 web designers, 3 UX researchers (all DFA UCSD members)

| Name       | Role                                                                 |
|------------|----------------------------------------------------------------------|
| **Joon**   | Lead Web Designer, Brand Guidelines, Client Liaison, Meeting Facilitator, sole front-end developer |
| **Wendy**  | Timeline & project management                                       |
| **Alisa**  | Competitive analysis                                                 |
| **Cindy**  | User research (surveys, interviews, personas)                        |
| **Isabelle** | Current website audit, heatmap analysis                            |
| **Jasmine** | Information architecture, visual direction, typography & layout      |
| **Alice**  | Lo-fi wireframes, concept boards, responsive design explorations     |

**Client:** Alexis Dixon — Founder & Project Visionary (mymediationsolution@gmail.com)

## User Personas

1. **The Casual Explorer** (25–35) — needs to be hooked in 10 seconds, browses on mobile
2. **The Dedicated Art Lover** (35–50) — seeks depth and narrative in artist stories
3. **The Community Supporter** (30–45) — motivated by mission and impact

## Design Direction

- **Art-first approach**: large, high-resolution imagery dominates
- **Dark backgrounds** suited for photography/portraiture
- **Clean layouts** with ample whitespace
- **Bold, intentional typography**
- **Immersive storytelling** connecting portraits to narratives
- **Purposeful interactivity** that serves the content, not decorative
- **Responsive**: desktop (1440w), tablet (768w), mobile (390w)

## Design System (from Figma — Source of Truth)

The authoritative design system lives in the Figma file below. **Always match these values in code.** CSS variables, component sizes, nav layout, and typography should all derive from this system — not the older `Figma_Design_System_Guide.pdf`.

- **Figma file:** https://www.figma.com/design/I0TJiq5eA0nflNvxIEgpRx/Brilliance-Exposed-Website-Design
- **File key:** `I0TJiq5eA0nflNvxIEgpRx`
- **Design System page:** `606:362` (named "Design System")

Key node IDs on the Design System page:
| Node | ID |
|---|---|
| Font section | `606:363` |
| Typography section | `623:386` |
| Colors section | `624:398` |
| Components section | `624:423` |
| Navbar component | `68:274` |
| Gold Button component | `659:445` |
| Desktop frame (empty) | `623:373` (1440 × 1024) |
| Tablet frame (empty) | `623:378` (768 × 1024) |
| Mobile frame (empty) | `623:380` (390 × 1024) |
| Hero Page (on `Lofi/ Midfi` page `0:1`) | `662:510` (1724 × 1087) |

### Typography

Two font families:
- **Display** — `Cormorant Garamond` (SemiBold / Medium / Italic)
- **Body / UI** — `Inter` (Regular)

Google Fonts loader:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400&family=Inter:wght@400&display=swap" rel="stylesheet">
```

Type scale (exact values from Figma text styles — match precisely):

| Style | Family | Weight | Size | Line-height | Letter-spacing | Case |
|---|---|---|---|---|---|---|
| Display | Cormorant Garamond | SemiBold (600) | 64px | 110% | 0.7px | original |
| Heading 1 | Cormorant Garamond | SemiBold (600) | 40px | 120% | 0.7px | original |
| Heading 2 | Cormorant Garamond | Medium (500) | 32px | 130% | 0.7px | original |
| Heading 3 | Cormorant Garamond | Medium (500) | 22px | 130% | 0.7px | original |
| Italic Quote / Body-lg | Cormorant Garamond | Italic (400) | 18px | 140% | 0 | original |
| Body | Inter | Regular (400) | 16px | 160% | 0.7px | original |
| Body-sm | Inter | Regular (400) | 14px | 150% | 0.7px | original |
| Label | Inter | Regular (400) | 14px | 140% | 0.7px | **UPPERCASE** |

Do NOT substitute Jost, Cormorant SC, or any other fallback font — the design system is specifically `Cormorant Garamond` + `Inter` only.

### Colors

Raw swatches (Figma paint styles):

| Token | Hex | Usage |
|---|---|---|
| Black | `#000000` | `bg-primary`, `bg-dark`, navbar bg, button text |
| White | `#e0e0e0` | `text-on-dark`, logo, nav text (soft off-white — **NOT** pure `#ffffff`) |
| Gold | `#d4a574` | `accent`, primary button (Gold Button), CTA |
| Inactive Grey | `#2d2d2d` | inactive carousel dots, muted UI states |

Semantic aliases used by the Figma `Colors` section (`624:398`): `bg-primary`, `bg-secondary`, `bg-dark`, `text-primary`, `text-secondary`, `text-on-dark`, `accent`, `border`. Map these onto the 4 raw swatches in CSS variables.

**Important:** "White" in this system is `#e0e0e0`, not pure `#ffffff`. Always use `#e0e0e0` for text and UI chrome on dark backgrounds to match the muted fine-art feel.

### Spacing Tokens

Figma variable collection `Spacing` (single mode "Value"):

| Token | Value |
|---|---|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 32px |
| `--space-2xl` | 48px |
| `--space-3xl` | 64px |

Base unit is 8px. Max container width is 1400px; desktop page padding is 40px. The navbar component itself is **1280 wide** with 80px side padding — use 1280 as the effective content width on desktop.

### Navbar (component `68:274`)

- **Size:** 1280 × 190 px
- **Background:** `#000000`
- **Layout:** horizontal auto-layout, `space-between`, vertically centered
- **Padding:** 48 top/bottom, 80 left/right
- **Logo:** white logo at `logo/logo-white.png`, 238 × 94, left-aligned
- **Nav list:** gap = 64px, 5 items, `Inter Regular 14 UPPERCASE`, letter-spacing `0.7px`, color `#e0e0e0`
- **Nav items (in order):** `about` · `gallery` · `events` · `shop` · `contact`
- **Donate CTA:** Gold Button at the right — background `#d4a574`, padding `16 24`, label `donate` in `#000000` (`Inter Regular 14 UPPERCASE 0.7px`)

**Critical:** the navbar does NOT include a "Home" link — the logo serves as the home link. The previous 6-item nav in `home-prototype.html` is wrong and should be rebuilt to match this spec.

### Gold Button (component `659:445`)

- Background: `#d4a574`
- Padding: `16 24` (vertical / horizontal)
- Min size: 86 × 52 (content-sized; grows with label)
- Corner radius: 0 (rectangular — no rounded corners)
- Label: `Inter Regular 14 UPPERCASE 0.7px`, color `#000000`
- Used as: Donate CTA in navbar, `learn more >` CTA on the hero

### Hero Page (frame `662:510`)

- **Size:** 1724 × 1087 (full-bleed on desktop artboard)
- **Background:** `#000000`
- **Navbar instance** at top, y=0, centered horizontally
- **Hero content group** at ~(380, 263), 961 × 619:
  - **Portrait image** on the left, 413 × 619 (black-and-white portrait)
  - **Text column** to the right of the portrait:
    - Name — `Heading 2` (Cormorant Garamond Medium 32 / 130% / 0.7px), color `#ffffff` — e.g. `Katherine Johnson`
    - Role — `Label` (Inter Regular 14 UPPERCASE / 140% / 0.7px), color `#e0e0e0` — e.g. `MATHEMATICIAN, NASA PIONEER`
    - Quote — `Italic Quote` (Cormorant Garamond Italic 18 / 140%), color `#e0e0e0`, wrapped in a "Blockquote" frame — e.g. `"I counted everything. I counted the steps to the road, the steps up to church."`
    - **Gold Button** CTA — label `learn more >` (159 × 52)
- **Carousel pagination dots** below, centered: 12 dots · 12 × 12 · 28px apart. Active = `#e0e0e0`, inactive = `#2d2d2d`
- The hero does NOT display a giant "Brilliance Exposed" wordmark — it leads with a featured person (rotating portrait carousel), not the exhibition name.

### Responsive Frames

The design system defines three artboards (currently empty placeholders — responsive design is TBD):
- Desktop: 1440 × 1024 (`623:373`)
- Tablet: 768 × 1024 (`623:378`)
- Mobile: 390 × 1024 (`623:380`)

Use these widths as the CSS breakpoint targets. The 1440 desktop frame is narrower than the 1728 hero artboard — treat 1440 as the target desktop viewport and center the 1280-wide navbar/content inside it with 80px side padding.

### Working With Figma From Claude Code

When you (Claude) need to re-check a spec:
1. Use the `plugin:figma:figma` MCP tools with `fileKey: I0TJiq5eA0nflNvxIEgpRx`.
2. Prefer `use_figma` (plugin API) with explicit `figma.getNodeByIdAsync("<id>")` — `get_design_context` and `get_variable_defs` sometimes require an active selection in the Figma desktop app, which trips up headless calls.
3. The Design System lives on its own page (`606:362`), separate from the main `Lofi/ Midfi` canvas. Remember to `await figma.setCurrentPageAsync(page)` before querying nodes on a non-default page.

## Key Research Findings

Two competitive audits were conducted:
1. **Traditional exhibition sites** (5): The Broad, Aperture Foundation, ICP, Studio Museum in Harlem, Gordon Parks Foundation
2. **Innovative immersive sites** (5): Venice Arts, Unseen Studio, Jimmy Nelson, Utopia Orchestra, Ashes and Snow

Core insights:
- Balance immersion with usability — competitors often sacrifice navigation clarity for artistry
- Purposeful interactivity tied to portraiture deepens engagement
- Bridge digital and physical exhibition experiences
- 5-7 top-level nav items is the industry standard (we have 7)
- No competitor combines portraiture + video interviews + community storytelling in one cohesive experience — this is our opportunity

## Tools
- **Design:** Figma, FigJam
- **Development:** HTML, CSS, JavaScript
- **Research:** Google Forms/Typeform, Zoom, affinity mapping

## Folder Structure

- `/assets/` — project assets including images and content from Alexis
- `/logo/` — logo files (PNG, SVG, white variant)
- `/user research/` — research plan, survey, competitive analysis, interview script, personas template
- `/Lofi/` — information architecture diagram
- `/heatmap/` — heatmap data for current site audit (desktop, tablet, mobile)
- `/midpoint-presentation/` — midpoint presentation plans and generated PDFs
- `/meetings/` — meeting agendas and facilitator guides
- `/assessments/` — website assessments and review notes (see latest dated file)
- `/.claude/` — Claude Code skills (portfolio-page-maker)
- `brilliance_exposed_portfolio_page.md` — Joon's portfolio writeup of this project
- `DFA-UCSD xBrilliance Exp.pdf` — project charter from client
- `Figma_Design_System_Guide.pdf` — **deprecated** — the Figma file at `I0TJiq5eA0nflNvxIEgpRx` is the live source of truth

### Web build files — `/site/` subfolder

All runtime website files live inside **`/site/`** (moved out of the project root on 2026-04-09 to keep research, meetings, and asset archives from mixing with the web build).

```
/site/
├── index.html    — Home (intro overlay + Ken Burns hero carousel + teasers for each section)
├── about.html    — About the Exhibition + The Creators
├── gallery.html  — Full portrait gallery + interview series teaser
├── events.html   — Current / Upcoming / Past exhibitions
├── contact.html  — Contact info + message form (+ `#press`, `#partnerships` anchors)
├── donate.html   — Donation tiers + major gift contact path
├── styles.css    — Shared stylesheet (design system tokens, components, responsive)
└── site.js       — Shared script (intro, hamburger, hero carousel, portrait modal, reveal-on-scroll, form feedback)
```

**Opening the site locally:** double-click `site/index.html` in Finder, or run a Python server from the project root and visit `http://localhost:8000/site/index.html`.

**Asset paths** — HTML/CSS/JS in `/site/` reach the shared asset folders via `../logo/...` and `../assets/...`. When adding new HTML pages, remember to prefix the parent dir. The `ASSET_BASE` constant at the top of `site.js` is `'../assets/images/rebrillianceexposedxdfakickoffteamrosterinformatio/'` — edit there to change the default.

**Architecture note (2026-04-09):** the site is a **multi-page** build. Each nav item links to a real HTML file, not an anchor. There is no templating layer — the `<nav>` and `<footer>` markup is duplicated across all 6 HTML files, so when you add/remove nav items or update the footer, change all 6 files at once.

**Cross-page transitions** use the CSS View Transitions API (`@view-transition { navigation: auto }` at the top of `styles.css`) — modern Chromium browsers crossfade between pages; Safari/Firefox get a normal hard load. Each page also inlines `<style>html,body{background:#000;color:#e0e0e0}html{color-scheme:dark}</style>` in `<head>` to paint the dark background before `styles.css` loads, eliminating the white flash.

**Intro overlay** only runs on `index.html`. It uses the slow ~7.2s cinematic timing (quote fade-in → hold → fade-out → black logo fade-in → hold → fade-out → white overlay fades out revealing the dark hero). A subtle "Tap anywhere to skip" label appears in the bottom-right at 0.55 opacity; clicking, pressing Esc / Enter / Space, or having `prefers-reduced-motion: reduce` skips it immediately. The intro plays on every home visit (no sessionStorage caching — that was removed on Joon's request).

**Hero animation (home page):** The hero is a portrait-carousel with a **Ken Burns zoom** effect — each slide starts at `scale(1)` and slowly zooms to `scale(1.18)` over 9 seconds while crossfading to the next slide. Clicking the portrait (or the "Learn More" button) opens an accessible modal dialog with the honoree's bio and a placeholder "Watch the Interview" CTA. The honoree data (images, names, roles, quotes, bios, `videoUrl`) lives in the `HONOREES` const at the top of `site.js` — edit there to add/change/reorder honorees. Setting `videoUrl: null` renders the button as disabled "Interview Coming Soon".

## Important Notes

- Joon is the **only team member who can code** — all front-end implementation is his responsibility
- The project folder name has a typo ("Brillance" instead of "Brilliance") — the correct spelling is **Brilliance Exposed**
- The `.claude/portfolio-page-maker.md` skill is used for generating portfolio case study pages
