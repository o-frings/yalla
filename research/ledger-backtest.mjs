// ledger-backtest.mjs — walk-forward backtest of the calibrated forecaster (CALIBRATION-PLAN.md §11.3).
//
// Replays a training history week by week with an EXPANDING window: at each week it scores
// forecasts whose horizon completed, updates the per-user posterior from those errors, then emits
// new forecasts from past data only — no leakage by construction. Reports the plan-§8 metrics:
// interval coverage, CRPS, sharpness, and skill against the two fixed baselines (B0 "no change",
// B1 "personal drift"). The model earns its keep only if it beats B1.
//
// Usage:
//   node research/ledger-backtest.mjs [path-to-exported-history.json]
// With a real exported Yalla history it runs the true test; with no argument it demonstrates the
// method on a seeded synthetic lifter.

import { walkForward, ledgerMetrics, WK, R0, PRIOR_TH } from "./ledger-core.mjs";
import { doseStimulusStrength } from "./ledger-core.mjs";
import { defaultMuscleFor } from "./effectiveness.mjs";
import { readFileSync } from "node:fs";

let seed = 20260718;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const boxMuller = () => { const u = Math.max(rnd(), 1e-12), v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };

function syntheticLifter(weeks = 50) {
  const T0 = Math.ceil(1.7e12 / WK) * WK;
  const mTrue = Math.exp(0.35 * boxMuller());
  const names = { "Bench Press": ["Chest"], "Incline DB Press": ["Chest"], "Squat": ["Quads"], "Barbell Row": ["Upper Back"] };
  const hist = {}, logL = {};
  for (const n of Object.keys(names)) { hist[n] = []; logL[n] = Math.log(40 + rnd() * 60); }
  for (let k = 0; k < weeks; k++) {
    const high = Math.floor(k / 12) % 2 === 0;
    for (const n of Object.keys(names)) {
      if (rnd() < 0.15) continue;
      const sets = high ? 4 : 2;
      logL[n] += mTrue * R0 * doseStimulusStrength(sets * 2) * (high ? 1 : 0.5) + 0.012 * boxMuller();
      const reps = 5 + Math.floor(rnd() * 6);
      hist[n].push({ d: T0 + k * WK + 2 * 86400000, w: Math.exp(logL[n]) / (1 + reps / 30), r: reps, n: sets, ef: 1 });
    }
  }
  return { hist, mTrue };
}

const path = process.argv[2];
let hist, label, mTrue = null;
if (path) {
  const raw = JSON.parse(readFileSync(path, "utf8"));
  hist = raw.history || raw;
  label = "real data: " + path;
} else {
  ({ hist, mTrue } = syntheticLifter());
  label = "synthetic demonstration (no file given)";
}

const { ledger, calib, metrics: m } = walkForward(hist, defaultMuscleFor);
const pc = (v) => (100 * v).toFixed(1) + "%";
console.log(`\nWalk-forward ledger backtest  (${label})`);
console.log(`expanding window, no leakage · ${ledger.length} forecasts, ${m.n ?? 0} scored, ${m.unscorable ?? 0} unscorable\n`);
if (!m.n) { console.log("  Not enough history to score any forecast."); process.exit(0); }
console.log(`  coverage of 80% intervals   ${pc(m.coverage80)}   (target 80%, CI ${pc(m.coverage80CI[0])}–${pc(m.coverage80CI[1])})`);
console.log(`  mean CRPS                   ${m.meanCRPS.toFixed(4)} (log-gain units; lower is better)`);
console.log(`  sharpness (mean sd)         ${m.sharpness.toFixed(4)}`);
console.log(`  skill vs no-change (B0)     ${pc(m.skillVsNoChange)}`);
console.log(`  skill vs personal drift (B1) ${pc(m.skillVsDrift)}   ← the bar that matters`);
console.log(`  PIT uniformity (KS)         ${m.pitKS.toFixed(3)}`);
console.log(`\n  posterior response multiplier ×${Math.exp(calib.th.m).toFixed(2)}`
  + ` (95%: ×${Math.exp(calib.th.m - 1.96 * Math.sqrt(calib.th.v)).toFixed(2)}–×${Math.exp(calib.th.m + 1.96 * Math.sqrt(calib.th.v)).toFixed(2)})`
  + (mTrue ? `   [synthetic truth ×${mTrue.toFixed(2)}]` : ""));
const mus = Object.entries(calib.mus).filter(([, v]) => v.n >= 6);
if (mus.length) {
  console.log("  per-muscle deviations (≥6 scored):");
  for (const [g, v] of mus) console.log(`    ${g.padEnd(12)} ×${Math.exp(v.m).toFixed(2)} (n=${v.n})`);
}
if (!path) console.log("\n  (Synthetic demonstration; pass a real exported history for the actual test.)");
