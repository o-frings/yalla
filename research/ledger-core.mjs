// ledger-core.mjs — pure, DOM-free reference implementation of Yalla Part II:
// the prediction ledger (predict → observe → score) and the per-user Bayesian
// re-parameterization. Mirrors the ledger code in ../app.js; keep in sync.
// Design, estimands and decision rules are fixed in ../CALIBRATION-PLAN.md —
// this file implements that plan and nothing more.
//
// No Date.now() anywhere: every function takes explicit timestamps, so runs
// are reproducible and the walk-forward backtest cannot leak the future.

import { EFFORT_FACTOR } from "./growth-core.mjs";

export const WK = 7 * 86400000;
export const H = 4;                      // forecast horizon, weeks (plan §3)
export const R0 = 0.0075;                // population weekly log-gain base rate at full stimulus (plan §4)
export const LEDGER_V = 1;

// Priors (plan §5): θ_u = log(response multiplier), sd 0.35 spans Hubal's range.
export const PRIOR_TH = { m: 0, v: 0.35 * 0.35 };
export const PRIOR_MUS_V = 0.15 * 0.15;  // muscle-deviation prior around the user posterior
export const SIG2U_0 = 0.025 * 0.025;    // starting residual variance of the 4-wk log-gain
export const SIG2U_FLOOR = 0.005 * 0.005;
export const SIGOBS_0 = 0.02;            // default weekly-peak measurement sd until enough diffs exist
export const TH_CLAMP = [Math.log(0.2), Math.log(3.0)];
export const MUS_MIN_N = 6;              // scored records before a muscle delta is applied
export const SIG2U_REESTIMATE_EVERY = 8;
export const MIN_PRIOR_WEEKS = 3;        // emission gate: loaded weeks up to as-of week
export const MIN_OUTCOME_ENTRIES = 1;    // validity gate on the 2-week endpoint window
// Effective-information correction: forecasts are emitted weekly with H-week outcome
// windows, so consecutive records share most of their outcome — each carries about
// 1/H of an independent observation. Beyond that derivable factor, records chain
// baselines to endpoints and same-muscle lifts share their dose, leaving residual
// dependence; the extra /1.5 is calibrated on SBC rank-uniformity (plan §11.1) under
// random-walk noise generators. Without the correction the posterior shrinks ~H×
// too fast and SBC catches it as non-uniform ranks.
export const PREC_SCALE = 1 / (H + 2);
export const Z80 = 1.2815515655446004;   // central 80% interval half-width in sd units

export const weekOf = (d) => Math.floor(d / WK);
export const epley = (w, r, K = 30) => w * (1 + r / K);

// Strength dose–response (plan §12a). The mechanistic model's ρ(D) is calibrated on
// HYPERTROPHY (80% of attainable at 10 sets/wk). Strength saturates with volume faster
// — Pelland 2026: "considerably more pronounced diminishing returns" for strength — so
// the ledger uses its own curve with an earlier plateau: 80% attained by ~5 sets/wk.
export const TARGET_S = 5;
export const TAU_S = TARGET_S / Math.log(5);           // ≈ 3.107  ⇒ ρ_S(5)=0.8, ρ_S(2)≈0.47, ρ_S(10)≈0.96
export const doseStimulusStrength = (s) => (s > 0 ? 1 - Math.exp(-s / TAU_S) : 0);

// ---------- strength → hypertrophy bridge (plan §12b) ----------
// The mechanistic Monte Carlo draws the hypertrophy log-multiplier θ_H ~ N(0, σ_H²) at
// random. Once the ledger has learned the STRENGTH log-multiplier posterior θ_S ~ N(m, v),
// treat (θ_S, θ_H) as bivariate normal with correlation ρ_sh and condition θ_H on it.
// Integrating over the strength posterior, θ_H is again normal:
//   θ_H | data ~ N( β·m , σ_H²(1−ρ²) + β²·v ),   β = ρ·σ_H/σ_S.
// ρ_sh=0.3 is deliberately low (strength is a weak, neural-skill-biased proxy for size —
// Ahtiainen 2016 r≈0.16; Balshaw 2017 ~19% of strength variance; §12b), so the bridge
// SHIFTS the muscle forecast modestly and barely narrows its band. At ρ=0 it reproduces
// the unconditional draw exactly (β=0, sd=σ_H).
export const BRIDGE = { rho: 0.3, sigH: 0.55, sigS: 0.35, minScored: 10 };
export function bridgeThetaH(thSm, thSv, p = {}) {
  const rho = p.rho ?? BRIDGE.rho, sigH = p.sigH ?? BRIDGE.sigH, sigS = p.sigS ?? BRIDGE.sigS;
  const beta = (rho * sigH) / sigS;
  return { mean: beta * thSm, sd: Math.sqrt(sigH * sigH * (1 - rho * rho) + beta * beta * thSv) };
}

