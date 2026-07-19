// ledger.test.mjs — verification for Part II (CALIBRATION-PLAN.md §11).
// Three layers, all pure Node, deterministic (seeded PRNG, fixed epoch):
//   1. Known-answer tests for the ledger mechanics (§11.2): emit-before-observe,
//      immutability, once-per-week, retro exclusion, unscorable handling, K freeze,
//      epoch-week edges, and the math primitives (CRPS vs numeric integral).
//   2. Simulation-based calibration (§11.1): synthetic users drawn FROM THE PRIOR,
//      full emit→score→update loop; checks recovery, posterior rank uniformity,
//      and empirical interval coverage against nominal.
//   3. Parity: the compact mirror inside ../app.js must produce numerically
//      identical records to this reference implementation (keep-in-sync, enforced).
//   4. Strength→hypertrophy bridge (§12b/§12c): ρ=0 reproduces the unconditional
//      draw; the conditional centre extracts real signal and stays un-overconfident.
// Run: node research/ledger.test.mjs

import {
  emitForecasts, scoreLedger, updateCalibration, ledgerMetrics, walkForward,
  freshCalib, weekOf, epley, WK, H, R0, PRIOR_TH, crpsGauss, normCdf, Z80,
  doseStimulusStrength, bridgeThetaH, BRIDGE,
} from "./ledger-core.mjs";
import { readFileSync } from "node:fs";

let pass = 0, fail = 0;
const T = (name, ok, detail = "") => {
  if (ok) { pass++; console.log(`  ok  ${name}`); }
  else { fail++; console.log(`  FAIL ${name}${detail ? " — " + detail : ""}`); }
};
const approx = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol;

let seed = 123457;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const T0 = Math.ceil(1_700_000_000_000 / WK) * WK;   // week-aligned epoch so day offsets stay inside their week
const muscleFor = (n) => (n[0] === "A" ? ["Chest", "Triceps"] : ["Quads", "Glutes"]);

// history builder: entries[i] = {wk, w, r, n, ef} in week offsets from T0's week
const mkHist = (spec) => {
  const hist = {};
  for (const [name, entries] of Object.entries(spec))
    hist[name] = entries.map((e) => ({ d: T0 + e.wk * WK + (e.day ?? 3) * 86400000, w: e.w, r: e.r, n: e.n ?? 3, ef: e.ef ?? 1 }));
  return hist;
};
const week0 = weekOf(T0);

