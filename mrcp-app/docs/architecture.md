# Architecture

## File layout

```
mrcp-app/
├── CLAUDE.md               # Project guide (always loaded)
├── index.html              # The whole app — HTML + inline JSX (Babel)
├── data.js                 # SPECIALTIES, PHASES, TIPS
├── notebook-data.js        # NOTEBOOK (sections + topics + content)
├── firebase-config.js      # Firebase project config (safe to commit)
├── vendor/
│   ├── react.min.js        # 11 KB
│   ├── react-dom.min.js    # 132 KB
│   ├── babel.min.js        # 2.9 MB — runtime JSX transform
│   ├── firebase-app-compat.js
│   └── firebase-firestore-compat.js
└── docs/
    ├── architecture.md         # this file
    ├── data-schemas.md
    ├── deployment-and-sync.md
    ├── content-status.md
    └── source-material.md
```

## Boot sequence

1. Browser loads `index.html`.
2. Vendor scripts load synchronously: React → ReactDOM → Babel → Firebase.
3. `firebase-config.js` initialises the Firebase app at window load.
4. `data.js` and `notebook-data.js` set `window.SPECIALTIES`, `window.PHASES`, `window.TIPS`, `window.NOTEBOOK`.
5. The inline `<script type="text/babel">` block runs through Babel and renders `<App />` into `#root`.

First load takes 2-3 seconds because of Babel. After caching by Safari, it is near-instant and works fully offline (vendor scripts and data are all local).

## Views

The app has four views switched via the top tab strip:

- **`today`** — auto-detects current week (1-22) and phase from today's date. Shows the day's hours and Q-target, plus this week's flagged systems with one-click jumps into Tracker.
- **`plan`** — all 4 phases (Foundation → Consolidation → Intensification → Final Stretch). The weekly rhythm card recalculates live based on the hours/week slider.
- **`tracker`** — 15 specialties; each condition has green/yellow/red status buttons, search/filter, day-counter since last status change, and a per-condition Apple Pencil note canvas.
- **`notebook`** — distilled pathology content. Sidebar of sections (desktop) or horizontal chip strip (mobile). Topics rendered via the Markdown-lite renderer (see below).

## localStorage keys

All app state is persisted per-device; a subset is also synced via Firestore (see `deployment-and-sync.md`).

| Key | Type | Synced? | Notes |
| --- | --- | --- | --- |
| `mrcp_hours_per_week` | number | ✅ | 3-40, default 14 |
| `mrcp_view` | string | per-device | `today` / `plan` / `tracker` / `notebook` |
| `mrcp_statuses` | object | ✅ | `{conditionId: "green"\|"yellow"\|"red"}` |
| `mrcp_status_changed_at` | object | ✅ | `{conditionId: timestampMs}` — drives day-counter |
| `mrcp_active_specialty` | string | per-device | Last viewed specialty in tracker |
| `mrcp_notes` | object | not synced (size) | `{conditionId: pngDataUrl}` for Pencil notes |
| `mrcp_notebook_bookmarks` | object | ✅ | `{topicId: true}` |
| `mrcp_notebook_section` | string | per-device | Last viewed notebook section |
| `mrcp_sync_code` | string | n/a | The 12-char Firestore document key |
| `mrcp_pen_only` | "0" \| "1" | per-device | Palm-rejection toggle on the Pencil canvas |

## Markdown-lite renderer

The `MarkdownLite` component supports:

| Syntax | Meaning |
| --- | --- |
| `## Heading` | `<h3>` |
| `### Heading` | `<h4>` |
| `- bullet` or `* bullet` | `<ul><li>` |
| `**bold**` | `<strong>` |
| `*italic*` | `<em>` |
| `` `code` `` | inline `<code>` |
| `> quote` | blockquote |
| `---` | `<hr>` |
| `\| a \| b \|` table rows + a separator row `\|---\|---\|` | `<table>` |
| Blank line | paragraph break |

Not supported: nested lists, links, images, code fences. If a feature is missing it has to be added to `MarkdownLite` in `index.html` (around the inline JSX block).

## Apple Pencil canvas

The `NoteCanvas` component opens as a full-screen modal when the user taps **Add notes** on a condition in Tracker.

- Pointer events (`onPointerDown/Move/Up`) with `event.pressure` for stroke width when the input is a Pencil.
- "Pen only" toggle (saved as `mrcp_pen_only`): ignores `pointerType: "touch"` once a pen pointer is detected (palm rejection).
- Tools: pen (pressure-sensitive), highlighter (semi-transparent, fixed width), eraser (`destination-out`).
- Undo: last 20 snapshots of `ImageData`.
- Save: PNG `dataUrl` written to `localStorage.mrcp_notes[conditionId]` on every stroke completion.
- Auto-resize on `resize` and `orientationchange` events.

PNG storage is per-device only because total size can exceed Firestore's 1 MB document limit when many notes are saved.

## Slider (hours/week)

Custom-styled because iOS Safari's `accent-color` rendering is unreliable.

- Track: linear gradient with green (`#1c4a2a`) up to the thumb position and dark blue (`#1c2a4a`) beyond it.
- Position computed in React as `--pct: ${((hoursPerWeek - 3) / 37) * 100}%` and passed via inline `style`.
- Both `::-webkit-slider-runnable-track` and `::-moz-range-track` reference `var(--pct)`.

## Adaptive plan logic

Each phase in `data.js` has baseline numeric fields:

- `weekdayHrsBase` (h/weekday)
- `dayOffHrsBase` (h/day-off)
- `qsPerWeekdayBase`, `qsPerDayOffBase`

Scaling: `scale = userHoursPerWeek / phaseBaselineHours`, where baseline is `5 * weekdayHrsBase + 2 * dayOffHrsBase`. All displayed numbers are `base * scale`.

`phaseBaselineHours` for the current phase plus a feasibility ratio drive the colour-coded status indicator in the header ("On pace with the plan" etc.).

## Firestore sync wiring

See `deployment-and-sync.md` for setup details. In the App component:

- A `useEffect` opens `db.collection("sync").doc(syncCode).onSnapshot(...)` when a sync code is set.
- A separate debounced (700 ms) `useEffect` writes the syncable state to the same doc on any change.
- Incoming snapshots use a guard ref (`applyingRemote.current`) so we don't echo a remote update straight back.

## Where to make common changes

| Change | File / location |
| --- | --- |
| Add tracker condition | `data.js`, inside the right specialty's `conditions` array |
| Add notebook topic | `notebook-data.js`, inside the right section's `topics` array |
| Add notebook section | `notebook-data.js`, append a section object to `window.NOTEBOOK.sections` |
| Tweak phase numbers | `data.js`, `window.PHASES[i].weekdayHrsBase` etc. |
| Add a new Markdown-lite syntax | `MarkdownLite` function in `index.html` |
| Change Pencil colour palette | `PEN_COLORS` constant near the top of the JSX block in `index.html` |
| Change synced fields | Both the `onSnapshot` reader and the debounced writer in `App` |
