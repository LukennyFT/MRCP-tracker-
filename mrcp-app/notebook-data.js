// MRCP Part 1 Pathology Notebook
// Distilled from the MedEd Path Guide 23-24, focusing on MRCP-relevant content.
// Markdown-lite syntax in `content`:
//   ##/###  headings
//   - bullet
//   **bold**
//   blank line  paragraph break
//   ---  horizontal rule
window.NOTEBOOK = {
  sections: [
    // =========================================================================
    {
      id: "haematology",
      name: "Haematology",
      icon: "🩸",
      topics: [
        {
          id: "blood_films",
          name: "Peripheral Blood Films",
          content: `## Cells & inclusions to recognise

- **Acanthocytes** (spur/spike cells) — spiculated RBCs. *Liver disease, hyposplenism, abetalipoproteinaemia.*
- **Basophilic stippling** — small peripheral dots (rRNA). *Lead poisoning, megaloblastic anaemia, MDS, thalassaemia, liver disease.*
- **Burr cells (echinocyte)** — regular spicules (often EDTA artefact). *Uraemia, GI bleed, gastric carcinoma.*
- **Heinz bodies** — denatured Hb inclusions. *G6PD deficiency, chronic liver disease.*
- **Howell-Jolly bodies** — basophilic nuclear remnants. *Hyposplenism (post-splenectomy, sickle cell, coeliac), megaloblastic anaemia.*
- **Leucoerythroblastic film** — nucleated RBCs + myeloid precursors in peripheral blood. *Bone marrow infiltration: myelofibrosis, malignancy.*
- **Pelger-Huët cells** — bilobed neutrophils ("dumbbell"). Congenital (lamin B receptor mutation) or acquired (AML, MDS — pseudo-Pelger).
- **Polychromasia** — bluish RBCs (= reticulocytes). ↑ in haemolysis, ↓ in aplastic/post-chemo.
- **Right shift** — hypersegmented neutrophils >5 lobes. *Megaloblastic anaemia, uraemia, liver disease.*
- **Rouleaux** — RBC stacking. *Chronic inflammation, paraproteinaemia, myeloma.*
- **Schistocytes** — fragmented RBCs (mechanical destruction). *DIC, HUS, TTP, pre-eclampsia.*
- **Spherocytes** — sphere RBCs, no central pallor. *Hereditary spherocytosis, AIHA.*
- **Target cells (codocytes)** — bull's-eye pallor. *Liver disease, hyposplenism, thalassaemia, IDA.*
- **Tear drops (dacrocytes)** — *Myelofibrosis.*
- **Bite cells** — *G6PD oxidant crisis (with Heinz bodies).*
- **Pencil cells** — *Iron-deficiency anaemia.*`,
        },
        {
          id: "anaemia_overview",
          name: "Anaemia: Overview & MCV Classification",
          content: `## Definitions

- **Men**: Hb < 135 g/L · **Women**: Hb < 115 g/L
- **Causes**: ↓ RBC production · ↑ loss (haemolysis) · ↑ plasma volume (pregnancy)

## MCV-based classification

- **Microcytic (FAST)** — **F**e deficiency · **A**naemia of chronic disease · **S**ideroblastic · **T**halassaemia
- **Normocytic** — Acute blood loss, ACD, BM failure, renal failure, hypothyroid, haemolysis, pregnancy
- **Macrocytic (FATRBC)** — **F**etus (pregnancy) · **A**ntifolates (phenytoin, MTX) · **T**hyroid (hypo) · **R**eticulocytosis · **B12/folate** · **C**irrhosis / MDS

## Reticulocytes

- High in haemolysis or recovering anaemia → marrow is responding
- Low in BM failure (aplastic anaemia, leukaemia infiltration)`,
        },
        {
          id: "iron_deficiency",
          name: "Iron Deficiency Anaemia",
          content: `## Signs

- Koilonychia, atrophic glossitis, angular cheilosis, post-cricoid webs (Plummer-Vinson syndrome), brittle hair/nails

## Blood film

Microcytic, hypochromic, anisocytosis, poikilocytosis, **pencil cells**

## Causes

- **Bleeding until proven otherwise** — menorrhagia (women <50), GI loss (most common in men/postmenopausal: polyps, colorectal Ca, peptic ulcer/NSAIDs, Meckel's, hookworm)
- ↑ utilisation: pregnancy, infants
- ↓ intake / absorption: coeliac, post-gastrectomy
- Chronic intravascular haemolysis (PNH, MAHA → urinary Hb loss)

## NICE / 2-week wait

- IDA without obvious cause: OGD + colonoscopy + urine dip + coeliac screen
- **>60 years with IDA → 2-week-wait colorectal pathway**

## Iron studies pattern

- IDA: Iron ↓, TIBC ↑, Ferritin ↓
- ACD: Iron ↓, TIBC ↓, Ferritin ↑
- Chronic haemolysis: Iron ↑, TIBC ↓, Ferritin ↑
- Haemochromatosis: Iron ↑, TIBC ↓/N, Ferritin ↑↑
- Sideroblastic: Iron ↑, TIBC N, Ferritin ↑

> **Transferrin saturation** = Fe/TIBC; <20% = iron deficient. Ferritin is acute phase — check CRP. In sepsis, oral iron poorly absorbed and can fuel infection — transfuse instead.

## Treatment

- Oral iron (alternate-day dosing as effective, less toxic). SE: nausea, GI upset, black stools.
- IV iron (Ferinject/Monofer): poor absorption, oral failure, urgent rise needed.`,
        },
        {
          id: "acd_sideroblastic",
          name: "ACD & Sideroblastic Anaemia",
          content: `## Anaemia of Chronic Disease

Cytokine-driven inhibition of red-cell production.

- Causes: chronic infection (TB, osteomyelitis), vasculitis, RA, malignancy
- IL-6/LPS → **hepcidin** ↑ → ↓ gut iron absorption + iron sequestration in macrophages
- IFNs/TNF/IL-1 ↓ EPO receptor production
- Ferritin **high** (iron sequestered to deny invading bacteria)
- In CKD: not cytokine-driven — **EPO deficiency** (kidney-made)

## Sideroblastic Anaemia

Ineffective erythropoiesis → iron loading of marrow → haemosiderosis.

- **Diagnosis**: ring sideroblasts in BM (iron in mitochondria around erythroid nucleus)
- Causes: MDS, post-chemo/RT, alcohol, lead, anti-TB drugs, MPDs
- Tx: remove cause; pyridoxine (B6); consider EPO`,
        },
        {
          id: "macrocytic_b12_folate",
          name: "Macrocytic Anaemia / B12 / Folate",
          content: `## Megaloblastic vs non-megaloblastic

- **Megaloblastic** (DNA synthesis fails — large immature nucleus, mature cytoplasm): B12, folate, cytotoxics
- **Non-megaloblastic**: alcohol (commonest cause of macrocytosis without anaemia), reticulocytosis, liver disease, hypothyroid, pregnancy

## B12

- Source: meat, dairy (large body stores)
- **Deficiency causes**:
  - Dietary (vegans)
  - Pernicious anaemia (autoimmune atrophic gastritis → ↓ IF) — *most common cause in the West, usually >40 yrs*
  - Post-gastrectomy, achlorhydria
  - Terminal ileum: Crohn's, coeliac, ileal resection, bacterial overgrowth, tapeworm
  - **Nitrous oxide abuse**
- Features: glossitis, angular cheilosis, depression/psychosis, **subacute combined degeneration of cord** (loss of vibration & proprioception first, absent ankle reflex, spastic paraparesis)
- Pernicious anaemia tests: anti-parietal cell Ab (90%), anti-IF Ab (50%); Schilling test outdated
- Tx: IM hydroxocobalamin (6 doses over 2 weeks); 3-monthly long-term if autoimmune cause

## Folate

- Source: green veg, nuts, yeast, liver (low body stores)
- Deficiency: poor diet, ↑ demand (pregnancy, haemolysis, malignancy, dialysis), coeliac/sprue, drugs (alcohol, **phenytoin, methotrexate, trimethoprim**)
- Tx: oral folic acid — **always check & replace B12 first** (otherwise risks subacute combined degeneration)`,
        },
        {
          id: "haemolytic_overview",
          name: "Haemolytic Anaemias: Overview",
          content: `## Common features

All haemolysis: ↑ unconjugated bilirubin, ↑ urobilinogen, ↑ LDH, reticulocytosis, pigmented gallstones.

- **Intravascular**: ↑ free plasma Hb, ↓ haptoglobin, haemoglobinuria, methaemalbuminaemia
- **Extravascular**: splenomegaly

> Erythroid hyperplasia → **susceptible to parvovirus B19 (aplastic crisis)**, iron overload, osteoporosis.

## Causes

| Inherited | Acquired |
| --- | --- |
| Membrane: HS, HE | Immune: warm/cold AIHA, alloimmune |
| Enzyme: G6PD, PK | Mechanical: valves, MAHA |
| Hb: sickle, thalassaemia | PNH, infection (malaria), drugs |`,
        },
        {
          id: "inherited_haemolysis",
          name: "Inherited Haemolytic Anaemias",
          content: `## Hereditary Spherocytosis

- AD (75%); spectrin/ankyrin deficiency
- Extravascular haemolysis → splenomegaly, gallstones
- **Susceptible to parvovirus B19** aplastic crisis
- Dx: spherocytes, ↑ osmotic fragility, **negative DAT (Coombs)**, EMA flow cytometry
- Tx: folic acid; splenectomy if severe

## Hereditary Elliptocytosis

- AD spectrin mutations; usually asymptomatic
- Hereditary pyropoikilocytosis (AR variant) — RBCs heat-sensitive

## G6PD Deficiency

- **X-linked**, most common RBC enzyme defect
- Mediterranean / African / Middle Eastern
- Crises with **bite cells + Heinz bodies**, intravascular haemolysis (dark urine)
- Triggers: drugs (**primaquine, sulfonamides, aspirin, dapsone, ciprofloxacin**), broad beans (favism), infection, mothballs
- Dx: enzyme assay 2-3 months after crisis (young RBCs may have enough enzyme)

## Pyruvate Kinase Deficiency

- AR; neonatal jaundice, splenomegaly, haemolytic anaemia`,
        },
        {
          id: "sickle_cell",
          name: "Sickle Cell Disease",
          content: `## Genetics

- AR; **single base mutation GAG→GTG, Glu→Val at codon 6 of β chain → HbS**
- **HbSS** = sickle cell anaemia (severe)
- **HbAS** = trait (asymptomatic except under stress)
- HbSC, HbS/β thalassaemia — variable severity

## Pathophysiology

- ↓ O₂ → HbS polymerisation → sickling
- Manifests at 3-6 months as HbF declines
- Sickled cells haemolyse + occlude microvasculature → infarction

## Features

**Haemolysis**: anaemia 60-80 g/L, splenomegaly (early), folate deficiency, gallstones, **aplastic crisis (parvovirus B19)**

**Vaso-occlusion (SICKLED)**:
- **S**troke
- **I**nfections (hyposplenism — encapsulated organisms; CKD)
- **C**rises (splenic sequestration, chest crisis, painful crisis)
- **K**idney (papillary necrosis, nephrotic)
- **L**iver (gallstones)
- **E**yes (retinopathy)
- **D**actylitis, mesenteric ischaemia, **priapism**, pulmonary HTN

## By age

- Child: strokes, splenic crises, dactylitis
- Teen: impaired growth, gallstones, priapism
- Adult: hyposplenism, CKD, retinopathy, pulm HTN, transfusion iron overload

## Diagnosis

Sickle + target cells on film, sickle solubility test, **Hb electrophoresis**, Guthrie test at birth

## Management

- **Acute crisis**: opioid analgesia; exchange transfusion in severe (chest crisis, stroke). *Top-up transfusions can worsen sickling unless Hb very low (<60).*
- **Chronic**: penicillin V prophylaxis, pneumococcal/HiB/meningococcal vaccines, folic acid
- **Hydroxycarbamide** (raises HbF) — reduces crises and organ damage
- Crizanlizumab (NICE-approved) — reduces painful crises
- Carotid Doppler in childhood with prophylactic exchange transfusion if turbulent flow
- Allogeneic SCT — curative (limited UK adult use; sibling donors in children)`,
        },
        {
          id: "thalassaemia",
          name: "Thalassaemias",
          content: `## β Thalassaemia

- Point mutations → ↓ β-chain synthesis; excess α chains precipitate
- **↑ HbA2 and HbF**
- Skull bossing, maxillary hypertrophy, **"hair-on-end" skull X-ray**, hepatosplenomegaly

| Phenotype | Genotype | Features |
| --- | --- | --- |
| Trait/minor | β⁺/β⁺ or β⁰/β⁺ | Asymptomatic carrier; HbA2 >3.5% |
| Intermedia | varies | Moderate anaemia, splenomegaly |
| **Major** | β⁰/β⁰ | Severe at 3-6 months, FTT, hepatosplenomegaly, HF |

## α Thalassaemia

Deletions of α genes (4 total, 2 from each parent).

- 1-2 deleted: trait, asymptomatic / mild anaemia
- 3 deleted: HbH disease — moderate anaemia, splenomegaly
- **4 deleted: Hb Bart's hydrops fetalis** — fatal in utero

## Diagnosis & Tx

- Hb electrophoresis (Guthrie at birth)
- Blood transfusions + **iron chelation (desferrioxamine)** to prevent overload
- Folic acid; monitor heart/liver iron`,
        },
        {
          id: "acquired_haemolysis",
          name: "Acquired Haemolytic Anaemias",
          content: `## Autoimmune (Coombs/DAT positive)

| Feature | Warm AIHA (commonest) | Cold agglutinin disease |
| --- | --- | --- |
| Temp | 37 °C | <37 °C |
| Ig | IgG | IgM |
| Film | spherocytes | Raynaud's, acrocyanosis |
| Causes | Idiopathic; lymphoma, CLL, SLE, **methyldopa** | Idiopathic; lymphoma, EBV, mycoplasma |
| Mx | Steroids, splenectomy, rituximab | Treat cause; avoid cold; chemo if lymphoma |

## Paroxysmal Cold Haemoglobinuria

- Usually post-viral (measles, syphilis, VZV)
- **Donath-Landsteiner antibodies** bind RBCs in cold → complement-mediated lysis on rewarming
- IgG (so dissociates at higher temp, self-limiting)

## Paroxysmal Nocturnal Haemoglobinuria (PNH)

- Acquired loss of GPI-anchored complement-protective surface markers
- Chronic intravascular haemolysis (worse at night), morning haemoglobinuria
- **Thrombosis (incl. Budd-Chiari) — characteristic**
- Dx: flow cytometry (loss of CD55/59) or Ham's test
- Tx: eculizumab (anti-C5)

## MAHA, TTP, HUS

Mechanical RBC destruction → **schistocytes**.

- **TTP**: anti-ADAMTS13 → unprocessed long vWF strands shred RBCs.
  - **Pentad**: MAHA, fever, renal impairment, neuro, thrombocytopenia
  - Emergency → **plasma exchange**
- **HUS**: classically Shiga-toxin *E. coli* O157:H7 → endothelial damage
  - Diarrhoea, AKI, MAHA, thrombocytopenia (no neuro)
  - Tx: supportive ± plasma exchange ± **eculizumab**
- DIC, pre-eclampsia/eclampsia also cause MAHA`,
        },
        {
          id: "haemostasis",
          name: "Haemostasis & Coagulation Cascade",
          content: `## Cascade essentials

- **Intrinsic** (APTT, monitors heparin): starts with **factor 12** → 11 → 9 → 8 → common
- **Extrinsic** (PT/INR, monitors warfarin): starts with **factor 7** → common
- **Common**: 5 → 10 → 2 (thrombin) → 1 (fibrin)

> Factor sequence mnemonic: each next factor starts with the **last letter** of previous (Twelve→Eleven→Nine→Eight)

## Inhibitors

- Tissue factor pathway inhibitor (TFPI), Protein C, Protein S, Antithrombin III

## Bleeding pattern by lesion

- **Vascular / platelet**: superficial — skin/mucosal, immediate after injury
- **Coagulation factor**: deep — muscles/joints, delayed but prolonged

## Test patterns

| Disorder | INR/PT | APTT | Plt | TT |
| --- | --- | --- | --- | --- |
| Heparin | N | ↑ | N (or ↓ in HIT) | ↑ |
| Warfarin / Vit K def | ↑ | ↑ | N | N |
| DIC | ↑ | ↑ | ↓ | ↑ |
| Liver disease | ↑ | ↑ | ↓ or N | ↑ or N |
| Haemophilia | N | ↑ | N | N |
| vWD | N | ↑ or N | N | N |`,
        },
        {
          id: "bleeding_disorders",
          name: "Bleeding Disorders",
          content: `## Vascular defects

- Congenital: Osler-Weber-Rendu (HHT), Ehlers-Danlos
- Acquired: senile purpura, infection (meningococcal, dengue), steroids, **scurvy** (perifollicular haemorrhage)

## Platelet disorders

- ↓ Function: aspirin, bypass, **uraemia**; storage pool disease, Glanzmann's thrombasthenia
- ↓ Number:
  - ↓ production — BM failure
  - ↑ destruction — ITP, drugs (HIT), DIC, HUS, TTP

## ITP

| | Acute | Chronic |
| --- | --- | --- |
| Age | Children 2-6 | Adults |
| F:M | 1:1 | 3:1 |
| Preceding infection | Yes | Rare |
| Plt at presentation | <20 | <50 |
| Course | 2-6 weeks, self-limiting | Long-term ± autoimmune association (CLL, HIV, hep) |
| Tx | Usually none | IVIg, steroids, IS, **TPO agonists**, splenectomy |

## Inherited coagulation disorders

- **Haemophilia A** — F8 deficiency, **X-linked recessive**, 1/10 000 males. ↑ APTT, factor VIII assay ↓. Tx: factor VIII (prophylaxis if severe). Avoid NSAIDs/IM injections.
- **Haemophilia B (Christmas)** — F9 deficiency, X-linked, 1/50 000 males. Tx: factor IX.
- **Von Willebrand's disease** — commonest inherited bleeding disorder (~1%); mostly AD
  - Type 1: low vWF; Type 2: dysfunctional vWF; Type 3: absent (haemophilia-like)
  - Mucocutaneous bleeding ± deep bleeding (type 3)
  - ↑ APTT, ↓ F8, ↓ vWF, **ristocetin co-factor**
  - Tx: tranexamic acid, **desmopressin** (releases vWF from Weibel-Palade bodies), vWF/F8 concentrate

## Acquired

- **DIC** — sepsis, malignancy, trauma, obstetric, toxins. ↓ plt, ↓ fibrinogen, ↑ FDP/D-dimer, ↑ PT/INR. Tx cause + FFP/cryo/plt.
- **Liver disease** — ↓ II, V, VII, IX, X, XI, fibrinogen; ↑ F8/vWF; ↓ vit K absorption. *Often pro-thrombotic despite ↑ INR.*
- **Vit K deficiency** — needed for II, VII, IX, X + Protein C/S. Causes: warfarin, malabsorption, antibiotics, biliary obstruction. Tx: IV vit K or FFP.`,
        },
        {
          id: "vte",
          name: "VTE & Anticoagulation",
          content: `## Risk factors (Virchow's triad)

| Inherited | Acquired |
| --- | --- |
| Antithrombin deficiency | Age, obesity, prior VTE |
| Protein C / S deficiency | Immobility, surgery, plaster |
| **Factor V Leiden** (5% Caucasians) | Long travel, malignancy (esp pancreas) |
| Prothrombin G20210A | Pregnancy, COCP, HRT |
| Lupus anticoagulant / APS | Polycythaemia, thrombocythaemia |

## Wells & investigation

- High Wells (>4) → US (DVT) or **CTPA** (PE)
- Intermediate → D-dimer; if ↑ → image
- Low → consider other diagnosis

## Heparin

- Potentiates antithrombin III (inhibits IIa, Xa, IXa, XIa)
- **LMWH**: SC OD, no monitoring (anti-Xa in pregnancy/RF)
- **UFH**: IV infusion in renal impairment; monitor APTT
- Antidote: **protamine sulphate**
- SEs: bleeding, **HIT** (more with UFH), osteoporosis (long-term)

## Warfarin

- Inhibits vitamin K epoxide reductase → ↓ II, VII, IX, X + Protein C/S
- Initial **pro-coagulant** state (Protein C/S ↓ first) → cover with LMWH
- Teratogen, skin necrosis, purple toes
- Reversal: IV vit K (6 h) or **prothrombin complex concentrate / Beriplex** (30 min); FFP if PCC unavailable
- Potentiated by: P450 inhibitors (amiodarone, ciprofloxacin), liver disease, cranberry juice, NSAIDs

## Target INR

| Indication | INR |
| --- | --- |
| First DVT/PE, AF, cardiomyopathy, mural thrombus | 2.5 (2-3) |
| Recurrent DVT/PE, **mechanical valve**, APS | 3.5 (2.5-3.5) |

## Raised INR

- 5-8, no bleed → withhold doses
- 5-8 with minor bleed → stop + IV vit K
- >8 → stop + oral/IV vit K
- **Major bleed → stop + PCC (Beriplex) + IV vit K**

## DOACs

- Dabigatran (direct thrombin) — antidote **idarucizumab**
- Rivaroxaban / apixaban (anti-Xa) — andexanet alfa (rare); usually PCC
- Half-life ~12 h: withholding may suffice for non-life-threatening bleeds`,
        },
        {
          id: "obstetric_haem",
          name: "Obstetric Haematology",
          content: `## Pregnancy changes

- ↑ plasma volume, RBC mass, MCV, WBC, factors VII/VIII/IX/X/XII
- ↓ Hb, Hct, platelets, factor XI, **protein S**

## HELLP syndrome

- **H**aemolysis, **E**levated **L**iver enzymes (↑↑ AST/ALT), **L**ow **P**latelets
- Complication of pre-eclampsia
- Differentials: DIC (↑ APTT/PT, ↓ fibrinogen), AFLP (marked transaminitis)
- Mx: supportive + **deliver fetus**

## Haemolytic Disease of Newborn (HDN)

- Issue in **second** pregnancy: RhD-negative mum sensitised in 1st pregnancy → IgG anti-D crosses placenta in 2nd if fetus RhD+
- Other Abs: anti-c, anti-K, IgG ABO

## Anti-D prophylaxis

- IM anti-D Ig at 28 + 34 weeks (routine)
- Plus any sensitising event (TOP, miscarriage, ECV, amniocentesis, abdo trauma)
- At delivery if baby RhD+
- **Always transfuse RhD-negative blood to RhD-negative women of childbearing age**`,
        },
        {
          id: "acute_leukaemia",
          name: "Acute Leukaemia (ALL & AML)",
          content: `## Definitions

- **Acute leukaemia**: blast cells **>20%** of BM
- Clinical features driven by:
  - BM failure: anaemia, neutropenia (infection), thrombocytopenia (bleeding)
  - Organ infiltration: hepatosplenomegaly, lymphadenopathy, bone pain, CNS, skin, **gum hypertrophy** (AML M4/5)

## Aetiology

- Idiopathic, ionising radiation, cytotoxics
- MDS / MPD progression
- **Down syndrome** — ↑ AML & ALL (AML > ALL); neonates may have transient abnormal myelopoiesis (TAM) that resolves

## Diagnosis pipeline

1. Morphology + cytochemistry
2. **Immunophenotyping** (flow cytometry — lineage markers)
3. Cytogenetics (translocations)
4. Molecular (PCR, mutations)

## ALL vs AML

| | **ALL** | **AML** |
| --- | --- | --- |
| Age | Children ("get it ALL") | Adults; infant peak |
| Lymphadenopathy | +++ | Less common |
| CNS involvement | +++ | Less |
| Other features | Testicular, thymic mediastinal mass | M3 — APL, DIC; M4/5 — gum/skin, ↓K |
| Blasts | High WCC, blebs | **Auer rods**, MPO+ |
| Markers | CD34 (stem), CD3/4/8 (T), CD19/20/22 (B) | CD34, CD33, CD13, CD117, MPO |
| Tx | Induction + consolidation + CNS prophylaxis + maintenance (girls 2y, boys 3y) | Daunorubicin + cytarabine; older: azacitidine ± venetoclax |
| Targeted | Imatinib (Ph+), nelarabine, blinatumomab, CAR-T | **ATRA in M3 APL**; midostaurin (FLT3); gemtuzumab (CD33); enasidenib (IDH) |

## Key cytogenetics

- **t(9;22) BCR-ABL1 (Philadelphia)** — ALL (poor) & CML
- t(4;11) KMT2A — ALL
- High hyperdiploidy — ALL (good prognosis)
- **t(15;17) — APL (M3)**, very prone to **DIC**, treated with **ATRA**
- t(8;21), inv(16) — favourable AML
- TP53, –5/–7, MECOM — adverse AML`,
        },
        {
          id: "cml",
          name: "Chronic Myeloid Leukaemia (CML)",
          content: `## Key facts

- Myeloproliferative disease, age 40-60
- Often incidental on routine bloods (high differentiated neutrophils)
- "Massive splenomegaly" is the exam buzz phrase
- **Philadelphia chromosome (Ph) t(9;22) BCR-ABL1** in 80%
- High WBC with ↑ neutrophils + **basophils** (rare to see ↑ basophils)

## Stages

| Stage | Blasts | Treatment |
| --- | --- | --- |
| Chronic | <5% | **Imatinib** (BCR-ABL TKI) — 95% remission |
| Accelerated | 10-20% | Less responsive |
| Blast | >20% | Treat as AML; allo-SCT in young |

## Monitoring

- Quantitative PCR for BCR-ABL transcript levels`,
        },
        {
          id: "cll",
          name: "Chronic Lymphocytic Leukaemia (CLL)",
          content: `## Key facts

- Lymphoproliferative disorder; CLL (BM) ≡ SLL (LNs)
- Elderly; M > F
- 80% incidental — high WBC, lymphocytosis (>5)
- Symmetrical painless lymphadenopathy, BM failure, FLAWS, hepatosplenomegaly
- **Evan's syndrome** — AIHA + ITP
- **Richter's transformation** — to aggressive large B-cell lymphoma

## Investigations

- ↓ serum Ig
- Flow cytometry: monoclonal **CD5+ CD23+** B cells
- **Smear cells** on blood film
- Mutation status: **TP53 worse**, **IGHV unmutated worse**

## Binet staging

- A: <3 lymphoid groups, no anaemia/thrombocytopenia — usually no treatment
- B: ≥3 groups
- C: anaemia or thrombocytopenia

## Treatment

- Watchful waiting if asymptomatic
- Anti-CD20 (rituximab/obinutuzumab) + chemo
- BTK inhibitor (**ibrutinib**)
- BCL2 inhibitor (**venetoclax**)`,
        },
        {
          id: "hodgkins",
          name: "Hodgkin's Lymphoma",
          content: `## Key facts

- 20% of lymphomas; bimodal age (20-29 and >60); M > F
- **EBV associated**
- Spreads contiguously to adjacent LN groups; mediastinal/cervical
- Asymmetrical painless lymphadenopathy
- **B symptoms**: fever (Pel-Ebstein cyclical 1-2 wk), drenching night sweats, weight loss >10% in 6 m
- **Pain in nodes after alcohol** — classic

## Investigations

- CT/PET; LN or BM biopsy
- **Reed-Sternberg cells** — bi/multinucleate ("owl-eyed"), CD15+ CD30+
- Subtypes (classical 95%): nodular sclerosing > mixed cellularity > lymphocyte rich > lymphocyte depleted
- Non-classical: nodular lymphocyte predominant

## Ann Arbor Staging

- 1: one LN region (incl. spleen)
- 2: ≥2 regions, same side of diaphragm
- 3: ≥2 regions, opposite sides
- 4: extranodal (liver, BM)
- A no symptoms, B symptoms

## Treatment

- **ABVD** (Adriamycin, bleomycin, vinblastine, dacarbazine) — 2-4 cycles stage 1/2; 6 cycles stage 3/4
- ± radiotherapy in bulky disease (↑ breast cancer risk in young women)
- Relapse: brentuximab (anti-CD30), pembrolizumab/nivolumab (checkpoint), auto/allo-SCT

> Excellent prognosis especially in young patients.`,
        },
        {
          id: "nhl",
          name: "Non-Hodgkin's Lymphoma",
          content: `## Overview

- 80% of lymphomas, dozens of subtypes
- High grade = aggressive but **easier to cure**; low grade = indolent but often incurable
- Painless lymphadenopathy, multiple sites, FLAWS
- **No alcohol-induced pain** (unlike Hodgkin's)

## B-cell NHL — high grade

- **Burkitt's** — t(8;14) c-myc; "starry sky" (macrophages with debris)
  - Endemic (equatorial Africa, EBV+, jaw)
  - Sporadic (EBV+, abdominal)
  - Immunodeficiency (HIV, post-transplant)
  - Tx: chemo + rituximab + CNS prophylaxis
- **DLBCL** — middle aged/elderly; can transform from low grade. Tx: **R-CHOP** (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisolone). CAR-T or auto-SCT for relapse.
- **Mantle cell** — t(11;14) cyclin D1; angular/clefted nuclei; aggressive but median survival 3-5 yrs. R-CHOP + cytarabine.

## B-cell NHL — low grade

- **Follicular** — t(14;18); "follicular pattern"; indolent, mostly incurable, median survival 12-15 yrs. Watch and wait or R-chemo.
- **MALT (marginal zone)** — chronic antigen stimulation:
  - **H. pylori → gastric MALT** (eradication may cure)
  - Sjögren's → parotid lymphoma

## T-cell NHL (rarer)

- **Anaplastic large cell** — children/young adults, t(2;5), ALK-1
- Adult T-cell leukaemia/lymphoma — Caribbean/Japan, **HTLV-1**
- Enteropathy-associated (EATL) — long-standing **coeliac**
- Cutaneous T-cell — mycosis fungoides
- Rx: alemtuzumab (anti-CD52) sometimes

## Key translocations

- **Burkitt's t(8;14)**
- **Mantle cell t(11;14)**
- **Follicular t(14;18)**
- **Anaplastic large cell t(2;5)**`,
        },
        {
          id: "myeloma",
          name: "Multiple Myeloma & Paraproteinaemias",
          content: `## Multiple Myeloma

Neoplasia of plasma cells in BM producing monoclonal Ig (paraprotein, **IgG most common**). Middle-aged/elderly; ↑ in Afro-Caribbeans.

### CRAB

- **C**alcium ↑ — myeloma cells release IL-1 → osteoclast activation
- **R**enal failure — light chains in tubules; AL amyloidosis; nephrotic
- **A**naemia + pancytopenia
- **B**ones — pain, osteoporosis, **lytic lesions ("pepper-pot skull"), pathological fractures, wedge compression**, hyperviscosity

### Investigations

- **Serum protein electrophoresis** — dense narrow band in gamma region (IgG/A/M/D/E + κ or λ)
- **Bence Jones protein** in urine (free light chains)
- Blood film: **rouleaux**
- ↑↑ ESR
- **>10% plasma cells in BM**
- CT/MRI whole body for bone lesions (replaces skeletal survey)

### Diagnosis criteria

| | MGUS | Smouldering MM | Multiple Myeloma |
| --- | --- | --- | --- |
| M-spike | <30 g/L | >30 g/L | >30 g/L OR FLC ratio >100 |
| BM plasma cells | <10% | >10% | Any clonal (≥60% diagnostic alone) |
| CRAB / organ damage | None | None | ≥1 (or hyperviscosity, hypogammaglobulinaemia, occult bone disease) |
| Tx? | None | None | Yes |

### Treatment

- Supportive: bisphosphonates, hydration, EPO, transfusion
- First line: **bortezomib + dex + cyclo + lenalidomide**
- **Auto-SCT** in remission (best for younger pts — prolongs remission)
- Not curable; survival 5-7 yrs (improving with novel agents: daratumumab anti-CD38)

## Waldenström's macroglobulinaemia (LPL)

- Elderly men; low-grade NHL with **monoclonal IgM**
- Hyperviscosity (visual, confusion, CCF, weakness), Raynaud's
- Tx: **plasmapheresis** for hyperviscosity; rituximab/bendamustine/ibrutinib

## AL Amyloidosis

- Misfolded light chains deposit in tissues — with or without overt myeloma
- **Abnormal κ:λ light chain ratio**
- **Congo red stain → apple-green birefringence** under polarised light
- Features: macroglossia, carpal tunnel, peripheral neuropathy, HF, RF
- SAP scan (Royal Free)
- Tx similar to myeloma`,
        },
        {
          id: "mds",
          name: "Myelodysplastic Syndromes",
          content: `## Definition

Heterogeneous progressive disorders: ineffective proliferation + abnormal maturation of myeloid stem cells.

- Cytopenia despite **hypercellular** marrow
- Risk of AML transformation
- Elderly, indolent presentation
- **<20% blasts** by definition (>20% = acute leukaemia)

## Features

- Defective cells:
  - RBCs: ring sideroblasts (iron-loaded mitochondria around nucleus)
  - WBCs: hypogranulation, **pseudo-Pelger-Huët anomaly**
  - Platelets: micromegakaryocytes, hypolobated nuclei

## Subtypes (simplified)

- RA / RA + RS (refractory anaemia ± ring sideroblasts)
- RCMD (refractory cytopenia, multilineage dysplasia)
- RAEB-1 (5-9% blasts) / RAEB-2 (10-19% blasts)
- **MDS with 5q deletion** — anaemia + ↑/N platelets, hypolobated megakaryocytes (good prognosis, lenalidomide-responsive)

## Treatment

- Supportive: transfusions, EPO, G-CSF, antibiotics
- Lenalidomide (esp. 5q–), azacitidine
- Chemotherapy similar to AML
- **Allogeneic SCT** — only curative

## Prognosis (IPSS)

Rule of thirds: 1/3 die from infection, 1/3 bleeding, 1/3 acute leukaemia.`,
        },
        {
          id: "aplastic",
          name: "Aplastic Anaemia & BM Failure Syndromes",
          content: `## Aplastic Anaemia

BM cannot produce adequate blood cells; **hypocellular** marrow on trephine. Closely linked to **leukaemia and PNH**.

- Primary: idiopathic (70%), inherited (10%)
- Secondary: malignant infiltration, radiation, drugs (chemo), viruses, autoimmune (SLE)
- Tx: supportive, immunosuppression (idiopathic), oxymetholone, allogeneic SCT

## Inherited BM failure

- **Fanconi anaemia** — AR; pancytopenia at 5-10 y; skeletal (radii, thumbs), short stature, skin pigmentation, MDS/AML risk
- **Dyskeratosis congenita** — X-linked; telomere shortening; **skin pigmentation + nail dystrophy + oral leukoplakia (triad)** + BM failure
- **Schwachman-Diamond** — AR; neutropenia, exocrine pancreatic dysfunction, skeletal abnormalities, AML risk
- **Diamond-Blackfan** — pure red-cell aplasia (normal WCC/plt) at 1 yr; dysmorphic`,
        },
        {
          id: "mpd",
          name: "Myeloproliferative Disorders (Ph–)",
          content: `## Overview

Clonal proliferation of one+ haemopoietic lineage, **producing mature cells**.

| **Ph+** | **Ph–** |
| --- | --- |
| CML | PRV, Myelofibrosis, Essential Thrombocythaemia |

- Ph– associated with **JAK2 V617F** (>95% in PRV; ~50% MF/ET)
- All have risk of progression to MF / acute leukaemia

## Polycythaemia Rubra Vera (PRV)

- Erythroid precursors dominate; **JAK2 V617F**
- **Hyperviscosity + histamine**: red plethoric face, headache, blurred vision, **aquagenic pruritus** (water itch), **erythromelalgia**, gout, thrombosis/stroke, splenomegaly
- ↑ Hb/Hct ± ↑ plt/WCC; **low EPO**
- Tx: **venesection**, hydroxycarbamide, aspirin

> Differentiate from secondary polycythaemia (high EPO from chronic hypoxia, renal Ca, altitude) and relative/pseudo-polycythaemia (↓ plasma volume from dehydration, smoking).

## Myelofibrosis

- Marrow fibrosis / collagen replacement (primary or post-PRV/ET)
- Elderly, pancytopenia, **massive splenomegaly + extramedullary haematopoiesis** (hepatomegaly), Budd-Chiari risk
- Film: **tear-drop poikilocytes** (dacrocytes), leucoerythroblastic
- BM "dry tap" + JAK2/MPL mutations
- ↑ urate, LDH
- Tx: ruxolitinib (JAK inhibitor); allo-SCT only curative

## Essential Thrombocythaemia

- Megakaryocyte dominance; 50% JAK2 (also CALR, MPL)
- Plt >600 ×10⁹; thrombosis (stroke, MI), erythromelalgia, splenomegaly, headaches
- Tx: aspirin, hydroxycarbamide, **anagrelide** (↓ megakaryocyte → platelet step)`,
        },
        {
          id: "sct",
          name: "Stem Cell Transplant",
          content: `## Sources

- **Peripheral blood** (post G-CSF)
- Bone marrow
- Umbilical cord blood

## Auto-SCT vs Allo-SCT

| | Autologous | Allogeneic |
| --- | --- | --- |
| Source | Patient's own | HLA-matched donor |
| GVHD risk | None | Yes |
| Graft-vs-leukaemia | None | **Yes** (immune rejection of residual disease) |
| Used for | **Myeloma**, lymphoma (esp. relapse) | **Leukaemia** mainly |
| Risks | Lower infection | Opportunistic infection, infertility, secondary malignancy |`,
        },
        {
          id: "transfusion",
          name: "Blood Transfusion & Reactions",
          content: `## Thresholds (asymptomatic)

- **Hb <70 g/L** — transfuse
- 80 g/L if symptomatic
- 90-100 g/L in coronary artery disease

## Storage

- **Red cells** — 4 °C, 35-day shelf life
- **Platelets** — 22 °C, 7-day shelf life
- FFP — frozen; needs 30 min to thaw
- Cryoprecipitate — fibrinogen-rich

## When to transfuse platelets

- <10 ×10⁹/L (20 in sepsis)
- Higher thresholds pre-procedure (eye/brain highest)
- **Don't transfuse in TTP, HIT, ITP unless actively bleeding** (consumption / immune destruction)

## Transfusion Reactions

### Acute (<24 h)

- **ABO incompatibility** — IgM-mediated intravascular haemolysis, minutes-hours; **wrong blood**
- **Anaphylaxis** — IgE; minutes; risk in **IgA deficiency**
- **Bacterial contamination** — minutes-hours; commoner with platelets (room temp)
- **Febrile non-haemolytic** — ≤1 °C rise from cytokines; prevent with **leukodepletion**; Tx slow + paracetamol
- **TACO** (transfusion-associated circulatory overload) — fluid overload, raised JVP/PCWP
- **TRALI** (transfusion-related acute lung injury) — fever, ARDS-like, anti-WBC Abs in donor; **no HF signs**

### Delayed (>24 h)

- **Delayed haemolytic** — IgG-mediated extravascular haemolysis, ~1 week
- **Post-transfusion purpura**
- **Transfusion-associated GVHD** — donor lymphocytes attack gut/liver/skin/BM; prevent with **irradiated** components for immunosuppressed
- **CMV** — leukodepletion ± CMV-negative for pregnant women
- **Iron overload** — chronic recipients (e.g. thalassaemia)`,
        },
      ],
    },

    // =========================================================================
    {
      id: "chemical",
      name: "Chemical Pathology",
      icon: "⚗️",
      topics: [
        {
          id: "fluid_compartments",
          name: "Fluid Compartments & Osmolality",
          content: `## 60-40-20 rule (70 kg male)

- **60% body weight = water**
- 40% body weight = intracellular (28 L)
- 20% body weight = extracellular (14 L)
  - Interstitial 24% of TBW
  - **Intravascular 5% of TBW**
  - Transcellular 3% (CSF, joint, urine, aqueous)

> Females have less water/kg (more fat).

## Osmolality vs osmolarity

- **Osmolality** = particles per kg solvent — **measured** by osmometer (mmol/kg)
- **Osmolarity** = particles per L solution — **calculated**

\`Osmolarity = 2(Na + K) + urea + glucose\`

## Osmolar gap

\`Osmolar gap = osmolality measured − osmolarity calculated\` (normal <10)

- ↑ in unmeasured solutes: ethanol, methanol, ethylene glycol, mannitol, ketones, lactate, advanced CKD
- Useful in metabolic acidosis to find toxic alcohols

## SIADH normal range

Normal serum osmolality 275-295 mmol/kg.`,
        },
        {
          id: "hyponatraemia",
          name: "Sodium: Hyponatraemia",
          content: `## Severity by symptoms

The clinical picture worsens as sodium falls:

- Below 134 mmol/L the patient develops nausea and vomiting.
- Below 131 mmol/L confusion appears.
- Below 125 mmol/L the patient is at risk of seizures and non-cardiogenic pulmonary oedema.
- Below 117 mmol/L coma develops.

A patient with chronic asymptomatic hyponatraemia even in the 110s is rarely a true emergency, because the brain has had time to compensate by extruding intracellular solutes. In this situation, correcting the sodium too fast is more dangerous than leaving it where it is.

## Step 1: measure serum osmolality

The first step is to confirm whether the hyponatraemia is real or an artefact of the laboratory measurement.

| Osmolality | Interpretation |
| --- | --- |
| **High** | Glucose or mannitol is osmotically pulling water out of cells, diluting the sodium. Common in hyperosmolar hyperglycaemic state. |
| **Normal** | **Pseudohyponatraemia** caused by hyperlipidaemia or paraproteinaemia (the analyser falsely reads the protein/lipid volume as water), or contamination from a drip-arm sample. |
| **Low** | True hyponatraemia. Continue to step 2. |

## Step 2: assess hydration status and urinary sodium

In true hyponatraemia, the next step is to classify the patient as hypovolaemic, euvolaemic, or hypervolaemic and to measure urinary sodium. Diuretics interfere with urinary sodium and should be stopped before the sample is taken.

| Volume status | Urinary sodium | Causes |
| --- | --- | --- |
| **Hypovolaemic** | Greater than 20 mmol/L (renal loss) | Diuretics, Addison's disease, salt-losing nephropathy |
| | Less than 20 mmol/L (non-renal loss) | Vomiting, diarrhoea, excessive sweating, third-space losses such as ascites or burns |
| **Euvolaemic** | Greater than 20 mmol/L | **Syndrome of inappropriate antidiuretic hormone secretion (SIADH)**, severe hypothyroidism, glucocorticoid deficiency |
| **Hypervolaemic** | Greater than 20 mmol/L (renal) | Acute kidney injury, chronic kidney disease |
| | Less than 20 mmol/L (non-renal) | **Cardiac failure, cirrhosis**, inappropriate intravenous fluids |

## Transurethral resection of prostate (TURP) syndrome

During transurethral resection of the prostate, glycine 1.5% irrigation fluid can be absorbed through the damaged prostatic vessels. The result is a dilutional hyponatraemia compounded by the systemic effects of glycine metabolism.

## Management

- In **hypovolaemic** hyponatraemia, treat the underlying cause (for example with antiemetics) and replace the depleted fluid slowly, rechecking sodium regularly to ensure it is not rising too fast.
- In **euvolaemic** hyponatraemia, treat the underlying cause: levothyroxine for hypothyroidism, hydrocortisone with or without fludrocortisone for Addison's, and follow the SIADH protocol if SIADH is the cause.
- In **hypervolaemic** hyponatraemia, restrict fluid intake with or without diuresis. Cirrhosis usually requires specialist input.

## Speed of correction

The serum sodium must not be allowed to rise by more than 8 to 10 mmol/L per 24 hours. If the rate of correction is faster than this, the patient is at risk of **osmotic demyelination syndrome (central pontine myelinolysis)**, which causes pseudobulbar palsy, paraparesis, and at worst a locked-in syndrome. Malnourished alcoholics are at particularly high risk.

Hypertonic (3%) saline is reserved for exceptional circumstances such as a patient in status epilepticus secondary to severe hyponatraemia. It should only be given on specialist advice and is usually administered in an intensive care setting.`,
        },
        {
          id: "siadh",
          name: "SIADH",
          content: `## Diagnostic criteria

- True hyponatraemia (<135) + low plasma osmolality (<270)
- **High urine Na >20** + high urine osmolality (>100)
- Clinically euvolaemic
- Normal renal/adrenal/thyroid (i.e. **diagnosis of exclusion** — needs normal 9 am cortisol + TFTs)

## Causes

- **Malignancy**: small-cell lung Ca (commonest), pancreas, prostate, lymphoma
- CNS: meningoencephalitis, haemorrhage, abscess
- Chest: TB, pneumonia, abscess
- Drugs: opiates, **SSRIs, TCAs, carbamazepine, PPIs**

## Treatment

- Fluid restriction + treat cause
- Demeclocycline / **tolvaptan** induce nephrogenic DI to offload water
- Slow IV 3% saline if severe (specialist)`,
        },
        {
          id: "hypernatraemia",
          name: "Hypernatraemia & DI",
          content: `## Hypernatraemia

Plasma Na >148 mmol/L. Usually iatrogenic in hospital; thirst normally protects → ask why patient can't drink.

- Symptoms: thirst → confusion → seizures → coma
- **Rapid correction → cerebral oedema**

| Volume | Cause |
| --- | --- |
| Hypovolaemic (commonest) | GI/skin loss; loop diuretics; osmotic diuresis (DKA, mannitol); DI; renal disease |
| Euvolaemic | Tachypnoea, fever, sweating, **DI** |
| Hypervolaemic | Conn's, inappropriate saline |

## Diabetes Insipidus

- Polyuria, polydipsia; clinically euvolaemic
- Urine:plasma osmolality <2 (urine inappropriately dilute)

### Cranial DI

- Lack of ADH production
- Causes: surgery, trauma, **craniopharyngioma**, autoimmune hypophysitis (CTLA-4 ipilimumab)
- Tx: **desmopressin**

### Nephrogenic DI

- Receptor insensitivity to ADH
- Causes: inherited; **lithium, demeclocycline**; **hypokalaemia, hypercalcaemia**
- Tx: thiazide diuretics

### Workup

1. Glucose (rule out DM)
2. K (rule out hypokalaemia)
3. Ca (rule out hypercalcaemia)
4. Plasma + urine osmolality
5. **8-h water deprivation test → desmopressin**:
   - Normal: urine concentrates >600 (U:P >2)
   - Cranial DI: concentrates >600 only **after** desmopressin
   - Nephrogenic DI: no response even after desmopressin
   - Primary polydipsia: partial concentration (400-600)`,
        },
        {
          id: "potassium",
          name: "Potassium: Hypo & Hyperkalaemia",
          content: `## Hypokalaemia (<3.5)

- GI loss (V&D)
- Renal loss: **hyperaldosteronism** (Conn's), thiazides, loops, osmotic diuresis
- Redistribution: insulin, β-agonists, **alkalosis**, refeeding
- Rare: RTA types 1 & 2, hypomagnesaemia
- Symptoms: weakness, arrhythmias, polyuria (nephrogenic DI)
- Tx:
  - 3.0-3.5 → oral KCl (Sando-K 2 tabs TDS for 48 h)
  - <3.0 → **IV KCl, max 10 mmol/h** peripheral (central if faster)
- Investigation tip: **aldosterone:renin ratio** — high suggests Conn's

## Renal Tubular Acidosis

- **Type 1 (distal)** — failure of H+ excretion → severe metabolic acidosis + hypokalaemia
- **Type 2 (proximal)** — failure of HCO₃ reabsorption → milder acidosis + hypokalaemia
- **Type 4** — aldosterone deficiency/resistance → **hyperkalaemic** acidosis

## Hyperkalaemia (>5.5)

- Less common but more dangerous
- Causes:
  - Artefact: haemolysis, EDTA contamination
  - Excess intake (iatrogenic, stored blood)
  - Movement out of cells: acidosis, **DKA insulin shortage**, rhabdomyolysis
  - ↓ excretion: AKI, late CKD; **K-sparing diuretics, NSAIDs, ACEi/ARBs**; **Addison's**; type 4 RTA

## ECG progression

1. Loss of P waves
2. Tall tented T waves
3. Wide QRS
4. **Sine wave**

## Treatment

Treat if K >5.5 with ECG changes OR K >6.5 regardless.

1. **10 mL 10% calcium gluconate** IV — cardioprotective (does NOT lower K)
2. **100 mL 20% dextrose + 10 U Actrapid** — drives K into cells
3. Nebulised salbutamol (adjunct)
4. Calcium resonium PO/PR — binds gut K
5. Treat cause

> Care with **digoxin** + IV calcium — risk of arrhythmia; cardiac monitor.

> **H+ and K+ co-transport**: pH ↓ 0.1 → K ↑ 0.7. High Na + low K → think Conn's; low Na + high K → think Addison's.`,
        },
        {
          id: "acid_base",
          name: "Acid-Base & Anion Gap",
          content: `## Reference values

- pH 7.35-7.45 · CO₂ 4.7-6 kPa · HCO₃ 22-30 · O₂ 10-13 kPa

## Compensation patterns

| | pH | PCO₂ | HCO₃ | Compensation |
| --- | --- | --- | --- | --- |
| Metabolic acidosis | ↓ | ↓ | ↓ | Hyperventilation (immediate) |
| Metabolic alkalosis | ↑ | ↑ | ↑ | Hypoventilation |
| Respiratory acidosis | ↓ | ↑ | ↑ | ↑ renal HCO₃ reabsorption (delayed) |
| Respiratory alkalosis | ↑ | ↓ | ↓ | ↓ renal HCO₃ reabsorption (delayed) |

## Anion gap

\`AG = (Na + K) − (Cl + HCO₃)\` · normal 14-18

Largely contributed by **albumin** (correct in hypoalbuminaemia).

### High anion gap acidosis — **KULT**

- **K**etoacidosis (DKA, alcoholic, starvation)
- **U**raemia (renal failure)
- **L**actic acidosis (shock, ischaemia, sepsis)
- **T**oxins (ethylene glycol, methanol, salicylate, paraldehyde)

> Also: aspirin, biguanides (metformin)

### Normal anion gap acidosis

- Diarrhoea (small bowel HCO₃ loss)
- Acetazolamide
- High output stoma, pancreatic fistula
- **Renal tubular acidosis**
- Addison's, ammonium chloride

## Causes of metabolic alkalosis

- **Vomiting** (H+ loss), bulimia
- **Loop diuretics** (K depletion)
- Conn's, antacid abuse, burns

## Causes of respiratory acidosis (T2RF)

- COPD (commonest), opioids, sedatives, neuromuscular weakness
- *Normal/high PaCO₂ in asthma is worrying — exhaustion, ITU*

## Causes of respiratory alkalosis

- Hyperventilation: stroke, SAH, meningitis, asthma, anxiety, PE, pregnancy, altitude, **early salicylate poisoning** (brainstem stimulation)`,
        },
        {
          id: "lfts",
          name: "Liver Function Tests",
          content: `## Best marker of acute liver function

**Prothrombin time** (short half-life clotting factors).

## Patterns

- **Transaminitis in 1000s**: acute viral hepatitis, paracetamol, ischaemic hit
- **AST > ALT**:
  - Ratio >2:1 → alcohol
  - 1:1 → viral hepatitis
- **ALT > AST**: chronic liver disease (NASH), chronic hep C, advanced fibrosis (when AST:ALT >0.8 absent EtOH)
- **Cholestatic**: ↑ ALP + GGT (GGT confirms hepatic origin of ALP)

## ALP causes — **BLIP**

**B**one, **L**iver, **I**ntestine, **P**lacenta.

- Physiological: 3rd trimester pregnancy; childhood growth spurt
- >5× ULN: Paget's, osteomalacia, cholestasis, cirrhosis
- <5× ULN: bone tumours/fractures/osteomyelitis; infiltrative liver disease, hepatitis
- **Caveat: ALP normal in myeloma** (plasma cells suppress osteoblasts)

## Synthetic markers

- **Albumin** ↓: chronic liver disease, malnutrition, PLE, nephrotic, sepsis (3rd-spacing)
- **Urea** ↓: severe liver disease, malnutrition, pregnancy
- **Urea ↑↑×10**: upper GI bleed (or large protein meal); also dehydration/AKI

## Other

- ↑ GGT: chronic alcohol, biliary disease, metastases`,
        },
        {
          id: "jaundice",
          name: "Jaundice",
          content: `## Bilirubin metabolism

Heme → unconjugated bilirubin (albumin-bound) → conjugated in liver → bile → gut → urobilinogen → partial reabsorption + stercobilin (faecal pigment).

## Classification

| | Pre-hepatic | Hepatic | Post-hepatic |
| --- | --- | --- | --- |
| Causes | Haemolysis, ineffective erythropoiesis (thalassaemia), CCF | Hepatocellular (viral, alcoholic) · Conjugation defect (Gilbert, Crigler-Najjar) | Obstruction: stones, strictures, tumour, PBC, PSC, pancreas Ca |
| Conjugated BR | Absent | ↑↑ | ↑↑ |
| Unconjugated BR | ↑↑ | ↑↑ | Normal |
| Urobilinogen | N/↑ | ↑↑ | ↓/Absent |
| Urine bilirubin | Absent | Present | Present |
| Urine | Normal | Dark | Dark |
| Stool | Normal | Pale | Pale |
| AST/ALT | N | ↑↑ | ↑ |
| ALP | N | N/↑ | ↑↑ |
| Splenomegaly | Yes | Yes | No |

## Hepatomegaly clues

- **Smooth**: viral hepatitis, biliary obstruction, hepatic congestion (HF, Budd-Chiari)
- **Craggy**: metastases, polycystic, cirrhosis (often shrinks)`,
        },
        {
          id: "porphyria",
          name: "Porphyrias",
          content: `## Acute porphyrias — **5 Ps**

**P**ainful abdomen · **P**eripheral neuropathy · **P**sychosis · **P**ort urine · **P**recipitants

## Acute Intermittent Porphyria (HMB synthase deficiency)

- AD, the classic acute porphyria
- **Neurovisceral attacks ONLY — no skin lesions**:
  - Abdominal pain, vomiting, constipation
  - Polyneuropathy, seizures
  - Bladder dysfunction, **port-wine urine**
  - Tachycardia, hypertension (autonomic)
  - Hallucinations, anxiety
- Dx: ↑ urinary PBG and ALA
- **Mx: IV haem arginate** + IV carbohydrate; avoid attacks
- Precipitants: ALA synthase inducers (steroids, ethanol, **barbiturates**), stress, ↓ calorie intake, premenstrual

## Hereditary coproporphyria / Variegate porphyria

- Acute attacks **with skin lesions** (blistering, photosensitivity)
- ↑ urine/stool porphyrins + urinary PBG

## Non-acute porphyrias

- **Porphyria cutanea tarda** — uroporphyrinogen decarboxylase, **most common**. Vesicles + scarring on sun-exposed skin. Often ↑ ferritin + abnormal LFTs. Pink-red urine fluorescence under Wood's lamp.
- Erythropoietic protoporphyria — non-blistering, photosensitivity`,
        },
        {
          id: "pituitary",
          name: "Pituitary",
          content: `## Hypothalamic-pituitary axis

| Hypothalamus | Effect | Pituitary |
| --- | --- | --- |
| GHRH | + | GH |
| GnRH | + | LH/FSH |
| TRH | + | TSH, prolactin |
| **Dopamine** | **−** | **Prolactin** |
| CRH | + | ACTH |

## Combined Pituitary Function Test

Insulin (induces hypoglycaemia → ↑ ACTH/GH), TRH (→ ↑ TSH/prolactin), LHRH (→ ↑ LH/FSH).

- Adequate cortisol response: rise >170 nmol/L to a peak >500
- Adequate GH response: rise >6 µg/L
- Contraindications: IHD, epilepsy, untreated hypothyroid

## Tumours

- Microadenoma <10 mm; macroadenoma >10 mm
- **Bitemporal hemianopia** if compresses optic chiasm
- **Stalk effect**: non-functioning adenoma compresses stalk → moderate prolactin rise (loss of dopamine)

## Prolactinaemia interpretation

| Prolactin | Cause |
| --- | --- |
| <1000 mIU/L | Stress, breast/vaginal exam, hypothyroid, PCOS |
| 1000-5000 | Hypothalamic tumour, **non-functioning pituitary** (stalk), microprolactinoma, drugs (domperidone, phenothiazines) |
| **>5000** | **Macroprolactinoma** |

## Prolactinoma

- Tx: dopamine agonists (**cabergoline**, bromocriptine); transsphenoidal if no response

## Acromegaly

- **OGTT — gold standard** (failure of GH suppression); IGF-1 useful for follow-up
- ↑ glucose, calcium, phosphate
- Tx: transsphenoidal surgery > pituitary RT; cabergoline; **octreotide** (somatostatin analogue); pegvisomant (GH antagonist)

## Diabetes insipidus

See sodium section.`,
        },
        {
          id: "thyroid",
          name: "Thyroid: TFTs, hyper/hypothyroid",
          content: `## TFT patterns

| TSH | T4 | Interpretation |
| --- | --- | --- |
| ↑ | ↓ | **Primary hypothyroidism** |
| ↑ | N | Treated / subclinical hypothyroid |
| ↑ | ↑ | TSH-secreting tumour or thyroid hormone resistance |
| ↓ | ↑ | **Primary hyperthyroidism** |
| ↓ | N | Subclinical hyper |
| ↓ | ↓ | **Secondary hypothyroid** (pituitary/hypothalamic) |
| ↑(later ↓) | ↓ T3, T4 | **Sick euthyroidism** |
| N | abnormal T4 | Assay interference, TBG changes, **amiodarone** |

## Hyperthyroidism causes

### High uptake

- **Graves'** (40-60%, F:M 9:1) — anti-TSH receptor Abs, painless goitre, **diffuse high uptake**
- **Toxic multinodular goitre (Plummer's)** (30-50%) — multiple hot nodules
- Toxic adenoma (5%) — solitary hot nodule

### Low uptake

- **Subacute De Quervain's thyroiditis** — post-viral, painful, hyper → hypo → euthyroid (self-limiting)
- Postpartum thyroiditis (similar to De Quervain's, postpartum)
- Ectopic: trophoblastic tumour, **struma ovarii** (excess hCG)

## Treatment of hyperthyroid

- Symptom relief: β-blockers; eye drops/topical steroids in Graves
- **Carbimazole** (titration or block & replace) — SE **agranulocytosis**, rashes
- Radioiodine — risk of permanent hypothyroid; CI in pregnancy/lactation
- Surgery if compressive, suspected cancer, refractory, planning pregnancy <6 m

## Thyroid storm

Pyrexia, confusion, vomiting, shock — HDU/ITU; cooling; high-dose anti-thyroid drugs; corticosteroids.

## Hypothyroidism causes

- **Primary atrophic** (commonest UK) — diffuse lymphocytic infiltrate; small thyroid; associated with PA, vitiligo
- **Hashimoto's** — plasma cell infiltrate + goitre; elderly females; possible "Hashitoxicosis" early; anti-TPO/TG; Hürthle cells
- Iodine deficiency (commonest worldwide)
- Post-thyroidectomy / radioiodine
- Drugs: lithium, **amiodarone**
- **Riedel's** — dense fibrosis, painless, stony-hard

Tx: levothyroxine.`,
        },
        {
          id: "thyroid_cancer",
          name: "Thyroid Cancer & MEN",
          content: `## High-risk features

Solitary, solid, young, male, **cold** nodule.

## Subtypes

| Type | % | Age | Spread | Histology | Marker |
| --- | --- | --- | --- | --- | --- |
| **Papillary** | 75-85 | 20-40 F | Lymph + lung | **Psammoma bodies, "Orphan-Annie eyes"** (clear nuclei) | Thyroglobulin |
| **Follicular** | 10-20 | 40-60 | Blood (lung, bone, liver) | Follicles | Thyroglobulin |
| **Medullary** | 5 | 50-60 | Local + lymph | Sheets of dark cells, **amyloid** (calcitonin breakdown) | **Calcitonin, CEA** |
| **Anaplastic** | rare | Elderly | Aggressive, early mets | Pleomorphic giant + spindle cells | – |
| **Lymphoma (MALT)** | – | – | – | – | RF: chronic Hashimoto's |

> Papillary associated with **irradiation**; very good prognosis.
> Medullary: 80% sporadic, 20% **MEN2** familial — screen for phaeochromocytoma pre-op.
> Treatment: surgery ± radioiodine + thyroxine to ↓ TSH.

## MEN syndromes (all AD)

- **MEN1 (3 Ps)** — **P**ituitary, **P**ancreatic (insulinoma, gastrinoma), **P**arathyroid
- **MEN2a (2 Ps + 1 M)** — **P**arathyroid, **P**haeochromocytoma, **M**edullary thyroid
- **MEN2b (1 P + 2 Ms + Marfanoid)** — **P**haeochromocytoma, **M**edullary thyroid, **M**ucocutaneous neuromas`,
        },
        {
          id: "adrenal",
          name: "Adrenals",
          content: `## Addison's disease (primary adrenal insufficiency)

- Causes: **autoimmune** (1° in Europe), **TB** (1° worldwide), tumour mets, adrenal haemorrhage (meningococcus = Waterhouse-Friderichsen), amyloidosis, sudden steroid withdrawal
- Biochem: ↑ K, ↓ Na, ↓ glucose, postural hypotension
- Skin pigmentation, lethargy, depression
- Can progress to **Addisonian crisis**
- **SynACTHen test** — diagnostic
- Tx: **hydrocortisone + fludrocortisone** in primary

## Cushing's syndrome

### ACTH-dependent (high ACTH)

- **Pituitary tumour** ("Cushing's disease", 85%)
- **Ectopic ACTH** (5%) — small-cell lung Ca, carcinoid

### ACTH-independent

- Adrenal adenoma/carcinoma (10%); nodular hyperplasia
- Iatrogenic steroids

> Mnemonic: **CAPE** — Cushing's disease, Adrenal adenoma, Paraneoplastic, Exogenous steroids

### Features

Moon face, buffalo hump, central obesity, **purple striae**, hypertension, diabetes, proximal myopathy, hirsutism, easy bruising

### Investigations

1. **Overnight dexamethasone suppression** OR 24-h urinary free cortisol — if positive → true Cushing's
2. Low-dose (0.5 mg) / High-dose (2 mg) dex suppression
   - Both fail to suppress in pituitary disease and adrenal tumour
   - **High-dose suppresses pituitary Cushing's but not ectopic ACTH**
3. CT/PET to localise; **inferior petrosal sinus sampling** if uncertain

### Tx

Treat underlying cause (transsphenoidal pituitary surgery, adrenalectomy, etc.)

## Conn's syndrome (primary hyperaldosteronism)

- **Adrenal adenoma** (or bilateral hyperplasia)
- Uncontrollable hypertension; ↑ Na, ↓ K, young patient
- **↑ Aldosterone:renin ratio**
- Tx: **spironolactone / eplerenone / amiloride**; surgery if >4 cm adenoma

## Phaeochromocytoma

- Adrenal medulla tumour → ↑ catecholamines
- **Triad: Headaches, Hypertension, Hyperhidrosis**; arrhythmias
- 24-h urinary metanephrines (or plasma free metanephrines), VMA
- **Treatment ABC**:
  1. **A**lpha blockade first (phenoxybenzamine)
  2. **B**eta blockade
  3. **C**ut out - surgery when blood pressure well controlled.

> Associations: MEN2, neurofibromatosis, von Hippel-Lindau`,
        },
        {
          id: "tdm",
          name: "Therapeutic Drug Monitoring",
          content: `## Drugs to know

### Phenytoin

- Toxicity: ataxia, nystagmus
- Under-treatment: seizures
- **Liver saturation** at high levels → surge in plasma levels
- Tx: supportive (no antidote)

### Digoxin

- Toxicity: arrhythmias, heart block, confusion, **xanthopsia (yellow-green vision)**
- ↑ levels with hypokalaemia
- Reduce dose in renal failure / elderly
- Antidote: **Digibind (digoxin immune Fab)**

### Lithium

- Toxicity: tremor (early), lethargy, fits, arrhythmia, renal failure
- Excretion impaired by hyponatraemia, ↓ renal function, diuretics
- Tx: supportive; osmotic/forced alkaline diuresis; **Li >3 mmol/L → haemodialysis**

### Aminoglycosides (gentamicin, vancomycin)

- Toxicity: tinnitus, **deafness**, nystagmus, renal failure
- Use single daily dosing; **monitor peak and trough**

### Theophylline / aminophylline

- Toxicity: arrhythmias, convulsions, anxiety, tremor
- Half-life varies: smokers 4 h, non-smokers 8 h, liver disease 30 h
- ↑ levels: erythromycin, cimetidine, phenytoin`,
        },
        {
          id: "calcium",
          name: "Calcium & Parathyroid",
          content: `## Normal range

2.2-2.6 mmol/L; 45% ionised, 50% albumin-bound (use **corrected calcium**), 5% complexed.

## Key hormones

- **PTH**: ↑ 1α-hydroxylation of vit D, mobilises Ca from bone, ↑ renal Ca reabsorption, ↑ renal phosphate excretion
- **1,25-(OH)₂ vit D (calcitriol)**: ↑ gut Ca + PO₄ absorption, bone remodelling

## Parathyroid disorders

| | Cause | Ca | PO₄ | PTH | ALP |
| --- | --- | --- | --- | --- | --- |
| **1° hyperPTH** | Adenoma (80%), hyperplasia, MEN | ↑ | ↓ | ↑/N | ↑/N |
| **2° hyperPTH** | CKD, vit D deficiency, malabsorption | ↓ | ↑ | ↑ | ↑ |
| **3° hyperPTH** | Prolonged 2°, kidney transplant | ↑/N | ↓/↑ | ↑ | ↑/N |
| **HypoPTH** | Post-surgery (commonest), autoimmune, DiGeorge, hypomagnesaemia | ↓ | ↑ | ↓ | ↓ / N |
| Rickets / osteomalacia | Vit D deficiency | ↓ | ↓ | ↑ | ↑ |
| Paget's | Bone remodelling | N | N | N | **↑↑** |
| Osteoporosis | Bone loss | N | N | N | N |

> **Albright hereditary osteodystrophy / pseudohypoparathyroidism**: PTH **resistance** → low Ca + high PTH. Short 4th/5th metacarpals, round face.

## Hypercalcaemia

Commonest causes:
- **Community**: 1° hyperparathyroidism
- **Hospital**: malignancy (bone mets, myeloma, PTHrP from squamous lung Ca)

### Symptoms — "stones, bones, groans, moans, thrones"

Renal stones · bone pain · psychiatric · abdo pain · polyuria · weakness

### Other causes

Sarcoidosis (1α-hydroxylase activity in granulomas), milk-alkali, thyrotoxicosis, vit D excess, dehydration, thiazides

## Hypocalcaemia

- **Trousseau's** (carpal spasm with cuff) and **Chvostek's** (facial twitch on tap) signs
- Perioral paraesthesia, carpopedal spasm, **long QT**
- With ↑ PO₄: CKD, hypoparathyroidism, pseudohypoparathyroidism
- With normal/↓ PO₄: osteomalacia, **acute pancreatitis**, overhydration, respiratory alkalosis (↓ ionised Ca)

### Tx

- Symptomatic / Ca <1.875: **IV 10% calcium gluconate** 10 mL
- Asymptomatic / chronic: oral calcium ± vit D supplement (alfacalcidol if CKD; cholecalciferol otherwise)`,
        },
        {
          id: "renal_stones",
          name: "Renal Stones",
          content: `## Risk factors

Dehydration, abnormal urine pH, ↑ excretion of stone constituents, **infection** (treat first), anatomical abnormalities.

## Calcium stones

- Most patients **normocalcaemic**
- Hyperoxaluria (intake/absorption); hypercalciuria (intake, renal leak)
- Prevention: hydration, ↓ oxalate intake, normal Ca intake, **thiazides** (hypocalciuric), citrate (alkalinise urine)

## Stone types

| Type | % | X-ray |
| --- | --- | --- |
| Calcium (mixed) | 45 | Radio-opaque |
| Calcium oxalate | 35 | Radio-opaque |
| **Triple phosphate (struvite)** Mg-NH-PO₄ | 10 | **Staghorn**, infection-related |
| Uric acid | 5 | Radiolucent |
| Cystine | 1-2 | Lightly opaque |
| Xanthine | rare | Lucent |

## Investigation & Mx

- First-line imaging: **non-contrast CT KUB** within 24 h (US in pregnancy/children)
- ≤5 mm: conservative
- 6-20 mm: lithotripsy / ureteroscopy
- >20 mm: percutaneous nephrolithotomy
- Analgesia: IM diclofenac
- 24-h urine for recurrent stones (Ca, oxalate, urate, citrate, volume)`,
        },
        {
          id: "cardiac_markers",
          name: "Cardiac Markers & Enzymes",
          content: `## Amylase

- Acute pancreatitis: usually >10× ULN; ≥3× ULN required
- Non-specific: also raised in renal failure, peritonitis, cholecystitis, salpingitis, ectopic, abdo cancers

## Lipase

- More specific than amylase; >3× ULN highly indicative of pancreatitis
- Also raised in renal failure, small bowel ischaemia, sepsis, DKA, cholecystitis

## Creatine Kinase

- CK-MM (skeletal), CK-MB (cardiac)
- ↑ in: Duchenne (>10× ULN), MI, **rhabdomyolysis, statin myopathy**, Afro-Caribbean (physiological <5× ULN)

## ALP

(See LFTs section.)

## BNP / NT-proBNP

- Released from ventricle on stretch
- Used to **rule out HF**: <100 highly specific for excluding HF; >400 sensitive
- NT-proBNP more sensitive, better prognosis
- Confounders: CKD raises levels

## Troponin (not an enzyme)

- Cardiomyocyte contractile protein released in MI
- Measure at presentation, repeat at 6-12 h (100% Se / 98% Sp at 12-24 h)
- **Stays elevated 3-10 days → poor for re-infarction (use CK)**
- Also raised: coronary spasm/dissection, post-PCI, **myocarditis**, PE, HF, cardiomyopathy, sepsis, cardiac surgery, defibrillation`,
        },
        {
          id: "lipids",
          name: "Lipoprotein Metabolism & Dyslipidaemias",
          content: `## What lipoproteins are

Lipids (cholesterol and triglycerides) cannot dissolve in plasma, so the body packages them inside particles called lipoproteins. Each particle has a core of triglyceride and cholesterol ester surrounded by a shell of phospholipid, free cholesterol, and apolipoproteins (the proteins that direct the particle to its destination).

The five main lipoprotein classes differ in size, density, and which lipid they predominantly carry. As the proportion of triglyceride (low density) falls and the proportion of protein (high density) rises, the particles become smaller and denser:

- **Chylomicrons** — the largest and least dense particles. They carry dietary triglyceride absorbed from the gut to peripheral tissues.
- **Very low density lipoprotein (VLDL)** — made by the liver to carry endogenous triglyceride to peripheral tissues.
- **Intermediate density lipoprotein (IDL)** — formed when VLDL has lost some of its triglyceride to tissues.
- **Low density lipoprotein (LDL)** — the main carrier of cholesterol to tissues, and the lipoprotein most strongly associated with atherosclerosis.
- **High density lipoprotein (HDL)** — the smallest and densest. It carries cholesterol from peripheral tissues back to the liver in a process called reverse cholesterol transport, and is generally protective.

> Free fatty acids (FFAs) are not lipoproteins; they are individual fatty acid molecules released into the blood from adipose tissue and transported bound to albumin.

## Key concepts to remember

- **Proprotein convertase subtilisin/kexin type 9 (PCSK9)** is a liver-derived enzyme that binds to the LDL receptor and promotes its degradation. When the LDL receptor is destroyed, the liver cannot clear LDL from the blood, so circulating LDL rises. A gain-of-function mutation in PCSK9 therefore causes high LDL and premature cardiovascular disease. The therapeutic strategy is to block PCSK9: **evolocumab** and **alirocumab** are monoclonal antibodies against PCSK9 used in patients with familial hypercholesterolaemia or statin-intolerant high-risk individuals.
- **Lipoprotein(a)**, written Lp(a), is a modified form of LDL that is an independent cardiovascular risk factor. It is genetically determined and not lowered by statins. Nicotinic acid (niacin) reduces Lp(a) levels but is rarely used now because of side effects.

## Familial dyslipidaemias

- **Familial hypercholesterolaemia** (historically called Type II hyperlipidaemia) is an autosomal dominant condition caused most commonly by mutations in the LDL receptor (LDLR) gene; less commonly by mutations in apolipoprotein B (apoB) or PCSK9, or autosomal recessive mutations in LDLRAP1. Patients present with very high LDL, tendon xanthomata, corneal arcus, and premature cardiovascular disease (myocardial infarction before age 55 in men or 60 in women). First-line treatment is a high-intensity statin, with ezetimibe and PCSK9 inhibitors added if needed.
- Familial hyperalphalipoproteinaemia is caused by cholesteryl ester transfer protein (CETP) deficiency and produces high HDL.
- Familial type I hypertriglyceridaemia is caused by lipoprotein lipase or apolipoprotein C-II (apoC-II) deficiency, producing massive elevation of chylomicrons and triglyceride.
- Tangier disease is a rare condition with very low HDL.
- Abetalipoproteinaemia is caused by microsomal triglyceride transfer protein (MTP) deficiency and produces acanthocytes on the blood film.

## Management of dyslipidaemia

The first step is always lifestyle modification: dietary saturated fat reduction, weight loss, exercise, and smoking cessation.

- **Statins** inhibit HMG-CoA reductase, the rate-limiting enzyme of hepatic cholesterol synthesis, which lowers intracellular cholesterol and upregulates LDL receptor expression so the liver clears more LDL from the blood. Side effects include myopathy ranging from mild myalgia to rhabdomyolysis, fatigue, and a small rise in transaminases.
- **Ezetimibe** blocks intestinal cholesterol absorption and is added when statins alone are insufficient.
- **PCSK9 inhibitors** (evolocumab, alirocumab) are reserved for familial hypercholesterolaemia or statin-intolerant high-risk patients.

## Management of obesity

- **Bariatric surgery** is indicated if body mass index is greater than 40, or greater than 35 with an obesity-related comorbidity such as type 2 diabetes.
- **Orlistat** is a pancreatic lipase inhibitor that reduces dietary fat absorption. The major side effects are flatus and steatorrhoea, which many patients find intolerable.
- Rimonabant, a cannabinoid receptor antagonist, was previously used but has been withdrawn because of an increased risk of suicide.`,
        },
        {
          id: "vitamins",
          name: "Vitamin & Trace Element Deficiencies",
          content: `## Fat-soluble (ADEK)

- **A (retinol)**: deficiency → night blindness, retinitis pigmentosa, exfoliation. Excess → hepatitis. **Teratogen**.
- **D (cholecalciferol)**: deficiency → osteomalacia/rickets. Excess → hypercalcaemia.
- **E (tocopherol)**: deficiency → anaemia, neuropathy, IHD risk.
- **K (phytomenadione)**: deficiency → defective clotting (factors II, VII, IX, X). Test = PT.

## Water-soluble (B + C)

- **B1 (thiamine)**: **beri-beri** (wet = CV; dry = neuro), **Wernicke's encephalopathy** (confusion, ataxia, ophthalmoplegia), Korsakoff's. Test: RBC transketolase.
- **B2 (riboflavin)**: glossitis, angular cheilosis. RBC glutathione reductase.
- **B3 (niacin)**: **Pellagra (3 Ds)** — dementia, dermatitis, diarrhoea.
- **B6 (pyridoxine)**: dermatitis, sideroblastic anaemia. Excess → neuropathy.
- **B12 (cobalamin)**: pernicious anaemia, **subacute combined degeneration**.
- **Folate**: megaloblastic anaemia, **neural tube defects**.
- **C (ascorbate)**: **scurvy** (perifollicular haemorrhage, gum bleeding, poor healing).

## Trace elements

- **Iron**: deficiency → microcytic anaemia. Excess → haemochromatosis.
- **Iodine**: deficiency → goitre, hypothyroid (commonest worldwide cause).
- **Zinc**: deficiency → dermatitis, poor healing.
- **Copper**: deficiency → anaemia. Excess → **Wilson's** (low ceruloplasmin).
- Fluoride: deficiency → caries; excess → fluorosis.

## Disease-specific

- **Crohn's** (terminal ileum): B12, ADEK, folate (if MTX); Ca/Mg/Zn if high output
- **Coeliac**: iron, ADEK, thiamine, B6
- **CLD**: ADEK, B12, selenium, Mg, Zn, folate
- **Pancreatic insufficiency**: ADEK`,
        },
        {
          id: "newborn_screen",
          name: "Newborn Screening & Inborn Errors",
          content: `## UK Guthrie blood spot (day 6)

- **Phenylketonuria** — phenylalanine hydroxylase deficiency; "musty baby"
- Congenital hypothyroidism (TSH)
- **Cystic fibrosis** — CFTR (F508del); IRT first → DNA
- Sickle cell disease
- **MCAD deficiency** — fatty acid oxidation; acylcarnitine by tandem MS
- Plus other amino acid disorders

## Inborn errors — groups

| Group | Examples | Key features |
| --- | --- | --- |
| **1: Toxin accumulation** | Organic acidaemias, urea cycle (e.g. **OTC deficiency, X-linked**), aminoacidopathies (PKU, MSUD) | High ammonia, encephalopathy; ketosis/acidosis; treat with low-protein diet |
| **2: ↓ energy stores** | **Glycogen storage** (Von Gierke's: hypoglycaemia, lactic acidosis, hepatomegaly), **galactosaemia** (cataracts, neonatal jaundice; treat low-galactose), **fatty acid oxidation** (MCADD: hypoglycaemia + LOW ketones — never fast) | Hypoglycaemia |
| **3: Large molecule synthesis** (dysmorphic) | Peroxisomal disorders (very-long-chain FA), glycosylation disorders | Floppy baby, retinopathy |
| **4: Large molecule defects** | Lysosomal — **Tay-Sachs** (Ashkenazi Jewish), Hurler's | Slowly progressive neuro, hepatosplenomegaly |
| **5: Mitochondrial** | MELAS, Kearns-Sayre, POEMS | High lactate, CK; CNS/muscle/heart |

## Stats reminder

- **Sensitivity**: TP / (TP + FN) — disease detection
- **Specificity**: TN / (FP + TN) — healthy correctly cleared
- **PPV**: TP / (TP + FP) — proportion of positive tests that have disease
- **NPV**: TN / (TN + FN)`,
        },
        {
          id: "diabetes",
          name: "Diabetes: Diagnosis, DKA, HHS",
          content: `## Diagnosis

If symptomatic (polydipsia, polyuria, weight loss, blurred vision), one of:
- **HbA1c >48** (≥6.5%)
- Fasting glucose ≥7
- Random glucose ≥11.1
- OGTT 2-h ≥11.1

If asymptomatic → repeat for confirmation.

- **IGT** (impaired glucose tolerance): OGTT 7.8-11.0
- **IFG** (impaired fasting glucose): fasting 6.1-6.9

## DKA (medical emergency)

- pH <7.3, **glucose >11**, **ketones >3 mmol/L** (or 2+ on urine dip)
- Rapid onset; **Kussmaul respiration**, abdominal pain, vomiting, confusion
- Precipitants: infection, missed insulin, surgery, trauma

### Management

1. A-E + senior help
2. **Fluid resus** before insulin
   - SBP <90: 500 mL bolus over 15 min
   - SBP >90: 1 L over 1 h, then **add KCl from 2nd bag if K+ 3.5-5.5**
3. **Fixed-rate insulin 0.1 U/kg/h** — drives K into cells; ensure K not <3.5 first
4. Hourly glucose + K
5. Catheterise (target UO >0.5 mL/kg/h)
6. **Resolution**: ketones <0.6 AND pH >7.3

## HHS (Hyperosmolar Hyperglycaemic State)

- **pH >7.3**, **osmolarity >320**, **glucose >30**
- Develops over days; older T2DM, profound dehydration, confusion
- Mx: 0.9% saline over 1 h; **insulin only if ketones >1** at 0.05 U/kg/h
- Risk of thrombosis — consider prophylactic LMWH`,
        },
        {
          id: "hypoglycaemia",
          name: "Hypoglycaemia",
          content: `## Classification

### Hyperinsulinaemic

- **Insulin overdose** (exogenous — check C-peptide low)
- **Sulphonylurea** excess (exogenous — high C-peptide, like insulinoma!)
- **Insulinoma** — endogenous; ↑ insulin, **↑ C-peptide**, low FFA/ketones; needs negative sulphonylurea screen

### Hypoinsulinaemic

- **+ve ketones**: alcohol with no food, pituitary insufficiency, Addison's, liver failure, anorexia
- **−ve ketones (with low FFA)**: **non-islet tumour** secreting "big IGF-2" (fibrosarcoma, fibroma)

### Drug induced

- Quinine, pentamidine

## Management

- **Conscious + can swallow**: glucotabs (short-acting CHO) + sandwich (long-acting)
- **Reduced consciousness**:
  - IV access: **10% glucose 100 mL** over 10 min
  - No IV access: IM glucagon`,
        },
        {
          id: "renal_function",
          name: "Renal Function & AKI/CKD",
          content: `## Assessing function

- Normal GFR ≈ 120 mL/min; declines ~1 mL/min/yr with age
- Inulin = gold standard (research only)
- **Creatinine** — endogenous, varies with muscle mass; trend more useful than absolute
- Estimating equations: Cockcroft-Gault, MDRD

## Urine

- Microscopy: crystals (stones), RBCs (stones, UTI, GN), WBCs (UTI, GN), **casts** (GN), bacteria
- PCR (protein:creatinine ratio) preferred over 24-h collection

## AKI definition

Any of:
- Creatinine ↑ ≥26 in 48 h
- ≥50% rise in creatinine in 7 days
- UO <0.5 mL/kg/h for >6 h

## Categories

- **Pre-renal** — hypoperfusion; reverses with volume; can progress to ATN
- **Renal** — vascular (vasculitis), glomerular (GN), tubular (ATN), interstitial (AIN)
- **Post-renal** — obstruction (prostate, bladder, ureteric)

## Indications for urgent dialysis — **AEIOU**

- **A**cidosis (refractory metabolic)
- **E**lectrolyte (refractory hyperkalaemia)
- **I**ntoxication (lithium, aspirin)
- **O**verload (refractory pulmonary oedema)
- **U**raemic encephalopathy/pericarditis

## CKD stages

| Stage | GFR | Description |
| --- | --- | --- |
| 1 | >90 | Damage with normal GFR |
| 2 | 60-89 | Mild |
| 3 | 30-59 | Moderate |
| 4 | 15-29 | Severe |
| 5 | <15 | End-stage |

## Common causes

- **Diabetes (most common)**, hypertension, atherosclerotic, chronic GN, infective/obstructive uropathy, polycystic kidney disease

## Consequences

- Acidosis, hyperkalaemia
- **Anaemia** (↓ EPO)
- **Renal bone disease** — 2° hyperPTH due to ↓ vit D
- **CV disease** (vascular calcification — biggest mortality)
- Uraemia

## Renal Replacement Therapy

- **Haemodialysis** — Tessio line or AV fistula, ~3×/wk
- **Peritoneal dialysis** — Tenckhoff catheter; home; risk of peritonitis
- **Transplant** — only definitive cure; placed in iliac fossa (Rutherford-Morrison "hockey-stick" scar); lifelong tacrolimus or ciclosporin`,
        },
      ],
    },

    // =========================================================================
    // =========================================================================
    {
      id: "microbiology",
      name: "Microbiology",
      icon: "🦠",
      topics: [
        {
          id: "tb",
          name: "Tuberculosis & Mycobacteria",
          content: `## Tuberculosis

- Usually asymptomatic, becomes latent in **Ghon focus / granuloma**; reactivates with immunosuppression
- Histology: **caseating granulomas**
- Risk factors: South Asian / Eastern European travel, HIV, homeless, IVDU

### Presentation

- General: fever, night sweats, weight loss
- Respiratory: cough, haemoptysis
- Extra-pulmonary (immunosuppressed):
  - Subacute meningitis (LP)
  - **Pott's disease** — spinal TB, back pain, vertebral destruction, iliopsoas abscess
  - Miliary TB (haematogenous spread)
  - Lymphadenitis, pericarditis, peritonitis, renal, testicular, liver

### Investigations

- CXR: upper-lobe cavitation, hilar lymphadenopathy
- **Sputum × 3** — Ziehl-Neelsen stain; culture on **Löwenstein-Jensen for 6 weeks** (gold standard)
- BAL if can't expectorate
- Auramine — screening only
- **Mantoux**: positive in active, latent, or BCG-vaccinated
- **IGRA**: positive in active and latent, **NOT after BCG** → best for latent TB

### Treatment — **RIPE**

- 2 months **R**ifampicin + **I**soniazid + **P**yrazinamide + **E**thambutol
- Then 4 months R + I (longer in meningitis / Pott's)
- SE: rifampicin → orange secretions; isoniazid → peripheral neuropathy (give pyridoxine); pyrazinamide → hepatotoxic; ethambutol → optic neuritis
- Latent TB prophylaxis: **isoniazid monotherapy**; isolate active in negative-pressure room
- Vaccine: BCG

## Other mycobacterial diseases

- **Leprosy (Hansen's)**: *M. leprae*. Skin depigmentation, nodules, trophic ulcers, nerve thickening
- **MAI complex**: disseminated TB-like, HIV with CD4 <75
- *M. marinarum*: papules in fish-tank handlers
- *M. ulcerans* (Buruli ulcer): tropics, painless ulcers`,
        },
        {
          id: "rti",
          name: "Respiratory Tract Infections",
          content: `## Pneumonia classification

- **CAP** vs HAP (>48 h after admission)
- **Typical** (lobar, classic CXR, penicillin-responsive) vs **Atypical** (extra-pulmonary features, no cell wall → macrolides)

## Typical CAP organisms

- **Streptococcus pneumoniae** (commonest) — rusty sputum, lobar; +ve diplococci
- **Haemophilus influenzae** — smoking/COPD, bronchopneumonia; -ve coccobacilli
- *Moraxella catarrhalis* — smoking/COPD; -ve diplococci
- **Staph aureus** — post-influenza, **cavitation**; +ve grape-cluster cocci
- **Klebsiella** — alcoholics, DM, elderly, **upper-lobe cavitating**; -ve rod

## Atypical CAP

- **Legionella** — air-conditioning/hotel, **hepatitis, hyponatraemia**; urinary antigen test
- *Mycoplasma pneumoniae* — students, dry cough, arthralgia, **cold agglutinins / AIHA, erythema multiforme**
- *Chlamydia psittaci* — bird keepers

## Special hosts

- HIV: **PCP** (desaturation on walking, bat-wing CXR, co-trimoxazole), TB
- Splenectomy: encapsulated (NHS — Neisseria, H. influenzae, S. pneumoniae)
- CF: **Pseudomonas** (worse prognosis, ceftazidime), Burkholderia cepacia
- Neutropenia: Aspergillus (halo sign on CT)

## CURB-65

1 point each: **C**onfusion, **U**rea >7, **R**R ≥30, **B**P <90/60, age ≥**65**

| Score | Setting | Antibiotics |
| --- | --- | --- |
| 0-1 | Outpatient | Amoxicillin PO 5d (or macrolide) |
| 2 | Consider admission | Amoxicillin + clarithromycin PO |
| 3-5 | Admit ± ITU | Co-amoxiclav IV + clarithromycin IV |

## HAP

- 1st line: ciprofloxacin + vancomycin
- Severe: tazocin + vancomycin
- Aspiration: tazocin + metronidazole`,
        },
        {
          id: "ie",
          name: "Infective Endocarditis",
          content: `## Background

- Mitral and aortic valves usually; **tricuspid in IVDU**
- **Acute** (high virulence) vs **subacute** (low virulence, embolic/immune phenomena)

## Pathogens

- **Acute** (high virulence): Strep pyogenes, **Staph aureus** (commonest IVDU), CoNS (commonest in prosthetic valve)
- **Subacute** (low virulence): Staph epidermidis, **Strep viridans**, **HACEK** organisms (culture-negative — Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella)

## Features

- **Fever** — most common, often presents as PUO
- New / changing murmur (regurgitant)
- **Embolic phenomena**: Janeway lesions (palms/soles, painless), splinter haemorrhages, septic abscesses, splenomegaly
- **Immune phenomena**: Roth spots, Osler's nodes (tender), haematuria (GN)

## Investigations

- **3 blood cultures** from different sites before antibiotics
- Echo (TTE → TOE)

## Modified Duke's criteria — **BE TIMER** (clinical)

Diagnosis: 2 major + 5 minor combinations.

| Major | Minor |
| --- | --- |
| **B**lood cultures positive (2× typical organisms ≥12 h apart) | **T**emp >38 |
| **E**ndocardial involvement (new murmur, vegetation, abscess) | **I**mmune phenomena |
| | **M**icrobiological evidence not meeting major criteria |
| | **E**mbolic phenomena |
| | **R**isk factors (prosthetic valve, IVDU, etc) |

## Treatment

- **IV antibiotics 4-6 weeks** (use local guidelines):
  - Acute: flucloxacillin
  - Subacute: benzylpenicillin + gentamicin
  - Prosthetic: vancomycin + gentamicin + rifampicin (6 weeks)
- Surgical debridement if HF, uncontrolled infection, emboli`,
        },
        {
          id: "gi_infections",
          name: "GI Infections",
          content: `## Three syndromes

- **Secretory diarrhoea** (toxin-driven, no fever): cholera, ETEC, EPEC, viruses
- **Inflammatory diarrhoea** (bloody, fever) — **CHESS**: Campylobacter, EHEC, Entamoeba, non-typhoidal Salmonella, Shigella
- **Enteric fever** (systemic, fewer GI Sx): typhoidal Salmonella, Yersinia, Brucella

## Bacteria

- **C. botulinum** — canned/honey/beans; toxin cleaves SNARE → **descending paralysis** (vs GBS ascending). Tx: antitoxin.
- **C. perfringens** — reheated meats, watery diarrhoea + cramps; gas gangrene
- **C. difficile** — exotoxins A, B; antibiotic-induced (the **3 Cs**: Cephalosporins, Ciprofloxacin, Clindamycin); pseudomembranous colitis. **Vancomycin PO** (1st line, NOT metronidazole). 2nd: fidaxomicin.
- **B. cereus** — reheated rice; sudden vomiting (4 h) or watery diarrhoea (18 h)
- **Staph aureus** — enterotoxin (superantigen, 2-4 h); prominent vomiting
- **E. coli**:
  - ETEC — traveller's diarrhoea (cipro)
  - EIEC — invasive dysentery
  - **EHEC O157:H7** — haemorrhagic, **HUS**
  - EPEC — infantile
- **Salmonella typhi/paratyphi** — enteric fever: **constipation, fever, rose spots, splenomegaly**. IV ceftriaxone → PO azithromycin. Vaccinate.
- **Salmonella enteritis** — poultry/eggs, non-bloody
- **Shigella** — distal colon, bloody diarrhoea (cipro)
- **Vibrio cholerae** — rice-water stool, comma-shaped
- **Campylobacter jejuni** — undercooked poultry, prodrome of fever then bloody diarrhoea; associated with **GBS, reactive arthritis**. Erythromycin/cipro.
- **Listeria** — refrigerated/unpasteurised dairy; perinatal/immunocompromised; ampicillin
- **Yersinia enterocolitica** — undercooked pork; terminal ileitis (**pseudo-appendicitis**)

## Protozoa

- **Entamoeba histolytica** — flask-shaped ulcers; dysentery, MSM, **liver abscess (anchovy paste)**. Metronidazole.
- **Giardia lamblia** — pear-shaped trophozoite; foul-smelling, fatty, non-bloody. Metronidazole.
- **Cryptosporidium** — severe diarrhoea in immunocompromised; **Kinyoun acid-fast**. Paromomycin.

## Viruses

Norovirus (adult outbreaks), adenovirus (<2y), rotavirus (<6y, nurseries) — all self-limiting.`,
        },
        {
          id: "uti",
          name: "Urinary Tract Infections",
          content: `## Classification

- Uncomplicated vs complicated (men, catheters, pregnancy, abnormal tract)
- Lower (cystitis) vs upper (pyelonephritis — systemically unwell)

## Pathogens

- **E. coli** (commonest) — fimbrial adhesion
- ***S. saprophyticus*** — young women (think if **nitrites negative**)
- **Proteus / Klebsiella** — abnormal tracts; Proteus → **struvite stones** (urease)
- Pseudomonas — recurrent
- *S. aureus* — haematogenous, abscesses
- Candida — catheterised

## Investigations

- Dipstick: **nitrites specific** (organism reduces nitrate); leukocytes less specific
- ⚠ Don't dipstick people with catheters or aged >65 (asymptomatic bacteriuria common)
- MC&S: ≥10⁴ CFU/mL diagnostic (10³ for E. coli / S. saprophyticus). Squamous epithelial cells = contamination.

## Management

- Lower UTI: nitrofurantoin / trimethoprim / cephalexin PO; 3 days uncomplicated, 7 days complicated/male
- **Pyelonephritis**: admit, IV co-amoxiclav + gentamicin`,
        },
        {
          id: "bone_joint",
          name: "Bone, Joint & Wound Infections",
          content: `## Surgical site infection

- Organisms: S. aureus (MRSA/MSSA), E. coli, Pseudomonas
- Tx: flucloxacillin for staph

## Osteomyelitis

- Commonest organism: **S. aureus**
- Pain, swelling, fever; vertebrae most commonly affected in adults
- Investigate: MRI, blood culture, bone biopsy (culture + histology)
- Tx: IV antibiotics; debridement second-line

## Septic arthritis

- Knee most common
- *S. aureus* commonest; **gonorrhoea in young/sexually active**; Strep, E. coli
- Joint aspirate: WCC >50 000/mm³; blood culture
- Tx: IV cephalosporin or flucloxacillin + drain joint

## Prosthetic joint infection

- CoNS, S. aureus, E. coli
- Loosening on imaging
- Tx: IV antibiotics + remove prosthesis + revision`,
        },
        {
          id: "cns_infections",
          name: "CNS Infections & Meningitis",
          content: `## Bacterial meningitis

| Age | Organisms |
| --- | --- |
| Neonates | **Group B Strep, Listeria, E. coli** |
| Young | **N. meningitidis, S. pneumoniae, H. influenzae** |
| Elderly | Group B Strep, **Listeria** |

- Other: M. tuberculosis (chronic), Cryptococcus (immunocompromised)
- Most common cause of meningitis overall: **enteroviruses** (Coxsackie, echovirus)

## CSF analysis

| | Appearance | Glucose | Cells | Protein | Pressure |
| --- | --- | --- | --- | --- | --- |
| **Bacterial** | Turbid | Low | Polymorphs | High | High |
| **Viral** | Clear | Normal | Lymphocytes | High | N/↑ |
| **TB** | Clear/turbid | Low | Lymphocytes | High | High |
| **Fungal** | – | Low | Lymphocytes | High | High |

## Risk factors

- N. meningitidis: complement deficiency, **hyposplenism**, hypogammaglobulinaemia
- S. pneumoniae: complement deficiency, hyposplenism, alcohol, pneumonia, prior head trauma + CSF leak

## Management

- IV ceftriaxone + corticosteroids (unless meningococcal)
- Add **ampicillin to cover Listeria** in neonate / elderly
- Add **IV aciclovir if encephalitis suspected**

## Encephalitis

- HSV-2 most common; enteroviruses, listeria, *Naegleria* (warm freshwater), toxoplasma
- Imaging: MRI gold standard
- Tx: **IV aciclovir**

## Brain abscess

- Strep, Staph, TB, fungi, parasites
- SOL features + swinging fever
- Local extension (otitis media) or haematogenous (endocarditis)`,
        },
        {
          id: "stis",
          name: "Sexually Transmitted Infections",
          content: `## Gonorrhoea

- *Neisseria gonorrhoeae* — Gram-ve diplococcus, obligate intracellular
- Most common STI in Europe
- Mucopurulent discharge; can cause **disseminated infection in complement-deficient** (sepsis, rash, septic arthritis)
- **Ophthalmia neonatorum** if untreated maternal infection
- Tx: **ceftriaxone IM 250 mg single dose**

## Chlamydia

- *Chlamydia trachomatis* — obligate intracellular gram -ve pathogen
- Often asymptomatic (50% men, 80% women); UK prevalence high in <25s
- Serovars A-C: trachoma (eye); D-K: genital
- Dx: **NAAT**
- Tx: azithromycin 1g stat OR doxycycline 100mg BD × 7 days
- Complications: PID, infertility, epididymitis, **Reiter's syndrome (reactive arthritis)**

## Lymphogranuloma venereum (LGV)

- C. trachomatis L1-3 serovars; current outbreak in MSM with proctitis
- Painful inguinal buboes
- Tx: doxycycline 3 weeks

## Syphilis (*Treponema pallidum* spirochaete)

- **Primary**: painless solitary genital **chancre** (1-12 weeks post-exposure)
- **Secondary**: bacteraemia 1-6 months later — fever, rash on **palms/soles**, condyloma lata, mucosal lesions
- **Latent**: serological only
- **Tertiary** (years later):
  - Gummatous (skin/bone granulomas)
  - **Cardiovascular** — aortic root dilatation/aortitis
  - **Neurosyphilis** — dementia, **tabes dorsalis, Argyll-Robertson pupil**
- Diagnosis:
  - Dark-ground microscopy of 1° lesions
  - **Non-treponemal**: VDRL, RPR (track response — falls with cure)
  - **Treponemal**: TPHA, FTA, TP-PA (remain positive lifelong)
- Tx: **IM benzathine penicillin** single dose (doxycycline if allergic)
- **Jarisch-Herxheimer reaction**: flu-like symptoms after first dose

## Other STIs

- **Chancroid** — *H. ducreyi*; multiple painful tropical ulcers
- **Donovanosis** — *Klebsiella granulomatis*; Donovan bodies on Giemsa; azithromycin
- **Trichomoniasis** — flagellated protozoan; **strawberry cervix**; metronidazole
- **Bacterial vaginosis** — ↓ lactobacilli; clue cells, **whiff test +ve**, raised pH; metronidazole
- **Candidiasis** — cottage-cheese discharge; fluconazole / clotrimazole
- **Genital warts** (HPV 6, 11) — podophyllotoxin / cryotherapy
- **Oncogenic HPV 16, 18** — cervical/anal/penile/vulval/H&N cancers; quadrivalent vaccine since 2012

## DDx of anaphylaxis-like presentation

- Hereditary angioedema (C1 inhibitor deficiency)
- ACEi-induced angioedema`,
        },
        {
          id: "antimicrobials",
          name: "Antimicrobial Agents",
          content: `## Cell-wall inhibitors

### β-Lactams (~10% cross-reactivity)

- **Penicillins**: penicillin (Gram +ve), amoxicillin (broad), flucloxacillin (skin/staph)
- **Cephalosporins**: ceftriaxone, ceftazidime; later generations more Gram -ve
- **Carbapenems**: meropenem, imipenem, ertapenem — for ESBL producers; *Acinetobacter, Klebsiella resistance*

### Glycopeptides

- **Vancomycin** — Gram +ve only; PO for C. diff, IV for MRSA; **nephrotoxic**
- Teicoplanin

## Protein synthesis inhibitors — **TAMCO**

- **T**etracyclines (30S) — doxycycline, broad + intracellular (chlamydia). Avoid in children/pregnancy.
- **A**minoglycosides (30S) — gentamicin, amikacin, tobramycin. Gram -ve sepsis. **Ototoxic + nephrotoxic**
- **M**acrolides (50S) — erythromycin, clarithromycin, azithromycin. Atypical pneumonia, penicillin allergy
- **C**hloramphenicol (50S) — eye drops; aplastic anaemia / **grey baby syndrome**
- **O**xazolidinones (23S) — linezolid; MRSA, VRE

## DNA / RNA inhibitors

- **Fluoroquinolones** (DNA gyrase) — ciprofloxacin; broad, Gram -ve, **anti-pseudomonal**
- Nitroimidazole — **metronidazole** for anaerobes + protozoa
- Rifamycin — **rifampicin**, TB; **red urine/secretions**

## Other

- Polymyxin/colistin — Gram -ve, nephrotoxic
- Daptomycin (cyclic lipopeptide) — Gram +ve, MRSA, VRE
- **Trimethoprim** — UTI; with sulfamethoxazole = **co-trimoxazole** for PCP

## Spectrum tags

- **Broad**: co-amoxiclav, tazocin, ciprofloxacin, meropenem
- **Narrow**: flucloxacillin, metronidazole, gentamicin
- **Anti-pseudomonal**: tazocin, ceftazidime, ciprofloxacin, meropenem, gentamicin

## Resistance — **BEAT**

- **B**ypass — trimethoprim
- **E**nzyme inactivation — β-lactamases (Staph aureus)
- **A**ccumulation impaired — tetracycline efflux
- **T**arget modification — β-lactamases in MRSA, quinolone target changes`,
        },
        {
          id: "viruses_summary",
          name: "Viruses (Herpes, Hep, Resp)",
          content: `## Herpesviruses (latent infections)

- **HSV-1** — herpes labialis (cold sores); HSV-2 — genital. Tx: aciclovir.
- **VZV** — chickenpox → shingles (dermatomal). **Ramsay-Hunt** = facial palsy + ear vesicles. Tx: aciclovir; **VZIG** post-exposure for immunocompromised/pregnant.
- **CMV** — "**owl's eye**" inclusions; flu-like in immunocompetent; major issue in transplant (retinitis, colitis, pneumonitis, encephalitis). Dx: PCR. Tx: **ganciclovir** → foscarnet → cidofovir.
- **EBV** — glandular fever (fever, pharyngitis, posterior cervical LN, fatigue); **post-transplant lymphoproliferative disease**; predisposes to **Burkitt's lymphoma**. Dx: monospot (heterophile Abs). Tx: supportive.
- **HHV-6** — Roseola infantum / 6th disease; **most common cause of febrile convulsions**
- **HHV-8** — **Kaposi's sarcoma** (pathognomonic for HIV), primary effusion lymphoma, Castleman's

## Polyomaviruses

- **JC virus** — **PML (progressive multifocal leukoencephalopathy)** in AIDS, natalizumab/MMF. Demyelinating, rapidly fatal.
- **BK virus** — BK haemorrhagic cystitis (BMT) or BK nephropathy (renal transplant). Cidofovir.

## Respiratory

- **Influenza**: enveloped, segmented (-)RNA. Antigenic drift (point mutations) vs **antigenic shift** (gene reassortment → pandemics). Neuraminidase inhibitors: **oseltamivir, zanamivir**.
- **SARS-CoV-2**: spike binds ACE2; severe → cytokine storm + ARDS. Tx: dexamethasone, remdesivir, **tocilizumab** (anti-IL-6R).

## Hepatitis viruses

| Virus | Type | Transmission | Acute/Chronic | Tx |
| --- | --- | --- | --- | --- |
| **HAV** | RNA, unenveloped | Faeco-oral | Acute only | Supportive |
| **HBV** | DNA hepadnavirus | Blood/sex/vertical | Both; **>90% clear** | Tenofovir, entecavir, peg-IFN |
| **HCV** | RNA flavivirus | Blood | 50% chronic | **DAAs (curative)** — sofosbuvir + ledipasvir |
| **HDV** | RNA delta | Blood | Co-/super-infection w/ HBV | Peg-IFN |
| **HEV** | RNA | Faeco-oral | Acute; **severe in pregnancy** | Supportive ± ribavirin |

## HBV serology

- **HBsAg** — active infection (acute or chronic); >6 months = chronic
- **Anti-HBc (IgM)** — acute infection
- **Anti-HBc (IgG)** — past or current infection
- **Anti-HBs** — vaccine OR cleared natural infection
- HBeAg / HBV DNA — viral replication / infectivity
- Vaccine = HBsAg only → only anti-HBs positive

## Paediatric (rashes)

- **Rubella** (German measles) — maculopapular rash, **Forchheimer spots** on soft palate; congenital — microcephaly, VSD/PDA, cataracts, deafness
- **Parvovirus B19** — slapped cheek (5th disease); arthralgia in adults; **aplastic crisis in haemolysis**; intrauterine transfusion if pregnant
- **Measles (morbillivirus)** — **Koplik's spots** + rash starting behind ears
- **Mumps** — parotid swelling; **orchitis (infertility), pancreatitis, meningitis**`,
        },
        {
          id: "fever_traveller",
          name: "PUO & Fever in Returning Traveller",
          content: `## PUO definition

>38.3 °C on several occasions persisting >3 weeks without diagnosis despite >1 week of intensive workup.

## Causes by class

- **Classical**: infections (abscess, IE, TB, EBV), malignancy, connective tissue
- **Healthcare-associated**: HAP, C. diff, line/catheter, drugs (vanc, penicillins, serotonergics)
- **Neutropenic** (medical emergency): chemo, haem malignancy
- **HIV**: seroconversion, TB, PCP, MCV, Kaposi's, lymphoma

## Malaria

- **Plasmodium falciparum** — most common, most severe
- Spread by female **Anopheles**; bites at night
- Travel: Africa, Asia, S America
- Falciparum: **48 h fever**, generally unwell, hepatosplenomegaly, anaemia
- Dx: **thick and thin films** (thick — confirms; thin — species; **Maurer's clefts**)
- Tx:
  - Mild: **artemether-lumefantrine (Riamet)** = ACT
  - Severe: **IV artesunate**
- Non-falciparum: chloroquine + primaquine (kills hypnozoites)
- Schüffner's dots on film

### Severe falciparum features

- Impaired consciousness, seizures, AKI, **acidosis (pH <7.3)**, hypoglycaemia, ARDS, anaemia, DIC, shock, haemoglobinuria, **parasitaemia >2%**, pregnancy

## Typhoid

- *Salmonella typhi/paratyphi*; India travel
- **5 S's**: rose **S**pots, hepatospleno**megaly**, **S**olid stools (constipation), **S**phygmothermic dissociation (Faget's: low HR + fever)
- Tx: IV ceftriaxone → PO azithromycin

## Dengue

- Flavivirus, *Aedes* mosquito; SE Asia, urban
- **Retro-orbital headache**, myalgia, fever, rash
- **Dengue haemorrhagic fever / shock** if reinfected with different serotype

## Zoonoses

- **Brucellosis** — undulant fever, dairy/animal contact; doxycycline + streptomycin
- **Rabies** — Rhabdovirus; bats/dogs; encephalitis, **hydrophobia, hypersalivation**; **Negri bodies** pathognomonic; rabies Ig + vaccine post-exposure
- **Plague** — Yersinia pestis, fleas; bubonic (LN bubo) or pneumonic. Streptomycin/doxy.
- **Leptospirosis** — rat urine, swimming; jaundice, conjunctival haemorrhage, AKI; doxycycline/amoxicillin
- **Anthrax** — Bacillus anthracis; cutaneous (painless black eschar) or pulmonary; doxycycline/cipro
- **Lyme disease** — Borrelia burgdorferi via Ixodes tick; **erythema chronicum migrans** (bullseye); **FACE** — facial palsy, arthritis, carditis, EM. Doxycycline.
- **Q fever** — Coxiella burnetii (sheep/cattle); atypical pneumonia, doxycycline
- **Leishmaniasis** — sandfly; cutaneous, mucocutaneous, or visceral (**Kala Azar** — fever, hepatosplenomegaly, BM invasion). Amphotericin B.
- **Trypanosomiasis (sleeping sickness)** — tsetse fly; pentamidine. Don't confuse with Chagas (T. cruzi, reduviid bug, dilated cardiomyopathy).
- **Bartonella henselae** — cats; cat scratch fever (immunocompetent) or bacillary angiomatosis (immunocompromised)`,
        },
        {
          id: "fungal_prion",
          name: "Fungi & Prions",
          content: `## Superficial fungi

- **Tinea / dermatophytes** (*Trichophyton rubrum*) — ringworm, athlete's foot
- **Pityriasis** (*Malassezia*) — versicolor, seborrhoeic dermatitis
- Diagnosis: KOH on skin/nail; Wood's lamp

## Deep / systemic fungi

- **Candida** — fluconazole; amphotericin B for invasive
- **Aspergillus** — ABPA, aspergilloma, invasive aspergillosis (immunocompromised, halo sign on CT, high mortality). β-glucan, galactomannan; **voriconazole**
- **Cryptococcus** — meningitis in HIV (insidious onset); pigeon exposure; **India ink staining (halo)**, cryptococcal antigen. Amphotericin B + flucytosine.
- **Mucormycosis** — diabetics; facial swelling, black ulcers; amphotericin B
- *Pneumocystis jirovecii* (PCP) — HIV CD4 <200; "flying saucer" cysts (Gomori silver stain). **Co-trimoxazole**.

## Antifungals

| Class | Example | Target |
| --- | --- | --- |
| Polyene | Amphotericin B | Cell membrane (yeasts) |
| Azole | Fluconazole, voriconazole | Cell membrane synthesis |
| Allylamine | Terbinafine | Dermatophytes |
| Pyrimidine | Flucytosine | DNA synthesis |
| Echinocandin | Caspofungin | Cell wall |

## Prion disease

- Protein-only infectious agents; transmissible spongiform encephalopathies
- **PrP** misfolds α-helix → β-sheet (resistant to protease/radiation)
- Codon 129 polymorphism (MM/MV/VV) influences susceptibility

| Type | Aetiology | Onset | Survival | Features |
| --- | --- | --- | --- | --- |
| **Sporadic CJD (80%)** | Spontaneous PRPSC conversion | 45-75 yr | <6 mo | Rapid dementia + myoclonus; periodic triphasic EEG; **14-3-3** in CSF |
| **Variant CJD (<5%)** | Bovine SE exposure | ~30 yr | ~14 mo | Psychiatric → neuro; **pulvinar sign** on MRI; tonsil biopsy +ve |
| Iatrogenic | Surgery / blood | Varies | – | – |
| Kuru | Cannibalism | ~45 yr incubation | 2 yr | Cerebellar |
| **GSS (familial)** | PRNP P102L | 20-60 yr | 5 yr | Cerebellar ataxia → dementia |
| **FFI** | PRNP mutation (50 families) | – | 1-18 mo | **Insomnia → paranoia → mute** |

## Histological stains (high-yield)

- **Congo red** + apple-green birefringence → amyloid
- **Ziehl-Neelsen** (red on blue) → AFB (TB)
- Auramine → bright yellow → TB screen
- **India ink (halo)** → Cryptococcus
- Gomori silver → PCP (saucer-shaped)
- Modified Kinyoun acid-fast → Cryptosporidium
- Giemsa → Donovan bodies (Donovanosis), Chlamydia psittaci
- Fite → M. leprae`,
        },
        {
          id: "gram_summary",
          name: "Gram Stain & Bug Reference",
          content: `## Gram-positive (purple)

### Cocci

- *Staphylococcus* (clusters)
  - **Coag-positive**: aureus
  - Coag-negative: epidermidis, saprophyticus
- *Streptococcus* + Enterococcus (chains/diplococci)

### Rods

- *Actinomyces* — dental/oral; obligate anaerobe
- *Bacillus*: cereus, anthracis
- *Clostridium*: difficile, perfringens, botulinum, tetani — obligate anaerobes
- *Diphtheria*
- *Listeria*

## Gram-negative (pink)

### Cocci

- *Neisseria*: meningitidis, gonorrhoeae
- *Moraxella catarrhalis*

### Rods

- Enterobacteriaceae: E. coli, Salmonella, Shigella, Klebsiella, Yersinia

### Coccobacilli

- *Haemophilus influenzae*, *H. ducreyi*, Bordetella pertussis, *Pseudomonas aeruginosa*, *Chlamydia trachomatis*

### Spirochaetes

- *Treponema pallidum* (syphilis), *Leptospira*, *Borrelia* (Lyme)

## Obligate anaerobes

Found in GIT. Includes: Clostridium, Actinomyces, Bacteroides (Gram -ve).
**Tx**: metronidazole, cephamycins. **Aminoglycosides useless** (need O₂ to enter).

## Obligate intracellular

- **Bacteria**: Chlamydia, **Rickettsia**, Coxiella (Q fever), Mycobacteria leprae
- **Protozoa**: Toxoplasma, Cryptosporidium, Leishmania
- **Fungi**: Pneumocystis jirovecii (PCP)

## Encapsulated organisms — **NHS**

**N**eisseria meningitidis, **H**aemophilus influenzae, **S**trep pneumoniae

⚠ Beware in **splenectomy** patients — vaccinate + lifelong penicillin V

## Streptococcus classification

- **α-haemolytic** (partial, green) — *S. pneumoniae*, viridans
- **β-haemolytic** (complete, clear) — Lancefield groups:
  - **Group A (GAS)** = S. pyogenes (tonsillitis, post-strep GN/RF)
  - **Group B (GBS)** = S. agalactiae (neonatal sepsis)
- γ-haemolytic (none) — Enterococcus`,
        },
        {
          id: "immunocompromised_micro",
          name: "Microbiology in Immunocompromised",
          content: `## Causes of immunosuppression

- Genetic (rare)
- Acquired:
  - Transplant (solid organ; HSCT requires short-term IS)
  - AIDS
  - Iatrogenic: chemotherapy (neutropenia), biologics, corticosteroids

## Why infections are different

- Disseminated, different organs, more severe
- **Oncogenic potential** (HHV-8 → Kaposi's; EBV → PTLD)

## Diagnosis

- Serology unreliable (impaired immune response)
- **PCR** for viral monitoring
- Pre-immunosuppression: serology to screen
- Post: PCR

## Specific concerns

### Viruses

- Herpesviridae (latent): CMV, EBV, HSV, **HHV-8**, VZV
- Polyomaviridae: **JC** (PML), **BK** (cystitis/nephropathy)
- Respiratory: influenza, RSV, parainfluenza, adenovirus
- Hepatitis: A (vaccinate pre-IS), B, C, **E (chronic in immunosuppressed)**

### Fungi

- Candida, **Cryptococcus**, **Aspergillus**, dermatophytes, mucormycosis

### Other

- PCP: prophylaxis with co-trimoxazole if CD4 <200`,
        },
      ],
    },

    // =========================================================================
    {
      id: "immunology",
      name: "Immunology",
      icon: "🛡️",
      topics: [
        {
          id: "innate",
          name: "Innate Immune System",
          content: `## Three components

### Physical barriers

- Skin (keratin, sebaceous oil, **lysozyme**, defensins, low pH)
- Mucosal surfaces (mucus + **secretory IgA**, **lactoferrin** — iron starvation, cilia)

### Cells

- **Granulocytes (PMN)**:
  - Neutrophils — most abundant, phagocytosis
  - Basophils / mast cells — histamine release
  - Eosinophils — defence against parasites
- **Monocytes / macrophages** — phagocytosis + antigen presentation
  - Tissue-resident: liver = **Kupffer**, kidney = mesangial, bone = **osteoclast**, lung = alveolar, CNS = **microglia**, skin = **Langerhans**, connective tissue = histiocyte
- **Dendritic cells** — APC; activate CD4 + CD8
- **NK cells** — cytotoxic; kill cells lacking inhibitory self-HLA (virus-infected, malignant)

### Soluble mediators

- **TNF-α, IL-1** — pro-inflammatory
- **IL-6** — fever; acute phase response
- **IFN-γ** — macrophage activation; intracellular pathogens
- **IFN-α** — antiviral
- **Complement** (see below)

## Complement cascade

- **Classical pathway**: antibody-antigen → C1 → C2/C4 → C3 convertase
- **MBL pathway**: MBL binds bacterial sugars → C2/C4 → C3 convertase
- **Alternative pathway**: C3 directly binds LPS

All converge on C3 → C5-C9 → **MAC** (membrane attack complex), pore-forming.

## Phagocyte killing

### Oxidative

- **NADPH oxidase** → superoxide, H₂O₂
- **Myeloperoxidase** → hypochlorous acid

### Non-oxidative

- Lysozyme, lactoferrin

## Recognition

- **PAMPs** (pathogen-associated molecular patterns) on **TLRs / mannose receptors**
- Fc receptors recognise antibody-coated targets
- **Opsonins**: antibodies, complement (CR1), CRP`,
        },
        {
          id: "adaptive",
          name: "Adaptive Immune System",
          content: `## Components

- **Humoral**: B lymphocytes + antibodies
- **Cellular**: T lymphocytes (CD4, CD8)
- Soluble: cytokines + chemokines

## Lymphoid organs

- **Primary** (development): bone marrow (B cells), thymus (T cells, involutes after puberty)
- **Secondary** (interaction sites): spleen, LNs, MALT

## T cells — **all CD3+**

> Mnemonic: 8 × 1 = 8; 4 × 2 = 8

- **CD8+** (cytotoxic) — recognise intracellular peptides via **HLA Class I (A/B/C — 1 letter)**. Kill via **perforin + granzymes + Fas-L**.
- **CD4+** (helper) — recognise extracellular peptides via **HLA Class II (DR/DP/DQ — 2 letters)**
  - **Th1** — cell-mediated, helps CD8 + macrophages; IL-2, IFN-γ, TNF
  - **Th2** — humoral; IL-4, IL-5, IL-6
  - **Th17** — neutrophil recruitment; IL-17, IL-21, IL-22

## B cells

- Mature in bone marrow → IgM-expressing
- With T-cell help in germinal centre: **isotype switching** (IgG, IgE, IgA) + **somatic hypermutation** (high affinity)
- CD40L (T cell) : CD40 (B cell) interaction required
- Differentiate into plasma cells (Ig production) + memory cells

## Immunoglobulin classes

- **IgM** — first response, pentameric
- **IgG** — major response; **only Ig that crosses placenta**
- **IgA** — mucosal/secreted (with J chain + secretory component)
- **IgE** — anaphylaxis, parasites
- **IgD** — minor; B cell receptor

## Memory

- Pool of antigen-specific cells with enhanced response on re-exposure (lasts decades)
- Markers: CD45 RO (memory), CD45 RA (naive)
- Subtypes:
  - **Central memory** (CCR7+, CD62L hi) — lymph nodes; produce IL-2; mostly CD4
  - **Effector memory** (CCR7−, CD62L lo) — peripheral tissues; produce perforin/IFN-γ; mostly CD8

## Mantoux test

- 0.1 mL of 5 TU intradermal; read induration at 48-72 h; ≥10 mm = positive (previous TB exposure or BCG)`,
        },
        {
          id: "phagocyte_def",
          name: "Phagocyte Defects",
          content: `## Reticular dysgenesis

- AR severe SCID; **AK2 mutation**
- Failure of myeloid + lymphoid stem cells → no neutrophils, lymphocytes, monocytes, platelets
- Fatal in early life unless BMT

## Kostmann syndrome

- AR severe **congenital neutropenia**; HAX1 mutation

## Cyclic neutropenia

- AD; episodic neutropenia every 4-6 weeks; **ELA-2** mutation

## Leukocyte Adhesion Deficiency (LAD)

- **CD18 (β2 integrin) deficiency** in LAD-1 → neutrophils can't transmigrate from blood
- Triad:
  - **Very high neutrophil count** in blood
  - **Absence of pus formation**
  - **Delayed umbilical cord separation**

## Chronic Granulomatous Disease (CGD)

- **Absent NADPH oxidase** → no respiratory burst → no HOCl
- Susceptibility to **catalase-positive bacteria** (PLACESS — **P**seudomonas, **L**isteria, **A**spergillus, **C**andida, **E**.coli, **S**taph aureus, **S**erratia)
- Granuloma formation, hepatosplenomegaly, lymphadenopathy
- Investigations:
  - **Negative NBT** (nitroblue tetrazolium) test
  - **DHR** (dihydrorhodamine) flow cytometry — abnormal
- Tx: **interferon-γ**; antibiotic (co-trimoxazole) + antifungal (itraconazole) prophylaxis; HSCT

## IL-12 / IFN-γ axis defect

- Susceptibility to **mycobacteria** (TB, atypical, BCG), Salmonella
- Impaired granuloma formation`,
        },
        {
          id: "complement_def",
          name: "Complement Deficiencies",
          content: `## Classical pathway (C1, C2, C4)

- **C2 deficiency** most common; almost all patients have **SLE**
- Failure to clear immune complexes → autoimmunity (SLE)
- Severe skin disease; ↑ infections

## Alternative pathway (Factor B/D/Properdin)

- **Recurrent infections with encapsulated bacteria**
- Properdin stabilises C3 convertase

## MBL deficiency

- Common but often clinically silent
- ↑ infections in: prematurity, chemo, HIV, antibody deficiency

## C3 deficiency

- Severe susceptibility to **encapsulated bacteria** (meningococcus, strep, H. influenzae)
- ↑ connective tissue disease

### Secondary C3 deficiency

- **Nephritic factors** (auto-antibodies stabilising C3 convertase) → consumption
- Often associated with **membranoproliferative GN** + partial lipodystrophy

## Terminal common pathway (C5-C9)

- Inability to make MAC → can't lyse encapsulated bacteria
- Specific susceptibility to:
  - **Neisseria meningitidis (recurrent)**
  - Strep pneumoniae
  - H. influenzae

## Investigations

- **CH50** — classical pathway integrity
- **AP50** — alternative pathway integrity

## Management

- Vaccinate (encapsulated organisms)
- Prophylactic antibiotics
- High suspicion + early treatment
- Screen family members`,
        },
        {
          id: "scid",
          name: "SCID & Lymphocyte Defects",
          content: `## SCID — general

- Symptomatic by 3 months (after maternal IgG wanes)
- Infections of all kinds, FTT, persistent diarrhoea
- Poorly developed lymphoid tissue, family history of early infant death

## Subtypes

| Type | % | Mechanism | T | B | NK |
| --- | --- | --- | --- | --- | --- |
| **X-linked SCID** | 45% | IL-2 receptor γ chain mutation (Xq13.1) | ↓↓ | N or ↑ | ↓↓ |
| **ADA deficiency** | 16.5% | Adenosine deaminase deficiency | ↓↓ | ↓↓ | ↓↓ |
| Reticular dysgenesis | rare | AK2 (no myeloid/lymphoid) | ↓ | ↓ | ↓ |

## DiGeorge syndrome (22q11.2 deletion) — **CATCH-22**

- **C**ardiac (Tetralogy of Fallot)
- **A**bnormal facies
- **T**hymic aplasia → T-cell lymphopenia
- **C**left palate
- **H**ypocalcaemia (hypoparathyroidism)
- **22**q11.2

> Improves with age (homeostatic proliferation). Normal B cells; reduced T cells.

## Bare lymphocyte syndrome type II

- Defect in CIITA / RFX → no MHC Class II → no CD4
- Profound CD4 deficiency; failure of class switching

## Wiskott-Aldrich Syndrome (WAS)

- X-linked recessive; WAS gene (actin cytoskeleton) → poor T-APC interaction
- **Triad: thrombocytopenia + eczema + immunodeficiency** (raised IgE)
- ↑ risk of **lymphoma**
- ↓IgM, ↑IgA + IgE; IgG variable

## Bruton's X-linked agammaglobulinaemia

- **BTK gene** mutation; **boys only**
- Pre-B cells can't mature → no mature B cells → **no circulating Ig after ~3 months**
- Recurrent childhood infections; absent tonsils / scanty LNs (no germinal centres)

## Selective IgA deficiency

- Prevalence 1:600
- 2/3 asymptomatic; 1/3 recurrent respiratory + GI infections

## Hyper-IgM syndrome

- X-linked recessive; **CD40L mutation** (Xq26)
- T-B cell communication failure → no class switching
- ↑↑ IgM, undetectable IgA/IgE/IgG
- **Pneumocystis jirovecii** infection, recurrent bacterial, autoimmune, malignancy
- Boys with FTT in first few years

## Common Variable Immunodeficiency (CVID)

- Heterogeneous; failure of B cell differentiation
- Defined by: ↓ IgG with ↓ IgA or IgM + poor vaccine response + exclusion
- Recurrent bacterial infections, **bronchiectasis**, ILD, IBD-like, autoimmune (AIHA, RA, PA, thyroiditis), **Non-Hodgkin lymphoma**

## Patterns of infection by deficiency

| Deficiency | Pattern |
| --- | --- |
| Phagocyte | Recurrent deep bacterial + fungal |
| Complement | Encapsulated bacterial (Neisseria, Strep, H. influenzae) |
| **T cell** | **Viruses (CMV), fungi (PCP, Crypto), intracellular bacteria (TB, Salmonella), enterovirus** |
| **B cell / antibody** | **Bacterial (Staph, Strep), toxins (tetanus, diphtheria), enterovirus** |

## Treatment

- Phagocyte defects: prophylactic antibiotics + antifungals; HSCT
- T cell: prophylaxis, **Ig replacement**, HSCT, gene therapy
- B cell: **Ig replacement every 3 weeks** (pooled IgG)`,
        },
        {
          id: "hypersensitivity",
          name: "Hypersensitivity Types I-IV",
          content: `## Type I — Immediate (IgE-mediated)

- IgE on mast cells → re-exposure → degranulation → histamine etc.
- Vasodilation, ↑ permeability, smooth muscle spasm
- **Atopic triad**: eczema, asthma, hay fever

### Examples

- Atopic dermatitis (eczema) — defects in β-defensins predispose to **Staph aureus** superinfection
- Food allergy (milk, egg, peanut, tree nut, fish, shellfish)
- **Oral allergy syndrome** — birch + rosaceae fruit; ragweed + melons; mugwort + celery (cross-reactivity)
- Allergic rhinitis
- Acute urticaria
- **Anaphylaxis**

### Anaphylaxis

- IgE: peanuts, penicillin, stings, latex
- Non-IgE mast cell degranulation: NSAIDs, IV contrast, opioids, exercise
- DDx: **C1 inhibitor deficiency (hereditary angioedema)**, ACEi-induced angioedema
- Tx: **IM adrenaline 500 mcg**, oxygen, fluids, leg elevation; bronchodilators (steroids/antihistamines no longer routine)

### Investigations

- **Skin prick test** — wheal ≥2 mm > negative control; stop antihistamines 48 h before
- **Specific IgE (RAST)** — less sensitive; useful if can't stop antihistamines / extensive eczema
- **Component-resolved diagnostics** — distinguishes high vs low risk peanut allergens (Ara h 2 vs Ara h 8)
- **Challenge test** (gold standard for food allergy) — risky
- **Mast cell tryptase** in acute episode (peak 1-2 h, baseline by 6 h)

## Type II — Antibody-mediated cytotoxic

IgG/IgM against cell surface or matrix antigen.

| Disease | Antigen | Pathology |
| --- | --- | --- |
| HDN | Neonatal RBC antigens | Maternal IgG → haemolysis |
| **AIHA** (warm/cold) | RBC surface (Rh) | Coombs +ve haemolysis |
| **ITP** | Glycoprotein IIb/IIIa | Platelet destruction |
| **Goodpasture's** | Type IV collagen NC1 | GN + lung haemorrhage; **linear IgG on BM** |
| **Pemphigus vulgaris** | Epidermal cadherin | Non-tense bullae; IgG on direct IF |
| **Graves'** | TSH receptor | Hyperthyroid (stimulating Ab) |
| **Myasthenia gravis** | AChR | Fatigable weakness; tensilon test |
| Acute rheumatic fever | M protein cross-reacts cardiac myosin | Carditis, arthritis, chorea |
| Pernicious anaemia | IF + parietal cells | B12 deficiency |
| **Granulomatosis w/ polyangiitis** | PR3 | **cANCA**; sinus, lung, kidney |
| **Eosinophilic GPA** (Churg-Strauss) | MPO | **pANCA**; asthma → eosinophilia → systemic |
| Microscopic polyangiitis | MPO | **pANCA**; pulmonary-renal |

## Type III — Immune complex (IgG/IgM-Ag)

| Disease | Antigen |
| --- | --- |
| **Mixed essential cryoglobulinaemia** | IgM vs IgG ± hep C |
| **Serum sickness** | Antiserum proteins (penicillin) — develops 7-12 days |
| **Polyarteritis nodosa** | Hep B/C; **rosary sign** (microaneurysms) |
| **SLE** | Nuclear (DNA, histones, RNP); ↓C4, **↓C3 only in severe**; ANA, **anti-dsDNA**, anti-Sm |

## Type IV — Delayed (T-cell mediated)

| Disease | Antigen |
| --- | --- |
| Type 1 DM | Pancreatic β-cell GAD, islet cells |
| **Multiple sclerosis** | Oligodendrocyte myelin proteins; **oligoclonal bands in CSF** |
| RA (also Type III) | Synovial; RF + anti-CCP |
| Contact dermatitis | Nickel, poison ivy; patch test |
| **Mantoux test** | Tuberculin |
| Crohn's | NOD2 (CARD-15) gene mutation in 30% |`,
        },
        {
          id: "autoimmune",
          name: "Autoinflammatory & Autoimmune",
          content: `## Definitions

- **Autoinflammatory** — innate immune response (often monogenic, no autoantibodies)
- **Autoimmunity** — adaptive immune response (often polygenic, autoantibodies)
- **Mixed** — both

## Familial Mediterranean Fever (autoinflammatory)

- AR; **MEFV** mutation → ↑ IL-1, TNF-α activation of neutrophils
- Periodic fevers 48-96 h with:
  - Abdominal pain (peritonitis)
  - Chest pain (pleurisy/pericarditis)
  - Arthritis, rash
- Long-term: **AA amyloidosis** (proteinuria, nephrotic, RF)
- Tx: **colchicine** (binds tubulin); anakinra (IL-1RA), etanercept

## Crohn's (polygenic autoinflammatory)

- IBD1 / **NOD2 (CARD-15)** mutation on Chr 16

## Causes of autoimmunity

1. **Failure of central tolerance** (APS-1) — AIRE defect
2. **Failure of peripheral tolerance** (IPEX) — Foxp3 / Treg defect
3. **Failure of lymphocyte apoptosis** (ALPS) — Fas pathway
4. **Molecular mimicry** — post-strep RF (anti-M cross-reacts cardiac myosin); ankylosing spondylitis
5. **Hidden antigens released** — Dressler's post-MI
6. **Modified self** — drug-induced AIHA, mycoplasma cold AIHA

## Monogenic autoimmune

| Disease | Gene | Inheritance | Features |
| --- | --- | --- | --- |
| **APS-1 / APECED** | AIRE | AR | Multi-endocrine: hypothyroid, hypoparathyroid, Addison's, T1DM, vitiligo |
| **IPEX** | FoxP3 | X-linked | **3 Ds: Diabetes, Diarrhoea, Dermatitis**; nail dystrophy |
| **ALPS** | FAS pathway | AD | High lymphocytes, splenomegaly, lymphoma, cytopenias |

## Organ-specific autoantibodies

| Disease | Antibody |
| --- | --- |
| **Autoimmune hepatitis** | Anti-smooth muscle, anti-LKM-1, anti-SLA |
| AIHA | Anti-Rh |
| ITP | Anti-GP IIb/IIIa or Ib/IX |
| Bullous pemphigoid | Anti-hemidesmosome |
| **Coeliac** | **Anti-tTG (IgA)**, anti-endomysial (IgA) |
| Congenital heart block in SLE infants | **Anti-Ro** |
| Dermatitis herpetiformis | Anti-endomysial (IgA) |
| Goodpasture's | **Anti-GBM** |
| Graves' | Anti-TSH receptor (stimulating) |
| **Hashimoto's** | Anti-TPO, anti-thyroglobulin |
| Myasthenia gravis | Anti-AChR |
| Pernicious anaemia | Anti-parietal (90%), anti-IF (50%) |
| **Primary biliary cirrhosis** | Anti-mitochondrial |
| T1DM | Anti-GAD, islet cell |

## Multi-system autoimmune

### SLE — **SOAP BRAIN MD** (4/11 criteria)

- **S**erositis, **O**ral ulcers, **A**rthritis, **P**hotosensitivity
- **B**lood (pancytopenia), **R**enal, **A**NA, **I**mmunological (anti-dsDNA, anti-Sm), **N**eurological
- **M**alar rash, **D**iscoid rash

> Anti-dsDNA, anti-Sm specific. Anti-histone in **drug-induced** (hydralazine, procainamide, isoniazid).
> Disease activity: ↑titres + **complement consumption** (low C4 active; low C3+C4 severe).

### Sjögren's

- **Anti-Ro, anti-La**; F:M 9:1; late 40s
- Dry eyes (keratoconjunctivitis sicca), mouth (xerostomia)
- Schirmer test
- Risk of **MALT lymphoma (parotid)**

### Limited cutaneous scleroderma (CREST)

- **C**alcinosis, **R**aynaud's, oe**S**ophageal dysmotility, sclero**D**actyly, **T**elangiectasia
- **Anti-centromere**
- Skin: distal only; perioral
- Late risk: pulmonary hypertension

### Diffuse cutaneous scleroderma

- CREST + GI + ILD + renal crisis
- **Anti-Scl70 (anti-topoisomerase II)**, anti-RNA Pol III
- Pulmonary fibrosis

### Inflammatory myopathies

- **Polymyositis / Dermatomyositis** — **anti-Jo1** (tRNA synthetase)
- ↑ CK, LDH, myoglobin; abnormal EMG; muscle biopsy diagnostic
- DM cutaneous: heliotrope rash, **Gottron's papules**, V-sign rash
- Underlying malignancy: DM → ovarian/pancreatic/NHL; PM → lung/bladder/NHL

## HLA associations

- **B27 — PAIR**: **P**soriatic arthritis, **A**nkylosing spondylitis, **I**BD-associated, **R**eactive arthritis
- DR15/DR2 — Goodpasture's
- DR3 — Graves', SLE, T1DM
- DR4 — RA (4 walls in a rheum), T1DM
- **DQ2/DQ8** — Coeliac (I ate-8 too-2 much)`,
        },
        {
          id: "transplant",
          name: "Transplantation",
          content: `## Terminology

- **Isograft** — twin
- **Allograft** — same species
- **Xenograft** — different species
- Split graft — shared by two recipients

## Mismatch causes

- **HLA mismatch** (DR > B > A) — most important
- Minor HLA (other polymorphic peptides)
- ABO blood antigens

## HLA classes (review)

- Class I (A, B, C) — all cells; CD8 recognition
- Class II (DR, DQ, DP) — APC; CD4 recognition

## Types of rejection

| Type | Time | Mechanism | Pathology | Treatment |
| --- | --- | --- | --- | --- |
| **Hyperacute** | Mins-hrs | Preformed Abs + complement | Thrombosis, necrosis | **Prevention** by ABO + crossmatch |
| **Acute cellular** | <6 mo | CD4 → Type IV reaction | Cellular infiltrate | Steroids ± OKT3 |
| **Acute Ab-mediated** | <6 mo | B-cell Abs vs vessels | Vasculitis, **C4d** deposition | Plasma exchange + IS |
| **Chronic** | >6 mo | Mixed | Fibrosis, vasculopathy, glomerulopathy, **bronchiolitis obliterans** (lung) | Minimise damage |
| **GvHD** (HSCT) | Days-weeks | Donor cells attack host | Skin (rash), gut (D+V, bloody stool), liver (jaundice) | Steroids; prevention with **irradiated** components |

## Cross-match assays

- Cytotoxicity (CDC) — does recipient serum kill donor lymphocytes?
- Flow cytometry — does serum bind donor lymphocytes?
- **Solid-phase Luminex** — detects Abs to specific HLA molecules

## Immunosuppressive regimens

### Induction (pre-transplant)

- T-cell depleting: **alemtuzumab** (anti-CD52), **basiliximab** (anti-CD25), OKT3, ATG

### Maintenance

- **Steroid + calcineurin inhibitor + antiproliferative** (azathioprine / MMF)

### Acute rejection treatment

- Cellular: methylprednisolone pulses + oral taper
- Ab-mediated: IVIG, plasma exchange, anti-C5, anti-CD20

## Post-transplant complications

- **Infection** — bacterial, viral, fungal; opportunistic (CMV, BK, PCP)
- **Malignancy**:
  - Viral-associated × 100: **Kaposi's (HHV-8), PTLD (EBV)**
  - Skin × 20 (HPV)
  - Other × 2-3
- **Atherosclerosis** — × 20 MI mortality vs general population

## HSCT-specific GvHD

- Allo-HSCT only
- Skin desquamation, GI Sx, jaundice, BM failure
- Prophylaxis: methotrexate / ciclosporin
- Tx: corticosteroids`,
        },
        {
          id: "immune_modulation",
          name: "Immune Modulation",
          content: `## Vaccination

### Active vs passive

- **Active**: body produces antibodies; long-term
- **Passive**: pre-formed Igs (HNIG, **HBIG, HRIG, VZIG**, palivizumab for RSV); ~3 weeks duration

### Vaccine types

| Type | Pros | Cons | Examples |
| --- | --- | --- | --- |
| **Live attenuated** | Lifelong, all immune phases | Risk in immunosuppressed | **MMR-VBOY** — MMR, VZV, BCG, Oral polio (Sabin), Yellow fever |
| **Inactivated/component** | Safe, easier storage | Boosters needed | Influenza (jab), polio (Salk), Hep A, Hep B (HBsAg), HPV (capsid), tetanus toxoid |
| **Conjugate** | Effective vs encapsulated | – | **NHS** — Neisseria, H. influenzae, Strep pneumoniae |
| **mRNA / DNA** | Rapid manufacturing | New tech | SARS-CoV-2 |

> HIV+ can have MMR but **NOT BCG or yellow fever**.

## Adoptive T cell therapy

- Virus-specific T cells (e.g. EBV-PTLD)
- **TIL therapy** — head/neck SCC, melanoma
- **TCR therapy** — engineered receptors
- **CAR-T cells** — chimeric receptor + CD19 targeting; ALL, NHL

## Cytokine therapy

- **IL-2** — renal cancer; T cell response
- **IFN-α** — Hep B, Hep C (with ribavirin), CML, hairy cell leukaemia, melanoma. **'ABC'** — IFNα for Hep **B** + **C** + CML
- **IFN-β** — relapsing-remitting MS
- **IFN-γ** — chronic granulomatous disease (boosts macrophages)

## Immune checkpoint inhibitors (advanced melanoma)

- **Ipilimumab** — anti-CTLA4 (T cell co-stimulation block)
- **Pembrolizumab / nivolumab** — anti-PD-1 (prevents T cell inactivation by tumours)

## Immunosuppressive drugs

| Drug | Mechanism | Indications | Side effects |
| --- | --- | --- | --- |
| **Steroids** | Inhibit phospholipase A2; ↓ phagocyte trafficking; lymphopenia | Allergy, autoimmune, transplant | Cushingoid, osteoporosis, infection |
| **Cyclophosphamide** | Alkylates guanine | Vasculitis, cancer | BM suppression, **haemorrhagic cystitis (acrolein), bladder cancer**, infertility |
| **Mycophenolate (MMF)** | Inhibits IMPDH (purine synthesis) | Transplant, autoimmune | BM suppression, **PML (JC virus)** |
| **Azathioprine** | → 6-MP; blocks purine synthesis | Transplant, autoimmune | BM suppression — **check TPMT** before starting |
| **Methotrexate** | Anti-folate (DHFR) | RA, psoriasis, Crohn's | BM, hepatotoxic, **pneumonitis/fibrosis**, teratogenic |
| **Tacrolimus** | Calcineurin inhibitor | Transplant | **Nephrotoxic**, hypertension, neurotoxic, diabetogenic |
| **Ciclosporin** | Calcineurin inhibitor | Transplant | Nephrotoxic, **gum hypertrophy, hypertrichosis** |
| **Sirolimus** | mTOR inhibitor | Transplant | Less nephrotoxic |
| **Plasmapheresis** | Remove pathogenic Abs | Goodpasture's, MG, Ab-mediated rejection | Rebound, anaphylaxis |

## Biologics — surface antigens

- **Rituximab** (anti-CD20) — depletes B cells; lymphoma, RA, SLE; PML risk
- **Basiliximab** (anti-CD25) — transplant
- **Abatacept** (CTLA4-Ig) — RA
- **Vedolizumab** (anti-α4β7) — IBD
- **Natalizumab** (anti-α4β1) — RRMS, Crohn's; **PML risk**
- **Tocilizumab** (anti-IL-6R) — RA, Castleman's, COVID
- **Alemtuzumab** (anti-CD52) — CLL, MS
- **Denosumab** (anti-RANKL) — osteoporosis, bone mets

## Biologics — cytokines

- **TNF-α inhibitors** — infliximab, adalimumab, certolizumab, golimumab; etanercept (TNFR fusion). For RA, AS, IBD, psoriasis. **Reactivate TB** — screen pre-Rx
- **IL-12/23** — ustekinumab; **IL-23** — guselkumab; **IL-17A** — secukinumab. For psoriasis, AS
- **IL-1** — anakinra (FMF, gout, Still's)
- **IL-4/5/13** — eczema, eosinophilic asthma

## JC virus / PML

- Polyoma virus reactivates → infects oligodendrocytes → demyelination
- Seen with potent immunosuppressives (natalizumab, MMF, rituximab)
- Diagnosis: CSF PCR + MRI`,
        },
        {
          id: "hiv",
          name: "HIV",
          content: `## Background

- RNA retrovirus; binds **CD4 via gp120** (initial) and **gp41** (conformational change)
- Co-receptors: **CCR5 or CXCR4**
- Reverse transcriptase → integrates DNA into host genome
- Quasispecies generated by error-prone RT (immune escape)

## Damage to immune response

- CD4+ T cell depletion (chronic activation, exhaustion)
- Disrupted lymph node architecture
- Loss of antigen-specific humoral response
- HIV remains infectious even when antibody-coated

## Natural history

3 stages: Acute → Asymptomatic → AIDS

- Median to AIDS: 8-10 years
- **Rapid progressors** (10%) — 2-3 years
- **Long-term non-progressors** (<5%) — stable for >10 years
- Initial viral set point predicts progression

## CD4 count milestones

- **<200** → AIDS, **PCP** prophylaxis
- **<150** → Pneumocystis jirovecii
- **<75** → MAC disease
- **<400** → Kaposi's

## Diagnosis

- **Screening**: anti-HIV ELISA (after **seroconversion ~10 weeks**)
- Confirmation: Western blot
- Acute infection / negative serology: **HIV-1 RNA PCR**
- Children <18 months: HIV-1 RNA/DNA (maternal IgG transfer makes serology useless)

## Monitoring

- Viral load (PCR), CD4 count (FACS)
- Resistance testing — phenotypic or genotypic
- AIDS defined as CD4 <200/µL

## Treatment

**HAART = 2 NRTIs + 1 PI (or NNRTI)**

- All HIV+ should start treatment immediately (BHIVA guidance)
- Example: emtricitabine + tenofovir + efavirenz (1 pill — Atripla)

### Drug classes

- **NRTIs** — lamivudine, zidovudine; SE severe anaemia
- **NNRTIs** — efavirenz; **avoid in pregnancy** (NTDs)
- **PIs** — ritonavir; pancreatitis
- **Integrase inhibitors** — dolutegravir
- **Entry inhibitors**

### Pregnancy

- Zidovudine antenatally PO + IV in labour + 6 weeks PO neonate → reduces transmission 26% → 8%

## Limitations

- Doesn't eradicate latent HIV
- Doesn't restore HIV-specific T cell responses
- Toxicities, adherence, cost
- Doesn't reverse chronic immune inflammation (CV, liver, bone, CNS disease)

## Innate response

- Macrophages, NK cells, complement
- DCs via TLRs
- Cytokine/chemokine release

## Adaptive response

- **Neutralising**: anti-gp41 IgM (early), anti-gp120 (later)
- Non-neutralising: anti-p24 gag IgG
- CD8+ T cells produce **MIP-1α/β + RANTES** to block CCR5 (entry blockade)`,
        },
      ],
    },

    // ====================== HISTOPATHOLOGY SECTIONS ======================
    {
      id: "cardiac_path",
      name: "Cardiac Pathology",
      icon: "🫀",
      topics: [
        {
          id: "atherosclerosis",
          name: "Atherosclerosis",
          content: `## Definition

Atherosclerosis is a chronic inflammatory disease of the tunica intima (the innermost layer) of large and medium-sized muscular and elastic arteries. It is characterised by intimal thickening and lipid accumulation.

## Steps of atherogenesis

1. Endothelial injury (from hypertension, smoking, hyperglycaemia, dyslipidaemia, or abnormal shear stress) increases endothelial permeability and allows low density lipoprotein (LDL) to accumulate.
2. LDL enters the intima and is trapped in the sub-intimal space.
3. Trapped LDL is converted to modified and oxidised LDL, which triggers local inflammation.
4. Macrophages take up oxidised LDL via scavenger receptors and become **foam cells**.
5. Foam cells eventually undergo apoptosis, releasing their lipid content. This forms the cholesterol-rich core of the plaque and amplifies inflammation.
6. Up-regulation of adhesion molecules on the inflamed endothelium (such as VCAM-1 and ICAM-1) recruits more macrophages and T lymphocytes into the plaque.
7. Vascular smooth muscle cells migrate from the media to the intima, proliferate, and lay down extracellular matrix to form the **fibrous cap**, which physically separates the thrombogenic core from the lumen.

## Plaque components

The mature atheromatous plaque has three principal components:
- **Cells**: smooth muscle cells, macrophages, foam cells, and T lymphocytes.
- **Extracellular matrix**: collagen, elastin, and proteoglycans, forming the fibrous cap.
- **Intracellular and extracellular lipid**, forming the cholesterol-rich core.

## Distribution

The abdominal aorta is more affected than the thoracic aorta. Plaques are most prominent around the ostia (origins) of major branches, where turbulent flow with low and oscillatory shear stress is atherogenic. Areas of high laminar flow are protective.

## Plaque stability and rupture

Plaque stability depends largely on the thickness of the fibrous cap. Thick caps are stable; thin caps with a large lipid core are vulnerable to rupture.

- **Plaque rupture** is the commonest trigger of acute coronary syndromes — cap thinning by macrophage-derived metalloproteinases exposes the thrombogenic core to flowing blood.
- **Plaque erosion** (where the cap is intact but the endothelium is denuded) accounts for a smaller proportion, particularly in younger women and in smokers.

## Risk factors

### Modifiable
- Hypertension
- Hyperlipidaemia (high LDL, low high density lipoprotein, HDL)
- Smoking
- Type 2 diabetes mellitus
- Obesity, sedentary lifestyle, poor diet

### Non-modifiable
- Increasing age
- Male sex (risk in women rises and equalises after menopause)
- Family history of premature cardiovascular disease

## High-yield additions for MRCP

- **Lipid management**: a high-intensity statin (atorvastatin 80 mg) typically reduces LDL by 50% or more. Add ezetimibe and proprotein convertase subtilisin/kexin type 9 (PCSK9) inhibitors (evolocumab, alirocumab) if LDL targets are not met.
- **NICE primary prevention**: offer a statin if the 10-year cardiovascular risk (calculated by QRISK3) is greater than or equal to 10%.
- **Familial hypercholesterolaemia** is autosomal dominant and is most often caused by mutations in the LDL receptor, apolipoprotein B, or PCSK9. Consider it in patients with very high LDL or premature cardiovascular disease.
- **Statin side effects**: myalgia, myopathy (rarely rhabdomyolysis), and transaminitis. Check creatine kinase if symptomatic.`,
        },
        {
          id: "ihd_mi",
          name: "Ischaemic Heart Disease & Myocardial Infarction",
          content: `## Ischaemic heart disease overview

Ischaemic heart disease describes a group of conditions in which oxygen supply to the myocardium falls below demand, almost always because of narrowed coronary arteries from atherosclerosis. The spectrum includes:

- **Stable angina**: predictable chest pain on exertion, typically associated with around 70% vessel occlusion. Pain resolves with rest or glyceryl trinitrate (GTN).
- **Unstable angina**: pain at rest or rapidly worsening pain, with around 90% or greater vessel occlusion. This represents impending infarction and is part of the **acute coronary syndrome (ACS)** spectrum.
- **Prinzmetal (variant) angina**: a rare cause due to coronary artery spasm rather than fixed atherosclerosis. Typically occurs at rest, often in the early morning, and may produce transient ST elevation.
- **Myocardial infarction**: irreversible myocyte death from prolonged ischaemia.

In stable and unstable angina the ischaemia is reversible — there is no muscle death.

## Acute coronary syndrome classification

Acute coronary syndrome is divided clinically by ECG and biomarkers:
- **Unstable angina**: typical chest pain at rest with no rise in troponin.
- **Non-ST-elevation myocardial infarction (NSTEMI)**: troponin rises but the ECG does not show ST elevation. The ECG may show ST depression or T-wave inversion.
- **ST-elevation myocardial infarction (STEMI)**: ST elevation on ECG (≥1 mm in two contiguous limb leads or ≥2 mm in two contiguous chest leads), or new left bundle branch block, with rise in troponin.

## Pathogenesis of myocardial infarction

Coronary atherosclerotic plaque rupture or erosion exposes the thrombogenic core (collagen, lipid, tissue factor) to flowing blood. This triggers platelet activation and aggregation, fibrin formation, and an occlusive intracoronary thrombus overlying the disrupted plaque. Vasospasm contributes. The distal myocardium is rendered ischaemic, and severe ischaemia lasting more than 20 to 40 minutes results in irreversible injury and myocyte death.

## Histological evolution of myocardial infarction

The histological appearance of an infarct evolves predictably with time:

| Time after MI | Histological findings |
| --- | --- |
| 0-6 hours | Normal histology (and creatine kinase-MB still normal) |
| 6-24 hours | Loss of nuclei, homogeneous (eosinophilic) cytoplasm, coagulative necrosis |
| 1-4 days | Infiltration by neutrophils, then macrophages; debris clearance begins |
| 5-10 days | Removal of necrotic debris by macrophages |
| 1-2 weeks | Granulation tissue: new blood vessels, myofibroblasts, early collagen |
| Weeks to months | Strengthening, decellularising scar tissue (mature fibrous scar) |

This timeline is highly examined and allows histological dating of an infarct.

## Complications of myocardial infarction

### Mechanical
- **Contractile dysfunction**: loss of viable muscle reduces cardiac output and may produce **cardiogenic shock**.
- **Congestive cardiac failure** secondary to ventricular dysfunction.
- **Papillary muscle dysfunction or rupture** (especially after inferior MI): produces acute mitral regurgitation.
- **Cardiac rupture**: of the ventricular free wall (with tamponade), of the interventricular septum (causing a left-to-right shunt and a new ventricular septal defect), or of a papillary muscle.
- **Ventricular aneurysm**: develops more than 4 weeks after MI; suggested by persistent ST elevation on ECG.

### Arrhythmic
- **Ventricular fibrillation**: usually within the first 24 hours; a common cause of sudden cardiac death post-MI.
- Approximately 90% of patients develop some form of arrhythmia after MI.
- AV block, especially with inferior MI affecting the right coronary artery (which supplies the AV node).

### Pericardial
- **Early or peri-infarct pericarditis**: 1-3 days post-MI; the underlying tissue is dusky and haemorrhagic.
- **Pericardial effusion**, with or without tamponade.
- **Dressler's syndrome**: chest pain, fevers, and pericardial effusion 2 to 10 weeks after MI; thought to be autoimmune.
- **Fibrinous pericarditis**: occurs when the infarct extends to the epicardium.

### Thromboembolic
- Mural thrombus formation in the akinetic ventricular wall, with risk of **systemic embolisation** (stroke, mesenteric ischaemia, limb ischaemia).

## Treatment of STEMI

- **Immediate**: aspirin 300 mg loading dose plus a second antiplatelet (ticagrelor, prasugrel, or clopidogrel); morphine for pain; oxygen if hypoxic; nitrates; an anti-emetic.
- **Reperfusion**:
  - **Primary percutaneous coronary intervention (PCI)** is first-line if available within 120 minutes of medical contact. The door-to-balloon target is less than 90 minutes.
  - **Thrombolysis** (alteplase, tenecteplase) if PCI is not available within 120 minutes; rescue PCI if thrombolysis fails.

## Treatment of NSTEMI / unstable angina

- Aspirin plus ticagrelor as antiplatelet therapy, plus anticoagulation (fondaparinux or low molecular weight heparin).
- Risk-stratify with the **GRACE score**:
  - Low risk: medical management with later outpatient evaluation.
  - Intermediate or high risk: invasive strategy with coronary angiography within 24-72 hours.

## Secondary prevention — the four pillars

After MI, every patient should be offered:
1. **Aspirin** 75 mg lifelong (plus a second antiplatelet for 12 months).
2. A **beta-blocker** (e.g. bisoprolol).
3. An **angiotensin-converting enzyme inhibitor (ACEi)**, or an angiotensin receptor blocker (ARB) if intolerant.
4. A **high-intensity statin** (atorvastatin 80 mg).

Cardiac rehabilitation, smoking cessation, blood pressure and glucose control, and weight loss are equally important.`,
        },
        {
          id: "heart_failure",
          name: "Heart Failure",
          content: `## Definition

Heart failure is the clinical syndrome in which the heart is unable to pump sufficient blood to meet the metabolic demands of the body, or can do so only at the cost of elevated filling pressures.

## Key haemodynamic concepts

- **Preload** is the initial stretch of cardiomyocytes before contraction, determined by ventricular end-diastolic volume. Increased preload increases stroke volume (the Frank-Starling law), up to an optimum point beyond which stroke volume falls.
- **Afterload** is the pressure (in the aorta or pulmonary artery) against which the ventricle must contract to eject blood. Increased afterload reduces stroke volume.
- **Contractility** is the inherent strength of myocardial contraction, independent of preload or afterload.

## Common causes

- **Ischaemic heart disease** is the commonest cause.
- Long-standing hypertension.
- Cardiomyopathy (especially dilated).
- Valvular heart disease.
- Myocarditis.
- Arrhythmias.
- Less common: high-output failure (severe anaemia, hyperthyroidism, arteriovenous malformation, beriberi).

## Pathophysiology and compensatory mechanisms

When cardiac output falls, two main neurohormonal systems are activated:
- **Renin-angiotensin-aldosterone system (RAAS)**: activated in response to reduced renal perfusion. It causes salt and water retention, which maintains short-term perfusion but produces fluid overload when sustained.
- **Sympathetic nervous system**: baroreceptors detect the falling blood pressure and increase sympathetic outflow. This raises heart rate, contractility, and peripheral resistance, but eventually contributes to ventricular hypertrophy, dilatation, and worsening function.

Sustained activation of these systems produces ventricular remodelling: hypertrophy, then dilatation, then poor contractility — the substrate of heart failure with reduced ejection fraction.

## Left ventricular failure

Pooling of blood in the pulmonary circulation, due to high pressures in the left side of the heart, produces:
- Dyspnoea (initially exertional, later at rest).
- Orthopnoea.
- Paroxysmal nocturnal dyspnoea.
- Wheeze ("cardiac asthma").
- Fatigue.
- Pulmonary oedema (frothy pink sputum).

Eventually peripheral perfusion falls, with cool peripheries and oliguria.

## Right ventricular failure

Most commonly secondary to left ventricular failure. Primary right heart failure can result from chronic severe pulmonary hypertension, called **cor pulmonale**. There is little pulmonary congestion but engorgement of the systemic and portal venous systems:
- Peripheral oedema (especially in dependent areas).
- Ascites.
- Facial engorgement.
- Raised jugular venous pressure.
- **Hepatomegaly with congestion**, producing the classical "**nutmeg liver**" — an alternating pale-and-red appearance on cut section, reflecting central venous congestion of the hepatic lobules.

## Investigations

- **B-type natriuretic peptide (BNP) or NT-proBNP**: BNP less than 100 pg/mL effectively rules out heart failure; greater than 400 pg/mL is highly suggestive.
- Chest X-ray: cardiomegaly, **alveolar oedema (bat's wing)**, **Kerley B lines**, upper lobe diversion of vessels, and pleural effusions.
- ECG: looks for evidence of underlying ischaemia, arrhythmia, or strain.
- **Echocardiogram**: gold standard for assessing left ventricular ejection fraction (LVEF) and distinguishing heart failure with reduced ejection fraction (HFrEF, LVEF < 40%) from heart failure with preserved ejection fraction (HFpEF, LVEF ≥ 50%).

## NYHA functional classification

- **Class I**: no limitation; ordinary activity does not cause symptoms.
- **Class II**: slight limitation; ordinary activity causes symptoms.
- **Class III**: marked limitation; less than ordinary activity causes symptoms.
- **Class IV**: symptoms at rest; any activity worsens them.

## Management of heart failure with reduced ejection fraction

The four pillars of guideline-directed medical therapy (GDMT) all reduce mortality:
1. **ACE inhibitor**, or an ARB if intolerant. **Sacubitril/valsartan** (an angiotensin receptor-neprilysin inhibitor, or ARNI) is preferred over ACEi in symptomatic patients on optimal therapy.
2. **Beta-blocker** (bisoprolol, carvedilol, or nebivolol).
3. **Mineralocorticoid receptor antagonist (MRA)**: spironolactone or eplerenone.
4. **Sodium-glucose cotransporter 2 (SGLT2) inhibitor**: dapagliflozin or empagliflozin (proven mortality benefit irrespective of diabetes status).

Add a **loop diuretic** (e.g. furosemide) for symptomatic congestion. Loop diuretics improve symptoms but do not improve mortality.

Device therapy:
- **Implantable cardioverter defibrillator (ICD)** if LVEF less than 35% with NYHA class II or III despite optimal therapy.
- **Cardiac resynchronisation therapy (CRT)** if LVEF less than 35%, NYHA class II to IV, and QRS greater than 130 ms (especially with left bundle branch block morphology).

## Acute pulmonary oedema management

- Sit the patient upright.
- High-flow oxygen aiming for SpO₂ 94-98%.
- **Intravenous loop diuretic** (furosemide 40-80 mg).
- **Nitrates** if systolic BP greater than 110 mmHg (GTN infusion).
- CPAP or non-invasive ventilation if severe.
- Treat the precipitant (ischaemia, arrhythmia, infection, non-compliance with therapy).`,
        },
        {
          id: "cardiomyopathy",
          name: "Cardiomyopathy & Inherited Arrhythmia Syndromes",
          content: `## Patterns of cardiomyopathy

| Pattern | Mechanism of failure | Common causes | Indirect (non-cardiomyopathic) causes |
| --- | --- | --- | --- |
| **Dilated** ("too thin") | Systolic dysfunction | Idiopathic, alcohol, thyroid disease, haemochromatosis, viral myocarditis, peripartum, anthracyclines | Ischaemic heart disease, valve disease, hypertension, congenital heart disease |
| **Hypertrophic** ("too thick") | Diastolic dysfunction | Genetic (sarcomeric mutations), storage diseases | Hypertension, aortic stenosis (causing secondary hypertrophy) |
| **Restrictive** ("too stiff") | Diastolic dysfunction | Sarcoidosis, amyloidosis, radiation-induced fibrosis, endomyocardial fibrosis | Pericardial constriction (mimics restrictive but is not myocardial disease) |

## Hypertrophic cardiomyopathy (HCM)

- The heart is typically thick-walled, heavy, and hyper-contracting.
- The phenotype is myocardial hypertrophy (especially of the interventricular septum and the left ventricle) without ventricular dilatation.
- **Histology**: classical **myocyte disarray** — the disorganised arrangement of hypertrophied myocytes is highly arrhythmogenic.
- **Inheritance**: autosomal dominant.
- **Genetics**: mutations in genes encoding sarcomeric proteins.
  - The most common single mutation is in the **β-myosin heavy chain (β-MHC)** gene (the classical mutation is 403 Arg→Gln).
  - **Myosin-binding protein C (MYBP-C)** and **Troponin T (Trop-T)** mutations are also common. Together with β-MHC, these account for 70-80% of cases.
  - **Troponin T mutations** confer a particularly high risk of sudden cardiac death.
- HCM may cause **sudden cardiac death** in young people, classically during exertion (school athletes).
- **Hypertrophic obstructive cardiomyopathy (HOCM)** describes asymmetric septal hypertrophy producing dynamic left ventricular outflow tract obstruction, with systolic anterior motion (SAM) of the mitral valve and a characteristic ejection systolic murmur that worsens with the Valsalva manoeuvre or on standing.
- 15-20% of HCM cases eventually evolve into a dilated cardiomyopathy phenotype.
- **Management**: beta-blockers or non-dihydropyridine calcium-channel blockers such as verapamil; avoid dehydration, vasodilators, and high-intensity competitive sport. Septal myectomy or alcohol septal ablation is offered for refractory HOCM. An ICD is considered for those with high sudden death risk.

## Dilated cardiomyopathy (DCM)

- Eccentric ventricular dilatation with thinning of the wall and reduced systolic function.
- Causes (mnemonic ABCCCDS):
  - **A**lcohol
  - **B**eriberi (thiamine deficiency)
  - **C**oxsackie B virus (and other post-viral myocarditis)
  - **C**hagas disease
  - **C**ocaine
  - **D**oxorubicin and other anthracyclines
  - **S**arcoidosis, haemochromatosis, idiopathic, peripartum (within the last month of pregnancy or 5 months postpartum), familial
- Treatment is the same as for heart failure with reduced ejection fraction (the four pillars), plus treatment of the underlying cause.

## Restrictive cardiomyopathy

- Stiff ventricles with normal or near-normal systolic function.
- Causes: amyloidosis (the most common in clinical practice), sarcoidosis, haemochromatosis, radiation, endomyocardial fibrosis, and Loeffler endocarditis (eosinophilic).
- It is important to distinguish clinically from constrictive pericarditis (a pericardial disease), which has different management.

## Arrhythmogenic right ventricular cardiomyopathy (ARVC)

- Myocyte loss with **fibrofatty replacement**, typically affecting the right ventricle.
- Autosomal dominant, with mutations in desmosomal proteins (PKP2 is the most common).
- Presents with palpitations, syncope, or sudden cardiac death (often in young athletes).
- ECG: T-wave inversion in V1-V3; the **epsilon wave** (a small deflection at the end of the QRS in right precordial leads) is characteristic.
- Cardiac magnetic resonance imaging is the diagnostic gold standard.
- Treatment: avoid competitive sport; beta-blockers; an ICD for high-risk features.

## Other inherited arrhythmia syndromes

- **Long QT syndrome (LQTS)**: a prolonged corrected QT interval; risk of torsades de pointes. The classical subtypes are LQT1 (KCNQ1, exercise/swimming triggers); LQT2 (KCNH2, emotion/loud noise); LQT3 (SCN5A, sleep/rest). Avoid QT-prolonging drugs (the resource crediblemeds.org maintains a current list). Treatment: beta-blockers (effective in LQT1 and LQT2; less so in LQT3, where mexiletine is added).
- **Brugada syndrome**: a sodium channel (SCN5A) mutation; coved ST elevation in V1-V3; risk of polymorphic VT and sudden death, often during fever or sleep. ICD for symptomatic patients.
- **Catecholaminergic polymorphic ventricular tachycardia (CPVT)**: an RYR2 mutation; bidirectional VT during exercise or emotion. Treatment with beta-blockers; avoid stress; ICD if needed.
- **Takotsubo cardiomyopathy** ("broken-heart syndrome"): stress-induced apical ballooning, usually in postmenopausal women after emotional or physical stress. Usually fully reversible with supportive care.`,
        },
        {
          id: "rheumatic_fever",
          name: "Acute Rheumatic Fever",
          content: `## Background

Acute rheumatic fever is a multisystem inflammatory disease that follows infection with **Group A streptococcus** (Streptococcus pyogenes). The peak age of incidence is 5 to 15 years. It is now uncommon in developed countries but remains an important cause of acquired heart disease worldwide.

## Pathogenesis

The mechanism is **antigenic mimicry**: cell-mediated immunity and antibodies directed against streptococcal antigens (M protein in particular) cross-react with similar epitopes in human tissue, including myocardial myosin and valvular tissue.

## Multisystem features

- **Heart (pancarditis)**: endocarditis, myocarditis, and pericarditis. The mitral valve alone is affected in around 70% of cases; both mitral and aortic valves in approximately 25%.
- **Joints**: large-joint migratory polyarthritis and synovitis.
- **Skin**: erythema marginatum (an evanescent, well-demarcated pink macular rash on the trunk and limbs); subcutaneous nodules over extensor surfaces.
- **Central nervous system**: Sydenham's chorea (involuntary, non-rhythmic, choreiform movements); rheumatic encephalopathy.

## Modified Jones criteria

Diagnosis requires **evidence of preceding Group A streptococcal infection** plus either:
- 2 major criteria, OR
- 1 major plus 2 minor criteria.

| Major (mnemonic JONES) | Minor | Evidence of GAS infection |
| --- | --- | --- |
| **J**oint involvement (migratory polyarthritis) | Fever | Positive throat culture for Group A streptococcus |
| Carditis (the **O** for "heart shape") | Raised CRP or ESR | Elevated antistreptolysin O (ASO) titre |
| **N**odules (subcutaneous) | Migratory arthralgia | Recent scarlet fever |
| **E**rythema marginatum | Prolonged PR interval on ECG | |
| **S**ydenham's chorea | Previous rheumatic fever | |

Symptoms typically develop 2 to 4 weeks after a streptococcal pharyngitis.

## Histology

- **Verrucae**: small, beady fibrinous vegetations along the lines of valve leaflet closure.
- **Aschoff bodies**: small giant-cell granulomas, considered pathognomonic.
- **Anitschkow myocytes** (caterpillar cells): regenerating myocytes with characteristic "owl-eye" or caterpillar-shaped chromatin pattern.

## Treatment

- **Benzylpenicillin** (or oral penicillin V) is first-line. **Erythromycin** is used if the patient is penicillin-allergic.
- Anti-inflammatory therapy: aspirin or non-steroidal anti-inflammatory drugs (NSAIDs); corticosteroids if there is severe carditis.
- **Secondary prophylaxis**: monthly intramuscular benzathine penicillin (or daily oral penicillin) to prevent recurrent attacks. Duration depends on disease severity:
  - Without carditis: 5 years (or until age 21).
  - With carditis but no residual valve disease: 10 years (or until age 21).
  - With carditis and residual valve disease: 10 years (or until age 40), often lifelong.

## Chronic rheumatic heart disease

The chronic sequel of recurrent acute rheumatic fever is chronic rheumatic valve disease. It is predominantly left-sided, and most commonly affects the **mitral valve**:

Mitral > Aortic > Tricuspid > Pulmonary.

The pathological features are:
- Thickening of valve leaflets, especially along the lines of closure.
- Fusion of the **commissures**.
- Thickening, shortening, and fusion of the **chordae tendineae**, producing a characteristic "fish-mouth" or "buttonhole" deformity in mitral stenosis.

This is the leading cause of mitral stenosis worldwide.`,
        },
        {
          id: "endocarditis",
          name: "Endocarditis (Infective and Vegetative Patterns)",
          content: `## Vegetative endocarditis: comparison

| Disease | Pathology | Vegetation morphology |
| --- | --- | --- |
| **Rheumatic heart disease** | Antigenic mimicry — cross-reaction of anti-streptococcal antibodies with heart tissue | Small, warty vegetations along the lines of closure of valve leaflets ("**verrucae**") |
| **Infective endocarditis** | Colonisation or invasion of heart valves or mural endocardium by microbes | Large, irregular masses on valve cusps that may extend into the chordae |
| **Non-bacterial thrombotic (marantic) endocarditis** | Disseminated intravascular coagulation or hypercoagulable states (often associated with malignancy) | Small, bland, sterile thrombotic vegetations along lines of closure |
| **Libman-Sacks endocarditis** | Pathogenesis unknown; associated with **systemic lupus erythematosus (SLE)** and antiphospholipid syndrome | Small (up to 2 mm) sterile, platelet-rich, warty vegetations on either side of the leaflet |

## Infective endocarditis: pathogenesis

Infective endocarditis is colonisation of the endocardium that follows transient bacteraemia in a patient with a structurally abnormal valve or another risk factor.

Common sources of bacteraemia include:
- Poor dental hygiene or recent dental treatment (Streptococcus viridans).
- Intravenous drug use.
- Soft tissue infection.
- Indwelling cannulas, central lines, or pacemakers.
- Recent cardiac or valvular surgery.
- A previously damaged valve, for example after rheumatic fever.

## Acute compared with subacute infective endocarditis

| Feature | Acute IE | Subacute IE |
| --- | --- | --- |
| Causative organisms | **Staphylococcus aureus** (35-40%); Streptococcus pyogenes | Streptococcus viridans, Staphylococcus epidermidis, **HACEK** group (culture-negative), Coxiella burnetii, Mycoplasma, Candida |
| Virulence | High | Low |
| Vegetation morphology | Larger, more localised | Friable, small (a few mm in size) thrombi |
| Spread | Aorta and surrounding tissues | Chordae tendineae |

The HACEK group consists of **H**aemophilus, **A**ggregatibacter, **C**ardiobacterium, **E**ikenella, and **K**ingella — fastidious Gram-negative bacteria that may not grow on routine blood cultures.

## Clinical features

- **Constitutional**: fever, malaise, rigors, weight loss, anaemia, fatigue, night sweats — often present for weeks or months.
- **Cardiac**: a new (often regurgitant) murmur, typically mitral or aortic regurgitation.
- **Immunological phenomena**:
  - **Roth spots** (retinal haemorrhages with pale centres) on fundoscopy.
  - **Osler's nodes** (tender nodules on finger pulps).
  - Glomerulonephritis (haematuria).
- **Embolic / thromboembolic phenomena**:
  - **Janeway lesions** (painless macules on palms and soles).
  - **Splinter haemorrhages** under the nails.
  - Splenomegaly.
  - Septic abscesses in lungs, brain, spleen, or kidneys.

The typical patient has had non-specific systemic symptoms for months, often with intermittent improvement on antibiotics, alongside microscopic or macroscopic haematuria. In intravenous drug users, the **right-sided (tricuspid)** valve is most commonly affected; otherwise the mitral or aortic valve is usually involved.

## Modified Duke's criteria

Diagnosis requires:
- 2 major, OR
- 1 major plus 3 minor, OR
- 5 minor.

**Major criteria**:
- Positive blood cultures: typical organisms grown from 2 separate cultures more than 12 hours apart.
- Evidence of endocardial involvement: vegetation or abscess on echocardiogram, or a new regurgitant murmur.

**Minor criteria**:
- Risk factor (e.g. prosthetic valve, intravenous drug use, congenital valve abnormality).
- Fever greater than 38 °C.
- Embolic phenomena (Janeway lesions, splinter haemorrhages).
- Immunological phenomena (Roth spots, Osler's nodes, glomerulonephritis).
- Microbiological evidence not meeting major criteria.

## Investigations

- **Three sets of blood cultures** from separate sites, ideally before antibiotics are given.
- **Transthoracic echocardiogram (TTE)** first; **transoesophageal echocardiogram (TOE)** if TTE is non-diagnostic, in prosthetic valves, or if abscess is suspected.
- Inflammatory markers, urinalysis, full blood count, urea and electrolytes.

## Treatment

Start **broad-spectrum empirical antibiotics** once cultures are taken, then narrow according to sensitivities. Typical regimens (always use local guidelines):
- **Subacute, native valve**: benzylpenicillin plus gentamicin; vancomycin if penicillin-allergic. Duration 4 weeks.
- **Acute, native valve**: flucloxacillin (for methicillin-sensitive Staphylococcus aureus); rifampicin plus vancomycin plus gentamicin for methicillin-resistant Staphylococcus aureus. Staphylococcus aureus IE is particularly aggressive — always cover.
- **Prosthetic valve endocarditis**: vancomycin plus gentamicin plus rifampicin for 6 weeks.

Surgical intervention is indicated for:
- Heart failure caused by acute valvular incompetence.
- Persistent infection despite appropriate antibiotics.
- Recurrent septic emboli.
- Large vegetations.
- Perivalvular abscess.`,
        },
        {
          id: "valve_disease",
          name: "Valve Disease",
          content: `## Comparative summary of the four major valve lesions

| Feature | Aortic stenosis | Aortic regurgitation | Mitral stenosis | Mitral regurgitation |
| --- | --- | --- | --- | --- |
| **Pathophysiology** | Narrowed aortic valve produces high-velocity, high-pressure ejection | Incompetent aortic valve allows blood to flow back into the left ventricle in diastole | Narrowed mitral valve obstructs left atrial emptying, causing left atrial dilatation and back pressure | Incompetent mitral valve allows blood to flow back into the left atrium during systole |
| **Common causes** | Calcific (older patients), congenital bicuspid valve, rheumatic | Infective endocarditis, dissecting aortic aneurysm, left ventricular dilatation, connective tissue disease (Marfan, Ehlers-Danlos), ankylosing spondylitis, syphilis | **Almost always rheumatic fever** | Infective endocarditis, post-MI papillary muscle dysfunction, connective tissue disease, rheumatic fever, left ventricular dilatation (functional MR), mitral valve prolapse |
| **Murmur** | Crescendo-decrescendo ejection systolic, radiating to the carotids | Early diastolic, decrescendo, with collapsing pulse | Mid-diastolic with an opening snap | Pansystolic, radiating to the axilla |
| **Other signs** | Slow-rising pulse, narrow pulse pressure, soft S2 | Wide pulse pressure, Quincke's sign (nail-bed pulsation), Corrigan's pulse, de Musset's sign (head bobbing) | Loud S1, malar flush, atrial fibrillation common | Displaced apex beat, soft S1, S3 if severe |

## Aortic stenosis

- The **classic triad** is angina, syncope (especially exertional), and dyspnoea (from heart failure).
- Echocardiographic criteria for severe aortic stenosis: peak gradient greater than 64 mmHg; valve area less than 1.0 cm²; jet velocity greater than 4 m/s.
- **Indications for intervention**: symptomatic severe AS; asymptomatic severe AS with reduced left ventricular ejection fraction.
- Treatment options:
  - **Surgical aortic valve replacement (SAVR)** — historically the standard.
  - **Transcatheter aortic valve implantation (TAVI)** — increasingly used, especially in older or higher-surgical-risk patients.
- Avoid vasodilators in severe AS — they can precipitate critical hypotension.

## Aortic regurgitation

- May be acute (e.g. infective endocarditis, aortic dissection) or chronic.
- **Acute AR is poorly tolerated** and usually requires urgent surgery, because the unprepared left ventricle cannot dilate quickly.
- Chronic AR allows time for ventricular dilatation and physiological compensation.
- Indications for surgery: symptomatic; asymptomatic with LVEF less than 55% or left ventricular end-systolic diameter (LVESD) greater than 55 mm.

## Mitral stenosis

- **Almost exclusively rheumatic** in origin.
- Symptoms: dyspnoea, fatigue, haemoptysis (from rupture of small bronchial veins), atrial fibrillation, systemic embolism, malar flush.
- The **Wilkins score** assesses suitability for percutaneous balloon valvotomy based on leaflet mobility, leaflet thickening, leaflet calcification, and subvalvular thickening.
- **Treatment**: rate control plus anticoagulation for atrial fibrillation; **percutaneous mitral commissurotomy** if anatomy is favourable; surgical mitral valve replacement if not.

## Mitral regurgitation

- May be acute (papillary muscle rupture post-MI, infective endocarditis) or chronic (rheumatic, mitral valve prolapse, ischaemic, ventricular dilatation).
- Acute severe MR causes flash pulmonary oedema and is a surgical emergency.
- **Treatment**: ACEi or ARB plus diuretics for symptoms; surgical repair is preferred over replacement when feasible; **MitraClip** (transcatheter edge-to-edge repair) for high-surgical-risk patients.

## Mitral valve prolapse

- The most common valvular abnormality in developed countries (around 2-3% of the population).
- Classically presents in middle-aged women with palpitations, atypical chest pain, or dyspnoea.
- **Auscultation**: a mid-systolic click followed by a late systolic murmur.
- Often associated with annular dilatation due to dilated cardiomyopathy, or with myxomatous degeneration of the leaflets.
- Most cases are asymptomatic and require only reassurance.

## Chronic rheumatic valve disease (recap)

Chronic rheumatic valve disease is predominantly left-sided, with the mitral valve most commonly affected (Mitral > Aortic > Tricuspid > Pulmonary). The pathological features are leaflet thickening (especially along the lines of closure), commissural fusion, and thickening, shortening, and fusion of the chordae tendineae.`,
        },
        {
          id: "pericarditis",
          name: "Pericarditis & Pericardial Disease",
          content: `## Definition

Pericarditis is inflammation of the pericardium, the fibrous sac surrounding the heart.

## Types and causes

| Type | Common causes |
| --- | --- |
| **Viral and idiopathic** | Most common (around 90%); coxsackievirus, echovirus, Epstein-Barr virus |
| **Fibrinous** | Post-myocardial infarction ("peri-infarct" pericarditis); uraemia |
| **Purulent** | Bacterial — Staphylococcus aureus is the most common |
| **Granulomatous** | Tuberculosis; sarcoidosis |
| **Haemorrhagic** | Tumour, tuberculosis, uraemia, anticoagulation |
| **Constrictive (fibrous)** | A late sequel of any chronic pericardial inflammation; classically tuberculous |

Other causes include autoimmune disease (SLE, rheumatoid arthritis), Dressler's syndrome, drugs (hydralazine, isoniazid, procainamide), and radiation.

## Clinical features

- **Sharp, pleuritic chest pain** that is worse on lying flat and relieved by sitting forward.
- A **pericardial friction rub** on auscultation (a scratchy, three-component rub).
- Fever and constitutional symptoms in inflammatory or infective causes.

## ECG findings

The ECG evolves through 4 stages:
1. **Saddle-shaped ST elevation** in most leads (concave upwards), with **PR depression**. PR depression in lead aVR is a sensitive sign.
2. ST returns to baseline; T waves flatten.
3. T-wave inversion.
4. Resolution.

This contrasts with the typical ST elevation of myocardial infarction, which is usually convex, regional, and accompanied by reciprocal changes in opposite leads.

## Investigations

- ECG (above) — can be normal in approximately 10% of cases.
- Inflammatory markers (CRP is usually raised).
- Troponin (rises if there is myopericarditis).
- Echocardiography to look for an effusion or wall-motion abnormality.
- Chest X-ray (cardiomegaly with a large effusion).

## Treatment

- **Non-steroidal anti-inflammatory drugs** (high-dose ibuprofen or aspirin) for 1 to 2 weeks.
- **Colchicine** for 3 months reduces recurrence and is now standard adjunctive therapy.
- Treat the underlying cause.
- Restrict exercise during the acute phase.

## Pericardial effusion

A pericardial effusion is an accumulation of fluid in the pericardial sac.

- The most common cause is chronic heart failure (a transudate).
- Exudative effusions occur secondary to inflammatory, infectious, malignant, or autoimmune processes within the pericardium.
- A small effusion may be asymptomatic; a large or rapidly accumulating effusion produces tamponade.

## Cardiac tamponade

Cardiac tamponade is a clinical emergency in which the pericardial fluid raises intrapericardial pressure enough to compromise diastolic filling, reducing cardiac output.

**Beck's triad**:
1. Hypotension.
2. Raised jugular venous pressure (with absence of the Y descent).
3. Muffled heart sounds.

Other features include **pulsus paradoxus** (a fall in systolic blood pressure of more than 10 mmHg on inspiration) and **electrical alternans** on the ECG (alternating QRS amplitude as the heart swings within the effusion).

The treatment is **urgent pericardiocentesis** (echocardiogram-guided drainage), with subsequent treatment of the underlying cause.

## Haemopericardium

Haemopericardium is blood in the pericardial sac. It is classically caused by:
- Myocardial rupture after acute MI.
- Penetrating chest trauma.
- Aortic dissection extending proximally into the pericardium.
- Iatrogenic injury (post-cardiac procedures).

It often produces rapid-onset cardiac tamponade.

## Constrictive pericarditis

Constrictive pericarditis is chronic pericardial fibrosis, often calcified, that prevents normal diastolic filling.

- Most cases were historically post-tuberculous; in developed countries, post-cardiac surgery and post-radiation are now more common.
- Clinical features mimic right heart failure: a raised jugular venous pressure (with prominent Y descent and Kussmaul's sign — paradoxical rise in JVP on inspiration), peripheral oedema, ascites, and hepatomegaly.
- A **pericardial knock** may be heard.
- CT or MRI confirms pericardial thickening (often with calcification).
- The definitive treatment is **pericardiectomy**.`,
        },
      ],
    },
    {
      id: "lung_path",
      name: "Lung Pathology",
      icon: "🫁",
      topics: [
        {
          id: "obstructive_lung",
          name: "Obstructive Lung Diseases",
          content: `## Spirometry definition

Obstructive lung disease is defined on spirometry by an FEV1/FVC ratio less than 0.70 (i.e. 70%), with reduced FEV1. This contrasts with restrictive lung disease, where FEV1/FVC is preserved or increased but lung volumes are reduced.

## Comparison of the major obstructive diseases

| Feature | Chronic bronchitis | Emphysema | Asthma | Bronchiectasis | Small airway disease (bronchiolitis) |
| --- | --- | --- | --- | --- | --- |
| **Site** | Bronchi | Acini (alveoli + respiratory bronchioles) | Bronchi | Bronchi | Bronchioles |
| **Pathology** | Excess mucus production and dilatation of airways | Airspace enlargement with destruction of alveolar walls | Reversible airway constriction from mast cell degranulation | Permanent fibrotic dilatation of bronchi | Inflammatory scarring or obliteration |
| **Aetiology** | Tobacco smoke, air pollution | Tobacco smoke, alpha-1 antitrypsin deficiency | Allergens, drugs, cold air, exercise (immunological) | Recurrent infection (cystic fibrosis is the major risk factor in young patients) | Tobacco smoke, air pollutants |
| **Clinical features** | Productive cough on most days for 3 months over 2 consecutive years | Progressive dyspnoea, cough | Episodic cough, reversible wheeze, acute dyspnoea | Cough, purulent sputum, fever | Dyspnoea, cough |
| **Histology** | Goblet cell hyperplasia and hypertrophy of mucous glands; airway dilatation | Loss of alveolar parenchyma distal to terminal bronchioles | Smooth muscle hyperplasia, excess mucus, eosinophilic inflammation, **Curschmann spirals** (whorls of shed epithelium), **Charcot-Leyden crystals** | Permanent fibrotic dilatation of bronchi | Inflammatory obliteration |
| **Complications** | Recurrent infection, chronic hypoxia, pulmonary hypertension | Pneumothorax, respiratory failure, pulmonary hypertension | Chronic asthma, death | Recurrent infection, haemoptysis, pulmonary hypertension, secondary (AA) amyloidosis from chronic inflammation | – |

## Chronic bronchitis (clinical definition)

Chronic bronchitis is a clinical diagnosis: a productive cough on most days for at least 3 months over 2 consecutive years. The pathological substrate is goblet cell hyperplasia and mucous gland hypertrophy in the bronchi. The Reid index (the ratio of mucous gland thickness to total bronchial wall thickness) is increased.

## Emphysema

Emphysema describes airspace enlargement with destruction of alveolar walls, distal to the terminal bronchiole. The subtypes are:
- **Centriacinar (centrilobular)**: affects the central acinus, classically in the upper lobes. Strongly associated with smoking.
- **Panacinar**: uniform involvement of the entire acinus, classically in the lower lobes. Associated with **alpha-1 antitrypsin deficiency**.
- **Paraseptal**: affects the distal acinus near the pleura; predisposes to spontaneous pneumothorax.
- **Irregular**: scarring-related; usually clinically silent.

## Alpha-1 antitrypsin deficiency

- An autosomal recessive (codominant) deficiency of alpha-1 antitrypsin, a serine protease inhibitor produced by the liver that normally inactivates neutrophil elastase.
- Without functional inhibitor, elastase digests pulmonary elastin, producing panacinar emphysema. This is often early-onset (under 45 years of age) and disproportionate in non-smokers or modest smokers.
- The same mutation can cause hepatic disease (cirrhosis, hepatocellular carcinoma) due to accumulation of misfolded protein in hepatocytes.
- Phenotypes: PiMM (normal); PiMZ (carrier, with intermediate levels); **PiZZ (severe disease)**.
- Treatment: smoking cessation is paramount. Augmentation therapy with intravenous alpha-1 antitrypsin is available but the cost-effectiveness is debated. Liver or lung transplantation is considered for end-stage disease.

## Asthma pathology

The hallmark of asthma is reversible airway constriction. The key histological findings on bronchoalveolar lavage or biopsy are:
- **Curschmann spirals**: whorls of shed epithelium in mucus.
- **Eosinophil infiltrate** within the airway wall.
- **Charcot-Leyden crystals**: crystalline products of eosinophil granule contents.
- Smooth muscle hypertrophy and hyperplasia.
- Goblet cell hyperplasia and basement membrane thickening.

(Acute and chronic clinical management is covered in the Asthma entry of the Tracker. The features above are the pathological details typically tested in MRCP histopath-flavoured questions.)

## Chronic obstructive pulmonary disease (COPD)

In practice, most patients have features of both chronic bronchitis and emphysema, and are diagnosed clinically as having **chronic obstructive pulmonary disease (COPD)**.

- Diagnosis requires post-bronchodilator FEV1/FVC less than 0.70.
- GOLD severity by FEV1: Mild (≥ 80%), Moderate (50-79%), Severe (30-49%), Very severe (< 30%).
- NICE 2018 treatment ladder:
  1. Short-acting bronchodilator (short-acting beta-agonist or short-acting muscarinic antagonist) for symptom relief.
  2. If non-asthmatic features: long-acting bronchodilator combination (LABA + LAMA).
  3. If asthmatic features (raised eosinophils, atopy, diurnal variation): LABA + inhaled corticosteroid (ICS), then triple therapy (LABA + LAMA + ICS) if needed.
- Long-term oxygen therapy (LTOT) for chronic hypoxia: PaO₂ less than 7.3 kPa, or 7.3-8 kPa with cor pulmonale, secondary polycythaemia, or peripheral oedema.
- Pulmonary rehabilitation, smoking cessation, and influenza/pneumococcal vaccinations are essential.`,
        },
        {
          id: "bronchiectasis_path",
          name: "Bronchiectasis",
          content: `## Definition

Bronchiectasis is permanent, abnormal dilatation of bronchi due to chronic inflammation and destruction of the bronchial wall. Histologically there is fibrosis with loss of muscle and elastic tissue.

## Pathophysiology — the vicious cycle

Recurrent infection or persistent inflammation produces bronchial wall oedema and excess mucus production. Lymphocyte recruitment and protease release damage the bronchial wall. The damaged airway is more prone to further infection and inflammation, and the cycle perpetuates itself.

## Causes

### Inflammatory and acquired

- **Post-infectious**: the most common cause, accounting for around 18% of adult cases. Pertussis (whooping cough) and severe pneumonia (especially in childhood) are classic precipitants.
- Abnormal host defence:
  - Primary: hypogammaglobulinaemia (such as common variable immunodeficiency).
  - Secondary: chemotherapy, post-transplant immunosuppression, HIV infection.
- Obstruction: extrinsic compression, intrinsic foreign body, or right middle lobe syndrome (often secondary to chronic obstruction in COPD).
- Post-inflammatory: aspiration.
- Secondary to bronchiolar disease (obliterative bronchiolitis) or interstitial fibrosis (cryptogenic fibrosing alveolitis, sarcoidosis).
- Connective tissue disease (rheumatoid arthritis, systemic lupus erythematosus, Sjögren's syndrome).
- Severe asthma — particularly **allergic bronchopulmonary aspergillosis (ABPA)**.

### Congenital

- **Cystic fibrosis** (see separate topic).
- **Primary ciliary dyskinesia (PCD)**, including **Kartagener's syndrome** (PCD with situs inversus and infertility).
- Hypogammaglobulinaemia.
- **Young's syndrome**: rhinosinusitis, azoospermia, and bronchiectasis.

## Clinical features

- Chronic productive cough with copious purulent sputum.
- Recurrent chest infections.
- Haemoptysis (sometimes massive, from hypertrophied bronchial arteries).
- Coarse inspiratory crackles on auscultation, often with wheeze.
- Clubbing in severe disease.

## Investigations

- **High-resolution CT (HRCT)** is the gold standard. It shows dilated, thickened bronchi with the **signet ring sign** (a bronchus larger than its accompanying artery in cross-section), tram-track lines, and a "cluster of grapes" appearance.
- Sputum culture (assessing for chronic colonisation with Pseudomonas aeruginosa, non-tuberculous mycobacteria, or Aspergillus).
- Spirometry (often obstructive).
- Investigations for cause: serum immunoglobulins, sweat test for cystic fibrosis, total IgE and Aspergillus-specific IgE/IgG, autoantibodies, ciliary function studies (saccharin test or nasal nitric oxide as screens; ciliary biopsy as gold standard).

## Complications

- Recurrent infection.
- Massive haemoptysis from bronchial artery erosion.
- Pulmonary hypertension and cor pulmonale.
- Secondary (AA) amyloidosis from sustained chronic inflammation.

## Management

- Airway clearance physiotherapy and exercise.
- Treatment of acute exacerbations with antibiotics guided by previous sputum cultures.
- Long-term low-dose macrolide (azithromycin) for frequent exacerbations — has anti-inflammatory effects beyond antibacterial activity.
- Treatment of the underlying cause where possible.
- Selected patients: nebulised tobramycin or colistin for chronic Pseudomonas; lung transplantation for end-stage disease.`,
        },
        {
          id: "cystic_fibrosis_path",
          name: "Cystic Fibrosis",
          content: `## Genetics

Cystic fibrosis is an autosomal recessive disorder caused by mutations in the **cystic fibrosis transmembrane conductance regulator (CFTR)** gene on chromosome 7. The most common mutation is **delta-F508 (Phe508del)**, accounting for around 70% of UK alleles. Over 2000 different CFTR mutations have been described.

CFTR is a chloride channel; defective function causes abnormally thick, sticky secretions on epithelial surfaces.

## Multisystem effects

- **Lungs**: thick airway secretions impair mucociliary clearance, causing chronic bacterial colonisation. Initial colonisers are Staphylococcus aureus and Haemophilus influenzae; later **Pseudomonas aeruginosa** (associated with worse prognosis), and **Burkholderia cepacia** (associated with very poor prognosis). Recurrent infection produces bronchiectasis.
- **Pancreas**: pancreatic duct obstruction → exocrine insufficiency (steatorrhoea, malabsorption, fat-soluble vitamin deficiency); islet damage → CF-related diabetes (5-15% of patients by adolescence).
- **Sinuses**: chronic sinusitis and nasal polyps.
- **Gastrointestinal tract**: meconium ileus in 15% of neonates; **distal intestinal obstruction syndrome (DIOS)** in older patients.
- **Hepatobiliary**: focal biliary cirrhosis (5%); gallstones.
- **Reproductive**: **congenital bilateral absence of the vas deferens** in 95% of males, producing obstructive azoospermia. Females have reduced fertility from cervical mucus changes.
- **Skin**: salty sweat (the basis of the diagnostic test).
- **Bones**: osteopenia and osteoporosis (due to malabsorption and corticosteroid use).

## Diagnosis

- **Newborn heel-prick (Guthrie test)**: immunoreactive trypsinogen (IRT) screen, followed by DNA mutation analysis if positive.
- **Sweat test** is the gold standard: a sweat chloride concentration greater than 60 mmol/L on 2 separate samples confirms the diagnosis.
- Genetic testing for CFTR mutations.

## Management

Comprehensive multidisciplinary care has dramatically improved life expectancy (now 50+ years for those with access to modern therapy).

### Disease-modifying therapy — CFTR modulators

- **Ivacaftor** for gating mutations (such as G551D) — opens the CFTR channel.
- **Lumacaftor/tezacaftor + ivacaftor** for delta-F508 homozygotes.
- **Elexacaftor/tezacaftor/ivacaftor (Kaftrio / Trikafta)** is now standard of care for delta-F508 (homozygous or heterozygous), and is highly effective.

### Symptomatic management

- Chest physiotherapy.
- Mucolytics: **dornase alfa** (recombinant DNase that breaks down DNA from neutrophils in sputum) and **hypertonic saline** (osmotic effect drawing water into airway).
- Antibiotics: prophylactic flucloxacillin in infancy; eradication therapy for first Pseudomonas isolates; long-term nebulised tobramycin or colistin for chronic Pseudomonas.
- **Pancreatic enzyme replacement (Creon)** with all meals.
- Fat-soluble vitamin (A, D, E, K) supplementation.
- High-calorie diet, often with overnight nasogastric or gastrostomy feeds.
- Lung transplantation for end-stage disease (FEV1 less than 30% predicted).`,
        },
        {
          id: "ild_ipf",
          name: "Interstitial Lung Disease & Idiopathic Pulmonary Fibrosis",
          content: `## Definition

Interstitial lung disease (ILD) is an umbrella term covering more than 200 conditions characterised by inflammation and fibrosis of the pulmonary interstitium (the tissue between the alveolar epithelium and the capillary endothelium). Together they account for around 15% of respiratory disease burden.

## Spirometry pattern

ILD shows a **restrictive pattern**:
- Reduced FEV1 and FVC.
- **Preserved or increased FEV1/FVC ratio** (greater than 70%).
- Reduced total lung capacity and lung volumes.
- Reduced **carbon monoxide diffusing capacity (DLCO or TLCO)**.
- Reduced compliance.

## Typical presentation

- Chronic, progressive shortness of breath, often over months to years.
- Dry cough.
- **Fine, end-inspiratory "Velcro" crackles** at the lung bases.
- Cyanosis in advanced disease, with secondary pulmonary hypertension and **cor pulmonale**.

In advanced disease, high-resolution CT shows **ground-glass change** (active inflammation) progressing to **honeycomb fibrosis** (end-stage).

## Categorisation

ILD is conventionally categorised into 4 groups:

### 1. Fibrosing
- Cryptogenic fibrosing alveolitis / idiopathic pulmonary fibrosis.
- Pneumoconiosis.
- Cryptogenic organising pneumonia.
- Connective tissue disease-associated (rheumatoid arthritis, systemic sclerosis, polymyositis/dermatomyositis, SLE).
- Drug-induced (amiodarone, methotrexate, nitrofurantoin, bleomycin).
- Radiation pneumonitis.

### 2. Granulomatous
- Sarcoidosis.
- Extrinsic allergic alveolitis (hypersensitivity pneumonitis).
- ANCA-associated vasculitis: granulomatosis with polyangiitis (Wegener's), eosinophilic GPA (Churg-Strauss), microscopic polyangiitis.

### 3. Eosinophilic
- Acute eosinophilic pneumonia.
- Chronic eosinophilic pneumonia.
- Loeffler's syndrome (transient pulmonary eosinophilia, often parasitic).
- Allergic bronchopulmonary aspergillosis.

### 4. Smoking-related
- Respiratory bronchiolitis-associated ILD.
- Desquamative interstitial pneumonia.
- Pulmonary Langerhans cell histiocytosis.

## Idiopathic pulmonary fibrosis (IPF) / cryptogenic fibrosing alveolitis

- Male predominance; typically presents at 40-70 years.
- **Aetiology unknown**; risk factors include smoking and gastro-oesophageal reflux disease.
- The histological pattern of fibrosis is **Usual Interstitial Pneumonia (UIP)** — required for diagnosis. The same UIP pattern is also seen in connective tissue disease-associated fibrosis, asbestosis, and chronic hypersensitivity pneumonitis, so clinical context is essential.

### Histology of UIP
- Progressive, patchy interstitial fibrosis with loss of normal lung architecture.
- **Honeycomb change** (cyst-like spaces lined by hyperplastic type II pneumocytes), beginning peripherally (subpleural).
- **Fibroblast foci** at the leading edge of fibrosis (active sites of injury).
- Hyperplasia of type II pneumocytes producing the cyst formation.

### Clinical and imaging features
- Increasing exertional dyspnoea, dry cough, weight loss.
- Hypoxaemia, with cyanosis, pulmonary hypertension, and cor pulmonale.
- Clubbing in 50% of patients.
- HRCT: peripheral and basal predominant reticulation with **honeycombing** and traction bronchiectasis.

### Management
- **Antifibrotics**: pirfenidone or nintedanib slow disease progression but do not reverse fibrosis.
- Long-term oxygen therapy for hypoxia.
- Pulmonary rehabilitation.
- Lung transplantation for end-stage disease.
- Steroids and immunosuppressants are **not effective** in IPF and may worsen outcomes (the PANTHER-IPF trial demonstrated harm with the combination of prednisolone, azathioprine, and N-acetylcysteine).

### Prognosis
Poor: median survival is 2 to 5 years from diagnosis.

## Cryptogenic organising pneumonia (COP)

- Idiopathic counterpart of organising pneumonia.
- Histology: polypoid plugs of connective tissue (**Masson bodies**) within distal airways and alveoli.
- Presents subacutely with fever, malaise, cough, and dyspnoea over weeks; often misdiagnosed as community-acquired pneumonia not responding to antibiotics.
- **Highly steroid-responsive** — most patients improve dramatically on prednisolone.

## Connective tissue disease-associated ILD

- Most commonly seen with **systemic sclerosis** (especially the diffuse cutaneous form with anti-Scl-70 antibodies) and rheumatoid arthritis.
- Also: polymyositis/dermatomyositis (anti-Jo-1 antibody-positive often), SLE, Sjögren's syndrome.
- May predate or follow the joint or skin manifestations.
- HRCT pattern is most often non-specific interstitial pneumonia (NSIP) rather than UIP.
- Treatment: corticosteroids and immunosuppression (cyclophosphamide, mycophenolate, rituximab).`,
        },
        {
          id: "pneumoconiosis_path",
          name: "Pneumoconiosis & Occupational Lung Disease",
          content: `## Definition

Pneumoconiosis is occupational lung disease caused by inhalation of mineral dusts or inorganic particles. Particles 1 to 5 micrometres in diameter reach the respiratory bronchioles, where macrophages phagocytose them, producing inflammation, fibrosis, or both.

## Coal worker's pneumoconiosis (CWP)

- Caused by inhalation of coal dust over many years (classically in coal miners).
- The disease has a predilection for the **upper lobes**.
- **Simple CWP**: small (1-5 mm) round nodules predominantly in the upper zones; usually asymptomatic.
- **Progressive massive fibrosis (PMF)**: confluent fibrotic masses (greater than 1 cm) with surrounding emphysema; severe restriction and dyspnoea.
- **Caplan's syndrome**: coal worker's pneumoconiosis combined with rheumatoid arthritis, producing multiple large pulmonary nodules.

## Silicosis

- Caused by inhalation of silica dust (mining, sandblasting, stone-cutting, pottery, quartz work).
- Upper-zone predominant nodular fibrosis.
- Histology: **silicotic nodules** with whorled hyalinised collagen and surrounding dust-laden macrophages; birefringent silica crystals visible under polarised light.
- **Egg-shell calcification** of hilar lymph nodes is characteristic on chest X-ray.
- Increased susceptibility to **tuberculosis** ("silicotuberculosis").
- Some increased risk of lung cancer.

## Asbestosis

Asbestos exposure (shipyards, insulation, building demolition, vehicle brake linings) can cause four pulmonary lesions:

### 1. Benign pleural plaques
- The most common asbestos-related lesion.
- Pearly white, calcified plaques on the parietal pleura, especially over the diaphragm and lower thorax.
- Asymptomatic with no risk of malignant transformation. They serve as a marker of asbestos exposure rather than asbestosis itself.

### 2. Asbestosis (interstitial fibrosis)
- Diffuse interstitial fibrosis predominantly affecting the **lower lobes** (this contrasts with most pneumoconioses, which affect the upper lobes).
- Progressive dyspnoea, dry cough, basal crackles, clubbing.
- Histology: fibrosis with **asbestos bodies** (asbestos fibres coated with iron-protein complex, golden-brown, beaded appearance) — also called "ferruginous bodies".
- Latency 10 to 20 years from exposure.
- No specific treatment beyond supportive care.

### 3. Bronchogenic adenocarcinoma
- The risk is multiplied by smoking. Smoking alone gives a 5-fold increased risk; the combination of smoking and asbestos gives a 50-fold increased risk.
- Behaves like other primary lung adenocarcinomas.

### 4. Mesothelioma
- See lung tumour topic for details.

## Berylliosis

- Granulomatous lung disease caused by chronic exposure to beryllium (aerospace, electronics, ceramic industries).
- Histologically indistinguishable from sarcoidosis (non-caseating granulomas).
- Beryllium **lymphocyte transformation testing** distinguishes berylliosis from sarcoidosis.
- Treatment: corticosteroids; remove from exposure.

## Hard metal lung disease

Hard metal pneumoconiosis (caused by cobalt and tungsten carbide exposure) produces giant-cell interstitial pneumonia ("hard metal lung").

## General principles

- A detailed occupational history is essential.
- Imaging (chest X-ray, HRCT) shows characteristic patterns by exposure type.
- Removal from exposure is the most important intervention.
- In the United Kingdom, occupational lung disease is reportable under the Reporting of Injuries, Diseases and Dangerous Occurrences Regulations (RIDDOR).
- Compensation may be available under the Industrial Injuries Disablement Benefit scheme.`,
        },
        {
          id: "hypersensitivity_pneumonitis_path",
          name: "Hypersensitivity Pneumonitis & Granulomatous Lung Disease",
          content: `## Granuloma definition

A granuloma is a focal collection of histiocytes (macrophages) — often with multinucleate giant cells — formed when the immune system attempts to wall off a stimulus that cannot be eliminated.

## Causes of pulmonary granulomatous disease

### Infectious
- **Tuberculosis** (caseating granulomas).
- Fungal: histoplasmosis, cryptococcosis, coccidioidomycosis, aspergillosis, mucormycosis.
- Parasites; Pneumocystis (rarely).

### Non-infectious
- **Sarcoidosis** (non-caseating granulomas — see Sarcoidosis topic).
- Foreign body granulomas (aspiration; intravenous drug use with talc).
- Drug-induced.
- **Hypersensitivity pneumonitis (extrinsic allergic alveolitis)**.
- ANCA-associated vasculitis: granulomatosis with polyangiitis, eosinophilic granulomatosis with polyangiitis.

## Hypersensitivity pneumonitis (extrinsic allergic alveolitis, EAA)

Hypersensitivity pneumonitis is a group of immune-mediated lung disorders caused by intense or prolonged exposure to inhaled **organic** antigens, producing widespread **alveolar inflammation** (in contrast to asthma, which produces airway inflammation).

It is typically an occupational lung disease and may be acute or chronic. The mechanism is a combined Type III (immune complex) and Type IV (delayed cell-mediated) hypersensitivity reaction to the inhaled antigen.

### Histology
- Polypoid plugs of loose connective tissue within alveoli and bronchioles.
- Granuloma formation (poorly formed, non-caseating).
- Lymphocytic infiltrate; bronchoalveolar lavage shows lymphocytosis with a low CD4:CD8 ratio (less than 1) — this contrasts with sarcoidosis, where the CD4:CD8 ratio is greater than 3.5.

### Acute presentation
Inhalation of antigenic dust by a sensitised individual produces flu-like systemic symptoms (fever, chills, chest pain, dyspnoea, dry cough) **within 4 to 8 hours of exposure**. Symptoms usually settle by the following day if exposure is removed. Recurrent acute episodes may progress to chronic disease.

### Subacute presentation
Insidious dyspnoea, cough, fatigue, and weight loss over weeks to months with recurrent low-grade exposures.

### Chronic presentation
Progressive, persistent productive cough and dyspnoea, finger clubbing, and severe weight loss. The radiological pattern eventually resembles idiopathic pulmonary fibrosis but with **upper-lobe predominance** (in contrast to the basal predominance of IPF).

### Classical examples
- **Farmer's lung**: mouldy hay, grain, or silage (Saccharopolyspora rectivirgula).
- **Bird (pigeon) fancier's lung**: proteins in avian excreta and feathers — the most common type in the UK.
- **Humidifier's lung**: heated water reservoirs (Thermactinomyces species).
- **Malt-worker's lung**: germinating barley (Aspergillus clavatus or Aspergillus fumigatus).
- **Cheese-washer's lung**: mouldy cheese (Aspergillus clavatus or Penicillium casei).
- **Mushroom-worker's lung**: mushroom compost.
- **Hot-tub lung**: Mycobacterium avium complex (atypical mycobacteria) in hot-tub aerosols.

### Investigations
- HRCT: centrilobular ground-glass nodules, mosaic attenuation with air trapping on expiratory views; in chronic disease, upper-lobe predominant fibrosis with honeycombing.
- Spirometry: restrictive pattern with reduced DLCO; mild obstruction may also be present in chronic disease.
- Serum precipitating IgG antibodies (precipitins) to suspected antigen — supports diagnosis but positive in many asymptomatic exposed individuals.
- Lung biopsy in unclear cases.

### Management
**Recognise early** — progression to fibrosis can be prevented by early removal of the antigen. Steroids may help in subacute disease (oral prednisolone 0.5 mg/kg/day for 2 weeks tapered over 4-6 weeks). Established fibrosis is irreversible. Mycophenolate or azathioprine as steroid-sparing agents in selected cases. Antifibrotics (pirfenidone, nintedanib) have emerging evidence in fibrotic hypersensitivity pneumonitis.

## ANCA-associated granulomatous lung disease

(Detailed in the Vasculitides topic.) Brief summary:

- **Granulomatosis with polyangiitis (Wegener's)**: cANCA / anti-PR3; sinusitis with saddle-nose deformity, pulmonary cavitation or haemorrhage, and rapidly progressive glomerulonephritis.
- **Eosinophilic GPA (Churg-Strauss)**: pANCA / anti-MPO; the triad of asthma + eosinophilia + systemic vasculitis.
- **Microscopic polyangiitis**: pANCA / anti-MPO; pulmonary-renal syndrome (no granulomas histologically — distinguishes from GPA).`,
        },
        {
          id: "pneumonia_histopath",
          name: "Pneumonia (histopathological patterns)",
          content: `## Pathological classification of pneumonia

Pneumonia is categorised pathologically by its anatomical pattern, which corresponds (loosely) to organism virulence.

### 1. Bronchopneumonia
- **Patchy peri-bronchial distribution** of consolidation, often bilateral and basal.
- Caused by **low-virulence organisms** in patients with reduced defence mechanisms.
- Typically affects elderly, frail, or post-operative patients.
- Common organisms: Streptococcus pneumoniae, Haemophilus influenzae, Staphylococcus aureus, Klebsiella, anaerobes.

### 2. Lobar pneumonia
- **Fibrinosuppurative consolidation** of an entire lobe, with sharp anatomical boundaries.
- Typically high-virulence organisms in previously healthy patients.
- The most common pathogen is **Streptococcus pneumoniae** (classically with rust-coloured sputum from haemorrhage).
- Other causes: Klebsiella pneumoniae (especially in alcoholics, often with upper-lobe cavitation), Legionella pneumophila (from contaminated water systems).

#### Stages of lobar pneumonia
1. **Congestion** (1-2 days): vascular engorgement; intra-alveolar fluid with few neutrophils.
2. **Red hepatisation** (2-4 days): the lobe looks liver-like — red, firm, airless. Massive intra-alveolar exudate of red cells, neutrophils, and fibrin.
3. **Grey hepatisation** (4-8 days): red cells lyse, leaving a fibrinopurulent exudate; the lobe appears grey and dry.
4. **Resolution** (8+ days): exudate digested by enzymes and either coughed up or cleared by macrophages; lung architecture is usually restored without scarring.

### 3. Atypical pneumonia
- **Interstitial pneumonitis**: inflammation in the alveolar septa, with little or no intra-alveolar exudate.
- Most commonly caused by:
  - **Mycoplasma pneumoniae** (cold agglutinin haemolysis, erythema multiforme).
  - **Chlamydophila pneumoniae**.
  - **Legionella pneumophila** (water-source exposure; hyponatraemia, hepatitis).
- The chest X-ray often looks worse than the patient — in contrast to lobar pneumonia, where the patient often looks worse than the chest X-ray.
- Treatment requires macrolides or tetracyclines because these organisms lack a cell wall and are therefore intrinsically resistant to beta-lactams.

### 4. Aspiration pneumonia
- Right lower lobe predominance (gravitational).
- Mixed flora including anaerobes; risk of lung abscess.
- Associated with reduced consciousness, dysphagia, alcoholism, achalasia.

### 5. Pneumonia in immunocompromised hosts

| Host | Organisms |
| --- | --- |
| HIV with CD4 less than 200 | **Pneumocystis jirovecii (PCP)**, Mycobacterium tuberculosis, Mycobacterium avium complex |
| Splenectomy | Encapsulated organisms — **NHS** mnemonic: Neisseria meningitidis, Haemophilus influenzae, Streptococcus pneumoniae |
| Cystic fibrosis | Pseudomonas aeruginosa, Burkholderia cepacia, Staphylococcus aureus |
| Neutropenia | Aspergillus (HRCT shows the classical **halo sign**) |

## CURB-65 score (community-acquired pneumonia severity)

One point each for:
- **C**onfusion (abbreviated mental test score 8 or less).
- **U**rea greater than 7 mmol/L.
- **R**espiratory rate at least 30 per minute.
- **B**lood pressure: systolic less than 90 mmHg or diastolic 60 mmHg or less.
- Age 65 years or older.

| Score | Severity | Setting | Antibiotics (UK NICE) |
| --- | --- | --- | --- |
| 0-1 | Mild | Outpatient | Oral amoxicillin (or macrolide if penicillin-allergic) |
| 2 | Moderate | Consider admission | Oral amoxicillin + clarithromycin |
| 3-5 | Severe | Admit, consider intensive care | Intravenous co-amoxiclav + clarithromycin (per local guidance) |

## Hospital-acquired pneumonia

Hospital-acquired pneumonia develops more than 48 hours after hospital admission. Common organisms include Enterobacteriaceae, Pseudomonas, Staphylococcus aureus (including methicillin-resistant Staphylococcus aureus), and Haemophilus.

Treatment is piperacillin-tazobactam with or without vancomycin (per local guidelines).`,
        },
        {
          id: "lung_tumours",
          name: "Lung Tumours",
          content: `## Classification

Lung cancers are broadly divided into:
- **Non-small cell lung cancer (NSCLC)** — about 80%.
  - Squamous cell carcinoma.
  - Adenocarcinoma.
  - Large cell carcinoma.
- **Small cell lung cancer (SCLC)** — about 15-20%.

The distinction is important because SCLC is generally treated with chemotherapy alone (rarely with surgery), whereas NSCLC may be amenable to surgical resection if localised.

## Squamous cell carcinoma (historically 30-50%; now declining as smoking falls)

- Strongest correlation with smoking; M > F.
- The highest rate of **p53** and **c-myc** mutations among lung cancers.
- **Central** location (proximal bronchi).
- Local spread is common; metastasis is relatively late.
- Tends to be less responsive to chemotherapy than other types.
- Histology: **keratinisation** (forming "keratin pearls") and **intercellular bridges (desmosomes)**.
- Can cavitate (forming a thick-walled cavity on imaging).
- Causes paraneoplastic **hypercalcaemia** by secreting parathyroid hormone-related peptide (PTHrP).
- Progression: normal epithelium → hyperplasia → squamous metaplasia → dysplasia → carcinoma in situ → invasive carcinoma.

## Adenocarcinoma (now the most common type, 20-30% historically and rising)

- Most common type in **women and non-smokers**.
- Malignant epithelial tumour with **glandular differentiation or mucin production**.
- **Peripheral** location (in distal bronchioles or alveoli).
- Tends to metastasise early.
- Histology: gland formation with mucin production; cytology shows mucin-vacuolated cells.
- Common driver mutations:
  - **EGFR** (epidermal growth factor receptor) — targetable with tyrosine kinase inhibitors (gefitinib, erlotinib, osimertinib).
  - **EML4-ALK** fusion — targetable with ALK inhibitors (crizotinib, alectinib).
  - **KRAS** — historically untargetable; sotorasib is now available for KRAS G12C.
  - **PD-L1** expression directs the choice of immunotherapy.
- Progression: atypical adenomatous hyperplasia → adenocarcinoma in situ (formerly bronchoalveolar carcinoma, BAC) → mixed pattern adenocarcinoma.

## Small cell carcinoma (SCLC) — about 20-25%

- Strong relationship with smoking.
- **Central** location (proximal bronchi).
- Arises from neuroendocrine cells (Kulchitsky cells).
- Highly malignant, with early metastases (commonly to bone, adrenal glands, liver, and brain).
- Histology: small, poorly differentiated **"oat cells"** with scant cytoplasm and stippled "salt-and-pepper" chromatin.
- p53 and **RB1** mutations are common.
- **Paraneoplastic syndromes**:
  - **SIADH** from ectopic antidiuretic hormone (ADH) — hyponatraemia.
  - **Cushing's syndrome** from ectopic ACTH.
  - **Lambert-Eaton myasthenic syndrome** (anti-VGCC antibodies) — proximal weakness that improves with repeated activity.
  - Limbic encephalitis (anti-Hu antibodies).
- Treatment: chemotherapy (etoposide + cisplatin or carboplatin) with or without radiotherapy. Surgery is rarely indicated.
- Despite being chemotherapy-sensitive, the prognosis is poor due to early metastasis at diagnosis.

## Large cell carcinoma (10-15%)

- Poorly differentiated NSCLC — large cells with large nuclei and prominent nucleoli.
- No evidence of glandular or squamous differentiation by definition.
- Behaves aggressively with poor prognosis.

## Mesothelioma

- Arises from parietal or visceral pleura (rarely peritoneal).
- Strong association with **asbestos exposure**, with a latency of 25 to 45 years.
- Spreads diffusely within the pleural space, characteristically encasing the lung.
- Presentation: chest pain, dyspnoea, weight loss, and extensive pleural effusion.
- Histology: epithelioid (most common), sarcomatoid, or mixed type; **calretinin positive** on immunohistochemistry.
- Prognosis is poor (median survival 12 months); palliative care, chemotherapy (cisplatin + pemetrexed), and occasionally immunotherapy (nivolumab + ipilimumab).
- Indwelling pleural catheter for symptomatic effusion.

## Carcinoid tumours

- Low-grade neuroendocrine tumours (well-differentiated).
- Usually present in younger patients than other lung cancers.
- Slower growing, with better prognosis after surgical resection.
- Can secrete serotonin → **carcinoid syndrome** (flushing, diarrhoea, bronchoconstriction). However, carcinoid syndrome usually only occurs when there are liver metastases bypassing first-pass metabolism, or with bronchial primary tumours secreting directly into the systemic circulation.

## Paraneoplastic syndromes — summary

- **Antidiuretic hormone (ADH)** → SIADH (small cell).
- **Adrenocorticotrophic hormone (ACTH)** → Cushing's syndrome (small cell).
- **Parathyroid hormone-related peptide (PTHrP)** → hypercalcaemia and bone pain (squamous cell).
- **Calcitonin** → hypocalcaemia (small cell).
- **Serotonin** → carcinoid syndrome (carcinoid).
- **Bradykinin** → cough.
- **Lambert-Eaton myasthenic syndrome** (anti-VGCC) — proximal weakness that improves with repeated activity (small cell).
- Limbic encephalitis, cerebellar degeneration (anti-Hu, anti-Yo).
- Acanthosis nigricans, dermatomyositis (cutaneous markers of underlying malignancy).

## Molecular markers and targeted therapy

| Marker | Tumour type | Significance |
| --- | --- | --- |
| **ERCC1** high | NSCLC | Poorer response to cisplatin |
| **EGFR** mutation | Adenocarcinoma | Target for tyrosine kinase inhibitors (gefitinib, erlotinib, osimertinib) |
| **KRAS** mutation | Adeno or squamous | Poor prognosis; non-response to most TKIs (sotorasib for G12C) |
| **EML4-ALK** fusion | Adenocarcinoma | Target for ALK inhibitors (crizotinib, alectinib) |
| **PD-L1** expression | NSCLC | Directs use of immune checkpoint inhibitors (pembrolizumab) |
| **RET, ROS1, NTRK, BRAF V600E** | Adenocarcinoma | Each has dedicated targeted therapies |

## Staging

The most important prognostic factor is **stage** (TNM classification):
- **T** (tumour size and local invasion of pleura, mediastinum, etc.): T1 to T4.
- **N** (lymph node involvement): N0 (no nodes), N1 (ipsilateral hilar), N2 (mediastinal), N3 (contralateral or supraclavicular).
- **M** (distant metastasis): M0 or M1.

Common metastatic sites: bone (osteolytic), liver, brain, adrenal glands.

## Investigation pathway

- Chest X-ray (often the initial finding).
- **Contrast-enhanced CT chest, abdomen, and pelvis** for staging.
- **PET-CT** for further staging and detection of distant disease.
- **Bronchoscopy** with biopsy (for central tumours).
- **CT-guided percutaneous biopsy** (for peripheral tumours).
- **EBUS** (endobronchial ultrasound) for sampling mediastinal lymph nodes.
- Pulmonary function tests for fitness for surgery or radiotherapy.

## Treatment summary

### NSCLC
- Stage I-II: surgical resection (lobectomy ideally) plus adjuvant chemotherapy.
- Stage IIIA: surgery plus chemoradiotherapy.
- Stage IIIB: chemoradiotherapy with durvalumab consolidation.
- Stage IV (metastatic): targeted therapy if mutation-driven; immunotherapy (pembrolizumab) with or without chemotherapy if PD-L1 positive; chemotherapy alone otherwise.

### SCLC
- Limited stage: chemoradiotherapy plus prophylactic cranial irradiation.
- Extensive stage: chemotherapy with or without immunotherapy (atezolizumab or durvalumab).`,
        },
        {
          id: "pulmonary_vasculature",
          name: "Pulmonary Vasculature: PE & Pulmonary Hypertension",
          content: `## Pulmonary embolism

### Origin and risk factors

Approximately **95% of pulmonary emboli originate from deep vein thrombosis (DVT)** of the lower limbs or pelvis.

Risk factors are best understood through **Virchow's triad**:
1. **Stasis** — immobility, long-haul travel, plaster casts, post-operative state, paralysis.
2. **Endothelial / vessel wall injury** — surgery, trauma, central venous catheters.
3. **Hypercoagulability**:
   - **Inherited**: factor V Leiden (the commonest), prothrombin G20210A mutation, antithrombin III deficiency, protein C or S deficiency.
   - **Acquired**: malignancy (especially pancreatic, lung, ovarian), pregnancy and the puerperium, oral contraceptive pill, hormone replacement therapy, antiphospholipid syndrome, polycythaemia, smoking.

### Clinical patterns and consequences

- **Massive (saddle) pulmonary embolus**: a large embolus impacting at the bifurcation of the main pulmonary artery, or both main pulmonary arteries. Acute right heart strain produces cor pulmonale, cardiogenic shock, and death if more than 60% of the pulmonary vascular bed is occluded.
- **Submassive PE**: right ventricular dysfunction without shock. These patients are at risk of decompensation.
- **Small peripheral PE**: may be silent or cause peripheral wedge-shaped infarctions, pleuritic chest pain, and haemoptysis.
- **Recurrent small emboli** can produce chronic thromboembolic pulmonary hypertension (CTEPH).

### Non-thrombotic emboli

- **Fat embolism**: classically after long-bone fracture; the triad is respiratory failure, neurological signs, and a petechial rash.
- **Amniotic fluid embolism**: a catastrophic event during or just after labour with high mortality.
- **Tumour embolism**: rare; may present like recurrent PE.
- **Air embolism**: from central line manipulation or diving accidents.
- **Foreign body embolism**: from intravenous drug use (talc).

### Investigations

- **Wells score** for clinical probability.
- **D-dimer** if low or intermediate Wells: a negative result reliably excludes PE.
- **CT pulmonary angiogram (CTPA)** is the diagnostic gold standard.
- **V/Q scan** for those who cannot have iodinated contrast (renal failure, contrast allergy, pregnancy).
- ECG: sinus tachycardia is the most common finding; the classical S1Q3T3 pattern (deep S in lead I, Q with T-wave inversion in lead III) is uncommon but specific. Right bundle branch block and right axis deviation occur in massive PE.
- Arterial blood gas: typically type 1 respiratory failure with respiratory alkalosis from hyperventilation.
- Echocardiogram in massive PE: right ventricular dilatation, paradoxical septal motion, and McConnell's sign (hypokinesis of the right ventricular free wall with sparing of the apex).

### Management

- **Massive PE** with haemodynamic instability: **systemic thrombolysis** (alteplase) with or without catheter-directed thrombolysis or surgical embolectomy.
- **Submassive or non-massive PE**: anticoagulation with a **direct oral anticoagulant (DOAC, e.g. rivaroxaban or apixaban)** is now first-line for most patients. Low molecular weight heparin (LMWH) bridging is no longer required for DOACs.
- Cancer-associated thrombosis: LMWH or specific DOACs (edoxaban, apixaban) are preferred.
- Inferior vena cava filter if anticoagulation is contraindicated.
- Duration of anticoagulation:
  - Provoked PE with reversible factor: 3 months.
  - Unprovoked PE: 3 months minimum, often extended; consider thrombophilia screening.
  - Recurrent or with persistent risk factor: indefinite.

## Pulmonary hypertension

### Definition

Pulmonary hypertension is defined as a **mean pulmonary arterial pressure greater than 25 mmHg at rest**, measured at right heart catheterisation.

### Classification (WHO/Nice 2018)

| Class | Group | Examples |
| --- | --- | --- |
| **1** | Pulmonary arterial hypertension (PAH) | Idiopathic; hereditary (BMPR2 mutation); drug- or toxin-induced (anorexigens, methamphetamine); associated with congenital heart disease, connective tissue disease, HIV infection, schistosomiasis, or portal hypertension. Idiopathic PAH is most common in women aged 20-40. |
| **2** | PH due to **left heart disease** | Systolic or diastolic dysfunction; valvular disease |
| **3** | PH due to **lung disease** | COPD, ILD, sleep apnoea, high altitude |
| **4** | **Chronic thromboembolic PH (CTEPH)** | Many small clots over time producing fibrotic occlusion |
| **5** | PH with unclear or multifactorial mechanisms | Sarcoidosis, sickle cell disease, chronic kidney disease |

### Pathophysiology

Sustained pulmonary vasoconstriction leads to vascular remodelling: intimal fibrosis, medial hypertrophy, and plexiform lesions. Right ventricular pressure rises, eventually leading to right ventricular failure.

The location of pathology can be:
- **Pre-capillary** (chronic hypoxia, embolism, PAH).
- **Capillary** (pulmonary fibrosis).
- **Post-capillary** (left heart disease, pulmonary veno-occlusive disease).

### Investigations

- **Echocardiogram**: estimated pulmonary artery systolic pressure from the tricuspid regurgitation jet. Useful as a screening test.
- **Right heart catheterisation**: definitive.
- Investigation for cause: HRCT (lung disease), V/Q scan (CTEPH), echocardiogram (left heart disease), connective tissue serology, HIV test, liver function tests (portal hypertension).

### Management (focused on Group 1 PAH)

- **Calcium channel blockers** (diltiazem, nifedipine) only if vasoreactive on right heart catheterisation (a small minority).
- **Endothelin receptor antagonists**: bosentan, ambrisentan, macitentan.
- **Phosphodiesterase 5 (PDE5) inhibitors**: sildenafil, tadalafil.
- **Soluble guanylate cyclase stimulators**: riociguat (also for CTEPH).
- **Prostacyclin analogues**: epoprostenol (intravenous infusion), iloprost (inhaled), treprostinil.
- Lung or heart-lung transplantation for refractory disease.

For Group 2 (left heart) and Group 3 (lung disease) pulmonary hypertension, treat the underlying disease — PAH-specific therapies do not help and can be harmful.

For Group 4 CTEPH, **pulmonary endarterectomy** is potentially curative; balloon pulmonary angioplasty for inoperable cases; riociguat for medical therapy.

### Complications

Right heart failure: peripheral oedema, ascites, raised jugular venous pressure, hepatic congestion ("nutmeg liver").`,
        },
        {
          id: "pulmonary_oedema_ards",
          name: "Pulmonary Oedema & Diffuse Alveolar Damage / ARDS",
          content: `## Pulmonary oedema

Pulmonary oedema is intra-alveolar fluid accumulation that impairs gas exchange.

### Aetiology

- **Cardiogenic** (the commonest): left heart failure raises pulmonary capillary hydrostatic pressure, forcing fluid into the alveoli. Causes include myocardial ischaemia, hypertension, valvular disease, and arrhythmia.
- **Non-cardiogenic**: increased capillary permeability — see ARDS below.
- **Other**: high altitude, neurogenic (after head injury or subarachnoid haemorrhage), iatrogenic fluid overload, re-expansion pulmonary oedema (after rapid lung re-expansion following thoracocentesis or chest drain insertion).

### Histology

- **Acute**: intra-alveolar pink-staining fluid (a proteinaceous transudate).
- **Chronic**: iron-laden macrophages — "**heart failure cells**" — which are haemosiderin-containing macrophages derived from extravasated red blood cells.

### Chest X-ray findings

The classical features (mnemonic ABCDE):
- **A**lveolar opacification ("**bat's wing**" pattern, perihilar).
- **B** — Kerley **B** lines (short horizontal lines at the lung periphery from interlobular septal oedema).
- **C**ardiomegaly (suggests a cardiac cause).
- **D**iversion of upper lobe vessels (cephalisation).
- **E**ffusions (often bilateral).

Fluid in the horizontal fissure is also commonly seen.

### Acute management

- Sit the patient upright.
- High-flow oxygen, target SpO₂ 94-98%.
- **Intravenous loop diuretic** (furosemide 40-80 mg).
- **Nitrates** (GTN infusion) if systolic blood pressure is greater than 110 mmHg.
- **CPAP or non-invasive ventilation** if severe.
- Treat the precipitant (ischaemia, arrhythmia, infection, non-compliance).

## Diffuse alveolar damage (DAD) and acute respiratory distress syndrome (ARDS)

### Definition

Diffuse alveolar damage is the histological substrate of acute respiratory distress syndrome (ARDS) — acute injury to the alveoli leading to an exudative inflammatory reaction, increased capillary permeability, and rapid onset of severe respiratory failure that often requires intensive care unit admission and mechanical ventilation.

### Berlin criteria for ARDS (2012)

ARDS is defined by:
1. Onset within 1 week of a known clinical insult.
2. Bilateral opacities on chest X-ray, not fully explained by cardiac failure or fluid overload.
3. PaO₂/FiO₂ ratio (with positive end-expiratory pressure of at least 5 cm H₂O):
   - Mild: 200-300 mmHg.
   - Moderate: 100-200 mmHg.
   - Severe: less than 100 mmHg.
4. Respiratory failure not fully explained by cardiac failure (use echocardiogram if uncertain).

### Aetiology

- **Pulmonary**: pneumonia (most common), aspiration, inhalational injury, near-drowning, fat embolism, lung contusion.
- **Extrapulmonary**: sepsis, severe trauma, massive blood transfusion (transfusion-related acute lung injury, TRALI), pancreatitis, burns, drug overdose.
- Neonatal: **hyaline membrane disease** from surfactant deficiency in premature infants.

### Pathophysiology

1. **Exudative phase** (days 1-7): damage to the alveolar-capillary membrane allows leakage of protein-rich fluid into alveoli, producing **hyaline membranes** (the histological hallmark — eosinophilic membranes lining alveoli, composed of fibrin and necrotic epithelial debris). Surfactant function is lost. Severe hypoxaemia ensues.
2. **Proliferative phase** (1-3 weeks): proliferation of type II pneumocytes attempts repair; fibroblasts begin laying down collagen.
3. **Fibrotic phase** (more than 3 weeks): if injury is sustained, irreversible fibrosis develops with cyst formation and traction bronchiectasis.

### Macroscopic and chest X-ray findings

- Lungs: heavy, firm, plum-coloured, **airless**.
- Chest X-ray: bilateral diffuse opacification ("**white-out**" of all lung fields).

### Management of ARDS

The cornerstone is supportive:
- Treat the underlying cause (e.g. antibiotics for sepsis).
- **Lung-protective mechanical ventilation**: low tidal volumes (6 mL per kilogram of ideal body weight), low plateau pressures (less than 30 cm H₂O), adequate positive end-expiratory pressure, and permissive hypercapnia.
- Conservative fluid management (avoid fluid overload).
- **Prone positioning** for severe cases (PaO₂/FiO₂ less than 150 mmHg) — improves V/Q matching and improves mortality.
- Neuromuscular blockade in early severe ARDS.
- **Extracorporeal membrane oxygenation (ECMO)** in selected refractory cases.
- Steroids (dexamethasone in COVID-19; debated role in non-COVID ARDS).

### Hyaline membrane disease (neonatal)

- Affects premature infants, particularly those born before 32 weeks of gestation.
- Cause: insufficient surfactant production by immature type II pneumocytes.
- Histology: hyaline membranes lining alveoli (the same morphological substrate as adult ARDS).
- Treatment: antenatal corticosteroids when preterm delivery is anticipated; postnatal exogenous surfactant; CPAP; mechanical ventilation as needed.`,
        },
        {
          id: "pleural_disease",
          name: "Pleural Disease",
          content: `## Anatomy and physiology

The pleura is a double-layered serous membrane. The **visceral pleura** covers the lung surface and is supplied by the bronchial circulation; the **parietal pleura** lines the chest wall, diaphragm, and mediastinum, and is supplied by the systemic circulation (intercostal arteries). The two layers enclose the pleural space, which normally contains 10 to 20 mL of lubricating fluid produced by the parietal pleura and absorbed by lymphatics in the visceral pleura.

Only the parietal pleura carries somatic pain fibres (intercostal nerves); irritation of the visceral pleura is painless. This is why pleuritic chest pain localises sharply to the chest wall.

## Pleural effusion

A pleural effusion is an abnormal accumulation of fluid in the pleural space.

### Light's criteria — transudate vs exudate

The first diagnostic step is to classify the fluid, because the differential diagnoses differ markedly.

Light's criteria classify an effusion as an **exudate** if any one of the following is met:
- Pleural fluid protein divided by serum protein is greater than 0.5.
- Pleural fluid lactate dehydrogenase (LDH) divided by serum LDH is greater than 0.6.
- Pleural fluid LDH is greater than two-thirds of the upper limit of normal serum LDH.

Light's criteria are highly sensitive (around 98%) but only moderately specific. Around 25% of patients with cardiac failure on diuretics are mislabelled as exudates by Light's criteria. In this scenario, a **serum-to-pleural albumin gradient greater than 12 g/L** (or a serum-to-pleural protein gradient greater than 31 g/L) correctly reclassifies them as transudates.

### Causes

| Type | Mechanism | Examples |
| --- | --- | --- |
| **Transudate** | Increased hydrostatic pressure or reduced oncotic pressure; the pleura itself is normal | Left ventricular failure (commonest); cirrhosis with ascites; nephrotic syndrome; hypoalbuminaemia; constrictive pericarditis; hypothyroidism; peritoneal dialysis; Meigs' syndrome (ovarian fibroma with ascites and pleural effusion) |
| **Exudate** | Increased capillary permeability from inflammation or malignancy; pleural disease itself | Pneumonia (parapneumonic); malignancy (lung, breast, lymphoma, mesothelioma); pulmonary embolism with infarction; tuberculosis; rheumatoid arthritis; systemic lupus erythematosus; pancreatitis (left-sided); oesophageal rupture; drug-induced (amiodarone, methotrexate, phenytoin, nitrofurantoin) |

### Investigations

- **Chest X-ray**: blunting of the costophrenic angle requires around 200 mL of fluid on an erect film; meniscus sign at the upper margin; complete white-out with tracheal deviation away from the affected side in massive effusion.
- **Thoracic ultrasound**: more sensitive than X-ray (detects as little as 50 mL), distinguishes simple from loculated or septated fluid, and guides safe pleural aspiration. Now mandatory for pleural procedures under British Thoracic Society (BTS) guidance.
- **Contrast-enhanced computed tomography (CT) of the thorax**: best for identifying the underlying cause and characterising pleural thickening, masses, or trapped lung.
- **Diagnostic pleural aspiration (thoracocentesis)** with biochemical, microbiological, and cytological analysis:
  - Protein and LDH for Light's criteria.
  - pH (a pH less than 7.2 in the context of parapneumonic effusion mandates urgent chest drain).
  - Glucose (low in rheumatoid arthritis, empyema, malignancy, and tuberculosis).
  - Total and differential cell count (neutrophils in parapneumonic effusion; lymphocytes in tuberculosis or malignancy).
  - Cytology (positive in around 60% of malignant effusions on first sample; sensitivity rises with repeat sampling).
  - Amylase (raised in pancreatitis and oesophageal rupture).
  - Triglycerides (greater than 1.24 mmol/L in chylothorax).
  - Microscopy, culture, and sensitivities, including specific stains and culture for tuberculosis.
  - Adenosine deaminase (ADA): a level greater than 40 U/L is suggestive of tuberculous pleurisy.

### Specific pleural effusion patterns

- **Parapneumonic effusion**: simple (sterile reactive transudate), complicated (positive bacterial culture, pH less than 7.2, or glucose less than 2.2 mmol/L), or empyema (frank pus in the pleural space). Complicated and empyemic effusions require chest drain.
- **Malignant pleural effusion**: most commonly from carcinoma of the lung, breast, or ovary, or from lymphoma. Treatment options are repeated therapeutic aspiration, indwelling pleural catheter, or pleurodesis (chemical, with sterile talc slurry or talc poudrage at thoracoscopy).
- **Tuberculous pleurisy**: predominantly lymphocytic exudate with high adenosine deaminase. Pleural biopsy (Abrams needle or thoracoscopic) improves diagnostic yield to over 90%.
- **Haemothorax**: blood within the pleural space, typically from trauma, ruptured thoracic aortic aneurysm, or anticoagulation. Pleural fluid haematocrit greater than 50% of the peripheral haematocrit confirms the diagnosis. Requires large-bore intercostal drainage.
- **Chylothorax**: lymph within the pleural space, from thoracic duct injury (surgery, trauma) or malignancy (especially lymphoma). Fluid is milky-white with triglycerides greater than 1.24 mmol/L. Management is drainage, a low-fat diet with medium-chain triglyceride substitution, octreotide, and surgical ligation of the thoracic duct for persistent leak.

## Empyema

Empyema is pus within the pleural space. Around 40% of bacterial pneumonias develop a parapneumonic effusion, of which about 10% progress to empyema. Other causes include chest trauma, thoracic surgery, and oesophageal rupture.

### Stages
1. **Exudative (acute)**: free-flowing inflammatory fluid; drains easily.
2. **Fibrinopurulent**: fibrin deposition produces septations and loculations.
3. **Organising (chronic)**: a dense fibrous peel forms, trapping the lung and requiring surgical decortication.

### Microbiology
Streptococcus pneumoniae, Streptococcus milleri group, Staphylococcus aureus, anaerobes (especially in aspiration-related empyema), and Gram-negative organisms.

### Management
- **Broad-spectrum antibiotics** (commonly intravenous co-amoxiclav plus metronidazole, or piperacillin-tazobactam if hospital-acquired), narrowed to culture, for 3 to 6 weeks.
- **Intercostal chest drain** as soon as the diagnosis is made.
- **Intrapleural fibrinolytics**: intrapleural alteplase combined with deoxyribonuclease (DNase) for organised or loculated empyema, based on the MIST2 trial, which showed improved radiographic outcomes and reduced surgical referral.
- **Video-assisted thoracoscopic surgery (VATS)** when medical therapy and drainage fail to control sepsis or evacuate the pleural space.
- **Decortication** (open thoracotomy) for chronic organised empyema with trapped lung.

## Pneumothorax

A pneumothorax is air within the pleural space, which abolishes the negative intrapleural pressure and allows partial or complete lung collapse.

### Classification

| Type | Mechanism | Typical patient |
| --- | --- | --- |
| **Primary spontaneous** | Rupture of an apical subpleural bleb in an otherwise healthy lung | Tall, thin, young male smokers; age 20-40 years |
| **Secondary spontaneous** | Underlying lung disease | Chronic obstructive pulmonary disease (the commonest cause), asthma, cystic fibrosis, tuberculosis, Pneumocystis jirovecii pneumonia, Langerhans cell histiocytosis, lymphangioleiomyomatosis, Marfan syndrome, Ehlers-Danlos syndrome |
| **Traumatic** | Penetrating or blunt chest injury, including iatrogenic causes (central venous catheter, transbronchial or CT-guided lung biopsy, positive-pressure ventilation, thoracocentesis) | Any |
| **Tension** | A one-way valve allows air to enter the pleural space on inspiration but not leave on expiration; positive intrapleural pressure shifts the mediastinum and obstructs venous return | Any — life-threatening |
| **Catamenial** | Thoracic endometriosis with cyclical pneumothorax | Women of reproductive age, within 72 hours of menstruation |

### Clinical features
- Sudden-onset pleuritic chest pain and dyspnoea.
- Reduced breath sounds, hyper-resonant percussion note, and reduced chest expansion on the affected side.
- **Tension pneumothorax** additionally produces tracheal deviation away from the affected side, distended neck veins (where venous return is obstructed), hypotension, and progression to cardiac arrest if untreated. **Tension pneumothorax is a clinical diagnosis** — do not wait for a chest X-ray; perform needle decompression immediately.

### Investigations
- **Erect posteroanterior chest X-ray** taken on full inspiration: visceral pleural line with absence of lung markings peripheral to it. Size is measured at the level of the hilum (BTS convention).
- **Computed tomography of the chest** is the most sensitive modality, detects occult pneumothoraces in trauma, and identifies underlying lung disease that determines management.

### Management (British Thoracic Society 2010 guidance, with awareness of revised 2023 framework)

**Primary spontaneous pneumothorax**:
- Small (less than 2 cm rim at the hilum) and minimally symptomatic: observation with high-flow oxygen (which accelerates resorption of pleural air) and a repeat chest X-ray.
- Larger or symptomatic: simple aspiration via a 16-18 gauge cannula. If this fails or the pneumothorax recurs, insert an intercostal chest drain.

**Secondary spontaneous pneumothorax**: a lower threshold for chest drain because of poor underlying lung reserve. All patients over 50 years of age or with significant underlying lung disease should be admitted.

**Tension pneumothorax**: immediate needle decompression. The traditional landmark is the second intercostal space in the mid-clavicular line; updated Advanced Trauma Life Support (ATLS) guidance favours the fifth intercostal space in the anterior axillary line because of more reliable pleural penetration in adults. Formal intercostal chest drain must follow.

**Recurrence prevention** (video-assisted thoracoscopic surgery with pleurectomy, abrasive pleurodesis, or chemical pleurodesis with talc):
- Second ipsilateral pneumothorax.
- First contralateral pneumothorax.
- First episode in a high-risk occupation (commercial diver, pilot).
- Persistent air leak beyond 5 to 7 days.

### Related entities
- **Pneumomediastinum**: air in the mediastinum, often from oesophageal perforation (Boerhaave syndrome), tracheobronchial injury, or alveolar rupture with dissection along bronchovascular sheaths (the Macklin effect). **Hamman's sign** (a crepitant noise synchronous with the heartbeat) is classical.
- **Surgical (subcutaneous) emphysema**: palpable crepitus in soft tissues, usually from tension pneumothorax, chest drain dysfunction, or airway injury.

## Pleural tumours

- **Mesothelioma** — covered in detail in the Lung Tumours topic. Asbestos-associated; latency 25 to 45 years.
- **Solitary fibrous tumour of the pleura**: rare, usually benign mesenchymal tumour. Can produce **non-islet-cell tumour hypoglycaemia** by secreting insulin-like growth factor 2 (IGF-2) — known as **Doege-Potter syndrome**.
- **Metastatic pleural disease**: most commonly from carcinoma of the lung, breast, or ovary, usually presenting as a malignant pleural effusion.

## Pleural plaques

Discussed in the Pneumoconiosis topic. Asymptomatic, often calcified parietal pleural plaques are the commonest asbestos-related lesion. They serve as a marker of past asbestos exposure and do not themselves progress to malignancy.`,
        },
        {
          id: "obstructive_sleep_apnoea",
          name: "Obstructive Sleep Apnoea",
          content: `## Definitions

- **Apnoea**: complete cessation of airflow for at least 10 seconds.
- **Hypopnoea**: a reduction in airflow of at least 30%, with at least a 4% drop in oxygen saturation or an arousal from sleep, lasting at least 10 seconds.
- **Apnoea-Hypopnoea Index (AHI)**: the number of apnoeas plus hypopnoeas per hour of sleep. The AHI is the cardinal measure of severity.
- **Obstructive sleep apnoea (OSA)**: repetitive partial or complete collapse of the upper airway during sleep, with **preserved respiratory effort**, producing intermittent hypoxia and arousal. This is distinguished from central sleep apnoea, in which respiratory effort is absent.
- **Obstructive sleep apnoea syndrome (OSAS)**: OSA combined with daytime symptoms, most commonly excessive daytime sleepiness.

## Epidemiology

OSA affects approximately 4% of middle-aged men and 2% of middle-aged women in the United Kingdom, and prevalence is rising in parallel with obesity. The condition is markedly under-diagnosed; many patients present indirectly through road traffic accidents, resistant hypertension, or cardiovascular events.

## Pathophysiology

During sleep, particularly in **rapid eye movement (REM) sleep**, pharyngeal dilator muscle tone falls. In susceptible patients, the upper airway (typically at the level of the soft palate or the tongue base) collapses inward under the negative intrathoracic pressure generated by inspiration. The resulting apnoea or hypopnoea provokes:

1. **Progressive hypoxaemia and hypercapnia**.
2. **Sympathetic nervous system activation**, with surges in blood pressure and heart rate.
3. **Arousal** from sleep to restore upper airway patency, fragmenting sleep architecture and producing daytime symptoms.

Recurrent intermittent hypoxia produces systemic oxidative stress, endothelial dysfunction, and chronic low-grade inflammation. This is the mechanistic basis for the cardiovascular complications of OSA.

## Risk factors

- **Obesity**: the single strongest factor (raised body mass index and increased neck circumference, defined as greater than 17 inches or 43 cm in men, greater than 16 inches or 41 cm in women).
- Male sex.
- Increasing age.
- Postmenopausal status in women (oestrogen and progesterone maintain upper airway tone).
- Craniofacial features: retrognathia, micrognathia, macroglossia, high-arched palate.
- Tonsillar or adenoidal hypertrophy (the commonest cause in children).
- Endocrine disease: acromegaly, hypothyroidism, polycystic ovary syndrome (PCOS).
- Smoking and alcohol use (alcohol particularly reduces pharyngeal tone in the evening).
- Sedative use (benzodiazepines, opioids).
- Family history (heritability around 40%).

## Clinical features

### Reported by the bed partner
- Loud habitual snoring (present in essentially all symptomatic cases).
- Witnessed apnoeas, often terminating with a snort or gasp.
- Restless sleep.

### Reported by the patient
- Excessive daytime sleepiness — the most disabling symptom.
- Unrefreshing sleep.
- Morning headache (related to overnight hypercapnia).
- Nocturia.
- Reduced concentration, memory impairment, low mood.
- Reduced libido.

### Examination
- Obesity and raised neck circumference.
- Crowded oropharynx (Mallampati score 3 or 4).
- Retrognathia, macroglossia, or tonsillar hypertrophy.
- Hypertension is often the only objective sign.

## Screening tools

- **Epworth Sleepiness Scale (ESS)**: an 8-item self-report questionnaire about the likelihood of dozing in everyday situations (e.g. reading, watching television, sitting as a passenger in a car). Score ranges from 0 to 24. A score greater than 10 indicates excessive daytime sleepiness; greater than 16 is severe.
- **STOP-BANG questionnaire**: 8 items — **S**noring, **T**iredness, **O**bserved apnoea, blood **P**ressure raised, **B**ody mass index greater than 35 kg/m², **A**ge greater than 50 years, **N**eck circumference greater than 40 cm, **G**ender male. A score of 3 or more is sensitive for OSA; a score of 5 or more is highly specific.
- **Berlin Questionnaire** is an alternative validated screening instrument.

## Diagnosis

The diagnostic gold standard is **in-laboratory polysomnography**, which records electroencephalogram (EEG), electrooculogram (EOG), submental electromyogram (EMG), electrocardiogram (ECG), oronasal airflow (nasal pressure transducer and thermistor), respiratory effort (thoracic and abdominal impedance belts), peripheral oxygen saturation by pulse oximetry, and body position.

**Home sleep apnoea testing** (limited-channel cardiorespiratory polygraphy, typically measuring airflow, effort, saturation, heart rate, and position) is now first-line in adults with a high clinical pre-test probability and no significant comorbidities (such as heart failure, neuromuscular disease, or severe chronic obstructive pulmonary disease). It is more accessible and is equally accurate in this population.

### Severity grading by AHI

| AHI (events per hour) | Severity |
| --- | --- |
| Less than 5 | Normal |
| 5 to 14 | Mild |
| 15 to 29 | Moderate |
| 30 or more | Severe |

## Complications

OSA is independently associated with:

- **Cardiovascular disease**: systemic hypertension (particularly resistant hypertension), atrial fibrillation, coronary artery disease, heart failure, ischaemic stroke, and sudden cardiac death.
- **Metabolic disease**: type 2 diabetes mellitus, insulin resistance, and the metabolic syndrome.
- **Pulmonary hypertension**, particularly in severe disease or when COPD coexists (the "overlap syndrome").
- **Road traffic accidents**: 2 to 7 times the population baseline risk. Under the United Kingdom Driver and Vehicle Licensing Agency (DVLA) rules, untreated OSA with excessive daytime sleepiness disqualifies a driver, and the DVLA must be notified by the patient.
- **Perioperative complications**: difficult intubation, postoperative respiratory failure, and arrhythmia.
- **Mood disorders** and cognitive impairment.

## Management

### Lifestyle and conservative measures
- **Weight loss** is the most effective long-term measure. A 10% reduction in body weight reduces the AHI by approximately 25%.
- Avoidance of alcohol and sedatives in the evening.
- Smoking cessation.
- Positional therapy (sleeping in the lateral rather than supine position; positional alarms or the "tennis ball in a T-shirt" technique).
- Treatment of nasal obstruction (intranasal corticosteroids, nasal dilators, septoplasty in selected cases).

### Continuous positive airway pressure (CPAP)
- **First-line treatment** for moderate to severe OSA, and for mild OSA with significant symptoms.
- A nasal or full-face mask delivers a pneumatic splint that holds the upper airway open during sleep, abolishing obstructive events.
- CPAP reduces AHI to near-normal, improves daytime sleepiness, quality of life, blood pressure control, and (in observational data) cardiovascular event rates.
- The principal limitation is adherence. Around 50% of users achieve good long-term adherence, defined as greater than 4 hours per night on at least 70% of nights. Pressure titration may be performed in the sleep laboratory or by **auto-titrating positive airway pressure (APAP)** at home.

### Mandibular advancement splints (MAS)
- Custom-fitted dental appliances that protrude the mandible, enlarging the retropalatal and retrolingual airway.
- An alternative for patients with mild to moderate OSA, those intolerant of CPAP, or those who prefer it. Less efficacious than CPAP but generally better tolerated.

### Surgery
- **Adenotonsillectomy** is curative in most paediatric cases.
- **Uvulopalatopharyngoplasty (UPPP)** produces modest results in carefully selected adults.
- **Maxillomandibular advancement** is highly effective in selected patients with retrognathia.
- **Bariatric surgery** can be transformative in obese patients with severe OSA, often reducing AHI dramatically and eliminating CPAP dependence.
- **Hypoglossal nerve stimulation** (an implantable pulse generator that stimulates the genioglossus during inspiration) is an emerging option for patients intolerant of CPAP, in selected anatomical subtypes.

### Driving
Patients must be advised not to drive until symptoms are controlled (typically once established on CPAP). The DVLA rules differ between Group 1 (cars and motorcycles) and Group 2 (heavy goods vehicle and passenger-carrying vehicle) licences, with stricter requirements for Group 2. It is the patient's legal responsibility to inform the DVLA.

## Central sleep apnoea (CSA)

Distinguished from OSA by the **absence of respiratory effort** during the apnoeic episode. Major causes:

- **Cheyne-Stokes respiration** in heart failure (a crescendo-decrescendo pattern of breathing punctuated by regular central apnoeas).
- Brainstem disease (cerebrovascular accident, multiple sclerosis, syringobulbia, brainstem tumour).
- Opioid use.
- High altitude.

Treatment targets the underlying disease. **Adaptive servo-ventilation (ASV)** is contraindicated in patients with heart failure with reduced ejection fraction; the SERVE-HF trial demonstrated increased cardiovascular mortality in this group.

## Obesity hypoventilation syndrome (OHS, Pickwickian syndrome)

The combination of obesity (body mass index of 30 kg/m² or greater) with daytime hypercapnia (arterial partial pressure of carbon dioxide, PaCO₂, greater than 6 kPa) and sleep-disordered breathing, in the absence of another cause of hypoventilation. Around 90% of patients also have OSA.

Management is non-invasive ventilation (continuous positive airway pressure if OSA-predominant; bilevel positive airway pressure if pure hypoventilation), weight loss (including bariatric surgery), and optimisation of comorbidities. Untreated OHS has a markedly increased mortality.`,
        },
      ],
    },
    {
      id: "gi_path",
      name: "GI Pathology",
      icon: "🍽️",
      topics: [
        {
          id: "oesophageal_pathology",
          name: "Oesophageal Pathology",
          content: `## Anatomy and histology

The oesophagus is lined by **non-keratinised stratified squamous epithelium** that transitions abruptly to the columnar epithelium of the gastric cardia at the **squamocolumnar junction (Z-line)**, just proximal to the lower oesophageal sphincter (LOS). Normal oesophageal squamous mucosa contains **no goblet cells**; the appearance of goblet cells in the lower oesophagus denotes intestinal metaplasia (Barrett's oesophagus).

## Gastro-oesophageal reflux disease (GORD)

Gastro-oesophageal reflux disease is the commonest cause of oesophagitis. It results from reflux of gastric acid through an incompetent lower oesophageal sphincter, which produces inflammation and erosion of the distal squamous mucosa.

### Risk factors
- Hiatus hernia, particularly the sliding (axial) type.
- Obesity and pregnancy (raised intra-abdominal pressure).
- Smoking and alcohol.
- Caffeine, chocolate, fatty foods (reduce LOS tone).
- Drugs that reduce LOS tone: calcium channel blockers, nitrates, anticholinergics.
- Connective tissue disease, particularly systemic sclerosis.

### Clinical features
- Retrosternal burning ("heartburn"), worse on lying flat or bending forwards.
- Acid regurgitation, especially at night.
- Odynophagia (painful swallowing) suggests ulceration.
- Extra-oesophageal manifestations: chronic cough, hoarseness, exacerbation of asthma, dental erosion.

### Severity grading
The **Los Angeles (LA) classification** grades endoscopic severity from A (one or more mucosal breaks no longer than 5 mm, not extending between the tops of two mucosal folds) through to D (mucosal breaks involving at least 75% of the oesophageal circumference).

### Investigations
Most patients with typical symptoms and no alarm features are managed empirically without endoscopy. **Upper gastrointestinal endoscopy** is indicated when there are ALARM features (NICE: **A**naemia, **L**oss of weight, **A**norexia, **R**ecent rapid onset or progression, **M**elaena or haematemesis, **S**wallowing difficulty), in patients over 55 with persistent symptoms, or when empirical therapy fails. **24-hour ambulatory pH monitoring** and **oesophageal manometry** are reserved for diagnostic uncertainty or pre-operative planning.

### Management
- **Lifestyle**: weight loss, smoking cessation, alcohol moderation, head-of-bed elevation, smaller meals, avoidance of late evening meals.
- **Proton pump inhibitor (PPI)** for 4 to 8 weeks (omeprazole, lansoprazole, esomeprazole), then step down to the lowest effective dose. H2-receptor antagonists (famotidine; ranitidine has been withdrawn because of nitrosamine contamination) are second-line.
- **Anti-reflux surgery** (laparoscopic Nissen fundoplication, magnetic sphincter augmentation with the LINX device) for refractory or regurgitation-predominant disease.
- **Endoscopic anti-reflux therapies** (Stretta, transoral incisionless fundoplication) in selected patients.

### Complications
Ulceration, haemorrhage with haematemesis or melaena, peptic stricture, **Barrett's oesophagus**, oesophageal adenocarcinoma.

## Barrett's oesophagus

Barrett's oesophagus is **intestinal metaplasia** of the lower oesophageal squamous mucosa to a columnar epithelium with **goblet cells**, secondary to chronic acid reflux. The squamocolumnar junction migrates proximally.

- Occurs in around 10% of patients with symptomatic GORD.
- Histological hallmark: **goblet cells** within the columnar mucosa (true intestinal metaplasia). Their presence is what defines Barrett's and confers an increased risk of progression to adenocarcinoma.
- Risk of progression: non-dysplastic Barrett's → low-grade dysplasia → high-grade dysplasia → intramucosal adenocarcinoma → invasive adenocarcinoma. Annual cancer progression rate is approximately 0.3 to 0.5% for non-dysplastic Barrett's, rising sharply with dysplasia.

### Surveillance and management (British Society of Gastroenterology, BSG)
- **Non-dysplastic Barrett's**: endoscopic surveillance every 2 to 5 years, with interval determined by segment length and intestinal metaplasia status.
- **Indefinite or low-grade dysplasia**: more frequent surveillance with expert pathology review; consider endoscopic eradication.
- **High-grade dysplasia or intramucosal carcinoma**: **endoscopic mucosal resection (EMR)** for visible lesions, followed by **radiofrequency ablation (RFA)** of the remaining Barrett's mucosa.
- **Submucosal or deeper invasion**: surgical or oncological management as for invasive cancer.

## Oesophageal cancer

### Adenocarcinoma
- Now the commonest oesophageal cancer in the Western world (rising incidence in parallel with obesity).
- Arises from **Barrett's oesophagus**, predominantly in the distal third of the oesophagus.
- Risk factors: GORD, Barrett's, obesity, smoking, prior radiotherapy. Helicobacter pylori is protective (probably through atrophic gastritis reducing acid).
- Predominantly affects Caucasian men.

### Squamous cell carcinoma
- Predominant worldwide, particularly in East Asia and sub-Saharan Africa.
- Affects the upper two-thirds: around 50% middle third, 20% upper third, 30% lower third.
- Risk factors: smoking, alcohol, achalasia (long-standing), **Plummer-Vinson syndrome** (post-cricoid oesophageal web with iron deficiency anaemia and dysphagia), caustic strictures, very hot beverages, nitrosamines in pickled foods, **human papillomavirus (HPV)** in high-prevalence regions.
- 6-fold more common in patients of Afro-Caribbean origin; men more than women.

### Clinical features
- **Progressive dysphagia** (solids before liquids, suggesting mechanical narrowing).
- Odynophagia.
- Weight loss, anorexia.
- Hoarseness from recurrent laryngeal nerve invasion.
- Haematemesis.
- Cough on swallowing (tracheo-oesophageal fistula).

### Investigations
- **Upper GI endoscopy with biopsy** is the diagnostic test.
- **Endoscopic ultrasound (EUS)** for T and N staging.
- **Contrast-enhanced CT of thorax, abdomen, and pelvis** and **PET-CT** for distant staging.
- **Staging laparoscopy** in distal adenocarcinoma to detect peritoneal disease.

### Management
- **Localised disease**: neoadjuvant chemoradiotherapy (the CROSS regimen of carboplatin and paclitaxel with concurrent radiotherapy) followed by **oesophagectomy** (Ivor-Lewis for distal tumours, McKeown for more proximal).
- **Locally advanced or metastatic**: palliative chemotherapy (a fluoropyrimidine plus platinum, with trastuzumab if HER2-positive; checkpoint inhibitors such as nivolumab or pembrolizumab in selected patients), palliative radiotherapy, and endoscopic self-expanding metal stenting for dysphagia.
- Overall 5-year survival remains around 20%.

## Oesophageal varices

Oesophageal varices are engorged submucosal venous channels in the lower oesophagus secondary to **portal hypertension**, of which cirrhosis is the commonest cause.

### Pathophysiology
Portal venous pressure greater than 12 mmHg dilates portosystemic anastomoses at the gastro-oesophageal junction (oesophageal varices), the anorectal junction (rectal varices, not haemorrhoids), the umbilical region (caput medusae), and retroperitoneal sites. Variceal bleeding correlates with the **hepatic venous pressure gradient (HVPG)**; bleeding is unusual below 12 mmHg.

### Acute variceal bleed management
- **Resuscitation**: activate the major haemorrhage protocol, two large-bore peripheral cannulae, balanced blood transfusion. The transfusion target is haemoglobin 70 to 80 g/L; over-transfusion increases portal pressure and worsens bleeding.
- **Terlipressin** (a vasopressin analogue): splanchnic vasoconstriction reduces portal pressure. Continue for up to 5 days.
- **Prophylactic broad-spectrum antibiotics** (intravenous ceftriaxone, or piperacillin-tazobactam locally): reduce mortality by preventing spontaneous bacterial peritonitis and rebleeding.
- **Urgent upper GI endoscopy** within 24 hours of presentation: **endoscopic variceal band ligation (EVL)** is first-line for oesophageal varices. **Cyanoacrylate glue injection** is preferred for gastric varices.
- **Sengstaken-Blakemore tube** for uncontrolled bleeding as a bridge to definitive treatment.
- **Transjugular intrahepatic portosystemic shunt (TIPS)** for refractory or recurrent bleeding.

### Primary and secondary prophylaxis
- **Non-selective beta-blocker** (propranolol, carvedilol) titrated to a 25% reduction in resting heart rate for medium-to-large varices.
- **Endoscopic variceal band ligation** for high-risk varices, especially after a first bleed.

## Achalasia

Achalasia is **failure of the lower oesophageal sphincter to relax** together with **loss of peristalsis in the oesophageal body**, due to degeneration of inhibitory ganglion cells in the myenteric (Auerbach's) plexus.

- Presents with progressive dysphagia for **both solids and liquids simultaneously** (in contrast to mechanical obstruction, which affects solids first), regurgitation of undigested food, weight loss, retrosternal pain, and recurrent aspiration pneumonia.
- Investigations:
  - **Barium swallow**: dilated oesophagus with a "**bird's beak**" tapering at the LOS.
  - **High-resolution oesophageal manometry** is the gold standard: absent peristalsis, raised LOS resting pressure, failure of LOS relaxation on swallowing. The Chicago Classification subtypes guide therapy.
  - **Upper GI endoscopy** to exclude **pseudoachalasia** from a cardia tumour, particularly in older patients with rapid progression.
- **Chagas disease** (Trypanosoma cruzi infection in Latin America) is the major worldwide secondary cause, through similar ganglion cell destruction.
- Management: **pneumatic balloon dilatation**, **laparoscopic Heller myotomy** (with partial fundoplication), **peroral endoscopic myotomy (POEM)**, or botulinum toxin injection (short-term, for unfit patients).
- Long-standing achalasia carries an increased risk of **oesophageal squamous cell carcinoma**.

## Mallory-Weiss tear and Boerhaave syndrome

- **Mallory-Weiss tear**: a partial-thickness longitudinal mucosal laceration at the gastro-oesophageal junction caused by forceful vomiting or retching. Presents with haematemesis after vomiting; usually self-limiting and managed conservatively with endoscopic clips or adrenaline injection if bleeding persists.
- **Boerhaave syndrome**: spontaneous full-thickness rupture of the oesophagus, classically after forceful vomiting against a closed glottis. Presents with **Mackler's triad** of vomiting, severe chest pain, and subcutaneous emphysema. Diagnosed with CT thorax with oral water-soluble contrast (gastrografin swallow). Requires surgical or endoscopic stent repair and pleural drainage; mortality remains around 30%, doubling for each 24 hours of delayed diagnosis.

## Oesophageal infections

Most relevant in immunocompromised patients (HIV with CD4 less than 200, post-transplant, chemotherapy):
- **Candida albicans**: white plaques on endoscopy; oral fluconazole or intravenous echinocandin.
- **Cytomegalovirus (CMV)**: deep linear ulcers with intranuclear inclusion bodies ("owl's eye" cells); intravenous ganciclovir.
- **Herpes simplex virus (HSV)**: small shallow ulcers with multinucleate giant cells and intranuclear inclusion bodies (Cowdry type A); aciclovir.`,
        },
        {
          id: "gastric_pathology",
          name: "Gastric Pathology, H. pylori & Peptic Ulcer Disease",
          content: `## Histology of the stomach

The stomach is lined by columnar epithelium with mucin-secreting surface cells and specialised glands:
- **Parietal (oxyntic) cells**: secrete hydrochloric acid and intrinsic factor (the latter required for ileal vitamin B12 absorption).
- **Chief cells**: secrete pepsinogen.
- **G cells** (antrum): secrete gastrin.
- **Enterochromaffin-like (ECL) cells**: secrete histamine, which stimulates parietal cells.
- **D cells**: secrete somatostatin, which inhibits gastrin and acid secretion.

Goblet cells are **not** normally present; their appearance signifies intestinal metaplasia (a pre-malignant change).

## Helicobacter pylori

A spiral Gram-negative microaerophilic bacterium that colonises the gastric mucus layer. It is the central pathogenic factor in most peptic ulcer disease and gastric malignancy.

### Pathogenesis
- **Urease** activity neutralises gastric acid, enabling survival; this also forms the basis of the urea breath test.
- **CagA (cytotoxin-associated antigen A)** and **VacA (vacuolating cytotoxin A)** disrupt epithelial integrity and induce inflammation.
- Chronic infection produces a spectrum from chronic active gastritis → intestinal metaplasia → dysplasia → gastric adenocarcinoma, and **gastric MALT (mucosa-associated lymphoid tissue) lymphoma**.

### Diseases caused
- Chronic active antral gastritis (universal in infection).
- **Duodenal ulcer** (around 95% of cases are H. pylori-associated).
- **Gastric ulcer** (around 70%).
- Gastric adenocarcinoma (WHO class I carcinogen).
- **Gastric MALT lymphoma**.

### Diagnosis
- **Urea breath test** (non-invasive; sensitive and specific). Must stop PPI for 2 weeks and antibiotics for 4 weeks prior.
- **Stool antigen test**.
- **Rapid urease test (CLO test)** on endoscopic biopsy.
- Histology with Giemsa or special H. pylori stains.
- Culture (rare; for resistance testing).

### Eradication (UK first-line)
**Triple therapy** for 7 days:
- Proton pump inhibitor twice daily (e.g. omeprazole 20 mg or lansoprazole 30 mg).
- Amoxicillin 1 g twice daily.
- Clarithromycin 500 mg twice daily **or** metronidazole 400 mg twice daily.

For penicillin-allergic patients, substitute amoxicillin with metronidazole or use bismuth-based quadruple therapy. Test of cure (urea breath test) at 4 to 8 weeks if relevant (complicated ulcer, MALT lymphoma, persistent symptoms).

## Gastritis

| Type | Pathology | Cause |
| --- | --- | --- |
| **Acute** | Neutrophilic infiltrate | Aspirin, non-steroidal anti-inflammatory drugs (NSAIDs), corrosives, acute H. pylori, severe stress (e.g. burns — "Curling ulcer"; raised intracranial pressure — "Cushing ulcer"), alcohol |
| **Chronic** | Lymphocytic and plasma cell infiltrate | H. pylori (antral predominant), autoimmune (body predominant — produces pernicious anaemia), chronic bile reflux, alcohol, smoking |

### Autoimmune (type A) gastritis
- Antibodies against parietal cells and intrinsic factor destroy oxyntic mucosa.
- Hypochlorhydria or achlorhydria; loss of intrinsic factor causes **vitamin B12 deficiency and pernicious anaemia**.
- Compensatory hypergastrinaemia drives ECL cell hyperplasia and rarely **gastric neuroendocrine tumours (type 1 NETs)**.
- Increased risk of gastric adenocarcinoma.

### Ménétrier disease
Hyperplastic gastropathy with giant rugal folds, protein-losing enteropathy, hypoalbuminaemia. Associated with transforming growth factor alpha overexpression. Treatment: cetuximab (anti-EGFR) in selected cases; gastrectomy if severe.

## Peptic ulcer disease (PUD)

A breach through the muscularis mucosae into the submucosa. A more superficial lesion is an **erosion**, not an ulcer.

### Gastric ulcer
- **Epigastric pain worsened by food** (in contrast to the duodenal ulcer pattern).
- Mainly in older patients.
- Risk factors: H. pylori, NSAIDs, smoking, stress, delayed gastric emptying, alcohol.
- Endoscopy: punched-out lesion with rolled (heaped-up) margins — always biopsy to exclude malignancy.

### Duodenal ulcer
- **Epigastric pain worsened at night and relieved by food and milk**.
- 4 times more common than gastric ulcer.
- Mainly in younger adults.
- Risk factors: H. pylori (around 95%), NSAIDs, aspirin, steroids, smoking, hypercalcaemia, **Zollinger-Ellison syndrome** (gastrinoma producing recurrent and atypical-site ulcers; MEN1 in 25%).

### Complications
- **Haemorrhage**: chronic occult bleeding with iron deficiency anaemia; acute haemorrhage from posterior duodenal ulcer eroding the gastroduodenal artery.
- **Perforation**: free intraperitoneal air on erect chest X-ray; emergency surgical or endoscopic repair (omental patch).
- **Gastric outlet obstruction**: from scarring after chronic pyloric ulcer; presents with projectile vomiting, hypochloraemic hypokalaemic metabolic alkalosis.
- **Malignant transformation** (gastric ulcer only).

### Management
- **Eradication of H. pylori** (test and treat).
- **Stop NSAIDs and aspirin** where possible.
- **PPI** for 4 to 8 weeks for healing.
- Repeat endoscopy at 6 to 8 weeks for gastric ulcers to confirm healing and exclude malignancy; not required for duodenal ulcers.

## Gastric cancer

### Epidemiology
Higher incidence in Japan, China, and Eastern Europe (linked to dietary nitrosamines from smoked, salted, and pickled foods). Falling overall, but cardia adenocarcinoma is rising in the West (linked to GORD and obesity).

### Risk factors
- **Helicobacter pylori** (WHO class I carcinogen).
- **Dietary**: smoked, salted, pickled foods (nitrosamines); low fruit and vegetable intake.
- **Chronic atrophic gastritis** of any cause; pernicious anaemia.
- **Smoking**, alcohol.
- **Family history**, hereditary diffuse gastric cancer syndrome (CDH1 / E-cadherin germline mutation).
- Blood group A.
- Prior gastric surgery.

### Histological types (Lauren classification)
- **Intestinal** (well-differentiated): goblet cells present; follows intestinal metaplasia and dysplasia. The classical H. pylori-driven cancer.
- **Diffuse** (poorly differentiated): no gland formation; includes **signet ring cell carcinoma** (cells with a peripheral nucleus and a large cytoplasmic mucin vacuole). More aggressive, often presents late; associated with CDH1 mutations.

### Clinical features
- Often asymptomatic until advanced.
- Weight loss, anorexia, early satiety, dyspepsia.
- Iron deficiency anaemia, melaena, haematemesis.
- **Virchow's node** (left supraclavicular lymphadenopathy via the thoracic duct — **Troisier's sign**).
- **Sister Mary Joseph nodule** (umbilical metastasis).
- **Krukenberg tumour** (bilateral ovarian metastases, classically signet ring cells).
- **Acanthosis nigricans** as a paraneoplastic skin sign.

### Investigations
- **Upper GI endoscopy** with multiple biopsies.
- **Endoscopic ultrasound** for T and N staging.
- **Contrast-enhanced CT** of thorax, abdomen, and pelvis.
- **Staging laparoscopy** for peritoneal disease.
- HER2 testing on biopsy (directs trastuzumab use).

### Management
- **Localised**: perioperative chemotherapy (FLOT regimen — 5-fluorouracil, leucovorin, oxaliplatin, docetaxel) with gastrectomy (subtotal for distal tumours, total for proximal). D2 lymphadenectomy.
- **Locally advanced or metastatic**: palliative chemotherapy with fluoropyrimidine plus platinum, trastuzumab if HER2-positive, checkpoint inhibitors (nivolumab) if PD-L1-positive.
- Poor overall prognosis (5-year survival around 20% across all stages; better with early diagnosis on screening — as practised in Japan).

## Gastric MALT lymphoma

A low-grade B-cell lymphoma arising from gastric mucosa-associated lymphoid tissue induced by chronic Helicobacter pylori infection.

- Histology: dense lymphoid infiltrate with **lymphoepithelial lesions** (lymphocytes invading gastric glands).
- Translocation t(11;18) confers H. pylori-eradication resistance.
- **Management**: **H. pylori eradication alone** causes regression in 70 to 80% of cases. Radiotherapy or rituximab-based chemotherapy for non-responders.

## Gastrointestinal stromal tumour (GIST)

Mesenchymal tumour arising from the **interstitial cells of Cajal** (the gut pacemaker cells). The stomach is the commonest site.

- Histology: spindle or epithelioid cells, positive for **CD117 (c-KIT)** and **DOG-1**.
- 80% have activating mutations in **KIT**; around 10% in **PDGFRA** (platelet-derived growth factor receptor alpha).
- **Imatinib** (a tyrosine kinase inhibitor) is the first-line targeted therapy; sunitinib and regorafenib for resistant disease.`,
        },
        {
          id: "coeliac_disease_path",
          name: "Coeliac Disease",
          content: `## Definition

Coeliac disease is a **T-cell mediated autoimmune enteropathy** triggered by ingested gluten (specifically the gliadin component of wheat, and similar prolamins in rye and barley) in genetically susceptible individuals. It affects approximately 1% of the UK population.

## Genetics

- Strong HLA association: virtually all patients carry **HLA-DQ2** (around 90%) or **HLA-DQ8** (around 10%). The absence of both has a very high negative predictive value.
- Concordance is 75% in monozygotic twins, 10 to 20% in first-degree relatives.

## Pathogenesis

1. Ingested gluten is incompletely digested into proline- and glutamine-rich peptides.
2. **Tissue transglutaminase (tTG)** in the lamina propria deamidates these peptides, increasing their affinity for HLA-DQ2 or HLA-DQ8 on antigen-presenting cells.
3. Activated CD4-positive T-helper cells drive B-cell antibody production (anti-tTG, anti-endomysial, anti-deamidated gliadin peptide) and recruit intraepithelial lymphocytes.
4. Cytotoxic intraepithelial lymphocytes damage enterocytes, producing villous atrophy and crypt hyperplasia.

## Clinical features

### Classical
- Steatorrhoea (pale, bulky, offensive stools).
- Abdominal pain and bloating.
- Diarrhoea.
- Weight loss, failure to thrive in children.
- Fatigue.

### Non-classical
- **Iron deficiency anaemia** (often the only finding in adults).
- **Folate deficiency** (proximal small bowel involvement) and B12 deficiency (less common, terminal ileum is usually preserved).
- **Dermatitis herpetiformis**: intensely itchy vesicular rash on extensor surfaces, with IgA deposits at the dermoepidermal junction. Treated with dapsone alongside a gluten-free diet.
- Recurrent oral aphthous ulcers.
- Short stature.
- Subfertility, recurrent miscarriage.
- Neurological: gluten ataxia, peripheral neuropathy, depression.
- Hyposplenism (with Howell-Jolly bodies on blood film).
- Osteoporosis from vitamin D and calcium malabsorption.

## Associated conditions
- **Type 1 diabetes mellitus** (5 to 10%).
- **Autoimmune thyroid disease**.
- Down syndrome and Turner syndrome.
- Autoimmune liver disease, primary biliary cholangitis, autoimmune hepatitis.
- IgA deficiency (must be considered when interpreting IgA-based serology).

## Differential diagnosis
Tropical sprue (similar villous atrophy but in patients with travel exposure; responds to antibiotics and folate), giardiasis, common variable immunodeficiency, Whipple's disease, autoimmune enteropathy, drug-induced (olmesartan).

## Diagnosis

The patient **must be eating gluten** (typically four slices of bread daily for at least six weeks) at the time of testing.

### Serology
- **Anti-tissue transglutaminase IgA (anti-tTG)**: first-line screening test; sensitivity and specificity around 95%.
- **Anti-endomysial antibody (EMA) IgA**: confirms positive anti-tTG; highly specific.
- **Anti-deamidated gliadin peptide (DGP) IgG**: useful in IgA-deficient patients.
- **Total IgA** must be measured to exclude selective IgA deficiency (10-fold more common in coeliac disease).

### Duodenal biopsy (gold standard)
Multiple biopsies of the second part of the duodenum (and the bulb) on upper GI endoscopy show:
- **Villous atrophy** (loss of the normal 2:1 villous-to-crypt ratio).
- **Crypt hyperplasia**.
- **Intraepithelial lymphocytosis** (greater than 25 per 100 enterocytes).

Severity is graded by the **Marsh classification** (0 = normal; 3a/b/c = partial / subtotal / total villous atrophy).

### Paediatric pathway
Children with anti-tTG titres greater than 10 times the upper limit of normal, positive EMA on a second sample, and HLA-DQ2 or DQ8 may now be diagnosed without biopsy (ESPGHAN 2020 guidance).

## Management

- **Lifelong strict gluten-free diet**: avoidance of wheat, rye, and barley. Oats are usually tolerated if uncontaminated.
- Dietitian input.
- **Pneumococcal vaccination every 5 years** because of functional hyposplenism.
- **DEXA scan** for osteoporosis screening; calcium and vitamin D supplementation.
- Iron, folate, and B12 replacement as required.
- Annual review with weight, height, symptom assessment, and repeat anti-tTG as a marker of dietary adherence (titres should fall on a strict gluten-free diet).

## Complications

- **Enteropathy-associated T-cell lymphoma (EATL)**: aggressive small bowel lymphoma, the principal life-threatening complication of poorly controlled coeliac disease. Risk falls with adherence to a gluten-free diet.
- **Small bowel adenocarcinoma**.
- **Refractory coeliac disease**: persistent symptoms and villous atrophy despite a strict gluten-free diet for at least 12 months. Type 2 refractory disease carries a high risk of EATL.
- Osteoporosis and fragility fracture.
- Functional hyposplenism (susceptibility to encapsulated organisms).`,
        },
        {
          id: "congenital_paediatric_gi",
          name: "Congenital & Paediatric GI Disease",
          content: `## Oesophageal and gastric anomalies

### Oesophageal atresia and tracheo-oesophageal fistula
- Failure of normal separation of the foregut into trachea and oesophagus during embryogenesis.
- Five recognised anatomical types; the commonest (around 85%) is **proximal oesophageal atresia with a distal tracheo-oesophageal fistula**.
- Presents in the newborn with frothy oral secretions, choking and cyanosis with feeds, and inability to pass a nasogastric tube.
- Associated with the **VACTERL** association (Vertebral, Anorectal, Cardiac, Tracheo-oesophageal, Renal, Limb).
- Polyhydramnios on antenatal ultrasound.
- Surgical correction.

### Congenital hypertrophic pyloric stenosis
- Hypertrophy of the pyloric smooth muscle producing gastric outlet obstruction.
- Presents at 2 to 8 weeks of age, more commonly in firstborn males.
- Classical features:
  - **Projectile non-bilious vomiting** after feeds.
  - **Hungry, dehydrated infant**.
  - **Palpable olive-shaped mass** in the right upper quadrant.
  - Visible gastric peristalsis.
  - **Hypochloraemic hypokalaemic metabolic alkalosis** from loss of HCl in vomitus.
- Diagnosis: abdominal ultrasound (pylorus length greater than 16 mm, muscle thickness greater than 4 mm).
- Treatment: fluid and electrolyte resuscitation, then **Ramstedt pyloromyotomy**.

## Intestinal anomalies

### Intestinal atresia
- Most often jejunoileal, thought to result from intrauterine vascular insults producing the "apple peel" deformity.
- Duodenal atresia is strongly associated with **trisomy 21 (Down syndrome)** and presents with **bilious vomiting** in the first day of life; the chest X-ray shows the classical "**double bubble**" sign (dilated stomach and duodenum).

### Imperforate anus
- Failure of recanalisation of the anorectal canal.
- Part of the VACTERL association.
- Categorised as high (above the levator ani) or low (below); high lesions need staged repair with colostomy.

### Meckel diverticulum
- A persistent embryonic vitellointestinal duct remnant on the antimesenteric border of the ileum.
- The **"rule of 2s"**: 2% prevalence, within 2 feet (60 cm) of the ileocaecal valve, often around 2 inches (5 cm) long, presents in the first 2 years of life, with 2 types of ectopic tissue (gastric, pancreatic).
- Ectopic gastric mucosa can ulcerate and bleed; presents with **painless rectal bleeding** in a young child.
- Can also present with diverticulitis (mimicking appendicitis), intussusception, or volvulus.
- Diagnosis: **technetium-99m pertechnetate scan ("Meckel scan")** detects ectopic gastric mucosa.
- Surgical resection if symptomatic.

### Malrotation and midgut volvulus
- Failure of normal 270-degree counterclockwise rotation of the midgut in utero.
- Predisposes to **midgut volvulus**, a surgical emergency in the neonate or infant.
- Presents with bilious vomiting; upper GI contrast study shows the duodenojejunal flexure in an abnormal position with a "**corkscrew**" appearance.
- Treatment: **Ladd procedure**.

### Intussusception
- Telescoping of one segment of bowel into another, classically ileocolic in infants aged 6 months to 2 years.
- Pathogenesis often viral (lymphoid hyperplasia of Peyer's patches acting as the lead point); rotavirus and adenovirus are common triggers. In older children and adults, a structural lead point (Meckel diverticulum, polyp, tumour, Henoch-Schönlein purpura with submucosal haematoma) should be sought.
- Presents with:
  - **Colicky abdominal pain** (the infant draws up the legs and cries inconsolably).
  - **"Redcurrant jelly" stools** (a late sign).
  - **Sausage-shaped abdominal mass**.
  - Vomiting.
- Diagnosis: abdominal ultrasound shows the "**target**" or "**doughnut**" sign.
- Treatment: air or contrast enema reduction (successful in 70-90%); surgical reduction if reduction fails or peritonism develops.

## Hirschsprung disease

Hirschsprung disease is **congenital aganglionosis** — the absence of ganglion cells in the **myenteric (Auerbach) and submucosal (Meissner) plexuses** of the distal bowel, due to failure of neural crest cell migration.

### Epidemiology and genetics
- Approximately 1 in 5000 live births.
- 80% male.
- Around 80% involve only the rectosigmoid (short-segment); 20% extend more proximally; rarely the entire colon is involved.
- Associated with **trisomy 21 (Down syndrome)** in around 2%.
- **RET proto-oncogene** mutations (chromosome 10) are the commonest genetic association.

### Clinical features
- **Failure to pass meconium within the first 48 hours** of life.
- Bilious vomiting, abdominal distension, signs of obstruction.
- May present later in childhood with chronic constipation and failure to thrive.
- **Hirschsprung enterocolitis** is a life-threatening complication with fever, explosive diarrhoea, and toxic megacolon.

### Diagnosis
- **Contrast enema**: a transition zone between narrow aganglionic distal bowel and dilated proximal bowel.
- **Anorectal manometry**: absent rectoanal inhibitory reflex.
- **Full-thickness rectal biopsy** (gold standard): absent ganglia, hypertrophied non-myelinated nerve fibres, raised acetylcholinesterase activity.

### Treatment
Surgical resection of the aganglionic segment with pull-through anastomosis of normally innervated bowel (Soave, Swenson, or Duhamel procedures).

## Necrotising enterocolitis (NEC)

- A severe inflammatory disorder of the bowel in premature, low-birth-weight neonates.
- Multifactorial: ischaemia, immature mucosal barrier, abnormal bacterial colonisation, formula rather than breast milk.
- Presents with bloody stools, abdominal distension, bilious aspirates, and shock.
- Abdominal X-ray: **pneumatosis intestinalis** (gas in the bowel wall), portal venous gas, free intraperitoneal air if perforated.
- Treatment: bowel rest, broad-spectrum antibiotics, intensive care; laparotomy if perforated.

## Other paediatric notes

- **Cystic fibrosis**: meconium ileus in 15% of newborns (covered in lung pathology).
- **Biliary atresia**: progressive obliteration of extrahepatic bile ducts; presents at 4 to 8 weeks with conjugated jaundice, pale stools, dark urine. Diagnosed with HIDA scan and operative cholangiogram. Treated with the **Kasai portoenterostomy**; liver transplantation if it fails.`,
        },
        {
          id: "bowel_obstruction_ischaemia",
          name: "Bowel Obstruction & Ischaemia",
          content: `## Mechanical bowel obstruction

### Causes
The mnemonic **"adhesions, hernias, tumours"** captures the majority of cases.

| Mechanism | Common causes |
| --- | --- |
| **Luminal** | Faecal impaction, gallstone ileus, foreign body, bezoar |
| **Mural** | Tumour (commonest in large bowel), inflammatory stricture (Crohn's, radiation, diverticular), intussusception |
| **Extramural** | **Adhesions** (commonest cause overall, post-surgical), **hernia** (the commonest cause of small bowel obstruction without prior surgery), volvulus, congenital bands, extrinsic mass |
| **Functional (pseudo-obstruction)** | Postoperative ileus, hypokalaemia, hypomagnesaemia, opioids, anticholinergics, severe illness (Ogilvie syndrome — acute colonic pseudo-obstruction) |

### Clinical features
- **Colicky abdominal pain** (high-pitched and frequent in small bowel; less so in large bowel).
- **Vomiting**: early and bilious in proximal obstruction; faeculent and late in distal.
- **Abdominal distension**: more prominent in distal obstruction.
- **Absolute constipation** (no flatus passed) in complete obstruction.
- Tinkling bowel sounds initially; absent in late obstruction.

### Investigations
- **Erect chest X-ray and supine abdominal X-ray**: dilated loops (small bowel diameter greater than 3 cm with valvulae conniventes extending across the full width; large bowel greater than 6 cm — 9 cm at the caecum); look for free intraperitoneal air indicating perforation.
- **Contrast-enhanced CT of the abdomen and pelvis** is the diagnostic test of choice and identifies the transition point, cause, and complications (closed loop, ischaemia).
- Bloods: full blood count, urea and electrolytes, lactate (rising lactate suggests bowel ischaemia), arterial blood gas, group and save.

### Management
- **"Drip and suck"**: intravenous fluid resuscitation and nasogastric tube decompression.
- Analgesia and antiemetics.
- **Conservative trial** for adhesional small bowel obstruction; many resolve in 48 to 72 hours.
- **Urgent laparotomy** for closed-loop obstruction, peritonism, ischaemia, or failure of conservative management.
- Tumour-related large bowel obstruction: endoscopic stenting as a bridge to elective surgery, or resection with stoma formation.

## Volvulus

A twisting of a bowel loop about its mesenteric base, producing closed-loop obstruction and risking ischaemia.

| Site | Typical patient | Imaging |
| --- | --- | --- |
| **Sigmoid** (the commonest, around 75%) | Elderly, institutionalised, chronic constipation, neurological disease | "Coffee bean" sign on abdominal X-ray pointing to the right upper quadrant |
| **Caecal** | Younger patients with congenital mobility of the caecum | Dilated caecum displaced to the left upper quadrant |
| **Midgut** | Neonate with malrotation | Bilious vomiting, "corkscrew" on contrast study |

Treatment of sigmoid volvulus is **endoscopic decompression** with a flexible sigmoidoscope and rectal tube placement, with sigmoidectomy for recurrence or ischaemia. Caecal volvulus typically requires right hemicolectomy.

## Hernias

A protrusion of viscus or tissue through a defect in its containing wall.

| Type | Features |
| --- | --- |
| **Inguinal** | **Indirect** (commonest overall): through the deep inguinal ring, lateral to the inferior epigastric vessels, often into the scrotum; congenital patent processus vaginalis. **Direct**: through Hesselbach's triangle (medial to the inferior epigastric vessels); acquired in older men |
| **Femoral** | Below the inguinal ligament, medial to the femoral vein; more common in women; high risk of strangulation due to the narrow rigid neck |
| **Umbilical / paraumbilical** | Congenital (umbilical) or acquired in obese adults |
| **Incisional** | Through a previous surgical scar; risk factors include wound infection, obesity, and steroid use |
| **Hiatus** | Sliding (axial) — gastro-oesophageal junction slides into thorax; rolling (paraoesophageal) — fundus rolls up beside the oesophagus; risk of gastric volvulus |
| **Spigelian** | Through the linea semilunaris; rare; difficult to diagnose clinically |
| **Obturator** | Through the obturator foramen; presents in elderly thin women with the **Howship-Romberg sign** (pain on internal rotation of the hip from compression of the obturator nerve) |

### Complications
- **Incarceration**: irreducible hernia.
- **Obstruction**: bowel inside the hernia is obstructed.
- **Strangulation**: vascular compromise of bowel within the hernia, producing ischaemia and infarction. A surgical emergency.

## Intestinal ischaemia

### Acute mesenteric ischaemia
Sudden interruption of arterial supply to the bowel, typically the small bowel from the **superior mesenteric artery (SMA)**.

- Causes:
  - **Arterial embolism** (around 50%): the SMA is particularly vulnerable due to its acute take-off angle from the aorta. Sources: left atrial appendage in atrial fibrillation, left ventricular thrombus after myocardial infarction, atherosclerotic plaque.
  - **Arterial thrombosis** (around 25%): typically on a pre-existing atherosclerotic stenosis.
  - **Non-occlusive mesenteric ischaemia (NOMI)** (around 20%): low cardiac output state, splanchnic vasoconstriction, vasopressor use, cocaine.
  - **Venous thrombosis** (around 5%): hypercoagulable state, portal hypertension.
- Presents with **severe abdominal pain out of proportion to physical signs**, vomiting, and (later) bloody diarrhoea.
- **Markedly raised lactate** with metabolic acidosis. Lactate dehydrogenase, white cell count, and CK rise.
- **Contrast-enhanced CT with arterial and venous phases (CT mesenteric angiography)** is the diagnostic test.
- Treatment: resuscitation, broad-spectrum antibiotics, anticoagulation, and either endovascular intervention (thrombectomy, thrombolysis, stenting) or laparotomy with resection of non-viable bowel. Mortality is very high (60-80%) once infarction occurs.

### Chronic mesenteric ischaemia ("intestinal angina")
- Atherosclerotic narrowing of at least two of the three mesenteric arteries (coeliac, SMA, IMA).
- Presents with postprandial abdominal pain, food avoidance, and weight loss.
- Diagnosed with CT mesenteric angiography.
- Treated with endovascular stenting or surgical bypass.

### Ischaemic colitis
Affects the colon at "watershed" areas between two arterial supplies:
- **Splenic flexure** (junction of superior and inferior mesenteric arteries).
- **Rectosigmoid junction** (junction of inferior mesenteric and superior rectal arteries).

Triggered by hypoperfusion (shock, dehydration), atherosclerosis, vasculitis, or thrombophilia. Presents with **left iliac fossa pain and bloody diarrhoea**. CT shows segmental colonic wall thickening; endoscopy may show bluish, oedematous mucosa with linear ulceration. Most cases resolve with bowel rest and intravenous fluids; surgical resection is required for full-thickness necrosis or stricture.`,
        },
        {
          id: "ibd_pathology",
          name: "Inflammatory Bowel Disease",
          content: `## Overview

Inflammatory bowel disease (IBD) is a group of chronic, relapsing, immune-mediated inflammatory conditions of the gastrointestinal tract. The two principal entities are **Crohn's disease (CD)** and **ulcerative colitis (UC)**. A small proportion of cases are termed "IBD-unclassified" when features overlap.

## Aetiology

Multifactorial: an aberrant mucosal immune response to commensal gut microbiota in a genetically susceptible host, modulated by environmental factors.

- **Genetic**: monozygotic twin concordance is 50% in Crohn's, 15% in UC. **NOD2/CARD15** mutations are strongly associated with ileal Crohn's disease. Over 200 IBD-associated loci have been identified.
- **Microbial**: dysbiosis with reduced microbial diversity.
- **Environmental**: smoking (worsens Crohn's, paradoxically protective in UC); appendicectomy (protective in UC); urbanisation; the **"hygiene hypothesis"** (less childhood enteric infection leading to poorly regulated mucosal immunity).

## Comparison of Crohn's disease and ulcerative colitis

| Feature | Crohn's disease | Ulcerative colitis |
| --- | --- | --- |
| **Distribution** | Anywhere from mouth to anus; terminal ileum and caecum most common; **skip lesions** | Continuous from rectum proximally; small bowel spared except for "backwash ileitis" in pancolitis |
| **Layer involved** | **Transmural** | **Mucosa and submucosa only** |
| **Macroscopic** | Cobblestone mucosa, deep "rose-thorn" or serpiginous ulcers, fistulae, fissures, strictures | Continuous diffuse erythema with shallow ulcers; **pseudopolyps** (islands of regenerating mucosa) |
| **Microscopic** | **Non-caseating granulomas** (in 50%); transmural lymphoid aggregates; lymphocytic infiltrate; goblet cells preserved | No granulomas; crypt distortion and abscesses; depleted goblet cells; lymphocytic and neutrophilic infiltrate confined to mucosa |
| **Smoking** | Worsens disease | Protective |
| **Surgery** | Symptom relief but not curative; disease recurs at anastomosis | Colectomy is curative |
| **Cancer risk** | Increased small and large bowel cancer; less than UC | Increased adenocarcinoma (20-30 times background; risk rises with duration and pancolitic disease) |
| **Antibodies** | **Anti-Saccharomyces cerevisiae antibody (ASCA)** positive | **Perinuclear anti-neutrophil cytoplasmic antibody (pANCA)** positive |

## Clinical features

### Crohn's disease
- Intermittent diarrhoea, abdominal pain, weight loss, low-grade fever.
- Right iliac fossa pain (terminal ileal disease can mimic appendicitis).
- Mouth ulcers.
- Perianal disease (fissures, fistulae, abscesses, skin tags).
- Malabsorption (steatorrhoea, B12 deficiency from terminal ileal disease, fat-soluble vitamin deficiency).

### Ulcerative colitis
- **Bloody diarrhoea with mucus**.
- **Tenesmus** (a sensation of incomplete rectal emptying).
- Lower abdominal cramps relieved by defaecation.
- Severity by **Truelove and Witts criteria**: severe disease is more than 6 bloody stools per day with at least one of fever, tachycardia, anaemia, or raised ESR.

## Extra-intestinal manifestations

| System | Manifestation | Comments |
| --- | --- | --- |
| **Eyes** | Anterior uveitis, episcleritis, scleritis | Uveitis tracks disease activity less reliably than the others |
| **Skin** | Erythema nodosum, pyoderma gangrenosum, oral aphthous ulcers, perianal disease | EN tracks activity; pyoderma does not |
| **Joints** | Peripheral arthropathy (large joint, asymmetrical, migratory — type 1), polyarthropathy (small joint — type 2), sacroiliitis, ankylosing spondylitis (HLA-B27 positive) | Common across both diseases |
| **Liver** | **Primary sclerosing cholangitis (PSC)** (more common in UC) | Independent of disease activity; raises cholangiocarcinoma and colorectal cancer risk |
| **Haematological** | Iron deficiency anaemia, anaemia of chronic disease, venous thromboembolism | Patients with active IBD have a 3-fold increased VTE risk |
| **Renal** | Oxalate stones (Crohn's with ileal disease); amyloidosis (chronic inflammation) | |
| **Bone** | Osteoporosis from steroids and malabsorption | |

## Complications

### Crohn's disease
- **Strictures** with obstruction.
- **Fistulae**: enterocutaneous, enterovesical (pneumaturia, recurrent UTI), enterovaginal, enteroenteric.
- **Perianal disease** with abscess and fistula.
- **Perforation**.
- Malabsorption and nutritional deficiencies.

### Ulcerative colitis
- **Severe haemorrhage**.
- **Toxic megacolon**: colonic dilatation greater than 6 cm with systemic toxicity; risk of perforation. Plain abdominal X-ray is the imaging of choice (CT in equivocal cases). Avoid colonoscopy and antimotility agents.
- **Perforation**.
- **Colorectal adenocarcinoma**: 20 to 30-fold increased risk in pancolitic UC of more than 10 years' duration. Surveillance colonoscopy is required.
- Around 30% of UC patients eventually require colectomy.

## Investigations

- Blood tests: full blood count (anaemia, raised platelets), C-reactive protein, ESR, albumin, ferritin, vitamin B12, folate, vitamin D, urea and electrolytes, liver function.
- **Faecal calprotectin**: a neutrophil-derived protein, sensitive marker of intestinal inflammation; useful to distinguish IBD from irritable bowel syndrome.
- Stool culture and **C. difficile toxin** must be sent at every flare.
- **Colonoscopy with biopsy** is the diagnostic test of choice in suspected colitis.
- **Magnetic resonance enterography** is the imaging modality of choice for small bowel Crohn's disease, characterising strictures, fistulae, and abscesses.
- **MRI pelvis** for perianal Crohn's.
- CT abdomen for emergency assessment of complications.

## Management

### Crohn's disease

**Inducing remission**
- **Glucocorticoids**: oral prednisolone (mild-to-moderate flare), intravenous hydrocortisone (severe).
- **Budesonide** (an enteric-coated steroid with low systemic absorption) for ileocaecal disease.
- **Exclusive enteral nutrition** as first-line induction in children.
- **Biologics** for severe or refractory disease.

**Maintaining remission**
- **Azathioprine** or **mercaptopurine** (check TPMT activity first to identify those at risk of severe myelosuppression).
- **Methotrexate**.
- **Biologics**:
  - Anti-TNF: **infliximab**, **adalimumab**.
  - Anti-integrin: **vedolizumab** (gut-selective).
  - Anti-IL12/23: **ustekinumab**.
  - Selective JAK inhibitor: **upadacitinib**.
- 5-aminosalicylic acid (5-ASA) compounds are of limited use in Crohn's.

**Surgery** is reserved for stricturing disease, fistulae, abscess drainage, and failure of medical therapy. Resection is segmental, sparing as much bowel as possible to avoid short bowel syndrome.

### Ulcerative colitis

**Inducing remission**
- **Topical 5-ASA** (mesalazine suppositories or enemas) for proctitis or left-sided disease.
- **Oral 5-ASA** for more extensive disease.
- **Topical and oral corticosteroids** (prednisolone) for moderate flares.
- **Intravenous hydrocortisone** for acute severe colitis, with hospital admission and twice-daily abdominal X-ray surveillance for toxic megacolon. Failure to respond by day 3 to 5 mandates rescue therapy with **ciclosporin** or **infliximab**, or urgent colectomy.

**Maintaining remission**
- **Oral and topical 5-ASA** are first-line.
- **Thiopurines** (azathioprine, mercaptopurine) for steroid-dependent disease.
- **Biologics** (infliximab, adalimumab, golimumab, vedolizumab, ustekinumab) for refractory disease.
- **JAK inhibitors** (tofacitinib, upadacitinib).

**Surgery** with **panproctocolectomy and ileal pouch-anal anastomosis (IPAA)** is curative for refractory disease, dysplasia, or complications.

## Cancer surveillance in UC and Crohn's colitis
- Initial screening colonoscopy 8-10 years after symptom onset.
- Subsequent surveillance frequency stratified by risk (PSC, family history, severity, dysplasia, stricture).
- Chromoendoscopy or high-definition white-light endoscopy with targeted biopsies.`,
        },
        {
          id: "infective_colitis",
          name: "Infective Colitis & Clostridioides difficile",
          content: `## Approach to infective diarrhoea

Acute diarrhoea (less than 14 days) is usually infective. The pattern guides differential diagnosis:

| Pattern | Mechanism | Examples |
| --- | --- | --- |
| **Watery (non-inflammatory)** | Enterotoxin or virus, small bowel | Vibrio cholerae, enterotoxigenic E. coli, rotavirus, norovirus, Giardia |
| **Inflammatory (bloody, with mucus)** | Mucosal invasion, large bowel | Campylobacter, Salmonella, Shigella, enteroinvasive and enterohaemorrhagic E. coli (EHEC), Entamoeba histolytica, Yersinia, Clostridioides difficile |
| **Enteric fever (systemic)** | Lymphoreticular invasion | Salmonella typhi and paratyphi |

(See the Microbiology section for organism-specific detail. This topic focuses on the colitis aspects.)

## Common bacterial colitides

### Campylobacter jejuni
- The commonest bacterial cause of food poisoning in the UK.
- Source: undercooked poultry, unpasteurised milk, contaminated water.
- Bloody diarrhoea, abdominal pain (can mimic appendicitis), fever.
- Self-limiting in most cases; clarithromycin for severe disease.
- Post-infectious complications: **Guillain-Barré syndrome** (anti-GM1 antibodies), reactive arthritis, Reiter's syndrome.

### Salmonella (non-typhoidal)
- Poultry, eggs, reptiles.
- Watery or bloody diarrhoea, fever, abdominal cramps.
- Usually self-limiting; antibiotics may prolong carriage.

### Shigella
- Highly contagious (low infective dose); faecal-oral spread.
- Bloody diarrhoea with mucus (bacillary dysentery), fever, tenesmus.
- Shiga toxin-producing strains may cause haemolytic uraemic syndrome.

### Enterohaemorrhagic E. coli (EHEC, especially O157:H7)
- Source: undercooked ground beef, raw vegetables, petting farms.
- Bloody diarrhoea without significant fever.
- **Haemolytic uraemic syndrome (HUS)** in 5 to 10% of children: microangiopathic haemolytic anaemia, thrombocytopenia, acute kidney injury.
- **Antibiotics are contraindicated** — they increase Shiga toxin release and the risk of HUS.

### Yersinia enterocolitica
- Pigs (uncooked pork), refrigerated foods.
- Mesenteric adenitis and terminal ileitis (mimics appendicitis or Crohn's disease).
- Post-infectious reactive arthritis.

## Viral gastroenteritis

- **Norovirus**: epidemics in closed settings (cruise ships, care homes, hospitals); short incubation (12-48 hours) of vomiting and watery diarrhoea, self-limiting in 1-3 days; highly contagious; alcohol gel ineffective (use soap and water).
- **Rotavirus**: leading cause of severe gastroenteritis in children worldwide; live oral vaccine (Rotarix) included in UK childhood schedule since 2013.
- **Adenovirus, sapovirus, astrovirus**: less common.

## Parasitic colitis

- **Entamoeba histolytica**: causes **amoebic colitis** with flask-shaped ulcers on biopsy and bloody diarrhoea; can produce **amoebic liver abscess** (right lobe, "anchovy paste" pus). Treatment: metronidazole followed by paromomycin or diloxanide furoate to eradicate cysts.
- **Giardia lamblia**: small bowel infection causing chronic watery diarrhoea, bloating, steatorrhoea, malabsorption. Diagnosed with stool antigen or microscopy showing trophozoites or cysts. Treatment: metronidazole or tinidazole.

## Clostridioides difficile (formerly Clostridium difficile)

A Gram-positive spore-forming anaerobe that produces **toxin A (enterotoxin)** and **toxin B (cytotoxin)**, causing **pseudomembranous colitis**.

### Pathogenesis
Disruption of the normal colonic microbiota by antibiotics allows C. difficile spores (acquired in healthcare environments) to germinate and proliferate. The toxins disrupt the cytoskeleton of colonocytes, producing the characteristic **pseudomembranes** — yellow plaques of fibrin, mucus, inflammatory cells, and necrotic epithelium on the colonic mucosa.

### Risk factors
- **High-risk antibiotics** (the "4 Cs"): **C**iprofloxacin (and other fluoroquinolones), **C**ephalosporins, **C**lindamycin, **C**o-amoxiclav. Carbapenems are also high-risk.
- Recent hospitalisation or long-term care.
- Age over 65 years.
- Proton pump inhibitor use (mild association).
- Immunosuppression and inflammatory bowel disease.

### Clinical features
- Watery diarrhoea with offensive smell, often with mucus or blood.
- Abdominal cramps, fever.
- Severe disease: marked leucocytosis (white cell count greater than 15 × 10⁹/L), raised creatinine, hypotension, ileus, toxic megacolon, perforation.

### Diagnosis
A **two-step stool test**:
1. **Glutamate dehydrogenase (GDH) antigen** or PCR for the toxin B gene (high sensitivity, identifies the organism).
2. **Toxin enzyme immunoassay (EIA)** (lower sensitivity, identifies active toxin production).

A patient who is GDH positive but toxin negative is a carrier, not an active case.

### Severity classification (UK PHE)

| Category | Features |
| --- | --- |
| **Mild** | Fewer than 3 stools/day, WCC normal |
| **Moderate** | 3-5 stools/day, raised WCC (less than 15) |
| **Severe** | Any of: WCC greater than 15, acute kidney injury (creatinine greater than 50% above baseline), temperature greater than 38.5°C, or evidence of severe colitis |
| **Life-threatening** | Hypotension, ileus, toxic megacolon, perforation, CT signs of severe colitis |

### Management
- **Isolation** in a side-room with enteric precautions (gloves, gowns; soap and water — alcohol gel does not kill spores).
- **Stop the precipitating antibiotic** where possible.

**First episode** (NICE 2021):
- **Oral vancomycin** 125 mg four times daily for 10 days (first-line). Vancomycin is poorly absorbed orally, so it remains in the gut lumen.
- **Oral fidaxomicin** 200 mg twice daily for 10 days is an alternative (lower recurrence rate, more expensive).
- Metronidazole is no longer first-line.

**Recurrence**:
- Fidaxomicin (or vancomycin if not used first time).
- **Bezlotoxumab**, a monoclonal antibody against toxin B, for recurrent disease.
- **Faecal microbiota transplantation (FMT)** for multiply recurrent disease (efficacy around 90%).

**Severe or life-threatening disease**:
- Oral vancomycin (sometimes increased to 500 mg four times daily) plus intravenous metronidazole.
- Surgical review for colectomy if perforation, toxic megacolon, or failure to respond.

## Tuberculous colitis

- Predominantly ileocaecal; mimics Crohn's disease.
- Imaging: thickened ileocaecal valve, "**Stierlin sign**" (loss of barium in inflamed segment).
- Biopsy shows **caseating granulomas** with acid-fast bacilli (distinguishes from Crohn's, where granulomas are non-caseating).
- Quadruple therapy (rifampicin, isoniazid, pyrazinamide, ethambutol).`,
        },
        {
          id: "diverticular_disease",
          name: "Diverticular Disease",
          content: `## Definitions

- **Diverticulum**: an outpouching of bowel. A **true diverticulum** contains all layers of the bowel wall (rare; e.g. Meckel diverticulum). A **false (pseudo-) diverticulum** contains only mucosa and submucosa herniating through the muscularis propria — this is what occurs in colonic diverticular disease.
- **Diverticulosis**: the asymptomatic presence of diverticula.
- **Diverticular disease**: diverticulosis with symptoms (e.g. recurrent abdominal pain, altered bowel habit).
- **Diverticulitis**: inflammation of one or more diverticula, usually with complications.

## Epidemiology and pathogenesis

- Highly prevalent in Western populations (over 50% in those aged over 60). Rare in rural African and Asian populations.
- The principal mechanism is **raised intraluminal pressure** in a low-fibre diet producing constipation and segmental contractions, which forces mucosal herniation through points of weakness where the vasa recta penetrate the muscularis propria.
- **90% occur in the sigmoid colon** (highest luminal pressures); the rectum is spared (longitudinal muscle is continuous there).

## Risk factors

- Low-fibre, high-fat Western diet.
- Obesity and physical inactivity.
- Smoking.
- Non-steroidal anti-inflammatory drug use (raises perforation and bleeding risk).
- Increasing age.
- Connective tissue disease (Marfan, Ehlers-Danlos).

## Clinical features

### Diverticulosis
Often asymptomatic and found incidentally at colonoscopy. May cause:
- Painless rectal bleeding (the commonest cause of significant lower GI bleeding in older patients — bright red, often large volume, usually self-limiting).
- Altered bowel habit.
- Left iliac fossa pain.

### Diverticulitis
- **Left iliac fossa pain** (often described as "left-sided appendicitis").
- Fever, anorexia, nausea.
- Altered bowel habit.
- Localised tenderness, guarding, sometimes a palpable mass.
- Raised inflammatory markers (white cell count, C-reactive protein).

## Investigations

- **Contrast-enhanced CT abdomen and pelvis** is the imaging of choice in acute presentation. Findings include sigmoid wall thickening, pericolic fat stranding, diverticula, abscess, free gas (perforation), and fistulae.
- Colonoscopy is **contraindicated in acute diverticulitis** because of the risk of perforation; it should be performed 6 to 8 weeks after resolution to exclude underlying malignancy.
- In diverticular bleeding, urgent CT angiography can identify the bleeding source; mesenteric angiography allows embolisation; colonoscopy may permit endoscopic haemostasis.

## Hinchey classification (severity of complicated diverticulitis)

| Stage | Features |
| --- | --- |
| **I** | Pericolic abscess |
| **II** | Pelvic, retroperitoneal, or distant abscess |
| **III** | Generalised purulent peritonitis |
| **IV** | Generalised faecal peritonitis |

## Management

### Uncomplicated diverticulitis
- **Outpatient management** with oral antibiotics (e.g. co-amoxiclav, or ciprofloxacin and metronidazole) and analgesia for selected immunocompetent patients with mild symptoms is increasingly favoured.
- More severe presentations require admission with intravenous fluids, bowel rest, intravenous antibiotics, and analgesia.

### Complicated diverticulitis
- **Hinchey I-II (abscess)**: percutaneous radiological drainage if larger than 4-5 cm, plus antibiotics; smaller abscesses may resolve with antibiotics alone.
- **Hinchey III-IV (peritonitis)**: emergency laparotomy with **Hartmann procedure** (sigmoid resection with end colostomy and closure of the rectal stump). Primary resection with anastomosis may be appropriate in selected stable patients.
- Recurrent or stricturing disease may require elective sigmoidectomy.

### Diverticular bleeding
- Most cases settle spontaneously with resuscitation.
- Identify the bleeding source with CT angiography or colonoscopy.
- **Endoscopic haemostasis** (adrenaline injection, endoclips, banding).
- **Mesenteric angiography with embolisation** for unstable patients in whom endoscopy is unsuccessful.
- Surgical resection of the affected segment as a last resort.

## Long-term management

- **High-fibre diet** (25 to 35 g per day) with adequate fluid intake.
- **Weight loss**, smoking cessation.
- Avoidance of NSAIDs where possible.
- **Mesalazine and rifaximin** have been studied for symptomatic diverticular disease but with mixed evidence; routine use is not endorsed by NICE.

## Complications summary

- Diverticulitis (acute and chronic).
- **Pericolic abscess**.
- **Perforation** with purulent or faecal peritonitis.
- **Fistula formation**: colovesical (most common, presents with pneumaturia, faecaluria, and recurrent urinary tract infections), colovaginal, coloenteric, colocutaneous.
- **Stricture formation** with large bowel obstruction.
- **Diverticular bleeding**.`,
        },
        {
          id: "gi_neuroendocrine_carcinoid",
          name: "GI Neuroendocrine Tumours & Carcinoid Syndrome",
          content: `## Overview

Gastroenteropancreatic neuroendocrine tumours (GEP-NETs) are a heterogeneous group of neoplasms arising from the diffuse neuroendocrine cell system. They can secrete bioactive amines and peptides, producing distinctive clinical syndromes. The term **"carcinoid"** is the traditional name; current WHO terminology favours **NET (grades 1-3)** and **neuroendocrine carcinoma (NEC, poorly differentiated)**.

## Classification

### By site
- **Foregut**: bronchus, stomach, duodenum, pancreas.
- **Midgut**: jejunum, ileum, appendix, ascending colon. The **commonest** GI primary site (around 50% are ileal). Most likely to produce classical carcinoid syndrome.
- **Hindgut**: transverse, descending, and sigmoid colon, rectum. Rarely functional.

### By WHO grade (based on mitotic count and Ki-67 proliferation index)
- **NET G1** (well-differentiated, low grade): Ki-67 less than 3%.
- **NET G2** (intermediate grade): Ki-67 3-20%.
- **NET G3** (well-differentiated, high grade): Ki-67 greater than 20%.
- **NEC** (poorly differentiated, high grade): includes small-cell and large-cell types.

## Functional syndromes

| Cell of origin | Tumour | Hormone | Syndrome |
| --- | --- | --- | --- |
| Enterochromaffin | Midgut carcinoid | Serotonin (5-HT), tachykinins, bradykinin, histamine | Carcinoid syndrome |
| Pancreatic islet alpha | Glucagonoma | Glucagon | Necrolytic migratory erythema, diabetes mellitus, weight loss, depression |
| Pancreatic islet beta | Insulinoma | Insulin | Whipple's triad — hypoglycaemia, raised insulin and C-peptide |
| Pancreatic islet delta | Somatostatinoma | Somatostatin | Diabetes, gallstones, steatorrhoea (the "inhibitory" syndrome) |
| Pancreatic non-beta islet | **Gastrinoma (Zollinger-Ellison)** | Gastrin | Recurrent and atypical-site peptic ulcers, diarrhoea |
| Pancreatic islet | VIPoma | Vasoactive intestinal peptide | **WDHA syndrome** — watery diarrhoea, hypokalaemia, achlorhydria (also known as Verner-Morrison syndrome) |

## Carcinoid syndrome

### Pathophysiology
Serotonin and other vasoactive mediators are secreted into the portal circulation but are largely metabolised by hepatic monoamine oxidase. **Carcinoid syndrome typically only occurs with hepatic metastases** (bypassing first-pass metabolism) or with primaries draining directly into the systemic circulation (bronchial carcinoid, ovarian, retroperitoneal).

### Clinical features
- **Cutaneous flushing**: paroxysmal, often facial and upper trunk, may be triggered by alcohol, exercise, or stress.
- **Secretory diarrhoea**.
- **Bronchoconstriction (wheeze)**.
- **Right-sided heart valve fibrosis** (tricuspid regurgitation, pulmonary stenosis): serotonin-driven endocardial fibrosis. Left-sided lesions are rare because of pulmonary metabolism of serotonin (unless there is a right-to-left shunt or a bronchial carcinoid).
- **Pellagra** (dermatitis, diarrhoea, dementia): the tumour diverts dietary tryptophan into serotonin synthesis, producing nicotinamide deficiency.
- **Telangiectasia** in chronic disease.

### Carcinoid crisis
A life-threatening surge of vasoactive mediators triggered by anaesthesia, tumour manipulation, or chemotherapy.
- **Profound vasodilation and hypotension**.
- Tachycardia, severe bronchoconstriction, flushing, hyperglycaemia.
- Prevention and treatment: **intravenous octreotide infusion** (a somatostatin analogue) starting before surgical or interventional procedures and continuing for 24 to 48 hours afterwards.

## Investigations

- **24-hour urinary 5-hydroxyindoleacetic acid (5-HIAA)**: the main metabolite of serotonin. Sensitive and specific for midgut carcinoid; foods rich in serotonin (banana, avocado, pineapple, walnuts, certain chocolates) and certain drugs (paracetamol, caffeine, ephedrine) must be avoided beforehand.
- **Chromogranin A** (CgA): a non-specific marker raised in most NETs; useful for monitoring response.
- **Cross-sectional imaging**: CT or MRI of the abdomen and pelvis to identify the primary tumour and metastases.
- **Somatostatin receptor scintigraphy**: ⁶⁸Ga-DOTATATE PET-CT is the modern imaging of choice for somatostatin receptor expression and is considerably more sensitive than the older Indium-111 octreotide scan ("OctreoScan").
- **Echocardiogram**: to assess for carcinoid heart disease (tricuspid regurgitation, pulmonary stenosis) in those with symptoms or raised 5-HIAA.
- **Histology**: characteristic appearance of nests of small monomorphic cells with "salt-and-pepper" chromatin; positive staining for **chromogranin A** and **synaptophysin**.

## Management

### Symptomatic
- **Somatostatin analogues** (octreotide, lanreotide) reduce hormone secretion, control flushing and diarrhoea, and have antiproliferative effects.
- **Telotristat ethyl** (a tryptophan hydroxylase inhibitor) is licensed for carcinoid diarrhoea refractory to somatostatin analogues.
- Antihistamines, loperamide for symptom control.
- Nicotinamide replacement.

### Locoregional disease
- **Surgical resection** of the primary tumour is curative for localised disease and is the only chance of cure.
- **Appendiceal carcinoid** less than 1 cm at the tip of the appendix is cured by appendicectomy; larger tumours or those at the base require right hemicolectomy.

### Metastatic disease
- **Somatostatin analogues** as antiproliferative therapy (PROMID and CLARINET trials).
- **Hepatic disease**: surgical resection or debulking, **transarterial embolisation (TAE)** or chemoembolisation (TACE), radiofrequency ablation.
- **Peptide receptor radionuclide therapy (PRRT)**: ¹⁷⁷Lu-DOTATATE for somatostatin receptor-positive disease (NETTER-1 trial).
- **Targeted therapy**: everolimus (mTOR inhibitor), sunitinib (for pancreatic NETs).
- Chemotherapy (streptozocin, capecitabine, temozolomide; platinum-etoposide for high-grade NEC).

## Multiple endocrine neoplasia (MEN) syndromes

NETs are central to two of the MEN syndromes (covered fully in endocrinology):
- **MEN1** (autosomal dominant, MEN1 gene, "**3 Ps**"): **P**arathyroid hyperplasia, **P**ancreatic islet tumours (gastrinoma, insulinoma), **P**ituitary adenoma.
- **MEN2A** and **MEN2B** (autosomal dominant, RET gene): medullary thyroid carcinoma, phaeochromocytoma. MEN2A also includes parathyroid hyperplasia; MEN2B includes mucosal neuromas and marfanoid habitus.`,
        },
        {
          id: "colorectal_polyps",
          name: "Colorectal Polyps & Familial Polyposis Syndromes",
          content: `## Definition

A polyp is a projection of mucosa into the bowel lumen. Polyps are classified by histology into **neoplastic** (with malignant potential) and **non-neoplastic**.

## Neoplastic polyps

### Adenomas

Adenomas are **benign dysplastic** epithelial neoplasms and the principal precursor lesion to colorectal adenocarcinoma. They are found in around 50% of patients over 50 years in the Western world.

#### Subtypes by architecture
- **Tubular adenoma**: the commonest (around 75%); polypoid, pedunculated.
- **Tubulovillous adenoma**: mixed architecture.
- **Villous adenoma**: frond-like, often sessile, the highest risk of malignant transformation; large villous adenomas can leak protein and potassium producing **hypoproteinaemic hypokalaemic secretory diarrhoea** (McKittrick-Wheelock syndrome).

#### Risk of malignant transformation
Determined by:
- **Size** (most important): less than 1 cm — around 1%; 1-2 cm — around 10%; greater than 2 cm — around 50%.
- **Architecture**: villous > tubulovillous > tubular.
- **Degree of dysplasia**: low-grade vs high-grade.

#### Adenoma-carcinoma sequence
The "classical chromosomal instability" pathway:
1. Normal colon → "at risk" mucosa following a first-hit mutation in the **APC** tumour suppressor gene (patients with familial adenomatous polyposis carry this germline).
2. "At risk" mucosa → **adenoma** following a second-hit (loss of the remaining APC allele).
3. Adenoma → **carcinoma** with activation of **KRAS**, loss-of-function mutations in **TP53 (p53)**, and SMAD4/DCC loss.

#### Serrated pathway (microsatellite instability)
An alternative pathway from **sessile serrated lesions** through **BRAF V600E** mutation and **microsatellite instability (MSI)** from defective mismatch repair. Accounts for around 15% of sporadic colorectal cancers and characterises Lynch syndrome.

### Sessile serrated lesions (SSLs)
- Right-sided, flat, easily missed at colonoscopy.
- Histology: distorted serrated crypt bases, often with hyperplastic appearance, with **BRAF mutations**.
- Their identification has changed surveillance practice; high-risk lesions require shorter surveillance intervals.

## Non-neoplastic polyps

### Hyperplastic polyps
- Small (less than 5 mm), usually in the rectosigmoid in patients aged 50-60 years.
- Histology: serrated crypts but no dysplasia.
- Generally no malignant potential — but careful distinction from sessile serrated lesions is essential.

### Hamartomatous polyps
- Disorganised proliferations of normal-looking tissue elements.
- Sporadic **juvenile polyps** (focal malformations of mucosa and lamina propria) are common in children, mostly in the rectum, presenting with painless rectal bleeding.
- Multiple hamartomatous polyps occur in inherited syndromes (see below).

### Inflammatory pseudopolyps
- Islands of regenerating mucosa surrounded by ulceration, classically in inflammatory bowel disease (especially ulcerative colitis).
- No malignant potential themselves, but the surrounding chronic inflammation carries cancer risk.

## Familial polyposis and hereditary cancer syndromes

### Familial adenomatous polyposis (FAP)

- **Autosomal dominant** mutation in the **APC** tumour suppressor gene on chromosome 5q21. A small minority (the **MUTYH-associated polyposis (MAP)** variant) is autosomal recessive.
- **Hundreds to thousands of adenomatous polyps** carpet the colon from adolescence.
- **All untreated patients develop colorectal cancer by age 35-40**.
- Management: **prophylactic total colectomy with ileorectal anastomosis or proctocolectomy with ileal pouch-anal anastomosis** in early adulthood.
- Increased risk of extracolonic neoplasia: **duodenal and ampullary adenomas and adenocarcinoma** (the leading cause of death after colectomy), gastric fundic gland polyps, **desmoid tumours**, thyroid, brain, and adrenal tumours.
- Surveillance: annual flexible sigmoidoscopy from age 12-14 until polyps appear; upper GI endoscopic surveillance for duodenal adenomas; thyroid ultrasound.

### Gardner syndrome
A phenotypic variant of FAP with prominent extra-intestinal features: **osteomas** (especially of the skull and mandible), epidermoid cysts, **dental abnormalities** (supernumerary teeth, dental caries), fibromas, and desmoid tumours. Same underlying APC mutation.

### Turcot syndrome
Polyposis combined with primary brain tumours. Two subtypes: APC mutations with medulloblastoma; mismatch repair gene mutations with glioblastoma.

### Lynch syndrome (hereditary non-polyposis colorectal cancer, HNPCC)

- **Autosomal dominant** mutation in DNA **mismatch repair (MMR)** genes: **MLH1**, **MSH2**, **MSH6**, **PMS2**, or **EPCAM**. The defective DNA repair produces **microsatellite instability**.
- The commonest hereditary colorectal cancer syndrome (around 3% of all colorectal cancers).
- Cancers tend to occur:
  - At younger age (mean 45 years).
  - In the **right (proximal) colon**.
  - With few polyps despite rapid adenoma-carcinoma progression.
  - With characteristic histology: poorly differentiated, mucinous, with tumour-infiltrating lymphocytes.
- **Extracolonic cancers**: endometrial (the commonest in women — sometimes the presenting cancer), ovarian, gastric, small bowel, urothelial (ureter, renal pelvis), brain (Turcot), hepatobiliary, and sebaceous skin tumours (Muir-Torre variant).
- Diagnostic criteria: **Amsterdam II** (clinical) and **Bethesda guidelines** (which trigger tumour MSI or immunohistochemistry testing for MMR proteins).
- Surveillance: colonoscopy every 1 to 2 years from age 25; gynaecological surveillance and prophylactic hysterectomy/oophorectomy discussion; upper GI endoscopy; **aspirin** reduces colorectal cancer incidence in Lynch syndrome (the CAPP2 trial).

### Peutz-Jeghers syndrome

- **Autosomal dominant** mutation in **STK11 / LKB1** on chromosome 19.
- **Hamartomatous polyps** throughout the gastrointestinal tract (especially the small bowel).
- **Mucocutaneous melanin hyperpigmentation**: freckle-like macules around the mouth, on the buccal mucosa, palms, and soles.
- **Increased risk of intussusception** (the polyps act as lead points).
- Markedly increased risk of multiple cancers: gastrointestinal, breast, pancreatic, ovarian (sex cord tumours with annular tubules), testicular (Sertoli cell), and cervical.
- Surveillance: regular upper and lower endoscopy (with capsule endoscopy of the small bowel), pancreatic imaging, breast and pelvic surveillance from young adulthood.

### Juvenile polyposis syndrome

- **Autosomal dominant** mutation in **SMAD4** or **BMPR1A**.
- 5 or more juvenile polyps in the colorectum or any in the upper GI tract, in a young patient.
- Risk of GI bleeding requiring transfusion or colectomy in childhood.
- Increased risk of colorectal and upper GI cancer.

### Cowden syndrome

- **PTEN** mutation; **autosomal dominant**.
- Hamartomatous polyps throughout the GI tract.
- Mucocutaneous features: facial trichilemmomas, oral papillomas, acral keratoses.
- Increased risk of breast, thyroid (follicular), endometrial, and renal cancer.

## Colorectal cancer screening (UK)

- **Faecal immunochemical test (FIT)** every 2 years to all adults aged 54 to 74. Anyone aged 60-74 was previously included; the programme is gradually expanding to include those from age 50.
- **One-off flexible sigmoidoscopy** at age 55 (the "bowel scope" programme — implementation has been variable).
- FIT-positive patients are offered colonoscopy.
- Symptomatic FIT in primary care has replaced clinical urgent-referral criteria in most situations.`,
        },
        {
          id: "colorectal_cancer_path",
          name: "Colorectal Cancer",
          content: `## Epidemiology

- The **second commonest cause of cancer death in the UK** (after lung cancer).
- Peak age of diagnosis 60-79 years; presentation under 50 raises suspicion of a familial syndrome.
- More common in Western populations; rising rapidly in East Asia in parallel with adoption of Western diet.
- **Around 98% are adenocarcinomas**; rarer types include neuroendocrine tumours, lymphoma, and squamous cell carcinoma of the anal canal.
- Distribution: around 45% rectal, 25% sigmoid, smaller percentages in other segments.

## Aetiology and risk factors

### Modifiable
- Low-fibre, high-fat, high-red and processed meat diet.
- Obesity and physical inactivity.
- Smoking.
- Alcohol.

### Non-modifiable
- Increasing age.
- Family history of colorectal cancer or polyps.
- **Familial syndromes**: FAP, Lynch, Peutz-Jeghers, juvenile polyposis, Cowden, MUTYH-associated polyposis (covered in the polyps topic).
- **Inflammatory bowel disease**, particularly long-standing pancolitic ulcerative colitis.
- Prior pelvic radiotherapy.

### Protective
- High dietary fibre and calcium intake.
- **Aspirin** and other non-steroidal anti-inflammatory drugs (NSAIDs); the COX-2 isoform is overexpressed in around 90% of colorectal cancers.
- Hormone replacement therapy (modest reduction).

## Molecular pathways

Two principal pathways produce colorectal cancer (see Polyps topic for detail):

1. **Chromosomal instability pathway** (around 85%): adenoma-carcinoma sequence with sequential **APC → KRAS → TP53** mutations.
2. **Microsatellite instability pathway** (around 15%): defective mismatch repair through **MLH1** promoter hypermethylation (sporadic) or germline MMR gene mutation (Lynch syndrome). **BRAF V600E** mutation is common in the sporadic MSI pathway and is associated with a serrated polyp origin.

## Clinical features

The presentation depends on tumour location.

| Site | Typical features |
| --- | --- |
| **Right (caecum, ascending colon)** | **Iron deficiency anaemia**, weight loss, palpable right iliac fossa mass, late presentation (the bowel content is liquid, so obstruction is rare) |
| **Left (descending, sigmoid, rectum)** | **Change in bowel habit**, crampy left lower quadrant pain, **rectal bleeding (fresh red)**, tenesmus (rectal), large bowel obstruction (the bowel content is more solid) |

Other presentations:
- Emergency presentation with obstruction (around 20%), perforation, or large bleed.
- **Asymptomatic** detected on screening or surveillance.
- Distant metastasis at presentation (liver, lung, peritoneum, bone, brain).

## Investigations

- **Colonoscopy** with biopsy is the gold standard for diagnosis.
- **CT colonography** as an alternative when colonoscopy is contraindicated or incomplete.
- **Staging**: contrast-enhanced CT thorax/abdomen/pelvis. **Rectal cancers** additionally require **pelvic MRI** to assess T stage, mesorectal fascia involvement, and extramural vascular invasion. **PET-CT** in selected cases for distant disease.
- **Carcinoembryonic antigen (CEA)**: not a screening test (low sensitivity); useful for monitoring response to treatment and detecting recurrence.
- **Routine MMR or MSI testing** of all colorectal cancers is now recommended (NICE) to identify Lynch syndrome and inform immunotherapy decisions.
- **KRAS, NRAS, BRAF, HER2** mutation testing in metastatic disease guides targeted therapy.

## Staging

### Dukes staging (traditional)
| Stage | Description | Approximate 5-year survival |
| --- | --- | --- |
| **A** | Confined to mucosa and submucosa | Greater than 95% |
| **B1** | Extending into muscularis propria | 67% |
| **B2** | Transmural invasion, no lymph nodes | 54% |
| **C1** | Extending to muscularis propria with lymph node metastases | 43% |
| **C2** | Transmural with lymph node metastases | 23% |
| **D** | Distant metastases | Less than 10% |

### TNM staging (current)
- **T1**: invades submucosa.
- **T2**: invades muscularis propria.
- **T3**: invades through muscularis propria into pericolorectal tissues.
- **T4**: penetrates visceral peritoneum (4a) or invades adjacent organs (4b).
- **N0**: no lymph node metastases. **N1**: 1-3 regional nodes. **N2**: 4 or more.
- **M0** or **M1**: distant metastasis present or absent.

## Management

### Localised colon cancer
- **Surgical resection** based on vascular anatomy:

| Tumour location | Operation |
| --- | --- |
| Caecum, ascending colon, proximal transverse | **Right hemicolectomy** |
| Mid and distal transverse | **Extended right hemicolectomy** |
| Descending colon, distal transverse | **Left hemicolectomy** |
| Sigmoid | **Sigmoid colectomy** (high anterior resection) |
| Upper rectum (more than 1-2 cm above anal sphincter) | **Anterior resection** with total mesorectal excision |
| Lower rectum (less than 1-2 cm above anal sphincter) | **Abdominoperineal (AP) resection** with permanent colostomy |

- **Adjuvant chemotherapy** (FOLFOX = 5-fluorouracil, leucovorin, oxaliplatin) for stage III and high-risk stage II disease.

### Locally advanced rectal cancer
- **Neoadjuvant long-course chemoradiotherapy** or **total neoadjuvant therapy (TNT)** followed by surgery.
- **Watch and wait** approach in selected patients with complete clinical response after neoadjuvant therapy.

### Metastatic disease
- **Resection of liver or lung metastases** is potentially curative in oligometastatic disease.
- **Palliative chemotherapy** with combinations:
  - **FOLFOX** or **FOLFIRI** (5-FU, leucovorin, irinotecan).
  - **Cetuximab** or **panitumumab** (anti-EGFR monoclonal antibodies) — **only effective in RAS wild-type tumours**, as RAS mutations bypass EGFR signalling. Less effective in right-sided tumours.
  - **Bevacizumab** (anti-VEGF).
  - **Pembrolizumab** or **nivolumab** (anti-PD1 checkpoint inhibitors) in **MSI-high / mismatch repair-deficient** tumours (KEYNOTE-177).
  - **Encorafenib + cetuximab** for **BRAF V600E** mutated metastatic disease (BEACON trial).
  - **Trastuzumab + pertuzumab** in HER2-positive tumours.

### Symptom control
- Obstructing tumours: self-expanding metal stent as a bridge to surgery, or palliative stent.
- Bleeding: argon plasma coagulation at endoscopy or palliative radiotherapy.
- Pain, nausea, anorexia, and psychosocial support through specialist palliative care.

## Screening (UK)
- **Faecal immunochemical test (FIT)** every 2 years from age 54-74 (expanding to age 50). FIT-positive patients are referred for colonoscopy.
- One-off **flexible sigmoidoscopy** at age 55 (bowel scope) — implementation has been variable.
- High-risk groups (familial syndromes, IBD, prior adenoma) receive intensified surveillance (covered in the Polyps topic).`,
        },
      ],
    },
    {
      id: "pancreatic_path",
      name: "Pancreatic Pathology",
      icon: "🔬",
      topics: [
        {
          id: "pancreas_anatomy_function",
          name: "Pancreas: Anatomy, Physiology & Congenital Anomalies",
          content: `## Anatomy

The pancreas lies retroperitoneally across the upper abdomen at the level of the first and second lumbar vertebrae. It is divided into:
- **Head** (with the uncinate process), encircled by the C-shaped duodenum.
- **Neck**, overlying the superior mesenteric vessels.
- **Body**, lying posterior to the stomach.
- **Tail**, extending to the splenic hilum within the splenorenal ligament.

The **main pancreatic duct (of Wirsung)** drains the body and tail, joining the common bile duct at the **ampulla of Vater** in the second part of the duodenum, where flow is controlled by the **sphincter of Oddi**. The smaller **accessory duct (of Santorini)** typically drains the upper head through the minor papilla.

Blood supply is from the splenic artery (body and tail) and the gastroduodenal and superior mesenteric arteries (head, via the pancreaticoduodenal arcades). Venous drainage is to the portal vein.

## Exocrine and endocrine function

The pancreas has two functionally distinct components.

| Component | Cells | Function |
| --- | --- | --- |
| **Exocrine** | Acinar cells (digestive enzymes) and ductal cells (bicarbonate-rich fluid) | Secretes around 2 L per day of alkaline fluid containing zymogens (trypsinogen, chymotrypsinogen, proelastase, procarboxypeptidase) plus active amylase and lipase. Trypsin is activated in the duodenum by enterokinase, then activates the other zymogens. |
| **Endocrine** | Islets of Langerhans | Alpha cells secrete **glucagon**; beta cells secrete **insulin** and amylin; delta cells secrete **somatostatin** (inhibits alpha, beta, and gut hormones); PP cells secrete **pancreatic polypeptide**; epsilon cells secrete **ghrelin**. |

### Regulation of exocrine secretion
- **Secretin**: produced by **S-cells of the duodenum** in response to duodenal acid. It stimulates bicarbonate-rich pancreatic ductal secretion, neutralising gastric acid.
- **Cholecystokinin (CCK)**: produced by **I-cells of the duodenum** in response to fat and protein in the lumen. It stimulates pancreatic enzyme secretion from acinar cells, gallbladder contraction, and sphincter of Oddi relaxation.
- Vagal cholinergic stimulation augments both.

## Congenital pancreatic anomalies

### Pancreas divisum
- The commonest pancreatic anomaly (around 5-10% of the population).
- Failure of fusion of the **dorsal and ventral pancreatic buds** in embryogenesis, leaving the main duct of the dorsal pancreas (Santorini) draining through the minor papilla, and a small ventral duct (Wirsung) draining through the major papilla.
- Most cases are asymptomatic. A minority develop **recurrent acute pancreatitis** from relative outflow obstruction at the minor papilla.
- Diagnosis: magnetic resonance cholangiopancreatography (MRCP); ERCP.
- Management: minor papilla sphincterotomy or stenting in symptomatic patients.

### Annular pancreas
- A ring of pancreatic tissue encircling the second part of the duodenum, from incomplete rotation of the ventral pancreatic bud.
- Often presents in infancy with duodenal obstruction (bilious vomiting, "double bubble" on imaging) — strongly associated with **trisomy 21 (Down syndrome)**.
- In adults, may present with peptic ulcer disease, pancreatitis, or duodenal obstruction.
- Treatment: surgical bypass (duodenoduodenostomy) rather than resection of the pancreatic ring.

### Ectopic (heterotopic) pancreas
- Pancreatic tissue found outside the normal site, most commonly in the **stomach, duodenum, or jejunum**; Meckel diverticulum is another classical site.
- Usually an incidental finding. May rarely cause obstruction, bleeding, or undergo neoplastic transformation.

### Other rare anomalies
- **Agenesis** of the dorsal pancreas (associated with diabetes and exocrine insufficiency).
- **Pancreatic cysts**, including those in von Hippel-Lindau disease and autosomal dominant polycystic kidney disease.`,
        },
        {
          id: "acute_pancreatitis",
          name: "Acute Pancreatitis",
          content: `## Definition

Acute pancreatitis is acute inflammation of the pancreas caused by intracellular activation of zymogens, with auto-digestion of the gland and a variable systemic inflammatory response.

## Causes — the **"I GET SMASHED"** mnemonic

| Letter | Cause | Comments |
| --- | --- | --- |
| **I** | **Idiopathic** | Around 10-20%; consider occult biliary microlithiasis, sphincter of Oddi dysfunction, IgG4 disease |
| **G** | **Gallstones** | The commonest cause in the UK (around 50%). Stones impacted at the ampulla obstruct both biliary and pancreatic drainage |
| **E** | **Ethanol** | The second commonest cause (around 25%). Direct acinar cell toxicity and ductal obstruction by viscous secretions |
| **T** | **Trauma** | Including post-ERCP (around 3-5% of ERCPs) |
| **S** | **Steroids** | |
| **M** | **Mumps** and other infections (Coxsackie, CMV, HIV) | |
| **A** | **Autoimmune** | Type 1 IgG4-related; type 2 (idiopathic duct-centric) |
| **S** | **Scorpion sting** (Tityus trinitatis, in Trinidad) | More common in exams than in life |
| **H** | **Hyperlipidaemia** (triglycerides greater than 11.3 mmol/L), **hypercalcaemia**, **hypothermia** | |
| **E** | **ERCP** (endoscopic retrograde cholangiopancreatography) | |
| **D** | **Drugs**: azathioprine, mesalazine, didanosine, GLP-1 analogues, valproate, thiazides, oestrogens, tetracyclines | |

## Pathophysiology

Inappropriate intracellular activation of trypsinogen → trypsin cascade → activation of phospholipase A2, elastase, and lipase → auto-digestion of the gland with **acinar cell necrosis**, vascular damage, and a systemic inflammatory response. **Fat necrosis** in surrounding tissues produces calcium soap formation (saponification), which sequesters calcium and causes **hypocalcaemia**.

### Histological patterns
- **Periductal** necrosis (acinar cells near ducts) — obstructive causes.
- **Perilobular** necrosis (edge of lobules) — ischaemic causes.
- **Panlobular** necrosis — combination of both, in severe disease.

The dominant histological process is **coagulative necrosis**.

## Clinical features

- **Severe epigastric pain** of sudden onset, often radiating through to the back and relieved by sitting forward.
- Vomiting, anorexia.
- Fever, tachycardia, hypotension in severe disease.
- **Cullen's sign**: periumbilical bruising from retroperitoneal haemorrhage tracking via the falciform ligament.
- **Grey-Turner's sign**: flank bruising from retroperitoneal haemorrhage.
- Reduced bowel sounds (ileus).

## Diagnosis

Diagnosis requires **at least 2 of 3** criteria (the **Atlanta classification**):
1. Characteristic abdominal pain.
2. **Serum amylase or lipase greater than 3 times the upper limit of normal**.
3. Characteristic imaging findings.

### Notes on serum enzymes
- **Amylase** rises within hours but falls rapidly (often normal after 3-5 days). The level does not correlate with severity.
- **Lipase** is **more sensitive and specific** than amylase, rises earlier, and stays elevated longer. It is now the preferred test where available.
- A normal amylase does not exclude pancreatitis (severe necrosis with little remaining functional tissue, late presentation, or hypertriglyceridaemia interfering with the assay).

### Imaging
- **Erect chest X-ray and abdominal X-ray** to exclude perforation and obstruction. May show a "sentinel loop" of dilated jejunum.
- **Abdominal ultrasound** within 24 hours to identify gallstones and dilated common bile duct (the cause directs early ERCP).
- **Contrast-enhanced CT** is not required at diagnosis; it is best performed at 72-96 hours from onset to assess severity and detect necrosis.
- **MRCP** for suspected common bile duct stones or pancreatic duct disruption.

## Severity scoring

Around 20% of cases progress to severe pancreatitis. Several scoring systems exist:

- **Modified Glasgow (Imrie) score** — **"PANCREAS"** mnemonic, calculated at admission and 48 hours; a score of 3 or more predicts severe disease:
  - **P**aO₂ less than 8 kPa.
  - **A**ge greater than 55 years.
  - **N**eutrophils (white cell count greater than 15 × 10⁹/L).
  - **C**alcium less than 2 mmol/L.
  - **R**enal (urea greater than 16 mmol/L).
  - **E**nzymes (LDH greater than 600 IU/L, AST greater than 200 IU/L).
  - **A**lbumin less than 32 g/L.
  - **S**ugar (glucose greater than 10 mmol/L).
- **APACHE II**: ICU-grade severity score; recalculated daily.
- **BISAP** (Bedside Index of Severity in Acute Pancreatitis): 5 variables in the first 24 hours.
- **Ranson criteria** (older, US-based, requires data at admission and 48 hours).
- **CT severity index (Balthazar)** assessed at 72-96 hours.

## Revised Atlanta classification (2012)

- **Mild**: no organ failure or complications.
- **Moderately severe**: transient organ failure (resolving within 48 hours) or local complications.
- **Severe**: persistent organ failure (longer than 48 hours).

## Management

### Initial supportive care
- **Aggressive intravenous fluid resuscitation** with crystalloid (Hartmann's preferred over normal saline); target urine output greater than 0.5 mL/kg/h.
- **Analgesia**: opioid analgesia titrated to effect; pethidine is no longer favoured over morphine.
- **Antiemetics**.
- **Nutrition**: oral feeding as soon as tolerated. **Early enteral nutrition** (nasogastric or nasojejunal) within 72 hours in severe disease is superior to parenteral nutrition (reduces infection and mortality).
- **Oxygen** to maintain SpO₂ greater than 94%.
- **Glucose, calcium, and magnesium** monitoring and replacement.

### Antibiotics
- **Routine prophylactic antibiotics are not indicated**, even in necrotising pancreatitis (no benefit and risk of fungal superinfection).
- Antibiotics (e.g. imipenem, piperacillin-tazobactam) are reserved for documented **infected necrosis** (positive fine-needle aspirate or clear clinical deterioration), or for associated cholangitis.

### Treating the cause
- **Gallstone pancreatitis**: urgent **ERCP within 72 hours** if there is associated cholangitis or persistent biliary obstruction. **Laparoscopic cholecystectomy during the same admission** (mild disease) or within 2-4 weeks (severe disease) to prevent recurrence.
- **Alcohol**: abstinence and structured support.
- **Hypertriglyceridaemia**: insulin infusion, plasmapheresis if severe (greater than 11.3 mmol/L).
- **Drug-induced**: stop the offending agent.

## Complications

### Local
- **Acute peripancreatic fluid collection** (less than 4 weeks, no defined wall).
- **Pancreatic pseudocyst** (after 4 weeks; a fluid collection with a non-epithelialised fibrous wall; classically associated with alcoholic pancreatitis). May rupture, become infected, or compress adjacent structures.
- **Walled-off necrosis** (after 4 weeks; a mature necrotic collection).
- **Infected pancreatic necrosis** — high mortality. Managed by **step-up approach**: percutaneous drainage first, then endoscopic or minimally invasive necrosectomy if needed.
- **Pancreatic abscess**.
- **Pancreatic ascites** or **pancreatic fistula** (from duct disruption).
- **Splenic or portal vein thrombosis**, leading to left-sided portal hypertension and gastric varices.
- **Pseudoaneurysm** of splenic, gastroduodenal, or hepatic arteries — risk of catastrophic haemorrhage; managed by angiographic embolisation.

### Systemic
- **Acute respiratory distress syndrome (ARDS)**.
- **Acute kidney injury**.
- **Disseminated intravascular coagulation**.
- **Hypocalcaemia** (saponification).
- **Hyperglycaemia** (loss of beta cell function).
- **Multi-organ failure** in severe disease.

## Prognosis

Overall mortality around 5%; severe pancreatitis with persistent organ failure has 30-50% mortality. Recurrence is common with persistent risk factors (alcohol, untreated gallstones).`,
        },
        {
          id: "chronic_pancreatitis",
          name: "Chronic Pancreatitis",
          content: `## Definition

Chronic pancreatitis is a progressive fibroinflammatory disease of the pancreas characterised by irreversible destruction of parenchyma, leading to **exocrine and endocrine insufficiency**.

## Aetiology — the **TIGAR-O** classification

| Category | Examples |
| --- | --- |
| **T** Toxic-metabolic | Alcohol (the commonest, around 70-80%), tobacco smoking, hypercalcaemia, hypertriglyceridaemia, chronic kidney disease, drugs |
| **I** Idiopathic | Early- and late-onset idiopathic disease, tropical pancreatitis |
| **G** Genetic | **PRSS1** (cationic trypsinogen — autosomal dominant hereditary pancreatitis with 80% lifetime risk), **CFTR** (cystic fibrosis), **SPINK1** (a trypsin inhibitor) |
| **A** Autoimmune | Type 1 (IgG4-related); type 2 (idiopathic duct-centric) |
| **R** Recurrent and severe acute pancreatitis | Post-necrotic chronic pancreatitis; recurrent gallstone disease |
| **O** Obstructive | Pancreas divisum (controversial), pancreatic duct stricture from tumour or trauma, sphincter of Oddi dysfunction |

## Pathology

- **Fibrosis** with progressive loss of acinar parenchyma; islets are relatively preserved until late.
- **Ductal dilatation** with intraductal protein plugs that may calcify.
- **Parenchymal calcification** (visible on plain abdominal X-ray or CT).
- **Atrophy** of remaining pancreatic tissue.

Histologically, chronic pancreatitis can be very difficult to distinguish from pancreatic ductal adenocarcinoma — both feature fibrosis with atrophic glands.

## Clinical features

- **Epigastric pain radiating to the back**, often relieved by sitting forward; the pain is recurrent or constant, may be precipitated by alcohol or food, and is the dominant symptom in most patients.
- **Steatorrhoea** (pale, bulky, offensive stools) from exocrine insufficiency, which usually appears when more than 90% of pancreatic exocrine function is lost.
- **Weight loss** from malabsorption and food avoidance.
- **Type 3c diabetes mellitus** (pancreatogenic) from endocrine insufficiency: brittle glycaemic control with hypoglycaemic episodes (loss of both insulin and counter-regulatory glucagon).
- Fat-soluble vitamin deficiency (A, D, E, K).
- Vitamin B12 deficiency (loss of pancreatic proteases that release B12 from R-protein).

## Investigations

- **Faecal elastase-1**: less than 200 μg/g of stool indicates pancreatic exocrine insufficiency; less than 100 μg/g indicates severe insufficiency. Now the preferred non-invasive test.
- **Serum amylase and lipase**: usually normal in chronic disease (burnt-out gland).
- **CT abdomen** with pancreas protocol: pancreatic calcification, ductal dilatation, atrophy.
- **MRCP with secretin stimulation** for early ductal disease.
- **Endoscopic ultrasound (EUS)** is the most sensitive test for early changes and can guide tissue sampling.
- **Glucose tolerance and HbA1c** for endocrine assessment.
- **IgG4 level** if autoimmune pancreatitis suspected.

## Autoimmune pancreatitis

A distinct steroid-responsive form of chronic pancreatitis.

### Type 1 (IgG4-related disease)
- Part of the systemic **IgG4-related disease (IgG4-RD)** spectrum.
- Older men, often presenting with **painless obstructive jaundice** (mimicking pancreatic cancer).
- Diffusely enlarged "sausage-shaped" pancreas with a delayed rim of enhancement.
- Raised serum IgG4 (greater than 1.4 g/L).
- Histology: lymphoplasmacytic infiltrate rich in **IgG4-positive plasma cells**, **storiform fibrosis**, and **obliterative phlebitis**.
- Associated with other IgG4-RD: sclerosing cholangitis, retroperitoneal fibrosis, Riedel's thyroiditis, Mikulicz disease.
- **Highly responsive to oral corticosteroids**; relapse common, often requiring azathioprine or rituximab maintenance.

### Type 2 (idiopathic duct-centric pancreatitis)
- Younger patients, equal sex distribution.
- Often associated with **inflammatory bowel disease** (ulcerative colitis more than Crohn's).
- Histology: granulocytic epithelial lesions; no IgG4 elevation.
- Also steroid-responsive; lower relapse rate.

## Management

### Pain
- Smoking cessation and alcohol abstinence (most important).
- Simple analgesia, then NSAIDs, then tramadol; opioids may be necessary but addiction risk is high.
- **Pancreatic enzyme replacement** (paradoxically helpful — feedback inhibition of CCK release reduces pancreatic stimulation).
- **Pregabalin** for neuropathic pain.
- **Endoscopic therapy**: pancreatic duct stenting, stone extraction, sphincterotomy for ductal hypertension.
- **Coeliac plexus block** (percutaneous or EUS-guided) for refractory pain.
- **Surgery**: lateral pancreaticojejunostomy (Puestow procedure) for dilated duct; pancreatic head resection (Frey, Beger, or pancreaticoduodenectomy) for focal disease.

### Exocrine insufficiency
- **Pancreatic enzyme replacement therapy (Creon, pancrelipase)** with all meals.
- Fat-soluble vitamin (A, D, E, K) supplementation.
- Often a proton pump inhibitor improves enzyme efficacy by reducing acid inactivation.

### Endocrine insufficiency (type 3c diabetes)
- Insulin is usually required.
- Careful glycaemic monitoring because of high hypoglycaemia risk.

## Complications

- Pancreatic pseudocyst.
- Pancreatic ascites or fistula.
- Splenic or portal vein thrombosis with left-sided portal hypertension.
- Common bile duct stricture with obstructive jaundice.
- Duodenal obstruction.
- **Pancreatic adenocarcinoma**: lifetime risk is significantly elevated (around 4% at 20 years; greater in hereditary pancreatitis — up to 40-50% lifetime risk with PRSS1 mutations).`,
        },
        {
          id: "pancreatic_ductal_adenocarcinoma",
          name: "Pancreatic Ductal Adenocarcinoma",
          content: `## Epidemiology

- Pancreatic ductal adenocarcinoma (PDAC) accounts for around **85% of all pancreatic malignancies**.
- Around the **fifth commonest cause of cancer death** in the UK despite being only the 10th commonest cancer — reflecting the very poor prognosis.
- Median age at diagnosis around 65-70 years; men slightly more than women.
- Rising incidence, particularly in younger patients (obesity-driven).

## Risk factors

### Modifiable
- **Smoking** (relative risk 2-3; the most important modifiable risk factor).
- Obesity, type 2 diabetes mellitus (a small increased risk; new-onset diabetes in a patient over 50 may be the presenting feature).
- Chronic pancreatitis (4% lifetime risk; much higher with hereditary pancreatitis).
- Heavy alcohol consumption.
- Dietary factors (processed and red meat; low fruit and vegetable intake).

### Non-modifiable and genetic
- Increasing age.
- Family history (risk increases with the number of affected first-degree relatives).
- **Hereditary syndromes**:
  - **Hereditary pancreatitis** (PRSS1 mutation — up to 40% lifetime risk).
  - **BRCA1 and BRCA2** germline mutations.
  - **Lynch syndrome** (mismatch repair gene mutations).
  - **Peutz-Jeghers syndrome** (STK11/LKB1).
  - **Familial atypical multiple mole and melanoma syndrome (FAMMM)** with CDKN2A mutation.
  - **Hereditary breast-ovarian cancer syndrome** (BRCA2 in particular).
  - Familial pancreatic cancer kindreds.

## Site

- **Around 70% arise in the head of the pancreas** (and uncinate process), classically presenting with painless obstructive jaundice.
- 15-20% body, 5-10% tail.

## Molecular pathology

PDAC develops from precursor lesions — **pancreatic intraepithelial neoplasia (PanIN-1, -2, -3)** — through sequential genetic events:
- **KRAS** mutations (greater than 90%): the earliest and most consistent change.
- **CDKN2A (p16) loss** (around 90%).
- **TP53 mutation** (around 75%).
- **SMAD4 (DPC4) loss** (around 55%): correlates with metastatic potential.
- **BRCA2** mutations in around 5%.

Two other precursor lesions exist:
- **Intraductal papillary mucinous neoplasm (IPMN)** — main duct or branch duct cystic lesion; main duct IPMNs have a 50-60% risk of malignant transformation and are usually resected.
- **Mucinous cystic neoplasm (MCN)** — almost exclusively in women, in the body or tail; ovarian-type stroma.

## Clinical features

- **Painless obstructive jaundice** (classical presentation of head-of-pancreas cancer); pale stools, dark urine, pruritus.
- **Persistent abdominal pain radiating to the back**, often worse at night, relieved by leaning forward (body and tail tumours).
- Cachexia, anorexia, weight loss.
- **New-onset diabetes mellitus** in an older patient, particularly without obesity, may be the presenting feature in 1% of new diabetics over 50.
- **Steatorrhoea** from pancreatic duct obstruction.
- **Trousseau syndrome**: migratory superficial thrombophlebitis from a hypercoagulable state (around 10% of cases).
- **Courvoisier's sign**: a palpable, non-tender, distended gallbladder in a jaundiced patient suggests pancreatic head cancer rather than gallstones (Courvoisier's law: in obstructive jaundice, a palpable gallbladder is not due to gallstones because chronic stone disease usually produces a fibrotic, contracted gallbladder).
- **Virchow's node** (left supraclavicular lymphadenopathy via the thoracic duct, Troisier's sign).
- **Sister Mary Joseph nodule** (umbilical metastasis).
- Ascites in advanced disease.
- Abdominal mass in late disease.

## Investigations

### Bloods
- Conjugated hyperbilirubinaemia with raised alkaline phosphatase and gamma-glutamyl transferase (obstructive picture).
- Anaemia, low albumin, deranged clotting (vitamin K malabsorption).
- Raised calcium.
- **CA 19-9**: a tumour marker; raised in around 80% of pancreatic cancers. Specificity is limited (raised in cholestasis of any cause, cholangiocarcinoma, gastric, and colorectal cancer). Useful for monitoring response and recurrence after curative resection. Note: about 5% of patients (Lewis blood-group negative) cannot synthesise CA 19-9.

### Imaging
- **Pancreas-protocol contrast-enhanced CT abdomen and pelvis** is the cornerstone investigation. Identifies the tumour, vascular involvement (resectability), and metastases.
- **Endoscopic ultrasound (EUS)** is the most sensitive test for small (less than 2 cm) tumours and provides tissue diagnosis via fine-needle aspiration or biopsy.
- **MRCP** to delineate biliary and pancreatic ductal anatomy.
- **PET-CT** for distant staging in selected cases.
- **Staging laparoscopy** in borderline resectable disease to detect occult peritoneal or liver disease.

## Resectability assessment

- **Resectable**: no contact with major arteries (coeliac, superior mesenteric, hepatic) and limited or no contact with the superior mesenteric vein or portal vein.
- **Borderline resectable**: limited arterial contact (less than 180 degrees) and reconstructable venous involvement.
- **Locally advanced**: greater than 180-degree arterial contact (unresectable).
- **Metastatic**: distant disease.

Only around 15-20% of patients have resectable disease at presentation.

## Management

### Resectable disease
- **Whipple procedure (pancreaticoduodenectomy)** for head, neck, and uncinate tumours: en-bloc resection of the pancreatic head, duodenum, common bile duct, gallbladder, and proximal jejunum, with reconstruction (pancreaticojejunostomy, hepaticojejunostomy, gastrojejunostomy). Pylorus-preserving variants are common.
- **Distal pancreatectomy** with splenectomy for body and tail tumours.
- **Total pancreatectomy** for diffuse disease (rare).
- **Adjuvant chemotherapy** improves survival; **modified FOLFIRINOX** (5-fluorouracil, leucovorin, irinotecan, oxaliplatin) is preferred in fit patients (PRODIGE 24 trial). Gemcitabine plus capecitabine or gemcitabine plus nab-paclitaxel are alternatives.

### Borderline resectable and locally advanced disease
- **Neoadjuvant chemotherapy** (FOLFIRINOX or gemcitabine + nab-paclitaxel) followed by reassessment for surgery. Adding radiotherapy in selected cases.

### Metastatic disease (palliative)
- **First-line chemotherapy**:
  - **FOLFIRINOX** in fit patients (ECOG performance status 0-1).
  - **Gemcitabine + nab-paclitaxel** in slightly less fit patients.
  - Gemcitabine alone in frail patients.
- **Olaparib** (PARP inhibitor) maintenance in germline BRCA1/2-mutated metastatic disease (POLO trial).
- **Pembrolizumab** in mismatch-repair-deficient or MSI-high tumours (rare in pancreatic cancer).

### Symptomatic and supportive care
- **Biliary stenting** (ERCP or percutaneous transhepatic) for obstructive jaundice.
- **Duodenal stenting** or gastrojejunostomy for gastric outlet obstruction.
- **Pancreatic enzyme replacement** for steatorrhoea.
- **Coeliac plexus block** (EUS or percutaneous) for intractable pain.
- **Specialist palliative care** input early.

## Prognosis

Five-year survival overall remains around **5%**, the worst of all common cancers. Survival in resected disease with adjuvant chemotherapy reaches 20-25% at 5 years. Locally advanced disease has a median survival of around 12 months, and metastatic disease 6-9 months on chemotherapy.`,
        },
        {
          id: "pancreatic_neuroendocrine_tumours",
          name: "Pancreatic Neuroendocrine & Other Rare Tumours",
          content: `## Pancreatic neuroendocrine tumours (pNETs)

Pancreatic neuroendocrine tumours arise from the islets of Langerhans and account for around 1-2% of pancreatic neoplasms. They lie on a spectrum from indolent to highly malignant.

### Classification
- **Functional** (around 50%): present with a clinical syndrome related to hormone over-secretion.
- **Non-functional** (around 50%): present incidentally on imaging or with local mass effect or metastases.

The WHO grading (G1 to G3, plus high-grade NEC) and pathology are described in the GI Neuroendocrine Tumours topic. Most pNETs are circumscribed, 1-5 cm tumours in the body or tail, with cells arranged in nests or trabeculae and granular eosinophilic cytoplasm. They stain positively for **chromogranin A** and **synaptophysin**.

### Functional pNETs

| Tumour | Cell of origin | Hormone | Clinical syndrome | Diagnosis | Other notes |
| --- | --- | --- | --- | --- | --- |
| **Insulinoma** | Beta cells | Insulin | **Whipple's triad**: spontaneous hypoglycaemia, plasma glucose less than 2.5 mmol/L at the time of symptoms, relief with glucose. Symptoms of neuroglycopenia (confusion, seizures, behavioural change) and adrenergic activation | 72-hour supervised fast with paired insulin, C-peptide, and proinsulin during hypoglycaemia. Inappropriately high insulin and C-peptide. Negative sulfonylurea screen | Most common functional pNET. Around 90% are benign and solitary; 10% in MEN1. Cure by enucleation or distal pancreatectomy. Diazoxide for medical control. |
| **Gastrinoma (Zollinger-Ellison syndrome)** | Non-beta islet cells (often duodenal wall — "gastrinoma triangle") | Gastrin | Severe, recurrent, and atypical-site peptic ulcers (jejunal ulcers are characteristic); secretory diarrhoea (acid inactivates lipase) | Fasting serum gastrin (greater than 1000 pg/mL is diagnostic with a high gastric acid output); secretin stimulation test (paradoxical rise in gastrin); endoscopy | Second commonest functional pNET. 25% are part of MEN1 (suspect in young patients or those with multifocal disease). High-dose proton pump inhibitor controls symptoms; surgery for localised disease |
| **VIPoma (Verner-Morrison syndrome)** | Islet cells | Vasoactive intestinal peptide | **WDHA syndrome**: Watery Diarrhoea, Hypokalaemia, Achlorhydria | Plasma VIP greater than 75 pmol/L during a symptomatic episode | Rare; often metastatic at diagnosis. Octreotide controls symptoms |
| **Glucagonoma** | Alpha cells | Glucagon | **4 Ds**: Dermatitis (necrolytic migratory erythema), Diabetes mellitus, DVT, Depression. Also weight loss, glossitis, anaemia | Plasma glucagon greater than 1000 pg/mL | Tail of pancreas; often large and metastatic at diagnosis |
| **Somatostatinoma** | Delta cells | Somatostatin | The "inhibitory" triad: diabetes mellitus, cholelithiasis (somatostatin inhibits CCK), steatorrhoea (inhibits pancreatic enzymes) | Plasma somatostatin level | Very rare; often large at diagnosis |
| **PPoma** | PP cells | Pancreatic polypeptide | Usually no specific syndrome | Plasma PP raised | Often considered alongside non-functional pNETs |

### Non-functional pNETs

- Often large at presentation (slow-growing without hormone signs).
- May present with abdominal pain, weight loss, jaundice, or a palpable mass.
- Around 90% express somatostatin receptors and stain positively for chromogranin A.

### Multiple endocrine neoplasia type 1 (MEN1)

Around 15-20% of pNETs occur as part of **MEN1** (the **"3 Ps"**):
- **P**ituitary adenoma.
- **P**arathyroid hyperplasia (commonest manifestation; primary hyperparathyroidism in 95%).
- **P**ancreatic endocrine tumour (most commonly gastrinoma, then insulinoma).

MEN1 is autosomal dominant, due to mutations in the **MEN1** gene on chromosome 11q13 encoding menin. Other features include foregut carcinoids, adrenocortical adenomas, lipomas, and facial angiofibromas. Screening starts in childhood with serum calcium and pituitary hormone profiles, plus imaging at intervals.

(MEN2A and MEN2B are RET-driven and involve medullary thyroid carcinoma plus phaeochromocytoma; they do not feature pancreatic NETs.)

### Investigations

- Cross-sectional imaging: contrast-enhanced **CT or MRI** for the primary tumour.
- **⁶⁸Ga-DOTATATE PET-CT**: highly sensitive for somatostatin-receptor-positive tumours; preferred over the older Indium-111 octreotide scan.
- **Endoscopic ultrasound with fine-needle aspiration** for histological confirmation, especially for small tumours.
- Hormone-specific biochemistry where a functional syndrome is suspected.
- Genetic testing for MEN1 in patients with multifocal disease, young age, or family history.

### Management

- **Surgical resection** is the only curative treatment: enucleation for small tumours, distal pancreatectomy or Whipple procedure for larger lesions.
- **Somatostatin analogues** (octreotide, lanreotide) control symptoms and have antiproliferative effects (PROMID and CLARINET trials).
- **Targeted therapy**: **everolimus** (an mTOR inhibitor) and **sunitinib** (a multi-tyrosine kinase inhibitor) are licensed for advanced pNETs.
- **Peptide receptor radionuclide therapy (PRRT)** with ¹⁷⁷Lu-DOTATATE for somatostatin-receptor-positive disease.
- **Chemotherapy**: streptozocin combinations, or temozolomide-capecitabine, for grade 2-3 disease. Platinum-etoposide for poorly differentiated neuroendocrine carcinoma.
- **Hepatic-directed therapy**: resection, ablation, transarterial embolisation, or selective internal radiation therapy (SIRT) for metastatic disease confined to the liver.

## Acinar cell carcinoma

A rare malignant tumour of the exocrine pancreas, accounting for around 1% of pancreatic neoplasms.

- Occurs in **older adults**, more commonly in men.
- **Lipase hypersecretion syndrome** in around 10%: subcutaneous fat necrosis (presenting as tender nodules on the limbs), polyarthralgia, and peripheral eosinophilia — analogous to the lipase-driven complications of severe acute pancreatitis.
- Histology: cells with **eosinophilic granular cytoplasm**, positive for **lipase, trypsin, and chymotrypsin** on immunohistochemistry. Cells form acinar structures.
- Often large and aggressive at diagnosis.
- Management: surgical resection if localised; chemotherapy (regimens used in pancreatic ductal adenocarcinoma or colorectal cancer have been tried).
- **Prognosis**: median survival around 18 months; 5-year survival less than 10%.

## Solid pseudopapillary neoplasm

- A rare, low-grade malignant tumour with a striking female predominance (around 90%); typically presents in young women in the second or third decade.
- Usually in the body or tail; well-circumscribed, often cystic.
- **CTNNB1 (beta-catenin)** mutations are characteristic.
- Excellent prognosis: 5-year survival greater than 95% with surgical resection.

## Pancreatoblastoma

- Rare paediatric pancreatic tumour, with a small adult peak.
- Mixed acinar, ductal, and squamous (squamoid corpuscle) histology.
- Associated with **Beckwith-Wiedemann syndrome** and **familial adenomatous polyposis**.
- Treated by resection plus chemotherapy.

## Pancreatic cystic neoplasms

A range of cystic lesions of varying malignant potential, increasingly detected incidentally on cross-sectional imaging.

| Lesion | Features |
| --- | --- |
| **Serous cystadenoma** | Almost always benign; older women; "honeycomb" appearance of microcysts; surveillance unless symptomatic |
| **Mucinous cystic neoplasm (MCN)** | Almost exclusively in women; body or tail; ovarian-type stroma; surgical resection because of malignant potential |
| **Intraductal papillary mucinous neoplasm (IPMN)** | Communicates with the pancreatic duct. **Main-duct** IPMN has 50-60% lifetime risk of malignant transformation — resected. **Branch-duct** IPMN has lower risk and may be surveilled if low-risk features. Diagnosed by MRCP, EUS, and cyst fluid analysis (raised CEA in mucinous lesions) |
| **Pseudocyst** | Inflammatory, non-neoplastic; follows pancreatitis; non-epithelialised wall (covered in Acute Pancreatitis topic) |`,
        },
        {
          id: "biliary_pathology",
          name: "Gallstones, Cholecystitis & Cholangiocarcinoma",
          content: `## Anatomy and physiology

Bile is produced by hepatocytes and concentrated in the gallbladder. Bile flow runs from intrahepatic bile ducts → right and left hepatic ducts → common hepatic duct → cystic duct branches to the gallbladder → common bile duct → joins the pancreatic duct at the **ampulla of Vater** → enters the duodenum at the major papilla, controlled by the **sphincter of Oddi**.

Bile contains bile acids (cholesterol-derived, conjugated with taurine or glycine), cholesterol, phospholipids (predominantly phosphatidylcholine), bilirubin diglucuronide, and electrolytes. Bile acids emulsify dietary fat and are reabsorbed in the terminal ileum (enterohepatic circulation, around 6 times per day).

## Gallstones (cholelithiasis)

### Epidemiology
Highly common: around 10-15% of adults in Western populations. Most are asymptomatic.

### Risk factors — the **"5 Fs"**
- **F**emale (oestrogen increases biliary cholesterol secretion).
- **F**at (obesity).
- **F**orties (age).
- **F**ertile (pregnancy and oral contraceptive pill).
- **F**air (Caucasian or Native American).
- Plus: rapid weight loss, total parenteral nutrition, ileal disease or resection (reduced bile acid reabsorption), haemolytic anaemia (pigment stones), cirrhosis, diabetes mellitus, family history.

### Types of stones

| Type | Composition | Radiopacity | Associations |
| --- | --- | --- | --- |
| **Cholesterol** (around 80%) | Cholesterol-rich, often mixed | **Radiolucent** (only 10-20% visible on plain X-ray) | The classical "5 Fs" risk factors |
| **Pigment — black** | Calcium bilirubinate | **Radio-opaque** | Chronic haemolysis (sickle cell disease, hereditary spherocytosis, thalassaemia, mechanical valves), cirrhosis |
| **Pigment — brown** | Calcium bilirubinate plus bacterial deposits | Variable | Biliary stasis and chronic infection (e.g. Clonorchis sinensis liver fluke in East Asia) |
| **Mixed** | Cholesterol + calcium salts | Variable | Common |

## Clinical syndromes from gallstones

### Asymptomatic cholelithiasis
- Most (60-80%) of patients with gallstones are asymptomatic.
- Generally no intervention; cholecystectomy considered only in selected high-risk groups (sickle cell disease, large stones, gallbladder polyps, porcelain gallbladder, prior to bariatric surgery in some pathways).

### Biliary colic
- Transient obstruction of the cystic duct by a stone.
- Severe right upper quadrant or epigastric pain, often after a fatty meal, lasting up to 6 hours, then resolving spontaneously.
- No fever, no peritonism, no jaundice.
- Liver function tests and inflammatory markers normal.
- Ultrasound confirms gallstones.
- Management: analgesia and elective **laparoscopic cholecystectomy** within 6 weeks.

### Acute cholecystitis
- Persistent cystic duct obstruction with gallbladder inflammation.
- Right upper quadrant pain (more than 6 hours), fever, nausea.
- **Murphy's sign**: inspiratory arrest on palpation of the right upper quadrant.
- Raised white cell count and C-reactive protein.
- Ultrasound: gallstones, gallbladder wall thickening (greater than 3 mm), pericholecystic fluid, sonographic Murphy's sign.
- Management: intravenous fluids, analgesia, antibiotics (e.g. co-amoxiclav, or piperacillin-tazobactam), and **early laparoscopic cholecystectomy within 7 days** of presentation (Tokyo guidelines).
- **Acalculous cholecystitis** (around 10%): occurs in critically ill, fasted, or post-operative patients without gallstones; managed by percutaneous cholecystostomy and antibiotics.
- Complications: empyema, gangrene, perforation, **emphysematous cholecystitis** (gas-forming infection, especially in diabetic patients; high mortality).

### Chronic cholecystitis
- Recurrent low-grade inflammation producing fibrosis and a contracted gallbladder.
- **Porcelain gallbladder**: dystrophic calcification of the gallbladder wall, with an increased risk of gallbladder carcinoma; cholecystectomy is recommended.

### Choledocholithiasis
- Stones in the common bile duct (CBD).
- May produce obstructive jaundice, biliary colic, pancreatitis, or cholangitis.
- Investigations: liver function tests show an obstructive pattern (raised conjugated bilirubin, alkaline phosphatase, gamma-glutamyl transferase). Ultrasound may show CBD dilatation greater than 6 mm. **MRCP** is the diagnostic test of choice. **ERCP** is therapeutic.

### Ascending cholangitis
- Bacterial infection of an obstructed biliary tree, classically by Escherichia coli, Klebsiella, Enterobacter, or Enterococcus.
- **Charcot's triad**: right upper quadrant pain + fever + jaundice (around 50% of cases).
- **Reynolds' pentad**: Charcot's triad plus hypotension and confusion — life-threatening sepsis.
- Management: aggressive resuscitation, broad-spectrum intravenous antibiotics covering Gram-negatives and anaerobes (piperacillin-tazobactam locally), and **urgent biliary drainage** by ERCP with sphincterotomy and stone extraction. Percutaneous transhepatic cholangiography (PTC) if ERCP is not feasible.

### Gallstone ileus
- A large stone erodes through the gallbladder wall into the duodenum, forms a cholecystoduodenal fistula, and impacts in the terminal ileum (the narrowest point) producing small bowel obstruction.
- **Rigler's triad** on abdominal X-ray: small bowel obstruction, pneumobilia (air in the biliary tree), and an ectopic gallstone.
- Usually in elderly women; mortality high. Treatment: laparotomy with enterolithotomy.

### Mirizzi syndrome
- Extrinsic compression of the common hepatic duct by a stone impacted in Hartmann's pouch or the cystic duct, producing obstructive jaundice.
- Diagnosed by MRCP. Treatment: cholecystectomy, sometimes with biliary reconstruction.

### Gallbladder cancer
- Adenocarcinoma in 90% of cases.
- 90% associated with gallstones; other risk factors include porcelain gallbladder, gallbladder polyps greater than 1 cm, primary sclerosing cholangitis, chronic typhoid carriage.
- Most are diagnosed incidentally after cholecystectomy or present late with weight loss, jaundice, and right upper quadrant mass.
- Poor prognosis (5-year survival around 10% overall).

## Cholangiocarcinoma

A malignant tumour of the biliary epithelium, classified by anatomical location:

| Location | Comments |
| --- | --- |
| **Intrahepatic** (around 10%) | Within the liver parenchyma; presents like hepatocellular carcinoma |
| **Hilar (Klatskin)** (around 50%) | At the bifurcation of the common hepatic duct. Bismuth-Corlette classification (I-IV) describes the extent of duct involvement |
| **Distal extrahepatic** (around 40%) | Below the cystic duct; resected by Whipple procedure |

### Risk factors
- **Primary sclerosing cholangitis (PSC)**: 5-15% lifetime risk; carries a poor prognosis.
- **Liver flukes**: Clonorchis sinensis and Opisthorchis viverrini in East Asia.
- **Hepatolithiasis**.
- **Choledochal cysts**: congenital dilatations of the biliary tree, particularly type IV; classified by Todani.
- **Chronic hepatitis B and C** (especially for intrahepatic cholangiocarcinoma).
- **Cirrhosis** of any cause.
- Toxin exposure: thorotrast (historical), nitrosamines.

### Clinical features
- **Painless obstructive jaundice** with cholestatic liver function tests.
- Weight loss, pruritus, pale stools, dark urine.
- Right upper quadrant pain in some patients.
- Cholangitis if biliary obstruction is complicated by infection.

### Investigations
- **Cross-sectional imaging**: contrast-enhanced CT and MRI with MRCP delineate the extent of disease.
- **ERCP with brush cytology** and **fluorescence in situ hybridisation (FISH)** of the brushings improves diagnostic yield.
- **CA 19-9** is raised in around 80% (also raised in benign cholestasis; less useful in PSC).
- **Endoscopic ultrasound** with fine-needle aspiration for distal lesions.
- **Staging laparoscopy** before resection.

### Management
- **Surgical resection** is the only curative option:
  - Intrahepatic: hepatic resection.
  - Hilar: extended hepatectomy plus extrahepatic bile duct resection and Roux-en-Y hepaticojejunostomy.
  - Distal: Whipple procedure.
- **Liver transplantation** with neoadjuvant chemoradiotherapy is offered in selected centres for early hilar disease (the Mayo protocol).
- **Adjuvant chemotherapy** with capecitabine improves survival after curative resection (BILCAP trial).
- **Advanced disease**: palliative chemotherapy with **gemcitabine + cisplatin** (ABC-02 trial); newer regimens add **durvalumab** (an anti-PD-L1 checkpoint inhibitor, TOPAZ-1 trial). Targeted therapies for actionable mutations (FGFR2 fusions — pemigatinib; IDH1 mutations — ivosidenib; BRAF V600E; HER2 amplification).
- **Biliary drainage**: ERCP or percutaneous transhepatic stenting for symptom control.

### Prognosis
Overall 5-year survival is around 10%; rises to 25-40% in resected disease. PSC-associated cholangiocarcinoma has a particularly poor prognosis because of late detection.`,
        },
      ],
    },
    {
      id: "liver_path",
      name: "Liver Pathology",
      icon: "🔬",
      topics: [
        {
          id: "_pending_liver_path",
          name: "(Coming soon)",
          content: `## Pending\n\nThis section is currently empty. Liver histopathology content will be added on request.`,
        },
      ],
    },
    {
      id: "urological_path",
      name: "Urological Pathology",
      icon: "🔬",
      topics: [
        {
          id: "_pending_urological_path",
          name: "(Coming soon)",
          content: `## Pending\n\nThis section is currently empty. Urological histopathology content will be added on request.`,
        },
      ],
    },
    {
      id: "renal_path",
      name: "Renal Pathology",
      icon: "🫘",
      topics: [
        {
          id: "nephrotic_syndrome",
          name: "Nephrotic Syndrome",
          content: `## Classification of renal disease by site of pathology

Renal pathology can be classified by the part of the nephron primarily affected:

- **Glomerulus**: nephrotic syndrome (primary or secondary causes), nephritic syndrome.
- **Tubules and interstitium**: acute tubular necrosis, tubulointerstitial nephritis.
- **Blood vessels**: thrombotic microangiopathies (haemolytic uraemic syndrome, thrombotic thrombocytopenic purpura).

## Nephrotic syndrome — definition

Nephrotic syndrome is not a single disease but a constellation of features that can be caused by several glomerular diseases. It is defined by the **diagnostic triad**:
1. **Proteinuria** greater than 3 g per 24 hours, or a urine protein-to-creatinine ratio greater than 300 mg/mmol.
2. **Hypoalbuminaemia** with serum albumin less than 30 g/L.
3. **Oedema** (often periorbital in children, peripheral in adults).

Other features include hyperlipidaemia (the liver compensates for protein loss by producing more lipoproteins) and an increased risk of thrombotic disease (due to urinary loss of antithrombin III, protein C, and protein S).

Classical exam clues include "swelling, classically periorbital in children" and "frothy urine" (the foam is due to proteinuria reducing the surface tension of urine).

## Primary causes of nephrotic syndrome

| Feature | Minimal Change Disease | Membranous Glomerular Disease | Focal Segmental Glomerulosclerosis (FSGS) |
| --- | --- | --- | --- |
| **Epidemiology** | Most common in children (75% of paediatric nephrotic syndrome); a second peak in elderly adults | Common in adults (around 30%) | Common in adults (around 30%); most common in Afro-Caribbean people |
| **Light microscopy** | No changes | Diffuse glomerular basement membrane (GBM) thickening | Focal and segmental glomerular consolidation, scarring, and hyalinosis |
| **Electron microscopy** | Loss of podocyte foot processes (effacement) | Loss of podocyte foot processes; subepithelial deposits with basement membrane projections — the "**spikey appearance**" | Loss of podocyte foot processes |
| **Immunofluorescence** | No immune deposits | Immune complex deposits along the entire GBM | No immune deposits |
| **Response to steroids** | 90% respond | Poor response | Around 50% respond |
| **Prognosis** | Less than 5% progress to end-stage renal failure | 40% reach end-stage renal failure over 2-20 years | 50% reach end-stage renal failure over 10 years |
| **Associations / triggers** | Recent allergic reaction; eczema, asthma | May be primary (around 75% have antibodies against **phospholipase A2 receptor (anti-PLA2R)**) or secondary to systemic lupus erythematosus, infections (hepatitis B), drugs, malignancy | Primary, or secondary to obesity, HIV, drugs (lithium, heroin), lymphoma |
| **Management** | Steroids first-line; ciclosporin second-line | Steroids; ACE inhibitor or angiotensin receptor blocker (ARB) to control blood pressure; immunosuppression for high-risk disease | Steroids; ACE inhibitor or ARB; calcineurin inhibitors second-line |

### Minimal change disease

The classic paediatric nephrotic syndrome. Light microscopy is unremarkable — the disease is "minimal" in appearance, hence the name. The hallmark on electron microscopy is podocyte foot process effacement. There are no immune deposits, so immunofluorescence is negative. It is highly steroid-responsive (around 90% of children respond), but relapses are common.

### Membranous glomerular disease

The commonest cause of primary nephrotic syndrome in adults. Light microscopy shows diffuse GBM thickening, and electron microscopy reveals subepithelial immune complex deposits with intervening "spikes" of new GBM material. Around 75% of primary cases have circulating antibodies against the **phospholipase A2 receptor (anti-PLA2R)** on podocytes. Secondary causes include hepatitis B, systemic lupus erythematosus, drugs (penicillamine, gold), and malignancies (especially solid tumours in older patients — always investigate for malignancy in adults presenting with membranous nephropathy).

### Focal segmental glomerulosclerosis (FSGS)

Affects only some glomeruli (focal) and only part of those affected glomeruli (segmental). It is the commonest cause of nephrotic syndrome in Afro-Caribbean adults. Secondary causes include obesity, HIV (especially the collapsing variant), heroin, lithium, and lymphoma.

## Secondary causes of nephrotic syndrome

| Feature | Diabetic nephropathy | Amyloid nephropathy |
| --- | --- | --- |
| **Histology** | Diffuse GBM thickening; mesangial matrix expansion; **Kimmelstiel-Wilson nodules** (mesangial nodules) | **Apple-green birefringence under polarised light on Congo red staining** |
| **Other features** | Classically affects Asian populations more severely; first manifests as microalbuminuria; concurrent retinopathy and neuropathy support diagnosis | AA (acute phase protein) amyloidosis is associated with chronic inflammation (rheumatoid arthritis, chronic infections such as TB); AL (light chain) amyloidosis most often arises from multiple myeloma; clinical clues include macroglossia, heart failure, and hepatomegaly |

### Diabetic nephropathy stages

1. Hyperfiltration (raised glomerular filtration rate, GFR).
2. **Microalbuminuria** (urinary albumin 30-300 mg per 24 hours; the earliest detectable abnormality).
3. Overt proteinuria (>300 mg per 24 hours).
4. Declining GFR and approaching end-stage renal failure.

ACE inhibitors or ARBs are nephroprotective at all stages. SGLT2 inhibitors (dapagliflozin, empagliflozin) further reduce progression in diabetic kidney disease.

## Diagnostic workup of nephrotic syndrome

- Urine dipstick: proteinuria, **without significant haematuria** (small amounts of haematuria can occur but are not prominent).
- Urine protein-to-creatinine ratio greater than 300 mg/mmol.
- Serum albumin: low.
- Total cholesterol: high.
- Serum immunoglobulins: low (lost in the urine).
- **Renal biopsy** is the diagnostic investigation of choice in adults; it is usually deferred in children, where minimal change disease is so likely that an empirical steroid trial is often given first.

## Complications of nephrotic syndrome

- **Thromboembolism** — deep vein thrombosis, pulmonary embolism, **renal vein thrombosis** (loss of antithrombin III in the urine).
- Infection — loss of immunoglobulins; encapsulated organisms (Streptococcus pneumoniae) are a particular risk.
- Hyperlipidaemia and accelerated atherosclerosis.
- Fluid overload and pulmonary oedema.`,
        },
        {
          id: "nephritic_syndrome",
          name: "Nephritic Syndrome",
          content: `## Definition

Nephritic syndrome is the clinical manifestation of glomerular inflammation (i.e. glomerulonephritis). The features can be remembered with the mnemonic **PHAROH**:

- **P**roteinuria (less marked than in nephrotic syndrome)
- **H**aematuria (often "**coke-coloured**" or smoky urine)
- **A**zotaemia (raised urea and creatinine)
- **R**ed cell casts in the urine — formed when red blood cells clump together in tubules
- **O**liguria
- **H**ypertension

## Acute post-infectious (post-streptococcal) glomerulonephritis

- Occurs **1 to 3 weeks** after a streptococcal throat infection or impetigo (usually Lancefield Group A α-haemolytic streptococcus, **Streptococcus pyogenes**).
- Glomerular damage is thought to be due to immune complex deposition.
- Clinical features: haematuria with red cell casts, proteinuria, oedema, hypertension.
- Bloods: raised antistreptolysin O titre (ASOT); **low C3** (consumed by immune complexes).
- Biopsy:
  - Light microscopy: increased glomerular cellularity (proliferation of mesangial cells).
  - Immunofluorescence: granular deposits of IgG and C3 along the GBM.
  - Electron microscopy: subepithelial "**humps**" of immune complex.
- Management is supportive — most children recover fully; adults occasionally progress to chronic kidney disease.

## IgA nephropathy (Berger disease)

- The **commonest glomerulonephritis worldwide**.
- More common in patients of East and South Asian descent.
- Caused by deposition of IgA immune complexes in the glomeruli.
- Presents **1 to 2 days** after an upper respiratory tract infection (note: this is faster than acute post-infectious GN, which presents 1-3 weeks after). The classical exam clue is frank haematuria within 1-2 days of a sore throat.
- Main symptoms: persistent or recurrent frank haematuria, or asymptomatic microscopic haematuria. Other nephritic features are usually mild.
- May present alongside an associated vasculitic rash.
- Can progress to end-stage renal failure.
- Bloods: raised serum IgA in around 50% (not specific).
- Biopsy: immunofluorescence shows granular deposition of **IgA and C3 in the mesangium**.
- **Rule of thirds**: one-third asymptomatic, one-third develop chronic kidney disease, one-third develop progressive disease requiring dialysis or transplantation.
- Management: supportive; ACE inhibitors or ARBs for proteinuria; immunosuppression for severe disease.

## Henoch-Schönlein purpura (IgA vasculitis)

- An IgA-mediated systemic small-vessel vasculitis, considered the systemic counterpart of IgA nephropathy.
- Predominantly affects children aged 3-15 years.
- Often follows a recent upper respiratory tract infection.
- Classical tetrad:
  - Purpuric rash on extensor surfaces of the legs and buttocks.
  - Abdominal pain (with intussusception risk).
  - Arthralgia or arthritis.
  - IgA glomerulonephritis (haematuria, proteinuria).
- Usually self-limiting. Renal involvement may rarely progress to chronic disease.

## Rapidly progressive (crescentic) glomerulonephritis

- The most aggressive form of glomerulonephritis — can cause end-stage renal failure within weeks.
- Presents as nephritic syndrome, but with prominent oliguria and rapidly worsening renal function.
- Defined histologically by the presence of **crescents** in the glomeruli — proliferation of macrophages and parietal epithelial cells in Bowman's space, pushing the glomerulus to one side.

### Classification by immunological mechanism

| | **Type 1 (Anti-GBM)** | **Type 2 (Immune complex)** | **Type 3 (Pauci-immune)** |
| --- | --- | --- | --- |
| Pathogenesis | Anti-GBM antibody against the alpha-3 chain of type IV collagen (COL4-A3) | Immune complex deposition | Pauci-immune (no anti-GBM antibodies and no significant immune complex deposits) |
| Causes | **Goodpasture's syndrome**; HLA-DRB1 association | Systemic lupus erythematosus, IgA nephropathy, post-infectious GN, Henoch-Schönlein purpura, Alport's syndrome | cANCA: **granulomatosis with polyangiitis** (Wegener's); pANCA: **microscopic polyangiitis**, eosinophilic granulomatosis with polyangiitis (Churg-Strauss) |
| Light microscopy | Crescents | Crescents | Crescents |
| Immunofluorescence | **Linear** deposition of IgG along the GBM | **Granular ("lumpy-bumpy")** IgG deposition along the GBM and mesangium | Lack of (or scanty) immune deposits |
| Additional organ involvement | Lungs — pulmonary haemorrhage (Goodpasture's) | Often limited (except in SLE) | Vasculitis, particularly cutaneous rashes and pulmonary haemorrhage |

### Treatment of rapidly progressive GN

- High-dose corticosteroids and cyclophosphamide.
- **Plasma exchange** for anti-GBM disease (Goodpasture's) and severe ANCA-associated disease.
- Rituximab is increasingly used as an alternative to cyclophosphamide for ANCA vasculitis.

## Goodpasture's syndrome

- Anti-GBM antibodies against the alpha-3 chain of type IV collagen (COL4-A3), present in both glomerular and pulmonary alveolar basement membrane.
- Triad of nephritic syndrome, **pulmonary haemorrhage**, and circulating anti-GBM antibodies.
- Linear IgG deposition along the GBM on immunofluorescence is pathognomonic.
- Treatment: corticosteroids, cyclophosphamide, and **plasma exchange** to remove the offending antibody.

## Hereditary nephritis (Alport's syndrome)

- A hereditary glomerular disease caused by mutations in **type IV collagen**, most often in the alpha-5 chain.
- **X-linked** in around 85% of cases (hence male predominance); autosomal recessive forms are rarer.
- Classical triad: nephritic syndrome + **sensorineural deafness** + ocular abnormalities (anterior lenticonus, cataracts).
- Presents at age 5 to 20 years with nephritic syndrome, progressing to end-stage renal failure in males.
- Renal transplantation can rarely be complicated by anti-GBM antibody formation against the previously absent collagen chain (a Goodpasture-like syndrome in the transplanted kidney).

## Thin basement membrane disease (benign familial haematuria)

- Diffuse thinning of the GBM, caused by mutations in the alpha-4 chain of type IV collagen.
- **Autosomal dominant**.
- Common — prevalence around 5% of the population.
- Usually asymptomatic and incidentally discovered as microscopic haematuria.
- Renal function is normally preserved.
- Excellent prognosis — does not usually progress.

## Asymptomatic haematuria — differential diagnosis

If asymptomatic haematuria appears in an exam question, the differentials include:
1. **Thin basement membrane disease** (benign familial haematuria).
2. **IgA nephropathy** (Berger disease).
3. **Alport's syndrome**.

IgA nephropathy and thin basement membrane disease are more common causes of asymptomatic haematuria than of full nephritic syndrome. Distinguishing between them clinically can be difficult, but useful pointers are:
- IgA nephropathy is more likely to cause frank (visible) haematuria.
- IgA nephropathy is more likely to cause a rise in creatinine.
- IgA nephropathy is slightly more common in patients of Asian descent.
- Definitive distinction usually requires renal biopsy.`,
        },
        {
          id: "atn_tin",
          name: "Acute Tubular Necrosis & Tubulointerstitial Nephritis",
          content: `## Acute tubular injury (ATI) / acute tubular necrosis (ATN)

Acute tubular necrosis is the **most common cause of acute renal failure**.

### Pathophysiology

Damage to tubular epithelial cells causes them to shed and form casts that block the tubules. Reduced tubular flow increases haemodynamic pressure within the nephron, which reduces the pressure gradient across the GBM and produces acute renal failure. Tubuloglomerular feedback then further reduces blood supply to the kidneys.

A useful exam clue: a patient whose hypovolaemia has been corrected but who has persistent acute renal failure has likely developed established ATN (the pre-renal cause has resolved but the resulting tubular damage remains).

### Causes

- **Hypovolaemia**: any pre-renal cause of acute renal failure (haemorrhage, sepsis, dehydration, burns, severe heart failure) producing nephron ischaemia.
- **Nephrotoxins**:
  - Drugs: aminoglycosides (gentamicin), non-steroidal anti-inflammatory drugs (NSAIDs), iodinated radiographic contrast agents, amphotericin B, cisplatin.
  - Endogenous toxins: **myoglobin** (from rhabdomyolysis), free haemoglobin (intravascular haemolysis), uric acid (tumour lysis syndrome), light chains (myeloma).
  - Heavy metals: lead, mercury, cadmium.

### Histopathology

Necrosis of short segments of the tubular epithelium, with sloughing of tubular cells into the lumen. Granular ("**muddy brown**") casts of tubular epithelial cells are characteristic on urine microscopy.

### Clinical course

ATN is potentially reversible if the underlying insult is removed. Patients typically pass through three phases:
1. **Initiation phase**: the insult occurs.
2. **Maintenance phase**: oliguria with rising creatinine, lasting days to weeks. Watch for hyperkalaemia, fluid overload, and acidosis.
3. **Recovery phase**: polyuria as tubules regenerate, but concentrating ability lags. Risk of hypokalaemia and dehydration.

### Treatment

- Treat the underlying cause.
- Stop nephrotoxic drugs.
- Supportive care with fluid balance, treatment of hyperkalaemia, and renal replacement therapy if required.

## Tubulointerstitial nephritis

A group of renal inflammatory disorders that involve the tubules and interstitium.

### Acute pyelonephritis

- Bacterial infection of the kidney, usually arising from ascending infection through the urinary tract.
- The most common organism is **Escherichia coli**.
- Other common organisms: Klebsiella, Proteus, Enterococcus, Pseudomonas, Staphylococcus saprophyticus.
- Presentation: fever, chills, sweats, flank pain, renal angle tenderness, and leukocytosis. Frequency, dysuria, and haematuria may also be present.
- Urine microscopy: **leukocyte (white cell) casts** in the urine are characteristic and distinguish from lower urinary tract infection.
- Investigations: urine culture; blood cultures if systemically unwell; ultrasound or CT urography to look for obstruction or abscess.
- Treatment: intravenous broad-spectrum antibiotics (typically co-amoxiclav and gentamicin per local guidelines), then oral switch when clinically improved.

### Chronic pyelonephritis and reflux nephropathy

- Chronic inflammation and scarring of the renal parenchyma caused by recurrent or persistent bacterial infection.
- Underlying causes:
  - **Chronic obstruction**: posterior urethral valves, renal calculi, prostatic enlargement.
  - **Vesicoureteric reflux** (reflux nephropathy): retrograde flow of urine from bladder to kidney during voiding. Usually congenital, identified in childhood.
- Histology: tubular atrophy, interstitial fibrosis, and scarring (especially at the renal poles in reflux nephropathy because of compound papillae at these sites).
- Clinical features: recurrent urinary tract infection, hypertension, slowly progressive chronic kidney disease.

### Acute interstitial nephritis (AIN)

- A **hypersensitivity reaction**, usually to a drug.
- Common offending drugs: **antibiotics** (especially beta-lactams, sulphonamides), **NSAIDs**, **proton pump inhibitors**, diuretics, allopurinol.
- Usually begins **days to weeks after drug exposure**.
- Classical presentation: **fever, skin rash, eosinophilia, and renal impairment** (the classical "drug reaction" tetrad).
- Histology: **inflammatory infiltrate** with tubular injury; **eosinophils** are characteristic; sometimes granulomas.
- Investigations: peripheral eosinophilia; urine microscopy may show **white cell casts and eosinophiluria**; renal biopsy is diagnostic.
- Treatment: stop the offending drug. Corticosteroids for severe cases or where renal function does not recover after withdrawal of the precipitant.

### Chronic interstitial nephritis / analgesic nephropathy

- Seen in elderly patients with long-term consumption of analgesics, especially NSAIDs and historical combination preparations containing phenacetin (now banned). Paracetamol may also contribute.
- Symptoms appear late: hypertension, anaemia, proteinuria, and haematuria.
- Imaging may show papillary necrosis, with sloughed papillae appearing as filling defects on intravenous urography.
- Increased risk of urothelial transitional cell carcinoma (especially with phenacetin).
- Treatment: stop offending agents; supportive care.`,
        },
        {
          id: "thrombotic_microangiopathies",
          name: "Thrombotic Microangiopathies (HUS & TTP)",
          content: `## Definition

Thrombotic microangiopathies are a group of disorders characterised by:
- **Microangiopathic haemolytic anaemia (MAHA)**: mechanical destruction of red blood cells in narrowed vessels, producing **schistocytes** (fragmented red cells) on the blood film.
- **Thrombocytopenia**: platelets are consumed in widespread microthrombi.
- **Microvascular thrombosis** with end-organ ischaemia.

The two classical syndromes are haemolytic uraemic syndrome (HUS) and thrombotic thrombocytopenic purpura (TTP). They share a similar appearance but have different pathogenesis and organ predilection.

## Comparison of HUS and TTP

| Feature | **Haemolytic Uraemic Syndrome (HUS)** | **Thrombotic Thrombocytopenic Purpura (TTP)** |
| --- | --- | --- |
| Typical age | Usually affects **children** | Usually affects **adults** |
| Clinical features | **Triad**: MAHA + thrombocytopenia + acute kidney injury | **Pentad**: MAHA + thrombocytopenia + acute kidney injury (often less severe than in HUS) + **fever** + **neurological symptoms** (confusion, seizures, headache) |
| Pathogenesis | Most often due to **Shiga-like toxin** from **Escherichia coli O157:H7**, typically following undercooked beef consumption or contact at petting zoos. The toxin damages glomerular endothelium. **Atypical HUS** (non-diarrhoea-associated) is due to dysregulation of the alternative complement pathway and may be familial | Genetic or acquired deficiency of **ADAMTS13**, the protease that normally cleaves von Willebrand factor (vWF) multimers. Without it, ultra-large vWF multimers persist and bind platelets, forming microthrombi |
| Distribution of thrombi | Confined predominantly to the **kidneys** | Throughout the circulation, especially in the **central nervous system** |
| Renal involvement | **Prominent** | Usually less severe |
| Neurological involvement | Less common | **Prominent** — may include headache, altered consciousness, seizures, and coma |

## Shared features and investigations

- Reduced haemoglobin and reduced platelet count.
- Signs of haemolysis: raised unconjugated bilirubin, raised reticulocytes, raised lactate dehydrogenase, low haptoglobin.
- **Schistocytes** (fragmented red blood cells) on the peripheral blood film, formed as red cells are sheared as they pass through microthrombi.
- **Coombs (direct antiglobulin) test negative** — distinguishes from autoimmune haemolytic anaemia.
- Reduced platelet count produces bleeding (petechiae, haematemesis, melaena, mucosal bleeding).

## Management

### Thrombotic thrombocytopenic purpura
- This is a haematological emergency.
- **Plasma exchange** (replaces ADAMTS13 and removes auto-antibodies) — the cornerstone of treatment.
- Corticosteroids and rituximab.
- **Caplacizumab** (anti-vWF nanobody) is a newer agent that reduces platelet aggregation.
- **Avoid platelet transfusion** unless there is life-threatening bleeding — adding platelets fuels microthrombus formation and can worsen outcomes.

### Haemolytic uraemic syndrome
- Supportive care: fluids, blood pressure control, dialysis if required.
- Plasma exchange in severe cases.
- **Eculizumab** (anti-complement C5 monoclonal antibody) for atypical HUS or severe typical HUS.
- **Avoid antibiotics** in Shiga-toxin HUS — they may worsen toxin release from dying bacteria and worsen outcomes.
- Avoid platelet transfusion unless there is life-threatening bleeding.

## Other causes of thrombotic microangiopathy

- **Disseminated intravascular coagulation (DIC)** — distinguished by abnormal clotting screen with a raised PT, raised APTT, and low fibrinogen.
- **HELLP syndrome** in pregnancy.
- Drug-induced TMA: ciclosporin, tacrolimus, mitomycin C, gemcitabine, ticlopidine.
- Malignant hypertension.
- Connective tissue disease (especially scleroderma renal crisis).
- Bone marrow transplantation.`,
        },
        {
          id: "acute_renal_failure",
          name: "Acute Renal Failure / Acute Kidney Injury",
          content: `## Definition

Acute renal failure (also called acute kidney injury, AKI) is a rapid loss of renal function manifesting as a rise in serum creatinine and urea, and reduction in urine output.

The **KDIGO criteria** define AKI as any of:
- A rise in serum creatinine of at least 26 µmol/L within 48 hours.
- A rise in serum creatinine to at least 1.5 times baseline within the previous 7 days.
- Urine output less than 0.5 mL per kilogram per hour for more than 6 hours.

Note that prostatic and bladder pathology can cause low urine output, and this must always be considered.

## Classification by site

### Pre-renal (the most common category)

Hypoperfusion of the kidney with no structural abnormality:
- Hypovolaemia: haemorrhage, severe diarrhoea or vomiting, burns, dehydration.
- Sepsis (vasodilatation and capillary leak).
- Heart failure (cardiogenic).
- Renal artery stenosis.
- Drugs that disrupt renal autoregulation: NSAIDs (constrict the afferent arteriole), ACE inhibitors and ARBs (dilate the efferent arteriole).

Pre-renal AKI typically responds to volume replacement. If the ischaemia is prolonged, it can progress to acute tubular necrosis (an intrinsic AKI).

### Intrinsic renal

Pathology within the kidney itself:
- **Acute tubular necrosis (ATN)** — the most common intrinsic cause.
- Acute glomerulonephritis (rapidly progressive GN, ANCA-associated vasculitis, anti-GBM disease).
- Acute interstitial nephritis (drug hypersensitivity).
- Thrombotic microangiopathy (HUS, TTP).
- Vascular: large-vessel disease (renal artery thrombosis), small-vessel disease (vasculitis).

### Post-renal

Obstruction to urinary flow. Glomerular filtration requires a pressure gradient, so obstruction increases tubular pressure and reduces filtration:
- Renal stones.
- Tumours (primary or secondary, including bladder cancer and pelvic malignancies).
- Prostatic hypertrophy.
- Retroperitoneal fibrosis.
- Strictures, blocked catheters.

If unrelieved, post-renal obstruction can lead to permanent renal scarring.

## Complications of AKI

- **Hyperkalaemia** (life-threatening; risk of cardiac arrhythmia).
- Metabolic acidosis.
- Fluid overload and pulmonary oedema.
- Hyponatraemia (from inability to excrete free water).
- Hypocalcaemia, hyperphosphataemia.
- Uraemia: confusion, pericarditis, bleeding tendency.

## Indications for urgent dialysis — mnemonic AEIOU

- **A**cidosis (refractory metabolic acidosis).
- **E**lectrolyte disturbance (refractory hyperkalaemia).
- **I**ntoxication with a dialysable substance such as lithium or aspirin.
- **O**verload (refractory pulmonary oedema).
- **U**raemic encephalopathy or pericarditis.

## Investigation strategy

- Urinalysis: blood, protein, leucocytes (urinary tract infection), red cell casts (glomerulonephritis), white cell casts (pyelonephritis or acute interstitial nephritis), muddy brown casts (acute tubular necrosis).
- Urea and electrolytes, full blood count, C-reactive protein.
- Bone profile (calcium, phosphate), magnesium.
- Urine and serum osmolality.
- ECG (looking for hyperkalaemic changes — tented T waves, widened QRS, sine wave).
- **Renal ultrasound** to exclude obstruction (post-renal AKI).
- Specific investigations as guided by suspected cause: ANCA, anti-GBM antibody, complement (C3, C4), immunoglobulins, autoantibodies, creatine kinase (rhabdomyolysis), urine protein quantification, renal biopsy if intrinsic cause is unclear.

## Management principles

- Identify and treat the cause.
- Optimise volume status (fluid challenge if pre-renal; diuretics if overloaded).
- Stop nephrotoxic drugs (NSAIDs, ACEi/ARB, gentamicin).
- Treat hyperkalaemia (calcium gluconate for cardiac protection, insulin/dextrose to drive potassium into cells, salbutamol nebuliser, dietary potassium restriction).
- Renal replacement therapy if AEIOU criteria are met.
- Treat infection if sepsis is present.

## Distinguishing pre-renal AKI from established ATN

| Marker | Pre-renal AKI | Established ATN |
| --- | --- | --- |
| Urine osmolality | High (>500 mOsm/kg) — kidneys still concentrating | Low (<350 mOsm/kg) — concentrating ability lost |
| Urine sodium | Low (<20 mmol/L) — reabsorbing sodium | High (>40 mmol/L) — failing to reabsorb |
| Fractional excretion of sodium (FeNa) | <1% | >2% |
| Urine specific gravity | High | Low (around 1.010) |
| Response to fluid challenge | Improves | No improvement |`,
        },
        {
          id: "ckd_renal",
          name: "Chronic Kidney Disease",
          content: `## Definition

Chronic kidney disease (CKD) is the progressive, irreversible loss of renal function over a period of at least 3 months. It is characterised by prolonged symptoms and signs of uraemia (fatigue, pruritus, anorexia, and in severe disease, confusion).

## Classification by GFR

| Stage | Description | GFR (mL/min/1.73 m²) |
| --- | --- | --- |
| 1 | Kidney damage with normal renal function (often proteinuria) | Greater than 90 |
| 2 | Mildly impaired | 60-89 |
| 3a | Moderately impaired | 45-59 |
| 3b | Moderately impaired | 30-44 |
| 4 | Severely impaired | 15-29 |
| 5 | Renal failure (generally requires renal replacement therapy) | Less than 15, or on dialysis |

CKD is further classified by the degree of albuminuria (A1, A2, A3) for prognostic purposes; greater albuminuria predicts worse renal and cardiovascular outcomes.

## Common causes (UK)

- **Diabetes mellitus** (around 20%).
- Glomerulonephritis (around 15%).
- Hypertension and vascular disease (around 15%).
- Reflux nephropathy (chronic pyelonephritis) (around 10%).
- **Polycystic kidney disease** (around 9%).
- Obstructive uropathy.
- Drug-induced (long-term NSAID or lithium use).

## Consequences of CKD

The consequences fall into four broad categories:

### 1. Progressive failure of homeostatic function
- Metabolic acidosis (failure to excrete hydrogen ions).
- Hyperkalaemia.
- Fluid retention.

### 2. Progressive failure of hormonal function
- **Anaemia** — the failing kidney cannot produce sufficient erythropoietin.
- **Renal bone disease** — reduced 1-alpha hydroxylation of vitamin D produces hypocalcaemia, which drives a secondary hyperparathyroidism. This results in osteitis fibrosa cystica.
- Reduced production of activated vitamin D (calcitriol).

### 3. Cardiovascular disease
- Vascular calcification and uraemic cardiomyopathy.
- Cardiovascular disease is the **leading cause of mortality** in CKD.

### 4. Uraemia and death in untreated end-stage disease

## Renal bone disease (renal osteodystrophy)

A spectrum of bone abnormalities seen in CKD:
- **Osteitis fibrosa cystica** (high-turnover disease from secondary hyperparathyroidism).
- **Osteomalacia** (low calcium and active vitamin D).
- **Adynamic bone disease** (over-treatment with vitamin D or calcium suppresses parathyroid hormone excessively).
- **Mixed disease**.
- **Osteoporosis**.

Features: bone pain, fractures, vascular calcification, brown tumours.

Treatment: phosphate restriction; phosphate binders (sevelamer, calcium acetate); active vitamin D (alfacalcidol, calcitriol); calcimimetics (cinacalcet) to suppress PTH.

## Management of CKD

### Slowing progression
- Tight blood pressure control with **ACE inhibitor or ARB** (target less than 130/80 mmHg if diabetic or proteinuric).
- Glycaemic control in diabetes.
- **SGLT2 inhibitors** (dapagliflozin, empagliflozin) reduce CKD progression in both diabetic and non-diabetic CKD.
- Smoking cessation; lifestyle measures.
- Address cardiovascular risk factors.

### Treating complications
- Anaemia: iron supplementation (often intravenous); recombinant **erythropoietin** if haemoglobin is less than 100 g/L despite iron repletion.
- Bone disease: phosphate binders, active vitamin D, calcimimetics.
- Acidosis: oral sodium bicarbonate.
- Hyperkalaemia: dietary advice; potassium binders (patiromer, sodium zirconium cyclosilicate).
- Hyperlipidaemia: statin therapy (NICE recommends atorvastatin 20 mg in CKD).

### Renal replacement therapy
- **Haemodialysis**: 3-4 times per week via an arteriovenous fistula (preferred for long-term access) or a tunnelled central catheter.
- **Peritoneal dialysis**: home-based; uses the peritoneum as the dialysis membrane via a Tenckhoff catheter. Risk of peritonitis.
- **Renal transplantation**: the only definitive treatment, with the best long-term outcomes; lifelong immunosuppression is required.`,
        },
        {
          id: "apkd",
          name: "Adult Polycystic Kidney Disease",
          content: `## Background

Adult polycystic kidney disease (APKD) is part of a heterogeneous group of disorders characterised by **renal cysts** and numerous **systemic extra-renal manifestations**. It is the most common inherited kidney disease.

## Genetics and inheritance

- **Autosomal dominant** inheritance.
- 85% of cases are due to mutations in **PKD1** on chromosome 16, encoding **polycystin-1** — earlier onset and faster progression.
- 15% of cases are due to mutations in **PKD2** on chromosome 4, encoding **polycystin-2** — milder, later onset.
- Accounts for approximately 10% of all cases of CKD; two-thirds of patients eventually require renal replacement therapy.

> The autosomal **recessive** form (ARPKD) presents in infancy and is much rarer.

## Pathology

- Bilateral, large, multi-cystic kidneys with progressive destruction of renal parenchyma.
- Cysts arise from any segment of the nephron.
- Liver cysts (especially in PKD1).
- Saccular ("**berry**") cerebral aneurysms in around 10% — risk of subarachnoid haemorrhage and hypertension-related complications.

## Clinical features — mnemonic MISHAPES

- **M** — abdominal **M**ass (palpable enlarged kidneys).
- **I** — **I**nfected cysts and **i**ncreased blood pressure.
- **S** — **S**tones (renal calculi).
- **H** — **H**aematuria.
- **A** — **A**neurysms (berry aneurysms in the circle of Willis).
- **P** — **P**olyuria and nocturia (impaired concentrating ability).
- **E** — **E**xtra-renal cysts (liver, ovaries, pancreas, seminal vesicles).
- **S** — **S**ystolic murmur (mitral valve prolapse, present in around 25%).

## Diagnosis

Ultrasound of the kidneys is the standard diagnostic test. Diagnostic criteria are age-specific:
- **Aged 15-39**: 3 or more cysts (unilateral or bilateral).
- **Aged 40-59**: 2 or more cysts in each kidney.
- **Aged 60 or older**: 4 or more cysts in each kidney.

Genetic testing is reserved for cases of diagnostic uncertainty.

## Management

- Blood pressure control with ACE inhibitors or ARBs.
- Treatment of urinary tract infections — penetration of cyst walls is challenging, so fluoroquinolones are often preferred.
- Pain control.
- **Tolvaptan** (a vasopressin V2 receptor antagonist) slows cyst growth and disease progression in selected patients with rapidly progressive disease.
- Screening for cerebral aneurysms in patients with a family history of subarachnoid haemorrhage.
- Renal replacement therapy is the eventual mainstay; the patient will usually require transplantation.

## Differential diagnosis of bilateral cystic kidneys

- **APKD** (autosomal dominant).
- **ARPKD** (autosomal recessive; presents in infancy).
- **Tuberous sclerosis** (autosomal dominant; renal angiomyolipomas plus cysts; cutaneous and CNS features).
- **Von Hippel-Lindau disease** (autosomal dominant; renal cysts and clear cell renal cell carcinoma; CNS haemangioblastomas; phaeochromocytoma).
- Acquired cystic kidney disease (in long-term dialysis patients).`,
        },
        {
          id: "lupus_nephritis",
          name: "Lupus Nephritis",
          content: `## Background

Lupus nephritis is glomerular involvement in **systemic lupus erythematosus (SLE)**. Renal involvement occurs in around 50% of SLE patients and is a major cause of morbidity and mortality.

## Mechanism

The fundamental lesion is **immune complex deposition** in the glomeruli (Type III hypersensitivity). Depending on the site and intensity of immune complex deposition, the clinical picture varies from isolated urinary abnormalities to acute renal failure, nephrotic syndrome, or progressive chronic renal failure.

## Renal histology

The classical histological features are:
- **Wire-loop capillaries**: thickened glomerular capillary loops due to subendothelial immune complex deposition.
- **"Lumpy-bumpy" granular deposition** of immune complexes and complement on the GBM on immunofluorescence.

## ISN/RPS classification (Classes 1 to 6)

| Class | Description | Histological features |
| --- | --- | --- |
| **Class 1** | Minimal mesangial lupus nephritis | Looks near-normal on light microscopy; mesangial immune deposits visible only on immunofluorescence or electron microscopy |
| **Class 2** | Mesangial proliferative lupus nephritis | Mesangial cell proliferation; immune deposits limited to mesangium |
| **Class 3** | Focal lupus nephritis | Focal subendothelial deposits — affects less than 50% of glomeruli; often presents with nephritic features |
| **Class 4** | Diffuse lupus nephritis | Diffuse subendothelial deposits — affects more than 50% of glomeruli; the **most common and most severe** form, often presenting with nephritic syndrome and progressing to end-stage renal failure if untreated |
| **Class 5** | Membranous lupus nephritis | Subepithelial immune deposits (resembles primary membranous nephropathy); typically presents with nephrotic syndrome |
| **Class 6** | Advanced sclerosis | More than 90% glomerulosclerosis; end-stage disease |

## Clinical features

- Proteinuria (may reach nephrotic range, especially in Class 5).
- Haematuria with red cell casts (especially in Classes 3 and 4).
- Hypertension.
- Falling glomerular filtration rate.
- Active urinary sediment.

## Investigations

- Urinalysis, urine protein-to-creatinine ratio, urine sediment microscopy.
- Renal function and electrolytes.
- Complement (C3 and **C4** are typically reduced; C4 is often the first to fall).
- **Anti-dsDNA antibodies** correlate with disease activity.
- Anti-Sm antibodies (specific but not sensitive).
- Renal biopsy is required to determine class and guide treatment.

## Management

- **Hydroxychloroquine** for all SLE patients (reduces lupus activity and the frequency of renal flares).
- Class 1 and 2: usually no specific renal therapy required; treat extra-renal SLE.
- Class 3 and 4: **induction** with high-dose corticosteroids plus **mycophenolate mofetil** or **cyclophosphamide**; then **maintenance** with mycophenolate or azathioprine.
- Class 5: corticosteroids plus mycophenolate or a calcineurin inhibitor.
- Class 6: supportive care; renal replacement therapy.
- Adjunctive: ACE inhibitors or ARBs for proteinuria.
- Newer agents: **belimumab** (anti-BLyS monoclonal antibody) and **anifrolumab** (anti-IFN-α receptor) for refractory disease.`,
        },
        {
          id: "rcc",
          name: "Renal Cell Carcinoma",
          content: `## Background

Renal cell carcinoma (RCC) is the most common primary malignancy of the kidney in adults, accounting for approximately 90% of all renal malignancies. It arises from the renal tubular epithelium.

## Histological subtypes

| Subtype | Frequency | Origin | Notes |
| --- | --- | --- | --- |
| **Clear cell carcinoma** | 70-80% | Proximal tubule epithelium | Cells have clear cytoplasm due to glycogen and lipid content; well differentiated; **VHL gene mutation** is common (sporadic and in von Hippel-Lindau syndrome) |
| **Papillary carcinoma** | 10-15% | Proximal tubule epithelium | The commonest type associated with **dialysis-related cystic disease** of the kidney; better prognosis than clear cell carcinoma |
| **Chromophobe carcinoma** | 5% | Distal tubule | Pale, eosinophilic cells; better prognosis |
| **Collecting duct carcinoma** | Less than 1% | Collecting duct | Aggressive, with poor prognosis |

## Risk factors

- **Smoking** (the strongest modifiable risk factor).
- Obesity.
- Hypertension.
- Unopposed oestrogen.
- Heavy metal exposure (cadmium, asbestos).
- Chronic kidney disease, especially long-term dialysis.
- **Von Hippel-Lindau disease** (autosomal dominant; multiple bilateral RCCs, CNS haemangioblastomas, phaeochromocytoma).
- **Tuberous sclerosis** (renal angiomyolipomas with risk of RCC).

## Clinical features

The classical triad (now an uncommon presentation, since most are detected incidentally on imaging):
- **Costovertebral or flank pain**.
- **Palpable abdominal mass**.
- **Haematuria**.

Other features:
- Constitutional symptoms (weight loss, fever, fatigue) — sometimes due to paraneoplastic syndromes.
- **Left-sided varicocele** in men (left renal vein involvement causing testicular venous obstruction). Right-sided varicocele can also occur but is rarer.
- Anaemia of chronic disease, or polycythaemia (paraneoplastic erythropoietin secretion).

## Paraneoplastic syndromes in RCC

- **Polycythaemia** (ectopic erythropoietin).
- **Hypercalcaemia** (ectopic parathyroid hormone-related peptide, PTHrP).
- **Hypertension** (ectopic renin secretion).
- **Cushing's syndrome** (ectopic ACTH — rare).
- AA amyloidosis (chronic inflammation).
- Stauffer syndrome (cholestatic jaundice without liver metastases).

## Investigations

- Urine dipstick (haematuria) and urine cytology.
- **Contrast-enhanced CT abdomen** is the imaging investigation of choice. It shows an enhancing renal mass, with assessment of local invasion (renal vein, inferior vena cava), lymphadenopathy, and distant metastases.
- MRI for assessment of inferior vena cava tumour thrombus.
- Routine bloods including renal function, calcium, full blood count, lactate dehydrogenase.
- Staging chest CT to look for pulmonary metastases.
- Renal mass biopsy is increasingly used in selected cases (small renal masses, atypical features).

## Staging

The TNM staging system applies. Stages 1 and 2 are organ-confined; stages 3 and 4 represent local extension or distant disease.

## Management

- **Surgical resection** is the mainstay for localised disease:
  - Partial nephrectomy if the tumour is small and the contralateral kidney is healthy.
  - Radical nephrectomy for larger tumours.
- **Targeted therapy** for metastatic disease:
  - Tyrosine kinase inhibitors (sunitinib, pazopanib, axitinib) targeting VEGF receptors.
  - mTOR inhibitors (everolimus, temsirolimus).
  - VEGF inhibitors (bevacizumab).
- **Immunotherapy**:
  - Nivolumab (anti-PD-1) plus ipilimumab (anti-CTLA-4) is now first-line for many patients with metastatic clear cell RCC.
  - Combinations of immunotherapy and tyrosine kinase inhibitors are increasingly used.
- RCC is **resistant to conventional chemotherapy and radiotherapy**.

## Common metastatic sites

- **Lung** (cannonball lesions on chest X-ray are characteristic).
- Bone.
- Liver.
- Brain.
- Adrenal glands.

## Important associated syndromes

### Von Hippel-Lindau disease

- Autosomal dominant; mutation in the VHL tumour suppressor gene on chromosome 3.
- Multiple bilateral clear cell RCCs (often presenting at a younger age than sporadic RCC).
- CNS haemangioblastomas (cerebellum, spinal cord, retina).
- Phaeochromocytoma.
- Pancreatic cysts and neuroendocrine tumours.
- Endolymphatic sac tumours.
- Patients require lifelong screening with regular MRI of the brain and abdomen.`,
        },
      ],
    },
    {
      id: "gynae_path",
      name: "Gynaecological Pathology",
      icon: "⚧️",
      topics: [
        {
          id: "_pending_gynae_path",
          name: "(Coming soon)",
          content: `## Pending\n\nThis section is currently empty. Gynaecological histopathology content will be added on request.`,
        },
      ],
    },
    {
      id: "breast_path",
      name: "Breast Pathology",
      icon: "🔬",
      topics: [
        {
          id: "_pending_breast_path",
          name: "(Coming soon)",
          content: `## Pending\n\nThis section is currently empty. Breast histopathology content will be added on request.`,
        },
      ],
    },
    {
      id: "cerebral_path",
      name: "Cerebral Pathology",
      icon: "🧠",
      topics: [
        {
          id: "_pending_cerebral_path",
          name: "(Coming soon)",
          content: `## Pending\n\nThis section is currently empty. Cerebral histopathology content will be added on request.`,
        },
      ],
    },
    {
      id: "vasculitides_path",
      name: "Vasculitides",
      icon: "🩸",
      topics: [
        {
          id: "vasculitides",
          name: "Vasculitides",
          content: `## Large vessel

### Takayasu's arteritis

- Branches of **aortic arch**
- Inflammatory phase: FLAWS
- **Pulseless phase**: claudication, cold hands
- ↑ in Japanese women

### Giant cell (temporal) arteritis

- Elderly, scalp tenderness, **temporal headache, jaw claudication, blurred vision**, non-palpable temporal pulse
- ↑ESR, age >50; overlap with **PMR**
- Investigation: ESR (1st), **temporal artery biopsy** (gold standard — but skip lesions, may miss)
- Histology: **granulomatous transmural inflammation + giant cells + skip lesions**
- **Mx: oral prednisolone IMMEDIATELY** (don't wait for biopsy)

## Medium vessel

### Polyarteritis nodosa (PAN)

- Renal involvement main; spares lungs
- **30% have underlying Hep B**
- **Microaneurysms** on angiography ("**string of pearls / rosary bead**")
- Histology: fibrinoid necrosis + neutrophil infiltrate
- Tx: prednisolone + cyclophosphamide

### Buerger's disease

- **Heavy smoking males <35**
- Inflammation of extremity arteries (tibial, radial)
- **Corkscrew angiogram appearance**
- Pain, ulceration of digits

## Small vessel — ANCA associated

### Granulomatosis with polyangiitis (GPA, formerly Wegener's)

- **cANCA (anti-PR3)**
- Triad:
  - **URT**: sinusitis, epistaxis, **saddle nose**
  - **LRT**: cavitation, pulmonary haemorrhage
  - **Kidneys**: crescentic GN (haematuria, proteinuria)
- Tx: corticosteroids + cyclophosphamide + co-trimoxazole

### Eosinophilic GPA (Churg-Strauss)

- **pANCA (anti-MPO)**
- **Asthma + allergic rhinitis + eosinophilia** → systemic
- Tx: prednisolone + azathioprine/cyclophosphamide

### Microscopic polyangiitis

- **pANCA (anti-MPO)**
- **Pulmonary-renal syndrome**: pulmonary haemorrhage + RPGN

## Small vessel — immune complex

### IgA vasculitis (Henoch-Schönlein purpura)

- IgA-mediated
- Children 3-15 yrs after URTI
- Triad:
  - **Purpuric rash** on extensor lower limbs + buttocks
  - Abdo pain
  - Arthralgia
- → glomerulonephritis (small vessel)`,
        },
      ],
    },
    {
      id: "amyloidosis_path",
      name: "Amyloidosis",
      icon: "🔬",
      topics: [
        {
          id: "amyloidosis",
          name: "Amyloidosis",
          content: `## Background

- Multisystem disorder; abnormal protein folding → **β-pleated sheet** fibrils, resistant to enzymes
- Deposit in tissues → organ dysfunction
- 20+ types; 2 main for MRCP

## AL amyloidosis (primary, **most common**)

- **Deposition of Ig light chains**
- Most associated with **multiple myeloma** (although most don't have MM)
- Monoclonal Ig + free light chains in serum/urine (Bence-Jones) + ↑ BM plasma cells
- Abnormal **κ:λ light chain ratio**

## AA amyloidosis (secondary)

- **Serum amyloid A** = acute-phase protein → builds up with chronic inflammation
- Causes:
  - **Autoimmune (60%)**: RA, ankylosing spondylitis, IBD
  - Chronic infection: TB, osteomyelitis, IVDU skin infections
  - Non-immune: renal cell carcinoma, Hodgkin's

## Haemodialysis-associated

- **β2-microglobulin** deposition
- Long-standing CKD on peritoneal dialysis
- Associated with **carpal tunnel syndrome**

## Familial amyloidosis

- Most common: **Familial Mediterranean Fever** (AR, MEFV) — AA amyloid, predominant renal deposition

## Clinical features

Think: amyloid either constricts the organ or makes it bigger.

- **Kidney**: **nephrotic syndrome (most common presentation)**
- **Heart**: restrictive cardiomyopathy, conduction defects, HF, cardiomegaly
- Liver/spleen: hepatosplenomegaly
- Tongue: **macroglossia (10%)**
- Neuropathy: **carpal tunnel**

## Diagnosis

- **Congo red stain → apple-green birefringence under polarised light** [HIGH YIELD]
- SAP (serum amyloid precursor) scan — Royal Free
- Biopsy of affected organ`,
        },
      ],
    },
    {
      id: "sarcoidosis_path",
      name: "Sarcoidosis",
      icon: "🔬",
      topics: [
        {
          id: "sarcoidosis",
          name: "Sarcoidosis",
          content: `## Background

- Multisystem disease of unknown cause
- **Non-caseating granulomas** in many tissues
- Young adults, F > M, 40-60 yrs
- More severe in Afro-Caribbeans

## Histology

- **Non-caseating granulomas**
- **Schaumann + asteroid bodies** (inclusions of protein and calcium)

## Pulmonary

- Lungs most commonly involved
- **Bilateral hilar lymphadenopathy** (DDx: TB, lymphoma, bronchial Ca)
- Fine nodular shadowing in mid zones
- Insidious dyspnoea, cough, chest pain, night sweats

## Extra-pulmonary

- **Skin**: erythema nodosum, **lupus pernio** (nose), skin nodules
- LNs: painless, rubbery
- Joints: arthritis, bone cysts
- Eyes: **anterior uveitis** (red painful eye), posterior uveitis (vision loss); **uveoparotid fever (Heerfordt's)** = bilateral uveitis + parotid + facial palsy
- Liver/spleen: hepatosplenomegaly
- Blood: leukopenia, anaemia
- **Hypercalcaemia / hypercalciuria** (ectopic 1α-hydroxylase by activated macrophages)
- Heart: dysrhythmias, cardiomyopathy, conduction defects, pericarditis
- CNS involvement
- Constitutional: malaise, fever, weight loss, night sweats

## Diagnosis (of exclusion)

- ↑Ca²⁺, ↑ESR, **↑ACE**
- **Transbronchial biopsy** → non-caseating granuloma
- Spirometry — restrictive

## Treatment

- **Steroids** for symptomatic / pulmonary / hypercalcaemia / eye / CNS / cardiac

## High-yield trio

- Bilateral hilar lymphadenopathy on CXR
- Non-caseating granulomas on histology
- High calcium + high ACE`,
        },
      ],
    },
    {
      id: "ctd_path",
      name: "Connective Tissue Diseases",
      icon: "🧬",
      topics: [
        {
          id: "ctd",
          name: "Connective Tissue Diseases",
          content: `## SLE

- **HLA DR3 (or DR2)**; ↑ in Afro-Caribbean females; type III hypersensitivity
- Autoantibodies: **ANA (95%), anti-dsDNA, anti-Sm**
  - Anti-histone in **drug-induced** (hydralazine, procainamide, isoniazid)
- Diagnosis: 4/11 of **SOAP BRAIN MD**
- Histology:
  - **LE bodies**
  - **Kidney**: "**wire-loop**" glomeruli [BUZZWORD]
  - **CNS**: small-vessel angiopathy
  - **Spleen**: "**onion-skin**" lesions
  - Heart: **Libman-Sacks endocarditis** (sterile)
- Complement consumption: ↓C4 active; ↓C3 + ↓C4 severe
- ↑ ESR, normal CRP

## Limited cutaneous scleroderma (CREST)

- HLA-DR5 / DRw8
- **Anti-centromere**
- Skin involvement DISTAL only (forearms + perioral)
- **C**alcinosis, **R**aynaud's, oe**S**ophageal dysmotility, sclero**D**actyly, **T**elangiectasia
- Rare renal/heart disease
- Late risk: **pulmonary hypertension**
- Histology: ↑ collagen + "**onion-skin**" thickening of arterioles [BUZZWORD]

## Diffuse cutaneous scleroderma

- **Anti-Scl70 (anti-topoisomerase II)**, anti-RNA Pol III, anti-fibrillarin
- F:M 4:1
- Skin involves trunk
- Widespread organ involvement: early heart, GI, renal disease
- Associated with **pulmonary fibrosis**

## Polymyositis / Dermatomyositis

- HLA-DR3 / DR2
- **Anti-Jo1** (tRNA synthetase)
- ↑ CK, LDH, myoglobin; abnormal EMG
- **Definitive Ix: muscle biopsy** — endomysial inflammatory infiltrate + myofibre damage
- Proximal weakness (chair, stairs, hair-combing)
- DM cutaneous features:
  - **Heliotrope rash** with eyelid oedema
  - **Gottron's papules** (raised scaly knuckles)
  - V-sign / shawl rash
  - Facial rash
- Underlying malignancy (paraneoplastic):
  - DM → ovarian, pancreatic, NHL
  - PM → lung, bladder, NHL
- Associated with pulmonary fibrosis

## Sjögren's

- F:M 9:1, late 40s
- **Anti-Ro, anti-La**
- **Xerostomia, keratoconjunctivitis sicca**, dry skin
- **Schirmer test** for tear production
- Parotid / salivary gland enlargement
- Risk of **MALT lymphoma**

## IPEX

- Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked
- Most affected children die <2 years; BMT only cure
- **Eczematous dermatitis, nail dystrophy, autoimmune skin** (alopecia universalis, bullous pemphigoid)

## Coeliac disease

- Failure of tolerance to gluten; **villous atrophy + crypt hyperplasia + intraepithelial lymphocytes**
- HLA-**DQ2 / DQ8** (95%)
- IgA EMA (~95% specific), IgA tTG (~95% specific)
- IgG anti-gliadin most persistent (least specific)
- **Dermatitis herpetiformis** — itchy vesicles on extensor surfaces
- Iron, B12, folate, ADEK, calcium deficiency
- Link with Down syndrome
- **Duodenal biopsy** = gold standard
- Beer + pasta NOT gluten-free; rice + eggs + chips + wine ARE`,
        },
      ],
    },
    {
      id: "neurodegen_path",
      name: "Neurodegenerative Diseases",
      icon: "🧠",
      topics: [
        {
          id: "neurodegenerative",
          name: "Neurodegenerative Diseases",
          content: `## Common pattern

Progressive, irreversible neuronal loss; misfolded protein accumulation (intra- or extracellular).

## Dementia incidence

Alzheimer's > vascular > Lewy body > frontotemporal

## Alzheimer's disease

- Commonest dementia, usually >50 yrs
- **Pathology**:
  - Extracellular **β-amyloid plaques** ("senile plaques")
  - Hyperphosphorylated **tau** → intracellular **neurofibrillary tangles**
  - **Cerebral amyloid angiopathy**
- Imaging: general atrophy, widened sulci, narrowed gyri, enlarged ventricles (worst in temporal/frontal lobes)
- Mx: anti-cholinesterases, glutamate antagonists (symptomatic)

## Vascular dementia

- 2nd most common
- **Step-wise deterioration** [BUZZWORD]
- Multi-infarct
- RFs: atherosclerosis, smoking, DM, HTN

## Lewy body dementia

- Day-to-day fluctuations in cognition
- **Visual hallucinations** — "**little people / animals running around**" [BUZZWORD]
- Spontaneous Parkinsonism, recurrent falls/syncope
- Pathologically indistinguishable from PD
- α-synuclein, ubiquitin

## Frontotemporal dementia (Pick's disease)

- Affects frontal + temporal lobes only
- **Pick bodies** — hyperphosphorylated tau
- Progranulin gene mutations
- Strong FHx, **younger onset (40-60)**
- **Personality change, disinhibition, overeating, emotional blunting**

## Parkinson's disease

- Depletion of dopaminergic neurons in **nigrostriatal pathway** (substantia nigra → striatum)
- **Lewy bodies** (α-synuclein)
- Cardinal — **TRAP**: Tremor, Rigidity, Akinesia, Postural instability

### Parkinson-plus syndromes

- **Lewy body dementia** — fluctuating cognition + hallucinations + early dementia
- **Progressive supranuclear palsy** — tauopathy, **vertical gaze palsy** (especially downgaze), early falls, axial rigidity, dysphagia
- **Corticobasal syndrome** — tauopathy, **alien limb**, unilateral parkinsonism + apraxia
- **Multiple system atrophy** — synucleinopathy; cerebellar (MSA-C) or parkinsonian (MSA-P) with **early autonomic dysfunction** (Shy-Drager)
- **Vascular parkinsonism** — multi-infarct, lower-body parkinsonism, gait instability

## Misfolded proteins by disease

| Disease | Protein |
| --- | --- |
| Alzheimer's | Tau + β-amyloid |
| Lewy body dementia | α-synuclein, ubiquitin |
| Corticobasal degeneration | Tau |
| FTD (Chr 17) / Pick's | Tau |
| Parkinson's | α-synuclein |
| Prion diseases | PrPSC |

## Prion diseases (review)

- Sporadic CJD (80%) — rapid <1 yr decline
- Variant CJD — bovine spongiform encephalopathy
- Iatrogenic CJD — surgery / blood
- Kuru — cannibalism
- Genetic (15%): GSS, **Fatal Familial Insomnia**

All cause spongiform changes + prion deposits.`,
        },
      ],
    },
    {
      id: "metabolic_bone_path",
      name: "Metabolic Bone Diseases",
      icon: "🦴",
      topics: [
        {
          id: "metabolic_bone",
          name: "Metabolic Bone Disease",
          content: `## Comparison

| | Osteoporosis | Osteomalacia / rickets | 1° HyperPTH | Paget's | Renal osteodystrophy |
| --- | --- | --- | --- | --- | --- |
| Aetiology | Age, oestrogen ↓, low BMI, alcohol | Vit D ↓ | Adenoma (80%), MEN | Disorder of bone turnover | CKD; mixed |
| Bone | ↓ mass | ↓ mineralisation | Osteitis fibrosa cystica | Lytic + sclerotic in 3 stages | Mixed |
| Symptoms | Low-impact fractures (NOF, vertebrae, **Colles'**), back pain | Adults: bone pain, proximal weakness; children: bowing tibia, **rachitic rosary**, frontal bossing | **Stones, bones, abdo groans, psychic moans, polyuria** | Bone pain, microfractures, **deafness** (nerve compression), ↑ skull size, **high-output cardiac failure** | Variable |
| Investigations | DEXA T-score < -2.5 (osteopaenia -1 to -2.5) | ↓Ca, ↓PO₄, ↑ALP, ↓vit D, ↑PTH | ↑Ca, ↓PO₄, ↑PTH | **Isolated ↑↑ALP** (everything else normal) | – |

## Osteoporosis

- DEXA: **T-score** vs young adult, **Z-score** vs age-matched
- T < -2.5 = osteoporosis; -1 to -2.5 = osteopenia
- Risk: age, low BMI, smoking, alcohol, steroids, family history
- Tx: bisphosphonates, denosumab, HRT, teriparatide

## Osteomalacia / rickets

- **Vit D deficiency** — diet, sunlight, malabsorption (coeliac), CLD, CKD
- Children: **bowing legs, rachitic rosary, frontal bossing, pigeon chest**
- Adults: bone pain + proximal myopathy
- Looser zones (pseudofractures) on X-ray

## Paget's disease

- Disorder of bone remodelling — **excess osteoclast activity**
- >50 yrs, M = F, Caucasians
- Often asymptomatic; **isolated raised ALP**
- Skull, spine, pelvis, long bones
- Complications: deafness (cranial nerve compression), pathological fracture, **osteosarcoma**, **high-output HF**
- Tx: bisphosphonates`,
        },
      ],
    },
    {
      id: "nonneoplastic_bone_path",
      name: "Non-neoplastic Bone Disease",
      icon: "🦴",
      topics: [
        {
          id: "_pending_nonneoplastic_bone_path",
          name: "(Coming soon)",
          content: `## Pending\n\nThis section is currently empty. Non-neoplastic bone disease content will be added on request.`,
        },
      ],
    },
    {
      id: "neoplastic_bone_path",
      name: "Neoplastic Bone Disease",
      icon: "🦴",
      topics: [
        {
          id: "_pending_neoplastic_bone_path",
          name: "(Coming soon)",
          content: `## Pending\n\nThis section is currently empty. Neoplastic bone disease content will be added on request.`,
        },
      ],
    },
    {
      id: "skin_path",
      name: "Skin Pathology",
      icon: "🩹",
      topics: [
        {
          id: "_pending_skin_path",
          name: "(Coming soon)",
          content: `## Pending\n\nThis section is currently empty. Skin histopathology content will be added on request.`,
        },
      ],
    },
    {
      id: "stains_path",
      name: "Histological Stains",
      icon: "🎨",
      topics: [
        {
          id: "stains",
          name: "Histological Stains Reference",
          content: `## Quick reference

| Stain | Target | Disease |
| --- | --- | --- |
| **Congo red** + **apple-green birefringence** under polarised light | Amyloid | Amyloidosis |
| **Ziehl-Neelsen** (red on blue) | Acid-fast bacilli | TB |
| Auramine-rhodamine (bright yellow) | AFB screening | TB |
| **Fontana** | Melanin | Melanoma |
| **Rhodanine** (golden brown) | Copper | Wilson's disease |
| **Prussian blue / Perl's** | Iron | Haemochromatosis |
| **Cytokeratin** | Epithelial cells | Carcinoma |
| **CD45** | Lymphoid cells | Lymphoma |
| **Gomori's methenamine silver** (saucer-shaped cysts) | – | Pneumocystis jirovecii |
| **Modified Kinyoun acid fast** | – | Cryptosporidium parvum |
| **India ink** (yeast cells with halos) | – | Cryptococcus neoformans |
| **Giemsa** | – | Donovan bodies (Donovanosis), Chlamydia psittaci |
| **Fite** | – | Mycobacterium leprae |

## Buzzword pathology

| Finding | Disease |
| --- | --- |
| **Wire-loop glomeruli** | SLE nephritis |
| **Onion-skin spleen** | SLE |
| **Onion-skin arterioles** | Limited scleroderma |
| **Libman-Sacks endocarditis** | SLE |
| **Reed-Sternberg cells** ("owl-eyed") | Hodgkin's lymphoma |
| **Auer rods** | AML |
| **Smear cells** | CLL |
| **Tear-drop cells** (dacrocytes) | Myelofibrosis |
| **Schistocytes** | MAHA, DIC, HUS, TTP |
| **Spherocytes** | Hereditary spherocytosis, AIHA |
| **Howell-Jolly bodies** | Hyposplenism |
| **Heinz bodies + bite cells** | G6PD deficiency |
| **Rouleaux** | Myeloma |
| **Starry sky** | Burkitt's lymphoma |
| **Psammoma bodies + Orphan Annie eyes** | Papillary thyroid |
| **Owl's eye inclusions** | CMV |
| **Negri bodies** | Rabies |
| **Donovan bodies** | Donovanosis |
| **Pick bodies** | Pick's disease |
| **Lewy bodies** | Parkinson's, LBD |
| **Senile plaques + neurofibrillary tangles** | Alzheimer's |
| **Apple-green birefringence** | Amyloidosis |
| **Caseating granulomas** | TB |
| **Non-caseating granulomas + Schaumann/asteroid bodies** | Sarcoidosis |
| **Crescentic glomerulonephritis** | RPGN (GPA, MPA, Goodpasture's) |
| **Linear IgG on glomerular BM** | Goodpasture's |
| **String of pearls / rosary** on angiography | Polyarteritis nodosa |
| **Corkscrew arteries** | Buerger's disease |
| **Saddle nose** + cANCA | GPA (Wegener's) |`,
        },
      ],
    },
  ],
};
