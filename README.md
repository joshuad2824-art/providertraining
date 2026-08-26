# Cerner provider training — Ascension St. John (OKTUL)

Source material and the site built from it: reference and training for Ascension St. John
providers using Cerner PowerChart.

**The site is `dist-github/`.** Everything else in this repository is the raw material it was
built from. If you are here to read or change the site, go to
[`dist-github/README.md`](dist-github/README.md).

## What is where

| Folder | What it holds |
| :-- | :-- |
| `dist-github/` | **The site.** Three HTML pages, the vendored design system, screenshots, and the content files. No build step. |
| `Inpatient Provider/` | The job aids transcribed to Markdown — the direct source for most of the site's topics. |
| `Mobile app/` | The thirteen PerfectServe iOS quick reference guides, in Markdown. |
| `ED/`, `Inpatient/` | The original job aid PDFs the Markdown was transcribed from. Largely the same set of files under two audience folders. |
| `Med_Recs/`, `Message_Center/`, `Orders/` | Three job aids exported as HTML with their extracted screenshots. The screenshots are the useful part; several are used on the site. |
| `Images_CC-Login_Process_BYOD_(iOS)/` | Twenty screenshots pulled from the PerfectServe BYOD login guide. Sixteen are used in the site's login walkthrough. |
| `Ascension Branding/` | Brand assets and the Ascension digital guidelines PDF. |
| `Adult Learning/`, `Mark & Measure/` | Author reference libraries — instructional design and graphic design. Background reading, not provider content, and nothing on the site is built from them. |

## Provenance

`dist-github/github.md` is the record of what on the site came from which file here, plus the sync
history. Read it before changing site content: most of the copy is transcribed from published
OKTUL job aids, not written fresh, so the job aid is the source of truth and the site follows it.

## Patient information

Every Cerner screenshot in this repository is from the training domain and uses fake test
patients. The PerfectServe login screenshots have the tester's email and phone number blurred at
source. Keep it that way — nothing from a live chart belongs here.