export function freshCalib() {
  return { v: 1, th: { ...PRIOR_TH }, mus: {}, sig2u: SIG2U_0, nsc: 0, ss: 0, so2s: 0, mv2s: 0 };
}

// ---------- weekly series on ABSOLUTE epoch weeks (plan §3) ----------
// hist: {exercise: [{d,w,r,n,ef}]}; muscleFor: name -> [primary, ...secondaries].
// Returns per-exercise and per-muscle maps keyed by epoch-week integer.
export function buildWeekly(hist, muscleFor, K = 30) {
  const byEx = {}, musSets = {}, musPeak = {};
  for (const name of Object.keys(hist)) {
    const groups = muscleFor(name) || [];
    const ex = (byEx[name] = { peak: new Map(), nLoaded: new Map(), effs: new Map(), g: groups[0] || null });
    for (const e of hist[name] || []) {
      const k = weekOf(e.d);
      const eff = EFFORT_FACTOR[e.ef != null ? e.ef : 1] ?? 1;
      const nSets = e.n != null ? +e.n : 1;
      groups.forEach((g, gi) => {
        const m = (musSets[g] = musSets[g] || new Map());
        m.set(k, (m.get(k) || 0) + nSets * eff * (gi === 0 ? 1 : 0.5));
      });
      const w = parseFloat(e.w) || 0, r = parseInt(e.r) || 0;
      if (w > 0 && r > 0) {
        const p = epley(w, r, K);
        if (p > (ex.peak.get(k) || 0)) ex.peak.set(k, p);
        ex.nLoaded.set(k, (ex.nLoaded.get(k) || 0) + 1);
        (ex.effs.get(k) || ex.effs.set(k, []).get(k)).push(eff);
        if (groups[0]) {
          const mp = (musPeak[groups[0]] = musPeak[groups[0]] || new Map());
          if (p > (mp.get(k) || 0)) mp.set(k, p);
        }
      }
    }
  }
  return { byEx, musSets, musPeak };
}

const winMean = (map, from, to) => {          // mean over an inclusive week window, gaps = 0
  let s = 0;
  for (let k = from; k <= to; k++) s += map.get(k) || 0;
  return s / (to - from + 1);
};
const winMeanPos = (map, from, to) => {       // mean over TRAINED weeks only; null when none
  let s = 0, n = 0;
  for (let k = from; k <= to; k++) { const v = map.get(k) || 0; if (v > 0) { s += v; n++; } }
  return n ? s / n : null;
};
const winMax = (map, from, to) => {
  let m = 0;
  for (let k = from; k <= to; k++) { const v = map.get(k) || 0; if (v > m) m = v; }
  return m;
};

// Recent dose / trend at as-of week k, mirroring v2.1's 3-week windows but on absolute weeks.
// Dose means keep untrained weeks as zeros (the dose really was zero); the LOAD trend averages
// trained weeks only — averaging zeros into a peak series conflates "didn't train" with "got
// weaker", which spuriously drops the overload factor and biases the calibration upward (SBC).
export function muscleStateAt(weekly, g, k) {
  const sets = weekly.musSets[g] || new Map();
  const peak = weekly.musPeak[g] || new Map();
  const D = winMean(sets, k - 2, k);
  const es = winMean(sets, k - 5, k - 3), rs = D;
  const el = winMeanPos(peak, k - 5, k - 3), rl = winMeanPos(peak, k - 2, k);
  const tS = es > 0 ? rs / es : null, tL = el != null && rl != null ? rl / el : null;
  const trend = tS == null && tL == null ? null : Math.max(tS ?? 0, tL ?? 0);
  return { D, trend };
}

