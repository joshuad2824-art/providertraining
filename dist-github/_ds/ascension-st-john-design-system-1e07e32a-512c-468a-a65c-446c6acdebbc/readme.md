# Ascension St. John — Design System

A brand-accurate design system for **Ascension St. John**, the Tulsa, Oklahoma ministry of **Ascension**, one of the largest non-profit Catholic health systems in the United States. Ascension St. John operates hospitals and clinics across northeastern Oklahoma; its identity is the unified Ascension brand with a market-specific lockup ("Ascension St. John").

Everything here is derived from source material the brand owner supplied. Where the source is silent, this readme says so rather than inventing a rule.

---

## Sources

| Source | What it gave us |
| --- | --- |
| `uploads/asce_digital_guidelines.pdf` — *Ascension Digital Brand Guidelines*, updated 11/22/22 (31 pp.) | Logo usage and clear space, the five-color palette with exact hex/Pantone/CMYK, the WCAG contrast matrix, the typeface system and its approved web substitutes, the alternate arch graphic rules, and the full digital-applications spec (display ads, social, buttons, intranet banners, myAscension carousel, photo requests). |
| 23 logo PNGs (`asce_*_rgb_300.png`) | Emblem in 8 colorways; Ascension enterprise horizontal/vertical lockups; Ascension St. John horizontal (1-line), horizontal-stacked (2-line) and vertical lockups — each in full-color, white and black. Copied verbatim to `assets/logos/`. |
| Two arch graphic reference images (green, violet) | The real alternate arch artwork. Used to derive `assets/arch/arch-{1,2}-<color>.png` for all five brand colors; originals kept as `assets/arch/reference-arch-{green,violet}.png`. |

The PDF points to two further sources that were **not** provided and that a reader with access should consult:

- The full **Ascension Brand Guidelines** — `ascension.org/brand` via Ascension Brand Central, or `brand@ascension.org`.
- The **full display-ad specs** and social masthead sizes, kept on the Ascension Google Drive.

**Not provided, therefore not built:** no website code, no app code, no Figma file, no CMS or component library. There is consequently **no product-UI kit** (no ascension.org page recreations, no MyChart-style patient portal screens). The two UI kits here recreate the applications the guidelines actually specify — advertising, and email/banners. See *Gaps and asks* at the bottom.

---

## Index

**Root**
- `styles.css` — the only file consumers link. `@import`s everything below.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills wrapper so this folder works as a Claude Code skill.

