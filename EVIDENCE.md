# Yalla — Evidence Ledger

What this app's coaching claims rest on, and how strong each claim really is. Two parts:

- **Part A — Training & nutrition.** Powers the volume model, the muscle-balance radar, the growth signal, and the goal-tagged coach tips. Mostly **experimental** evidence.
- **Part B — General health & longevity.** Powers (proposed) "anyone" coach tips. Almost entirely **observational** evidence.

Citations also live in-app in `PROG_SRC` (Part A) and the Muscle-balance "How this is measured & sources" block.

---

## How to read the "Evidence" column

Causation is the whole game here, so every study is tagged:

| Tag | Meaning | Can we say "do X → get Y"? |
|---|---|---|
| **Causal** | RCT, or meta-analysis of RCTs | Yes — randomisation rules out most confounding |
| **Causal-leaning** | Controlled experiments / mechanistic studies, but not a clean RCT for the exact claim | Mostly — direction is sound, magnitude less certain |
| **Correlational** | Observational (prospective cohort, cross-sectional, meta-analysis of cohorts). Adjusted for confounders, but residual confounding + reverse causation remain | **No** — only "associated with". Phrase as *linked to / associated with* |
| **Correlational + mechanism** | Observational for the headline (e.g. mortality), but acute RCTs / mechanism explain *why* | Plausibly causal, not proven |
| **Marker (not lever)** | Observational, and the measured thing is a *proxy* for health, not necessarily a cause you can train into longevity | No — predicts, doesn't promise |

**Rule of thumb for copy:** Part A tips may use imperative, mechanistic language ("add a rep and the muscle grows"). Part B tips must use associational language ("linked to", "tend to") and never promise lifespan.

---

# Part A — Training & nutrition (mostly causal)

### Volume drives hypertrophy → ~10+ sets/muscle/week
- **Schoenfeld BJ, Ogborn D, Krieger JW (2017).** Dose–response relationship between weekly resistance-training volume and muscle hypertrophy. *J Sports Sci* 35(11). Key `sch17`.
- **Design:** Meta-analysis of training studies (largely RCTs). **Evidence: Causal.**
- **Finding:** More weekly sets → more growth; benefits accrue around ≥10 sets/muscle/wk.
- **We take:** The ~10-set target ring; `WEEKLY_SET_TARGET=10`, `WEEKLY_SET_MIN=6`. Growth-signal "growth dose".

### Fractional set counting (secondary = 0.5) + dose–response
- **Pelland JC, Remmert JF, Robinson ZP, Hinson SR, Zourdos MC (2024).** The resistance-training dose–response: meta-regressions on weekly volume & frequency for hypertrophy and strength. *SportRxiv*, doi:10.51224/SRXIV.460. Key `drr`.
- **Design:** Meta-regression of training studies. **Evidence: Causal-leaning** (experimental inputs; modelled dose–response).
- **Finding:** Counting indirect/secondary sets as **0.5** best predicted hypertrophy (vs 0 or 1.0). More frequency helps accommodate higher volume.
- **We take:** Primary ×1.0 / secondary ×0.5 weighting throughout `muscleVolume`, radar, growth signal. Tips `dose`, `spread`.

### Training frequency
- **Schoenfeld BJ, Ogborn D, Krieger JW (2016).** Effects of resistance-training frequency on muscle hypertrophy: a meta-analysis. *Sports Med* 46(11). Key `sch16`.
- **Design:** Meta-analysis of training studies. **Evidence: Causal-leaning.**
- **Finding:** Training a muscle ~2×/wk tends to beat 1×/wk at matched volume.
- **We take:** Tips `freq2`, `freqlag`; frequency logic in plan builder.

### Mechanisms of growth → progressive overload
- **Schoenfeld BJ (2010).** The mechanisms of muscle hypertrophy and their application to resistance training. *J Strength Cond Res* 24(10):2857–2872. Key `sch10`.
- **Design:** Narrative/mechanistic review. **Evidence: Causal-leaning** (mechanistic synthesis).
- **Finding:** Mechanical tension (progressive overload) is a primary hypertrophy driver.
- **We take:** Growth signal requires a *rising* trend, not just adequate dose. Tips `overload`, `tension`.

### Overload via load OR reps
- **Plotkin D, Coleman M, Van Every D, et al. (2022).** Progressive overload without progressing load? *PeerJ* 10:e14142, doi:10.7717/peerj.14142. Key `plotkin`.
- **Design:** **RCT** (43 trained adults, 8 wk, load- vs rep-progression). **Evidence: Causal.**
- **Finding:** Added reps and added load drove similar growth.
- **We take:** Growth-signal trend tracks **total volume** (load×reps×sets), not load alone. Tip `repsOK`.

