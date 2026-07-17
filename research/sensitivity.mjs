// sensitivity.mjs — threshold sensitivity analysis for the training-stimulus model.
//
// The state thresholds (maintenance floor, MEV, and the trend cutoffs 0.75 / 1.08 / 1.15) are hand-set.
// This script quantifies how fragile the classification is to each one: it builds a synthetic population,
// perturbs one threshold at a time by +/-10%, and reports what fraction of muscles change state. A
// load-bearing threshold flips many muscles (defend it carefully); a cosmetic one flips few.
//
// Run: `node research/sensitivity.mjs`. Deterministic (seeded), so results are reproducible.

import { classifyMuscle, N } from "./growth-core.mjs";

// Small seeded PRNG so runs are reproducible without a Date/Math.random dependency.
let seed = 12345;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);

// Build a population of plausible muscle histories: a base weekly-set level with drift and noise, and a
// load series that drifts with its own trend. Covers under-dosed, maintenance, and growing regimes.
function population(n = 4000) {
  const pop = [];
  for (let i = 0; i < n; i++) {
    const base = 0.5 + rnd() * 14;               // 0.5..14.5 sets/wk
    const drift = -0.5 + rnd() * 1.0;            // per-week change in sets
    const loadTrend = -0.03 + rnd() * 0.09;      // per-week fractional load change
    const S = [], L = [];
    let load = 80 + rnd() * 40;
    for (let k = 0; k < N; k++) {
      S.push(Math.max(0, base + drift * (k - N / 2) + (rnd() - 0.5) * 2));
      load *= 1 + loadTrend + (rnd() - 0.5) * 0.01;
      L.push(load);
    }
    pop.push({ S, L });
  }
  return pop;
}

const POP = population();
const baseStates = POP.map((p) => classifyMuscle(p.S, p.L).state);

const flipRate = (thr) => {
  let flips = 0;
  POP.forEach((p, i) => {
    if (classifyMuscle(p.S, p.L, thr).state !== baseStates[i]) flips++;
  });
  return (100 * flips) / POP.length;
};

const params = [
  ["maintenance floor (mv=2)", "mv", 2],
  ["min effective volume (mev=6)", "mev", 6],
  ["sharp-drop cutoff (0.75)", "down", 0.75],
  ["growth trend cutoff (1.08)", "up", 1.08],
  ["climb cutoff (1.15)", "climb", 1.15],
];

console.log(`\nSensitivity of muscle-state classification to each threshold (+/-10%), n=${POP.length}`);
console.log("Base distribution:",
  ["grow", "hold", "shrink"].map((s) => `${s} ${(100 * baseStates.filter((x) => x === s).length / POP.length).toFixed(0)}%`).join("  "));
console.log("\n  threshold                       -10%     +10%    (percent of muscles that change state)");
console.log("  " + "-".repeat(72));
for (const [label, key, val] of params) {
  const lo = flipRate({ [key]: val * 0.9 });
  const hi = flipRate({ [key]: val * 1.1 });
  console.log(`  ${label.padEnd(32)} ${lo.toFixed(1).padStart(5)}%  ${hi.toFixed(1).padStart(5)}%`);
}
console.log("\nReading: higher = more load-bearing. A threshold that flips <2% of muscles is effectively");
console.log("cosmetic; one that flips >10% deserves the most careful justification and the borderline band.");