// Overload factor (plan §4): structural, not fitted.
export const overloadFactor = (trend) => (trend == null || trend >= 1 ? 1 : trend >= 0.75 ? 0.5 : 0.15);

// Robust per-exercise measurement sd of the weekly log-peak: successive log-diffs,
// detrended by their median (so genuine weekly gain doesn't inflate the noise
// estimate), MAD -> sd, /sqrt(2) because a difference of two noisy peaks doubles the variance.
export function obsSigma(exWeekly) {
  const ks = [...exWeekly.peak.keys()].sort((a, b) => a - b);
  const diffs = [];
  for (let i = 1; i < ks.length; i++) diffs.push(Math.log(exWeekly.peak.get(ks[i]) / exWeekly.peak.get(ks[i - 1])));
  if (diffs.length < 4) return SIGOBS_0;
  const med = median(diffs);
  const mad = median(diffs.map((d) => Math.abs(d - med)));
  return Math.max(0.005, (1.4826 * mad) / Math.SQRT2);
}

// ---------- forecast emission (plan §4, §6) ----------
// Emits at most one record per (exercise, as-of week); freezes inputs and the
// posterior in force. `now` = emission timestamp; asOf week = weekOf(now).
export function emitForecasts({ hist, muscleFor, now, calib, ledger, K = 30, retro = false, asOfWeek = null }) {
  const k = asOfWeek != null ? asOfWeek : weekOf(now);
  const weekly = buildWeekly(hist, muscleFor, K);
  const have = new Set(ledger.map((r) => r.x + "|" + r.k));
  const out = [];
  for (const x of Object.keys(weekly.byEx)) {
    const ex = weekly.byEx[x];
    if (!ex.g || have.has(x + "|" + k)) continue;
    if (!(ex.nLoaded.get(k) > 0)) continue;                         // only exercises trained this week
    let prior = 0; for (const wk of ex.nLoaded.keys()) if (wk <= k) prior++;
    if (prior < MIN_PRIOR_WEEKS) continue;                          // emission gate
    const base = winMax(ex.peak, k - 1, k);
    if (!(base > 0)) continue;                                      // needs a baseline (plan §3)
    const { D, trend } = muscleStateAt(weekly, ex.g, k);
    const effArr = [].concat(...[k - 2, k - 1, k].map((wk) => ex.effs.get(wk) || []));
    const eta = effArr.length ? effArr.reduce((a, b) => a + b, 0) / effArr.length : 1;
    const rho = doseStimulusStrength(D), o = overloadFactor(trend);   // strength dose-response (plan §12a)
    const mu0 = H * R0 * rho * eta * o;                             // deterministic part at θ=0
    const mus = calib.mus[ex.g];
    const musM = mus && mus.n >= MUS_MIN_N ? mus.m : 0;
    const musV = mus && mus.n >= MUS_MIN_N ? mus.v : PRIOR_MUS_V;
    const th = calib.th.m + musM, thv = calib.th.v + musV;
    const mu = mu0 * Math.exp(th);
    const so2 = obsSigma(ex) ** 2;
    let sd = Math.sqrt(mu * mu * thv + calib.sig2u + 2 * so2);      // delta method + residual + measurement
    if (trend == null) sd *= 1.25;                                  // no earlier window: widen, don't guess
    out.push({
      id: x + "|" + k, v: LEDGER_V, t: now, k, x, g: ex.g, h: H,
      mu, sd,
      in: { D, rho, eff: eta, trend, o, base, mu0, so2, K, thm: th, thv },
      retro: !!retro, st: "pending",
    });
  }
  return out;
}

