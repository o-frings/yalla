# Yalla Part II — Predict → Observe → Re-parameterize

Statistical analysis plan (SAP) for turning the v2.1 mechanistic training-stimulus
model into a calibrated, self-correcting forecast model, and for estimating
which exercises contribute most to strength gains. Written before implementation,
pre-registration style: estimands, endpoints, scoring rules, and decision rules are
fixed here, ex ante. Deviations get logged in the Changelog at the bottom.

Status of each section is tracked in "Execution batches" at the end.

---

## 1. Objectives

1. **O1 — Calibrated forecasts.** The app states, per exercise, a probabilistic
   forecast of strength change over a fixed horizon, records it immutably *before*
   the outcome exists, scores it when the outcome arrives, and updates per-user
   parameters from the errors.
2. **O2 — Personalization.** Population priors (the literature values of v2.1)
   are the starting point; each user's forecast errors move their personal
   posterior. A slow responder's forecasts narrow onto their true rate.
3. **O3 — Exercise effectiveness.** Estimate, within person, which exercises
   produce the largest strength gains on their target muscle, via transfer
   (does exercise A's volume raise strength on *other* exercises of the same
   muscle?), not self-progression alone.
4. **O4 — Pooled study (deferred).** With opt-in anonymous exports from many
   users, fit the same models with partial pooling across users. Design here,
   implementation deferred until there are users to pool.

## 2. What we can and cannot observe

- Observable: logged sets — date, top-set load `w`, top-set reps `r`, set count
  `n`, effort code `ef`. From these, the Epley estimated 1RM
  `φ(w,r) = w·(1+r/K)` per entry.
- Not observable: muscle size. Every claim in Part II is about **strength**
  (estimated 1RM), a legitimate endpoint in its own right (Pelland et al. 2026
  has a separate strength dose–response arm). Strength is *not* treated as a
  hypertrophy measurement.
- Known biases of the observable, handled explicitly in §3:
  - **Exercise-specific skill.** Practicing a lift raises its own e1RM without
    tissue change, especially early. Consequence: O3 must be identified from
    transfer, never from self-progression (§7).
  - **Effort/K noise.** φ depends on K (self-calibrated, clamped [20,40]) and
    on which set was the top set. Weekly *peak* + within-user differencing
    absorb most of this; the rest goes into the observation-noise term.
  - **Selective logging.** People may skip logging weak days (missingness
    related to the outcome). §9.

## 3. Outcome definition (fixed)

- Time is bucketed into **absolute epoch weeks**: `week(d) = floor(d / (7·86400000))`.
  Absolute buckets (not rolling-from-now) make "the outcome of week k" a fixed
  quantity regardless of when it is computed.
- Per exercise x and week k, the **weekly peak** `P_{x,k} = max φ(w,r)` over that
  week's entries with `w>0, r>0` (bodyweight/timed entries carry no e1RM and are
  excluded from outcomes, as in v2.1's load trend).
- **Primary endpoint** (per exercise): realized log-gain over horizon H=4 weeks,
  endpoint-to-endpoint with **symmetric two-week windows**:
  `Y_{x,k} = log( max(P_{x,k+H-1..k+H}) / P̂_{x,k} )`,
  where the baseline `P̂_{x,k} = max(P_{x,k-1..k})` is the best weekly peak over
  the two weeks up to and including the as-of week. Two-week maxima rather than
  single-week values: robust to one bad day; log scale: symmetric, gains compose
  additively. The windows must be the same length on both sides: the expected
  maximum of n noisy peaks grows with n, so an asymmetric definition (e.g. max
  over the whole 4-week window) systematically overshoots the baseline by
  ~0.5·σ_obs and mis-calibrates everything downstream (found by SBC, v1.2).
- **Validity gate**: an endpoint is scorable only if the baseline window has ≥1
  loaded entry and the endpoint window (k+H−1..k+H) has ≥1 loaded entry on that
  exercise. Otherwise the ledger record resolves to `unscorable` (kept, never
  dropped silently — dropped-if-bad is a selection bias).
- Secondary endpoint (per muscle g): same construction on
  `P_{g,k} = max over primary exercises of g` (mirrors `progMuscleLoad`).

## 4. Forecast model (the thing being calibrated)

v2.1 outputs discrete states (grow/hold/under-stimulated). A ledger needs a
predictive *distribution* for the primary endpoint. Structure (per exercise x
with primary muscle g, as of week k):

