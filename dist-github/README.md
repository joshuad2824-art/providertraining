# Cerner for Providers — OKTUL provider training

Two browser-native training pieces for Ascension St. John (OKTUL) providers, built on the
Ascension St. John design system. No build step, no dependencies, no npm — open the HTML and it runs.

| File | What it is |
| :-- | :-- |
| `Cerner Provider Hub.dc.html` | The reference hub. Search and browse 41 provider topics across 9 categories, plus the five class lessons with per-lesson attestation. This is the main deliverable. |
| `Introduction to Cerner - Providers.dc.html` | The 17-screen self-paced eLearning module. Pre-work for the instructor-led class. |
| `Cerner for Providers - offline.html` | The hub compiled into one self-contained file — every screenshot, style and script inlined. Email it, put it on a share drive, open it with no network. Regenerate it after editing the hub; do not edit it directly. |

## Opening it

Double-click any of the three HTML files. They work from the local filesystem — no server needed.

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

## Provenance

`github.md` records the upstream source repository, what was built from which files
(the screen map), and the sync history. Read it before changing content — most of the copy
in here is transcribed from OKTUL job aids and quick reference guides, not written fresh.

## A note on the screenshots

Every Cerner screenshot uses fake test patients from the training domain. The PerfectServe
login screenshots have the tester's email and phone number blurred at source.
