// simulate.mjs — behavioural simulations of the training-stimulus model.
//
// Fully local and reproducible: a seeded PRNG (no Date/Math.random), no dependencies, imports the
// reference core in growth-core.mjs. Same seed -> identical output every run. It simulates a lifter
// executing standard plans over 24 weeks, runs the model week by week, and contrasts regular against
// irregular training. Emits a console summary and a self-contained HTML report (research/simulations.html).
//
// Run: `node research/simulate.mjs`

import { classifyMuscle, overallVerdict, doseStimulus, MEV, MV, N } from "./growth-core.mjs";
import { writeFileSync } from "node:fs";

const WEEKS = 24;
const MUSCLES = ["Chest", "Back", "Shoulders", "Biceps", "Triceps", "Quads", "Hams", "Glutes", "Calves"];

// ---- standard plans: a week is a list of sessions; each session is {muscle: effective sets} ----
const PLANS = {
  "Full-Body 3x": [
    { Chest: 3, Back: 3, Shoulders: 2, Biceps: 1.5, Triceps: 1.5, Quads: 3, Hams: 2, Glutes: 2, Calves: 1.5 },
    { Chest: 3, Back: 3, Shoulders: 2, Biceps: 1.5, Triceps: 1.5, Quads: 3, Hams: 2, Glutes: 2, Calves: 1.5 },
    { Chest: 3, Back: 3, Shoulders: 2, Biceps: 1.5, Triceps: 1.5, Quads: 3, Hams: 2, Glutes: 2, Calves: 1.5 },
  ],
  "Upper/Lower 4x": [
    { Chest: 4, Back: 4, Shoulders: 3, Biceps: 3, Triceps: 3 },
    { Quads: 5, Hams: 4, Glutes: 4, Calves: 3 },
    { Chest: 4, Back: 4, Shoulders: 3, Biceps: 3, Triceps: 3 },
    { Quads: 5, Hams: 4, Glutes: 4, Calves: 3 },
  ],
  "Push/Pull/Legs 6x": [
    { Chest: 6, Shoulders: 5, Triceps: 5 },
    { Back: 6, Biceps: 5 },
    { Quads: 6, Hams: 5, Glutes: 5, Calves: 4 },
    { Chest: 6, Shoulders: 5, Triceps: 5 },
    { Back: 6, Biceps: 5 },
    { Quads: 6, Hams: 5, Glutes: 5, Calves: 4 },
  ],
};

// ---- seeded PRNG ----
function makeRng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
}

// Simulate one scenario. schedule: "regular" (every session) or "irregular" (each session ~55% done).
// Returns per-week records with per-muscle {sets, stim, state}, plus counts and the overall verdict.
function simulate(planName, schedule, seed, progress = true) {
  const sessions = PLANS[planName];
  const rng = makeRng(seed);
  const pDone = schedule === "regular" ? 1 : 0.55;

  const setsHist = {}, loadHist = {};
  MUSCLES.forEach((m) => { setsHist[m] = []; loadHist[m] = []; });
  const load = {};
  MUSCLES.forEach((m) => (load[m] = 100)); // arbitrary e1RM units

  for (let wk = 0; wk < WEEKS; wk++) {
    const wkSets = {};
    MUSCLES.forEach((m) => (wkSets[m] = 0));
    for (const sess of sessions) {
      if (rng() > pDone) continue; // missed session (irregular only)
      for (const m of Object.keys(sess)) wkSets[m] += sess[m] * (0.94 + rng() * 0.12); // small execution noise
    }
    // load progresses when the week's dose is a growth stimulus, holds at maintenance, decays below it.
    // progress=false models repeating the same loads (no progressive overload): loads stay flat while trained.
    MUSCLES.forEach((m) => {
      const s = wkSets[m];
      let g;
      if (!progress) g = s >= MV ? 0 : -0.004;
      else if (s >= MEV) g = 0.030 * Math.exp(-wk / 8) + 0.002; // newbie gains, decaying toward an intermediate rate
      else if (s >= MV) g = 0;
      else g = -0.004;
      load[m] *= 1 + g + (rng() - 0.5) * 0.004;
      setsHist[m].push(s);
      loadHist[m].push(load[m]);
    });
  }

  // classify each week from a rolling 10-week window (zeros before the start, as the app does)
  const rec = [];
  for (let t = 0; t < WEEKS; t++) {
    const window = (arr) => {
      const out = new Array(N).fill(0);
      for (let k = 0; k < N; k++) {
        const idx = t - (N - 1) + k;
        if (idx >= 0) out[k] = arr[idx];
      }
      return out;
    };
    const per = {};
    const states = [];
    let totRecent = 0, totEarlier = 0;
    MUSCLES.forEach((m) => {
      const S = window(setsHist[m]), L = window(loadHist[m]);
      const c = classifyMuscle(S, L);
      per[m] = { sets: c.sets, stim: c.stim, state: c.state, borderline: c.borderline };
      if (S.some((v) => v > 0)) states.push(c.state);
      totRecent += (S[7] + S[8] + S[9]) / 3;
      totEarlier += (S[4] + S[5] + S[6]) / 3;
    });
    const activeWeeks = setsHist[MUSCLES[0]].slice(0, t + 1).filter((v) => v > 0).length;
    const tauAll = totEarlier > 0 ? totRecent / totEarlier : null;
    const verdict = overallVerdict(states, tauAll, Math.max(activeWeeks, t >= 2 ? 3 : 0));
    const growing = states.filter((s) => s === "grow").length;
    const holding = states.filter((s) => s === "hold").length;
    const shrink = states.filter((s) => s === "shrink").length;
    const meanStim = MUSCLES.reduce((p, m) => p + per[m].stim, 0) / MUSCLES.length;
    rec.push({ per, growing, holding, shrink, verdict, meanStim });
  }
  return rec;
}

