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

- <134: nausea, vomiting
- <131: confusion
- <125: seizures, non-cardiogenic pulmonary oedema
- <117: coma
- *Chronic asymptomatic in 110s rarely an emergency — correcting too fast is more dangerous*

## Step 1: serum osmolality

| Osmolality | Cause |
| --- | --- |
| **High** | Glucose / mannitol → osmotic dilution |
| **Normal** | **Pseudohyponatraemia** (hyperlipidaemia, paraproteinaemia); drip-arm sample |
| **Low** | True hyponatraemia |

## Step 2: hydration + urinary Na (true hypoNa)

| Volume | UNa | Causes |
| --- | --- | --- |
| **Hypovolaemic** | >20 = renal | Diuretics, Addison's, salt-losing nephropathy |
|  | <20 = non-renal | Vomiting, diarrhoea, sweating, third-space (ascites, burns) |
| **Euvolaemic** | >20 | **SIADH**, severe hypothyroid, glucocorticoid deficiency |
| **Hypervolaemic** | >20 = renal | AKI, CKD |
|  | <20 = non-renal | **HF, cirrhosis**, inappropriate IV fluids |

> Stop diuretics before measuring UNa.

## TURP syndrome

Glycine 1.5% irrigation absorbed via damaged prostate → dilutional hyponatraemia + glycine metabolism.

## Management

- Hypovolaemic: treat cause + slow volume replacement
- Euvolaemic: see SIADH; thyroid/adrenal replacement
- Hypervolaemic: fluid restrict ± diuresis

## Correction speed

**No more than 8-10 mmol/L per 24 h** — else **central pontine myelinolysis** (pseudobulbar palsy, paraparesis, locked-in). ↑ risk: malnourished alcoholics.

Hypertonic 3% saline only for status epilepticus from hyponatraemia, ITU/specialist input.`,
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
  3. **C**ut out — surgery once BP controlled

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
| **3° hyperPTH** | Prolonged 2°, kidney transplant | ↑/N | ↑/↓ | ↑ | ↑/N |
| **HypoPTH** | Post-surgery (commonest), autoimmune, DiGeorge, hypomagnesaemia | ↓ | ↑ | ↓ | ↓/N |
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
          content: `## Lipoproteins (by ↑ density)

Chylomicron < FFA < VLDL < LDL < IDL < HDL

## Key concepts

- **PCSK9** binds LDL receptor → its degradation. Gain-of-function mutation → ↑ LDL. **Evolocumab** = anti-PCSK9.
- Lipoprotein(a) is a CV risk factor; nicotinic acid lowers it.

## Familial dyslipidaemias

- **Familial hypercholesterolaemia** (Type II)
  - AD: **LDLR** (commonest), **apoB**, **PCSK9** mutations
  - Tendon xanthomata, premature CVD
  - Tx: high-intensity statin ± **PCSK9 inhibitor**
- Familial hyperalpha-lipoproteinaemia — CETP deficiency
- Familial type I hypertriglyceridaemia — lipoprotein lipase or apoC-II deficiency
- Tangier disease — HDL deficiency
- Abetalipoproteinaemia — MTP deficiency (acanthocytes!)

## Management of dyslipidaemia

- Lifestyle first
- **Statins** (HMG-CoA reductase inhibitor) — SE myopathy/rhabdomyolysis, fatigue
- Ezetimibe; PCSK9 inhibitors

## Obesity

- Bariatric surgery: BMI >40 (or >35 + comorbidity)
- Orlistat (lipase inhibitor) — SE flatus/diarrhoea
- Rimonabant withdrawn (suicide risk)`,
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
    // Stub sections — to be expanded in subsequent updates
    {
      id: "microbiology",
      name: "Microbiology",
      icon: "🦠",
      topics: [
        {
          id: "_pending_micro",
          name: "(Coming soon)",
          content: `## Pending

Microbiology content (TB, respiratory infections, IE, GI/UTI/CNS infections, antimicrobials, virology, fungal, prion) will be added in the next update.`,
        },
      ],
    },
    {
      id: "immunology",
      name: "Immunology",
      icon: "🛡️",
      topics: [
        {
          id: "_pending_imm",
          name: "(Coming soon)",
          content: `## Pending

Immunology content (innate/adaptive, hypersensitivity I-IV, primary immunodeficiencies, autoimmune/autoinflammatory, transplantation, HIV) will be added in the next update.`,
        },
      ],
    },
    {
      id: "histopath",
      name: "Histopath Highlights",
      icon: "🔬",
      topics: [
        {
          id: "_pending_histo",
          name: "(Coming soon)",
          content: `## Pending

Curated histopathology highlights (vasculitides, amyloidosis, sarcoidosis, connective tissue diseases, neurodegeneration summary, key disease pathology) will be added in the next update.`,
        },
      ],
    },
  ],
};
