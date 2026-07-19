// effectiveness.mjs — which exercises contribute most to strength gains? (CALIBRATION-PLAN.md §7)
//
// Estimand: the TRANSFER effect — the association between one weekly effective set of exercise x
// and the 4-week log-strength-gain of the OTHER exercises sharing x's muscle, within person,
// holding total dose, trend, own practice, and time fixed. Self-progression is deliberately NOT
// the estimand: practicing a lift raises its own e1RM through skill alone (exercise specificity),
// so "X improves X" is uninformative; "X improves the rest of the muscle" is the signal that
// plausibly reflects tissue/general capacity.
//
// Design: within-person (muscle, week, target-exercise) cells; the target's OWN sets enter as a
// control coefficient, never as transfer. Per-exercise transfer coefficients are ridge-shrunk
// toward zero (partial pooling is the multiplicity control — no per-exercise p-value forest);
// λ picked by leave-block-out cross-validation (H-week blocks, respects serial correlation);
// uncertainty by moving-block bootstrap. Output language is associational by design.
//
// Usage:
//   node research/effectiveness.mjs [path-to-exported-history.json]
// With no argument, runs a synthetic self-check with known ground truth (A1 transfers, B1 doesn't)
// and reports recovery — the method demo doubles as a correctness check.
//
// Pure Node, no dependencies, no Date.now(); reproducible seeded PRNG for the bootstrap.

import { EFFORT_FACTOR } from "./growth-core.mjs";
import { weekOf, epley, WK, H, doseStimulusStrength } from "./ledger-core.mjs";
import { readFileSync } from "node:fs";

const MIN_OUTCOME_ENTRIES = 1;   // ≥1 loaded entry in the 2-week endpoint window (symmetric endpoint, plan §3)
const RIDGE_GRID = [0.25, 1, 4, 16, 64];
const BOOT = 500;
const BLOCK = H;             // moving-block length, in weeks

// ---------------- data assembly ----------------
// Default muscle mapping mirrors app.js muscleFor's regex fallback closely enough for research use;
// a real export can carry its own mapping via {muscles: {name: [groups]}}.
export function defaultMuscleFor(name) {
  const n = String(name).toLowerCase();
  if (/face pull|rear|reverse fly|reverse pec|band pull|bent.?over lateral|prone y/.test(n)) return ["Rear Delts", "Upper Back"];
  if (/wrist curl|forearm/.test(n)) return ["Forearms"];
  if (/adduction|adductor|cossack|copenhagen/.test(n)) return ["Adductors"];
  if (/\brow\b/.test(n)) return ["Upper Back", "Lats", "Biceps"];
  if (/pulldown|pull.?up|chin.?up|\blat\b|pullover/.test(n)) return ["Lats", "Biceps"];
  if (/bench|chest|\bpec\b|push.?up|\bdip\b|fly/.test(n)) return ["Chest", "Triceps"];
  if (/calf|calves/.test(n)) return ["Calves"];
  if (/leg curl|hamstring|nordic/.test(n)) return ["Hamstrings"];
  if (/deadlift|\brdl\b|romanian|good morning|hip thrust|glute|bridge|hinge|abduction/.test(n)) return ["Glutes", "Hamstrings"];
  if (/squat|leg press|lunge|step.?up|leg extension|\bquad/.test(n)) return ["Quads", "Glutes"];
  if (/curl/.test(n)) return ["Biceps"];
  if (/press|jerk|push/.test(n)) return ["Front Delts", "Triceps"];
  return ["Other"];
}

// Weekly per-exercise peak e1RM + entry counts + effective sets, absolute epoch weeks.
function assemble(hist, muscleFor, K = 30) {
  const ex = {};
  for (const name of Object.keys(hist)) {
    const groups = muscleFor(name) || ["Other"];
    const o = (ex[name] = { peak: {}, n: {}, sets: {}, groups });
    for (const e of hist[name] || []) {
      const k = weekOf(e.d);
      const eff = EFFORT_FACTOR[e.ef != null ? e.ef : 1] ?? 1;
      o.sets[k] = (o.sets[k] || 0) + (e.n != null ? +e.n : 1) * eff;
      const w = parseFloat(e.w) || 0, r = parseInt(e.r) || 0;
      if (w > 0 && r > 0) {
        const p = epley(w, r, K);
        if (p > (o.peak[k] || 0)) o.peak[k] = p;
        o.n[k] = (o.n[k] || 0) + 1;
      }
    }
  }
  return ex;
}

