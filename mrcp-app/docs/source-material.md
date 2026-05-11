# Source Material

## The MedEd Path Guide

Almost all notebook content is sourced from the **MedEd Pathology Guide 23-24** that the user has saved locally.

- **PDF location**: `/Users/lukennytinta/Documents/Studying for MRCP Part 1/MedEd Path Guide 23-24 (2).pdf`
- **Extracted plaintext** (used during sessions): `/tmp/path_guide.txt`

### Regenerating the plaintext if missing

The `/tmp` file is volatile and may not persist across sessions. If it's missing, recreate it:

```sh
pdftotext -layout "/Users/lukennytinta/Documents/Studying for MRCP Part 1/MedEd Path Guide 23-24 (2).pdf" /tmp/path_guide.txt
```

(The `-layout` flag preserves column structure, which matters for tables in the PDF.)

Confirm it worked:

```sh
wc -l /tmp/path_guide.txt
grep -c "PAGE" /tmp/path_guide.txt
```

You should see approximately 16 000+ lines and a non-zero "PAGE" count (page markers were inserted by an earlier `pdftotext` run; the current `-layout` extraction may or may not have them — check before relying on `grep "PAGE"` to locate sections).

## Page ranges for each notebook section

Numbers refer to the PDF page numbers printed at the bottom of each page (which match the table of contents on pages 252-264 of the file). Approximate ranges — locate by section title for precision.

### Already populated (for reference)

| Section | PDF pages |
| --- | --- |
| Haematology | 6-44 |
| Chemical Pathology | 87-132 |
| Microbiology | 47-86 |
| Immunology | 134-183 |
| Cardiac Pathology | 187-194 |
| Lung Pathology | 195-200 |
| Renal Pathology | 225-232 |

### Still to populate

| Section | PDF pages |
| --- | --- |
| GI Disease | 201-209 |
| Pancreatic Disease | 210-213 |
| Liver Pathology | 214-221 |
| Urological Pathology | 222-224 |
| Gynaecological Pathology | 233-238 |
| Breast Pathology | 239-243 |
| Cerebral Pathology | 244-248 |
| Neurodegenerative Diseases | 249-251 (already a standalone section) |
| Metabolic Bone Diseases | 252 (already a standalone section) |
| Non-neoplastic Bone Disease | 253-255 |
| Neoplastic Bone Disease | 256-260 |
| Skin Pathology | 261-266 |
| Connective Tissue Diseases | 267-268 (already a standalone section) |
| Vasculitides | 269 (already a standalone section) |
| Amyloidosis | 270 (already a standalone section) |
| Sarcoidosis | 271 (already a standalone section) |
| Histological Stains | 272 (already a standalone section) |

### How to find a section quickly

```sh
grep -n "^Lung Pathology" /tmp/path_guide.txt | head -5
```

The table of contents at the very top of the file (around line 250-300 in the plaintext) lists every section name in PDF order with the page number — useful for orientation.

## Augmenting PDF content

The user has explicitly asked that notebook content go **beyond what the PDF includes** — see `CLAUDE.md` for the depth rule. When populating a section:

1. Read the entire PDF section and capture the structural content faithfully.
2. Add MRCP-relevant detail the PDF omits:
   - Drug names, doses, mechanisms of action.
   - Diagnostic criteria (e.g. modified Duke's, Jones, KDIGO, NYHA).
   - Guideline-level management (NICE, ESC, BSAC, etc.).
   - Paraneoplastic syndromes and complications.
   - Investigations — both the gold-standard and the practical first-line.
3. Maintain the style rules in `CLAUDE.md`: full sentences, abbreviations spelled out on first use.
4. Use tables for comparisons (subtypes, severity criteria, treatment ladders).
5. Use sub-headings (`##` and `###`) to break up content within a topic.

The two style templates to copy are in `notebook-data.js`:
- `chemical` section → `lipids` topic
- `chemical` section → `hyponatraemia` topic

Plus the entire `cardiac_path`, `lung_path`, and `renal_path` sections.

## Other source material

- **Specialty tracker conditions** in `data.js` were authored fresh against MRCP curriculum — not extracted from the PDF.
- **PHASES** in `data.js` was based on the user's individual revision plan from a separate document (`mrcp-revision-plan.jsx` originally), not the MedEd guide.
- Wikipedia or BNF can be cross-referenced for drug details when the PDF is silent — but the MedEd guide is the canonical source for histopath content and should be matched first.