### Volume landmarks (MEV / MAV / MRV) + deloads
- **Israetel M, et al. — Renaissance Periodization.** Training volume landmarks for muscle growth. Key `rpvol`.
- **Design:** Practitioner framework synthesising training literature (not a single study). **Evidence: Causal-leaning** (model built on experimental work).
- **Finding:** A productive volume window exists; too little under-stimulates, too much adds fatigue; planned deloads clear fatigue.
- **We take:** ~10–20 set framing; deload logic; tips `landmarks`, `deload`, `rampvol`.

### Muscle-protein synthesis time course → weekly accounting
- **Phillips SM, et al. (1997).** Mixed muscle protein synthesis and breakdown after resistance exercise. *Am J Physiol* 273(1). Key `mps`.
- **Design:** Experimental (measured MPS post-exercise). **Evidence: Causal/mechanistic.**
- **Finding:** MPS elevated ~24–48 h post-session.
- **We take:** Weekly (not daily, no time-decay) volume accounting. Tips `window`, `recover`.

### Maintenance volume (~1/3 of building volume)
- **Bickel CS, Cross JM, Bamman MM (2011).** Exercise dosing to retain resistance-training adaptations. *Med Sci Sports Exerc* 43(7):1177–1187, doi:10.1249/MSS.0b013e318207c15d. Key `bickel`.
- **Design:** **Controlled training trial** (70 adults; 16 wk build, then 32 wk reduced dose). **Evidence: Causal.**
- **Finding:** Gains maintained on ~1/3 (older) to ~1/9 (young) of the building volume.
- **We take:** Maintenance floor `WEEKLY_SET_MAINT=3`; growth-signal "holding" state. Tips `maintain`, `dontskip`.

### Detraining / atrophy timeline
- **Mujika I, Padilla S (2000).** Detraining Part I — short-term insufficient training stimulus. *Sports Med* 30(2):79–87. Key `mujika`.
- **Design:** Narrative review of detraining experiments. **Evidence: Causal-leaning** (detraining studies are experimental: stop training, measure).
- **Finding:** Strength holds for weeks; longer layoffs bring fibre atrophy.
- **We take:** Growth-signal "shrinking" state below maintenance. Tips `detrain`, `comeback`.

### EMG ≠ hypertrophy
- **Vigotsky AD, Trajano GS, Vieira TM (2022).** Acutely measured surface EMG amplitude is not a validated predictor of hypertrophy. *Sports Med* 52:193–199. Key `vigotsky`.
- **Design:** Methodological/validity review. **Evidence: Causal-leaning** (measurement-validity argument).
- **Finding:** Acute "activation"/EMG doesn't reliably predict growth.
- **We take:** We weight whole sets, not per-exercise "activation". Tips `emg`, `feel`.

### Nutrition
- **Morton RW, et al. (2018).** Protein supplementation meta-analysis. *Br J Sports Med* 52(6). Key `morton`. — **Meta-analysis of RCTs. Causal.** ~1.6 g/kg/day covers most lifters; little benefit beyond. Tips `protein`, `proteinceil`.
- **Slater GJ, et al. (2019).** Is an energy surplus required to maximise hypertrophy? *Front Nutr* 6:131. Key `slater`. — **Review of experimental + observational. Causal-leaning.** A slight surplus supports growth. Tips `surplus`, `nodeficit` (goal: muscle).
- **Garthe I, et al. (2013).** Nutritional intervention on body composition & performance in elite athletes. *Eur J Sport Sci* 13(3):295–303. Key `garthe`. — **Intervention study. Causal-leaning.** Slower gain (~0.25–0.5%/wk) → leaner gains. Tip `leangain` (goal: muscle).
- **Helms ER, et al. (2014).** Evidence-based recommendations for natural bodybuilding contest prep: nutrition. *J Int Soc Sports Nutr* 11:20. Key `helms`. — **Review/recommendations. Causal-leaning.** On a deficit, keep protein high (~2 g/kg), lift heavy, deficit moderate (~0.5–1%/wk). Tips `cut`, `cutprotein`, `lossrate`, `nocrash` (goal: fatloss).

**Part A summary:** Hypertrophy/strength claims are RCT-grade (`plotkin`, `bickel`, `morton`) or meta-analyses of training studies (`sch17`, `sch16`, `drr`). We can speak causally. Nutrition is a mix of intervention studies and evidence-based reviews — strong, slightly softer.

---

# Part B — General health & longevity (almost all correlational)

> ⚠️ With one partial exception (breaking up sitting has acute-RCT mechanism), **every Part B finding below is observational.** Large and carefully adjusted, but association ≠ causation. Copy must say "linked to / associated with" and must not promise extra years of life. "Marker" items are proxies we likely *can't* train directly into longevity.