const winMax = (m, a, b) => { let x = 0; for (let k = a; k <= b; k++) { const v = m[k] || 0; if (v > x) x = v; } return x; };
const winCnt = (m, a, b) => { let s = 0; for (let k = a; k <= b; k++) s += m[k] || 0; return s; };
const winMean = (m, a, b) => winCnt(m, a, b) / (b - a + 1);

// Build the regression rows for one muscle g: one row per (target exercise x', as-of week k)
// with a valid H-week outcome on x'. Columns are named; 'tx:<name>' are the penalized transfer terms.
function buildRows(ex, g, weeks) {
  // exercises contributing to g, with their attribution weight α(x,g)
  const contrib = Object.keys(ex).filter((x) => ex[x].groups.includes(g));
  const alpha = {}; contrib.forEach((x) => { alpha[x] = ex[x].groups[0] === g ? 1 : 0.5; });
  const primaries = contrib.filter((x) => alpha[x] === 1);
  if (primaries.length < 2) return null;         // transfer needs at least two lifts on the muscle
  const rows = [];
  for (const xp of primaries) {
    const o = ex[xp];
    for (let k = weeks[0]; k <= weeks[1] - H; k++) {
      const base = winMax(o.peak, k - 1, k);
      if (!(base > 0)) continue;
      // symmetric 2-week endpoint windows (see ledger-core scoreLedger): asymmetric maxima carry an
      // order-statistics bias that here would correlate with logging frequency, i.e. with the exposures
      let nOut = 0; for (let j = k + H - 1; j <= k + H; j++) nOut += o.n[j] || 0;
      const ahead = winMax(o.peak, k + H - 1, k + H);
      if (nOut < MIN_OUTCOME_ENTRIES || !(ahead > 0)) continue;
      const y = Math.log(ahead / base);
      // Exposure alignment: the estimand is sets done DURING the outcome window (k+1..k+H) against
      // the gain over that window — pre-window exposure would measure forecasting, not effectiveness,
      // and attenuates the effect. Controls are PRE-window state only (dose ρ, trend τ, time): the
      // in-window total dose is a deterministic function of the exposures themselves, so controlling
      // for it would over-control — it forces substitution semantics and absorbs additive effects.
      let Dpre = 0, De = 0;
      contrib.forEach((x) => { Dpre += alpha[x] * winMean(ex[x].sets, k - 2, k); De += alpha[x] * winMean(ex[x].sets, k - 5, k - 3); });
      const tau = De > 0 ? Dpre / De : 1;
      const row = { y, k, xp, g, cols: { own: winMean(o.sets, k + 1, k + H), rhoPre: doseStimulusStrength(Dpre), tau, t: k } };
      for (const x of contrib) if (x !== xp) row.cols["tx:" + x] = alpha[x] * winMean(ex[x].sets, k + 1, k + H);
      rows.push(row);
    }
  }
  return rows.length >= 12 ? rows : null;         // too few cells → no estimate, say so rather than guess
}

// ---------------- ridge machinery (pure JS, small matrices) ----------------
function designMatrix(rows) {
  const txCols = [...new Set(rows.flatMap((r) => Object.keys(r.cols).filter((c) => c.startsWith("tx:"))))].sort();
  const ctlCols = ["own", "rhoPre", "tau", "t"];
  const names = ["_int", ...ctlCols, ...txCols];
  const X = rows.map((r) => names.map((c) => (c === "_int" ? 1 : r.cols[c] || 0)));
  const y = rows.map((r) => r.y);
  // standardize non-intercept columns (ridge fairness); remember scales to un-standardize βs
  const p = names.length, n = X.length, mu = new Array(p).fill(0), sd = new Array(p).fill(1);
  for (let j = 1; j < p; j++) {
    for (let i = 0; i < n; i++) mu[j] += X[i][j] / n;
    let v = 0; for (let i = 0; i < n; i++) v += (X[i][j] - mu[j]) ** 2 / n;
    sd[j] = Math.sqrt(v) || 1;
    for (let i = 0; i < n; i++) X[i][j] = (X[i][j] - mu[j]) / sd[j];
  }
  const penalized = names.map((c) => (c.startsWith("tx:") ? 1 : 0));
  return { X, y, names, mu, sd, penalized };
}