**`tokens/`** — `fonts.css` (webfont loading + substitution note), `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `base.css` (element defaults).

**`assets/`**
- `logos/` — 23 approved logo PNGs at 300dpi.
- `arch/` — the alternate arch graphic: `arch-1-<color>.png` (Arch 1, sharper angle, horizontal layouts) and `arch-2-<color>.png` (Arch 2, more curve, vertical formats) for `blue`, `medium-blue`, `green`, `violet`, `gold`; plus the two supplied reference files.

**`components/`** — 19 components in seven groups. Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one `@dsCard` HTML per directory.

| Group | Components |
| --- | --- |
| `brand/` | **Logo**, **ArchPanel**, **Eyebrow** |
| `core/` | **Button**, **Card**, **Badge**, **Tag** |
| `forms/` | **Input**, **Select**, **Checkbox**, **Radio**, **Switch** |
| `navigation/` | **Tabs**, **Breadcrumbs** |
| `feedback/` | **Alert**, **Dialog**, **Tooltip** |
| `icons/` | **Icon** |
| `ads/` | **DisplayAd** (+ the `AD_SIZES` map) |

**`guidelines/`** — 23 specimen cards across the Colors, Type, Spacing and Brand groups of the Design System tab.

**`ui_kits/`**
- `digital_advertising/` — the six-size display package, social/audio units, animated storyboard.
- `email_and_banners/` — campaign email, web banner, intranet banners, myAscension carousel.

**`templates/`** — starting folders a consuming project copies: `display-ad-package/`, `campaign-email/`.

**`research/`** — extracted guideline text (`guidelines-text.txt`) for grepping exact wording.

---

## Content fundamentals

The guidelines set the visual rules; the voice below is drawn from the copy examples inside them ("Find the best care for your needs", "A yearly mammogram can save your life", "FIND A DOCTOR") and from Ascension's stated brand intent — typography that makes communications feel **"wholehearted and genuine."** Treat this section as a working standard, and defer to the full Ascension Brand Guidelines if they contradict it.

**Address the reader as "you." Speak as "we" sparingly.**
The patient is the subject of every sentence. "Find the best care for **your** needs." Not "Ascension St. John provides comprehensive care options."

**Plain words, short sentences, no clinical jargon in patient-facing copy.**
"A yearly mammogram can save your life" — nine words, one idea, no hedging. Say *heart care*, not *cardiovascular service line*. Say *same-day appointment*, not *expedited access*.

**Warm, calm, never urgent-sounding — except where urgency is clinical.**
Marketing copy is reassuring. Emergency instructions are blunt and unadorned: "If this is an emergency, call 911."

**Casing**
- Headlines and subheads: **sentence case**. "Care that knows your name."
- Buttons and eyebrows: **ALL CAPS** — this is a typographic rule from the guidelines (Whitney Semibold, 1.25px tracking), not a shouting device. Keep them 2–4 words: `FIND A DOCTOR`, `SCHEDULE ONLINE`, `LEARN MORE`.
- Badges/status chips: all caps, ≤4 words. `ACCEPTING NEW PATIENTS`.
- Filter chips and form labels: sentence case.
- Body copy: sentence case, serial comma, no exclamation points.

**Numbers and time**
Times are lowercase with periods — "9:15 a.m." Dates spelled out in patient copy — "Tuesday, March 4." Phone numbers hyphenated.

**Never**
- **No emoji.** Not in UI, not in email subject lines, not in social copy. This is a Catholic health ministry; the visual system has no place for them.
- No exclamation marks in headlines.
- No "solutions", "leverage", "best-in-class", "world-class", "ecosystem", "journey" as a noun for care.
- No fear-based urgency ("Don't wait — your life depends on it").
- No superlatives you cannot substantiate ("the best hospital in Oklahoma").

**Voice examples**

| Write | Not |
| --- | --- |
| Find the best care for your needs | Explore our comprehensive care continuum |
| Care that knows your name | Patient-centric integrated delivery |
| Your care team shares one record, so you don't have to repeat yourself | Our unified EMR enables seamless information flow |
| Same-day appointments, close to home | Convenient access points throughout the market |
| A yearly mammogram can save your life | Don't skip your screening! 🎀 |

**Fine print** is set in the condensed face and reads like a legal notice, not marketing: non-discrimination statements, address, unsubscribe. Display ads drop legal disclaimers entirely — the disclaimer lives on the landing page the ad clicks through to.

---

## Visual foundations

### Color

Five brand colors, no more. Exact values in `tokens/colors.css`.

| Color | Hex | Pantone | Role |
| --- | --- | --- | --- |
| Ascension Blue | `#1b4297` | 286 | **Logo and type only.** Headlines, subheads. Not a fill color for graphic elements or buttons. |
| Ascension Medium Blue | `#1e69d2` | 285 | Primary interactive color: buttons, links, focus, active states. |
| Ascension Green | `#00a791` | 3275 | Graphic elements, arch fields, wellness/primary-care contexts. |
| Ascension Violet | `#b40f87` | 248 | Graphic elements, arch fields; high-emphasis CTA in limited cases; error/urgent states (the palette has **no red**). |
| Ascension Gold | `#ffb400` | 7409 | Accent, focus ring, warning; black text only. |

Tints are authorized as a progression (90/75/50/25/10%) and are tokenized. Neutrals beyond black and white are *derived*, not specified — the guidelines mention only a "light grey" ad border, so `--asc-grey-*` is a working scale, kept desaturated so it never competes with the palette.

Contrast is not a judgement call: the guidelines ship a pairing matrix (`guidelines/colors-accessibility.card.html`). Minimum type size is **10px**; combinations marked LRG need 18.6px bold or 24px. Gold on white and medium blue on anything but white are forbidden for small type.