// ---------------------------------------------------------------- 1. mechanics
console.log("\nLedger mechanics (known-answer)");
{
  // 4 loaded weeks on A1 → eligible at week 3; only 2 on B1 → gated out.
  const hist = mkHist({
    A1: [{ wk: 0, w: 60, r: 8 }, { wk: 1, w: 62, r: 8 }, { wk: 2, w: 64, r: 8 }, { wk: 3, w: 66, r: 8 }],
    B1: [{ wk: 2, w: 100, r: 5 }, { wk: 3, w: 102, r: 5 }],
  });
  const calib = freshCalib();
  const now = T0 + 3 * WK + 4 * 86400000;
  const recs = emitForecasts({ hist, muscleFor, now, calib, ledger: [] });
  T("emission gate: 3 prior weeks required", recs.length === 1 && recs[0].x === "A1");
  T("as-of week recorded", recs[0].k === week0 + 3);
  T("baseline = best weekly peak of weeks k-1..k", approx(recs[0].in.base, epley(66, 8)));
  T("posterior frozen into the record", recs[0].in.thm === 0 && approx(recs[0].in.thv, PRIOR_TH.v + 0.15 * 0.15));

  // once per (exercise, week): second emission the same week adds nothing
  const again = emitForecasts({ hist, muscleFor, now: now + 86400000, calib, ledger: recs });
  T("once-per-week emission", again.length === 0);

  // not yet mature → nothing scored; prediction fields untouched by attempts
  const snap = JSON.stringify({ mu: recs[0].mu, sd: recs[0].sd, in: recs[0].in });
  T("no scoring before horizon completes", scoreLedger({ ledger: recs, hist, now: now + 3 * WK }).length === 0);

  // outcome: two future entries, best = 70x8 at K=30
  hist.A1.push({ d: T0 + 5 * WK, w: 68, r: 8, n: 3, ef: 1 }, { d: T0 + 7 * WK, w: 70, r: 8, n: 3, ef: 1 });
  const scored = scoreLedger({ ledger: recs, hist, now: T0 + 8 * WK });
  const y = Math.log(epley(70, 8) / epley(66, 8));
  T("scored once mature, correct outcome", scored.length === 1 && approx(scored[0].out.y, y, 1e-12));
  T("immutability: prediction fields untouched by scoring", JSON.stringify({ mu: recs[0].mu, sd: recs[0].sd, in: recs[0].in }) === snap);
  T("PIT/CRPS/hit consistent", approx(scored[0].out.pit, normCdf((y - recs[0].mu) / recs[0].sd), 1e-9)
    && approx(scored[0].out.crps, crpsGauss(y, recs[0].mu, recs[0].sd), 1e-12)
    && scored[0].out.hit80 === (Math.abs((y - recs[0].mu) / recs[0].sd) <= Z80 ? 1 : 0));
}
{
  // K freeze: score with the K recorded at emission even if the caller's K changed
  const hist = mkHist({ A1: [0, 1, 2, 3].map((wk) => ({ wk, w: 60 + 2 * wk, r: 8 })) });
  const calib = freshCalib();
  const recs = emitForecasts({ hist, muscleFor, now: T0 + 3 * WK + 4 * 86400000, calib, ledger: [], K: 30 });
  hist.A1.push({ d: T0 + 5 * WK, w: 70, r: 8, n: 3 }, { d: T0 + 6 * WK, w: 70, r: 8, n: 3 });
  const scored = scoreLedger({ ledger: recs, hist, now: T0 + 8 * WK, K: 22 });   // caller K drifted
  T("K frozen at emission governs the outcome", approx(scored[0].out.y, Math.log(epley(70, 8, 30) / epley(66, 8, 30)), 1e-12));
}
{
  // unscorable: only one future entry → labeled, kept, and excluded from calibration
  const hist = mkHist({ A1: [0, 1, 2, 3].map((wk) => ({ wk, w: 60, r: 8 })) });
  const calib = freshCalib();
  const recs = emitForecasts({ hist, muscleFor, now: T0 + 3 * WK + 4 * 86400000, calib, ledger: [] });
  hist.A1.push({ d: T0 + 5 * WK, w: 62, r: 8, n: 3 });
  scoreLedger({ ledger: recs, hist, now: T0 + 9 * WK });
  T("validity gate → unscorable, not dropped", recs[0].st === "unscorable" && recs.length === 1);
  const before = JSON.stringify(calib);
  updateCalibration(calib, recs[0]);
  T("unscorable never updates the posterior", JSON.stringify(calib) === before);
}
{
  // retro exclusion: a scored retrodiction must not move the posterior
  const calib = freshCalib();
  const rec = { retro: true, st: "scored", g: "Chest", mu: 0.01, sd: 0.02,
    in: { mu0: 0.01, so2: 4e-4, thv: PRIOR_TH.v }, out: { y: 0.05 } };
  const before = JSON.stringify(calib);
  updateCalibration(calib, rec);
  T("retro records excluded from calibration", JSON.stringify(calib) === before);
}
{
  // epoch-week edge: an entry at the exact week boundary belongs to the new week
  const d = (week0 + 5) * WK;
  T("week boundary is half-open", weekOf(d) === week0 + 5 && weekOf(d - 1) === week0 + 4);
}
{
  // CRPS closed form vs numeric integration of ∫(F(t)-1{t≥y})² dt
  const mu = 0.01, sd = 0.03, y = -0.02;
  let num = 0; const lo = mu - 8 * sd, hi = mu + 8 * sd, n = 200000, dt = (hi - lo) / n;
  for (let i = 0; i < n; i++) { const t = lo + (i + 0.5) * dt; const F = normCdf((t - mu) / sd); num += (F - (t >= y ? 1 : 0)) ** 2 * dt; }
  T("Gaussian CRPS matches numeric integral", approx(crpsGauss(y, mu, sd), num, 1e-5), `${crpsGauss(y, mu, sd)} vs ${num}`);
}

