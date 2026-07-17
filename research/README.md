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

These raise rigor without new measurement (grounded thresholds, honest uncertainty,
falsifiable internal checks). Direct validation still requires longitudinal
body-composition data; see the white paper's "Assumptions and limitations".
