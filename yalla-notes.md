# Yalla — Developer Note Sheet

A single-file, offline-first iOS-style **workout tracker**. Everything (HTML + CSS + JS) lives in
`lift-log.html` — no build step, no dependencies, no server. Open it in a browser to run it; add it to
an iPhone Home Screen to use it as a standalone PWA.

> Line numbers below are approximate and **will drift as you edit**. Treat them as starting points and
> prefer `grep` on the function/selector name. The file is ~3,200 lines / ~268 KB, so when working in
> Claude Code, grep + targeted edits beat reading the whole file (it eats context fast).

---

## 1. File layout

| Region | Lines (approx) | What's there |
|---|---|---|
| `<head>` meta + theme/zoom scripts | 1–28 | viewport (zoom locked), apple PWA meta, base64 app icon, early theme + pinch-guard IIFEs |
| `<style>` | 29–911 | design tokens in `:root` (light) and `[data-theme=dark]`, then all component CSS |
| `<script>` (data) | 912–1130 | `DEFAULT_PLANS`, `ICON`, `EQUIP`, `ALTS`, `MUSCLES`, `MCOLOR`, `muscleFor`, `LIBRARY` |
| `<script>` (logic) | 1130–3200 | storage, state, render pipeline, timers, builder, sheets, save/log, achievements |

There are **two** `<script>` blocks: the tiny head one (theme + gesture lock) and the main one.

---

## 2. How to run / test

- **Run:** open `lift-log.html` in any browser. State persists in `localStorage`.
- **iPhone:** Safari → Share → Add to Home Screen. The zoom lock and safe-area insets only fully apply
  in that standalone mode. *Re-adding is required to pick up a new file version* — the icon points at the
  exact file you saved.
- **Headless tests** (what was used during development): Playwright + Chromium at ~390px viewport. Mock
  `window.storage` via `add_init_script` (in-memory object, or a `localStorage`-backed shim if you need
  state to survive a `reload()`). Expose `window.__mem` to inspect saved data.

---

## 3. Data model & storage

All persistence goes through **`sget(k)` / `sset(k,v)`** (~1448). They try `window.storage` (injected by
the native host), then `localStorage`, then an in-memory fallback. Values are JSON-encoded.

Storage keys:

| Key | Shape | Notes |
|---|---|---|
| `plans` | `[plan]` | array of plans |
| `lastsets` (`last`) | `{ exName: [{w,r}] }` | last logged sets per exercise (used as placeholders) |
| `bodyweight` (`bw`) | `[{d, kg}]` | bodyweight log |
| `history` (`hist`) | `{ exName: [{d,w,r,n,v}] }` | one entry per exercise per session |
| `extlog` | `[entry]` | "other training" (cardio/sport) log |
| `settings` | object | see below |
| `draft` | `{ sig: { t, s:{ exName:[{w,r}] } } }` | **in-progress workout**, kept until saved |

`BACKUP_KEYS` (~3087) lists what export/restore covers (everything except `draft`).

**Plan shape:** `{ id, name, workouts:[ { name, sub, rotate, ex:[ {n, t, s, alts, ss} ] } ] }`
- `n` = exercise name, `t` = target/rep-scheme text, `s` = number of sets, `alts` = swap alternatives,
  `ss` = superset tag (same adjacent tag = grouped). `rotate:false` = a non-rotating replacement day
  (e.g. "Home session").

**`settings`** (~1471): `activePlanId, pointers{planId:idx}, sessions, sinceDeload, beatTotal,
goalStart, goalTarget, heightCm, bodyfatPct, sex, theme, restSec`, plus one-time migration flags
(`mariesSeeded, armsSmoothed, supersetsByArea, accessorySupersets, …`).

---

## 4. Core globals (~1459)

```
plans, last, bw, hist, extlog         // mirror the stored data
draft                                  // in-progress entries, { sig:{t,s} }
swaps, swapIdx                         // session-only exercise swaps (per slot index)
freeMode                               // true = ad-hoc "free workout" mode
timer = {elapsed, startedAt, running}  // session stopwatch (counts up, whole session)
rest  = {elapsed, target, startedAt, alerted, iv}  // per-set rest timer (counts up, resets each set)
settings, curWk, editing
```

`activePlan()` returns the current plan; `curWk` indexes its `workouts`.

---

## 5. Render pipeline

`renderAll()` (~1643) = `renderNav` + `renderDash` + `renderSeg` + `renderWorkout`.