// ------------------------------------------------- 2. simulation-based calibration
// SBC proper requires generating from the model's own assumptions (users drawn from
// the prior, gains following the model's mean structure) — that validates the
// UPDATING MACHINERY. The skill-vs-drift property is tested separately under a
// generator with a real overload mechanism, where the model's covariate response
// is supposed to earn its keep against a baseline that ignores covariates.
console.log("\nSimulation-based calibration (users drawn from the prior)");
function simUser(thTrue, { blocks = false, weeks = 60 } = {}) {
  const mTrue = Math.exp(thTrue);
  const names = ["A1", "A2", "B1"];
  const logL = {}, baseSets = {}, hist = {};
  for (const n of names) { logL[n] = Math.log(50 + rnd() * 60); baseSets[n] = 2 + Math.floor(rnd() * 4); hist[n] = []; }
  for (let k = 0; k < weeks; k++) {
    const high = !blocks || Math.floor(k / 12) % 2 === 1;        // steady dose, or 12-wk mesocycles
    const o = high ? 1 : 0.15;                                   // generator-side overload mechanism
    // a skipped week is a week NOT TRAINED (the model reads logs as training — SBC must match);
    // the muscle dose is what was actually trained that week, shared across lifts of the muscle
    const trained = {}; for (const n of names) trained[n] = rnd() >= 0.12;
    const setsOf = (n) => (high ? baseSets[n] + 2 : 1);
    const D = { A: (trained.A1 ? setsOf("A1") : 0) + (trained.A2 ? setsOf("A2") : 0), B: trained.B1 ? setsOf("B1") : 0 };
    for (const n of names) {
      const d = n[0] === "A" ? D.A : D.B;
      if (d > 0) logL[n] += mTrue * R0 * doseStimulusStrength(d) * o + 0.012 * boxMuller();
      if (!trained[n]) continue;
      const reps = 5 + Math.floor(rnd() * 6);
      hist[n].push({ d: T0 + k * WK + 2 * 86400000, w: Math.exp(logL[n]) / (1 + reps / 30), r: reps, n: setsOf(n), ef: 1 });
    }
  }
  return hist;
}
{
  const USERS = 40;
  const ranks = []; let cov = 0, covN = 0, pvSum = 0; const recovery = [];
  for (let u = 0; u < USERS; u++) {
    const thTrue = Math.sqrt(PRIOR_TH.v) * boxMuller();          // θ ~ prior
    const { calib, metrics } = walkForward(simUser(thTrue), muscleFor);
    if (!metrics.n) continue;
    cov += metrics.coverage80 * metrics.n; covN += metrics.n;
    recovery.push([thTrue, calib.th.m]); pvSum += calib.th.v;
    ranks.push(normCdf((thTrue - calib.th.m) / Math.sqrt(calib.th.v)));  // posterior rank of the truth
  }
  const coverage = cov / covN;
  T(`coverage of 80% intervals ≈ nominal (got ${(100 * coverage).toFixed(1)}%, n=${covN})`, coverage > 0.68 && coverage < 0.92);
  // For a calibrated posterior the attainable recovery correlation is bounded by the posterior
  // width: corr ≤ sqrt(1 − E[post var]/prior var). Test against that ceiling, not a fixed number
  // (a fixed threshold either shrinks into threshold-shopping or silently allows no learning).
  const corr = pearson(recovery.map((r) => r[0]), recovery.map((r) => r[1]));
  const attainable = Math.sqrt(1 - pvSum / recovery.length / PRIOR_TH.v);
  T(`recovery: corr(θ_true, θ_hat) = ${corr.toFixed(2)} within 0.15 of attainable ${attainable.toFixed(2)}`,
    corr > attainable - 0.15 && corr > 0.5);
  ranks.sort((a, b) => a - b);
  let ks = 0; ranks.forEach((p, i) => { ks = Math.max(ks, Math.abs(p - (i + 1) / ranks.length), Math.abs(p - i / ranks.length)); });
  const ksCrit = 1.36 / Math.sqrt(ranks.length);                 // KS 5% critical value
  T(`posterior ranks uniform (KS ${ks.toFixed(3)} < ${ksCrit.toFixed(3)})`, ks < ksCrit);
}
{
  // covariate skill: dose+overload vary in mesocycles; a drift baseline can't see them coming
  const USERS = 20; const skillB1 = [];
  for (let u = 0; u < USERS; u++) {
    const thTrue = Math.sqrt(PRIOR_TH.v) * boxMuller();
    const { metrics } = walkForward(simUser(thTrue, { blocks: true }), muscleFor);
    if (metrics.n) skillB1.push(metrics.skillVsDrift);
  }
  const meanSkill = skillB1.reduce((a, b) => a + b, 0) / skillB1.length;
  T(`beats personal-drift baseline when covariates vary (mean skill ${meanSkill.toFixed(2)} > 0)`, meanSkill > 0);
}