function ridgeSolve(X, y, penalized, lambda) {
  const n = X.length, p = X[0].length;
  const A = Array.from({ length: p }, () => new Array(p + 1).fill(0));
  for (let i = 0; i < n; i++)
    for (let j = 0; j < p; j++) {
      for (let l = j; l < p; l++) A[j][l] += X[i][j] * X[i][l];
      A[j][p] += X[i][j] * y[i];
    }
  for (let j = 0; j < p; j++) for (let l = 0; l < j; l++) A[j][l] = A[l][j];
  for (let j = 0; j < p; j++) A[j][j] += penalized[j] ? lambda : 1e-8;
  // gaussian elimination with partial pivoting
  for (let c = 0; c < p; c++) {
    let piv = c; for (let r = c + 1; r < p; r++) if (Math.abs(A[r][c]) > Math.abs(A[piv][c])) piv = r;
    [A[c], A[piv]] = [A[piv], A[c]];
    if (Math.abs(A[c][c]) < 1e-12) continue;
    for (let r = 0; r < p; r++) { if (r === c) continue; const f = A[r][c] / A[c][c];
      for (let l = c; l <= p; l++) A[r][l] -= f * A[c][l]; }
  }
  return A.map((row, j) => (Math.abs(row[j]) < 1e-12 ? 0 : row[p] / row[j]));
}

// leave-block-out CV over the λ grid: held-out blocks of BLOCK consecutive weeks.
function pickLambda(rows) {
  const { X, y, penalized } = designMatrix(rows);
  const ks = rows.map((r) => r.k), k0 = Math.min(...ks), k1 = Math.max(...ks);
  const blocks = [];
  for (let b = k0; b <= k1; b += BLOCK) blocks.push(rows.map((_, i) => ks[i] >= b && ks[i] < b + BLOCK));
  let best = RIDGE_GRID[0], bestErr = Infinity;
  for (const lam of RIDGE_GRID) {
    let err = 0, cnt = 0;
    for (const inB of blocks) {
      const trX = X.filter((_, i) => !inB[i]), trY = y.filter((_, i) => !inB[i]);
      const teX = X.filter((_, i) => inB[i]), teY = y.filter((_, i) => inB[i]);
      if (!teX.length || trX.length < X[0].length + 4) continue;
      const b = ridgeSolve(trX, trY, penalized, lam);
      teX.forEach((xr, i) => { const f = xr.reduce((a, v, j) => a + v * b[j], 0); err += (teY[i] - f) ** 2; cnt++; });
    }
    const m = cnt ? err / cnt : Infinity;
    if (m < bestErr) { bestErr = m; best = lam; }
  }
  return best;
}

// Moving-block bootstrap over weeks of the FULL pipeline — λ is re-chosen inside every resample,
// so the interval reflects selection uncertainty too, not just fit noise. Percentile CIs of a
// shrunken estimator still lean toward 0; the unshrunk OLS column is reported as a bias check.
function bootstrap(rows, rnd) {
  const ks = [...new Set(rows.map((r) => r.k))].sort((a, b) => a - b);
  const byWeek = new Map(); rows.forEach((r) => { (byWeek.get(r.k) || byWeek.set(r.k, []).get(r.k)).push(r); });
  const nBlocks = Math.max(1, Math.ceil(ks.length / BLOCK));
  const draws = {};
  for (let b = 0; b < BOOT; b++) {
    const sample = [];
    for (let i = 0; i < nBlocks; i++) {
      const start = Math.floor(rnd() * ks.length);
      for (let j = 0; j < BLOCK; j++) { const wkArr = byWeek.get(ks[(start + j) % ks.length]); if (wkArr) sample.push(...wkArr); }
    }
    if (sample.length < 12) continue;
    const lam = pickLambda(sample);
    const { X, y, names, sd, penalized } = designMatrix(sample);
    const beta = ridgeSolve(X, y, penalized, lam);
    names.forEach((c, j) => { if (c.startsWith("tx:")) (draws[c] = draws[c] || []).push(beta[j] / sd[j]); });
  }
  const ci = {};
  for (const c of Object.keys(draws)) {
    const a = draws[c].sort((x, y) => x - y), n = a.length;
    ci[c] = [a[Math.floor(0.05 * n)], a[Math.floor(0.95 * n)]];
  }
  return ci;
}

