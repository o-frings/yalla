# Yalla — Evidence Ledger

Human-readable companion to **`evidence.json`**, which is the canonical, machine-readable source of truth (the app reads it for tips, the browsable Library and DOI links). When the two disagree, **`evidence.json` wins** — update it first, then mirror the change here.

Every coaching claim in Yalla traces to a study below, with its concrete result, how strong the evidence is, and how strong the *source* is.

## Source-quality priority

We **prioritise meta-analyses, systematic reviews and umbrella reviews in reputable journals** (BJSM, Lancet, JAMA, BMJ, PNAS, *Sports Medicine*, etc.) over single small cohorts. Each study carries a `tier`; weak single cohorts are flagged and shown sparingly in-app. Current mix: **14 meta-analyses/reviews-of-trials, 4 RCTs, 10 reviews/guidelines, 11 cohorts, 1 mechanistic, 2 small cohorts (flagged).**

## Two legends

**Causal strength** (`evidence`) — can we say *do X → get Y*?

| Tag | Meaning |
|---|---|
| `causal` | RCT or meta-analysis of RCTs — yes |
| `causal-leaning` | controlled/mechanistic/guideline, not a clean RCT — mostly |
| `correlational` | observational; association only — phrase "linked to" |
| `correlational+mech` | observational headline + RCT/mechanism for the *why* |
| `marker` | observational, and a *proxy* — predicts, doesn't promise |

**Source quality** (`tier`): `meta` (meta-analysis/review — preferred) · `rct` · `review` (guideline/consensus/narrative) · `cohort` (large) · `small-cohort` (weak, flagged) · `mechanism`.

**Copy rule:** `tone:"do"` (imperative, mechanistic) is allowed only for causal / causal-leaning studies. `tone:"linked"` (observational, marker) must use "linked to / tends to" and must never promise lifespan. **Every figure in a tip must name the outcome (all-cause mortality, muscle gain — not bare "risk") and the comparison group (vs the least active / vs lowest intake / vs once-weekly); popular analogies (e.g. "= N cigarettes/day") are used only if the cited paper states them.** This is enforced in `evidence.json`.

## Library categories (how users browse all of it)

The app surfaces every item in a dedicated, searchable **Library** screen grouped into: **Training · Recovery & sleep · Nutrition · Move for life · Body signals · Mind & happiness · Injury care & prevention.** The random start-page tip is a teaser that links into the matching Library entry; nothing is buried, nothing is dumped all at once.

---

# Part A — Training & nutrition (mostly causal)

