// backtest.mjs — internal predictive-coherence check for the training-stimulus model.
//
// Without body-composition measurement we cannot test hypertrophy directly, but strength progression is a
// literature-supported proxy in a progressing trainee. Coherence check: at each past week the model labels
// an exercise growing / holding / under-stimulated from data up to that week; we then measure the actual
// change in estimated 1RM over the FOLLOWING weeks. If the model is coherent, "growing" labels should
// precede larger subsequent gains than "holding", and "holding" larger than "under-stimulated".
//
// Usage:
//   node research/backtest.mjs [path-to-history.json]
// With a real exported Yalla history ({ "Exercise": [ {d,w,r,n,ef}, ... ] }) it runs the true test.
// With no argument it generates synthetic data to demonstrate the method and its expected output shape.

import { classifyMuscle, effortOf, N } from "./growth-core.mjs";
import { readFileSync } from "node:fs";

const HORIZON = 4;              // weeks ahead to measure the outcome
const WK = 7 * 86400000;
const epley = (w, r) => w * (1 + r / 30);

// ---- build per-exercise weekly series from raw entries ----
function weeklySeries(entries, now) {
  const weeks = Math.ceil((now - Math.min(...entries.map((e) => e.d))) / WK) + 1;
  const sets = new Array(weeks).fill(0), e1 = new Array(weeks).fill(0);
  for (const e of entries) {
    const k = Math.floor((e.d - (now - weeks * WK)) / WK);
    if (k < 0 || k >= weeks) continue;
    sets[k] += (e.n || 1) * effortOf(e);
    const x = +e.w > 0 && +e.r > 0 ? epley(+e.w, +e.r) : 0;
    if (x > e1[k]) e1[k] = x;
  }
  return { sets, e1, weeks };
}

// classify at a window ending at week t (needs N weeks of lookback), outcome = e1RM %change over HORIZON.
function samples(hist, now) {
  const out = [];
  for (const name of Object.keys(hist)) {
    const entries = (hist[name] || []).filter((e) => +e.w > 0 && +e.r > 0);
    if (entries.length < 8) continue;
    const { sets, e1, weeks } = weeklySeries(entries, now);
    for (let t = N; t + HORIZON < weeks; t++) {
      const S = sets.slice(t - N, t), L = e1.slice(t - N, t);
      if (!S.some((v) => v > 0)) continue;
      const now1 = e1.slice(Math.max(0, t - 2), t).filter((v) => v > 0);
      const fut1 = e1.slice(t, t + HORIZON).filter((v) => v > 0);
      if (!now1.length || !fut1.length) continue;
      const base = Math.max(...now1), ahead = Math.max(...fut1);
      const { state } = classifyMuscle(S, L);
      out.push({ state, gain: (100 * (ahead - base)) / base });
    }
  }
  return out;
}

// ---- synthetic data generator (method demonstration only) ----
let seed = 987654;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
function syntheticHistory(nEx = 40, weeks = 30) {
  const hist = {};
  const now = 30 * weeks * 0 + 1_700_000_000_000; // fixed epoch (no Date dependency)
  for (let x = 0; x < nEx; x++) {
    const name = "Ex" + x;
    const respond = 0.4 + rnd() * 1.2;      // latent responsiveness
    let load = 60 + rnd() * 60;
    const baseSets = 1 + rnd() * 12;
    const drift = -0.4 + rnd() * 0.8;
    const arr = [];
    for (let k = 0; k < weeks; k++) {
      const s = Math.max(0, Math.round(baseSets + drift * (k - weeks / 2) + (rnd() - 0.5) * 2));
      // ground-truth weekly load gain driven by a real dose-response on the sets actually done + noise
      const stim = s > 0 ? 1 - Math.exp(-s / (10 / Math.log(5))) : 0;
      load *= 1 + respond * stim * 0.01 + (rnd() - 0.5) * 0.004;
      const d = now - (weeks - k) * WK;
      for (let i = 0; i < s; i++) {
        const reps = 5 + Math.floor(rnd() * 8);
        // invert load to a working weight for the given reps, with a little scatter
        const w = Math.round((load / (1 + reps / 30)) * (0.9 + rnd() * 0.08));
        arr.push({ d, w, r: reps, n: 1, ef: 1 });
      }
    }
    if (arr.length) hist[name] = arr;
  }
  return { hist, now: now };
}

// ---- run ----
const path = process.argv[2];
let hist, now, source;
if (path) {
  const raw = JSON.parse(readFileSync(path, "utf8"));
  hist = raw.history || raw;                 // accept the whole export or just the history object
  now = Math.max(...Object.values(hist).flat().map((e) => e.d));
  source = `real data: ${path}`;
} else {
  ({ hist, now } = syntheticHistory());
  source = "synthetic demonstration data (no file given)";
}

const s = samples(hist, now);
const by = (st) => s.filter((x) => x.state === st).map((x) => x.gain);
const stat = (a) => (a.length ? a.reduce((p, c) => p + c, 0) / a.length : NaN);

console.log(`\nPredictive-coherence backtest  (${source})`);
console.log(`window ${N} wk -> outcome = estimated-1RM %change over the next ${HORIZON} wk  ·  ${s.length} samples\n`);
console.log("  predicted state     n     mean subsequent e1RM change");
console.log("  " + "-".repeat(56));
let means = {};
for (const st of ["grow", "hold", "shrink"]) {
  const a = by(st);
  means[st] = stat(a);
  console.log(`  ${st.padEnd(16)} ${String(a.length).padStart(5)}     ${isNaN(means[st]) ? "  n/a" : (means[st] >= 0 ? "+" : "") + means[st].toFixed(2) + "%"}`);
}
const coherent = means.grow > means.hold && means.hold > means.shrink;
console.log(`\n  Monotonic (grow > hold > under-stimulated): ${coherent ? "YES — coherent" : "NO — investigate"}`);
if (!path) console.log("  (Synthetic data demonstrates the method; run with a real exported history for the actual test.)");
