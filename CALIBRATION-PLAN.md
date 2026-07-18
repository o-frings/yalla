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
  `Y_{x,k} = log( max(P_{x,k+1..k+H}) / P̂_{x,k} )`,
  where the baseline `P̂_{x,k} = max(P_{x,k-1..k})` is the best weekly peak over
  the two weeks up to and including the as-of week (mirrors backtest.mjs).
  Peak-over-window rather than single-week value: robust to one bad day; log
  scale: symmetric, and gains compose additively.
- **Validity gate**: an endpoint is scorable only if the baseline window has ≥1
  loaded entry and the outcome window has ≥2 loaded entries on that exercise.
  Otherwise the ledger record resolves to `unscorable` (kept, never dropped
  silently — dropped-if-bad is a selection bias).
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
- **Model.** `Y'_{g,k} = a_g + Σ_x β_x · s_{x,k} + γ·ρ(D_{g,k}) + δ·τ_{g,k} + φ·t + ε`,
  where `s_{x,k}` = exercise x's effective weekly sets. β partially pooled:
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

## 12. Execution batches

| Batch | Deliverable | Where |
|---|---|---|
| 0 | This plan | `CALIBRATION-PLAN.md` |
| 1 | Ledger + forecast core (pure) + app integration + minimal card | `research/ledger-core.mjs`, `app.js` |
| 2 | Per-user updating (conjugate posterior, variance estimation) | `research/ledger-core.mjs` (shared), `app.js` |
| 3 | Effectiveness script (ridge + block bootstrap + event-study) | `research/effectiveness.mjs` |
| 4 | SBC + known-answer tests + walk-forward backtest + whitepaper Part II + README | `research/*.test.mjs`, `growth-model-whitepaper.tex` |
| 5 (deferred) | Consent flow + export + pooled fitting | needs user decision (GDPR) |

Client code stays dependency-free vanilla JS mirroring the app's architecture;
every statistical routine lives in a pure `research/` module imported by tests,
with `app.js` carrying only thin glue — same pattern as `growth-core.mjs`.

## Changelog

- v1 (2026-07-18): initial plan.
