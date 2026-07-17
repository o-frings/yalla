// growth-model.test.mjs — known-answer tests for the training-stimulus model.
//
// Each case encodes a training scenario with a domain-expected verdict, so miscalibration and future
// drift are caught without a body-composition study. Run: `node research/growth-model.test.mjs`.
//
// Mirrors ../app.js via growth-core.mjs. A failing test means either a real regression or that the
// expected answer needs revisiting — both worth a human look.

import {
  classifyMuscle, overallVerdict, inferEffort, effortRepDenom, doseStimulus,
  flat, ramp, MV, MEV, TARGET, MAV,
} from "./growth-core.mjs";

let pass = 0, fail = 0;
const eq = (name, got, want) => {
  const ok = got === want;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  ->  got ${JSON.stringify(got)}${ok ? "" : `, want ${JSON.stringify(want)}`}`);
  ok ? pass++ : fail++;
};
const approx = (name, got, want, tol = 0.02) => {
  const ok = Math.abs(got - want) <= tol;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  ->  ${got.toFixed(3)}${ok ? "" : ` (want ~${want})`}`);
  ok ? pass++ : fail++;
};

console.log("\n== Per-muscle state (dose x trend) ==");
// Adequate volume held flat -> holding (dose ok, no progression).
eq("10 hard sets, flat load", classifyMuscle(flat(10), flat(100)).state, "hold");
// Adequate volume with clearly rising load -> growing.
eq("10 sets, load rising steadily", classifyMuscle(flat(10), ramp(90, 120)).state, "grow");
// 10 EASY sets = 5 effective -> maintenance band, holding (not a growth stimulus).
eq("10 easy sets (=5 effective)", classifyMuscle(flat(5), flat(100)).state, "hold");
// Genuine light patch, ~1 effective set/wk -> under-stimulated.
eq("detrained to ~1 set/wk", classifyMuscle([9,9,8,8,7,3,2,1,1,1], flat(100)).state, "shrink");
// Classic strength progression (add load, drop reps): sets flat, e1RM up -> not a decline.
eq("add load, drop reps", classifyMuscle(flat(8), ramp(95, 112)).state === "shrink", false);
// Rebuilding from a layoff -> growing (rising volume).
eq("rebuilding volume 4->9", classifyMuscle([3,4,4,5,6,6,7,8,9,9], flat(100)).state, "grow");
// Volume dips to a maintenance dose but strength is held -> holding, not loss (the max() rescue).
eq("volume down, strength held", classifyMuscle([12,12,12,12,11,10,5,4,3,3], flat(100)).state, "hold");
// A hard stop ~4 weeks ago: both volume and strength crater together -> at risk (sharp-drop rule).
eq("cliff: volume AND strength crater",
  classifyMuscle([8,8,8,8,8,8,8,2,2,2], [120,120,120,120,120,120,120,75,75,75]).state, "shrink");

console.log("\n== Overall verdict ==");
// Big movers trained, a few small muscles neglected -> still growing overall.
eq("neglected small muscles only",
  overallVerdict(["grow","grow","hold","grow","hold","shrink","shrink","shrink"]), "grow");
eq("one of eight under-dosed",
  overallVerdict(["grow","grow","hold","hold","grow","hold","hold","shrink"]), "grow");
// Most muscles genuinely sparse -> at risk.
eq("mostly sparse month",
  overallVerdict(["shrink","shrink","shrink","hold","shrink","hold"]), "shrink");
// Too little data -> need more.
eq("insufficient weeks", overallVerdict(["grow","hold"], null, 2), "more");

console.log("\n== Dose-response backbone ==");
approx("sigma(MV=2)", doseStimulus(MV), 0.275);
approx("sigma(MEV=6)", doseStimulus(MEV), 0.619);
approx("sigma(TARGET=10)", doseStimulus(TARGET), 0.800);
approx("sigma(MAV=20)", doseStimulus(MAV), 0.960);
eq("stimulus is monotonic", doseStimulus(6) > doseStimulus(3) && doseStimulus(20) > doseStimulus(10), true);

console.log("\n== Effort inference ==");
// Anchor 120 (best set), K=30: same load & fewer reps -> more in reserve.
const A = 100 * (1 + 8 / 30); // best was 100x8
eq("match best (100x8) -> Max", inferEffort({ anchorE1RM: A, w: 100, r: 8, K: 30 }), 2);
eq("100x5 -> Hard", inferEffort({ anchorE1RM: A, w: 100, r: 5, K: 30 }), 1);
eq("90x8 (lighter) -> Easy", inferEffort({ anchorE1RM: A, w: 90, r: 8, K: 30 }), 0);
eq("no anchor -> null", inferEffort({ anchorE1RM: 0, w: 100, r: 8, K: 30 }), null);

console.log("\n== Self-calibrated denominator ==");
// Build failure sets consistent with a true 1RM of 120 and denominator 25; recovery should land near 25.
const denom = 25, M = 120, fr = (w) => Math.round(denom * (M / w - 1));
const hist = { Squat: [
  { w: 100, r: fr(100), ef: 2 }, { w: 110, r: fr(110), ef: 2 }, { w: 90, r: fr(90), ef: 2 },
] };
approx("recovers K near 25", effortRepDenom(hist), 25, 3);
eq("no Max sets -> default 30", effortRepDenom({ Bench: [{ w: 80, r: 8, ef: 1 }] }), 30);

console.log(`\n${pass}/${pass + fail} passed, ${fail} failed.`);
process.exit(fail ? 1 : 0);
