# Yalla — Evidence Ledger

Human-readable companion to **`evidence.json`**, which is the canonical, machine-readable source of truth (the app reads it for tips, the browsable Library and DOI links). When the two disagree, **`evidence.json` wins** — update it first, then mirror the change here.

Every coaching claim in Yalla traces to a study below, with its concrete result, how strong the evidence is, and how strong the *source* is.

## Source-quality priority

We **prioritise meta-analyses, systematic reviews and umbrella reviews in reputable journals** (BJSM, Lancet, JAMA, BMJ, PNAS, *Sports Medicine*, etc.) over single small cohorts. Each study carries a `tier`; weak single cohorts are flagged and shown sparingly in-app. Current mix (coaching claims, Parts A–C): **14 meta-analyses/reviews-of-trials, 4 RCTs, 10 reviews/guidelines, 11 cohorts, 1 mechanistic, 2 small cohorts (flagged).** Part D adds a sports/activities & lifestyle set (2 meta, 9 reviews, 28 mechanistic EMG/energy-cost studies) that backs the per-sport proxies and the base-activity level rather than coaching advice.

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
- **`rosenblat19` — Rosenblat, Perrotta, Vicenzino (2019),** *JSCR.* [10.1519/JSC.0000000000002618](https://doi.org/10.1519/JSC.0000000000002618) · *meta · causal-leaning · RCTs* — In trained endurance athletes, a **polarized** split (most easy, a little very hard) improved **endurance performance** more than a threshold "moderate middle." → `cardiopolar` (cardio zone advice).
- **`wilson12` — Wilson et al. (2012),** *JSCR.* [10.1519/JSC.0b013e31823a3e2d](https://doi.org/10.1519/JSC.0b013e31823a3e2d) · *meta · causal-leaning · 21 studies, 422 ES* — Concurrent aerobic work attenuated **hypertrophy** (ES **0.85 vs 1.23** strength-only) and power; interference scaled with frequency/duration, **running > cycling.** → `cardiolift` (goal: muscle/strength).
- **`milanovic15` — Milanović, Sporiš, Weston (2015),** *Sports Med.* [10.1007/s40279-015-0365-0](https://doi.org/10.1007/s40279-015-0365-0) · *meta · causal* — Interval **and** continuous training both raise **VO₂max**; intervals comparable/slightly greater and **time-efficient**, larger gains when starting less fit. → `vo2hiit`.

---

# Part B — General health, longevity & happiness (mostly correlational)

> Almost all observational. Adjusted and large, but association ≠ causation — copy says "linked to / tends to," never promises lifespan. The two **exercise→mood** items (`singh`) and **fibre** risk-factor data are the causal exceptions. **Markers** (`grip`, `sitrise`) are proxies, not levers. `sauna` and `sitrise` are weak single cohorts — flagged, shown sparingly.

**Move for life**
- **`paluch` — Paluch et al. (2022),** *Lancet Public Health.* [10.1016/S2468-2667(21)00302-9](https://doi.org/10.1016/S2468-2667(21)00302-9) · *meta · correlational · 15 cohorts, 47,471* — Mortality fell with steps, plateauing **~7–8k (60+) / 8–10k (<60)**; top vs bottom quartile **~40–53% lower** (HR 0.47–0.60). 10k was a slogan. → `steps10k`.
- **`odonovan` — O'Donovan et al. (2017),** *JAMA Intern Med.* [10.1001/jamainternmed.2016.8014](https://doi.org/10.1001/jamainternmed.2016.8014) · *cohort · correlational · 63,591* — "Weekend warriors" **~30% lower** all-cause mortality (HR 0.70), ≈ regularly active. → `weekendwarrior`.
- **`arem15` — Arem et al. (2015),** *JAMA Intern Med.* [10.1001/jamainternmed.2015.0533](https://doi.org/10.1001/jamainternmed.2015.0533) · *cohort · correlational · 661,137* — Meeting the **~150 min/wk** minimum ≈ **31% lower** all-cause mortality vs inactive (HR 0.69); benefit climbs to **~3–5×** the minimum (~39%) then plateaus, no harm at high volumes. → `move150` (cardio target).
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

# Part D — Sports & activities (MET + EMG proxies)

These ground the per-sport numbers in `ACTIVITIES` (app.js): **how aerobic** a sport is (`cf`/`rate`, set from its MET) and **which muscles** it works (`muscles`/`mf`, set from EMG/activation studies). The Cardio sheet shows the picked sport's sources inline. Cardio cost comes from one shared reference; muscles from a per-sport study.

**Shared cardio-cost reference**
- **`compendium24` — Herrmann, Willis, Ainsworth et al. (2024),** *J Sport Health Sci.* [10.1016/j.jshs.2023.10.010](https://doi.org/10.1016/j.jshs.2023.10.010) · *review · causal-leaning* — The Compendium of Physical Activities: measured metabolic cost (METs) for hundreds of activities. Source for every sport's MET except padel (no code) and where a sport-specific energy study is more precise. → MET for all activities.

**Per-sport energy cost (where the Compendium isn't the best fit)**
- **`crossfitMet` — Rios, Becker, Cardoso et al. (2024),** *Sensors.* [10.3390/s24020513](https://doi.org/10.3390/s24020513) · *mechanism · causal-leaning* — Extreme-intensity CrossFit benchmark peaked at ~47 mL/kg/min (~13 METs). → CrossFit ~9.5 MET (representative).
- **`kbVO2` — Farrar, Mayhew, Koch (2010),** *JSCR.* [10.1519/JSC.0b013e3181d15516](https://doi.org/10.1519/JSC.0b013e3181d15516) · *mechanism · causal-leaning* — 12 min of continuous swings ≈ 9.8 METs. → Kettlebell.
- **`pilatesMet` — Vitor et al. (2025),** *Syst Rev.* [10.1186/s13643-025-03056-y](https://doi.org/10.1186/s13643-025-03056-y) · *meta · causal-leaning* — Mat Pilates pools at ~3.7 METs; value is core, not aerobics. → Pilates.
- **`padelDemand` — Mellado-Arbelo, Baiget (2022),** *Kinesiology.* [10.26582/k.54.1.6](https://doi.org/10.26582/k.54.1.6) · *review · correlational* — Padel match play is intermittent, ~70–85% HRmax (≈6 MET), lunges + overhead/wall strokes. → Padel MET **and** muscles (no Compendium code, no padel EMG exists).

**Muscle engagement (EMG / activation)**
- **`walkSyn` — Magrath et al. (2022),** *PRS Glob Open.* [10.1097/GOX.0000000000004438](https://doi.org/10.1097/GOX.0000000000004438) · *review · causal-leaning* — Quads + glutes (weight acceptance), calf (propulsion), hamstrings (swing). → Walking.
- **`ellipticalEMG` — Prosser et al. (2011),** *Gait Posture.* [10.1016/j.gaitpost.2010.11.013](https://doi.org/10.1016/j.gaitpost.2010.11.013) · *mechanism · causal-leaning* — Greatest quad activity + quad–hamstring co-activation of the modes. → Elliptical.
- **`stairEMG` — Lewis et al. (2015),** *J Electromyogr Kinesiol.* [10.1016/j.jelekin.2015.07.011](https://doi.org/10.1016/j.jelekin.2015.07.011) · *mechanism · causal-leaning* — Gluteus maximus drives propulsion; hamstrings/quads/calves rise with speed. → Stair Climber.
- **`jumpropeEMG` — Lin et al. (2022),** *Children.* [10.3390/children9050721](https://doi.org/10.3390/children9050721) · *mechanism · causal-leaning* — Two-foot bounce loads the calves hardest, quads secondary. → Jump Rope.
- **`skatingEMG` — Bongiorno et al. (2022),** *Sports.* [10.3390/sports10120209](https://doi.org/10.3390/sports10120209) · *mechanism · causal-leaning* — Push-off driven by gluteus max/med + vastus lateralis. → Skating.
- **`xcSkiEMG` — Lindinger et al. (2009),** *Eur J Appl Physiol.* [10.1007/s00421-009-1018-5](https://doi.org/10.1007/s00421-009-1018-5) · *mechanism · causal-leaning* — Double-poling: triceps, pecs, lats/teres (back), trunk first — full body. → XC Skiing.
- **`racketDemand` — Cádiz Gallardo et al. (2023),** *Front Psychol.* [10.3389/fpsyg.2023.1149295](https://doi.org/10.3389/fpsyg.2023.1149295) · *review · correlational* — Squash near-max HR; acyclic sprints/lunges load lower limb + trunk. → Squash.
- **`badmintonEMG` — Jiang, Li, Xiu (2025),** *Sensors.* [10.3390/s25061644](https://doi.org/10.3390/s25061644) · *mechanism · causal-leaning* — The lunge recruits calf, hamstring, glute, quads most. → Badminton.
- **`volleyballEMG` — Miura et al. (2020),** *JSES Int.* [10.1016/j.jseint.2019.12.009](https://doi.org/10.1016/j.jseint.2019.12.009) · *mechanism · causal-leaning* — Spike strongly fires the deltoids; jump uses glutes/quads/calves. → Volleyball.
- **`ttEMG` — He et al. (2022),** *Bioengineering.* [10.3390/bioengineering9080336](https://doi.org/10.3390/bioengineering9080336) · *review · causal-leaning* — Topspin forehand loads quads, calf and hip/trunk via a proximal-to-distal chain. → Table Tennis.
- **`judoEMG` — Honorato et al. (2020),** *Res Q Exerc Sport.* [10.1080/02701367.2019.1699233](https://doi.org/10.1080/02701367.2019.1699233) · *mechanism · causal-leaning* — Grappling = high forearm/grip activation + strength-endurance (gripping the gi). → Grappling. *(corroborated by `bjjProfile` — Andreato et al. 2017, Sports Med Open, [10.1186/s40798-016-0069-5](https://doi.org/10.1186/s40798-016-0069-5): intermittent, high isometric grip/back/trunk demand.)*
- **`kbEMG` — Lyons et al. (2017),** *JSCR.* [10.1519/JSC.0000000000001771](https://doi.org/10.1519/JSC.0000000000001771) · *mechanism · causal-leaning* — Swing = greatest erector spinae (back) activation, strong glutes/hamstrings — posterior-chain hinge. → Kettlebell **and** CrossFit (closest activation proxy for compound lifts).
- **`pilatesEMG` — Ko et al. (2024),** *Front Physiol.* [10.3389/fphys.2024.1435671](https://doi.org/10.3389/fphys.2024.1435671) · *mechanism · causal-leaning* — External oblique most-activated trunk muscle (>50% MVIC); core-dominant. → Pilates.
- **`alpineEMG` — Kröll et al. (2010),** *MSSE.* [10.1249/MSS.0b013e3181d299cf](https://doi.org/10.1249/MSS.0b013e3181d299cf) · *mechanism · causal-leaning* — Recreational alpine skiing loads the quads heavily (outside leg dominant); glutes/hams/trunk stabilise. → Skiing.
- **`surfEMG` — Nessler et al. (2019),** *JSCR.* [10.1519/JSC.0000000000003070](https://doi.org/10.1519/JSC.0000000000003070) · *mechanism · causal-leaning* — Paddling driven by lats (largest rise), deltoids + pecs; trunk stabilises. → Surfing.
- **`kayakEMG` — Brown, Peters, Lauder (2024),** *J Hum Kinet.* [10.5114/jhk/169939](https://doi.org/10.5114/jhk/169939) · *mechanism · causal-leaning* — Trunk rotation drives the stroke: lats (back), rectus abdominis + obliques (core), shoulders catch/pull. → Kayak / SUP.
- **`danceEMG` — Gao et al. (2024),** *Biomimetics.* [10.3390/biomimetics9080489](https://doi.org/10.3390/biomimetics9080489) · *mechanism · causal-leaning* — Quads, hamstrings, calves load on landings; glutes/trunk stabilise. → Dancing.
- **`golfEMG` — Watkins et al. (1996),** *Am J Sports Med.* [10.1177/036354659602400420](https://doi.org/10.1177/036354659602400420) · *mechanism · causal-leaning* — Swing fires obliques + rectus abdominis (core) hardest; erector spinae + glute max contribute. → Golf (its cardio is the walk/carry).

**Muscle engagement — the original sports (backfilled)**
- **`runEMG` — Gazendam & Hof (2007),** *Gait Posture.* [10.1016/j.gaitpost.2006.06.013](https://doi.org/10.1016/j.gaitpost.2006.06.013) · *mechanism · causal-leaning* — Quads, hamstrings, gluteals, calf; calf shifts to early stance with speed. → Running.
- **`cycleEMG` — Rouffet & Hautier (2008),** *J Electromyogr Kinesiol.* [10.1016/j.jelekin.2007.03.008](https://doi.org/10.1016/j.jelekin.2007.03.008) · *mechanism · causal-leaning* — Quads dominate pedalling, glutes + gastroc/soleus support. → Cycling.
- **`swimEMG` — Kwok, So, Ng (2023),** *J Sports Sci Med.* [10.52082/jssm.2023.1](https://doi.org/10.52082/jssm.2023.1) · *review · causal-leaning* — Front crawl led by lats (back), pecs (chest), deltoids (shoulders); trunk stabilises; arms supply ~85% propulsion. → Swimming.
- **`rowEMG` — Gerževič, Strojnik, Jarm (2011),** *JSCR.* [10.1519/JSC.0b013e3181fb4111](https://doi.org/10.1519/JSC.0b013e3181fb4111) · *mechanism · causal-leaning* — Legs→back→arms: quads + glute max drive, erector spinae/lats swing, biceps finish. → Rowing.
- **`hikeEMG` — Franz & Kram (2012),** *Gait Posture.* [10.1016/j.gaitpost.2011.08.025](https://doi.org/10.1016/j.gaitpost.2011.08.025) · *mechanism · causal-leaning* — Uphill sharply raises glute max (+345%), gastroc (+175%), soleus (+136%) vs level — the incline shift to glutes/calves. → Hiking.
- **`boxEMG` — Xu, Sun, Zhu (2025),** *Sci Rep.* [10.1038/s41598-025-96264-4](https://doi.org/10.1038/s41598-025-96264-4) · *mechanism · causal-leaning* — Punch force tracks anterior deltoid (shoulders) + external oblique (core); erector spinae/lats (back) support. → Boxing.
- **`mmaEMG` — McGill et al. (2010),** *JSCR.* [10.1519/JSC.0b013e3181cc23d5](https://doi.org/10.1519/JSC.0b013e3181cc23d5) · *mechanism · causal-leaning* — Core stiffens so limb (deltoid/back) + lower-limb (quads/glutes) muscles drive strikes — whole-body. → MMA.
- **`soccerEMG` — Brophy et al. (2007),** *JOSPT.* [10.2519/jospt.2007.2255](https://doi.org/10.2519/jospt.2007.2255) · *mechanism · causal-leaning* — Kicking activates quads (vastus medialis), gastroc (calf) + hip/hamstrings; with sprinting these dominate. → Football.
- **`bballEMG` — Fan et al. (2024),** *J Sports Sci Med.* [10.52082/jssm.2024.571](https://doi.org/10.52082/jssm.2024.571) · *mechanism · causal-leaning* — Jump shot driven by quads + gastroc (calf) + anterior deltoid (shoulders); rises with distance. → Basketball.
- **`tennisEMG` — Kibler et al. (2007),** *BJSM.* [10.1136/bjsm.2007.037333](https://doi.org/10.1136/bjsm.2007.037333) · *mechanism · causal-leaning* — Serve runs legs (quads)→trunk (core)→shoulder; scapular/deltoid muscles measured directly. → Tennis.
- **`climbEMG` — Watts et al. (2008),** *Int J Exerc Sci.* [10.70252/BWEQ2959](https://doi.org/10.70252/BWEQ2959) · *mechanism · causal-leaning* — Climbing grip/forearm activation exceeds max handgrip; lats (back) pull, trunk (core) stabilises. → Climbing **and** Bouldering (equivalent grip/pull demand).
- **`yogaEMG` — Ni et al. (2014),** *Complement Ther Med.* [10.1016/j.ctim.2014.01.007](https://doi.org/10.1016/j.ctim.2014.01.007) · *mechanism · causal-leaning* — Across 11 poses the trunk/abdominals dominate, glute max contributes — core-led. → Yoga.

**Base activity — habitual occupation/lifestyle level (Me → Daily activity)**
- **`palFao` — FAO/WHO/UNU Expert Consultation (2004),** *Human energy requirements.* [report](https://www.fao.org/4/y5686e/y5686e07.htm) · *review · causal-leaning* — Physical Activity Level bands: sedentary/light 1.40–1.69, moderately active/active 1.70–1.99, vigorously active 2.00–2.40. → the 5 occupation levels (PAL 1.45→2.10).
- **`paPara` — Holtermann, Krause, van der Beek, Straker (2018),** *BJSM.* [10.1136/bjsports-2017-097965](https://doi.org/10.1136/bjsports-2017-097965) · *review · correlational+mech* — The physical-activity paradox: occupational activity does NOT confer leisure exercise's fitness/heart benefits (long-duration, low-intensity, little recovery). → why base activity is context, not training, and never fills the cardio ring.
- **`opaMort` — Coenen et al. (2018),** *BJSM.* [10.1136/bjsports-2017-098540](https://doi.org/10.1136/bjsports-2017-098540) · *meta · correlational* — Men with high occupational activity had **18% higher** early-death risk vs low — opposite of leisure activity's protection. → reinforces the "a physical job doesn't replace training" caveat.

*Confidence flags: padel muscles are inferred from its activity profile (no padel EMG exists); CrossFit muscles reuse the kettlebell EMG (no single study covers heterogeneous HIFT); the volleyball EMG is shoulder-focused, with lower-limb tokens from jump-biomechanics. MET values are population averages — an individual's cost varies with fitness, technique and intensity.*

---

## Changelog
- **v7 (2026-06-08):** Added a **base-activity / occupation level** in Me → Daily activity (5 levels, sedentary→heavy labour). New sources: `palFao` (FAO/WHO/UNU PAL bands), `paPara` (physical-activity paradox), `opaMort` (high occupational activity → 18% higher male mortality). It sets a smart cardio-goal default (sedentary aims higher) and shows the week's movement baseline as **context, not training** — it never fills the cardio ring, per the paradox evidence. DOIs verified; PAL is a FAO report URL.
- **v6 (2026-06-08):** Backfilled the **original 13 sports** with their own muscle-engagement (EMG) citations so every activity in the app now shows a source: `runEMG`, `cycleEMG`, `swimEMG`, `rowEMG`, `hikeEMG`, `boxEMG`, `mmaEMG`, `soccerEMG`, `bballEMG`, `tennisEMG`, `climbEMG` (shared by Climbing + Bouldering), `yogaEMG`; MET for all from `compendium24`. Grip/forearm demand maps to the Biceps token (no forearm token). All 12 DOIs verified to resolve. Also wired **Walking** to the distance/pace input (it was minutes-only).
- **v5 (2026-06-08):** Added **Part D — Sports & activities (MET + EMG proxies)**: 24 new sources backing the proxies for 20 added sports (Walking, Elliptical, Stair Climber, Jump Rope, Skating, XC Skiing, Padel, Squash, Badminton, Volleyball, Table Tennis, Grappling, CrossFit, Kettlebell, Skiing, Surfing, Kayak/SUP, Dancing, Golf, Pilates). Cardio cost from the **Compendium of Physical Activities** (`compendium24`) — plus sport-specific energy studies for CrossFit/kettlebell/Pilates and a match-analysis review for padel — and muscle engagement from per-sport **EMG/activation** studies. Each sport's sources surface inline in the Cardio sheet. All 24 DOIs verified to resolve (2026-06-08).
- **v4 (2026-06-05):** Added **cardio & conditioning** evidence for the new cardio-tracking feature — `rosenblat19` (polarized > threshold for endurance performance), `wilson12` (concurrent-training interference on hypertrophy/power; running > cycling), `milanovic15` (HIIT & continuous both raise VO₂max), `arem15` (~150 min/wk ≈ 31% lower all-cause mortality vs inactive, plateau ~3–5×). New advice: `cardiopolar`, `cardiolift` (muscle/strength), `vo2hiit`, `move150`. All DOIs verified to resolve; the existing `mandsager` (`vo2nolimit`) already covers fitness→mortality.
- **v3 (2026-06-05):** Scientific-rigour pass on the tip copy — every figure now names its **outcome** and **comparison group** (e.g. "vs the least active", "vs none"), and observational items read "linked to / tends to". Re-verified all DOIs and headline numbers against the papers; corrected three: **`vilpa`** (median-dose reductions are ~38–40% all-cause/cancer & ~48% CVD, not 26–34% — the lower figures were a below-median dose), **`reading`** (any-book HR 0.80 ≈ 20%; the "23-month" survival gain is unadjusted, ~4 months adjusted), and **`social`** (dropped the "15 cigarettes/day" analogy — not from Holt-Lunstad 2010). Softened the `sch17`/`vol10` "near-max ~10 sets" wording (the meta-analysis shows a continuing dose-response, not a hard plateau) and the `momma`/`rtdose` cutoff. Fixed the `curry` study title.
- **v2 (2026-06-04):** Added source `tier` to every study and a source-quality-priority rule (meta-analyses/reviews first). Made every finding concrete with verified effect sizes (double-checked against sources). Added **injury prevention** (`lauersen`, `vandyk`) and **happiness/life-satisfaction** (`singh`, `white`, `carr`, `curry`). Relabelled categories *Mind & happiness* and *Injury care & prevention*. Flagged weak single cohorts (`sauna`, `sitrise`). All DOIs verified to resolve.
- **v1 (2026-06-03):** Initial ledger (Parts A/B/C) as prose.

_Canonical data: `evidence.json`. Last updated 2026-06-08._
