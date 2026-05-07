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

## Other mycobacteria

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
- S. pneumoniae: complement deficiency, hyposplenism, alcohol, prior head trauma + CSF leak

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

- *Chlamydia trachomatis* — obligate intracellular Gram-ve
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

    // =========================================================================
    {
      id: "histopath",
      name: "Histopath Highlights",
      icon: "🔬",
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
