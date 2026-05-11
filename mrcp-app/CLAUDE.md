# MRCP Part 1 Study App — Project Guide

## What this is

A personal study web app for **MRCP Part 1 (exam date 23 Sep 2026)**. Built as a single-page React application with Babel in-browser transformation. Hosted on GitHub Pages. Synced across devices via Firebase Firestore.

Three core features:

- **Tracker** — green/yellow/red status per condition across 15 specialties, with handwritten (Apple Pencil) notes.
- **Plan** — 4-phase 22-week adaptive revision plan that recalculates daily hours and question targets based on a user-set "hours per week" slider.
- **Notebook** — distilled pathology content organised by system, with bookmarks, search, and a markdown-lite renderer.

## Project locations

- **Working directory**: `/Users/lukennytinta/Documents/Studying for MRCP Part 1/mrcp-app/`
- **Live URL**: `https://lukennyft.github.io/MRCP-tracker-/mrcp-app/`
- **GitHub repo**: `github.com/lukennyft/MRCP-tracker-`
- **Firebase project**: `mrcp-revision-app`

## Critical conventions

**Style** (the user gave explicit feedback on this — adhere strictly):

1. **Use full sentences**, not telegraphic shorthand connected by em-dashes. Example fix: "No more than 8-10 mmol/L per 24 h — else central pontine myelinolysis" → "The serum sodium must not be allowed to rise by more than 8 to 10 mmol/L per 24 hours. If the rate of correction is faster, the patient is at risk of osmotic demyelination syndrome (central pontine myelinolysis)."
2. **Spell out every abbreviation the first time it appears**. Example: write "low density lipoprotein (LDL)" the first time, then "LDL" thereafter.

**Depth**: When asked to add content, include comprehensive material — not only what is tagged "high-yield" in revision guides. The user has explicitly said they want to do extremely well in MRCP. Include guideline-level detail (drug names, doses, mechanisms, criteria, paraneoplastic syndromes, etc.) alongside the histopath from the source PDF.

**Data invariants** (will silently break user data if violated):

- Never change existing **condition IDs** in `data.js` — `mrcp_statuses`, `mrcp_status_changed_at`, and `mrcp_notes` are keyed off them.
- Never change existing **topic IDs** in `notebook-data.js` — `mrcp_notebook_bookmarks` is keyed off them.
- Section IDs can be renamed; only topic and condition IDs are sacred.

## Behaviour: update docs as you change things

These docs must stay accurate. When you make a change that affects any of the domains below, **update the relevant context file before ending your response**. The most frequently affected:

- After adding/removing a notebook section or topic → update `docs/content-status.md`.
- After adding a tracker condition → update `docs/content-status.md`.
- After changing a state key or component → update `docs/architecture.md`.
- After deployment workflow changes → update `docs/deployment-and-sync.md`.

## Context file index

Load these on demand. They live in `docs/`.

| File | When to load | What it covers |
| --- | --- | --- |
| **`docs/architecture.md`** | Touching `index.html` or any component logic | File layout, boot sequence, view structure (Today / Plan / Tracker / Notebook), localStorage key list, Markdown-lite syntax, Pencil canvas implementation. |
| **`docs/data-schemas.md`** | Editing `data.js` or `notebook-data.js` | Exact JSON shape of `window.SPECIALTIES`, `window.PHASES`, `window.NOTEBOOK`. Placeholder pattern for empty notebook sections. Field meanings (e.g. `weekdayHrsBase`). |
| **`docs/deployment-and-sync.md`** | Deployment, Firebase, or sync questions | GitHub Pages upload workflow, iOS force-refresh trick, Firestore document structure, sync code design, security rules, what's synced vs per-device. |
| **`docs/content-status.md`** | "Pick up where we left off" — start of every content session | Per-section checklist of notebook content (which sections populated, which empty), tracker condition status, most recent additions. **This is the most important file to keep current.** |
| **`docs/source-material.md`** | Adding notebook content from the source PDF | Location of the MedEd Path Guide PDF, the per-section page ranges, how to regenerate `/tmp/path_guide.txt` if missing. |

## Quick recipes

**Add notebook content to an existing empty section** (the typical request):

1. Read `docs/content-status.md` to confirm the section is empty.
2. Read `docs/source-material.md` to find the PDF page range.
3. Read the PDF section. Augment with MRCP-relevant detail.
4. Read `docs/data-schemas.md` to confirm topic structure.
5. Edit `notebook-data.js` — replace the `_pending_<section>` placeholder topic with real topics. Keep section ID; pick descriptive topic IDs.
6. Apply the style rules above.
7. Update `docs/content-status.md` to mark the section populated.

**Add a tracker condition**:

1. Find the right specialty in `data.js`.
2. Append a condition with a unique `id` (never reuse an old ID).
3. Update `docs/content-status.md`.

**Verify file integrity after any edit**:

```sh
python3 -c "import re; code=open('notebook-data.js').read(); s=re.sub(r'\`[\s\S]*?\`','\"\"',code); print('braces:', s.count('{')-s.count('}'), 'parens:', s.count('(')-s.count(')'))"
```

## What is NOT here

- The chat history of how we built this is gone — the docs are the source of truth now.
- Original Firebase setup steps, GitHub Pages first-time setup are in `deployment-and-sync.md`.
- The two revamped notebook topics that demonstrate the "full sentence" style: `lipids` and `hyponatraemia` in `notebook-data.js`. Use these as style templates.