// ---- run scenarios (fixed seeds -> reproducible) ----
const SEED = 20260717;
const regByPlan = {};
Object.keys(PLANS).forEach((p, i) => (regByPlan[p] = simulate(p, "regular", SEED + i)));
const ulRegular = regByPlan["Upper/Lower 4x"];
const ulIrregular = simulate("Upper/Lower 4x", "irregular", SEED + 99);


// Monte Carlo muscle-gain forecast (mirrors the in-app forecast): each run accumulates a weekly fractional
// gain baseRate·indiv·ρ(D)·effort·overload·e^(−t/32), with the inter-individual multiplier drawn lognormal
// to span Hubal 2005's observed range. Plan = 10 sets/wk progressing; current pace = 6 sets/wk stalling.
// Novice base rate, 500 paired runs; returns 10/50/90th-percentile trajectories.
function mcForecast(rho, progressing, { baseRate = 0.9, effort = 0.9, ageF = 1, meanD = 99, K = 500, W = 16 } = {}) {
  let s = 987654321 >>> 0; const u = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const nrm = (m, sd) => { const a = Math.max(1e-9, u()); return m + sd * Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * u()); };
  const tr = Array.from({ length: W + 1 }, () => []);
  for (let k = 0; k < K; k++) {
    const indiv = Math.exp(nrm(0, 0.55)), ov = progressing ? 1 : Math.max(0, nrm(0.5, 0.08));
    let C = 0; tr[0].push(0);
    for (let t = 1; t <= W; t++) {
      const inc = meanD >= MV
        ? baseRate * indiv * ageF * rho * effort * ov * Math.exp(-t / 32)   // hypertrophy
        : -0.4 * indiv * (1 - meanD / MV);                                   // atrophy below maintenance
      C += inc; tr[t].push(C);
    }
  }
  const q = (a, p) => { const b = a.slice().sort((x, y) => x - y); return b[Math.floor(p * (b.length - 1))]; };
  return { p10: tr.map((a) => q(a, 0.1)), p50: tr.map((a) => q(a, 0.5)), p90: tr.map((a) => q(a, 0.9)) };
}
// Training regimes over 24 weeks (novice), MC gain: adequate volume progressing / no progression /
// irregular (~55% of sessions) / below maintenance. Same volume in the first two, so their gap is overload.
const RW = 24;
const rgProg = mcForecast(doseStimulus(10), true, { meanD: 10, W: RW });
const rgFlat = mcForecast(doseStimulus(10), false, { meanD: 10, W: RW });
const rgIrr = mcForecast(doseStimulus(5.5), false, { meanD: 5.5, W: RW });
const rgLoss = mcForecast(doseStimulus(1.5), false, { meanD: 1.5, W: RW });
// Plan comparison, MC gain: each plan's mean weekly effective sets across the nine muscles.
const planMeanDose = (name) => { const wk = {}; MUSCLES.forEach((m) => (wk[m] = 0)); PLANS[name].forEach((s) => Object.keys(s).forEach((m) => (wk[m] += s[m]))); return MUSCLES.reduce((a, m) => a + wk[m], 0) / MUSCLES.length; };
const planGain = Object.fromEntries(Object.keys(PLANS).map((p) => [p, mcForecast(doseStimulus(planMeanDose(p)), true, { meanD: planMeanDose(p), W: RW })]));