- **Plan mode** → `renderWorkout()` (~1848) builds `#exlist`: one `.group` per exercise (with
  `data-ex=name`), set rows, supersets labels, swap/info/remove links, the per-tile "+ add set", and an
  "Add exercise" button. Ends by calling `applyDraft()` to restore in-progress entries.
- **Free mode** → `renderFree()` (~2338): starts empty, exercises added via the Add sheet
  (`buildFreeGroup`). Also restores from `draft["free"]`.
- `renderDash()` (~1651) = the "Me" dashboard (stats, bodyweight goal, muscle balance radar, insights,
  achievements).

Exercises are grouped under `#exlist` in **both** modes, so one delegated listener covers each.

---

## 6. Key subsystems (grep these)

- **Exercise data:** `LIBRARY` (~1130, the master list), `MUSCLES` (~1044) + `muscleFor()` (~1084,
  returns `[primary, …secondary]`), `EQUIP`/`equipFor`, `ALTS` (swap suggestions), `MCOLOR` (per-muscle
  accent). `MGROUPS` (~2200) = the 12 trackable muscle groups for the radar/balance.
- **Plan builder:** `buildPlan(b)` (~2945) with `BUILD_POOL` (~2802) and helpers above it
  (`emphasisPreset`, `pickWorkoutWeighted`, `familyKey`, `regroupSupersets`, `trimDay`). Driven by the
  Build sheet (`#sheetBuild`). Handles split selection, exercise counts, supersets, emphasis radar,
  injuries, venue (home/park/gym), and a coverage guarantee.
- **Session timer** (counts up, whole session): `tmrStart/tmrPause/tmrReset/tmrRender` (~1480). Auto-starts
  on first set input.
- **Rest timer** (counts **up** from 0, **resets to 0 every finished set**, never accumulates):
  `restStart/restRender/restReached/restStop/restAdjust` (~1502). Fires on the `change` event when a set
  row has reps. `restReached` beeps/buzzes/notifies at the target (`settings.restSec`, ±15 via buttons).
- **In-progress draft** (keep entries until the workout ends): `captureDraft` (~1814), `applyDraft`
  (~1826), `flushDraft` + `pagehide`/`visibilitychange` listeners. Snapshots every set row per workout
  signature (`draftSig()` = `planId|curWk` or `"free"`), survives re-renders/day-switches/reload, expires
  after 20 h, and is cleared on save. Empty captures never clobber a saved draft (mid-unload guard).
- **Set rows:** built inline in `renderWorkout` and via `freeSetRow`. Add = `.addset`, remove =
  `.setdel` → `removeSetRow` (renumbers; clears rather than deletes the last row). Weight input is
  `type=text inputmode=decimal` with input sanitizing to digits + one dot (comma→dot).
- **Swaps:** `swaps[slotIndex]` overrides the displayed name for the session only; reset on save.
- **Save / logging:** the `#saveBtn` handler (~1899). Reads `#exlist .group`, logs each exercise that has
  **at least one set with reps**, computes volume via `setVol` (bodyweight-aware), updates `last`/`hist`,
  advances the rotation pointer, checks achievements, then opens the share tile and clears the draft.
- **Other:** achievements (`checkAchievements`/`unlockedIds`), share tile (1080×1350 canvas), backup
  export/restore (AES-GCM optional), bodyweight goal, muscle-balance radar (`drawRadar`), theme
  (`applyTheme`, auto/light/dark), confirm modal (`confirmAsk` → `#cYes`), `toast`.

---

## 7. CSS / design

- Tokens in `:root` and `[data-theme=dark]`: `--bg/--bg2/--card/--ink/--l2/--l3/--line/--sep/--field`,
  `--accent` (burnt amber: light `#c96810`, dark `#f09030`), `--accent-soft`, `--grad`, radii
  (`--r-lg/md/sm`), `--shadow`.
