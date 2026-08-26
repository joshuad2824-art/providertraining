# Cerner for Providers — OKTUL provider training

Browser-native training for Ascension St. John (OKTUL) providers, built on the Ascension St. John
design system. No build step, no npm, nothing fetched at runtime — serve the folder, or open the
HTML, and it runs.

| File | What it is |
| :-- | :-- |
| `index.html` | The front door. Plain HTML and CSS, no runtime, so it renders even if everything else fails. |
| `Cerner Provider Hub.dc.html` | The reference hub. Search and browse 41 provider topics across 9 categories, plus the five class lessons with per-lesson attestation. This is the main deliverable. |
| `Introduction to Cerner - Providers.dc.html` | The 17-screen self-paced eLearning module. Pre-work for the instructor-led class. |
| `Cerner for Providers - offline.html` | The hub compiled into one self-contained file — every screenshot, style and script inlined. Email it, put it on a share drive, open it with no network. Regenerate it after editing the hub; do not edit it directly. |

## Opening it

Serve the folder over any static host and go to `/`, or double-click `index.html` locally. There is
nothing to install and nothing to build.

## Nothing is fetched from the internet

This matters more than it sounds: on a filtered hospital network, a page that reaches for a CDN
does not degrade, it comes up **blank**. Everything the pages need is in this folder.

| What | Where it lives | Why it is not remote |
| :-- | :-- | :-- |
| React + ReactDOM 18.3.1 | `vendor/` | `support.js` resolves them from unpkg.com unless `window.__resources` claims those URLs first. `vendor/resources.js` claims them, and loads before `support.js` on both `.dc.html` pages. The two files match the SRI hashes `support.js` pins for the CDN copies. |
| Frank Ruhl Libre, Roboto, Roboto&nbsp;Condensed | `_ds/…/assets/fonts/` | `tokens/fonts.css` used to `@import` Google Fonts. It now carries the same `@font-face` rules Google served, repointed at the local `.woff2` files. |
| Lucide icons | `_ds/…/assets/icons/` | The design system's `Icon` component defaulted to unpkg.com. Only the nine glyphs the components actually name are vendored; to use another, copy it out of lucide-static v0.544.0 into that folder. |

`.nojekyll` is required, not optional: GitHub Pages runs Jekyll by default, and Jekyll silently
drops any directory beginning with an underscore — which would take `_ds/` and with it every style
on the site.

If you re-export these pages from the authoring tool, it will overwrite `support.js`, the
`.dc.html` files and `_ds/`, and the three rows above come back as CDN references. Re-apply them.

## How the content is organised

All copy lives in `content/`, separate from the pages, so text edits never touch layout:

- `topics-1.js` / `topics-2.js` / `topics-3.js` — the topic library (`CERNER_TOPICS_1/2/3`). Part 3 is PerfectServe.
- `course.js` — categories, the five class lessons, and `CERNER_FACILITATOR` (a facilitator view, written and currently unreferenced).
- `images.js` — every screenshot as a JPEG data URI (`CERNER_IMAGES`) plus its aspect ratio (`CERNER_RATIOS`). This is what makes the offline build work.

### Editing a topic

Find it in the relevant `topics-*.js` and edit in place. A topic is:

```js
{
  id: 'ps-login',                    // stable; lesson cross-links use it
  cat: 'perfectserve',               // must match a category id in course.js
  title: '…', summary: '…', audience: '…',
  keyFacts: ['…'],                   // the "Worth knowing" card
  image: 'assets/….png',             // optional, up to two
  imageCaption: '…',
  gallery: [{ src: '…', caption: '…' }],  // optional numbered screenshot walkthrough
  galleryLabel: '…',
  sections: [{ h: '…', steps: ['…'] }],   // expandable numbered steps
  notes: [{ tone: 'warning', text: '…' }],  // info | warning | success
  tags: ['…']                        // drives search
}
```

### Adding a screenshot

1. Drop the PNG in `assets/`.
2. Reference it by that path from `image`, `image2` or `gallery`.
3. Add the same path as a key in both `CERNER_IMAGES` (as a data URI) and `CERNER_RATIOS`
   (as `"width/height"`) in `content/images.js`, or the offline build will show a gap.
4. Rebuild `Cerner for Providers - offline.html`.

Watch the trailing commas in `images.js` — it is one long object literal and a missing comma
silently breaks the whole hub.

## Design system

`_ds/ascension-st-john-design-system-…/` is a vendored copy of the Ascension St. John design
system: brand tokens (color, type, spacing, shape, motion) and the component bundle. Both pages
load it from `<helmet>` and style against `var(--asc-*)`. Do not hardcode brand colors.

Two files in it are edited away from the vendored original, both to cut a CDN call, and both
marked in place with a comment saying so: `tokens/fonts.css` (local `@font-face` rules instead of
the Google Fonts `@import` — the change its own header comment invites) and `_ds_bundle.js` (the
`Icon` component's `CDN` constant). Token names are untouched.

## Provenance

`github.md` records the upstream source repository, what was built from which files
(the screen map), and the sync history. Read it before changing content — most of the copy
in here is transcribed from OKTUL job aids and quick reference guides, not written fresh.

## A note on the screenshots

Every Cerner screenshot uses fake test patients from the training domain. The PerfectServe
login screenshots have the tester's email and phone number blurred at source.

## Known gaps

- Three `<image-slot>`s in the intro module are still empty — `cerner-login`, `cerner-role` and
  `cerner-search`, wanting the PowerChart login screen, the role-selection screen and patient
  search. No source screenshot for those exists upstream yet. Each shows its placeholder text
  until one is dropped in.
- `Campus-Map.md` upstream is an image-only placeholder and has no topic.
- Twelve of the thirteen PerfectServe guides have no extracted screenshots upstream, so those
  topics are text and steps only. Only the login flow has a gallery.