// Starting points: same adequate, progressing plan from three training-age base rates (Damas 2016).
const startNov = mcForecast(doseStimulus(10), true, { baseRate: 0.9, meanD: 10, W: RW });
const startInt = mcForecast(doseStimulus(10), true, { baseRate: 0.5, meanD: 10, W: RW });
const startAdv = mcForecast(doseStimulus(10), true, { baseRate: 0.28, meanD: 10, W: RW });

// Sensitivity: week-16 median gain when each key parameter is swung low↔high (novice plan baseline).
const ageFor = (a) => (a > 30 ? Math.max(0.5, 1 - (a - 30) * 0.008) : 1);
const w16 = (o) => o.p50[16];
const sBase = w16(mcForecast(doseStimulus(10), true, { baseRate: 0.9, effort: 0.9, ageF: 1 }));
const sens = [
  { label: "effort", lo: w16(mcForecast(doseStimulus(10), true, { effort: 0.6 })), hi: w16(mcForecast(doseStimulus(10), true, { effort: 1.0 })) },
  { label: "progression", lo: w16(mcForecast(doseStimulus(10), false)), hi: w16(mcForecast(doseStimulus(10), true)) },
  { label: "volume", lo: w16(mcForecast(doseStimulus(7), true)), hi: w16(mcForecast(doseStimulus(13), true)) },
  { label: "age", lo: w16(mcForecast(doseStimulus(10), true, { ageF: ageFor(45) })), hi: w16(mcForecast(doseStimulus(10), true, { ageF: ageFor(25) })) },
  { label: "experience", lo: w16(mcForecast(doseStimulus(10), true, { baseRate: 0.28 })), hi: w16(mcForecast(doseStimulus(10), true, { baseRate: 0.9 })) },
].sort((a, b) => Math.abs(a.hi - a.lo) - Math.abs(b.hi - b.lo)); // ascending swing -> smallest at bottom (y=0)

// ---- console summary ----
const growWeeks = (rec) => rec.reduce((p, w) => p + w.growing, 0);
const underWeeks = (rec) => rec.reduce((p, w) => p + w.shrink, 0);
const meanStimAll = (rec) => (rec.reduce((p, w) => p + w.meanStim, 0) / rec.length) * 100;
console.log(`\nTraining-stimulus simulations  ·  ${WEEKS} weeks  ·  seed ${SEED}  (reproducible)\n`);
console.log("Regular execution (cumulative muscle-weeks over the run):");
Object.keys(PLANS).forEach((p) => {
  const r = regByPlan[p];
  console.log(`  ${p.padEnd(20)} growing ${String(growWeeks(r)).padStart(3)}  under ${String(underWeeks(r)).padStart(3)}  mean stimulus ${meanStimAll(r).toFixed(0)}%`);
});
console.log("\nUpper/Lower — regular vs irregular (~55% of sessions):");
console.log(`  regular    growing ${growWeeks(ulRegular)} muscle-weeks · under ${underWeeks(ulRegular)} · mean stimulus ${meanStimAll(ulRegular).toFixed(0)}%`);
console.log(`  irregular  growing ${growWeeks(ulIrregular)} muscle-weeks · under ${underWeeks(ulIrregular)} · mean stimulus ${meanStimAll(ulIrregular).toFixed(0)}%`);

// ================= SVG chart helpers =================
const W = 760, H = 300, PAD = { l: 46, r: 96, t: 18, b: 34 };
const plotW = W - PAD.l - PAD.r, plotH = H - PAD.t - PAD.b;
const xAt = (i, n) => PAD.l + (n <= 1 ? 0 : (i * plotW) / (n - 1));
const yAt = (v, max) => PAD.t + plotH - (Math.max(0, Math.min(max, v)) / max) * plotH;

