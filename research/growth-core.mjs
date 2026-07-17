// growth-core.mjs — a pure, DOM-free mirror of Yalla's training-stimulus model.
//
// This is the reference implementation used by the rigor scripts in this folder
// (known-answer tests, sensitivity analysis, predictive-coherence backtest). It mirrors the
// logic in ../app.js (growthStatus, doseStimulus, inferEffort, effortRepDenom) and the equations
// in the white paper. Keep it in sync with app.js when the model changes.

export const MV = 2, MEV = 6, TARGET = 10, MAV = 20;   // volume landmarks (effective sets/muscle/week)
export const N = 10;                                    // rolling weeks
export const EFFORT_FACTOR = [0.5, 1, 1];               // Easy / Hard / Max
export const TAU = TARGET / Math.log(5);                // dose-response scale, calibrated so sigma(TARGET)=0.8

export const doseStimulus = (s) => (s > 0 ? 1 - Math.exp(-s / TAU) : 0);
export const effortOf = (e) => {
  const f = e && e.ef != null ? e.ef : 1;
  return EFFORT_FACTOR[f] != null ? EFFORT_FACTOR[f] : 1;
};

const mean = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
export const recent = (a) => mean(a.slice(N - 3));
export const earlier = (a) => mean(a.slice(Math.max(0, N - 6), N - 3));

// Classify one muscle from its weekly effective-set series S and weekly best-e1RM series L (each length N).
// thr lets the sensitivity script perturb the decision thresholds; defaults mirror app.js.
export function classifyMuscle(S, L, thr = {}) {
  const t = { mv: MV, mev: MEV, down: 0.75, flat: 0.92, up: 1.08, climb: 1.15, ...thr };
  const sets = recent(S);
  const es = earlier(S), rs = recent(S), tS = es > 0 ? rs / es : null;
  const el = earlier(L), rl = recent(L), tL = el > 0 ? rl / el : null;
  const trend = tS == null && tL == null ? null : Math.max(tS == null ? 0 : tS, tL == null ? 0 : tL);
  let state;
  if (sets < t.mv) state = "shrink";
  else if (trend != null && trend < t.down) state = "shrink";
  else if (sets >= t.mev) state = trend == null || trend >= t.up ? "grow" : "hold";
  else state = trend != null && trend >= t.climb && sets >= t.mev - 1 ? "grow" : "hold";
  const near = (a, b, d) => Math.abs(a - b) < d;
  const borderline =
    near(sets, t.mv, 1) || near(sets, t.mev, 1) ||
    (trend != null && (near(trend, t.down, 0.06) || near(trend, t.flat, 0.06) || near(trend, t.up, 0.06)));
  return { sets, trend, state, stim: doseStimulus(sets), borderline };
}

// Overall verdict from a list of per-muscle states (tauAll = whole-body volume trend, or null).
export function overallVerdict(states, tauAll = null, activeWeeks = 10) {
  const m = states.length;
  const c = (s) => states.filter((x) => x === s).length;
  const nGrow = c("grow"), nShrink = c("shrink");
  if (activeWeeks < 3 || m === 0) return "more";
  if (nShrink > nGrow && nShrink >= Math.ceil(m / 3)) return "shrink";
  if (nGrow >= Math.max(1, Math.round(0.4 * m)) && (tauAll == null || tauAll >= 0.95)) return "grow";
  return "hold";
}

// Self-calibrated Epley denominator from Max-tagged sets (ef===2). hist: {exercise: [{w,r,ef}]}.
export function effortRepDenom(hist) {
  const ks = [];
  for (const name of Object.keys(hist)) {
    const mx = (hist[name] || [])
      .filter((e) => e.ef === 2 && +e.w > 0 && +e.r > 0)
      .map((e) => ({ w: +e.w, r: +e.r }));
    for (let i = 0; i < mx.length; i++)
      for (let j = i + 1; j < mx.length; j++) {
        const a = mx[i], b = mx[j];
        if (a.w === b.w) continue;
        const k = (b.w * b.r - a.w * a.r) / (a.w - b.w);
        if (k >= 15 && k <= 50) ks.push(k);
      }
  }
  ks.sort((x, y) => x - y);
  return ks.length ? Math.max(20, Math.min(40, ks[Math.floor(ks.length / 2)])) : 30;
}

// Effort inference for a single session's top set against a prior anchor e1RM, with denominator K.
export function inferEffort({ anchorE1RM, w, r, K = 30 }) {
  if (!(anchorE1RM > 0) || !(w > 0) || !(r > 0)) return null;
  const rir = K * (anchorE1RM / w - 1) - r;
  if (rir <= 1) return 2;
  if (rir >= 4) return 0;
  return 1;
}

export const flat = (v) => new Array(N).fill(v);
export const ramp = (from, to) => Array.from({ length: N }, (_, i) => from + ((to - from) * i) / (N - 1));
