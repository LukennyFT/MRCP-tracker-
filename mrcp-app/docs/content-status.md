# Content Status

**Last updated**: 2026-05-11.

This is the "pick up where we left off" file. **Update it every time content is added, removed, or restyled.** Use today's date in the field above.

## Tracker — `data.js`

All 15 specialties are populated.

| Specialty | Status | Notes |
| --- | --- | --- |
| Cardiology | Populated | Includes pulmonary stenosis (added during this project). |
| Congenital & Genetic Cardiac | Populated | |
| Respiratory | Populated | `hypersensitivity_pneumonitis` topic was renamed to **Extrinsic Allergic Alveolitis (Hypersensitivity Pneumonitis)** and expanded; ID unchanged so user statuses preserved. |
| Gastroenterology | Populated | |
| Renal & Electrolytes | Populated | |
| Endocrinology | Populated | |
| Neurology | Populated | |
| Haematology (Tracker) | Populated | |
| Rheumatology & Immunology | Populated | |
| Infectious Disease | Populated | |
| Pharmacology & Therapeutics | Populated | |
| Psychiatry + Dermatology + Eyes | Populated | |
| General Oncology | Populated | |

## Plan — `data.js` PHASES

Unchanged from initial spec. 4 phases over 22 weeks, exam date 23 September 2026.

## Notebook — `notebook-data.js`

### Fully populated sections

| Section | Topics | Style |
| --- | --- | --- |
| **Haematology** | 29 | Original (terse) |
| **Chemical Pathology** | 24 | Original, with TWO topics in the post-revamp full-sentence style — `lipids` and `hyponatraemia`. **Use these as style templates for new content.** |
| **Microbiology** | 15 | Original |
| **Immunology** | 10 | Original |
| **Cardiac Pathology** (`cardiac_path`) | 8 | Revamped (full sentences). Topics: atherosclerosis, ihd_mi, heart_failure, cardiomyopathy, rheumatic_fever, endocarditis, valve_disease, pericarditis. |
| **Lung Pathology** (`lung_path`) | 12 | Revamped. Topics: obstructive_lung, bronchiectasis_path, cystic_fibrosis_path, ild_ipf, pneumoconiosis_path, hypersensitivity_pneumonitis_path, pneumonia_histopath, lung_tumours, pulmonary_vasculature, pulmonary_oedema_ards, pleural_disease, obstructive_sleep_apnoea. The last two go beyond the MedEd PDF (which lacks dedicated pleural and OSA sections) — added on user request 2026-05-11 for MRCP-relevant depth. |
| **Renal Pathology** (`renal_path`) | 9 | Revamped. Topics: nephrotic_syndrome, nephritic_syndrome, atn_tin, thrombotic_microangiopathies, acute_renal_failure, ckd_renal, apkd, lupus_nephritis, rcc. |

### Single-topic legacy sections (preserved from old "Histopath Highlights")

These were split out of a single section when the histopath was restructured into PDF order. Content style is terse (pre-revamp). User bookmarks against the listed topic IDs must be preserved.

| Section | Topic ID | Notes |
| --- | --- | --- |
| `neurodegen_path` | `neurodegenerative` | Comprehensive coverage of Alzheimer's, vascular, Lewy body, Pick's, Parkinson-plus, prion. |
| `metabolic_bone_path` | `metabolic_bone` | Osteoporosis, osteomalacia, hyperparathyroidism, Paget's, renal osteodystrophy. |
| `ctd_path` | `ctd` | SLE, scleroderma, polymyositis/dermatomyositis, Sjögren's, IPEX, coeliac. |
| `vasculitides_path` | `vasculitides` | Large/medium/small vessel. |
| `amyloidosis_path` | `amyloidosis` | AL / AA / haemodialysis / familial. |
| `sarcoidosis_path` | `sarcoidosis` | Lungs + extra-pulmonary + diagnosis. |
| `stains_path` | `stains` | Quick reference + buzzword pathology table. |

### Empty placeholder sections — awaiting user request

Each has a single `_pending_<id>` topic. When the user asks for one, replace the placeholder with real topics, source content from the PDF (page ranges in `source-material.md`), apply the revamped style, and update this file.

| Section ID | Display name | PDF source pages (approx) |
| --- | --- | --- |
| `gi_path` | GI Pathology | 201-209 |
| `pancreatic_path` | Pancreatic Pathology | 210-213 |
| `liver_path` | Liver Pathology | 214-221 |
| `urological_path` | Urological Pathology | 222-224 |
| `gynae_path` | Gynaecological Pathology | 233-238 |
| `breast_path` | Breast Pathology | 239-243 |
| `cerebral_path` | Cerebral Pathology | 244-248 |
| `nonneoplastic_bone_path` | Non-neoplastic Bone Disease | 253-255 |
| `neoplastic_bone_path` | Neoplastic Bone Disease | 256-260 |
| `skin_path` | Skin Pathology | 261-266 |

### Sections that might be merged in future

`vasculitides_path`, `amyloidosis_path`, `sarcoidosis_path`, `ctd_path`, `stains_path` currently sit alongside the per-organ histopath sections. They cover multi-system disease so the user may eventually ask to fold them into the organ sections, or leave them as standalone reference topics. For now, leave them alone.

## Style audit

| Section | Style | Should we revamp? |
| --- | --- | --- |
| Haematology | Original | User has not asked to revamp; leave alone unless requested. |
| Chemical Pathology | Mostly original; 2 topics revamped (lipids, hyponatraemia) | Leave alone. The user explicitly chose to keep only those two when reverting an earlier mass-revamp. |
| Microbiology | Original | Leave alone. |
| Immunology | Original | Leave alone. |
| Cardiac, Lung, Renal Pathology | Revamped | Style template. |
| Histopath legacy single-topic sections | Original | Leave alone. |

## Recent work log

In reverse chronological order. Keep the last ~10 entries; trim older.

- **2026-05-11** — Added 2 topics to Lung Pathology beyond the MedEd PDF: `pleural_disease` (effusion, Light's criteria, empyema, pneumothorax classification and management, pleural tumours) and `obstructive_sleep_apnoea` (definitions, AHI grading, ESS/STOP-BANG, polysomnography, CPAP/MAS/surgery, CSA, OHS). Lung Pathology now has 12 topics.
- **2026-05-09** — Added Renal Pathology (9 topics). Confirmed Lung Pathology (10 topics) was completed earlier in session.
- **2026-05-09** — Restructured "Histopath Highlights" into 20 separate sections in PDF order; populated `cardiac_path` (8 topics).
- **2026-05-07** — User requested separate histopath sections matching the PDF.
- **2026-05-05** — Added pulmonary stenosis to Cardiology tracker.
- **2026-05-04** — Added day-counter feature ("X days since colour change").

## Next things the user may ask for

Listed in likely PDF-order, but the user can ask in any order:

1. Populate `gi_path` (GI Pathology).
2. Populate `pancreatic_path`.
3. Populate `liver_path`.
4. Populate `urological_path`.
5. Populate `gynae_path`.
6. Populate `breast_path`.
7. Populate `cerebral_path`.
8. Populate the bone sections.
9. Populate `skin_path`.
