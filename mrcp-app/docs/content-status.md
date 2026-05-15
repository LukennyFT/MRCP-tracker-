# Content Status

**Last updated**: 2026-05-15.

This is the "pick up where we left off" file. **Update it every time content is added, removed, or restyled.** Use today's date in the field above.

## Tracker — `data.js`

All 15 specialties are populated.

| Specialty | Status | Notes |
| --- | --- | --- |
| Cardiology | Populated | Includes pulmonary stenosis (added during this project). |
| Congenital & Genetic Cardiac | Populated | |
| Respiratory | Populated | `hypersensitivity_pneumonitis` topic was renamed to **Extrinsic Allergic Alveolitis (Hypersensitivity Pneumonitis)** and expanded; ID unchanged so user statuses preserved. |
| Gastroenterology | Populated | Added `boerhaaves`, `budd_chiari`, `carcinoid_syndrome`, `hydatid_cyst`, `gastric_cancer`, and `hcc` on 2026-05-12. Added `ascending_cholangitis` on 2026-05-15. |
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
| **GI Pathology** (`gi_path`) | 11 | Revamped. Topics: oesophageal_pathology, gastric_pathology, coeliac_disease_path, congenital_paediatric_gi, bowel_obstruction_ischaemia, ibd_pathology, infective_colitis, diverticular_disease, gi_neuroendocrine_carcinoid, colorectal_polyps, colorectal_cancer_path. |
| **Pancreatic Pathology** (`pancreatic_path`) | 6 | Revamped. Topics: pancreas_anatomy_function, acute_pancreatitis, chronic_pancreatitis, pancreatic_ductal_adenocarcinoma, pancreatic_neuroendocrine_tumours, biliary_pathology. Note: biliary tract (gallstones, cholecystitis, cholangiocarcinoma) is grouped here as in the MedEd PDF; may be moved to a dedicated `biliary_path` section later if needed. Diabetes deliberately not duplicated here (already in Chemical Pathology / Endocrinology). |
| **Liver Pathology** (`liver_path`) | 11 | Revamped. Topics: liver_anatomy_injury, acute_liver_failure_dili, cirrhosis_portal_htn, alcoholic_liver_disease, nafld_masld, viral_hepatitis_liver, autoimmune_hepatitis_path, cholestatic_pbc_psc, haemochromatosis, wilson_a1at (combined as both rare genetic causes), liver_tumours. |

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