- Full-screen background is a fixed `body::before` gradient layer (paints into the safe area — don't
  reintroduce `background-attachment:fixed`, iOS won't paint it under the notch).
- Top inset: `.nav` padding-top is `calc(36px + env(safe-area-inset-top))`. Bottom insets on body,
  `.savebar`, `.sheetbody` use `env(safe-area-inset-bottom)`.
- Sizing was scaled up for a native feel (inputs ~17.5px, names 19px, title 34px, tabs 16px). Zoom is
  locked (`maximum-scale=1, user-scalable=no` + `touch-action:manipulation` + a pinch-gesture guard).

---

## 8. Conventions & gotchas

- **No browser storage in artifacts other than via `sget/sset`** in normal app flow; component reads/writes
  go through those helpers.
- **`history` is stored oldest-first.** Plans are seeded as an **array**. Migration flags must all be
  present when seeding test state or migrations re-run.
- The plan editor (`edSave`) early-returns if the plan **name is empty** — set it when testing the editor
  directly.
- Supersets are **adjacency-based**: same `ss` tag on neighbouring exercises. `normalizeSS` drops orphan
  tags after reorder/delete. A superset only groups exercises whose full muscle sets are **disjoint**.
- Bodyweight exercises: the weight field is *added* weight; real load = `bwNow()*frac + added`
  (`setLoad`/`setVol`). Logging uses `setVol`, so bodyweight sets log real volume even with a blank weight.
- iOS standalone caching: a Home-Screen icon serves the file version saved that day. New versions require
  re-saving the file and re-adding to the Home Screen.

---

## 9. Changed recently (this session)

- Editable supersets in the plan editor (flame toggle) + builder supersets on/off; flame is the superset
  symbol (distinct from the ↔ swap icon).
- iPhone polish: safe-area top inset, adaptive status bar, seamless full-screen gradient, larger clean top
  margin, global scale-up for a native feel, zoom locked.
- Remove-set control (`.setdel`) per row.
- **In-progress draft** persistence (keep all entered values until the workout is ended; survives reload
  and backgrounding).
- Rest timer reworked to **count up from 0 and reset every set** (no accumulation).
- Decimal weights (reliable entry + sanitizing).
- Logging fixes: only sets with reps count; volume is bodyweight-aware.

---

## 9b. Part II — prediction ledger & self-calibration (v116)

- Protocol fixed in `CALIBRATION-PLAN.md`; reference implementation `research/ledger-core.mjs`;
  compact mirror in app.js (the `lg*` functions + `LG` constants). Parity between the two is
  enforced numerically by `research/ledger.test.mjs` — change both together or that test fails.
- New synced stores: `predledger` (append-only forecast records) and `calib` (per-user posterior).
  Both are in `CLOUD_KEYS`, so they ride the existing sync/backup/restore paths.
- Flow: `ledgerTick(emit)` — score matured forecasts → update posterior → (on workout save) emit
  this week's forecasts. Called with `emit=true` from the workout save button, `emit=false` at init.
- UI: `slCard` tile ("Strength forecast — on the record") on the Me page; shows numbers only after
  10 scored forecasts (before that it says "calibrating").
- Research CLIs: `ledger-backtest.mjs` (walk-forward metrics on an exported history) and
  `effectiveness.mjs` (which exercises transfer to the muscle's other lifts).

## 9c. Strength/hypertrophy de-conflation + bridge (v117, plan §12)

- **De-conflation:** the ledger predicts *strength* but reused the *hypertrophy* dose-response.
  Now uses its own `doseStimulusStrength` / `lgDoseStr` (`s0_S=5/ln5≈3.11`, plateaus by ~5 sets vs
  10 for hypertrophy — Pelland 2026). The Monte Carlo keeps the hypertrophy `doseStimulus`.
- **Bridge:** `growthForecast()` draws the hypertrophy multiplier `indiv` from the strength posterior
  via the bivariate-normal conditional (`bridgeThetaH` in ledger-core), gated on ≥10 scored forecasts.
  ρ_sh=0.3 (deliberately low — strength is a weak, neural-biased proxy). Sub-text shows "personalised
  from your strength data" when active; per-muscle bars use the bridged median so they stay consistent
  with the whole-body line.
- The SBC/backtest generators and `effectiveness.mjs` dose control were switched to the strength curve
  (they model strength outcomes). Bridge has its own recovery/calibration tests in `ledger.test.mjs`.

---

## 10. Possible next steps / TODO ideas

- **Cross-gym machine resistance (deferred — agreed to revisit).** Everything keys off the
  exercise NAME, so "Leg Press" at gym A vs gym B shares one anchor / e1RM trend / PR / forecast,
  though the same pin is a different real load — quietly corrupts the strength trend on gym switches.
  Options: (1) per-machine naming (works today, zero code); (2) a "current gym" location tag that
  segments MACHINE exercises' anchors + e1RM per location under one name (recommended); (3) relative
  ordinal load modelling (overkill). Model is partly self-healing (rolling anchor, 2-week ledger
  baseline). Preferred: option 2, segment under the hood rather than suffixing names.
- Optionally fold the `wkMeta` line + session timer into one compact strip.
- Per-exercise rest target (currently one global `settings.restSec`).
- Edit/delete past history entries; a session history view.
- Make swaps persist across reload (currently session-only) if desired.
- Optional countdown rest-timer mode as a setting (current is count-up).
- Unit/weight setting (kg/lb) — currently kg throughout.
