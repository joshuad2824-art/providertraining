repo: joshuad2824-art/providertraining
branch: main

## Last sync

date: 2026-08-26T18:31:10Z

### Updated in this project

- **PerfectServe login now has the real screens.** The upstream repo gained `Images_CC-Login_Process_BYOD_(iOS)/` — 20 extracted screenshots from the BYOD login guide. 16 of them are now carried into the "Log in to PerfectServe on your own phone" topic as a numbered, captioned screen-by-screen strip covering the whole flow: enterprise login → domain → Microsoft sign-in → Duo → number validation → the three permission prompts → biometrics → PIN → e911, plus the two shift-worker screens.
- Added a `gallery` field to the topic model and a responsive gallery block to the hub, so any topic can now show a numbered screenshot walkthrough rather than the previous one-or-two-image limit.
- Offline single-file build regenerated with the new screenshots inlined (now 2.6 MB).

### Seen upstream, deliberately not built

- `Adult Learning/` (16 files) and `Mark & Measure/` (12 files) — instructional-design and graphic-design research libraries. Author reference material, not provider training content; no hub screen maps to them.
- `Ascension Branding/Backgrounds/` (2 PNGs) — brand background plates. Available if the hub hero or the intro module ever wants one; not applied, since that is a visual change rather than a content sync.
- The other 12 PerfectServe guides still have no extracted image folders upstream, so those topics remain text and steps only.

## Screen map

| Project screen | Repo files |
| :-- | :-- |
| Getting connected (7 topics) | `Wifi-Access.md`, `Citrix-Workspace.md`, `Remote-Access-to-Citrix.md`, `Remote-Access-Huddle-Card.md`, `Getting-Started-Cerner-Mobile-Apps.md`, `PowerChart-Touch-Errors.md`, `Dragon-Basics-and-Mobile-App-Setup.md`, `Sign-EPCS-Physician.md` |
| Finding your way (5 topics) | `Med_Recs/images/image8.png`, `Med_Recs/images/image2.png`, `Message_Center/images/image10.png`, `ED-Physician-Cerner-Quick-Start-Brief.md` |
| Message Center | `Message-Center.md`, `Message_Center/images/image13.png` |
| Patient Lists | Facilitator guide, lesson 3 |
| Inpatient Workflow (9 topics) | `Medication-Reconciliation.md`, `Ordering-PowerPlans-Add-to-Phase.md`, `Order-Favorites.md`, `AutoText.md`, `AutoText-Copy-Utility.md`, `Dynamic-Documentation-Enhancements.md`, `Med_Recs/images/image7.png`, `Orders/images/image10.png`, `Message_Center/images/image1.png` |
| Discharge (3 topics) | `ED-Note-Remodel-Discharge-Workflow.md`, `ED-Discharge-Diagnosis.md`, facilitator guide lesson 5 |
| Emergency Department (3 topics) | `ED-LaunchPoint-Favorite-Folders.md`, `MD-Seen.md`, `ED-Global-AutoText-Phrases.md` |
| PerfectServe (9 topics) | `Mobile app/CC-Getting_Started_(iOS).md`, `CC-Login_Process_BYOD_(iOS).md`, `CC-Mobile_App_Requirements_(iOS).md`, `CC-Logout_Process_(iOS).md`, `CC-Messaging_(iOS).md`, `CC-Directory_(iOS).md`, `CC-Dialer_(iOS).md`, `CC-User_Status_(iOS).md`, `CC-Auto_Response_(iOS).md`, `CC-Forward_Pages (iOS).md`, `CC-Creating_My_Rules_(iOS).md`, `CC-Joining_Patient_Care_Team_(iOS).md`, `CC-News&Announcements_(iOS).md` |
| PerfectServe → login topic gallery | `Images_CC-Login_Process_BYOD_(iOS)/image{20,16,10,6,3,8,14,1,17,12,15,9,11,4,19,13}.png` → `assets/perfectserve/ps-login-*.png` |
| Other tools (3 topics) | `WellSheet-Quick-Guide.md`, `DynaMed-Clinical-Reference.md`, `Provider-Status-Level-of-Care-Orders.md` |
| The course (5 lessons) | `00_Job-Aids-Index.md` + the OKTUL provider facilitator guide (uploaded .docx) |
| The course (61 screens, all 41 topics) | Every topic file, via `content/module.js` + `content/teaching.js`. Bespoke screens also use `Med_Recs/images/image8.png`, `Med_Recs/images/image2.png`, `Message_Center/images/image10.png`, `Message_Center/images/image1.png` |

## The course

The 17-screen "Introduction to Cerner" pre-work module is now a 61-screen self-paced course
covering all 41 topics, so a provider can finish the material without a facilitator. Structure and
teaching content are authored; the reference material on each topic screen is generated from the
topic entry, so it cannot drift from the hub.

- `content/teaching.js` — per topic: why it matters, what to try in the training domain, one
  knowledge check with its explanation. Authored, and grounded in that topic's own facts.
- `content/module.js` — the screen order, and which topic each screen teaches.
- Coverage is enforced at load: every topic must have exactly one home in the module.

Five topics (`powerchart-window`, `find-patient`, `chart-tab`, `demographics`, `menus`) and
`create-note` are taught by the original hand-written screens, which have numbered screenshot
callouts a generated screen would lose. Those screens declare `covers`, and pick up the same Try it
and knowledge check.

## Notes

- Campus-Map.md is an image-only placeholder in the repo and was not built into a topic.
- SurgiNet is retired locally — perioperative content is released by Cerner position inside PowerChart. Reflected in both files.
- Screenshots use fake test patients and are safe to display. The login screenshots have the tester's email and phone number blurred at source.
- Login screenshots are stored as PNG in `assets/perfectserve/` and as JPEG data URIs in `content/images.js` for the offline build.
- Facilitator view content stays in `content/course.js` as `CERNER_FACILITATOR`, unreferenced, ready to switch back on.

## Sync history

- 2026-08-26T17:19:30Z — PerfectServe Clinical Collaboration added as a new category: 9 topics built from the 13 iOS quick reference guides in `Mobile app/`.
- 2026-08-26T16:32:26Z — first import: real screenshots into the intro module, OKTUL access details, demographics bar and Provider View menu corrections.