// ---------- scoring (plan §3, §8) ----------
// A record is scorable once its outcome window is complete. The realized outcome is
// endpoint-to-endpoint and SYMMETRIC: best weekly peak over the two final weeks
// (k+H-1..k+H) against the two-week baseline (k-1..k). Symmetric windows matter:
// a max over 4 noisy weeks systematically exceeds a max over 2 (order-statistics
// bias ~0.5·σ_obs), which SBC exposed as non-uniform posterior ranks.
// The outcome is computed with the Epley denominator FROZEN at emission (rec.in.K),
// so a later K recalibration cannot move the goalposts of an existing prediction.
export function scoreLedger({ ledger, hist, now, K = 30, nowWeek = null }) {
  const wNow = nowWeek != null ? nowWeek : weekOf(now);
  const scored = [];
  for (const rec of ledger) {
    if (rec.st !== "pending" || wNow <= rec.k + rec.h) continue;
    const kk = (rec.in && rec.in.K) || K;
    let nOut = 0, ahead = 0;
    for (const e of hist[rec.x] || []) {
      const wk = weekOf(e.d);
      if (wk < rec.k + rec.h - 1 || wk > rec.k + rec.h) continue;
      const w = parseFloat(e.w) || 0, r = parseInt(e.r) || 0;
      if (!(w > 0 && r > 0)) continue;
      nOut++;
      const p = epley(w, r, kk);
      if (p > ahead) ahead = p;
    }
    if (nOut < MIN_OUTCOME_ENTRIES || !(ahead > 0)) { rec.st = "unscorable"; rec.out = { scoredAt: now }; continue; }
    const y = Math.log(ahead / rec.in.base);
    const z = (y - rec.mu) / rec.sd;
    rec.st = "scored";
    rec.out = { y, pit: normCdf(z), crps: crpsGauss(y, rec.mu, rec.sd), hit80: Math.abs(z) <= Z80 ? 1 : 0, scoredAt: now };
    scored.push(rec);
  }
  return scored;
}

// ---------- per-user updating (plan §5) ----------
// Normal–Normal on θ = log(multiplier), relinearized around the CURRENT posterior
// mean (extended-Kalman style): y ≈ mu0·e^θm·(1 + θ − θm) + ε. Linearizing at a
// fixed θ=0 biases extreme responders outward; relinearizing removes that.
// Observation precision grows with mu0·e^θm → a low-dose week is naturally uninformative.
export function updateCalibration(calib, rec) {
  if (rec.retro || rec.st !== "scored") return calib;
  const { mu0, so2 } = rec.in, y = rec.out.y;
  if (!(mu0 > 0)) return calib;
  const sig2tot = calib.sig2u + 2 * so2;
  // stage 1: user-level θ
  const muU = mu0 * Math.exp(calib.th.m);
  const thObs = calib.th.m + (y - muU) / muU, obsPrec = PREC_SCALE * (muU * muU) / sig2tot;
  const p0 = 1 / calib.th.v, p1 = p0 + obsPrec;
  calib.th.m = clamp((p0 * calib.th.m + obsPrec * thObs) / p1, TH_CLAMP[0], TH_CLAMP[1]);
  calib.th.v = 1 / p1;
  // stage 2: muscle deviation around the user posterior (tight prior, gated on use not on accrual)
  const mus = (calib.mus[rec.g] = calib.mus[rec.g] || { m: 0, v: PRIOR_MUS_V, n: 0 });
  const muG = mu0 * Math.exp(calib.th.m + mus.m);
  const dObs = mus.m + (y - muG) / muG, gPrec = PREC_SCALE * (muG * muG) / sig2tot, q0 = 1 / mus.v, q1 = q0 + gPrec;
  mus.m = (q0 * mus.m + gPrec * dObs) / q1; mus.v = 1 / q1; mus.n++;
  // residual-variance bookkeeping; re-estimate every K scored records (method of moments)
  calib.nsc++;
  calib.ss += (y - rec.mu) ** 2;
  calib.so2s += 2 * so2;
  calib.mv2s += rec.mu * rec.mu * rec.in.thv;
  if (calib.nsc % SIG2U_REESTIMATE_EVERY === 0)
    calib.sig2u = Math.max(SIG2U_FLOOR, (calib.ss - calib.so2s - calib.mv2s) / calib.nsc);
  return calib;
}