// ---------------- per-muscle analysis ----------------
export function effectiveness(hist, { muscleFor = defaultMuscleFor, K = 30, seed = 20260718 } = {}) {
  let s = seed; const rnd = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const ex = assemble(hist, muscleFor, K);
  const allWeeks = Object.values(ex).flatMap((o) => Object.keys(o.peak).map(Number));
  if (!allWeeks.length) return { muscles: {} };
  const weeks = [Math.min(...allWeeks), Math.max(...allWeeks)];
  const muscles = {};
  const gs = [...new Set(Object.values(ex).flatMap((o) => o.groups))];
  for (const g of gs) {
    const rows = buildRows(ex, g, weeks);
    if (!rows) continue;
    const lambda = pickLambda(rows);
    const { X, y, names, sd, penalized } = designMatrix(rows);
    const beta = ridgeSolve(X, y, penalized, lambda);
    const betaOLS = ridgeSolve(X, y, penalized, 1e-8);   // unshrunk fit: shrinkage-bias diagnostic
    const ci = bootstrap(rows, rnd);
    const out = [];
    names.forEach((c, j) => {
      if (!c.startsWith("tx:")) return;
      const b = beta[j] / sd[j];                        // per raw weekly effective set
      out.push({ exercise: c.slice(3), beta: b, ols: betaOLS[j] / sd[j], ci: ci[c] || [NaN, NaN],
                 signal: ci[c] && (ci[c][0] > 0 || ci[c][1] < 0) });
    });
    out.sort((a, b) => b.beta - a.beta);
    muscles[g] = { nCells: rows.length, lambda, transfer: out };
  }
  return { muscles };
}

// ---------------- synthetic self-check ----------------
function synthetic() {
  let s = 7; const rnd = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const t0 = 1_700_000_000_000, weeks = 60, hist = {};
  // Chest: "A-press" has a TRUE transfer effect on the muscle (β=0.004 per weekly set on others'
  // 4-wk log gain); "A-fly" has none. "A-bench" is the readout lift. All get practiced.
  const names = { "A-bench": 0, "A-press": 0.004, "A-fly": 0 };
  const load = { "A-bench": 100, "A-press": 60, "A-fly": 20 };
  const setsOf = {};
  for (const x of Object.keys(names)) {
    setsOf[x] = Array.from({ length: weeks }, () => (rnd() < 0.15 ? 0 : 2 + Math.floor(rnd() * 4)));
  }
  for (const x of Object.keys(names)) hist[x] = [];
  for (let k = 0; k < weeks; k++) {
    // weekly gain of each lift = own practice skill (linear in sets, matching the model's own-sets
    // control) + transfer from the others' TRUE effects + noise
    for (const x of Object.keys(names)) {
      if (!setsOf[x][k]) continue;
      let gain = 0.0005 * setsOf[x][k];                               // own skill drift
      for (const z of Object.keys(names)) if (z !== x) gain += (names[z] * setsOf[z][k]) / H;
      load[x] *= 1 + gain + (rnd() - 0.5) * 0.012;
      const reps = 6 + Math.floor(rnd() * 6);
      hist[x].push({ d: t0 + k * WK + 2 * 86400000, w: Math.round(load[x] / (1 + reps / 30) * 10) / 10, r: reps, n: setsOf[x][k], ef: 1 });
    }
  }
  return hist;
}

// ---------------- CLI ----------------
const isMain = process.argv[1] && import.meta.url.endsWith(process.argv[1].split("/").pop());
if (isMain) {
  const path = process.argv[2];
  let hist, label;
  if (path) { const raw = JSON.parse(readFileSync(path, "utf8")); hist = raw.history || raw; label = "real data: " + path; }
  else { hist = synthetic(); label = "synthetic self-check (A-press has true transfer 0.004/set, A-fly has 0)"; }
  const res = effectiveness(hist, path ? {} : { muscleFor: () => ["Chest", "Triceps"] });
  console.log(`\nExercise-effectiveness (transfer) analysis — ${label}`);
  console.log("β = association of one weekly effective set with the OTHER lifts' 4-week log-strength gain");
  console.log("(within person; shrunk toward 0; 90% block-bootstrap CI; associational, not an RCT)\n");
  for (const g of Object.keys(res.muscles)) {
    const m = res.muscles[g];
    console.log(`  ${g}  (${m.nCells} cells, λ=${m.lambda})`);
    for (const t of m.transfer) {
      const pct = (v) => (100 * v).toFixed(2) + "%";
      console.log(`    ${t.exercise.padEnd(28)} ${pct(t.beta).padStart(8)}/set  [${pct(t.ci[0])}, ${pct(t.ci[1])}]  (unshrunk ${pct(t.ols)})  ${t.signal ? "← signal" : ""}`);
    }
  }
  console.log("\n  A muscle appears only with ≥2 primary lifts and ≥12 valid cells; everything else is 'not estimable', not zero.");
  console.log("  90% intervals flag ~1 in 10 truly-null exercises by construction — treat isolated borderline signals accordingly.");
}