### Steps — benefit plateaus well before 10,000
- **Paluch AE, et al. (2022).** Daily steps and all-cause mortality: meta-analysis of 15 cohorts. *Lancet Public Health* 7(3):e219–e228.
- **Design:** Meta-analysis of prospective cohorts (47,471 adults). **Evidence: Correlational.**
- **Finding:** Lower mortality with more steps; benefit largely plateaus ~6,000–8,000 (older) / ~8,000–10,000 (younger). The "10,000" target was never evidence-based.
- **Tip `steps10k`.** Surprise: debunks a famous number. *Confounding: healthier people walk more.*

### Weekend warrior — concentration doesn't blunt benefit
- **O'Donovan G, et al. (2017).** Weekend-warrior and other activity patterns and mortality. *JAMA Intern Med* 177(3):335–342.
- **Design:** Prospective cohort (replicated since). **Evidence: Correlational.**
- **Finding:** 1–2 sessions/wk meeting the weekly total gave mortality reductions similar to spread-out activity.
- **Tip `weekendwarrior`.** *Reverse causation: the unwell exercise less, on any schedule.*

### VILPA — 1-minute bursts in daily life
- **Stamatakis E, et al. (2022).** Wearable-measured vigorous intermittent lifestyle physical activity and mortality. *Nat Med.*
- **Design:** Prospective cohort, wrist accelerometers (UK Biobank). **Evidence: Correlational.**
- **Finding:** ~3–4 min/day of brief vigorous bursts associated with markedly lower all-cause/CVD/cancer mortality in non-exercisers.
- **Tip `vilpa`.** Novel, device-measured (less recall bias). Still observational.