- **2026-05-15** — Added `ascending_cholangitis` after `psc` in Gastroenterology tracker (Charcot's triad, Reynolds' pentad, urgent ERCP drainage). Removed the `alcoholic_hepatitis` entry added earlier — user pointed out the acute syndrome is already covered by the broader `alcohol_liver` entry.
- **2026-05-15** — Added a **Constellation view** to the Tracker as a toggle inside the existing Tracker view (alongside the List view). Each specialty's conditions are rendered as stars on concentric rings around a central hub showing the specialty icon and completion %. Tapping a star cycles status (none → green → yellow → red → none), writing back to the same `mrcp_statuses` Firestore-synced data the list view uses. The toggle is persisted in `mrcp_tracker_mode` localStorage (per-device). New SVG-based `ConstellationView` component lives just above `TrackerView` in `index.html`. Search/filter controls are hidden in constellation mode (all conditions are shown). Architecture doc updated.
- **2026-05-12** — Added `hcc` (Hepatocellular Carcinoma) to Gastroenterology tracker conditions (concise style).
- **2026-05-12** — Added `gastric_cancer` to Gastroenterology tracker conditions (concise style).
- **2026-05-12** — Updated `ibs` treatment field to align with NICE CG61 (2015): removed lactulose (avoid in IBS), demoted low-FODMAP to second-line, added linaclotide for refractory IBS-C, added CBT/hypnotherapy as third-line, added peppermint oil and hyoscine to antispasmodic options. Also trimmed the four GI tracker additions from 2026-05-12 (Boerhaave's, Budd-Chiari, carcinoid, hydatid) to match the concise style of the older entries.
- **2026-05-12** — Added `carcinoid_syndrome` to Gastroenterology tracker conditions. Includes flushing/diarrhoea/bronchoconstriction/right-heart valve disease, 24h 5-HIAA, ⁶⁸Ga-DOTATATE PET-CT, somatostatin analogues, PRRT, carcinoid crisis management.
- **2026-05-12** — Added `budd_chiari` (Budd-Chiari syndrome) to Gastroenterology tracker conditions. Includes JAK2 MPN as commonest cause, classical triad, Doppler USS with caudate lobe hypertrophy, EASL stepwise management (anticoagulation → TIPSS → transplant).
- **2026-05-12** — Added `hydatid_cyst` (Echinococcosis) to Gastroenterology tracker conditions. Includes E. granulosus vs E. multilocularis, WHO USS CE1-CE5 staging, albendazole + PAIR + surgery management, anaphylaxis risk from rupture.
- **2026-05-12** — Added `boerhaaves` (Boerhaave's syndrome) to Gastroenterology tracker conditions. Includes Mackler's triad, Hamman's sign, CT with gastrografin, surgical emergency with ~30% mortality.
- **2026-05-11** — Populated Liver Pathology (11 topics): liver_anatomy_injury (zones, stellate cell fibrogenesis, LFT pattern recognition, acute/chronic hepatitis patterns), acute_liver_failure_dili (King's College criteria, paracetamol/NAC, DILI R-factor), cirrhosis_portal_htn (Child-Pugh, MELD/UKELD, SAAG, SBP, HRS, hepatopulmonary), alcoholic_liver_disease (Maddrey DF, STOPAH trial, Lille score), nafld_masld (FIB-4, FibroScan, resmetirom, MASLD terminology), viral_hepatitis_liver (A-E with chronicity focus, HBV serology table, DAAs for HCV, HEV in pregnancy/immunosuppression), autoimmune_hepatitis_path (Type 1/2, IAIHG criteria), cholestatic_pbc_psc (AMA, p-ANCA, MRCP beading vs onion-skin fibrosis, IgG4-SC mimic), haemochromatosis (HFE C282Y/H63D, MCP arthropathy), wilson_a1at (ATP7B, Kayser-Fleischer, ALP:bili ratio; A1AT PiZZ panacinar emphysema, PAS-D globules), liver_tumours (BCLC, atezo-bev IMbrave150, hepatic adenoma molecular subtypes, hepatoblastoma, metastases).
- **2026-05-11** — Populated Pancreatic Pathology (6 topics): pancreas_anatomy_function, acute_pancreatitis, chronic_pancreatitis (incl. autoimmune type 1 IgG4-related and type 2), pancreatic_ductal_adenocarcinoma, pancreatic_neuroendocrine_tumours (incl. acinar cell, solid pseudopapillary, pancreatoblastoma, cystic neoplasms), biliary_pathology (gallstones, cholecystitis, cholangiocarcinoma — grouped here as in PDF).
- **2026-05-11** — Populated GI Pathology (11 topics): oesophageal_pathology, gastric_pathology (+ H. pylori + PUD), coeliac_disease_path, congenital_paediatric_gi, bowel_obstruction_ischaemia, ibd_pathology, infective_colitis (with C. difficile), diverticular_disease, gi_neuroendocrine_carcinoid, colorectal_polyps (+ familial syndromes), colorectal_cancer_path.
- **2026-05-11** — Added 2 topics to Lung Pathology beyond the MedEd PDF: `pleural_disease` (effusion, Light's criteria, empyema, pneumothorax classification and management, pleural tumours) and `obstructive_sleep_apnoea` (definitions, AHI grading, ESS/STOP-BANG, polysomnography, CPAP/MAS/surgery, CSA, OHS). Lung Pathology now has 12 topics.
- **2026-05-09** — Added Renal Pathology (9 topics). Confirmed Lung Pathology (10 topics) was completed earlier in session.
- **2026-05-09** — Restructured "Histopath Highlights" into 20 separate sections in PDF order; populated `cardiac_path` (8 topics).
- **2026-05-07** — User requested separate histopath sections matching the PDF.
- **2026-05-05** — Added pulmonary stenosis to Cardiology tracker.
- **2026-05-04** — Added day-counter feature ("X days since colour change").

## Next things the user may ask for

Listed in likely PDF-order, but the user can ask in any order:

1. Populate `urological_path`.
2. Populate `gynae_path`.
3. Populate `breast_path`.
4. Populate `cerebral_path`.
5. Populate the bone sections.
6. Populate `skin_path`.
