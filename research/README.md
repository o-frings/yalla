# Growth-model rigor artifacts

Reproducible checks for Yalla's training-stimulus model (documented in
`../growth-model-whitepaper.pdf`). All are pure Node, no dependencies.

- **`growth-core.mjs`** — a DOM-free reference implementation mirroring `../app.js`
  (`growthStatus`, `doseStimulus`, `inferEffort`, `effortRepDenom`). The three scripts
  below import it. Keep it in sync with `app.js` when the model changes.

- **`growth-model.test.mjs`** — known-answer tests. Each case pairs a training scenario
  with a domain-expected verdict, so miscalibration or drift is caught without a
  body-composition study.
  Run: `node research/growth-model.test.mjs`

- **`sensitivity.mjs`** — perturbs each decision threshold ±10% over a synthetic
  population and reports how many muscles change state, showing which thresholds are
  load-bearing. (Current result: the growth-trend cutoff is by far the most sensitive.)
  Run: `node research/sensitivity.mjs`

- **`backtest.mjs`** — internal predictive-coherence check. At each past week it labels
  each exercise, then measures the actual estimated-1RM change over the following weeks;
  a coherent model has growing > holding > under-stimulated. Strength change is a proxy
  for hypertrophy, not a direct measure.
  Run: `node research/backtest.mjs [path-to-exported-history.json]`
  With no argument it runs on synthetic data to demonstrate the method; pass a real
  exported history for the actual test.

- **`simulate.mjs`** — behavioural showcase. Runs standard plans (Full-Body 3x,
  Upper/Lower 4x, Push/Pull/Legs 6x) over 24 weeks with a seeded PRNG, feeds them
  through the shared core, and contrasts regular against irregular (~55% of
  sessions) training. Writes a self-contained report `simulations.html` (inline SVG
  charts, colourblind-checked palette) and prints a console summary. Reproducible:
  same seed reproduces every number and chart.
  Run: `node research/simulate.mjs`

## Part II — predict → observe → re-parameterize (CALIBRATION-PLAN.md)

- **`ledger-core.mjs`** — reference implementation of the prediction ledger and the
  per-user Bayesian calibration: forecast emission (frozen inputs + posterior),
  symmetric-endpoint scoring (CRPS, PIT, interval hits), conjugate posterior updates
  with the effective-information correction, aggregate metrics, and a leakage-free
  walk-forward runner. Also the strength-specific dose-response `doseStimulusStrength`
  (strength saturates with volume faster than hypertrophy — plan §12a) and the
  strength→hypertrophy `bridgeThetaH` (feeds the learned strength multiplier into the
  Monte Carlo muscle forecast via a conservative bivariate-normal conditional — §12b).
  Mirrored compactly in `../app.js` (parity is enforced by test).

- **`ledger.test.mjs`** — the Part II verification suite: known-answer tests for the
  ledger mechanics (immutability, retro exclusion, K-freeze, gates, week edges, CRPS
  vs numeric integral), simulation-based calibration (users drawn from the prior;
  coverage, posterior-rank uniformity, recovery vs the attainable ceiling, skill vs
  the drift baseline), and numeric parity between app.js and the reference core.
  Run: `node research/ledger.test.mjs`

- **`ledger-backtest.mjs`** — walk-forward backtest on a real exported history
  (expanding window, no leakage): coverage, CRPS, skill vs "no change" and
  "personal drift" baselines, and the fitted response multiplier.
  Run: `node research/ledger-backtest.mjs [path-to-exported-history.json]`

- **`effectiveness.mjs`** — which exercises contribute most to strength gains:
  within-person TRANSFER analysis (does volume on X precede gains on the muscle's
  other lifts?), ridge-shrunk with block-bootstrap CIs; self-progression is excluded
  by design (exercise-specific skill). With no argument it runs a known-truth
  synthetic self-check.
  Run: `node research/effectiveness.mjs [path-to-exported-history.json]`

These raise rigor without new measurement (grounded thresholds, honest uncertainty,
falsifiable internal checks). Direct validation still requires longitudinal
body-composition data; see the white paper's "Assumptions and limitations".