// ---------- metrics (plan §8) ----------
// Non-retro scored records only. Skill vs B0 (no change) and B1 (personal trailing drift).
export function ledgerMetrics(ledger) {
  const recs = ledger.filter((r) => !r.retro && r.st === "scored").sort((a, b) => a.k - b.k || (a.x < b.x ? -1 : 1));
  const n = recs.length;
  const unscorable = ledger.filter((r) => !r.retro && r.st === "unscorable").length;
  if (!n) return { n: 0, unscorable };
  let hits = 0, crps = 0, crpsB0 = 0, crpsB1 = 0, sdSum = 0;
  const pits = [], trail = [];
  for (const r of recs) {
    hits += r.out.hit80; crps += r.out.crps; sdSum += r.sd; pits.push(r.out.pit);
    crpsB0 += crpsGauss(r.out.y, 0, r.sd);
    const drift = trail.length ? trail.reduce((a, b) => a + b, 0) / trail.length : 0;
    crpsB1 += crpsGauss(r.out.y, drift, r.sd);
    trail.push(r.out.y);
  }
  pits.sort((a, b) => a - b);
  let ks = 0;
  pits.forEach((p, i) => { ks = Math.max(ks, Math.abs(p - (i + 1) / n), Math.abs(p - i / n)); });
  const cov = hits / n, wil = wilson(hits, n);
  return {
    n, unscorable,
    coverage80: cov, coverage80CI: wil,
    meanCRPS: crps / n, sharpness: sdSum / n,
    skillVsNoChange: 1 - crps / crpsB0,
    skillVsDrift: 1 - crps / crpsB1,
    pitKS: ks,
  };
}

// ---------- walk-forward backtest (plan §11.3) ----------
// Replays history week by week: score what matured, update the posterior, then
// emit with only past data — expanding window, no leakage. histUpTo(t) filters entries.
export function walkForward(hist, muscleFor, { K = 30, calib = null } = {}) {
  const all = Object.values(hist).flat();
  if (!all.length) return { ledger: [], calib: freshCalib(), metrics: { n: 0 } };
  const w0 = Math.min(...all.map((e) => weekOf(e.d))), w1 = Math.max(...all.map((e) => weekOf(e.d)));
  const cal = calib || freshCalib();
  const ledger = [];
  for (let k = w0 + MIN_PRIOR_WEEKS; k <= w1; k++) {
    const t = (k + 1) * WK - 1;                                   // "end of week k"
    const past = {};
    for (const x of Object.keys(hist)) {
      const es = hist[x].filter((e) => weekOf(e.d) <= k);
      if (es.length) past[x] = es;
    }
    for (const rec of scoreLedger({ ledger, hist: past, now: t, K, nowWeek: k })) updateCalibration(cal, rec);
    ledger.push(...emitForecasts({ hist: past, muscleFor, now: t, calib: cal, ledger, K, asOfWeek: k }));
  }
  return { ledger, calib: cal, metrics: ledgerMetrics(ledger) };
}

// ---------- math ----------
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const median = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
export function normCdf(z) {
  // Abramowitz–Stegun 7.1.26 via erf; |err| < 1.5e-7 — ample for PIT/coverage.
  const t = 1 / (1 + 0.3275911 * Math.abs(z) / Math.SQRT2);
  const e = 1 - t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429)))) * Math.exp(-(z * z) / 2);
  return z >= 0 ? 0.5 * (1 + e) : 0.5 * (1 - e);
}
const normPdf = (z) => Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
// Closed-form CRPS of a Gaussian forecast (Gneiting & Raftery 2007, eq. 21).
export function crpsGauss(y, mu, sd) {
  if (!(sd > 0)) return Math.abs(y - mu);
  const z = (y - mu) / sd;
  return sd * (z * (2 * normCdf(z) - 1) + 2 * normPdf(z) - 1 / Math.sqrt(Math.PI));
}
export function wilson(hits, n, z = 1.96) {
  const p = hits / n, z2 = z * z, den = 1 + z2 / n;
  const c = (p + z2 / (2 * n)) / den, hw = (z * Math.sqrt((p * (1 - p) + z2 / (4 * n)) / n)) / den;
  return [Math.max(0, c - hw), Math.min(1, c + hw)];
}