```
μ_{x,k} = h · r0 · m_u · ρ(D_g) · η(effort) · o(trend) · c(x)
Y_{x,k} ~ Normal(μ_{x,k}, σ²_u + σ²_obs,x)
```

- `h = 4` (weeks, the horizon), so μ is a 4-week expected log-gain.
- `r0` — population weekly base rate of log-strength gain at full stimulus.
  Prior centered at 0.0075 (≈0.75 %/wk, novice-to-intermediate mixed lifting;
  wide prior, see §5 — the data moves it).
- `m_u` — the user's response multiplier, the main learned parameter
  (v2.1's Hubal-spread `m`, now given a posterior). Learned on log scale.
- `ρ(D_g)` — the v2.1 dose–response `1 − exp(−D/s₀)` at the recent effective
  weekly dose of the primary muscle. Unchanged from v2.1.
- `η(effort)` — mean effort factor of the recent window (v2.1 ε values).
- `o(trend)` — overload factor: 1 when v2.1's trend τ_g ≥ 1 (progressing),
  0.5 when flat, 0.15 when τ < 0.75 (eased off) — the same shape the Monte
  Carlo forecast uses; treated as structural, not fitted (too few states to
  identify from one user).
- `c(x)` — exercise-level multiplier for O3, partially pooled toward 1 (§7).
  In Batch 1–2, c(x) ≡ 1.
- `σ²_obs,x` — measurement noise of the endpoint, estimated per user from
  short-horizon variability of `P_{x,k}` (median-based, robust). `σ²_u` —
  residual forecast error beyond measurement noise, learned (§5).

Design rule: **structure from v2.1 and the literature; magnitude and spread
from the user's own data.** The dose–response shape, effort weights, and
overload states stay fixed; `r0·m_u` (one product per user), `c(x)`, and the
variance components are what observation re-parameterizes.

## 5. Per-user updating (Batch 2)

Bayesian, conjugate, exact — no MCMC in the client:

- Let `θ_u = log(m_u)`. Prior `θ_u ~ Normal(0, 0.35²)` — spans Hubal's
  observed responder range around the literature base rate.
- Each scored, scorable record gives a likelihood on θ_u after linearization
  on the log scale:
  `log(Y/μ̂₀)` where `μ̂₀` is the forecast mean at θ_u = 0... — implemented as
  Normal–Normal update on `z = log-gain residual`, with known variance
  `σ²_obs,x + σ²_u`: posterior precision adds, posterior mean is
  precision-weighted. Closed form, one multiply-add per observation.
- Negative/zero gains are informative and enter like any observation (log-gain
  is defined on ratios of positive peaks; a strength *loss* is a negative Y).
- `σ²_u` via method of moments on standardized residuals, floored at 0, updated
  after every K=8 scored records (re-estimating variance every observation on
  tiny n is noise).
- **Guard rails**: posterior for m_u clamped to [0.2, 3.0] (outside Hubal's
  range = data problem, not physiology); updates use only records emitted with
  `retro: false` (§6) — the model never fits itself to hindsight.
- Muscle-level deviations (chest responds faster than calves for this user):
  second-stage Normal–Normal with a tight prior (sd 0.15 on log scale) around
  the user-level posterior. Only activated once a muscle has ≥6 scored records.
- Everything runs on device; the calibration state is a small JSON object
  (per-user posterior mean/var, per-muscle deltas, variance estimates,
  n scored) persisted alongside the other stores and synced like them.

## 6. Prediction ledger (Batch 1) — the honesty mechanism

Append-only store `predledger`, one record per (exercise, as-of week):

```
{ id, v: <model version>, t: <emission timestamp>, k: <as-of epoch week>,
  x: <exercise>, g: <primary muscle>, h: 4,
  mu, sd,                       // predictive distribution of Y (log-gain)
  in: {D, rho, eff, trend, o, base, mUmean, mUvar},  // inputs frozen at emission
  retro: false,                 // true = backfilled retrodiction (never scored for calibration)
  st: "pending",                // pending → scored | unscorable
  out?: {y, pit, crps, hit80, scoredAt}
}
```

Rules (fixed):
1. **Emit-before-observe.** A record is emitted at most once per exercise per
   epoch week, at workout-save time, from data up to that moment, with the
   parameter posterior *currently in force* frozen into the record.
2. **Immutable predictions.** Scoring writes only the `out` block and flips
   `st`; `mu`, `sd`, `in` are never touched after emission.
3. **Retrodictions are labeled.** Backfilled records over pre-ledger history
   (useful for cold-start diagnostics) carry `retro: true`, are excluded from
   calibration updates and from all confirmatory metrics, and are reported
   separately if at all.
4. **Nothing vanishes.** Records that fail the validity gate become
   `unscorable`, not deleted; the unscorable rate is itself a reported metric
   (high rate = selective logging, see §9).
5. Emission gate: an exercise gets a forecast only with ≥3 prior loaded weeks
   (else there is no baseline worth predicting from).

## 7. Exercise effectiveness (Batch 3) — estimand and identification

- **Estimand.** For exercises x targeting muscle g: the effect of one weekly
  effective set of x on the H-week log-strength-gain of muscle g's *other*
  exercises, within person, holding total dose and trend fixed. This is a
  transfer effect — the part of strength that plausibly reflects tissue/
  general capacity rather than practicing the test.
- **Design.** Within-person only. Unit of analysis: (muscle, week) cells.
  Response: `Y'_{g,k}` = mean H-week log-gain over muscle g's loaded exercises,
  computed *excluding* exercise x's own progression when estimating x's
  coefficient (leave-own-lift-out).
- **Model.** `Y'_{g,k} = a_g + Σ_x β_x · s_{x,k} + γ·ρ(D_{g,k-}) + δ·τ_{g,k} + φ·t + ε`,
  where `s_{x,k}` = exercise x's effective weekly sets *during the outcome
  window* (exposure and outcome aligned — pre-window exposure measures
  forecasting, not effectiveness, and attenuates β), and the dose control
  `ρ(D_{g,k-})` is the **pre-window** dose state. The in-window total dose is a
  deterministic function of the exposures, so controlling for it would
  over-control (substitution semantics, additive effects absorbed).
  β partially pooled:
  ridge toward 0 on the deviation scale (equivalently β_x ~ Normal(β̄_g, λ)),
  closed-form ridge in pure JS. Shrinkage replaces per-exercise significance
  testing — the multiplicity control is the prior, not a p-value forest.
- **Uncertainty.** Moving-block bootstrap over weeks (blocks of H, respects
  serial correlation), 500 resamples, percentile intervals.
- **Confounding, stated honestly.** Within-person contrasts remove stable
  person-level confounders; time-varying ones (sleep, bulk/cut, program
  changes) remain. Exercise-mix *changes* ("natural experiments": user swaps
  leg press for hack squat) get a dedicated event-study readout — gain slope
  before vs after the swap on the unchanged lifts. Output language: "for you,
  weeks with more X preceded larger gains on your other g-lifts" — association
  with design safeguards, no RCT claim.
- Single-user n is small; this ships as a research script over an exported
  history first (runnable today on Oliver's own log), and becomes an in-app
  card only when its own bootstrap says it has signal (interval excluding 0).

## 8. Scoring & reported metrics (fixed ex ante)

Per scored record: Gaussian **CRPS** (closed form), **PIT** value, **hit80**
(realized Y inside the central 80% interval). Aggregates reported:

- **Calibration**: empirical coverage of 80% intervals (target 0.80 ± binomial
  CI), PIT-uniformity (Kolmogorov–Smirnov distance, descriptive).
- **Sharpness conditional on calibration**: mean predictive sd.
- **Skill**: mean CRPS vs two fixed baselines — (B0) "no change" (μ=0, same sd),
  (B1) "personal drift" (μ = user's trailing mean gain). Skill score
  `1 − CRPS/CRPS_B`. The model earns its keep only if it beats B1, not just B0.
- Metrics are computed over non-retro records only, and separately per horizon
  cohort so early records don't get double-weighted (each record scores once).

## 9. Missing & irregular data

- Irregular logging is the norm, not an exception: all series are built on
  absolute weeks with explicit gaps; forecasts simply aren't emitted without a
  baseline (§6 gate); outcomes without enough future entries are `unscorable`.
- The unscorable + skipped-emission rates are surfaced (a silent 60% drop
  would otherwise fake good calibration on the easy weeks).
- Sensitivity (research script, not client): re-score treating "user logged
  nothing for the outcome window" as a −2% gain (pessimistic imputation) and
  check the coverage conclusion is unchanged in direction.

## 10. Pooled anonymous study (design only; deferred)

- Opt-in export: per-user record with random UUID (no account linkage), coarse
  age band (decade), sex, training-age band, unit system, and the raw
  (exercise-name-normalized) entry stream. No names, emails, GPS, device IDs,
  free-text. K-anonymity check on the (age band × sex × training-age) cells
  before any publication; small cells suppressed.
- Model: §7's model with a user level added (β_x gets user-random slopes,
  partial pooling across users) — fitted offline (Python/Stan or R/brms), not
  in the client. The client-side export format is versioned so records from
  different app versions remain poolable.
- GDPR: needs a real consent flow + data-processing note before the Supabase
  side wakes up. Explicit user decision required — flagged, not implemented.

## 11. Validation before believing (Batch 4)

1. **Simulation-based calibration (SBC).** Generate synthetic users with known
   (m_u, σ) from the prior, run the full emit→score→update loop, check (a) the
   posterior on m_u concentrates on the truth (recovery), (b) rank statistics
   of the truth under the posterior are uniform (no over/under-confidence),
   (c) empirical 80% coverage ≈ 80% on forecasts.
2. **Known-answer tests** for the ledger mechanics: immutability, retro
   exclusion, unscorable handling, once-per-week emission, epoch-week edges.
3. **Backtest upgrade**: run the calibrated forecaster in walk-forward mode
   (expanding window, no leakage) over a real exported history and report the
   §8 metrics vs both baselines.
4. Only after 1–3 pass does the UI show forecast numbers; before that the card
   shows state + "calibrating (n of 10 forecasts scored)".

## 12. Strength ≠ hypertrophy: de-conflation and the bridge (Batch 6)

The two forecasts predict *different quantities*: the mechanistic Monte Carlo
projects **muscle size** (% CSA); the ledger predicts **strength** (Δlog e1RM).
The claims are kept separate and correctly labelled. But two pieces of the
*machinery* silently reuse hypertrophy-calibrated components inside the strength
forecast, and the two forecasts never talk to each other though they share a
latent quantity. Batch 6 fixes both.

### 12a. The de-conflation (the error)

The ledger's forecast mean is `μ = H·r0·m_u·ρ(D)·η·o` (§4). Here `r0` and `m_u`
are strength-calibrated (correct), but `ρ(D)` and `η` are imported unchanged from
the mechanistic model, where they were fitted to **hypertrophy** data:

- `ρ(D)` (dose–response) is calibrated so 10 sets ≈ 0.8 of attainable *muscle*
  stimulus. Strength saturates with volume **faster** than size does (strength is
  more intensity- than volume-driven; the volume dose–response for strength is
  flatter and plateaus earlier — Pelland et al. strength arm). Using the muscle
  curve for a strength prediction is a genuine mis-specification.
- Because `m_u` is fitted to strength, the model stays *marginally* calibrated,
  but a single scalar cannot repair a wrong dose *slope*: it will be
  conditionally miscalibrated across volume (over/under-confident at high vs low
  weekly sets). SBC only catches this when a user's dose varies widely.

**Fix.** Introduce a strength-specific saturating dose–response
`ρ_S(s) = 1 − e^{−s/s0_S}` with its own scale `s0_S`, set so `ρ_S(target_S)=0.8`
at a strength "practical target" volume `target_S`. Pelland 2026 reports the
strength–volume curve has **"considerably more pronounced diminishing returns"**
than hypertrophy (hypertrophy stays productive to ~31 fractional sets/wk; strength
plateaus much earlier and is more intensity- than volume-driven). Accordingly
**`target_S = 5`** effective sets/wk (vs 10 for hypertrophy) ⇒ **`s0_S = 5/ln 5 ≈
3.107`** (vs the hypertrophy `s0 ≈ 6.21`). This makes `ρ_S(5)=0.8`, `ρ_S(2)≈0.47`,
`ρ_S(10)≈0.96` — strength captures ~80% of its attainable volume benefit by ~5
sets and saturates roughly twice as fast in volume as size. Use `ρ_S` in the
ledger; keep `ρ` (hypertrophy) in the Monte Carlo. Effort `η`: **kept as-is** — the
proximity-to-failure effect on strength is smaller than on hypertrophy, but the
effort control is only three coarse bands (0.5/1/1) and that second-order
difference is below its resolution; the load-driven nature of strength already
enters through the e1RM outcome and the overload factor `o`. The de-conflation is
the dose-response curve.

### 12b. The bridge (connecting the two)

Both forecasts carry an **individual response multiplier** on the log scale:
`θ_H = log(indiv)` in the Monte Carlo (hypertrophy), currently drawn *at random*
from `N(0, σ_H²)`; and `θ_S = log(m_u)` in the ledger (strength), *learned* from
graded forecasts. Treat them as bivariate normal with correlation `ρ_sh`:

```
[θ_S, θ_H] ~ N(0, [[σ_S², ρ_sh σ_S σ_H], [ρ_sh σ_S σ_H, σ_H²]])
```

Then the hypertrophy multiplier, conditioned on what strength has revealed, is

```
θ_H | θ_S ~ N( β·θ_S , σ_H²(1 − ρ_sh²) ),   β = ρ_sh·σ_H/σ_S.
```

So the Monte Carlo, instead of drawing `θ_H ~ N(0, σ_H²)`, draws from this
conditional — folding in the ledger posterior uncertainty of `θ_S` by first
sampling `θ_S ~ N(θ̂_S, v_S)` then `θ_H | θ_S`. This is exactly "we can't see
muscle growth, but we can see strength, so let strength personalise the muscle
forecast" — the original objective.

**Constants (from the Batch-6 literature review).**
- **`ρ_sh = 0.3`** (sensitivity range 0.15–0.5), set **conservatively low**. The
  individual-level correlation between size change and strength change is weak in
  the direct evidence: Ahtiainen et al. 2016 (n≈287) report r=0.157 (≈2.5% shared
  variance) for quad CSA vs leg-extension force; Buckner/Loenneke syntheses put it
  at 3–5% of variance between subjects; Balshaw et al. 2017 find hypertrophy
  explains 18.7% of individual strength-gain variance (r≈0.46), still second to
  neural drive (30.6%); the most generous within-subject / HLM methods
  (Vigotsky et al. 2018; Taber et al. 2019) reach ~24% and, only in long-term
  *trained* cohorts, up to ~65%. 0.3 sits at the low-moderate end, honest for a
  user base whose strength signal is richest early (when the coupling is weakest).
- **`σ_H = 0.55`, `σ_S = 0.35`** — taken from the two models' own calibrations
  (the MC hypertrophy-multiplier spread and the ledger strength prior). Note the
  evidence on which is larger is mixed: Hubal 2005 raw 12-wk change CVs are
  similar (CSA 0.48–0.51 vs 1RM 0.55–0.59, the latter skill-inflated on an
  untrained arm), while the responder-rate literature has ~30% hypertrophy
  non-responders vs only ~7% for strength (hypertrophy *propensity* more variable).
  Because `ρ_sh` is low, the bridge is insensitive to this ratio: with `ρ_sh=0.3`,
  `β = ρ_sh·σ_H/σ_S ≈ 0.47`, and the conditioned band `σ_H√(1−ρ_sh²) = 0.525`
  is barely below the unconditional 0.55. The bridge **shifts the center modestly
  and hardly narrows the band** — the intended behaviour for a weak proxy.
- **Do not cite Hubal for the correlation.** Hubal 2005 reports response *ranges
  and CVs*, not a size-vs-strength r; the correlation cites are Ahtiainen 2016,
  Balshaw 2017, and the Vigotsky/Taber reviews.
- **Gate.** The bridge activates only once the ledger has ≥10 scored forecasts
  (same threshold as the card) *and* `v_S` is meaningfully below the prior; before
  that the Monte Carlo keeps its unconditional draw. No pretending to personalise
  on no data.
- **Strength is a biased proxy.** Early strength gain is neural/skill, not tissue.
  The transfer estimand (§7) is the principled decomposition that isolates the
  tissue-linked component; the bivariate-normal bridge is the pragmatic
  first-order version. The full per-muscle latent-factor state-space model
  (strength = fast exercise-specific skill + slow shared capacity; the shared
  factor loads on both strength and the hypertrophy forecast) is noted as the
  principled successor and deferred.

### 12c. Verification

- **Bridge recovery/calibration.** Simulate lifters with known `(θ_S, θ_H)` drawn
  from the bivariate normal; run the ledger to learn `θ_S`; apply the bridge;
  check the conditional hypertrophy forecast (i) reduces error vs the
  unconditional draw when `ρ_sh>0`, and (ii) does **not** become overconfident
  (coverage of the muscle-gain band stays ≥ nominal). A degenerate check at
  `ρ_sh=0` must exactly reproduce the unconditional forecast.
- **De-conflation.** Re-run the ledger SBC/backtest with `ρ_S`; confirm coverage
  and skill are preserved, and add a conditional-calibration check across dose
  tertiles (the failure mode `ρ_S` is meant to remove).

## 13. Execution batches

| Batch | Deliverable | Where |
|---|---|---|
| 0 | This plan | `CALIBRATION-PLAN.md` |
| 1 | Ledger + forecast core (pure) + app integration + minimal card | `research/ledger-core.mjs`, `app.js` |
| 2 | Per-user updating (conjugate posterior, variance estimation) | `research/ledger-core.mjs` (shared), `app.js` |
| 3 | Effectiveness script (ridge + block bootstrap + event-study) | `research/effectiveness.mjs` |
| 4 | SBC + known-answer tests + walk-forward backtest + whitepaper Part II + README | `research/*.test.mjs`, `growth-model-whitepaper.tex` |
| 5 (deferred) | Consent flow + export + pooled fitting | needs user decision (GDPR) |
| 6 | Strength dose–response de-conflation + strength→hypertrophy bridge + verification | `research/ledger-core.mjs`, `app.js`, `research/*.test.mjs`, whitepaper |
| 7 (deferred) | Per-muscle latent-factor state-space model (skill vs shared capacity) | design only |

Client code stays dependency-free vanilla JS mirroring the app's architecture;
every statistical routine lives in a pure `research/` module imported by tests,
with `app.js` carrying only thin glue — same pattern as `growth-core.mjs`.

## Changelog

- v1 (2026-07-18): initial plan.
- v1.1 (2026-07-18, during Batch 3): §7 estimand clarified after the synthetic
  self-check exposed two specification errors — (a) exposure is now measured
  during the outcome window, not before it (pre-window exposure attenuated the
  true effect ~2.5×); (b) the dose control is the pre-window state, because the
  in-window dose is a deterministic function of the exposures (over-control:
  the true-zero exercises picked up spurious negative "signals"). Both changes
  were made against a known-truth synthetic, before any real data was analyzed.
- v1.2 (2026-07-18, during Batch 4): calibration defects found by SBC and fixed
  before any real data: (a) §3 endpoint made symmetric (two-week windows both
  sides) — the original max-over-4-weeks outcome vs max-over-2 baseline carried
  an order-statistics bias of ~0.5·σ_obs that skewed posterior ranks; validity
  gate now ≥1 entry in the 2-week endpoint window. (b) §5 observation precision
  scaled by 1/(H+2): 1/H is derivable from the overlapping outcome windows;
  the further /1.5 covers residual dependence (baseline–endpoint chaining,
  same-muscle lifts sharing dose) and is calibrated on SBC rank-uniformity —
  final z-scores of the truth under the posterior: mean 0.18, sd 1.07 (target
  0, 1). (c) the load-trend τ_L now averages trained weeks only — zeros in a
  peak series read "didn't train" as "got weaker", spuriously dropping the
  overload factor (dose means keep zeros; the dose really was zero). (d) the
  recovery test compares against the calibrated-Bayes attainable ceiling
  sqrt(1 − E[post var]/prior var) instead of a fixed threshold.
- v1.1 also: §5 updating relinearizes at the current posterior mean (EKF-style)
  — fixed-point linearization biased extreme responders outward (0.4→0.55,
  2.0→2.55 in recovery tests; unbiased after the change); the measurement-noise
  estimator median-detrends successive differences so true weekly gain does not
  inflate it; outcomes are scored with the Epley K frozen at emission (§6 rule).
- v2 (2026-07-19): §12 added — strength/hypertrophy de-conflation and the bridge
  (Batch 6). Prompted by the observation that the mechanistic Monte Carlo predicts
  *muscle size* while the ledger predicts *strength*, yet the ledger reused the
  hypertrophy-calibrated dose-response. Literature reviewed (Pelland 2026 for the
  strength dose-response shape; Ahtiainen 2016, Balshaw 2017, Buckner/Loenneke,
  Vigotsky 2018, Taber 2019 for the size↔strength coupling; Hubal 2005 for
  response spread). Constants fixed: `s0_S = 5/ln5 ≈ 3.107`, `ρ_sh = 0.3`,
  `σ_H = 0.55`, `σ_S = 0.35`. Design deliberately conservative: strength nudges
  the muscle forecast, never pins it (early strength gain is heavily neural/skill,
  a biased proxy for hypertrophy).