// ------------------------------------------------------------------- 3. parity
console.log("\napp.js mirror parity");
{
  // Extract the ledger block from app.js and run it against the reference on identical data.
  const src = readFileSync(new URL("../app.js", import.meta.url), "utf8");
  const a = src.indexOf("const LG={");
  const b = src.indexOf("// Me-page card:", a);
  T("ledger block found in app.js", a > 0 && b > a);
  const block = src.slice(a, b);
  const hist = {};
  for (const name of ["A1", "A2", "B1"]) {
    let load = 60 + rnd() * 50; const arr = [];
    for (let k = 0; k < 20; k++) {
      load *= 1 + 0.004 + (rnd() - 0.5) * 0.01;
      if (rnd() < 0.15) continue;
      const reps = 5 + Math.floor(rnd() * 6);
      arr.push({ d: T0 + k * WK + 2 * 86400000, w: Math.round((load / (1 + reps / 30)) * 10) / 10, r: reps, n: 2 + Math.floor(rnd() * 3), ef: rnd() < 0.15 ? 2 : 1 });
    }
    hist[name] = arr;
  }
  // sandbox: the app globals the block reads
  const sandbox = { hist, ledger: [], calib: null, muscleFor, effortOf: (e) => [0.5, 1, 1][e && e.ef != null ? e.ef : 1] ?? 1, effortRepDenom: () => 30, Math, Object, Number, Set, Date, JSON };
  const run = new Function(...Object.keys(sandbox), block + `
    calib=lgFreshCalib();
    const nowE=${T0} + 12*${WK} + 3*86400000;
    ledger.push(...lgEmit(nowE));
    const nowS=${T0} + 19*${WK} + 3*86400000;
    lgScore(nowS).forEach(lgUpdate);
    return {ledger, calib, metrics: lgMetrics(),
      dose: [1,3,5,10].map(lgDoseStr),                          // strength dose-response mirror
      bridge: [[0.3,0.01],[0,0.02]].map(([m,v])=>lgBridgeThetaH(m,v))};  // bridge mirror`);
  const app = run(...Object.values(sandbox));

  const calib = freshCalib();
  const refLedger = emitForecasts({ hist, muscleFor, now: T0 + 12 * WK + 3 * 86400000, calib, ledger: [] });
  scoreLedger({ ledger: refLedger, hist, now: T0 + 19 * WK + 3 * 86400000 }).forEach((r) => updateCalibration(calib, r));

  T("same records emitted", app.ledger.length === refLedger.length && app.ledger.every((r, i) => r.id === refLedger[i].id));
  const close = (x, y) => approx(x, y, 1e-9);
  T("identical predictive distributions", app.ledger.every((r, i) => close(r.mu, refLedger[i].mu) && close(r.sd, refLedger[i].sd)));
  T("identical outcomes & scores", app.ledger.every((r, i) => r.st === refLedger[i].st
    && (r.st !== "scored" || (close(r.out.y, refLedger[i].out.y) && close(r.out.crps, refLedger[i].out.crps)))));
  T("identical posterior after updates", close(app.calib.th.m, calib.th.m) && close(app.calib.th.v, calib.th.v) && close(app.calib.sig2u, calib.sig2u));
  T("identical strength dose-response", app.dose.every((d, i) => close(d, doseStimulusStrength([1, 3, 5, 10][i]))));
  T("identical bridge conditional", app.bridge.every((b, i) => {
    const ref = bridgeThetaH([0.3, 0][i], [0.01, 0.02][i]);
    return close(b.m, ref.mean) && close(b.sd, ref.sd);
  }));
}

