# Data Schemas

The three data globals: `window.SPECIALTIES`, `window.PHASES`, `window.NOTEBOOK`. All set in `data.js` and `notebook-data.js`.

## `window.SPECIALTIES` (in `data.js`)

```js
window.SPECIALTIES = [
  {
    id: "cardiology",          // unique kebab/snake
    name: "Cardiology",
    icon: "♥",                  // single emoji or character
    conditions: [
      {
        id: "af",               // ⚠ NEVER CHANGE — keys statuses/notes/timestamps
        name: "Atrial Fibrillation",
        presentation: "Palpitations, irregular pulse, dyspnoea, fatigue",
        investigations: "ECG (irregularly irregular, absent P waves), TFTs, echo, Holter",
        treatment: "Rate control (bisoprolol, digoxin), rhythm control, anticoagulation (CHA₂DS₂-VASc), cardioversion"
      },
      // ... more conditions
    ]
  },
  // ... more specialties
];
```

**Rules:**

- `id` for each condition must be unique across the whole array and must never change after a user has interacted with it.
- All four condition fields are plain strings. They appear in the tracker's expand panel.
- 15 specialties currently. Order in the array = order in the tracker sidebar.

## `window.PHASES` (in `data.js`)

```js
window.PHASES = [
  {
    id: 1,
    label: "Phase 1",
    name: "Foundation",
    weeks: "Weeks 1–6",         // display string
    weekStart: 1, weekEnd: 6,   // numeric — used by getCurrentPhaseIndex()
    dateStart: "2026-04-21",
    dateEnd:   "2026-06-01",
    color: "#4A90D9",
    accent: "#E8F4FF",

    // Baseline hour budget — used for adaptive scaling
    weekdayHrsBase: 1.75,       // per weekday at baseline
    dayOffHrsBase: 4,           // per day off at baseline
    qsPerWeekdayBase: 35,       // questions per weekday at baseline
    qsPerDayOffBase: 90,

    goal: "Systematic topic coverage. ...",
    strategy: [
      "Work through Passmedicine/Pastest by system...",
      // strings
    ],
    systems: [
      {
        name: "Cardiology",
        priority: "HIGH",       // HIGH | MED | LOW | EXAM
        weeks: "Wks 1–2",       // parsed by systemMatchesWeek() — keep "Wk N" or "Wks N-M" format
        trackerId: "cardiology" // optional — enables the "Open in Tracker →" jump
      },
      // ...
    ]
  },
  // ... 4 phases total
];
```

**Scaling logic** (in `index.html`):

```js
phaseBaselineHours = 5 * weekdayHrsBase + 2 * dayOffHrsBase;
scale = userHoursPerWeek / phaseBaselineHours;
displayed = base * scale;  // applied to weekdayHrs, dayOffHrs, and Q-targets
```

## `window.TIPS` (in `data.js`)

Array of `{icon, title, body}` shown in the collapsible tips panel on the Plan view. Loose schema; just strings.

## `window.NOTEBOOK` (in `notebook-data.js`)

```js
window.NOTEBOOK = {
  sections: [
    {
      id: "haematology",        // unique kebab/snake
      name: "Haematology",
      icon: "🩸",
      topics: [
        {
          id: "blood_films",     // ⚠ NEVER CHANGE — keys bookmarks
          name: "Peripheral Blood Films",
          content: `## Heading ...`  // markdown-lite (see architecture.md)
        },
        // ...
      ]
    },
    // ...
  ]
};
```

**Rules:**

- Topic `id` must be unique across the whole notebook and must never change after a user has bookmarked it.
- `content` is a template literal containing markdown-lite. Avoid backticks inside the content — they break the literal.
- `icon` is one emoji. The notebook sidebar shows it next to the section name.

### Placeholder pattern for empty sections

A section that has been declared but not yet populated has a single placeholder topic:

```js
{
  id: "skin_path",
  name: "Skin Pathology",
  icon: "🩹",
  topics: [
    {
      id: "_pending_skin_path",        // _pending_ prefix marks it
      name: "(Coming soon)",
      content: `## Pending\n\nThis section is currently empty. ...`
    }
  ]
}
```

When populating: **replace** the placeholder topic with the real topics; do not keep the `_pending_*` topic alongside.

### Section naming conventions

- Histopath sections use the suffix `_path` (e.g. `cardiac_path`, `lung_path`, `renal_path`).
- Non-histopath top-level sections use no suffix (`haematology`, `chemical`, `microbiology`, `immunology`).
- Topic IDs are content-descriptive (`atherosclerosis`, `nephrotic_syndrome`) — don't redundantly suffix them.

### Current sections (PDF order)

Tracking organisation matches the MedEd Path Guide table of contents:

1. `haematology`
2. `chemical` (Chemical Pathology)
3. `microbiology`
4. `immunology`
5. `cardiac_path`
6. `lung_path`
7. `gi_path`
8. `pancreatic_path`
9. `liver_path`
10. `urological_path`
11. `renal_path`
12. `gynae_path`
13. `breast_path`
14. `cerebral_path`
15. `neurodegen_path`
16. `metabolic_bone_path`
17. `nonneoplastic_bone_path`
18. `neoplastic_bone_path`
19. `skin_path`
20. `ctd_path` (Connective Tissue Diseases)
21. `vasculitides_path`
22. `amyloidosis_path`
23. `sarcoidosis_path`
24. `stains_path` (Histological Stains)

Sections 20-24 are single-topic legacy sections inherited from the old "Histopath Highlights" — they may eventually be merged into other sections (e.g. CTD content distributed into the relevant organ system) but for now they stand alone.

## Topic style template

The post-revamp style is demonstrated by these two topics; use them as templates:

- `chemical` section → `lipids` topic
- `chemical` section → `hyponatraemia` topic

Both apply:

1. Full sentences.
2. Abbreviations spelled out the first time.
3. Tables for comparative content.
4. Sub-headings (`##` and `###`) to break up long sections.

The newer histopath sections (`cardiac_path`, `lung_path`, `renal_path`) follow the same style.