Colors are **not** assigned to departments or service lines. Choose per campaign, one per piece.

### Typography

Two families doing two jobs, and they don't trade places.

- **Serif — Chronicle Text G1**, substituted on web by **Frank Ruhl Libre** (`--font-serif`). Bold for headlines, semibold for small subheads. **Never body copy.**
- **Sans — Whitney**, substituted by **Roboto** (`--font-sans`). Book for all body copy, Semibold for callouts, small subheads and every button.
- **Condensed — Whitney Condensed**, substituted by **Roboto Condensed** (`--font-condensed`). Captions, fine print, disclaimers, narrow tables. Never body copy.
- Microsoft Office documents use **Georgia + Calibri** (Arial if Calibri is missing).

The substitutions are named in the guidelines themselves (p.12) and are required for HTML5 ads (p.21) — they are approved, not improvised. See *Gaps and asks* if you hold the Hoefler licenses.

Scale: display 56 / h1 44 / h2 34 / h3 26 / h4 21 / body 16 / small 14 / caption 13 / fine print 11. Headline leading is tight (1.05–1.18); body is 1.5.

### Layout

A **three-column grid** with 1/3–2/3 ratios. The arch color field always fills a 1/3 or 2/3 block and content occupies the rest. Containers cap at 1200px; body measure caps around 66 characters. Spacing is a 4px scale (`--space-1` … `--space-24`); the common rhythm inside a card is 24 pad / 12 after eyebrow / 8 after headline / 24 before the CTA.

### Backgrounds

Three, and only three, background treatments:

1. **White or near-white** (`#fff`, `--asc-grey-50`) for content.
2. **A flat 100% brand color field.**
3. **A color field carrying the alternate arch graphic** — the signature device. The arch is a pointed arch derived from the master Ascension arch, always the same construction: 100% color, tonal steps of white at 10% opacity, bleeding off the **left or right** edge. Two crops: **Arch 1** (sharper angle — horizontal layouts) and **Arch 2** (more gradual, more curve — vertical formats). Placement follows the 3×3 grid.

No gradients as decoration. No photographic overlays tinted in brand color. No patterns, textures, noise or hand-drawn illustration — none appear anywhere in the source.

**Arch don'ts (explicit in the guidelines):** more than one brand color; rotation; using it as a tint over photography; using its shape as a photo mask; scaling it until the curve flattens; changing the overlay opacity. And: the arch is not mandatory — omit it rather than decorate with it.

### Imagery

Photography is real, warm, human and documentary — patients and caregivers, not stock gestures. Requests to the digital team specify **negative space on the sides** so headlines can be added, subjects never cropped at the frame edge, and "medium" resolution as sufficient. Responsive work needs images that crop both wide and square. The myAscension carousel image must avoid light grey so it doesn't dissolve into the page. Tonality: natural, slightly warm, full color. No duotones, no black-and-white, no grain, no heavy filters. **No brand-illustration library exists** — none was supplied and none should be improvised. Use `<image-slot>`-style placeholders and ask for real photography.

### Cards, borders, radii