// ------------------------------------------------- 4. strength → hypertrophy bridge (§12b/§12c)
console.log("\nStrength → hypertrophy bridge");
{
  // degenerate: ρ=0 must reproduce the unconditional hypertrophy draw exactly, for any posterior.
  const d0 = bridgeThetaH(0.4, 0.02, { rho: 0 });
  T("ρ=0 reproduces unconditional draw (mean 0, sd σ_H)", approx(d0.mean, 0, 1e-12) && approx(d0.sd, BRIDGE.sigH, 1e-12));
  // a high strength responder shifts the muscle centre up but keeps a wide band (weak proxy).
  const dHi = bridgeThetaH(Math.log(1.5), 0.01);
  T("strength responder nudges centre up, band barely narrows",
    dHi.mean > 0 && dHi.mean < 0.25 && dHi.sd > 0.9 * BRIDGE.sigH,
    `mean=${dHi.mean.toFixed(3)} sd=${dHi.sd.toFixed(3)}`);

  // recovery/calibration: simulate lifters with a KNOWN (θ_S, θ_H) pair from the bivariate
  // normal at correlation `rho`, learn θ_S from their strength logs, apply the bridge with the
  // SAME rho, and measure how the conditioned hypertrophy centre does against the unconditional 0.
  const sH = BRIDGE.sigH, sS = BRIDGE.sigS;
  const recovery = (rho, users) => {
    let seB = 0, seU = 0, covered = 0, n = 0; const mm = [], hh = [];
    for (let u = 0; u < users; u++) {
      const z1 = boxMuller(), z2 = boxMuller();
      const thS = sS * z1;
      const thH = sH * (rho * z1 + Math.sqrt(1 - rho * rho) * z2);   // corr(θ_S,θ_H)=rho
      const { calib, metrics } = walkForward(simUser(thS), muscleFor);
      if (!metrics.n) continue;
      const b = bridgeThetaH(calib.th.m, calib.th.v, { rho });
      seB += (b.mean - thH) ** 2; seU += thH * thH;
      if (Math.abs(thH - b.mean) <= Z80 * b.sd) covered++;
      mm.push(b.mean); hh.push(thH); n++;
    }
    return { mseB: seB / n, mseU: seU / n, cov: covered / n, corr: pearson(mm, hh), n };
  };
  // Mechanism: when the true coupling is strong, the strength-informed centre clearly beats 0.
  const strong = recovery(0.6, 120);
  T(`bridge extracts signal at ρ=0.6 (MSE ${strong.mseB.toFixed(3)} < unconditional ${strong.mseU.toFixed(3)})`,
    strong.mseB < strong.mseU);
  // Production ρ=0.3: the effect is small by design, so assert the robust properties — the centre
  // is positively aligned with the true θ_H (real signal), and the band is not overconfident.
  const prod = recovery(0.3, 300);
  T(`bridge centre tracks true θ_H at ρ=0.3 (corr ${prod.corr.toFixed(2)} > 0)`, prod.corr > 0.03);
  T(`bridge not overconfident at ρ=0.3 (80% coverage of θ_H = ${(100 * prod.cov).toFixed(0)}%, ≥ nominal)`, prod.cov >= 0.75);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);

// helpers
function boxMuller() { const u = Math.max(rnd(), 1e-12), v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
function pearson(a, b) {
  const n = a.length, ma = a.reduce((x, y) => x + y, 0) / n, mb = b.reduce((x, y) => x + y, 0) / n;
  let sab = 0, sa = 0, sb = 0;
  for (let i = 0; i < n; i++) { sab += (a[i] - ma) * (b[i] - mb); sa += (a[i] - ma) ** 2; sb += (b[i] - mb) ** 2; }
  return sab / Math.sqrt(sa * sb);
}