- **`sch17` — Schoenfeld, Ogborn, Krieger (2017),** *J Sports Sci.* [10.1080/02640414.2016.1210197](https://doi.org/10.1080/02640414.2016.1210197) · *meta · causal · 15 studies* — Graded dose–response: each added weekly set ≈ **+0.37%** muscle gain, growth still rising across the studied range. **~10 sets/muscle/wk is a practical target, not a hard plateau the paper identifies.** → ~10-set target ring; growth-dose.
- **`drr` — Pelland et al. (2024),** *SportRxiv.* [10.51224/SRXIV.460](https://doi.org/10.51224/SRXIV.460) · *meta · causal-leaning* — Indirect/secondary sets weighted **0.5** best fit hypertrophy; more frequency accommodates volume. → primary ×1 / secondary ×0.5 weighting. *(preprint)*
- **`sch16` — Schoenfeld et al. (2016),** *Sports Med.* [10.1007/s40279-016-0543-8](https://doi.org/10.1007/s40279-016-0543-8) · *meta · causal-leaning · 10 studies* — At matched volume, **~2×/wk** modestly out-grew 1×/wk. → frequency tips & builder.
- **`sch10` — Schoenfeld (2010),** *JSCR.* [10.1519/JSC.0b013e3181e840f3](https://doi.org/10.1519/JSC.0b013e3181e840f3) · *review · causal-leaning* — Mechanical tension (progressive overload) is the primary growth driver. → growth signal needs a *rising* trend; `overload`, `tension`.
- **`plotkin` — Plotkin et al. (2022),** *PeerJ.* [10.7717/peerj.14142](https://doi.org/10.7717/peerj.14142) · *rct · causal · n=43* — Adding **reps** built as much as adding **load.** → trend tracks total volume; `repsOK`.
- **`rpvol` — Renaissance Periodization (Israetel et al.).** [article](https://rpstrength.com/blogs/articles/training-volume-landmarks-muscle-growth) · *review · causal-leaning* — Productive window ~**10 (MEV) → 20 (MAV)** sets/muscle; deload to clear fatigue. → `landmarks`, `deload`, `rampvol`.
- **`mps` — Phillips et al. (1997),** *Am J Physiol.* [10.1152/ajpendo.1997.273.1.E99](https://doi.org/10.1152/ajpendo.1997.273.1.E99) · *mechanism · causal-leaning · n=8* — Protein synthesis **roughly doubled (~+100%) by 24 h,** elevated ~**24–48 h.** → weekly accounting; `window`, `recover`.
- **`bickel` — Bickel, Cross, Bamman (2011),** *MSSE.* [10.1249/MSS.0b013e318207c15d](https://doi.org/10.1249/MSS.0b013e318207c15d) · *rct · causal · n=70* — Gains held on as little as **1/3 (older) to 1/9 (young)** of building volume over 32 wk. → maintenance floor; `maintain`, `dontskip`.
- **`mujika` — Mujika & Padilla (2000),** *Sports Med.* [10.2165/00007256-200030020-00002](https://doi.org/10.2165/00007256-200030020-00002) · *review · causal-leaning* — Strength largely retained **~2–4 wk** off; longer → atrophy. → "shrinking" state; `detrain`, `comeback`.
- **`vigotsky` — Vigotsky et al. (2022),** *Sports Med.* [10.1007/s40279-021-01619-2](https://doi.org/10.1007/s40279-021-01619-2) · *review · causal-leaning* — Acute EMG "activation" doesn't predict growth. → weigh sets, not "feel"; `emg`, `feel`.
- **`morton` — Morton et al. (2018),** *BJSM.* [10.1136/bjsports-2017-097608](https://doi.org/10.1136/bjsports-2017-097608) · *meta · causal · 49 RCTs* — Protein added **~+0.3 kg** lean mass; benefit plateaued **~1.6 g/kg/day.** → `protein`, `proteinceil`.
- **`slater` — Slater et al. (2019),** *Front Nutr.* [10.3389/fnut.2019.00131](https://doi.org/10.3389/fnut.2019.00131) · *review · causal-leaning* — A modest surplus supports growth; big surpluses add mostly fat. → `surplus`, `nodeficit` (goal: muscle).
- **`garthe` — Garthe et al. (2013),** *Eur J Sport Sci.* [10.1080/17461391.2011.643923](https://doi.org/10.1080/17461391.2011.643923) · *rct · causal-leaning · n=39* — Faster gain (+3.9% vs +1.5% BW) added **more fat, not more lean.** → `leangain` (goal: muscle).
- **`helms` — Helms, Aragon, Fitschen (2014),** *JISSN.* [10.1186/1550-2783-11-20](https://doi.org/10.1186/1550-2783-11-20) · *review · causal-leaning* — Lean cut: **~0.5–1%/wk** loss, protein **~2.3–3.1 g/kg LBM**, keep lifting. → `cut`, `cutprotein`, `lossrate`, `nocrash` (goal: fatloss).

---

# Part B — General health, longevity & happiness (mostly correlational)

> Almost all observational. Adjusted and large, but association ≠ causation — copy says "linked to / tends to," never promises lifespan. The two **exercise→mood** items (`singh`) and **fibre** risk-factor data are the causal exceptions. **Markers** (`grip`, `sitrise`) are proxies, not levers. `sauna` and `sitrise` are weak single cohorts — flagged, shown sparingly.

**Move for life**
- **`paluch` — Paluch et al. (2022),** *Lancet Public Health.* [10.1016/S2468-2667(21)00302-9](https://doi.org/10.1016/S2468-2667(21)00302-9) · *meta · correlational · 15 cohorts, 47,471* — Mortality fell with steps, plateauing **~7–8k (60+) / 8–10k (<60)**; top vs bottom quartile **~40–53% lower** (HR 0.47–0.60). 10k was a slogan. → `steps10k`.
- **`odonovan` — O'Donovan et al. (2017),** *JAMA Intern Med.* [10.1001/jamainternmed.2016.8014](https://doi.org/10.1001/jamainternmed.2016.8014) · *cohort · correlational · 63,591* — "Weekend warriors" **~30% lower** all-cause mortality (HR 0.70), ≈ regularly active. → `weekendwarrior`.
- **`stamatakis` — Stamatakis et al. (2022),** *Nat Med.* [10.1038/s41591-022-02100-x](https://doi.org/10.1038/s41591-022-02100-x) · *cohort · correlational* — At median dose (**~4 min/day, ~3 short bouts**): all-cause/cancer **~38–40% lower**, CVD **~48% lower** vs none; ~3 bouts/day ≈ HR 0.61. *(The smaller 24–34% figures are a below-median dose.)* → `vilpa`.
- **`momma` — Momma et al. (2022),** *BJSM.* [10.1136/bjsports-2021-105061](https://doi.org/10.1136/bjsports-2021-105061) · *meta · correlational · 16 studies* — **30–60 min/wk** strength work ≈ **10–17% lower** mortality vs none, J-shaped (benefit out to ~130–140 min/wk). → `rtdose`.
- **`mandsager` — Mandsager et al. (2018),** *JAMA Netw Open.* [10.1001/jamanetworkopen.2018.3605](https://doi.org/10.1001/jamanetworkopen.2018.3605) · *cohort · correlational · 122,007* — Fitness → lower mortality, **no upper limit**; elite vs low **HR 0.20**; unfitness ≈ smoking. → `vo2nolimit`.
- **`diaz` — Diaz et al. (2017),** *Ann Intern Med.* [10.7326/M17-0212](https://doi.org/10.7326/M17-0212) · *cohort · correlational+mech · 7,985* — More total sitting **and** longer unbroken bouts (≥60–90 min) → higher mortality; short bouts (<30 min) best. → `sitbreaks`.
- **`laukkanen` — Laukkanen et al. (2015),** *JAMA Intern Med.* [10.1001/jamainternmed.2014.8187](https://doi.org/10.1001/jamainternmed.2014.8187) · *small-cohort · correlational · 2,315 men* ⚠️ — 4–7 sauna/wk vs 1: all-cause **HR 0.60**, CVD 0.50. → `sauna` *(weak: single-sex cohort)*.

**Nutrition & hydration**
- **`reynolds` — Reynolds et al. (2019),** *Lancet.* [10.1016/S0140-6736(18)31809-9](https://doi.org/10.1016/S0140-6736(18)31809-9) · *meta · correlational+mech · 185 cohorts + 58 RCTs* — **+8 g/day fibre ≈ 7% lower** mortality; high vs low **15–30% lower**; ~25–29 g/day. → `fiber`.
- **`poole` — Poole et al. (2017),** *BMJ.* [10.1136/bmj.j5024](https://doi.org/10.1136/bmj.j5024) · *meta · correlational · 201 meta-analyses* — **3–4 cups coffee/day ≈ 17% lower** all-cause mortality (RR 0.83). → `coffee`.
- **`dmitrieva` — Dmitrieva et al. (2023),** *eBioMedicine.* [10.1016/j.ebiom.2022.104404](https://doi.org/10.1016/j.ebiom.2022.104404) · *cohort · correlational · ARIC, ~25 y* — Serum Na **>142 ≈ +39%** chronic disease, **~50%** higher odds "biologically older"; **>144 ≈ +21%** premature death. → `hydration`.

**Recovery & sleep**
- **`windred` — Windred et al. (2024),** *Sleep.* [10.1093/sleep/zsad253](https://doi.org/10.1093/sleep/zsad253) · *cohort · correlational · 60,977* — Most-regular sleepers **20–48% lower** mortality; regularity beat duration. → `sleepreg`.

**Body signals (markers, not levers)**
- **`leong` — Leong et al. (2015), PURE,** *Lancet.* [10.1016/S0140-6736(14)62000-6](https://doi.org/10.1016/S0140-6736(14)62000-6) · *cohort · marker · 139,691* — Each **5 kg lower grip ≈ +16%** all-cause / +17% CV mortality; beat systolic BP. → `grip`.
- **`brito` — Brito et al. (2012),** *Eur J Prev Cardiol.* [10.1177/2047487312471759](https://doi.org/10.1177/2047487312471759) · *small-cohort · marker · 2,002* ⚠️ — Lowest sitting-rising scorers **~5–6×** the mortality of top scorers. → `sitrise` *(weak: small cohort)*.

**Mind & happiness**
- **`singh` — Singh et al. (2023),** *BJSM.* [10.1136/bjsports-2022-106195](https://doi.org/10.1136/bjsports-2022-106195) · *meta · causal · 97 reviews, 128,119* — Exercise eased **depression (−0.43)** and **anxiety (−0.42)** vs usual care — ≈ therapy/medication. → `exerciseMood`.
- **`white` — White et al. (2019),** *Sci Rep.* [10.1038/s41598-019-44097-3](https://doi.org/10.1038/s41598-019-44097-3) · *cohort · correlational · ~20,000* — **≥120 min/week in nature** → better health & wellbeing; nothing below that. → `nature`.
- **`carr` — Carr et al. (2021),** *J Positive Psychol.* [10.1080/17439760.2020.1818807](https://doi.org/10.1080/17439760.2020.1818807) · *meta · causal · 347 studies* — Positive-psychology habits: wellbeing **g=0.39**, depression g=−0.39. → `gratitude`.
- **`curry` — Curry et al. (2018),** *J Exp Soc Psychol.* [10.1016/j.jesp.2018.02.014](https://doi.org/10.1016/j.jesp.2018.02.014) · *meta · causal · 27 studies* — Acts of kindness lift the **giver's** wellbeing (**d=0.28**). → `kindness`.
- **`holtlunstad` — Holt-Lunstad et al. (2010),** *PLoS Med.* [10.1371/journal.pmed.1000316](https://doi.org/10.1371/journal.pmed.1000316) · *meta · correlational · 308,849* — Strong ties **≈ +50%** survival odds (OR 1.50) ≈ quitting smoking, > obesity/inactivity. *(The popular "15 cigarettes/day" figure is a later media gloss, not in this paper.)* → `social`.
- **`lee` — Lee et al. (2019),** *PNAS.* [10.1073/pnas.1900712116](https://doi.org/10.1073/pnas.1900712116) · *cohort · correlational* — Optimists **11–15% longer** lifespan, 50–70% higher odds of reaching 85. → `optimism`.
- **`alimujiang` — Alimujiang et al. (2019),** *JAMA Netw Open.* [10.1001/jamanetworkopen.2019.4270](https://doi.org/10.1001/jamanetworkopen.2019.4270) · *cohort · correlational · 6,985* — Lowest vs highest purpose **~2.4×** mortality (HR 2.43). → `purpose`.
- **`bavishi` — Bavishi, Slade, Levy (2016),** *Soc Sci Med.* [10.1016/j.socscimed.2016.07.014](https://doi.org/10.1016/j.socscimed.2016.07.014) · *cohort · correlational · 3,635* — Any book reading **~20% lower** mortality (HR 0.80); heaviest readers (>3.5 h/wk) **~23%** (HR 0.77). *(Adjusted survival gain ~4 months; the quoted "23 months" is unadjusted.)* → `reading`.

---

# Part C — Injury care & prevention (guidelines / RCTs)

General self-management and prevention, **not medical advice** — in-app copy says so and points to a clinician for significant or lasting pain. The management entries also drive how the plan adapts a flagged injury (`INJURY_TIERS` + `INJURY_REGION`).

**Prevention**
- **`lauersen` — Lauersen, Bertelsen, Andersen (2014),** *BJSM.* [10.1136/bjsports-2013-092538](https://doi.org/10.1136/bjsports-2013-092538) · *meta · causal · 25 RCTs, 26,610* — **Strength training cut injuries to under a third** (RR ~0.32); overuse halved (RR 0.53); **stretching did not help.** → `prevStrength`.
- **`vandyk` — van Dyk, Behan, Whiteley (2019),** *BJSM.* [10.1136/bjsports-2018-100045](https://doi.org/10.1136/bjsports-2018-100045) · *meta · causal · 15 studies, 8,459* — Nordic hamstring exercise **~halved** hamstring injuries (RR 0.49). → `prevHamstring`.

**Care (when a niggle is flagged)**
- **`injAnkle` — Vuurberg et al. (2018),** *BJSM guideline.* [10.1136/bjsports-2017-098106](https://doi.org/10.1136/bjsports-2017-098106) · *review · causal-leaning* — Early controlled weight-bearing > immobilisation; balance training **~halves** re-sprain risk. → `injAnkle`.
- **`injKnee` — Collins et al. (2018),** *BJSM consensus.* [10.1136/bjsports-2018-099397](https://doi.org/10.1136/bjsports-2018-099397) · *review · causal-leaning* — Combined hip+knee exercise therapy beats rest/passive care for kneecap pain. → `injKnee`.
- **`injBack` — Foster et al. (2018),** *Lancet.* [10.1016/S0140-6736(18)30489-6](https://doi.org/10.1016/S0140-6736(18)30489-6) · *review · causal-leaning* — Low back pain: reassurance, stay active, avoid bed rest. → `injBack`.
- **`injShoulder` — Hopewell et al. (2021), GRASP,** *Lancet.* [10.1016/S0140-6736(21)00846-1](https://doi.org/10.1016/S0140-6736(21)00846-1) · *rct · causal · n=708* — Advice + home exercise matched full physio; **steroid injection added nothing.** → `injShoulder`.
- **`injElbow` — Coombes, Bisset, Vicenzino (2015),** *JOSPT* (+ 2013 RCT, JAMA). [10.2519/jospt.2015.5841](https://doi.org/10.2519/jospt.2015.5841) · *review · causal-leaning* — Load it, don't rest it; **steroid worsened 1-yr recurrence (72% vs 8%)** ([Coombes 2013 RCT](https://doi.org/10.1001/jama.2013.129)). → `injElbow`.

---

## Changelog
- **v3 (2026-06-05):** Scientific-rigour pass on the tip copy — every figure now names its **outcome** and **comparison group** (e.g. "vs the least active", "vs none"), and observational items read "linked to / tends to". Re-verified all DOIs and headline numbers against the papers; corrected three: **`vilpa`** (median-dose reductions are ~38–40% all-cause/cancer & ~48% CVD, not 26–34% — the lower figures were a below-median dose), **`reading`** (any-book HR 0.80 ≈ 20%; the "23-month" survival gain is unadjusted, ~4 months adjusted), and **`social`** (dropped the "15 cigarettes/day" analogy — not from Holt-Lunstad 2010). Softened the `sch17`/`vol10` "near-max ~10 sets" wording (the meta-analysis shows a continuing dose-response, not a hard plateau) and the `momma`/`rtdose` cutoff. Fixed the `curry` study title.
- **v2 (2026-06-04):** Added source `tier` to every study and a source-quality-priority rule (meta-analyses/reviews first). Made every finding concrete with verified effect sizes (double-checked against sources). Added **injury prevention** (`lauersen`, `vandyk`) and **happiness/life-satisfaction** (`singh`, `white`, `carr`, `curry`). Relabelled categories *Mind & happiness* and *Injury care & prevention*. Flagged weak single cohorts (`sauna`, `sitrise`). All DOIs verified to resolve.
- **v1 (2026-06-03):** Initial ledger (Parts A/B/C) as prose.

_Canonical data: `evidence.json`. Last updated 2026-06-05._