### Strength training — sweet spot 30–60 min/week
- **Momma H, et al. (2022).** Muscle-strengthening activities and mortality/non-communicable disease: systematic review & meta-analysis. *Br J Sports Med* 56(13):755–763.
- **Design:** Meta-analysis of cohort studies (16 studies). **Evidence: Correlational** for the mortality endpoint (the *training → strength* link itself is RCT-backed).
- **Finding:** 10–17% lower all-cause mortality; maximal benefit ~30–60 min/wk, J-shaped (more isn't better for mortality).
- **Tip `rtdose`.** Ties to the app; honest framing: "linked to".

### Cardiorespiratory fitness — no upper ceiling
- **Mandsager K, et al. (2018).** Cardiorespiratory fitness and long-term mortality (treadmill testing). *JAMA Netw Open* 1(6):e183605.
- **Design:** Retrospective cohort (122,007 patients). **Evidence: Correlational.**
- **Finding:** Higher fitness → lower mortality with no observed upper limit; being unfit carried risk comparable to or exceeding smoking.
- **Tip `vo2nolimit`.** *Selection: clinical treadmill-test population.*

### Breaking up sitting
- **Diaz KM, et al. (2017).** Patterns of sedentary behavior and mortality. *Ann Intern Med* 167(7):465–475.
- **Design:** Prospective cohort (REGARDS, 7,985), accelerometer. **Evidence: Correlational + mechanism** (acute RCTs show movement breaks improve post-meal glucose/insulin).
- **Finding:** Greater total *and* longer uninterrupted sitting bouts → higher mortality; short, frequent breaks looked best.
- **Tip `sitbreaks`.** Strongest Part B case for partial causality.

### Grip strength — predicts mortality (MARKER)
- **Leong DP, et al. (2015).** Prognostic value of grip strength (PURE). *Lancet* 386(9990):266–273.
- **Design:** Prospective cohort (139,691, 17 countries). **Evidence: Marker (not lever).**
- **Finding:** Each 5 kg lower grip → ~16% higher all-cause, ~17% CV mortality; beat systolic BP as a predictor.
- **Tip `grip`.** Honest framing: grip *reflects* whole-body strength/health; squeezing a gripper won't itself add years.

### Sitting-rising test — predicts mortality (MARKER)
- **Brito LBB, et al. (2012/2014).** Ability to sit and rise from the floor as a predictor of all-cause mortality. *Eur J Prev Cardiol* 21(7):892.
- **Design:** Prospective cohort (2,002 adults, 51–80; median 6.3 y). **Evidence: Marker (not lever); smaller sample.**
- **Finding:** Low score → 5–6× mortality vs high score.
- **Tip `sitrise`** — *candidate to cut for rigor.* Fun self-test, but small and a proxy.

### Sauna frequency
- **Laukkanen T, et al. (2015).** Sauna bathing and fatal CV/all-cause mortality. *JAMA Intern Med* 175(4):542–548.
- **Design:** Prospective cohort (KIHD; 2,315 middle-aged Finnish **men**). **Evidence: Correlational; single-sex, single-population.**
- **Finding:** 4–7×/wk vs 1×/wk: all-cause HR ~0.60, CV death HR ~0.50.
- **Tip `sauna`** — *candidate to cut/soften.* Generalisability limited.

### Hydration / serum sodium and aging
- **Dmitrieva NI, et al. (2023).** High-normal serum sodium, accelerated biological aging, chronic disease, premature mortality. *eBioMedicine* (NIH).
- **Design:** Prospective cohort (11,255 adults, ~30 y). **Evidence: Correlational; indirect proxy.**
- **Finding:** Serum sodium at the high end of normal (≥142 mmol/L) → faster biological aging, more chronic disease, earlier death.
- **Tip `hydration`.** *Sodium is an indirect hydration marker; causation unproven.*

### Dietary fiber
- **Reynolds A, et al. (2019).** Carbohydrate quality and human health: systematic reviews & meta-analyses. *Lancet* 393(10170):434–445.
- **Design:** Systematic reviews/meta-analyses — cohorts (mortality) **+ RCTs** (risk factors like weight, BP, cholesterol). **Evidence: Correlational for mortality, causal for intermediate markers.**
- **Finding:** 25–29 g+/day → 15–30% lower all-cause & CV mortality; dose-responsive.
- **Tip `fiber`.** Among the better-supported Part B items.

### Coffee
- **Poole R, et al. (2017).** Coffee consumption and health: umbrella review. *BMJ* 359:j5024.
- **Design:** Umbrella review of 201 meta-analyses (mostly observational). **Evidence: Correlational.**
- **Finding:** 3–4 cups/day associated with the largest reduction in all-cause & CV mortality; "more likely to benefit than harm".
- **Tip `coffee`.** *Individual suitability (pregnancy, anxiety, arrhythmia).*

### Sleep regularity > duration
- **Windred DP, et al. (2024).** Sleep regularity a stronger predictor of mortality than sleep duration. *Sleep* 47(1):zsad253.
- **Design:** Prospective cohort (UK Biobank, 60,977; accelerometer). **Evidence: Correlational.**
- **Finding:** Most-regular sleepers had 20–48% lower all-cause mortality; regularity out-predicted duration.
- **Tip `sleepreg`.** Device-measured; still observational.

### Social connection ≈ smoking
- **Holt-Lunstad J, et al. (2010).** Social relationships and mortality risk: meta-analysis. *PLoS Med* 7(7):e1000316. — 148 studies, 308,849 people. **+ (2015)** *Perspect Psychol Sci* 10(2):227–237 — isolation/loneliness, 3.4M people.
- **Design:** Meta-analyses of cohorts. **Evidence: Correlational.**
- **Finding:** Strong social ties ~50% higher survival; weak ties carry risk likened to smoking ~15 cigarettes/day.
- **Tip `social`.** Striking magnitude; association.

### Optimism
- **Lee LO, et al. (2019).** Optimism and exceptional longevity, 2 cohorts. *PNAS* 116(37):18357–18362.
- **Design:** Prospective cohorts (Nurses' Health Study women; VA Normative Aging men). **Evidence: Correlational.**
- **Finding:** Most optimistic had 11–15% longer lifespan, 50–70% greater odds of reaching 85; held after adjusting for health behaviours.
- **Tip `optimism`.**

### Purpose in life
- **Alimujiang A, et al. (2019).** Life purpose and mortality, US adults >50. *JAMA Netw Open* 2(5):e194270.
- **Design:** Prospective cohort (Health & Retirement Study, 6,985). **Evidence: Correlational.**
- **Finding:** Stronger purpose → lower all-cause mortality, independent of wealth/health.
- **Tip `purpose`.**

### Reading books
- **Bavishi A, Slade MD, Levy BR (2016).** A chapter a day: book reading and longevity. *Soc Sci Med* 164:44–48.
- **Design:** Prospective cohort (Health & Retirement Study, 3,635, >50). **Evidence: Correlational.**
- **Finding:** >3.5 h/wk book reading → 23% lower mortality over 12 y (~2-year survival advantage); books, not newspapers/magazines.
- **Tip `reading`.** Charming; observational.

---

## Decisions for implementation

- **Part A** tips keep imperative, mechanistic phrasing.
- **Part B** tips: associational language only ("linked to", "tend to"); no lifespan promises. **Markers** (`grip`, `sitrise`) framed as *reflects/predicts*, not *do-this-to-live-longer*.
- Part B tips carry no objective `goals` (they target anyone). Suggest a `cat:"health"` tag so we can balance how often health vs. training tips surface.
- **Rigor cuts on the table:** `sitrise` (small sample, marker) and `sauna` (single-sex cohort) are the weakest; keep, soften, or drop.

_Last updated: 2026-06-03._