function axes(yMax, yTicks, yFmt) {
  let g = "";
  for (let k = 0; k <= yTicks; k++) {
    const v = (yMax * k) / yTicks, y = yAt(v, yMax);
    g += `<line class="grid" x1="${PAD.l}" y1="${y.toFixed(1)}" x2="${W - PAD.r}" y2="${y.toFixed(1)}"/>`;
    g += `<text class="tick" x="${PAD.l - 8}" y="${(y + 3.5).toFixed(1)}" text-anchor="end">${yFmt(v)}</text>`;
  }
  return g;
}
function xLabels(n, step) {
  let g = "";
  for (let i = 0; i < n; i += step) g += `<text class="tick" x="${xAt(i, n).toFixed(1)}" y="${H - PAD.b + 16}" text-anchor="middle">${i + 1}</text>`;
  g += `<text class="axlab" x="${(PAD.l + (W - PAD.r)) / 2}" y="${H - 2}" text-anchor="middle">week</text>`;
  return g;
}
// line chart: series = [{label, color, pts:[y...]}]; direct-labels each line at its right end
function lineChart(series, n, yMax, yTicks, yFmt, yLab) {
  let s = `<svg viewBox="0 0 ${W} ${H}" class="chart" role="img">`;
  s += axes(yMax, yTicks, yFmt) + xLabels(n, 4);
  s += `<text class="axlab" transform="rotate(-90 14 ${PAD.t + plotH / 2})" x="14" y="${PAD.t + plotH / 2}" text-anchor="middle">${yLab}</text>`;
  for (const ser of series) {
    const d = ser.pts.map((v, i) => `${i ? "L" : "M"}${xAt(i, n).toFixed(1)},${yAt(v, yMax).toFixed(1)}`).join(" ");
    s += `<path d="${d}" fill="none" stroke="${ser.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
    const ly = yAt(ser.pts[ser.pts.length - 1], yMax);
    s += `<circle cx="${xAt(n - 1, n).toFixed(1)}" cy="${ly.toFixed(1)}" r="3.2" fill="${ser.color}"/>`;
  }
  // de-collide the direct end-labels: keep true dot positions, push label text apart by >=13px
  const gap = 13;
  const lab = series.map((ser) => ({ ser, y: yAt(ser.pts[ser.pts.length - 1], yMax) })).sort((a, b) => a.y - b.y);
  for (let i = 1; i < lab.length; i++) if (lab[i].y - lab[i - 1].y < gap) lab[i].y = lab[i - 1].y + gap;
  const overflow = lab.length ? lab[lab.length - 1].y - (PAD.t + plotH) : 0;
  if (overflow > 0) lab.forEach((l) => (l.y -= overflow)); // shift the stack up if it ran past the axis
  for (const l of lab) s += `<text class="slab" x="${W - PAD.r + 8}" y="${(l.y + 3.5).toFixed(1)}" fill="${l.ser.color}">${l.ser.label}</text>`;
  return s + `</svg>`;
}
// state heatmap: rows = muscles, cols = weeks
const STATE_COL = { grow: "var(--good)", hold: "var(--warn)", shrink: "var(--crit)", more: "var(--muted-fill)" };
const STATE_GLYPH = { grow: "↑", hold: "→", shrink: "↓", more: "·" };
function heatmap(rec, rows) {
  const cw = 26, ch = 22, left = 62, top = 16, n = rec.length;
  const w = left + n * cw + 8, h = top + rows.length * ch + 26;
  let s = `<svg viewBox="0 0 ${w} ${h}" class="chart" role="img">`;
  rows.forEach((m, r) => {
    s += `<text class="rowlab" x="${left - 8}" y="${top + r * ch + ch / 2 + 3.5}" text-anchor="end">${m}</text>`;
    for (let c = 0; c < n; c++) {
      const st = rec[c].per[m].state;
      const x = left + c * cw, y = top + r * ch;
      s += `<rect x="${x + 1}" y="${y + 1}" width="${cw - 2}" height="${ch - 2}" rx="3" fill="${STATE_COL[st]}" opacity="0.9"/>`;
      s += `<text class="cellg" x="${x + cw / 2}" y="${y + ch / 2 + 4}" text-anchor="middle">${STATE_GLYPH[st]}</text>`;
    }
  });
  for (let c = 0; c < n; c += 4) s += `<text class="tick" x="${left + c * cw + cw / 2}" y="${top + rows.length * ch + 14}" text-anchor="middle">${c + 1}</text>`;
  s += `<text class="axlab" x="${left + (n * cw) / 2}" y="${h - 2}" text-anchor="middle">week</text>`;
  return s + `</svg>`;
}

// ---- assemble series ----
const weeks = WEEKS;
const meanStimSeries = [
  { label: "regular", color: "var(--reg)", pts: ulRegular.map((w) => w.meanStim * 100) },
  { label: "irregular", color: "var(--irr)", pts: ulIrregular.map((w) => w.meanStim * 100) },
];
const underSeries = [
  { label: "regular", color: "var(--reg)", pts: ulRegular.map((w) => w.shrink) },
  { label: "irregular", color: "var(--irr)", pts: ulIrregular.map((w) => w.shrink) },
];
const trackMus = ["Chest", "Back", "Quads", "Biceps", "Calves"];
const musColor = { Chest: "var(--m1)", Back: "var(--m2)", Quads: "var(--m3)", Biceps: "var(--m4)", Calves: "var(--m5)" };
const stimSeries = trackMus.map((m) => ({ label: m, color: musColor[m], pts: ulRegular.map((w) => w.per[m].stim * 100) }));
const planColor = { "Full-Body 3x": "var(--p1)", "Upper/Lower 4x": "var(--p2)", "Push/Pull/Legs 6x": "var(--p3)" };
const planSeries = Object.keys(PLANS).map((p) => ({ label: p.replace(/ .*/, ""), color: planColor[p], pts: regByPlan[p].map((w) => w.meanStim * 100) }));

const il = ulIrregular[WEEKS - 1]; // irregular final week, for the summary table

// ---- HTML ----
const legend = (items) => `<div class="legend">${items.map((i) => `<span class="lg"><i style="background:${i.color}"></i>${i.label}</span>`).join("")}</div>`;
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Yalla growth-model simulations</title>
<style>
:root{
  --surface:#fcfcfb; --plane:#f9f9f7; --ink:#0b0b0b; --ink2:#52514e; --muted:#898781;
  --grid:#e1e0d9; --border:rgba(11,11,11,.10);
  --reg:#2a78d6; --irr:#eb6834;
  --m1:#2a78d6; --m2:#1baf7a; --m3:#eda100; --m4:#008300; --m5:#4a3aa7;
  --p1:#2a78d6; --p2:#4a3aa7; --p3:#eb6834;
  --good:#0ca30c; --warn:#fab219; --crit:#d03b3b; --muted-fill:#c9c8c2;
}
@media (prefers-color-scheme:dark){:root{
  --surface:#1a1a19; --plane:#0d0d0d; --ink:#fff; --ink2:#c3c2b7; --muted:#898781;
  --grid:#2c2c2a; --border:rgba(255,255,255,.10);
  --reg:#3987e5; --irr:#d95926;
  --m1:#3987e5; --m2:#199e70; --m3:#c98500; --m4:#008300; --m5:#9085e9;
  --p1:#3987e5; --p2:#9085e9; --p3:#d95926; --muted-fill:#3a3a37;
}}
*{box-sizing:border-box}
body{margin:0;background:var(--plane);color:var(--ink);font:15px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif}
.wrap{max-width:900px;margin:0 auto;padding:34px 22px 60px}
h1{font-size:24px;margin:0 0 4px}h2{font-size:18px;margin:34px 0 4px}
p{color:var(--ink2);margin:8px 0}
.sub{color:var(--muted);font-size:13px;margin-top:0}
.card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px 16px 10px;margin:14px 0}
.chart{width:100%;height:auto;overflow:visible}
.grid{stroke:var(--grid);stroke-width:1}
.tick{fill:var(--muted);font:11px system-ui,sans-serif;font-variant-numeric:tabular-nums}
.axlab{fill:var(--muted);font:11px system-ui,sans-serif}
.slab{font:600 12px system-ui,sans-serif}
.rowlab{fill:var(--ink2);font:12px system-ui,sans-serif}
.cellg{fill:var(--surface);font:12px system-ui,sans-serif;font-weight:700}
.legend{display:flex;gap:16px;flex-wrap:wrap;margin:2px 2px 8px;font-size:13px;color:var(--ink2)}
.lg{display:inline-flex;align-items:center;gap:6px}.lg i{width:11px;height:11px;border-radius:3px;display:inline-block}
.states{display:flex;gap:16px;flex-wrap:wrap;margin:6px 2px;font-size:13px;color:var(--ink2)}
.st{display:inline-flex;align-items:center;gap:6px}.st i{width:14px;height:14px;border-radius:3px;display:inline-grid;place-items:center;color:var(--surface);font-size:10px;font-weight:700}
table{border-collapse:collapse;width:100%;font-size:13px;margin:8px 0}
th,td{border:1px solid var(--border);padding:6px 9px;text-align:left}th{font-weight:600}
td.n,th.n{text-align:right;font-variant-numeric:tabular-nums}
.foot{color:var(--muted);font-size:12px;margin-top:30px;border-top:1px solid var(--border);padding-top:10px}
code{font-family:ui-monospace,Menlo,monospace;font-size:12.5px}
</style></head>
<body><div class="wrap">
<h1>How the growth signal tracks training</h1>
<p class="sub">Reproducible simulations of the Yalla training-stimulus model · ${WEEKS} weeks · seed ${SEED} · generated by <code>research/simulate.mjs</code></p>
<p>A lifter runs a standard plan for ${WEEKS} weeks. Loads progress when a muscle gets a growth dose that week, hold at a maintenance dose, and drift down below it. The model reads each week from a rolling 10-week window. Colours and layout follow the data-viz palette (colourblind-checked); lines are direct-labelled so identity never rests on colour alone.</p>

<h2>1. Regular vs irregular execution</h2>
<p>Same plan (Upper/Lower, 4 sessions/week). Regular does every session; irregular completes about 55% of them at random. Mean growth stimulus across the nine trained muscles, ρ(D), separates the two clearly: regular settles high and steady, irregular sits lower and choppier.</p>
<div class="card">${legend([{label:"regular",color:"var(--reg)"},{label:"irregular",color:"var(--irr)"}])}${lineChart(meanStimSeries, weeks, 100, 4, (v)=>v.toFixed(0)+"%", "mean stimulus")}</div>
<p>The cost of missed sessions shows up as muscles slipping below maintenance — under-stimulated weeks the regular schedule almost never has.</p>
<div class="card">${legend([{label:"regular",color:"var(--reg)"},{label:"irregular",color:"var(--irr)"}])}${lineChart(underSeries, weeks, 9, 3, (v)=>v.toFixed(0), "muscles under-stimulated")}</div>

<h2>2. Per-muscle state over time</h2>
<p>The same two runs, per muscle per week. Each cell is the model's verdict that week.</p>
<div class="states"><span class="st"><i style="background:var(--good)">↑</i>growing</span><span class="st"><i style="background:var(--warn)">→</i>holding</span><span class="st"><i style="background:var(--crit)">↓</i>under-stimulated</span><span class="st"><i style="background:var(--muted-fill)">·</i>too little data</span></div>
<div class="card"><p class="sub" style="margin:2px 2px 6px">Regular</p>${heatmap(ulRegular, MUSCLES)}</div>
<div class="card"><p class="sub" style="margin:2px 2px 6px">Irregular (~55% of sessions)</p>${heatmap(ulIrregular, MUSCLES)}</div>

<h2>3. Growth stimulus per muscle (regular)</h2>
<p>Share of the attainable growth stimulus, ρ(D), for five muscles on the Upper/Lower plan as it is executed. Higher-volume muscles settle higher; all climb as the rolling window fills.</p>
<div class="card">${lineChart(stimSeries, weeks, 100, 4, (v)=>v.toFixed(0)+"%", "stimulus")}</div>

<h2>4. Plan comparison (regular)</h2>
<p>Mean growth stimulus across all nine muscles for three standard plans, each run regularly. More weekly volume per muscle lifts the whole-body stimulus, with diminishing returns.</p>
<div class="card">${lineChart(planSeries, weeks, 100, 4, (v)=>v.toFixed(0)+"%", "mean stimulus")}</div>

<h2>Summary at week ${WEEKS}</h2>
<table><thead><tr><th>Scenario</th><th class="n">growing</th><th class="n">holding</th><th class="n">under</th><th class="n">mean stimulus</th><th>overall</th></tr></thead><tbody>
${Object.keys(PLANS).map((p)=>{const l=regByPlan[p][weeks-1];return `<tr><td>${p} (regular)</td><td class="n">${l.growing}</td><td class="n">${l.holding}</td><td class="n">${l.shrink}</td><td class="n">${(l.meanStim*100).toFixed(0)}%</td><td>${l.verdict}</td></tr>`;}).join("")}
<tr><td>Upper/Lower (irregular)</td><td class="n">${il.growing}</td><td class="n">${il.holding}</td><td class="n">${il.shrink}</td><td class="n">${(il.meanStim*100).toFixed(0)}%</td><td>${il.verdict}</td></tr>
</tbody></table>

<p class="foot">Simulation only — loads and adherence are generated, not measured. The model code is mirrored in <code>research/growth-core.mjs</code>; regenerate this page with <code>node research/simulate.mjs</code>. Same seed reproduces every number and chart.</p>
</div></body></html>`;

writeFileSync(new URL("./simulations.html", import.meta.url), html);
console.log("\nWrote research/simulations.html");

// ---- pgfplots data files for the white paper (headers + one row per week) ----
const dat = (header, rows) => header + "\n" + rows.map((r) => r.map((v) => (typeof v === "number" ? +v.toFixed(2) : v)).join(" ")).join("\n") + "\n";
const planKeys = Object.keys(PLANS);
writeFileSync(new URL("./sim-regimes.dat", import.meta.url),
  dat("week progLo progMid progHi flatLo flatMid flatHi irrLo irrMid irrHi lossLo lossMid lossHi",
    rgProg.p50.map((_, t) => [t,
      rgProg.p10[t], rgProg.p50[t], rgProg.p90[t], rgFlat.p10[t], rgFlat.p50[t], rgFlat.p90[t],
      rgIrr.p10[t], rgIrr.p50[t], rgIrr.p90[t], rgLoss.p10[t], rgLoss.p50[t], rgLoss.p90[t]])));
writeFileSync(new URL("./sim-plangain.dat", import.meta.url),
  dat("week fbLo fbMid fbHi ulLo ulMid ulHi pplLo pplMid pplHi",
    planGain[planKeys[0]].p50.map((_, t) => [t,
      planGain[planKeys[0]].p10[t], planGain[planKeys[0]].p50[t], planGain[planKeys[0]].p90[t],
      planGain[planKeys[1]].p10[t], planGain[planKeys[1]].p50[t], planGain[planKeys[1]].p90[t],
      planGain[planKeys[2]].p10[t], planGain[planKeys[2]].p50[t], planGain[planKeys[2]].p90[t]])));
writeFileSync(new URL("./sim-start.dat", import.meta.url),
  dat("week novLo novMid novHi intLo intMid intHi advLo advMid advHi",
    startNov.p50.map((_, t) => [t,
      startNov.p10[t], startNov.p50[t], startNov.p90[t], startInt.p10[t], startInt.p50[t], startInt.p90[t],
      startAdv.p10[t], startAdv.p50[t], startAdv.p90[t]])));
writeFileSync(new URL("./sim-sens.dat", import.meta.url),
  dat("y swing lo hi label", sens.map((sv, i) => [i, Math.abs(sv.hi - sv.lo), Math.min(sv.lo, sv.hi), Math.max(sv.lo, sv.hi), sv.label])));
console.log("Wrote sim-regimes.dat, sim-plangain.dat, sim-start.dat, sim-sens.dat");
console.log(`\nStarting points — 24-wk median gain: novice ${startNov.p50[RW].toFixed(1)}%, intermediate ${startInt.p50[RW].toFixed(1)}%, advanced ${startAdv.p50[RW].toFixed(1)}%`);
console.log(`\nRegimes — 24-wk median gain: progressing ${rgProg.p50[RW].toFixed(1)}%, no-overload ${rgFlat.p50[RW].toFixed(1)}%, irregular ${rgIrr.p50[RW].toFixed(1)}%, under-maintenance ${rgLoss.p50[RW].toFixed(1)}%`);
console.log("Sensitivity of 16-wk median gain (baseline " + sBase.toFixed(1) + "%):");
sens.forEach((sv) => console.log(`  ${sv.label.padEnd(12)} ${sv.lo.toFixed(1)}% … ${sv.hi.toFixed(1)}%`));