Flat. A card is a white surface with a **1px `--border-subtle` hairline** and a **4px radius**, with **no resting shadow**; an optional 4px brand-color rule sits on the **top** edge. (A colored left border only is not an Ascension pattern — don't.) Buttons, inputs and cards all use the same 4px radius; the pill radius is reserved for filter chips; color fields and banners are square-cornered.

### Shadows, transparency, blur

The brand is flat and the logo explicitly forbids shadow, bevel and glow. Shadows exist only for things that float above the page: `--shadow-raise` on a hovered interactive card, `--shadow-overlay` for menus and tooltips, `--shadow-dialog` for modals. Transparency appears in exactly two places: the arch's white tonal steps, and the modal scrim (55% Ascension Blue with a 6px blur). No frosted-glass panels, no translucent nav bars.

### States

- **Hover** — filled buttons darken from Medium Blue to Ascension Blue; outline and white buttons pick up a 10%-tint wash; links move from Medium Blue to Ascension Blue; interactive cards swap their hairline to Medium Blue and lift 1px. Never a lightening hover on a filled control.
- **Press** — `scale(0.98)`. No color change beyond hover.
- **Focus** — a 2px Ascension Gold outline with 2px offset, everywhere, on everything keyboard-reachable. Gold is the only focus color; it is legible on white, blue, green and violet alike.
- **Selected** — Medium Blue border on a 10% Medium Blue tint (chips, tabs, radio, checkbox).
- **Disabled** — 40% opacity, `not-allowed`. No grey re-coloring.
- **Error** — Ascension Violet border and message text. There is no red in the palette; don't add one.

### Motion

Restrained and short: 80/150/220/360ms with `cubic-bezier(.4,0,.2,1)`. Fades and small position shifts only — no bounce, no spring, no parallax, no attention loops. Advertising has hard limits: **15 seconds maximum**, one loop or three loops totalling 15s, **never infinite**, 24fps ceiling, storyboard approved before animation begins.

### Fixed elements

Nothing in the source shows a sticky nav, floating action button or bottom sheet. Keep chrome in the document flow unless the product you are prototyping demonstrably has it.

---

## Iconography

**The brand guidelines define no icon system.** There is no Ascension icon font, no sprite sheet, no SVG library in the supplied material — the only iconographic marks in the entire document are the logo emblem and a single arrow glyph used in the "arrow button" treatment.

**What this system does:** `components/icons/Icon.jsx` wraps **Lucide** (loaded from `https://unpkg.com/lucide-static@0.544.0/icons`, applied as a CSS mask so every glyph inherits `currentColor`). **This is a flagged substitution** — chosen for its even 2px stroke, rounded joins and calm geometry, which sit closest to the brand's plain, unfussy tone. It is not Ascension's own set.

Rules:
- Monochrome, `currentColor`, stroke — never multi-color, never filled-and-outlined mixed in one view.
- Sizes: 16 inline with body copy, 20 default UI, 24 navigation, 32–40 for service tiles.
- Icons support labels; they don't replace them. Icon-only controls get a Tooltip and an `aria-label`.
- **No emoji, ever.** No Unicode dingbats standing in for icons.
- The arrow in `<Button arrow>` is the one icon the guidelines actually document.

If Ascension ships an official icon set, drop it in `assets/icons/` and repoint `Icon`'s `base` — nothing else changes.

---

## Intentional additions

The source is brand guidelines, not a component library, so the only components it defines outright are the **button** (fully specified: color, type, tracking, shape, border, padding, alignment) and the **display ad** unit. Everything else is a standard primitive set, sized to what a health-ministry surface needs, built strictly from documented colors, type and shapes:

- **Logo, ArchPanel, Eyebrow** — wrappers around documented brand assets and the arch construction rules.
- **Card, Badge, Tag, Input, Select, Checkbox, Radio, Switch, Tabs, Breadcrumbs, Alert, Dialog, Tooltip** — conventional primitives with brand values applied. Their *values* come from the guidelines (4px radius, medium-blue interactive, violet for error, gold focus); their *existence* is our decision.
- **Icon** — needed because no glyph set was provided; substitution flagged above.

None of these should be treated as officially sanctioned Ascension components. Verify them against Ascension Brand Central before production use.

---

## Gaps and asks

1. **Fonts.** Whitney and Chronicle Text G1 are licensed Hoefler&Co faces; no binaries were supplied. The system runs on the guideline-approved Google substitutes (Frank Ruhl Libre, Roboto, Roboto Condensed). Send the licensed `.woff2` files and they can be swapped in behind the same tokens.
2. **Product UI.** No website, app or Figma source was provided, so no product-UI kit exists. A recreation of ascension.org / the Ascension St. John site or patient portal needs the site's code or a Figma file — screenshots alone would be a guess.
3. **Photography.** No approved image library was supplied; nothing here uses stand-in photos.
4. **Icons.** Lucide is a substitution (see above).
5. **The full Ascension Brand Guidelines** would settle voice, photography direction and the master arch graphic's exact geometry.
