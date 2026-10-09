// ================= default plan =================
const DEFAULT_PLANS = [
{
  id:"ex-fullbody", name:"Short & Intense", level:"all levels", daysPerWeek:3,
  workouts:[
    {name:"Full Body A", sub:"Squat-led, ~30 min", rotate:true, ex:[
      {n:"Back Squat", t:"2 × 5–8", s:2},
      {n:"Barbell Bench Press", t:"2 × 6–10", s:2},
      {n:"Seated Row", t:"2 × 8–12", s:2, ss:"a"},
      {n:"Lateral Raise", t:"2 × 12–15", s:2, ss:"a"}]},
    {name:"Full Body B", sub:"Hinge-led, ~30 min", rotate:true, ex:[
      {n:"Romanian Deadlift", t:"2 × 6–10", s:2},
      {n:"Overhead Press", t:"2 × 6–10", s:2},
      {n:"Lat Pulldown", t:"2 × 8–12", s:2, ss:"a"},
      {n:"Triceps Pushdown", t:"2 × 10–15", s:2, ss:"a"}]},
    {name:"Full Body C", sub:"Machine-led, ~30 min", rotate:true, ex:[
      {n:"Leg Press", t:"2 × 8–12", s:2},
      {n:"Incline DB Press", t:"2 × 8–12", s:2},
      {n:"One-Arm DB Row", t:"2 × 8–12", s:2, ss:"a"},
      {n:"Incline DB Curl", t:"2 × 10–12", s:2, ss:"a"}]},
    {name:"Home", sub:"No gym — bodyweight, ~25 min", rotate:false, ex:[
      {n:"Bulgarian Split Squat", t:"2 × 10–12", s:2},
      {n:"Push-Ups", t:"2 × max", s:2},
      {n:"Inverted / Backpack Row", t:"2 × 8–12", s:2, ss:"a"},
      {n:"Pike Push-Ups", t:"2 × 6–12", s:2, ss:"a"},
      {n:"Plank", t:"2 × 30–45s", s:2}]},
  ]
},
{
  id:"ex-upperlower", name:"Upper / Lower", level:"intermediate", daysPerWeek:4,
  workouts:[
    {name:"Upper A", sub:"Strength-leaning push & pull", rotate:true, ex:[
      {n:"Barbell Bench Press", t:"3 × 6–10", s:3},
      {n:"Bent-Over Row", t:"3 × 6–10", s:3},
      {n:"Overhead Press", t:"3 × 8–12", s:3},
      {n:"Lateral Raise", t:"3 × 12–20", s:3, ss:"a"},
      {n:"Incline DB Curl", t:"3 × 8–12", s:3, ss:"a"}]},
    {name:"Lower A", sub:"Squat focus", rotate:true, ex:[
      {n:"Back Squat", t:"3 × 6–10", s:3},
      {n:"Romanian Deadlift", t:"3 × 8–12", s:3},
      {n:"Leg Press", t:"3 × 10–15", s:3},
      {n:"Standing Calf Raise", t:"3 × 8–12", s:3}]},
    {name:"Upper B", sub:"Higher-rep push & pull", rotate:true, ex:[
      {n:"Weighted Pull-Up", t:"3 × 6–10", s:3},
      {n:"Incline DB Press", t:"3 × 8–12", s:3},
      {n:"Seated Row", t:"3 × 8–12", s:3},
      {n:"Face Pulls", t:"3 × 15–20", s:3, ss:"a"},
      {n:"Triceps Pushdown", t:"3 × 10–15", s:3, ss:"a"}]},
    {name:"Lower B", sub:"Hinge focus", rotate:true, ex:[
      {n:"Front Squat", t:"3 × 6–10", s:3},
      {n:"Seated Leg Curl", t:"3 × 10–15", s:3},
      {n:"Walking Lunge", t:"3 × 10–12", s:3},
      {n:"Standing Calf Raise", t:"3 × 8–12", s:3}]},
  ]
},
{
  id:"ex-ppl", name:"Push · Pull · Legs", level:"advanced", daysPerWeek:6,
  workouts:[
    {name:"Push A", sub:"Chest, shoulders & triceps", rotate:true, ex:[
      {n:"Barbell Bench Press", t:"3 × 6–10", s:3},
      {n:"Overhead Press", t:"3 × 6–10", s:3},
      {n:"Incline DB Press", t:"3 × 8–12", s:3},
      {n:"Lateral Raise", t:"3 × 12–20", s:3, ss:"a"},
      {n:"Overhead Triceps Extension", t:"3 × 10–15", s:3, ss:"a"}]},
    {name:"Pull A", sub:"Back, rear delts & biceps", rotate:true, ex:[
      {n:"Weighted Pull-Up", t:"3 × 6–10", s:3},
      {n:"Bent-Over Row", t:"3 × 6–10", s:3},
      {n:"Face Pulls", t:"3 × 15–20", s:3, ss:"b"},
      {n:"Incline DB Curl", t:"3 × 8–12", s:3, ss:"b"},
      {n:"Hammer Curl", t:"3 × 10–12", s:3}]},
    {name:"Legs A", sub:"Quads, hamstrings & calves", rotate:true, ex:[
      {n:"Back Squat", t:"3 × 5–8", s:3},
      {n:"Romanian Deadlift", t:"3 × 6–10", s:3},
      {n:"Leg Press", t:"3 × 10–15", s:3},
      {n:"Seated Leg Curl", t:"3 × 10–15", s:3, ss:"c"},
      {n:"Standing Calf Raise", t:"4 × 8–12", s:4, ss:"c"}]},
    {name:"Push B", sub:"Volume-leaning push", rotate:true, ex:[
      {n:"Weighted Dip", t:"3 × 6–10", s:3},
      {n:"Seated DB Press", t:"3 × 8–12", s:3},
      {n:"Cable Fly", t:"3 × 10–15", s:3},
      {n:"Lateral Raise", t:"3 × 12–20", s:3, ss:"a"},
      {n:"Triceps Pushdown", t:"3 × 10–15", s:3, ss:"a"}]},
    {name:"Pull B", sub:"Volume-leaning pull", rotate:true, ex:[
      {n:"Lat Pulldown", t:"3 × 8–12", s:3},
      {n:"Chest-Supported Row", t:"3 × 8–12", s:3},
      {n:"Rear Delt Fly", t:"3 × 12–15", s:3, ss:"b"},
      {n:"Preacher Curl", t:"3 × 8–12", s:3, ss:"b"},
      {n:"Hammer Curl", t:"3 × 10–12", s:3}]},
    {name:"Legs B", sub:"Hinge & single-leg", rotate:true, ex:[
      {n:"Front Squat", t:"3 × 6–10", s:3},
      {n:"Hip Thrust", t:"3 × 8–12", s:3},
      {n:"Bulgarian Split Squat", t:"3 × 8–10", s:3},
      {n:"Leg Extension", t:"3 × 12–15", s:3, ss:"c"},
      {n:"Standing Calf Raise", t:"4 × 8–12", s:4, ss:"c"}]},
  ]
},
{
  id:"beginner-glp", name:"Glutes, Legs & Posture", level:"beginner", daysPerWeek:3,
  workouts:[
    {name:"Day 1", sub:"Glutes & hamstrings", rotate:true, ex:[
      {n:"Hip Thrust", t:"3 × 10–15", s:3},
      {n:"Goblet Squat", t:"3 × 8–12", s:3},
      {n:"Seated Leg Curl", t:"3 × 10–15", s:3},
      {n:"Cable Pull-Through", t:"2 × 12–15", s:2}]},
    {name:"Day 2", sub:"Quads & posture", rotate:true, ex:[
      {n:"Leg Press", t:"3 × 10–15", s:3},
      {n:"Reverse Lunge", t:"2 × 10–12", s:2},
      {n:"Face Pulls", t:"3 × 15–20", s:3},
      {n:"Band Pull-Aparts", t:"2 × 15–20", s:2}]},
    {name:"Day 3", sub:"Legs & core", rotate:true, ex:[
      {n:"Goblet Squat", t:"3 × 8–12", s:3},
      {n:"Glute Bridge", t:"3 × 12–20", s:3},
      {n:"Leg Extension", t:"3 × 12–15", s:3},
      {n:"Plank", t:"3 × 30–45s", s:3}]},
    {name:"Home", sub:"Bodyweight & posture — no gym", rotate:false, ex:[
      {n:"Glute Bridge", t:"3 × 15–20", s:3},
      {n:"Reverse Lunge", t:"3 × 10–12", s:3},
      {n:"Prone Y-Raise", t:"3 × 12–15", s:3},
      {n:"Wall Slides", t:"2 × 10–12", s:2},
      {n:"Chin Tucks", t:"2 × 10 (slow)", s:2},
      {n:"Plank", t:"3 × 30–45s", s:3}]},
  ]
},
{
  id:"ex-min6", name:"Minimalist 6-Day", level:"advanced", daysPerWeek:6,
  workouts:[
    {name:"Push A", sub:"Heavy press, ~30 min", rotate:true, ex:[
      {n:"Barbell Bench Press", t:"2 × 5–8", s:2},
      {n:"Overhead Press", t:"2 × 6–10", s:2},
      {n:"Lateral Raise", t:"2 × 12–20", s:2, ss:"a"},
      {n:"Triceps Pushdown", t:"2 × 10–15", s:2, ss:"a"}]},
    {name:"Pull A", sub:"Heavy pull, ~30 min", rotate:true, ex:[
      {n:"Weighted Pull-Up", t:"2 × 5–8", s:2},
      {n:"Bent-Over Row", t:"2 × 6–10", s:2},
      {n:"Face Pulls", t:"2 × 15–20", s:2, ss:"b"},
      {n:"Incline DB Curl", t:"2 × 8–12", s:2, ss:"b"}]},
    {name:"Legs A", sub:"Squat focus, ~30 min", rotate:true, ex:[
      {n:"Back Squat", t:"2 × 5–8", s:2},
      {n:"Romanian Deadlift", t:"2 × 6–10", s:2},
      {n:"Standing Calf Raise", t:"2 × 8–12", s:2, ss:"c"},
      {n:"Hanging Leg Raise", t:"2 × 10–15", s:2, ss:"c"}]},
    {name:"Push B", sub:"Volume press, ~30 min", rotate:true, ex:[
      {n:"Weighted Dip", t:"2 × 6–10", s:2},
      {n:"Seated DB Press", t:"2 × 8–12", s:2},
      {n:"Cable Fly", t:"2 × 10–15", s:2, ss:"a"},
      {n:"Overhead Triceps Extension", t:"2 × 10–15", s:2, ss:"a"}]},
    {name:"Pull B", sub:"Volume pull, ~30 min", rotate:true, ex:[
      {n:"Lat Pulldown", t:"2 × 8–12", s:2},
      {n:"Chest-Supported Row", t:"2 × 8–12", s:2},
      {n:"Rear Delt Fly", t:"2 × 12–15", s:2, ss:"b"},
      {n:"Hammer Curl", t:"2 × 10–12", s:2, ss:"b"}]},
    {name:"Legs B", sub:"Hinge & single-leg, ~30 min", rotate:true, ex:[
      {n:"Front Squat", t:"2 × 5–8", s:2},
      {n:"Hip Thrust", t:"2 × 8–12", s:2},
      {n:"Leg Extension", t:"2 × 12–15", s:2, ss:"c"},
      {n:"Seated Leg Curl", t:"2 × 12–15", s:2, ss:"c"}]},
    {name:"Home", sub:"No gym — bodyweight, ~25 min", rotate:false, ex:[
      {n:"Pike Push-Ups", t:"2 × 6–12", s:2},
      {n:"Inverted / Backpack Row", t:"2 × 8–12", s:2, ss:"a"},
      {n:"Bulgarian Split Squat", t:"2 × 10–12", s:2, ss:"a"},
      {n:"Prone Y-Raise", t:"2 × 12–15", s:2},
      {n:"Hollow Hold (sec)", t:"2 × 30–45s", s:2}]},
  ]
}
];
// ===== cross-gym detection =====
// The same machine at two gyms reads differently: different stack numbering, lever arms and pulley
// ratios. Mixing those numbers into one strength trend makes the trend meaningless, so sessions that
// look like a different building get detected and (once the lifter confirms) kept out of the modelling.
const GYM_RATIO   = 1.30;         // >30% apart in e1RM → candidate, two-sided (r>1.3 || r<1/1.3)
const GYM_REPGAP  = 4;            // ignore a pair whose top-set reps differ by more than this
const GYM_QUORUM  = 2;            // ≥2 in-scope lifts in a session must agree in sign (1 lift = a typo)
const GYM_CTRL    = 0.12;         // deload veto: if free weights also moved ≥12%, it's you, not the gym
const GYM_BASEN   = 3;            // prior same-gym entries needed before a lift can be judged
const GYM_STALE   = 60*86400000;  // a lift untouched this long carries detraining, not a venue change
const GYM_SESSGAP = 4*3600000;    // entries more than 4h apart belong to different sessions
const DELOAD_AT = 24;
const ICON={
  plus:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 6v12M6 12h12"/></svg>',
  chat:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  minus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12h7"/></svg>',
  swap:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4l3 3-3 3M19 7H9M8 20l-3-3 3-3M5 17h10"/></svg>',
  flame:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V5h6v2M7 7l1 12h8l1-12"/></svg>',
  pencil:'<svg class="pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  sort:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5.5v13l11-6.5z"/></svg>',
  pause:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2.2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  bell:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  key:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M10.85 12.15 20 3M16 7l3 3M13.5 9.5l2.5 2.5"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16h16"/><path d="M7 14l3-3 3 2 4-6"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5.5v13l11-6.5z"/></svg>',
  more:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="12" cy="19" r="1.9"/></svg>',
  info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11.5v4.5"/><path d="M12 8h.01"/></svg>',
  warn:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  heartF:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 20.7l-1.5-1.35C5.4 14.75 2 11.7 2 7.95 2 5.2 4.2 3 6.95 3c1.55 0 3.05.72 4.05 1.87l1 1.15 1-1.15C14 3.72 15.5 3 17.05 3 19.8 3 22 5.2 22 7.95c0 3.75-3.4 6.8-8.5 11.4z"/></svg>',
  heartE:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M12 20.7l-1.5-1.35C5.4 14.75 2 11.7 2 7.95 2 5.2 4.2 3 6.95 3c1.55 0 3.05.72 4.05 1.87l1 1.15 1-1.15C14 3.72 15.5 3 17.05 3 19.8 3 22 5.2 22 7.95c0 3.75-3.4 6.8-8.5 11.4z"/></svg>',
  starF:'<svg class="star" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.95 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95z"/></svg>',
  starH:'<svg class="star" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="hg"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.95 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95z" fill="url(#hg)" stroke="currentColor" stroke-width="1"/></svg>',
  starE:'<svg class="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.95 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95z"/></svg>',
};
const EQUIP={
  free:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6M7 7.5v9M17 7.5v9M20 9v6M7 12h10"/></svg>',
  machine:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="5" height="16" rx="1"/><path d="M6 8h5M6 12h5M6 16h5"/><path d="M14 12h4"/></svg>',
  cable:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="6" r="2.2"/><path d="M12 8.2v5.5"/><path d="M9.5 13.7h5l-1 4.6h-3z"/></svg>',
  body:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5.4" r="2.2"/><path d="M12 7.6v6.2M12 10l-4 2.4M12 10l4 2.4M12 13.8l-3 4.8M12 13.8l3 4.8"/></svg>',
  kb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 8a3 3 0 0 1 6 0"/><path d="M8.2 8.6a6 6 0 1 0 7.6 0"/></svg>',
};

// same-muscle-group alternatives, keyed by exercise name (used by the Swap button)
const ALTS = {
  "Barbell Bench Press":["Dumbbell Bench Press","Machine Chest Press","Weighted Dip"],
  "Weighted Pull-Up":["Lat Pulldown","Assisted Pull-Up","Inverted Row"],
  "Overhead Press":["Seated DB Press","Machine Shoulder Press","Arnold Press"],
  "Hanging Leg Raise":["Lying Leg Raise","Captain's Chair Raise","Reverse Crunch"],
  "Back Squat":["Hack Squat","Leg Press","Goblet Squat"],
  "Romanian Deadlift":["Single-Leg RDL","Good Morning","Cable Pull-Through"],
  "Standing Calf Raise":["Seated Calf Raise","Leg-Press Calf Raise","Single-Leg Calf Raise"],
  "Ab Wheel Rollout":["Cable Crunch","Hanging Leg Raise","Weighted Plank"],
  "Weighted Dip":["Incline DB Press","Machine Chest Press","Close-Grip Bench"],
  "Bent-Over Row":["Chest-Supported Row","One-Arm DB Row","T-Bar Row"],
  "Lateral Raise":["Cable Lateral Raise","Machine Lateral Raise","Upright Row"],
  "Cable Crunch":["Ab-Machine Crunch","Hanging Leg Raise","Decline Crunch"],
  "Deadlift":["Trap-Bar Deadlift","Rack Pull","Romanian Deadlift"],
  "Front Squat":["Hack Squat","Leg Press","Bulgarian Split Squat"],
  "Seated Leg Curl":["Lying Leg Curl","Swiss-Ball Curl","Nordic Curl"],
  "Push-Ups":["Incline Push-Ups","Decline Push-Ups","Diamond Push-Ups"],
  "Inverted / Backpack Row":["Band Row","Towel Row","Backpack Bent-Over Row"],
  "Bulgarian Split Squat":["Reverse Lunge","Step-Up","Walking Lunge"],
  "Pike Push-Ups":["Wall Handstand Hold","Band Overhead Press","Shoulder Press"],
  "Hollow Hold (sec)":["Plank","Leg Raises","Dead Bug"],
  "Hip Thrust":["Glute Bridge","Hip Thrust Machine","Cable Pull-Through"],
  "Hip Abduction":["Banded Side Steps","Cable Abduction","Side-Lying Leg Raise"],
  "Seated Row":["Lat Pulldown","One-Arm DB Row","Chest-Supported Row"],
  "Goblet Squat":["Leg Press","Back Squat","Hack Squat"],
  "Leg Extension":["Step-Up","Sissy Squat","Front-Foot-Elevated Split Squat"],
  "Chest Press":["Dumbbell Bench Press","Push-Ups","Incline Press"],
  "Cable Fly":["Low-to-High Cable Fly","High-to-Low Cable Fly","Cable Crossover"],
  "Cable Crossover":["Cable Fly","High-to-Low Cable Fly","Low-to-High Cable Fly"],
  "Low-to-High Cable Fly":["Incline Cable Fly","Cable Fly","Cable Crossover"],
  "High-to-Low Cable Fly":["Decline Cable Fly","Cable Crossover","Cable Fly"],
  "Incline Cable Fly":["Low-to-High Cable Fly","Incline Dumbbell Fly","Cable Fly"],
  "Decline Cable Fly":["High-to-Low Cable Fly","Decline Dumbbell Fly","Cable Crossover"],
  "Flat Bench Cable Fly":["Dumbbell Fly","Cable Fly","Pec Deck"],
  "Single-Arm Cable Fly":["Cable Fly","Cable Crossover","Seated Cable Fly"],
  "Face Pulls":["Band Pull-Apart","Reverse Pec-Deck","Rear Delt Fly"],
  "Walking Lunges":["Reverse Lunge","Step-Up","Bulgarian Split Squat"],
  "Single-Leg Hip Thrust":["Glute Bridge","Step-Up","Hip Thrust"],
  "Calf Raises":["Seated Calf Raise","Leg-Press Calf Raise","Single-Leg Calf Raise"],
  "Band Pull-Aparts":["Face Pulls","Reverse Pec-Deck","Prone Y-Raise"],
  "Two-Hand Kettlebell Swing":["One-Arm Kettlebell Swing","Kettlebell Romanian Deadlift","Hip Thrust"],
  "One-Arm Kettlebell Swing":["Two-Hand Kettlebell Swing","Kettlebell Snatch","Kettlebell High Pull"],
  "Kettlebell Snatch":["Kettlebell Clean & Press","One-Arm Kettlebell Swing","Kettlebell High Pull"],
  "Kettlebell Clean":["Kettlebell Clean & Press","Kettlebell High Pull","Two-Hand Kettlebell Swing"],
  "Kettlebell Front Squat":["Goblet Squat","Kettlebell Reverse Lunge","Back Squat"],
  "Kettlebell Overhead Press":["Kettlebell Push Press","Overhead Press","Seated DB Press"],
  "Kettlebell Romanian Deadlift":["Romanian Deadlift","Two-Hand Kettlebell Swing","Single-Leg RDL"],
  "Kettlebell Row":["One-Arm DB Row","Bent-Over Row","Chest-Supported Row"],
  "Kettlebell Floor Press":["Dumbbell Bench Press","Push-Ups","Machine Chest Press"],
  "Kettlebell Reverse Lunge":["Kettlebell Bulgarian Split Squat","Walking Lunge","Step-Up"],
  "Kettlebell Bulgarian Split Squat":["Kettlebell Reverse Lunge","Bulgarian Split Squat","Step-Up"],
  "Turkish Get-Up":["Kettlebell Windmill","Pallof Press","Suitcase Carry"],
  "Kettlebell Farmer's Carry":["Kettlebell Suitcase Carry","Weighted Plank","Dead Bug"],
};

// exercise -> [primary, ...secondary] muscle groups (secondary counts as half a set)
const MUSCLES = {
  "Barbell Bench Press":["Chest","Triceps","Front Delts"],"Dumbbell Bench Press":["Chest","Triceps","Front Delts"],"Incline DB Press":["Chest","Front Delts","Triceps"],
  "Machine Chest Press":["Chest","Triceps","Front Delts"],"Weighted Dip":["Chest","Triceps","Front Delts"],"Chest Press":["Chest","Triceps","Front Delts"],
  "Close-Grip Bench":["Triceps","Chest"],"Push-Ups":["Chest","Triceps","Front Delts"],"Incline Push-Ups":["Chest","Triceps"],
  "Decline Push-Ups":["Chest","Triceps","Front Delts"],"Diamond Push-Ups":["Triceps","Chest"],"Chair Dips":["Triceps","Front Delts"],
  "Pike Push-Ups":["Front Delts","Side Delts","Triceps"],"Overhead Press":["Front Delts","Side Delts","Triceps"],"Seated DB Press":["Front Delts","Side Delts","Triceps"],
  "Machine Shoulder Press":["Front Delts","Side Delts","Triceps"],"Arnold Press":["Front Delts","Side Delts","Triceps"],"Push Press":["Front Delts","Side Delts","Triceps"],
  "Landmine Press":["Front Delts","Chest"],"Shoulder Press":["Front Delts","Side Delts","Triceps"],"Band Overhead Press":["Front Delts","Side Delts","Triceps"],
  "Wall Handstand Hold":["Front Delts","Side Delts"],"Lateral Raise":["Side Delts"],"Cable Lateral Raise":["Side Delts"],
  "Dumbbell Lateral Raise":["Side Delts"],"Machine Lateral Raise":["Side Delts"],"Upright Row":["Side Delts","Upper Back"],
  "Face Pulls":["Rear Delts","Upper Back"],"Face Pull":["Rear Delts","Upper Back"],"Band Pull-Apart":["Rear Delts","Upper Back"],"Band Pull-Aparts":["Rear Delts","Upper Back"],
  "Reverse Pec-Deck":["Rear Delts","Upper Back"],"Reverse Pec Deck":["Rear Delts","Upper Back"],"Rear-Delt Fly":["Rear Delts"],"Rear Delt Fly":["Rear Delts"],
  "Cable Rear Delt Fly":["Rear Delts"],"Bent-Over Lateral Raise":["Rear Delts"],"Prone Y-Raise":["Rear Delts","Upper Back"],
  // rows hit the upper-back (traps/rhomboids) hardest, with the lats and biceps assisting
  "Bent-Over Row":["Upper Back","Lats","Biceps"],"Chest-Supported Row":["Upper Back","Lats","Biceps"],"One-Arm DB Row":["Upper Back","Lats","Biceps"],
  "T-Bar Row":["Upper Back","Lats","Biceps"],"Seated Row":["Upper Back","Lats","Biceps"],"Band Row":["Upper Back","Lats","Biceps"],"Towel Row":["Upper Back","Lats","Biceps"],
  "Backpack Bent-Over Row":["Upper Back","Lats","Biceps"],"Inverted Row":["Upper Back","Lats","Biceps"],"Inverted / Backpack Row":["Upper Back","Lats","Biceps"],
  // vertical pulls are lat-dominant
  "Lat Pulldown":["Lats","Biceps"],"Pull-Ups":["Lats","Biceps"],"Pull-Up":["Lats","Biceps"],"Weighted Pull-Up":["Lats","Biceps"],
  "Assisted Pull-Up":["Lats","Biceps"],"Incline DB Curl":["Biceps"],"Hammer Curl":["Biceps","Forearms"],
  "EZ-Bar Curl":["Biceps"],"Barbell Curl":["Biceps"],"Cable Curl":["Biceps"],"Preacher Curl":["Biceps"],
  "Triceps Pushdown":["Triceps"],"Overhead Triceps Extension":["Triceps"],
  "Back Squat":["Quads","Glutes"],"Front Squat":["Quads","Glutes"],"Goblet Squat":["Quads","Glutes"],"Hack Squat":["Quads","Glutes"],
  "Leg Press":["Quads","Glutes"],"Sissy Squat":["Quads"],"Leg Extension":["Quads"],"Walking Lunges":["Quads","Glutes"],
  "Walking Lunge":["Quads","Glutes"],"Reverse Lunge":["Quads","Glutes"],"Bulgarian Split Squat":["Quads","Glutes"],
  "Step-Up":["Quads","Glutes"],"Front-Foot-Elevated Split Squat":["Quads","Glutes"],"Pistol Progression":["Quads","Glutes"],
  "Romanian Deadlift":["Hamstrings","Glutes","Lower Back"],"Single-Leg RDL":["Hamstrings","Glutes"],"Good Morning":["Hamstrings","Glutes","Lower Back"],
  "Deadlift":["Hamstrings","Glutes","Lower Back"],"Trap-Bar Deadlift":["Quads","Glutes","Lower Back"],"Rack Pull":["Upper Back","Lower Back"],
  "Back Extension":["Lower Back","Glutes","Hamstrings"],"Seated Leg Curl":["Hamstrings"],"Lying Leg Curl":["Hamstrings"],"Leg Curl":["Hamstrings"],
  "Nordic Curl":["Hamstrings"],"Swiss-Ball Curl":["Hamstrings"],"Hip Thrust":["Glutes","Hamstrings"],
  "Single-Leg Hip Thrust":["Glutes","Hamstrings"],"Glute Bridge":["Glutes","Hamstrings"],"Single-Leg Glute Bridge":["Glutes","Hamstrings"],
  "Hip Thrust Machine":["Glutes","Hamstrings"],"Cable Pull-Through":["Glutes","Hamstrings"],"Hip Abduction":["Glute Med"],
  "Banded Side Steps":["Glute Med"],"Cable Abduction":["Glute Med"],"Side-Lying Leg Raise":["Glute Med"],
  "Standing Calf Raise":["Calves"],"Seated Calf Raise":["Calves"],"Leg-Press Calf Raise":["Calves"],"Single-Leg Calf Raise":["Calves"],
  "Calf Raises":["Calves"],"Hanging Leg Raise":["Core"],"Lying Leg Raise":["Core"],"Captain's Chair Raise":["Core"],
  "Reverse Crunch":["Core"],"Cable Crunch":["Core"],"Ab-Machine Crunch":["Core"],"Decline Crunch":["Core"],"Weighted Decline Crunch":["Core"],
  "Ab Wheel Rollout":["Core"],"Weighted Plank":["Core"],"Plank":["Core"],"Hollow Hold (sec)":["Core"],"Hollow Hold":["Core"],
  "Hollow Hold + Leg Raises":["Core"],"Leg Raises":["Core"],"Dead Bug":["Core"],"Pallof Press":["Core"],
  // posture / corrective
  "Chin Tuck":["Neck"],"Chin Tucks":["Neck"],"Wall Slide":["Rear Delts","Upper Back"],"Wall Slides":["Rear Delts","Upper Back"],
  "Scapular Wall Slide":["Rear Delts","Upper Back"],"Wall Angels":["Rear Delts","Upper Back"],"Prone Y-T-W":["Rear Delts","Upper Back"],
  "Prone T-Raise":["Rear Delts"],"Superman":["Lower Back","Glutes"],"Bird Dog":["Core"],"Cat-Cow":["Core"],
  // forearm & adductor isolation (new detailed groups)
  "Wrist Curl":["Forearms"],"Reverse Wrist Curl":["Forearms"],"Farmer's Carry":["Forearms","Core"],
  "Hip Adduction":["Adductors"],"Cable Adduction (inner)":["Adductors"],"Cossack Squat":["Adductors","Quads","Glutes"],"Copenhagen Plank":["Adductors","Core"],
};
const MCOLOR={ Chest:"#ff6b6b", Back:"#4dabf7", Shoulders:"#f59f00", Biceps:"#9775fa", Triceps:"#ff8787",
  Quads:"#20c997", Hamstrings:"#51cf66", Glutes:"#f783ac", "Glute Med":"#e64980", Calves:"#74c0fc", Core:"#ffd43b", Other:"#adb5bd",
  "Front Delts":"#f59f00", "Side Delts":"#ffa94d", "Rear Delts":"#e8590c", Neck:"#15aabf",
  // detailed back split + new auxiliary groups (Back kept above as a legacy alias for old data / cardio chips)
  Lats:"#4dabf7", "Upper Back":"#3b8fd9", "Lower Back":"#1f6fb2", Forearms:"#b197fc", Adductors:"#38d9a9" };
function muscleFor(name){
  if(MUSCLES[name]) return MUSCLES[name];
  const n=String(name).toLowerCase();
  if(/face pull|rear|reverse fly|reverse pec|band pull|bent.?over lateral|prone y/.test(n)) return ["Rear Delts","Upper Back"];
  if(/wrist curl|forearm/.test(n)) return ["Forearms"];
  if(/adduction|adductor|cossack|copenhagen/.test(n)) return ["Adductors"];
  if(/\brow\b/.test(n)) return ["Upper Back","Lats","Biceps"];
  if(/pulldown|pull.?up|chin.?up|\blat\b|pullover/.test(n)) return ["Lats","Biceps"];
  if(/bench|chest|\bpec\b|push.?up|\bdip\b|fly/.test(n)) return ["Chest","Triceps"];
  if(/calf|calves/.test(n)) return ["Calves"];
  if(/leg curl|hamstring|nordic/.test(n)) return ["Hamstrings"];
  // hip abduction / lateral-hip work → upper (side) glutes = gluteus medius, distinct from the main glute max
  if(/abduction|clamshell|monster walk|lateral band walk|banded side step|side.?lying leg|glute med|hip abductor|fire.?hydrant/.test(n)) return ["Glute Med"];
  if(/deadlift|\brdl\b|romanian|good morning|hip thrust|glute|bridge|hinge/.test(n)) return ["Glutes","Hamstrings"];
  if(/squat|leg press|lunge|step.?up|leg extension|\bquad/.test(n)) return ["Quads","Glutes"];
  if(/curl/.test(n)) return ["Biceps"];
  if(/tricep|pushdown|skull|close.?grip/.test(n)) return ["Triceps"];
  if(/lateral raise|side delt|upright row/.test(n)) return ["Side Delts"];
  if(/press|shoulder|delt|\bohp\b|military|overhead|pike|handstand/.test(n)) return ["Front Delts","Triceps"];
  if(/crunch|plank|\babs?\b|leg raise|hollow|core|sit.?up|woodchop|pallof|dead bug|twist|rotation|oblique|\bchop\b|landmine rotation|mountain climber|flutter|bird dog|v-?up/.test(n)) return ["Core"];
  return ["Other"];
}
function equipFor(name){
  const n=String(name).toLowerCase();
  if(/kettlebell|\bkb\b|turkish get-?up|goblet/.test(n)) return {key:"kb",label:"Kettlebell"};
  // Named gear beats the keyword lists below — "Machine Dip" matched \bdip\b and came out a bodyweight
  // movement charging the full bodyweight. Plate-loaded kit the keywords can't infer is named here too.
  if(/\bmachine\b|\bsmith\b|iso-?lateral|pendulum squat|v-?squat|rotary torso|low row|hip adduction|seated calf/.test(n)) return {key:"machine",label:"Machine"};
  if(/push.?up|pull.?up|chin.?up|\bdip\b|plank|hollow|hanging|inverted|pike|sit.?up|dead bug|burpee|pistol|nordic|handstand|chair dip|bodyweight|leg.?raise|knee raise|flutter|toes.?to.?bar|v-?up|bicycle crunch|reverse crunch|russian twist|captain|\bl-?sit\b|dead hang|step.?up|bridge|prone|superman|wall slide|wall angel|wall sit|scapular|chin.?tuck|bird.?dog|snow.?angel|cat.?cow|backpack|towel row|glute.?ham|clamshell/.test(n)) return {key:"body",label:"Bodyweight"};
  if(/cable|pulldown|pushdown|pull-through|kickback|face.?pull|rope|crossover|abduction|woodchop|pallof|\bband(ed)?\b/.test(n)) return {key:"cable",label:"Cable / band"};
  if(/machine|leg press|leg curl|leg extension|pec.?deck|hack|smith|seated row|lat pulldown|ab.?machine|reverse pec|hyperextension|belt squat/.test(n)) return {key:"machine",label:"Machine"};
  return {key:"free",label:"Free weights"};
}
// Lifts whose logged weight is a property of the MACHINE, not the lifter. Plate-loaded frames (Smith,
// belt/pendulum/V-squat) are loaded in real kilograms and read the same everywhere, so they sit with the
// free weights. Bands have no comparable numeric load. Bodyweight is excluded because e.w is ADDED load
// only — and an Assisted Pull-Up's e.w is a counterweight, where a bigger number means weaker.
function gymVariable(name){
  const n=String(name).toLowerCase();
  if(isTimed(name) || isBW(name)) return false;
  if(/\bsmith\b|belt squat|pendulum squat|v-?squat|\bband(ed)?\b|pallof|woodchop/.test(n)) return false;
  const k=equipFor(name).key;
  return k==="machine" || k==="cable";
}
// The control group: barbells and dumbbells weigh the same everywhere, so if THEY moved too it's a
// deload or a bad day, not a different gym.
function gymControl(name){ return equipFor(name).key==="free" && !isTimed(name) && !isBW(name); }
function gymOf(e){ return (e && e.gy!=null) ? e.gy : 0; }   // absent = the primary gym, so nothing migrates
function listWords(a){ return a.length<2?(a[0]||""):a.slice(0,-1).join(", ")+" and "+a[a.length-1]; }
// extended catalogue — muscle mapping for items the keyword fallback can't place cleanly
// Extension of the catalogue above. Nothing here may repeat a key from the MUSCLES literal — a repeat
// silently overwrites it, which is how "Good Morning" lost its lower-back credit and "Superman" its glutes.
Object.assign(MUSCLES, {
  "Incline Bench Press":["Chest","Front Delts","Triceps"], "Decline Bench Press":["Chest","Triceps"],
  "Cable Fly":["Chest"], "Pec Deck":["Chest"], "Machine Chest Fly":["Chest"], "Dumbbell Fly":["Chest"], "Incline Dumbbell Fly":["Chest"],
  "Cable Crossover":["Chest"], "Low-to-High Cable Fly":["Chest"], "Dumbbell Pullover":["Lats","Chest"],
  // the cable-fly family by angle — each one shifts the line of pull across a different part of the pec
  "High-to-Low Cable Fly":["Chest"], "Incline Cable Fly":["Chest"], "Decline Cable Fly":["Chest"],
  "Flat Bench Cable Fly":["Chest"], "Single-Arm Cable Fly":["Chest"], "Seated Cable Fly":["Chest"],
  "Decline Dumbbell Fly":["Chest"], "Cable Chest Press":["Chest","Triceps","Front Delts"],
  "Straight-Arm Pulldown":["Lats"], "Meadows Row":["Upper Back","Lats","Biceps"], "Front Raise":["Front Delts"],
  "Concentration Curl":["Biceps"], "Spider Curl":["Biceps"], "Reverse Curl":["Forearms","Biceps"],
  "Triceps Kickback":["Triceps"], "Skull Crusher":["Triceps"], "Close-Grip Bench Press":["Triceps","Chest"],
  "Glute Kickback":["Glutes"],
  "Russian Twist":["Core"], "Cable Woodchopper":["Core"], "Landmine Rotation":["Core"],
  "Cable Rotation":["Core"], "Medicine Ball Rotational Throw":["Core"], "Bicycle Crunch":["Core"],
  "Side Plank":["Core"], "Mountain Climbers":["Core"],

  // ---- previously unmapped: these all fell through muscleFor() to "Other" and so contributed
  // nothing to the muscle-balance radar, the growth signal or the per-muscle projection ----
  "Two-Hand Kettlebell Swing":["Glutes","Hamstrings","Lower Back"], "One-Arm Kettlebell Swing":["Glutes","Hamstrings","Lower Back"],
  "Kettlebell Snatch":["Glutes","Hamstrings","Front Delts"], "Kettlebell Clean":["Glutes","Hamstrings","Upper Back"],
  "Kettlebell High Pull":["Side Delts","Upper Back","Glutes"], "Kettlebell Windmill":["Core","Side Delts"],
  "Kettlebell Halo":["Side Delts","Core"], "Turkish Get-Up":["Core","Front Delts"],
  "Kettlebell Suitcase Carry":["Core","Forearms"], "Kettlebell Farmer's Carry":["Forearms","Core"],
  "Suitcase Carry":["Core","Forearms"],
  "Dead Hang":["Forearms","Lats"], "L-Sit":["Core"], "Wall Sit":["Quads"],
  "Toes-to-Bar":["Core"], "Hanging Knee Raise":["Core"],

  // ---- added movements ----
  // back & traps
  "Barbell Shrug":["Upper Back"], "Dumbbell Shrug":["Upper Back"],
  "Pendlay Row":["Upper Back","Lats","Biceps"], "Seal Row":["Upper Back","Lats","Biceps"],
  "Machine High Row":["Upper Back","Lats","Biceps"],
  "Neutral-Grip Lat Pulldown":["Lats","Biceps"], "Single-Arm Lat Pulldown":["Lats","Biceps"],
  "Wide-Grip Pull-Up":["Lats","Upper Back","Biceps"], "Neutral-Grip Pull-Up":["Lats","Biceps"],
  "Reverse Hyperextension":["Lower Back","Glutes"],
  // chest
  "Dip":["Chest","Triceps","Front Delts"], "Dumbbell Floor Press":["Chest","Triceps"],
  // shoulders
  "Cable Front Raise":["Front Delts"], "Leaning Cable Lateral Raise":["Side Delts"],
  // arms
  "Machine Preacher Curl":["Biceps"], "Zottman Curl":["Biceps","Forearms"],
  "Machine Triceps Extension":["Triceps"], "Bench Dip":["Triceps","Chest"],
  // legs
  "Belt Squat":["Quads","Glutes"], "Smith Machine Squat":["Quads","Glutes"],
  "Split Squat":["Quads","Glutes"], "Box Squat":["Quads","Glutes"],
  "Sumo Deadlift":["Glutes","Quads","Adductors"], "Stiff-Leg Deadlift":["Hamstrings","Glutes","Lower Back"],
  "Glute-Ham Raise":["Hamstrings","Glutes"],
  "Donkey Calf Raise":["Calves"], "Tibialis Raise":["Calves"], "Clamshell":["Glute Med"],
  // neck & core
  "Neck Curl":["Neck"], "Neck Extension":["Neck"], "Dumbbell Side Bend":["Core"],

  // ---- machines & Smith-machine variants common on a modern gym floor ----
  "Incline Machine Press":["Chest","Front Delts","Triceps"], "Decline Machine Press":["Chest","Triceps"],
  "Iso-Lateral Chest Press":["Chest","Triceps","Front Delts"],
  "Smith Machine Bench Press":["Chest","Triceps","Front Delts"], "Smith Machine Incline Press":["Chest","Front Delts","Triceps"],
  "Machine Pullover":["Lats","Chest"], "Iso-Lateral Pulldown":["Lats","Biceps"],
  "Iso-Lateral Row":["Upper Back","Lats","Biceps"], "Low Row Machine":["Upper Back","Lats","Biceps"],
  "Machine Shrug":["Upper Back"], "Smith Machine Row":["Upper Back","Lats","Biceps"],
  "Smith Machine Overhead Press":["Front Delts","Side Delts","Triceps"],
  "Pendulum Squat":["Quads","Glutes"], "V-Squat":["Quads","Glutes"], "Seated Leg Press":["Quads","Glutes"],
  "Smith Machine Split Squat":["Quads","Glutes"], "Standing Leg Curl":["Hamstrings"],
  "Smith Machine Hip Thrust":["Glutes","Hamstrings"], "Smith Machine Calf Raise":["Calves"],
  "Machine Dip":["Triceps","Chest"], "Machine Biceps Curl":["Biceps"],
  "Smith Machine Close-Grip Press":["Triceps","Chest"], "Rotary Torso":["Core"],
  // ---- cable attachment / position variants ----
  "Rope Pushdown":["Triceps"], "Rope Overhead Triceps Extension":["Triceps"],
  "Cable Shrug":["Upper Back"], "Cable Y-Raise":["Rear Delts","Upper Back"],
  "Bayesian Cable Curl":["Biceps"],
});
// newer additions — incline barbell press, a reverse plank, extra core moves & isometric holds
Object.assign(MUSCLES, {
  "Incline Barbell Press":["Chest","Front Delts","Triceps"],
  "Reverse Plank":["Glutes","Core","Hamstrings"],
  "Hanging Knee Raise":["Core"], "Toes-to-Bar":["Core","Lats"], "V-Up":["Core"],
  "Flutter Kicks":["Core"], "Decline Sit-Up":["Core"], "L-Sit":["Core"],
  "Wall Sit":["Quads","Glutes"], "Dead Hang":["Forearms","Lats"]
});
// Rotational / anti-rotation core work (transverse-plane training) — recommended at least once a week.
// Covers true rotation (woodchop, twist, throw) and anti-rotation (Pallof, windmill) — both train the
// obliques/core to resist or produce trunk rotation, which straight-plane crunches/planks miss.
const ROTATIONAL=/woodchop|wood chop|landmine rotation|cable rotation|rotational throw|russian twist|pallof|windmill/i;
function isRotational(name){ return ROTATIONAL.test(String(name||"")); }
// ---- kettlebell catalogue ----
// Ballistics (swing/snatch/clean/high-pull) are power/conditioning moves — high-rep or timed, never heavy/low-rep.
// Grinds (squat/press/RDL/row/lunge/get-up) behave like any weighted move. KB_BALLISTIC gates the first group out
// of strength / "intensity" days; KB_POOL drives the dedicated Kettlebell-only mode. See buildPlan.
Object.assign(MUSCLES, {
  "Two-Hand Kettlebell Swing":["Glutes","Hamstrings","Lower Back"], "One-Arm Kettlebell Swing":["Glutes","Hamstrings","Lower Back"],
  "Kettlebell Snatch":["Glutes","Hamstrings","Side Delts"], "Kettlebell Clean":["Glutes","Hamstrings","Biceps"],
  "Kettlebell High Pull":["Side Delts","Upper Back"], "Kettlebell Clean & Press":["Front Delts","Glutes","Triceps"],
  "Kettlebell Front Squat":["Quads","Glutes"], "Kettlebell Overhead Press":["Front Delts","Triceps"],
  "Kettlebell Push Press":["Front Delts","Side Delts","Triceps"], "Kettlebell Romanian Deadlift":["Hamstrings","Glutes"],
  "Kettlebell Row":["Upper Back","Lats","Biceps"], "Kettlebell Floor Press":["Chest","Triceps"],
  "Kettlebell Reverse Lunge":["Quads","Glutes"], "Kettlebell Bulgarian Split Squat":["Quads","Glutes"],
  "Turkish Get-Up":["Core","Front Delts","Glutes"], "Kettlebell Windmill":["Core","Hamstrings"],
  "Kettlebell Halo":["Side Delts","Core"], "Kettlebell Suitcase Carry":["Core","Side Delts"],
  "Kettlebell Farmer's Carry":["Forearms","Core","Upper Back"]
});
// ballistic / explosive KB moves — power & conditioning, kept off heavy strength/"intensity" days
const KB_BALLISTIC=/kettlebell swing|kb swing|snatch|kettlebell clean|kb clean|high pull/;
const LIBRARY=[
  "Two-Hand Kettlebell Swing","One-Arm Kettlebell Swing","Kettlebell Snatch","Kettlebell Clean","Kettlebell High Pull",
  "Kettlebell Clean & Press","Kettlebell Front Squat","Kettlebell Overhead Press","Kettlebell Push Press",
  "Kettlebell Romanian Deadlift","Kettlebell Row","Kettlebell Floor Press","Kettlebell Reverse Lunge",
  "Kettlebell Bulgarian Split Squat","Turkish Get-Up","Kettlebell Windmill","Kettlebell Halo",
  "Kettlebell Suitcase Carry","Kettlebell Farmer's Carry",
  "Incline Bench Press","Decline Bench Press","Dumbbell Bench Press","Incline DB Press","Machine Chest Press",
  "Cable Fly","Pec Deck","Machine Chest Fly","Dumbbell Fly","Incline Dumbbell Fly","Cable Crossover","Low-to-High Cable Fly","Push-Ups","Diamond Push-Ups","Incline Push-Ups","Decline Push-Ups",
  "Lat Pulldown","Seated Row","Chest-Supported Row","T-Bar Row","One-Arm DB Row","Meadows Row",
  "Chin-Up","Straight-Arm Pulldown","Dumbbell Pullover","Face Pulls",
  "Seated DB Press","Arnold Press","Machine Shoulder Press","Pike Push-Ups","Cable Lateral Raise","Rear Delt Fly","Upright Row","Front Raise",
  "Barbell Curl","EZ-Bar Curl","Cable Curl","Preacher Curl","Concentration Curl","Spider Curl","Hammer Curl","Reverse Curl",
  "Wrist Curl","Reverse Wrist Curl","Farmer's Carry",
  "Triceps Pushdown","Skull Crusher","Close-Grip Bench Press","Triceps Kickback",
  "Hack Squat","Leg Press","Leg Extension","Goblet Squat","Walking Lunge","Reverse Lunge","Step-Up","Sissy Squat",
  "Hip Adduction","Cable Adduction (inner)","Cossack Squat","Copenhagen Plank","Back Extension","Rack Pull",
  "Lying Leg Curl","Single-Leg RDL","Nordic Curl","Good Morning","Cable Pull-Through",
  "Glute Bridge","Single-Leg Glute Bridge","Glute Kickback","Hip Abduction","Banded Side Steps",
  "Seated Calf Raise","Single-Leg Calf Raise","Leg-Press Calf Raise",
  "Plank","Side Plank","Russian Twist","Cable Woodchopper","Pallof Press","Landmine Rotation","Cable Rotation",
  "Medicine Ball Rotational Throw","Bicycle Crunch","Reverse Crunch","Mountain Climbers","Bird Dog","Dead Bug","Superman",
  "Lying Leg Raise","Hanging Knee Raise","Toes-to-Bar","V-Up","Flutter Kicks","Decline Sit-Up","L-Sit",
  "Reverse Plank","Wall Sit","Dead Hang","Incline Barbell Press",
  // back & traps — the catalogue had no shrug at all, and no horizontal-row variants beyond the basics
  "Barbell Shrug","Dumbbell Shrug","Pendlay Row","Seal Row","Machine High Row",
  "Neutral-Grip Lat Pulldown","Single-Arm Lat Pulldown","Wide-Grip Pull-Up","Neutral-Grip Pull-Up","Reverse Hyperextension",
  // chest
  "Dip","Dumbbell Floor Press",
  // shoulders
  "Cable Front Raise","Leaning Cable Lateral Raise",
  // arms
  "Machine Preacher Curl","Zottman Curl","Machine Triceps Extension","Bench Dip",
  // legs
  "Belt Squat","Smith Machine Squat","Split Squat","Box Squat",
  "Sumo Deadlift","Stiff-Leg Deadlift","Glute-Ham Raise",
  "Donkey Calf Raise","Tibialis Raise","Clamshell",
  // neck & core
  "Neck Curl","Neck Extension","Dumbbell Side Bend",
  // Already reachable by the plan builder (they sit in BUILD_POOL) but previously absent from the Add
  // list, so a generated plan could contain an exercise the lifter could not find or re-add by hand.
  "Pull-Up","Overhead Triceps Extension","Incline DB Curl","Dumbbell Lateral Raise","Reverse Pec Deck",
  "Cable Rear Delt Fly","Bent-Over Lateral Raise","Push Press","Landmine Press","Chair Dips",
  "Pistol Progression","Weighted Decline Crunch","Prone T-Raise","Wall Angels","Cat-Cow",
  // cable chest flyes, the full set of angles (the catalogue had only mid, low-to-high and the crossover)
  "High-to-Low Cable Fly","Incline Cable Fly","Decline Cable Fly","Flat Bench Cable Fly",
  "Single-Arm Cable Fly","Seated Cable Fly","Cable Chest Press","Decline Dumbbell Fly",
  // machines & Smith variants — the floor had 22 machine entries and none at all for lats
  "Incline Machine Press","Decline Machine Press","Iso-Lateral Chest Press",
  "Smith Machine Bench Press","Smith Machine Incline Press","Machine Pullover","Iso-Lateral Pulldown",
  "Iso-Lateral Row","Low Row Machine","Machine Shrug","Smith Machine Row","Smith Machine Overhead Press",
  "Pendulum Squat","V-Squat","Seated Leg Press","Smith Machine Split Squat","Standing Leg Curl",
  "Smith Machine Hip Thrust","Smith Machine Calf Raise","Machine Dip","Machine Biceps Curl",
  "Smith Machine Close-Grip Press","Rotary Torso",
  // cable attachment / position variants
  "Rope Pushdown","Rope Overhead Triceps Extension","Cable Shrug","Cable Y-Raise","Bayesian Cable Curl"
];
const EXPLAIN={
 "Barbell Bench Press":{why:"The benchmark upper-body press — chest, front delts and triceps, and the clearest measure of pushing strength.",cues:["Shoulder blades pulled back and down, feet planted.","Lower the bar to your lower chest with control.","Drive up and slightly back toward your face."]},
 "Overhead Press":{why:"A vertical press for strong, capped shoulders and a braced, stable core.",cues:["Squeeze glutes and brace abs — no leaning back.","Press up and slightly back over the crown of your head.","Finish with biceps by your ears."]},
 "Weighted Pull-Up":{why:"The best builder for a wide back and strong biceps. Add load as it gets easy.",cues:["Start from a full dead hang.","Drive the elbows down, chest to the bar.","Lower all the way under control."]},
 "Pull-Up":{why:"Bodyweight king for back width and grip.",cues:["Full dead hang to start.","Pull your chest toward the bar.","Control the way down — no dropping."]},
 "Weighted Dip":{why:"A heavy compound for lower chest and triceps. Lean forward for chest, stay upright for triceps.",cues:["Lower until upper arms are about parallel.","Keep shoulders down, away from the ears.","Press to a strong lockout."]},
 "Bent-Over Row":{why:"A horizontal pull that thickens the mid-back and trains the whole back to hold position.",cues:["Hinge to about 45°, flat back, braced.","Pull the bar to your lower ribs.","Squeeze the shoulder blades, lower slowly."]},
 "Back Squat":{why:"The foundational leg builder — quads and glutes, plus full-body tension.",cues:["Brace before you descend, chest tall.","Sit to at least parallel, knees tracking over toes.","Drive through mid-foot to stand."]},
 "Front Squat":{why:"A quad-focused squat that demands an upright torso and a strong core.",cues:["Elbows high to keep the bar shelf solid.","Stay tall the whole rep.","Sit between your hips, full depth."]},
 "Deadlift":{why:"The ultimate posterior-chain lift — hamstrings, glutes and back, and raw total-body strength.",cues:["Bar over mid-foot, shoulders just ahead of it.","Brace hard and push the floor away.","Keep the bar close, dragging up your legs."]},
 "Romanian Deadlift":{why:"A hip hinge that loads hamstrings and glutes through a long stretch.",cues:["Soft knees, push the hips back.","Lower along your legs until you feel the stretch.","Drive the hips forward to stand tall."]},
 "Hip Thrust":{why:"The most direct glute builder — heavy loads through full hip extension.",cues:["Upper back on the bench, chin tucked.","Drive through your heels.","Squeeze the glutes hard at the top, ribs down."]},
 "Bulgarian Split Squat":{why:"Single-leg work for balanced quads and glutes — it evens out side-to-side gaps.",cues:["Back foot on the bench, weight on the front leg.","Drop straight down, front shin near vertical.","Push through the front heel."]},
 "Lateral Raise":{why:"Isolation for the side delts — the muscle that builds shoulder width.",cues:["Lead with the elbows, slight bend.","Raise to about shoulder height, no higher.","Lower slowly — control beats momentum."]},
 "Standing Calf Raise":{why:"Builds the calves through a full stretch-to-squeeze range.",cues:["Drop the heels for a deep stretch.","Rise all the way onto the toes.","Pause at the top, lower slowly."]},
 "Seated Leg Curl":{why:"Isolates the hamstrings, balancing your hinge work.",cues:["Pad just above the heels.","Curl fully and squeeze.","Resist on the way back."]},
 "Cable Crunch":{why:"Loaded ab flexion you can progress like any other lift.",cues:["Round the spine — ribs toward hips.","Keep the hips still; it isn't a hinge.","Control back to the stretch."]},
 "Hanging Leg Raise":{why:"Trains the lower abs and hip flexors with a strong anti-swing demand.",cues:["Start from a controlled hang, no swinging.","Raise the legs with intent.","Lower slowly — that's the work."]},
 "Ab Wheel Rollout":{why:"A brutal anti-extension drill — the abs fight to stop the spine sagging.",cues:["Brace hard, tuck the ribs.","Roll out only as far as you keep a flat back.","Pull back with the abs, not the arms."]},
 "Push-Ups":{why:"Bodyweight pressing for chest and triceps — scalable anywhere.",cues:["Straight line head to heels, glutes tight.","Lower the chest to just off the floor.","Press up and slightly together."]},
 "Pike Push-Ups":{why:"A bodyweight overhead press — hips high shifts the load onto the shoulders.",cues:["Hips high, head between the hands.","Lower the crown toward the floor.","Press back up to the pike."]},
 "Hollow Hold (sec)":{why:"An isometric that teaches a braced, hollow core — the basis of every hard lift.",cues:["Press the low back into the floor.","Reach arms and legs long.","Breathe shallow and hold the brace."]},
 "Inverted / Backpack Row":{why:"A horizontal pull you can do anywhere — back and biceps without a gym.",cues:["Body in a straight line, heels down.","Pull the chest to the bar or table edge.","Squeeze the shoulder blades."]},
 "EZ-Bar Curl":{why:"Direct biceps work to round out all your pulling — the angled bar is easier on the wrists.",cues:["Elbows pinned to your sides.","Curl up without swinging the torso.","Lower slowly through the full stretch."]},
 "Incline DB Curl":{why:"Curling from an incline lets the arms hang back, putting the biceps on a deep stretch — one of the best curls for size.",cues:["Lie back so your arms hang behind you.","Curl without swinging; keep the elbows back.","Lower slowly into the full stretch."]},
 "Overhead Triceps Extension":{why:"Takes the long head of the triceps through a deep overhead stretch — studies show ~1.4× the growth of pushdowns.",cues:["Keep the elbows pointing up and tucked in.","Lower behind your head into a full stretch.","Press to a strong lockout."]},
 "Triceps Pushdown":{why:"Convenient triceps work; the overhead extension stretches the long head for more growth.",cues:["Elbows tucked and still.","Push down to a full lockout.","Control the weight back up."]},
 "Two-Hand Kettlebell Swing":{why:"An explosive hip hinge for the whole posterior chain — power, conditioning and a hard glute snap.",cues:["Hike the bell back between your legs like a snap pass.","Snap the hips through — the arms just guide it to chest height.","It's a hinge, not a squat or a front raise."]},
 "Kettlebell Snatch":{why:"One smooth pull from the floor to overhead — full-body power and conditioning.",cues:["Drive with the hips, keep the bell close.","Punch the hand through at the top so it doesn't bang the wrist.","Lower under control back into the hinge."]},
 "Turkish Get-Up":{why:"Stand up and lie back down with a bell locked overhead — unmatched for shoulder stability and control.",cues:["Eyes on the bell, arm locked vertical throughout.","Move slowly through each step — roll, post, bridge, lunge, stand.","Reverse the steps with the same control."]},
 "Kettlebell Romanian Deadlift":{why:"A loaded hip hinge with the bells — hamstrings and glutes through a deep stretch.",cues:["Soft knees, push the hips back.","Lower the bells along your legs until you feel the stretch.","Drive the hips forward to stand tall."]},
 "Kettlebell Farmer's Carry":{why:"Pick up heavy bells and walk — grip, traps and a braced, upright core.",cues:["Stand tall, shoulders back, ribs down.","Take short, controlled steps.","Don't let the load tip you side to side."]},
 "Incline Barbell Press":{why:"A heavy, loadable press tilted to bias the upper chest and front delts — the upper-chest equivalent of the flat bench.",cues:["Set the bench to about 30°; higher shifts work to the shoulders.","Lower the bar to your upper chest, elbows tucked ~45°.","Drive up and slightly back over the shoulders."]},
 "Reverse Plank":{why:"A posterior-chain hold — glutes, hamstrings and lower back fight gravity while the shoulders and core brace. A balancing counter to all the front-side plank work.",cues:["Hands under the shoulders, fingers forward; hips up to a straight line.","Squeeze the glutes hard and keep the ribs down — don't sag.","Hold and breathe; build the time gradually."]},
 "Hanging Knee Raise":{why:"A scalable lower-ab builder — easier than the straight-leg raise, with the same anti-swing demand.",cues:["Hang still, no swinging.","Curl the knees up toward the chest, rounding the pelvis.","Lower slowly under control."]},
 "Toes-to-Bar":{why:"An advanced hanging raise — full hip and trunk flexion, with the lats and grip working hard to control the swing.",cues:["Start from a controlled hollow hang.","Drive the toes to the bar with straight-ish legs.","Lower with control, no kipping."]},
 "V-Up":{why:"A full-body crunch — reach the hands and feet together so the abs flex top and bottom at once.",cues:["Lie long, arms overhead.","Fold to a V, hands toward the toes.","Lower slowly without slamming the legs down."]},
 "Flutter Kicks":{why:"A high-rep lower-ab and hip-flexor burner that trains the abs to hold a hollow position under fatigue.",cues:["Press the low back into the floor.","Small, quick alternating kicks with straight legs.","Keep breathing — don't let the back arch."]},
 "Decline Sit-Up":{why:"A loaded-friendly sit-up — the decline adds range and lets you hold a plate to progress the abs like any lift.",cues:["Anchor the feet, round up one vertebra at a time.","Don't yank the neck — lead with the ribs.","Lower slowly; add a plate once bodyweight is easy."]},
 "L-Sit":{why:"A brutal isometric — the abs and hip flexors hold the legs out straight while the arms support your weight.",cues:["Press the floor or parallettes down hard, shoulders away from the ears.","Lift the legs to horizontal, toes pointed.","Hold; build the time, or tuck the knees to scale."]},
 "Wall Sit":{why:"A simple, joint-friendly quad hold — sit against a wall and let the thighs burn. Great for building quad endurance anywhere.",cues:["Slide down until the thighs are parallel, knees over ankles.","Keep the back flat against the wall.","Hold and breathe; add time each session."]},
 "Dead Hang":{why:"Hang from a bar to build grip, decompress the spine and stretch the lats — the foundation for every pull-up.",cues:["Full grip, arms straight, shoulders active (not fully shrugged up).","Relax the lower body and breathe.","Build the hold time; add load once it's easy."]},
};
function explainFor(name){
  if(EXPLAIN[name]) return EXPLAIN[name];
  const g=muscleFor(name).filter(x=>x!=="Other");
  const why = g.length ? "Targets your "+listWords(g.map(x=>x.toLowerCase()))+". A solid pick — keep the reps clean and add a little each time."
                       : "Train it through a full range with control, and add a little each session.";
  return { why, cues:["Move through a full range of motion.","Control the weight on the way down.","Leave 1–2 reps in reserve, then build over time."] };
}
// ---- technical difficulty (1–5) + common mistakes ----
const DIFF={ "Deadlift":5,"Romanian Deadlift":4,"Single-Leg RDL":4,"Front Squat":4,"Back Squat":4,"Overhead Press":4,
  "Bent-Over Row":4,"Bulgarian Split Squat":4,"Good Morning":4,"Nordic Curl":5,"Push Press":4,
  "Weighted Pull-Up":4,"Pull-Up":3,"Pull-Ups":3,"Weighted Dip":3,"Barbell Bench Press":3,"Hip Thrust":3,
  "Hack Squat":2,"Leg Press":1,"Goblet Squat":2,"Pec Deck":1,"Machine Chest Fly":1,"Cable Fly":2,
  "Two-Hand Kettlebell Swing":3,"One-Arm Kettlebell Swing":3,"Kettlebell Snatch":5,"Kettlebell Clean":4,
  "Kettlebell High Pull":3,"Kettlebell Clean & Press":4,"Kettlebell Front Squat":3,"Kettlebell Overhead Press":3,
  "Kettlebell Push Press":4,"Kettlebell Romanian Deadlift":3,"Kettlebell Row":3,"Kettlebell Floor Press":3,
  "Kettlebell Reverse Lunge":3,"Kettlebell Bulgarian Split Squat":4,"Turkish Get-Up":5,"Kettlebell Windmill":4,
  "Kettlebell Halo":2,"Kettlebell Suitcase Carry":2,"Kettlebell Farmer's Carry":2,
  "Incline Barbell Press":3,"Reverse Plank":2,"Hanging Knee Raise":2,"Toes-to-Bar":4,"V-Up":2,
  "Flutter Kicks":1,"Decline Sit-Up":2,"L-Sit":4,"Wall Sit":1,"Dead Hang":1 };
function difficultyFor(name){
  if(DIFF[name]!=null) return DIFF[name];
  const n=name.toLowerCase();
  if(/snatch|clean|jerk|muscle-up|pistol|turkish|nordic/.test(n)) return 5;
  if(/deadlift|\brdl\b|romanian|good morning|front squat|overhead press|\bohp\b|push press|barbell row|bent.?over|landmine press/.test(n)) return 4;
  if(/squat|bench|pull.?up|chin.?up|\bdip\b|hip thrust|lunge|split squat|bulgarian|\brow\b|handstand|pike/.test(n)) return 3;
  if(/curl|extension|raise|pushdown|\bfly\b|crossover|pec deck|machine|cable|leg press|leg curl|calf|crunch|plank|pull.?through|abduction|kickback|bridge/.test(n)) return 2;
  return 3;
}
const DIFF_LABEL=["","Beginner-friendly","Easy to learn","Moderate technique","Technical — practise it","Very technical"];
const DONTS={
 "Deadlift":["Don’t round your lower back — brace and keep a neutral spine.","Don’t yank the bar; build tension, then push the floor away.","Don’t let your hips shoot up before the bar moves.","Don’t lean back or hyperextend at the top."],
 "Romanian Deadlift":["Don’t turn it into a squat — it’s a hip hinge.","Don’t chase range by rounding; stop where the hamstrings tighten.","Don’t let the bar drift away from your legs."],
 "Single-Leg RDL":["Don’t rotate the hips open — keep them square.","Don’t round the back reaching for the floor.","Don’t rush — balance first, then load."],
 "Front Squat":["Don’t let the elbows drop — it collapses you forward.","Don’t round the upper back.","Don’t rise hips-first; lead with the chest."],
 "Back Squat":["Don’t let the knees cave inward.","Don’t round or overarch the lower back.","Don’t rise hips-first into a good-morning."],
 "Overhead Press":["Don’t lean back to press — brace abs and glutes.","Don’t flare the ribs; keep them stacked over the hips.","Don’t press around your face — clear the chin, then go up."],
 "Bent-Over Row":["Don’t heave the torso up for momentum.","Don’t round the back.","Don’t shrug toward the ears."],
 "Bulgarian Split Squat":["Don’t let the front knee cave in.","Don’t lean so far you lose the front-leg stretch.","Don’t push off the back foot — it stays light."],
 "Barbell Bench Press":["Don’t flare the elbows to 90° — tuck them slightly.","Don’t bounce the bar off the chest.","Don’t lift your hips off the bench."],
 "Hip Thrust":["Don’t hyperextend the low back — finish with the glutes.","Don’t push through the toes; drive the heels.","Don’t let the chin drift up; keep ribs down."],
 "Weighted Pull-Up":["Don’t kip or swing for momentum.","Don’t stop short — full dead hang each rep.","Don’t shrug; lead with the elbows."],
 "Good Morning":["Don’t go heavy — it loads the low back hard.","Don’t round the spine.","Don’t bend the knees into a squat."]
};
const MORE_CUES={
 "Deadlift":["Set the bar over mid-foot and pull the slack out of the bar first.","Take a big breath into your belly and brace as if for a punch.","Push the floor away, then stand tall and squeeze the glutes."],
 "Romanian Deadlift":["Soft knees, push the hips back, bar grazing the legs.","Feel the hamstring stretch, then drive the hips forward to stand."],
 "Front Squat":["Keep the elbows high; rest the bar on the front delts, not the hands.","Sit straight down between the hips, chest tall."],
 "Back Squat":["Spread the floor with your feet to keep the knees tracking out.","Brace hard, then sit down and back as one piece."]
};
function dontsFor(name){
  if(DONTS[name]) return DONTS[name];
  if(difficultyFor(name)>=4) return ["Keep the spine neutral and braced throughout.","Control the weight — form beats ego here.","End the set when technique starts to break."];
  return [];
}
// ---- hypertrophy rating (1–5) ----
// An evidence-informed heuristic, not a measured value. Weighs: loaded stretch at long
// muscle length, full range of motion, and how easily load can be added near failure.
// (Equipment type — free weight vs machine — barely affects growth when volume matches.)
const HSCORE={
 "Dumbbell Fly":[4,"Loads the chest through a deep stretch at the bottom — a strong isolation choice."],
 "Incline Dumbbell Fly":[4,"Stretches the upper chest under load; great isolation for the clavicular fibres."],
 "Cable Fly":[3.5,"Constant tension across the range, though less deep stretch under load than dumbbells."],
 "Cable Crossover":[3.5,"Smooth constant-tension chest isolation; pick a setting that loads the stretch."],
 "Low-to-High Cable Fly":[3.5,"Standing, hips to collarbone. Upper pec, with the load hardest at the top where the hands meet — and your torso bracing against it."],
 "Pec Deck":[3.5,"Stable, easy-to-progress chest isolation; limited stretch versus free-weight flyes."],
 "Machine Chest Fly":[3.5,"Same movement as the pec deck — stable, easy-to-progress chest isolation."],
 "Romanian Deadlift":[4.5,"Loads hamstrings and glutes through a deep stretch — a top-tier growth move."],
 "Bulgarian Split Squat":[4.5,"Big loaded stretch on quads and glutes, one leg at a time."],
 "Seated Leg Curl":[4.5,"Trains the hamstrings stretched — research favours it over the lying curl."],
 "Incline DB Curl":[4.5,"Stretches the biceps hard at the bottom — among the best curls for size."],
 "Overhead Triceps Extension":[4.5,"Long head under deep stretch — ~1.4× the growth of pushdowns in studies."],
 "Barbell Bench Press":[4,"Heavy, loadable press with a good chest stretch at the bottom."],
 "Weighted Dip":[4,"Deep stretch on chest and triceps; easy to add load over time."],
 "Weighted Pull-Up":[4,"Lats reach a long stretch overhead — a strong, loadable back builder."],
 "Pull-Up":[4,"Lats stretch fully overhead; add load once bodyweight is easy."],
 "Back Squat":[4,"Full-depth squats load the quads and glutes at long lengths."],
 "Front Squat":[4,"Upright torso means a deep, honest quad stretch under load."],
 "Leg Press":[4,"Deep, stable and easy to overload to failure."],
 "Hip Thrust":[4,"Maximal glute tension and simple to load — pair with a stretch move like RDLs."],
 "Walking Lunges":[4,"Stretch plus unilateral balance for quads and glutes."],
 "Reverse Lunge":[4,"Loaded stretch on the front leg, easy on the knees."],
 "Standing Calf Raise":[4,"Full stretch at the bottom — train the whole range."],
 "Preacher Curl":[4,"Keeps tension in the stretched part of the curl."],
 "Seated Row":[4,"Stable horizontal pull you can load and isolate the back with."],
 "Chest Press":[4,"Stable pressing you can push close to failure safely."],
 "Bent-Over Row":[3.5,"Great back thickness; keep it strict and the lower back fresh."],
 "Overhead Press":[3.5,"Builds the delts; stretch is modest, so add side-delt work too."],
 "Lateral Raise":[3.5,"The side-delt builder — a cable keeps tension where it stretches."],
 "EZ-Bar Curl":[3.5,"Solid biceps work; incline curls add more stretch."],
 "Hammer Curl":[3.5,"Hits the brachialis and forearms; pair with a stretchy curl."],
 "Leg Extension":[3.5,"Isolates the quads — emphasise the stretched bottom portion."],
 "Goblet Squat":[3.5,"Great depth, but load is capped by what you can hold."],
 "Glute Bridge":[3.5,"Strong glute squeeze; floor limits the stretch a little."],
 "Single-Leg Glute Bridge":[3.5,"Unilateral glute work you can do anywhere."],
 "Cable Crunch":[3.5,"Loadable ab work you can actually progress."],
 "Hanging Leg Raise":[3.5,"Lower abs and hip flexors with a useful stretch."],
 "Ab Wheel Rollout":[3.5,"A hard anti-extension stretch for the abs."],
 "Calf Raises":[3.5,"Effective when you hit a full stretch each rep."],
 "Deadlift":[3,"Unmatched for strength; for pure leg growth, RDLs give more loaded stretch."],
 "Triceps Pushdown":[3,"Handy triceps work; overhead extensions stretch the long head for more growth."],
 "Push-Ups":[3,"Great anywhere — load is capped, so add reps, tempo or elevate the feet."],
 "Pike Push-Ups":[3,"Bodyweight delt work; progress by raising the hips higher."],
 "Inverted / Backpack Row":[3,"Anywhere back work; load is limited, so chase reps and tempo."],
 "Banded Side Steps":[3,"Glute-medius activation — light, so treat it as support work."],
 "Hip Abduction":[3,"Targets the upper glutes; light loading, more of a finisher."],
 "Face Pulls":[3,"Rear delts and posture — light, supportive work."],
 "Band Pull-Aparts":[3,"Upper-back and posture health; very light loading."],
 "Hollow Hold (sec)":[2.5,"An anti-extension hold — superb for control, modest for size."],
 "Kettlebell Romanian Deadlift":[4,"Loads the hamstrings through a deep hinge — load is capped by the bell, so chase reps."],
 "Kettlebell Bulgarian Split Squat":[4.5,"Big loaded stretch on quads and glutes, one leg at a time."],
 "Kettlebell Reverse Lunge":[4,"Loaded stretch on the front leg, easy on the knees."],
 "Kettlebell Front Squat":[3.5,"Honest quad stretch, though load caps out at what you can rack."],
 "Kettlebell Row":[3.5,"Solid unilateral back work you can load and progress."],
 "Kettlebell Floor Press":[3,"Triceps and chest pressing; the floor cuts the stretch short."],
 "Kettlebell Overhead Press":[3.5,"Builds the delts; pair with side-delt work for width."],
 "Two-Hand Kettlebell Swing":[3,"A power/conditioning move — great for the posterior chain and heart rate, modest for pure size."],
 "One-Arm Kettlebell Swing":[3,"Ballistic posterior-chain work with an anti-rotation demand; train it for power and conditioning."],
 "Kettlebell Snatch":[3,"Explosive full-body conditioning; chase crisp reps, not slow grinding."],
 "Kettlebell Clean":[3,"A power move to rack the bell — light on hypertrophy, big on conditioning."],
 "Turkish Get-Up":[3,"A full-body stability and shoulder-control drill — superb skill, modest for size."],
 "Kettlebell Farmer's Carry":[3,"Loaded carry for grip, traps and a braced core; progress the load and distance."],
 "Kettlebell Suitcase Carry":[3,"Single-side carry that hammers the obliques to resist the lean."],
 "Incline Barbell Press":[4,"Heavy, loadable upper-chest press with a good stretch at the bottom."],
 "Reverse Plank":[2.5,"A posterior-chain endurance hold — great for posture and glute/hamstring tension, modest for size."],
 "Hanging Knee Raise":[3,"Scalable hanging ab work; progress to straight legs, then add ankle weight."],
 "Toes-to-Bar":[3.5,"Full hip-and-trunk flexion under a long lever — strong lower-ab builder."],
 "V-Up":[3,"Hits the abs top and bottom at once; chase clean reps, then slow the lower."],
 "Flutter Kicks":[2.5,"High-rep lower-ab endurance — light, best as a finisher."],
 "Decline Sit-Up":[3.5,"Loadable ab flexion through a long range — hold a plate to progress like any lift."],
 "L-Sit":[3,"A hard isometric for the abs and hip flexors — superb control, modest for size."],
 "Wall Sit":[2.5,"A quad-endurance isometric — easy on the joints, capped for size; build the time."],
 "Dead Hang":[2.5,"Grip, shoulder and lat decompression hold — supportive work, not a size driver."],
};
// ratings for the movements added to the catalogue; anything unrated falls back to hScore()'s defaults
Object.assign(HSCORE, {
 "Incline Machine Press":[4,"Upper-chest pressing on a fixed path — easy to push to failure without a spotter."],
 "Decline Machine Press":[3.5,"Lower-pec emphasis with the shoulder in a friendly position."],
 "Iso-Lateral Chest Press":[4.5,"One arm at a time, so the stronger side can't carry the set; plate-loaded and deeply loadable."],
 "Smith Machine Bench Press":[4,"A fixed bar path — slightly less stabiliser work, but you can chase failure safely alone."],
 "Smith Machine Incline Press":[4,"Upper chest with a guided bar; the easiest incline press to take to the last rep."],
 "Machine Pullover":[4.5,"The one machine that loads the lats through a full shortened-to-stretched arc — a rare and good stimulus."],
 "Iso-Lateral Pulldown":[4,"Independent arms on a pulldown path; good for fixing a side-to-side imbalance."],
 "Iso-Lateral Row":[4.5,"Plate-loaded rowing, one side at a time, with the chest supported — heavy upper-back work and no lower-back tax."],
 "Low Row Machine":[4,"A low rowing angle that biases the lats more than a chest-height row."],
 "Machine Shrug":[3.5,"Traps without having to grip a heavy bar — the grip stops being the limit."],
 "Smith Machine Row":[3.5,"Bar-path-guided rowing; strict, though the fixed line suits some torsos better than others."],
 "Smith Machine Overhead Press":[3.5,"Pressing overhead without balancing the bar — useful when going near failure alone."],
 "Pendulum Squat":[4.5,"An arced path that keeps tension on the quads through the whole range, with almost no spinal load."],
 "V-Squat":[4,"Guided squatting with the torso supported — quad-dominant and easy to load."],
 "Seated Leg Press":[4,"Horizontal pressing for the quads; gentler on the lower back than the 45-degree sled."],
 "Smith Machine Split Squat":[4,"Single-leg work without the balance challenge, so the quad is what actually fails."],
 "Standing Leg Curl":[4,"One hamstring at a time with the hip extended — a different length than the seated curl."],
 "Smith Machine Hip Thrust":[4,"Hip thrusting without wrestling the bar into place; the setup stops being the hard part."],
 "Smith Machine Calf Raise":[4,"Calves with a guided bar — simple to load heavy and hold the stretch."],
 "Machine Dip":[3.5,"Dipping with the load dialled in, so you can work at a weight your bodyweight alone doesn't allow."],
 "Machine Biceps Curl":[3.5,"Fixed-path curling you can take to failure without swinging."],
 "Smith Machine Close-Grip Press":[3.5,"Triceps pressing on a guided path; stable enough to overload safely."],
 "Rotary Torso":[2.5,"Loaded trunk rotation. Go light — the lumbar spine rotates very little by design."],
 "Rope Pushdown":[4,"The rope lets the hands separate at the bottom, so the triceps finish fully shortened."],
 "Rope Overhead Triceps Extension":[4.5,"Overhead puts the long head at full stretch — the strongest triceps position there is."],
 "Cable Shrug":[3.5,"Traps with tension that doesn't fall off at the bottom the way a free-weight shrug does."],
 "Cable Y-Raise":[4,"Rear delts and lower traps through a long arc — strong for posture and the overhead position."],
 "Bayesian Cable Curl":[4.5,"Curling with the arm behind the body puts the long head at full stretch under load."],
 "Dip":[4.5,"One of the best chest-and-triceps builders going — deep stretch, easy to load with a belt."],
 "Bench Dip":[2.5,"Convenient triceps work, but the shoulder position is unkind and the load caps fast."],
 "High-to-Low Cable Fly":[4,"Cables set high, hands finishing at the hips — the sternal (lower) pec through a long arc."],
 "Incline Cable Fly":[4,"The same upper-pec angle lying back on a bench, but the load peaks at the bottom stretch and the bench takes your torso out of it — so you can go heavier and nearer failure."],
 "Decline Cable Fly":[3.5,"Decline bench between the cables — lower pec, with tension held at the top where dumbbells lose it."],
 "Flat Bench Cable Fly":[4,"A dumbbell fly's path with the cable's even tension; the loaded stretch stays loaded at the bottom."],
 "Single-Arm Cable Fly":[3.5,"One side at a time through a longer arc across the body, so the stronger pec can't take over."],
 "Seated Cable Fly":[3.5,"Seated and braced, which takes the torso out of it — easy to take close to failure."],
 "Cable Chest Press":[3.5,"A press rather than a fly, but the cable holds tension through lockout where a bar doesn't."],
 "Decline Dumbbell Fly":[3.5,"The lower-pec angle of the dumbbell fly family; tension drops off near the top."],
 "Dumbbell Floor Press":[3.5,"Bench pressing with the range cut at the floor — kind on the shoulder, lighter on the stretch."],
 "Barbell Shrug":[4,"The most direct trap builder; load it heavy and hold the top for a beat."],
 "Dumbbell Shrug":[4,"Traps through a slightly longer range than the bar allows."],
 "Pendlay Row":[4,"Dead-stop rowing — strict, powerful, and honest about the weight you can actually move."],
 "Seal Row":[4.5,"Chest-supported so the lower back is out of it entirely; near-pure upper-back work."],
 "Machine High Row":[4,"Upper-back rowing with a fixed path — easy to take close to failure safely."],
 "Neutral-Grip Lat Pulldown":[4,"The comfiest pulldown grip for most shoulders, with a full lat stretch."],
 "Single-Arm Lat Pulldown":[4,"One side at a time, so the stronger lat can't take over."],
 "Wide-Grip Pull-Up":[4.5,"The classic lat-width builder; add weight once you clear 10 clean reps."],
 "Neutral-Grip Pull-Up":[4.5,"The kindest pull-up on the elbows and shoulders, and the one most people can load soonest."],
 "Reverse Hyperextension":[3.5,"Loads the glutes and spinal erectors with almost no spinal compression."],
 "Cable Front Raise":[3,"Constant tension on the front delts — useful, though pressing already covers them."],
 "Leaning Cable Lateral Raise":[4.5,"Leaning away puts tension on the side delt at its longest — the best lateral variant."],
 "Machine Preacher Curl":[4,"Fixed-path biceps work with the arm in front — very easy to push to true failure."],
 "Zottman Curl":[3,"Curls up, reverses down — biceps and forearms in one, at the cost of load."],
 "Machine Triceps Extension":[3.5,"Stable overhead-style triceps work you can take right to failure."],
 "Belt Squat":[4,"Heavy quad work with the load on the hips instead of the spine."],
 "Smith Machine Squat":[3.5,"A fixed bar path lets you chase failure without a spotter."],
 "Split Squat":[4,"A static lunge — brutal on the quads and the easiest single-leg move to progress."],
 "Box Squat":[3.5,"Squatting to a fixed depth; great for consistency, slightly less stretch under load."],
 "Sumo Deadlift":[4,"A wide-stance pull that shares the work between glutes, quads and adductors."],
 "Stiff-Leg Deadlift":[4.5,"A long loaded hamstring stretch — one of the strongest hamstring stimuli there is."],
 "Glute-Ham Raise":[4.5,"Knee-flexion hamstring work at bodyweight; add a plate once you own the reps."],
 "Donkey Calf Raise":[4,"Bent at the hip, the calves sit at a longer stretch than in a standing raise."],
 "Tibialis Raise":[3,"Trains the shin — a small muscle, but it balances the calf and helps the ankles."],
 "Clamshell":[2.5,"Light glute-medius activation; useful for hips and warm-ups, not a size driver."],
 "Neck Curl":[3,"Direct neck flexor work — start very light and keep the reps slow."],
 "Neck Extension":[3,"Builds the back of the neck; go light, and never force the end range."],
 "Dumbbell Side Bend":[2.5,"Loaded lateral flexion for the obliques; modest, and easy to overdo."],
});
function hScore(name){
  if(HSCORE[name]) return {s:HSCORE[name][0], why:HSCORE[name][1]};
  const eq=equipFor(name).key;
  if(eq==="body") return {s:3, why:"Convenient bodyweight work; load is capped, so chase reps, tempo and range."};
  if(eq==="cable") return {s:3.5, why:"Constant-tension isolation you can dial in and progress."};
  if(eq==="kb") return {s:3.5, why:"Versatile kettlebell work; load caps out at the bell, so progress with reps, tempo and range."};
  return {s:3.5, why:"A solid hypertrophy choice — train it through a full range with a loaded stretch and add load over time."};
}
function starHTML(s){
  let h=''; for(let i=1;i<=5;i++){ h+= s>=i ? ICON.starF : (s>=i-0.5 ? ICON.starH : ICON.starE); } return h;
}
function scoreTag(name){ const s=hScore(name).s; return '<span class="scoretag" title="Hypertrophy rating '+s+'/5">'+ICON.starF+s+'</span>'; }
// venue: where you'd do the exercise — Gym (loaded), Park (bar/structure bodyweight), Home (floor/band)
// bodyweight-capable movements — performable home, park and gym, so they show in every venue filter
const VENUE_HOME=["Push-Ups","Pike Push-Ups","Walking Lunge","Reverse Lunge","Sissy Squat","Single-Leg RDL","Single-Leg Calf Raise","Standing Calf Raise","Bulgarian Split Squat","Glute Kickback","Lying Leg Raise","Superman","Bird Dog","Dead Bug","Side Plank","Bicycle Crunch","Reverse Crunch","Russian Twist","Mountain Climbers","Glute Bridge","Single-Leg Glute Bridge","Step-Up","Inverted / Backpack Row","Backpack Bent-Over Row","Towel Row","Chair Dips","Bench Dip","Clamshell"];
// bodyweight movements that still need gym apparatus (a GHD, a captain's chair, an ab wheel station)
const VENUE_GYM=["Glute-Ham Raise","Nordic Curl","Captain's Chair Raise"];
function venueFor(name){
  if(VENUE_GYM.indexOf(name)>=0) return "Gym";
  if(VENUE_HOME.indexOf(name)>=0) return "Home";
  const n=String(name).toLowerCase();
  // bands are purchased gear, not a zero-equipment home staple — they fall through to the loaded (gym) tier
  const k=equipFor(name).key;
  if(k==="free"||k==="machine"||k==="cable"||k==="kb") return "Gym";   // kettlebells are gym equipment here, not a no-equipment home item
  if(/pull.?up|chin.?up|\bdip\b|hanging|inverted|muscle.?up|pike|handstand|bar\b/.test(n)) return "Park";
  return "Home";
}
// the exercise list always groups by muscle; a top toggle filters by available equipment
function sectionKeyFor(name){ return muscleFor(name)[0]||"Other"; }
function sectionLabel(key){ return key; }
function sectionOrder(){ return MGROUPS.concat(["Other"]); }
// equipment availability: full gym → workout park (bars + bodyweight) → no equipment (bodyweight only)
const LEVELS=[["gym","Full gym"],["park","Park"],["none","No equipment"]];
let equipLevel="gym";
let _noRise=false;     // the next #exlist render skips the cards' rise entrance (the post-Finish re-render, under the burst)
let _finPadDrop=null;  // drops the post-Finish page spacer (see finishPad)
let exSort="az";   // "az" | "score" — how exercise lists are ranked (shared by Add & Swap)
function exLevel(name){ const v=venueFor(name); return v==="Gym"?"gym":(v==="Park"?"park":"none"); }
function levelAllows(name){ const l=exLevel(name);
  if(equipLevel==="gym") return true;
  if(equipLevel==="park") return l!=="gym";   // park bars + bodyweight
  return l==="none";                           // bodyweight only
}
function muscleVolume(days, metric, volMode){
  metric=metric||"sets"; volMode=volMode||"total";
  const cutoff = days ? Date.now()-days*86400000 : 0;
  const totals={}, byEx={};
  Object.keys(hist).forEach(name=>{
    const groups=muscleFor(name);
    (hist[name]||[]).forEach(e=>{
      if(e.d>=cutoff){
        let amt;
        if(metric==="vol") amt = effVolume(name, e, volMode);
        else amt = ((e.n!=null) ? e.n : 1) * effortOf(e);   // effort-weighted: easy sets count as half
        byEx[name]=(byEx[name]||0)+amt;
        groups.forEach((g,i)=> totals[g]=(totals[g]||0)+(i===0?amt:amt*0.5));
      }
    });
  });
  if(metric==="vol"){
    // expand coarse legacy/cardio muscle tokens into the detailed groups so old logs still land on the radar
    const splitM=m=> m==="Shoulders" ? ["Front Delts","Side Delts","Rear Delts"]
                   : m==="Back" ? ["Lats","Upper Back","Lower Back"] : [m];
    // Resistance done elsewhere (kind:"muscle") counts in full; pure cardio never touches the radar; strength-y
    // activities (climbing, martial arts) contribute a fraction via the mvol baked in at log time. See ACTIVITIES.mf.
    (extlog||[]).forEach(e=>{ const v = e.kind==="muscle" ? e.vol : (e.mvol||0); if(!v) return;
      if(e.d>=cutoff && e.muscles && e.muscles.length){ const per=v/e.muscles.length;
        e.muscles.forEach(m=>{ const gs=splitM(m); gs.forEach(g=> totals[g]=(totals[g]||0)+per/gs.length); }); } });
  }
  return {totals, byEx};
}
function planVolume(plan){
  const totals={}, byEx={};
  (plan.workouts||[]).forEach(w=> (w.ex||[]).forEach(e=>{
    const groups=muscleFor(e.n), n=Math.max(1, parseInt(e.s)||3);
    byEx[e.n]=(byEx[e.n]||0)+n;
    groups.forEach((g,i)=> totals[g]=(totals[g]||0)+(i===0?n:n*0.5));
  }));
  return {totals, byEx};
}
// per-plan quality scores (0–5). Hypertrophy = set-weighted mean of the evidence-informed exercise ratings.
// Balance = muscle coverage + evenness + push/pull and quad/posterior symmetry.
function planScores(plan){
  let sw=0, ssum=0;
  (plan.workouts||[]).forEach(w=>(w.ex||[]).forEach(e=>{ if(!e.n) return; const s=Math.max(1,parseInt(e.s)||3); sw+=hScore(e.n).s*s; ssum+=s; }));
  const hyp = ssum ? sw/ssum : 0;
  const {totals}=planVolume(plan);
  const major=["Chest","Lats","Upper Back","Front Delts","Side Delts","Rear Delts","Biceps","Triceps","Quads","Hamstrings","Glutes","Calves","Core"];
  const vals=major.map(m=>totals[m]||0), nz=vals.filter(v=>v>0);
  const coverage=nz.length/major.length;
  const mean=nz.length?nz.reduce((a,b)=>a+b,0)/nz.length:0;
  const sd=nz.length?Math.sqrt(nz.reduce((a,b)=>a+(b-mean)*(b-mean),0)/nz.length):1;
  const even=mean?Math.max(0,1-(sd/mean)):0;
  const push=(totals.Chest||0)+(totals["Front Delts"]||0)+(totals["Side Delts"]||0)+(totals.Triceps||0), pull=(totals.Lats||0)+(totals["Upper Back"]||0)+(totals["Rear Delts"]||0)+(totals.Biceps||0);
  const ppl=(push&&pull)?Math.min(push,pull)/Math.max(push,pull):0;
  const quad=(totals.Quads||0), post=(totals.Hamstrings||0)+(totals.Glutes||0);
  const ql=(quad&&post)?Math.min(quad,post)/Math.max(quad,post):0;
  const balance = 5*(0.45*coverage + 0.25*even + 0.18*ppl + 0.12*ql);
  return { hyp:Math.round(hyp*10)/10, balance:Math.round(balance*10)/10 };
}
function round1(x){ return Math.round(x*10)/10; }
// estimated session length. Heavy compounds rest longest; supersetted accessories share one rest per round.
// rest used by the time ESTIMATE only (not the in-workout timer) — these are realistic elapsed rests, a touch over the prescribed minimum
function restSecFor(name){
  const n=String(name).toLowerCase();
  if(/squat|deadlift|bench press|overhead press|push press|weighted pull|weighted dip|romanian|hip thrust|t-bar|bent-over row|rack pull|trap-bar/.test(n)) return 180;
  if(/\bpress\b|\brow\b|pulldown|pull-?up|chin-?up|\bdip\b|lunge|split squat|leg press|hack|good morning|pull-through|leg curl|leg extension/.test(n)) return 130;
  if(muscleFor(name)[0]==="Core") return 60;
  return 90;
}
function exWork(name){ const r=restSecFor(name); return r>=180?55:r>=130?45:40; }
// per-exercise overhead — changing exercises takes ~3 min: walking to the station, waiting for / adjusting equipment, warm-up ramp sets, loading plates
function exSetup(name){ const r=restSecFor(name); return r>=180?210:r>=130?180:150; }
function workoutMinutes(w){
  if(!w || !w.ex || !w.ex.length) return 0;
  const ex=w.ex; let sec=360; let i=0;       // ~6 min general warm-up
  while(i<ex.length){
    const ss=ex[i].ss;
    if(ss){ let j=i; const grp=[]; while(j<ex.length && ex[j].ss===ss){ grp.push(ex[j]); j++; }
      const rounds=Math.max.apply(null, grp.map(g=>Math.max(1,parseInt(g.s)||3)));
      const workSum=grp.reduce((a,g)=>a+exWork(g.n),0);
      sec += 150 + rounds*workSum + rounds*Math.max(0,grp.length-1)*20 + Math.max(0,rounds-1)*105; i=j;
    } else { const e=ex[i], s=Math.max(1,parseInt(e.s)||3);
      sec += exSetup(e.n) + s*exWork(e.n) + Math.max(0,s-1)*restSecFor(e.n); i++; }
  }
  return Math.round(sec/60/5)*5;             // nearest 5 min
}
function workoutSupersets(w){ const set=new Set(); (w.ex||[]).forEach(e=>{ if(e.ss) set.add(e.ss); }); return set.size; }
// a superset must stay in one gym area — group only consecutive isolation accessories that share equipment
// the physical gym area a move lives in — supersets only pair within the same one (no running across the gym)
function exArea(name){
  const k=equipFor(name).key;
  if(k==="cable"||k==="machine"||k==="body"||k==="kb") return k;
  const n=String(name).toLowerCase();   // split "free weights" into the dumbbell rack vs the barbell/rack platform
  if(/dumbbell|\bdb\b|goblet|hammer curl|arnold|one-arm|incline db|lateral raise|rear delt fly|overhead triceps|triceps extension|chest-supported|split squat|bulgarian|\blunge\b|step-up|single-leg/.test(n)) return "dumbbell";
  return "barbell";
}
function regroupSupersets(w, mode){
  if(!w||!w.ex) return;
  w.ex.forEach(e=>{ delete e.ss; });
  if(mode==="off") return;   // supersets disabled — leave every move as straight sets
  const ISO=["Side Delts","Rear Delts","Biceps","Triceps"], aggressive=mode==="aggressive";
  const pairable=e=>{ const m=muscleFor(e.n)[0]; if(m==="Core") return false; return aggressive ? true : ISO.indexOf(m)>=0; };
  const maxRun=aggressive?2:4;   // a superset pairs NON-COMPETING moves (no shared muscle, primary or secondary) at one station
  let gi=0, i=0;
  while(i<w.ex.length){
    if(pairable(w.ex[i])){ const ar=exArea(w.ex[i].n), used=new Set(muscleFor(w.ex[i].n)); let j=i+1;
      while(j<w.ex.length && (j-i)<maxRun && pairable(w.ex[j]) && exArea(w.ex[j].n)===ar && muscleFor(w.ex[j].n).every(m=>!used.has(m))){ muscleFor(w.ex[j].n).forEach(m=>used.add(m)); j++; }
      if(j-i>=2){ const tag=String.fromCharCode(97+gi++); for(let k=i;k<j;k++) w.ex[k].ss=tag; i=j; }
      else i++;
    } else i++;
  }
}
// ---- confirm dialog (used for every deletion) ----
let _confirmYes=null;
function confirmAsk(msg, yesLabel, onYes, yesClass){ $("cMsg").textContent=msg; const y=$("cYes"); y.textContent=yesLabel||"Delete"; y.className=yesClass||"danger"; _confirmYes=onYes; $("confirmWrap").classList.add("show"); }
function confirmClose(){ $("confirmWrap").classList.remove("show"); _confirmYes=null; }
// ---- bodyweight exercises: load = (fraction of) bodyweight + any added weight ----
const BWLOAD={ "pull-up":1,"chin-up":1,"dip":1,"muscle-up":1,"push-up":0.65,"pike":0.66,
  "inverted":0.6,"backpack row":0.6,"row":0.6,"bulgarian":0.85,"split squat":0.85,"lunge":0.8,
  "pistol":0.9,"step-up":0.85,"glute bridge":0.5,"bridge":0.5,"nordic":0.7,"handstand":0.9 };
function isBW(name){ return equipFor(name).key==="body"; }
// ---- isometric / timed holds: logged by SECONDS, not reps (plank, hollow, wall sit, dead hang, L-sit…) ----
// \bhang\b matches "dead hang" but not "hanging" (that's a rep move); \bhold\b covers any "… Hold".
const TIMED_RE=/plank|hollow|\(sec\)|\bhold\b|wall sit|\bl-?sit\b|dead hang|\bhang\b|isometric/i;
function isTimed(name){ return TIMED_RE.test(String(name)); }
// fraction of bodyweight a hold supports — used for the time-based volume proxy
function holdFrac(name){ const n=String(name).toLowerCase();
  if(/dead hang|\bhang\b/.test(n)) return 1;       // whole bodyweight on the grip/lats
  if(/handstand/.test(n)) return 0.9;              // matches BWLOAD's rep-load for the same movement
  if(/\bl-?sit\b/.test(n)) return 0.9;
  if(/wall sit/.test(n)) return 0.6;
  if(/side plank|copenhagen/.test(n)) return 0.45;
  if(/reverse plank/.test(n)) return 0.5;
  if(/hollow/.test(n)) return 0.45;
  if(/superman/.test(n)) return 0.2;
  if(/plank/.test(n)) return 0.6;
  return 0.5;
}
const HOLD_SEC_PER_REP=3;                          // ~3s of time-under-tension ≈ one rep-equivalent
function bwLoadFrac(name){
  const n=String(name).toLowerCase();
  if(isTimed(name)) return 0;   // holds use the time-based proxy (see setVol/effVolume), not rep-volume
  // Postural / neck / scapular activation moves barely move bodyweight — counting them at the 0.65
  // default made e.g. Chin Tucks tally as much tonnage as a push-up. Treat them as a light fraction.
  if(/chin.?tuck|\bneck\b|wall slide|wall angel|scap(ula|ular)|snow.?angel|cat.?cow|bird.?dog|prone (y|t|w|i)\b|y-?raise|t-?raise|w-?raise/.test(n)) return 0.08;
  // core flexion (leg raises, crunches, sit-ups, twists): you move your legs/torso, not your whole bodyweight —
  // counting them at the 0.65 default massively overstated tonnage. ~0.18 of bodyweight is a fairer rep load.
  if(/leg.?raise|knee raise|flutter|toes.?to.?bar|v-?up|bicycle|russian twist|reverse crunch|crunch|\bsit-?up\b|captain|dead bug/.test(n)) return 0.18;
  // These have to be checked before the BWLOAD table below, whose "pull-up" and "dip" keys are
  // substrings of them and would otherwise charge the full bodyweight.
  if(/assisted/.test(n)) return 0.55;                 // the machine/band carries the rest
  if(/chair dip|bench dip/.test(n)) return 0.45;      // feet on the floor — not a parallel-bar dip
  if(/superman/.test(n)) return 0.15;                 // a prone extension lifts the torso, not the body
  if(/clamshell|fire.?hydrant/.test(n)) return 0.12;  // side-lying hip work moves one limb
  if(/glute.?ham/.test(n)) return 0.7;                // GHD raise, like the Nordic curl
  for(const k in BWLOAD){ if(n.includes(k)) return BWLOAD[k]; }
  return 0.65;
}
function bwNow(){
  if(bw && bw.length){ const latest=bw.reduce((a,b)=> b.d>a.d?b:a); const kg=parseFloat(latest.kg); if(kg>0) return kg; }
  return parseFloat(settings.goalStart)||75;
}
// effective session tonnage. mode "total" counts bodyweight load; "lifted" counts only external weight (conventional)
function effVolume(name, e, mode){
  mode = mode || "total";
  if(isTimed(name)){                                  // hold: seconds (in e.r) → rep-equivalents × hold load
    const secs=parseInt(e.r)||0, sets=(e.n!=null)?e.n:1, ext=parseFloat(e.w)||0, reps=secs/HOLD_SEC_PER_REP;
    if(mode==="lifted") return Math.round(ext*reps*sets);
    const load=bwNow()*holdFrac(name)+ext; if(load<=0||secs<=0) return 0;
    return Math.round(load*reps*sets);
  }
  if(isBW(name)){
    const ext=(parseFloat(e.w)||0)*(parseInt(e.r)||0)*((e.n!=null)?e.n:1);
    if(mode==="lifted") return Math.round(ext);
    const frac=bwLoadFrac(name); if(frac===0) return 0;
    const load=bwNow()*frac + (parseFloat(e.w)||0);
    return Math.round(load*(parseInt(e.r)||0)*((e.n!=null)?e.n:1));
  }
  return (e.v!=null) ? e.v : ((parseFloat(e.w)||0)*(parseInt(e.r)||0)*((e.n!=null)?e.n:1));
}
// effective load & volume for a SINGLE set (bodyweight counted in), for the live volume column & PR detection
function setLoad(name, w){ const wv=parseFloat(w)||0; if(isBW(name)){ const f=bwLoadFrac(name); return f? bwNow()*f+wv : wv; } return wv; }
function setVol(name, w, r){
  if(isTimed(name)){ const secs=parseInt(r)||0; if(secs<=0) return 0; return Math.round((bwNow()*holdFrac(name)+(parseFloat(w)||0))*(secs/HOLD_SEC_PER_REP)); }
  const reps=parseInt(r)||0; if(reps<=0) return 0; return Math.round(setLoad(name,w)*reps); }
function bestVol(name){ const h=hist[name]; if(!h||!h.length) return 0; let m=0; h.forEach(e=>{ const v=setVol(name,e.w,e.r); if(v>m) m=v; }); return m; }
function fmtVol(v){ return v>=10000 ? (v/1000).toFixed(1).replace(/\.0$/,'')+'k' : ''+v; }

// ================= storage (Claude window.storage, else localStorage, else memory) =================
const _mem={};
function hasWS(){ try{ return !!(window.storage && window.storage.get); }catch(e){ return false; } }
function hasLS(){ try{ return !!window.localStorage; }catch(e){ return false; } }
async function sget(k){
  if(hasWS()){ try{ const r=await window.storage.get(k); return r?JSON.parse(r.value):null; }catch(e){ return null; } }
  if(hasLS()){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):null; }catch(e){ return null; } }
  return (k in _mem)?_mem[k]:null;
}
async function sset(k,v){
  if(_booting) return ssetQuiet(k,v);   // init's migrations and clocks are bookkeeping, not edits (see ssetQuiet)
  await _localSet(k,v);
  cloudMark(k,v);   // no-op unless signed in and k is a synced key
}
// Local-only write — used by sset and by the sync layer when adopting cloud data (so it doesn't echo back).
async function _localSet(k,v){
  if(hasWS()){ try{ await window.storage.set(k, JSON.stringify(v), false); return; }catch(e){} }
  if(hasLS()){ try{ localStorage.setItem(k, JSON.stringify(v)); return; }catch(e){} }
  _mem[k]=v;
}

// ================= cloud sync (Supabase) =================
// Feature-flagged: with blank keys the whole layer stays dormant and the app is 100% local.
// Model: localStorage is the live store (instant, offline-first); Supabase syncs on top,
// last-write-wins per key via an updated_at timestamp.
const SUPA = {
  url: "https://sukuuhoglitaeidplhns.supabase.co",
  key: "sb_publishable_ccEFXkJ3cl8-PNLSzeiOAA_aZo7tc9O",
  // VAPID *public* key (safe to embed). The matching private key goes in Supabase secrets — see PUSH-SETUP.md
  vapidPublic: "BI6G-Tfh8TMp9wK5N4vFc1w_z9zkGNUekzNo31HM8J9zofn25ZVp7f3bVqd_m2LhwIl89Azb7FjSNjdDGiBYUG4"
};
const CLOUD_KEYS = ["plans","lastsets","bodyweight","history","extlog","settings","predledger","calib"]; // draft stays device-only
let sb=null, cloudUser=null, _syncMeta={}, _pushTimers={};
// Before a sign-in's first successful reconcile, no write goes up on its own: a blind push would lay this device's
// stale row over a newer one (another device's stars, badges, deloads). cloudMark still stamps the key, so the
// reconcile sees it as local-newer and folds the server row in before it pushes; _held lists the keys to push once
// it has run. A failed reconcile (offline launch) is retried when the signal or the app comes back (cloudRetry).
let _syncOwner=false, _authSeen=false, _reconciled=false, _reconcileP=null, _reconcileUid=null, _recTried=0, _retryTimer=null, _booting=true;
const _held=new Set();
// True once the friends-only hardening migration (supabase/schema-hardening.sql) is live —
// detected by probing the `follows` table. Until then the activity table is world-readable, so
// the client publishes SUMMARY ONLY (never exercises/weights) and hides the friends/visibility UI.
let dbHardened=false;
// A tap-to-follow invite link (?add=CODE) stashes the code here until we're signed in + hardened.
// A live-watch push (?live=UID) stashes the broadcaster id and opens their live view once ready.
let pendingAddCode=null, pendingLiveView=null, pendingDM=null;
try{ const _p=new URLSearchParams(location.search);
  if(_p.has("add")) pendingAddCode=(_p.get("add")||"").trim().toUpperCase();
  if(_p.has("live")) pendingLiveView=(_p.get("live")||"").trim();
  if(_p.has("dm")) pendingDM=(_p.get("dm")||"").trim();   // a "new message" push (?dm=senderId)
  if(_p.has("add")||_p.has("live")||_p.has("dm")){
    _p.delete("add"); _p.delete("live"); _p.delete("dm"); const _qs=_p.toString();
    history.replaceState(null,"", location.pathname+(_qs?"?"+_qs:"")+location.hash); }
}catch(e){}
async function detectHardened(){
  if(!cloudReady()){ dbHardened=false; return; }
  try{ const { error } = await sb.from("follows").select("follower").limit(1); dbHardened = !error; }
  catch(e){ dbHardened=false; }
}

function cloudConfigured(){ return !!(SUPA.url && SUPA.key); }
function cloudReady(){ return !!(sb && cloudUser); }
function cloudAvailable(){ return !!sb; }   // cloud sync is enabled on this build/session (signed in or not)
async function _persistMeta(){ await _localSet("_syncMeta", _syncMeta); }

// Called once the SDK script has loaded (or right after the main script, whichever is later).
window.__cloudInit = async function(){
  if(sb || !cloudConfigured() || !window.supabase) return;
  try{
    sb = window.supabase.createClient(SUPA.url, SUPA.key, {
      auth:{ persistSession:true, autoRefreshToken:true, detectSessionInUrl:true }
    });
  }catch(e){ sb=null; return; }
  _syncMeta = (await sget("_syncMeta")) || {};
  sb.auth.onAuthStateChange((_evt, session)=>{ handleAuth(session && session.user ? session.user : null); });
  try{ const { data } = await sb.auth.getSession(); await handleAuth(data && data.session ? data.session.user : null); }
  catch(e){ await handleAuth(null); }
};

async function handleAuth(user){
  const was = cloudUser && cloudUser.id;
  cloudUser = user || null; _authSeen=true;
  renderAccount();
  if(cloudUser && cloudUser.id !== was){
    _reconciled=false; _recTried=0; _held.clear();
    for(const k in _pushTimers) clearTimeout(_pushTimers[k]);   // a push queued for the previous account never lands in this one
    try{
    await ensureProfile();
    await detectHardened();        // does this project have the friends-only schema yet?
    renderAccount(); renderFriends(); updateLiveRow();
    if(dbHardened) startPresence();   // heartbeat so friends see me as online
    if(dbHardened) gymRestore();      // reflect an active gym check-in, if any
    if(dbHardened) await e2eInit();   // publish my message key + subscribe to incoming DMs
    processPendingAdd();           // act on a tap-to-follow invite link, if any
    if(pendingLiveView && dbHardened){ const id=pendingLiveView; pendingLiveView=null; openLiveView(id); }  // a "watch me live" push
    if(pendingDM && dbHardened){ const id=pendingDM; pendingDM=null; openDMFromLink(id); }                  // a "new message" push
    }catch(e){}                    // the reconcile must still run: until it does, nothing is pushed
    await cloudReconcile();
    if(!settings.displayName) askDisplayName();   // first thing after signing in: how should I address you?
  } else if(!cloudUser){ dbHardened=false; teardownLive(); teardownMessages(); teardownGym();
    if(_presenceTimer){ clearInterval(_presenceTimer); _presenceTimer=null; }
    starOwnBackfill();             // signed out after all: no reconcile is coming, so count the history now
    if(pendingAddCode){ toast("Sign in to follow your friend."); goAccount(); }
  }
}
function askDisplayName(){
  const w=$("nameWrap"), i=$("nameInput2"); if(!w||!i) return;
  i.value=settings.displayName||settings.name||""; w.classList.add("show"); setTimeout(()=>i.focus(),60);
}
async function saveDisplayName(){
  const v=($("nameInput2").value||"").trim().slice(0,24);
  settings.displayName=v; if(!settings.name) settings.name=v; await sset("settings",settings);
  if(cloudReady()){ try{ await sb.from("profiles").upsert({ user_id:cloudUser.id, display_name:v||(cloudUser.email||"Lifter").split("@")[0] }); }catch(e){} }
  $("nameWrap").classList.remove("show");
  if($("ovGreet")) $("ovGreet").textContent=ovGreeting();
  if(typeof renderAccount==="function") renderAccount();
}

// Auth actions (magic-link / passwordless).
let _lastOtpSend=0;
async function cloudLogin(email){
  if(!sb){ await window.__cloudInit(); }
  if(!sb){ toast("Couldn't reach the cloud — check your connection and try again."); return; }
  const wait=Math.ceil((60000-(Date.now()-_lastOtpSend))/1000);
  if(wait>0){ toast("Hold on "+wait+"s before requesting another code."); return; }
  try{
    // Code (not link): a magic link always opens Safari and never reaches an installed PWA.
    const { error } = await sb.auth.signInWithOtp({ email, options:{ shouldCreateUser:true } });
    if(error) throw error;
    _lastOtpSend=Date.now();
    const cr=$("acctCodeRow"); if(cr){ cr.style.display=""; const ci=$("acctCode"); if(ci){ ci.value=""; ci.focus(); } }
    toast("Check your email for a 6-digit code.", true);
  }catch(e){ toast("Sign-in failed: "+((e&&e.message)||e)); }
}
async function cloudVerify(email, code){
  if(!sb){ toast("Couldn't reach the cloud — try again."); return; }
  code=(code||"").replace(/\D/g,"");
  if(code.length<6){ toast("Enter the 6-digit code from your email."); return; }
  try{
    const { error } = await sb.auth.verifyOtp({ email, token:code, type:"email" });
    if(error) throw error;
    const cr=$("acctCodeRow"); if(cr) cr.style.display="none";
    // onAuthStateChange handles the signed-in state from here
  }catch(e){ toast("That code didn't work — check it or send a new one."); }
}
async function cloudLogout(){
  if(sb){ try{ await sb.auth.signOut(); }catch(e){} }
  cloudUser=null;
  // drop per-account derived state so the next account can't reuse this one's shared secrets or keys
  // _e2ePubCache/_e2eSecretCache are const — clear in place, don't reassign
  try{ _e2eKeys=null; Object.keys(_e2ePubCache).forEach(k=>delete _e2ePubCache[k]);
       Object.keys(_e2eSecretCache).forEach(k=>delete _e2eSecretCache[k]); }catch(e){}
  renderAccount();
  toast("Signed out. Your data stays on this device.");
}
// Make THIS device the source of truth: push every local key up with a fresh timestamp, overwriting the cloud.
async function cloudForcePush(){
  if(!cloudReady()){ toast("Sign in first to save to your account."); return; }
  const now=Date.now(); let n=0;
  for(const k of CLOUD_KEYS){
    const v=await sget(k);
    if(v!=null){ _syncMeta[k]=now; await cloudPush(k, v, now); n++; }
  }
  await _persistMeta();
  toast(n?"Saved this device's data to your account.":"Nothing to save yet.", true);
}
// GDPR: delete the account and everything the server holds for it.
// This used to delete three tables client-side (activity, user_data, profiles) and leave ten behind —
// messages, the passphrase-wrapped private key, push endpoints, follows, the last live workout. Those
// have no client DELETE policy, so the attempts silently affected zero rows. Deleting the auth user is
// the only complete answer: every table cascades from it. That needs the service role, hence the
// edge function. If it isn't deployed yet we say so instead of doing a partial wipe and claiming success.
async function cloudDeleteData(){
  if(!cloudReady()) return;
  confirmAsk("Delete your account and everything on the server? That's your synced log, feed posts, profile, messages, message key, follows and push settings. You'll be signed out. The copy on this device stays until you delete it there too. This can't be undone.","Delete",async()=>{
    let ok=false, msg="";
    try{
      const { data, error } = await sb.functions.invoke("delete-account");
      if(error) throw error;
      ok = !!(data && data.ok);
      if(!ok) msg = (data && data.error) || "the server didn't confirm";
    }catch(e){ msg = (e && e.message) || String(e); }
    if(!ok){
      toast("Couldn't delete your account: "+msg+". Nothing was removed — try again, or check the delete-account function is deployed.");
      return;
    }
    _syncMeta={}; await _persistMeta();
    try{ await sb.auth.signOut(); }catch(e){}
    cloudUser=null; renderAccount();
    toast("Your account and all server data were deleted. The copy on this device is untouched.", true);
  });
}

async function ensureProfile(){
  if(!cloudReady()) return;
  try{
    let row=null;
    // pull my saved avatar from the canonical profile row (degrades if columns aren't migrated yet)
    try{ const { data, error } = await sb.from("profiles").select("user_id,avatar_color,avatar_emoji,avatar_icon,avatar_style").eq("user_id", cloudUser.id).maybeSingle(); if(error) throw error; row=data; }
    catch(e){ const { data } = await sb.from("profiles").select("user_id").eq("user_id", cloudUser.id).maybeSingle(); row=data; }
    if(!row){
      const name = settings.displayName || (cloudUser.email||"Lifter").split("@")[0];
      await sb.from("profiles").upsert({ user_id: cloudUser.id, display_name: name });
    } else {
      if(row.avatar_color!=null) settings.avatarColor=row.avatar_color;
      if(row.avatar_emoji!=null) settings.avatarEmoji=row.avatar_emoji;
      if(row.avatar_icon!=null)  settings.avatarIcon=row.avatar_icon;
      if(row.avatar_style!=null) settings.avatarStyle=row.avatar_style;
      if(typeof syncSelfAvatar==="function") syncSelfAvatar();
    }
  }catch(e){}
}

// Mark a key dirty and debounce-push it to the cloud. Called on every sset. Before the first reconcile: stamped, held.
function cloudMark(k,v){
  if(k==="_syncMeta" || k==="__owner" || !cloudReady() || CLOUD_KEYS.indexOf(k)<0) return;
  _syncMeta[k]=Date.now(); _persistMeta();
  clearTimeout(_pushTimers[k]);
  if(!_reconciled){ _held.add(k); cloudRetry(); return; }
  const ts=_syncMeta[k];
  _pushTimers[k]=setTimeout(()=>cloudPush(k, v, ts), 1200);
}
// bookkeeping writes (the star close-out, the tip and travel clocks): before the reconcile they stay local and
// unstamped, after it they go up one tick past the row, so housekeeping never outranks another device's real edit
async function ssetQuiet(k,v){
  await _localSet(k,v);
  if(!cloudReady() || CLOUD_KEYS.indexOf(k)<0) return;
  if(!_reconciled){ _held.add(k); return; }
  const ts=_syncMeta[k]=(_syncMeta[k]||0)+1; _persistMeta();   // one tick past the row: never outranks a real edit elsewhere
  clearTimeout(_pushTimers[k]); _pushTimers[k]=setTimeout(()=>cloudPush(k, v, ts), 1200);
}
// a reconcile that failed (no signal) runs again on 'online', on return to the app, and — throttled — on a held write
function cloudRetry(now){
  if(!cloudReady() || _reconciled || !_recTried || _reconcileP) return;
  const wait=15000-(Date.now()-_recTried);
  if(now || wait<=0){ clearTimeout(_retryTimer); _retryTimer=null; cloudReconcile(); }
  else if(!_retryTimer) _retryTimer=setTimeout(()=>{ _retryTimer=null; cloudRetry(true); }, wait);
}
window.addEventListener("online", ()=>cloudRetry(true));
document.addEventListener("visibilitychange", ()=>{ if(document.visibilityState==="visible") cloudRetry(true); });
async function cloudPush(k, v, ts){
  if(!cloudReady()) return;
  try{
    await sb.from("user_data").upsert(
      { user_id: cloudUser.id, key:k, value:v, updated_at:new Date(ts).toISOString() },
      { onConflict:"user_id,key" }
    );
  }catch(e){ /* left dirty; next change or reconcile retries */ }
}

// history is {exerciseName:[{d,...}]} and has exactly one append and no delete path anywhere, so a union
// keyed on the entry timestamp can only ever ADD back something a device was missing. Deliberately NOT
// applied to extlog, which does have delete paths (a union there would resurrect deleted entries).
// extlog DOES have delete paths, so a plain union would resurrect deleted entries. Every entry carries
// d:Date.now() from its single creation point, so a deletion is recorded as that timestamp and the union
// then subtracts them. Append-only and capped — you never un-delete, so losing one is the old behaviour,
// never worse.
const TOMB_MAX=500;
function tombAdd(d){
  if(!d) return;
  const t=settings.extlogTomb=settings.extlogTomb||[];
  if(t.indexOf(d)<0){ t.push(d); if(t.length>TOMB_MAX) t.splice(0, t.length-TOMB_MAX); }
}
function mergeExtlog(localE, serverE, tomb){
  const dead=new Set(tomb||[]);
  const a=Array.isArray(localE)?localE:[], b=Array.isArray(serverE)?serverE:[];
  const seen=new Set(), out=[];
  for(const e of [...a, ...b]){
    if(!e || dead.has(e.d)) continue;
    const k=String(e.d); if(seen.has(k)) continue;
    seen.add(k); out.push(e);
  }
  out.sort((x,y)=>(x.d||0)-(y.d||0));
  return out;
}
function mergeHistory(localH, serverH){
  if(!localH || typeof localH!=="object") return serverH;
  if(!serverH || typeof serverH!=="object") return localH;
  const out={};
  for(const name of new Set([...Object.keys(localH), ...Object.keys(serverH)])){
    const seen=new Set(), merged=[];
    for(const e of [...(localH[name]||[]), ...(serverH[name]||[])]){
      const k=String(e && e.d); if(e && !seen.has(k)){ seen.add(k); merged.push(e); }
    }
    merged.sort((a,b)=>(a.d||0)-(b.d||0));
    out[name]=merged;
  }
  return out;
}
// Stars, badges and deloads only ever grow, so settings' last-write-wins must not drop what the older side
// earned. sv is the newer (adopted) row: its plain fields win; these are unioned (stars spec §7.5).
// Every conflict resolves the same way whichever side is local, and keys/arrays keep the newer side's order, so two
// devices converge on one row instead of pushing their own version back on every launch.
const STAR_MODE_RANK={ n:3, l:2, bl:1, b:0 }, STAR_LIGHT_ORDER=["injury","deload","travel","busy"];   // injury: the one reason with its own credit rule
function mergeGrowingSettings(lv, sv){
  if(!lv || !sv || typeof lv!=="object" || typeof sv!=="object") return sv;
  const out=Object.assign({}, sv), uni=(a,b)=>[...new Set([...(Array.isArray(a)?a:[]), ...(Array.isArray(b)?b:[])])];
  const ls=lv.stars, ss=sv.stars;
  if(ls && ss){
    const st=Object.assign({}, ss), le=ls.earned||{}, se=ss.earned||{}, e={}, ll=ls.light||{}, sl=ss.light||{}, L={};
    for(const k in ls) if(!(k in st)) st[k]=ls[k];
    const pick=(a,b,rank)=> a==null ? b : b==null || a===b ? a : rank(a)!==rank(b) ? (rank(a)>rank(b) ? a : b) : String(a)<String(b) ? a : b;
    const mr=m=>STAR_MODE_RANK[m]!=null ? STAR_MODE_RANK[m] : -1, lr=x=>{ const i=STAR_LIGHT_ORDER.indexOf(x); return i<0 ? -1 : STAR_LIGHT_ORDER.length-i; };
    new Set([...Object.keys(se), ...Object.keys(le)]).forEach(k=>{ e[k]=pick(se[k], le[k], mr); });   // conflict: n > l > bl > b
    new Set([...Object.keys(sl), ...Object.keys(ll)]).forEach(k=>{ L[k]=pick(sl[k], ll[k], lr); });   // injury > deload > travel > busy > others
    st.earned=e; st.light=L; st.posted=uni(ss.posted, ls.posted);
    // the Light week switch stamps its week (lightSet): the later stamp's value stands, absence included, so "off" sticks
    const la=ls.lightSet||{}, sa=ss.lightSet||{}, LS=st.lightSet={};
    new Set([...Object.keys(la), ...Object.keys(sa)]).forEach(id=>{ const w=(+sa[id]||0)>(+la[id]||0) ? ss : ls; LS[id]=Math.max(+la[id]||0, +sa[id]||0);
      if(w.light && id in w.light) st.light[id]=w.light[id]; else delete st.light[id]; });
    if(ls.celWk || ss.celWk) st.celWk=[ls.celWk||"", ss.celWk||""].sort().pop();   // one star moment a week, across devices
    st.postDue=uni(ss.postDue, ls.postDue).filter(id=>st.posted.indexOf(id)<0);
    if(!(ls.seededEmpty && ss.seededEmpty)) delete st.seededEmpty;   // the other side counted real history
    if(ls.liveFrom || ss.liveFrom) st.liveFrom=[ls.liveFrom, ss.liveFrom].filter(Boolean).sort()[0];   // live judging began at the earlier empty seed
    if(ls.deloadDueWk && ss.deloadDueWk) st.deloadDueWk=[ls.deloadDueWk, ss.deloadDueWk].sort()[0];   // one due deload, one light week
    const sw=[starSeedWk(ls), starSeedWk(ss)].filter(Boolean).sort()[0]; if(sw) st.seedWk=sw;   // the late back-fill's cut-off: the earliest seed
    out.stars=st;
  } else if(ls) out.stars=ls;   // a pre-stars device pushed without them
  if(lv.achUnlocked || sv.achUnlocked) out.achUnlocked=uni(sv.achUnlocked, lv.achUnlocked);
  if(lv.achAt || sv.achAt){ const a=Object.assign({}, sv.achAt||{});
    for(const k in (lv.achAt||{})){ const x=a[k], y=lv.achAt[k];   // the earlier timestamp; a number beats "h"
      a[k] = x==null ? y : y==null ? x : typeof x!=="number" ? (typeof y==="number" ? y : x) : typeof y!=="number" ? x : Math.min(x,y); }
    out.achAt=a; }
  ["deloadAt","deloadsTaken"].forEach(k=>{ if(lv[k]!=null || sv[k]!=null) out[k]=Math.max(+lv[k]||0, +sv[k]||0); });
  if(lv.consistPostWk || sv.consistPostWk) out.consistPostWk=[lv.consistPostWk||"", sv.consistPostWk||""].sort().pop();
  return out;
}
// settings rows are compared by content, not key order: two devices that build the same record in a different
// order must not keep pushing it back and forth
function syncSame(k, a, b){
  if(k!=="settings") return JSON.stringify(a)===JSON.stringify(b);
  const canon=v=>Array.isArray(v) ? v.map(canon) : v && typeof v==="object" ? Object.keys(v).sort().reduce((o,x)=>(o[x]=canon(v[x]), o), {}) : v;
  return JSON.stringify(canon(a))===JSON.stringify(canon(b));
}
// fold the server row into a local value that is about to go up (history/extlog: union; settings: growing fields)
function syncFold(k, lv, sv, tomb){
  if(sv==null || lv==null) return lv;
  return k==="history" ? mergeHistory(lv, sv) : k==="extlog" ? mergeExtlog(lv, sv, tomb)
    : k==="settings" ? mergeGrowingSettings(sv, Object.assign({}, lv, { extlogTomb:[...new Set([...(lv.extlogTomb||[]), ...(sv.extlogTomb||[])])] })) : lv;
}
// On login / launch: pull cloud rows, adopt any that are newer than local, push any local that are newer/missing.
// One at a time: a retry joins the reconcile already running for this account.
function cloudReconcile(){
  if(!cloudReady()) return Promise.resolve();
  if(_reconcileP && _reconcileUid===cloudUser.id) return _reconcileP;
  const run=()=>_cloudReconcile().finally(()=>{ if(_reconcileP===p) _reconcileP=null; if(_held.size) cloudRetry(); });
  const p = _reconcileP ? _reconcileP.then(run) : run();
  _reconcileP=p; _reconcileUid=cloudUser.id;
  return p;
}
async function _cloudReconcile(){
  if(!cloudReady()) return;
  _recTried=Date.now();
  let rows=[];
  try{ const { data, error } = await sb.from("user_data").select("key,value,updated_at"); if(error) throw error; rows=data||[]; }
  catch(e){ cloudRetry(); return; }   // no signal: the held writes wait for the next try
  const server={}; rows.forEach(r=>{ server[r.key]={ v:r.value, ts:Date.parse(r.updated_at) }; });

  // A different account signing in on this device must never have the previous owner's data pushed into
  // its rows, and must never adopt across the boundary. Start that account clean instead.
  const prevOwner=_syncMeta.__owner||null, foreign = prevOwner && prevOwner!==cloudUser.id;
  if(foreign){
    try{ const pre=await gatherData(); if(pre) await _localSet("_preSync", {t:Date.now(), owner:prevOwner, data:pre}); }catch(e){}
    for(const k of CLOUD_KEYS) await _localSet(k, null);
    for(const k of Object.keys(settings)) delete settings[k]; Object.assign(settings, JSON.parse(SETTINGS_DEFAULT));   // the old owner's record stays out of memory too (same object: pending pushes hold it)
    _syncMeta={};
    toast("Signed in as a different account — this device now shows that account's data.", true);
  }

  let adopted=false, snapped=false; const wrote={};   // wrote: what this pass left in storage per key (a later write differs)
  for(const k of CLOUD_KEYS){
    const localTs=_syncMeta[k]||0, s=server[k];
    if(s && s.ts>localTs){
      // Nothing else snapshots the pre-adopt state and there is no undo, so take one the first time this
      // reconcile is about to replace anything. Cheap, and it makes every loss path recoverable.
      if(!snapped){ snapped=true; try{ const pre=await gatherData(); if(pre) await _localSet("_preSync", {t:Date.now(), owner:prevOwner, data:pre}); }catch(e){} }
      let adopt=s.v;
      if(k==="history" || k==="extlog" || k==="settings"){
        const lv=await sget(k);
        if(k==="history") adopt=mergeHistory(s.v, lv);   // server first: same key order (and entry) as the row, so an unchanged union is not pushed back
        else if(k==="settings"){
          // settings stays last-write-wins, EXCEPT the tombstone list, which is append-only and must
          // survive from both sides or a delete made on one device comes back from the other
          adopt=s.v;
          const union=[...new Set([...((s.v&&s.v.extlogTomb)||[]), ...((lv&&lv.extlogTomb)||[])])];
          if(union.length) adopt=Object.assign({}, s.v, {extlogTomb:union});
          // a device on a pre-accent build pushes rows with no accent — keep ours rather than drop it
          if(lv && lv.accent && !(adopt && adopt.accent)) adopt=Object.assign({}, adopt, {accent:lv.accent});
          adopt=mergeGrowingSettings(lv, adopt);   // stars, badges, deloads: union, so a second device never wipes them
        }
        else {
          const tomb=[...new Set([...((settings&&settings.extlogTomb)||[]), ...(((server.settings&&server.settings.v)||{}).extlogTomb||[])])];
          adopt=mergeExtlog(lv, s.v, tomb);
        }
        // the union may be a superset of the server row — push it straight back so both sides agree
        if(lv && !syncSame(k, adopt, s.v)){ await cloudPush(k, adopt, s.ts+1); s.ts=s.ts+1; }
      }
      await _localSet(k, adopt); _syncMeta[k]=s.ts; adopted=true; wrote[k]=JSON.stringify(adopt);
    }
    else { let lv=await sget(k);
      if(lv!=null && (!s || localTs>s.ts)){
        // local is newer, but the server row may hold what only the other device has: fold it in before pushing
        if(s && s.v!=null && (k==="history" || k==="extlog" || k==="settings")){
          const tomb=[...new Set([...((settings&&settings.extlogTomb)||[]), ...(((server.settings&&server.settings.v)||{}).extlogTomb||[])])];
          const m=syncFold(k, lv, s.v, tomb);
          if(!syncSame(k, m, lv)){ lv=m; await _localSet(k, lv); adopted=true; }
        }
        const pts=localTs||Date.now(); await cloudPush(k, lv, pts); _syncMeta[k]=pts; wrote[k]=JSON.stringify(lv);
      } }
  }
  _syncMeta.__owner=cloudUser.id;
  await _persistMeta();
  _reconciled=true;
  // held writes this pass did not already carry up (a quiet write on an unchanged row, or a write made while it ran):
  // fold the server row in, as above, then push what storage holds now
  const held=[..._held]; _held.clear();
  for(const k of held){ let v=await sget(k); if(v==null || wrote[k]===JSON.stringify(v)) continue;
    const s=server[k];
    if(s && s.v!=null){ const m=syncFold(k, v, s.v, [...new Set([...((settings&&settings.extlogTomb)||[]), ...(((server.settings&&server.settings.v)||{}).extlogTomb||[])])]); if(!syncSame(k, m, v)){ v=m; await _localSet(k, v); adopted=true; } }
    _syncMeta[k]=Math.max(_syncMeta[k]||0, s ? s.ts : 0)+1; await cloudPush(k, v, _syncMeta[k]); }
  if(held.length) await _persistMeta();
  if(adopted || foreign) await reloadFromStore();
  else if(settings.stars && settings.stars.seededEmpty){ starLateBackfill(); checkStars({silent:true}); renderStarsEverywhere(); }
}
// Re-hydrate the in-memory globals from storage after the sync layer changed them, then repaint.
async function reloadFromStore(){
  settings = Object.assign(settings, (await sget("settings"))||{});
  const sp=await sget("plans"); if(sp) plans=sp;
  last=(await sget("lastsets"))||{}; bw=(await sget("bodyweight"))||[]; hist=(await sget("history"))||{}; extlog=(await sget("extlog"))||[];
  ledger=(await sget("predledger"))||[]; calib=(await sget("calib"))||lgFreshCalib();
  if(!plans.length) plans=DEFAULT_PLANS.map(p=>JSON.parse(JSON.stringify(p)));
  if(!plans.find(p=>p.id===settings.activePlanId)) settings.activePlanId=plans[0].id;
  starLateBackfill();
  if(!settings.stars) seedStars(); else checkStars({silent:true});   // re-derive this + last week from the merged logs; a synced star was celebrated where it was earned
  applyTheme(); renderAll();
  // adopted settings can include avatar/display prefs synced from another device — refresh those surfaces
  if(typeof syncSelfAvatar==="function") syncSelfAvatar();
  if(typeof renderMeProfile==="function") renderMeProfile();
  if(typeof renderPresenceRail==="function") renderPresenceRail();
}

function renderAccount(){
  const card=$("acctCard"), box=$("acctBox"), sub=$("acctCardSub");
  const cta=$("feedCTA"), list=$("feedList"), flbl=$("ovFeedLabel");
  const setFeed=(signedIn)=>{ if(cta) cta.style.display = signedIn ? "none" : ""; if(list) list.style.display = signedIn ? "" : "none"; };
  if(flbl) flbl.style.display = cloudConfigured() ? "" : "none";
  renderPresenceRail(); renderMeProfile();   // refresh the social surfaces regardless of sign-in state
  if(!box) return;
  if(!cloudConfigured()){ if(card) card.style.display="none"; box.style.display="none"; setFeed(false); return; }
  if(card) card.style.display=""; box.style.display="";
  const inB=$("acctIn"), outB=$("acctOut");
  if(cloudUser){
    outB.style.display="none"; inB.style.display="";
    $("acctWho").textContent=cloudUser.email||"Signed in";
    if(sub) sub.textContent = " — "+(cloudUser.email||"signed in");
    const an=$("acctName"); if(an && document.activeElement!==an) an.value=settings.displayName||settings.name||"";
    renderShareSeg();
    renderFriends();
    const rtog=$("remindToggle"); if(rtog) rtog.checked = settings.remindersOn===true;
    setFeed(true);
    renderFeed();
  } else {
    outB.style.display=""; inB.style.display="none";
    if(sub) sub.textContent=" — sign in to sync";
    setFeed(false);
    renderFriends();   // applies the signed-out state to the Friends sheet + clears the badge
  }
}

// Post a workout summary to the shared feed — shape + counts only, never raw weights.
async function cloudPublish(session){
  const lvl=settings.shareLevel||0;
  if(!cloudReady() || lvl<1) return;
  const ex=session.exercises||[];
  // Detail rises with the sharer's chosen level — weights are shared ONLY at level 3 (Full).
  // SAFETY: until the friends-only RLS is live (dbHardened), the activity table is world-readable,
  // so we cap the published detail at Summary regardless of the chosen level. No exercises/weights
  // ever reach a world-readable table; once hardened, the full chosen level is published.
  const eff = dbHardened ? lvl : 1;
  const summary={ name:session.name, sub:session.sub, sets:session.sets, mins:session.mins||0,
    prs:session.beaten||0, mtot:session.mtot||{}, vol:Math.round(session.totalVol||0), exN:ex.length, lvl:eff };
  if(session.top) summary.top = eff>=3 ? {name:session.top.name, w:session.top.w, r:session.top.r} : {name:session.top.name};
  if(eff>=2) summary.ex = ex.map(e=>({ name:e.name, sets:(e.sets||[]).map(s=> eff>=3 ? {w:s.w, r:s.r} : {r:s.r}) }));
  const row={ user_id:cloudUser.id, kind:"workout", summary };
  if(dbHardened) row.level=eff;     // the level column only exists post-migration
  try{ await sb.from("activity").insert(row); }catch(e){}
}
// auto-post when all three weekly rings are closed (needs sign-in + sharing on). Called from consistPost, i.e. only
// from action handlers; the caller saves settings and shows the toast (ringsSharedToast).
function weekKey(d){ d=d?new Date(d):new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate()-((d.getDay()+6)%7)); return d.toDateString(); }
function shareRingsClosed(sets){
  if(!cloudReady() || (settings.shareLevel||0)<1) return false;
  if(settings.consistPostWk===starWeekId() || settings.ringsSharedWk===weekKey()) return false;   // one consistency post a week
  settings.consistPostWk=starWeekId(); settings.ringsSharedWk=weekKey();   // ringsSharedWk: still read by older builds
  const row={ user_id:cloudUser.id, kind:"rings",
    summary:{ name:"Closed all 3 rings this week 🎯", sets:Math.round(sets)||0, mins:0, prs:0, mtot:{}, lvl:1 } };
  if(dbHardened) row.level=1;
  activityInsert(row);
  return true;
}
function activityInsert(row){ (async()=>{ try{ await sb.from("activity").insert(row); }catch(e){} })(); }   // best-effort, never awaited by the save flow
// The friends feed's consistency posts (stars spec §6.5), sent only from action handlers, never from render. Stars
// post a completed constellation or a star milestone (12/26/52/104), never a plain week, and only when signed in,
// sharing at level ≥ 1 and "post completed constellations" is on. One consistency post a week (consistPostWk): a
// star post wins over the closed rings; one that meets an earlier rings post that week waits in stars.postDue for
// the next week. A completion that can't be posted is marked posted, so switching sharing on later never back-posts.
// A completion whose moment starMoment held back (sr.quiet, an overreached week) waits in postDue too, and so does
// everything due for the rest of that week (stars.postHold), so the feed never shows a star the user wasn't shown.
// Returns { star, rings }: what was posted. The caller saves settings. o.rings:false (a setting, the deload button): no rings post.
function consistPost(sr, o){
  const out={ star:false, rings:false }, st=settings.stars, wk=starWeekId();
  const can = cloudReady() && (settings.shareLevel||0)>=1;
  if(st){
    if(sr && sr.quiet) st.postHold=wk;
    const P=new Set(st.posted||[]), live=[];
    if(sr && !sr.silent){ if(sr.constellation) live.push("c:"+sr.constellation.id); if(sr.milestone) live.push("m:"+sr.milestone); }
    const ids=[...new Set([...(st.postDue||[]), ...live])].filter(id=>!P.has(id));
    if(ids.length){
      if(!can || st.on===false || st.post===false){ st.posted=[...P, ...ids]; st.postDue=[]; }
      else if(st.postHold===wk || settings.consistPostWk===wk || settings.ringsSharedWk===weekKey()) st.postDue=ids;
      else {
        // the newest figure names the post; its star count is the count at completion (a deferred post keeps it)
        let at=0; const ends={}; SKY.forEach(f=>{ at+=f.pts.length; ends[f.id]=at; });
        const figs=ids.filter(id=>id[0]==="c").map(id=>SKY.find(f=>"c:"+f.id===id)).filter(Boolean).sort((a,b)=>ends[a.id]-ends[b.id]);
        const fig=figs[figs.length-1], m=Math.max(0, ...ids.filter(id=>id[0]==="m").map(id=>+id.slice(2)));
        const n = fig ? ends[fig.id] : m;
        const summary={ name: fig ? starCopy("feedConst",{name:fig.name, n}) : starCopy("feedMilestone",{n}), stars:n, mins:0, prs:0, mtot:{}, lvl:1 };
        if(fig) summary.cst=fig.id;
        const row={ user_id:cloudUser.id, kind:"stars", summary }; if(dbHardened) row.level=1;
        activityInsert(row);
        st.posted=[...P, ...ids]; st.postDue=[]; settings.consistPostWk=wk; settings.ringsSharedWk=weekKey();
        out.star = live.some(id=>ids.includes(id));   // the toast says "shared" only for what landed just now
        return out;
      }
    }
  }
  if(can && !(o && o.rings===false)){ const r=weekRings(); if(r && r.every(x=>x.val>=x.target)) out.rings=shareRingsClosed(r[1].val); }   // rings post: log handlers only
  return out;
}
// the rings post's toast: after the moment's own toast, so a finish still shows one toast at a time
function ringsSharedToast(cp){ if(!cp || !cp.rings) return;
  const busy=$("toast").classList.contains("show"); setTimeout(()=>toast("All rings closed — shared with your crew! 🎯", true), busy?3000:0); }

// ---- push reminders (signed-in only; a server cron sends the actual push — see PUSH-SETUP.md) ----
function urlB64ToUint8(b64){ const pad="=".repeat((4-b64.length%4)%4); const s=(b64+pad).replace(/-/g,"+").replace(/_/g,"/"); const raw=atob(s); const a=new Uint8Array(raw.length); for(let i=0;i<raw.length;i++) a[i]=raw.charCodeAt(i); return a; }
async function pushSubscribe(){
  if(!cloudReady()){ toast("Sign in first to get reminders."); return false; }
  if(!SUPA.vapidPublic){ toast("Reminders aren’t set up on the server yet."); return false; }
  const standalone = (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone===true;
  if(!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)){
    toast(standalone ? "Reminders aren’t supported on this browser." : "On iPhone, add Yalla to your Home Screen first — notifications only work from the installed app.");
    return false;
  }
  try{
    if(await Notification.requestPermission()!=="granted"){ toast("Allow notifications to get reminders."); return false; }
    const reg=await swReady(); if(!reg) return false;
    let sub=await reg.pushManager.getSubscription();
    if(!sub) sub=await reg.pushManager.subscribe({ userVisibleOnly:true, applicationServerKey:urlB64ToUint8(SUPA.vapidPublic) });
    await sb.from("push_subscriptions").upsert({ user_id:cloudUser.id, subscription:sub.toJSON(), reminders_on:true,
      last_workout_at:new Date(lastWorkoutTs()||Date.now()).toISOString(), updated_at:new Date().toISOString() });
    return true;
  }catch(e){ toast("Couldn’t enable reminders."); return false; }
}
async function pushDisable(){ try{ if(cloudReady()) await sb.from("push_subscriptions").update({ reminders_on:false, updated_at:new Date().toISOString() }).eq("user_id", cloudUser.id); }catch(e){} }
// Ensure a Web Push subscription exists for this device (shared by reminders + every social push,
// incl. messages). opts.prompt=true may ask for permission; opts.forMessages keeps workout reminders
// OFF for a brand-new subscriber who only opted into message pings (an existing preference is never
// flipped). Returns true if a subscription is in place.
async function pushEnsure(opts){
  opts=opts||{};
  if(!cloudReady() || !SUPA.vapidPublic) return false;
  if(!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) return false;
  let perm=Notification.permission;
  if(perm==="default" && opts.prompt){ try{ perm=await Notification.requestPermission(); }catch(e){ return false; } }
  if(perm!=="granted") return false;
  try{
    const reg=await swReady(); if(!reg) return false;
    let sub=await reg.pushManager.getSubscription();
    if(!sub) sub=await reg.pushManager.subscribe({ userVisibleOnly:true, applicationServerKey:urlB64ToUint8(SUPA.vapidPublic) });
    let exists=false; try{ const { data } = await sb.from("push_subscriptions").select("user_id").eq("user_id",cloudUser.id).maybeSingle(); exists=!!data; }catch(e){}
    const row={ user_id:cloudUser.id, subscription:sub.toJSON(), updated_at:new Date().toISOString() };
    if(!exists) row.reminders_on = opts.forMessages ? false : true;   // don't auto-enable nudges for a DM-only opt-in
    await sb.from("push_subscriptions").upsert(row);
    return true;
  }catch(e){ return false; }
}
// keep the server's "last workout" fresh so the 2-day timer is accurate
async function cloudTouchWorkout(){ try{ if(cloudReady()) await sb.from("push_subscriptions").update({ last_workout_at:new Date().toISOString(), last_reminded_at:null }).eq("user_id", cloudUser.id); }catch(e){} }

// ================= live workout sharing =================
// Broadcaster writes a row to live_sessions (RLS-gated to granted followers); watchers read it over
// Realtime. Going live pushes the granted followers (social-notify kind "live"). Watchers cheer /
// comment into live_reactions, streamed back to the broadcaster. See supabase/LIVE-SHARING.md.
let liveOn=false, _liveTimer=null, _liveLast=0, _liveRecvChan=null, _liveFeedChan=null, _liveFeedT=null, _liveViewChan=null, _liveViewOwner=null, _liveViewers=[], _liveAudienceCustom=false;
const _nameCache={};
function liveAvailable(){ return cloudReady() && dbHardened; }
async function liveName(uid){
  if(_nameCache[uid]) return _nameCache[uid];
  let n="A friend";
  try{ const { data } = await sb.from("profiles").select("display_name").eq("user_id",uid).maybeSingle(); if(data&&data.display_name) n=data.display_name; }catch(e){}
  _nameCache[uid]=n; return n;
}
// snapshot the workout currently on screen into the shape stored in live_sessions.state
function buildLiveState(){
  const groups=[...document.querySelectorAll("#exlist .group")];
  const ex=[], mtot={}; let vol=0, sets=0, top=null, curName="";
  const p=activePlan(), w=freeMode?null:(p&&p.workouts[curWk]);
  const name=freeMode?"Free workout":(w?w.name:"Workout");
  groups.forEach(g=>{
    const nm=g.dataset.ex; if(!nm) return;
    const ssets=[];
    g.querySelectorAll(".setrow").forEach(r=>{ const wel=r.querySelector(".w"), rel=r.querySelector(".r");
      const rv=rel?rel.value.trim():""; if(rv!==""){ ssets.push({ w:wel?wel.value.trim():"", r:rv }); } });
    if(ssets.length){
      curName=nm;
      const v=ssets.reduce((a,s)=>a+setVol(nm,s.w,s.r),0); vol+=v; sets+=ssets.length;
      const nt=topSet(ssets), tw=parseFloat(nt.w)||0, tr=parseInt(nt.r)||0;
      if(!top || tw>top.w) top={ name:nm, w:tw, r:tr };
      muscleFor(nm).forEach((grp,gi)=> mtot[grp]=(mtot[grp]||0)+v*(gi===0?1:0.5));
      ex.push({ name:nm, sets:ssets });
    }
  });
  const totalSets=groups.reduce((a,g)=>a+g.querySelectorAll(".setrow").length,0);
  if(!curName && groups.length) curName=groups[0].dataset.ex||"";
  return { name, exName:curName, doneSets:sets, totalSets, mins:Math.round(tmrElapsed()/60), vol:Math.round(vol), mtot, top, ex };
}
// the single two-people icon shows when either feature is available, and tints by state
function updateSocialWrap(){
  const wrap=$("socialWrap"); if(!wrap) return;
  const live = typeof liveAvailable==="function" && liveAvailable();
  const gym  = typeof gymAvailable==="function"  && gymAvailable();
  wrap.style.display = (live||gym) ? "" : "none";
  const btn=$("socialBtn"); if(btn){ btn.classList.toggle("live", !!liveOn); btn.classList.toggle("gym", !!_gymCode && !liveOn); }
}
function updateLiveRow(){
  const item=$("liveMenuItem"); if(item){ item.style.display = liveAvailable() ? "" : "none"; item.classList.toggle("on", liveOn); }
  const tog=$("liveToggle"); if(tog) tog.checked=liveOn;
  const _lt = liveOn ? "Sharing live" : "Share live";   // the label exists in two places
  [$("liveLbl"), $("livePanelLbl")].forEach(el=>{ if(el) el.textContent=_lt; });
  updateSocialWrap();
  if(liveAvailable() && _liveFollowers===null) loadLivePicks();   // know the audience up front (powers the summary)
  liveAudienceLabel();
}
// Inline per-session picker: tick friends to share THIS session with, independently of the start
// toggle. Always-on grantees (Settings → Friends) are shown locked-on — they always see you live.
let _liveFollowers=null;
function toggleLivePick(){
  const box=$("livePanel"); if(!box) return;   // the live panel: broadcast toggle + choose-who
  const open=box.hasAttribute("hidden");
  box.toggleAttribute("hidden", !open);
  if(open && _liveFollowers===null) loadLivePicks();
}
async function loadLivePicks(){
  const box=$("livePick"); if(!box) return;
  box.innerHTML='<span class="levelcap" style="padding:2px 4px;">Loading…</span>';
  let followers=[]; try{ if(cloudReady()){ const { data } = await sb.rpc("my_followers"); followers=data||[]; } }catch(e){}
  _liveFollowers=followers; recordAvatars(followers);
  // mirror the default: everyone's ticked until you narrow it
  if(!_liveAudienceCustom && !_liveViewers.length) _liveViewers = followers.map(u=>u.user_id);
  renderLivePicks(); liveAudienceLabel();
}
// sleek audience summary on the picker: a face-pile + one marked name ("Lea +2")
function liveAudienceLabel(){
  const lbl=$("livePickLbl"), faces=$("lpFaces"); if(!lbl) return;
  if(_liveFollowers===null){ if(faces) faces.innerHTML=""; lbl.textContent="Choose who can watch"; return; }
  if(!_liveFollowers.length){ if(faces) faces.innerHTML=""; lbl.textContent="No friends yet"; return; }
  const sel=_liveFollowers.filter(u=> u.live || _liveViewers.indexOf(u.user_id)>=0);
  if(faces) faces.innerHTML = sel.slice(0,4).map(u=> avatarHTML(u.display_name,{size:26,uid:u.user_id})).join('');
  if(!sel.length){ lbl.textContent="No one yet"; return; }
  const first=(sel[0].display_name||"A friend").split(" ")[0];
  lbl.textContent = sel.length>1 ? (first+" +"+(sel.length-1)) : first;
}
function renderLivePicks(){
  const box=$("livePick"); if(!box || _liveFollowers===null) return;
  if(!_liveFollowers.length){ box.innerHTML='<span class="levelcap" style="padding:2px 4px; line-height:1.4;">No friends yet — add some in Settings → Friends.</span>'; return; }
  box.innerHTML=_liveFollowers.map(u=>{
    const always=!!u.live, sel=_liveViewers.indexOf(u.user_id)>=0;
    const cls = always ? "livechip always" : ("livechip"+(sel?" on":""));
    return '<button type="button" class="'+cls+'" data-uid="'+esc(u.user_id)+'"'+(always?' disabled':'')+'>'+avatarHTML(u.display_name,{size:22,uid:u.user_id})+'<span class="lcname">'+esc(u.display_name||"A lifter")+'</span>'+(always?' ✓':'')+'</button>';
  }).join('');
  box.querySelectorAll('.livechip:not(.always)').forEach(c=> c.onclick=()=>{
    _liveAudienceCustom=true;   // you've taken control of the audience
    const uid=c.dataset.uid, i=_liveViewers.indexOf(uid);
    if(i>=0) _liveViewers.splice(i,1); else _liveViewers.push(uid);
    c.classList.toggle("on", i<0); liveAudienceLabel();
    if(liveOn) pushLiveViewers();   // already broadcasting → update who can watch + ping the new picks
  });
}
async function pushLiveViewers(){
  if(!liveOn || !cloudReady()) return;
  try{ await sb.from("live_sessions").update({ viewers:_liveViewers, updated_at:new Date().toISOString() }).eq("user_id",cloudUser.id); }catch(e){}
  notifyLive(_liveViewers);   // the edge function's 10-min mute dedupes anyone already pinged
}
async function goLive(viewers){
  if(!liveAvailable()){ toast("Sign in to share your workout live."); return false; }
  if(Array.isArray(viewers)){ _liveViewers = viewers.filter(Boolean); _liveAudienceCustom=true; }   // else keep the inline tick selection
  // default audience: everyone who follows you, unless you've narrowed it in the picker. Without this,
  // going live with no pre-granted/ticked friends would reach nobody.
  if(!_liveAudienceCustom){
    let fols=_liveFollowers;
    if(fols===null){ try{ const { data } = await sb.rpc("my_followers"); fols=data||[]; }catch(e){ fols=[]; } }
    _liveViewers = (fols||[]).map(u=>u.user_id);
  }
  liveOn=true; updateLiveRow();
  try{ await sb.from("live_sessions").upsert({ user_id:cloudUser.id, active:true, viewers:_liveViewers,
        started_at:new Date().toISOString(), updated_at:new Date().toISOString(), state:buildLiveState() }); }
  catch(e){ liveOn=false; updateLiveRow(); toast("Couldn't go live — is live sharing set up on the server?"); return false; }
  subscribeLiveReactions();
  notifyLive(_liveViewers);   // push the always-on grantees + this session's picked viewers
  toast("You're live — your friends just got a heads-up.", true);
  return true;
}
function liveTick(){
  if(!liveOn || !cloudReady()) return;
  const now=Date.now();
  if(now-_liveLast < 3500){ clearTimeout(_liveTimer); _liveTimer=setTimeout(liveTick, 1500); return; }   // throttle realtime writes
  _liveLast=now;
  try{ sb.from("live_sessions").upsert({ user_id:cloudUser.id, active:true, updated_at:new Date().toISOString(), state:buildLiveState() }); }catch(e){}
}
// navigator.serviceWorker.ready never rejects and never times out — with no registration (http, or a
// registration that failed) it simply hangs forever, leaving every awaiting caller pending.
// $ is getElementById, which returns the FIRST match — a duplicated id silently binds every handler to
// the wrong element and the feature just stops working, with nothing logged. Three had crept in.
function assertUniqueIds(){
  try{
    const seen=new Set(), dup=[];
    document.querySelectorAll("[id]").forEach(el=>{ if(seen.has(el.id)) dup.push(el.id); else seen.add(el.id); });
    if(dup.length) console.warn("[yalla] duplicate element ids:", [...new Set(dup)].join(", "));
  }catch(e){}
}
function swReady(ms){
  try{
    if(!("serviceWorker" in navigator)) return Promise.resolve(null);
    return Promise.race([navigator.serviceWorker.ready, new Promise(r=>setTimeout(()=>r(null), ms||5000))]);
  }catch(e){ return Promise.resolve(null); }
}
async function endLive(silent){
  if(!liveOn) return; liveOn=false; _liveViewers=[]; _liveAudienceCustom=false; clearTimeout(_liveTimer); updateLiveRow(); renderLivePicks();
  // clear the payload, not just the flag: the read policy has no `active` test, so a retained state
  // row stays readable by anyone with follows.live or a seat in the last session's viewers list
  try{ if(cloudReady()) await sb.from("live_sessions").update({ active:false, state:{}, viewers:[], updated_at:new Date().toISOString() }).eq("user_id",cloudUser.id); }catch(e){}
  if(_liveRecvChan){ try{ sb.removeChannel(_liveRecvChan); }catch(e){} _liveRecvChan=null; }
  if(!silent) toast("Live session ended.");
}
async function notifyLive(viewers){ try{ if(sb && sb.functions) await sb.functions.invoke("social-notify",{ body:{ kind:"live", viewers:viewers||[] } }); }catch(e){} }
// broadcaster: surface cheers/comments as they arrive
function subscribeLiveReactions(){
  if(!cloudReady() || _liveRecvChan) return;
  _liveRecvChan = sb.channel("live-mine-"+cloudUser.id)
    .on("postgres_changes",{ event:"INSERT", schema:"public", table:"live_reactions", filter:"owner=eq."+cloudUser.id }, async (p)=>{
      const r=p.new||{}, nm=await liveName(r.actor);
      toast(r.kind==="comment" ? ("💬 "+nm+": "+(r.body||"")) : ("👏 "+nm+" cheered you!"), true);
    }).subscribe();
}
// grant a follower live-watch access (owner-only update on the follows edge)
async function grantLive(uid, on, cb){
  if(!cloudReady()) return;
  try{ await sb.from("follows").update({ live:on }).eq("follower",uid).eq("followee",cloudUser.id); }
  catch(e){ if(cb) cb.checked=!on; toast("Couldn't update — is live sharing set up?"); return; }
  toast(on ? "They can now watch you live." : "Removed their live access.");
}

// ================= train together (gym check-in) =================
// Check in with a short code; friends with an accepted edge on the SAME code (set within the
// server's 4h window) appear here, so people at the same gym find each other. State lives on
// profiles.gym_code / gym_since; see supabase/schema-gym.sql. Feature is off until that's migrated.
let _gymCode=null, _gymBuddies=[], _gymTimer=null;
function gymAvailable(){ return cloudReady() && dbHardened; }
function randGymCode(){ const a="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; let s=""; for(let i=0;i<4;i++) s+=a[Math.floor(Math.random()*a.length)]; return s; }  // no ambiguous 0/O/1/I
async function loadGymBuddies(){
  if(!gymAvailable() || !_gymCode){ _gymBuddies=[]; return; }
  try{ const { data } = await sb.rpc("gym_buddies"); _gymBuddies=data||[]; recordAvatars(_gymBuddies); }catch(e){ _gymBuddies=[]; }
  updateGymRow();
}
async function gymCheckIn(code){
  code=(code||"").toUpperCase().replace(/\s+/g,"");
  if(!gymAvailable()){ toast("Sign in to train together with friends."); return; }
  if(!code){ toast("Enter a gym code first."); return; }
  try{ const { error } = await sb.rpc("set_gym_checkin",{ p_code:code }); if(error) throw error; }
  catch(e){ toast("Couldn't check in — is train-together set up on the server?"); return; }
  _gymCode=code; const p=$("gymPanel"); if(p) p.hidden=true;
  updateGymRow(); loadGymBuddies(); startGymPoll();
  toast("Checked in to "+code+" — friends here will see you.");
}
async function gymCheckOut(silent){
  const had=_gymCode; _gymCode=null; _gymBuddies=[]; stopGymPoll();
  if(gymAvailable() && had){ try{ await sb.rpc("set_gym_checkin",{ p_code:"" }); }catch(e){} }
  updateGymRow(); if(!silent && had) toast("Checked out.");
}
function startGymPoll(){ stopGymPoll(); if(!_gymCode) return; _gymTimer=setInterval(()=>{ if(document.visibilityState==="visible") loadGymBuddies(); }, 45000); }
function stopGymPoll(){ if(_gymTimer){ clearInterval(_gymTimer); _gymTimer=null; } }
function updateGymRow(){
  const item=$("gymMenuItem"); if(item){ item.style.display = gymAvailable() ? "" : "none"; }
  updateSocialWrap();
  if(!gymAvailable()) return;
  const on=!!_gymCode; if(item) item.classList.toggle("on", on);
  const lbl=$("gymLbl"), faces=$("gymFaces");   // menu label carries the state; the bar icon shows the face-pile
  if(lbl) lbl.textContent = on ? ("Leave "+_gymCode) : "Train together";
  if(faces){
    if(on && _gymBuddies.length){
      faces.innerHTML=_gymBuddies.slice(0,2).map(u=>'<span class="gymface" data-uid="'+esc(u.user_id)+'" data-nm="'+esc(u.display_name||"Friend")+'">'+avatarHTML(u.display_name,{size:18,uid:u.user_id})+'</span>').join('');
      faces.querySelectorAll(".gymface").forEach(el=> bindFriendTap(el, el.dataset.uid, el.dataset.nm));   // tap → profile, long-press → chat
    } else faces.innerHTML="";
  }
}
// restore an active check-in on launch (within the server's 4h window) so the row reflects it
async function gymRestore(){
  if(!gymAvailable()){ updateGymRow(); return; }
  try{ const { data } = await sb.from("profiles").select("gym_code,gym_since").eq("user_id",cloudUser.id).maybeSingle();
    if(data && data.gym_code && data.gym_since && (Date.now()-Date.parse(data.gym_since))<4*3600*1000){ _gymCode=data.gym_code; loadGymBuddies(); startGymPoll(); }
    else _gymCode=null;
  }catch(e){}
  updateGymRow();
}
function teardownGym(){ stopGymPoll(); _gymCode=null; _gymBuddies=[]; updateGymRow(); }

// ---- viewer: live cards in the feed ----
async function renderLiveCards(){
  const strip=$("liveStrip"); if(!strip || !cloudReady()){ if(strip) strip.innerHTML=""; return; }
  let rows=[];
  try{ const { data } = await sb.from("live_sessions").select("user_id,state,updated_at").eq("active",true); rows=data||[]; }
  catch(e){ strip.innerHTML=""; return; }
  // RLS already limits this to friends who granted us access — also drop self + stale sessions (cron closes them later)
  const fresh=rows.filter(r=> r.user_id!==cloudUser.id && (Date.now()-Date.parse(r.updated_at)) < 15*60*1000);
  if(!fresh.length){ strip.innerHTML=""; return; }
  let names={};
  { const ids=fresh.map(r=>r.user_id); let profs=[];
    try{ const { data, error } = await sb.from("profiles").select("user_id,display_name,avatar_color,avatar_emoji,avatar_icon,avatar_style,last_seen").in("user_id",ids); if(error) throw error; profs=data||[]; }
    catch(e){ try{ const { data } = await sb.from("profiles").select("user_id,display_name").in("user_id",ids); profs=data||[]; }catch(e2){} }
    profs.forEach(p=>{ names[p.user_id]=p.display_name; _nameCache[p.user_id]=p.display_name; }); recordAvatars(profs);
  }
  strip.innerHTML='<div class="ed-label">Live now</div>';
  fresh.forEach(r=>{
    const s=r.state||{}, who=names[r.user_id]||"A friend";
    const card=document.createElement("div"); card.className="livecard";
    card.innerHTML=avatarHTML(who,{size:44,live:true,uid:r.user_id})+'<div style="flex:1; min-width:0;"><div style="font-weight:700;">'+esc(who)+' is training live</div>'
      +'<div class="levelcap" style="margin-top:2px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">'+esc(s.name||"Workout")+(s.exName?' · '+esc(s.exName):'')+' · '+(s.doneSets||0)+' sets</div></div><span class="livego">Watch<span class="ovchev lnkchev">›</span></span>';
    card.onclick=()=>openLiveView(r.user_id, who);
    strip.appendChild(card);
  });
}
function subscribeLiveFeed(){
  if(!cloudReady() || _liveFeedChan) return;
  _liveFeedChan = sb.channel("live-feed")
    .on("postgres_changes",{ event:"*", schema:"public", table:"live_sessions" }, ()=>{ clearTimeout(_liveFeedT); _liveFeedT=setTimeout(()=>{ renderLiveCards(); renderPresenceRail(); }, 400); })
    .subscribe();
}
// the live-view sheet: a friend's session in real time + cheer/comment
async function openLiveView(ownerId, who){
  if(!cloudReady() || !ownerId) return;
  _liveViewOwner=ownerId;
  who = who || await liveName(ownerId);
  $("liveWho").textContent = who+" — live";
  $("liveBody").innerHTML='<div id="liveStats"><div class="levelcap">Connecting…</div></div>'
    +'<div class="feedbar" id="liveActions" style="margin-top:12px; display:none;"><button class="cheerbtn" id="liveCheer">'+ICON.flame+'<span class="cheerc">Cheer</span></button></div>'
    +'<div id="liveReactions" class="commlist" style="margin-top:8px;"></div>'
    +'<div class="commadd" id="liveCommAdd" style="display:none;"><input class="comminput" id="liveCommInput" placeholder="Say something nice…" maxlength="240"><button class="btn sm" id="liveCommSend">Send</button></div>';
  openSheet("Live");
  $("liveCheer").onclick=()=>sendLiveReaction("cheer");
  $("liveCommSend").onclick=()=>{ const inp=$("liveCommInput"), v=(inp.value||"").trim(); if(!v) return; inp.value=""; sendLiveReaction("comment", v); };
  let st=null, active=true;
  try{ const { data } = await sb.from("live_sessions").select("state,active").eq("user_id",ownerId).maybeSingle(); if(data){ st=data.state; active=data.active!==false; } }catch(e){}
  if(!st){ $("liveStats").innerHTML='<div class="levelcap">This live session isn\'t available right now.</div>'; return; }
  renderLiveStats(st, active, who);
  loadLiveReactions(ownerId);
  if(_liveViewChan){ try{ sb.removeChannel(_liveViewChan); }catch(e){} }
  _liveViewChan = sb.channel("live-view-"+ownerId)
    .on("postgres_changes",{ event:"*", schema:"public", table:"live_sessions", filter:"user_id=eq."+ownerId }, (p)=>{ const row=p.new||{}; renderLiveStats(row.state||st, row.active!==false, who); })
    .on("postgres_changes",{ event:"INSERT", schema:"public", table:"live_reactions", filter:"owner=eq."+ownerId }, ()=> loadLiveReactions(ownerId))
    .subscribe();
}
function renderLiveStats(s, active, who){
  const box=$("liveStats"); if(!box) return; s=s||{};
  const acts=$("liveActions"), add=$("liveCommAdd");
  if(!active){
    box.innerHTML='<div class="ovbig">'+esc(who||"They")+' finished 🎉</div><p class="levelcap" style="margin-top:6px;">This live session ended — their workout is in the feed below.</p>';
    if(acts) acts.style.display="none"; if(add) add.style.display="none"; return;
  }
  if(acts) acts.style.display=""; if(add) add.style.display="";
  const chips=[["Exercise", s.exName||"—"],["Sets",(s.doneSets||0)+(s.totalSets?"/"+s.totalSets:"")],["Volume", s.vol?fmtKg(s.vol):"—"],["Time",(s.mins||0)+" min"]];
  let h='<div class="ovbig">'+esc(s.name||"Workout")+'</div>';
  h+='<div style="text-align:center; margin:12px 0 2px;"><canvas id="liveRadar" width="320" height="320" style="width:170px;height:170px;"></canvas></div>';
  h+='<div class="row" style="gap:8px; margin:10px 0;">'+chips.map(c=>'<div style="flex:1; background:var(--row); border-radius:14px; padding:10px 4px; text-align:center;"><div style="font-weight:700; font-size:var(--t-lg);">'+esc(c[1])+'</div><div class="levelcap" style="margin-top:2px;">'+esc(c[0])+'</div></div>').join('')+'</div>';
  if(s.ex && s.ex.length){
    h+='<div class="ed-label">So far</div>'+s.ex.map(e=>{ const txt=(e.sets||[]).map(x=> (x.w!=null&&x.w!=="")? x.w+"kg×"+(x.r||0) : (x.r||0)+" reps").join(" · ");
      return '<div style="padding:8px 4px; border-bottom:.5px solid var(--line);"><div style="font-weight:600;">'+esc(e.name)+'</div><div class="levelcap" style="margin-top:2px;">'+esc(txt)+'</div></div>'; }).join('');
  }
  box.innerHTML=h; const cv=$("liveRadar"); if(cv) miniRadar(cv, s.mtot||{});
}
async function sendLiveReaction(kind, body){
  if(!cloudReady() || !_liveViewOwner) return;
  try{ await sb.from("live_reactions").insert({ owner:_liveViewOwner, actor:cloudUser.id, kind, body: kind==="comment"?body:null }); }
  catch(e){ toast("Couldn't send — are you allowed to watch this session?"); return; }
  if(kind==="cheer") toast("Cheer sent 👏");
  loadLiveReactions(_liveViewOwner);
}
async function loadLiveReactions(ownerId){
  const box=$("liveReactions"); if(!box || !ownerId) return;
  let rows=[];
  try{ const { data } = await sb.from("live_reactions").select("actor,kind,body,created_at").eq("owner",ownerId).order("created_at",{ascending:true}).limit(60); rows=data||[]; }catch(e){ return; }
  let names={};
  try{ const ids=[...new Set(rows.map(r=>r.actor))]; if(ids.length){ const { data } = await sb.from("profiles").select("user_id,display_name").in("user_id",ids); (data||[]).forEach(p=>names[p.user_id]=p.display_name); } }catch(e){}
  box.innerHTML = rows.map(r=>{ const nm=r.actor===cloudUser.id?"You":(names[r.actor]||"Friend");
    return '<div class="commrow">'+(r.kind==="cheer" ? ('👏 <b>'+esc(nm)+'</b> cheered') : ('<b>'+esc(nm)+'</b> '+esc(r.body||"")))+'</div>'; }).join('');
}
function teardownLive(){
  liveOn=false; clearTimeout(_liveTimer);
  [_liveRecvChan,_liveFeedChan,_liveViewChan].forEach(ch=>{ if(ch){ try{ sb && sb.removeChannel(ch); }catch(e){} } });
  _liveRecvChan=_liveFeedChan=_liveViewChan=_liveViewOwner=null;
  updateLiveRow();
}
// ================= end-to-end encrypted direct messages =================
// 1-on-1 only. Plaintext never leaves the device; Supabase stores ciphertext + IVs + public keys.
// Crypto: ECDH P-256 identity keys → static shared secret → HKDF-SHA256 per message → AES-256-GCM.
// Private key lives in IndexedDB (device-local) + an optional passphrase-wrapped cloud backup.
// Full design + tradeoffs: supabase/MESSAGING.md. Schema: supabase/schema-messages.sql.
const E2E_DB="yalla-e2e", E2E_STORE="keys", E2E_REC="idkey";
let _e2eKeys=null;                 // { priv, pub, jwk, pubB64 } once loaded/generated
const _e2ePubCache={};             // uid -> friend's public CryptoKey
const _e2eSecretCache={};          // uid -> raw ECDH shared bits (ArrayBuffer)
let _e2eNeedsRestore=false;        // a cloud backup exists but this device has no key yet
let _msgChan=null, _msgThreadChan=null, _msgThreadUid=null, _msgUnread=0;

// --- tiny IndexedDB store for the identity private key (never synced, never localStorage) ---
function _e2eOpen(){
  return new Promise((res,rej)=>{ let r; try{ r=indexedDB.open(E2E_DB,1); }catch(e){ return rej(e); }
    r.onupgradeneeded=()=>{ try{ r.result.createObjectStore(E2E_STORE); }catch(e){} };
    r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error); });
}
async function _e2eIdbGet(k){ const db=await _e2eOpen(); return new Promise((res,rej)=>{ const rq=db.transaction(E2E_STORE,"readonly").objectStore(E2E_STORE).get(k); rq.onsuccess=()=>res(rq.result); rq.onerror=()=>rej(rq.error); }); }
async function _e2eIdbSet(k,v){ const db=await _e2eOpen(); return new Promise((res,rej)=>{ const rq=db.transaction(E2E_STORE,"readwrite").objectStore(E2E_STORE).put(v,k); rq.onsuccess=()=>res(); rq.onerror=()=>rej(rq.error); }); }

// load the device identity keypair, generating + persisting one on first use
async function e2eGetKeys(){
  if(_e2eKeys) return _e2eKeys;
  let rec=null; try{ rec=await _e2eIdbGet(E2E_REC); }catch(e){}
  let jwk = rec ? (rec.jwk || rec) : null;          // {jwk,uid} envelope, or a legacy bare JWK
  if(jwk && !(rec && rec.jwk) && cloudReady()){      // migrate a legacy record in place, stamping its owner
    try{ await _e2eIdbSet(E2E_REC, {jwk, uid:cloudUser.id}); }catch(e){}
  }
  if(jwk){
    try{
      const priv=await crypto.subtle.importKey("jwk",jwk,{name:"ECDH",namedCurve:"P-256"},true,["deriveBits"]);
      const pub=await crypto.subtle.importKey("jwk",{crv:jwk.crv,kty:jwk.kty,x:jwk.x,y:jwk.y,ext:true},{name:"ECDH",namedCurve:"P-256"},true,[]);
      _e2eKeys={priv,pub,jwk}; return _e2eKeys;
    }catch(e){ jwk=null; }
  }
  const kp=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},true,["deriveBits"]);
  const privJwk=await crypto.subtle.exportKey("jwk",kp.privateKey);
  await _e2eIdbSet(E2E_REC, {jwk:privJwk, uid: cloudReady()?cloudUser.id:null});
  _e2eKeys={priv:kp.privateKey,pub:kp.publicKey,jwk:privJwk};
  return _e2eKeys;
}
async function e2ePublicB64(){ const k=await e2eGetKeys(); if(!k.pubB64) k.pubB64=bufToB64(await crypto.subtle.exportKey("raw",k.pub)); return k.pubB64; }
// publish my public key so friends can encrypt to me (upsert only when it changed)
async function e2ePublish(){
  try{ const pub=await e2ePublicB64();
    let cur=null; try{ const { data } = await sb.from("e2e_keys").select("public_key").eq("user_id",cloudUser.id).maybeSingle(); cur=data&&data.public_key; }catch(e){}
    if(cur!==pub) await sb.from("e2e_keys").upsert({ user_id:cloudUser.id, public_key:pub, updated_at:new Date().toISOString() });
  }catch(e){}
}
// per-friend keys → shared secret → per-message AES key (HKDF with the message's own salt)
async function e2eFriendPub(uid){
  if(_e2ePubCache[uid]) return _e2ePubCache[uid];
  let b64=null; try{ const { data } = await sb.from("e2e_keys").select("public_key").eq("user_id",uid).maybeSingle(); b64=data&&data.public_key; }catch(e){}
  if(!b64) return null;
  try{ const key=await crypto.subtle.importKey("raw",b64ToBuf(b64),{name:"ECDH",namedCurve:"P-256"},false,[]); _e2ePubCache[uid]=key; return key; }catch(e){ return null; }
}
async function e2eShared(uid){
  if(_e2eSecretCache[uid]) return _e2eSecretCache[uid];
  const keys=await e2eGetKeys(), pub=await e2eFriendPub(uid); if(!pub) return null;
  const bits=await crypto.subtle.deriveBits({name:"ECDH",public:pub},keys.priv,256);
  _e2eSecretCache[uid]=bits; return bits;
}
async function e2eMsgKey(uid,salt){
  const bits=await e2eShared(uid); if(!bits) return null;
  const hk=await crypto.subtle.importKey("raw",bits,"HKDF",false,["deriveKey"]);
  return crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt,info:new TextEncoder().encode("yalla-dm-v1")},hk,{name:"AES-GCM",length:256},false,["encrypt","decrypt"]);
}
async function e2eEncrypt(uid,text){
  const salt=crypto.getRandomValues(new Uint8Array(16)), iv=crypto.getRandomValues(new Uint8Array(12));
  const key=await e2eMsgKey(uid,salt); if(!key) return null;
  const ct=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,new TextEncoder().encode(text));
  return { ciphertext:bufToB64(ct), iv:bufToB64(iv), salt:bufToB64(salt) };
}
async function e2eDecrypt(uid,row){   // returns null if undecryptable (key rotated / not ours)
  try{ const key=await e2eMsgKey(uid,b64ToBuf(row.salt)); if(!key) return null;
    const pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:b64ToBuf(row.iv)},key,b64ToBuf(row.ciphertext));
    return new TextDecoder().decode(pt);
  }catch(e){ return null; }
}

// --- optional passphrase-wrapped backup of the private key (so a new device keeps history) ---
async function e2eBackupExists(){ if(!cloudReady()) return false; try{ const { data } = await sb.from("key_backups").select("user_id").eq("user_id",cloudUser.id).maybeSingle(); return !!data; }catch(e){ return false; } }
async function e2eBackup(pass){
  if(!cloudReady() || !pass) return false;
  try{ const keys=await e2eGetKeys();
    const salt=crypto.getRandomValues(new Uint8Array(16)), iv=crypto.getRandomValues(new Uint8Array(12));
    const key=await deriveKey(pass,salt,PBKDF2_ITERS), ct=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,new TextEncoder().encode(JSON.stringify(keys.jwk)));
    await sb.from("key_backups").upsert({ user_id:cloudUser.id, salt:bufToB64(salt), iv:bufToB64(iv), wrapped:bufToB64(ct), iterations:PBKDF2_ITERS, updated_at:new Date().toISOString() });
    return true;
  }catch(e){ return false; }
}
async function e2eRestore(pass){
  if(!cloudReady() || !pass) return false;
  let row=null;
  try{ const { data } = await sb.from("key_backups").select("salt,iv,wrapped,iterations").eq("user_id",cloudUser.id).maybeSingle(); row=data; }
  catch(e){ try{ const { data } = await sb.from("key_backups").select("salt,iv,wrapped").eq("user_id",cloudUser.id).maybeSingle(); row=data; }catch(e2){} }
  if(!row) return false;
  try{
    const key=await deriveKey(pass,b64ToBuf(row.salt),row.iterations||PBKDF2_LEGACY);
    const pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:b64ToBuf(row.iv)},key,b64ToBuf(row.wrapped));
    const jwk=JSON.parse(new TextDecoder().decode(pt));
    await crypto.subtle.importKey("jwk",jwk,{name:"ECDH",namedCurve:"P-256"},true,["deriveBits"]);   // validate
    await _e2eIdbSet(E2E_REC, {jwk, uid: cloudReady()?cloudUser.id:null});   // restored key belongs to this account
    _e2eKeys=null; _e2eNeedsRestore=false;
    for(const k in _e2eSecretCache) delete _e2eSecretCache[k];
    await e2eGetKeys(); await e2ePublish();
    return true;
  }catch(e){ return false; }   // wrong passphrase / corrupt
}

// --- transport + state ---
async function e2eInit(){
  if(!cloudReady()) return;
  let rec=null; try{ rec=await _e2eIdbGet(E2E_REC); }catch(e){}
  // records written before this change are a bare JWK with no owner — treat those as mine (there was
  // only ever one account per device then), and stamp the owner on the way past.
  const recUid = (rec && rec.uid) ? rec.uid : null;
  const jwk = rec ? (rec.jwk || rec) : null;
  if(jwk && recUid && recUid!==cloudUser.id){
    // another account's key is sitting here. Do NOT publish it, and do NOT delete it — without a
    // passphrase backup, deleting it would destroy that account's own message history on its own device.
    _e2eKeys=null;
    _e2eNeedsRestore = await e2eBackupExists() === true;
    subscribeMessages(); refreshUnread(); return;
  }
  if(jwk){ try{ await e2eGetKeys(); await e2ePublish(); }catch(e){} _e2eNeedsRestore=false; }
  else if(await e2eBackupExists()){ _e2eNeedsRestore=true; }   // defer: let the user restore before we mint a new key
  else { try{ await e2eGetKeys(); await e2ePublish(); }catch(e){} }   // brand-new user → fresh key
  subscribeMessages();
  refreshUnread();
  // If notifications are already permitted, make sure a push subscription exists so the user gets
  // message pings (they may have a key but never have toggled reminders). Silent — never prompts.
  try{ if(window.Notification && Notification.permission==="granted") pushEnsure({ forMessages:true }); }catch(e){}
}
function subscribeMessages(){
  if(!cloudReady() || _msgChan) return;
  _msgChan=sb.channel("dm-"+cloudUser.id)
    .on("postgres_changes",{ event:"INSERT", schema:"public", table:"direct_messages", filter:"recipient=eq."+cloudUser.id }, async (p)=>{
      const r=p.new||{};
      const sheetOpen=$("sheetMessages")&&$("sheetMessages").classList.contains("show");
      if(_msgThreadUid && r.sender===_msgThreadUid){ await renderThread(_msgThreadUid); markRead(_msgThreadUid); return; }
      _msgUnread++; setMsgBadge(_msgUnread);
      if(sheetOpen && !_msgThreadUid){ renderConversations(); }
      else { const nm=await liveName(r.sender), txt=await e2eDecrypt(r.sender,r); showMsgNotif(r.sender, nm, txt||"sent you a message"); }
    }).subscribe();
}
// sleek in-app banner for an incoming message — avatar + name + preview, tap to open the chat
let _notifT=null;
function showMsgNotif(uid, name, text){
  const n=$("msgNotif"); if(!n) return;
  n.innerHTML=avatarHTML(name,{size:40,uid:uid})+'<div class="notif-main"><div class="notif-nm">'+esc(name||"Friend")+'</div><div class="notif-tx">'+esc(text||"")+'</div></div>';
  n.onclick=()=>{ hideMsgNotif(); openChat(uid, name); };
  n.classList.add("show"); haptic(10);
  clearTimeout(_notifT); _notifT=setTimeout(hideMsgNotif, 4200);
}
function hideMsgNotif(){ const n=$("msgNotif"); if(n) n.classList.remove("show"); clearTimeout(_notifT); }
function teardownMessages(){
  [_msgChan,_msgThreadChan].forEach(ch=>{ if(ch){ try{ sb&&sb.removeChannel(ch); }catch(e){} } });
  _msgChan=_msgThreadChan=_msgThreadUid=null; _e2eKeys=null; _e2eNeedsRestore=false;
  for(const k in _e2ePubCache) delete _e2ePubCache[k];
  for(const k in _e2eSecretCache) delete _e2eSecretCache[k];
  _msgUnread=0; setMsgBadge(0);
}
function setMsgBadge(n){
  const b=$("msgRailBadge"); if(b){ b.textContent=n>9?"9+":String(n); b.style.display=n>0?"":"none"; }
  const fb=$("friendsMsgBadge"); if(fb){ fb.textContent=n>9?"9+":String(n); fb.style.display=n>0?"":"none"; }
  const ic=$("ovMessages"); if(ic) ic.classList.toggle("has-unread", n>0);   // accent only when there's something unread
}
async function refreshUnread(){
  if(!cloudReady()){ setMsgBadge(0); return; }
  try{ const { count } = await sb.from("direct_messages").select("id",{count:"exact",head:true}).eq("recipient",cloudUser.id).is("read_at",null); _msgUnread=count||0; }
  catch(e){ _msgUnread=0; }
  setMsgBadge(_msgUnread);
}
async function sendMessage(uid,text){
  text=(text||"").trim(); if(!text || !cloudReady()) return false;
  if(text.length>4000) text=text.slice(0,4000);
  const enc=await e2eEncrypt(uid,text);
  if(!enc){ toast("Can't encrypt yet — your friend hasn't opened messaging."); return false; }
  try{ await sb.from("direct_messages").insert({ sender:cloudUser.id, recipient:uid, ciphertext:enc.ciphertext, iv:enc.iv, salt:enc.salt }); }
  catch(e){ toast("Couldn't send — are you still friends?"); return false; }
  notifyMessage(uid);   // best-effort push to the recipient (generic — the body stays E2E)
  return true;
}
// best-effort push to the recipient (social-notify "message" kind). Generic body only — the server
// can't see the plaintext, so the notification never carries message content. No-op if not deployed.
async function notifyMessage(uid){ try{ if(sb && sb.functions && uid) await sb.functions.invoke("social-notify",{ body:{ kind:"message", target:uid } }); }catch(e){} }
async function loadThread(uid){
  if(!cloudReady()) return [];
  const filt="and(sender.eq."+cloudUser.id+",recipient.eq."+uid+"),and(sender.eq."+uid+",recipient.eq."+cloudUser.id+")";
  let rows=[];
  // edited_at may not exist yet (migration is a separate step) — degrade to the core columns if so,
  // so loading never silently fails and messages don't vanish.
  try{ const { data, error } = await sb.from("direct_messages").select("id,sender,recipient,ciphertext,iv,salt,created_at,read_at,edited_at").or(filt).order("created_at",{ascending:true}).limit(500);
    if(error) throw error; rows=data||[]; }
  catch(e){ try{ const { data } = await sb.from("direct_messages").select("id,sender,recipient,ciphertext,iv,salt,created_at,read_at").or(filt).order("created_at",{ascending:true}).limit(500); rows=data||[]; }catch(e2){} }
  const out=[];
  for(const r of rows){ const other=r.sender===cloudUser.id?r.recipient:r.sender;
    out.push({ id:r.id, mine:r.sender===cloudUser.id, text:await e2eDecrypt(other,r), at:r.created_at, read:!!r.read_at, edited:!!r.edited_at }); }
  return out;
}
async function loadConversations(){
  if(!cloudReady()) return [];
  let rows=[];
  try{ const { data } = await sb.from("direct_messages").select("id,sender,recipient,ciphertext,iv,salt,created_at,read_at")
      .or("sender.eq."+cloudUser.id+",recipient.eq."+cloudUser.id).order("created_at",{ascending:false}).limit(400); rows=data||[]; }catch(e){}
  const byUid={};
  for(const r of rows){ const other=r.sender===cloudUser.id?r.recipient:r.sender;
    if(!byUid[other]) byUid[other]={ uid:other, last:r, unread:0 };
    if(r.recipient===cloudUser.id && !r.read_at) byUid[other].unread++;
  }
  const list=Object.values(byUid);   // already recency-ordered (rows were desc)
  const ids=list.map(c=>c.uid);
  if(ids.length){ try{ const { data } = await sb.from("profiles").select("user_id,display_name,avatar_color,avatar_emoji,avatar_icon,avatar_style,last_seen").in("user_id",ids); recordAvatars(data);
    (data||[]).forEach(p=>{ _nameCache[p.user_id]=p.display_name; const c=list.find(x=>x.uid===p.user_id); if(c){ c.name=p.display_name; c.last_seen=p.last_seen; } }); }catch(e){} }
  for(const c of list) c.preview=await e2eDecrypt(c.uid,c.last);
  return list;
}
async function markRead(uid){
  if(!cloudReady()) return;
  // Via an RPC, not a direct UPDATE. The old "mark read dm" policy granted UPDATE on the whole ROW —
  // Postgres RLS has no column scope — so a recipient could rewrite the sender's ciphertext, and since
  // both parties hold the same static ECDH secret the GCM tag proved nothing. The policy is dropped;
  // dm_mark_read is a security-definer function that can only ever touch read_at.
  try{ const { error } = await sb.rpc("dm_mark_read", { p_sender: uid }); if(error) throw error; }
  catch(e){ /* read receipts are cosmetic — never block opening a thread */ }
  refreshUnread();
}

// --- messaging UI (a single sheet that swaps between the conversation list and an open thread) ---
// open a 1-on-1 chat directly (tapped a friend's avatar, or a "new message" push ?dm=senderId)
async function openChat(uid, name){
  if(!cloudReady() || !dbHardened || !uid){ toast("Sign in to message your friends."); return; }
  openSheet("Messages");
  if(_e2eNeedsRestore){ renderRestoreGate(); return; }
  try{ await e2eGetKeys(); }catch(e){}
  openThread(uid, name || await liveName(uid));
}
function openDMFromLink(uid){ return openChat(uid); }   // push deep-link entry
// friend gesture: short tap → their profile (activity log), long-press → chat. Skips taps that land
// on an action button (Remove/Follow). Used on friend rows + avatars.
function bindFriendTap(el, uid, name){
  let timer=null, fired=false, armed=false, dx=0, dy=0;
  el.addEventListener("pointerdown", e=>{
    if(e.target.closest(".factions, button, input, label")){ armed=false; return; }
    armed=true; fired=false; dx=e.clientX; dy=e.clientY;
    clearTimeout(timer); timer=setTimeout(()=>{ fired=true; haptic(10); openChat(uid, name); }, 320);
  });
  el.addEventListener("pointermove", e=>{ if(armed && (Math.abs(e.clientX-dx)>10 || Math.abs(e.clientY-dy)>10)) clearTimeout(timer); });
  el.addEventListener("pointercancel", ()=>{ clearTimeout(timer); armed=false; });
  el.addEventListener("pointerup", ()=>{ clearTimeout(timer); if(!armed) return; armed=false; if(fired) return; openProfile(uid, name); });
}
async function openMessages(){
  if(!cloudReady() || !dbHardened){ toast("Sign in to message your friends."); return; }
  _msgThreadUid=null;
  if(_msgThreadChan){ try{ sb.removeChannel(_msgThreadChan); }catch(e){} _msgThreadChan=null; }
  openSheet("Messages");
  if(_e2eNeedsRestore){ renderRestoreGate(); return; }
  try{ await e2eGetKeys(); }catch(e){}
  renderConversations();
}
function renderRestoreGate(){
  const b=$("msgBody"); if(!b) return;
  $("msgTitle").textContent="Messages"; $("msgBack").style.display="none";
  b.innerHTML='<div class="msg-empty"><div class="msg-empty-ic">'+ICON.lock+'</div>'
    +'<p>Your encrypted messages are locked on this device. Enter your message passphrase to unlock your history.</p>'
    +'<input class="comminput" id="msgRestorePass" type="password" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="Message passphrase" style="margin:12px 0; width:100%;">'
    +'<button class="btn wide" id="msgRestoreBtn">Unlock my messages</button>'
    +'<button class="btn tinted wide" id="msgFreshBtn" style="margin-top:8px;">Start fresh on this device</button>'
    +'<p class="levelcap" style="margin-top:12px; line-height:1.45;">Starting fresh makes a new key — older messages stay locked, and friends will message your new key from now on.</p></div>';
  $("msgRestoreBtn").onclick=async()=>{ const v=$("msgRestorePass").value||""; if(!v) return; const ok=await e2eRestore(v);
    if(ok){ toast("Messages unlocked"); renderConversations(); } else toast("Wrong passphrase — try again."); };
  $("msgFreshBtn").onclick=async()=>{ if(!confirm("Start fresh? Older messages will stay locked on this device.")) return;
    _e2eNeedsRestore=false; try{ await e2eGetKeys(); await e2ePublish(); }catch(e){} renderConversations(); };
}
async function renderConversations(){
  _msgThreadUid=null; closeReactUI();
  if(_msgThreadChan){ try{ sb.removeChannel(_msgThreadChan); }catch(e){} _msgThreadChan=null; }
  const ttl=$("msgTitle"); ttl.textContent="Messages"; ttl.classList.remove("tappable"); ttl.onclick=null; $("msgBack").style.display="none";
  const b=$("msgBody"); if(!b) return;
  b.innerHTML='<div class="levelcap" style="margin:10px 0;">Loading…</div>';
  const convos=await loadConversations();
  let friends=[]; try{ const { data } = await sb.rpc("my_following"); friends=(data||[]).filter(u=>u.status==="accepted"); recordAvatars(friends); }catch(e){}
  const have=new Set(convos.map(c=>c.uid));
  const fresh=friends.filter(f=>!have.has(f.user_id));
  let h="";
  if(convos.length){
    h+=convos.map(c=>{ const nm=c.name||_nameCache[c.uid]||"Friend";
      const locked=c.preview==null, prevTxt=locked?"can't decrypt":((c.last.sender===cloudUser.id?"You: ":"")+c.preview);
      const prevHTML=(locked?ICON.lock+" ":"")+esc(prevTxt.length>56?prevTxt.slice(0,56)+"…":prevTxt);
      return '<div class="msg-convo" data-uid="'+esc(c.uid)+'" data-nm="'+esc(nm)+'">'+statusAvatar(nm,{size:46,uid:c.uid},isOnline(c.last_seen))
        +'<div class="msg-convo-main"><div class="msg-convo-top"><span class="msg-convo-nm">'+esc(nm)+'</span><span class="msg-convo-time">'+esc(agoStr(Date.parse(c.last.created_at)))+'</span></div>'
        +'<div class="msg-convo-prev'+(c.unread?' unread':'')+'">'+prevHTML+'</div></div>'
        +(c.unread?'<span class="msg-dot"></span>':'')+'</div>'; }).join('');
  }
  if(fresh.length){
    h+='<div class="ed-label">Start a chat</div>'+fresh.map(f=>{ const nm=f.display_name||"Friend";
      return '<div class="msg-convo" data-uid="'+esc(f.user_id)+'" data-nm="'+esc(nm)+'">'+statusAvatar(nm,{size:46,uid:f.user_id},isOnline(f.last_seen))
        +'<div class="msg-convo-main"><div class="msg-convo-nm">'+esc(nm)+'</div><div class="msg-convo-prev">Tap to message</div></div></div>'; }).join('');
  }
  if(!convos.length && !fresh.length){ h='<div class="msg-empty"><div class="msg-empty-ic">'+ICON.chat+'</div><p>No friends to message yet. Add friends in the Friends hub, then come back.</p></div>'; }
  // A single, dismissible nudge at the top — notifications first, otherwise a one-time offer to back up
  // the key. Backup stays permanently reachable from the Friends hub, so dismissing loses nothing.
  const canNotif = !!(window.Notification && SUPA.vapidPublic && ("PushManager" in window));
  let banner="";
  if(canNotif && Notification.permission==="default" && !settings.msgNotifDismissed){
    banner='<div class="msg-notif" id="msgNotifBanner"><span>'+ICON.bell+' Get a ping when a friend messages you?</span>'
      +'<span class="msg-notif-act"><button class="btn sm" id="msgNotifOn">Turn on</button><button class="msg-notif-x" id="msgNotifNo" aria-label="Not now">×</button></span></div>';
  } else if(!settings.msgBackupDismissed && !(await e2eBackupExists())){
    banner='<div class="msg-notif" id="msgBackupBanner"><span>'+ICON.lock+' Back up your message key to keep history on new devices</span>'
      +'<span class="msg-notif-act"><button class="btn sm" id="msgBackupOn">Back up</button><button class="msg-notif-x" id="msgBackupNo" aria-label="Not now">×</button></span></div>';
  }
  b.innerHTML=banner+h;
  b.querySelectorAll(".msg-convo[data-uid]").forEach(el=> el.onclick=()=>openThread(el.dataset.uid, el.dataset.nm));
  const non=$("msgNotifOn"); if(non) non.onclick=async()=>{ const ok=await pushEnsure({ prompt:true, forMessages:true });
    toast(ok?"Notifications on — we'll ping you about new messages.":"Couldn't turn on notifications."); renderConversations(); };
  const nno=$("msgNotifNo"); if(nno) nno.onclick=async()=>{ settings.msgNotifDismissed=true; await sset("settings",settings); const el=$("msgNotifBanner"); if(el) el.remove(); };
  const bon=$("msgBackupOn"); if(bon) bon.onclick=promptBackup;
  const bno=$("msgBackupNo"); if(bno) bno.onclick=async()=>{ settings.msgBackupDismissed=true; await sset("settings",settings); const el=$("msgBackupBanner"); if(el) el.remove(); };
}
async function promptBackup(){
  const p=await askPassphrase({
    title:"Back up your message key",
    note:"On a new device you'll enter this to unlock your message history. Forget it with no other device signed in and that history is gone for good \u2014 so let your password manager save it.",
    action:"Back up"
  });
  if(!p) return;
  const ok=await e2eBackup(p);
  toast(ok?"Message key backed up":"Couldn't back up — is messaging set up on the server?");
  if(ok) renderConversations();
}
async function openThread(uid,name){
  if(!uid) return;
  _msgThreadUid=uid; name=name||_nameCache[uid]||"Friend";
  const ttl=$("msgTitle"); ttl.textContent=name; ttl.classList.add("tappable"); ttl.onclick=()=>openProfile(uid, name);   // name → their profile (workouts, live, remove)
  $("msgBack").style.display="";
  const b=$("msgBody");
  _editingMid=null;
  b.innerHTML='<div class="msg-thread" id="msgThread"></div>'   // no "Loading…" flash; the thread fades in when ready
    +'<div class="msg-compose"><input class="comminput" id="msgInput" placeholder="Message…" maxlength="4000"><button class="btn sm" id="msgSend">Send</button></div>';
  const send=()=>{ const inp=$("msgInput"), v=(inp.value||"").trim(); if(!v) return;
    if(_editingMid){ const mid=_editingMid; cancelEdit(); editMessage(mid, uid, v).then(ok=>{ if(ok) renderThread(uid); }); }
    else { inp.value=""; haptic(8); sendMessage(uid,v).then(ok=>{ if(ok) renderThread(uid); }); } };
  $("msgSend").onclick=send;
  $("msgInput").addEventListener("keydown",e=>{ if(e.key==="Enter" && !e.shiftKey){ e.preventDefault(); send(); } });
  const fpub=await e2eFriendPub(uid);
  if(!fpub){ $("msgThread").innerHTML='<div class="msg-empty"><div class="msg-empty-ic">'+ICON.key+'</div><p>'+esc(name)+" hasn't opened messaging yet, so there's no key to encrypt to. Once they open Messages once, you can chat.</p></div>"; return; }
  await renderThread(uid);
  markRead(uid);
  coach("dmThread","Long-press a message to react, edit or delete · double-tap to ❤️.");   // one-time hint
  // live updates from this friend (RLS only delivers rows we share): their reactions, and their
  // edits/deletes/sends to the thread.
  if(_msgThreadChan){ try{ sb.removeChannel(_msgThreadChan); }catch(e){} }
  _msgThreadChan=sb.channel("dm-thread-"+uid)
    .on("postgres_changes",{ event:"*", schema:"public", table:"dm_reactions", filter:"actor=eq."+uid }, ()=> refreshThreadReactions(uid))
    .on("postgres_changes",{ event:"*", schema:"public", table:"direct_messages", filter:"sender=eq."+uid }, ()=>{ if(_msgThreadUid===uid){ renderThread(uid); markRead(uid); } })
    .subscribe();
}
let _threadReactions={}, _threadMids=[], _threadMsgs={};
const QUICK_REACT=["👍","❤️","😂","😮","😢","🙏"];
function haptic(ms){
  try{ if(navigator.vibrate){ navigator.vibrate(ms||8); return; } }catch(_){}
  try{ const l=document.getElementById("hapticL"); if(l) l.click(); }catch(_){}   // iOS best-effort: toggling an <input switch> buzzes (only in a gesture context)
}
async function renderThread(uid){
  const box=$("msgThread"); if(!box) return;
  const msgs=await loadThread(uid);
  if(!msgs.length){ box.innerHTML='<div class="msg-empty"><p>No messages yet — say hi 👋</p></div>'; return; }
  _threadMids=msgs.map(m=>m.id); _threadMsgs={};
  await loadThreadReactions(_threadMids, uid);
  box.innerHTML=msgs.map(m=>{ _threadMsgs[m.id]={ mine:m.mine, text:m.text };
    const t=m.text==null?'<span class="msg-locked">'+ICON.lock+' can\'t decrypt (key changed)</span>':esc(m.text);
    const meta=new Date(Date.parse(m.at)).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+(m.edited?" · edited":"")+(m.mine&&m.read?" · read":"");
    return '<div class="msg-row '+(m.mine?"mine":"theirs")+'"><div class="msg-bubble" data-mid="'+m.id+'">'+t+'<span class="msg-time">'+esc(meta)+'</span></div>'
      +'<div class="react-chips" data-chips="'+m.id+'"></div></div>'; }).join('');
  _threadMids.forEach(renderReactionsFor);
  attachReactions(box, uid);
  box.scrollTop=box.scrollHeight;
}
// --- reactions: encrypted emoji, one per person per message (double-tap ❤️, long-press for the bar) ---
async function loadThreadReactions(mids, friendUid){
  _threadReactions={}; if(!mids || !mids.length) return;
  let rows=[]; try{ const { data } = await sb.from("dm_reactions").select("message_id,actor,ciphertext,iv,salt").in("message_id",mids); rows=data||[]; }catch(e){}
  for(const r of rows){ const em=await e2eDecrypt(friendUid,r);
    // a reaction is an emoji, never markup — reject anything else rather than trusting the sender
    if(isReactionEmoji(em)){ (_threadReactions[r.message_id]=_threadReactions[r.message_id]||{})[r.actor]=em; } }
}
async function refreshThreadReactions(friendUid){
  if(!_msgThreadUid || _msgThreadUid!==friendUid) return;
  await loadThreadReactions(_threadMids, friendUid);
  _threadMids.forEach(renderReactionsFor);
}
// Every entry in EMOJI_GROUPS and QUICK_REACT is at most 4 code points; 8 leaves room for a future ZWJ
// sequence while still refusing anything that could carry markup.
function isReactionEmoji(e){
  if(!e || typeof e!=="string") return false;
  const cps=[...e];
  return cps.length>0 && cps.length<=8 && /\p{Extended_Pictographic}/u.test(e) && !/[<>"'&]/.test(e);
}
function renderReactionsFor(mid){
  const host=document.querySelector('[data-chips="'+mid+'"]'); if(!host) return;
  const map=_threadReactions[mid]||{}, emojis=Object.values(map);
  if(!emojis.length){ host.innerHTML=""; return; }
  const counts={}; emojis.forEach(e=> counts[e]=(counts[e]||0)+1);
  const mine=map[cloudUser.id];
  host.innerHTML=Object.keys(counts).map(e=>'<span class="react-chip'+(mine===e?' mine':'')+'" data-e="'+esc(e)+'">'+esc(e)+(counts[e]>1?' '+counts[e]:'')+'</span>').join('');
  host.querySelectorAll(".react-chip.mine").forEach(c=> c.onclick=()=>removeReaction(mid));   // tap own chip → remove it
}
async function setReaction(mid, friendUid, emoji, toggle){
  if(!cloudReady()) return;
  const mine=(_threadReactions[mid]||{})[cloudUser.id];
  if(toggle && mine===emoji){ return removeReaction(mid); }
  const enc=await e2eEncrypt(friendUid, emoji); if(!enc) return;
  (_threadReactions[mid]=_threadReactions[mid]||{})[cloudUser.id]=emoji; renderReactionsFor(mid);   // optimistic
  try{ await sb.from("dm_reactions").upsert({ message_id:mid, actor:cloudUser.id, ciphertext:enc.ciphertext, iv:enc.iv, salt:enc.salt, created_at:new Date().toISOString() }); }catch(e){}
}
async function removeReaction(mid){
  if(_threadReactions[mid]) delete _threadReactions[mid][cloudUser.id];
  renderReactionsFor(mid);
  try{ await sb.from("dm_reactions").delete().eq("message_id",mid).eq("actor",cloudUser.id); }catch(e){}
}
// the quick row adapts to you: your most-used reactions first, then the defaults fill any gaps
function bumpEmoji(e){ settings.emojiFreq=settings.emojiFreq||{}; settings.emojiFreq[e]=(settings.emojiFreq[e]||0)+1; sset("settings",settings); }
function quickEmojis(){
  const freq=settings.emojiFreq||{};
  const top=Object.keys(freq).sort((a,b)=>freq[b]-freq[a]).slice(0,6);
  const out=top.slice();
  for(const e of QUICK_REACT){ if(out.length>=6) break; if(out.indexOf(e)<0) out.push(e); }
  return out.slice(0,6);
}
function pickReaction(mid, friendUid, e){ haptic(8); setReaction(mid, friendUid, e); bumpEmoji(e); closeReactUI(); }
function closeReactBar(){ const b=$("reactBar"); if(b) b.remove(); }
function closeEmojiPicker(){ const p=$("emojiPicker"); if(p) p.remove(); }
function closeReactUI(){ closeReactBar(); closeEmojiPicker(); }
function showReactBar(bubble, mid, friendUid){
  closeReactUI();
  const info=_threadMsgs[mid]||{}, mine=info.mine, text=info.text;
  const bar=document.createElement("div"); bar.className="react-bar"; bar.id="reactBar";
  let acts='<button class="ract" data-act="copy">Copy</button>';
  if(mine){ acts+='<button class="ract" data-act="edit">Edit</button><button class="ract del" data-act="delete">Delete</button>'; }
  bar.innerHTML='<div class="react-row">'
      +quickEmojis().map(e=>'<button class="react-pick" data-e="'+esc(e)+'">'+esc(e)+'</button>').join('')
      +'<button class="react-pick react-more" id="reactMore" aria-label="More emojis">'+ICON.plus+'</button></div>'
    +'<div class="react-menu">'+acts+'</div>';
  document.body.appendChild(bar);
  const r=bubble.getBoundingClientRect(), bw=bar.offsetWidth, bh=bar.offsetHeight, vw=window.innerWidth, vh=window.innerHeight;
  let top=r.top-bh-8; if(top<8) top=r.bottom+8;              // prefer above the bubble, else below
  top=Math.max(8, Math.min(top, vh-bh-8));                   // keep on-screen vertically
  bar.style.left=Math.max(8, Math.min(r.left, vw-bw-8))+"px";
  bar.style.top=top+"px";
  bar.querySelectorAll(".react-pick[data-e]").forEach(b=> b.onclick=()=>pickReaction(mid, friendUid, b.dataset.e));
  bar.querySelector("#reactMore").onclick=()=> openEmojiPicker(mid, friendUid);
  bar.querySelectorAll(".ract").forEach(b=> b.onclick=()=>{ const a=b.dataset.act; closeReactUI();
    if(a==="copy" && text!=null){ try{ navigator.clipboard.writeText(text); toast("Copied"); }catch(_){} }
    else if(a==="edit"){ startEdit(mid, friendUid, text); }
    else if(a==="delete"){ deleteMessage(mid); } });
  setTimeout(()=> document.addEventListener("pointerdown", function _o(e){ if(!e.target.closest(".react-bar") && !e.target.closest(".emoji-picker")){ closeReactUI(); document.removeEventListener("pointerdown",_o); } }), 0);
}
// edit / delete your own messages (RLS: sender may update; sender or recipient may delete)
let _editingMid=null, _editFriend=null;
function startEdit(mid, friendUid, text){
  if(text==null) return; _editingMid=mid; _editFriend=friendUid;
  const inp=$("msgInput"); if(inp){ inp.value=text; inp.focus(); try{ inp.setSelectionRange(text.length,text.length); }catch(_){} }
  const send=$("msgSend"); if(send) send.textContent="Save";
  showEditBanner(true);
}
function cancelEdit(){ _editingMid=null; _editFriend=null; const inp=$("msgInput"); if(inp) inp.value=""; const send=$("msgSend"); if(send) send.textContent="Send"; showEditBanner(false); }
function showEditBanner(on){
  let b=$("msgEditBar");
  if(!on){ if(b) b.remove(); return; }
  if(!b){ b=document.createElement("div"); b.className="msg-editbar"; b.id="msgEditBar";
    b.innerHTML='<span>Editing message</span><span class="msg-link" id="msgEditCancel">Cancel</span>';
    const c=$("msgBody").querySelector(".msg-compose"); if(c) c.parentNode.insertBefore(b, c);
    $("msgEditCancel").onclick=cancelEdit; }
}
async function editMessage(mid, friendUid, text){
  text=(text||"").trim(); if(!text || !cloudReady()) return false;
  const enc=await e2eEncrypt(friendUid, text); if(!enc) return false;
  const body={ ciphertext:enc.ciphertext, iv:enc.iv, salt:enc.salt };
  let { error } = await sb.from("direct_messages").update({ ...body, edited_at:new Date().toISOString() }).eq("id",mid).eq("sender",cloudUser.id);
  if(error){ const r=await sb.from("direct_messages").update(body).eq("id",mid).eq("sender",cloudUser.id); error=r.error; }   // degrade if edited_at/policy not migrated
  if(error){ toast("Couldn't save the edit — re-run the messages SQL to enable editing."); return false; }
  return true;
}
async function deleteMessage(mid){
  if(!cloudReady()) return;
  let ok=true; try{ ok=window.confirm("Delete this message? It'll be removed for both of you."); }catch(e){ ok=true; }
  if(!ok) return;   // guard against an accidental tap losing a message
  if(_editingMid===mid) cancelEdit();
  haptic(12);
  const row=document.querySelector('.msg-bubble[data-mid="'+mid+'"]'); if(row){ const r=row.closest(".msg-row"); if(r) r.remove(); }   // optimistic
  try{ await sb.from("direct_messages").delete().eq("id",mid); }catch(e){}
}
// full emoji picker (the "+" on the reaction bar) — a scrollable, categorised grid
const EMOJI_GROUPS=[
  { label:"Smileys", emojis:["😀","😃","😄","😁","😆","😅","😂","🤣","🙂","🙃","😉","😊","😇","🥰","😍","🤩","😘","😋","😛","😜","🤪","😎","🥳","😏","🤔","🤨","😐","😴","😬","🙄","😮","😯","😲","🥺","😢","😭","😤","😠","😡","🤯","😳","🥵","🥶","😱","😨","😅","😓","🤗","🤭","🤫","😶"] },
  { label:"Gestures", emojis:["👍","👎","👌","🤌","✌️","🤞","🤟","🤘","🤙","👏","🙌","👐","🤲","🙏","💪","🦾","🤝","👊","✊","🫶","👀","🫡","🫥","🤷","🤦"] },
  { label:"Hearts & symbols", emojis:["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❤️‍🔥","💕","💞","💓","💗","💖","💘","💝","💯","🔥","⭐","✨","🎉","🎊","✅","❌","💢","💥","💫","🙌"] },
  { label:"Active", emojis:["🏋️","🤸","🏃","🚴","🧗","🤾","🚀","⚽","🏀","🏈","⚾","🎾","🥊","🥇","🏆","🎯","💧","😈","👑","🐐","☕","🍺","🥤","🍎","🥗","🍗"] },
];
function openEmojiPicker(mid, friendUid){
  closeEmojiPicker();
  const p=document.createElement("div"); p.className="emoji-picker"; p.id="emojiPicker";
  p.innerHTML=EMOJI_GROUPS.map(g=>'<div class="emoji-cat">'+g.label+'</div><div class="emoji-grid">'
    +g.emojis.map(e=>'<button class="emoji-cell" data-e="'+e+'">'+e+'</button>').join('')+'</div>').join('');
  document.body.appendChild(p);
  p.querySelectorAll(".emoji-cell").forEach(b=> b.onclick=()=>pickReaction(mid, friendUid, b.dataset.e));
  setTimeout(()=> document.addEventListener("pointerdown", function _o(e){ if(!e.target.closest(".emoji-picker") && !e.target.closest(".react-bar")){ closeReactUI(); document.removeEventListener("pointerdown",_o); } }), 0);
}
function attachReactions(box, friendUid){
  let lastTap=0, lastMid=0, lpTimer=null, lpFired=false, dx=0, dy=0;
  box.querySelectorAll(".msg-bubble[data-mid]").forEach(bubble=>{
    const mid=+bubble.dataset.mid;
    bubble.addEventListener("pointerdown",e=>{ lpFired=false; dx=e.clientX; dy=e.clientY;
      clearTimeout(lpTimer); lpTimer=setTimeout(()=>{ lpFired=true; haptic(12); showReactBar(bubble, mid, friendUid); }, 320); });
    bubble.addEventListener("pointermove",e=>{ if(Math.abs(e.clientX-dx)>10 || Math.abs(e.clientY-dy)>10) clearTimeout(lpTimer); });
    bubble.addEventListener("pointercancel",()=> clearTimeout(lpTimer));
    bubble.addEventListener("pointerup",()=>{ clearTimeout(lpTimer); if(lpFired) return;   // long-press already handled
      const now=Date.now();
      if(lastMid===mid && now-lastTap<300){ lastTap=0; lastMid=0; haptic(8); setReaction(mid, friendUid, "❤️", true); }   // double-tap → ❤️ toggle
      else { lastTap=now; lastMid=mid; } });
  });
}

// NB: the live-sheet wiring (liveToggle/liveClose/scrimLive) lives just after `const $` is defined,
// further down — binding it here would run before `$` exists and abort the whole script on load.

function agoStr(ts){ const s=Math.max(0,(Date.now()-ts)/1000);
  if(s<90) return "just now"; const m=s/60; if(m<60) return Math.round(m)+"m ago";
  const h=m/60; if(h<24) return Math.round(h)+"h ago"; const d=h/24; return d<7?Math.round(d)+"d ago":new Date(ts).toLocaleDateString(undefined,{month:"short",day:"numeric"}); }

// Rose / coxcomb chart of a muscle split. Normalized to the AVERAGE worked muscle: a perfectly
// balanced split is a uniform mid-size rosette (radius ROSE_MID) — not a maxed-out circle you could
// never actually create — while above-average muscles grow toward the rim and below-average ones
// shrink (never below ROSE_FLOOR, so they stay readable). Untrained muscles stay empty.
const ROSE_MID=0.62, ROSE_GAMMA=1.0, ROSE_FLOOR=0.30;
function roseRadii(G, tot){
  let sum=0, k=0; G.forEach(g=>{ const v=tot[g]||0; if(v>0){ sum+=v; k++; } });
  if(!k) return G.map(()=>0);
  const mean=sum/k;
  return G.map(g=>{ const v=tot[g]||0; return v>0 ? Math.max(ROSE_FLOOR, Math.min(1, ROSE_MID*Math.pow(v/mean, ROSE_GAMMA))) : 0; });
}
// sessions logged before muscles were split stored their totals under the old coarse keys
// ("Back", "Shoulders"). Split them into the detailed groups so those wedges don't silently vanish
// from old share tiles / feed cards. Fresh data has no such keys, so this is a no-op there.
function expandLegacyMtot(tot){
  if(!tot || (tot.Back==null && tot.Shoulders==null)) return tot||{};
  const t=Object.assign({}, tot);
  if(t.Back!=null){ const v=t.Back/3; ["Lats","Upper Back","Lower Back"].forEach(m=>t[m]=(t[m]||0)+v); delete t.Back; }
  if(t.Shoulders!=null){ const v=t.Shoulders/3; ["Front Delts","Side Delts","Rear Delts"].forEach(m=>t[m]=(t[m]||0)+v); delete t.Shoulders; }
  return t;
}
// --- chart aggregation -------------------------------------------------------------------------------
// The analytics groups are detailed (3 delt heads, 3 back regions) so volume/targets stay precise, but a
// rose with 17 spokes reads as noise. So every chart renders a COARSE ~13-spoke view by default — the delt
// heads roll up into "Shoulders" and the back regions into "Back" — and the two large interactive radars
// (muscle-balance + planner) let you tap a rolled-up wedge to expand it into its detailed heads.
const SUBGROUPS={ Shoulders:["Front Delts","Side Delts","Rear Delts"], Back:["Lats","Upper Back","Lower Back"] };
const AGG={}; Object.keys(SUBGROUPS).forEach(p=> SUBGROUPS[p].forEach(s=> AGG[s]=p));   // sub-group → parent
const DISPLAY_GROUPS=["Chest","Back","Shoulders","Biceps","Triceps","Forearms","Quads","Adductors","Hamstrings","Glutes","Glute Med","Calves","Core","Neck"];
// the spoke list for a chart: parents stay collapsed unless their name is in `expanded`, then they split
function roseGroups(expanded){ const out=[];
  DISPLAY_GROUPS.forEach(g=>{ if(SUBGROUPS[g] && expanded && expanded.has(g)) Array.prototype.push.apply(out, SUBGROUPS[g]); else out.push(g); });
  return out; }
// roll detailed totals up onto the spoke list (legacy keys expanded first); opened parents keep their heads
function roseTotals(tot, expanded){ const t=expandLegacyMtot(tot||{}), out={};
  Object.keys(t).forEach(k=>{ const p=AGG[k]||k, keep=(SUBGROUPS[p] && expanded && expanded.has(p)); const key=keep?k:p; out[key]=(out[key]||0)+(t[k]||0); });
  return out; }
// One typography scale for every canvas chart. Charts render at very different internal widths but all
// display at roughly the same on-screen column width, so sizing the font as a fraction of the canvas
// width makes the ON-SCREEN size the same across every graph (fontPx = k·W → displayed = k·W·(D/W) = k·D).
// At the 358px sheet column: tick ≈10.7px, label/value ≈11.5px on screen. Pads that hold text come from measureText.
const CHART_FONT={ tick:0.03, label:0.032, value:0.032, big:0.045 };
// fillText that keeps the label inside the canvas (8px margin) for its current textAlign — radar labels near the edges
function fitText(ctx, t, x, y){ const w=ctx.measureText(t).width, W=ctx.canvas.width, m=8, al=ctx.textAlign;
  const lo=al==="right"?w+m:al==="center"?w/2+m:m, hi=al==="right"?W-m:al==="center"?W-w/2-m:W-w-m;
  ctx.fillText(t, Math.max(lo,Math.min(hi,x)), y); }
function cfont(W, role, weight){ const px=Math.max(9, Math.round(W*(CHART_FONT[role]||CHART_FONT.label))); return (weight||"600")+" "+px+"px -apple-system,system-ui,sans-serif"; }
function drawRose(x, cx, cy, R, G, tot, o){
  // tot is already display-prepared by roseTotals() (legacy keys expanded, heads rolled into Back/Shoulders).
  // Don't expandLegacyMtot here — it would re-split the rolled-up "Back"/"Shoulders" keys and blank those spokes.
  o=o||{}; const n=G.length, frac=o.radii||roseRadii(G,tot);
  x.strokeStyle=o.grid||"rgba(127,127,127,.30)"; x.lineWidth=o.gridW||1;
  (o.rings||[1]).forEach(f=>{ x.beginPath(); x.arc(cx,cy,R*f,0,Math.PI*2); x.stroke(); });
  const half=Math.PI/n - (o.gap!=null?o.gap:0.06)/2;
  for(let i=0;i<n;i++){
    const rr=R*frac[i]; if(rr<=0.5) continue;
    const a=(-90+i*360/n)*Math.PI/180;
    x.beginPath(); x.moveTo(cx,cy); x.arc(cx,cy,rr,a-half,a+half); x.closePath();
    const col=o.color ? (typeof o.color==="function"?o.color(G[i],i):o.color) : "#f08020";
    x.fillStyle=col; x.globalAlpha=o.alpha!=null?o.alpha:0.85; x.fill(); x.globalAlpha=1;
    if(o.stroke){ x.lineWidth=o.strokeW||1; x.strokeStyle=o.stroke; x.stroke(); }
  }
  // optional muscle labels — only for muscles actually trained (a wedge present), so the ring stays readable
  if(o.labels){
    const gap=o.labelGap!=null?o.labelGap:14;
    x.font=o.labelFont||"600 12px -apple-system,system-ui,sans-serif"; x.textBaseline="middle";
    if(o.labelShadow){ x.shadowColor="rgba(0,0,0,.30)"; x.shadowBlur=6; x.shadowOffsetY=1; }
    for(let i=0;i<n;i++){ if(frac[i]<=0) continue;
      const a=(-90+i*360/n)*Math.PI/180, px=cx+(R+gap)*Math.cos(a), py=cy+(R+gap)*Math.sin(a), co=Math.cos(a);
      x.textAlign=Math.abs(co)<0.3?"center":(co>0?"left":"right");
      x.fillStyle=typeof o.labelColor==="function"?o.labelColor(G[i],i):(o.labelColor||"#888");
      fitText(x, MSHORT[G[i]]||G[i], px, py);
    }
    x.shadowColor="transparent"; x.shadowBlur=0; x.shadowOffsetY=0;
  }
}
// Small rose for a feed card (no on-canvas labels — colours map to the wedge legend rendered alongside).
function miniRadar(cv, tot){
  const W=cv.width, H=cv.height, x=cv.getContext("2d"), cx=W/2, cy=H/2, R=Math.min(W,H)/2-4;
  x.clearRect(0,0,W,H);
  drawRose(x, cx, cy, R, roseGroups(), roseTotals(tot), { color:g=>MCOLOR[g]||"#f08020", alpha:.72, rings:[0.5,1], grid:"rgba(127,127,127,.28)" });
}
// a stars feed post's picture: a 60px night-sky glyph of the completed figure (or the last one done at a milestone)
function feedSkyHTML(s){ const f=SKY.find(x=>x.id===s.cst) || skyProgress(Math.max(0,+s.stars||0)).done.slice(-1)[0] || SKY[0];
  return '<span class="starsky glyph feedsky'+(f.sky===2?' sky2':'')+'" aria-hidden="true">'+drawConstellation(f, f.pts.length, {w:60,h:60,box:[8,8,44,44],r:2.6,halo:false,bg:5})+'</span>'; }
// Color-dot legend mapping rose wedges → trained muscles (sorted by share). `max` caps the count
// (feed cards stay to a line; the detail sheet shows them all). Returns "" when nothing was trained.
function muscleLegend(mt, max){
  const t=roseTotals(mt);   // match the aggregated mini rose — coarse groups, not individual delt/back heads
  const items=roseGroups().filter(g=>(t[g]||0)>0).sort((a,b)=>(t[b]||0)-(t[a]||0));
  if(!items.length) return "";
  const top=(max&&items.length>max)?items.slice(0,max):items;
  const more=(max&&items.length>max)?(' <span class="rl-more">+'+(items.length-max)+'</span>'):'';
  return '<div class="roselegend">'+top.map(g=>'<span class="rl-item"><i class="rl-dot" style="background:'+(MCOLOR[g]||"#f08020")+'"></i>'+esc(MSHORT[g]||g)+'</span>').join('')+more+'</div>';
}

async function renderFeed(){
  const list=$("feedList"); if(!list || !cloudReady()) return;
  renderLiveCards(); setTimeout(subscribeLiveFeed, 800);   // friends training live — defer the realtime channel off the open path so the home paints first
  // Liberal viewing: you see friends' posts even if you share nothing yourself. Each post shows at
  // the level its author published (s.lvl); your own level only governs what you publish.
  list.innerHTML='<div class="levelcap" style="margin:0;">Loading…</div>';
  let rows=[];
  try{
    const { data, error } = await sb.from("activity").select("id,user_id,created_at,summary").order("created_at",{ascending:false}).limit(30);
    if(error) throw error; rows=data||[];
  }catch(e){ list.innerHTML='<div class="levelcap" style="margin:0;">Couldn\'t load the feed.</div>'; return; }
  if(!rows.length){ list.innerHTML='<div class="levelcap" style="margin:0;">No activity yet. Finish a workout to be the first.</div>'; return; }
  let names={};
  { const ids=[...new Set(rows.map(r=>r.user_id))]; let profs=[];
    try{ const { data, error } = await sb.from("profiles").select("user_id,display_name,avatar_color,avatar_emoji,avatar_icon,avatar_style,last_seen").in("user_id",ids); if(error) throw error; profs=data||[]; }
    catch(e){ try{ const { data } = await sb.from("profiles").select("user_id,display_name").in("user_id",ids); profs=data||[]; }catch(e2){} }
    profs.forEach(p=>{ names[p.user_id]=p.display_name; }); recordAvatars(profs);
  }
  // batch-load cheers + comment counts for the visible activities (degrades gracefully if those tables aren't set up)
  const aids=rows.map(r=>r.id).filter(Boolean), cheerN={}, cheered={}, commN={};
  if(aids.length){
    try{ const { data } = await sb.from("cheers").select("activity_id,user_id").in("activity_id",aids);
      (data||[]).forEach(c=>{ cheerN[c.activity_id]=(cheerN[c.activity_id]||0)+1; if(c.user_id===cloudUser.id) cheered[c.activity_id]=true; }); }catch(e){}
    try{ const { data } = await sb.from("comments").select("activity_id").in("activity_id",aids);
      (data||[]).forEach(c=>{ commN[c.activity_id]=(commN[c.activity_id]||0)+1; }); }catch(e){}
  }
  list.innerHTML="";
  rows.forEach(r=>{
    const s=r.summary||{}, mine=r.user_id===cloudUser.id;
    const who = mine ? "You" : (names[r.user_id] || "A friend");
    const viewLvl=s.lvl||1;   // you see the post at the level its author chose to share
    const card=document.createElement("div"); card.style.cssText="padding:12px 4px; border-bottom:.5px solid var(--line);";
    const top=document.createElement("div"); top.style.cssText="display:flex; gap:12px; align-items:center;";
    const txt=document.createElement("div"); txt.style.cssText="flex:1; min-width:0;";
    const isStars=s.stars!=null;   // a completed constellation / star milestone: a mini sky, no stats line
    const stats=isStars ? "" : [ s.exN?s.exN+" ex":null, s.sets!=null?s.sets+" sets":null, s.vol?fmtKg(s.vol):null,
      s.mins?Math.round(s.mins)+" min":null, s.prs?s.prs+" PR"+(s.prs>1?"s":""):null ].filter(Boolean).join(" · ");
    const t=s.top, topLine = t&&t.name ? ("Top · "+t.name + (viewLvl>=3 && t.w>0 ? " · "+t.w+"kg×"+t.r : "")) : "";
    const mt=s.mtot||{}, hl=muscleLegend(mt, 3);
    const canOpen = viewLvl>=2 && s.ex && s.ex.length;
    txt.innerHTML='<div style="font-weight:600;">'+esc(who)+' · '+esc(s.name||"Workout")+'</div>'+
      (stats?'<div class="levelcap" style="margin:4px 0 0;">'+esc(stats)+'</div>':'')+
      (topLine?'<div class="levelcap" style="margin:2px 0 0;">'+esc(topLine)+'</div>':'')+
      (hl?'<div class="levelcap" style="margin:3px 0 0; opacity:.9;">'+hl+'</div>':'')+
      '<div class="levelcap" style="margin:2px 0 0; opacity:.7;">'+esc(agoStr(Date.parse(r.created_at)))+(canOpen?' · tap for detail<span class="ovchev lnkchev">›</span>':'')+'</div>';
    let cv=null, art;
    if(isStars){ const w=document.createElement("div"); w.innerHTML=feedSkyHTML(s); art=w.firstChild; }
    else { cv=art=document.createElement("canvas"); cv.width=72; cv.height=72; cv.style.cssText="flex:0 0 auto; width:60px; height:60px;"; }
    const avt=document.createElement("div"); avt.style.cssText="flex:0 0 auto;"+(mine?"":" cursor:pointer;"); avt.innerHTML=avatarHTML(who,{size:44,uid:r.user_id});
    if(!mine) bindFriendTap(avt, r.user_id, who);   // tap → profile, long-press → chat
    top.appendChild(avt); top.appendChild(txt); top.appendChild(art); card.appendChild(top);
    if(canOpen){ top.style.cursor="pointer"; top.onclick=()=>openWorkoutDetail(r, who, viewLvl); }
    // social actions (cheer + comment) — own posts can't be cheered
    if(r.id){
      const bar=document.createElement("div"); bar.className="feedbar";
      bar.innerHTML='<button class="cheerbtn'+(cheered[r.id]?" on":"")+'"'+(mine?" disabled":"")+'>'+ICON.flame+'<span class="cheerc">'+(cheerN[r.id]||0)+'</span></button>'
        +'<button class="commbtn">'+ICON.chat+'<span class="commc">'+(commN[r.id]||0)+'</span></button>';
      const panel=document.createElement("div"); panel.className="commpanel"; panel.style.display="none";
      card.appendChild(bar); card.appendChild(panel);
      const cb=bar.querySelector(".cheerbtn");
      if(!mine) cb.onclick=()=>toggleCheer(r, cb);
      bar.querySelector(".commbtn").onclick=()=>toggleComments(r, panel, bar.querySelector(".commc"));
    }
    list.appendChild(card);
    if(cv) miniRadar(cv, s.mtot||{});
  });
  // urgency: a friend who trained in the last day gets surfaced at the top of the overview
  const host=$("ovBody"); if(host){ host.querySelectorAll(".ovfriend").forEach(el=>el.remove());
    const fresh=rows.find(r=> r.user_id!==cloudUser.id && !(r.summary||{}).stars && (Date.now()-Date.parse(r.created_at)) < 24*3600*1000);   // star posts never nudge: no comparing
    if(fresh){ const who=names[fresh.user_id]||"A friend", s=fresh.summary||{};
      const c=document.createElement("div"); c.className="group ovnudge ovfriend";
      c.innerHTML='<div class="pad"><div class="ovbig sm">'+esc(who)+' just trained 🔥</div><p class="ovp" style="margin-top:8px;">'+esc(s.name||"A workout")+' · '+esc(agoStr(Date.parse(fresh.created_at)))+' — your move?</p></div>';
      host.insertBefore(c, host.firstChild);
      const lbl=document.createElement("div"); lbl.className="ed-label ovfriend"; lbl.textContent="Friend update"; host.insertBefore(lbl, c);
    }
  }
}

// Full-workout view for a feed post. `viewLvl` is the level the author published: 2 shows
// exercises + sets×reps, 3 also shows the weights lifted.
function openWorkoutDetail(r, who, viewLvl){
  const s=r.summary||{}, body=$("woBody"); if(!body) return;
  $("woWho").textContent = who||"Workout";
  let when=""; try{ when=new Date(Date.parse(r.created_at)).toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"}); }catch(e){}
  const mt=s.mtot||{};
  let h='<div class="ovbig">'+esc(s.name||"Workout")+'</div>';
  if(when) h+='<div class="levelcap" style="margin:3px 0 16px;">'+esc(when)+'</div>';
  // headline numbers up top
  const chips=[["Volume", s.vol?fmtKg(s.vol):"—"],["Sets", ""+(s.sets||0)],["Time", (s.mins||0)+" min"],["PRs", ""+(s.prs||0)]];
  h+='<div class="wo-stats">'+chips.map(c=>'<div class="wo-stat"><b>'+esc(c[1])+'</b><span>'+esc(c[0])+'</span></div>').join('')+'</div>';
  // muscle split as horizontal bars — clean and never clips (a single session is too lopsided for a radar)
  const at=roseTotals(mt), mg=roseGroups().filter(g=>(at[g]||0)>0).sort((a,b)=>(at[b]||0)-(at[a]||0)), mmax=Math.max(1,...mg.map(g=>at[g]));
  if(mg.length){
    h+='<div class="ed-label">Muscles worked</div><div class="wo-mus">';
    h+=mg.map(g=>{ const pct=Math.max(8,Math.round(at[g]/mmax*100)), col=MCOLOR[g]||"#888";
      return '<div class="wo-mrow"><span class="wo-mlab"><i class="wo-mdot" style="background:'+col+'"></i>'+esc(MSHORT[g]||g)+'</span><span class="wo-mtrack"><i class="wo-mbar" style="width:'+pct+'%;background:'+col+'"></i></span></div>'; }).join('');
    h+='</div>';
  }
  if(viewLvl>=2 && s.ex && s.ex.length){
    h+='<div class="ed-label">Exercises</div><div class="wo-exlist">';
    h+=s.ex.map(e=>{
      const setsTxt=(e.sets||[]).map(st=>{ const hasW=viewLvl>=3 && st.w!=null && st.w!=="";
        return (hasW ? st.w+"kg×"+(st.r||0) : (st.r||0)+" reps"); }).join(" · ");
      const m=muscleFor(e.name)[0], col=MCOLOR[AGG[m]||m]||"#888";
      return '<div class="wo-ex"><span class="wo-exdot" style="background:'+col+'"></span><div><div class="wo-exn">'+esc(e.name)+'</div><div class="wo-exs">'+esc(setsTxt)+'</div></div></div>';
    }).join('')+'</div>';
    if(viewLvl<3) h+='<p class="levelcap" style="margin:12px 0 0; opacity:.75;">'+esc(who)+' shared sets &amp; reps but not the weights.</p>';
  }
  body.innerHTML=h;
  openSheet("WO");
}

// best-effort push to the post's owner when you cheer/comment (the social-notify Edge Function does the sending; no-op if not deployed)
async function socialNotify(activityId, kind, text){ try{ if(sb && sb.functions) await sb.functions.invoke("social-notify",{ body:{ activityId, kind, text:text||"" } }); }catch(e){} }
async function toggleCheer(r, btn){
  if(!cloudReady()) return; const on=btn.classList.contains("on"), cspan=btn.querySelector(".cheerc");
  btn.classList.toggle("on", !on); cspan.textContent=Math.max(0,(parseInt(cspan.textContent)||0)+(on?-1:1));   // optimistic
  try{
    if(on){ await sb.from("cheers").delete().eq("activity_id",r.id).eq("user_id",cloudUser.id); }
    else { await sb.from("cheers").insert({ activity_id:r.id, user_id:cloudUser.id }); socialNotify(r.id,"cheer"); }
  }catch(e){ btn.classList.toggle("on", on); cspan.textContent=Math.max(0,(parseInt(cspan.textContent)||0)+(on?1:-1)); toast("Couldn't save that — is the social table set up?"); }
}
async function toggleComments(r, panel, cspan){
  if(panel.style.display!=="none"){ panel.style.display="none"; return; }
  panel.style.display=""; await loadComments(r, panel, cspan);
}
async function loadComments(r, panel, cspan){
  panel.innerHTML='<div class="levelcap" style="margin:8px 0;">Loading…</div>';
  let rows=[];
  try{ const { data } = await sb.from("comments").select("user_id,body,created_at").eq("activity_id",r.id).order("created_at",{ascending:true}); rows=data||[]; }
  catch(e){ panel.innerHTML='<div class="levelcap" style="margin:8px 0;">Comments aren\'t set up yet.</div>'; return; }
  let names={}; try{ const ids=[...new Set(rows.map(c=>c.user_id))]; if(ids.length){ const { data } = await sb.from("profiles").select("user_id,display_name").in("user_id",ids); (data||[]).forEach(p=>names[p.user_id]=p.display_name); } }catch(e){}
  const listHtml = rows.map(c=>'<div class="commrow"><b>'+esc(c.user_id===cloudUser.id?"You":(names[c.user_id]||"Friend"))+'</b> '+esc(c.body)+'</div>').join('') || '<div class="levelcap" style="margin:4px 0;">No comments yet — say something nice.</div>';
  panel.innerHTML='<div class="commlist">'+listHtml+'</div><div class="commadd"><input class="comminput" placeholder="Add a comment…" maxlength="240"><button class="btn sm commsend">Send</button></div>';
  const inp=panel.querySelector(".comminput");
  panel.querySelector(".commsend").onclick=async()=>{
    const body=inp.value.trim(); if(!body) return; inp.value="";
    try{ await sb.from("comments").insert({ activity_id:r.id, user_id:cloudUser.id, body });
      if(r.user_id!==cloudUser.id) socialNotify(r.id,"comment",body);
      if(cspan) cspan.textContent=(parseInt(cspan.textContent)||0)+1;
      await loadComments(r, panel, cspan);
    }catch(e){ toast("Couldn't post that comment."); }
  };
}
let plans=[], last={}, bw=[], hist={}, extlog=[];
let ledger=[], calib=null;   // Part II prediction ledger + per-user calibration state (CALIBRATION-PLAN.md)
let draft={};   // in-progress entries per workout, kept until the workout is saved: { sig: { t, s:{ exname:[{w,r}] } } }
let swaps={}, swapIdx=null;
let freeMode=false;
let timer={ elapsed:0, startedAt:null, running:false, iv:null };
// Session-clock reading at the last COMPLETED set, and the wall clock of the same moment. Two stamps
// because they answer different questions: the elapsed reading survives tmrPause/tmrReset and so is the
// honest session length, while only a wall clock can measure "how long have you been away" across an
// app suspension.
let _lastSetEl=0, _lastSetAt=0, _absenceAsked=false;
let sessGym=null;   // the gym this in-progress session is at (null/0 = primary); rides on the draft
const ABSENT_MS   = 30*60*1000;    // no completed set for this long → offer to finish
const DRAFT_TTL   = 20*3600*1000;  // how long a mid-session draft stays restorable (matches applyDraft)
let rest={ elapsed:0, target:180, startedAt:null, alerted:false, iv:null };
function swapOptions(e){ const set=[]; const add=n=>{ if(n&&!set.includes(n)) set.push(n); };
  add(e.n); (e.alts||[]).forEach(add); (ALTS[e.n]||[]).forEach(add);   // suggested picks first
  const primary=muscleFor(e.n)[0];
  exerciseLibrary().forEach(n=>{ if((muscleFor(n)[0]||"")===primary) add(n); });   // every fitting exercise
  return set; }
function dispName(e,xi){ return swaps[xi] || (rot[xi]!=null && !rotKeep.has(xi) ? rot[xi] : e.n); }
let settings={ activePlanId:null, name:"", displayName:"", pointers:{}, sessions:0, sinceDeload:0, beatTotal:0, goalStart:null, goalTarget:null, heightCm:null, bodyfatPct:null, sex:null, age:null, exp:null, sponLen:null, meTileOrder:null, meTileHidden:null, theme:"auto", accent:"orange", restSec:180, shareActivity:false, shareLevel:null, planStartAt:null, discRead:{}, focusAreas:["balanced"], activeInjuries:{}, injurySeverity:2, weakSpots:[], slotDone:{}, baseActivity:null, favEx:[], gyms:[], gymSplit:0, extlogTomb:[] };
const SETTINGS_DEFAULT=JSON.stringify(settings);   // a different account signing in starts from these (cloudReconcile)
let curWk=0;            // index into active plan workouts
let editing=null;       // plan object being edited (working copy)

const $=id=>document.getElementById(id);
// live-sheet wiring — must come after `$` is defined (moved here from the live block above, where it
// ran before `const $` and crashed boot with "Cannot access '$' before initialization").
// flip on → broadcast to allowed friends + anyone ticked below; flip off → stop. The "Choose who can
// watch" list ticks friends independently of the toggle (loaded lazily on first expand).
if($("liveToggle")) $("liveToggle").onchange=async(e)=>{ if(e.target.checked){ const ok=await goLive(); e.target.checked=ok; updateLiveRow(); } else endLive(false); };
// social dropdown: the two-people icon opens a menu to choose Share live or Train together
function closeSocialMenu(){ const m=$("socialMenu"); if(m) m.hidden=true; }
function gymOpenPanel(){
  if(_gymCode){ gymCheckOut(); return; }                  // checked in → tapping leaves
  const p=$("gymPanel"); if(!p) return;
  if(!p.hidden){ p.hidden=true; return; }                 // re-collapsable: toggle it shut
  const lp=$("livePanel"); if(lp) lp.hidden=true;          // only one panel open at a time
  p.hidden=false;
  const inp=$("gymCodeInput"); if(inp){ if(!inp.value) inp.value=randGymCode(); inp.focus(); try{ inp.select(); }catch(e){} } }
// tapping the icon toggles the whole social UI: if anything is open (menu or a panel), collapse it all; else open the menu
if($("socialBtn")) $("socialBtn").onclick=(e)=>{ e.stopPropagation();
  const m=$("socialMenu"), lp=$("livePanel"), gp=$("gymPanel");
  const anyOpen=(m&&!m.hidden)||(lp&&!lp.hidden)||(gp&&!gp.hidden);
  if(anyOpen){ if(m) m.hidden=true; if(lp) lp.hidden=true; if(gp) gp.hidden=true; }
  else if(m) m.hidden=false; };
if($("liveMenuItem")) $("liveMenuItem").onclick=()=>{ closeSocialMenu(); const g=$("gymPanel"); if(g) g.hidden=true; toggleLivePick(); };
if($("gymMenuItem")) $("gymMenuItem").onclick=()=>{ closeSocialMenu(); gymOpenPanel(); };
if($("gymPanelX")) $("gymPanelX").onclick=()=>{ const p=$("gymPanel"); if(p) p.hidden=true; };
if($("livePanelX")) $("livePanelX").onclick=()=>{ const p=$("livePanel"); if(p) p.hidden=true; };
document.addEventListener("click",(e)=>{ const w=$("socialWrap"), m=$("socialMenu"); if(w&&m&&!m.hidden&&!w.contains(e.target)) m.hidden=true; });
// Foldable model/detail sections. These used to be native <details>, but some iOS/PWA webviews wouldn't
// collapse them after opening; they're now plain buttons + a .fcfold wrapper whose open/closed state is a
// class we toggle here — no native <details> semantics, so open AND close always work.
document.addEventListener("click",(e)=>{ const h=e.target.closest&&e.target.closest(".fcfoldhd"); if(!h) return;
  const f=h.parentElement; if(f&&f.classList.contains("fcfold")) f.classList.toggle("open"); });
// Open the white-paper PDF in an in-app viewer with a Done button. A standalone PWA navigating to a PDF
// has no back/close chrome, so it looked like it "couldn't be closed". Intercept same-origin .pdf links
// (the white paper); external study links (http…) keep opening normally. Skip the fallback link inside
// the viewer itself so it can still escape to the browser.
const WP_PAGES=17;   // white-paper page count (regenerate wp/page-NN.jpg + bump this when the paper changes)
function openWhitepaper(){
  const box=$("pdfPages");
  if(box && !box.dataset.loaded){
    let h="";
    for(let i=1;i<=WP_PAGES;i++){ const n=(i<10?"0":"")+i; h+='<img class="pdfpg" loading="lazy" src="wp/page-'+n+'.jpg" alt="Page '+i+'">'; }
    h+='<p class="fcnote pdffallback">Prefer the file? <a class="srclink" href="growth-model-whitepaper.pdf" target="_blank" rel="noopener">open the PDF ↗</a></p>';
    box.innerHTML=h; box.dataset.loaded="1";
  }
  if(box) box.scrollTop=0;
  openSheet("PDF");
}
document.addEventListener("click",(e)=>{
  const a=e.target.closest&&e.target.closest('a[href$=".pdf"]'); if(!a) return;
  if(a.closest(".pdffallback")) return;                       // the escape-hatch link opens the real file externally
  e.preventDefault(); openWhitepaper();
});
if($("pdfClose")) $("pdfClose").onclick=()=>closeSheet("PDF");
if($("scrimPDF")) $("scrimPDF").onclick=()=>closeSheet("PDF");
if($("gymNew")) $("gymNew").onclick=()=>{ const inp=$("gymCodeInput"); if(inp){ inp.value=randGymCode(); inp.focus(); } };
if($("gymGo")) $("gymGo").onclick=()=>{ const inp=$("gymCodeInput"); gymCheckIn(inp?inp.value:""); };
if($("gymCodeInput")) $("gymCodeInput").addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); gymCheckIn(e.target.value); } });
if($("liveClose")) $("liveClose").onclick=()=>{ if(_liveViewChan){ try{ sb.removeChannel(_liveViewChan); }catch(e){} _liveViewChan=null; } _liveViewOwner=null; closeSheet("Live"); };
if($("scrimLive")) $("scrimLive").onclick=()=>{ if($("liveClose")) $("liveClose").onclick(); };
$("cNo").onclick=confirmClose;
$("cScrim").onclick=confirmClose;
$("cYes").onclick=()=>{ const fn=_confirmYes; confirmClose(); if(fn) fn(); };
// ---- session timer ----
function tmrFmt(s){ s=Math.floor(s); const m=Math.floor(s/60), ss=s%60; return m+":"+(ss<10?"0":"")+ss; }
function tmrElapsed(){ return timer.elapsed + (timer.running && timer.startedAt ? (Date.now()-timer.startedAt)/1000 : 0); }
function tmrRender(){
  const idle = !timer.running && timer.elapsed===0;   // not started yet → collapse to a slim "Start" affordance
  $("tmrTime").textContent=tmrFmt(tmrElapsed());
  $("timerBar").classList.toggle("run", timer.running);
  $("timerBar").classList.toggle("idle", idle);
  $("tmrToggle").innerHTML = timer.running ? ICON.pause : ICON.play;
  $("tmrLbl").textContent = timer.running ? "running" : (timer.elapsed>0?"paused":"Start session timer");
  $("tmrReset").style.visibility = (timer.elapsed>0||timer.running) ? "visible" : "hidden";
  updateTimerStick();
  updateTrainingState();
}
// A session is "underway" once the clock is running or paused mid-workout. In that state the Workout
// screen drops its setup chrome (start buttons, day toggle, header icons) so training fills the screen.
function sessionUnderway(){ return timer.running || timer.elapsed>0; }
// "Still training?" — offered when a session is open but no set has been completed for ABSENT_MS.
// On iOS the page is suspended while backgrounded, so this fires on RETURN rather than during the absence;
// a true push needs a push listener in sw.js, which doesn't exist. Finishing is non-destructive: the prompt
// saves through the normal Finish path, which counts time to the last set (B5).
function maybeAskFinish(){
  if(!plans.length) return;                       // init() hasn't finished loading yet
  if(_absenceAsked || !sessionUnderway() || !_lastSetAt) return;
  if($("confirmWrap") && $("confirmWrap").classList.contains("show")) return;
  const ago=Math.round((Date.now()-_lastSetAt)/60000); if(ago < ABSENT_MS/60000) return;
  _absenceAsked=true;                             // re-armed by the next completed set (see restStart)
  confirmAsk("No sets for "+ago+" minutes. Finish this workout? Your time counts up to your last set.",
             "Finish", ()=>{ try{ Promise.resolve($("saveBtn").onclick()).catch(()=>toast("Couldn't save — your sets are still here.")); }catch(e){} }, "go");
}
function updateTrainingState(){ document.body.classList.toggle("training", sessionUnderway()); updateClearBtn(); }
// Pin the session + rest timers to the top while a workout's underway (active timer OR a running
// rest). .stick enables position:sticky; an IntersectionObserver adds .stuck (the backdrop) only once
// the bar actually reaches the top, so nothing changes visually until you scroll.
function updateTimerStick(){
  const w=$("timersBar"); if(!w) return;
  const rb=$("restBar");
  const active = timer.running || timer.elapsed>0 || (rb && rb.classList.contains("show"));
  w.classList.toggle("stick", !!active);
}
function tmrStart(){ if(timer.running) return; timer.startedAt=Date.now(); timer.running=true; timer.iv=setInterval(tmrRender,1000); tmrRender(); acquireWake(); }
function tmrPause(){ if(!timer.running) return; timer.elapsed=tmrElapsed(); timer.running=false; timer.startedAt=null; if(timer.iv){clearInterval(timer.iv);timer.iv=null;} tmrRender(); if(!(rest.iv&&rest.startedAt)) releaseWake(); }
function tmrReset(){ timer.elapsed=0; timer.running=false; timer.startedAt=null;
  _lastSetEl=0; _lastSetAt=0; _absenceAsked=false;   // a reset session must not inherit a stale stamp
  document.querySelectorAll("#exlist .setrow").forEach(r=>r.dataset.rested="");
  if(typeof _prCelebrated!=="undefined") _prCelebrated.clear();   // a new session celebrates its own PR sets
  if(timer.iv){clearInterval(timer.iv);timer.iv=null;} tmrRender(); if(!(rest.iv&&rest.startedAt)) releaseWake(); }
$("tmrToggle").onclick=()=> timer.running ? tmrPause() : tmrStart();
$("tmrReset").onclick=tmrReset;
tmrRender();
// ---- rest timer between sets ----
let _ac;
function beep(){ try{ _ac=_ac||new (window.AudioContext||window.webkitAudioContext)(); if(_ac.state==="suspended") _ac.resume();
  const o=_ac.createOscillator(), g=_ac.createGain(); o.connect(g); g.connect(_ac.destination);
  o.frequency.value=880; const t=_ac.currentTime; g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.18,t+0.02); g.gain.exponentialRampToValueAtTime(0.0001,t+0.4);
  o.start(t); o.stop(t+0.42); }catch(e){} }
// requestPermission() returns a promise that REJECTS when called outside a user gesture, and a sync
// try/catch can't catch that — it surfaced as an unhandled rejection in the console every time a set was
// logged programmatically. Older Safari uses the callback form and returns undefined, hence the guard.
function ensureNotifyPerm(){ try{ if(window.Notification && Notification.permission==="default"){
  const p=Notification.requestPermission(); if(p && p.catch) p.catch(()=>{}); } }catch(e){} }
// Screen Wake Lock — keep the display awake while a set/rest is running so the timer stays visible without
// the phone sleeping. (A true lock-screen live countdown like Hevy's needs a native app / iOS Live Activity;
// a PWA can't render one. This is the feasible half: don't let the screen sleep mid-workout.)
let _wakeLock=null;
async function acquireWake(){ try{ if("wakeLock" in navigator && !_wakeLock){ _wakeLock=await navigator.wakeLock.request("screen"); _wakeLock.addEventListener("release",()=>{ _wakeLock=null; }); } }catch(e){} }
function releaseWake(){ try{ if(_wakeLock){ _wakeLock.release(); _wakeLock=null; } }catch(e){} }
// the OS drops a wake lock when the tab backgrounds; re-acquire on return if a timer is still active
document.addEventListener("visibilitychange", ()=>{ if(document.visibilityState!=="visible") return;
  // repaint both clocks on return: the intervals are throttled or frozen while backgrounded, so the
  // displayed time can be minutes stale even though the underlying Date.now() maths is sound
  if(timer.running||timer.elapsed>0) tmrRender();
  if(rest.iv&&rest.startedAt){ rest.elapsed=Math.max(0,Math.round((Date.now()-rest.startedAt)/1000)); restRender(); }
  if(timer.running || (rest.iv && rest.startedAt)) acquireWake();
  maybeAskFinish(); });
setInterval(()=>{ try{ maybeAskFinish(); }catch(e){} }, 60000);
function restRender(){ const t=rest.elapsed; $("restTime").textContent=tmrFmt(t);
  $("restProg").style.width=(rest.target?Math.max(0,Math.min(100,(t/rest.target)*100)):0)+"%"; }
// counts UP from 0; called fresh every time a set is finished so rest never carries over between sets
function restStart(sec){ _lastSetEl=tmrElapsed(); _lastSetAt=Date.now(); _absenceAsked=false;
  rest.target=Math.max(5, sec||settings.restSec||180); rest.elapsed=0; rest.startedAt=Date.now(); rest.alerted=false; ensureNotifyPerm();
  $("restBar").classList.add("show"); $("restBar").classList.remove("done"); restRender(); updateTimerStick(); acquireWake();
  if(rest.iv) clearInterval(rest.iv);
  rest.iv=setInterval(()=>{ rest.elapsed=Math.max(0,Math.round((Date.now()-rest.startedAt)/1000)); restRender(); if(!rest.alerted && rest.elapsed>=rest.target) restReached(); }, 250); }
function restStop(){ if(rest.iv){ clearInterval(rest.iv); rest.iv=null; } rest.startedAt=null; $("restBar").classList.remove("show","done"); updateTimerStick(); if(!timer.running) releaseWake(); }
function restReached(){ rest.alerted=true;
  if(navigator.vibrate) try{ navigator.vibrate([0,220,120,220]); }catch(e){}
  try{ if(window.Notification && Notification.permission==="granted") new Notification("Rest done 💪", {body:"Time for your next set.", tag:"yalla-rest", renotify:true}); }catch(e){}
  beep(); toast("Rest target reached — next set!", true);
  $("restBar").classList.add("done"); }  // keep counting up until the next set restarts it (or skip)
function restAdjust(d){ if(!$("restBar").classList.contains("show")) return; rest.target=Math.max(15,Math.min(1800,rest.target+d)); settings.restSec=rest.target; sset("settings",settings); if(rest.elapsed<rest.target){ rest.alerted=false; $("restBar").classList.remove("done"); } restRender(); }
// set the rest target to an exact value (also the saved default for next time)
function restSetTarget(sec){ rest.target=Math.max(5,Math.min(1800,Math.round(sec))); settings.restSec=rest.target; sset("settings",settings);
  if(rest.elapsed<rest.target){ rest.alerted=false; $("restBar").classList.remove("done"); } restRender(); }
// Parse a rest duration. With a colon it's mm:ss. Without one — the case a numeric keypad forces, since
// it has no colon — digits are read microwave-style (last two = seconds, the rest = minutes): "300" → 3:00,
// "130" → 1:30, "90" → 1:30, "45" → 0:45. This fixes "type 300 for 3:00 and it jumps to 5:00" (300 s).
function parseRest(v){ v=String(v).trim(); if(!v) return 0;
  if(v.indexOf(":")>=0){ const p=v.split(":"); return (parseInt(p[0])||0)*60+(parseInt(p[1])||0); }
  const d=parseInt(v.replace(/\D/g,""))||0; return Math.floor(d/100)*60 + (d%100); }
// tap the time → type an exact rest (mm:ss or seconds). The live counter is paused on the swapped-in input.
let _restEditing=false;
function restEdit(){ if(_restEditing || !$("restBar").classList.contains("show")) return; _restEditing=true;
  const span=$("restTime"), inp=document.createElement("input");
  inp.type="text"; inp.inputMode="numeric"; inp.className="restedit"; inp.value=tmrFmt(rest.target); inp.setAttribute("aria-label","Set rest time");
  span.style.display="none"; span.parentNode.insertBefore(inp, span.nextSibling); inp.focus(); inp.select();
  const done=commit=>{ if(!_restEditing) return; _restEditing=false;
    if(commit){ const sec=parseRest(inp.value); if(sec) restSetTarget(sec); }
    inp.remove(); span.style.display=""; restRender(); };
  inp.onkeydown=e=>{ if(e.key==="Enter"){ e.preventDefault(); done(true); } else if(e.key==="Escape"){ done(false); } };
  inp.onblur=()=>done(true);
}
$("restSkip").onclick=restStop;
$("restMinus").onclick=()=>restAdjust(-15);
$("restPlus").onclick=()=>restAdjust(15);
$("restTime").onclick=restEdit;
$("exlist").addEventListener("change", e=>{ if(!e.target.classList||(!e.target.classList.contains("w")&&!e.target.classList.contains("r"))) return;
  const row=e.target.closest(".setrow"); if(!row) return;
  const g=row.closest(".group"), name=g&&g.dataset.ex;
  const wv=row.querySelector(".w").value.trim(), rv=row.querySelector(".r").value.trim();
  // a set is "done" once reps are in and either a weight is entered, it's a timed hold, or it's a
  // bodyweight move (no weight needed) — the bodyweight case is why rest sometimes didn't start.
  // write-once per row: going back to fix a typo on set 1 used to send a running 2:40 rest back to 0:00,
  // and the blur fired by tapping Finish used to re-stamp the last-set time at Finish time
  if(!row.dataset.rested && rv!=="" && (wv!=="" || row.classList.contains("timed") || (name&&isBW(name)))){
    row.dataset.rested="1"; if(!timer.running && timer.elapsed===0) tmrStart(); restStart(); } captureDraft();
  refreshSetFocus(g); prSetDone(row); });
// Visual only: a logged set's number becomes a filled check disc. Same "done" rule as the rest-timer
// trigger; never changes what's logged.
function setRowDone(row, name){
  if(row.classList.contains("warm")) return false;
  const w=row.querySelector(".w"), r=row.querySelector(".r");
  const wv=w?w.value.trim():"", rv=r?r.value.trim():"";
  return rv!=="" && (wv!=="" || row.classList.contains("timed") || (name&&isBW(name)));
}
function refreshSetFocus(g){
  if(!g||!g.dataset) return; const name=g.dataset.ex;
  let done=0, total=0;
  let n=0;
  g.querySelectorAll(".setrow").forEach(row=>{
    const ok=setRowDone(row, name), was=row.classList.contains("done"), sn=row.querySelector(".sn");
    row.classList.toggle("done", ok);
    // pop the disc only when a set turns done after the row is on screen, not when a render restores it
    if(sn && ok && !was && row.dataset.seen){ sn.classList.add("justdone"); sn.addEventListener("animationend", ()=> sn.classList.remove("justdone"), {once:true}); }
    row.dataset.seen="1";
    const warm=row.classList.contains("warm"); if(!warm){ total++; n++; if(ok) done++; }   // warm-ups aren't working sets
    if(sn) sn.setAttribute("aria-label", warm ? "Warm-up set, tap to make it a working set" : "Set "+n+(ok?", done":"")+", tap to mark warm-up");
  });
  // The counter is injected rather than built into the two header templates (plan mode and free mode),
  // so there is one place that knows how to count a set as done.
  const head=g.querySelector(".exhead"); if(!head) return;
  let tag=head.querySelector(".setcount");
  if(!tag){ tag=document.createElement("span"); tag.className="setcount";
    const nm=head.querySelector(".nm");
    if(nm && nm.nextSibling) head.insertBefore(tag, nm.nextSibling); else head.appendChild(tag); }
  tag.textContent = total ? done+"/"+total : "";
  tag.setAttribute("aria-label", total ? done+" of "+total+" sets done" : "");
  tag.style.display = total ? "" : "none";
  tag.classList.toggle("all", total>0 && done===total);
}
// ---- per-set hold timer for isometric moves: tap the button to start a count-up, tap again to log the seconds ----
let hold={ row:null, startedAt:0, iv:null };
function holdStop(write){
  if(hold.iv){ clearInterval(hold.iv); hold.iv=null; }
  const row=hold.row, started=hold.startedAt; hold.row=null;
  if(!row) return;
  const btn=row.querySelector(".holdbtn"); if(btn){ btn.classList.remove("running"); btn.innerHTML=ICON.play; }
  if(write){ const secs=Math.max(1,Math.round((Date.now()-started)/1000)); const rEl=row.querySelector(".r"); if(rEl) rEl.value=secs;
    const g=row.closest(".group"); updateSetVol(row, g&&g.dataset.ex); captureDraft(); refreshSetFocus(g);
    restStart();   // the hold IS the set — start the rest clock once it ends
    if(!prSetDone(row) && navigator.vibrate) try{ navigator.vibrate([0,40,30,40]); }catch(e){} }
}
function holdStart(row){
  if(hold.row) holdStop(true);                       // only one hold at a time
  hold.row=row; hold.startedAt=Date.now();
  const btn=row.querySelector(".holdbtn"); if(btn) btn.classList.add("running");
  if(!timer.running && timer.elapsed===0) tmrStart();
  hold.iv=setInterval(()=>{ const b=hold.row&&hold.row.querySelector(".holdbtn"); if(b) b.textContent=Math.round((Date.now()-hold.startedAt)/1000)+"s"; }, 200);
}
$("exlist").addEventListener("click", e=>{ const b=e.target.closest(".holdbtn"); if(!b) return; e.preventDefault();
  const row=b.closest(".setrow"); if(!row) return;
  if(hold.row===row) holdStop(true); else holdStart(row); });
function activePlan(){ return plans.find(p=>p.id===settings.activePlanId) || plans[0]; }
// intended sessions/week: a built plan stores it; otherwise collapse A/B/C variants of the same
// slot ("Upper A"/"Upper B" → one session) so the activity ring's target isn't doubled by Variety.
function planSessionsPerWeek(plan){
  if(plan && plan.daysPerWeek) return plan.daysPerWeek;
  const rl=(plan&&plan.workouts||[]).filter(w=>w.rotate!==false);
  const slots=new Set(rl.map(w=>String(w.name||"").replace(/\s+[A-C]$/,"").trim().toLowerCase()));
  return slots.size || rl.length;
}
// Build a same-muscle rotation pool for an accessory: the move itself first, then curated/library
// alternatives that suit the user's level, experience and injuries (one per movement family). Cap 3.
function rotationPool(name, lvl, inj, exp, taken){
  // `taken` = names/families already used elsewhere in the same session, so a rotation can't
  // duplicate another move (e.g. rotate an accessory into the slot's own compound bench press).
  const primary=muscleFor(name)[0]||"", out=[name], fams=new Set([familyKey(name)]);
  const usedN=(taken&&taken.names)||new Set(), usedF=(taken&&taken.fams)||new Set();
  const add=n=>{ if(out.length>=3 || !n || out.includes(n) || usedN.has(n)) return;
    if((muscleFor(n)[0]||"")!==primary) return;
    const f=familyKey(n); if(fams.has(f) || usedF.has(f)) return;
    if(injuryBlocks(n,inj) || !allowsAt(n,lvl) || !suitsExp(n,exp)) return;
    fams.add(f); out.push(n); };
  (ALTS[name]||[]).forEach(add);
  if(out.length<3) exerciseLibrary().forEach(add);
  return out;
}
// Auto-rotation overlay: for the active slot, pick each tagged accessory's variant from its rot pool
// by how many times the slot has been completed. rotKeep = indices the user pinned back to the base.
let rot={}, rotKeep=new Set(), _rotSig=null;
function applyRotation(){
  rot={}; rotKeep=new Set();
  const p=activePlan(), w=p&&p.workouts[curWk];
  if(freeMode || !w) return;
  const cnt=(settings.slotDone&&settings.slotDone[p.id+"|"+w.name])||0;
  w.ex.forEach((e,xi)=>{ if(e.rot&&e.rot.length>1){ const pick=e.rot[cnt%e.rot.length]; if(pick&&pick!==e.n) rot[xi]=pick; } });
}
function rotateList(p){ return p.workouts.filter(w=>w.rotate!==false); }
function nextRotateIndex(p){
  const ptr=settings.pointers[p.id]||0; const rl=rotateList(p);
  if(!rl.length) return -1;
  const w=rl[ptr%rl.length]; return p.workouts.indexOf(w);
}

async function init(){
  settings = Object.assign(settings, (await sget("settings"))||{});
  _syncOwner = !!(((await sget("_syncMeta"))||{}).__owner);   // this device syncs an account: its first reconcile may bring another device's stars
  applyTheme();
  const stored = await sget("plans");
  plans = stored ? stored : JSON.parse(JSON.stringify(DEFAULT_PLANS));
  last  = (await sget("lastsets")) || {};
  bw    = (await sget("bodyweight")) || [];
  hist  = (await sget("history")) || {};
  extlog= (await sget("extlog")) || [];
  draft = (await sget("draft")) || {};
  ledger= (await sget("predledger")) || []; calib=(await sget("calib")) || lgFreshCalib();
  ledgerTick(false);   // score any forecasts whose horizon completed while the app was closed (no emission)
  if(settings.achUnlocked==null) settings.achUnlocked=unlockedIds();
  if(!settings.planStartAt) settings.planStartAt=Date.now();   // start the "freshen" clock for the active plan
  if(!settings.rest3){ if(settings.restSec===90) settings.restSec=180; settings.rest3=true; await sset("settings",settings); }   // default rest moved 90s→3min (one-time bump of the old default)
  if(!settings.bodyDefaultsCleared){                            // clear the old shipped body defaults (68/75/male) so untouched profiles read empty
    if(settings.goalStart===68) settings.goalStart=null;
    if(settings.goalTarget===75) settings.goalTarget=null;
    if(settings.sex==="male" && settings.heightCm==null && settings.bodyfatPct==null) settings.sex=null;
    settings.bodyDefaultsCleared=true; await sset("settings",settings);
  }
  if(!settings.examplesV4){                          // refresh the built-in example plans (must run before the legacy plan-specific migrations below)
    const oldEx=["pushpull","ppl","fullbody","marie","beginner-glp","advanced-intense","intermediate-balanced"];
    plans = plans.filter(p=> !oldEx.includes(p.id));                       // drop the previous demo plans (user-built plans are kept)
    DEFAULT_PLANS.forEach(d=>{ if(!plans.some(p=>p.id===d.id)) plans.push(JSON.parse(JSON.stringify(d))); });
    if(!plans.length) plans=JSON.parse(JSON.stringify(DEFAULT_PLANS));
    if(!plans.some(p=>p.id===settings.activePlanId)) settings.activePlanId=plans[0].id;
    settings.examplesV4=true;
    await sset("plans",plans); await sset("settings",settings);
  }
  if(!settings.examplesV5){                          // restore the "Glutes, Legs & Posture" example (dropped when V4 switched to standard splits) — additive only
    DEFAULT_PLANS.forEach(d=>{ if(!plans.some(p=>p.id===d.id)) plans.push(JSON.parse(JSON.stringify(d))); });
    settings.examplesV5=true;
    await sset("plans",plans); await sset("settings",settings);
  }
  if(!settings.examplesV8){                          // refresh example plans to the latest (brief titles + attributes; adds Minimalist 6-Day)
    const exIds=DEFAULT_PLANS.map(d=>d.id);
    plans = plans.filter(p=> !exIds.includes(p.id));
    DEFAULT_PLANS.forEach(d=> plans.push(JSON.parse(JSON.stringify(d))));
    if(!plans.some(p=>p.id===settings.activePlanId)) settings.activePlanId=plans[0].id;
    settings.examplesV8=true;
    await sset("plans",plans); await sset("settings",settings);
  }
  if(!settings.armsSmoothed){
    // Only upgrade the original, untouched Upper/Lower plan — never a customized one.
    const pp=plans.find(p=>p.id==="pushpull");
    const oldNames=["Upper A","Lower A","Upper B","Lower B","Travel"];
    if(pp && pp.workouts.length===5 && pp.workouts.every((w,i)=>w.name===oldNames[i])){
      const fresh=DEFAULT_PLANS.find(p=>p.id==="pushpull");
      pp.name=fresh.name;
      pp.workouts.forEach((w,i)=>{ w.name=fresh.workouts[i].name; w.sub=fresh.workouts[i].sub; });
      const addArm=(w,ex,before)=>{ if(!w.ex.some(e=>e.n===ex.n)){ const idx=w.ex.findIndex(e=>e.n===before); w.ex.splice(idx<0?w.ex.length:idx,0,ex); } };
      addArm(pp.workouts[0], {n:"EZ-Bar Curl",t:"3 × 8–12",s:3}, "Hanging Leg Raise");
      addArm(pp.workouts[2], {n:"Triceps Pushdown",t:"3 × 10–15",s:3}, "Cable Crunch");
      await sset("plans",plans);
    }
    settings.armsSmoothed=true;
    await sset("settings",settings);
  }
  if(!settings.titlesSmoothed){
    const pp=plans.find(p=>p.id==="pushpull");
    if(pp && (pp.name==="Push / Pull (Intensity)" || pp.name==="Upper / Lower Strength")) pp.name="Upper & Lower Strength";
    const mp=plans.find(p=>p.id==="marie");
    if(mp && mp.name==="Marie · Glutes & Legs") mp.name="Marie's Glutes & Legs";
    settings.titlesSmoothed=true;
    await sset("plans",plans); await sset("settings",settings);
  }
  if(!settings.marieHomeAdded){
    const mp=plans.find(p=>p.id==="marie");
    if(mp && !mp.workouts.some(w=>w.name==="Home")){
      const fresh=DEFAULT_PLANS.find(p=>p.id==="marie"), home=fresh&&fresh.workouts.find(w=>w.name==="Home");
      if(home) mp.workouts.push(JSON.parse(JSON.stringify(home)));
      await sset("plans",plans);
    }
    settings.marieHomeAdded=true;
    await sset("settings",settings);
  }
  if(!settings.armsUpgraded){
    // Evidence-based upgrade: arm moves → their lengthened-position variants (greater stretch = more growth).
    const pp=plans.find(p=>p.id==="pushpull");
    if(pp && pp.name==="Upper & Lower Strength"){
      pp.workouts.forEach(w=> w.ex.forEach(e=>{
        if(e.n==="EZ-Bar Curl") e.n="Incline DB Curl";
        if(e.n==="Triceps Pushdown") e.n="Overhead Triceps Extension";
      }));
      await sset("plans",plans);
    }
    settings.armsUpgraded=true;
    await sset("settings",settings);
  }
  if(!settings.deltsIntegrated){
    // ensure every loaded upper-body day trains the side and rear delts directly (not just as press/row helpers)
    const pp=plans.find(p=>p.id==="pushpull");
    if(pp){
      const UPPER=["Chest","Lats","Upper Back","Front Delts","Side Delts","Rear Delts"];
      const addBeforeCore=(w,ex)=>{ if(w.ex.some(e=>e.n===ex.n)) return; const ci=w.ex.findIndex(e=>muscleFor(e.n)[0]==="Core"); if(ci>=0) w.ex.splice(ci,0,ex); else w.ex.push(ex); };
      pp.workouts.forEach(w=>{
        const prims=(w.ex||[]).map(e=>muscleFor(e.n)[0]);
        const isUpper=prims.some(m=>UPPER.indexOf(m)>=0), hasGym=(w.ex||[]).some(e=>exLevel(e.n)==="gym");
        if(!isUpper || !hasGym) return;
        if(prims.indexOf("Side Delts")<0) addBeforeCore(w, {n:"Lateral Raise", t:"3 × 12–20", s:3});
        if(prims.indexOf("Rear Delts")<0) addBeforeCore(w, {n:"Face Pulls", t:"3 × 15–20", s:3});
      });
      await sset("plans",plans);
    }
    settings.deltsIntegrated=true;
    await sset("settings",settings);
  }
  if(!settings.accessorySupersets){
    // pair up the small isolation accessories (delts/arms) on upper gym days so they're done as a time-saving superset
    const pp=plans.find(p=>p.id==="pushpull");
    if(pp){
      const ISO=["Side Delts","Rear Delts","Biceps","Triceps"];
      pp.workouts.forEach(w=>{
        if(!(w.ex||[]).some(e=>exLevel(e.n)==="gym")) return;
        const idx=w.ex.map((e,i)=>ISO.indexOf(muscleFor(e.n)[0])>=0?i:-1).filter(i=>i>=0);
        if(idx.length>=2) idx.forEach(i=>{ if(!w.ex[i].ss) w.ex[i].ss="a"; });
      });
      await sset("plans",plans);
    }
    settings.accessorySupersets=true;
    await sset("settings",settings);
  }
  if(!settings.supersetsByArea){
    // a superset must stay in one gym area — re-group so dumbbell moves pair together and cable moves stay separate
    const pp=plans.find(p=>p.id==="pushpull");
    if(pp){ pp.workouts.forEach(w=>{ if((w.ex||[]).some(e=>exLevel(e.n)==="gym")) regroupSupersets(w); });
      await sset("plans",plans); }
    settings.supersetsByArea=true;
    await sset("settings",settings);
  }
  if(!settings.sharingOptIn){
    // Feed sharing is now opt-in (off by default). Reset any prior auto-on default to off.
    settings.shareActivity=false; settings.sharingOptIn=true;
    await sset("settings",settings);
  }
  if(settings.shareLevel==null){
    // Migrate the old on/off toggle to the 4-level intensity scale. "On" mapped to summary-only
    // (the old behaviour never shared weights), so the conservative carry-over is level 1.
    settings.shareLevel = settings.shareActivity ? 1 : 0;
    await sset("settings",settings);
  }
  if(!settings.ssSameArea){   // re-pair every superset within one gym area (dumbbell/barbell/cable/machine/body)
    plans.forEach(p=> (p.workouts||[]).forEach(w=>{ if((w.ex||[]).some(e=>e.ss)) regroupSupersets(w,"accessory"); }));
    settings.ssSameArea=true;
    await sset("plans",plans); await sset("settings",settings);
  }
  if(!settings.activePlanId) settings.activePlanId = plans[0].id;
  checkStars({silent:true});   // close-out: weeks earned while the app was closed are recorded, never celebrated (no-op before the seed)
  travelAccrue(); await ssetQuiet("settings",settings);   // bank time in the current context + start this launch's clock
  const ni = nextRotateIndex(activePlan()); curWk = ni>=0?ni:0;
  await loadEvidence(); // load canonical evidence.json → builds the coach-tip pool + Learn library
  decideTip();          // pick this launch's coach tip (if any) before the first render
  assertUniqueIds();    // a duplicated id silently binds handlers to the wrong element
  // Bring a mid-workout session back after a reload or an app kill. The service worker reloads the page on
  // every deploy and iOS evicts backgrounded PWAs, so a zeroed clock on a screen full of logged sets was
  // the commonest "the timer bugs" report. ONE-SHOT here — never from applyDraft(), which re-runs on every
  // mid-session render and would snap a live clock backwards on every tap.
  if(draft.__mode==="free") freeMode=true;
  const _d=draft[draftSig()];
  if(_d && _d.tm && Date.now()-(_d.t||0) <= DRAFT_TTL){
    const gap=Date.now()-(_d.t||0);
    // count only up to the last moment the app actually saw you (draft.t is refreshed by every keystroke
    // and by flushDraft on pagehide) — a phone that evicted the tab overnight must not come back showing
    // a 14-hour workout.
    timer.elapsed=(_d.tm.e||0) + (_d.tm.rn && _d.tm.sa ? Math.max(0,((_d.t||Date.now())-_d.tm.sa)/1000) : 0);
    timer.running=false; timer.startedAt=null;
    _lastSetEl=_d.le||0; _lastSetAt=_d.la||0; sessGym=_d.gy||null;
    if(_d.tm.rn && gap < ABSENT_MS) tmrStart();   // short gap → pick the clock straight back up
    else tmrRender();                             // long gap → come back paused; maybeAskFinish offers Finish
  }
  renderAll();
  showTab("overview");   // open on the coach home
  hideSplash();          // UI is painted — fade out the launch splash
  // first run of week stars: count the existing history after first paint, silently (seedStars no-ops once seeded)
  if(!settings.stars || settings.stars.seededEmpty){ const seed=()=>{ if(settings.stars) return starOwnBackfill(); seedStars(); renderStarsEverywhere(); };
    if(window.requestIdleCallback) requestIdleCallback(seed, {timeout:2000}); else setTimeout(seed, 300); }
  if(!settings.objective){ const ob=$("onboardWrap"); if(ob) ob.classList.add("show"); }   // ask the objective up front
  try{ if(location.hash && location.hash.indexOf("LIFTLOG1:")>=0){ openImport(decodeURIComponent(location.hash.slice(1))); } }catch(e){}
  maybeBackupNudge();
  _booting=false;
}
// Gentle reminder to export a backup — phone storage can be cleared, so a months-old log shouldn't live only on-device.
function maybeBackupNudge(){
  try{
    const hasData = (hist && Object.keys(hist).length) || (settings.sessions||0) > 0;
    if(!hasData) return;
    const ref = settings.lastBackupAt || settings.lastBackupNudgeAt;
    if(!ref){ settings.lastBackupNudgeAt = Date.now(); sset("settings", settings); return; } // start the clock on first session with data
    if((Date.now()-ref)/86400000 < 14) return;                                               // at most once every 14 days
    settings.lastBackupNudgeAt = Date.now(); sset("settings", settings);
    setTimeout(()=>toast("Tip: back up your log in Settings ⚙ → Your data. Phones can clear saved app data.", true), 1400);
  }catch(e){}
}
// renderAll was the one render path that ignored freeMode, so anything calling it mid-free-session (theme
// apply, plan save/delete, restore, boot resume) painted the plan day over the free workout — and the next
// captureDraft() then wrote those plan rows into draft["free"].
function renderAll(){ renderNav(); renderDash(); renderSeg(); if(freeMode) renderFree(); else renderWorkout(); }

// ================= dashboard =================
function renderNav(){
  $("ltName").textContent = freeMode ? "Free workout" : ((activePlan().workouts[curWk]||{}).name || "Workout");
  $("planSub").textContent = planMeta(activePlan());
  $("bwGoalTxt").textContent = settings.goalTarget!=null ? settings.goalTarget+" kg" : "—";
}
// ================= overview (coach home) =================
function ovGreetWord(){ const h=new Date().getHours(); return h<5?"Still up":h<12?"Good morning":h<18?"Good afternoon":"Good evening"; }
// "Good morning, Sam" — the late-night one is a question, so its "?" goes after the name
function ovGreeting(){ const w=ovGreetWord(), nm=settings.displayName||settings.name; return w+(nm?", "+nm:"")+(w==="Still up"?"?":""); }
function trainedToday(){ const t=new Date().toDateString(); return Object.keys(hist).some(n=>(hist[n]||[]).some(e=>new Date(e.d).toDateString()===t)); }
// muscles the active plan actually intends to train (its objective) — so we flag what the plan targets, not what it deliberately skips
function planScopeMuscles(plan){
  if(!plan) return MGROUPS.slice();                                   // no plan → balanced (all muscles in scope)
  const t=planVolume(plan).totals, max=Math.max(1, ...MGROUPS.map(g=>t[g]||0));
  const scope=MGROUPS.filter(g=> (t[g]||0) >= max*0.30);              // ≥30% of the top muscle = deliberately trained
  return scope.length ? scope : MGROUPS.slice();
}
// is the active plan a broad/balanced build, or focused on a few areas?
function planObjective(plan){
  const general={muscle:"muscle gain",strength:"strength",fatloss:"fat loss",fitness:"general fitness"}[settings.objective]||"balanced muscle build";
  if(!plan) return {label:general, scope:MGROUPS.slice(), balanced:true};
  const scope=planScopeMuscles(plan), balanced=scope.length>=8;
  const t=planVolume(plan).totals;
  const top=MGROUPS.slice().sort((a,b)=>(t[b]||0)-(t[a]||0)).filter(g=>(t[g]||0)>0).slice(0,3).map(g=>MSHORT[g]||g);
  const label = balanced ? general : (general+" · "+listWords(top));
  return {label, scope, balanced};
}
function ovUnderMuscles(){
  if(!Object.keys(hist).length) return [];                            // nothing logged yet — don't nag
  const scope=planScopeMuscles(activePlan());
  const wk=weeklyEquiv(muscleVolume(28,"sets").totals, 28);
  return scope.filter(g=> !NO_TARGET.has(g) && (wk[g]||0) < WEEKLY_SET_MIN);   // plan targets it, but logs are under the growth threshold (Neck exempt)
}
// a small, fading deck for the overview — surfaces only tips you haven't read yet, a few at a time.
// feature tips drop off automatically once you've used the feature; evergreen ones you dismiss.
function discoverTips(){
  const tips=settings.seenTips||{}, read=settings.discRead||{}, builtPlan=plans.some(p=>/^(custom|plan)/.test(p.id)), logged=Object.keys(hist).length>0, all=[];
  if(!builtPlan) all.push({id:"build",t:"Build a plan around your goal",s:"Pick your days, time and focus — I choose the split and exercises for you.",btn:"Build a plan",act:"build"});
  if(!logged) all.push({id:"log",t:"Log your first session",s:"Tap a set to record weight × reps. I track progress per exercise across plans.",btn:"Go to workout",act:"workout"});
  if(!tips.muscles) all.push({id:"muscles",t:"See your muscle balance",s:"A radar of weekly sets per muscle vs the growth target — spot gaps at a glance.",btn:"Muscle balance",act:"balance"});
  all.push({id:"repeat",t:"Log like last time",s:"On any workout, tap “Log like last time” to prefill last session — then just tweak and finish.",btn:"Go to workout",act:"workout"});
  all.push({id:"swap",t:"Swap for today or for good",s:"Tap an exercise's swap icon, then choose “Permanently” to change it in the plan itself.",btn:"Go to workout",act:"workout"});
  all.push({id:"about",t:"Coach notes per plan",s:"Open “About” at the top-right of the workout list for the plan's focus, split and what to watch.",btn:"Go to workout",act:"workout"});
  all.push({id:"swipe",t:"Swipe between pages",s:"Swipe left or right to move through Overview, Workout and Me — no need to reach the tab bar."});
  return all.filter(x=> !read[x.id]).slice(0,3);   // only unread, a few at a time
}
// remove a single tip in place (no full re-render — avoids a scroll jump / shake)
function dismissTip(id, card){
  settings.discRead=settings.discRead||{}; settings.discRead[id]=1; sset("settings",settings);
  if(!card){ return; }
  const wrap=card.parentElement; card.remove();
  const dots=wrap && wrap.nextElementSibling && wrap.nextElementSibling.classList.contains("discdots") ? wrap.nextElementSibling : null;
  const left=wrap ? wrap.querySelectorAll(".disccard").length : 0;
  if(!left){ const lbl=wrap.previousElementSibling; if(lbl && lbl.classList.contains("ed-label")) lbl.remove(); if(dots) dots.remove(); wrap.remove(); }
  else if(dots){ dots.innerHTML=Array.from({length:left},(_,i)=>'<span class="discdot'+(i===0?" on":"")+'"></span>').join(""); }
}
// Discover deck now lives on the Me tab (a persistent container we repopulate, so dismiss-by-id + rebuild)
function renderMeDiscover(){
  const wrap=$("meDiscover"), zone=$("meDiscZone"), dotsEl=$("meDiscDots"); if(!wrap) return;
  const dt=discoverTips();
  if(!dt.length){ if(zone) zone.style.display="none"; wrap.style.display="none"; if(dotsEl) dotsEl.style.display="none"; return; }
  if(zone) zone.style.display=""; wrap.style.display="";
  wrap.innerHTML=dt.map(d=>'<div class="group ovnudge disccard"><div class="pad"><button class="discx" data-tip="'+d.id+'" aria-label="Dismiss">✕</button><div class="ovbig sm" style="padding-right:20px;">'+esc(d.t)+'</div><p class="ovp" style="margin-top:8px;">'+esc(d.s)+'</p>'+(d.act?'<button class="btn wide ovdisc" data-act="'+d.act+'" data-tip="'+d.id+'" style="margin-top:16px;">'+esc(d.btn)+'</button>':'')+'</div></div>').join('');
  if(dotsEl){ if(dt.length>1){ dotsEl.style.display=""; dotsEl.innerHTML=dt.map((_,i)=>'<span class="discdot'+(i===0?' on':'')+'"></span>').join(''); } else dotsEl.style.display="none"; }
  wrap.querySelectorAll(".discx").forEach(x=> x.onclick=(ev)=>{ ev.stopPropagation(); dismissTip(x.dataset.tip); renderMeDiscover(); });
  wrap.querySelectorAll(".ovdisc").forEach(b=> b.onclick=()=>{ if(b.dataset.tip){ settings.discRead=settings.discRead||{}; settings.discRead[b.dataset.tip]=1; sset("settings",settings); } ovAct(b.dataset.act); });
  if(dt.length>1 && dotsEl){ const cards=wrap.querySelectorAll(".disccard");
    wrap.onscroll=()=>{ let best=0, bd=1e9; cards.forEach((c,i)=>{ const d=Math.abs(c.offsetLeft-wrap.scrollLeft); if(d<bd){bd=d;best=i;} });
      dotsEl.querySelectorAll(".discdot").forEach((el,i)=> el.classList.toggle("on", i===best)); }; }
}
// Apple-style activity rings — concentric arcs filling toward each weekly target
function drawRings(id, rings){
  const c=$(id); if(!c) return; const ctx=c.getContext("2d"), W=c.width, cx=W/2, cy=W/2; ctx.clearRect(0,0,W,W);
  const n=rings.length, thick=W*(n>3?0.10:0.13), gap=W*(n>3?0.022:0.03); let r=W*0.5-thick/2-2;
  rings.forEach(rg=>{
    const pct=Math.max(0, Math.min(1, rg.target? rg.val/rg.target : 0));
    ctx.lineWidth=thick; ctx.lineCap="round";
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.strokeStyle=hexAlpha(rg.color,.18); ctx.stroke();   // track
    if(pct>0){ const a0=-Math.PI/2; ctx.beginPath(); ctx.arc(cx,cy,r,a0,a0+Math.PI*2*pct); ctx.strokeStyle=rg.color; ctx.stroke(); }
    r-=thick+gap;
  });
}
// ===== "This week" rings detail — tap the overview rings to see what each one means + which muscles
// you've trained vs the ones your plan targets but you haven't hit yet =====
function ringRow(color,label,val,target,desc,unit,dec){
  const pct=target?Math.min(100,Math.round(val/target*100)):0, done=target&&val>=target;
  const shown = dec ? round1(val) : Math.round(val);
  return '<div class="ringrow"><div class="ringrowhd"><span class="rrdot" style="background:'+color+'"></span>'
    +'<span class="rrlbl">'+label+'</span>'
    +'<span class="rrval"'+(done?' style="color:'+color+'"':'')+'>'+shown+' <small>/ '+target+(unit?' '+unit:'')+'</small>'+(done?' ✓':'')+'</span></div>'
    +'<div class="rrbar"><i style="width:'+pct+'%;background:'+color+'"></i></div>'
    +'<p class="rrdesc">'+desc+'</p></div>';
}
function openRingsDetail(){ renderRingsDetail(); openSheet("Rings"); }
// Weekly ring targets from the GROWTH model + your objective (not the active plan's prescribed days):
// aim for a per-muscle weekly dose across the major groups, scaled by goal, so the rings measure "enough
// to grow toward your objective" rather than "did you run the plan". Sessions follow from the volume.
function growthRingTargets(){
  const perMuscle = ({ muscle:WEEKLY_SET_TARGET, strength:8, fatloss:8, fitness:7 })[settings.objective] || 8;
  const majors = GAUGE_GROUPS.length;                       // the major muscle groups a rounded week should cover
  const sets = Math.round(majors * perMuscle * 0.6);        // whole-body hard sets ≈ per-muscle dose across majors, deflated for shared compound work
  return { sess: Math.max(2, Math.min(6, Math.ceil(sets/15))), sets, muscles: 12 };
}
function renderRingsDetail(){
  const box=$("ringsBody"); if(!box) return;
  const cut=Date.now()-7*86400000; let setsWk=0; const musWk=new Set();
  Object.keys(hist).forEach(n=>{ const gs=muscleFor(n); (hist[n]||[]).forEach(e=>{ if(e.d>=cut){ setsWk+=(e.n!=null?e.n:1)*effortOf(e); gs.forEach(g=>{ if(MGROUPS.indexOf(g)>=0) musWk.add(g); }); } }); });
  const f7=sessionCredit(7), _gt=growthRingTargets(), sessTarget=_gt.sess, setsTarget=_gt.sets;
  let h="";
  h+=ringRow("#ff6b3d","Sessions",f7,sessTarget,"Session-equivalents this week — a short session counts in proportion to the work done, so a couple of micro sessions add up to a full one. Aim for "+sessTarget+" to spread enough weekly volume for your goal.",null,true);
  h+=ringRow("#4dabf7","Hard sets",setsWk,setsTarget,"Working sets across every muscle this week — quality sets taken near failure are what drive growth.");
  // trained vs not-trained breakdown (the heart of the muscles ring), shown inside the Muscles row
  const scope=planScopeMuscles(activePlan());
  const trained=MGROUPS.filter(g=>musWk.has(g));
  const missing=scope.filter(g=>!musWk.has(g));
  let chips='<div class="ed-label" style="margin-top:12px;">Trained this week</div>';
  chips+= trained.length ? '<div class="muschips">'+trained.map(g=>'<span class="muschip on">'+esc(MSHORT[g]||g)+'</span>').join('')+'</div>'
                         : '<p class="rrdesc">Nothing logged yet this week — your first session lights these up.</p>';
  if(missing.length){ chips+='<div class="ed-label" style="margin-top:10px;">Your plan targets — not yet this week</div>'
    +'<div class="muschips">'+missing.map(g=>'<span class="muschip">'+esc(MSHORT[g]||g)+'</span>').join('')+'</div>'; }
  h+=ringRow("#51cf66","Muscles",musWk.size,12,"Distinct muscle groups you've trained this week. Spreading the work keeps you balanced and injury-resistant.").replace(/<\/div>$/, ()=>chips+'</div>');
  const cTgt=cardioTargetMins();
  if(cTgt>0) h+=ringRow("#9775fa","Cardio",cardioDoseWeek(7),cTgt,"Effort-adjusted aerobic minutes — a vigorous minute counts up to ~2× an easy one (you logged "+cardioMinsWeek(7)+" actual min).","min");
  h+='<div class="libteaser" id="ringsToMus" style="margin-top:8px;">See your full muscle balance →</div>';
  box.innerHTML=h;
  const done=[f7>=sessTarget, setsWk>=setsTarget, musWk.size>=12].concat(cTgt>0?[cardioDoseWeek(7)>=cTgt]:[]), shut=done.filter(Boolean).length;
  const lead=$("ringsLead"); if(lead){ lead.className="lh"+(shut===done.length?" good":""); lead.textContent=shut+" of "+done.length+" rings closed"; }
  const link=$("ringsToMus"); if(link) link.onclick=()=>{ closeSheet("Rings"); openMuscles(); };
}
// small weekly-sets sparkline for the overview
function drawOvSets(id){ const c=$(id); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const data=progWeeklyData("sets"), ac=accentHex(), hi=Math.max(1,...data), base=H-22, top=16, pad=12;
  const x=i=>pad+i*((W-pad*2)/(data.length-1)), y=v=>base-(v/hi)*(base-top);
  ctx.strokeStyle=hexAlpha(ac,.18); ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(pad,base+.5); ctx.lineTo(W-pad,base+.5); ctx.stroke();
  ctx.strokeStyle=ac; ctx.lineWidth=3; ctx.lineJoin="round"; ctx.lineCap="round"; ctx.beginPath();
  data.forEach((v,i)=>{ i?ctx.lineTo(x(i),y(v)):ctx.moveTo(x(i),y(v)); }); ctx.stroke();
  data.forEach((v,i)=>{ ctx.beginPath(); ctx.arc(x(i),y(v), i===data.length-1?5:3, 0, 7); ctx.fillStyle=i===data.length-1?ac:hexAlpha(ac,.5); ctx.fill(); });
  const l3=(getComputedStyle(document.documentElement).getPropertyValue('--l3')||'#888').trim();
  ctx.fillStyle=l3; ctx.font=cfont(W,"label"); ctx.textAlign="left"; ctx.fillText("10w ago",pad,H-5); ctx.textAlign="right"; ctx.fillText("now",W-pad,H-5);
}
function lastWorkoutTs(){ let m=0; Object.keys(hist).forEach(n=>(hist[n]||[]).forEach(e=>{ if(e.d>m) m=e.d; })); return m; }
// most recent logged rotational / anti-rotation move (0 = never) — drives the weekly rotational nudge
function lastRotationalTs(){ let m=0; Object.keys(hist).forEach(n=>{ if(!isRotational(n)) return; (hist[n]||[]).forEach(e=>{ if(e.d>m) m=e.d; }); }); return m; }
function daysOff(){ const t=lastWorkoutTs(); return t ? daysSince(t) : -1; }   // -1 = never logged
// a balanced no-equipment session, started in free mode
const HOME_MOVES=["Push-Ups","Pike Push-Ups","Reverse Lunge","Glute Bridge","Plank"];
function startHomeWorkout(){
  const s={}; HOME_MOVES.forEach(m=> s[m]=[]);
  draft["free"]={ t:Date.now(), s }; sset("draft", draft);
  if(settings.surprise){ settings.surprise=false; sset("settings",settings); }   // else the tab-show surprise pick clobbers this draft
  freeMode=true; swaps={};
  renderSeg(); renderFree();
  showTab("workout");
  toast("Home workout ready — no equipment needed. Let's go!");
}
// ===== Spontaneous session — a coherent split day picked from your recent training, goals & growth signal. =====
// Standard day templates (pool build-keys). We score each against what's slipping / stale / under-projected,
// surface the best few, fill them from the exercise engine, and seed each pick from what you last lifted.
const SPON_DAYS=[
  { id:"push",  name:"Push",       g:["chest","shoulders","sidedelts","triceps"] },
  { id:"pull",  name:"Pull",       g:["lats","upperback","reardelts","biceps"] },
  { id:"legs",  name:"Legs",       g:["quads","hamstrings","glutes","glute med","adductors","calves"] },
  { id:"upper", name:"Upper body", g:["chest","lats","upperback","shoulders","sidedelts","triceps","biceps"] },
  { id:"lower", name:"Lower body", g:["quads","hamstrings","glutes","glute med","adductors","calves","core"] },
  { id:"full",  name:"Full body",  g:["chest","lats","quads","hamstrings","shoulders","core"] },
];
const SPON_N={ push:4, pull:4, legs:4, upper:6, lower:6, full:5 };   // base counts ≈ a standard ~45-min session
let _sponDays=[], _sponSel=0, _sponPr=null, _sponLen="standard";
// session length scales the exercise count (each pick ≈ 3 sets ≈ 9 min)
function sponCount(id){
  const base=SPON_N[id]||4, f=_sponLen==="quick"?0.65:_sponLen==="full"?1.35:1;
  return Math.max(3, Math.min(7, Math.round(base*f)));   // 7 ≈ 63 min, keeps "full" honest to ~60m
}
function sponMins(nEx){ return nEx*9; }
function sponWeakMatch(gl, weak){
  for(const w of weak){
    if(w==="back" && /back|lats/.test(gl)) return true;
    if(w==="arms" && /biceps|triceps|forearm/.test(gl)) return true;
    if(w==="shoulders" && /delt/.test(gl)) return true;
    if(gl.includes(w)) return true;
  }
  return false;
}
function sponFocusMatch(gl){
  const f=settings.focusAreas||[]; if(!f.length || f.includes("balanced")) return false;
  return f.some(x=>{
    if(x==="upper") return /chest|lat|back|delt|biceps|triceps|forearm/.test(gl);
    if(x==="lower"||x==="glutes") return /quad|hamstring|glute|calf|calves|adductor/.test(gl);
    if(x==="arms") return /biceps|triceps|forearm/.test(gl);
    if(x==="shoulders") return /delt/.test(gl);
    if(x==="chest") return /chest/.test(gl);
    if(x==="back") return /lat|back/.test(gl);
    return false;
  });
}
// priority per pool build-key: higher = more worth training today
function sponPriorities(){
  const gs=growthStatus(), stat={}; gs.per.forEach(p=>stat[p.g]=p);
  const fc=growthForecast(), gain={};
  if(fc && fc.perMuscle) fc.perMuscle.pace.forEach(m=>gain[m.g]=m.gain);
  const gvals=Object.values(gain), gmax=gvals.length?Math.max(...gvals):0, gmin=gvals.length?Math.min(...gvals):0, grange=Math.max(1e-6,gmax-gmin);
  const lastTs={}; Object.keys(hist).forEach(n=>{ let t=0; (hist[n]||[]).forEach(e=>{ if(e.d>t) t=e.d; });
    if(t) muscleFor(n).forEach(g=>{ if(!lastTs[g]||t>lastTs[g]) lastTs[g]=t; }); });
  const weak=new Set((settings.weakSpots||[]).map(w=>String(w).toLowerCase()));
  const pr={};
  MGROUPS.forEach(g=>{
    if(NO_TARGET.has(g)) return;
    const gl=g.toLowerCase(); let s=0, st=stat[g];
    if(st){ s += st.state==="shrink"?2.5 : st.state==="hold"?1.2 : 0.3; s += (1-(st.stim||0))*1.0; }
    else s += 1.4;                                              // trainable but quiet lately → keep balance
    if(gain[g]!=null) s += (gmax-gain[g])/grange*0.8;          // less projected gain now → more to unlock
    const ds = lastTs[g] ? daysSince(lastTs[g]) : 99;
    if(ds<2) s -= 2.2;                                          // hit in the last 2 days → let it recover
    else s += Math.min((ds-2)/3, 1.5)*0.8;                     // the longer since, the fresher
    if(sponWeakMatch(gl, weak)) s += 0.7;
    if(sponFocusMatch(gl))      s += 0.6;
    const k=buildKey(g); if(pr[k]==null || s>pr[k]) pr[k]=s;   // bucket to pool key, keep the neediest member
  });
  return pr;
}
// exercises performed in the single most-recent training day (to rotate away from repeating them)
function lastSessionMoves(){
  let mx=0; Object.keys(hist).forEach(n=>(hist[n]||[]).forEach(e=>{ if(e.d>mx) mx=e.d; }));
  if(!mx) return new Set();
  const day=new Date(mx).toDateString(), set=new Set();
  Object.keys(hist).forEach(n=>{ if((hist[n]||[]).some(e=>new Date(e.d).toDateString()===day)) set.add(n); });
  return set;
}
function sponWhy(day, pr){
  const gs=growthStatus(), stat={}; gs.per.forEach(p=>stat[p.g]=p);
  const members=MGROUPS.filter(g=>!NO_TARGET.has(g) && day.g.includes(buildKey(g)))
    .sort((a,b)=>(pr[buildKey(b)]||0)-(pr[buildKey(a)]||0));
  const reasons=members.slice(0,2).map(g=>{
    const st=stat[g], short=((typeof MSHORT!=="undefined"&&MSHORT[g])||g).toLowerCase();
    if(st && st.state==="shrink") return short+" slipping";
    if(st && st.state==="hold")   return short+" stalled";
    return short+" ready to grow";
  });
  return reasons.join(" · ");
}
// swap options for a slot: rotationPool's cross-family picks first, then same-muscle variants
// from the pool/library (same family allowed — e.g. another bench angle), up to 6 total
function sponAlts(name, inj, exp, taken){
  const primary=muscleFor(name)[0]||"";
  const out=rotationPool(name, equipLevel, inj, exp, taken).slice();
  const usedN=(taken&&taken.names)||new Set();
  const add=n=>{ if(out.length>=6 || !n || out.includes(n) || (n!==name&&usedN.has(n))) return;
    if((muscleFor(n)[0]||"")!==primary) return;
    if(injuryBlocks(n,inj) || !allowsAt(n,equipLevel) || !suitsExp(n,exp)) return;
    out.push(n); };
  (BUILD_POOL[buildKey(primary)]||[]).forEach(add);
  exerciseLibrary().forEach(add);
  return out;
}
function buildSponDay(day, pr, shuffle){
  const n=sponCount(day.id), inj=activeInjuries(), exp=settings.exp||"intermediate", obj=settings.objective||"muscle";
  const vals=day.g.map(k=>pr[k]!=null?pr[k]:0.5), mn=Math.min(...vals), mx=Math.max(...vals), rg=Math.max(1e-6,mx-mn);
  const W={}; day.g.forEach(k=>{ const v=pr[k]!=null?pr[k]:0.5; W[k]=0.45+((v-mn)/rg)*0.4; });   // neediest → more slots
  const offset = (lastWorkoutTs() ? daysSince(lastWorkoutTs()) : 0) + (shuffle||0)*7;   // shuffle rotates every slot
  let picks=pickWorkoutWeighted(day.g, n, inj, equipLevel, W, offset, exp, obj, "balanced", BUILD_POOL)||[];
  if(!picks.length) picks=day.g.slice(0,n).map(k=>({n:(BUILD_POOL[k]||[])[0]})).filter(p=>p.n);
  const lastMoves=lastSessionMoves(), taken={ names:new Set(picks.map(p=>p.n)), fams:new Set(picks.map(p=>familyKey(p.n))) };
  const ex=picks.map(p=>{
    let name=p.n; const alts=sponAlts(name, inj, exp, taken);
    if(lastMoves.has(name) && alts.length>1) name=alts[1];     // did it last session → offer a familiar alternate
    return { n:name, alts };
  });
  return { id:day.id, name:day.name, why:sponWhy(day, pr), ex, tpl:day, shuffle:shuffle||0 };
}
function spontaneousDays(){
  const pr=_sponPr=sponPriorities();
  return SPON_DAYS
    .map(d=>({ d, score:d.g.map(k=>pr[k]!=null?pr[k]:0.5).reduce((a,b)=>a+b,0)/d.g.length }))
    .sort((a,b)=>b.score-a.score).slice(0,3)
    .map(s=>buildSponDay(s.d, pr, 0));
}
function openSpontaneous(){
  _sponLen=settings.sponLen||"standard";
  _sponDays=spontaneousDays(); _sponSel=0;
  if(!_sponDays.length || !_sponDays.some(d=>d.ex.length)){ toast("Log a session or two first — then I can suggest one."); return; }
  renderSpon(); openSheet("Spon");
}
function renderSpon(){
  const box=$("sponBody"); if(!box) return;
  let h='<div class="sponpick">'+_sponDays.map((d,i)=>
    '<button class="sponcard'+(i===_sponSel?' on':'')+'" type="button" data-i="'+i+'"><span class="spname">'+esc(d.name)+'</span><span class="spwhy">'+esc(d.why)+'</span></button>'
  ).join('')+'</div>';
  const day=_sponDays[_sponSel];
  h+='<div class="ed-label">Session length</div>'
    +'<div class="utabs paneltabs" id="sponLenSeg">'
    +[["quick","Quick ~30m"],["standard","Standard ~45m"],["full","Full ~60m"]].map(([v,l])=>
      '<button class="utab'+(_sponLen===v?' active':'')+'" data-sl="'+v+'" type="button" aria-pressed="'+(_sponLen===v)+'">'+l+'</button>').join('')
    +'</div>';
  h+='<div class="ed-label sponexhd"><span>Exercises <span class="subhint">— ≈'+sponMins(day.ex.length)+' min · tap ↻ to swap</span></span>'
    +'<button class="spshuffle" id="sponShuf" type="button">↻ shuffle all</button></div><div class="sponex">'
    +day.ex.map((e,xi)=>{
      const mcol=MCOLOR[muscleFor(e.n)[0]]||"#888", meta=metaHTML(e.n,""), lt=(meta&&meta.lastText)?meta.lastText:"new to you";
      const canSwap=e.alts && e.alts.length>1;
      return '<div class="sponrow"><span class="cdot" style="background:'+mcol+'"></span>'
        +'<span class="sptext"><span class="spx">'+esc(e.n)+'</span><span class="spmeta">'+esc(lt)+'</span></span>'
        +(canSwap?'<button class="spswap" type="button" data-xi="'+xi+'" aria-label="Swap exercise">↻</button>':'')+'</div>';
    }).join('')+'</div>';
  h+='<button class="btn wide" id="sponStart" type="button" style="margin-top:16px;">Start this session</button>';
  box.innerHTML=h;
  box.querySelectorAll(".sponcard").forEach(c=> c.onclick=()=>{ _sponSel=+c.dataset.i; renderSpon(); });
  box.querySelectorAll("#sponLenSeg .utab").forEach(b=> b.onclick=async()=>{
    _sponLen=b.dataset.sl; settings.sponLen=_sponLen; await sset("settings",settings);
    _sponDays=_sponDays.map(d=>buildSponDay(d.tpl, _sponPr, d.shuffle));   // re-fit every day to the new length
    renderSpon();
  });
  box.querySelectorAll(".spswap").forEach(b=> b.onclick=()=>sponSwap(+b.dataset.xi));
  const sh=$("sponShuf"); if(sh) sh.onclick=()=>{
    // rotate every exercise to its next alternative — cycles endlessly and wraps back to the first option
    // (no "end"): each lift steps through its own alternatives, so tapping repeatedly runs in circles.
    const day=_sponDays[_sponSel]; let moved=false;
    day.ex.forEach(e=>{ if(e.alts && e.alts.length>1){ e.n=e.alts[(e.alts.indexOf(e.n)+1)%e.alts.length]; moved=true; } });
    if(!moved){ const d=_sponDays[_sponSel]; _sponDays[_sponSel]=buildSponDay(d.tpl,_sponPr,d.shuffle+1); }  // no alternates → fall back to a fresh draw
    renderSpon();
  };
  $("sponStart").onclick=sponStart;
}
function sponSwap(xi){
  const e=_sponDays[_sponSel].ex[xi]; if(!e.alts || e.alts.length<2) return;
  e.n=e.alts[(e.alts.indexOf(e.n)+1)%e.alts.length]; renderSpon();
}
function sponStart(){
  const day=_sponDays[_sponSel], s={}; day.ex.forEach(e=> s[e.n]=Array.from({length:objSets(e.n)},()=>({w:"",r:""})));
  draft["free"]={ t:Date.now(), s, spon:1, name:day.name, orig:Object.keys(s) }; sset("draft", draft);
  freeMode=true; swaps={}; closeSheet("Spon"); renderSeg(); renderFree(); showTab("workout");
  toast(day.name+" session ready — picked from your recent training. Let's go!");
}
// Short, research-backed coach tips. Each maps to a paper in PROG_SRC (full citation lives on the Muscle-balance
// sheet); `src` is the short attribution shown on the card. `id` is stable so recency tracking survives edits.
// `goals` (optional) restricts a tip to matching objectives (muscle/strength/fatloss/fitness) — mostly the
// nutrition tips; training tips have no `goals` and apply to everyone. Multiple distinct tips are drawn from
// each paper, staying within what it actually supports.
// Coach tips + the Learn library are built from the canonical evidence.json (see EVIDENCE.md), loaded once at
// startup. The old hand-maintained arrays are gone — evidence.json is the single source of truth.
let EVIDENCE = { studies:{}, advice:[], categories:[] };
let TIPS = [];        // start-page random tips, derived from EVIDENCE.advice (injury-care items excluded — they're contextual)
let TIP_DOI = {};     // tip id → study URL
let SRC_DOI = {};     // study key → study URL  (powers the muscle-balance / progress-insight / injury source links)
let PROG_SRC = {};    // study key → citation HTML (same surfaces)
async function loadEvidence(){
  try{ const r = await fetch("evidence.json"); if(r.ok) EVIDENCE = await r.json(); }   // SW is network-first, so this stays fresh online and works offline
  catch(e){ /* offline before precache, or fetch error → tips, library & source links degrade gracefully */ }
  buildTips();
}
function studyUrl(k){ const s=EVIDENCE.studies[k]; if(!s) return null; return s.doi ? "https://doi.org/"+s.doi : (s.url||null); }
// full citation HTML for a source list, e.g. "Authors (year). Title. <i>Journal</i>. — why we use it"
function citeHTML(k){ const s=EVIDENCE.studies[k]; if(!s) return "";
  const t = esc(s.title||"");
  let h = esc(s.authors||"") + " (" + (s.year||"") + "). " + t + (/[?!.]$/.test(t)?" ":". ") + "<i>" + esc(s.journal||"") + "</i>.";
  if(s.grade) h += ' <span class="egrade eg-'+esc(s.grade.toLowerCase())+'">'+esc(s.grade)+' evidence</span>';
  if(s.note) h += ' <span>— ' + esc(s.note) + '</span>';
  return h; }
// short citation label, e.g. "Schoenfeld et al. 2017", from a study record
function shortCite(k){ const s=EVIDENCE.studies[k]; if(!s) return "";
  let first=(s.authors||"").split(/,| & /)[0].replace(/\s+[A-Z][A-Za-z]?(?:\s+[A-Z][A-Za-z]?)*$/,"").trim();
  if(!first) first=(s.authors||"");
  const multi=/,|&|et al/i.test(s.authors||"");
  return (first + (multi?" et al. ":" ") + (s.year||"")).trim(); }
function buildTips(){
  TIPS=[]; TIP_DOI={}; SRC_DOI={}; PROG_SRC={};
  // source links + citations for the muscle-balance, progress-insight and injury surfaces (keyed by study)
  Object.keys(EVIDENCE.studies||{}).forEach(k=>{ SRC_DOI[k]=studyUrl(k); PROG_SRC[k]=citeHTML(k); });
  // start-page random tips, derived from the advice list
  (EVIDENCE.advice||[]).forEach(a=>{
    const aud=a.audience||["all"];
    if(aud.some(x=>String(x).indexOf("injury:")===0)) return;        // injury-care advice is shown in context, not as a random tip
    const tip={ id:a.id, t:a.text, src:shortCite(a.study), tone:a.tone||"do", cat:a.category, strength:a.strength||"standard" };
    if(!(aud.length===1 && aud[0]==="all")) tip.goals=aud;            // goal-restricted (muscle / fatloss)
    TIPS.push(tip);
    TIP_DOI[a.id]=studyUrl(a.study);
  });
}
// one citation <li>, linked to its study where we have a URL
function srcLi(k){ const u=SRC_DOI[k];
  return u ? '<li><a class="srclink" href="'+u+'" target="_blank" rel="noopener">'+PROG_SRC[k]+' <span class="srcarrow">↗</span></a></li>'
           : '<li>'+PROG_SRC[k]+'</li>'; }
// Canonical reference to the model white paper. Every surface that describes a modelled mechanism
// (dose–response, growth signal, plan forecast, Monte Carlo projection, the strength ledger/bridge)
// links to it, so any model claim in the UI is traceable to the spec + evidence.
const WP_HREF = "growth-model-whitepaper.pdf";
const WP_LINK = '<a class="srclink" href="'+WP_HREF+'" target="_blank" rel="noopener">The method &amp; evidence (PDF) <span class="srcarrow">↗</span></a>';

// ===== Learn / coach library — browse every piece of advice from evidence.json, grouped & searchable =====
let libCat="all", libQuery="";
function openLibrary(){ libCat="all"; libQuery=""; const s=$("libSearch"); if(s) s.value=""; renderLibrary(); openSheet("Library"); }
function libTierLabel(t){ return {meta:"meta-analysis",rct:"RCT",review:"review / guideline",cohort:"cohort study","small-cohort":"small study",mechanism:"lab study"}[t]||t; }
function renderLibrary(){
  const chips=$("libChips"); if(!chips) return;
  const cats=EVIDENCE.categories||[];
  chips.innerHTML = ['<div class="s'+(libCat==="all"?" active":"")+'" data-cat="all">All</div>']
    .concat(cats.map(c=>'<div class="s'+(libCat===c.id?" active":"")+'" data-cat="'+esc(c.id)+'">'+esc(c.label)+'</div>')).join('');
  chips.querySelectorAll(".s").forEach(el=> el.onclick=()=>{ libCat=el.dataset.cat; renderLibrary(); });
  const q=libQuery.trim().toLowerCase();
  const order=cats.map(c=>c.id), catLabel={}; cats.forEach(c=>catLabel[c.id]=c.label);
  const adv=(EVIDENCE.advice||[]).filter(a=>{
    if(libCat!=="all" && a.category!==libCat) return false;
    if(q){ const s=EVIDENCE.studies[a.study]||{}; if((a.text+" "+(a.detail||"")+" "+(s.authors||"")+" "+(s.journal||"")).toLowerCase().indexOf(q)<0) return false; }
    return true;
  }).sort((a,b)=> (order.indexOf(a.category)-order.indexOf(b.category)));
  const list=$("libList");
  if(!adv.length){ list.innerHTML='<p class="freehint">'+((EVIDENCE.advice||[]).length?'No advice matches that search.':'Couldn’t load the library — check your connection and reopen.')+'</p>'; return; }
  const showHeaders=(libCat==="all"); let h="", last=null;
  adv.forEach(a=>{
    if(showHeaders && a.category!==last){ h+='<div class="ed-label">'+esc(catLabel[a.category]||a.category)+'</div>'; last=a.category; }
    const s=EVIDENCE.studies[a.study]||{}, url=studyUrl(a.study);
    const evClass = (s.evidence==="causal"||s.evidence==="causal-leaning") ? "ev-do" : (s.evidence==="marker" ? "ev-marker" : "ev-linked");
    const inner='<div class="pad">'
      +'<div class="libtop"><span class="libev '+evClass+'">'+esc(libTierLabel(s.tier||""))+'</span>'+(a.strength==="weak"?'<span class="libweak">weaker evidence</span>':'')+'</div>'
      +'<p class="libtext">'+esc(a.text)+'</p>'
      +'<div class="tipsrc">'+esc(a.detail||shortCite(a.study))+'</div>'
      +(url?'<div class="tiplink">Read the study ↗</div>':'')+'</div>';
    h+= url ? '<a class="group libcard" href="'+esc(url)+'" target="_blank" rel="noopener">'+inner+'</a>'
            : '<div class="group libcard">'+inner+'</div>';
  });
  list.innerHTML=h;
}
// Decided once per app launch (in init), so it doesn't reshuffle as you switch tabs. Roughly every 3rd open we
// surface a tip; which tip is drawn stochastically, weighted by how long since it was last shown (recency,
// squared — the repetition penalty). settings.tipMode picks the pool: "all" draws evenly from the whole
// library, "prefer" leans toward the current objective, "focus" restricts to objective-matching tips.
let currentTip=null;
function decideTip(){
  const ts = settings.tipState = settings.tipState || { opens:0, last:{} };
  ts.opens = (ts.opens||0) + 1;
  currentTip = null;
  const every = settings.tipEvery==null ? 3 : settings.tipEvery;   // user-set cadence; 0 = never show tips
  if(every>0 && TIPS.length && ts.opens > 1 && ts.opens % every === 0){   // skip the very first open; then ~every Nth
    const obj = settings.objective;
    const mode = settings.tipMode || "all";   // "all" = draw evenly from the whole library; "prefer" = lean toward the objective; "focus" = objective-matching tips only
    const matches = tip => !tip.goals || !obj || tip.goals.indexOf(obj) >= 0;
    const pool = mode==="focus" ? TIPS.filter(matches) : TIPS;
    // recency = opens since last shown (never-shown counts as opens+1). Squared so a just-seen tip is far less likely
    // to recur than one parked for a while — the repetition penalty. "prefer" then 3× the objective-matching tips;
    // weak single-cohort tips always show rarely.
    const w = pool.map(tip => { const at = ts.last[tip.id]; const since = at==null ? ts.opens + 1 : Math.max(0, ts.opens - at);
      let base = (since*since) || 0.01;                                   // 0.01 floor so a just-shown tip can still, rarely, recur
      if(mode==="prefer" && obj && tip.goals && tip.goals.indexOf(obj) >= 0) base *= 3;
      return tip.strength==="weak" ? base*0.25 : base; });
    const sum = w.reduce((a,b)=>a+b, 0);
    let r = Math.random() * sum, pick = 0;
    for(let i=0;i<pool.length;i++){ r -= w[i]; if(r <= 0){ pick = i; break; } }
    currentTip = pool[pick];
    ts.last[currentTip.id] = ts.opens;
  }
  ssetQuiet("settings", settings);   // launch bookkeeping: never makes this row look newer before the reconcile
}
function renderOverview(){
  const host=$("ovBody"); if(!host) return;
  $("ovGreet").textContent=ovGreeting();
  const due=(settings.sinceDeload||0)>=DELOAD_AT, p=activePlan(), w=p&&p.workouts[curWk], did=sessionToday();
  let h="";
  // --- Train-at-home nudge (2+ days since the last workout) ---
  const off=daysOff();
  if(off>=2){
    h+='<div class="ed-label">'+off+' days off</div>';
    h+='<div class="group ovnudge"><div class="pad"><div class="ovbig sm">No gym access right now? Train at home!</div>'
      +'<p class="ovp" style="margin-top:8px;">A quick bodyweight session counts too, no equipment needed.</p>'
      +'<button class="btn wide ovhome" style="margin-top:16px;">Start a home workout</button></div></div>';
  }
  // a one-line motivator in the Today card (the full stats live on Me) — session-equivalents, so micro sessions count too
  const f7=sessionCredit(7);
  const motiv = f7>=4?"Strong week — you’re putting in the work." : f7>=2?"Good momentum — keep it rolling." : f7>=1?"You’ve started — every session adds to the week." : "Fresh week. The first session is the hardest — let’s go.";
  // --- Today --- one label per card: the section label is the card's kicker
  h+='<div class="ed-label">'+(due?'Deload week':did?'Today':settings.surprise?'Surprise session':w?'Next session':'Today')+'</div>';
  if(due){
    h+='<div class="group"><div class="pad"><div class="ovbig sm">Take it lighter</div><p class="ovp" style="margin-top:8px;">You’ve trained hard for a while. One easier week (~40% less) lets your body catch up — you’ll come back stronger.</p><div class="ovmeta">'+motiv+'</div></div></div>';
  } else if(did){
    h+='<div class="group"><div class="pad"><div class="ovbig sm">Done for today 💪</div><p class="ovp" style="margin-top:8px;">You’ve logged a session. Rest and refuel — showing up consistently is what builds it.</p><div class="ovmeta">'+motiv+'</div></div></div>';
  } else if(settings.surprise){
    // one adaptive start — reflects the mode chosen on the Workout tab (here: Surprise)
    h+='<div class="group ovtap ovstart"><div class="pad ovstartpad"><div class="ovstarttext"><div class="ovbig">A session, picked for you</div><div class="ovmeta">Tap to see today’s surprise</div><div class="ovmeta">'+motiv+'</div></div><span class="ovchev">›</span></div></div>';
  } else if(w){
    h+='<div class="group ovtap ovstart"><div class="pad ovstartpad"><div class="ovstarttext"><div class="ovbig">'+esc(w.name)+'</div><div class="ovmeta">≈'+workoutMinutes(w)+' min · '+w.ex.length+' exercise'+(w.ex.length===1?'':'s')+'</div><div class="ovmeta">'+motiv+'</div></div><span class="ovchev">›</span></div></div>';
  } else {
    h+='<div class="group ovtap ovstart"><div class="pad ovstartpad"><div class="ovstarttext"><div class="ovbig">Pick a plan to begin</div><div class="ovmeta">'+motiv+'</div></div><span class="ovchev">›</span></div></div>';
  }
  h+=ovStarsHTML();   // --- Stars --- the sky in progress and this week's line; tap → the Stars sheet
  // --- Spotlight — the single most notable thing right now, with a real graph; celebrate a win or flag a gap ---
  const spot=spotlight();
  if(spot){
    // the rings card header gets a small star once this week's star is in (nothing before: no partial meter here)
    h+='<div class="ed-label spotlbl '+spot.kind+'"><span class="spotico">'+spot.ico+'</span>'+esc(spot.tag)
      +(spot.rings && starWeekIn() ? '<span class="spotstar" role="img" aria-label="'+esc(STAR_COPY.spotlight)+'">'+starIcon()+'</span>' : '')+'</div>';
    h+='<div class="group ovtap ovspot '+spot.kind+'" id="ovSpot"><div class="pad">'
      +'<div class="spotbig">'+esc(spot.title)+'</div>'
      +'<div class="spotcap">'+esc(spot.detail)+'</div>'
      +'<canvas id="ovSpotC" width="640" height="150"></canvas>'
      +'<span class="ovchev">›</span></div></div>';
  }
  // (the strength trend and weekly rings now surface through the single Spotlight card above;
  //  Discover moved to the Me tab — the home stays to today's job + one signal + coaching.)
  // --- Coach tip --- an occasional research-backed pointer (shown ~every 3rd open; see decideTip).
  // Health tips are observational, so they're flagged "Linked in research"; training tips "Backed by research".
  if(currentTip){
    // observational ('linked') tips are flagged "Linked in research"; causal ('do') tips "Backed by research"
    const linked = currentTip.tone==="linked", url = TIP_DOI[currentTip.id];
    h+='<div class="ed-label">'+(linked?'Health note':'Coach tip')+'</div>';
    const inner='<div class="pad"><div class="ovbig sm">'+(linked?'🌱':'💡')+' Did you know?</div>'
      +'<p class="ovp" style="margin-top:8px;">'+esc(currentTip.t)+'</p>'
      +'<div class="tipsrc">'+(linked?'Linked in research — ':'Backed by research — ')+esc(currentTip.src)+'</div>'
      +(url?'<div class="tiplink">Read the study ↗</div>':'')
      +'<div class="libteaser" id="ovLibLink">Browse all coaching tips →</div></div>';
    // whole panel taps through to the study, like the "Watch a how-to video" button
    h+= url ? '<a class="group tipcard" href="'+esc(url)+'" target="_blank" rel="noopener">'+inner+'</a>'
            : '<div class="group">'+inner+'</div>';
  }
  // --- Needs attention --- ordered by urgency (severity first); maps to your objective
  const obj=planObjective(activePlan()), todo=[], under=ovUnderMuscles();
  const push=(u,t,act)=> todo.push({u,t,act});
  if(cloudAvailable() && !cloudReady()) push(60,"Lock in your progress — sign in to sync across devices.","account");
  if(!settings.objective) push(82,"Tell me your goal and every session starts counting toward it.","objective");
  if(settings.goalTarget==null || settings.heightCm==null || !settings.sex) push(55,"Add your details to unlock weight & body tracking.","body");
  if(under.length){ const ms=esc(listWords(under.slice(0,3).map(g=>MSHORT[g]||g)));
    const wk=weeklyEquiv(muscleVolume(28,"sets").totals,28);
    const worst=under.reduce((m,g)=>Math.max(m,(WEEKLY_SET_MIN-(wk[g]||0))/WEEKLY_SET_MIN),0);   // 0 (just under) … 1 (untrained)
    push(45+Math.round(50*worst), "Easy win: give "+ms+" a couple more sets a week (aim ~"+WEEKLY_SET_MIN+"+) and watch it grow.", "balance"); }
  if((settings.objective==="fatloss"||settings.objective==="muscle") && settings.goalTarget!=null){
    if(!bw.length) push(40,"Pop in a weigh-in so I can chart your goal.","weight");
    else if(daysSince(bw[bw.length-1].d)>10) push(35,"Quick weigh-in? It's been "+daysSince(bw[bw.length-1].d)+" days — keeps your trend sharp.","weight");
  }
  // rotational work at least once a week — nudge active users who've skipped the twisting plane
  if(lastWorkoutTs() > Date.now()-14*86400000){ const rotTs=lastRotationalTs();
    if((Date.now()-rotTs) > 7*86400000) push(38, rotTs
      ? "No rotational work in over a week — add a Pallof press, woodchopper or twist to train your core in the twisting plane."
      : "Train your core in the twisting plane this week — a Pallof press, woodchopper or twist builds rotation strength crunches miss.", "workout"); }
  if(due) push(72,"You've earned an easy week — a deload now and you'll come back stronger.","workout");
  if(settings.planStartAt && (Date.now()-settings.planStartAt) > 42*86400000 && Object.keys(hist).length)
    push(30,"Six strong weeks on this plan 💪 swap 1–2 accessories to keep the gains coming.","workout");
  todo.sort((a,b)=> b.u-a.u);   // most urgent first
  const shown=todo.slice(0,2), more=todo.length-shown.length;   // keep the start page lean — top 2 only
  h+='<div class="ed-label edrow">Your next wins<span class="edmeta">For '+esc(obj.label)+'</span></div>';
  if(shown.length){ h+='<div class="group"><div class="pad"><ul class="ovtodo">'+shown.map(it=>'<li class="ovtap" data-act="'+it.act+'">'+it.t+'<span class="ovchev">›</span></li>').join('')
    +(more>0?'<li class="ovmore">+'+more+' more</li>':'')+'</ul></div></div>'; }
  else { h+='<div class="group"><div class="pad"><p class="ovp">On track for '+esc(obj.label)+' — every muscle your plan targets is getting enough volume. Keep showing up. 👏</p></div></div>'; }
  host.innerHTML=h;
  const sb=host.querySelector(".ovstart"); if(sb) sb.onclick=()=>showTab("workout");
  const hb=host.querySelector(".ovhome"); if(hb) hb.onclick=startHomeWorkout;
  const sp=host.querySelector(".ovspon"); if(sp) sp.onclick=openSpontaneous;
  const ll=host.querySelector("#ovLibLink"); if(ll) ll.onclick=e=>{ e.preventDefault(); e.stopPropagation(); openLibrary(); };   // sits inside the tip card's study link
  host.querySelectorAll(".ovtodo .ovtap").forEach(li=> li.onclick=()=>ovAct(li.dataset.act));
  const os=$("ovStars"); if(os){ os.onclick=openStarsSheet; os.onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); openStarsSheet(); } }; }
  if(spot && $("ovSpot")){
    if(spot.rings) drawSpotRings("ovSpotC", spot.rings);
    else if(spot.unders) drawSpotBalance("ovSpotC", spot.unders);
    else drawSpotChart("ovSpotC", spot.series, spot.kind);
    $("ovSpot").onclick=()=> spot.rings ? openRingsDetail() : ovAct(spot.act);
  }
  if(settings.objective && !document.querySelector("#onboardWrap.show")) coach("swipe","Swipe left or right to move between your three pages — Overview, Workout and Me.");
}
// route a Needs-attention item to where the user acts on it
function ovAct(act){
  const goto=(id,focus)=>{ showTab("me"); setTimeout(()=>{ const el=$(id); if(el){ el.scrollIntoView({behavior:"smooth",block:"center"}); if(focus) el.focus(); } },80); };
  if(act==="weight") goto("bwInput", true);
  else if(act==="strength"){ showTab("me"); setTimeout(()=>openSheet("Strength"), 90); }
  else if(act==="vol"){ showTab("me"); setTimeout(()=>openSheet("Vol"), 90); }
  else if(act==="balance") openMuscles();
  else if(act==="account") goAccount();
  else if(act==="objective") goto("objChips");
  else if(act==="body") goto("goalStart", true);
  else if(act==="build"){ showTab("workout"); openSheet("Build"); if(typeof updateBuildPreview==="function") updateBuildPreview(); coach("build","Tap a focus or drag the radar to emphasise muscles — your plan rebuilds around them. Pick your days and time and we choose the split."); }
  else showTab("workout");
}
// go to Me and reveal the account / sign-in section
function goAccount(){
  // login lives in the Settings sheet now — open it and scroll to the Account & sync block
  renderDash(); renderAccount(); openSheet("Settings");
  setTimeout(()=>{ const b=$("acctBox"); if(b){ b.scrollIntoView({behavior:"smooth",block:"center"});
    const e=$("acctEmail"); if(e && $("acctOut") && $("acctOut").style.display!=="none") e.focus(); } }, 380);
}
function renderDash(){
  _musGainCache=null;   // training data may have changed — the per-muscle projection has to be recomputed
  const now = bw.length?bw[bw.length-1].kg:null;
  $("bwNow").textContent = now!=null?now.toFixed(1):"—";
  $("bwNow").parentElement.classList.toggle("empty", now==null);
  const s=parseFloat(settings.goalStart), g=parseFloat(settings.goalTarget), hasGoal=!isNaN(s)&&!isNaN(g)&&g!==s;
  const pct = (hasGoal && now!=null) ? Math.max(0,Math.min(100,((now-s)/(g-s))*100)) : 0;
  $("bwBar").style.width = pct+"%";
  $("bwGoalTxt").textContent = hasGoal ? g+" kg" : "—";
  const reached = g<s ? now<=g : now>=g;   // a cut is reached from above, a gain from below
  $("bwLeft").textContent = !hasGoal ? "set a goal weight below" : (now!=null ? (reached?"reached — nice":Math.abs(g-now).toFixed(1)+" kg to go") : "log your first weigh-in");
  $("stSessions").textContent = Math.floor(settings.sessions||0);   // session-equivalents, whole part
  const hrs=(settings.timeTotal||0)/60;
  $("stTime").textContent = hrs>=10 ? Math.round(hrs) : round1(hrs);
  $("stSince").textContent = settings.sinceDeload;
  $("stBeat").textContent = settings.beatTotal||0;
  const due = settings.sinceDeload>=DELOAD_AT;
  $("stSince").classList.toggle("due",due);
  $("deload").style.display = due ? "" : "none";
  $("spark").style.display = bw.length >= 3 ? "" : "none";
  drawSpark();
  animateProgBars();
  if($("heightIn") && document.activeElement!==$("heightIn")) $("heightIn").value = settings.heightCm||"";
  if($("bfIn") && document.activeElement!==$("bfIn")) $("bfIn").value = settings.bodyfatPct||"";
  if($("ageIn") && document.activeElement!==$("ageIn")) $("ageIn").value = settings.age||"";
  renderCalc(now);
  renderCalendar();
  renderBaseActivity();
  renderGrowthForecast();  // draws the muscle-size projection inside the Strength detail sheet; sets _fcF
  renderStrength();        // strength summary card + strength detail sheet (reads _fcF for the size line)
  renderTrainingVolume();  // volume summary card (detail = Vol sheet, drawn by animateProgBars)
  renderGrowth();          // per-muscle "fix this first" line, above the per-muscle rows on the balance sheet
  renderGymCard();         // cross-gym proposal (no-op unless the detector finds something and it's unanswered)
  applyTileOrder();
  const po=$("progObj");   // objective-adherence score, moved onto the Progress tile
  if(po){ if(!Object.keys(hist).length){ po.textContent="No sessions yet"; po.className="lh"; }
    else { const os=meObjectiveScore(7); po.className="lh "+(os.pct>=85?"good":os.pct<50?"under":"");
      po.textContent=os.objLabel+": "+(os.pct>=85?"on track":os.pct<50?"behind pace":"on your way")+" — "+os.pct+"% of this week's target."; } }
  renderCardioCard();
  renderMeDiscover();
  renderStars();
  renderAchievements();
  renderInsight();
  renderObjective();
  renderMeRadar();
}
function renderCalendar(){
  const grid=$("calGrid"); if(!grid) return;
  const trained=new Set();
  Object.keys(hist).forEach(n=> (hist[n]||[]).forEach(e=> trained.add(new Date(e.d).toDateString())));
  (extlog||[]).forEach(e=> trained.add(new Date(e.d).toDateString()));
  const WEEKS=10, today=new Date(); today.setHours(0,0,0,0);
  const dow=(today.getDay()+6)%7;                       // Monday = 0
  const start=new Date(today); start.setDate(today.getDate()-dow-(WEEKS-1)*7);
  // 8th column: an accent ✦ on weeks that earned a star, nothing otherwise (never a mark for a week without one)
  const E = starsOn() && settings.stars ? (settings.stars.earned||{}) : null;
  grid.classList.toggle("st", !!E); if($("calDow")) $("calDow").classList.toggle("st", !!E);
  let html="";
  for(let i=0;i<WEEKS*7;i++){
    const d=new Date(start); d.setDate(start.getDate()+i);
    const ds=d.toDateString(), cls=[];
    if(d>today) cls.push("future"); else if(trained.has(ds)) cls.push("on");
    if(ds===today.toDateString()) cls.push("today");
    html+='<div class="calcell'+(cls.length?' '+cls.join(' '):'')+'" title="'+ds+'"></div>';
    if(E && i%7===6){ const on=!!E[starWeekId(d)]; html+='<div class="calwk"'+(on?' role="img" aria-label="'+esc(STAR_COPY.calWeek)+'">✦':'>')+'</div>'; }
  }
  grid.innerHTML=html;
  const f7=trainingDays(7), f21=trainingDays(21);
  $("calCap").textContent = f7+f21===0
    ? "Your training days will show here once you log a workout — your recent pace shapes the progression cues."
    : "You've trained "+f7+" of the last 7 days and "+f21+" of the last 21 — that recent pace shapes your progression cues.";
}
function bmiCat(bmi){
  if(bmi<18.5) return "lean";
  if(bmi<25) return "healthy";
  if(bmi<30) return "above range";
  return "high";
}
function ffmiCat(ffmi, sex){
  const male=(sex||"male")!=="female";
  const b = male ? [18,20,22,23.5,26] : [14,15.5,17,18.5,21];
  const labels=["room to build","solid base","well-built","strong & muscular","exceptional","elite — rare air"];
  let i=0; while(i<b.length && ffmi>=b[i]) i++;
  return labels[i];
}
function renderCalc(now){
  document.querySelectorAll("#sexSeg .s").forEach(s=> s.classList.toggle("active", s.dataset.sex===settings.sex));
  document.querySelectorAll("#expSeg .s").forEach(s=> s.classList.toggle("active", s.dataset.exp===settings.exp));
  const box=$("calcRows"); if(!box) return;
  const h=settings.heightCm, bf=settings.bodyfatPct, rows=[];
  if(now!=null && h){
    const m=h/100, bmi=now/(m*m);
    rows.push(['BMI', bmi.toFixed(1)+' <small>'+bmiCat(bmi)+'</small>']);
    if(bf){
      const lean=now*(1-bf/100), fat=now*(bf/100), ffmi=lean/(m*m)+6.1*(1.8-m);
      rows.push(['Lean mass', lean.toFixed(1)+' <small>kg</small>']);
      rows.push(['Fat mass', fat.toFixed(1)+' <small>kg</small>']);
      rows.push(['FFMI', ffmi.toFixed(1)+' <small>'+ffmiCat(ffmi, settings.sex)+'</small>']);
    }
  }
  if(!rows.length){ box.innerHTML='<div class="empty">Add your height'+(now==null?' and log a weight':'')+' to see your BMI. Add body fat for lean mass and FFMI — the truest measure of what you\u2019ve built.</div>'; return; }
  let html = rows.map(r=>'<div class="calcrow"><span class="ck">'+r[0]+'</span><span class="cv">'+r[1]+'</span></div>').join('');
  html += '<div class="calcnote">BMI can\u2019t tell muscle from fat. For a lifter, FFMI is the truer gauge \u2014 it tracks the muscle you\u2019re actually building.</div>';
  box.innerHTML = html;
}
function drawSpark(){
  const c=$("spark"), ctx=c.getContext("2d"), W=c.width,H=c.height; ctx.clearRect(0,0,W,H);
  if(bw.length<2){ ctx.fillStyle=_axisColor(); ctx.font=cfont(W,"label");
    ctx.fillText("log weight a few times to see your trend",6,H/2+4); return; }
  const gt=parseFloat(settings.goalTarget), gs=parseFloat(settings.goalStart);
  const ks=bw.map(p=>p.kg), extra=[...ks]; if(!isNaN(gt)) extra.push(gt); if(!isNaN(gs)) extra.push(gs);
  const min=Math.min(...extra)-1, max=Math.max(...extra)+1;
  const x=i=>6+(i/(bw.length-1))*(W-12), y=v=>H-4-((v-min)/(max-min))*(H-10);
  const ac=accentHex();
  if(!isNaN(gt)){ ctx.strokeStyle=hexAlpha(ac,.35); ctx.setLineDash([4,4]); ctx.beginPath();
    ctx.moveTo(6,y(gt)); ctx.lineTo(W-6,y(gt)); ctx.stroke(); ctx.setLineDash([]); }
  ctx.strokeStyle=ac; ctx.lineWidth=2.5; ctx.lineJoin="round"; ctx.beginPath();
  bw.forEach((p,i)=> i?ctx.lineTo(x(i),y(p.kg)):ctx.moveTo(x(i),y(p.kg))); ctx.stroke();
  ctx.fillStyle=ac; const li=bw.length-1; ctx.beginPath(); ctx.arc(x(li),y(bw[li].kg),3.5,0,7); ctx.fill();
}
// ---- weekly progress bars (Me sheet) ----
const PROG_WEEKS=10;
let progMeta={};
// (re)draw the metric charts and their captions — name kept for existing callers
function animateProgBars(){ drawAllProg(); fillProgSections(); }
function progWeeklyData(metric){
  const wkMs=7*86400000, now=Date.now(), N=PROG_WEEKS, out=new Array(N).fill(0);
  const idx=d=>{ const k=Math.floor((now-d)/wkMs); return (k>=0 && k<N) ? (N-1-k) : -1; }; // N-1 = this week
  if(metric==="weight"){
    const sum=new Array(N).fill(0), cnt=new Array(N).fill(0);
    (bw||[]).forEach(p=>{ const i=idx(p.d); if(i>=0){ sum[i]+=parseFloat(p.kg)||0; cnt[i]++; } });
    for(let i=0;i<N;i++) out[i]=cnt[i]?sum[i]/cnt[i]:0;
    return out;
  }
  if(metric==="sessions"){
    const days=Array.from({length:N},()=>new Set());
    Object.keys(hist).forEach(n=>(hist[n]||[]).forEach(e=>{ const i=idx(e.d); if(i>=0) days[i].add(new Date(e.d).toDateString()); }));
    for(let i=0;i<N;i++) out[i]=days[i].size;
    return out;
  }
  if(metric==="prs"){
    Object.keys(hist).forEach(n=>{
      const es=(hist[n]||[]).slice().sort((a,b)=>a.d-b.d); let best=0;
      es.forEach(e=>{ const w=parseFloat(e.w)||0, r=parseInt(e.r)||0, score=w>0?e1rm(w,r):r;
        if(score>best){ if(best>0){ const i=idx(e.d); if(i>=0) out[i]++; } best=score; } });
    });
    return out;
  }
  // volume (kg) or sets
  Object.keys(hist).forEach(n=>(hist[n]||[]).forEach(e=>{ const i=idx(e.d); if(i>=0) out[i]+= metric==="sets" ? ((e.n!=null?e.n:1)*effortOf(e)) : (e.v||0); }));
  return out;
}
const PROG_LABELS={ volume:"Weekly volume", sets:"Weekly hard sets", sessions:"Sessions per week", weight:"Avg body weight", prs:"New PRs per week" };
// "are we on track?" verdict per metric, from the last few weeks vs the weeks before
function progVerdict(metric, data){
  const N=data.length, mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
  const recent=mean(data.slice(N-3)), earlier=mean(data.slice(Math.max(0,N-6), N-3));
  if(metric==="weight"){
    const gs=+settings.goalStart, gt=+settings.goalTarget, hasG=gs>0&&gt>0&&Math.abs(gt-gs)>0.5;
    const dir=hasG?(gt>gs?"gain":"lose"):settings.objective?objectiveDir():"maintain";   // a set goal weight wins, so this matches the goal line
    const nz=[]; data.forEach((v,i)=>{ if(v>0) nz.push([i,v]); });
    if(nz.length<2) return {lvl:"more", msg:"Log your weight a few weeks running to track this."};
    const f=nz[0], l=nz[nz.length-1], pctWk=((l[1]-f[1])/f[1])*100/Math.max(1,l[0]-f[0]);
    if(dir==="gain"){
      if(pctWk<0.05) return {lvl:"bad", msg:"Goal is to gain, but weight is flat — likely need to eat a bit more."};
      if(pctWk>1.2)  return {lvl:"watch", msg:"Gaining fast (~"+round1(pctWk)+"%/wk) — ease the surplus to stay lean."};
      return {lvl:"good", msg:"On track — gaining ~"+round1(pctWk)+"%/wk, a solid muscle-building pace."};
    }
    if(dir==="lose"){
      if(pctWk>-0.05) return {lvl:"bad", msg:"Goal is to lose, but weight isn't dropping — tighten intake."};
      if(pctWk<-1.5)  return {lvl:"watch", msg:"Losing fast (~"+round1(pctWk)+"%/wk) — slow down to keep muscle."};
      return {lvl:"good", msg:"On track — losing ~"+round1(Math.abs(pctWk))+"%/wk while training."};
    }
    return Math.abs(pctWk)<0.3 ? {lvl:"good", msg:"Holding steady around your goal."} : {lvl:"watch", msg:"Drifting from maintenance (~"+round1(pctWk)+"%/wk)."};
  }
  if(metric==="prs"){
    const total=data.reduce((a,b)=>a+b,0), last4=data.slice(N-4).reduce((a,b)=>a+b,0);
    if(total===0) return {lvl:"more", msg:"Log weight × reps and your PRs will show up here."};
    if(last4>0) return {lvl:"good", msg:last4+" PR"+(last4>1?"s":"")+" in the last 4 weeks — still progressing."};
    return {lvl:"watch", msg:"No PRs in ~4 weeks — add a rep or a little load, or more volume."};
  }
  if(metric==="sessions"){
    if(recent===0) return {lvl:"bad", msg:"No sessions logged in the last 3 weeks."};
    if(recent<1.5) return {lvl:"watch", msg:"Under ~1.5 sessions/wk lately — consistency is the main driver."};
    if(earlier>0 && recent<earlier*0.7) return {lvl:"watch", msg:"Training less often than before (~"+round1(recent)+"/wk vs "+round1(earlier)+")."};
    return {lvl:"good", msg:"Consistent — ~"+round1(recent)+" sessions/wk."};
  }
  const unit = metric==="volume" ? "volume" : "weekly sets";
  if(recent===0) return {lvl:"bad", msg:"No training logged in the last 3 weeks."};
  if(earlier===0) return {lvl:"good", msg:"Building your "+unit+" — keep it going."};
  const ratio=recent/earlier;
  if(ratio>=1.05) return {lvl:"good", msg:"Trending up — "+unit+" rising vs a month ago."};
  if(ratio>=0.9)  return {lvl:"good", msg:"On track — holding your "+unit+"."};
  if(ratio>=0.7)  return {lvl:"watch", msg:"Your "+unit+" is slipping a little — nudge it back up."};
  return {lvl:"bad", msg:"Your "+unit+" has dropped sharply — easy to lose progress here."};
}
// per-muscle weekly series (sets or volume), attributed like the radar (primary ×1, secondary ×0.5)
function progMuscleWeekly(metric){
  const wkMs=7*86400000, now=Date.now(), N=PROG_WEEKS;
  const idx=d=>{ const k=Math.floor((now-d)/wkMs); return (k>=0 && k<N) ? (N-1-k) : -1; };
  const series={}; MGROUPS.forEach(g=> series[g]=new Array(N).fill(0));
  Object.keys(hist).forEach(name=>{ const groups=muscleFor(name);
    (hist[name]||[]).forEach(e=>{ const i=idx(e.d); if(i<0) return;
      const amt = metric==="vol" ? effVolume(name,e,"total") : ((e.n!=null?e.n:1) * effortOf(e));
      groups.forEach((g,gi)=>{ if(series[g]) series[g][i]+= gi===0?amt:amt*0.5; }); });
  });
  return series;
}
// per-muscle weekly best estimated 1RM (Epley φ with the self-calibrated denominator — same e1rm() the
// PRs chart, effort model and prediction ledger use), attributed to the PRIMARY muscle only. Load
// progression is exercise-specific, so this tracks "are the lifts for this muscle getting heavier?"
// — the other half of progressive overload alongside added sets/reps (Plotkin 2022).
function progMuscleLoad(){
  const wkMs=7*86400000, now=Date.now(), N=PROG_WEEKS;
  const idx=d=>{ const k=Math.floor((now-d)/wkMs); return (k>=0 && k<N) ? (N-1-k) : -1; };
  const series={}; MGROUPS.forEach(g=> series[g]=new Array(N).fill(0));
  Object.keys(hist).forEach(name=>{ const g=muscleFor(name)[0]; if(!g||!series[g]) return;
    (hist[name]||[]).forEach(e=>{ const i=idx(e.d); if(i<0) return;
      const x=e1rm(e.w,e.r); if(x>series[g][i]) series[g][i]=x; }); });   // 0 for bodyweight/timed (no external load)
  return series;
}
// ===== Growth signal: is each muscle (and the body overall) being trained enough to grow, hold, or lose size? =====
// Two evidence-based axes, combined per muscle:
//   DOSE  — recent weekly *effort-weighted* sets vs landmarks. Growth needs ~6–10+ fractional sets/muscle/wk
//           (sch17, drr, rpvol), and only sets taken near failure count fully — easy sets are halved
//           (robinson/refalo). Size is *maintained* on very little (bickel); under that, it slowly declines (mujika).
//   TREND — progressive overload, which can come from more effective sets OR heavier load (plotkin, sch10). We
//           take the better of two ratios: recent-vs-earlier effort-weighted sets, and recent-vs-earlier best
//           estimated 1RM. So adding weight while dropping reps still reads as progress, not a decline.
// Output is an estimate of the TRAINING STIMULUS, not measured muscle size — the app can't see your body.
function growthStatus(){
  const setsS=progMuscleWeekly("sets"), loadS=progMuscleLoad(), N=PROG_WEEKS;
  const mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
  const recent=a=>mean(a.slice(N-3)), earlier=a=>mean(a.slice(Math.max(0,N-6),N-3));
  let activeWeeks=0; for(let i=0;i<N;i++){ if(MGROUPS.some(g=>setsS[g][i]>0)) activeWeeks++; }
  const per=[];
  MGROUPS.forEach(g=>{
    if(NO_TARGET.has(g) || !setsS[g].some(v=>v>0)) return;   // exempt (Neck) or never trained → not shown
    const sets=recent(setsS[g]);                       // current effort-weighted weekly-set dose (last-3-week mean)
    // Progressive overload via EITHER more effective sets OR heavier load — take the better of the two ratios,
    // so classic strength progression (add weight, drop reps) isn't misread as a decline.
    const rs=recent(setsS[g]), es=earlier(setsS[g]), tSets = es>0 ? rs/es : null;
    const rl=recent(loadS[g]), el=earlier(loadS[g]), tLoad = el>0 ? rl/el : null;
    const trend = (tSets==null && tLoad==null) ? null : Math.max(tSets!=null?tSets:0, tLoad!=null?tLoad:0);
    let state, why;
    if(sets < WEEKLY_SET_MAINT){
      state="shrink"; why = sets<0.5 ? "barely trained lately — below what's needed to keep it"
                                     : "under-stimulated — below the volume needed to hold size";
    } else if(trend!==null && trend < 0.75){
      state="hold"; why="above maintenance so size holds, but training has eased off sharply — add sets or load to keep progressing";
    } else if(sets >= WEEKLY_SET_MIN){                  // adequate growth dose
      if(trend===null || trend >= 1.08){ state="grow"; why="enough hard sets and still building — a growth stimulus"; }
      else if(trend >= 0.92){ state="hold"; why="plenty of hard sets but it's been flat — maintaining; add a rep or a little load to push growth"; }
      else { state="hold"; why="good volume but easing off — holding for now"; }
    } else {                                            // WEEKLY_SET_MAINT..WEEKLY_SET_MIN: maintenance dose
      if(trend!==null && trend >= 1.15 && sets >= WEEKLY_SET_MIN-1){ state="grow"; why="climbing toward a growth dose"; }
      else { state="hold"; why="around maintenance volume — enough to hold size, under the ~"+WEEKLY_SET_MIN+"–"+WEEKLY_SET_TARGET+" sets that drive growth"; }
    }
    // Uncertainty: flag a muscle as borderline when its dose or trend sits within input-noise range of a
    // decision boundary (fractional-set noise ~1 set; trend noise ~0.06), so a near-miss isn't shown as a
    // crisp verdict. stim = fraction of attainable growth stimulus at this dose (continuous backbone).
    const stim = doseStimulus(sets);
    const near=(a,b,d)=>Math.abs(a-b)<d;
    const borderline = near(sets,WEEKLY_SET_MAINT,1) || near(sets,WEEKLY_SET_MIN,1)
      || (trend!==null && (near(trend,0.75,0.06) || near(trend,0.92,0.06) || near(trend,1.08,0.06)));
    per.push({g, state, sets, trend, why, stim, borderline});
  });
  const rank={shrink:0, hold:1, grow:2};               // surface what needs attention first
  per.sort((a,b)=> rank[a.state]-rank[b.state] || b.sets-a.sets);
  const cnt=s=>per.filter(p=>p.state===s).length;
  const nGrow=cnt("grow"), nHold=cnt("hold"), nShrink=cnt("shrink"), active=per.length;
  const tot=progWeeklyData("volume"); const trendAll = earlier(tot)>0 ? recent(tot)/earlier(tot) : null;
  let cstate, cmsg;
  if(activeWeeks<3 || active===0){
    cstate="more"; cmsg="Log a few weeks of training and this will estimate, per muscle, whether your current training is enough to grow, hold, or slowly lose size.";
  } else if(nShrink>nGrow && nShrink>=Math.ceil(active/3)){
    cstate="shrink"; cmsg=nShrink+" of "+active+" trained muscles are under-stimulated — too little to hold size. Bump their weekly hard sets back up before you lose ground.";
  } else if(nGrow>=Math.max(1,Math.round(active*0.4)) && (trendAll===null || trendAll>=0.95)){
    cstate="grow"; cmsg=nGrow+" of "+active+" trained muscles are getting a growth stimulus"+(nHold?", "+nHold+" holding":"")+(nShrink?", "+nShrink+" slipping":"")+". Keep the progressive overload going.";
  } else {
    cstate="hold"; cmsg="You're mostly maintaining — "+nHold+" of "+active+" holding"+(nGrow?", "+nGrow+" growing":"")+(nShrink?", "+nShrink+" slipping":"")+". To grow, nudge load, reps or sets up on the flat groups.";
  }
  return { per, combined:{state:cstate, msg:cmsg, nGrow, nHold, nShrink, active} };
}
const GST_ARROW={grow:"↑", hold:"→", shrink:"↓"};
const GST_HEAD={grow:"Overall: growing", hold:"Overall: holding", shrink:"Overall: at risk", more:"Growth signal"};
// One actionable line under the per-muscle bars — what to fix first — instead of a second per-muscle view.
function renderGrowth(){
  const box=$("fcLagCap"); if(!box) return;
  const r=growthStatus();
  if(r.combined.state==="more" || !r.per.length){ box.style.display="none"; box.textContent=""; return; }
  box.style.display="";
  const name=p=>MSHORT[p.g]||p.g;
  const shrink=r.per.filter(p=>p.state==="shrink").map(name);
  const hold=r.per.filter(p=>p.state==="hold").map(name);
  if(shrink.length) box.textContent="Below maintenance — losing ground: "+shrink.join(", ")+". Add hard sets there first.";
  else if(hold.length) box.textContent="Holding but not building: "+hold.join(", ")+". Add a rep or a little load to push these.";
  else box.textContent="Every trained muscle is getting a growth stimulus — keep the overload going.";
}
// Draw ONE progress metric into a given canvas, optionally with a second metric laid faintly over it.
// Each series is scaled to its own range, so an overlay compares SHAPE rather than units — the point is
// to see when two measures of "how much did I train" stop agreeing. Returns the caption HTML + the data
// the verdict needs.
function drawProgChart(metric, canvasId, prog, overlay){
  prog = prog==null ? 1 : prog;
  const c=$(canvasId); if(!c) return {capHTML:"", vData:null}; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  _figFns[canvasId]=(p)=>drawProgChart(metric, canvasId, p, overlay);
  const ac=accentHex();
  const l3=(getComputedStyle(document.documentElement).getPropertyValue('--l3')||'#888').trim();
  const ink=(getComputedStyle(document.documentElement).getPropertyValue('--ink')||'#000').trim();
  const N=PROG_WEEKS, pad=12, base=H-26, top=12;
  const cx=i=> pad + i*((W-pad*2)/(N-1));
  const emptyMsg=()=>{ ctx.fillStyle=l3; ctx.font=cfont(W,"label"); ctx.textAlign="center"; ctx.fillText("Log a few workouts to see this build up.", W/2, H/2); };
  const xLabels=()=>{ ctx.fillStyle=l3; ctx.font=cfont(W,"label"); ctx.textAlign="left"; ctx.fillText(PROG_WEEKS+"w ago", pad, H-6); ctx.textAlign="right"; ctx.fillText("now", W-pad, H-6); };
  const baseline=()=>{ ctx.strokeStyle=hexAlpha(ac,.18); ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(pad,base+0.5); ctx.lineTo(W-pad,base+0.5); ctx.stroke(); };

  // every metric draws the same way — one trend line — so the figures tell one consistent story
  // (per-muscle detail lives on the Muscle-balance sheet, not here)
  // ---- single trend line ----
  const data=progWeeklyData(metric);
  if(!data.some(v=>v>0)){ emptyMsg(); return {capHTML:"", vData:null}; }
  // y-mapper for a series. A lone line is zero-based, so its height still reads as magnitude. Weight never
  // is — and neither is either line on an overlaid chart, where the units differ and only the shapes are
  // comparable; zero-basing both there just presses them into a flat pair at the top of the plot.
  const scaleOf=(series, m)=>{
    let lo=0, hi=Math.max(...series);
    if(m==="weight" || overlay){
      const nz=series.filter(v=>v>0);
      if(nz.length){ lo=Math.min(...nz); hi=Math.max(...nz); const span=Math.max(1,hi-lo); lo=Math.max(0,lo-span*0.3); hi=hi+span*0.18; }
    }
    return v=> base-(hi>lo?(v-lo)/(hi-lo):0)*(base-top);
  };
  const mapY=scaleOf(data, metric);
  const oData = overlay ? progWeeklyData(overlay) : null;
  const hasOverlay = !!(oData && oData.some(v=>v>0));
  baseline();
  ctx.save(); ctx.beginPath(); ctx.rect(0,0, pad+prog*(W-pad*2)+8, H); ctx.clip();   // reveal the plotted line left→right; axes stay (+8 keeps the end dot whole)
  // companion line first, so the primary metric always reads on top of it
  if(hasOverlay){
    const oY=scaleOf(oData, overlay);
    ctx.strokeStyle=hexAlpha(ink,.30); ctx.lineWidth=2; ctx.lineJoin="round"; ctx.lineCap="round";
    ctx.beginPath(); oData.forEach((v,i)=>{ const x=cx(i), y=oY(v); i?ctx.lineTo(x,y):ctx.moveTo(x,y); }); ctx.stroke();
  }
  // line + dots over the weeks that have data (weight skips gaps; sessions/PRs plot every week incl. zeros)
  const valid=[]; data.forEach((v,i)=>{ if(metric!=="weight" || v>0) valid.push([i,v]); });
  ctx.strokeStyle=ac; ctx.lineWidth=3; ctx.lineJoin="round"; ctx.lineCap="round";
  ctx.beginPath(); valid.forEach(([i,v],k)=>{ const x=cx(i), y=mapY(v); k?ctx.lineTo(x,y):ctx.moveTo(x,y); }); ctx.stroke();
  valid.forEach(([i,v])=>{ ctx.beginPath(); ctx.arc(cx(i), mapY(v), i===N-1?5:3.5, 0, Math.PI*2); ctx.fillStyle = i===N-1?ac:hexAlpha(ac,.55); ctx.fill(); });
  // trend line — skipped when a companion line is present; three lines over ten weeks is noise, not detail
  const tp=[]; if(!hasOverlay) data.forEach((v,i)=>{ if(v>0) tp.push([i,v]); });
  if(tp.length>=2){
    const k=tp.length, sx=tp.reduce((a,p)=>a+p[0],0), sy=tp.reduce((a,p)=>a+p[1],0),
          sxy=tp.reduce((a,p)=>a+p[0]*p[1],0), sxx=tp.reduce((a,p)=>a+p[0]*p[0],0), den=k*sxx-sx*sx;
    const m=den?(k*sxy-sx*sy)/den:0, b0=(sy-m*sx)/k, i0=tp[0][0], i1=tp[tp.length-1][0];
    ctx.strokeStyle=hexAlpha(ink,.45); ctx.lineWidth=2.5; ctx.setLineDash([5,5]);
    ctx.beginPath(); ctx.moveTo(cx(i0), mapY(m*i0+b0)); ctx.lineTo(cx(i1), mapY(m*i1+b0)); ctx.stroke(); ctx.setLineDash([]);
  }
  ctx.restore();
  xLabels();
  const fmtOf=(m,v)=> v>0 ? (m==="weight" ? round1(v)+" kg" : m==="volume" ? Math.round(v).toLocaleString()+" kg" : String(Math.round(v))) : "—";
  // with two unlabelled lines on the plot, the caption has to say which is which — a dot per series;
  // each dot stays on the line with its value
  const dot=k=>'<span class="progdot '+k+'"></span>', nw=s=>'<span style="white-space:nowrap">'+s+'</span>';
  let capHTML=PROG_LABELS[metric]+' · last '+PROG_WEEKS+' weeks · '+nw((hasOverlay?dot("a"):"")+'<b>this week: '+fmtOf(metric,data[N-1])+'</b>');
  if(hasOverlay) capHTML+=' · '+nw(dot("b")+'<b>'+fmtOf(overlay,oData[N-1])+'</b> '+(PROG_OVERLAY_NOUN[overlay]||overlay));
  return {capHTML, vData:data};
}
const PROG_OVERLAY_NOUN={ sets:"hard sets", sessions:"sessions", volume:"volume", prs:"PRs", weight:"kg" };
// One chart per question, each in the sheet that owns that question. Training load answers "am I training
// enough" — volume with hard sets over it, since the two only tell you something when they disagree.
// PRs answer "am I getting stronger", so they render in the Strength sheet; body weight sits under Body.
const PROG_CHARTS=[
  {metric:"volume", overlay:"sets", canvas:"progLoad", cap:"progCapLoad", verd:"progVerdLoad"},
  {metric:"prs",                    canvas:"progPR",   cap:"progCapPR",   verd:"progVerdPR"}
];
function drawAllProg(){ PROG_CHARTS.forEach(c=> progMeta[c.metric]=drawProgChart(c.metric, c.canvas, 1, c.overlay)); }
function setProgVerdict(id, metric, data){
  const ve=$(id); if(!ve) return;
  if(!data || !data.some(v=>v>0)){ ve.style.display="none"; return; }
  const v=progVerdict(metric, data);
  ve.style.display="flex"; ve.className="progverd v-"+v.lvl; ve.querySelector(".pvtxt").textContent=v.msg;
}
function fillProgSections(){
  PROG_CHARTS.forEach(c=>{
    const meta=progMeta[c.metric]||{capHTML:"",vData:null};
    const cap=$(c.cap); if(cap) cap.innerHTML=meta.capHTML;
    setProgVerdict(c.verd, c.metric, meta.vData);
  });
  // the bodyweight chart is gone from the volume sheet, but its pacing verdict still earns its place —
  // it now sits under the Body sparkline, which is the weight trend it was judging all along
  setProgVerdict("bwVerd", "weight", progWeeklyData("weight"));
}
$("bwBtn").onclick=async()=>{ const v=parseFloat($("bwInput").value);
  if(isNaN(v)||v<30||v>250){ toast("Enter a valid weight"); return; }
  bw.push({d:Date.now(),kg:v}); await sset("bodyweight",bw); $("bwInput").value=""; renderDash(); toast("Bodyweight logged — staying consistent."); };
// deloadAt makes this week a light one for stars; deloadsTaken unlocks "Recovered"
$("deloadBtn").onclick=async()=>{ settings.sinceDeload=0; settings.deloadAt=Date.now(); settings.deloadsTaken=(settings.deloadsTaken||0)+1; if(settings.stars) delete settings.stars.deloadDueWk;
  const sr=checkStars({silent:false}), sm=starMoment(sr), fresh=checkAchievements(), cp=consistPost(sr, {rings:false}); await sset("settings",settings); renderDash();
  celebrateMoment(Object.assign({ achIds:fresh, shared:cp.star, logged:"Deload done — fresh and ready. Go again!" }, sm)); };

// ================= workout =================
function renderSeg(){
  const p=activePlan(), seg=$("seg"); seg.innerHTML="";
  const ni=nextRotateIndex(p);
  p.workouts.forEach((w,i)=>{
    const s=document.createElement("button"); s.type="button"; s.className="utab"+(!freeMode && i===curWk?" active":""); s.setAttribute("aria-pressed", !freeMode && i===curWk);
    s.innerHTML=(i===ni?'<span class="ndot"></span>':'')+esc(w.name);
    s.onclick=()=>{ freeMode=false; curWk=i; swaps={}; renderSeg(); renderWorkout(); };
    seg.appendChild(s);
  });
  const ab=document.createElement("button"); ab.type="button"; ab.className="utab segabout";   // coach notes for the active plan, far right
  ab.setAttribute("aria-label","About this plan"); ab.title="About this plan";
  ab.innerHTML=ICON.info+"About";
  ab.onclick=()=> openAbout(activePlan());
  seg.appendChild(ab);
}
function topSet(a){ if(!a||!a.length) return null; let b=a[0]; a.forEach(s=>{ if((parseFloat(s.w)||0)>(parseFloat(b.w)||0)) b=s; }); return b; }
function daysSince(ts){ return Math.floor((Date.now()-ts)/86400000); }
function parseReps(t){
  if(!t) return null;
  if(/sec|max/i.test(t) || /\ds\b/i.test(t)) return null;
  const m=String(t).match(/[×x]\s*(\d+)\s*(?:[–\-]\s*(\d+))?/);
  if(!m) return null;
  const low=+m[1], high=m[2]?+m[2]:low; return {low,high};
}
// smallest realistic load jump for the next step. Dumbbells come in 1kg jumps up to 10kg, then 2kg
// (…8, 9, 10, 12, 14…), so the step depends on where the current load sits; big barbell lifts go up 5kg.
function incFor(name, w){
  if(exArea(name)==="dumbbell") return (w||0) < 10 ? 1 : 2;
  return /squat|deadlift|leg press|hip thrust|lunge|hack/i.test(name)?5:2.5;
}
// standard empty-bar weight, so barbell suggestions land on real totals: a 20kg Olympic bar, or ~8kg for a
// lighter curved/EZ bar (curls, skull crushers, preacher work). 0 = not loaded on a straight bar.
function barWeight(name){
  if(exArea(name)!=="barbell") return 0;
  return /ez-?bar|curl bar|preacher|skull|\bez\b/i.test(name) ? 8 : 20;
}
// next loadable weight at/above a target. On a barbell, plates go on in pairs (1.25kg pairs → 2.5kg jumps;
// big lifts step 5kg), so snap to empty bar + N pairs — an 8kg EZ-bar climbs 8 → 10.5 → 13, a 20kg bar
// 20 → 22.5 → 25. Dumbbells/machines pass through (incFor already lands them on the rack).
function snapLoad(name, target){
  const bar=barWeight(name); if(!bar) return target;
  if(target<=bar) return bar;
  const step=incFor(name);
  return Math.round((bar + Math.round((target-bar)/step)*step)*10)/10;
}
function nextLoad(name, w){ return snapLoad(name, (w||0) + incFor(name, w)); }
const FREQ_RECENT=21, FREQ_PAST=56;
function trainingDays(nDays){
  const cutoff=Date.now()-nDays*86400000, days=new Set();
  Object.keys(hist).forEach(n=> (hist[n]||[]).forEach(e=>{ if(e.d>=cutoff) days.add(new Date(e.d).toDateString()); }));
  return days.size;
}
// A day only counts as a real session once it clears this many hard sets — a couple of push-ups
// or chin tugs (1-3 sets) shouldn't fill the Sessions ring; a short focused session (5+) should.
const QUALIFY_SETS=5;
// sets logged per calendar day in the last nDays → { dateString: totalSets }
function daySetMap(nDays){
  const cutoff=Date.now()-nDays*86400000, m={};
  Object.keys(hist).forEach(n=> (hist[n]||[]).forEach(e=>{ if(e.d>=cutoff){ const k=new Date(e.d).toDateString(); m[k]=(m[k]||0)+(e.n||0); } }));
  return m;
}
// distinct days in the last nDays whose total sets clear the session gate
function sessionDays(nDays){ const m=daySetMap(nDays); return Object.keys(m).filter(k=>m[k]>=QUALIFY_SETS).length; }
function setsToday(){ const t=new Date().toDateString(); return daySetMap(1)[t]||0; }
function sessionToday(){ return setsToday()>=QUALIFY_SETS; }
// ===== session credit: a workout counts toward your weekly Sessions ring and lifetime tally in
// proportion to the work done, so short "micro sessions" aren't wasted. A full session (1.0) is your
// own typical session volume (the median of recent real sessions); a half-volume day ≈ 0.5, capped at
// 1.0/day. Until there's enough history to know your typical session, it falls back to a sets÷5 ramp. =====
const SESSION_REF_DAYS=90, SESSION_MIN_SAMPLES=3;
// effective volume per calendar day in the last nDays → { dateString: totalVol } (matches session.totalVol)
function dayVolMap(nDays){ const cutoff=Date.now()-nDays*86400000, m={};
  Object.keys(hist).forEach(n=> (hist[n]||[]).forEach(e=>{ if(e.d>=cutoff){ const k=new Date(e.d).toDateString(); m[k]=(m[k]||0)+(e.v||0); } }));
  return m; }
// your typical full-session volume = median volume of recent days that cleared the set gate (0 if too few)
function refSessionVol(){
  const setM=daySetMap(SESSION_REF_DAYS), volM=dayVolMap(SESSION_REF_DAYS);
  const vols=Object.keys(setM).filter(k=>setM[k]>=QUALIFY_SETS).map(k=>volM[k]||0).filter(v=>v>0).sort((a,b)=>a-b);
  return vols.length>=SESSION_MIN_SAMPLES ? (vols[Math.floor(vols.length/2)]||0) : 0;   // 0 → caller uses the sets ramp
}
function dayCredit(daySets, dayVol, ref){ ref=(ref!=null)?ref:refSessionVol();
  return ref>0 ? Math.max(0,Math.min(1, dayVol/ref)) : Math.max(0,Math.min(1, (daySets||0)/QUALIFY_SETS)); }
// session-equivalents over the last nDays — fractional, summing each day's credit
function sessionCredit(nDays){ const setM=daySetMap(nDays), volM=dayVolMap(nDays), ref=refSessionVol(); let c=0;
  Object.keys(setM).forEach(k=> c+= dayCredit(setM[k], volM[k]||0, ref)); return c; }
// credit for one finished workout (its volume vs your typical session), for the lifetime tally
function finishCredit(session){ const ref=refSessionVol();
  return ref>0 ? Math.max(0,Math.min(1, (session.totalVol||0)/ref)) : Math.max(0,Math.min(1, (session.sets||0)/QUALIFY_SETS)); }
// ===== week stars: one star per Monday–Sunday week in which you reach your target (default 2 sessions).
// Stars measure rhythm, not dose, so day credit is sets/5 (no volume, effort or median ref: deload, easy,
// injury and bodyweight days count in full, entries without v score, old weeks aren't judged against today)
// plus cardio at 30 zone-weighted min and other training by intensity, capped at 1.0 a day so a target
// always needs separate days. Stars are only ever added: settings.stars.earned never loses a key. =====
const STAR_OTHER={ low:0.34, med:0.67, high:1 }, STAR_MILESTONES=[12,26,52,104], STAR_WK=7*86400000;
const STAR_LIGHT={ deload:"Deload", injury:"Injury", travel:"Travel", ill:"Ill", busy:"Busy" };
// fill order by lifetime count: normalised 0–1 star positions (north up, east left) + edges between them
const SKY=[
  {id:"cas", name:"Cassiopeia", sky:1, pts:[[0.92,0.56],[0.67,0.73],[0.54,0.46],[0.31,0.49],[0.08,0.27]], edges:[[0,1],[1,2],[2,3],[3,4]]},
  {id:"uma", name:"The Plough", sky:1, pts:[[0.08,0.72],[0.2,0.52],[0.35,0.48],[0.55,0.45],[0.66,0.57],[0.92,0.47],[0.91,0.28]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]]},
  {id:"cyg", name:"Cygnus", sky:1, pts:[[0.33,0.35],[0.45,0.51],[0.62,0.68],[0.78,0.92],[0.69,0.35],[0.79,0.13],[0.87,0.08],[0.3,0.72],[0.13,0.84]], edges:[[0,1],[1,2],[2,3],[1,4],[4,5],[5,6],[1,7],[7,8]]},
  {id:"leo", name:"Leo", sky:1, pts:[[0.77,0.7],[0.77,0.56],[0.69,0.48],[0.71,0.37],[0.87,0.3],[0.92,0.36],[0.32,0.46],[0.08,0.63],[0.32,0.6]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[2,6],[6,7],[7,8],[8,0]]},
  {id:"ori", name:"Orion", sky:1, pts:[[0.15,0.19],[0.36,0.08],[0.47,0.23],[0.4,0.52],[0.36,0.56],[0.3,0.59],[0.23,0.92],[0.59,0.86],[0.36,0.76],[0.85,0.21]], edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[0,5],[5,6],[3,7],[4,8],[2,9]]},
  {id:"sco", name:"Scorpius", sky:1, pts:[[0.82,0.08],[0.86,0.18],[0.87,0.31],[0.7,0.29],[0.64,0.32],[0.59,0.38],[0.48,0.6],[0.47,0.73],[0.45,0.89],[0.32,0.92],[0.13,0.91],[0.15,0.7]], edges:[[0,1],[1,2],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]},
  // second sky (stars 53–104), drawn with a cooler tint
  {id:"and", name:"Andromeda", sky:2, pts:[[0.92,0.74],[0.69,0.67],[0.48,0.5],[0.08,0.26],[0.57,0.4],[0.62,0.31],[0.72,0.57]], edges:[[0,1],[1,2],[2,3],[2,4],[4,5],[1,6]]},
  {id:"per", name:"Perseus", sky:2, pts:[[0.5,0.29],[0.62,0.16],[0.71,0.08],[0.38,0.36],[0.29,0.64],[0.32,0.92],[0.59,0.47],[0.6,0.6],[0.62,0.68]], edges:[[0,1],[1,2],[0,3],[3,4],[4,5],[0,6],[6,7],[7,8]]},
  {id:"gem", name:"Gemini", sky:2, pts:[[0.19,0.15],[0.08,0.33],[0.43,0.23],[0.71,0.46],[0.92,0.57],[0.34,0.6],[0.5,0.66],[0.77,0.85]], edges:[[0,1],[0,2],[2,3],[3,4],[1,5],[5,6],[6,7]]},
  {id:"peg", name:"Pegasus", sky:2, pts:[[0.47,0.57],[0.47,0.27],[0.08,0.57],[0.6,0.68],[0.77,0.79],[0.92,0.7],[0.59,0.21],[0.55,0.35],[0.79,0.33]], edges:[[0,1],[0,2],[0,3],[3,4],[4,5],[1,6],[1,7],[7,8]]},
  {id:"her", name:"Hercules", sky:2, pts:[[0.58,0.33],[0.44,0.35],[0.33,0.15],[0.57,0.08],[0.67,0.68],[0.33,0.56],[0.34,0.92]], edges:[[0,1],[1,2],[2,3],[3,0],[0,4],[1,5],[5,6]]},
  {id:"dra", name:"Draco", sky:2, pts:[[0.22,0.64],[0.27,0.63],[0.26,0.58],[0.22,0.56],[0.08,0.39],[0.31,0.42],[0.39,0.49],[0.43,0.53],[0.49,0.53],[0.64,0.44],[0.81,0.36],[0.92,0.37]], edges:[[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]}
];
// Every user-facing star string. Gain-framed; the copy test greps these for the banned words (spec §3).
const STAR_COPY={
  weekZero:"Any {T} sessions this week earn a star.",
  weekZeroOne:"One session this week earns a star.",
  weekZeroLight:"Light week · one session earns this week's star.",
  weekPart:"{W} of {T} this week",
  weekIn:"This week's star is in. Anything more is up to you.",
  weekInRest:"This week's star is in. Rest is part of the plan.",
  emptyNew:"Your first star comes with your first week of {s}. Short ones count.",
  emptyHist:"Any week with {s} earns a star.",
  skyCap:"{name} · {lit} of {total}",
  skyField:"All-time sky · {n} stars",
  since:"since {month}",
  year:"{year} · {stars}",
  intro:"Your sky so far: {stars} from your history. Each week you reach your target earns one; short sessions count. Stars stay yours.",
  introAll:"Your sky so far: {stars}. Each week you reach your target earns one; short sessions count. Stars stay yours.",
  picker:"Pick what fits your life. Two a week keeps most of what you've built.",
  planCtx:"Your plan has {d} days. Any {T} earn the star; the rings track the full plan.",
  lightHelp:"Busy, ill or just tired? One session earns this week's star.",
  how:"One star for each week you reach your target, Monday to Sunday. Short sessions and cardio count in part. Light weeks (deload, injury, travel, illness) need one session. Stars stay yours.",
  lightWeek:"light week",
  weekDetail:"Week of {date} · {s}",
  completedOn:"{name} · {month}",
  toastStar:"★ Week star · {n} in your sky",
  toastStarSuffix:"★ Week star",
  toastConst:"{name} complete ✦ · {n} stars",
  toastWelcome:"Welcome back · {n} in your sky",
  toastShared:" · shared with your friends",
  microWeek:"{W} of {T} this week",
  spotlight:"This week's star is in",
  feedConst:"Completed {name} ✦ · {n} weekly stars",
  feedMilestone:"{n} weekly stars ✦",
  ach52:"Fifty-two weeks with a star, each one at your own pace.",
  // Stars & achievements fold, Stars sheet, intro (UI pass)
  fold:"Stars & achievements", foldOff:"Achievements", off:"Week stars are off · Show them",
  skyOpen:"Open your stars", ok:"OK", ovLabel:"Stars", ovEmpty:"Week stars",
  done:"Completed", yourWeek:"Your week", matchPlan:"Match plan", light:"Light week", lightSw:"This week is light",
  lightAuto:"This week is already light ({why}).", howTitle:"How stars work",
  showStars:"Show stars", post:"Post completed constellations to friends",
  postHelp:"Only completed figures and milestones are posted, never a single week.",
  share:"Share your sky", skyNext:"{name} next",
  achEarned:"Earned {date}", achHist:"Earned from your history", achLocked:"Not unlocked yet",
  grpC:"Consistency", grpT:"Training", grpR:"Range", calWeek:"Week star",
  evWeekend:"Weekly totals count", evMaintain:"Less volume holds muscle", evComeback:"Time away barely dents strength", evDeload:"Easy weeks clear fatigue", evLinked:"linked",
  // share cards (counts, names and dates only) and the feed row
  tileWeekT:"Week star", tileConstT:"{name} complete", tileSkyT:"My sky",
  tileWeek:"Star {n} · since {month}", tileConst:"{n} weekly stars since {date}", tileSky:"{stars} · {c}", tileSess:"{s} this week", tileSessPast:"{s} · week of {date}",
  shareFig:"Share"
};
function starCopy(k, v){ return String(STAR_COPY[k]||"").replace(/\{(\w+)\}/g, (m,x)=> v && v[x]!=null ? v[x] : m); }
function starDayKey(t){ const d=new Date(t), m=d.getMonth()+1, x=d.getDate(); return d.getFullYear()+"-"+(m<10?"0":"")+m+"-"+(x<10?"0":"")+x; }
// a week's id is its Monday's LOCAL date "YYYY-MM-DD" (sorts as text, unlike weekKey()'s toDateString)
function starWeekId(d){ d=d!=null?new Date(d):new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate()-((d.getDay()+6)%7)); return starDayKey(d); }
// [Monday 00:00, next Monday 00:00) in local time — Date(y,m,d+7) keeps DST weeks at their real 167/169 h
function starWeekRange(id){ const p=String(id).split("-").map(Number); return [new Date(p[0],p[1]-1,p[2]).getTime(), new Date(p[0],p[1]-1,p[2]+7).getTime()]; }
function starWeeksBetween(a,b){ return Math.round((starWeekRange(b)[0]-starWeekRange(a)[0])/STAR_WK); }
// one pass over hist + extlog → { "YYYY-MM-DD": {s:sets, c:cardio credit, o:other credit, tv:1 if a no/partial-gym travel set} }
function starDayMap(fromMs, toMs){
  const m={}; let lo=1/0, hi=-1/0, key="";
  const day=t=>{ if(t<lo || t>=hi){ const d=new Date(t); d.setHours(0,0,0,0); lo=d.getTime(); hi=new Date(d.getFullYear(),d.getMonth(),d.getDate()+1).getTime(); key=starDayKey(lo); }   // entries arrive date-sorted: reuse the day's bounds
    return m[key]||(m[key]={s:0,c:0,o:0,tv:0}); };
  for(const n in hist){ const a=hist[n]; if(!Array.isArray(a)) continue;
    for(const e of a){ if(!e || !(e.d>=fromMs && e.d<toMs)) continue; const x=day(e.d);
      x.s += e.n!=null ? (+e.n||0) : 1; if(e.tv===2 || e.tv===3) x.tv=1; } }
  for(const e of (extlog||[])){ if(!e || !(e.d>=fromMs && e.d<toMs)) continue;
    if(e.kind==="cardio" || e.kind==="activity") day(e.d).c += (cardioMinsOf(e) || (+e.dist||0)*7)*cardioZoneW(e.zone)*cardioFracOf(e)/30;   // a run logged by distance only: a conservative 7 min/km
    else if(e.kind==="muscle") day(e.d).o += STAR_OTHER[e.intensity]!=null ? STAR_OTHER[e.intensity] : STAR_OTHER.med; }
  return m;
}
// W = sum of the week's day credits. floor: an injury-light week counts any logged day as at least 0.5
function weekStarCredit(id, map, floor){
  const d0=new Date(starWeekRange(id)[0]); let W=0, tv=0, days=0;
  for(let i=0;i<7;i++){ const x=map[starDayKey(new Date(d0.getFullYear(), d0.getMonth(), d0.getDate()+i))]; if(!x) continue;
    let c=Math.min(1, x.s/QUALIFY_SETS + x.c + x.o); if(floor) c=Math.max(0.5, c); W+=c; tv|=x.tv; days++; }
  return { W:Math.round(W*1e6)/1e6, tv, days };
}
function starBaseTarget(){ const t=(settings.stars||{}).target;
  if(t==="plan") return Math.max(2, Math.min(3, Math.round(planSessionsPerWeek(activePlan())*0.66)));
  const n=Math.round(+t); return n>=1 && n<=4 ? n : 2; }
// {T, mode:"n"|"l", why}. A light reason seen at ANY check is written to stars.light, so the week stays
// light after injury/travel mode is switched off. Live modes only speak for the week that is running now.
function starTargetFor(id, map){
  const st=settings.stars, L=(st && st.light) || {}, r=starWeekRange(id), cur=id===starWeekId();
  // injury is the one reason with its own credit rule (the 0.5 floor), so it replaces a weaker one recorded earlier
  if(cur && st && L[id] && L[id]!=="injury" && activeInjuries().length) (st.light=L)[id]="injury";
  let why=L[id]||null;
  if(!why && cur){
    if(activeInjuries().length) why="injury";
    else if(settings.travelMode && settings.travelMode!=="off") why="travel";
    else if(starDeloadWk()===id) why="deload";
  }
  if(!why && settings.deloadAt>=r[0] && settings.deloadAt<r[1]) why="deload";
  if(!why && weekStarCredit(id, map||starDayMap(r[0],r[1])).tv) why="travel";
  if(why && st && !L[id]) (st.light=L)[id]=why;
  // a target change applies from the week it was made: a past week keeps the target it was last judged at (stars.tAt),
  // else the one before the picker changed (stars.tPrev)
  const T = !cur && st && st.tAt && st.tAt[id]!=null ? st.tAt[id] : st && st.tWk && id<st.tWk ? (st.tPrev||2) : starBaseTarget();
  return why ? { T:1, mode:"l", why } : { T, mode:"n", why:null };
}
// the week a due deload first showed up: that one week is light, not every week until the button is pressed
function starDeloadWk(){ const st=settings.stars;
  if((settings.sinceDeload||0)<DELOAD_AT){ if(st && st.deloadDueWk) delete st.deloadDueWk; return null; }
  return st ? (st.deloadDueWk||(st.deloadDueWk=starWeekId())) : starWeekId(); }
function starCount(){ const st=settings.stars; return st && st.earned ? Object.keys(st.earned).length : 0; }
// where lifetime star n sits: the figure being filled, how many of it are lit, and the figures already done
function skyProgress(n){ n=n==null ? starCount() : n; let at=0;
  for(let i=0;i<SKY.length;i++){ const f=SKY[i], end=at+f.pts.length;
    if(n<end) return { fig:f, i, lit:n-at, total:f.pts.length, start:at, done:SKY.slice(0,i) };
    at=end; }
  return { fig:null, i:SKY.length, lit:0, total:0, start:at, done:SKY.slice(), field:n-at };   // past 104: the all-time field
}
// the figure completed when the count went n0 → n1 (the latest, if a sync crossed two)
function skyCompleted(n0, n1){ let at=0, hit=null; for(const f of SKY){ at+=f.pts.length; if(at>n0 && at<=n1) hit=f; } return hit; }
// a star after 4+ weeks without one, anywhere in the earned set (back-fillable)
function starHasComeback(){ const ks=Object.keys((settings.stars||{}).earned||{}).sort();
  for(let i=1;i<ks.length;i++) if(starWeeksBetween(ks[i-1],ks[i])-1>=4) return true; return false; }
// Evaluate the current and previous week (a late Sunday log, or data synced in). Older weeks are frozen.
// silent (init close-out, after a sync, or stars switched off): record only — star badges unlock quietly,
// because a synced star was celebrated on the device that earned it.
function checkStars(opts){
  opts=opts||{};
  const out={ star:null, fresh:[], constellation:null, milestone:null, comeback:false, count:starCount() };
  if(!settings.stars){ if(opts.silent) return out; seedStars(); }
  const st=settings.stars; st.earned=st.earned||{}; st.light=st.light||{};
  const silent=out.silent=!!opts.silent || st.on===false;   // callers celebrate only when !out.silent
  const cur=starWeekId(), prev=starWeekId(starWeekRange(cur)[0]-1), map=starDayMap(starWeekRange(prev)[0], starWeekRange(cur)[1]);
  const sig=()=>JSON.stringify([st.light, st.deloadDueWk, st.tAt, st.liveFrom]), n0=starCount(), lt0=sig();
  [prev, cur].forEach(id=>{ const t=starTargetFor(id, map); if(st.earned[id]) return;
    if(weekStarCredit(id, map, t.why==="injury").W >= t.T-1e-9){ st.earned[id]=t.mode; out.fresh.push(id); } });
  // the target each week is judged at: a plan switch or a synced target on Monday never re-scores last week
  const tA=st.tAt||{}; st.tAt={ [cur]:starBaseTarget() }; if(tA[prev]!=null) st.tAt[prev]=tA[prev];
  if(st.seededEmpty && !st.liveFrom && !opts.silent && weekStarCredit(cur, map).days) st.liveFrom=cur;   // backstop for a record seeded without it
  const n1=out.count=starCount();
  if(out.fresh.length){
    const id=out.star=out.fresh[out.fresh.length-1], before=Object.keys(st.earned).filter(k=>k<out.fresh[0]).sort().pop();
    out.comeback = !!before && starWeeksBetween(before, out.fresh[0])-1 >= 2;   // "Welcome back" — never names the gap
    out.constellation=skyCompleted(n0, n1);
    out.milestone=STAR_MILESTONES.filter(m=>m>n0 && m<=n1).pop()||null;
  }
  if(silent) starAchQuiet();
  if(out.fresh.length || sig()!==lt0) starSave();
  return out;
}
// a star write: local only until this sign-in's first reconcile, then pushed with it (see ssetQuiet)
function starSave(){ return ssetQuiet("settings", settings); }
// add every star badge the record already satisfies, with no toast (achAt: now, or "h" for the back-fill)
function starAchQuiet(at){
  if(settings.achUnlocked==null) return;
  const s=achStats(), have=new Set(settings.achUnlocked), when=settings.achAt=settings.achAt||{};
  ACHIEVEMENTS.forEach(a=>{ if(a.grp==="c" && !have.has(a.id) && a.test(s)){ have.add(a.id); if(when[a.id]==null) when[a.id]=at||Date.now(); } });   // an older build may have pruned the id: keep its first date
  settings.achUnlocked=[...have];
}
// First run of the feature (settings.stars == null): count the existing history, silently. Past weeks use
// the floor of 2 (a no/partial-gym travel week: 1), since past deload/injury weeks can't be recovered.
function seedStars(){
  if(settings.stars) return settings.stars;
  const cur=starWeekId(), st={ v:1, on:true, post:true, target:2, earned:{}, light:{}, posted:[], introSeen:false, seededAt:Date.now(), seedWk:cur };
  if((cloudUser || (_syncOwner && !_authSeen)) && !_reconciled) st.seededEmpty=true;   // signed in, first reconcile pending: another device may already judge these weeks live — count history after it (starLateBackfill)
  else if(!starBackfill(st, cur)){ st.seededEmpty=true; st.liveFrom=cur; }   // nothing logged yet: a sync that brings history in back-fills the weeks before cur (starLateBackfill)
  settings.stars=st;
  const r=starWeekRange(cur), map=starDayMap(r[0], r[1]), t=starTargetFor(cur, map);   // this week: live rules
  if(weekStarCredit(cur, map, t.why==="injury").W >= t.T-1e-9) st.earned[cur]=t.mode;
  // existing users have a non-null achUnlocked, so the new star badges must be added here or they'd all fire at the next finish
  if(settings.achUnlocked==null) settings.achUnlocked=unlockedIds();
  const when=settings.achAt=settings.achAt||{}; settings.achUnlocked.forEach(id=>{ if(when[id]==null) when[id]="h"; });
  starAchQuiet("h");
  starPostedUpTo(st);
  starSave();
  return st;
}
// Count the logged weeks before `upto` that hold no star yet, at the floor of 2 (a no/partial-gym travel week: 1).
// Only adds. Returns false when there is nothing logged at all.
function starBackfill(st, upto){
  let t0=1/0;
  for(const n in hist){ const a=hist[n]; if(Array.isArray(a)) for(const e of a) if(e && e.d>0 && e.d<t0) t0=e.d; }
  for(const e of (extlog||[])) if(e && e.d>0 && e.d<t0) t0=e.d;
  if(!isFinite(t0)) return false;
  const first=starWeekId(t0), map=starDayMap(starWeekRange(first)[0], starWeekRange(upto)[0]), E=st.earned=st.earned||{}, L=st.light=st.light||{};
  for(let id=first; id<upto; id=starWeekId(starWeekRange(id)[1])){ if(E[id]) continue; const w=weekStarCredit(id, map);
    if(w.W>=2-1e-9) E[id]="b";
    else if(w.tv && w.W>=1-1e-9){ E[id]="bl"; L[id]=L[id]||"travel"; } }
  return true;
}
// History a sync or restore brought in: count it (silent, adds only, floor 2) — but only the weeks before the
// earliest seed on any device (seedWk) and before an empty seed's live start (liveFrom). Those weeks were only ever
// judged by this back-fill, never live, so recounting them with more history can't re-score a live-judged week.
// A seed held back for the first reconcile (seedStars) on a device that turned out signed out: count its history now.
function starOwnBackfill(){ const st=settings.stars; if(!st || !st.seededEmpty || !_authSeen || cloudUser || _reconciled) return;
  starLateBackfill(); checkStars({silent:true}); renderStarsEverywhere(); }
function starSeedWk(st){ return st.seedWk || (st.seededAt ? starWeekId(st.seededAt) : null); }
function starLateBackfill(){
  const st=settings.stars;
  if(!st || !(Object.keys(hist).some(k=>(hist[k]||[]).length) || (extlog||[]).length)) return;
  const prev=starWeekId(starWeekRange(starWeekId())[0]-1), n0=starCount(), had=!!st.seededEmpty;
  if(!st.seedWk && st.seededAt) st.seedWk=starSeedWk(st);   // before seededAt moves below: the cut-off stays at the first seed
  starBackfill(st, [prev, st.liveFrom, st.seedWk].filter(Boolean).sort()[0]); delete st.seededEmpty;
  if(starCount()>n0){ starPostedUpTo(st, n0); starAchQuiet("h"); st.introSeen=false; st.seededAt=Date.now(); }   // one intro sheet, as after the first seed
  if(had || starCount()>n0) starSave();
}
// the back-fill never posts: mark the figures and milestones it crossed (count n0 → now) as posted
function starPostedUpTo(st, n0){ const n=starCount(), P=new Set(st.posted||[]), lo=n0||0; let at=0;
  SKY.forEach(f=>{ at+=f.pts.length; if(at>lo && at<=n) P.add("c:"+f.id); });
  STAR_MILESTONES.forEach(m=>{ if(m>lo && m<=n) P.add("m:"+m); });
  st.posted=[...P]; }
// Progression follows an inverse-U over recent training frequency:
//  • too sparse (after a layoff) → hold and rebuild   • regular & recovered → push
//  • very frequent / fatigue stacked up → hold or ease off toward a deload
function readiness(days){
  const recent=trainingDays(FREQ_RECENT), past=trainingDays(FREQ_PAST), since=settings.sinceDeload||0;
  if(days>=14) return "return";                         // this lift specifically has gone stale
  if(recent<=2 && past>=4) return "undertrained";       // trained regularly before, sparse lately
  if(recent>=16 || since>=DELOAD_AT-3) return "overreached"; // training very hard/often, or deload near
  return "progress";
}
function suggestion(name, t){
  const h=hist[name]||[];
  if(!h.length) return { last:null, soft:true, show:true, cue:"First session — pick a weight you can handle for the target reps with 1–2 in reserve." };
  const lt=h[h.length-1], w=parseFloat(lt.w)||0, r=parseInt(lt.r)||0, days=daysSince(lt.d), rng=parseReps(t);
  const regime=readiness(days);
  // Chronic over-rep: the last few sessions all cleared the top of the target range — the load's gone
  // light, so it's time to add weight or move the range up. (Needs a real rep target to compare against.)
  const recent=h.slice(-3).map(e=>parseInt(e.r)||0);
  const overStreak = !!rng && recent.length>=2 && recent.every(rp=>rp>=rng.high);
  // show=true only when the cue says something a glance at "Last … · Nd ago" wouldn't: layoff/deload context or a
  // hit-the-ceiling milestone. Routine "beat it by a rep" cues are dropped from the card to cut per-card height.
  let cue, soft=false, show=false, over=null;
  if(regime==="return"){ soft=true; show=true; cue="Back after "+days+" days — match "+fmtSet(lt)+" to find your groove, then build from there."; }
  else if(regime==="undertrained"){ soft=true; show=true; cue="Training's been light lately — repeat "+fmtSet(lt)+" and rebuild your rhythm before adding load."; }
  else if(regime==="overreached"){ soft=true; show=true; cue="You've trained hard and often — hold around "+fmtSet(lt)+" this week and let your body catch up."; }
  else if(overStreak){ show=true;
    const range=bumpRange(rng.low+"–"+rng.high);
    over={ w: w>0?nextLoad(name,w):0, range };
    cue = w>0
      ? "You keep clearing "+rng.high+" reps — the weight's gone light. Step up the load, or raise your target range."
      : "You keep clearing "+rng.high+" reps — make it harder, or raise your target range."; }
  else if(!rng){ cue="Beat last time — add a rep or a little load over "+fmtSet(lt)+"."; }
  else if(r>=rng.high && w>0){ show=true; cue="Topped the range — add weight: try "+nextLoad(name,w)+"kg for "+rng.low+"+ reps."; }
  else if(r>=rng.high){ show=true; cue="You topped the range — make it harder and aim "+rng.low+"+ reps."; }
  else if(r>0){ cue="Beat it: aim "+(r+1)+" rep"+(r+1>1?"s":"")+(w?" at "+w+"kg":"")+" (target "+rng.low+"–"+rng.high+")."; }
  else { cue="Beat last time: "+fmtSet(lt)+"."; }
  return { last:lt, days, regime, cue, soft, show, over };
}
function metaHTML(name, t, xi){
  const s=suggestion(name,t);
  const lastText = s.last ? 'Last '+fmtSet(s.last)+' · '+s.days+'d ago' : '';
  let actions="";
  if(s.over && xi!=null){
    const btns=[];
    if(s.over.w) btns.push('<button type="button" class="cuebtn addw" data-i="'+xi+'" data-w="'+s.over.w+'">Load '+s.over.w+'kg</button>');
    // raising the target range writes to the plan — only offer it for plan slots (numeric index)
    if(typeof xi==="number") btns.push('<button type="button" class="cuebtn raise" data-i="'+xi+'" data-range="'+esc(s.over.range)+'">Raise target → '+esc(s.over.range)+'</button>');
    if(btns.length) actions='<div class="cueact">'+btns.join('')+'</div>';
  }
  return { lastText, soft:s.soft, show:s.show, over:!!s.over, cue:'<div class="cue'+(s.soft?' soft':'')+(s.over?' over':'')+'">'+s.cue+actions+'</div>' };
}
function draftSig(){ return freeMode ? "free" : (activePlan().id + "|" + curWk); }
let _draftTimer=null;
// snapshot every set row currently on screen so nothing typed is lost on a re-render or reload
function captureDraft(){
  updateClearBtn();
  const sig=draftSig(), map={}, efmap={}, efauto={};
  document.querySelectorAll("#exlist .group").forEach(g=>{
    const name=g.dataset.ex; if(!name) return; const arr=[];
    g.querySelectorAll(".setrow").forEach(r=>{ const w=r.querySelector(".w"), rp=r.querySelector(".r"); arr.push({w:w?w.value:"", r:rp?rp.value:"", warm:r.classList.contains("warm")?1:0}); });
    map[name]=arr;
    const bar=g.querySelector(".efbar"); if(bar){ efmap[name]=+bar.dataset.ef; efauto[name]=bar.dataset.auto==="1"?1:0; }
  });
  if(Object.keys(map).length===0) return; // nothing on screen (e.g. mid-unload) — don't clobber a saved draft
  const prev=draft[sig];
  draft[sig]={ t:Date.now(), s:map, ef:efmap, efa:efauto, tm:{e:timer.elapsed, sa:timer.startedAt, rn:timer.running}, le:_lastSetEl, la:_lastSetAt, gy:sessGym,
    prc:[..._prCelebrated].filter(k=>k.startsWith(sig+"|")) };   // PR sets already celebrated, so a relaunch doesn't fire them again
  if(prev && prev.spon) Object.assign(draft[sig], { spon:1, name:prev.name, tpl:prev.tpl, shuffle:prev.shuffle||0, orig:prev.orig });   // a suggested session keeps its name (and what it suggested) once you log into it
  draft.__mode = freeMode ? "free" : "plan";   // draft is device-only (not in CLOUD_KEYS), so no sync surface
  clearTimeout(_draftTimer); _draftTimer=setTimeout(()=>{ sset("draft", draft); }, 350);
  liveTick();   // if broadcasting, stream the latest set to watchers (throttled)
  renderSessionRose();   // keep the bottom-of-page balance rose in step with what's logged
}
// restore a workout's in-progress entries (values + added/removed set rows) after a render
function applyDraft(){
  const sig=draftSig(), d=draft[sig]; if(!d || !d.s) return;
  if(Date.now()-(d.t||0) > 20*3600*1000){ delete draft[sig]; sset("draft", draft); return; } // forget day-old drafts
  if(Array.isArray(d.prc)) d.prc.forEach(k=>_prCelebrated.add(k));
  document.querySelectorAll("#exlist .group").forEach(g=>{
    const name=g.dataset.ex, arr=d.s[name]; if(!arr) return;
    while(g.querySelectorAll(".setrow").length < arr.length){
      const n=g.querySelectorAll(".setrow").length+1, tmp=document.createElement("div");
      tmp.innerHTML=freeSetRow(n, null, name); g.querySelector(".cardfoot").insertAdjacentElement("beforebegin", tmp.firstChild);
    }
    let els=g.querySelectorAll(".setrow");
    for(let i=els.length-1;i>=arr.length;i--) els[i].remove();
    g.querySelectorAll(".setrow").forEach((r,i)=>{ const dv=arr[i]||{}, w=r.querySelector(".w"), rp=r.querySelector(".r");
      r.classList.toggle("warm", !!dv.warm);
      if(w) w.value=dv.w||""; if(rp) rp.value=dv.r||"";
      if(dv.warm || (w&&w.value)||(rp&&rp.value)) updateSetVol(r, name);
    });
    renumberSets(g);
    const bar=g.querySelector(".efbar");
    if(bar){
      const manual = d.efa && d.efa[name]===0;
      bar.dataset.auto = manual ? "0" : "1";
      if(manual){ const ev=d.ef&&d.ef[name]; if(ev!=null) setEffortSel(bar, +ev); }
      else refreshAutoEffort(g);   // re-estimate from the restored set values
    }
  });
}
// persist immediately when the app is hidden/closed (iOS may suspend before the debounced save fires)
function flushDraft(){ try{ captureDraft(); clearTimeout(_draftTimer); sset("draft", draft); }catch(e){} }
window.addEventListener("pagehide", flushDraft);
document.addEventListener("visibilitychange", ()=>{ if(document.visibilityState==="hidden") flushDraft(); });
function renderWorkout(){
  // Surprise mode: propose a random data-picked session instead of the plan day (once, unless one's already loaded)
  if(settings.surprise && !freeMode && !sessionUnderway() && !(draft["free"]&&draft["free"].spon)){ loadSurprise(); return; }
  if(typeof renderTravelBanner==="function") renderTravelBanner();
  const p=activePlan(), w=p.workouts[curWk], list=$("exlist"); list.innerHTML=""; list.classList.toggle("norise", _noRise); _noRise=false;
  // recompute the auto-rotation pick only when the slot (or its completion count) changes, so a manual
  // swap or "keep" re-render doesn't reshuffle the variety or wipe the user's pins.
  const rsig=p.id+"#"+curWk+"#"+((settings.slotDone&&settings.slotDone[p.id+"|"+w.name])||0);
  if(rsig!==_rotSig){ _rotSig=rsig; applyRotation(); }
  $("ltName").textContent = w.name; $("planSub").textContent = planMeta(p);
  renderInjuryBanner();
  const injRes=resolveInjuryNames(w); let shown=0;
  w.ex.forEach((e,xi)=>{
    const r=injRes[xi];
    if(r.drop) return;                                        // severe: this body part is off-limits — omit the move
    shown++;
    const blocker=r.blocker, isub=r.sub?r.name:null, name=r.name;
    const ssPrev=xi>0?w.ex[xi-1].ss:null, ssNext=xi<w.ex.length-1?w.ex[xi+1].ss:null;
    const inSS=e.ss && (e.ss===ssPrev || e.ss===ssNext), ssStart=inSS && e.ss!==ssPrev;
    if(ssStart){ const lbl=document.createElement("div"); lbl.className="sslabel"; lbl.innerHTML=ICON.flame+"Superset · alternate moves, rest once per round"; list.appendChild(lbl); }
    const prev=last[name]||[], top=topSet(prev);
    const q="https://www.youtube.com/results?search_query="+encodeURIComponent("how to "+name);
    const canSwap=swapOptions(e).length>1;
    const swapped=swaps[xi] && swaps[xi]!==e.n;
    const rotKept = rot[xi]!=null && rotKeep.has(xi);   // a variety pick is available but pinned back to the base
    const g=document.createElement("div"); g.className="group"+(inSS?" ss":"")+(inSS && e.ss===ssPrev?" ss-cont":""); g.dataset.ex=name; g.style.animationDelay=(xi*0.05)+"s";
    const meta=metaHTML(name, e.t, xi), eq=equipFor(name);
    const linksHTML='<button class="lnkic menubtn" data-i="'+xi+'" data-ex="'+esc(name)+'" data-swap="'+(canSwap?1:0)+'" aria-label="More actions">'+ICON.more+'</button>';
    const mcol=MCOLOR[muscleFor(name)[0]]||"#888888";
    const mp=[];
    if(e.t) mp.push('<button type="button" class="tg tgedit" data-i="'+xi+'" title="Edit sets &amp; reps">'+esc(e.t)+' '+ICON.pencil+'</button>');
    if(meta.lastText) mp.push('<button type="button" class="fillast" data-ex="'+esc(name)+'">↻ '+esc(meta.lastText)+'</button>');
    mp.push(scoreTag(name));
    const metaLine = '<div class="exmeta">'+mp.join('<span class="dot">·</span>')+'</div>';
    let head=`<div class="pad" style="padding-bottom:0">
      <div class="exhead"><span class="eqic tinted" style="background:${hexAlpha(mcol,.15)};color:${mcol}" title="${esc(eq.label)}">${EQUIP[eq.key]}</span><span class="nm">${esc(name)}</span>${linksHTML}</div>
      ${ swapped ? '<div class="swapnote">'+ICON.swap+'instead of '+esc(e.n)+'</div>'
         : isub ? '<div class="swapnote inj">'+ICON.swap+'working around your '+esc(INJ_LABEL[blocker]||'injury')+' · was '+esc(e.n)+'</div>'
         : r.rotated ? '<div class="swapnote rot">'+ICON.swap+'Variety · was '+esc(r.was)+' <button class="rotlnk rotkeep" data-i="'+xi+'">keep '+esc(r.was)+'</button></div>'
         : rotKept ? '<div class="swapnote rot muted">'+ICON.swap+'<button class="rotlnk rotuse" data-i="'+xi+'">try '+esc(rot[xi])+'</button> for variety</div>'
         : blocker ? '<div class="swapnote warn">'+ICON.warn+'tough on your '+esc(INJ_LABEL[blocker]||'injury')+' — ease off or swap</div>' : '' }
      ${metaLine}${meta.show?meta.cue:''}</div>`;
    let rows="";
    for(let i=0;i<e.s;i++){ rows+=buildSetRow(i+1, prev[i], name); }
    g.innerHTML=head+rows+cardFoot(name); list.appendChild(g);
    wireEffortBar(g);
    g.querySelector(".addset").onclick=()=>{ const n=g.querySelectorAll(".setrow").length+1;
      const tmp=document.createElement("div"); tmp.innerHTML=freeSetRow(n, null, name);
      g.querySelector(".cardfoot").insertAdjacentElement("beforebegin", tmp.firstChild); captureDraft(); refreshSetFocus(g); };
  });
  // when an injury rests a big chunk of the session, offer alternatives for unaffected areas
  const lost=injRes.filter(r=>r.drop).length;
  if(activeInjuries().length && (shown===0 || lost>=2)){
    const area=listWords(activeInjuries().map(k=>INJ_LABEL[k]||k));
    const sugg=injuryFillSuggestions(Math.min(Math.max(lost,2),4));
    const card=document.createElement("div"); card.className="group injfill";
    const head = shown===0
      ? "🩹 This session is all <b>"+esc(area)+"</b> work — fully rested right now."
      : "🩹 Resting your <b>"+esc(area)+"</b> drops "+lost+" move"+(lost>1?"s":"")+" here.";
    let h='<div class="pad"><div class="injfill-h">'+head+'</div>';
    if(sugg.length){
      h+='<p class="injfill-sub">Train an unaffected area instead — picked from your weak spots, focus and where you\'re light this week:</p>'
        +'<div class="injfill-list">'+sugg.map(s=>'<button class="injfill-add" data-add="'+esc(s.name)+'">'+ICON.plus
          +'<span>'+esc(s.name)+'</span><small>'+esc(MSHORT[BUILD_MG[s.key]]||s.key)+'</small></button>').join('')+'</div>';
    } else h+='<p class="injfill-sub">Pick a different day from the tabs above, or take this one as rest.</p>';
    h+='</div>';
    card.innerHTML=h; list.appendChild(card);
    card.querySelectorAll(".injfill-add").forEach(b=> b.onclick=()=> addToCurrentWorkout(b.dataset.add));
  }
  const addBtn=document.createElement("button"); addBtn.className="btn tinted wide";
  addBtn.innerHTML=ICON.plus+"Add exercise"; addBtn.onclick=()=>openAdd("plan"); list.appendChild(addBtn);
  applyDraft();
  list.querySelectorAll(".group").forEach(refreshSetFocus);   // mark logged sets done (visual only)
  renderStartMode();
  updateRepeatBtn();
  updateLiveRow();
  updateGymRow();
  renderSessionRose();
  updateClearBtn();
}
// the live muscle-balance rose under the workout — same shape friends see when they watch you live
function renderSessionRose(){
  const card=$("sessRose"), cv=$("sessRoseCv"); if(!card||!cv) return;
  const st=buildLiveState(), mt=st.mtot||{}, agg=roseTotals(mt), G=roseGroups();
  const has=G.some(g=>(agg[g]||0)>0);
  card.style.display = has ? "" : "none";
  if(!has) return;
  // labelled rose so you can see which muscles you trained (only the trained wedges get a label)
  const gx=cv.getContext("2d"), W=cv.width, H=cv.height, R=Math.min(W,H)/2-62;   // leave room for edge labels
  gx.clearRect(0,0,W,H);
  drawRose(gx, W/2, H/2, R, G, agg, { color:g=>MCOLOR[g]||"#f08020", alpha:.72, rings:[0.5,1], grid:"rgba(127,127,127,.28)",
    labels:true, labelFont:cfont(W,"label"), labelGap:10, labelColor:g=>MCOLOR[g]||"#888" });
  const top=G.slice().sort((a,b)=>(agg[b]||0)-(agg[a]||0)).filter(g=>(agg[g]||0)>0).slice(0,3).map(g=>MSHORT[g]||g);
  const sub=$("sessRoseSub"); if(sub) sub.textContent=(st.doneSets||0)+" set"+(st.doneSets===1?"":"s")+" logged · mostly "+top.join(" · ");
}
// prefill every set with last session's weights/reps — then the user just confirms or tweaks before Finish
function repeatLastWorkout(){
  let filled=0;
  document.querySelectorAll("#exlist .group").forEach(g=>{
    const name=g.dataset.ex, prev=name&&last[name]; if(!prev||!prev.length) return;
    g.querySelectorAll(".setrow").forEach((r,i)=>{ const dv=prev[Math.min(i,prev.length-1)]||{}, w=r.querySelector(".w"), rp=r.querySelector(".r");
      if(w) w.value=(dv.w!=null?dv.w:""); if(rp) rp.value=(dv.r!=null?dv.r:""); if((w&&w.value)||(rp&&rp.value)){ updateSetVol(r,name); filled++; } });
    refreshAutoEffort(g);
  });
  if(filled){ captureDraft(); toast("Filled in last time — tweak any, then Finish"); }
  else toast("No previous numbers to copy yet");
}
function updateRepeatBtn(){ const btn=$("repeatBtn"); if(!btn) return;
  const any=[...document.querySelectorAll("#exlist .group")].some(g=> g.dataset.ex && last[g.dataset.ex] && last[g.dataset.ex].length);
  btn.style.display = any ? "" : "none";
}
$("repeatBtn").onclick=repeatLastWorkout;
// fill ONE exercise from its own last session (tap the "↻ Last …" chip on that exercise)
function fillExerciseLast(name){
  const g=[...document.querySelectorAll("#exlist .group")].find(x=>x.dataset.ex===name);
  const prev=name&&last[name];
  if(!g||!prev||!prev.length){ toast("No previous numbers for "+name+" yet"); return; }
  g.querySelectorAll(".setrow").forEach((r,i)=>{ if(r.classList.contains("warm")) return;
    const dv=prev[Math.min(i,prev.length-1)]||{}, w=r.querySelector(".w"), rp=r.querySelector(".r");
    if(w) w.value=(dv.w!=null?dv.w:""); if(rp) rp.value=(dv.r!=null?dv.r:""); if((w&&w.value)||(rp&&rp.value)) updateSetVol(r,name); });
  refreshAutoEffort(g); if(typeof refreshSetFocus==="function") refreshSetFocus(g); captureDraft();
  toast("Filled "+name+" from last time");
}
$("exlist").addEventListener("click", e=>{ const b=e.target.closest(".fillast"); if(!b) return; e.preventDefault(); fillExerciseLast(b.dataset.ex); });
// Clear workout: throw away everything entered for THIS workout (typed sets, the draft, the session and
// rest clocks, swaps; in Free mode the exercises you added) and return to Set up. Other workouts' drafts,
// the plan itself and saved history are untouched. A suggested session (Surprise) goes back to exactly
// what it suggested: its own exercises, each with its usual number of empty sets.
function abortSession(){
  const sig=draftSig(), d=draft[sig], orig=freeMode && d && d.spon ? sponOrig(d) : null;
  if(hold.row) holdStop(false);
  if(orig){ const s={}; orig.forEach(n=> s[n]=Array.from({length:objSets(n)},()=>({w:"",r:""})));
    draft[sig]={ t:Date.now(), s, spon:1, name:d.name, tpl:d.tpl, shuffle:d.shuffle||0, orig }; }
  else delete draft[sig];
  sset("draft", draft);
  swaps={}; sessGym=null; tmrReset(); restStop(); endLive(true);
  if(freeMode){ renderSeg(); renderFree(); } else { renderSeg(); renderWorkout(); }
  renderDash(); updateClearBtn();
  toast("Workout cleared");
}
// the exercises a suggested session started with (older drafts didn't store them: rebuild once from its template)
function sponOrig(d){
  if(!d.orig && d.tpl!=null){ _sponPr=_sponPr||(typeof sponPriorities==="function"?sponPriorities():null);
    try{ d.orig=buildSponDay(d.tpl, _sponPr, d.shuffle||0).ex.map(e=>e.n); }catch(e){} }
  return d.orig||null;
}
// what Clear would remove right now, read off the screen so it matches what you see
function workoutEntries(){
  const fd=freeMode ? draft["free"] : null, orig=fd && fd.spon ? sponOrig(fd) : null;
  const names=[...document.querySelectorAll("#exlist .group[data-ex]")].map(g=>g.dataset.ex);
  const ex=!freeMode ? 0 : orig ? names.filter(n=>!orig.includes(n)).length : names.length;   // a suggestion's own exercises stay
  const sets=[...document.querySelectorAll("#exlist .setrow")].filter(r=> [...r.querySelectorAll(".w,.r")].some(i=> i.value.trim()!=="")).length;
  const sw=freeMode ? 0 : Object.keys(swaps).length;
  return { ex, sets, sw, timer:sessionUnderway() };
}
function workoutHasEntries(){ const e=workoutEntries(); return !!(e.ex || e.sets || e.sw || e.timer); }
// shown whenever this workout has anything to lose, not only once the session clock runs
function updateClearBtn(){ const b=$("abortBtn"); if(b) b.hidden=!workoutHasEntries(); }
function askClearWorkout(){
  const e=workoutEntries(), parts=[], pl=(n,w)=> n+" "+w+(n===1?"":"s");
  if(e.ex) parts.push(pl(e.ex,"exercise"));
  if(e.sets) parts.push(pl(e.sets,"set"));
  if(e.sw) parts.push(pl(e.sw,"swap"));
  const list = parts.length>1 ? parts.slice(0,-1).join(", ")+" and "+parts[parts.length-1] : parts[0];
  const what = list ? "removes "+list+(e.timer ? " and resets the session timer" : "") : e.timer ? "resets the session timer" : "removes what you've entered";
  const fd=draft["free"], nm = freeMode ? ((fd&&fd.spon&&fd.name) || "this free workout") : ((activePlan().workouts[curWk]||{}).name || "this workout");
  confirmAsk("Clear "+nm+"? This "+what+". Your plan and saved workouts stay.", "Clear", abortSession, "danger");
}
if($("abortBtn")) $("abortBtn").onclick=askClearWorkout;
let _finLock=0;   // swallow a double tap on Finish while the share sheet is still away
// A short finish bursts from the Finish button, scrolled back under the finger. The re-render can shorten the page
// (the session card and Clear workout go), leaving no room for that scroll; a spacer at the page's end gives it.
// It shrinks only from below the viewport as you scroll up, so nothing visible moves, and goes on a tab change.
function finishPad(pg, need){
  const old=pg.querySelector(":scope > .finpad"), prev=old ? old.offsetHeight : 0;   // a second short finish adds to it
  if(_finPadDrop) _finPadDrop();
  const sp=document.createElement("div"); sp.className="finpad"; sp.setAttribute("aria-hidden","true");
  let h=Math.ceil(need)+prev; sp.style.height=h+"px"; pg.appendChild(sp);
  const pad=parseFloat(getComputedStyle(pg).paddingBottom)||0;
  const shrink=()=>{ if(!sp.isConnected) return done();
    const cut=Math.min(h, Math.max(0, pg.scrollHeight-(pg.scrollTop+pg.clientHeight)-pad));   // spacer below the viewport
    if(cut>0){ h-=cut; sp.style.height=h+"px"; }
    if(h<=0) done(); };
  const done=()=>{ pg.removeEventListener("scroll", shrink); sp.remove(); if(_finPadDrop===done) _finPadDrop=null; };
  pg.addEventListener("scroll", shrink, { passive:true });
  _finPadDrop=done;
}
$("saveBtn").onclick=async()=>{
  if(Date.now()<_finLock) return;
  const savedSig=draftSig();
  const p=activePlan(); const w = freeMode ? null : p.workouts[curWk]; let logged=0, beaten=0;
  // travel tag: 1 = travel + full gym, 2 = travel + no gym, 3 = travel + partial gym, 0 = home (normal)
  const tvCode = settings.travelMode==="gym"?1 : settings.travelMode==="nogym"?2 : settings.travelMode==="partial"?3 : 0;
  const _fd=draft[savedSig];   // a suggested session keeps its own name in history/feed, not "Free workout"
  const sessName = freeMode ? ((_fd && _fd.spon && _fd.name) ? _fd.name : "Free workout") : (w?w.name:"Workout");
  const session={ name: sessName, sub:"", totalVol:0, sets:0, beaten:0, top:null, mtot:{}, exercises:[], date:Date.now() };
  document.querySelectorAll("#exlist .group").forEach(g=>{
    const name=g.dataset.ex, sets=[];
    // Compare against your best at THIS gym. last[name] is gym-blind, so walking into a gym whose stack
    // numbers read 30% high used to mint a PR on every machine — and beatTotal is a counter, so those
    // could never be taken back.
    const _sg=(hist[name]||[]).filter(e=>gymOf(e)===(sessGym||0));
    const pt = (settings.gymSplit && _sg.length) ? {w:_sg[_sg.length-1].w, r:_sg[_sg.length-1].r} : topSet(last[name]);
    const efbar=g.querySelector(".efbar"), ef = efbar ? (+efbar.dataset.ef) : 1;   // 0 easy · 1 hard (default) · 2 max
    g.querySelectorAll(".setrow").forEach(r=>{ if(r.classList.contains("warm")) return;   // warm-ups don't count as working sets
      const wv=r.querySelector(".w").value.trim(), rv=r.querySelector(".r").value.trim();
      if(rv!=="") sets.push({w:wv,r:rv}); });
    if(sets.length){ logged++; const nt=topSet(sets);
      // "beaten" by effective volume so timed holds (more seconds) and bodyweight moves (more reps) count too, not just added kg
      if(pt&&nt&&setVol(name, nt.w, nt.r)>setVol(name, pt.w, pt.r)) beaten++; last[name]=sets;
      const vol=sets.reduce((a,s)=>a+setVol(name, s.w, s.r),0);
      session.totalVol+=vol; session.sets+=sets.length;
      const tw=parseFloat(nt.w)||0, tr=parseInt(nt.r)||0;
      if(!session.top || tw>session.top.w) session.top={name, w:tw, r:tr};
      muscleFor(name).forEach((grp,gi)=> session.mtot[grp]=(session.mtot[grp]||0)+vol*(gi===0?1:0.5));
      session.exercises.push({ name, sets: sets.map(s=>({w:s.w, r:s.r})) });
      const he={d:Date.now(), w:nt.w, r:nt.r, n:sets.length, v:Math.round(vol)}; if(tvCode) he.tv=tvCode;
      if(ef!==1) he.ef=ef;   // store only non-default effort (Hard=1 is the implied baseline for older logs)
      if(sessGym) he.gy=sessGym;   // absent = primary gym, same optional-field idiom as tv/ef
      (hist[name]=hist[name]||[]).push(he); }
  });
  if(!logged){ toast(freeMode?"Add an exercise and log a set":"Log at least one set first"); return; }
  await sset("lastsets",last);
  await sset("history",hist);
  _repDenom=null;   // new Max sets may shift the self-calibrated effort denominator
  await ledgerTick(true);   // score matured forecasts, update the posterior, emit this week's predictions
  // Session length runs to the LAST SET COMPLETED, not to the moment Finish was tapped — packing up,
  // showering or forgetting to hit Finish shouldn't inflate your training time. Floor at a minute so a
  // quick session doesn't read "0 min" (the first set stamps at ~0s, since the clock auto-starts on the
  // very keystroke being stamped); a session with nothing stamped falls back to the full clock.
  const mins=Math.max(session.sets>0?1:0, Math.round((_lastSetEl>0 ? _lastSetEl : tmrElapsed())/60));
  if(mins>0){ settings.timeTotal=(settings.timeTotal||0)+mins; }
  session.mins=mins; session.beaten=beaten; session.sub=logged+" exercise"+(logged>1?"s":"");
  tmrReset(); restStop(); endLive(true);   // close any live broadcast; the finished workout posts to the feed below
  // Every workout adds session-equivalents to the lifetime tally in proportion to the work done, so a
  // short "micro session" still counts (see finishCredit). A full-substance session (>= QUALIFY_SETS sets)
  // additionally unlocks the share/feed + the travel-vs-home comparison. Work is logged above either way.
  const cred = finishCredit(session);
  settings.sessions = (settings.sessions||0) + cred;
  const qualifies = session.sets >= QUALIFY_SETS;
  // per-context travel tally: every session's credit accrues (micro included) so we can later compare
  // session-equivalents PER WEEK across home vs travel; the n/sets/vol/mins quality stats stay full-session-only.
  const tkey = tvCode===1?"gym" : tvCode===2?"nogym" : tvCode===3?"partial" : "home";
  const ts=settings.travelStats=settings.travelStats||{};
  const slot=ts[tkey]=ts[tkey]||{n:0,sets:0,vol:0,mins:0,cred:0};
  slot.cred=(slot.cred||0)+cred;
  if(qualifies){ slot.n++; slot.sets+=session.sets; slot.vol+=Math.round(session.totalVol); slot.mins+=mins; }
  settings.beatTotal = (settings.beatTotal||0) + beaten;
  if(freeMode){ settings.sinceDeload++; }
  else if(w.rotate!==false){
    settings.sinceDeload++;
    const rl=rotateList(p), idx=rl.indexOf(w);
    settings.pointers[p.id]=(idx+1)%rl.length;
    settings.slotDone=settings.slotDone||{};                 // advance this slot's variety rotation
    const sk=p.id+"|"+w.name; settings.slotDone[sk]=(settings.slotDone[sk]||0)+1;
  }
  const sr=checkStars(), sm=starMoment(sr), fresh=checkAchievements(), cp=consistPost(sr);   // cp: the feed's consistency post, if any
  await sset("settings",settings);
  delete draft[savedSig]; await sset("draft", draft); sessGym=null;
  swaps={};
  const fy0=qualifies ? null : $("saveBtn").getBoundingClientRect().top;   // where the finger is
  _noRise=!qualifies;   // the cards around the bursting Finish button stay put, not fade in under it
  if(freeMode){ renderSeg(); renderFree(); renderDash(); }
  else { const ni=nextRotateIndex(p); if(w.rotate!==false && ni>=0) curWk=ni; renderSeg(); renderWorkout(); renderDash(); }
  // a short finish bursts from the Finish button: scroll so it stays under the finger after the re-render moved it
  if(fy0!=null){ const sb=$("saveBtn"), pg=sb && sb.closest(".page");
    if(pg && sb.getClientRects().length){ const dy=sb.getBoundingClientRect().top-fy0;
      if(Math.abs(dy)>4){ const room=pg.scrollHeight-pg.clientHeight-pg.scrollTop; if(dy>room) finishPad(pg, dy-room); pg.scrollTop+=dy; } } }
  // one burst, one toast, one haptic for the whole finish (PR, finish, unlocks). A micro session counts in
  // proportion to the work done (see finishCredit) and says so in the toast.
  // The tile that earned it explodes: a qualifying finish's share card, as its sheet lands (opened after the re-render
  // has painted, since the 1080×1350 tile paint is heavy; the burst fires as the sheet settles); a short finish's
  // Finish button where it now sits, else the first exercise card on screen.
  _finLock=Date.now()+450;
  const SHARE_AT=200, SHARE_LAND=300;
  celebrateMoment(Object.assign({ pr:beaten, qualifies, achIds:fresh, shared:cp.star,
    micro: (!qualifies && beaten===0) ? { sets:session.sets, pct:Math.round(cred*100) } : null,
    tile: qualifies ? "#sheetShare.show #sharePreview canvas" : ()=>[$("saveBtn")].concat([...document.querySelectorAll("#exlist .group")]),
    at: qualifies ? SHARE_AT+SHARE_LAND : 0, toastTop: true }, sm));   // the toast goes up top: clear of the share sheet, or of the Finish button bursting at the bottom
  if(qualifies){
    const sk=starShareOf(sr);   // a week star adds a Star card to the sheet (it leads when a figure or milestone landed)
    setTimeout(()=>openShareTile(session, sk), SHARE_AT);
    cloudPublish(session);   // post a summary to the friends feed (no raw weights), if signed in + sharing on
  }
  else logStarShare(sr);   // a short finish that completes a figure offers its Star card, like the cardio/other logs
  ringsSharedToast(cp);
  cloudTouchWorkout();     // reset the 2-day "train at home" reminder timer (any movement counts)
};

// ================= celebrations =================
// One moment → one burst, one toast, one haptic. outcome = { pr: lifts beaten, qualifies, micro: {sets, pct}
// for a sub-qualifying finish, achIds: fresh unlocks, star/constellation/milestone/comeback: the star part (from
// starMoment), shared: a completion went to the feed, logged: the plain toast for a log with nothing to celebrate,
// tile/at: the tile that explodes and when (see celebrate); without one, lead (the log row that earned it, then its
// button) or the moment's own tile when it is on screen
// (the sky card for a star, the unlocked achievement's tile), else the toast that names it; toastTop: the toast shows
// at the top of the screen, clear of a sheet that is about to open }.
// Tiers (stars spec §5.2): 1 any finish, or a week star from a micro session or a cardio/other log; 2 a PR, or a
// week star on a qualifying finish; 3 a constellation, any achievement, star 52 or 104. The toast leads
// PR > constellation > star > achievement, with one detail and at most one suffix.
const CEL_HAPTIC={ 1:10, 2:[10,60,14], 3:[12,50,12,50,18] };
function celebrateMoment(o){
  o=o||{};
  const ach=(o.achIds||[]).map(id=>ACHIEVEMENTS.find(a=>a.id===id)).filter(Boolean), cst=o.constellation, n=starCount();
  const tier = (ach.length || cst || o.milestone>=52) ? 3 : (o.pr>0 || (o.star && o.qualifies)) ? 2 : (o.star || o.qualifies || o.micro) ? 1 : 0;   // every finish sparks, short sessions too
  const achT = ach.length ? ach[0].t+" unlocked" : "", starT = o.comeback ? "Welcome back" : STAR_COPY.toastStarSuffix;
  let msg="";
  if(o.pr>0) msg="New best! You beat "+o.pr+" lift"+(o.pr>1?"s":"")+(cst ? " · "+cst.name+" complete ✦" : o.star ? " · "+starT : achT ? " · "+achT : " — keep climbing.");
  else if(cst) msg=starCopy("toastConst",{name:cst.name, n})+(achT && !o.shared ? " · "+achT : "");
  else if(o.star) msg = achT ? starT+" · "+achT : starCopy(o.comeback ? "toastWelcome" : "toastStar", {n});
  else if(ach.length) msg="Achievement unlocked  "+ach[0].icon+"  "+ach[0].t+(ach.length>1?"  +"+(ach.length-1)+" more":"");
  if(msg && o.shared && (cst || o.milestone)) msg+=STAR_COPY.toastShared;
  if(msg) toast(msg, true, true, o.toastTop);
  else if(o.micro){ const wc=starWeekClause();   // neutral star clause: "62% of a session · 1.6 of 2 this week"
    toast("Logged "+o.micro.sets+" set"+(o.micro.sets===1?"":"s")+" — counts as "+o.micro.pct+"% of a session"+(wc ? " · "+wc : " toward your week. Every bit adds up."), false, false, o.toastTop); }
  else if(o.logged) toast(o.logged, false, false, o.toastTop);
  if(tier){ let tile=o.tile, at=o.at||0;
    if(!tile){ tile=[].concat(o.lead||[]); if(o.star || cst || o.milestone) tile.push("#sheetStars.show #starsBody > :first-child", "#meSky");
      ach.forEach(a=>tile.push('#achGrid .ach[data-id="'+a.id+'"]'));
      tile.push("#toast"); at=at||120; }   // the toast slides in first
    celebrate(tier, { stars:!!(o.star || cst || o.milestone), pr:o.pr>0, tile, at, haptic:CEL_HAPTIC[tier] }); }
  return tier;
}
// The star part of a moment, after the spam guards (stars spec §5.2, §8): a silent check (or stars switched off)
// never celebrates; a week star celebrates at most once a week (stars.celWk); and once this week's star is in, an
// overreached week gets no star-flavoured moment: sr.quiet then also holds its feed post for a later week (consistPost)
// and keeps the Star card out of the share sheet (starShareOf). Call it before consistPost and before the handler saves.
function starMoment(sr){
  const st=settings.stars; if(!st || !sr || sr.silent || !(sr.fresh||[]).length) return {};
  const cur=starWeekId(), o={ star:sr.star, constellation:sr.constellation, milestone:sr.milestone, comeback:sr.comeback };
  if(st.earned[cur] && sr.fresh.indexOf(cur)<0 && readiness(0)==="overreached"){ sr.quiet=true; return {}; }
  if(st.celWk===cur){ o.star=null; o.comeback=false; if(!o.constellation && !o.milestone) return {}; }
  st.celWk=cur;
  return o;
}
// what a fresh star offers to share (from the raw check, so a quiet celebration can still be shared): the week card,
// or the completed figure. lead: the Star card opens first (a constellation or milestone just landed).
function starShareOf(sr){
  if(!sr || sr.silent || sr.quiet || !sr.star) return null;
  return sr.constellation ? { kind:"const", fig:sr.constellation, lead:true } : { kind:"week", week:sr.star, lead:!!sr.milestone };
}
// The single burst entry point. Old callers map: celebrate(true) → 2, celebrate(false) → 1, celebrate() → 3.
// The tile that earned the moment explodes into glitter: sparks start all over its rounded rect (mostly on its
// edges) and fly out from its centre, then drift down; the tile flashes and pops. PRs and unlocks add a shock-wave
// ring and confetti cannons; unlocks a second ring and a second wave. opts.tile: an element, a selector, a list of
// them or a function returning one; the first that is on screen (and not under an open sheet) is the tile, else the
// glitter breaks off the screen edges. opts.at: fire that many ms later (the target is resolved then, so a sheet
// can slide in first). opts.rings / opts.cannon / opts.pieces override the tier's shock-wave rings / pieces per cannon / glitter
// pieces, and opts.up throws the glitter up and sideways instead of down; opts.minor
// (a PR set) never interrupts a burst that isn't minor. opts.haptic buzzes with the bang. opts.stars (a star moment)
// turns a quarter of the pieces into white/gold 4-point sparkles, so stars look the same on every accent.
// A new burst replaces one on screen; it is removed at its end + 150ms or when the app is hidden.
let _burstEnd=null, _burstArm=0, _burstArmed=false, _burstMajor=0;   // _burstMajor: when a non-minor burst ends
// where el sits once the sheet it is in has landed (a sheet slides up from translateY(102%))
function landedRect(el){
  const r=el.getBoundingClientRect(), sh=el.closest(".sheet"); let dy=0;
  if(sh){ const m=getComputedStyle(sh).transform, v=m && /^matrix(3d)?\(([^)]+)\)/.exec(m);
    if(v){ const a=v[2].split(",").map(parseFloat); dy=(v[1] ? a[13] : a[5])||0; } }
  return { x:r.left, y:r.top-dy, w:r.width, h:r.height };
}
// the first candidate that is mostly on screen: {el, x, y, w, h, rad}, or null
function boomTarget(t){
  if(typeof t==="function") t=t();
  const open=document.querySelector(".sheet.show"), vw=innerWidth, vh=innerHeight;
  for(let el of [].concat(t||[])){
    if(typeof el==="string") el=document.querySelector(el);
    if(!el || !el.isConnected || !el.getClientRects().length) continue;
    if(open && !open.contains(el) && el.id!=="toast") continue;   // a tile under an open sheet can't be seen
    const r=landedRect(el);
    // a tile mid-animation (the toast's popin overshoot) is measured without its own transform: its settled box
    if(el.offsetWidth && getComputedStyle(el).transform!=="none"){ const cx=r.x+r.w/2, cy=r.y+r.h/2;
      r.w=el.offsetWidth; r.h=el.offsetHeight; r.x=cx-r.w/2; r.y=cy-r.h/2; }
    if(r.w<24 || r.h<16) continue;
    const vis=Math.max(0,Math.min(r.x+r.w,vw)-Math.max(r.x,0))*Math.max(0,Math.min(r.y+r.h,vh)-Math.max(r.y,0));
    if(vis < .6*r.w*r.h) continue;
    r.el=el; r.rad=Math.min(r.w/2, r.h/2, parseFloat(getComputedStyle(el).borderTopLeftRadius)||0);
    return r;
  }
  return null;
}
function celebrate(tier, opts){
  tier = tier===true ? 2 : tier===false ? 1 : tier==null ? 3 : tier;
  if(!(tier>=1)) return;
  const o=Object.assign({}, opts||{});
  if(o.minor && (_burstArmed || _burstMajor>Date.now())) return;   // a PR set never cuts into Finish's moment
  clearTimeout(_burstArm); _burstArmed=false;
  if(o.at>0){ const at=o.at; o.at=0; _burstArmed=true;
    // the buzz lands with the bang where the Vibration API exists (Android); iOS only buzzes inside the tap's gesture
    // (haptic() toggles a switch), so there it fires now rather than be dropped 500ms later
    if(o.haptic && !navigator.vibrate){ haptic(o.haptic); o.haptic=0; }
    _burstArm=setTimeout(()=>{ _burstArmed=false; celebrate(tier, o); }, at); return; }
  if(o.haptic) haptic(o.haptic);
  if(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;   // the toast's ✦ carries it
  if(document.hidden) return;
  if(_burstEnd) _burstEnd();
  document.querySelectorAll(".burst,.confetti,.glitter").forEach(n=>n.remove());
  // low-end hint: half the pieces. WebKit buckets hardwareConcurrency to 4 or 8, so every iPhone says 4 — only
  // fewer than 4 counts.
  const low=(navigator.hardwareConcurrency||8)<4 || (navigator.deviceMemory||8)<=4;
  const vw=innerWidth, vh=innerHeight, tg=boomTarget(o.tile);
  o.box = tg || { x:0, y:0, w:vw, h:vh, rad:0, screen:true };   // no tile on screen: the screen's edges break off, with fewer cannon pieces
  const t=Math.min(tier,3), parts=[glitter(t, o, low)]; if(t>=2 || o.cannon) parts.push(confetti(t, o, low));
  const b={ el:document.createElement("div"), ms:Math.max(...parts.map(p=>p.ms)) }; b.el.className="burst";
  _burstMajor = o.minor ? 0 : Date.now()+b.ms;
  parts.forEach(p=>b.el.appendChild(p.el));
  let timer=0;
  const onVis=()=>{ if(document.hidden) end(); };
  const end=()=>{ clearTimeout(timer); b.el.remove(); document.removeEventListener("visibilitychange", onVis); if(_burstEnd===end) _burstEnd=null; };
  _burstEnd=end; document.addEventListener("visibilitychange", onVis);
  requestAnimationFrame(()=>{ if(_burstEnd!==end) return; document.body.appendChild(b.el); timer=setTimeout(end, b.ms+150);
    if(tg) boomPop(tg.el, t); });
}
// the tile itself: a squeeze, then a pop past full size and a short shake (Web Animations, so it never restarts
// the tile's own CSS animations)
const _pops=new WeakMap();
function boomPop(el, t){
  if(!el.animate) return; const k=[0,.035,.05,.065][t], s=[0,3,4,5][t];
  const prev=_pops.get(el); if(prev) try{ prev.cancel(); }catch(e){}   // a new pop replaces one still running
  try{ _pops.set(el, el.animate([{ scale:"1", translate:"0 0" }, { scale:String(1-k*.9), translate:"0 0", offset:.12 },
    { scale:String(1+k), translate:-s+"px 0", offset:.32 }, { scale:String(1-k*.25), translate:s+"px 0", offset:.5 },
    { scale:String(1+k*.15), translate:-(s/2)+"px 0", offset:.68 }, { scale:"1", translate:"0 0" }],
    { duration:560, easing:"ease-out" })); }catch(e){}
}
// "#rrggbb" mixed toward "#rrggbb" by t (0…1); anything else comes back unchanged
function mixHex(a,b,t){ const p=h=>/^#[0-9a-f]{6}$/i.test(h)?[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)):null, x=p(a), y=p(b);
  if(!x||!y) return a; return "#"+x.map((v,i)=>Math.round(v+(y[i]-v)*t).toString(16).padStart(2,"0")).join(""); }
// Confetti cannons for PRs and unlocks: volleys shot up from both bottom corners that fall back, in the accent's
// two hues (--cel-1…6; Orange keeps its own gold-leaning palette, rose included) with sparks mixed in: gold/white, or
// the accent's --spark-1…3 when it sets them (Pink: rose gold, champagne, pearl). A third of Pink's pieces are candy
// hearts. The main sparks come from glitter(), the exploding tile, which every accent bursts. Everything has
// landed and faded by about 2.2s, so a share sheet under it is readable again.
function confetti(tier, opts, low){
  let P=opts.cannon||[0,0,20,24][tier]; if(low) P=Math.round(P/2);   // pieces per cannon (opts.cannon: a PR set's small volley)
  if(opts.box && opts.box.screen) P=Math.round(P*.5);   // no tile: the cannons stay light so they don't bury the page
  const fx=!!(window.CSS && CSS.supports && CSS.supports("translate","1px"));
  const c=document.createElement("div"); c.className="confetti";
  if(!fx || !P) return { el:c, ms:0 };   // the arcs need individual transform properties
  let colors;
  if(accentId()==="orange") colors=["#ffd60a","#fbbf24","#f5a040","#fff3c4","#ff9f1c","#ff375f","#e8820c",
    document.documentElement.classList.contains("dark") ? "#ff4d5e" : "#ff2f3d"];   // gold-led, with its red end
  else { const cs=getComputedStyle(document.documentElement);
    colors=[1,2,3,4,5,6].map(i=>cs.getPropertyValue("--cel-"+i).trim()).filter(Boolean);
    if(colors.length<4){ const a=accentHex(), dk=document.documentElement.classList.contains("dark");
      colors=[a, mixHex(a,"#ffffff",.35), mixHex(a,"#ffffff",.65), mixHex(a,"#000000",.2), dk?"#ffd60a":"#e0a800"].concat(dk?["#fff8e7"]:[]); } }
  const dk=document.documentElement.classList.contains("dark"), csx=getComputedStyle(document.documentElement),
    tsp=[1,2,3].map(i=>csx.getPropertyValue("--spark-"+i).trim()).filter(Boolean),
    sparks=tsp.length ? tsp : dk ? ["#ffd60a","#fff3c4","#ffffff"] : ["#f5b400","#ffd60a","#f0a020"];
  const hearts=accentId()==="pink", rnd=(a,b)=>a+Math.random()*(b-a), vw=innerWidth, vh=innerHeight;
  let ms=0;
  const sp=opts.stars ? .4 : .25;   // a star moment: more white/gold sparks in the volleys
  const htBg={}, html=[];   // one gradient string per colour; every piece goes in with one innerHTML parse
  for(let side=0; side<2; side++) for(let i=0;i<P;i++){ let cls, st;
    if(Math.random()<sp){ cls="spk can"; st="--s:"+rnd(10,20).toFixed(1)+"px;background:"+sparks[Math.floor(Math.random()*sparks.length)]; }
    else { const col=colors[Math.floor(Math.random()*colors.length)];
      if(hearts && Math.random()<.33){ cls="can ht"; st="--s:"+rnd(10,17).toFixed(1)+"px;background:"
        +(htBg[col]||(htBg[col]="radial-gradient(circle at 32% 28%,#fff 0 9%,"+col+" 36%,"+mixHex(col,"#000000",.15)+" 100%)")); }
      else { cls="can"; st="background:"+col+(Math.random()>.5 ? ";border-radius:50%" : ""); } }
    const wave = tier===3 && i>=P*.6 ? .35 : 0;   // an unlock fires a second, smaller volley
    const dl=.06+wave+Math.random()*.12, life=rnd(1.95,2.15)-wave; ms=Math.max(ms,(dl+life)*1000);
    html.push('<i class="'+cls+'" style="'+st+";left:"+(side? vw+6 : -6)+"px;top:"+(vh+8)+"px;--bx:"+((side?-1:1)*rnd(.12,.62)*vw).toFixed(0)+"px;--by:"+(-rnd(.48,.9)*vh).toFixed(0)
      +"px;--dy:"+(rnd(.25,.45)*vh).toFixed(0)+"px;--sw:"+rnd(-30,30).toFixed(0)+"px;--life:"+life.toFixed(2)+"s;--dl:"+dl.toFixed(3)+"s;--sz:"+(0.7+Math.random()*1.2).toFixed(2)
      +";--r0:"+rnd(0,360).toFixed(0)+"deg;--rot:"+((Math.random()<.5?-1:1)*rnd(360,900)).toFixed(0)+'deg"></i>');
  }
  c.innerHTML=html.join("");
  return { el:c, ms };
}
// The exploding tile, every accent: half 4-point sparks (a few large ones), then sequins and holographic flakes, in
// --glit-1…6. opts.box is the tile ({x,y,w,h,rad}, or the whole screen with screen:true). Each piece starts on the
// tile (two thirds on its rounded edge, the rest across its face) and flies out from the tile's centre, further the
// further out it sat, then drifts down with sway; it has faded by about 2.2s. A small tile (an achievement) still
// throws across about a card's width, and pieces that would leave the screen bounce back in, so the burst stays
// centred on the tile. Over the tile: a short accent sheen (.tflash) with a light sweep; PRs add a shock-wave ring
// the tile's shape, unlocks a second ring and a second, smaller wave. Off-target (screen), the pieces break off the
// screen edges and fall inward behind a soft edge glow. Pink adds candy hearts (glossy, they flutter rather than
// spin), a few small 5-point stars and --holo foil flakes; a star moment keeps its white/gold sparkles.
const GLIT_SHARE=[30,15,10,25,12,8];
function glitter(tier, opts, low){
  const cs=getComputedStyle(document.documentElement), a=accentHex(), dflt=[a, mixHex(a,"#ffffff",.35), mixHex(a,"#ffffff",.6), "#ffffff", "#f6d38a", mixHex(a,"#000000",.2)];
  const cols=GLIT_SHARE.map((_,i)=>cs.getPropertyValue("--glit-"+(i+1)).trim()||dflt[i]);
  const pinkish=accentId()==="pink", holo=pinkish ? cs.getPropertyValue("--holo").trim().replace(/"/g,"'") : "", gloss=cs.getPropertyValue("--heart-gloss").trim()||"#fff";
  let N=opts.pieces||[0,140,168,172][tier]; if(low) N=Math.round(N/2);
  const K=[0,.5,.62,.72][tier], V=[0,[40,130],[60,170],[70,200]][tier];
  const rnd=(a,b)=>a+Math.random()*(b-a), vw=innerWidth, vh=innerHeight;
  const pick=()=>{ let r=Math.random()*100; for(let i=0;i<cols.length;i++){ r-=GLIT_SHARE[i]; if(r<0) return cols[i]; } return cols[0]; };
  const fx=!!(window.CSS && CSS.supports && CSS.supports("translate","1px"));
  const B=opts.box, scr=!!B.screen, cx=B.x+B.w/2, cy=B.y+B.h/2, hw=B.w/2, hh=B.h/2, rad=B.rad||0;
  const reach=scr ? 0 : Math.max(0, Math.min(vw*.46, 180)-Math.max(hw,hh));   // a small tile still throws ~a card's width
  const lift=scr ? 0 : Math.max(0, Math.min(1, (cy/vh-.5)/.35))*[0,150,190,210][tier];   // a tile low on the screen throws upward, like a fountain
  const c=document.createElement("div"); c.className="glitter boom"+(fx?"":" fb");
  const f=document.createDocumentFragment(), n2=tier===3?Math.round(N*.22):0; let ms=0;
  // a star moment: a quarter of the pieces are white/gold 4-point star sparkles (gold and champagne on light, where white vanishes)
  const stc = opts.stars ? (document.documentElement.classList.contains("dark") ? ["#ffffff","#ffffff","#ffd60a","#f6d38a"] : ["#f5b400","#e0a800","#d9a94a"]) : null;
  const box=(cls, x, y, w, h, r, extra)=>{ const e=document.createElement("b"); e.className=cls;
    e.style.cssText="left:"+x.toFixed(1)+"px;top:"+y.toFixed(1)+"px;width:"+w.toFixed(1)+"px;height:"+h.toFixed(1)+"px;border-radius:"+r.toFixed(1)+"px"+(extra||""); return e; };
  if(fx){
    if(scr) f.appendChild(box("tflash scr", 0, 0, vw, vh, 0));
    else { const fl=box("tflash", B.x, B.y, B.w, B.h, rad); fl.appendChild(document.createElement("u")); f.appendChild(fl);
      for(let k=0;k<(opts.rings!=null ? opts.rings : tier===3?2:tier===2?1:0);k++) f.appendChild(box("tring", B.x, B.y, B.w, B.h, rad,
        ";--rs:"+[B.w,B.h].map(d=>(1+Math.min(1.2, 110/Math.max(40,d))*(k?1.3:1)).toFixed(2)).join(" ")+";--dl:"+(.05+k*.2).toFixed(2)+"s")); }   // grows ~110px each way, whatever its shape
  }
  // a point on the tile's rounded edge, u in 0…1 around it (corners follow the radius), pulled in by j px
  // segments clockwise from the top-left: top, TR corner, right, BR corner, bottom, BL corner, left, TL corner
  const SX=B.w-2*rad, SY=B.h-2*rad, Q=Math.PI*rad/2, SEG=[SX,Q,SY,Q,SX,Q,SY,Q], per=2*(SX+SY)+4*Q,
    X0=B.x+rad, X1=B.x+B.w-rad, Y0=B.y+rad, Y1=B.y+B.h-rad;
  let ex=cx, ey=cy;
  const sqBg={}, htBg={}, flBg={};   // one gradient string per colour, per burst
  const html=new Array(N);
  const edge=(u, j)=>{ let d=u*per, k=0, kl=-1;
    for(;k<8;k++){ const L=SEG[k]; if(!(L>0)) continue; kl=k; if(d<=L) break; d-=L; }
    if(k===8){ if(kl<0){ ex=cx; ey=cy; return; } k=kl; d=SEG[k]; }
    if(k&1){ const rj=Math.max(0,rad-j), t=(k-1)*Math.PI/4-Math.PI/2+d/rad, ox=k===1||k===3 ? X1 : X0, oy=k===3||k===5 ? Y1 : Y0;
      ex=ox+Math.cos(t)*rj; ey=oy+Math.sin(t)*rj; }
    else if(k===0){ ex=X0+d; ey=B.y+j; } else if(k===2){ ex=B.x+B.w-j; ey=Y0+d; }
    else if(k===4){ ex=X1-d; ey=B.y+B.h-j; } else { ex=B.x+j; ey=Y1-d; } };
  for(let i=0;i<N;i++){
    const w2=i>=N-n2;   // an unlock's second wave, from the face of the tile
    const onEdge = scr || (!w2 && Math.random()<.56);
    let px, py;
    if(onEdge){ edge(Math.random(), scr ? -6 : rnd(0,5)); px=ex; py=ey; }
    else { px=B.x+B.w*(.5+(Math.random()-.5)*.92); py=B.y+B.h*(.5+(Math.random()-.5)*.92); }
    if(opts.up && py>cy) py=2*cy-py;   // opts.up: the lower half starts from the upper half, clear of the row below
    const nx=(px-cx)/Math.max(hw,1), ny=(py-cy)/Math.max(hh,1), dn=Math.min(1.5,Math.hypot(nx,ny)), dist=Math.hypot(px-cx,py-cy);
    // out from the centre (direction taken on the tile's own proportions, so a wide button still throws up and down)
    let ang=Math.atan2(ny,nx)+rnd(-.38,.38), push;
    if(scr){ ang+=Math.PI; push=rnd(30,140); }                     // the screen edges throw inward, a little
    else push=(onEdge ? .45+.75*Math.pow(Math.random(),1.2) : .1+.6*Math.pow(Math.random(),1.5))*(K*dist*(w2?.55:1)+rnd(V[0],V[1])*(.45+.55*Math.min(1,dn))
      +reach*(onEdge ? rnd(.45,1) : rnd(.1,.6)));   // the face crumbles, the edge flies
    let bx=Math.cos(ang)*push, by=Math.sin(ang)*push-(scr?0:rnd(0,40)+lift*rnd(.4,1));
    if(opts.up && by>0){ bx*=1.25; by*=.3; }   // opts.up (a PR set): what flies down goes sideways, off the fields below
    if(!scr && (px+bx<10 || px+bx>vw-10)) bx=-bx*.8;   // bounce back in off the screen's side, so a tile by the edge still bursts both ways
    const dl=(w2?.36:.04)+Math.random()*(w2?.12:.06), life=rnd(1.75,2.15)-(w2?dl-.04:0);
    ms=Math.max(ms,(life+dl)*1000);
    const C=pick(), k=Math.random(); let cls, sz, bg, r0="0deg", rot="0deg";
    if(stc && i%4===1){ cls="sp star"; sz = Math.random()<.2 ? rnd(24,34) : rnd(12,22); bg=stc[Math.floor(Math.random()*stc.length)]; rot=((Math.random()<.5?-1:1)*rnd(45,120)).toFixed(0)+"deg"; }
    else if(pinkish && k<.16){ const H=onEdge||Math.random()<.5 ? C : cols[3];   // candy hearts; on the face, pearl-pink
      cls="ht"; sz = Math.random()<.15 ? rnd(16,22) : rnd(9,15);
      bg=htBg[H]||(htBg[H]="radial-gradient(circle at 32% 28%,"+gloss+" 0 9%,"+H+" 36%,"+mixHex(H,"#000000",.15)+" 100%)");
      r0=rnd(-25,25).toFixed(0)+"deg"; rot=rnd(-30,30).toFixed(0)+"deg"; }
    else if(pinkish && k<.2){ cls="st5"; sz=rnd(8,13); bg = Math.random()<.5 ? cols[4] : cols[3]; rot=((Math.random()<.5?-1:1)*rnd(60,140)).toFixed(0)+"deg"; }
    else if(k<.5){ cls="sp"; sz = Math.random()<.08 ? rnd(22,30) : onEdge ? rnd(12,22) : rnd(10,20); bg = Math.random()<(onEdge||scr?.3:.55) ? cols[3] : C;   // the face glints whiter, so it shows on the tile's own colour
    rot=((Math.random()<.5?-1:1)*rnd(90,220)).toFixed(0)+"deg"; }
    else if(k<.8){ cls="sq"; sz=rnd(4,8);   // edge sequins are domed; the face's crumbs stay flat (cheaper to paint)
      bg = onEdge ? sqBg[C]||(sqBg[C]="radial-gradient(circle at 35% 35%,#fff 0 18%,"+C+" 45%,"+mixHex(C,"#000000",.3)+" 100%)") : C; }
    else { cls="fl"; sz=rnd(4,7); bg = holo || flBg[C]||(flBg[C]="linear-gradient(135deg,"+C+",#fff 50%,"+C+")"); r0="45deg"; }
    html[i]='<i class="'+cls+' t'+(i%3)+'" style="left:'+px.toFixed(1)+'px;top:'+py.toFixed(1)+'px;--s:'+sz.toFixed(1)+'px;background:'+bg
      +';--bx:'+bx.toFixed(1)+'px;--by:'+by.toFixed(1)+'px;--dy:'+(opts.up ? rnd(30,70) : rnd(110,230)).toFixed(0)
      +'px;--sw:'+rnd(-20,20).toFixed(1)+'px;--life:'+life.toFixed(2)+'s;--dl:'+dl.toFixed(3)+'s;--r0:'+r0+';--rot:'+rot+'"></i>';
  }
  c.innerHTML=html.join("");   // one parse for all the pieces (much cheaper than ~170 cssText sets)
  c.prepend(f);   // the sheen and rings sit under the pieces
  return { el:c, ms };
}

// ================= plans sheet =================
// Each animatable chart registers a redraw closure keyed by its canvas id. On sheet open we replay it
// with progress 0→1, so the PLOTTED DATA grows in (bars rise, lines draw, wedges expand) while the axes
// stay put — the same feel as the home spotlight.
let _figFns={};
function animateFig(id){
  const fn=_figFns[id], c=$(id); if(!fn||!c||!c.offsetParent) return;
  if(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches){ fn(1); return; }
  const start=Date.now(), dur=1000;
  (function frame(){ const p=Math.min(1,(Date.now()-start)/dur), e=1-Math.pow(1-p,4); fn(e); if(p<1) requestAnimationFrame(frame); })();
}
function openSheet(s){ $("scrim"+s).classList.add("show"); const sh=$("sheet"+s); if(sh) sh.classList.add("show");
  if(sh && sh.classList.contains("detailsheet")) setTimeout(()=>{ sh.querySelectorAll(".sheetbody canvas").forEach(cv=>{ if(cv.id) animateFig(cv.id); }); }, 170);
}
function closeSheet(s){ $("scrim"+s).classList.remove("show"); $("sheet"+s).classList.remove("show"); if(s==="Share"){ clearTimeout(_burstArm); _burstArm=0; } }
if($("planPick")) $("planPick").onclick=()=>{ renderPlanList(); openSheet("Plans"); };
$("closePlans").onclick=()=>closeSheet("Plans");
$("scrimPlans").onclick=()=>closeSheet("Plans");
// move the "set-once" groups (body details, appearance, account, data) off Me into the Settings sheet
(function(){ const body=$("settingsBody"); if(!body) return; ["setBody","setMisc"].forEach(id=>{ const el=$(id); if(el) body.appendChild(el); }); })();
// Goal weight: prompt for it on the Me page while unset; once filled it moves into Settings to keep Me uncluttered.
function placeGoalBlock(){
  const blk=$("goalBlock"); if(!blk) return;
  const filled = settings.goalStart!=null && settings.goalTarget!=null;
  const home = filled ? $("goalHomeSettings") : $("goalHomeMe");
  if(home && blk.parentElement!==home) home.appendChild(blk);
  if($("goalStart")) $("goalStart").value = settings.goalStart!=null ? settings.goalStart : "";
  if($("goalTarget")) $("goalTarget").value = settings.goalTarget!=null ? settings.goalTarget : "";
}
$("openSettings").onclick=()=>{ renderDash(); renderAccount(); if($("setRestDefault")) $("setRestDefault").value=tmrFmt(settings.restSec||180); renderTipSeg(); renderTipModeSeg(); renderTravel(); openSheet("Settings"); };
$("settingsClose").onclick=()=>closeSheet("Settings");
if($("setRestDefault")) $("setRestDefault").onchange=e=>{ const sec=parseRest(e.target.value); if(sec){ settings.restSec=Math.max(5,Math.min(1800,Math.round(sec))); sset("settings",settings); } e.target.value=tmrFmt(settings.restSec||180); };
$("scrimSettings").onclick=()=>closeSheet("Settings");
// Friends sheet (the people) — opened from the Overview presence rail or Settings → Friends
function openFriends(){ renderFriends(); openSheet("Friends"); if(cloudReady() && dbHardened) coach("dmFriend","Tap a friend to open their profile · long-press to message them."); }
if($("friendsClose")) $("friendsClose").onclick=()=>closeSheet("Friends");
if($("scrimFriends")) $("scrimFriends").onclick=()=>closeSheet("Friends");
// end-to-end encrypted messages: open from the Friends hub
if($("ovMessages")) $("ovMessages").onclick=openMessages;   // the single inbox entry — overview chat icon
if($("msgBackupNav")) $("msgBackupNav").onclick=promptBackup;   // permanent home for key backup / change passphrase
function closeMessages(){ _msgThreadUid=null; closeReactUI(); if(_msgThreadChan){ try{ sb.removeChannel(_msgThreadChan); }catch(e){} _msgThreadChan=null; } closeSheet("Messages"); }
if($("msgClose")) $("msgClose").onclick=closeMessages;
if($("scrimMessages")) $("scrimMessages").onclick=closeMessages;
if($("msgBack")) $("msgBack").onclick=()=> _msgThreadUid?renderConversations():closeMessages();
if($("manageFriends")) $("manageFriends").onclick=()=>{ closeSheet("Settings"); openFriends(); };
// the signed-out CTA and the "Sharing & privacy" link both route into Settings → Account & sync
if($("friendsCTA")) $("friendsCTA").onclick=()=>{ closeSheet("Friends"); goAccount(); };
if($("friendsToSharing")) $("friendsToSharing").onclick=()=>{ closeSheet("Friends"); goAccount(); };
if($("feedCTA")) $("feedCTA").onclick=goAccount;   // signed-out overview feed prompt → Account & sync
// friend profile sheet
if($("profClose")) $("profClose").onclick=()=>closeSheet("Profile");
if($("scrimProfile")) $("scrimProfile").onclick=()=>closeSheet("Profile");
// avatar editor sheet
if($("avatarClose")) $("avatarClose").onclick=()=>closeSheet("Avatar");
if($("scrimAvatar")) $("scrimAvatar").onclick=()=>closeSheet("Avatar");
if($("avInitials")) $("avInitials").onclick=()=>{ _avEditEmoji=null; _avEditIcon=null; saveAvatar(); };
$("goalSave").onclick=async()=>{ const s=parseFloat($("goalStart").value),g=parseFloat($("goalTarget").value);
  if(isNaN(s)||isNaN(g)||g<=s){ toast("Goal must be above start"); return; }
  const wasOnMe = $("goalBlock") && $("goalBlock").parentElement===$("goalHomeMe");
  settings.goalStart=s; settings.goalTarget=g; await sset("settings",settings); renderDash(); placeGoalBlock();
  toast(wasOnMe ? "Goal saved — find it in Settings ⚙" : "Goal updated"); };
// objective selector (Me) + first-run onboarding
// --- changes to objective/focus aren't saved until confirmed via an inline prompt right under the control ---
let _pendFocus=null, _pendObj=null;
function showInlineConfirm(boxId, msg, apply){
  const box=$(boxId); if(!box) return;
  box.innerHTML='<span class="icmsg">'+esc(msg)+'</span><span class="icbtns"><button class="iccancel">Cancel</button><button class="icok">Confirm</button></span>';
  box.classList.add("show");
  box.querySelector(".iccancel").onclick=cancelPending;
  box.querySelector(".icok").onclick=async()=>{ await apply(); };
}
function cancelPending(){ _pendFocus=null; _pendObj=null; ["objConfirm","focusConfirm"].forEach(id=>{ const b=$(id); if(b){ b.classList.remove("show"); b.innerHTML=""; } }); renderObjective(); }
document.querySelectorAll("#objChips .chip").forEach(c=> c.onclick=()=>{
  if(c.dataset.v===settings.objective && !_pendObj){ return; }
  _pendObj=c.dataset.v;
  document.querySelectorAll("#objChips .chip").forEach(x=>{ const on=x.dataset.v===_pendObj; x.classList.toggle("on",on); x.classList.toggle("pending",on); });
  showInlineConfirm("objConfirm", "Set your objective to “"+(OBJ_LABELS[_pendObj]||_pendObj)+"”?", async()=>{ const v=_pendObj; _pendObj=null; await setObjective(v); });
});
document.querySelectorAll("#onboardWrap .obopt").forEach(b=> b.onclick=()=> setObjective(b.dataset.obj));

// ================= pages / bottom tab bar =================
function showTab(name){
  clearTimeout(_burstArm); _burstArm=0;   // a burst waiting for the share card has nothing to land on now
  if(typeof cancelPending==="function") cancelPending();   // drop any unconfirmed objective/focus change on navigation
  if(window.__revealBar) window.__revealBar();             // always show the tab bar when switching tabs
  if(_finPadDrop) _finPadDrop();                           // a post-Finish spacer goes with the page change
  document.querySelectorAll(".page").forEach(p=> p.classList.toggle("active", p.dataset.tab===name));
  document.querySelectorAll(".tabitem").forEach(t=> t.classList.toggle("active", t.dataset.tab===name));
  if(window.__pageGo) window.__pageGo(name); else { try{ window.scrollTo(0,0); }catch(e){} }
  if(name==="me"){
    $("goalStart").value=settings.goalStart||""; $("goalTarget").value=settings.goalTarget||"";
    $("heightIn").value=settings.heightCm||""; $("bfIn").value=settings.bodyfatPct||""; $("nameIn").value=settings.name||""; if($("ageIn")) $("ageIn").value=settings.age||"";
    renderDash(); renderAccount(); animateProgBars();
    const t=Date.now(); setTimeout(()=>maybeStarIntro(t), 450);   // once, after the first count of your history
  } else if(name==="workout"){
    if(settings.surprise && !sessionUnderway() && !(draft["free"]&&draft["free"].spon)) loadSurprise();
    coach("workout","Tap a set to log your weight × reps. The coach tracks each exercise across all your plans, so progress carries over.");
  } else if(name==="overview"){
    _spotSeed=Math.random();   // fresh spotlight pick each time you land on the home
    renderOverview(); renderAccount();
    const t=Date.now(); setTimeout(()=>maybeStarIntro(t), 450);
  }
}
document.querySelectorAll(".tabitem").forEach(t=> t.onclick=()=> showTab(t.dataset.tab));
// SCROLL-LINKED tab bar (REVERSED): the bar tracks your scroll 1:1 — it slides UP INTO view as you scroll
// DOWN, and slides DOWN OUT of view as you scroll UP, at the same speed in both directions (no fixed-duration
// snap). window.__revealBar smoothly re-shows it on tab switch (tap or swipe) so the nav stays reachable.
// At the BOTTOM of the content the bar always stays present (fills the end-of-scroll space, absorbs bounce).
// Per-page scrollTop tracking (el._barLastY) so swiping between tabs can't jump it.
(function(){
  const bar=document.querySelector(".tabbar"); if(!bar) return;
  const EASE="transform .3s cubic-bezier(.4,0,.2,1)";   // smooth glide for programmatic reveals (tab switch / top)
  let offset=0, maxOff=120;
  function measure(){ maxOff=Math.round((bar.offsetHeight||100)*1.18); }   // px needed to tuck it fully off-screen
  function render(snap){
    bar.style.transition   = snap ? EASE : "none";        // snap=smooth glide; otherwise follow the finger 1:1
    bar.style.transform    = offset>0 ? "translateY("+offset+"px)" : "";
    bar.style.pointerEvents = offset>=maxOff-1 ? "none" : "";
  }
  // Re-show smoothly (called on every tab switch, tap or swipe) and re-anchor the active page's scroll.
  window.__revealBar=function(){ offset=0; render(true); const a=document.querySelector(".page.active"); if(a) a._barLastY=a.scrollTop; };
  function onScroll(e){
    const el=e.target; if(!el || !el.classList || !el.classList.contains("page") || !el.classList.contains("active")) return;
    const y=el.scrollTop;
    const prev = (el._barLastY==null) ? y : el._barLastY;
    el._barLastY = y;
    // At the bottom of the content the bar STAYS present (and absorbs iOS's rubber-band bounce, whose
    // settle-back would otherwise read as a scroll-up and hide it). This also fills what would be empty
    // space below the last item. Also covers short, non-scrolling pages (always at-bottom → bar shown).
    if(y + el.clientHeight >= el.scrollHeight - 4){ if(offset!==0){ offset=0; render(true); } return; }
    const dy=y-prev; if(dy===0) return;
    offset=Math.max(0, Math.min(maxOff, offset - dy));               // scroll DOWN (dy>0) → reveal; scroll UP → hide; clamped, 1:1
    render(false);
  }
  measure();
  window.addEventListener("resize", measure);
  document.querySelectorAll(".page").forEach(p=> p.addEventListener("scroll", onScroll, {passive:true}));
})();
// drag the three pages with your finger — Overview ↔ Workout ↔ Me track 1:1, snapping to the nearest on release
(function(){
  const ORDER=["overview","workout","me"];
  const pages=ORDER.map(n=>document.querySelector('.page[data-tab="'+n+'"]'));
  if(pages.some(p=>!p)) return;                          // structure changed — leave tab buttons as the fallback
  const shell=document.createElement("div"); shell.id="shell";          // fixed flex column: content fills, tab bar is the bottom row
  const pager=document.createElement("div"); pager.id="pager";
  const track=document.createElement("div"); track.id="track"; pager.appendChild(track);
  pages[0].parentNode.insertBefore(shell, pages[0]);
  shell.appendChild(pager);
  pages.forEach(p=> track.appendChild(p));               // all three pages move into the swipe track, in tab order
  const tabbar=document.querySelector(".tabbar"); if(tabbar) shell.appendChild(tabbar);  // overlay tab bar, painted last
  // Shell height is pure CSS 100vh — NO JS height-setting (see the #shell rule). On the installed iOS PWA,
  // reading visualViewport.height/innerHeight at launch returns a stale/short value (the DYNAMIC viewport
  // isn't initialized until a geometry change), which is exactly the cold-launch blank-strip bug; 100dvh has
  // the same flaw. 100vh is the static large viewport, correct from cold start in standalone, so we let CSS own it.
  const W=()=> pager.clientWidth || window.innerWidth;
  const curTab=()=>{ const a=document.querySelector(".page.active"); return a?a.dataset.tab:"overview"; };
  const clamp=(v,a,b)=> v<a?a:(v>b?b:v);
  // iOS-style rubber band: progressive resistance, asymptotes to ~the dimension
  const rubber=(over, dim)=> (1 - 1/(Math.abs(over)*0.55/dim + 1)) * dim * (over<0?-1:1);
  let idx=Math.max(0, ORDER.indexOf(curTab()));
  let tx=0, raf=0;                                                 // tracked horizontal position of the track (px)
  const apply=()=>{ track.style.transform="translateX("+tx+"px)"; };
  function place(i, animate, ms){ cancelAnimationFrame(raf); idx=Math.min(2,Math.max(0,i));
    track.style.transition = animate ? ("transform "+(ms||340)+"ms cubic-bezier(.32,.72,0,1)") : "none";
    tx=-idx*W(); apply(); }
  window.__pageGo=(name)=>{ const i=ORDER.indexOf(name); if(i>=0 && i!==idx) place(i, true); };
  place(idx, false);
  window.addEventListener("resize", ()=>place(idx,false));

  // don't hijack gestures meant for an input, canvas, button, horizontal strip, drag handle, the tab bar, or an open sheet
  const blocked=el=>{ for(let n=el; n && n!==document.body; n=n.parentElement){
    if(n.matches && n.matches('input,textarea,select,canvas,button,[data-act="grip"],.seg,.sexseg,.appearance,.chips,.tabbar,.sheet,.meRing,.progswipe')) return true;
    const ox=getComputedStyle(n).overflowX; if((ox==="auto"||ox==="scroll") && n.scrollWidth>n.clientWidth+4) return true;
  } return false; };
  let x0=0, y0=0, armed=false, locked=false, dragging=false, lastX=0, lastT=0, vx=0;
  pager.addEventListener("touchstart",e=>{
    if(e.touches.length!==1 || document.querySelector(".sheet.show, #onboardWrap.show") || blocked(e.target)){ armed=false; return; }
    cancelAnimationFrame(raf);
    x0=lastX=e.touches[0].clientX; y0=e.touches[0].clientY; lastT=Date.now(); vx=0;
    armed=true; locked=false; dragging=false; track.style.transition="none";
  },{passive:true});
  pager.addEventListener("touchmove",e=>{
    if(!armed) return;
    const x=e.touches[0].clientX, y=e.touches[0].clientY, dx=x-x0, dy=y-y0;
    if(!locked){
      const adx=Math.abs(dx), ady=Math.abs(dy);
      if(adx<6 && ady<6) return;                                   // tiny deadzone, then decide quickly
      if(adx <= ady*1.2){ armed=false; return; }                   // vertical OR diagonal → let the page scroll (the common intent)
      locked=true; dragging=true;                                  // only a clearly horizontal drag pages between tabs
    }
    e.preventDefault();                                            // own the horizontal gesture
    const tm=Date.now(), dt=tm-lastT; if(dt>0){ vx=0.8*((x-lastX)/dt)+0.2*vx; lastX=x; lastT=tm; }  // smoothed px/ms
    const W0=W(); let nx=-idx*W0+dx;                               // 1:1 with the finger between pages…
    if(nx>0) nx=rubber(nx, W0);                                    // …only the two outer edges resist
    else if(nx<-2*W0) nx=-2*W0 + rubber(nx+2*W0, W0);
    tx=nx; apply();
  },{passive:false});
  const end=e=>{
    if(!armed) return; armed=false; if(!dragging){ return; } dragging=false;
    const W0=W(), dxe=(e.changedTouches?e.changedTouches[0].clientX-x0:0), proj=dxe + vx*150;  // momentum-projected landing
    const flick=Math.abs(vx)>0.3;                                  // a deliberate flick commits regardless of distance
    let target=idx;
    if((proj <= -W0*0.3 || (flick && vx<0)) && idx<2) target=idx+1;
    else if((proj >= W0*0.3 || (flick && vx>0)) && idx>0) target=idx-1;
    const remain=Math.abs(-target*W0 - tx);
    const ms=clamp(Math.round(remain/Math.max(Math.abs(vx),0.9)), 200, 420);  // continue the throw's momentum into the settle
    place(target, true, ms);
    if(ORDER[target]!==curTab()) showTab(ORDER[target]);          // highlight tab + render (place owns the visual)
  };
  pager.addEventListener("touchend",end,{passive:true});
  pager.addEventListener("touchcancel",end,{passive:true});
})();
// hide the tab bar while a field is focused — the keyboard otherwise floats a bottom-anchored bar up.
// restore is belt-and-braces: blur, any tap, and viewport changes all bring it back once nothing's focused.
(function(){
  const isField=el=> el && el.matches && el.matches('input:not([type=checkbox]):not([type=radio]):not([type=file]),textarea,select,[contenteditable="true"]');
  const vv=window.visualViewport;
  const hide=()=> document.body.classList.add("kb");
  const show=()=>{ if(!isField(document.activeElement)) document.body.classList.remove("kb"); };
  document.addEventListener("focusin", e=>{ if(isField(e.target)) hide(); }, true);
  document.addEventListener("focusout", ()=> setTimeout(show, 80), true);
  document.addEventListener("touchend", ()=> setTimeout(show, 0), {passive:true});   // a tap always restores it if no field is focused
  window.addEventListener("pageshow", ()=> setTimeout(show, 0));
  if(vv){ vv.addEventListener("resize", show); }   // resize only — scroll fires constantly and would churn
})();
$("bodySave").onclick=async()=>{
  const h=parseFloat($("heightIn").value), bf=parseFloat($("bfIn").value), a=parseInt($("ageIn").value);
  settings.heightCm = (!isNaN(h)&&h>=100&&h<=250) ? h : null;
  settings.bodyfatPct = (!isNaN(bf)&&bf>=2&&bf<=60) ? bf : null;
  settings.age = (!isNaN(a)&&a>=12&&a<=100) ? a : null;
  await sset("settings",settings); renderDash(); toast("Body details saved");
};
document.querySelectorAll("#sexSeg .s").forEach(s=> s.onclick=async()=>{ settings.sex=s.dataset.sex; await sset("settings",settings); renderDash(); });
document.querySelectorAll("#expSeg .s").forEach(s=> s.onclick=async()=>{ settings.exp=s.dataset.exp; await sset("settings",settings); renderDash(); });
$("nameIn").onchange=async()=>{ settings.name=$("nameIn").value.trim().slice(0,24); await sset("settings",settings); };

function renderPlanList(){
  const wrap=$("planList"); wrap.innerHTML="";
  plans.forEach(p=>{
    const active=p.id===settings.activePlanId;
    const sc=planScores(p);
    const item=document.createElement("div"); item.className="planitem";
    const row=document.createElement("div"); row.className="planrow"+(active?" active":"");
    row.innerHTML=`<div class="info"><div class="prhead"><span class="nm">${esc(p.name)}${active?' <span class="actag">Active</span>':''}</span>
        <button class="edit share" aria-label="Share ${esc(p.name)}">Share</button><button class="edit" aria-label="Edit ${esc(p.name)}">Edit</button></div>
        <div class="meta">${esc(planMeta(p))}</div>
        <div class="pscores"><span class="psc pscbtn" data-bal="1"><b>Balance</b> ${sc.balance}<small>/5</small> <span class="psccar">›</span></span><span class="psc"><b>Hypertrophy</b> ${sc.hyp}<small>/5</small></span></div></div>`;
    row.querySelector(".info").onclick=async(ev)=>{ if(ev.target.closest(".pscbtn,.edit")) return;   // Balance chip reveals the plan's rose; Share/Edit have their own handlers
      settings.activePlanId=p.id; settings.planStartAt=Date.now(); freeMode=false; swaps={}; const ni=nextRotateIndex(p); curWk=ni>=0?ni:0;
      await sset("settings",settings); renderAll(); closeSheet("Plans"); toast("Switched to "+p.name); };
    row.querySelector(".share").onclick=()=>openShare(p);
    row.querySelector(".edit:not(.share)").onclick=()=>{ closeSheet("Plans"); openEditor(p); };
    item.appendChild(row);
    // plan balance lives with the plan: tap the Balance chip to reveal this plan's projected-balance rose
    const bWrap=document.createElement("div"); bWrap.className="planbal"; bWrap.style.display="none";
    const bc=document.createElement("canvas"); bc.id="planbal_"+p.id; bc.width=720; bc.height=720; bc.className="planbalc";
    const bCap=document.createElement("p"); bCap.className="planbalcap";
    bWrap.appendChild(bc); bWrap.appendChild(bCap); item.appendChild(bWrap);
    row.querySelector(".pscbtn").onclick=(ev)=>{ ev.stopPropagation();
      const car=row.querySelector(".psccar");
      if(bWrap.style.display!=="none"){ bWrap.style.display="none"; if(car) car.style.transform=""; return; }
      bWrap.style.display="block"; if(car) car.style.transform="rotate(90deg)";
      const {totals}=planVolume(p);
      drawRadar(totals, bc.id, null, false, false);   // the plan's balance SHAPE (labelled); a plan cycle has no weekly target
      bCap.textContent="Balance "+sc.balance+"/5 — a fuller, rounder rose means more even coverage across muscles.";
    };
    wrap.appendChild(item);
  });
}
$("newPlan").onclick=()=>{ closeSheet("Plans"); openEditor(null); };

// ================= editor =================
function openEditor(plan){
  const isNew=!plan;
  editing = plan ? JSON.parse(JSON.stringify(plan))
                 : { id:"plan"+Date.now(), name:"", workouts:[{name:"Day 1", sub:"", rotate:true, ex:[{n:"",t:"3 × 8",s:3}]}] };
  $("edTitle").textContent = isNew?"New Plan":"Edit Plan";
  $("edName").value = editing.name;
  $("edDelete").style.display = isNew?"none":"block";
  renderEditor(); openSheet("Ed");
  coach("editor","Drag the ⠿ handle to reorder moves, tap the flame to superset two exercises, and add alternatives under each.");
}
function renderEditor(){
  const wrap=$("edWorkouts"); wrap.innerHTML="";
  editing.workouts.forEach((w,wi)=>{
    normalizeSS(w);
    const box=document.createElement("div"); box.className="ed-wk";
    let exHtml="";
    w.ex.forEach((e,ei)=>{ const linkedNext = ei<w.ex.length-1 && e.ss && e.ss===w.ex[ei+1].ss;
      exHtml+=`<div class="ed-ex${e.ss?' ss-on':''}" data-ei="${ei}">
      <div class="ed-ex-l1">
        <button class="exgrip" data-act="grip" aria-label="Drag to reorder">⠿</button>
        <input class="exn" placeholder="Exercise" value="${esc(e.n)}">
        <input class="ext" placeholder="3 × 8" value="${esc(e.t)}">
        <input class="exs" type="number" inputmode="numeric" placeholder="sets" value="${e.s}">
        ${ ei<w.ex.length-1 ? '<button class="exlink'+(linkedNext?' on':'')+'" data-act="sslink" title="Superset with the move below">'+ICON.flame+'</button>' : '<span class="exlink-sp"></span>' }
        <button class="del" data-act="delex">×</button>
      </div>
      <input class="exa" placeholder="alternatives (comma separated)" value="${esc((e.alts||[]).join(', '))}">
    </div>`; });
    box.innerHTML=`
      <div class="wkhead">
        <input class="wkn" placeholder="Workout name" value="${esc(w.name)}">
        <input class="wks" placeholder="subtitle" value="${esc(w.sub||'')}">
        <button class="del" data-act="delwk">×</button>
      </div>
      ${exHtml}
      <button class="miniadd" data-act="addex">+ Add exercise</button>
      <div class="rotwrap"><input type="checkbox" data-act="rot" ${w.rotate!==false?'checked':''}> counts toward rotation &amp; deload</div>`;
    box.dataset.wi=wi;
    wrap.appendChild(box);
  });
  bindEditor();
}
function readEditorDom(){
  // pull current field values into `editing` before structural changes
  editing.name=$("edName").value;
  document.querySelectorAll("#edWorkouts .ed-wk").forEach(box=>{
    const wi=+box.dataset.wi, w=editing.workouts[wi];
    w.name=box.querySelector(".wkn").value;
    w.sub=box.querySelector(".wks").value;
    w.rotate=box.querySelector('[data-act="rot"]').checked;
    box.querySelectorAll(".ed-ex").forEach(row=>{ const ei=+row.dataset.ei, e=w.ex[ei];
      e.n=row.querySelector(".exn").value; e.t=row.querySelector(".ext").value;
      e.s=Math.max(1,Math.min(10, parseInt(row.querySelector(".exs").value)||1));
      e.alts=row.querySelector(".exa").value.split(",").map(s=>s.trim()).filter(Boolean); });
  });
}
// drop stale superset tags left on non-adjacent moves (e.g. after a reorder or delete) and re-letter cleanly
function normalizeSS(w){ if(!w||!w.ex) return; const ex=w.ex, n=ex.length;
  const keep=[]; for(let i=0;i<n-1;i++) keep[i]=!!(ex[i].ss && ex[i].ss===ex[i+1].ss);
  ex.forEach(e=>{ delete e.ss; }); let code=97;
  for(let i=0;i<n-1;i++){ if(keep[i]){ if(!ex[i].ss) ex[i].ss=String.fromCharCode(code++); ex[i+1].ss=ex[i].ss; } }
}
// link/unlink an exercise with the one below it into a superset, then renumber the group tags cleanly
function toggleSS(w, ei){
  const ex=w.ex, n=ex.length; if(ei<0 || ei>=n-1) return;
  const linked=[]; for(let i=0;i<n-1;i++) linked[i]=!!(ex[i].ss && ex[i].ss===ex[i+1].ss);
  linked[ei]=!linked[ei];
  ex.forEach(e=>{ delete e.ss; });
  let code=97;
  for(let i=0;i<n-1;i++){ if(linked[i]){ if(!ex[i].ss) ex[i].ss=String.fromCharCode(code++); ex[i+1].ss=ex[i].ss; } }
}
function bindEditor(){
  document.querySelectorAll("#edWorkouts .ed-wk").forEach(box=>{
    const wi=+box.dataset.wi;
    box.querySelector('[data-act="addex"]').onclick=()=>{ readEditorDom(); editing.workouts[wi].ex.push({n:"",t:"3 × 8",s:3}); renderEditor(); };
    box.querySelector('[data-act="delwk"]').onclick=()=>{ readEditorDom(); if(editing.workouts.length>1) editing.workouts.splice(wi,1); else toast("Keep at least one workout"); renderEditor(); };
    box.querySelectorAll('[data-act="delex"]').forEach(b=>{ b.onclick=()=>{ readEditorDom();
      const ei=+b.closest(".ed-ex").dataset.ei; const w=editing.workouts[wi];
      if(w.ex.length>1) w.ex.splice(ei,1); else toast("Keep at least one exercise"); renderEditor(); }; });
    box.querySelectorAll('[data-act="sslink"]').forEach(btn=>{ btn.onclick=()=>{ readEditorDom();
      const ei=+btn.closest('.ed-ex').dataset.ei; toggleSS(editing.workouts[wi], ei); renderEditor(); }; });
    // drag a handle to reorder exercises within this workout
    box.querySelectorAll('.exgrip').forEach(handle=>{
      handle.addEventListener('pointerdown', e=>{
        e.preventDefault(); readEditorDom();
        const row=handle.closest('.ed-ex'); row.classList.add('dragging');
        const addBtn=box.querySelector('.miniadd');
        const onMove=ev=>{ ev.preventDefault(); const y=ev.clientY; let ref=null;
          box.querySelectorAll('.ed-ex').forEach(s=>{ if(s===row||ref) return; const rc=s.getBoundingClientRect(); if(y < rc.top+rc.height/2) ref=s; });
          box.insertBefore(row, ref||addBtn); };
        const onUp=()=>{ row.classList.remove('dragging');
          document.removeEventListener('pointermove', onMove); document.removeEventListener('pointerup', onUp); document.removeEventListener('pointercancel', onUp);
          const order=Array.from(box.querySelectorAll('.ed-ex')).map(r=>+r.dataset.ei), old=editing.workouts[wi].ex;
          editing.workouts[wi].ex=order.map(ei=>old[ei]); renderEditor(); };
        document.addEventListener('pointermove', onMove, {passive:false}); document.addEventListener('pointerup', onUp); document.addEventListener('pointercancel', onUp);
      });
    });
  });
}
$("edAddWk").onclick=()=>{ readEditorDom(); editing.workouts.push({name:"Day "+(editing.workouts.length+1),sub:"",rotate:true,ex:[{n:"",t:"3 × 8",s:3}]}); renderEditor(); };
$("edCancel").onclick=()=>closeSheet("Ed");
$("scrimEd").onclick=()=>closeSheet("Ed");
$("edDelete").onclick=()=>{
  confirmAsk("Delete the plan “"+editing.name+"”? This can’t be undone.", "Delete plan", async()=>{
    plans=plans.filter(p=>p.id!==editing.id);
    if(!plans.length) plans=JSON.parse(JSON.stringify(DEFAULT_PLANS));
    if(settings.activePlanId===editing.id) settings.activePlanId=plans[0].id;
    await sset("plans",plans); await sset("settings",settings);
    const ni=nextRotateIndex(activePlan()); curWk=ni>=0?ni:0;
    closeSheet("Ed"); renderAll(); toast("Plan deleted");
  });
};
$("edSave").onclick=async()=>{
  readEditorDom();
  if(!editing.name.trim()){ toast("Give the plan a name"); return; }
  // clean empty exercises
  editing.workouts.forEach(w=> w.ex=w.ex.filter(e=>e.n.trim()));
  editing.workouts=editing.workouts.filter(w=>w.ex.length);
  editing.workouts.forEach(normalizeSS);
  if(!editing.workouts.length){ toast("Add at least one exercise"); return; }
  const idx=plans.findIndex(p=>p.id===editing.id);
  const stayOnView = settings.activePlanId===editing.id && curWk < editing.workouts.length;
  if(idx>=0) plans[idx]=editing; else plans.push(editing);
  settings.activePlanId=editing.id; if(!settings.pointers[editing.id]) settings.pointers[editing.id]=0;
  await sset("plans",plans); await sset("settings",settings);
  if(!stayOnView){ const ni=nextRotateIndex(activePlan()); curWk=ni>=0?ni:0; }
  closeSheet("Ed"); renderAll(); toast("Plan saved");
};

// ================= share / import plans =================
function b64e(s){ return btoa(unescape(encodeURIComponent(s))); }
function b64d(s){ return decodeURIComponent(escape(atob(s))); }
function encodePayload(o){ return "LIFTLOG1:"+b64e(JSON.stringify(o)); }
function decodePayload(code){
  code=String(code||""); const i=code.indexOf("LIFTLOG1:"); if(i<0) throw new Error("no code");
  code=code.slice(i+9).replace(/\s+/g,"");
  return JSON.parse(b64d(code));
}
function sanitizePlan(obj){
  const wk=(obj.workouts||[]).map(w=>({
    name:String(w.name||"Workout").slice(0,40), sub:String(w.sub||"").slice(0,60), rotate:w.rotate!==false,
    ex:(w.ex||[]).filter(e=>e&&e.n).map(e=>({ n:String(e.n).slice(0,60), t:String(e.t||"3 × 8").slice(0,30),
      s:Math.max(1,Math.min(10,parseInt(e.s)||3)),
      alts:Array.isArray(e.alts)?e.alts.slice(0,8).map(a=>String(a).slice(0,60)):[] }))
  })).filter(w=>w.ex.length);
  return { id:"plan"+Date.now()+Math.floor(Math.random()*99), name:String(obj.name||"Imported plan").slice(0,40), workouts:wk };
}
let sharePlanRef=null;
function openShare(p){
  sharePlanRef=p;
  $("shareTitle").textContent="Share “"+p.name+"”";
  const list=$("shareList"); list.innerHTML="";
  p.workouts.forEach((w,i)=>{
    const l=document.createElement("label"); l.className="wkpick";
    l.innerHTML='<input type="checkbox" data-i="'+i+'" checked><span>'+esc(w.name)+(w.sub?' · <span class="wsub">'+esc(w.sub)+'</span>':'')+'</span>';
    l.querySelector("input").onchange=shareCompute;
    list.appendChild(l);
  });
  shareCompute();
  $("shareNative").style.display = navigator.share ? "" : "none";
  openSheet("SharePlan");
}
function shareCompute(){
  const p=sharePlanRef, ta=$("shareCode");
  const picks=[...document.querySelectorAll('#shareList input:checked')].map(c=>+c.dataset.i);
  if(!picks.length){ ta.value="— select at least one workout —"; ta._msg=""; return; }
  const sel=picks.map(i=>p.workouts[i]).map(w=>({name:w.name,sub:w.sub,rotate:w.rotate,ex:w.ex}));
  const all = sel.length===p.workouts.length;
  const obj = all ? { t:"plan", name:p.name, workouts:sel }
                  : { t:"workouts", name:p.name+" — "+sel.length+" workout"+(sel.length>1?"s":""), workouts:sel };
  const code=encodePayload(obj);
  ta.value=code;
  ta._msg='My Yalla '+(all?'plan':'workout'+(sel.length>1?'s':''))+' “'+obj.name+'”. Open Yalla → Plans → Import, then paste:\n\n'+code;
}
$("sharePlanClose").onclick=()=>closeSheet("SharePlan");
$("scrimSharePlan").onclick=()=>closeSheet("SharePlan");
if($("woClose")) $("woClose").onclick=()=>closeSheet("WO");
if($("scrimWO")) $("scrimWO").onclick=()=>closeSheet("WO");
$("shareCopy").onclick=()=>{
  const ta=$("shareCode"); ta.focus(); ta.select();
  const done=ok=>toast(ok?"Code copied":"Select the code and copy it");
  if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(ta.value).then(()=>done(true)).catch(()=>{ let ok=false; try{ok=document.execCommand("copy");}catch(e){} done(ok); }); }
  else { let ok=false; try{ok=document.execCommand("copy");}catch(e){} done(ok); }
};
$("shareNative").onclick=()=>{ if(navigator.share) navigator.share({title:"Yalla plan", text:$("shareCode")._msg}).catch(()=>{}); };

function openImport(prefill){ $("importText").value=prefill||""; openSheet("Import"); }
$("importClose").onclick=()=>closeSheet("Import");
$("scrimImport").onclick=()=>closeSheet("Import");
$("importPlan").onclick=()=>{ closeSheet("Plans"); openImport(""); };
$("importPlanBtn").onclick=async()=>{
  let obj; try{ obj=decodePayload($("importText").value); }catch(e){ obj=null; }
  if(!obj || (obj.t!=="plan" && obj.t!=="workouts")){ toast("That doesn’t look like a Yalla code"); return; }
  const np=sanitizePlan(obj);
  if(!np.workouts.length){ toast("No exercises found in that code"); return; }
  plans.push(np); settings.activePlanId=np.id; settings.planStartAt=Date.now(); settings.pointers[np.id]=0; freeMode=false;
  await sset("plans",plans); await sset("settings",settings);
  const ni=nextRotateIndex(np); curWk=ni>=0?ni:0;
  closeSheet("Import"); renderAll(); toast("Imported “"+np.name+"”");
};

// ================= muscle volume =================
const MGROUPS=["Chest","Lats","Upper Back","Lower Back","Front Delts","Side Delts","Rear Delts","Biceps","Triceps","Forearms","Quads","Adductors","Hamstrings","Glutes","Glute Med","Calves","Core","Neck"];
// NO_TARGET muscles show a wedge when trained but carry NO weekly-volume target: never flagged as
// under-trained or chased by the plan builder / growth signal. Neck (posture moves), plus the smaller
// detail groups — Lower Back (gets ample work from compounds), Forearms and Adductors (grip/inner-thigh
// accessories most people don't program directly). They're still visible on the radar and emphasizable
// in the builder; they're just not part of the "are you under-training this?" model.
const NO_TARGET=new Set(["Neck","Lower Back","Forearms","Adductors","Glute Med"]);
const MSHORT={Chest:"Chest",Back:"Back",Shoulders:"Delts",Biceps:"Biceps",Triceps:"Triceps",Quads:"Quads",Hamstrings:"Hams",Glutes:"Glute Max","Glute Med":"Glute Med",Calves:"Calves",Core:"Core","Front Delts":"F·Delt","Side Delts":"S·Delt","Rear Delts":"R·Delt",Neck:"Neck",Lats:"Lats","Upper Back":"U·Back","Lower Back":"L·Back",Forearms:"Forearm",Adductors:"Adduct"};
let musWindow=7, musMetric="sets", musSrc="log", musVolMode="total", musScale="abs";
let meWindow=7;   // Me-page hero gauge window: 7 (this week) or 30 (this month)
// Evidence-based weekly volume targets (fractional sets per muscle per week).
// Dose-response meta-regressions: benefits accrue across ~10+ hard sets/muscle/wk; ~4–6 is a rough
// lower bound (MEV) below which most trainees under-stimulate growth. One baseline for all groups —
// real per-muscle landmarks differ, but a single target keeps the read honest and legible.
const WEEKLY_SET_TARGET=10, WEEKLY_SET_MIN=6;
// Balance-radar-only per-muscle target factor: small muscles trained with many quick sets (calves, core,
// forearms) tolerate/expect more weekly volume, so a flat 10-set target makes them fill their spoke too
// easily and dominate the wheel. Scaling their target up balances the DISPLAY (the growth model's landmarks
// are untouched — see white paper). Calves were the worst offender.
const MUS_TGT_FACTOR={ Calves:1.5, Core:1.4, Forearms:1.4, "Side Delts":1.2, "Rear Delts":1.2, "Glute Med":1.2, Adductors:1.2 };
const musTarget=g=> WEEKLY_SET_TARGET*(MUS_TGT_FACTOR[g]||1);
// Maintenance volume (MV): muscle built by a program is held on very little — as little as ~1/3 of the
// building volume in older adults and ~1/9 in young trained adults (Bickel 2011); below that, size slowly
// declines over weeks of insufficient stimulus (Mujika 2000). We collect no age, so use one conservative
// floor of ~2 effective sets/wk; under it a previously-trained muscle reads as "under-stimulated / at risk".
const WEEKLY_SET_MAINT=2;
// ---- continuous dose–response backbone ----
// The integer landmarks above discretise a continuous relationship: weekly effective sets → hypertrophy
// stimulus, graded with diminishing returns (Schoenfeld 2017; Pelland 2026). We model the fraction of the
// attainable per-muscle growth stimulus at s effective sets/week as a saturating curve, calibrated so the
// practical target (~10 sets) captures ~80% of what is attainable:
//     σ(s) = 1 − exp(−s / τ),   τ = TARGET / ln 5 ≈ 6.21
// The landmarks are then read off this single curve rather than chosen independently:
//     σ(MV=2) ≈ 0.28,  σ(MEV=6) ≈ 0.62,  σ(TARGET=10) ≈ 0.80,  σ(MAV=20) ≈ 0.96,
// so MEV is the ~0.6 knee, TARGET the 0.8 point, and MAV the ~0.95 near-plateau. This grounds the
// thresholds in one meta-analytic function instead of leaving four free parameters.
const DOSE_TAU = WEEKLY_SET_TARGET / Math.log(5);
function doseStimulus(sets){ return sets>0 ? 1 - Math.exp(-sets/DOSE_TAU) : 0; }   // fraction 0..1 of attainable growth stimulus
// ---- effort / proximity-to-failure ----
// Only sets taken reasonably close to failure drive much growth: hypertrophy scales with proximity to
// failure and is roughly comparable across ~0–4 reps-in-reserve, dropping off with easier sets
// (Robinson/Pelland 2024 meta-regression; Refalo 2024 RCT). A logged set is credited by how hard it was:
//   0 Easy (>4 in reserve) → 0.5 of a set · 1 Hard (~1–3 RIR, the default) → 1 · 2 Max (0–1 RIR) → 1.
// "Max" gets no growth bonus over "Hard" (near-failure ≈ failure for size, and going to failure adds
// fatigue) but it still shows up in the load/overload trend via the extra reps it buys.
const EFFORT_FACTOR=[0.5, 1, 1];
const EFFORT_OPTS=[
  {lbl:"Easy", tip:"Left a lot in reserve (4+ reps). Counts as half a set toward growth."},
  {lbl:"Hard", tip:"Pushed close to failure (~1–3 reps in reserve). A full growth set."},
  {lbl:"Max",  tip:"Took it to failure (0–1 left). Full credit — no extra growth over Hard, just more fatigue."}
];
// effort factor for a logged history entry (defaults to Hard=1 for older logs with no effort field)
function effortOf(e){ const f=e&&e.ef!=null?e.ef:1; return EFFORT_FACTOR[f]!=null?EFFORT_FACTOR[f]:1; }
// span of the whole log in weeks (for converting "all time" totals to a weekly rate)
function histSpanWeeks(){
  let lo=Infinity, hi=0;
  Object.keys(hist).forEach(n=>(hist[n]||[]).forEach(e=>{ if(e.d<lo)lo=e.d; if(e.d>hi)hi=e.d; }));
  if(!isFinite(lo) || hi<=lo) return 1;
  return Math.max(1,(hi-lo)/(7*86400000));
}
// convert a totals-over-window map into sets/week
function weeklyEquiv(totals, windowDays){
  const wks = windowDays ? windowDays/7 : histSpanWeeks();
  const out={}; Object.keys(totals).forEach(g=> out[g]=totals[g]/wks); return out;
}
// summary cards → open their detail sheet on tap (ignored while editing the layout, so a drag doesn't open one)
const _editing=()=> $("meTiles")&&$("meTiles").classList.contains("editing");
$("meBalance").onclick=()=>{ if(_meSwiped){ _meSwiped=false; return; } if(_editing()) return; openMuscles(); };
if($("slCard")) $("slCard").onclick=()=>{ if(_editing()) return; openSheet("Strength"); };
if($("progPanel")) $("progPanel").onclick=()=>{ if(_editing()) return; openSheet("Vol"); };
if($("cardioCard")) $("cardioCard").onclick=()=>{ if(_editing()) return; if(cardioList().length) openCardioDetail(); else { showTab("workout"); setTrainMode("cardio"); } };
if($("strengthClose")) $("strengthClose").onclick=()=>closeSheet("Strength");
if($("scrimStrength")) $("scrimStrength").onclick=()=>closeSheet("Strength");
if($("volClose")) $("volClose").onclick=()=>closeSheet("Vol");
if($("scrimVol")) $("scrimVol").onclick=()=>closeSheet("Vol");
// hero window switch (Week / Month): tappable underline tabs + an iOS-style paged swipe of the gauge.
let _meSwiped=false, meCache={};
function meTrackTo(win, animate){ const tr=$("meRingTrack"); if(!tr) return;
  tr.style.transition = animate ? "transform .34s cubic-bezier(.25,.46,.45,.94)" : "none";
  tr.style.transform = "translateX("+(win===30 ? -50 : 0)+"%)"; }
// position the track + refresh the active window's stat/cta (canvases for both pages are pre-drawn by renderMeRadar)
function applyMeWindow(win, animate){
  meWindow=win;
  meTrackTo(win, animate);
  const st=$("meBalStat"), cta=$("meBalCta");
  if(st) st.classList.remove("under","good");
  if(!Object.keys(hist).length){ if(st) st.textContent="No sessions yet"; if(cta) cta.textContent="log a workout ›"; return; }
  const det=expandLegacyMtot(meCache[win]||{}), under=GAUGE_GROUPS.filter(g=>gaugeVal(det,g)<WEEKLY_SET_MIN).length;
  if(st){ st.textContent = under ? (under+" muscle"+(under>1?"s":"")+" under target") : "All muscles on target"; st.classList.add(under?"under":"good"); }
  if(cta) cta.textContent="detail ›";
}
// the gauge track follows the finger and snaps to the nearest page on release (pager ignores canvas touches)
(function(){ const ring=$("meRing"), tr=$("meRingTrack"); if(!ring||!tr) return;
  let x0=0, y0=0, w=1, startWin=7, active=false, drag=false;
  ring.addEventListener("touchstart", e=>{ if(e.touches.length!==1) return;
    x0=e.touches[0].clientX; y0=e.touches[0].clientY; w=ring.clientWidth||1; startWin=meWindow; active=true; drag=false;
    tr.style.transition="none"; }, {passive:true});
  ring.addEventListener("touchmove", e=>{ if(!active) return;
    const dx=e.touches[0].clientX-x0, dy=e.touches[0].clientY-y0;
    if(!drag){ if(Math.abs(dx)<7 && Math.abs(dy)<7) return;
      if(Math.abs(dx)<=Math.abs(dy)*1.2){ active=false; return; }     // vertical → let the page scroll
      drag=true; }
    e.preventDefault();
    let pct=(startWin===30 ? -50 : 0) + (dx/w)*50;                     // 50% of the track per page
    if(pct>0) pct*=0.35; else if(pct<-50) pct=-50+(pct+50)*0.35;       // rubber-band past the ends
    tr.style.transform="translateX("+pct+"%)"; }, {passive:false});
  const end=e=>{ if(!active) return; active=false; if(!drag) return; drag=false; _meSwiped=true;
    const dx=(e.changedTouches?e.changedTouches[0].clientX-x0:0);
    let win=startWin;
    if(dx<-w*0.25 && startWin===7) win=30; else if(dx>w*0.25 && startWin===30) win=7;
    applyMeWindow(win, true); };
  ring.addEventListener("touchend", end, {passive:true});
  ring.addEventListener("touchcancel", end, {passive:true});
})();
$("musClose").onclick=()=>closeSheet("Mus");
$("scrimMus").onclick=()=>closeSheet("Mus");
if($("cardioClose")) $("cardioClose").onclick=()=>closeSheet("Cardio");
if($("scrimCardio")) $("scrimCardio").onclick=()=>closeSheet("Cardio");
if($("ringsClose")) $("ringsClose").onclick=()=>closeSheet("Rings");
if($("scrimRings")) $("scrimRings").onclick=()=>closeSheet("Rings");
if($("travelClose")) $("travelClose").onclick=()=>closeSheet("Travel");
if($("scrimTravel")) $("scrimTravel").onclick=()=>closeSheet("Travel");
if($("sponClose")) $("sponClose").onclick=()=>closeSheet("Spon");
if($("scrimSpon")) $("scrimSpon").onclick=()=>closeSheet("Spon");
$("libClose").onclick=()=>closeSheet("Library");
$("scrimLibrary").onclick=()=>closeSheet("Library");
$("libSearch").oninput=function(){ libQuery=this.value; renderLibrary(); };
$("meLearn").onclick=()=>openLibrary();
// ---- per-plan "about" / coach notes ----
// consistent attributes line for any plan: days (+home) · duration · level
function planMeta(plan){
  if(!plan || !plan.workouts) return "";
  const main=plan.workouts.filter(w=>w.rotate!==false);
  const days=main.length||plan.workouts.length;
  const hasHome=plan.workouts.some(w=>w.rotate===false || /home/i.test(w.name||""));
  const mins=(main.length?main:plan.workouts).map(workoutMinutes).filter(x=>x>0);
  const t=mins.length ? "~"+(Math.round(mins.reduce((a,b)=>a+b,0)/mins.length/5)*5)+" min" : "";
  return [days+" day"+(days===1?"":"s")+(hasHome?" + home":""), t, plan.level||""].filter(Boolean).join(" · ");
}
function splitType(plan){
  const names=plan.workouts.map(w=>(w.name||"").toLowerCase()).join(" ");
  const n=plan.workouts.filter(w=>w.rotate!==false).length || plan.workouts.length;
  if(/full body/.test(names)) return {type:"Full Body", why:"Each session trains the whole body, so every muscle gets hit "+n+"× a week. High frequency from few, short sessions — efficient and beginner-friendly."};
  if(/push|pull|legs/.test(names)) return {type:"Push · Pull · Legs", why:"Movements grouped by pattern so you can pack high weekly volume across "+n+" days. Best when you can train often and recover well."};
  if(/upper|lower/.test(names)) return {type:"Upper / Lower", why:"Alternating upper and lower days hits each muscle ~2× a week — the frequency/volume sweet spot for most intermediate lifters."};
  return {type:"Focused split", why:"A "+n+"-day rotation built around its emphasis."};
}
function openAbout(plan){
  const obj=planObjective(plan), sc=planScores(plan), sp=splitType(plan), t=planVolume(plan).totals;
  const top=MGROUPS.slice().sort((a,b)=>(t[b]||0)-(t[a]||0)).filter(g=>(t[g]||0)>0).slice(0,3).map(g=>MSHORT[g]||g);
  const missing=["Chest","Lats","Upper Back","Quads","Hamstrings","Glutes"].filter(g=>(t[g]||0)<1);   // major movers with ~no direct work
  const balTxt = sc.balance>=4?"well-rounded coverage" : sc.balance>=3?"a deliberate lean toward its focus" : "a strong, narrow focus";
  const hypTxt = sc.hyp>=4?"a high growth stimulus" : sc.hyp>=3?"a solid growth stimulus" : "a lighter, technique-friendly stimulus";
  const look=[];
  look.push("<b>Progressive overload</b> — when you hit the top of a rep range on all sets, add a rep or a little load next time. Keep ~1–3 reps in reserve.");
  look.push("<b>Enough volume</b> — aim for ~10+ hard sets a week for any muscle you care about. Tap Muscle balance to see where you stand.");
  if(missing.length) look.push("<b>Mind the gaps</b> — this plan does little direct "+esc(listWords(missing.map(m=>MSHORT[m]||m)))+". Fine if that's the intent; add a move if it matters to you.");
  look.push("<b>Recover</b> — take an easier week roughly every 6 weeks; I'll nudge you when you're due.");
  look.push("<b>Form first</b> — control the lowering phase and use a full range; that's where most of the growth (and safety) lives.");
  let h='';
  h+='<p class="ovp">'+esc(planMeta(plan))+'</p>';   // the next .ed-label brings the 24px gap
  h+='<div class="ed-label">Focus</div><p class="ovp">Built for <b>'+esc(obj.label)+'</b>. Run it on a rolling cycle and let the same exercises progress over time.</p>';
  h+='<div class="ed-label">The split</div><p class="ovp"><b>'+esc(sp.type)+'</b> — '+esc(sp.why)+'</p>';
  h+='<div class="ed-label">What I weighted it for</div><p class="ovp">Hypertrophy <b>'+sc.hyp+'/5</b> and balance <b>'+sc.balance+'/5</b> — '+hypTxt+' with '+balTxt+'.</p>';
  h+='<div class="ed-label">Things to look at</div><ul class="ovtodo">'+look.map(x=>'<li>'+x+'</li>').join('')+'</ul>';
  h+=planOutlookHTML(plan);
  $("aboutTitle").textContent=plan.name;
  $("aboutBody").innerHTML=h;
  openSheet("About");
}
$("aboutClose").onclick=()=>closeSheet("About");
$("scrimAbout").onclick=()=>closeSheet("About");
document.querySelectorAll("#musSeg .utab").forEach(s=> s.onclick=()=>{ musWindow=+s.dataset.d; renderMuscles(); });
document.querySelectorAll("#musMetric .utab").forEach(s=> s.onclick=()=>{ musMetric=s.dataset.m; renderMuscles(); });
document.querySelectorAll("#musVolMode .utab").forEach(s=> s.onclick=()=>{ musVolMode=s.dataset.vm; renderMuscles(); });
document.querySelectorAll("#musScale .utab").forEach(s=> s.onclick=()=>{ musScale=s.dataset.sc; renderMuscles(); });
const MUS_TIP="This radar shows your logged weekly sets per muscle against the ~10-set growth target — a dent means that muscle is under-dosed. Each plan's own balance lives with the plan.";
function openMuscles(){ if(!plans.some(p=>p.id===musSrc)) musSrc="log"; renderMuscles(); openSheet("Mus"); coach("muscles",MUS_TIP); }
function fmtKg(v){ return v>=1000 ? round1(v/1000)+"t" : Math.round(v)+"kg"; }
// target: if given, a spoke reaching the outer ring means that muscle hit `target` sets/week
// (so the chart reads "am I training each muscle enough?"); if omitted, spokes scale to the largest
// muscle (the old "which did I train most?" view).
let musExpanded=new Set();   // which rolled-up wedges (Shoulders / Back) are split open on the balance radar
// Value to plot for a display spoke. Sub-groups sum into their parent for raw volume; but in TARGET mode the
// ring is a PER-MUSCLE goal, so a collapsed parent shows the mean of its target-bearing heads (not the sum) —
// otherwise "Shoulders" would always peg the rim. Expanded sub-spokes and plain groups read straight through.
function radarVal(det, g, target){
  if(SUBGROUPS[g] && !musExpanded.has(g)){
    const subs = target ? SUBGROUPS[g].filter(s=>!NO_TARGET.has(s)) : SUBGROUPS[g];
    if(!subs.length) return 0;
    const sum=subs.reduce((a,s)=>a+(det[s]||0),0);
    return target ? sum/subs.length : sum;
  }
  return det[g]||0;
}
function drawRadar(totals, canvasId, target, noLabels, relative, prog){
  prog = prog==null ? 1 : prog;
  const c=$(canvasId||"musRadar"); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  _figFns[canvasId||"musRadar"]=(p)=>drawRadar(totals, canvasId, target, noLabels, relative, p);
  const det=expandLegacyMtot(totals||{}), G=roseGroups(musExpanded), n=G.length;
  const cx=W/2, cy=H/2, R=W*(noLabels?0.42:0.33);
  const cs=getComputedStyle(document.documentElement);
  const accent=(cs.getPropertyValue("--accent")||"#0a84ff").trim();
  const ring=(cs.getPropertyValue("--l2")||"#888").trim();   // target rim stays neutral so no accent matches a muscle colour
  const lab=(cs.getPropertyValue("--l3")||"#888").trim();
  const val=g=>radarVal(det, g, target);
  const max=Math.max(1, ...G.map(val));
  // Absolute (target) mode: the rim is a fixed per-muscle weekly goal, so short wedges read as gaps.
  // Relative mode: spokes scale to your most-trained muscle so the BALANCE SHAPE stays full-size at any
  // time window (a month no longer collapses toward the centre); the target then shows as a dashed ring.
  const norm = (target && !relative) ? (g=>Math.min(1,val(g)/target)) : (g=>val(g)/max);
  // Auxiliary (NO_TARGET) muscles have no weekly goal, so against the target ring they'd read as
  // permanent gaps. Match the small roses: show an aux spoke/label only when it was actually trained.
  const showSpoke=g=> val(g)>0 || !NO_TARGET.has(g);
  const radii=G.map(g=> showSpoke(g) ? norm(g)*prog : 0);   // wedges grow out from the centre
  // the original Me-page look: two faint grid rings + translucent wedges with a light coloured edge (softer than a solid rose)
  ctx.strokeStyle="rgba(128,128,128,.20)"; ctx.lineWidth=1.5;
  [0.5,1].forEach(fr=>{ ctx.beginPath(); ctx.arc(cx,cy,R*fr,0,Math.PI*2); ctx.stroke(); });
  const half=Math.PI/n - 0.06;
  G.forEach((g,i)=>{ const rr=R*radii[i]; if(rr<=0.5) return;
    const a=(-90+i*360/n)*Math.PI/180, col=MCOLOR[g]||accent;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,rr,a-half,a+half); ctx.closePath();
    ctx.globalAlpha=.55; ctx.fillStyle=col; ctx.fill(); ctx.globalAlpha=1;
    ctx.lineWidth=2.5; ctx.strokeStyle=col; ctx.stroke(); });
  if(target && !relative){ ctx.strokeStyle=ring; ctx.globalAlpha=.5; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.stroke(); ctx.globalAlpha=1; }
  else if(target && relative){ const tr=R*Math.min(1,target/max);   // where the ~target/wk line falls on the relative scale
    ctx.strokeStyle=ring; ctx.globalAlpha=.5; ctx.lineWidth=2; ctx.setLineDash([7,7]);
    ctx.beginPath(); ctx.arc(cx,cy,tr,0,Math.PI*2); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha=1; }
  if(noLabels) return;
  ctx.fillStyle=lab; ctx.font=cfont(W,"label"); ctx.textBaseline="middle";
  const gap=W*0.058;
  G.forEach((g,i)=>{ if(!showSpoke(g)) return; const a=(-90+i*360/n)*Math.PI/180, x=cx+(R+gap)*Math.cos(a), y=cy+(R+gap)*Math.sin(a), co=Math.cos(a);
    ctx.textAlign = Math.abs(co)<0.3 ? "center" : (co>0?"left":"right");
    const isParent=SUBGROUPS[g] && !musExpanded.has(g);
    fitText(ctx, (MSHORT[g]||g)+(isParent?" ›":""), x, y); });
}
// tap a rolled-up wedge (Shoulders / Back) to split it into its heads — or any head to collapse it back
(function(){ const c=$("musRadar"); if(!c) return;
  c.style.cursor="pointer";
  c.addEventListener("click", e=>{
    const G=roseGroups(musExpanded), n=G.length, r=c.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width*c.width, py=(e.clientY-r.top)/r.height*c.height;
    const cx=c.width/2, cy=c.height/2, dist=Math.hypot(px-cx,py-cy);
    if(dist > c.width*0.33+96) return;                       // tap outside the wheel/labels — ignore
    const ang=Math.atan2(py-cy,px-cx)*180/Math.PI;
    let bestI=0,bestD=999; for(let i=0;i<n;i++){ const a=-90+i*360/n, d=Math.abs(((ang-a+540)%360)-180); if(d<bestD){bestD=d;bestI=i;} }
    const g=G[bestI], parent=SUBGROUPS[g]?g:AGG[g];
    if(!parent) return;                                      // a plain group with no detail — nothing to expand
    if(musExpanded.has(parent)) musExpanded.delete(parent); else musExpanded.add(parent);
    renderMuscles();
  });
})();
// dynamic intervention: when a muscle is over/under-trained, suggest adding or trimming an exercise in the current plan
const HIGH_SET_CAP=WEEKLY_SET_TARGET*2;   // ~20 sets/wk — beyond what a muscle usefully needs
function suggestRank(name){ const h=hScore(name).s, d=difficultyFor(name);
  if(settings.objective==="strength") return d*1.2+h;                 // compound-leaning
  if(settings.objective==="fatloss"||settings.objective==="fitness") return h-d*0.4;  // simpler/efficient
  return h;                                                            // muscle / default → growth rating
}
function suggestAdd(muscle){
  const key=buildKey(muscle), inPlan=new Set();
  activePlan().workouts.forEach(w=>(w.ex||[]).forEach(e=>inPlan.add(familyKey(e.n))));
  const lvl=activePlan().level, gate = lvl==="beginner"?"beginner":"advanced";
  return (BUILD_POOL[key]||[]).filter(x=> !blockingInjury(x) && suitsExp(x,gate) && !inPlan.has(familyKey(x)))
    .sort((a,b)=>suggestRank(b)-suggestRank(a)).slice(0,3);
}
function suggestRemove(muscle){
  const out=[]; activePlan().workouts.forEach((w,wi)=>{ if(w.rotate===false) return; (w.ex||[]).forEach((e,ei)=>{ if(muscleFor(e.n)[0]===muscle) out.push({n:e.n,wi,ei,h:hScore(e.n).s}); }); });
  return out.sort((a,b)=>a.h-b.h).slice(0,3);   // least valuable first
}
async function addMoveToPlan(muscle, name){
  const key=buildKey(muscle); let best=-1, bl=99;
  activePlan().workouts.forEach((w,i)=>{ if(w.rotate===false) return; if(dayDomain(w.name).indexOf(key)>=0 && w.ex.length<bl){ bl=w.ex.length; best=i; } });
  if(best<0) best=0;
  const wk=activePlan().workouts[best]; wk.ex.push({n:name, t:"3 × 8–12", s:3});
  await sset("plans",plans); renderSeg(); renderWorkout(); renderDash(); renderMuscles(); toast("Added "+name+" to "+wk.name);
}
async function removeMoveFromPlan(wi,ei){
  const wk=activePlan().workouts[wi]; if(!wk||!wk.ex[ei]) return; const nm=wk.ex[ei].n;
  wk.ex.splice(ei,1); regroupSupersets(wk,"accessory");
  await sset("plans",plans); renderSeg(); renderWorkout(); renderDash(); renderMuscles(); toast("Removed "+nm);
}
function renderMuscleSuggestions(view){
  const box=$("musSuggest"); if(!box) return; if(!view){ box.innerHTML=""; return; }
  const scope=planScopeMuscles(activePlan()); let under=null, over=null;
  MGROUPS.forEach(g=>{ const v=view[g]||0;
    if(scope.indexOf(g)>=0 && v<WEEKLY_SET_MIN && (!under||v<under.v)) under={g,v};
    if(v>HIGH_SET_CAP && (!over||v>over.v)) over={g,v}; });
  let h="";
  if(under){ const opts=suggestAdd(under.g);
    if(opts.length) h+='<div class="ed-label">Coach suggestion</div><div class="group sgcard"><div class="pad"><p class="ovp"><b>'+esc(under.g)+'</b> is light (~'+round1(under.v)+' sets/wk). Add one to your plan — picked for your goal:</p><div class="sgopts">'+opts.map(o=>'<button class="sgbtn" data-add="'+esc(o)+'" data-mus="'+esc(under.g)+'">+ '+esc(o)+'</button>').join('')+'</div></div></div>'; }
  if(over){ const opts=suggestRemove(over.g);
    if(opts.length) h+='<div class="ed-label">Coach suggestion</div><div class="group sgcard"><div class="pad"><p class="ovp"><b>'+esc(over.g)+'</b> is high (~'+round1(over.v)+' sets/wk) — more than it needs. Trim one:</p><div class="sgopts">'+opts.map(o=>'<button class="sgbtn rm" data-rm="'+o.wi+','+o.ei+'">− '+esc(o.n)+'</button>').join('')+'</div></div></div>'; }
  box.innerHTML=h;
  box.querySelectorAll(".sgbtn[data-add]").forEach(b=> b.onclick=()=>addMoveToPlan(b.dataset.mus, b.dataset.add));
  box.querySelectorAll(".sgbtn[data-rm]").forEach(b=> b.onclick=()=>{ const p=b.dataset.rm.split(",").map(Number); removeMoveFromPlan(p[0],p[1]); });
}
// Per-muscle SUCCESS gauge for the Me dashboard. Every major target-bearing group gets an equal spoke
// whose fill = its % of the ~10-set/wk growth target (rim = target → reaching the rim = enough volume to
// grow). Unlike the rose, all groups always show as even slots, so there's no lopsided gap and you can
// read "relative success by muscle group" at a glance. The conic ring around it is the overall objective.
const GAUGE_GROUPS=["Chest","Back","Shoulders","Biceps","Triceps","Quads","Hamstrings","Glutes","Calves","Core"];
// collapse delt heads / back regions into the parent (mean of its target-bearing heads), independent of the
// sheet's expand state, so the hero is always the clean 10-spoke view. `wk` is a per-week sets map.
const GAUGE_HEADS={ Shoulders:["Front Delts","Side Delts","Rear Delts"], Back:["Lats","Upper Back"] };
function gaugeVal(det, g){ const h=GAUGE_HEADS[g]; return h ? h.reduce((a,m)=>a+(det[m]||0),0)/h.length : (det[g]||0); }
function drawSuccessGauge(canvasId, wk){
  const c=$(canvasId); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const det=expandLegacyMtot(wk||{});
  const lab=(getComputedStyle(document.documentElement).getPropertyValue("--l3")||"#888").trim();
  const cx=W/2, cy=H/2, R=W*0.30, n=GAUGE_GROUPS.length, half=Math.PI/n-0.06;
  const val=g=>gaugeVal(det, g);
  // light mode washes out translucent fills on the pale card, so push alpha up there for legibility
  const dark=document.documentElement.classList.contains("dark");
  const slotA=dark?.12:.18, fillHi=dark?.66:.85, fillLo=dark?.46:.66;
  ctx.strokeStyle="rgba(128,128,128,.25)"; ctx.lineWidth=1.5; ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.stroke();  // target rim
  GAUGE_GROUPS.forEach((g,i)=>{
    const a=(-90+i*360/n)*Math.PI/180, col=MCOLOR[g]||lab, succ=Math.min(1,(val(g)||0)/musTarget(g));
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,R,a-half,a+half); ctx.closePath();        // empty slot → the target
    ctx.fillStyle=col; ctx.globalAlpha=slotA; ctx.fill(); ctx.globalAlpha=1;
    const rr=R*succ;
    if(rr>1){ ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,rr,a-half,a+half); ctx.closePath();   // success fill
      ctx.fillStyle=col; ctx.globalAlpha=succ>=1?fillHi:fillLo; ctx.fill(); ctx.globalAlpha=1; ctx.lineWidth=2.5; ctx.strokeStyle=col; ctx.stroke(); }
    const x=cx+(R+40)*Math.cos(a), y=cy+(R+40)*Math.sin(a), co=Math.cos(a);
    ctx.font=cfont(W,"label"); ctx.textBaseline="middle";
    ctx.textAlign = Math.abs(co)<0.3 ? "center" : (co>0?"left":"right");
    ctx.fillStyle=col; ctx.fillText(MSHORT[g]||g, x, y);
  });
}
// How much of the objective the user has met over `days` (0–100). Blends signals weighted by the stated
// objective: lifting-volume adherence on the muscles the plan targets, training consistency (days trained
// vs the plan's expected sessions for the window), and — for fat-loss / fitness — cardio minutes vs goal.
// All signals are normalised per-week so the % is comparable across the Week and Month views; components
// with no data (e.g. no cardio goal) drop out and the remaining weights renormalise.
function meObjectiveScore(days){
  days=days||7; const wkns=days/7;   // weeks in the window
  const wk=weeklyEquiv(muscleVolume(days,"sets").totals, days);
  const scope=planScopeMuscles(activePlan()).filter(g=>!NO_TARGET.has(g));
  const prio=scope.length?scope:MGROUPS.filter(g=>!NO_TARGET.has(g));
  const vol=prio.reduce((a,g)=>a+Math.min(1,(wk[g]||0)/WEEKLY_SET_TARGET),0)/(prio.length||1);
  const p=activePlan(), planDays=p?Math.max(1,(p.workouts||[]).filter(w=>w.rotate!==false).length):3;
  const cons=Math.min(1, trainingDays(days)/(planDays*wkns));
  const ct=cardioTargetMins(), cardio=ct?Math.min(1, (cardioMinsWeek(days)/wkns)/ct):0;
  const W={ muscle:{vol:.70,cons:.30,cardio:0}, strength:{vol:.65,cons:.35,cardio:0},
            fatloss:{vol:.40,cons:.25,cardio:.35}, fitness:{vol:.45,cons:.25,cardio:.30} }[settings.objective]
          || {vol:.65,cons:.35,cardio:0};
  const comps=[{w:W.vol,v:vol},{w:W.cons,v:cons}];
  if(W.cardio>0 && ct>0) comps.push({w:W.cardio,v:cardio});
  const tw=comps.reduce((a,c)=>a+c.w,0)||1;
  const pct=Math.round(100*comps.reduce((a,c)=>a+c.w*c.v,0)/tw);
  return { pct:Math.max(0,Math.min(100,pct)), objLabel: OBJ_LABELS[settings.objective]||"Training" };
}
// Balance SUMMARY card: a small week gauge + a one-line verdict. Full per-muscle detail is the Mus sheet (tap).
function renderMeRadar(){
  const mini=$("meMini"); if(!mini) return;
  meCache = { 7: weeklyEquiv(muscleVolume(7, "sets", "total").totals, 7),
              30: weeklyEquiv(muscleVolume(30, "sets", "total").totals, 30) };
  drawRadar(meCache[7], "meMini", WEEKLY_SET_TARGET, true, false);   // the balance shape at a glance (no labels); full radar is the sheet
  const head=$("meBalHead"), st=$("meBalStat");
  if(!Object.keys(hist).length){ if(head) head.textContent="—"; if(st) st.textContent="No sessions yet — log a workout"; return; }
  const det=expandLegacyMtot(meCache[7]||{}), underG=GAUGE_GROUPS.filter(g=>gaugeVal(det,g)<WEEKLY_SET_MIN);
  const tot=GAUGE_GROUPS.length, under=underG.length, onT=tot-under;
  const rc=onT/tot>=.7?"up":"";   // green only when most muscles are on target; otherwise plain ink, never alarm-red on the dashboard
  if(head){ head.innerHTML = '<span class="'+rc+'">'+onT+'/'+tot+'</span> <span class="u">on target</span>'; }
  if(st) st.textContent = under   // one line: the tile caption doesn't wrap
    ? ("Next: "+underG.slice(0,2).map(g=>MSHORT[g]||g).join(", ")+(under>2?" +"+(under-2):""))
    : "Every muscle on target 💪";
}
// Training-volume SUMMARY card: headline PR/trend + a mini sparkline of the default metric. Detail = Vol sheet.
function renderTrainingVolume(){
  const stat=$("progStat"), cap=$("progCap2"); if(!stat) return;
  const mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
  const vol=progWeeklyData("volume"), e=vol.slice(0,-3).filter(v=>v>0), r=vol.slice(-3).filter(v=>v>0);
  const dv = mean(e)>0 ? Math.round((mean(r)-mean(e))/mean(e)*100) : null;
  // The headline reads the same metric the sparkline draws. It used to count PRs over a volume line, and
  // PRs now live in the Strength sheet where they belong.
  const dir = dv==null ? "" : dv>=1 ? "up" : dv<=-1 ? "down" : "";
  stat.innerHTML = (dv!=null ? '<span class="'+dir+'">'+(dv>=0?"+":"")+dv+'%</span>' : '<span>—</span>')
    + ' <span class="u">volume · 10 wks</span>';
  const sr=mean(progWeeklyData("sets").slice(-3).filter(v=>v>0));
  cap.textContent = sr>0 ? ("~"+round1(sr)+" hard sets/wk lately") : "log a few sessions to see your load";
  drawSummarySpark("progMini", vol.filter(v=>v>0));
}
// small filled sparkline for a summary card
function drawSummarySpark(id, series, opts){
  const c=$(id); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  if(!series || series.length<2){ return; }
  // opts.ref: a target drawn dashed, with the scale running from zero up to it (cardio minutes); otherwise fit the series
  const ref=(opts&&opts.ref)||0, ac=(opts&&opts.color)||accentHex(), mn=ref?0:Math.min(...series), mx=ref?Math.max(ref,...series):Math.max(...series), sp=(mx-mn)||1, n=series.length, pad=6;
  const x=i=> pad+(i/(n-1))*(W-pad*2), y=v=> (H-pad)-((v-mn)/sp)*(H-pad*2);
  if(ref){ ctx.strokeStyle=hexAlpha(ac,.45); ctx.setLineDash([5,5]); ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(pad,y(ref)); ctx.lineTo(W-pad,y(ref)); ctx.stroke(); ctx.setLineDash([]); }
  const grad=ctx.createLinearGradient(0,0,0,H); grad.addColorStop(0,hexAlpha(ac,.28)); grad.addColorStop(1,hexAlpha(ac,0));
  ctx.beginPath(); series.forEach((v,i)=>{ const px=x(i),py=y(v); i?ctx.lineTo(px,py):ctx.moveTo(px,py); });
  ctx.lineTo(x(n-1),H-pad); ctx.lineTo(x(0),H-pad); ctx.closePath(); ctx.fillStyle=grad; ctx.fill();
  ctx.strokeStyle=ac; ctx.lineWidth=2.5; ctx.lineJoin="round"; ctx.beginPath();
  series.forEach((v,i)=>{ const px=x(i),py=y(v); i?ctx.lineTo(px,py):ctx.moveTo(px,py); }); ctx.stroke();
  ctx.beginPath(); ctx.arc(x(n-1),y(series[n-1]),3.5,0,7); ctx.fillStyle=ac; ctx.fill();
}
// ---- Home spotlight: pick the single most notable thing right now and show it with a real graph ----
function spotColor(kind){ const dk=document.documentElement.classList.contains("dark"); return kind==="win" ? (dk?"#51cf66":"#2b8a3e") : kind==="watch" ? (dk?"#ffa94d":"#e8890c") : accentHex(); }
// weekly bars, latest highlighted, dashed mean baseline
function drawSpotChart(id, series, kind){
  const c=$(id); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height;
  series=(series||[]).filter(v=>v!=null); if(series.length<2) return;
  const col=spotColor(kind), n=series.length, mn=Math.min(...series,0), mx=Math.max(...series), sp=(mx-mn)||1;
  const padX=10, top=12, bot=14, gap=(W-padX*2)/n, bw=Math.min(36, gap*0.6), baseY=H-bot;
  const y=v=> baseY-((v-mn)/sp)*(H-top-bot);
  const mean=series.reduce((a,b)=>a+b,0)/n;
  const reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  const start=Date.now(), dur=reduce?0:760;
  (function frame(){
    const p=dur?Math.min(1,(Date.now()-start)/dur):1, e=1-Math.pow(1-p,4);   // bars grow in from the baseline
    ctx.clearRect(0,0,W,H);
    ctx.globalAlpha=e; ctx.strokeStyle=hexAlpha(col,.30); ctx.lineWidth=1.5; ctx.setLineDash([5,6]);
    ctx.beginPath(); ctx.moveTo(padX,y(mean)); ctx.lineTo(W-padX,y(mean)); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha=1;
    series.forEach((v,i)=>{ const x=padX+gap*i+(gap-bw)/2, full=y(v), yy=baseY-(baseY-full)*e;
      ctx.fillStyle = i===n-1 ? col : hexAlpha(col,.34); ctx.fillRect(x, yy, bw, Math.max(2,baseY-yy)); });
    if(p<1) requestAnimationFrame(frame);
  })();
}
// horizontal bars of the under-dosed muscles vs the weekly target (dashed line = target)
function drawSpotBalance(id, unders){
  const c=$(id); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const wk=weeklyEquiv(muscleVolume(7,"sets","total").totals,7), rows=(unders||[]).slice(0,4);
  if(!rows.length) return;
  const lab=(getComputedStyle(document.documentElement).getPropertyValue("--l3")||"#888").trim();
  const x0=170, bw=W-x0-26, rh=H/rows.length;
  ctx.textBaseline="middle"; ctx.font=cfont(W,"label");
  rows.forEach((g,i)=>{ const y=i*rh+rh/2, v=wk[g]||0, frac=Math.max(0,Math.min(1,v/WEEKLY_SET_TARGET)), col=MCOLOR[g]||accentHex();
    ctx.fillStyle=lab; ctx.textAlign="right"; ctx.fillText(MSHORT[g]||g, x0-14, y);
    ctx.fillStyle=hexAlpha(col,.16); ctx.fillRect(x0, y-10, bw, 20);
    ctx.fillStyle=col; ctx.fillRect(x0, y-10, Math.max(3,bw*frac), 20); });
  const l2=(getComputedStyle(document.documentElement).getPropertyValue("--l2")||"#888").trim();
  ctx.strokeStyle=hexAlpha(l2,.5); ctx.lineWidth=2; ctx.setLineDash([4,4]);   // target line in --l2: an accent here could match a muscle colour
  ctx.beginPath(); ctx.moveTo(x0+bw, 6); ctx.lineTo(x0+bw, H-6); ctx.stroke(); ctx.setLineDash([]);
}
// the week's activity rings (session-credit, hard sets, muscles hit, optional cardio) vs growth-scaled targets
function weekRings(){
  if(!(Object.keys(hist).length || cardioList().length)) return null;
  const cut=Date.now()-7*86400000; let setsWk=0; const musWk=new Set();
  Object.keys(hist).forEach(n=>{ const gs=muscleFor(n); (hist[n]||[]).forEach(e=>{ if(e.d>=cut){ setsWk+=(e.n!=null?e.n:1)*effortOf(e); gs.forEach(g=>{ if(MGROUPS.indexOf(g)>=0) musWk.add(g); }); } }); });
  const _gt=growthRingTargets();
  const rings=[ {label:"Sessions", val:sessionCredit(7), target:_gt.sess, color:"#ff6b3d"},
                {label:"Sets", val:setsWk, target:_gt.sets, color:"#4dabf7"},
                {label:"Muscles", val:musWk.size, target:12, color:"#51cf66"} ];
  const cTgt=cardioTargetMins(); if(cTgt>0) rings.push({label:"Cardio", val:cardioDoseWeek(7), target:cTgt, color:"#9775fa", unit:"min"});
  return rings;   // (the closed-rings feed post is sent from the log handlers via consistPost, never from render)
}
// the week's rings drawn in a row (fits the wide spotlight canvas): progress arc + value + label under each
function drawSpotRings(id, rings){
  const c=$(id); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const n=rings.length, slot=W/n, R=Math.min(slot*0.30, H*0.34), thick=Math.max(6,R*0.28), cy=H*0.42;
  const l3=(getComputedStyle(document.documentElement).getPropertyValue('--l3')||'#888').trim();
  rings.forEach((rg,i)=>{ const cx=slot*(i+0.5), pct=Math.max(0,Math.min(1, rg.target?rg.val/rg.target:0));
    ctx.lineWidth=thick; ctx.lineCap="round";
    ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.strokeStyle=hexAlpha(rg.color,.18); ctx.stroke();
    if(pct>0){ const a0=-Math.PI/2; ctx.beginPath(); ctx.arc(cx,cy,R,a0,a0+Math.PI*2*pct); ctx.strokeStyle=rg.color; ctx.stroke(); }
    ctx.fillStyle=rg.color; ctx.font=cfont(W,"value"); ctx.textAlign="center"; ctx.textBaseline="middle";
    ctx.fillText((rg.label==="Sessions"?round1(rg.val):Math.round(rg.val))+"", cx, cy);
    ctx.fillStyle=l3; ctx.font=cfont(W,"tick"); ctx.textBaseline="alphabetic"; ctx.fillText(rg.label, cx, H-8);
  });
}
let _spotSeed=Math.random();   // re-rolled each time the Overview opens, so the spotlight varies per app-open
function spotlight(){
  const c=[];
  const prs=(typeof progWeeklyData==="function")?progWeeklyData("prs"):[];
  const recPR=prs.slice(-2).reduce((a,b)=>a+(b||0),0);
  if(recPR>=1) c.push({ kind:"win", score:2+recPR*1.2, ico:"🏅", tag:"Milestone",
    title:recPR+" new PR"+(recPR>1?"s":"")+" in the last two weeks",
    detail:"Records are falling — your training is landing. Hold the intensity here and keep logging.", series:prs, act:"strength" });
  const si=strengthIndex();
  if(si && si.series.length>=2){ const p=si.series[si.series.length-1].idx-100, ser=si.series.map(s=>Math.round(s.idx));
    if(p>=4) c.push({ kind:"win", score:1.6+p/4, ico:"📈", tag:"On the up",
      title:"Strength up "+p.toFixed(1)+"% overall",
      detail:"Your lifts are trending up across "+si.lifts+" exercise"+(si.lifts>1?"s":"")+". Momentum like this is the moment to add a little load.", series:ser, act:"strength" });
    else if(p<=-3) c.push({ kind:"watch", score:2.2+Math.abs(p)/3, ico:"👀", tag:"Worth a look",
      title:"Strength slipped "+p.toFixed(1)+"%",
      detail:"A few lifts are drifting down. Check sleep and recovery, and make sure the loads didn't creep too high.", series:ser, act:"strength" });
  }
  const vol=(typeof progWeeklyData==="function")?progWeeklyData("volume").filter(v=>v>0):[];
  if(vol.length>=6){ const pr=vol.slice(-6,-3), rc=vol.slice(-3);
    const pm=pr.reduce((a,b)=>a+b,0)/pr.length, rm=rc.reduce((a,b)=>a+b,0)/rc.length, d=pm>0?(rm-pm)/pm*100:0;
    if(d<=-20) c.push({ kind:"watch", score:2+Math.abs(d)/12, ico:"📉", tag:"Slipping",
      title:"Training volume down "+Math.round(-d)+"%",
      detail:"You're doing less work than a few weeks ago. A couple more sets, or one more session, brings it back up.", series:vol, act:"vol" });
    else if(d>=25) c.push({ kind:"win", score:1.4+d/25, ico:"🔥", tag:"Building",
      title:"Training volume up "+Math.round(d)+"%",
      detail:"More quality work than a few weeks back — a strong base for growth.", series:vol, act:"vol" });
  }
  const under=(typeof ovUnderMuscles==="function")?ovUnderMuscles():[];
  if(under.length){ const names=under.slice(0,3).map(g=>MSHORT[g]||g);
    c.push({ kind:"watch", score:1.8+under.length*0.3, ico:"🎯", tag:"Easy win",
      title:names.join(", ")+(under.length>3?" +"+(under.length-3):"")+" under target",
      detail:under.length+" muscle group"+(under.length>1?"s are":" is")+" below the weekly volume to grow. A couple of extra sets closes the gap.", unders:under, act:"balance" });
  }
  const rings=weekRings();
  if(rings){ const closed=rings.filter(r=>r.val>=r.target).length, all=closed===rings.length, dow=(new Date().getDay()+6)%7;   // Mon=0 … Sun=6
    if(all) c.push({ kind:"win", score:2.4, ico:"✅", tag:"Week done",
      title:"You closed every ring this week", detail:"Sessions, sets and muscles all hit their target — a complete week. Enjoy it.", rings, act:"rings" });
    else c.push({ kind:"watch", score:1.3+dow*0.18, ico:"◎", tag:"This week",
      title:closed+" of "+rings.length+" rings closed", detail:"Rings fill as you go. Tap to see where you are.", rings, act:"rings" });
  }
  // always-on trend graphs: keep a chart on the home even on a calm week, and give it variety to rotate through
  if(si && si.series.length>=2){ const ser=si.series.map(s=>Math.round(s.idx)), p=si.series[si.series.length-1].idx-100;
    c.push({ kind:"info", score:1.35, ico:"💪", tag:"Strength", title:"Strength over "+si.weeks+" weeks",
      detail:"Each lift indexed to its own start, then averaged"+(Math.abs(p)>=1?" — "+(p>=0?"+":"")+p.toFixed(1)+"% so far.":"."), series:ser, act:"strength" }); }
  if(vol.length>=3){ c.push({ kind:"info", score:1.25, ico:"📊", tag:"Volume", title:"Training volume",
      detail:"Effort-weighted work each week across the last "+vol.length+" weeks.", series:vol, act:"vol" }); }
  const sess=(typeof progWeeklyData==="function")?progWeeklyData("sessions"):[];
  if(sess.filter(v=>v>0).length>=3){ c.push({ kind:"info", score:1.15, ico:"🗓️", tag:"Consistency", title:"Sessions per week",
      detail:"How often you've trained across the last "+sess.length+" weeks.", series:sess, act:"vol" }); }
  if(!c.length) return null;
  c.sort((a,b)=>b.score-a.score);
  const band=c.filter(x=>x.score>=c[0].score-1.2);      // the near-top band…
  return band[Math.floor((_spotSeed||0)*band.length)] || band[0];   // …rotated per app-open, so the home feels fresh each time
}
// 16-week projected gain per muscle, keyed by group. This used to be its own bar chart in the Strength
// sheet, which ranked muscles by dose — the same ranking the balance radar already shows. It now rides on
// the per-muscle rows instead, putting each muscle's dose next to what that dose projects to.
// growthForecast() is a 500-run Monte Carlo and the window/metric toggles redraw these rows repeatedly,
// so it's memoised for the render pass and cleared by renderDash.
let _musGainCache=null;
function musProjectedGain(){
  if(_musGainCache) return _musGainCache;
  const f=(typeof growthForecast==="function")?growthForecast():null, gain={};
  if(f && f.perMuscle && f.perMuscle.pace) f.perMuscle.pace.forEach(m=>{ gain[m.g]=m.gain; });
  _musGainCache=gain; return gain;
}
function renderMuscles(){
  const isLog=true;   // the balance sheet always reflects YOUR logged training; each plan's balance lives with that plan
  let totals, byEx;
  document.querySelectorAll("#musSeg .utab").forEach(s=> s.setAttribute("aria-pressed", s.classList.toggle("active", +s.dataset.d===musWindow)));
  document.querySelectorAll("#musMetric .utab").forEach(s=> s.setAttribute("aria-pressed", s.classList.toggle("active", s.dataset.m===musMetric)));
  document.querySelectorAll("#musVolMode .utab").forEach(s=> s.setAttribute("aria-pressed", s.classList.toggle("active", s.dataset.vm===musVolMode)));
  ({totals, byEx}=muscleVolume(musWindow||null, musMetric, musVolMode));
  const useTarget = isLog && musMetric==="sets";   // sets/week vs a weekly-volume target
  const useKg = isLog && musMetric==="vol";
  const relative = useTarget && musScale==="rel";  // scale to top muscle instead of the fixed target ring
  $("musScale").style.display = useTarget ? "" : "none";
  document.querySelectorAll("#musScale .utab").forEach(s=> s.setAttribute("aria-pressed", s.classList.toggle("active", s.dataset.sc===musScale)));
  if(isLog) $("musIntro").textContent = useTarget
    ? (relative
        ? "Your training shape over this window — each muscle scaled to your most-trained, so balance stays readable at any range (it won't shrink on longer windows). The dashed ring marks the ~"+WEEKLY_SET_TARGET+"-set weekly target."
        : "Sets per muscle per week vs a ~"+WEEKLY_SET_TARGET+"-set target (the outer ring). Reaching the ring means that muscle is getting enough weekly volume to grow; a dent means it's under-dosed.")
    : "Total load moved per muscle in this window — bigger means more volume, scaled to your top group.";
  else $("musIntro").textContent="Projected balance if you follow “"+(plans.find(p=>p.id===musSrc)||activePlan()).name+"” — planned sets across one full cycle.";
  const showVolMode = useKg;
  $("musVolMode").style.display = showVolMode ? "" : "none";
  $("musVolNote").style.display = showVolMode ? "" : "none";
  const view = useTarget ? weeklyEquiv(totals, musWindow) : totals;
  // lead headline: a plain verdict so the sheet opens with the same read as the summary card
  const lead=$("musLeadH");
  if(lead){
    if(!isLog){ lead.className="lh"; lead.textContent=(plans.find(p=>p.id===musSrc)||activePlan()).name; }
    else if(!Object.keys(hist).length){ lead.className="lh"; lead.textContent="No sessions yet"; }
    else { const det=expandLegacyMtot(view), under=GAUGE_GROUPS.filter(g=>gaugeVal(det,g)<WEEKLY_SET_MIN).length, tot=GAUGE_GROUPS.length;
      lead.className="lh "+(under?"":"good");
      lead.textContent = under ? ("You're hitting "+(tot-under)+" of "+tot+" muscle groups this week.") : ("You're hitting all "+tot+" major muscle groups this week 💪"); }
  }
  drawRadar(view, "musRadar", useTarget ? WEEKLY_SET_TARGET : null, false, relative);
  const groups=Object.keys(view).filter(g=>view[g]>0).sort((a,b)=>view[b]-view[a]);
  const max=Math.max(1, ...groups.map(g=>view[g]));
  const bars=$("musBars");
  if(!groups.length){ bars.innerHTML='<p class="freehint">'+(isLog?'No sets logged in this window yet — finish a workout to see your split.':'This plan has no exercises yet.')+'</p>'; }
  else {
    bars.innerHTML="";
    // the projection only makes sense against a weekly-sets dose, so it rides along in that view only
    const gain = (isLog && useTarget) ? musProjectedGain() : {};
    groups.forEach(g=>{
      const v=view[g];
      const pct = useTarget ? Math.min(100, Math.round(v/WEEKLY_SET_TARGET*100)) : Math.round(v/max*100);
      const valTxt = useTarget ? (round1(v)+"/wk") : (useKg ? fmtKg(v) : round1(v));
      const gp = gain[g];
      const projTxt = gp!=null ? '<small class="mproj">'+(gp>=0?"+":"")+gp.toFixed(1)+'%/16w</small>' : "";
      const row=document.createElement("div"); row.className="mrow"+(useTarget && v<WEEKLY_SET_MIN?" under":"");
      row.innerHTML='<div class="mlab">'+g+'</div>'
        +'<div class="mbarwrap"><div class="mbar" style="width:'+pct+'%;background:'+(MCOLOR[g]||"#888")+'"></div></div>'
        +'<div class="mval">'+valTxt+projTxt+'</div>';
      bars.appendChild(row);
    });
  }
  renderMuscleSuggestions(useTarget ? view : null);
  const ex=$("musByEx"), names=Object.keys(byEx).sort((a,b)=>byEx[b]-byEx[a]);
  ex.innerHTML = names.length ? "" : '<p class="freehint">—</p>';
  names.forEach(n=>{
    const g=muscleFor(n)[0];
    const val = useKg ? fmtKg(byEx[n]) : (byEx[n]+" set"+(byEx[n]===1?"":"s"));
    const row=document.createElement("div"); row.className="crow";
    row.innerHTML='<span><span class="mdot" style="background:'+(MCOLOR[g]||"#888")+'"></span>'+esc(n)+'</span><span>'+val+'</span>';
    ex.appendChild(row);
  });
  // methodology + sources for this view
  $("musMethod").innerHTML = "Each working set credits its <b>primary</b> muscle in full and each <b>secondary</b> muscle at half (the 0.5 “fractional” method that best predicts growth). "
    + (useTarget
        ? "Spokes and bars show <b>sets per muscle per week</b> against a ~"+WEEKLY_SET_TARGET+"-set target; the window is a hard cut-off (no decay), since volume is usually judged weekly."
        : (useKg ? "Bars show <b>total load</b> (weight × reps, bodyweight-aware), scaled to your biggest group."
                 : "Switch to <b>Sets</b> to compare against weekly volume targets."));
  $("musMethod").innerHTML += " The rose rolls the three delt heads into <b>Shoulders</b> and the back regions into <b>Back</b> — tap either wedge to split it into its individual muscles (the bars below always list them in full).";
  if(isLog && useTarget) $("musMethod").innerHTML += " Each row's second figure is that muscle's <b>projected 16-week gain</b> at your current pace — the same Monte Carlo behind the size projection in Strength, read per muscle so the dose sits next to what it's projected to buy. An estimate with real uncertainty, not a promise.";
  if(isLog) $("musMethod").innerHTML += " The <b>growth signal</b> above reads each muscle's recent weekly sets against a growth dose (~"+WEEKLY_SET_MIN+"–"+WEEKLY_SET_TARGET+") and a maintenance floor (~"+WEEKLY_SET_MAINT+"), then checks whether its weekly volume is trending up, flat or down — growth needs both an adequate dose and progressive overload; below maintenance, muscle is slowly lost. It estimates the training stimulus, not measured size.";
  $("musMethod").innerHTML += " " + WP_LINK;
  let keys = useTarget ? ["sch17","drr","rpvol","vigotsky","mps"] : ["sch17","drr","vigotsky"];
  if(isLog) keys = keys.concat(["sch10","plotkin","bickel","mujika"]);   // growth-signal evidence
  $("musSrcList").innerHTML = keys.map(srcLi).join('');
}

// ================= appearance (auto / light / dark) =================
function systemDark(){ try{ return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches; }catch(e){ return false; } }
function applyTheme(){
  const mode = settings.theme || "auto";
  const dark = mode==="dark" || (mode==="auto" && systemDark());
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.background = dark ? "#000000" : "#f2f2f7";
  try{ localStorage.setItem("yallaTheme", mode); }catch(e){}
  document.querySelectorAll("#appSeg .s").forEach(s=> s.classList.toggle("active", s.dataset.th===mode));
  applyAccent();
}
// accent picker. Orange is the default and sets no attribute; the <head> script applies the localStorage
// mirror before first paint. tile = the share tile's fade as [a, b, hold, mid] in either theme: the light --grad-fill
// (--grad-a, --grad-hold, --grad-mid) with Pink/Blue/Teal ending on --grad-read-b, which keeps the stat boxes' white
// text at 3:1 (their --grad-b is the lighter end).
const ACCENTS={
  orange:{ name:"Orange", tile:["#ee6010","#ff2f3d",0,.56] },
  pink:{ name:"Pink", tile:["#e0409a","#d0480f",.2,.7] },
  blue:{ name:"Blue", tile:["#2f6de0","#097a99",0,.5] },
  teal:{ name:"Teal", tile:["#0a8a96","#0a7f60",0,.5] },
  graphite:{ name:"Graphite", tile:["#5a5a5f","#3a4658",0,.5] }
};
const isAccent=id=>typeof id==="string" && Object.prototype.hasOwnProperty.call(ACCENTS, id);
function accentId(){ return isAccent(settings.accent) ? settings.accent : "orange"; }
function applyAccent(){
  const id=accentId(), de=document.documentElement;
  if(id==="orange") de.removeAttribute("data-accent"); else de.setAttribute("data-accent", id);
  try{ localStorage.setItem("yallaAccent", id); }catch(e){}
  document.querySelectorAll("#accSeg .accsw").forEach(b=>{ const on=b.dataset.acc===id;
    b.setAttribute("aria-checked", on?"true":"false"); b.tabIndex=on?0:-1; });
  const nm=$("accName"); if(nm) nm.textContent=ACCENTS[id].name;
}
// canvases bake in theme colours, so redraw Me + Overview (not renderAll: that would rebuild a workout in progress)
function repaintCharts(){ try{ renderDash(); renderOverview(); }catch(e){} }
document.querySelectorAll("#appSeg .s").forEach(s=>{
  s.onclick=async()=>{ settings.theme=s.dataset.th; await sset("settings",settings); applyTheme(); repaintCharts(); };
});
async function pickAccent(id){
  if(!isAccent(id) || id===accentId()) return;
  settings.accent=id; applyAccent(); repaintCharts(); haptic();
  await sset("settings",settings);
}
document.querySelectorAll("#accSeg .accsw").forEach(b=>{ b.onclick=()=>pickAccent(b.dataset.acc); });
{ const g=$("accSeg"); if(g) g.addEventListener("keydown", e=>{
  const keys=Object.keys(ACCENTS), step={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[e.key];
  if(!step) return; e.preventDefault();
  const id=keys[(keys.indexOf(accentId())+step+keys.length)%keys.length];
  pickAccent(id); const b=g.querySelector('[data-acc="'+id+'"]'); if(b) b.focus();
}); }
try{ matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ()=>{ if((settings.theme||"auto")==="auto"){ applyTheme(); repaintCharts(); } }); }catch(e){}

// ================= coach-tip cadence =================
function renderTipSeg(){
  const every = settings.tipEvery==null ? 3 : settings.tipEvery;
  document.querySelectorAll("#tipSeg .s").forEach(s=> s.classList.toggle("active", +s.dataset.te===every));
}
document.querySelectorAll("#tipSeg .s").forEach(s=>{
  s.onclick=async()=>{ settings.tipEvery=+s.dataset.te; await sset("settings",settings); renderTipSeg(); };
});
function renderTipModeSeg(){
  const mode = settings.tipMode || "all";
  document.querySelectorAll("#tipModeSeg .s").forEach(s=> s.classList.toggle("active", s.dataset.tm===mode));
}
document.querySelectorAll("#tipModeSeg .s").forEach(s=>{
  s.onclick=async()=>{ settings.tipMode=s.dataset.tm; await sset("settings",settings); renderTipModeSeg(); };
});

// ================= travel mode (global; tags sessions home / travel+gym / travel-no-gym) =================
const TRAVEL_LBL={ off:"Home", gym:"full gym access", nogym:"no gym", partial:"partial gym access" };
function renderTravelSeg(){
  const m = settings.travelMode || "off";
  document.querySelectorAll("#travelSeg .s").forEach(s=> s.classList.toggle("active", s.dataset.tv===m));
}
// the Workout-header ✈ lights up while travel mode is on (the only travel indicator — workout page only)
const TRAVEL_FAB_LBL={ gym:"full gym", nogym:"no gym", partial:"partial gym" };
function renderTravelFab(){
  const m=settings.travelMode||"off", on=m!=="off";
  const q=$("travelQuick"); if(q){ q.classList.toggle("on", on);
    q.setAttribute("aria-label", on ? "Travel mode on — "+(TRAVEL_FAB_LBL[m]||"")+" — tap to switch or end" : "Travel mode"); }
}
// kept as an alias so older call sites stay valid
function renderTravelBanner(){ renderTravelFab(); }
// quick travel control — its own bottom sheet, reachable in one tap from the Workout header (✈),
// the global ✈ badge, or Settings; no more digging through Settings.
function openTravel(){ renderTravel(); openSheet("Travel"); }
// ===== travel-consistency tracking =====
// We bank the real time spent in each context (home / travel+gym / travel-no-gym) so we can later
// compare training output PER WEEK across them — i.e. how strongly travel dents your consistency,
// not just per-session quality. travelStats[ctx].cred = session-equivalents logged in that context.
function travelCtx(m){ m=m||settings.travelMode||"off"; return m==="gym"?"gym":m==="nogym"?"nogym":m==="partial"?"partial":"home"; }
function travelAccrue(){   // call on every mode change + once per launch; persisted by the caller
  const now=Date.now(), tt=settings.travelTime=settings.travelTime||{home:0,gym:0,nogym:0,partial:0};
  if(settings.travelSince) tt[travelCtx()]=(tt[travelCtx()]||0)+Math.max(0, now-settings.travelSince);
  settings.travelSince=now;
}
// effective time in a context (weeks), incl. the still-open current segment — the consistency denominator
function travelWeeks(ctx){ const tt=settings.travelTime||{};
  let ms=tt[ctx]||0; if(settings.travelSince && travelCtx()===ctx) ms+=Math.max(0, Date.now()-settings.travelSince);
  return ms/(7*86400000); }
function renderTravelBreakdown(){
  const box=$("travelBreakdown"); if(!box) return;
  const ts=settings.travelStats||{};
  const order=[["home","Home"],["gym","Travel · full gym"],["partial","Travel · partial gym"],["nogym","Travel · no gym"]];
  const rows=order.filter(([k])=>ts[k]&&ts[k].n>0);
  if(rows.length<2){ box.innerHTML=""; return; }   // nothing to compare against until there's travel data
  let h='<div class="ed-label">Travel vs home</div><div class="tvbreak">';
  rows.forEach(([k,lab])=>{ const s=ts[k]; const perSets=(s.sets/s.n), perVol=Math.round(s.vol/s.n);
    const wks=travelWeeks(k), perWk = wks>=0.5 ? round1((s.cred||s.n)/wks) : null;   // sessions/wk = consistency
    h+='<div class="tvrow"><span>'+lab+'</span><span>'+(perWk!=null?'<b>'+perWk+'</b>/wk · ':'')
      +'<b>'+round1(perSets)+'</b> sets · <b>'+fmtKg(perVol)+'</b>/session</span></div>'; });
  h+='</div><p class="levelcap" style="margin:8px 0 0;">Sessions per week (your consistency) plus average sets &amp; load per session in each context — so you can see what travel really costs.</p>';
  box.innerHTML=h;
}
function renderTravel(){ renderTravelSeg(); renderTravelFab(); renderTravelBreakdown(); }
if($("travelQuick")) $("travelQuick").onclick=()=> openTravel();
if($("openTravelBtn")) $("openTravelBtn").onclick=()=> openTravel();
// ===== Plan vs Surprise start mode =====
// Surprise mode: the app proposes a random data-picked session (a bit of a surprise) instead of you
// choosing a plan/day. It reuses the suggested-session machinery, just auto-picking rather than showing a picker.
function loadSurprise(){
  _sponLen = settings.sponLen || "standard";
  _sponDays = (typeof spontaneousDays==="function") ? spontaneousDays() : [];
  const opts=(_sponDays||[]).filter(d=>d.ex && d.ex.length);
  if(!opts.length){ toast("Log a session or two first — then I can surprise you."); settings.surprise=false; sset("settings",settings); freeMode=false; renderSeg(); renderWorkout(); return; }
  const pick=opts[Math.floor(Math.random()*opts.length)]; _sponSel=_sponDays.indexOf(pick);
  const s={}; pick.ex.forEach(e=> s[e.n]=Array.from({length:objSets(e.n)},()=>({w:"",r:""})));
  draft["free"]={ t:Date.now(), s, spon:1, name:pick.name, tpl:pick.tpl, shuffle:pick.shuffle||0, orig:Object.keys(s) }; sset("draft", draft);
  freeMode=true; swaps={}; renderSeg(); renderFree();
}
// keep the same surprise focus, just re-fit it to a new length (Quick/Standard/Full)
function relenSurprise(){
  const fd=draft["free"]; if(!fd || fd.tpl==null){ loadSurprise(); return; }
  _sponLen=settings.sponLen||"standard"; _sponPr=_sponPr||(typeof sponPriorities==="function"?sponPriorities():null);
  const day=buildSponDay(fd.tpl, _sponPr, fd.shuffle||0), s={};
  day.ex.forEach(e=> s[e.n]=Array.from({length:objSets(e.n)},()=>({w:"",r:""})));
  draft["free"]={ t:Date.now(), s, spon:1, name:day.name, tpl:fd.tpl, shuffle:fd.shuffle||0, orig:Object.keys(s) }; sset("draft", draft);
  freeMode=true; renderSeg(); renderFree();
}
function surpriseShuffle(){
  if(sessionUnderway()) confirmAsk("Start a new surprise? Your current sets will be discarded.", "New surprise", ()=>{ tmrReset(); restStop(); loadSurprise(); }, "danger");
  else loadSurprise();
}
function startMode(){ return settings.surprise ? "surprise" : (freeMode ? "free" : "plan"); }
function renderStartMode(){
  const mode=startMode();
  document.querySelectorAll("#wkMode .s").forEach(t=> t.classList.toggle("active", t.dataset.wm===mode));
  const seg=$("seg"); if(seg) seg.style.display = mode==="plan" ? "" : "none";   // plan-day tabs only mean something in Plan mode
  const act=$("startAction"); if(!act) return;
  const refresh='<svg class="mic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v4h-4"/></svg>';
  const plans='<svg class="mic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4" cy="6" r="1.2"/><circle cx="4" cy="12" r="1.2"/><circle cx="4" cy="18" r="1.2"/></svg>';
  // the mode's action is a header icon beside the travel button: New surprise (Surprise) / Change plan (Plan) / hidden (Free)
  const sh=$("headerShuf");
  if(sh){ const on=mode==="surprise";
    sh.style.display = mode==="free" ? "none" : ""; sh.innerHTML = on ? refresh : plans;
    sh.setAttribute("aria-label", on ? "New surprise" : "Change plan"); sh.setAttribute("title", on ? "New surprise" : "Change plan");
    sh.onclick = on ? surpriseShuffle : (()=>{ renderPlanList(); openSheet("Plans"); }); }
  if(mode==="surprise"){
    const fd=draft["free"]||{}, nm=fd.name||"Surprise session", nEx=fd.s?Object.keys(fd.s).length:0, L=settings.sponLen||"standard";
    // the session IS the title (fills the top-left); its shape is the subtitle
    if($("ltName")) $("ltName").textContent=nm;
    if($("planSub")) $("planSub").textContent=(nEx?'~'+sponMins(nEx)+' min · '+nEx+' move'+(nEx>1?'s':''):'picked for you')+(nEx?' · picked for you':'');
    act.innerHTML='<div class="utabs paneltabs" id="sponLen2">'
      +[["quick","Quick"],["standard","Standard"],["full","Full"]].map(([v,l])=>'<button class="utab'+(L===v?" active":"")+'" data-sl="'+v+'" type="button" aria-pressed="'+(L===v)+'">'+l+'</button>').join('')+'</div>';
    act.querySelectorAll("#sponLen2 .utab").forEach(b=> b.onclick=()=>{ settings.sponLen=b.dataset.sl; sset("settings",settings); relenSurprise(); });
  } else if(mode==="plan"){
    if($("ltName")) $("ltName").textContent="Workout";
    if($("planSub")) $("planSub").textContent = (typeof planMeta==="function") ? planMeta(activePlan()) : "";
    act.innerHTML="";
  } else {
    // Free: renderFree() owns the title/subtitle (it knows suggested-session names) — don't clobber it here
    act.innerHTML="";
  }
}
document.querySelectorAll("#wkMode .s").forEach(t=> t.onclick=()=>{
  const m=t.dataset.wm, cur=startMode();
  if(m===cur){ if(m==="surprise") surpriseShuffle(); return; }   // re-tapping active Surprise → reshuffle
  if(m!=="surprise" && cur!=="surprise"){
    // Plan ↔ Free: each keeps its own draft, so switching loses nothing — no confirm, timers keep running
    freeMode = m==="free"; swaps={}; renderSeg();
    if(freeMode) renderFree(); else renderWorkout();
    return;
  }
  // entering or leaving Surprise replaces/clears the surprise draft, so confirm mid-session
  const apply=()=>{ settings.surprise = m==="surprise"; sset("settings",settings);
    if(m==="surprise"){ loadSurprise(); }
    else { freeMode = m==="free"; if(draft["free"]&&draft["free"].spon){ delete draft["free"]; sset("draft",draft); } tmrReset(); restStop(); swaps={}; renderSeg(); if(freeMode) renderFree(); else renderWorkout(); }
    renderStartMode(); };
  if(sessionUnderway()) confirmAsk("Switch mode? Your current sets will be discarded.", "Switch", apply, "danger");
  else apply();
});
if($("headerShuf")) $("headerShuf").onclick=surpriseShuffle;
document.querySelectorAll("#travelSeg .s").forEach(s=>{
  s.onclick=async()=>{ if(s.dataset.tv===(settings.travelMode||"off")) return;   // no change → don't reset the clock
    travelAccrue();                       // bank the time spent in the context you're leaving
    settings.travelMode=s.dataset.tv; await sset("settings",settings); renderTravel();
    toast(settings.travelMode==="off" ? "Back home — sessions log as normal." : "Travel mode on — "+TRAVEL_LBL[settings.travelMode].toLowerCase()+". An ✈ badge stays on every page until you switch back."); };
});
renderTravel();   // boot: reflect any saved travel mode in the badge + header button immediately

// ================= free workout =================
// Alternate spellings of a movement the picker already lists under another name. They stay valid
// everywhere (muscleFor, old plans, old history) — they just don't get a second row in the Add list,
// because logging the same lift under two names splits its strength trend in two.
const DUP_ALIAS=["Band Pull-Apart","Reverse Pec-Deck","Walking Lunges","Calf Raises","Close-Grip Bench",
  "Incline Press","Shoulder Press","Rear-Delt Fly","Face Pull","Pull-Ups","Chin Tucks","Wall Slides",
  "Hollow Hold","Leg Curl"];
function exerciseLibrary(){
  const set=new Set(LIBRARY);
  Object.keys(ALTS).forEach(k=>{ set.add(k); ALTS[k].forEach(a=>set.add(a)); });
  const mine=new Set();   // anything the lifter actually uses is never hidden, whatever it's called
  plans.forEach(p=>p.workouts.forEach(w=>w.ex.forEach(e=>{ set.add(e.n); mine.add(e.n); (e.alts||[]).forEach(a=>{set.add(a); mine.add(a);}); })));
  Object.keys(hist).forEach(n=>{ set.add(n); mine.add(n); });
  DUP_ALIAS.forEach(n=>{ if(!mine.has(n)) set.delete(n); });
  return [...set].filter(Boolean).sort((a,b)=>a.localeCompare(b));
}
// one set row. Timed/hold moves (plank, wall sit, dead hang…) swap the × for a hold-timer button and log
// seconds instead of reps; weighted moves keep weight × reps. Used by both the plan and free workout views.
function buildSetRow(i, pv, name){
  const timed=isTimed(name);
  const pvVol = (pv && name) ? setVol(name, pv.w, pv.r) : 0;
  const pw = pv&&pv.w!=null?esc(pv.w):'', pr = pv&&pv.r!=null?esc(pv.r):'';
  const wPh = timed ? '+kg' : (pv&&pv.w?esc(pv.w):(isBW(name)?'BW':'kg'));   // weight is optional — blank logs as no extra weight
  const rPh = timed ? 'sec' : (pv&&pv.r?esc(pv.r):'reps');
  const sep = timed
    ? '<button class="holdbtn" type="button" aria-label="Hold timer — tap to start, tap to stop">'+ICON.play+'</button>'
    : '<span class="x">×</span>';
  const fill = (pvVol&&(pw||pr)) ? ' fillable' : '';
  return '<div class="setrow'+(timed?' timed':'')+(pvVol?'':' novol')+'" data-pvol="'+(pvVol||'')+'" data-pw="'+pw+'" data-pr="'+pr+'"><span class="sn" role="button" title="Tap to mark warm-up">'+i+'</span>'
    +'<input class="w" type="text" inputmode="decimal" autocomplete="off" placeholder="'+wPh+'">'
    +sep
    +'<input class="r" type="number" inputmode="numeric" placeholder="'+rPh+'">'
    +'<span class="prtag">PR</span><span class="eq">=</span><span class="vol'+fill+'" title="'+(fill?'Tap to fill last time':'')+'">'+(pvVol?fmtVol(pvVol):'')+'</span><button class="setdel" aria-label="Remove set">'+ICON.minus+'</button></div>';
}
function freeSetRow(i, pv, name){ return buildSetRow(i, pv, name); }
// Self-calibrated Epley rep denominator. The load–rep relationship w(1+r/K) uses K=30 by default, but K
// varies by person and lift. A set logged as "Max" (ef===2) is a near-true failure point, so two Max sets
// of the SAME exercise at different loads pin K: w1(1+r1/K)=w2(1+r2/K) ⇒ K=(w2·r2 − w1·r1)/(w1 − w2). We
// pool valid within-exercise pairs across the log, take the median, clamp to a sane range, and fall back to
// 30 when there isn't enough failure data. This grounds the effort model in the user's own data.
let _repDenom=null;   // memoised; invalidated on save (see saveBtn)
function effortRepDenom(){
  if(_repDenom!=null) return _repDenom;
  const ks=[];
  Object.keys(hist).forEach(name=>{
    if(isTimed(name) || isBW(name)) return;
    const mx=(hist[name]||[]).filter(e=>e.ef===2 && (parseFloat(e.w)||0)>0 && (parseInt(e.r)||0)>0)
      .map(e=>({w:parseFloat(e.w), r:parseInt(e.r)}));
    for(let i=0;i<mx.length;i++) for(let j=i+1;j<mx.length;j++){
      const a=mx[i], b=mx[j]; if(a.w===b.w) continue;
      const k=(b.w*b.r - a.w*a.r)/(a.w - b.w);
      if(k>=15 && k<=50) ks.push(k);            // discard implausible fits (bad reps, warm-up mislabels)
    }
  });
  ks.sort((x,y)=>x-y);
  _repDenom = ks.length ? Math.max(20, Math.min(40, ks[Math.floor(ks.length/2)])) : 30;
  return _repDenom;
}
// Single estimated-1RM (Epley φ) used by EVERY strength/1RM surface — the growth-signal load trend, the
// Monte Carlo trend seed, the PRs count, the effort default, and the prediction ledger — so all graphs read
// the same φ. Uses the self-calibrated denominator (whitepaper §effort), not a hardcoded 30.
function e1rm(w,r){ w=parseFloat(w)||0; r=parseInt(r)||0; return w>0&&r>0 ? w*(1+r/effortRepDenom()) : 0; }
// Estimate this session's effort (proximity to failure) from the numbers: predict how many reps this load
// should fail at, using your best-ever set for the lift as the anchor and a self-calibrated Epley denominator
// (effortRepDenom), then RIR ≈ predicted − done. Returns 0 Easy / 1 Hard / 2 Max, or null when there's no
// trustworthy signal (no external load, or no prior baseline yet → treated as Hard). A tap on the pill overrides it.
function inferEffort(name, g){
  if(isTimed(name) || isBW(name)) return null;                 // no external-load model for holds/bodyweight
  const K=effortRepDenom();
  const h=hist[name]||[]; let anchor=0;                         // best e1RM from PRIOR sessions (excludes this one)
  h.forEach(e=>{ const w=parseFloat(e.w)||0, r=parseInt(e.r)||0; if(w>0&&r>0){ const x=w*(1+r/K); if(x>anchor) anchor=x; } });
  if(anchor<=0) return null;                                    // first time on this lift → no baseline → Hard
  let bw=0, br=0, be=0;                                         // this session's hardest set (highest e1RM among filled rows)
  (g?g.querySelectorAll(".setrow"):[]).forEach(row=>{
    if(row.classList.contains("warm")) return;   // warm-ups aren't the working effort
    const w=parseFloat(row.querySelector(".w").value)||0, r=parseInt(row.querySelector(".r").value)||0;
    if(w>0&&r>0){ const x=w*(1+r/K); if(x>be){ be=x; bw=w; br=r; } } });
  if(be<=0) return null;                                        // nothing logged yet → keep the current default
  const rir = K*(anchor/bw - 1) - br;                          // predicted reps-to-failure at this load, minus reps done
  if(rir <= 1) return 2;                                        // 0–1 in reserve → Max
  if(rir >= 4) return 0;                                        // ~4+ in reserve → Easy
  return 1;                                                     // Hard
}
// per-exercise effort picker — auto-estimated from your load vs your best (see inferEffort), one tap to
// override. Starts in "auto" mode (data-auto="1") and re-estimates as you type until you tap it.
// Timed/hold moves have no meaningful proximity-to-failure, so they skip it (always counted as Hard).
// "+ add set" leads the footer row; holds get it on a row of its own. The footer (.cardfoot) is always the
// card's last child: new/copied set rows insert before it, so they never land below the effort picker.
function cardFoot(name){
  const add='<a class="demo addset" role="button">'+ICON.plus+'add set</a>';
  if(isTimed(name)) return '<div class="cardfoot freeadd">'+add+'</div>';
  return '<div class="cardfoot efbar" data-ef="1" data-auto="1">'+add+'<span class="efsegs" role="group" aria-label="How hard?">'
    + EFFORT_OPTS.map((o,ix)=>'<button type="button" class="efseg'+(ix===1?' on':'')+'" data-ef="'+ix+'" title="'+esc(o.tip)+'">'+esc(o.lbl)+'</button>').join('')
    + '</span></div>';
}
function setEffortSel(bar, ef){ bar.dataset.ef=ef; bar.querySelectorAll(".efseg").forEach(s=> s.classList.toggle("on", +s.dataset.ef===ef)); }
// re-estimate an auto pill from the group's current set inputs; no-op once the user has tapped (manual)
function refreshAutoEffort(g){
  const bar=g&&g.querySelector(".efbar"); if(!bar || bar.dataset.auto!=="1") return;
  const inf=inferEffort(g.dataset.ex, g);
  setEffortSel(bar, inf==null?1:inf);
}
function wireEffortBar(g){
  const bar=g.querySelector(".efbar"); if(!bar) return;
  refreshAutoEffort(g);   // seed from any prefilled values
  bar.querySelectorAll(".efseg").forEach(b=> b.onclick=()=>{
    bar.dataset.auto="0";   // user took control — stop auto-estimating for this log
    setEffortSel(bar, +b.dataset.ef);
    captureDraft();
  });
}
// Rep/set target for a free or suggested-session move, from the user's GOAL: strength → low reps & more
// sets, hypertrophy → moderate, fat-loss/fitness → higher reps. Compound anchors get the lower bracket,
// accessories the higher one. Drives both the displayed target and the progressive-overload cues.
// suggested set count for a data-picked / free exercise (strength trains a touch heavier on sets)
function objSets(name){ return settings.objective==="strength" ? 4 : 3; }
function objTarget(name){
  const sch=(REPSCHEME[settings.objective]||REPSCHEME.muscle).balanced;
  const reps = roleFor(name)==="compound" ? sch.c : sch.a;
  return objSets(name)+" × "+reps;
}
function buildFreeGroup(name){
  const prev=last[name]||[];
  const g=document.createElement("div"); g.className="group"; g.dataset.ex=name;
  const nSets=objSets(name);
  let rows=""; for(let i=0;i<nSets;i++) rows+=freeSetRow(i+1, prev[i], name);
  // rep target from the user's objective so the range AND the progressive-overload cues (topped-the-range,
  // add-a-rep…) match the goal — a strength session nudges toward load, a hypertrophy one toward reps.
  const tgt=isTimed(name)?"":objTarget(name);
  const meta=metaHTML(name, tgt, "free"), eq=equipFor(name);
  const mcol=MCOLOR[muscleFor(name)[0]]||"#888888";
  const mp=[];
  if(tgt) mp.push('<span class="tg">'+esc(tgt)+'</span>');
  if(meta.lastText) mp.push('<button type="button" class="fillast" data-ex="'+esc(name)+'">↻ '+esc(meta.lastText)+'</button>');
  mp.push(scoreTag(name));
  const metaLine='<div class="exmeta">'+mp.join('<span class="dot">·</span>')+'</div>';
  g.innerHTML='<div class="pad" style="padding-bottom:0">'
    +'<div class="exhead"><span class="eqic tinted" style="background:'+hexAlpha(mcol,.15)+';color:'+mcol+'" title="'+esc(eq.label)+'">'+EQUIP[eq.key]+'</span><span class="nm">'+esc(name)+'</span>'
    +'<button class="lnkic menubtn" data-free="1" data-ex="'+esc(name)+'" aria-label="More actions">'+ICON.more+'</button></div>'
    +metaLine+(meta.show?meta.cue:'')+'</div>'
    +rows+cardFoot(name);
  wireEffortBar(g);
  g.querySelector(".addset").onclick=()=>{ const n=g.querySelectorAll(".setrow").length+1;
    const tmp=document.createElement("div"); tmp.innerHTML=freeSetRow(n,null,name);
    g.querySelector(".cardfoot").insertAdjacentElement("beforebegin", tmp.firstChild); captureDraft(); refreshSetFocus(g); };
  return g;
}
function renderFree(){
  if(typeof renderTravelBanner==="function") renderTravelBanner();
  const _fd=draft["free"], spon=!!(_fd && _fd.spon);
  if(spon){ $("ltName").textContent=_fd.name||"Suggested session"; $("planSub").textContent="Suggested session"; }
  else { $("ltName").textContent="Free workout"; $("planSub").textContent="Free workout — choose your exercises"; }
  const list=$("exlist"); list.innerHTML=""; list.classList.toggle("norise", _noRise); _noRise=false;
  const hint=document.createElement("p"); hint.className="freehint";
  hint.textContent = spon
    ? "Suggested session — picked from your recent training. Tweak anything, then log your sets."
    : "A one-off session. Add any exercises you like — grouped by muscle, logged to history just like a plan workout.";
  list.appendChild(hint);
  const addBtn=document.createElement("button"); addBtn.className="btn tinted wide"; addBtn.id="addExBtn";
  addBtn.innerHTML=ICON.plus+"Add exercise"; addBtn.onclick=()=>openAdd("free"); list.appendChild(addBtn);
  const fd=draft["free"];
  if(fd && fd.s && (Date.now()-(fd.t||0) <= 20*3600*1000)){
    Object.keys(fd.s).forEach(name=>{ freeSection(sectionKeyFor(name)).appendChild(buildFreeGroup(name)); });
    applyDraft();
  } else if(fd){ delete draft["free"]; sset("draft", draft); }
  list.querySelectorAll(".group").forEach(refreshSetFocus);   // same done marks as plan sessions
  renderStartMode();
  updateRepeatBtn();
  renderSessionRose();
  updateClearBtn();
}
function freeSection(key){
  const list=$("exlist");
  let sec=list.querySelector('.secgrp[data-sec="'+key+'"]');
  if(sec) return sec;
  sec=document.createElement("div"); sec.className="secgrp"; sec.dataset.sec=key;
  sec.innerHTML='<div class="mglabel"><span class="cdot" style="background:'+(MCOLOR[key]||"#888")+'"></span>'+esc(sectionLabel(key))+'</div>';
  const order=sectionOrder(), idx=order.indexOf(key)<0?999:order.indexOf(key), addBtn=$("addExBtn");
  let placed=false;
  list.querySelectorAll(".secgrp").forEach(s=>{ const oi=order.indexOf(s.dataset.sec); if(!placed && (oi<0?999:oi)>idx){ list.insertBefore(sec,s); placed=true; } });
  if(!placed){ if(addBtn) list.insertBefore(sec,addBtn); else list.appendChild(sec); }
  return sec;
}
function addFreeExercise(name){
  freeSection(sectionKeyFor(name)).appendChild(buildFreeGroup(name));
  closeSheet("Add"); toast("Added "+name); captureDraft();
}
function addPlanExercise(name){
  const p=activePlan(), w=p.workouts[curWk];
  w.ex.push({n:name, t:"3 × 8–12", s:3});
  sset("plans",plans);
  closeSheet("Add"); renderWorkout(); toast("Added "+name+" to "+w.name);
}
let addTarget="free", addFilter=null;
// ---- favourite exercises: a starred shortlist, pinned to the top of the Add list and floated to the
// top of a Swap. Stored as names in settings so it syncs with everything else the lifter owns. ----
const favList=()=> settings.favEx||(settings.favEx=[]);
function isFav(name){ return favList().indexOf(name)>=0; }
async function toggleFav(name){
  const f=favList(), i=f.indexOf(name);
  if(i>=0) f.splice(i,1); else f.push(name);
  await sset("settings", settings);
  // repaint whichever list is on screen so the star and the Favourites section agree
  if($("sheetAdd") && $("sheetAdd").classList.contains("show")) renderAddList($("addSearch").value);
  else if($("sheetSwap") && $("sheetSwap").classList.contains("show")) renderSwapList();
  toast(i>=0 ? ("Removed "+name+" from favourites") : ("Favourited "+name));
}
// favourites first, then whatever order the caller already chose
function favFirst(arr){ return arr.slice().sort((a,b)=> (isFav(b)?1:0)-(isFav(a)?1:0)); }
$("addClose").onclick=()=>closeSheet("Add");
$("scrimAdd").onclick=()=>closeSheet("Add");
$("addSearch").addEventListener("input", e=>renderAddList(e.target.value));
function syncLevelSeg(){ document.querySelectorAll('#addLevelSeg .s, #swapLevelSeg .s').forEach(s=> s.classList.toggle('active', s.dataset.lv===equipLevel)); }
function syncSortBtns(){ document.querySelectorAll(".sortbtn").forEach(btn=>{ btn.classList.toggle("on", exSort==="score"); btn.innerHTML=ICON.sort+'<span>'+(exSort==="score"?"By hypertrophy ★":"A–Z")+'</span>'; }); }
function toggleExSort(){ exSort = exSort==="score"?"az":"score"; syncSortBtns();
  if($("sheetAdd").classList.contains("show")) renderAddList($("addSearch").value);
  if($("sheetSwap").classList.contains("show")) renderSwapList(); }
document.querySelectorAll(".sortbtn").forEach(b=> b.onclick=toggleExSort);
syncSortBtns();
document.querySelectorAll("#addLevelSeg .s").forEach(s=> s.onclick=()=>{ equipLevel=s.dataset.lv; addFilter=null; syncLevelSeg(); renderAddList($("addSearch").value); });
function openAdd(target){ addTarget=target||"free"; addFilter=null; $("addSearch").value=""; syncLevelSeg(); renderAddList(""); openSheet("Add"); }
function chooseAdd(name){ if(addTarget==="plan") addPlanExercise(name); else addFreeExercise(name); }
function renderAddChips(order){
  const wrap=$("addChips"); wrap.innerHTML="";
  const mk=(key,label,color,html)=>{ const c=document.createElement("button"); c.className="chip"+((addFilter===key)?" on":"");
    c.innerHTML=(html||(color?'<span class="cdot" style="background:'+color+'"></span>':''))+esc(label);
    c.onclick=()=>{ addFilter=key; renderAddList($("addSearch").value); }; wrap.appendChild(c); };
  mk(null,"All",null);
  if(favList().length) mk("__fav","Favourites",null,'<span class="chipstar">'+ICON.heartF+'</span>');
  order.forEach(k=> mk(k, sectionLabel(k), MCOLOR[k]||"#888"));
}
function renderAddList(filter){
  const wrap=$("addList"); wrap.innerHTML="";
  const raw=(filter||"").trim(), f=raw.toLowerCase(), lib=exerciseLibrary();
  if(raw && !lib.some(n=>n.toLowerCase()===f)){
    const row=document.createElement("div"); row.className="planrow";
    row.innerHTML='<div class="check" style="color:var(--accent)">＋</div><div class="info"><div class="nm">Add “'+esc(raw)+'”</div><div class="meta">custom exercise</div></div>';
    row.querySelector(".info").onclick=()=>chooseAdd(raw); wrap.appendChild(row);
  }
  const matches=lib.filter(n=>n.toLowerCase().includes(f) && levelAllows(n));
  const bySec={}; matches.forEach(n=>{ const k=sectionKeyFor(n); (bySec[k]=bySec[k]||[]).push(n); });
  const order=sectionOrder().filter(k=>bySec[k]); Object.keys(bySec).forEach(k=>{ if(order.indexOf(k)<0) order.push(k); });
  renderAddChips(order);
  const favs=matches.filter(isFav);
  // "Favourites" is a view of the same list, not a muscle — handle it before the section machinery
  if(addFilter==="__fav"){
    if(!favs.length) wrap.innerHTML='<p class="freehint">No favourites yet — tap the ♡ on any exercise to keep it here.</p>';
    else favs.forEach(n=>{ const row=buildExRow(n); row.querySelector(".info").onclick=()=>chooseAdd(n); wrap.appendChild(row); });
    return;
  }
  if(exSort==="score"){
    let arr = addFilter ? (bySec[addFilter]||[]) : matches.slice();
    arr = favFirst(arr.slice().sort((a,b)=> hScore(b).s-hScore(a).s || a.localeCompare(b)));
    arr.slice(0,90).forEach(n=>{ const row=buildExRow(n); row.querySelector(".info").onclick=()=>chooseAdd(n); wrap.appendChild(row); });
    return;
  }
  const keys = (addFilter && bySec[addFilter]) ? [addFilter] : order;
  let shown=0;
  if(!addFilter && favs.length){          // starred lifts sit above the muscle sections, and repeat within them
    const lab=document.createElement("div"); lab.className="addhdr";
    lab.innerHTML='<span class="chipstar">'+ICON.heartF+'</span>Favourites'; wrap.appendChild(lab);
    favs.forEach(n=>{ shown++; const row=buildExRow(n); row.querySelector(".info").onclick=()=>chooseAdd(n); wrap.appendChild(row); });
  }
  keys.forEach(k=>{
    if(shown>=90) return;
    if(!addFilter){ const lab=document.createElement("div"); lab.className="addhdr";
      lab.innerHTML='<span class="cdot" style="background:'+(MCOLOR[k]||"#888")+'"></span>'+esc(sectionLabel(k)); wrap.appendChild(lab); }
    bySec[k].forEach(n=>{ if(shown>=90) return; shown++;
      const row=buildExRow(n);
      row.querySelector(".info").onclick=()=>chooseAdd(n);
      wrap.appendChild(row);
    });
  });
}
// shared rich exercise row: equipment symbol + muscle dot + name + score + inspect (+ optional check/meta)
function buildExRow(name, opts){
  opts=opts||{};
  const eq=equipFor(name), mcol=MCOLOR[muscleFor(name)[0]]||"#888888";
  const row=document.createElement("div"); row.className="planrow exrow pick";
  row.innerHTML='<span class="eqic sm" title="'+esc(eq.label)+'">'+EQUIP[eq.key]+'</span>'
    +'<div class="info"><div class="nm"><span class="mdot" style="background:'+mcol+'"></span>'+esc(name)+'</div>'+(opts.meta?'<div class="meta">'+esc(opts.meta)+'</div>':'')+'</div>'
    +'<span class="scoretag">'+ICON.starF+hScore(name).s+'</span>'
    +(opts.checked?'<span class="swapcheck">✓</span>':'')
    +'<a class="lnkic favbtn'+(isFav(name)?' on':'')+'" title="'+(isFav(name)?'Remove from favourites':'Add to favourites')+'" aria-label="Favourite">'+(isFav(name)?ICON.heartF:ICON.heartE)+'</a>'
    +'<a class="lnkic inspect" title="Inspect">'+ICON.info+'</a>';
  row.querySelector(".inspect").onclick=(ev)=>{ ev.stopPropagation(); openInfo(name); };
  row.querySelector(".favbtn").onclick=(ev)=>{ ev.stopPropagation(); toggleFav(name); };
  return row;
}

// ================= swap exercise =================
$("exlist").addEventListener("click", e=>{ const a=e.target.closest(".swap"); if(a) openSwap(+a.dataset.i); });
$("exlist").addEventListener("click", e=>{ const k=e.target.closest(".rotkeep"); if(k){ e.preventDefault(); rotKeep.add(+k.dataset.i); renderWorkout(); toast("Keeping "+activePlan().workouts[curWk].ex[+k.dataset.i].n); } });
$("exlist").addEventListener("click", e=>{ const u=e.target.closest(".rotuse"); if(u){ e.preventDefault(); rotKeep.delete(+u.dataset.i); renderWorkout(); } });
$("exlist").addEventListener("click", e=>{ const a=e.target.closest(".rem"); if(a){ e.preventDefault(); removePlanExercise(+a.dataset.i); } });
// per-exercise "···" overflow menu — one body-level popover positioned under the tapped button
(function(){
  const pop=$("exMenu"); let open=false;
  const close=()=>{ if(!open) return; open=false; pop.classList.remove("show"); pop.innerHTML=""; };
  window.closeExMenu=close;
  function build(btn){
    const xi=+btn.dataset.i, name=btn.dataset.ex, free=btn.dataset.free==="1", canSwap=free||btn.dataset.swap==="1";
    const items=[];
    if(canSwap) items.push({c:"swap", ic:ICON.swap, t:"Swap exercise", fn:()=> free ? openSwapFree(name) : openSwap(xi)});
    items.push({c:"info", ic:ICON.info, t:"Info & demo", fn:()=>openInfo(name)});
    items.push({c:"rem danger", ic:ICON.trash, t:"Remove", fn:()=> free ? removeFreeExercise(btn.closest(".group")) : removePlanExercise(xi)});
    pop.innerHTML=items.map((it,k)=>'<button type="button" class="mi '+it.c+'" data-k="'+k+'">'+it.ic+'<span>'+it.t+'</span></button>').join("");
    pop.querySelectorAll(".mi").forEach((el,k)=> el.onclick=()=>{ close(); items[k].fn(); });
    // measure off-screen, then anchor the right edge to the button
    pop.style.visibility="hidden"; pop.classList.add("show"); open=true;
    const r=btn.getBoundingClientRect(), mw=pop.offsetWidth, mh=pop.offsetHeight;
    let left=Math.max(8, r.right-mw);
    let top=r.bottom+6; if(top+mh > window.innerHeight-8) top=Math.max(8, r.top-mh-6);
    pop.style.left=left+"px"; pop.style.top=top+"px"; pop.style.visibility="";
  }
  $("exlist").addEventListener("click", e=>{ const b=e.target.closest(".menubtn"); if(!b) return;
    e.preventDefault(); e.stopPropagation(); open ? close() : build(b); });
  document.addEventListener("click", e=>{ if(open && !e.target.closest("#exMenu") && !e.target.closest(".menubtn")) close(); });
  document.addEventListener("scroll", close, true);   // any scroll dismisses it
})();
$("exlist").addEventListener("click", e=>{ const a=e.target.closest(".setdel"); if(a){ e.preventDefault(); removeSetRow(a.closest(".setrow")); } });
// tap the set number to toggle a WARM-UP set: it stays on screen (and in the draft) but is excluded from
// working-set count, volume, PRs, effort, and the saved top set — warm-ups shouldn't skew your logged work.
function renumberSets(g){ let n=0; g.querySelectorAll(".setrow").forEach(r=>{ const sn=r.querySelector(".sn"); if(!sn) return;
  if(r.classList.contains("warm")) sn.textContent="W"; else { n++; sn.textContent=n; } }); }
$("exlist").addEventListener("click", e=>{ const s=e.target.closest(".sn"); if(!s) return;
  const r=s.closest(".setrow"), g=s.closest(".group"); if(!r||!g) return;
  const wasDone=r.classList.contains("done"), num=s.textContent;
  r.classList.toggle("warm"); renumberSets(g); updateSetVol(r, g.dataset.ex); refreshAutoEffort(g); captureDraft();
  refreshSetFocus(g); prSetDone(r);   // a warm-up turned into a working set that beats the best is a completed PR set
  // the check disc looks tappable: say what the tap did, so "unticking" never silently makes a warm-up
  if(wasDone) toast("Set "+num+" is now a warm-up. Tap W to undo.");
  if(navigator.vibrate) try{ navigator.vibrate(10); }catch(_){} });
// Tap a set's volume number:
//  • an empty row showing a dotted previous-session value → fills last time's weight × reps (the "fillable" hint)
//  • a row you've just logged → copies its weight × reps into the next set, adding a fresh set if there isn't one
$("exlist").addEventListener("click", e=>{ const v=e.target.closest(".vol"); if(!v) return; e.preventDefault();
  const r=v.closest(".setrow"), g=v.closest(".group"); if(!r||!g) return;
  const name=g.dataset.ex, wEl=r.querySelector(".w"), rEl=r.querySelector(".r");
  const wv=wEl?wEl.value.trim():"", rv=rEl?rEl.value.trim():"";
  if(wv===""&&rv===""){                                        // empty row → pull from last session
    if(!v.classList.contains("fillable")) return;
    const pw=r.dataset.pw||"", pr=r.dataset.pr||""; if(!pw&&!pr) return;
    if(wEl) wEl.value=pw; if(rEl) rEl.value=pr;
    if(!timer.running && timer.elapsed===0) tmrStart();
    updateSetVol(r, name); captureDraft();
  } else {                                                     // filled row → copy this set to the next one
    if(!v.classList.contains("live")) return;
    let next=r.nextElementSibling;
    while(next && !next.classList.contains("setrow")) next=next.nextElementSibling;
    if(next){ const nw=next.querySelector(".w"), nr=next.querySelector(".r");
      if((nw&&nw.value.trim())||(nr&&nr.value.trim())) next=null; }   // next already has data → append instead
    if(!next){ const n=g.querySelectorAll(".setrow").length+1;
      const tmp=document.createElement("div"); tmp.innerHTML=freeSetRow(n,null,name); next=tmp.firstChild;
      const fa=g.querySelector(".cardfoot"); if(fa) fa.insertAdjacentElement("beforebegin", next); else r.insertAdjacentElement("afterend", next); }
    const nw=next.querySelector(".w"), nr=next.querySelector(".r");
    if(nw) nw.value=wv; if(nr) nr.value=rv;
    if(!timer.running && timer.elapsed===0) tmrStart();
    restStart();   // copying a completed set means that set is done — start the rest clock
    updateSetVol(next, name); captureDraft();
    if(prSetDone(next)) return;   // its burst carries the buzz
  }
  if(navigator.vibrate) try{ navigator.vibrate(15); }catch(e){} });
function removeSetRow(r){
  if(!r) return;
  if(hold.row===r) holdStop(false);   // deleting the row mid-hold: kill the timer, don't write a partial time
  const g=r.closest(".group"); if(!g) return;
  const rows=g.querySelectorAll(".setrow");
  if(rows.length<=1){ prKeysShift(g, 0); const w=r.querySelector(".w"), rp=r.querySelector(".r");
    if(w) w.value=""; if(rp) rp.value=""; r.dataset.pvol=""; r.dataset.rested=""; updateSetVol(r, g.dataset.ex); captureDraft(); refreshSetFocus(g); return; }
  prKeysShift(g, [...rows].indexOf(r));   // the PR keys go by the set's place: the sets below move up one
  r.remove();
  renumberSets(g);
  captureDraft(); refreshSetFocus(g);
}
$("exlist").addEventListener("input", e=>{ if(!e.target.classList||(!e.target.classList.contains("w")&&!e.target.classList.contains("r"))) return;
  if(e.target.classList.contains("w")){ let v=e.target.value.replace(/,/g,".").replace(/[^0-9.]/g,""); const i=v.indexOf("."); if(i>=0) v=v.slice(0,i+1)+v.slice(i+1).replace(/\./g,""); if(v!==e.target.value) e.target.value=v; }
  if(!timer.running && timer.elapsed===0 && e.target.value.trim()!=="") tmrStart();
  const r=e.target.closest(".setrow"), g=e.target.closest(".group");
  if(r&&g){ updateSetVol(r, g.dataset.ex); refreshAutoEffort(g);
    // stamp only — the rest countdown still starts on blur, as it does today
    if(!r.dataset.rested && setRowDone(r, g.dataset.ex)){ _lastSetEl=tmrElapsed(); _lastSetAt=Date.now(); _absenceAsked=false; }
    refreshSetFocus(g); }   // done-state and the header tally update as you type, not only on blur
  captureDraft(); });
function updateSetVol(r, name){
  const wv=r.querySelector(".w").value.trim(), rv=r.querySelector(".r").value.trim(), vEl=r.querySelector(".vol");
  if(r.classList.contains("warm")){ vEl.textContent="warm-up"; vEl.classList.remove("live","fillable"); r.classList.remove("novol"); setRowPR(r,false); return; }
  if(rv===""&&wv===""){ const pv=r.dataset.pvol; vEl.textContent=pv?fmtVol(+pv):""; vEl.classList.remove("live"); vEl.classList.toggle("fillable", !!pv && !!(r.dataset.pw||r.dataset.pr)); r.classList.toggle("novol", !pv); setRowPR(r,false); return; }
  const vol=setVol(name, wv, rv);
  // a row with reps entered is a logged set even with no weight (bodyweight / empty bar) — never gray it out
  vEl.textContent = vol?fmtVol(vol):""; vEl.classList.toggle("live", vol>0); vEl.classList.remove("fillable"); r.classList.toggle("novol", !vol && rv==="");
  vEl.title = vol>0 ? "Tap to copy this set to the next" : "";
  const best=bestVol(name);
  setRowPR(r, vol>0 && best>0 && vol>best);
}
function setRowPR(r, on){
  const was=r.classList.contains("pr");
  r.classList.toggle("pr", on);
  if(on && !was) prCelebrate(r);
}
// A set that beats the best, while it is typed: the PR pill marks the row and its volume cell pops, silently (the
// PR flag flips as digits go in, so no buzz and no particles here)
function prCelebrate(r){
  if(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const vEl=r.querySelector(".vol"); if(vEl) boomPop(vEl, 1);
}
// A PR set that is completed: its inputs were committed (the change event: blur, keyboard Done, the next field), a
// hold ended, or the set was copied in. The row explodes once per row, lighter than Finish (tier 1 glitter and a
// small confetti volley; no shock-wave ring, which on a row this thin reads as two lines across the screen) with
// the PR buzz. A later PR set replaces the burst. Finish (or any other burst armed or running) wins over it, and a
// set committed by the tap on Finish (its blur) is left to Finish's own moment. Returns whether it fired.
// Once per set per session: keyed by the draft, the exercise and the set's place, so a re-render (target editor,
// reorder) can't fire an already-celebrated set again. tmrReset() (Finish, discard, a new mode) clears it.
let _finTap=0;
const _prCelebrated=new Set();
// a set row at index i of group g is removed: drop its key and move the keys below it up one, in the set and the draft
function prKeysShift(g, i){
  if(i<0 || !g) return;
  const pre=draftSig()+"|"+g.dataset.ex+"|", mv=k=>{ if(!k.startsWith(pre)) return k; const n=+k.slice(pre.length);
    return n===i ? null : n>i ? pre+(n-1) : k; };
  const next=[..._prCelebrated].map(mv).filter(Boolean); _prCelebrated.clear(); next.forEach(k=>_prCelebrated.add(k));
  const dr=draft[draftSig()]; if(dr && Array.isArray(dr.prc)) dr.prc=dr.prc.map(mv).filter(Boolean);
}
$("saveBtn").addEventListener("pointerdown", ()=>{ _finTap=Date.now(); });
function prSetDone(row){
  if(!row || !row.classList.contains("pr") || Date.now()-_finTap<700) return false;
  const g=row.closest(".group"), ex=g&&g.dataset.ex; if(!setRowDone(row, ex)) return false;
  const key=draftSig()+"|"+ex+"|"+[...g.querySelectorAll(".setrow")].indexOf(row);
  if(_prCelebrated.has(key) || document.hidden) return false;   // hidden: celebrate() would skip it, so leave it to fire later
  _prCelebrated.add(key);
  const dr=draft[draftSig()]; if(dr) (dr.prc=dr.prc||[]).push(key);   // into the draft too (saved with its pending write)
  // 96 pieces thrown up and out, so the next set's fields below stay readable while they're typed into
  celebrate(1, { tile:[row, g], rings:0, cannon:9, pieces:96, up:true, minor:true, haptic:[0,55,45,90] });
  return true;
}
// Inline editor for an exercise's sets + target rep range, straight from the workout screen.
// Writes back to the active plan so the change sticks across sessions.
function openTargetEditor(xi){
  const p=activePlan(), w=p&&p.workouts[curWk], e=w&&w.ex[xi]; if(!e) return;
  const rng=parseReps(e.t), lo0=rng?rng.low:8, hi0=rng?rng.high:12;
  let sets=e.s||3;
  const ov=document.createElement("div"); ov.className="tgpop-scrim";
  ov.innerHTML=`<div class="tgpop" role="dialog" aria-label="Edit sets and reps">
    <div class="tgpop-h">${esc(e.n)}</div>
    <div class="tgpop-row"><span>Sets</span><div class="tgstep"><button type="button" class="tgs" data-d="-1" aria-label="Fewer sets">−</button><b id="tgSets">${sets}</b><button type="button" class="tgs" data-d="1" aria-label="More sets">+</button></div></div>
    <div class="tgpop-row"><span>Reps</span><div class="tgreps"><input id="tgLo" type="number" inputmode="numeric" min="1" value="${lo0}"><span>–</span><input id="tgHi" type="number" inputmode="numeric" min="1" value="${hi0}"></div></div>
    <div class="tgpop-btns"><button type="button" class="btn tinted" id="tgCancel">Cancel</button><button type="button" class="btn" id="tgSave">Save</button></div>
  </div>`;
  document.body.appendChild(ov);
  requestAnimationFrame(()=>ov.classList.add("in"));
  const setsEl=ov.querySelector("#tgSets");
  ov.querySelectorAll(".tgs").forEach(b=> b.onclick=()=>{ sets=Math.max(1,Math.min(12,sets+ +b.dataset.d)); setsEl.textContent=sets; });
  const close=()=>{ ov.classList.remove("in"); setTimeout(()=>ov.remove(),180); };
  ov.querySelector("#tgCancel").onclick=close;
  ov.onclick=ev=>{ if(ev.target===ov) close(); };
  ov.querySelector("#tgSave").onclick=async()=>{
    let lo=parseInt(ov.querySelector("#tgLo").value)||lo0, hi=parseInt(ov.querySelector("#tgHi").value)||lo;
    lo=Math.max(1,lo); hi=Math.max(1,hi); if(hi<lo){ const t=lo; lo=hi; hi=t; }
    e.s=sets; e.t=sets+" × "+(lo===hi?lo:lo+"–"+hi);
    captureDraft();                                  // keep anything already typed before we re-render
    await sset("plans",plans); close(); renderWorkout(); toast("Set "+e.n+" to "+e.t);
  };
}
function removeFreeExercise(g){
  if(!g) return; const name=g.dataset.ex;
  confirmAsk("Remove "+name+"?", "Remove", ()=>{ const sec=g.closest(".secgrp"); g.remove(); if(sec && !sec.querySelector(".group")) sec.remove();
    if(!document.querySelector("#exlist .group[data-ex]")){ delete draft[draftSig()]; sset("draft",draft); updateClearBtn(); } else captureDraft(); });   // captureDraft skips an empty screen, so the last card would come back
}
function removePlanExercise(xi){
  const p=activePlan(), w=p.workouts[curWk], e=w.ex[xi]; if(!e) return;
  if(w.ex.length<=1){ toast("A workout needs at least one exercise"); return; }
  confirmAsk("Remove "+e.n+" from "+w.name+"?", "Remove", ()=>{
    w.ex.splice(xi,1); delete swaps[xi];
    sset("plans",plans); renderWorkout(); captureDraft(); toast("Removed "+e.n);
  });
}
$("swapClose").onclick=()=>closeSheet("Swap");
$("scrimSwap").onclick=()=>closeSheet("Swap");
let swapScope="today";
function openSwap(xi){
  swapIdx=xi; swapFreeName=null; swapScope="today"; const e=activePlan().workouts[curWk].ex[xi];
  $("swapTitle").textContent="Swap: "+e.n;
  $("swapScope").style.display="";
  document.querySelectorAll("#swapScope .s").forEach(s=> s.classList.toggle("active", s.dataset.scope==="today"));
  syncLevelSeg(); renderSwapList(); openSheet("Swap");
}
// swap inside a free/spontaneous session — same sheet, but it renames the on-screen group
// instead of touching a plan (so there's no today/permanently scope to choose)
let swapFreeName=null;
function openSwapFree(name){
  swapFreeName=name;
  $("swapTitle").textContent="Swap: "+name;
  $("swapScope").style.display="none";
  syncLevelSeg(); renderSwapList(); openSheet("Swap");
}
function renderSwapList(){
  if(swapFreeName){
    const cur=swapFreeName, wrap=$("swapList"); wrap.innerHTML="";
    let opts=swapOptions({n:cur}).filter(o=> o===cur || levelAllows(o));
    if(exSort==="score") opts=opts.slice().sort((a,b)=> hScore(b).s-hScore(a).s || a.localeCompare(b));
    opts=favFirst(opts);
    opts.forEach(o=>{
      const row=buildExRow(o, {checked:o===cur, meta:o===cur?"current":""});
      row.querySelector(".info").onclick=()=>{
        if(o!==cur){
          const g=[...document.querySelectorAll("#exlist .group")].find(x=>x.dataset.ex===cur);
          if(g){ const sec=g.closest(".secgrp"); g.replaceWith(buildFreeGroup(o));
            if(sec && sec.dataset.sec!==sectionKeyFor(o)){                 // muscle changed → re-home the group
              const ng=[...document.querySelectorAll("#exlist .group")].find(x=>x.dataset.ex===o);
              if(ng){ freeSection(sectionKeyFor(o)).appendChild(ng); if(!sec.querySelector(".group")) sec.remove(); }
            }
            captureDraft(); }
        }
        closeSheet("Swap"); toast(o===cur?"Kept "+cur:"Swapped to "+o);
      };
      wrap.appendChild(row);
    });
    return;
  }
  const e=activePlan().workouts[curWk].ex[swapIdx]; if(!e) return;
  const cur=dispName(e,swapIdx), wrap=$("swapList"); wrap.innerHTML="";
  let opts=swapOptions(e).filter(o=> o===e.n || levelAllows(o));
  if(exSort==="score") opts=opts.slice().sort((a,b)=> hScore(b).s-hScore(a).s || a.localeCompare(b));
  opts=favFirst(opts);
  opts.forEach(o=>{
    const row=buildExRow(o, {checked:o===cur, meta:o===e.n?"original":""});
    row.querySelector(".info").onclick=async()=>{
      if(swapScope==="perm"){                                   // edit the plan itself
        const wk=activePlan().workouts[curWk];
        wk.ex[swapIdx].n=o; delete swaps[swapIdx];
        settings.planStartAt=Date.now();                        // freshening resets the 6-week clock
        await sset("plans",plans); await sset("settings",settings);
        closeSheet("Swap"); renderSeg(); renderWorkout(); renderDash(); toast("Swapped to "+o+" for good");
      } else {                                                  // just this session
        if(o===e.n) delete swaps[swapIdx]; else swaps[swapIdx]=o;
        closeSheet("Swap"); renderWorkout(); toast(o===e.n?"Back to "+e.n:"Swapped to "+o);
      }
    };
    wrap.appendChild(row);
  });
}
document.querySelectorAll("#swapScope .s").forEach(s=> s.onclick=()=>{ swapScope=s.dataset.scope;
  document.querySelectorAll("#swapScope .s").forEach(x=> x.classList.toggle("active", x===s)); });
document.querySelectorAll("#swapLevelSeg .s").forEach(s=> s.onclick=()=>{ equipLevel=s.dataset.lv; syncLevelSeg(); renderSwapList(); });

// ================= temporary injuries (work around it) =================
// A reversible overlay applied at render time; the stored plan is never touched (clearing restores it).
// mild/moderate → swap risky moves for safe same-muscle work; severe → drop the whole body part, train only unaffected areas.
const INJ_LABEL={ lowback:"lower back", knees:"knees", shoulders:"shoulders", elbows:"elbows", ankle:"ankle" };
const SEV_LABEL={ 1:"mild", 2:"moderate", 3:"severe" };
// Evidence-based self-management per injury — shown in the sheet, each linked to its guideline (keys in PROG_SRC/SRC_DOI; full ledger in EVIDENCE.md Part C).
// `tip` = load-management self-care (mild/moderate). `severe` = a red-flag note shown at the top intensity, which
// can mean a fracture or full tear — there the safe advice is rest + get assessed, NOT the "load it early" guidance.
const INJURY_ADVICE={
  ankle:{ src:"injAnkle",
    tip:"Don't rest it stiff — gentle weight-bearing and ankle circles as pain allows recover faster than immobilising. Support it (brace or tape), ice and elevate the first days, then add balance work once you can stand on it to cut re-sprain risk.",
    severe:"If you can't bear weight on it, or it's very swollen, deformed or unstable, treat it as a possible fracture — get it assessed (and imaged) before loading it again. Rest it fully meanwhile." },
  knees:{ src:"injKnee",
    tip:"Keep moving within a pain-free range. Building hip and quad strength and managing load (depth and volume) is the most effective treatment — more than resting up.",
    severe:"Locking, giving way, an inability to straighten it, or marked swelling can mean a fracture or a ligament/meniscus tear — get it assessed before loading it again. Rest it fully meanwhile." },
  lowback:{ src:"injBack",
    tip:"Stay active and avoid bed rest. Keep gentle movement and ease back to normal activity — most episodes settle within weeks, and staying mobile speeds it up.",
    severe:"Severe pain — especially with leg numbness or weakness, or any change in bladder or bowel control — needs prompt medical review. Rest and seek care before training it again." },
  shoulders:{ src:"injShoulder",
    tip:"Back off painful overhead work, then load it progressively. Guided home exercises work as well as formal physio, and injections add little — gradual loading is the lever.",
    severe:"Severe pain after a fall, a visible deformity, or being unable to lift the arm can mean a fracture or full-thickness tear — get it assessed before loading it again." },
  elbows:{ src:"injElbow",
    tip:"Load it, don't fully rest it. Pain-tolerable isometric and eccentric work plus managing your grip beat passive rest; steroid injections worsen long-term outcomes, so skip them.",
    severe:"Severe pain after trauma or a fall, or a visible deformity, can mean a fracture — get it assessed before loading it again. Rest it fully meanwhile." }
};
// weak-spot chips (Me) → the analytics-muscle build keys they prioritise
const WEAK_EXPAND={ chest:["chest"], back:["upperback","lats"], shoulders:["shoulders","sidedelts","reardelts"], arms:["biceps","triceps"], quads:["quads"], hamstrings:["hamstrings"], glutes:["glutes"], calves:["calves"], core:["core"] };
// build key → its analytics-muscle (MGROUP) name, for reading weekly volume gaps
const BUILD_MG={ chest:"Chest", lats:"Lats", upperback:"Upper Back", lowerback:"Lower Back", shoulders:"Front Delts", sidedelts:"Side Delts", reardelts:"Rear Delts", biceps:"Biceps", triceps:"Triceps", forearms:"Forearms", quads:"Quads", adductors:"Adductors", hamstrings:"Hamstrings", glutes:"Glutes", calves:"Calves", core:"Core" };
// Each injury carries its OWN severity: settings.activeInjuries is a map { key: 1|2|3 }.
function activeInjuries(){                                                                     // the flagged injury keys
  const a=settings.activeInjuries;
  if(Array.isArray(a)){ const sev=Math.max(1,Math.min(3,settings.injurySeverity||2)), m={}; a.forEach(k=>m[k]=sev); settings.activeInjuries=m; }  // migrate old global-severity array
  else if(!a || typeof a!=="object") settings.activeInjuries={};
  return Object.keys(settings.activeInjuries); }
function injSeverityFor(k){ return Math.max(1,Math.min(3, (settings.activeInjuries||{})[k]||2)); }
function maxInjSeverity(){ const ks=activeInjuries(); return ks.length ? Math.max.apply(null, ks.map(injSeverityFor)) : 2; }
// which active injury (if any) rules this exercise out — checked at that injury's own severity
function blockingInjury(name){ return activeInjuries().find(k=> injuryBlocks(name,[k],injSeverityFor(k))) || null; }
// best safe same-muscle replacement for a blocked move — skips names/families already taken so a
// workout never ends up with two of the same lift (e.g. Back Squat + Front Squat both → Leg Press)
function injurySub(e, used, usedFam){
  if(!blockingInjury(e.n)) return null;
  const lvl=exLevel(e.n);
  const free=o=> o!==e.n && !blockingInjury(o) && !(used&&used.has(o)) && !(usedFam&&usedFam.has(familyKey(o)));
  const opts=swapOptions(e).filter(free);
  return opts.find(o=> allowsAt(o,lvl)) || opts[0] || null;   // same environment first, else any safe move
}
// Resolve the current workout's display names under the active injuries, de-duplicated.
// Returns [{name, blocker, sub, drop}] aligned to w.ex — sub=true means we swapped; drop=true means the
// blocking injury is SEVERE so that body part is rested (omitted); blocker w/o sub or drop = caution.
function resolveInjuryNames(w){
  const ex=(w&&w.ex)||[], used=new Set(), usedFam=new Set();
  // effective base name = manual swap > auto-rotation pick > original (unless pinned back via rotKeep)
  const base=(e,xi)=> swaps[xi] || (rot[xi]!=null && !rotKeep.has(xi) ? rot[xi] : e.n);
  // reserve everything fixed first (manual swaps + moves that aren't blocked) so subs dodge them
  ex.forEach((e,xi)=>{ const b=base(e,xi), fixed = swaps[xi] || (!blockingInjury(b) ? b : null);
    if(fixed){ used.add(fixed); usedFam.add(familyKey(fixed)); } });
  return ex.map((e,xi)=>{
    if(swaps[xi]) return {name:swaps[xi], blocker:null, sub:false, drop:false};
    const nm=base(e,xi), rotated = nm!==e.n;   // came from the auto-rotation pool, not a manual swap
    const blocker=blockingInjury(nm);
    if(!blocker) return {name:nm, blocker:null, sub:false, drop:false, rotated, was:e.n};
    if(injSeverityFor(blocker)>=3) return {name:nm, blocker, sub:false, drop:true, rotated, was:e.n};   // severe → rest it
    const sub=injurySub({...e,n:nm}, used, usedFam);
    if(sub){ used.add(sub); usedFam.add(familyKey(sub)); return {name:sub, blocker, sub:true, drop:false}; }
    return {name:nm, blocker, sub:false, drop:false, rotated, was:e.n};   // no unique safe move left → keep, flag caution
  });
}
function renderInjuryRow(){
  const el=$("injuryRowTxt"); if(!el) return; const ks=activeInjuries();
  el.textContent = ks.length ? ks.map(k=>(INJ_LABEL[k]||k)+" ("+SEV_LABEL[injSeverityFor(k)]+")").join(", ") : "Feeling good — no limits";
  const row=$("injuryRow"); if(row){ row.classList.remove("ok","s1","s2","s3"); row.classList.add(ks.length ? "s"+maxInjSeverity() : "ok"); }  // colour by the most severe
}
function renderWeakSpots(){ const w=settings.weakSpots||[];
  document.querySelectorAll("#weakChips .chip").forEach(c=> c.classList.toggle("on", w.indexOf(c.dataset.v)>=0)); }
document.querySelectorAll("#weakChips .chip").forEach(c=> c.onclick=async()=>{
  const w=(settings.weakSpots||[]).slice(), v=c.dataset.v, i=w.indexOf(v);
  if(i>=0) w.splice(i,1); else w.push(v);
  settings.weakSpots=w; await sset("settings",settings); renderWeakSpots();
});
// When an injury rests part of a session, suggest alternative moves for UNAFFECTED muscles —
// ranked by your weak spots, then training focus, then where you're light on weekly volume.
function injuryFillSuggestions(maxN){
  if(!activeInjuries().length) return [];
  const wk=weeklyEquiv(muscleVolume(28,"sets").totals, 28);                 // weekly sets per muscle (gap signal)
  const weak=new Set((settings.weakSpots||[]).flatMap(w=>WEAK_EXPAND[w]||[w]));
  const focusKeys=new Set((settings.focusAreas||[]).flatMap(f=>focusGroups(f)));
  const today=new Set(activePlan().workouts[curWk].ex.map(e=>buildKey(muscleFor(e.n)[0])));
  const score=key=>{ let s=0;
    if(weak.has(key)) s+=4;                                                  // your stated weak spots win
    if(focusKeys.has(key)) s+=2;                                             // then your training focus
    const sets=wk[BUILD_MG[key]]||0;                                         // then the biggest weekly-volume gaps
    if(sets<WEEKLY_SET_MIN) s+=2; else if(sets<WEEKLY_SET_TARGET) s+=1;
    if(today.has(key)) s-=1.5;                                               // already on today's card → deprioritise
    return s; };
  const keys=Object.keys(BUILD_POOL).filter(key=> (BUILD_POOL[key]||[]).some(x=>!blockingInjury(x)))  // still trainable under the injuries
    .sort((a,b)=> score(b)-score(a) || a.localeCompare(b));
  const out=[], usedFam=new Set();
  for(const key of keys){ if(out.length>=maxN) break;
    const cand=suggestAdd(BUILD_MG[key]).find(x=> !usedFam.has(familyKey(x)));
    if(cand){ usedFam.add(familyKey(cand)); out.push({key, name:cand}); }
  }
  return out;
}
async function addToCurrentWorkout(name){
  const wk=activePlan().workouts[curWk]; if(!wk) return;
  if(wk.ex.some(e=>e.n===name)){ toast(name+" is already in this session"); return; }
  wk.ex.push({n:name, t:"3 × 8–12", s:3});
  await sset("plans",plans); renderSeg(); renderWorkout(); renderDash(); toast("Added "+name);
}
// the persistent "you're injured" banner on the Workout page, with a live count of adjusted moves
function renderInjuryBanner(){
  const b=$("injBanner"); if(!b) return; const inj=activeInjuries();
  if(!inj.length || freeMode){ b.style.display="none"; b.innerHTML=""; return; }
  const res=resolveInjuryNames(activePlan().workouts[curWk]);
  const dropped=res.filter(r=>r.drop).length, swapped=res.filter(r=>r.sub).length, flagged=res.filter(r=>r.blocker&&!r.sub&&!r.drop).length;
  let note;
  if(dropped) note = dropped+" move"+(dropped>1?"s":"")+" rested";       // severe — body part avoided entirely
  else { note = swapped ? swapped+" move"+(swapped>1?"s":"")+" adjusted" : "nothing risky today";
    if(flagged) note += " · "+flagged+" to ease off"; }
  const verb = dropped ? "Resting your" : "Working around your";
  b.innerHTML='🩹 <b>'+verb+' '+esc(listWords(inj.map(k=>INJ_LABEL[k]||k)))+'</b> · '+note+' <span class="injmanage">Manage<span class="ovchev lnkchev">›</span></span>';
  b.style.display="";
}
async function setActiveInjuries(map){
  settings.activeInjuries = map||{};
  await sset("settings",settings);
  renderInjuryRow();
  if(freeMode) renderInjuryBanner(); else renderWorkout();   // re-apply the overlay (+ banner) on the workout page
  if(typeof renderDash==="function") renderDash();
}
// ---- injury sheet: tick what hurts, then set EACH injury's own intensity; the coloured Accept button commits ----
let _pend={};                                                // pending { key: severity } while the sheet is open
function openInjurySheet(){ _pend={}; activeInjuries().forEach(k=>_pend[k]=injSeverityFor(k)); renderInjurySheet(); openSheet("Injury"); }   // activeInjuries() also migrates any old array form
function injSegHTML(k){ const sev=_pend[k];                  // per-injury 3-way intensity picker
  return '<div class="seg appearance injsev" data-inj="'+k+'" aria-label="'+esc(INJ_LABEL[k]||k)+' intensity">'+[1,2,3].map(n=>{ const l=SEV_LABEL[n];
    return '<div class="s'+(n===sev?" active":"")+'" data-sev="'+n+'">'+l.charAt(0).toUpperCase()+l.slice(1)+'</div>'; }).join('')+'</div>'; }
function renderInjurySheet(){
  const keys=Object.keys(_pend);
  document.querySelectorAll("#injuryChips .chip").forEach(c=> c.classList.toggle("on", keys.indexOf(c.dataset.v)>=0));
  const det=$("injuryDetail");
  if(det){
    if(keys.length){ det.style.display="";
      det.innerHTML = keys.map(k=>{ const a=INJURY_ADVICE[k], sev=_pend[k], severe=sev>=3, lbl=(INJ_LABEL[k]||k), Lbl=lbl.charAt(0).toUpperCase()+lbl.slice(1);
        let adv=''; if(a){ const u=SRC_DOI[a.src], body=(severe&&a.severe)?a.severe:a.tip;   // severe could be a fracture/tear → rest & get assessed, not "load it"
          adv='<div class="injadvice'+(severe?' redflag':'')+'"><p>'+esc(body)+'</p>'
            +(u?'<a class="srclink" href="'+u+'" target="_blank" rel="noopener">'+PROG_SRC[a.src]+' <span class="srcarrow">↗</span></a>':'')+'</div>'; }
        return '<div class="injdetail"><div class="ed-label">'+esc(Lbl)+' — how bad is it?</div>'+injSegHTML(k)+adv+'</div>';
      }).join('')
      +'<p class="injdisc">Mild swaps a few risky lifts; severe rests that whole area (and, if it could be a fracture or bad tear, says to get it checked). General guidance — not a substitute for seeing a clinician about significant or lasting pain.</p>';
    } else { det.style.display="none"; det.innerHTML=""; }
  }
  const btn=$("injuryAccept"); if(btn){ const hurt=keys.length>0, mx=hurt?Math.max.apply(null,keys.map(k=>_pend[k])):0;
    btn.className = "btn wide injaccept "+(hurt ? "s"+mx : "ok");   // green when all-clear, else the most severe intensity's colour
    btn.textContent = hurt ? "Apply" : "All good ✓"; }
}
$("injuryRow").onclick=openInjurySheet;
$("injBanner").onclick=openInjurySheet;
$("injuryClose").onclick=()=>closeSheet("Injury");
$("scrimInjury").onclick=()=>closeSheet("Injury");
document.querySelectorAll("#injuryChips .chip").forEach(c=> c.onclick=()=>{
  const v=c.dataset.v; if(_pend[v]!=null) delete _pend[v]; else _pend[v]=2;   // tick on → default moderate
  renderInjurySheet();
});
$("injuryDetail").addEventListener("click", e=>{ const s=e.target.closest(".injsev .s"); if(!s) return;
  _pend[s.closest(".injsev").dataset.inj]=+s.dataset.sev; renderInjurySheet(); });
$("injuryAccept").onclick=async()=>{
  const had=activeInjuries().length, keys=Object.keys(_pend), hurt=keys.length>0;
  const area=listWords(keys.map(k=>INJ_LABEL[k]||k)), allSevere=hurt && keys.every(k=>_pend[k]>=3);
  await setActiveInjuries(Object.assign({}, _pend));
  closeSheet("Injury");
  toast(hurt ? (allSevere ? "Resting your "+area+" — affected moves dropped" : "Working around your "+area)
             : (had ? "Cleared — back to your full plan" : "All good — full plan"));
};

// ================= exercise info =================
$("exlist").addEventListener("click", e=>{ const a=e.target.closest(".tgedit"); if(a){ e.preventDefault(); e.stopPropagation(); openTargetEditor(+a.dataset.i); } });
// over-rep nudge: load the suggested heavier weight into empty rows
$("exlist").addEventListener("click", e=>{ const b=e.target.closest(".cuebtn.addw"); if(!b) return; e.preventDefault();
  const g=b.closest(".group"), wv=b.dataset.w; if(!g||!wv) return; let any=false;
  const filled=[];
  g.querySelectorAll(".setrow").forEach(r=>{ const wEl=r.querySelector(".w"); if(wEl && !wEl.value.trim()){ wEl.value=wv; updateSetVol(r, g.dataset.ex); any=true; filled.push(r); } });
  if(any){ if(!timer.running && timer.elapsed===0) tmrStart(); captureDraft(); toast("Loaded "+wv+"kg — chase the lower end of your range.");
    filled.some(r=>prSetDone(r)); } });   // a row that already had its reps is now a completed set: the first PR among them bursts
// over-rep nudge: bump this exercise's target range up one bracket, saved to the plan
$("exlist").addEventListener("click", async e=>{ const b=e.target.closest(".cuebtn.raise"); if(!b) return; e.preventDefault();
  const xi=+b.dataset.i, p=activePlan(), w=p&&p.workouts[curWk], ex=w&&w.ex[xi]; if(!ex) return;
  const sets=ex.s||3; ex.t=sets+" × "+b.dataset.range; captureDraft();
  await sset("plans",plans); renderWorkout(); toast("Raised "+ex.n+" to "+ex.t); });
$("exlist").addEventListener("click", e=>{ const a=e.target.closest(".info"); if(a){ e.preventDefault(); openInfo(a.dataset.ex); } });
$("infoClose").onclick=()=>closeSheet("Info");
$("scrimInfo").onclick=()=>closeSheet("Info");
let infoName=null;
function openInfo(name){
  infoName=name;
  $("infoTitle").textContent=name;
  const eq=equipFor(name), muscles=muscleFor(name).filter(x=>x!=="Other");
  $("infoArea").innerHTML='<span class="eqbadge">'+EQUIP[eq.key]+'<span>'+esc(eq.label)+'</span></span>'
    +(muscles.length?'<span class="eqmus">'+muscles.map(mu=>'<span class="mdot" style="background:'+(MCOLOR[mu]||"#888")+'"></span>'+esc(mu)).join(' · ')+'</span>':'')
    +(muscles.length?'<span class="muskey">Dot colour = muscle group, matched across the app.</span>':'');
  const x=explainFor(name);
  const r=hScore(name);
  const diff=difficultyFor(name);
  let dots=""; for(let i=1;i<=5;i++) dots+='<span class="ddot'+(i<=diff?' on':'')+'"></span>';
  $("infoDiff").innerHTML='<span class="dlabel">Difficulty</span><span class="ddots">'+dots+'</span><span class="dtxt">'+DIFF_LABEL[diff]+'</span>';
  $("infoRate").innerHTML='<div class="hlabel">Hypertrophy rating</div>'
    +'<div class="hrow"><span class="hstars">'+starHTML(r.s)+'</span><span class="hnum">'+r.s+'<small> / 5</small></span></div>'
    +'<div class="hwhy">'+esc(r.why)+'</div>'
    +'<div class="hmeta">An evidence-informed guide — weighing loaded stretch, full range of motion and how easily you can add load. Equipment type barely affects growth. Not a precise measurement.</div>';
  $("infoWhy").textContent=x.why;
  let cues=x.cues.slice();
  if(MORE_CUES[name]){ const seen=new Set(cues); MORE_CUES[name].forEach(c=>{ if(!seen.has(c)) cues.push(c); }); }
  $("infoCues").innerHTML=cues.map(c=>'<li>'+esc(c)+'</li>').join('');
  const donts=dontsFor(name);
  $("infoDontsLabel").style.display = donts.length?'':'none';
  $("infoDonts").innerHTML=donts.map(c=>'<li>'+esc(c)+'</li>').join('');
  $("infoDemo").href="https://www.youtube.com/results?search_query="+encodeURIComponent("how to "+name);
  openSheet("Info");
}
$("infoProg").onclick=()=>{ closeSheet("Info"); if(infoName) openChart(infoName); };

// ================= per-exercise progress chart =================
$("exlist").addEventListener("click", e=>{ const a=e.target.closest(".prog"); if(a) openChart(a.dataset.prog); });
$("chartClose").onclick=()=>closeSheet("Chart");
$("scrimChart").onclick=()=>closeSheet("Chart");
function fmtSet(d){ const w=esc(d.w), r=esc(d.r); return (d.w?w+'kg':'')+(d.w&&d.r?' × ':'')+(d.r?r+(d.w?'':' reps'):''); }
function openChart(name){
  $("chartTitle").textContent=name;
  const data=hist[name]||[];
  drawExChart(data);
  const meta=$("chartMeta"), listEl=$("chartList"); meta.innerHTML=""; listEl.innerHTML="";
  if(data.length){
    const hasW=data.some(d=>parseFloat(d.w)>0);
    let best=data[0]; data.forEach(d=>{ const a=hasW?(parseFloat(d.w)||0):(parseFloat(d.r)||0); const bb=hasW?(parseFloat(best.w)||0):(parseFloat(best.r)||0); if(a>bb) best=d; });
    const latest=data[data.length-1];
    meta.innerHTML='<div class="cmeta">'
      +'<div><span class="k">Best</span><span class="v">'+(fmtSet(best)||'—')+'</span></div>'
      +'<div><span class="k">Latest</span><span class="v">'+(fmtSet(latest)||'—')+'</span></div>'
      +'<div><span class="k">Sessions</span><span class="v">'+data.length+'</span></div></div>';
    let rows=''; data.slice(-8).reverse().forEach(d=>{ rows+='<div class="crow"><span>'+esc(new Date(d.d).toLocaleDateString())+'</span><span>'+(fmtSet(d)||'—')+'</span></div>'; });
    listEl.innerHTML='<div class="ed-label">Recent sessions</div>'+rows;
  } else {
    listEl.innerHTML='<p style="color:var(--l3);font-size:var(--t-md);padding:8px 4px;">Log this lift and your top set will plot here over time.</p>';
  }
  openSheet("Chart");
}
function drawExChart(data){
  const c=$("exChart"), ctx=c.getContext("2d"), W=c.width, H=c.height, P=48, l3=_axisColor(); ctx.clearRect(0,0,W,H);
  if(!data.length){ ctx.fillStyle=l3; ctx.font=cfont(W,"label"); ctx.textAlign="center";
    ctx.fillText("No history yet",W/2,H/2); ctx.textAlign="left"; return; }
  const hasW=data.some(d=>parseFloat(d.w)>0);
  const vals=data.map(d=> hasW?(parseFloat(d.w)||0):(parseFloat(d.r)||0));
  const unit=hasW?"kg (top set)":"reps (top set)";
  let mn=Math.min(...vals), mx=Math.max(...vals);
  if(mn===mx){ mn-=1; mx+=1; } const pad=(mx-mn)*0.18; mn-=pad; mx+=pad; if(mn<0)mn=0;
  const n=data.length, gv=[0,1,2].map(g=>mn+(mx-mn)*(g/2));
  ctx.lineWidth=1; ctx.font=cfont(W,"tick");
  const L=Math.max(P, Math.ceil(Math.max(...gv.map(v=>ctx.measureText(Math.round(v)+'').width)))+20);   // tick column + gap
  const x=i=> n<2? W/2 : L+(i/(n-1))*(W-L-20);
  const T=Math.ceil(ctx.measureText(unit).actualBoundingBoxAscent)+40;   // the unit label gets its own band above the top gridline
  const y=v=> H-P-((v-mn)/(mx-mn))*(H-P-T);
  gv.forEach(v=>{ const yy=y(v);
    ctx.strokeStyle="rgba(84,84,88,.4)"; ctx.beginPath(); ctx.moveTo(L,yy); ctx.lineTo(W-20,yy); ctx.stroke();
    ctx.fillStyle=l3; ctx.fillText(Math.round(v)+'', 8, yy+6); });
  const ac=accentHex();
  const grad=ctx.createLinearGradient(0,0,0,H); grad.addColorStop(0,hexAlpha(ac,.35)); grad.addColorStop(1,hexAlpha(ac,0));
  ctx.beginPath(); data.forEach((d,i)=>{ const px=x(i),py=y(vals[i]); i?ctx.lineTo(px,py):ctx.moveTo(px,py); });
  ctx.lineTo(x(n-1),H-P); ctx.lineTo(x(0),H-P); ctx.closePath(); ctx.fillStyle=grad; ctx.fill();
  ctx.strokeStyle=ac; ctx.lineWidth=3.5; ctx.lineJoin="round"; ctx.beginPath();
  data.forEach((d,i)=>{ const px=x(i),py=y(vals[i]); i?ctx.lineTo(px,py):ctx.moveTo(px,py); }); ctx.stroke();
  ctx.fillStyle=ac; data.forEach((d,i)=>{ ctx.beginPath(); ctx.arc(x(i),y(vals[i]),5,0,7); ctx.fill(); });
  ctx.fillStyle=l3; ctx.textAlign="right"; ctx.fillText(unit,W-20,26);
  if(n>1){ const md=t=> new Date(t).toLocaleDateString(undefined,{month:"short",day:"numeric"});
    ctx.textAlign="left"; ctx.fillText(md(data[0].d), L, H-12); ctx.textAlign="right"; ctx.fillText(md(data[n-1].d), W-20, H-12); }
  ctx.textAlign="left";
}

// ===== strength progress — headline overall-strength trend + per-exercise drilldown (detail reuses openChart) =====
// Overall strength index: each lift's estimated-1RM (top reps/secs for bodyweight/timed) is indexed to its own
// baseline (=100) and averaged across lifts per week, carried forward between sessions — so lifts on different
// loads combine into one at-a-glance trend line. Capped to the last ~26 weeks.
function strengthIndex(){
  const WKMS=7*86400000; const perEx={}; let minWk=Infinity, maxWk=-Infinity;
  Object.keys(hist).forEach(name=>{
    const _hm=histModel(name);   // both reads must filter: filtering only the loop would mark a lift
    const loaded=_hm.some(e=>(parseFloat(e.w)||0)>0);   // "loaded" off entries we then don't plot
    const m=new Map();
    _hm.forEach(e=>{ const v=loaded?e1rm(e.w,e.r):(parseInt(e.r)||0);
      if(v>0){ const wk=Math.floor(e.d/WKMS); if(v>(m.get(wk)||0)) m.set(wk,v); if(wk<minWk)minWk=wk; if(wk>maxWk)maxWk=wk; } });
    if(m.size>=2) perEx[name]=m;                                // ≥2 points to contribute a trend
  });
  const names=Object.keys(perEx);
  if(!names.length || !isFinite(minWk) || maxWk===minWk) return null;
  const startWk=Math.max(minWk, maxWk-25);
  const base={}, last={}, firstWk={};
  names.forEach(n=>{ const m=perEx[n], keys=[...m.keys()].sort((a,b)=>a-b);
    firstWk[n]=Math.max(keys[0], startWk);
    let b=0; for(let w=minWk;w<=firstWk[n];w++) if(m.has(w)) b=m.get(w);   // carry the baseline to the window/entry
    if(b<=0) b=m.get(keys[0]);
    base[n]=b; last[n]=b; });
  const out=[];
  for(let w=startWk; w<=maxWk; w++){ let sum=0, cnt=0;
    names.forEach(n=>{ const m=perEx[n]; if(m.has(w)) last[n]=m.get(w);
      if(w>=firstWk[n] && base[n]>0){ sum+=last[n]/base[n]*100; cnt++; } });
    if(cnt) out.push({ wk:w, idx:sum/cnt, n:cnt }); }
  if(out.length<2) return null;
  // Forecast continuation: reuse the prediction ledger's latest pending per-exercise forecast (same mu/sd
  // the "Strength forecast" card shows), as an equal-weight growth factor on the current index — so the two
  // figures stay consistent. Untrained / unforecast lifts project flat (exp(0)=1). Band = 80% (LG.Z80).
  const fc={}; if(typeof ledger!=="undefined") ledger.forEach(r=>{ if(!r.retro && names.includes(r.x) && (!fc[r.x]||r.k>fc[r.x].k)) fc[r.x]=r; });
  let gm=0,gl=0,gh=0,hasF=false; names.forEach(n=>{ const r=fc[n]; const has=r&&r.st==="pending";
    const mu=has?r.mu:0, sd=has?r.sd:0; if(has) hasF=true;
    gm+=Math.exp(mu); gl+=Math.exp(mu-LG.Z80*sd); gh+=Math.exp(mu+LG.Z80*sd); });
  const lastIdx=out[out.length-1].idx, k=names.length;
  const forecast = hasF ? { weeks:LG.H, mid:lastIdx*gm/k, lo:lastIdx*gl/k, hi:lastIdx*gh/k, pct:(gm/k-1)*100 } : null;
  return { series:out, weeks:maxWk-startWk+1, lifts:names.length, forecast };
}
function drawStrengthIndex(si, prog){
  prog = prog==null ? 1 : prog;
  const c=$("exProgChart"); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  _figFns["exProgChart"]=(p)=>drawStrengthIndex(si,p);
  const s=si.series, vals=s.map(p=>p.idx), n=s.length, f=si.forecast;
  const l3=(getComputedStyle(document.documentElement).getPropertyValue('--l3')||'#888').trim();
  ctx.font=cfont(W,"tick");
  const ac=accentHex(), padL=Math.ceil(ctx.measureText("100").width)+12, padR=14, padT=12, padB=24;
  // y-domain includes the forecast band so the continuation fits
  let lo=Math.min(100,...vals), hi=Math.max(100,...vals);
  if(f){ lo=Math.min(lo,f.lo); hi=Math.max(hi,f.hi); }
  const sp=Math.max(2,hi-lo); lo-=sp*0.12; hi+=sp*0.12;
  // history spans weeks 0..n-1; forecast adds H week-slots on the right, so reserve that fraction
  const fw = f ? f.weeks : 0, span = (n-1) + fw;
  const x=u=> padL + (span<=0?0:(u/span)*(W-padL-padR));   // u in week-slots from the left edge
  const xNow=x(n-1);
  const y=v=> padT + (1-(v-lo)/(hi-lo))*(H-padT-padB);
  // baseline at 100 (each lift's start)
  ctx.strokeStyle=hexAlpha(l3,.5); ctx.setLineDash([4,4]); ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(padL,y(100)); ctx.lineTo(W-padR,y(100)); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle=l3; ctx.font=cfont(W,"tick"); ctx.textAlign="right"; ctx.fillText("100",padL-4,y(100)+4);
  ctx.save(); ctx.beginPath(); ctx.rect(0,0, padL+prog*(W-padL-padR)+6, H); ctx.clip();   // reveal the plotted line left→right; axes stay (+6 keeps the end dot whole)
  // linear trend line over the history
  const xs=s.map((_,i)=>i), sx=xs.reduce((a,b)=>a+b,0), sy=vals.reduce((a,b)=>a+b,0),
        sxy=xs.reduce((a,xx,i)=>a+xx*vals[i],0), sxx=xs.reduce((a,xx)=>a+xx*xx,0), den=n*sxx-sx*sx;
  if(den){ const m=(n*sxy-sx*sy)/den, b0=(sy-m*sx)/n;
    ctx.strokeStyle=hexAlpha(ac,.35); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(x(0),y(b0)); ctx.lineTo(x(n-1),y(b0+m*(n-1))); ctx.stroke(); }
  // history index line + fill
  const grad=ctx.createLinearGradient(0,padT,0,H-padB); grad.addColorStop(0,hexAlpha(ac,.28)); grad.addColorStop(1,hexAlpha(ac,0));
  ctx.beginPath(); s.forEach((p,i)=>{ const px=x(i),py=y(p.idx); i?ctx.lineTo(px,py):ctx.moveTo(px,py); });
  ctx.lineTo(xNow,H-padB); ctx.lineTo(x(0),H-padB); ctx.closePath(); ctx.fillStyle=grad; ctx.fill();
  ctx.strokeStyle=ac; ctx.lineWidth=3; ctx.lineJoin="round"; ctx.beginPath();
  s.forEach((p,i)=>{ const px=x(i),py=y(p.idx); i?ctx.lineTo(px,py):ctx.moveTo(px,py); }); ctx.stroke();
  // forecast continuation: 80% band fanning from "now" to +H weeks + dashed median line
  if(f){ const xEnd=x(span), yNow=y(vals[n-1]);
    ctx.beginPath(); ctx.moveTo(xNow,yNow); ctx.lineTo(xEnd,y(f.hi)); ctx.lineTo(xEnd,y(f.lo)); ctx.closePath();
    ctx.fillStyle=hexAlpha(ac,.16); ctx.fill();
    ctx.strokeStyle=ac; ctx.lineWidth=2.5; ctx.setLineDash([5,4]); ctx.beginPath(); ctx.moveTo(xNow,yNow); ctx.lineTo(xEnd,y(f.mid)); ctx.stroke(); ctx.setLineDash([]);
    ctx.beginPath(); ctx.arc(xEnd,y(f.mid),4,0,7); ctx.fillStyle=ac; ctx.fill();
    // faint "now" divider
    ctx.strokeStyle=hexAlpha(l3,.4); ctx.lineWidth=1; ctx.setLineDash([2,3]); ctx.beginPath(); ctx.moveTo(xNow,padT); ctx.lineTo(xNow,H-padB); ctx.stroke(); ctx.setLineDash([]);
  }
  ctx.beginPath(); ctx.arc(xNow,y(vals[n-1]),4.5,0,7); ctx.fillStyle=ac; ctx.fill();
  ctx.restore();
  ctx.fillStyle=l3; ctx.font=cfont(W,"label"); ctx.textAlign="left"; ctx.fillText(si.weeks+"w ago",padL,H-6);
  ctx.textAlign="right"; ctx.fillText(f?"+"+f.weeks+"w":"now", W-padR, H-6);
  if(f){ ctx.textAlign="center"; ctx.fillStyle=hexAlpha(l3,.9); ctx.fillText("now", xNow, H-6); }
}
// per-exercise rows for the collapsed detail — history %change vs start, that lift's 4-week forecast (from
// the ledger, so it matches the aggregate line), a sparkline; tap → full chart.
// ===== A2: the detector — pure and read-only over hist =====
// Works in LOG space so a jump up and the matching jump back down are symmetric, and compares e1RM
// rather than raw weight: hist stores only the top set, so 50kg x12 -> 65kg x5 on the same machine is a
// 30% raw jump and is exactly what the app's own "topped the range, add weight" cue asks for.
function _gymMedian(a){ if(!a.length) return 0; const b=a.slice().sort((x,y)=>x-y), m=b.length>>1;
  return b.length%2 ? b[m] : (b[m-1]+b[m])/2; }   // true median: a lower-median would make the detector sign-asymmetric

let _gymCache=null, _gymSig="";
function histSignature(){   // hist has one append and three wholesale reassignments, and no edit/delete path
  let n=0, mx=0; Object.keys(hist).forEach(k=>{ const h=hist[k]||[]; n+=h.length; h.forEach(e=>{ if(e.d>mx) mx=e.d; }); });
  return n+"|"+mx;
}
// Theil-Sen median slope: the outlier-resistant trend of a lift in log space. A rolling-window baseline
// cannot be used here — four weeks at another gym drag the window up, so the detector goes quiet mid-trip
// and then reads the trip HOME as yet another gym. Fitting the whole lift at once removes progression
// while staying immune to a minority block of foreign sessions.
function _gymTrend(pts){
  if(pts.length<4) return null;
  const sl=[];
  for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
    const dt=pts[j].d-pts[i].d; if(dt>0) sl.push((pts[j].lv-pts[i].lv)/dt);
  }
  if(!sl.length) return null;
  const slope=_gymMedian(sl), inter=_gymMedian(pts.map(q=>q.lv-slope*q.d));
  return {slope, inter};
}
function detectGyms(){
  const sig=histSignature(); if(_gymCache && _gymSig===sig) return _gymCache;
  // 1. residual of every entry against its own lift's trend
  const resid={};   // name -> Map(d -> residual in log space)
  Object.keys(hist).forEach(name=>{
    if(!gymVariable(name) && !gymControl(name)) return;
    const pts=[];
    (hist[name]||[]).forEach(e=>{ const r=parseInt(e.r)||0; if(r>0 && r<=20){ const v=e1rm(e.w,e.r); if(v>0) pts.push({d:e.d, lv:Math.log(v)}); } });
    if(pts.length < GYM_BASEN+1) return;
    pts.sort((a,b)=>a.d-b.d);
    const fit=_gymTrend(pts); if(!fit) return;
    const m=new Map(); pts.forEach(q=>m.set(q.d, q.lv-(fit.inter+fit.slope*q.d)));
    resid[name]=m;
  });
  // 2. cluster entries into sessions. he.d is stamped per exercise inside one save, so entries from one
  //    session are milliseconds apart and sessions hours apart. Day-keying would merge a morning home
  //    session with an evening hotel one — the exact case this exists for.
  const flat=[];
  Object.keys(hist).forEach(name=>(hist[name]||[]).forEach(e=>flat.push({name, d:e.d, tv:e.tv})));
  flat.sort((a,b)=>a.d-b.d);
  const sessions=[]; let cur=null;
  flat.forEach(x=>{ if(!cur || x.d-cur.end > GYM_SESSGAP){ cur={start:x.d, end:x.d, items:[]}; sessions.push(cur); }
    cur.end=x.d; cur.items.push(x); });
  // 3. quorum on the in-scope lifts, 4. veto on the controls
  const gate=Math.log(GYM_RATIO), flagged=[];
  sessions.forEach(sess=>{
    const varR=[], ctlR=[];
    sess.items.forEach(x=>{ const m=resid[x.name]; if(!m||!m.has(x.d)) return;
      (gymVariable(x.name)?varR:ctlR).push(m.get(x.d)); });
    const up=varR.filter(x=>x>=gate).length, dn=varR.filter(x=>x<=-gate).length;
    const tv=sess.items.some(x=>x.tv);
    const quorum = tv ? 1 : GYM_QUORUM;   // a travel-tagged session is already known to be somewhere else
    let dir=0; if(up>=quorum && up>dn) dir=1; else if(dn>=quorum && dn>up) dir=-1;
    if(!dir) return;
    // the free weights are the control: a barbell weighs the same everywhere, so if THEY moved too this
    // is a deload or a bad day, not a different building. No controls at all → leave it unclassified.
    if(!ctlR.length) return;
    if(Math.abs(_gymMedian(ctlR)) >= GYM_CTRL) return;
    flagged.push({start:sess.start, end:sess.end, dir, mag:Math.abs(_gymMedian(varR.filter(x=>dir>0?x>0:x<0))), tv});
  });
  // 5. group flagged sessions by direction and rough size, so repeat visits to one second gym land in a
  //    single cluster rather than "Gym 2, Gym 3, Gym 4"
  const clusters=[];
  flagged.forEach(f=>{
    const hit=clusters.find(c=>c.dir===f.dir && Math.abs(c.mag-f.mag) < 0.35);
    if(hit){ hit.sessions.push(f); hit.mag=(hit.mag*(hit.sessions.length-1)+f.mag)/hit.sessions.length; }
    else clusters.push({dir:f.dir, mag:f.mag, tv:f.tv, sessions:[f]});
  });
  clusters.forEach((c,i)=>{ c.id=i+1; c.pct=Math.round((Math.exp(c.mag)-1)*100);
    c.name = c.tv ? "Travel gym" : ("Gym "+(i+2)); });
  _gymSig=sig; _gymCache={clusters, flagged, sessions:sessions.length};
  return _gymCache;
}
// which cluster a timestamp belongs to (0 = the primary gym)
function gymAt(ts){
  const r=detectGyms();
  for(const c of r.clusters) for(const sess of c.sessions)
    if(ts>=sess.start-1000 && ts<=sess.end+1000) return c.id;
  return 0;
}
// ===== A4: the entries comparable for progress modelling =====
// All-or-nothing per lift: never applied when filtering would push a lift below the sample gates in
// exerciseProgress or strengthIndex — a lift must not DISAPPEAR from the By-exercise list because we
// split its gyms.
function histModel(name){
  const h=hist[name]||[];
  if(!settings.gymSplit || !gymVariable(name)) return h;   // free weights read the same everywhere
  const keep=h.filter(e=>!gymOf(e) && !gymAt(e.d));
  return (keep.length>=3 && (h.length-keep.length)>=2) ? keep : h;
}
// ===== A6: propose, then confirm. The ask was for automatic DETECTION, not automatic relabelling of
// logged progress — so the split stays off until the lifter says yes, and nothing logged ever changes.
function renderGymCard(){
  const box=$("gymCard"); if(!box) return;
  if(settings.gymSplit || settings.gymDismissed){ box.style.display="none"; box.innerHTML=""; return; }
  let r; try{ r=detectGyms(); }catch(e){ box.style.display="none"; return; }
  const cl=(r&&r.clusters)||[];
  if(!cl.length){ box.style.display="none"; box.innerHTML=""; return; }
  const nSess=cl.reduce((a,c)=>a+c.sessions.length,0), top=cl[0];
  const when=cl.flatMap(c=>c.sessions).map(x=>new Date(x.start).toLocaleDateString(undefined,{month:"long"}));
  const months=[...new Set(when)];
  const monthTxt = months.length===1 ? months[0] : months.slice(0,-1).join(", ")+" and "+months[months.length-1];
  box.style.display="";
  box.innerHTML='<div class="insight v-more"><div class="ititle">These numbers look like a different gym.</div>'
    +'<div class="itext">'+nSess+' session'+(nSess>1?'s':'')+' in '+esc(monthTxt)+' ran about '+Math.abs(top.pct)
    +'% '+(top.dir>0?'heavier':'lighter')+' on machines and cables, while your free-weight lifts stayed put. '
    +'If that was a different gym, I\'ll keep its numbers out of your strength trend so the comparison is '
    +'like-for-like. <b>Your logged sets don\'t change.</b></div>'
    +'<div class="row" style="margin-top:12px; gap:8px;">'
    +'<button class="btn sm" id="gymYes">Yes, different gym</button>'
    +'<button class="btn tinted sm" id="gymNo">Not now</button></div></div>';
  $("gymYes").onclick=async()=>{ settings.gymSplit=1;
    settings.gyms=cl.map(c=>({id:c.id, name:c.name, pct:c.pct, anchors:c.sessions.map(x=>x.start)}));
    await sset("settings",settings); renderDash();
    toast("Got it — those sessions are out of your strength trend now."); };
  $("gymNo").onclick=async()=>{ settings.gymDismissed=1; await sset("settings",settings); renderGymCard(); };
}
function exerciseProgress(){
  const fc={}; if(typeof ledger!=="undefined") ledger.forEach(r=>{ if(!r.retro && (!fc[r.x]||r.k>fc[r.x].k)) fc[r.x]=r; });
  const out=[];
  Object.keys(hist).forEach(name=>{
    const es=histModel(name).slice().sort((a,b)=>a.d-b.d);
    if(es.length<3) return;                                   // need a little history to call a trend
    const loaded=es.some(e=>(parseFloat(e.w)||0)>0);          // weighted lift → e1RM; else bodyweight/timed → reps/secs
    const pts=[]; es.forEach(e=>{ const v=loaded?e1rm(e.w,e.r):(parseInt(e.r)||0); if(v>0) pts.push({d:e.d, v}); });
    if(pts.length<3) return;
    if((pts[pts.length-1].d - pts[0].d) < 12*86400000) return;   // need ~2 weeks of separation for a trend
    const series=pts.map(p=>p.v), k=Math.min(3, Math.floor(series.length/2));
    const base=Math.max(...series.slice(0,k)), recent=Math.max(...series.slice(-k));
    if(!(base>0)) return;
    const pct=(recent/base-1)*100, state = pct>=2 ? "grow" : pct<=-2 ? "shrink" : "hold";
    const fr=fc[name], fpct=(fr&&fr.st==="pending") ? (Math.exp(fr.mu)-1)*100 : null;
    out.push({ name, series, pct, state, fpct, last:pts[pts.length-1].d, g:muscleFor(name)[0]||"Other" });
  });
  return out.sort((a,b)=> b.last-a.last);                     // most recently trained first
}
function sparkline(series, col){
  const n=series.length; if(n<2) return "";
  const mn=Math.min(...series), mx=Math.max(...series), sp=(mx-mn)||1, W=64, H=20;
  const pts=series.map((v,i)=>(i/(n-1)*W).toFixed(1)+","+(H-((v-mn)/sp)*H).toFixed(1)).join(" ");
  return '<svg class="spark" viewBox="0 0 '+W+' '+H+'" width="'+W+'" height="'+H+'" preserveAspectRatio="none" aria-hidden="true">'
    +'<polyline points="'+pts+'" fill="none" stroke="'+col+'" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>';
}
if($("exProgList")) $("exProgList").addEventListener("click", e=>{ const b=e.target.closest(".exprow"); if(b) openChart(b.dataset.ex); });

// ================= other training (external + activities) =================
const MUSCLE_TARGETS={
  Push:["Chest","Front Delts","Side Delts","Triceps"], Pull:["Back","Rear Delts","Biceps"],
  Upper:["Chest","Back","Front Delts","Side Delts","Rear Delts","Biceps","Triceps"],
  Lower:["Quads","Hamstrings","Glutes","Calves"],
  "Full body":["Chest","Back","Front Delts","Side Delts","Rear Delts","Biceps","Triceps","Quads","Hamstrings","Glutes","Calves","Core"],
  Chest:["Chest"], Back:["Back"], Shoulders:["Front Delts","Side Delts","Rear Delts"], Arms:["Biceps","Triceps"],
  Legs:["Quads","Hamstrings","Glutes","Calves"], Core:["Core"] };
const INTENS={ low:0.75, med:1.0, high:1.3 }, INTLBL={ low:"low", med:"medium", high:"high" };
// cat: "cardio" (steady endurance — full weekly-minutes credit, pace/zone trends) vs "activity" (mixed sport).
// cf  = cardio fraction: how much a minute counts toward the weekly cardio goal (how aerobic it is).
// mf  = muscle fraction: how much of its estimated load feeds the muscle-balance radar (strength-y sports only).
// Each sport's numbers are evidence-grounded (see evidence.json + EVIDENCE.md):
//   • cf / rate (how aerobic) ← MET from the Compendium of Physical Activities (`compendium24`).
//     rate ≈ MET/12 (capped ~0.95) — a per-minute metabolic-load proxy, in the same band as the legacy values.
//   • muscles / mf (which muscles, how much) ← per-sport EMG / activation studies.
//   • src:{met,emg} keys resolve to those studies; the Cardio sheet shows them under the picked sport.
const ACTIVITIES=[
  // — Cardio (steady endurance — full weekly-minutes credit) —
  {n:"Running",     cat:"cardio",   cf:1,    muscles:["Quads","Hamstrings","Calves","Glutes"], run:true, k:7, met:9.8, src:{met:"compendium24", emg:"runEMG"}},
  {n:"Cycling",     cat:"cardio",   cf:1,    muscles:["Quads","Glutes","Calves"], rate:0.5, met:7.5, src:{met:"compendium24", emg:"cycleEMG"}},
  {n:"Swimming",    cat:"cardio",   cf:1,    muscles:["Back","Shoulders","Chest","Core"], rate:0.8, met:8.3, src:{met:"compendium24", emg:"swimEMG"}},
  {n:"Rowing",      cat:"cardio",   cf:1,    muscles:["Back","Quads","Glutes","Biceps"], rate:0.8, met:7.0, src:{met:"compendium24", emg:"rowEMG"}},
  {n:"Hiking",      cat:"cardio",   cf:1,    muscles:["Quads","Glutes","Calves"], rate:0.45, met:6.0, src:{met:"compendium24", emg:"hikeEMG"}},
  {n:"Walking",     cat:"cardio",   cf:1,    muscles:["Quads","Glutes","Hamstrings","Calves"], run:true, k:6, met:5.0, src:{met:"compendium24", emg:"walkSyn"}},
  {n:"Elliptical",  cat:"cardio",   cf:1,    muscles:["Quads","Hamstrings","Glutes"], rate:0.4, met:5.0, src:{met:"compendium24", emg:"ellipticalEMG"}},
  {n:"Stair Climber",cat:"cardio",  cf:1,    muscles:["Glutes","Quads","Hamstrings","Calves"], rate:0.8, met:9.3, src:{met:"compendium24", emg:"stairEMG"}},
  {n:"Jump Rope",   cat:"cardio",   cf:0.9,  muscles:["Calves","Quads"], rate:0.95, met:11.8, src:{met:"compendium24", emg:"jumpropeEMG"}},
  {n:"Skating",     cat:"cardio",   cf:1,    muscles:["Glutes","Quads"], rate:0.6, met:7.3, src:{met:"compendium24", emg:"skatingEMG"}},
  {n:"XC Skiing",   cat:"cardio",   cf:1,    muscles:["Back","Triceps","Core","Chest"], rate:0.7, met:8.5, src:{met:"compendium24", emg:"xcSkiEMG"}},
  // — Activity (mixed sport): partial cardio credit by how aerobic it is; strength-y ones (mf) add a little to the radar —
  {n:"Boxing",      cat:"activity", cf:0.8,  mf:0.15, muscles:["Shoulders","Core","Back"], rate:0.9, met:9.0, src:{met:"compendium24", emg:"boxEMG"}},
  {n:"MMA",         cat:"activity", cf:0.8,  mf:0.2,  muscles:["Shoulders","Core","Back","Quads"], rate:1.0, met:10.3, src:{met:"compendium24", emg:"mmaEMG"}},
  {n:"Grappling",   cat:"activity", cf:0.7,  mf:0.2,  muscles:["Biceps","Back","Core"], rate:0.5, met:6.0, src:{met:"compendium24", emg:"judoEMG"}},
  {n:"Football",    cat:"activity", cf:0.8,  muscles:["Quads","Hamstrings","Calves"], rate:0.6, met:7.0, src:{met:"compendium24", emg:"soccerEMG"}},
  {n:"Basketball",  cat:"activity", cf:0.7,  muscles:["Quads","Calves","Shoulders"], rate:0.6, met:6.5, src:{met:"compendium24", emg:"bballEMG"}},
  {n:"Tennis",      cat:"activity", cf:0.6,  muscles:["Shoulders","Quads","Core"], rate:0.6, met:7.3, src:{met:"compendium24", emg:"tennisEMG"}},
  {n:"Padel",       cat:"activity", cf:0.7,  muscles:["Quads","Glutes","Calves","Shoulders"], rate:0.5, met:6.0, src:{met:"padelDemand", emg:"padelDemand"}},
  {n:"Squash",      cat:"activity", cf:0.85, muscles:["Quads","Glutes","Calves","Core"], rate:0.8, met:9.5, src:{met:"compendium24", emg:"racketDemand"}},
  {n:"Badminton",   cat:"activity", cf:0.7,  muscles:["Quads","Glutes","Calves","Hamstrings"], rate:0.6, met:7.0, src:{met:"compendium24", emg:"badmintonEMG"}},
  {n:"Volleyball",  cat:"activity", cf:0.55, muscles:["Quads","Glutes","Calves","Shoulders"], rate:0.5, met:6.0, src:{met:"compendium24", emg:"volleyballEMG"}},
  {n:"Table Tennis",cat:"activity", cf:0.45, muscles:["Quads","Calves","Core"], rate:0.35, met:4.0, src:{met:"compendium24", emg:"ttEMG"}},
  {n:"CrossFit",    cat:"activity", cf:0.8,  mf:0.35, muscles:["Quads","Glutes","Back","Core"], rate:0.8, met:9.5, src:{met:"crossfitMet", emg:"kbEMG"}},
  {n:"Kettlebell",  cat:"activity", cf:0.6,  mf:0.4,  muscles:["Glutes","Hamstrings","Back","Core"], rate:0.8, met:9.8, src:{met:"kbVO2", emg:"kbEMG"}},
  {n:"Climbing",    cat:"activity", cf:0.3,  mf:0.4, muscles:["Back","Biceps","Core"], rate:0.7, met:8.0, src:{met:"compendium24", emg:"climbEMG"}},
  {n:"Bouldering",  cat:"activity", cf:0.25, mf:0.4, muscles:["Back","Biceps","Core"], rate:0.6, met:7.0, src:{met:"compendium24", emg:"climbEMG"}},
  {n:"Skiing",      cat:"activity", cf:0.5,  mf:0.15, muscles:["Quads","Core","Glutes","Hamstrings"], rate:0.5, met:6.3, src:{met:"compendium24", emg:"alpineEMG"}},
  {n:"Surfing",     cat:"activity", cf:0.5,  mf:0.1,  muscles:["Back","Shoulders","Chest","Core"], rate:0.4, met:5.0, src:{met:"compendium24", emg:"surfEMG"}},
  {n:"Kayak / SUP", cat:"activity", cf:0.85, mf:0.12, muscles:["Back","Core","Shoulders"], rate:0.45, met:5.5, src:{met:"compendium24", emg:"kayakEMG"}},
  {n:"Dancing",     cat:"activity", cf:0.7,  muscles:["Quads","Hamstrings","Calves","Glutes"], rate:0.4, met:4.5, src:{met:"compendium24", emg:"danceEMG"}},
  {n:"Golf",        cat:"activity", cf:0.4,  muscles:["Core","Back","Glutes"], rate:0.35, met:4.3, src:{met:"compendium24", emg:"golfEMG"}},
  {n:"Pilates",     cat:"activity", cf:0.15, mf:0.15, muscles:["Core"], rate:0.3, met:3.7, src:{met:"pilatesMet", emg:"pilatesEMG"}},
  {n:"Yoga",        cat:"activity", cf:0.15, mf:0.1, muscles:["Core"], rate:0.3, met:3.0, src:{met:"compendium24", emg:"yogaEMG"}}
];
function actsInCat(cat){ return ACTIVITIES.filter(a=>(a.cat||"cardio")===cat); }
function cardioFracOf(e){ if(e.cf!=null) return e.cf; const a=actByName(e.name); return a&&a.cf!=null?a.cf:1; }
let otherMuscleSel=null;
function meanTargetVol(muscles){
  const set=new Set(muscles), byDay={};
  Object.keys(hist).forEach(n=>{ if(!set.has(muscleFor(n)[0])) return; (hist[n]||[]).forEach(e=>{ const d=new Date(e.d).toDateString(); byDay[d]=(byDay[d]||0)+effVolume(n,e); }); });
  const vals=Object.values(byDay).filter(v=>v>0);
  if(vals.length) return vals.reduce((a,b)=>a+b,0)/vals.length;
  return 2200*(0.7+0.45*muscles.length);   // no history yet — a labelled estimate
}
function actByName(n){ return ACTIVITIES.find(a=>a.n===n)||ACTIVITIES[0]; }
function parsePace(v){ v=(v||"").trim(); if(!v) return 0; if(v.indexOf(":")>=0){ const a=v.split(":"); return (parseInt(a[0])||0)+(parseInt(a[1])||0)/60; } return parseFloat(v)||0; }
function fmtPace(p){ if(!p||!isFinite(p)) return ""; const m=Math.floor(p), s=Math.round((p-m)*60); return (s===60?(m+1):m)+":"+((s%60)<10?"0":"")+(s%60); }
// ---- "Other training" sheet: now resistance-work-done-elsewhere only (cardio moved to the Workout tab) ----
function curInt(){ const seg=document.querySelector('.otherint[data-int="m"] .s.active'); return seg?seg.dataset.i:"med"; }
function updateOtherPreview(){
  let vol=0, ok=false;
  if(otherMuscleSel){ vol=Math.round(meanTargetVol(MUSCLE_TARGETS[otherMuscleSel])*INTENS[curInt()]); ok=true; }
  $("otherPrev").innerHTML = ok ? '≈ <b>'+vol.toLocaleString()+'</b> kg estimated volume' : '<span style="color:var(--l3)">Pick a muscle group to see the estimate.</span>';
  $("otherLog").classList.toggle("dim", !ok);
  return {vol, ok};
}
function renderOtherChips(){
  const mw=$("otherMuscleChips"); mw.innerHTML="";
  Object.keys(MUSCLE_TARGETS).forEach(k=>{ const c=document.createElement("button"); c.className="chip"+(otherMuscleSel===k?" on":"");
    const col=MCOLOR[MUSCLE_TARGETS[k][0]]||"#888";
    c.innerHTML='<span class="cdot" style="background:'+col+'"></span>'+k;
    c.onclick=()=>{ otherMuscleSel=k; renderOtherChips(); updateOtherPreview(); }; mw.appendChild(c); });
}
function renderOtherLog(){
  const wrap=$("otherLogList"); wrap.innerHTML="";
  const items=extlog.filter(e=>e.kind==="muscle").sort((a,b)=>b.d-a.d).slice(0,8);
  $("otherLogLabel").style.display=items.length?"":"none";
  items.forEach(e=>{
    const row=document.createElement("div"); row.className="planrow exrow";
    const days=Math.round((Date.now()-e.d)/86400000), when=days<=0?"today":days+"d ago";
    const sub=(INTLBL[e.intensity]||"")+" · "+when;
    row.innerHTML='<div class="info"><div class="nm">'+esc(e.name)+'</div><div class="meta">'+esc(sub)+'</div></div>'
      +'<span class="scoretag" style="color:var(--l2)">'+e.vol.toLocaleString()+' kg</span>'
      +'<a class="lnkic rem" title="Delete">'+ICON.trash+'</a>';
    row.querySelector(".rem").onclick=()=>{ confirmAsk("Delete this "+e.name+" entry?","Delete",()=>{ tombAdd(e.d); sset("settings",settings); extlog=extlog.filter(x=>x!==e); sset("extlog",extlog); renderOtherLog(); renderDash(); toast("Deleted"); }); };
    wrap.appendChild(row);
  });
}
function openOther(){ renderOtherChips(); updateOtherPreview(); renderOtherLog(); openSheet("Other"); }
$("meOther").onclick=()=>{ openOther(); };
$("otherClose").onclick=()=>closeSheet("Other");
$("scrimOther").onclick=()=>closeSheet("Other");
document.querySelectorAll(".otherint .s").forEach(s=> s.onclick=()=>{ s.parentElement.querySelectorAll(".s").forEach(x=>x.classList.toggle("active",x===s)); updateOtherPreview(); });
$("otherLog").onclick=()=>{
  const pv=updateOtherPreview(); if(!pv.ok){ toast("Pick a muscle group and an intensity first"); return; }
  const entry={d:Date.now(), kind:"muscle", name:otherMuscleSel, intensity:curInt(), vol:pv.vol, muscles:MUSCLE_TARGETS[otherMuscleSel].slice()};
  extlog.push(entry); sset("extlog",extlog);
  const sr=checkStars(), sm=starMoment(sr), fresh=checkAchievements(), cp=consistPost(sr); sset("settings",settings);
  renderOtherLog(); updateOtherPreview(); renderDash(); if($("sheetMus").classList.contains("show")) renderMuscles();
  // one toast: a star or an unlock stands in for "Logged"; a completed figure opens the Star card (a plain week star opens nothing)
  celebrateMoment(Object.assign({ achIds:fresh, shared:cp.star, logged:"Logged "+entry.name+" — "+entry.vol.toLocaleString()+" kg",
    lead:[$("otherLogList").firstElementChild, $("otherLog")] }, sm));   // the new entry's row bursts, where you just tapped
  logStarShare(sr); ringsSharedToast(cp);
};

// ================= cardio (Workout tab → Cardio) =================
// A SEPARATE training axis: logged by minutes + effort zone, never folded into the muscle-volume radar
// (see muscleVolume — kind:"cardio" is skipped there). A kg "load" is still estimated so lifetime totals and
// the achievements keep a rough sense of the work done, but it carries no hypertrophy meaning.
const CZONES=[
  {z:"z1", lbl:"Easy",   sub:"recovery, can chat",    f:0.7, w:0.7},
  {z:"z2", lbl:"Steady", sub:"aerobic base",          f:0.9, w:1.0},
  {z:"z3", lbl:"Tempo",  sub:"comfortably hard",      f:1.1, w:1.3},
  {z:"z4", lbl:"Hard",   sub:"threshold, breathless", f:1.3, w:1.7},
  {z:"z5", lbl:"Max",    sub:"all-out intervals",     f:1.5, w:2.2}
];
let trainMode="strength", cdActSel="Running", cdZone="z2";
let cdRoute=null;   // an imported GPX route awaiting logging: {name, pts, dist, ascent, mins}
let cdCat="cardio"; // which activity category the cardio panel shows: "cardio" | "activity"
function cdAct(){ return actByName(cdActSel); }
function cdZoneDef(){ return CZONES.find(z=>z.z===cdZone)||CZONES[1]; }
function cardioVol(){ const act=cdAct(), bw=bwNow(), f=cdZoneDef().f;
  if(act.run){ const d=parseFloat($("cdDist").value)||0; return Math.round(bw*d*(act.k||7)*f); }
  const m=parseFloat($("cdMin").value)||0; return Math.round(bw*m*(act.rate||0.5)*f); }
function cardioMins(){ const act=cdAct();
  if(act.run){ let t=parseFloat($("cdTime").value)||0; if(!t){ const d=parseFloat($("cdDist").value)||0, p=parsePace($("cdPace").value); if(d&&p) t=d*p; } return Math.round(t); }
  return Math.round(parseFloat($("cdMin").value)||0); }
function cdRunCalc(){
  let d=parseFloat($("cdDist").value)||0, t=parseFloat($("cdTime").value)||0, p=parsePace($("cdPace").value);
  const hasD=d>0, hasT=t>0, hasP=p>0;
  if(hasD&&hasT&&!hasP) $("cdPace").value=fmtPace(t/d);
  else if(hasD&&hasP&&!hasT) $("cdTime").value=round1(d*p);
  else if(hasT&&hasP&&!hasD) $("cdDist").value=round1(t/p);
  updateCardioPreview();
}
function updateCardioPreview(){
  const act=cdAct(), mins=cardioMins(), z=cdZoneDef();
  const dist = cdRoute ? cdRoute.dist : (act.run ? (parseFloat($("cdDist").value)||0) : 0);
  const ok = cdRoute ? cdRoute.dist>0 : (act.run ? (dist>0 || mins>0) : mins>0);
  let html;
  if(ok){ const bits=[]; if(mins) bits.push('<b>'+mins+' min</b>'); if(dist) bits.push('<b>'+round1(dist)+' km</b>');
    bits.push(z.lbl+' · Z'+z.z.slice(1)); html=bits.join(' · ');
  } else html='<span style="color:var(--l3)">Add a duration'+(act.run?' or distance':'')+', or import a route, to log it.</span>';
  $("cdPrev").innerHTML=html;
  $("cdLog").classList.toggle("dim", !ok);
  return {ok, mins, dist};
}
// "Why these numbers" for the picked sport: the MET source (how aerobic) and, where we have it, the EMG
// source (which muscles). Both link to the DOI. Sports without a `src` (e.g. Boxing) simply show nothing.
function renderActCite(){
  const el=$("cdCite"); if(!el) return;
  const act=cdAct(), src=act.src||{};
  const link=(k,label)=>{ const u=studyUrl(k), c=shortCite(k); if(!c) return "";
    const inner=esc(label)+' <span style="opacity:.7">'+esc(c)+'</span>';
    return u ? '<a class="srclink" href="'+u+'" target="_blank" rel="noopener">'+inner+' <span class="srcarrow">↗</span></a>' : inner; };
  const parts=[];
  if(src.met) parts.push('<div>'+(act.met?'<b>~'+act.met+' MET</b> · ':'')+link(src.met,"cardio cost:")+'</div>');
  if(src.emg && src.emg!==src.met) parts.push('<div>'+link(src.emg,"muscles:")+'</div>');
  if(!parts.length){ el.style.display="none"; el.innerHTML=""; return; }
  el.innerHTML='<div class="actcitehd">Why these numbers</div>'+parts.join("");
  el.style.display="";
}
function renderCardioChips(){
  const aw=$("cdActChips"); aw.innerHTML="";
  actsInCat(cdCat).forEach(a=>{ const c=document.createElement("button"); c.className="chip"+(cdActSel===a.n?" on":""); c.textContent=a.n;
    c.onclick=()=>{ cdActSel=a.n; renderCardioChips(); $("cdRun").style.display=a.run?"":"none"; $("cdDur").style.display=a.run?"none":""; updateCardioPreview(); renderActCite(); }; aw.appendChild(c); });
  const act=cdAct(); $("cdRun").style.display=act.run?"":"none"; $("cdDur").style.display=act.run?"none":"";
  // GPX routes only make sense for distance cardio; intro copy reflects the category
  const imp=$("cdImport"); if(imp) imp.style.display = cdCat==="cardio" ? "" : "none";
  if(cdCat!=="cardio" && cdRoute) clearCardioRoute();
  const intro=$("cdIntro"); if(intro) intro.innerHTML = cdCat==="cardio"
    ? "Log cardio &amp; conditioning. Tracked on its own — by minutes and effort zone — separate from your muscle-volume balance."
    : "Log a sport or activity. It counts toward your weekly cardio by how aerobic it is; the strength-y ones (climbing, martial arts) also add a little to your muscle balance.";
  const zw=$("cdZoneChips"); zw.innerHTML="";
  CZONES.forEach(z=>{ const c=document.createElement("button"); c.className="chip"+(cdZone===z.z?" on":"");
    c.innerHTML=z.lbl+' <small class="chipsub">'+z.sub+'</small>';
    c.onclick=()=>{ cdZone=z.z; renderCardioChips(); updateCardioPreview(); }; zw.appendChild(c); });
}
function renderCardioLog(){
  const wrap=$("cdLogList"); if(!wrap) return; wrap.innerHTML="";
  const items=extlog.filter(e=>e.kind==="cardio"||e.kind==="activity").sort((a,b)=>b.d-a.d).slice(0,8);
  $("cdLogLabel").style.display=items.length?"":"none";
  items.forEach(e=>{
    const row=document.createElement("div"); row.className="planrow exrow";
    const days=Math.round((Date.now()-e.d)/86400000), when=days<=0?"today":days+"d ago";
    const z=CZONES.find(z=>z.z===e.zone);
    const parts=[]; if(e.dist) parts.push(e.dist+"km"); if(e.ascent) parts.push("↑"+e.ascent+"m"); if(e.mins) parts.push(e.mins+"min");
    parts.push(z?z.lbl:(INTLBL[e.intensity]||"")); parts.push(when);
    const thumb = e.route ? '<canvas class="rthumb" width="120" height="76" style="width:44px;height:28px;flex:0 0 auto;margin-right:10px;border-radius:5px;background:var(--sep);"></canvas>' : '';
    const title = esc(e.routeName || e.name) + (e.routeName ? ' <span style="color:var(--l3);font-weight:400;">· '+esc(e.name)+'</span>' : '');
    row.innerHTML=thumb+'<div class="info"><div class="nm">'+title+'</div><div class="meta">'+esc(parts.filter(Boolean).join(" · "))+'</div></div>'
      +'<a class="lnkic rem" title="Delete">'+ICON.trash+'</a>';
    if(e.route){ const cv=row.querySelector(".rthumb"); if(cv) drawRoutePolyline(cv, e.route); }
    row.querySelector(".rem").onclick=()=>{ confirmAsk("Delete this "+(e.routeName||e.name)+" entry?","Delete",()=>{ tombAdd(e.d); sset("settings",settings); extlog=extlog.filter(x=>x!==e); sset("extlog",extlog); renderCardioLog(); renderDash(); toast("Deleted"); }); };
    wrap.appendChild(row);
  });
}
function renderCardio(){ renderCardioChips(); updateCardioPreview(); renderActCite(); renderCardioLog(); }
const TRAIN_MODES=["strength","cardio","activity"], TRAIN_LBL={strength:"Strength", cardio:"Cardio", activity:"Activity"};
function setTrainMode(m){ trainMode=m;
  const b=$("trainModeBtn"); if(b){ b.classList.toggle("cardio", m==="cardio"); b.classList.toggle("activity", m==="activity"); }
  const l=$("trainModeLbl"); if(l) l.textContent = TRAIN_LBL[m] || "Strength";
  const strength = m==="strength";
  $("strengthWrap").style.display = strength ? "" : "none";
  $("cardioPanel").style.display  = strength ? "none" : "";
  if(!strength){ cdCat = (m==="activity") ? "activity" : "cardio";
    if(!actsInCat(cdCat).some(a=>a.n===cdActSel)) cdActSel=actsInCat(cdCat)[0].n;   // keep the picked activity valid for the category
    renderCardio();
  }
}
// one compact button, tap cycles Strength → Cardio → Activity → Strength
if($("trainModeBtn")) $("trainModeBtn").onclick=()=>{ const i=TRAIN_MODES.indexOf(trainMode); setTrainMode(TRAIN_MODES[(i+1)%TRAIN_MODES.length]); };
["cdDist","cdTime","cdPace"].forEach(id=> $(id).addEventListener("input", cdRunCalc));
$("cdMin").addEventListener("input", updateCardioPreview);
$("cdLog").onclick=()=>{
  const pv=updateCardioPreview(); if(!pv.ok){ toast("Add a duration or distance, or import a route, first"); return; }
  const act=cdAct(); let mins=pv.mins; const dist = cdRoute ? cdRoute.dist : pv.dist;
  if(cdRoute && !mins) mins=cdRoute.mins||0;
  const entry={ d:Date.now(), kind:"cardio", name:act.n, cat:act.cat||"cardio", zone:cdZone, mins, vol:cardioVol(), muscles:act.muscles.slice(), src: cdRoute?"gpx":"manual" };
  entry.cf = act.cf!=null ? act.cf : 1;                       // cardio-credit fraction (frozen at log time)
  if(act.mf && entry.vol) entry.mvol = Math.round(entry.vol*act.mf);   // partial muscle-volume for strength-y activities (feeds the radar)
  if(dist){ entry.dist=round1(dist); if(mins) entry.pace=round1(mins/dist); }
  if(cdRoute){ if(cdRoute.ascent) entry.ascent=cdRoute.ascent; entry.route=decimatePts(cdRoute.pts,80); if(cdRoute.name) entry.routeName=cdRoute.name; }
  const hr=parseFloat($("cdHr").value)||0; if(hr) entry.avgHr=Math.round(hr);
  const rpe=parseFloat($("cdRpe").value)||0; if(rpe) entry.rpe=Math.min(10,Math.max(1,Math.round(rpe)));
  extlog.push(entry); sset("extlog",extlog);
  const sr=checkStars(), sm=starMoment(sr), fresh=checkAchievements(), cp=consistPost(sr); sset("settings",settings);
  ["cdDist","cdTime","cdPace","cdMin","cdHr","cdRpe"].forEach(id=>{ $(id).value=""; });
  clearCardioRoute();
  renderCardioLog(); updateCardioPreview(); renderDash();
  cloudTouchWorkout();
  // one toast: a star or an unlock stands in for "Logged"; a completed figure opens the Star card (a plain week star opens nothing)
  celebrateMoment(Object.assign({ achIds:fresh, shared:cp.star, logged:"Logged "+(entry.routeName||entry.name)+(mins?" — "+mins+" min":"")+(dist?" · "+round1(dist)+" km":""),
    lead:[$("cdLogList") && $("cdLogList").firstElementChild, $("cdLog")] }, sm));   // the new entry's row bursts, where you just tapped
  logStarShare(sr); ringsSharedToast(cp);
};

// ===== GPX route import — free, fully client-side. Works with exports from Strava, Komoot, Garmin,
// Maeander, etc. Parses the track, measures distance/ascent locally, and prefills a cardio log. =====
function _gpxNum(s){ const n=parseFloat(s); return isFinite(n)?n:null; }
function round5(x){ return Math.round(x*1e5)/1e5; }
function haversineKm(a,b){ const R=6371, dLat=(b.lat-a.lat)*Math.PI/180, dLon=(b.lon-a.lon)*Math.PI/180,
  la=a.lat*Math.PI/180, lb=b.lat*Math.PI/180;
  const h=Math.sin(dLat/2)**2 + Math.cos(la)*Math.cos(lb)*Math.sin(dLon/2)**2;
  return 2*R*Math.asin(Math.min(1,Math.sqrt(h))); }
function parseGpx(text){
  let doc; try{ doc=new DOMParser().parseFromString(text,"application/xml"); }catch(e){ return null; }
  if(!doc || doc.getElementsByTagName("parsererror").length) return null;
  let nodes=[].slice.call(doc.getElementsByTagName("trkpt"));
  if(!nodes.length) nodes=[].slice.call(doc.getElementsByTagName("rtept"));
  if(!nodes.length) nodes=[].slice.call(doc.getElementsByTagName("wpt"));
  const pts=[]; nodes.forEach(n=>{ const lat=_gpxNum(n.getAttribute("lat")), lon=_gpxNum(n.getAttribute("lon")); if(lat==null||lon==null) return;
    const eleEl=n.getElementsByTagName("ele")[0], tEl=n.getElementsByTagName("time")[0];
    pts.push({lat, lon, ele: eleEl?_gpxNum(eleEl.textContent):null, t: tEl?Date.parse(tEl.textContent):null}); });
  if(pts.length<2) return null;
  let name=""; const nm=doc.getElementsByTagName("name")[0]; if(nm) name=(nm.textContent||"").trim().slice(0,60);
  let dist=0; for(let i=1;i<pts.length;i++) dist+=haversineKm(pts[i-1],pts[i]);
  // ascent: only count cumulative rises ≥3 m to cut GPS elevation noise
  let ascent=0, ref=null;
  pts.forEach(p=>{ if(p.ele==null) return; if(ref==null){ ref=p.ele; return; } const d=p.ele-ref; if(d>=3){ ascent+=d; ref=p.ele; } else if(d<0){ ref=p.ele; } });
  const ts=pts.map(p=>p.t).filter(t=>t&&isFinite(t)); let mins=0; if(ts.length>=2) mins=Math.max(0,Math.round((Math.max.apply(null,ts)-Math.min.apply(null,ts))/60000));
  return { name, pts, dist: round1(dist), ascent: Math.round(ascent), mins };
}
// decimate to ≤max points for compact storage/sync; returns [[lat,lon],…]
function decimatePts(pts, max){ max=max||80; if(pts.length<=max) return pts.map(p=>[round5(p.lat),round5(p.lon)]);
  const step=(pts.length-1)/(max-1), out=[]; for(let i=0;i<max;i++){ const p=pts[Math.round(i*step)]; out.push([round5(p.lat),round5(p.lon)]); } return out; }
function _ll(p){ return Array.isArray(p) ? {lat:p[0], lon:p[1]} : p; }
function drawRoutePolyline(c, pts){ if(!c||!pts||pts.length<2) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const P=pts.map(_ll), lats=P.map(p=>p.lat), lons=P.map(p=>p.lon);
  const minLat=Math.min.apply(null,lats), maxLat=Math.max.apply(null,lats), minLon=Math.min.apply(null,lons), maxLon=Math.max.apply(null,lons);
  const pad=8, w=W-pad*2, h=H-pad*2, midLat=(minLat+maxLat)/2*Math.PI/180;
  const spanX=Math.max(1e-6,(maxLon-minLon)*Math.cos(midLat)), spanY=Math.max(1e-6,(maxLat-minLat)), sc=Math.min(w/spanX, h/spanY);
  const offX=pad+(w-spanX*sc)/2, offY=pad+(h-spanY*sc)/2;
  const X=lon=>offX+(lon-minLon)*Math.cos(midLat)*sc, Y=lat=>offY+(maxLat-lat)*sc;
  ctx.strokeStyle="#9775fa"; ctx.lineWidth=Math.max(2,W/220); ctx.lineJoin="round"; ctx.lineCap="round"; ctx.beginPath();
  P.forEach((p,i)=>{ const x=X(p.lon), y=Y(p.lat); i?ctx.lineTo(x,y):ctx.moveTo(x,y); }); ctx.stroke();
  const f=P[0], l=P[P.length-1], r=Math.max(3,W/160);
  ctx.fillStyle="#51cf66"; ctx.beginPath(); ctx.arc(X(f.lon),Y(f.lat),r,0,7); ctx.fill();
  ctx.fillStyle="#fa5252"; ctx.beginPath(); ctx.arc(X(l.lon),Y(l.lat),r,0,7); ctx.fill();
}
function renderCardioRoutePrev(){
  const box=$("cdRoutePrev"); if(!box) return;
  if(!cdRoute){ box.style.display="none"; box.innerHTML=""; return; }
  const r=cdRoute; box.style.display="";
  box.innerHTML='<div class="group"><div class="pad">'
    +'<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">'
      +'<div class="nm" style="font-weight:600;">'+esc(r.name||"Imported route")+'</div>'
      +'<a class="lnkic" id="cdRouteClear" title="Remove route">'+ICON.trash+'</a></div>'
    +'<canvas id="cdRouteCanvas" width="600" height="200" style="width:100%;height:150px;display:block;margin:8px 0 6px;"></canvas>'
    +'<div class="meta" style="color:var(--l2);font-size:var(--t-sm);"><b>'+round1(r.dist)+' km</b>'+(r.ascent?' · ↑ '+r.ascent+' m':'')+(r.mins?' · '+r.mins+' min':'')+' · pick an activity &amp; zone, then Log</div>'
  +'</div></div>';
  drawRoutePolyline($("cdRouteCanvas"), r.pts);
  $("cdRouteClear").onclick=clearCardioRoute;
}
function setCardioRoute(r){
  cdRoute=r; const act=cdAct();
  if(act.run){ $("cdDist").value=r.dist||""; if(r.mins){ $("cdTime").value=r.mins; if(r.dist) $("cdPace").value=fmtPace(r.mins/r.dist); } }
  else if(r.mins){ $("cdMin").value=r.mins; }
  renderCardioRoutePrev(); updateCardioPreview();
}
function clearCardioRoute(){ cdRoute=null; renderCardioRoutePrev(); updateCardioPreview(); }
if($("cdImport")) $("cdImport").onclick=()=>$("cdGpx").click();
if($("cdGpx")) $("cdGpx").onchange=ev=>{ const file=ev.target.files&&ev.target.files[0]; if(!file) return;
  const fr=new FileReader();
  fr.onload=()=>{ const r=parseGpx(String(fr.result||"")); ev.target.value="";
    if(!r){ toast("Couldn't read that GPX — is it a valid route file?"); return; }
    setCardioRoute(r); toast("Imported "+(r.name||"route")+" — "+round1(r.dist)+" km"); };
  fr.onerror=()=>{ toast("Couldn't read that file"); }; fr.readAsText(file); };

// ===== cardio dose: weekly aerobic minutes + zone mix, a SEPARATE axis from muscle volume =====
// (also folds in pre-Phase-1 kind:"activity" logs so old runs/rides still count toward the cardio picture)
function cardioList(){ return (extlog||[]).filter(e=>e.kind==="cardio"||e.kind==="activity"); }
function cardioMinsOf(e){ return Math.round(e.mins||0); }
function cardioMinsWeek(days){ days=days||7; const cut=Date.now()-days*86400000; let m=0; cardioList().forEach(e=>{ if(e.d>=cut) m+=cardioMinsOf(e); }); return Math.round(m); }
function cardioSessionsWeek(days){ days=days||7; const cut=Date.now()-days*86400000; return cardioList().filter(e=>e.d>=cut).length; }
function cardioZoneMix(days){ days=days||7; const cut=Date.now()-days*86400000; const mix={}; CZONES.forEach(z=>mix[z.z]=0);
  cardioList().forEach(e=>{ if(e.d<cut) return; const z=mix[e.zone]!=null?e.zone:"z2"; mix[z]+=cardioMinsOf(e); }); return mix; }
// effort-adjusted "dose": minutes weighted by zone intensity, so a hard session counts for more toward
// the weekly target. z2 (steady/moderate) is the 1.0 anchor; z5 ≈ 2.2× — mirroring the public-health
// "150 min moderate OR 75 min vigorous" model where vigorous minutes count roughly double.
function cardioZoneW(z){ const d=CZONES.find(x=>x.z===z); return d?d.w:1; }   // legacy/no-zone entries → 1.0
function cardioDoseWeek(days){ days=days||7; const cut=Date.now()-days*86400000; let m=0;
  cardioList().forEach(e=>{ if(e.d>=cut) m+=cardioMinsOf(e)*cardioZoneW(e.zone)*cardioFracOf(e); }); return Math.round(m); }
// objective-aware weekly aerobic-minutes target (Phase 3 layers coaching on top of this)
// Dedicated cardio goal — a SEPARATE axis from the lifting objective; it sets the weekly-minutes target.
// Editable in the Cardio detail sheet (settings.cardioGoal). Falls back to a sensible default derived from
// the lifting objective so existing users get a reasonable target until they pick one.
const CARDIO_GOALS=[
  {k:"maintain",  lbl:"Maintain",        sub:"minimal — protect lifting gains", mins:75},
  {k:"health",    lbl:"Basic health",    sub:"the ~150 min/wk guideline",       mins:150},
  {k:"fitness",   lbl:"General fitness", sub:"a strong all-round base",          mins:200},
  {k:"fatloss",   lbl:"Fat loss",        sub:"more movement for the deficit",    mins:250},
  {k:"endurance", lbl:"Endurance",       sub:"events & long efforts",            mins:300}
];
function cardioGoalDef(){
  const g=CARDIO_GOALS.find(x=>x.k===settings.cardioGoal); if(g) return g;
  const map={ muscle:"maintain", strength:"maintain", fitness:"fitness", fatloss:"fatloss" };  // back-compat default
  let def=CARDIO_GOALS.find(x=>x.k===(map[settings.objective]||"health"));
  // A sedentary job/lifestyle nudges the default UP — the deskbound benefit most from deliberate cardio, and an
  // active job does NOT replace it (physical-activity paradox, see paPara). Never lowers below the objective default.
  const ba=baseActivityDef();
  if(ba && ba.goalDefault){ const bg=CARDIO_GOALS.find(x=>x.k===ba.goalDefault); if(bg && bg.mins>def.mins) def=bg; }
  return def;
}
// ===== base activity: habitual occupation/lifestyle level (Me → Daily activity) =====
// PAL bands from the FAO/WHO/UNU consultation (palFao); baseMin = a labelled estimate of weekly moderate-or-more
// movement the lifestyle adds beyond a desk baseline. It sets the smart cardio-goal default and shows context —
// it is NOT counted as training, because occupational activity lacks leisure exercise's benefit (paPara, opaMort).
const OCCUPATION_LEVELS=[
  {k:"sedentary", lbl:"Mostly sitting", sub:"desk, office, driving",            pal:1.45, baseMin:0,   goalDefault:"fitness"},
  {k:"light",     lbl:"Light",          sub:"standing, retail, teaching",       pal:1.60, baseMin:60,  goalDefault:"health"},
  {k:"moderate",  lbl:"On your feet",   sub:"nursing, hospitality, cleaning",   pal:1.75, baseMin:150, goalDefault:null},
  {k:"active",    lbl:"Active",         sub:"warehouse, farming, trades",       pal:1.90, baseMin:250, goalDefault:null},
  {k:"heavy",     lbl:"Heavy labour",   sub:"construction, forestry, removals", pal:2.10, baseMin:400, goalDefault:null}
];
function baseActivityDef(){ return OCCUPATION_LEVELS.find(x=>x.k===settings.baseActivity)||null; }
function setBaseActivity(k){ if(!OCCUPATION_LEVELS.some(x=>x.k===k)) return;
  settings.baseActivity = (settings.baseActivity===k) ? null : k;   // tap again to clear
  sset("settings",settings); renderBaseActivity(); renderCardioCard();
  const d=baseActivityDef();
  toast(d ? "Daily activity: "+d.lbl : "Daily activity cleared");
}
function renderBaseActivity(){
  const cw=$("baseActChips"); if(!cw) return;
  const cur=baseActivityDef();
  const sum=$("baseActSummary"); if(sum) sum.innerHTML = "Daily activity" + (cur?' <span style="color:var(--l3);font-weight:400;">· '+esc(cur.lbl)+'</span>':"");
  cw.innerHTML="";
  OCCUPATION_LEVELS.forEach(o=>{ const c=document.createElement("button"); c.className="chip"+(settings.baseActivity===o.k?" on":"");
    c.innerHTML=esc(o.lbl)+' <small class="chipsub">'+esc(o.sub)+'</small>';
    c.onclick=()=>setBaseActivity(o.k); cw.appendChild(c); });
  const stat=$("baseActStat"), hint=$("baseActHint"), cite=$("baseActCite");
  if(!cur){ if(stat) stat.style.display="none";
    if(hint) hint.textContent="Pick the level that fits a normal week — it tailors your cardio target.";
    if(cite) cite.style.display="none"; return; }
  // the weekly picture: lifestyle baseline + what you've actually logged on top
  const logged=cardioMinsWeek(7);
  if(stat){ stat.style.display="";
    stat.innerHTML = cur.baseMin
      ? 'Lifestyle baseline ≈ <b>'+cur.baseMin+'</b> active min/wk'+(logged?' · you’ve logged <b>'+logged+'</b> on top':'')
      : 'A sitting week adds little movement on its own'+(logged?' — you’ve logged <b>'+logged+'</b> min of training':'.'); }
  if(hint) hint.innerHTML = cur.baseMin
    ? 'Counts as context, <b>not</b> training: an active job supports health but doesn’t build fitness the way deliberate cardio does — so it doesn’t fill your cardio ring.'
    : 'A mostly-sitting week is why your cardio target is set a little higher — deliberate movement matters most for you.';
  if(cite){ const link=(k,label)=>{ const u=studyUrl(k), c=shortCite(k); if(!c) return "";
      const inner=esc(label)+' <span style="opacity:.7">'+esc(c)+'</span>';
      return u ? '<a class="srclink" href="'+u+'" target="_blank" rel="noopener">'+inner+' <span class="srcarrow">↗</span></a>' : inner; };
    cite.innerHTML='<div class="actcitehd">Why these numbers</div>'
      +'<div>PAL ~'+cur.pal.toFixed(2)+' · '+link("palFao","activity levels:")+'</div>'
      +'<div>'+link("paPara","job activity ≠ training:")+'</div>';
    cite.style.display=""; }
}
function cardioTargetMins(){ return cardioGoalDef().mins; }
function setCardioGoal(k){ if(!CARDIO_GOALS.some(x=>x.k===k)) return; settings.cardioGoal=k; sset("settings",settings);
  renderCardioDetail(); renderCardioCard();
  if(document.querySelector('#pageFeed.active') && typeof renderOverview==="function") renderOverview();
  toast("Cardio goal: "+cardioGoalDef().lbl+" — "+cardioTargetMins()+" min/wk");
}
// 10-week effort-adjusted weekly series for the sparkline (index N-1 = this week); weighted by zone so
// the bars sit against the same target line the rings/card use (see cardioDoseWeek).
function cardioWeeklySeries(){ const wkMs=7*86400000, now=Date.now(), N=PROG_WEEKS, out=new Array(N).fill(0);
  cardioList().forEach(e=>{ const k=Math.floor((now-e.d)/wkMs), i=(k>=0&&k<N)?(N-1-k):-1; if(i>=0) out[i]+=cardioMinsOf(e)*cardioZoneW(e.zone)*cardioFracOf(e); });
  return out.map(v=>Math.round(v)); }
const CZCOL={z1:"#74c0fc", z2:"#51cf66", z3:"#fcc419", z4:"#ff922b", z5:"#fa5252"};
// objective-aware distribution nudge from the last 2 weeks of cardio (polarized base — rosenblat19;
// keep cardio moderate when chasing size/strength — wilson12). null when there's too little to judge.
function cardioCoachLine(){
  const mix=cardioZoneMix(14), tot=Object.values(mix).reduce((a,b)=>a+b,0);
  if(tot<30) return null;
  const hard=(mix.z4||0)+(mix.z5||0), easy=(mix.z1||0)+(mix.z2||0), tgt=cardioTargetMins();
  if((settings.objective==="muscle"||settings.objective==="strength") && cardioMinsWeek(7)>tgt*1.6)
    return {short:"ease off", msg:"Lots of cardio this week — while you're chasing size/strength, keep it moderate (and favour cycling) so it doesn't blunt your gains."};
  if(hard/tot>0.4) return {short:"mostly hard", msg:"A lot of your cardio is hard (Z4–Z5). Most weeks work better with ~80% easy — it builds your aerobic base with less fatigue."};
  if(easy>=tot*0.97 && cardioMinsWeek(14)>=tgt*2) return {short:"add intervals", msg:"Almost all easy lately — with a solid base, one weekly harder session or some intervals nudges your fitness up."};
  return null;
}
// this week's cardio verdict: a short form for the Me tile caption, the full line for the Cardio sheet.
// A distribution nudge takes priority over the volume verdict when there's enough to judge (evidence: rosenblat19/wilson12).
function cardioVerdict(){
  const mins=cardioDoseWeek(7), tgt=cardioTargetMins(), left=Math.max(0,tgt-mins), coach=cardioCoachLine();
  if(coach) return {lvl:"watch", short:coach.short, msg:coach.msg};   // tile and sheet say the same thing
  return mins>=tgt ? {lvl:"good", short:"target met", msg:"Target met — strong aerobic week."}
    : mins>=tgt*0.5 ? {lvl:"watch", short:"good base", msg:"Good base — "+left+" min to reach your target."}
    : {lvl:"more", short:"light so far", msg:"Light so far — "+left+" min to go this week."};
}
// Me tile: effort-adjusted minutes this week against the target, the 10-week trend, sessions + the short verdict
function renderCardioCard(){
  const stat=$("cardioStat"), cap=$("cardioCap"); if(!stat) return;
  if(!cardioList().length){ stat.textContent="—"; if(cap) cap.textContent="No cardio yet"; drawSummarySpark("cardioMini", null); return; }   // tap goes to log some
  const mins=cardioDoseWeek(7), tgt=cardioTargetMins(), sess=cardioSessionsWeek(7), v=cardioVerdict();
  stat.innerHTML='<span class="'+(v.lvl==="good"?"up":"")+'">'+mins+'</span> <span class="u">/ '+tgt+' min/wk</span>';   // green only when the sheet agrees
  if(cap) cap.textContent=sess+" session"+(sess===1?"":"s")+" · "+v.short;
  drawSummarySpark("cardioMini", cardioWeeklySeries(), {color:"#9775fa", ref:tgt});
}

// ===== Cardio detail sheet (Phase 4): weekly minutes, effort split, pace trend =====
let cdcPaceSel=null;
// activities with ≥2 sessions that have a computable pace (stored, or distance & minutes)
function cardioPaceActivities(){
  const by={}; cardioList().forEach(e=>{ const p=e.pace || (e.dist&&e.mins ? e.mins/e.dist : 0); if(p>0){ (by[e.name]=by[e.name]||[]).push({d:e.d, pace:p}); } });
  return Object.keys(by).filter(n=>by[n].length>=2).map(n=>({name:n, pts:by[n].sort((a,b)=>a.d-b.d)}));
}
// minutes per zone for each of the last `weeks` weeks (index weeks-1 = this week)
function cardioZoneWeekly(weeks){ weeks=weeks||8; const wkMs=7*86400000, now=Date.now();
  const out=Array.from({length:weeks},()=>{ const o={}; CZONES.forEach(z=>o[z.z]=0); return o; });
  cardioList().forEach(e=>{ const k=Math.floor((now-e.d)/wkMs), i=(k>=0&&k<weeks)?(weeks-1-k):-1; if(i<0) return; const z=out[i][e.zone]!=null?e.zone:"z2"; out[i][z]+=cardioMinsOf(e); });
  return out;
}
function openCardioDetail(){ renderCardioDetail(); openSheet("Cardio"); }
function renderCardioDetail(){
  const raw=cardioMinsWeek(7), mins=cardioDoseWeek(7), tgt=cardioTargetMins(), dose28=cardioDoseWeek(28), cv=cardioVerdict(), coach=cardioCoachLine();
  // the verdict leads (the numbers sit just below); a coaching nudge is too long for a headline, so it gets its own row
  const lead=$("cdcLead"); if(lead){ lead.className="lh"+(cv.lvl==="good"?" good":""); lead.textContent=!cardioList().length ? "No cardio yet" : coach ? cv.short.charAt(0).toUpperCase()+cv.short.slice(1) : cv.msg; }
  $("cdcSummary").innerHTML='<div class="group"><div class="pad cdcstats">'
    +'<div><div class="ovbig"><b>'+mins+'</b></div><div class="ovk">this week</div></div>'
    +'<div><div class="ovbig"><b>'+tgt+'</b></div><div class="ovk">target</div></div>'
    +'<div><div class="ovbig"><b>'+Math.round(dose28/4)+'</b></div><div class="ovk">4-wk avg</div></div>'
    +'</div></div>'
    +(coach ? '<div class="progverd v-'+cv.lvl+'"><span class="pvdot"></span><span class="pvtxt">'+esc(cv.msg)+'</span></div>' : '')
    +'<p class="levelcap">Effort-adjusted minutes — a vigorous minute counts up to ~2× an easy one (the 150-moderate-or-75-vigorous guideline). You logged <b>'+raw+'</b> actual min this week.</p>';
  // editable cardio goal — drives the weekly target (separate from the lifting objective)
  const gw=$("cdcGoalChips"); if(gw){ const cur=cardioGoalDef(); gw.innerHTML="";
    CARDIO_GOALS.forEach(g=>{ const c=document.createElement("button"); c.className="chip"+(cur.k===g.k?" on":""); c.textContent=g.lbl+" · "+g.mins+"m";
      c.onclick=()=>setCardioGoal(g.k); gw.appendChild(c); });
    $("cdcGoalHint").textContent = cur.sub.charAt(0).toUpperCase()+cur.sub.slice(1)+" — target ~"+cur.mins+" min/week.";
  }
  drawCardioMins("cdcMinsC"); drawZoneStack("cdcZoneC");
  $("cdcZoneLegend").innerHTML = CZONES.map(z=>'<span class="pglg"><i style="background:'+CZCOL[z.z]+'"></i>'+z.lbl+'</span>').join("");
  const acts=cardioPaceActivities();
  if(!acts.length){ $("cdcPaceWrap").style.display="none"; return; }
  $("cdcPaceWrap").style.display="";
  if(!cdcPaceSel || !acts.some(a=>a.name===cdcPaceSel)) cdcPaceSel=acts.slice().sort((a,b)=>b.pts.length-a.pts.length)[0].name;
  const chips=$("cdcPaceChips"); chips.innerHTML="";
  acts.forEach(a=>{ const c=document.createElement("button"); c.className="chip"+(cdcPaceSel===a.name?" on":""); c.textContent=a.name; c.onclick=()=>{ cdcPaceSel=a.name; renderCardioDetail(); }; chips.appendChild(c); });
  chips.style.display = acts.length>1 ? "" : "none";   // one activity: nothing to pick, name it in the label instead
  const ph=$("cdcPaceWrap").querySelector(".subhint"); if(ph) ph.textContent = acts.length>1 ? "— higher is faster" : "— "+cdcPaceSel.toLowerCase()+", higher is faster";
  drawPaceTrend("cdcPaceC", cdcPaceSel);
  const a=acts.find(x=>x.name===cdcPaceSel), pts=a.pts, best=Math.min(...pts.map(p=>p.pace)), last=pts[pts.length-1].pace, first=pts[0].pace;
  $("cdcPaceCap").textContent = pts.length+" sessions · best "+fmtPace(best)+"/km · latest "+fmtPace(last)+"/km"+(last<first-0.02?" · trending faster":last>first+0.02?" · easing off":" · holding");
}
function _axisColor(){ return (getComputedStyle(document.documentElement).getPropertyValue('--l3')||'#888').trim(); }
function drawCardioMins(id){ const c=$(id); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const data=cardioWeeklySeries(), tgt=cardioTargetMins(), hi=Math.max(1,tgt*1.15,...data), base=H-28, top=12, pad=10, n=data.length, gapX=(W-pad*2)/n, bw=gapX*0.66;
  const y=v=>base-(v/hi)*(base-top);
  ctx.strokeStyle=hexAlpha("#9775fa",.45); ctx.setLineDash([4,4]); ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(pad,y(tgt)); ctx.lineTo(W-pad,y(tgt)); ctx.stroke(); ctx.setLineDash([]);
  data.forEach((v,i)=>{ const x=pad+i*gapX+(gapX-bw)/2, h=Math.max(0,base-y(v)); ctx.fillStyle = v>=tgt ? "#9775fa" : hexAlpha("#9775fa",.4);
    if(ctx.roundRect){ ctx.beginPath(); ctx.roundRect(x,y(v),bw,h,3); ctx.fill(); } else ctx.fillRect(x,y(v),bw,h); });
  ctx.fillStyle=_axisColor(); ctx.font=cfont(W,"label"); ctx.textAlign="left"; ctx.fillText("10w ago",pad,H-5); ctx.textAlign="right"; ctx.fillText("now",W-pad,H-5);
}
function drawZoneStack(id){ const c=$(id); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const wk=cardioZoneWeekly(8), base=H-28, top=12, pad=10, n=wk.length, gapX=(W-pad*2)/n, bw=gapX*0.66;
  const tots=wk.map(o=>CZONES.reduce((s,z)=>s+o[z.z],0)), hi=Math.max(1,...tots);
  wk.forEach((o,i)=>{ let yb=base; const x=pad+i*gapX+(gapX-bw)/2;
    CZONES.forEach(z=>{ const v=o[z.z]; if(!v) return; const h=(v/hi)*(base-top); yb-=h; ctx.fillStyle=CZCOL[z.z]; ctx.fillRect(x,yb,bw,h); }); });
  ctx.fillStyle=_axisColor(); ctx.font=cfont(W,"label"); ctx.textAlign="left"; ctx.fillText("8w ago",pad,H-5); ctx.textAlign="right"; ctx.fillText("now",W-pad,H-5);
}
function drawPaceTrend(id, activity){ const c=$(id); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const a=cardioPaceActivities().find(a=>a.name===activity); if(!a) return;
  const pts=a.pts, paces=pts.map(p=>p.pace), mn=Math.min(...paces), mx=Math.max(...paces), range=(mx-mn)||1, pad=12, base=H-28, top=14, ac="#9775fa";
  const x=i=> pts.length>1 ? pad+i*((W-pad*2)/(pts.length-1)) : W/2;
  const y=v=> top + ((v-mn)/range)*(base-top);   // faster (lower pace) sits higher
  ctx.strokeStyle=ac; ctx.lineWidth=3; ctx.lineJoin="round"; ctx.lineCap="round"; ctx.beginPath();
  pts.forEach((p,i)=>{ i?ctx.lineTo(x(i),y(p.pace)):ctx.moveTo(x(i),y(p.pace)); }); ctx.stroke();
  pts.forEach((p,i)=>{ ctx.beginPath(); ctx.arc(x(i),y(p.pace), i===pts.length-1?5:3,0,7); ctx.fillStyle=i===pts.length-1?ac:hexAlpha(ac,.5); ctx.fill(); });
  ctx.fillStyle=_axisColor(); ctx.font=cfont(W,"label"); ctx.textAlign="left"; ctx.fillText("faster ↑",pad,H-5); ctx.textAlign="right"; ctx.fillText("now",W-pad,H-5);
}

// ================= achievements (gamification) =================
function lifetimeVolume(mode){ mode=mode||"total";
  let v=0; Object.keys(hist).forEach(n=>(hist[n]||[]).forEach(e=> v+=effVolume(n,e,mode)));
  (extlog||[]).forEach(e=> v+=(e.vol||0));
  return v;
}
function fmtBigKg(v){ return (v>=1000000 ? (Math.round(v/10000)/100)+"M" : Math.round(v).toLocaleString())+" kg"; }
function achStats(){
  const muscles=new Set(); Object.keys(hist).forEach(n=> muscleFor(n).forEach(m=>{ if(m!=="Other") muscles.add(m); }));
  const acts=new Set(); (extlog||[]).forEach(e=>{ if(e.kind==="activity") acts.add(e.name); });
  return { sessions:settings.sessions||0, prs:settings.beatTotal||0, hours:(settings.timeTotal||0)/60,
           vol:lifetimeVolume(), muscles:muscles.size, activities:acts.size, external:(extlog||[]).length,
           stars:starCount(), comeback:starHasComeback(), deloads:settings.deloadsTaken||0 };
}
const ACHIEVEMENTS=[
  {id:"first",   icon:"🌱", grp:"t", p:["sessions",1],   t:"First Steps",        d:"Log your first workout",      test:s=>s.sessions>0},
  {id:"ten",     icon:"👟", grp:"t", p:["sessions",10],  t:"Ten Sessions",       d:"10 workouts logged",          test:s=>s.sessions>=10},
  {id:"fifty",   icon:"💪", grp:"t", p:["sessions",50],  t:"Committed",          d:"50 workouts logged",          test:s=>s.sessions>=50},
  {id:"hundred", icon:"🏆", grp:"t", p:["sessions",100], t:"Centurion",          d:"100 workouts logged",         test:s=>s.sessions>=100},
  {id:"pr10",    icon:"⚡", grp:"t", p:["prs",10],       t:"Record Breaker",     d:"Beat your best 10 times",     test:s=>s.prs>=10},
  {id:"vol100k", icon:"🏋️", grp:"t", p:["vol",1e5],      t:"Heavy Lifter",       d:"100,000 kg moved",            test:s=>s.vol>=100000},
  {id:"vol1m",   icon:"🗻", grp:"t", p:["vol",1e6],      t:"Mountain Mover",     d:"1,000,000 kg moved",          test:s=>s.vol>=1000000},
  {id:"time10",  icon:"⏱️", grp:"t", p:["hours",10],     t:"Time Under Tension", d:"10 hours trained",            test:s=>s.hours>=10},
  {id:"rounded", icon:"🎯", grp:"r", p:["muscles",8],    t:"Well Rounded",       d:"Trained every muscle group",  test:s=>s.muscles>=8},
  {id:"cross",   icon:"🤸", grp:"r",                  t:"Cross-Trainer",      d:"Log other training",          test:s=>s.external>=1},
  {id:"explorer",icon:"🧭", grp:"r", p:["activities",3], t:"Explorer",           d:"Try 3 different activities",  test:s=>s.activities>=3},
  // consistency (grp "c"): week stars. Hidden with stars switched off; drawn as an accent star, not an emoji
  {id:"star1",    icon:"✦", grp:"c", star:1,  p:["stars",1],  t:"First Star",           d:"Your first week star",      test:s=>s.stars>=1},
  {id:"star12",   icon:"✦", grp:"c", star:12, p:["stars",12], t:"Twelve Weeks",         d:"12 week stars, any order",  test:s=>s.stars>=12},
  {id:"star26",   icon:"✦", grp:"c", star:26, p:["stars",26], t:"Half a Year of Weeks", d:"26 week stars",             test:s=>s.stars>=26},
  {id:"star52",   icon:"✦", grp:"c", star:52, p:["stars",52], t:"A Year of Weeks",      d:"52 week stars",             test:s=>s.stars>=52, dd:STAR_COPY.ach52},
  {id:"comeback", icon:"✦", grp:"c", star:0,  t:"Back at It",           d:"A star after time away",    test:s=>!!s.comeback},
  {id:"recovered",icon:"✦", grp:"c", star:0,  t:"Recovered",            d:"Take a deload when it's due", test:s=>s.deloads>=1}
];
function unlockedIds(){ const s=achStats(); return ACHIEVEMENTS.filter(a=>a.test(s)).map(a=>a.id); }
// stored ids only grow: a counter that lost an increment to last-write-wins sync can't re-lock (or re-fire) a badge
function checkAchievements(){
  const have=new Set(settings.achUnlocked||[]), at=settings.achAt=settings.achAt||{};
  const fresh=unlockedIds().filter(id=>!have.has(id));
  fresh.forEach(id=>{ have.add(id); if(at[id]==null) at[id]=Date.now(); });
  settings.achUnlocked=[...have]; return fresh;
}
// 4-point accent star for the consistency tiles, with the count inside
// the waist is wide enough for a 2-digit count (12, 26, 52) to sit inside the fill
function achStarGlyph(n){ return '<span class="achstar">'+(n?'<b>'+n+'</b>':'')+'</span>'; }   // the star itself is CSS (.achstar::before)
// p: [achStats key, goal] — a locked tile with a count rule shows "7 / 12" over a bar instead of the lock
function achProg(a, s){ if(!a.p) return null; const cur=Math.max(0, +s[a.p[0]]||0), goal=a.p[1]; return { k:a.p[0], cur, goal, f:Math.min(1, cur/goal) }; }
function achNum(k, x){ return k==="vol" ? (x>=1e6 ? round1(x/1e6)+"M" : x>=1000 ? Math.floor(x/1000)+"k" : Math.floor(x)+"")
  : k==="hours" && x<10 ? round1(Math.floor(x*10)/10)+"" : Math.floor(x)+""; }
function achIcon(a, on, pr){ return on ? (a.grp==="c" ? achStarGlyph(a.star) : a.icon)
  : pr ? '<span class="achp">'+achNum(pr.k,pr.cur)+' / '+achNum(pr.k,pr.goal)+'</span><div class="achbar"><i style="width:'+Math.round(pr.f*100)+'%"></i></div>'
  : '<span class="achlock">'+ICON.lock+'</span>'; }
// grouped (Consistency · Training · Range), unlocked first in each; rendered from union(stored, live) so a badge never re-locks
function renderAchievements(){
  const wrap=$("achGrid"); if(!wrap) return;
  const s=achStats(), have=new Set([...(settings.achUnlocked||[]), ...ACHIEVEMENTS.filter(a=>a.test(s)).map(a=>a.id)]), on=starsOn();
  const v=lifetimeVolume(), lf=lifetimeVolume("lifted");
  let h="";
  [["c",STAR_COPY.grpC],["t",STAR_COPY.grpT],["r",STAR_COPY.grpR]].forEach(([g,lbl])=>{
    if(g==="c" && !on) return;
    const list=ACHIEVEMENTS.filter(a=>(a.grp||"t")===g), lit=list.filter(a=>have.has(a.id)).concat(list.filter(a=>!have.has(a.id)));
    h+='<div class="ed-label">'+esc(lbl)+'</div>'+lit.map(a=>{ const u=have.has(a.id), pr=!u && achProg(a,s);
      return '<div class="ach'+(u?' on':'')+'" data-id="'+a.id+'" role="button" tabindex="0"><div class="achi">'+achIcon(a,u,pr)+'</div><div class="acht">'+esc(a.t)+'</div><div class="achd">'+esc(a.d)+'</div></div>'; }).join('');
    if(g==="t") h+='<div class="achcap">Lifetime volume moved: <b id="achVol">'+esc(fmtBigKg(lf)+" lifted"+(v>lf?" · "+fmtBigKg(v)+" incl. bodyweight":""))+'</b></div>';
  });
  wrap.innerHTML=h;
}
function fmtStarDate(t, yr){ return new Date(t).toLocaleDateString(undefined, yr ? {day:"numeric",month:"short",year:"numeric"} : {day:"numeric",month:"short"}); }
// a tapped tile: title, description, and when it was earned (or how far along it is)
function openAchDetail(id){
  const a=ACHIEVEMENTS.find(x=>x.id===id); if(!a) return;
  const s=achStats(), on=(settings.achUnlocked||[]).includes(id) || a.test(s), at=(settings.achAt||{})[id], pr=!on && achProg(a,s);
  const st = on ? (typeof at==="number" ? starCopy("achEarned",{date:fmtStarDate(at,true)}) : STAR_COPY.achHist)
    : pr ? achNum(pr.k,pr.cur)+" / "+achNum(pr.k,pr.goal) : STAR_COPY.achLocked;
  $("achBody").innerHTML='<div class="sheetlead achd-sheet"><div class="achi">'+(on ? (a.grp==="c" ? achStarGlyph(a.star) : a.icon) : '<span class="achlock">'+ICON.lock+'</span>')+'</div>'
    +'<div class="lh">'+esc(a.t)+'</div><div class="lc">'+esc(a.d)+'</div></div>'
    +(a.dd ? '<p class="sheetintro">'+esc(a.dd)+'</p>' : '')
    +'<p class="sheetintro">'+esc(st)+'</p>'+(pr ? '<div class="achbar"><i style="width:'+Math.round(pr.f*100)+'%"></i></div>' : '');
  $("achBody").classList.add("achd-sheet");
  openSheet("Ach");
}
// kept for any caller outside the three log handlers
function celebrateAch(ids){ if(ids && ids.length) celebrateMoment({ achIds:ids }); }

// ================= week stars: UI =================
// The "Stars & achievements" fold (sky card, this week, this year), the Stars sheet, the one-time intro, the
// calendar column and the Overview star. Earned stars only: no surface draws a slot for a week without one.
function starsOn(){ return !(settings.stars && settings.stars.on===false); }
function starsN(n){ return n+" star"+(n===1?"":"s"); }
function starWeekIn(){ const st=settings.stars; return !!(st && st.on!==false && st.earned && st.earned[starWeekId()]); }
// a 4-point sparkle centred on (x,y), half-size r, with concave sides (like ✦)
function sparkPath(x,y,r){ const k=r*.2, f=n=>Math.round(n*100)/100, q=(cx,cy,ex,ey)=>"Q"+f(cx)+" "+f(cy)+" "+f(ex)+" "+f(ey);
  return "M"+f(x)+" "+f(y-r)+q(x+k,y-k,x+r,y)+q(x+k,y+k,x,y+r)+q(x-k,y+k,x-r,y)+q(x-k,y-k,x,y-r)+"Z"; }
function starIcon(){ return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+sparkPath(12,12,12)+'"/></svg>'; }
// seeded PRNG, so a figure's background dots sit in the same place on every render
function starRng(seed){ let h=2166136261; for(const c of String(seed)) h=Math.imul(h^c.charCodeAt(0),16777619);
  return ()=>{ h=(h+0x6D2B79F5)|0; let t=Math.imul(h^h>>>15,1|h); t=(t+Math.imul(t^t>>>7,61|t))^t; return ((t^t>>>14)>>>0)/4294967296; }; }
// One figure as inline SVG. lit = stars earned in figure order; lines join lit stars only; the rest are faint dots
// (stars to come, never dated). o: {w,h, box:[x,y,w,h], r, bg: background dots, bgH: their band's height, dots:false,
// halo:false, newest, anim, field}
let _skyUid=0;
function drawConstellation(fig, lit, o){
  o=o||{}; const W=o.w||340, H=o.h||200, b=o.box||[24,56,W-48,H-72], r=o.r||7, uid="sky"+(++_skyUid), rnd=starRng(fig?fig.id:"field");
  const f=n=>n.toFixed(1);
  let h='<svg class="skyc'+(o.anim?' anim':'')+'" viewBox="0 0 '+W+' '+H+'" aria-hidden="true">'
    +(o.halo===false?'':'<defs><radialGradient id="'+uid+'"><stop offset="0" class="h0"/><stop offset=".45" class="hm"/><stop offset="1" class="h1"/></radialGradient></defs>');
  for(let i=0;i<(o.bg||0);i++) h+='<circle class="bg" cx="'+f(rnd()*W)+'" cy="'+f(rnd()*(o.bgH||H))+'" r="'+(.5+rnd()*.3).toFixed(2)+'" opacity="'+(.15+rnd()*.2).toFixed(2)+'"/>';
  let P;
  if(fig){ const xs=fig.pts.map(p=>p[0]), ys=fig.pts.map(p=>p[1]), x0=Math.min(...xs), y0=Math.min(...ys);
    const bw=Math.max(.05,Math.max(...xs)-x0), bh=Math.max(.05,Math.max(...ys)-y0), k=Math.min(b[2]/bw, b[3]/bh);
    const ox=b[0]+(b[2]-bw*k)/2, oy=b[1]+(b[3]-bh*k)/2;
    P=fig.pts.map(p=>[ox+(p[0]-x0)*k, oy+(p[1]-y0)*k]);
    fig.edges.forEach(([a,c])=>{ if(a<lit && c<lit) h+='<path class="ln" pathLength="1" d="M'+f(P[a][0])+' '+f(P[a][1])+'L'+f(P[c][0])+' '+f(P[c][1])+'"/>'; });
  } else { P=[]; for(let i=0;i<Math.min(o.field||0,160);i++) P.push([b[0]+rnd()*b[2], b[1]+rnd()*b[3]]); lit=P.length; }   // past 104: the all-time field
  const step = fig ? 60 : Math.min(60, 900/Math.max(1,lit));   // the field's pop-in is done in about a second, however many stars
  P.forEach((p,i)=>{
    if(i>=lit){ if(o.dots!==false) h+='<circle class="dot" cx="'+f(p[0])+'" cy="'+f(p[1])+'" r="2"/>'; return; }
    const R = fig ? r*(o.newest && i===lit-1 ? 1.4 : .88+(i%3)*.08) : r*(.35+rnd()*.35);
    h+='<g class="stg"'+(o.anim?' style="animation-delay:'+Math.round(i*step)+'ms"':'')+(fig?'':' opacity="'+(.45+rnd()*.55).toFixed(2)+'"')+'>'   // the field: no halos, varied brightness
      +(o.halo===false || !fig ?'':'<circle cx="'+f(p[0])+'" cy="'+f(p[1])+'" r="'+f(R*2.2)+'" fill="url(#'+uid+')"/>')
      +'<path class="st" d="'+sparkPath(p[0],p[1],R)+'"/></g>';
  });
  return h+'</svg>';
}
// sorted earned week ids — the lifetime order the figures fill in
function starKeys(){ return Object.keys(((settings.stars||{}).earned)||{}).sort(); }
function starMonth(id, long){ const p=String(id).split("-").map(Number); return new Date(p[0],p[1]-1,p[2]).toLocaleDateString(undefined,{month:long?"long":"short",year:"numeric"}); }
// the sky panel. kind: card (Me) · sheet · intro · done (a completed figure, o.fig). [viewBox w, h, figure box, star r,
// background dots]. The captions sit in flow above the SVG, so no star can land under them at any width.
const SKY_SIZE={ card:[340,146,[28,14,284,112],7,22], sheet:[340,186,[28,16,284,148],8,30],
  intro:[340,140,[28,14,284,108],7,20], done:[340,170,[28,14,284,136],8,24] };
function skyBox(kind, o){
  o=o||{}; const n=starCount(), pg=skyProgress(n), ks=starKeys(), Z=SKY_SIZE[kind];
  let fig, lit, name, count=n, sub="", note="";
  if(o.fig){ fig=o.fig; lit=fig.pts.length; name=fig.name; count=0; sub=o.sub||""; }
  else if(!pg.fig){ fig=null; lit=0; name="All-time sky"; }
  else if(!pg.lit && pg.done.length){ fig=pg.done[pg.done.length-1]; lit=fig.pts.length;   // just finished: keep it lit until the next figure's first star
    name=starCopy("skyCap",{name:fig.name, lit, total:lit}); sub=starCopy("skyNext",{name:pg.fig.name}); }
  else { fig=pg.fig; lit=pg.lit; name = n ? starCopy("skyCap",{name:fig.name, lit, total:pg.total}) : fig.name; }
  if(kind==="sheet" && n) sub=(sub?sub+" · ":"")+starCopy("since",{month:starMonth(ks[0],true)});
  const empty = !o.fig && n===0;
  if(empty && kind==="card"){ const any=Object.keys(hist).some(k=>(hist[k]||[]).length) || (extlog||[]).length;
    const T=starBaseTarget(); note=starCopy(any?"emptyHist":"emptyNew",{s: T===1 ? "one session" : T+" sessions"}); }
  const box = note ? [Z[2][0], Z[2][1]-8, Z[2][2], Z[2][3]-28] : Z[2];
  return '<div class="starsky sk-'+kind+(fig && fig.sky===2?' sky2':'')+'">'
    +'<div class="skycap"><span class="skyname">'+esc(name)+(sub?'<small>'+esc(sub)+'</small>':'')+'</span>'
      +(count ? '<span class="skyn"><b>'+count+'</b>'+(count===1?'star':'stars')+'</span>' : '')+'</div>'
    +drawConstellation(fig, lit, { w:Z[0], h:Z[1], box, r:Z[3], bg:Z[4], bgH: note ? box[1]+box[3] : 0, field:fig?0:n, newest:!o.fig, anim:o.anim })   // no texture under the note
    +(note ? '<div class="skynote">'+esc(note)+'</div>' : '')+'</div>';
}
// this week as the fold reads it: credit W toward target T (light weeks: 1), and whether its star is in
function starWeekNow(){ const id=starWeekId(), r=starWeekRange(id), map=starDayMap(r[0],r[1]), t=starTargetFor(id,map), w=weekStarCredit(id,map,t.why==="injury");
  return { id, T:t.T, light:t.mode==="l", W:w.W, earned:!!(((settings.stars||{}).earned||{})[id]) }; }
// the micro-session toast's neutral clause: "1.6 of 2 this week" (nothing once the star is in, or with stars off)
function starWeekClause(){ if(!starsOn()) return ""; const w=starWeekNow(); return w.earned || !(w.W>0) ? "" : starCopy("microWeek",{W:starW1(w.W), T:w.T}); }
// W for display, floored to a tenth: 1.97 reads "1.9 of 2", never "2 of 2" without the star
function starW1(W){ return Math.floor(W*10+1e-6)/10; }
// this week's line (Me sky card, Overview stars card). short: the Overview's one-line form once the star is in
function starWeekHTML(short){ const w=starWeekNow();
  if(w.earned){ const rest = readiness(0)==="overreached" || (settings.sinceDeload||0)>=DELOAD_AT;
    return '<span class="stglyph">'+starIcon()+'</span><span>'+esc(short ? STAR_COPY.spotlight : STAR_COPY[rest?"weekInRest":"weekIn"])+'</span>'; }
  if(w.W>0) return '<span class="swbar"><i style="width:'+Math.round(Math.min(1,w.W/w.T)*100)+'%"></i></span><span><b>'+esc(starCopy("weekPart",{W:starW1(w.W), T:w.T}))+'</b></span>';
  return '<span>'+esc(w.light ? STAR_COPY.weekZeroLight : w.T===1 ? STAR_COPY.weekZeroOne : starCopy("weekZero",{T:w.T}))+'</span>';
}
function renderStarWeek(){ const el=$("starWeek"); if(el) el.innerHTML=starWeekHTML(); }
// the Overview's compact stars card, right after Today: the figure being filled, the count, and this week's line
function ovStarsHTML(){
  if(!starsOn()) return "";
  const n=starCount(), pg=skyProgress(n), just=pg.fig && !pg.lit && pg.done.length;   // just finished: keep it lit until the next figure starts
  const fig = just ? pg.done[pg.done.length-1] : pg.fig, lit = just ? fig.pts.length : pg.lit;
  const cap = !fig ? starCopy("skyField",{n}) : !n ? fig.name : starCopy("skyCap",{name:fig.name, lit, total:fig.pts.length});
  return '<div class="ed-label">'+esc(STAR_COPY.ovLabel)+'</div><div class="group ovtap" id="ovStars" role="button" tabindex="0" aria-label="'+esc(STAR_COPY.skyOpen)+'"><div class="pad ovstars">'
    +'<span class="starsky glyph'+(fig && fig.sky===2?' sky2':'')+'">'+drawConstellation(fig, lit, {w:72,h:56,box:[8,8,56,40],r:2.6,halo:false,bg:5,field:fig?0:n})+'</span>'
    +'<div class="tsum-main"><div class="tsum-stat">'+(n ? n+'<span class="u">'+(n===1?'star':'stars')+'</span>' : esc(STAR_COPY.ovEmpty))+'</div>'
    +'<div class="tsum-cap">'+esc(cap)+'</div><div class="starweek">'+starWeekHTML(true)+'</div></div><span class="tsum-chev"></span></div></div>';
}
// "2026 · 38 stars" + one small star per earned week of that year; earlier years behind "‹ 2025" (only if they have stars)
let _starYr=null;
function renderStarYear(){
  const el=$("starYear"); if(!el) return; const by={};
  starKeys().forEach(k=>{ (by[k.slice(0,4)]=by[k.slice(0,4)]||[]).push(k); });
  const ys=Object.keys(by).sort(), cy=String(new Date().getFullYear());
  if(!ys.length){ el.hidden=true; return; }
  const y = _starYr && by[_starYr] ? _starYr : by[cy] ? cy : ys[ys.length-1], i=ys.indexOf(y), prev=ys[i-1], next=ys[i+1];
  el.hidden=false;
  el.innerHTML='<div class="syhd">'+(prev?'<button type="button" class="synav" data-y="'+prev+'">‹ '+prev+'</button>':'')
    +'<span class="syl">'+esc(starCopy("year",{year:y, stars:starsN(by[y].length)}))+'</span>'
    +(next?'<button type="button" class="synav" data-y="'+next+'">'+next+' ›</button>':'')+'</div>'
    +'<div class="syrow">'+by[y].map(()=>starIcon()).join('')+'</div>';
  el.querySelectorAll(".synav").forEach(b=> b.onclick=e=>{ e.stopPropagation(); _starYr=b.dataset.y; renderStarYear(); });
}
function renderStars(){
  const top=$("starTop"); if(!top) return; const on=starsOn();
  const t=$("starFoldT"); if(t) t.textContent=on?STAR_COPY.fold:STAR_COPY.foldOff;
  top.hidden=!on; const off=$("starOff"); if(off) off.hidden=on; const me=$("meSky"); if(me) me.hidden=!on;
  if(!on) return;
  $("starSky").innerHTML=skyBox("card");
  renderStarWeek(); renderStarYear(); top.hidden=$("starYear").hidden;
}
function renderStarsEverywhere(){
  renderStars(); renderAchievements(); renderCalendar();
  if($("sheetStars") && $("sheetStars").classList.contains("show")) renderStarsSheet();
  const pg=document.querySelector(".page.active"); if(pg && pg.dataset.tab==="overview") renderOverview();
}
// a settings change from the Stars sheet: re-check this + last week (it's a user action, so it may celebrate).
// quiet (the intro sheet, which has no particles): record a star the change earns, with no burst, toast or post
function starsChanged(quiet){
  if(quiet){ checkStars({silent:true}); sset("settings",settings); renderStarsEverywhere(); return; }
  const sr=checkStars(), sm=starMoment(sr), fresh=checkAchievements(), cp=consistPost(sr, {rings:false}); sset("settings",settings);
  if(fresh.length || sm.star || sm.constellation) celebrateMoment(Object.assign({ achIds:fresh, shared:cp.star }, sm));
  renderStarsEverywhere();
}
// 1 · 2 · 3 · 4 · Match plan; a change applies from this week (earned stars are never re-scored)
function starTargetHTML(){
  const st=settings.stars||{}, cur = st.target==="plan" ? "plan" : String(starBaseTarget()), p=activePlan(), d=p ? Math.round(planSessionsPerWeek(p)) : 0, T=starBaseTarget();
  return '<div class="seg appearance sttarget" role="radiogroup" aria-label="'+esc(STAR_COPY.yourWeek)+'">'+["1","2","3","4","plan"].map(v=>
      '<div class="s'+(v===cur?' active':'')+'" data-t="'+v+'" role="radio" tabindex="0" aria-checked="'+(v===cur)+'">'+(v==="plan"?esc(STAR_COPY.matchPlan):v)+'</div>').join('')+'</div>'
    +'<p class="levelcap">'+esc(STAR_COPY.picker)+'</p>'
    +(d>T && T>=2 ? '<p class="levelcap">'+esc(starCopy("planCtx",{d, T}))+'</p>' : '');
}
function wireStarTarget(host, after, quiet){
  host.querySelectorAll(".sttarget .s").forEach(el=> el.onclick=()=>{ if(!settings.stars) seedStars(); const st=settings.stars, wk=starWeekId();
    if(st.tWk!==wk){ st.tPrev=starBaseTarget(); st.tWk=wk; }   // last week keeps the target it ended under
    st.target = el.dataset.t==="plan" ? "plan" : +el.dataset.t; haptic(8); starsChanged(quiet); if(after) after(); });
}
// the light reason a mode or the log sets for this week right now (the manual switch can't clear these)
function starLiveWhy(id){ const r=starWeekRange(id);
  if(id===starWeekId()){ if(activeInjuries().length) return "injury"; if(settings.travelMode && settings.travelMode!=="off") return "travel"; if(starDeloadWk()===id) return "deload"; }
  if(settings.deloadAt>=r[0] && settings.deloadAt<r[1]) return "deload";
  return weekStarCredit(id, starDayMap(r[0],r[1])).tv ? "travel" : null; }
function swRow(id, label, on, dis){ return '<label class="swrow'+(dis?' dis':'')+'"><span>'+esc(label)+'</span><input type="checkbox" class="livesw" id="'+id+'"'+(on?' checked':'')+(dis?' disabled':'')+' role="switch"><span class="liveswui acc" aria-hidden="true"></span></label>'; }
const STAR_EV=[["weekendwarrior","evWeekend"],["maintain","evMaintain"],["comeback","evComeback"],["deload","evDeload"]];
let _stDone=null;   // the completed figure opened in the sheet
function skyAnimDue(n){ let seen=-1; try{ seen=+(localStorage.getItem("yallaSkyDrawn")||-1); }catch(e){} return n>seen; }
function skyAnimSeen(n){ try{ localStorage.setItem("yallaSkyDrawn", String(n)); }catch(e){} }
function openStarsSheet(){
  const pg=skyProgress(), done=pg.done;
  _stDone=null;
  // first open after a completion: draw the newest finished figure in, once — at the top while it's still the one
  // shown there (no star of the next figure yet), otherwise opened from the Completed row
  const anim = starsOn() && done.length && skyAnimDue(done.length);
  if(anim){ if(pg.lit) _stDone=done[done.length-1].id; skyAnimSeen(done.length); }
  renderStarsSheet(anim); openSheet("Stars"); requestAnimationFrame(stDoneInView);   // laid out only once the sheet shows
}
function renderStarsSheet(anim){
  const body=$("starsBody"); if(!body) return;
  body.classList.add("stsheet");
  const st=settings.stars||{}, on=starsOn(), pg=skyProgress(), ks=starKeys();
  let h="";
  if(on){
    h+=skyBox("sheet",{anim: anim && !_stDone});
    if(pg.done.length){
      let at=0; const done=pg.done.map(f=>{ const s0=at; at+=f.pts.length; return { f, s0, wk:ks.slice(s0, at) }; });
      h+='<div class="ed-label">'+esc(STAR_COPY.done)+'</div><div class="stdone">'+done.map(d=>'<button type="button" data-f="'+d.f.id+'"'+(_stDone===d.f.id?' class="on"':'')+'>'
        +'<span class="starsky glyph'+(d.f.sky===2?' sky2':'')+'">'+drawConstellation(d.f, d.f.pts.length, {w:72,h:56,box:[8,8,56,40],r:2.6,halo:false,bg:5})+'</span>'
        +'<span class="nm">'+esc(d.f.name)+'</span><span class="mo">'+esc(starMonth(d.wk[d.wk.length-1]))+'</span></button>').join('')+'</div>';
      const d=done.find(x=>x.f.id===_stDone);
      if(d){ const r0=starWeekRange(d.wk[0])[0], r1=starWeekRange(d.wk[d.wk.length-1])[1], map=starDayMap(r0,r1), E=st.earned||{};
        h+='<div class="stwks">'+skyBox("done",{fig:d.f, sub:starMonth(d.wk[d.wk.length-1]), anim})
          +'<div class="group" style="margin-top:var(--gap-card);"><div class="pad">'+d.wk.map(id=>{ const n=weekStarCredit(id,map).days, p=id.split("-").map(Number);
            return '<div class="stwk"><span>'+esc(starCopy("weekDetail",{date:fmtStarDate(new Date(p[0],p[1]-1,p[2])), s:n+" session"+(n===1?"":"s")}))+'</span>'
              +(/l/.test(E[id]||"")?'<span>'+esc(STAR_COPY.lightWeek)+'</span>':'')+'</div>'; }).join('')+'</div></div>'
          +'<button type="button" class="btn tinted wide" id="stShareFig" style="margin-top:var(--gap-card);">'+esc(STAR_COPY.shareFig)+'</button></div>'; }
    }
    h+='<div class="ed-label">'+esc(STAR_COPY.yourWeek)+'</div>'+starTargetHTML();
    const cur=starWeekId(), why=(st.light||{})[cur], live=starLiveWhy(cur);
    h+='<div class="ed-label">'+esc(STAR_COPY.light)+'</div><div class="group"><div class="pad">'+swRow("stLight", STAR_COPY.lightSw, !!why || !!live, !!live)
      +((why||live) ? '<div class="chips wrap one">'+Object.keys(STAR_LIGHT).map(k=>'<button type="button" class="chip'+(k===(live||why)?' on':'')+'" data-why="'+k+'"'+(live?' disabled':'')+'>'+esc(STAR_LIGHT[k])+'</button>').join('')+'</div>' : '')
      +'<p class="levelcap">'+esc(live ? starCopy("lightAuto",{why:STAR_LIGHT[live].toLowerCase()}) : STAR_COPY.lightHelp)+'</p></div></div>';
  }
  h+='<div class="ed-label">'+esc(STAR_COPY.howTitle)+'</div><div class="group"><div class="pad"><p class="ovp">'+esc(STAR_COPY.how)+'</p><div class="chips wrap">'
    +STAR_EV.map(([id,k])=>{ const a=(EVIDENCE.advice||[]).find(x=>x.id===id); if(!a) return "";
      const u=TIP_DOI[id], inner=esc(STAR_COPY[k])+' <small>'+(a.tone==="linked"?esc(STAR_COPY.evLinked)+' · ':'')+esc(shortCite(a.study))+'</small>';
      return u ? '<a class="chip evc" href="'+esc(u)+'" target="_blank" rel="noopener">'+inner+' <span class="srcarrow">↗</span></a>' : '<span class="chip evc">'+inner+'</span>'; }).join('')
    +'</div></div></div>';
  const canPost = on && cloudReady() && (settings.shareLevel||0)>=1;
  h+='<div class="group"><div class="pad">'+swRow("stOn", STAR_COPY.showStars, on)
    +(canPost ? swRow("stPost", STAR_COPY.post, st.post!==false)+'<p class="levelcap">'+esc(STAR_COPY.postHelp)+'</p>' : '')+'</div></div>';
  // "Share your sky": the sky card (renderStarTile), once there is a star to show
  if(on && ks.length) h+='<button type="button" class="btn tinted wide" id="stShare">'+esc(STAR_COPY.share)+'</button>';
  body.innerHTML=h;
  wireStarTarget(body);
  body.querySelectorAll(".stdone button").forEach(b=> b.onclick=()=>{ _stDone = _stDone===b.dataset.f ? null : b.dataset.f; renderStarsSheet(); });
  // a manual change stamps the week (stars.lightSet), so switching it off survives a sync with a device that still has it on
  const lightSet=()=>{ const st=settings.stars, cur=starWeekId(), prev=starWeekId(starWeekRange(cur)[0]-1), S={};
    Object.keys(st.lightSet||{}).forEach(k=>{ if(k>=prev) S[k]=st.lightSet[k]; }); S[cur]=Date.now(); st.lightSet=S; };
  const lt=$("stLight"); if(lt) lt.onchange=()=>{ if(!settings.stars) seedStars(); const L=settings.stars.light=settings.stars.light||{}, cur=starWeekId();
    if(lt.checked) L[cur]=L[cur]||"busy"; else delete L[cur]; lightSet(); starsChanged(); };
  body.querySelectorAll(".chip[data-why]").forEach(c=> c.onclick=()=>{ if(c.disabled) return; settings.stars.light=settings.stars.light||{}; settings.stars.light[starWeekId()]=c.dataset.why; lightSet(); starsChanged(); });
  $("stOn").onchange=e=>{ if(!settings.stars) seedStars(); settings.stars.on=e.target.checked; starsChanged(); };
  const sp=$("stPost"); if(sp) sp.onchange=e=>{ settings.stars.post=e.target.checked; sset("settings",settings); };
  const sh=$("stShare"); if(sh) sh.onclick=()=>shareStarCard("sky");
  const sf=$("stShareFig"); if(sf) sf.onclick=()=>{ const f=SKY.find(x=>x.id===_stDone); if(f) shareStarCard("const", f); };
  stDoneInView();
}
// the open figure's tile in view: the Completed row scrolls sideways only, never the sheet
function stDoneInView(){ const row=document.querySelector("#starsBody .stdone"), sel=row && row.querySelector("button.on"); if(!sel) return;
  const a=row.getBoundingClientRect(), b=sel.getBoundingClientRect(); if(b.right>a.right || b.left<a.left) row.scrollLeft += b.right>a.right ? b.right-a.right : b.left-a.left; }
// shown once, on the next open of Overview or Me after the first count of your history (no particles)
// openedAt: when the tab was opened — the count must predate it, so the launch that seeds never pops the sheet
function maybeStarIntro(openedAt){
  const st=settings.stars; if(!st || st.introSeen!==false || !starsOn() || !(st.seededAt<openedAt) || (cloudUser && !_reconciled)) return;   // a sync may still bring the sky in
  if(!starCount()){ st.introSeen=true; starSave(); return; }   // nothing counted yet: the empty sky explains itself
  if(document.querySelector(".sheet.show") || document.querySelector("#onboardWrap.show") || sessionUnderway()) return;
  const pg=document.querySelector(".page.active"); if(!pg || (pg.dataset.tab!=="overview" && pg.dataset.tab!=="me")) return;
  st.introSeen=true; starSave();
  const render=()=>{ const b=$("starIntroBody"); b.classList.add("stsheet");
    const n=starCount(), nb=Object.values(settings.stars.earned||{}).filter(m=>String(m).charAt(0)==="b").length;   // "from your history" only when every star is back-filled
    b.innerHTML='<p class="sheetintro">'+esc(starCopy(nb===n ? "intro" : "introAll",{stars:starsN(n)}))+'</p>'+skyBox("intro")+'<div class="ed-label">'+esc(STAR_COPY.yourWeek)+'</div>'+starTargetHTML()
      +'<button type="button" class="btn wide" id="starIntroOk" style="margin-top:var(--gap-section);">'+esc(STAR_COPY.ok)+'</button>';
    wireStarTarget(b, render, true); $("starIntroOk").onclick=()=>closeSheet("StarIntro"); };
  render(); openSheet("StarIntro");
}
if($("meSky")){ const o=()=>openStarsSheet(); $("meSky").onclick=o; $("starSky").onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); o(); } }; }
if($("starOff")) $("starOff").onclick=()=>openStarsSheet();
if($("achGrid")){ const go=e=>{ const t=e.target.closest(".ach[data-id]"); if(t) openAchDetail(t.dataset.id); };
  $("achGrid").onclick=go; $("achGrid").onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); go(e); } }; }
[["Stars","starsClose"],["StarIntro","starIntroClose"],["Ach","achClose"]].forEach(([s,b])=>{ if($(b)) $(b).onclick=()=>closeSheet(s); if($("scrim"+s)) $("scrim"+s).onclick=()=>closeSheet(s); });

// ================= progress diagnostic (nutrition vs training) =================
function bwSlopePctWk(days){
  const cut=Date.now()-days*86400000;
  const pts=(bw||[]).filter(p=>p.d>=cut).slice().sort((a,b)=>a.d-b.d);
  if(pts.length<2) return null;
  const a=pts[0], b=pts[pts.length-1], wks=(b.d-a.d)/(7*86400000), ka=parseFloat(a.kg), kb=parseFloat(b.kg);
  if(wks<1 || !ka) return null;
  return ((kb-ka)/ka)*100/wks;
}
const OBJ_LABELS={ muscle:"Build muscle", strength:"Get stronger", fatloss:"Lose fat", fitness:"Stay fit" };
// what the scale should do for each objective (drives the "on track" read)
function objectiveDir(){ const o=settings.objective; return o==="fatloss"?"lose":o==="muscle"?"gain":"maintain"; }
async function setObjective(o){
  const nm=$("obName"), ob=$("onboardWrap");                       // capture the forename when this comes from onboarding
  if(nm && ob && ob.classList.contains("show") && nm.value.trim()) settings.name=nm.value.trim().slice(0,24);
  settings.objective=o; await sset("settings",settings);
  renderObjective();
  if(ob) ob.classList.remove("show");
  renderDash(); if(typeof renderOverview==="function") renderOverview();
}
function renderObjective(){ document.querySelectorAll("#objChips .chip").forEach(c=>{ c.classList.toggle("on", c.dataset.v===settings.objective); c.classList.remove("pending"); });
  const fa=settings.focusAreas||["balanced"]; document.querySelectorAll("#focusChips .chip").forEach(c=>{ c.classList.toggle("on", fa.indexOf(c.dataset.v)>=0); c.classList.remove("pending"); });
  renderInjuryRow(); renderWeakSpots(); placeGoalBlock(); }
// training focus — pending until confirmed; up to two, Balanced + an area = a light lean
document.querySelectorAll("#focusChips .chip").forEach(c=> c.onclick=()=>{
  let sel=(_pendFocus||settings.focusAreas||[]).slice();
  const v=c.dataset.v, i=sel.indexOf(v);
  if(i>=0) sel.splice(i,1); else { sel.push(v); if(sel.length>2) sel.shift(); }
  if(!sel.length) sel=["balanced"];
  _pendFocus=sel;
  document.querySelectorAll("#focusChips .chip").forEach(x=>{ const on=sel.indexOf(x.dataset.v)>=0; x.classList.toggle("on",on); x.classList.toggle("pending",on); });
  showInlineConfirm("focusConfirm", "Update your training focus?", async()=>{ const f=_pendFocus; _pendFocus=null; settings.focusAreas=f; await sset("settings",settings); renderObjective(); });
});
function progressInsight(){
  const sessions=settings.sessions||0, slope=bwSlopePctWk(28), perWk=trainingDays(28)/4;
  const obj=settings.objective, gs=+settings.goalStart, gt=+settings.goalTarget;
  const dir = obj ? objectiveDir() : ((gt>gs+0.5)?"gain":(gt<gs-0.5)?"lose":"maintain");
  if(slope===null || sessions<3)
    return { v:"more", title:"Keep logging to unlock this", text:"Once you've logged weigh-ins across 2–3 weeks and a few sessions, this will weigh your weight trend against your training and flag whether nutrition or training is the more likely brake on progress.", src:[] };
  if(perWk<1.5)
    return { v:"training", title:"Training consistency is the brake", text:"You've averaged under ~1.5 sessions a week this month. Before touching nutrition, the biggest lever is simply training regularly — consistent progressive overload is what drives the adaptation.", src:["sch16","sch17"] };
  // You're training often enough — but are the muscles actually getting enough weekly volume to grow?
  const wk28=weeklyEquiv(muscleVolume(28,"sets").totals, 28);
  const trained=MGROUPS.filter(g=>(wk28[g]||0)>0), under=trained.filter(g=> !NO_TARGET.has(g) && wk28[g]<WEEKLY_SET_MIN);
  if(trained.length>=4 && under.length>=Math.ceil(trained.length/2))
    return { v:"training", title:"Training volume is the brake", text:"You're training regularly, but over the last month "+under.length+" of "+trained.length+" muscle groups are getting fewer than ~"+WEEKLY_SET_MIN+" hard sets a week — under the volume most people need to grow. Adding sets to the under-dosed groups (open Muscle balance to see which) is the most direct lever before changing nutrition.", src:["sch17","drr"] };
  if(dir==="gain"){
    if(slope<0.1) return { v:"nutrition", title:"Likely nutrition", text:"You're training consistently, but your weight has stayed roughly flat over the last month. Building muscle generally needs a small, steady energy surplus — flat weight on a gain goal most often means you're eating a little too little to support growth.", src:["slater","garthe","morton"] };
    if(slope>1.2) return { v:"nutrition", title:"Likely nutrition — ease the surplus", text:"You're gaining fairly fast (over ~1.2%/week). Past roughly 0.25–0.5%/week, the extra tends to be mostly fat rather than muscle. Easing the surplus a little keeps your gains leaner.", src:["garthe","slater"] };
    return { v:"ontrack", title:"Nutrition and training look aligned", text:"You're training consistently and gaining at a sensible pace (~0.1–1.2%/week) — about what supports muscle growth. Keep the progressive overload going and stay patient.", src:["garthe","sch17"] };
  }
  if(dir==="lose"){
    if(slope>-0.1) return { v:"nutrition", title:"Likely nutrition", text:"You're training consistently but your weight isn't trending down. Fat loss comes from a modest energy deficit — training can't outrun intake. Keeping protein high while you lift protects muscle as you lose.", src:["helms","morton"] };
    if(slope<-1.5) return { v:"nutrition", title:"Likely nutrition — slow it down", text:"You're losing quite fast (over ~1.5%/week). Aggressive deficits tend to cost muscle and performance; around 0.5–1%/week with high protein preserves more of what you've built.", src:["helms","garthe"] };
    return { v:"ontrack", title:"On track", text:"You're losing at a sustainable rate while still training — the sweet spot for keeping muscle through a cut. Keep lifting heavy and protein high.", src:["helms"] };
  }
  if(obj==="strength")
    return { v:"ontrack", title:"On track for strength", text:"Strength comes from progressive overload, not the scale — and your weight's about steady, which is fine. Keep adding a rep or a little load over time and stay consistent.", src:["sch17","sch16"] };
  if(obj==="fitness")
    return { v:"ontrack", title:"On track", text:"For general fitness the win is simply showing up — your weight's steady and you're training regularly. Keep the rhythm going.", src:["sch16"] };
  return { v:"training", title:"Training is the lever now", text:"Your weight's near maintenance, so progress now comes from training quality — progressive overload, enough weekly volume per muscle, and recovery.", src:["sch17","sch16"] };
}
function renderInsight(){
  const box=$("progInsight"); if(!box) return;
  const r=progressInsight();
  box.className="insight v-"+r.v;
  box.innerHTML='<div class="ititle">'+esc(r.title)+'</div><div class="itext">'+esc(r.text)+'</div>';
  const sb=$("progSrcBox"), sl=$("progSrc");
  if(r.src && r.src.length){ sb.style.display=""; sl.innerHTML=r.src.map(srcLi).join(''); }
  else sb.style.display="none";
}
// ===== plan forecast — projects expected growth from the plan's weekly volume per muscle =====
// Weekly sets per muscle from the rotation workouts (rotate:false alternates excluded), scaled by how many
// sessions/week you actually run vs how many distinct workouts the rotation has.
function planWeeklySets(plan){
  const rot=(plan.workouts||[]).filter(w=>w.rotate!==false);
  const totals={};
  rot.forEach(w=>(w.ex||[]).forEach(e=>{ if(!e.n) return; const groups=muscleFor(e.n), n=Math.max(1,parseInt(e.s)||3);
    groups.forEach((g,i)=> totals[g]=(totals[g]||0)+(i===0?n:n*0.5)); }));
  // scale per-rotation volume to per-week by how often you actually run it; cap at 1.2× so an ambitious
  // declared frequency on a short rotation doesn't over-promise weekly sets.
  const nW=rot.length||1, perWk=planSessionsPerWeek(plan)||nW, scale=Math.min(1.2, perWk/nW);
  const wk={}; Object.keys(totals).forEach(g=> wk[g]=totals[g]*scale);
  return wk;
}
// Evidence-based outlook (sch17 dose-response; drr volume weighting; rpvol MEV/MAV landmarks ~10→20 sets).
// Honest by design: no promised cm/kg — it reports the dose vs the growth window and what to fix.
function planForecast(plan){
  plan = plan || activePlan();
  const wk = planWeeklySets(plan);
  const major=["Chest","Lats","Upper Back","Front Delts","Side Delts","Rear Delts","Biceps","Triceps","Quads","Hamstrings","Glutes","Calves","Core"];
  const trained=major.filter(m=>(wk[m]||0) >= 1);
  if(trained.length < 3)
    return { v:"more", title:"Pick a plan to see its outlook", text:"Choose or build a training plan and this projects, muscle by muscle, whether its weekly volume is set to grow you, hold you, or fall short.", src:[] };
  const grow=[], under=[], over=[];
  trained.forEach(m=>{ const s=wk[m]||0;
    if(s < WEEKLY_SET_MAINT) under.push(m);          // below maintenance
    else if(s >= WEEKLY_SET_MIN && s <= 20) grow.push(m);   // productive growth window
    else if(s > 20) over.push(m);                    // past the productive range
    /* else WEEKLY_SET_MAINT..WEEKLY_SET_MIN = maintenance dose */ });
  const hyp=planScores(plan).hyp, perWk=planSessionsPerWeek(plan), novice=(settings.sessions||0)<30, obj=settings.objective;
  const sh=g=>MSHORT[g]||g, listm=arr=>listWords(arr.slice(0,3).map(sh))+(arr.length>3?", and more":"");
  let v, title, text;
  if(perWk < 2){
    v="training"; title="Forecast: train a little more often";
    text="As written this plan runs about "+perWk+" session"+(perWk===1?"":"s")+" a week. Most muscles grow best trained ~2× a week, so frequency is the biggest lever here before anything else.";
  } else {
    const growN=grow.length, t=trained.length;
    const qual = hyp>=4 ? " on high-quality, stretch-loaded moves" : hyp>=3.3 ? " on solid exercise picks" : "";
    const horizon = novice ? "As a newer lifter, expect noticeable gains over the first 8–12 weeks" : "Expect steady gains over 8–12 weeks";
    if(under.length >= Math.ceil(t/2)){
      v="training"; title="Forecast: under-dosed to grow";
      text = under.length+" of "+t+" trained muscles get under ~"+WEEKLY_SET_MAINT+" hard sets a week — below what holds size, let alone builds it. Add sets to "+listm(under)+" to turn this into a growth plan.";
    } else if(growN >= Math.round(t*0.6)){
      v="grow"; title="Forecast: strong growth potential";
      text = growN+" of "+t+" trained muscles get a growth dose (≈"+WEEKLY_SET_MIN+"–20 hard sets/week)"+qual+". "+horizon+" if you add a rep or a little load most weeks.";
    } else if(growN >= Math.max(1, Math.round(t*0.3))){
      v="ontrack"; title="Forecast: steady, room to push";
      text = growN+" of "+t+" muscles get a growth dose; the rest sit around maintenance. "+horizon+" — fastest in the well-dosed groups. Nudge a few more past ~"+WEEKLY_SET_MIN+" sets to grow across the board.";
    } else {
      v="maintenance"; title="Forecast: maintenance-level volume";
      text = "Most muscles get a maintenance dose (~"+WEEKLY_SET_MAINT+"–"+WEEKLY_SET_MIN+" sets/week)"+qual+" — enough to hold size and keep building strength through progressive overload, but under the ~"+WEEKLY_SET_MIN+"–20 sets that drive much new growth. Add a set or two to the muscles you most want to grow.";
    }
    if(under.length && !(under.length >= Math.ceil(t/2))) text += " "+(under.length===1?sh(under[0])+" is":listm(under)+" are")+" under ~"+WEEKLY_SET_MAINT+" sets — too little to hold; add a couple if they matter to you.";
    if(over.length) text += " "+(over.length===1?sh(over[0])+" sits":listm(over)+" sit")+" above ~20 sets — past the productive range for most, so more won't help.";
  }
  if(obj==="strength") text += " For strength, keep the main lifts heavy and add load before reps.";
  else if(obj==="fatloss") text += " In a deficit this volume is about protecting the muscle you have — keep the loads up.";
  const src=["sch17","drr","rpvol"]; if(perWk<2) src.unshift("sch16");
  return { v, title, text, src };
}
// Per-muscle plan outlook: classify each muscle the plan prescribes by its weekly sets vs the landmarks.
function planMuscleStates(plan){
  const wk=planWeeklySets(plan||activePlan());
  const major=["Chest","Lats","Upper Back","Front Delts","Side Delts","Rear Delts","Biceps","Triceps","Quads","Hamstrings","Glutes","Calves","Core"];
  const out=[];
  major.forEach(g=>{ const s=wk[g]||0; if(s<1 || NO_TARGET.has(g)) return;
    let st = s<WEEKLY_SET_MAINT ? "shrink" : s>HIGH_SET_CAP ? "over" : s>=WEEKLY_SET_MIN ? "grow" : "hold";
    out.push({g, sets:s, state:st}); });
  const rank={shrink:0, hold:1, over:2, grow:3};
  out.sort((a,b)=> rank[a.state]-rank[b.state] || b.sets-a.sets);
  return out;
}
const PLAN_ARROW={grow:"↑", hold:"→", shrink:"↓", over:"≈"};
// Plan outlook block for the About-this-plan sheet: verdict + per-muscle chips + sources.
function planOutlookHTML(plan){
  plan=plan||activePlan();
  const r=planForecast(plan);
  let h='<div class="ed-label">Your plan’s outlook</div>';
  h+='<div class="insight v-'+r.v+'" style="margin:0;"><div class="ititle">'+esc(r.title)+'</div><div class="itext">'+esc(r.text)+'</div>';
  const pm=planMuscleStates(plan);
  if(pm.length){
    h+='<div class="pmgrid">'+pm.map(p=>'<span class="gchip '+p.state+'" title="'+esc(p.g+" · ~"+round1(p.sets)+" sets/wk in this plan")+'">'+esc(MSHORT[p.g]||p.g)+' <span class="garrow">'+PLAN_ARROW[p.state]+'</span></span>').join('')+'</div>'
      +'<p class="pmcap">By muscle, from the plan’s weekly sets · ↑ growth dose · → maintenance · ↓ under-dosed · ≈ past the productive range.</p>';
  }
  h+='</div>';
  h+='<p class="fcnote" style="margin-top:8px;">'+WP_LINK+'</p>';   // plan forecast = white paper §plan forecast
  if(r.src&&r.src.length) h+='<details class="hsrc" style="margin-top:8px;"><summary>Sources</summary><ul>'+r.src.map(srcLi).join('')+'</ul></details>';
  return h;
}
// Muscle-size projection — now drawn inside the Strength detail sheet (see renderStrength). Sets _fcF so
// the strength summary can show a size-outlook line and the By-muscle toggle can redraw.
function renderGrowthForecast(){
  if(!$("fcChart")) return;
  const f=(typeof growthForecast==="function")?growthForecast():null;
  _fcF=f; if(!f) return;
  drawForecast(f); drawForecastSens(f);
}
let _fcF=null;   // last computed forecast, reused by the strength summary line
// ===== customisable Me tiles — reorder (drag in edit mode) and show/hide, persisted per user =====
const TILE_ICON = { eye:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeoff:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.9 17.9A10.4 10.4 0 0 1 12 19C5.5 19 2 12 2 12a18.5 18.5 0 0 1 5.1-5.9M9.9 4.2A10.9 10.9 0 0 1 12 4c6.5 0 10 7 10 7a18.6 18.6 0 0 1-2.2 3.2M1 1l22 22M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>' };
const tileHidden=()=> settings.meTileHidden||[];
// Apply user visibility: a hidden tile gets .tile-off (CSS hides it, or dims it while editing so it can be
// re-enabled). A class — not inline display — so it never fights the forecast/ledger tiles' own data-driven show/hide.
function applyTileVisibility(){
  const c=$("meTiles"); if(!c) return; const hid=new Set(tileHidden());
  c.querySelectorAll(".metile").forEach(el=>{ const off=hid.has(el.dataset.tile);
    el.classList.toggle("tile-off", off);
    const b=el.querySelector(".tilehide"); if(b){ b.innerHTML=off?TILE_ICON.eyeoff:TILE_ICON.eye; b.title=off?"Show tile":"Hide tile"; } });
}
const TILE_DEFAULT = ["strength","balance","progress","cardio"];   // forecast merged into strength; data-tile ids match the summary cards
function applyTileOrder(){
  const c=$("meTiles"); if(!c) return;
  const present=new Set([...c.querySelectorAll(".metile")].map(el=>el.dataset.tile));
  const order=(settings.meTileOrder||[]).filter(t=>present.has(t));
  // Insert any present tile missing from the saved order at its DEFAULT slot (next to its default
  // neighbour) rather than blindly at the end — so a newly added/reprioritised tile lands where it
  // belongs even for a user who already has a saved order. Truly-unknown tiles fall through to the end.
  TILE_DEFAULT.forEach((t,i)=>{ if(present.has(t) && !order.includes(t)){
    let pos=order.length;
    for(let j=i-1;j>=0;j--){ const p=order.indexOf(TILE_DEFAULT[j]); if(p>=0){ pos=p+1; break; } }
    order.splice(pos,0,t);
  }});
  present.forEach(t=>{ if(!order.includes(t)) order.push(t); });
  order.forEach(t=>{ const el=c.querySelector('.metile[data-tile="'+t+'"]'); if(el) c.appendChild(el); });
  applyTileVisibility();
}
async function saveTileOrder(){
  const c=$("meTiles"); if(!c) return;
  settings.meTileOrder=[...c.querySelectorAll(".metile")].map(t=>t.dataset.tile);
  await sset("settings",settings);
}
(function initTileReorder(){
  const c=$("meTiles"); if(!c) return;
  // one show/hide button per tile, dropped into its header (revealed only in edit mode)
  c.querySelectorAll(".metile").forEach(el=>{ const hd=el.querySelector(".panelhd");
    if(hd && !hd.querySelector(".tilehide")){
      const b=document.createElement("button"); b.type="button"; b.className="tilehide"; b.setAttribute("aria-label","Show or hide this tile");
      hd.appendChild(b);
      b.addEventListener("pointerdown", e=>e.stopPropagation());   // don't start a drag from the toggle
      b.addEventListener("click", e=>{ e.stopPropagation(); e.preventDefault();
        const id=el.dataset.tile, s=new Set(tileHidden()); if(s.has(id)) s.delete(id); else s.add(id);
        settings.meTileHidden=[...s]; sset("settings",settings); applyTileVisibility(); haptic(8); });
    } });
  // edit-mode toggle: reveals grips + hide buttons and turns on drag-to-reorder
  const eb=$("tileEdit"), rb=$("tileReset");
  function setEdit(on){ c.classList.toggle("editing", on); if(eb) eb.textContent=on?"Done":"Edit"; if(rb) rb.style.display=on?"":"none"; if(!on) saveTileOrder(); }
  if(eb) eb.onclick=()=> setEdit(!c.classList.contains("editing"));
  if(rb) rb.onclick=()=>{ settings.meTileOrder=null; settings.meTileHidden=[]; sset("settings",settings);
    TILE_DEFAULT.forEach(t=>{ const el=c.querySelector('.metile[data-tile="'+t+'"]'); if(el) c.appendChild(el); });
    applyTileVisibility(); toast&&toast("Tiles reset"); };
  // drag-to-reorder (edit mode): the whole tile lifts and follows the finger, a dashed placeholder shows
  // where it will drop, so it's obvious what's grabbed and where it's going.
  let drag=null, ph=null, dy=0, ox=0, oy=0;
  c.addEventListener("pointerdown", e=>{
    if(!c.classList.contains("editing")) return;
    const el=e.target.closest(".metile"); if(!el || el.classList.contains("tile-off") || e.target.closest(".tilehide")) return;
    e.preventDefault(); drag=el;
    const r=el.getBoundingClientRect(); dy=e.clientY-r.top;
    ph=document.createElement("div"); ph.className="tileph"; ph.style.height=r.height+"px";
    el.parentNode.insertBefore(ph, el);
    // a transformed #track is the containing block for position:fixed, so offset by it
    const t=c.closest("#track"), cb=t&&getComputedStyle(t).transform!=="none"?t.getBoundingClientRect():{left:0,top:0}; ox=cb.left; oy=cb.top;
    el.style.width=r.width+"px"; el.style.left=(r.left-ox)+"px"; el.style.top=(r.top-oy)+"px"; el.classList.add("dragging");
    try{ el.setPointerCapture(e.pointerId); }catch(_){}
    haptic(12);
  });
  c.addEventListener("pointermove", e=>{ if(!drag) return; e.preventDefault();
    drag.style.top=(e.clientY-dy-oy)+"px";
    const sibs=[...c.querySelectorAll(".metile:not(.dragging)")]; let placed=false;
    for(const s of sibs){ const r=s.getBoundingClientRect(); if(e.clientY < r.top+r.height/2){ if(ph.nextSibling!==s) c.insertBefore(ph,s); placed=true; break; } }
    if(!placed) c.appendChild(ph);
  });
  const end=e=>{ if(!drag) return;
    c.insertBefore(drag, ph); ph.remove(); ph=null;
    drag.classList.remove("dragging"); drag.style.width=drag.style.left=drag.style.top="";
    try{ drag.releasePointerCapture(e.pointerId); }catch(_){}
    drag=null; saveTileOrder(); haptic(8);
  };
  c.addEventListener("pointerup", end);
  c.addEventListener("pointercancel", end);
})();
// ===== Part II: prediction ledger — predict → observe → re-parameterize =====
// Mirrors research/ledger-core.mjs (the reference implementation; keep the two in sync). The protocol
// is fixed ex ante in CALIBRATION-PLAN.md: at most one forecast per exercise per epoch week, emitted
// BEFORE the outcome exists with the posterior then in force frozen into the record; scoring writes
// only the outcome block and never touches a prediction; the per-user response multiplier is updated
// from scored errors by a conjugate Normal–Normal step on the log scale, relinearized at the posterior
// mean. Retrodictions (retro:true) never feed calibration. Outcomes are scored with the Epley K frozen
// at emission so a later K recalibration can't move the goalposts of an existing prediction.
const LG={WK:7*86400000, H:4, R0:0.0075, V:1, THV:0.1225, MUSV:0.0225, SIG2U:0.000625, SIG2F:0.000025,
  SIGOBS:0.02, MINW:3, MINOUT:1, MUSN:6, REEST:8, Z80:1.2815515655446004, CLAMP:[Math.log(0.2),Math.log(3)],
  PSC:1/6,        // effective-info per record: 1/H from overlapping outcome windows, /1.5 more for residual dependence (SBC-calibrated)
  TAUS:5/Math.log(5),                 // strength dose-response scale (plan §12a): 80% attained by ~5 sets/wk, not 10 (≈3.107)
  BRHO:0.3, BSIGH:0.55, BSIGS:0.35, BMIN:10};   // strength→hypertrophy bridge (plan §12b): correlation, log-sd of each multiplier, activation gate
const lgWeek=d=>Math.floor(d/LG.WK);
// Strength dose-response (plan §12a): strength saturates with volume faster than hypertrophy
// (Pelland 2026), so the ledger uses its own curve rather than the hypertrophy doseStimulus().
const lgDoseStr=s=> s>0 ? 1-Math.exp(-s/LG.TAUS) : 0;
// Strength→hypertrophy bridge (plan §12b): the conditional distribution of the hypertrophy log-multiplier
// θ_H given the learned strength posterior θ_S~N(m,v), integrating over it. Mirrors bridgeThetaH in
// research/ledger-core.mjs. β=ρ·σ_H/σ_S; at ρ=0 it returns the unconditional draw N(0,σ_H).
const lgBridgeThetaH=(m,v)=>{ const b=LG.BRHO*LG.BSIGH/LG.BSIGS;
  return { m:b*m, sd:Math.sqrt(LG.BSIGH*LG.BSIGH*(1-LG.BRHO*LG.BRHO) + b*b*v) }; };
function lgFreshCalib(){ return {v:1, th:{m:0,v:LG.THV}, mus:{}, sig2u:LG.SIG2U, nsc:0, ss:0, so2s:0, mv2s:0}; }
function lgNormCdf(z){ const t=1/(1+0.3275911*Math.abs(z)/Math.SQRT2);
  const e=1-t*(0.254829592+t*(-0.284496736+t*(1.421413741+t*(-1.453152027+t*1.061405429))))*Math.exp(-z*z/2);
  return z>=0 ? 0.5*(1+e) : 0.5*(1-e); }
function lgCrps(y,mu,sd){ if(!(sd>0)) return Math.abs(y-mu); const z=(y-mu)/sd;
  return sd*( z*(2*lgNormCdf(z)-1) + 2*Math.exp(-z*z/2)/Math.sqrt(2*Math.PI) - 1/Math.sqrt(Math.PI) ); }
// Weekly per-exercise peaks/entries and per-muscle effective sets & peaks, on ABSOLUTE epoch weeks
// (fixed buckets — "the outcome of week k" must not depend on when it is computed).
function lgWeekly(K){ const byEx={}, musSets={}, musPeak={};
  Object.keys(hist).forEach(name=>{ const gs=muscleFor(name);
    const ex=byEx[name]={peak:{}, n:{}, effs:{}, g:gs[0]||null};
    (hist[name]||[]).forEach(e=>{ const k=lgWeek(e.d), eff=effortOf(e), ns=e.n!=null?+e.n:1;
      gs.forEach((g,gi)=>{ const m=musSets[g]=musSets[g]||{}; m[k]=(m[k]||0)+ns*eff*(gi===0?1:0.5); });
      const w=parseFloat(e.w)||0, r=parseInt(e.r)||0;
      if(w>0&&r>0){ const p=w*(1+r/K);
        if(p>(ex.peak[k]||0)) ex.peak[k]=p; ex.n[k]=(ex.n[k]||0)+1; (ex.effs[k]=ex.effs[k]||[]).push(eff);
        if(gs[0]){ const mp=musPeak[gs[0]]=musPeak[gs[0]]||{}; if(p>(mp[k]||0)) mp[k]=p; } } }); });
  return {byEx,musSets,musPeak}; }
const lgWinMean=(m,a,b)=>{ let s=0; for(let k=a;k<=b;k++) s+=m[k]||0; return s/(b-a+1); };
const lgWinMeanPos=(m,a,b)=>{ let s=0,n=0; for(let k=a;k<=b;k++){ const v=m[k]||0; if(v>0){ s+=v; n++; } } return n?s/n:null; };
const lgWinMax =(m,a,b)=>{ let x=0; for(let k=a;k<=b;k++){ const v=m[k]||0; if(v>x) x=v; } return x; };
// Recent dose & overload trend for a muscle at as-of week k (v2.1's 3-week windows on absolute weeks).
// Dose means keep untrained weeks as zeros (the dose really was zero); the load trend averages trained
// weeks only — zeros in a PEAK series read "didn't train" as "got weaker" and bias the calibration.
function lgMuscleState(wk,g,k){ const S=wk.musSets[g]||{}, P=wk.musPeak[g]||{};
  const D=lgWinMean(S,k-2,k), es=lgWinMean(S,k-5,k-3), el=lgWinMeanPos(P,k-5,k-3), rl=lgWinMeanPos(P,k-2,k);
  const tS=es>0?D/es:null, tL=(el!=null&&rl!=null)?rl/el:null;
  const trend=(tS==null&&tL==null)?null:Math.max(tS!=null?tS:0, tL!=null?tL:0);
  return {D,trend}; }
const lgOverload=t=> (t==null||t>=1) ? 1 : (t>=0.75 ? 0.5 : 0.15);
// Robust measurement sd of an exercise's weekly log-peak: successive diffs, median-detrended, MAD→sd, /√2.
function lgObsSigma(ex){ const ks=Object.keys(ex.peak).map(Number).sort((a,b)=>a-b); const d=[];
  for(let i=1;i<ks.length;i++) d.push(Math.log(ex.peak[ks[i]]/ex.peak[ks[i-1]]));
  if(d.length<4) return LG.SIGOBS;
  const med=a=>{ const s=[...a].sort((x,y)=>x-y); return s[Math.floor(s.length/2)]; };
  const m0=med(d); return Math.max(0.005, 1.4826*med(d.map(x=>Math.abs(x-m0)))/Math.SQRT2); }
// Emit forecasts for every exercise trained in the as-of week (gates per plan §6); freezes inputs + posterior.
function lgEmit(now){ const K=effortRepDenom(), k=lgWeek(now), wk=lgWeekly(K), out=[];
  const have=new Set(ledger.map(r=>r.x+"|"+r.k));
  Object.keys(wk.byEx).forEach(x=>{ const ex=wk.byEx[x];
    if(!ex.g || have.has(x+"|"+k) || !(ex.n[k]>0)) return;
    let prior=0; Object.keys(ex.n).forEach(w=>{ if(+w<=k) prior++; }); if(prior<LG.MINW) return;
    const base=lgWinMax(ex.peak,k-1,k); if(!(base>0)) return;
    const st=lgMuscleState(wk,ex.g,k);
    const effs=[].concat(ex.effs[k-2]||[], ex.effs[k-1]||[], ex.effs[k]||[]);
    const eta=effs.length? effs.reduce((a,b)=>a+b,0)/effs.length : 1;
    const rho=lgDoseStr(st.D), o=lgOverload(st.trend), mu0=LG.H*LG.R0*rho*eta*o;   // strength dose-response (plan §12a)
    const mus=calib.mus[ex.g], musM=(mus&&mus.n>=LG.MUSN)?mus.m:0, musV=(mus&&mus.n>=LG.MUSN)?mus.v:LG.MUSV;
    const th=calib.th.m+musM, thv=calib.th.v+musV, mu=mu0*Math.exp(th), so2=Math.pow(lgObsSigma(ex),2);
    let sd=Math.sqrt(mu*mu*thv + calib.sig2u + 2*so2); if(st.trend==null) sd*=1.25;
    out.push({ id:x+"|"+k, v:LG.V, t:now, k, x, g:ex.g, h:LG.H, mu, sd,
      in:{ D:st.D, rho, eff:eta, trend:st.trend, o, base, mu0, so2, K, thm:th, thv },
      retro:false, st:"pending" }); });
  return out; }
// Score matured records (outcome window complete). Writes ONLY the out block; predictions stay frozen.
// Outcome is endpoint-to-endpoint with SYMMETRIC 2-week windows (best peak of weeks k+H-1..k+H vs the
// 2-week baseline) — asymmetric max windows carry an order-statistics bias that skews calibration.
function lgScore(now){ const wNow=lgWeek(now), scored=[];
  ledger.forEach(rec=>{ if(rec.st!=="pending" || wNow<=rec.k+rec.h) return;
    const K=(rec.in&&rec.in.K)||30; let nOut=0, ahead=0;
    (hist[rec.x]||[]).forEach(e=>{ const w=lgWeek(e.d); if(w<rec.k+rec.h-1||w>rec.k+rec.h) return;
      const wt=parseFloat(e.w)||0, r=parseInt(e.r)||0; if(!(wt>0&&r>0)) return;
      nOut++; const p=wt*(1+r/K); if(p>ahead) ahead=p; });
    if(nOut<LG.MINOUT || !(ahead>0)){ rec.st="unscorable"; rec.out={scoredAt:now}; return; }
    const y=Math.log(ahead/rec.in.base), z=(y-rec.mu)/rec.sd;
    rec.st="scored"; rec.out={ y, pit:lgNormCdf(z), crps:lgCrps(y,rec.mu,rec.sd), hit80:Math.abs(z)<=LG.Z80?1:0, scoredAt:now };
    scored.push(rec); });
  return scored; }
// Conjugate posterior update from one scored record (plan §5) — relinearized at the current mean.
function lgUpdate(rec){ if(rec.retro || rec.st!=="scored") return;
  const mu0=rec.in.mu0, so2=rec.in.so2, y=rec.out.y; if(!(mu0>0)) return;
  const s2=calib.sig2u+2*so2;
  const muU=mu0*Math.exp(calib.th.m), thObs=calib.th.m+(y-muU)/muU, prec=LG.PSC*muU*muU/s2;
  const p0=1/calib.th.v, p1=p0+prec;
  calib.th.m=Math.min(LG.CLAMP[1], Math.max(LG.CLAMP[0], (p0*calib.th.m+prec*thObs)/p1)); calib.th.v=1/p1;
  const mus=calib.mus[rec.g]=calib.mus[rec.g]||{m:0,v:LG.MUSV,n:0};
  const muG=mu0*Math.exp(calib.th.m+mus.m), dObs=mus.m+(y-muG)/muG, gp=LG.PSC*muG*muG/s2, q0=1/mus.v, q1=q0+gp;
  mus.m=(q0*mus.m+gp*dObs)/q1; mus.v=1/q1; mus.n++;
  calib.nsc++; calib.ss+=Math.pow(y-rec.mu,2); calib.so2s+=2*so2; calib.mv2s+=rec.mu*rec.mu*rec.in.thv;
  if(calib.nsc%LG.REEST===0) calib.sig2u=Math.max(LG.SIG2F, (calib.ss-calib.so2s-calib.mv2s)/calib.nsc); }
// Aggregate metrics over non-retro scored records (plan §8): coverage, CRPS, skill vs fixed baselines.
function lgMetrics(){ const recs=ledger.filter(r=>!r.retro&&r.st==="scored").sort((a,b)=>a.k-b.k);
  const n=recs.length, uns=ledger.filter(r=>!r.retro&&r.st==="unscorable").length;
  if(!n) return {n:0, unscorable:uns};
  let hits=0, crps=0, b0=0, b1=0, sdS=0; const trail=[];
  recs.forEach(r=>{ hits+=r.out.hit80; crps+=r.out.crps; sdS+=r.sd;
    b0+=lgCrps(r.out.y,0,r.sd);
    const drift=trail.length? trail.reduce((a,b)=>a+b,0)/trail.length : 0;
    b1+=lgCrps(r.out.y,drift,r.sd); trail.push(r.out.y); });
  return { n, unscorable:uns, coverage80:hits/n, meanCRPS:crps/n, sharpness:sdS/n,
    skillVsNoChange:1-crps/b0, skillVsDrift:1-crps/b1 }; }
// The tick: score what matured → update the posterior → (on workout save) emit this week's forecasts.
async function ledgerTick(emit){
  if(!calib) calib=lgFreshCalib();
  const now=Date.now(); let dirty=false;
  const scored=lgScore(now); if(scored.length){ scored.forEach(lgUpdate); dirty=true; }
  if(emit){ const recs=lgEmit(now); if(recs.length){ ledger.push(...recs); dirty=true; } }
  if(dirty){ await sset("predledger",ledger); await sset("calib",calib); }
  return dirty; }
// Me-page card: pending forecasts + calibration status. Numbers are shown only once ≥10 forecasts
// are scored (plan §11.4); before that the card says it is calibrating, not pretending.
// "The adjusted model, learning": the response multiplier the model actually used for each forecast
// (exp of the frozen posterior mean), averaged per emission week with its 95% band — watch it converge.
function drawLedgerMultiplier(recs){
  const c=$("slML"); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const byWk={}; recs.forEach(r=>{ if(r.retro||!r.in||r.in.thm==null) return; (byWk[r.k]=byWk[r.k]||[]).push(r); });
  const wks=Object.keys(byWk).map(Number).sort((a,b)=>a-b);
  if(wks.length<2){ return; }
  const pts=wks.map(k=>{ const a=byWk[k]; const m=a.reduce((s,r)=>s+r.in.thm,0)/a.length, v=a.reduce((s,r)=>s+r.in.thv,0)/a.length;
    return { mult:Math.exp(m), lo:Math.exp(m-1.96*Math.sqrt(v)), hi:Math.exp(m+1.96*Math.sqrt(v)) }; });
  const l3=(getComputedStyle(document.documentElement).getPropertyValue('--l3')||'#888').trim(), ac=accentHex();
  ctx.font=cfont(W,"tick");
  const padL=Math.ceil(ctx.measureText("×1").width)+9, padR=12, padT=10, padB=20, n=pts.length;
  let lo=Math.min(1,...pts.map(p=>p.lo)), hi=Math.max(1,...pts.map(p=>p.hi)); const sp=Math.max(0.3,hi-lo); lo-=sp*0.1; hi+=sp*0.1;
  const x=i=> padL+(n<2?0:(i/(n-1))*(W-padL-padR)), y=v=> padT+(1-(v-lo)/(hi-lo))*(H-padT-padB);
  ctx.strokeStyle=hexAlpha(l3,.5); ctx.setLineDash([4,4]); ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(padL,y(1)); ctx.lineTo(W-padR,y(1)); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle=l3; ctx.font=cfont(W,"tick"); ctx.textAlign="right"; ctx.fillText("×1",padL-3,y(1)+4);
  // 95% band
  ctx.beginPath(); pts.forEach((p,i)=>{ const xx=x(i),yy=y(p.hi); i?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy); });
  for(let i=n-1;i>=0;i--){ ctx.lineTo(x(i),y(pts[i].lo)); } ctx.closePath(); ctx.fillStyle=hexAlpha(ac,.14); ctx.fill();
  // multiplier line
  ctx.strokeStyle=ac; ctx.lineWidth=2.5; ctx.lineJoin="round"; ctx.beginPath(); pts.forEach((p,i)=>{ const xx=x(i),yy=y(p.mult); i?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy); }); ctx.stroke();
  ctx.beginPath(); ctx.arc(x(n-1),y(pts[n-1].mult),4,0,7); ctx.fillStyle=ac; ctx.fill();
}
// "The forecast, graded": each scored prediction as (predicted %, actual %); the diagonal is a perfect call,
// dots on it = accurate. Green if the outcome landed inside the forecast's 80% band.
function drawLedgerPredActual(scored){
  const c=$("slPA"); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  if(scored.length<1) return;
  const pr=scored.map(r=>(Math.exp(r.mu)-1)*100), ac2=scored.map(r=>(Math.exp(r.out.y)-1)*100);
  const l3=(getComputedStyle(document.documentElement).getPropertyValue('--l3')||'#888').trim(), ac=accentHex();
  ctx.font=cfont(W,"tick"); const asc=Math.ceil(ctx.measureText("actual →").actualBoundingBoxAscent);
  const pad=Math.max(26, asc+18); let lim=Math.max(3,...pr.map(Math.abs),...ac2.map(Math.abs))*1.1;
  const x=v=> pad+((v+lim)/(2*lim))*(W-pad*2), y=v=> (H-pad)-((v+lim)/(2*lim))*(H-pad*2);
  // zero axes + y=x diagonal
  ctx.strokeStyle=hexAlpha(l3,.35); ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(x(0),pad); ctx.lineTo(x(0),H-pad); ctx.moveTo(pad,y(0)); ctx.lineTo(W-pad,y(0)); ctx.stroke();
  ctx.strokeStyle=hexAlpha(l3,.6); ctx.setLineDash([5,4]); ctx.beginPath(); ctx.moveTo(x(-lim),y(-lim)); ctx.lineTo(x(lim),y(lim)); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle=l3; ctx.font=cfont(W,"tick"); ctx.textAlign="center"; ctx.fillText("predicted →",W/2,H-6); ctx.save(); ctx.translate(asc+8,H/2); ctx.rotate(-Math.PI/2); ctx.fillText("actual →",0,0); ctx.restore();
  scored.forEach((r,i)=>{ const hit=r.out.hit80; ctx.beginPath(); ctx.arc(x(pr[i]),y(ac2[i]),4,0,7);
    ctx.fillStyle=hit?ac:hexAlpha(l3,.55); ctx.fill(); });
}
// One merged strength tile: overall-strength trend + 4-week forecast (headline + chart), a calibration line,
// a per-exercise breakdown (history + each lift's forecast), and the calibration-tracking plots.
function renderStrength(){
  const card=$("slCard"); if(!card) return;
  const si=strengthIndex(), rows=exerciseProgress(), hasLedger=ledger.length>0, f=_fcF;
  if(!si && !rows.length && !hasLedger && !f){ card.style.display="none"; return; }
  card.style.display="";
  const s1=v=>(v>=0?"+":"")+v.toFixed(1)+"%", cls=v=>v>=1?"grow":v<=-1?"shrink":"hold", ar=v=>v>=1?"↑":v<=-1?"↓":"→";
  const up=v=>v>=1?"up":v<=-1?"down":"";
  // SUMMARY card (Me tab): one glanceable line — overall strength, the 4-week forecast, and the size outlook
  const stat=$("slStat"), capL=$("slCapLine");
  if(si){ const pct=si.series[si.series.length-1].idx-100;
    if(stat) stat.innerHTML='<span class="'+up(pct)+'">'+s1(pct)+'</span> <span class="u">strength</span>';   // colour carries the direction, as on Volume
    // one short line; the size outlook only when there's no forecast (it stays in the Strength sheet)
    let cap = si.forecast ? ("next "+si.forecast.weeks+"w "+ar(si.forecast.pct)+" "+s1(si.forecast.pct)) : (si.lifts+" lift"+(si.lifts>1?"s":""));
    if(!si.forecast && f && f.base!=null) cap += " · size "+(f.base>=0?"+":"")+f.base.toFixed(1)+"%/16w";
    if(capL) capL.textContent=cap;
    drawSummarySpark("slMini", si.series.map(p=>p.idx));
  } else if(f && f.base!=null){
    if(stat) stat.innerHTML='<span class="'+up(f.base)+'">'+(f.base>=0?"+":"")+f.base.toFixed(1)+'%</span> <span class="u">size / 16w</span>';
    if(capL) capL.textContent="projected muscle gain over 16 weeks";
  } else { if(stat) stat.textContent="Log a few sessions"; if(capL) capL.textContent="your strength trend + forecast will appear here"; }
  // DETAIL sheet: headline + chart: overall strength (indexed, averaged) with the forecast continuation
  const sum=$("exProgSum"), chart=$("exProgChart");
  if(si){ const pct=si.series[si.series.length-1].idx-100;
    const verb = pct>=1 ? "You're getting stronger" : pct<=-1 ? "Your strength has dipped" : "Your strength is holding steady";
    let head = Math.abs(pct)>=1
      ? verb+' — <span class="extr '+cls(pct)+'">'+s1(pct)+'</span> overall over the last '+si.weeks+' weeks'
      : verb+' over the last '+si.weeks+' weeks';
    if(si.forecast) head+=' <span class="exprogsub">Forecast: <span class="extr '+cls(si.forecast.pct)+'">'+ar(si.forecast.pct)+' '+s1(si.forecast.pct)+'</span> over the next '+si.forecast.weeks+' weeks.</span>';
    else head+=' <span class="exprogsub">Averaged across '+si.lifts+' lift'+(si.lifts>1?"s":"")+', each indexed to its own start.</span>';
    sum.style.display=""; sum.innerHTML=head; if(chart){ chart.style.display=""; drawStrengthIndex(si); }
  } else { sum.style.display="none"; if(chart) chart.style.display="none"; }
  // calibration one-liner
  const m=lgMetrics(), cal=$("slCal");
  if(cal){
    if(m.n>=10){ const mu=Math.exp(calib.th.m), lo=Math.exp(calib.th.m-1.96*Math.sqrt(calib.th.v)), hi=Math.exp(calib.th.m+1.96*Math.sqrt(calib.th.v));
      cal.style.display=""; cal.textContent="Calibrated on "+m.n+" scored forecasts — 80% intervals hit "+Math.round(100*m.coverage80)+"% · skill vs drift "+s1(100*m.skillVsDrift)+" · your response ×"+mu.toFixed(2)+" (95%: ×"+lo.toFixed(2)+"–×"+hi.toFixed(2)+")"+(m.unscorable?" · "+m.unscorable+" unscorable":"");
    } else if(hasLedger){ cal.style.display=""; cal.textContent="Calibrating — "+m.n+" of 10 forecasts scored. Each prediction is recorded before the outcome exists, then graded against what you actually lift."; }
    else cal.style.display="none";
  }
  // by-exercise: history %change + each lift's 4-week forecast, tap → full chart
  const arrow={grow:"↑",hold:"→",shrink:"↓"};
  $("exProgList").innerHTML = rows.map(r=>{ const col=MCOLOR[r.g]||"#888";
    const fc = r.fpct!=null ? ' <span class="exfc '+cls(r.fpct)+'">4w '+ar(r.fpct)+' '+s1(r.fpct)+'</span>' : '';
    return '<button type="button" class="exprow" data-ex="'+esc(r.name)+'">'
      +'<span class="exdot" style="background:'+col+'"></span>'
      +'<span class="exnm">'+esc(r.name)+'</span>'
      +sparkline(r.series, col)
      +'<span class="extr '+r.state+'">'+arrow[r.state]+' '+s1(r.pct)+'</span>'+fc+'</button>'; }).join("");
  // "How it's tracking" — the adjusted model (learning curve) + the forecast graded (predicted vs actual).
  const scored=ledger.filter(r=>!r.retro && r.st==="scored").sort((a,b)=>a.k-b.k);
  const emitted=ledger.filter(r=>!r.retro && r.in && r.in.thm!=null);
  const track=$("slTrack");
  if(track){
    if(emitted.length>=3 || scored.length>=1){
      track.style.display="";
      drawLedgerMultiplier(emitted);
      const cur=Math.exp(calib.th.m);
      $("slMLcap").textContent = "The multiplier scales the literature base rate to you: ×"+cur.toFixed(2)+" now"
        +(cur>1.05?" — you respond faster than average.":cur<0.95?" — you respond slower than average.":" — about average.")
        +" The band narrows as more forecasts are graded.";
      drawLedgerPredActual(scored);
      $("slPAcap").textContent = scored.length
        ? scored.length+" graded — dots on the dashed line were spot on; green landed inside the 80% band ("+Math.round(100*(m.coverage80||0))+"% did)."
        : "Predictions will plot here against what you actually lift, once the first 4-week window completes.";
    } else track.style.display="none";
  }
}
// ===== Monte Carlo growth forecast =====
// A probabilistic projection of muscle gain over 16 weeks, so the output is a distribution, not a false
// point estimate. Each of K runs draws literature-backed parameters and accumulates a weekly fractional gain
//   Δ_t = baseRate · indiv · ρ(D) · effort · overload · e^(−t/32)
// where ρ(D) is the dose–response (Schoenfeld 2017; Pelland 2026), effort scales with proximity to failure
// (Refalo 2023), overload is ~1 while progressing and drops without it (Plotkin 2022), and `indiv` is the
// inter-individual response multiplier — the dominant uncertainty — drawn lognormal to span the ±range Hubal
// 2005 observed (CSA change ≈ −2% … +59%). baseRate is training-age dependent (Damas 2016), the one
// literature-informed rather than tightly-pinned parameter; the wide bands own that uncertainty. Two paired
// scenarios (same draws): keep to the plan with its recommended progression, or hold the current pace and
// the lifter's own recent rate of load progress. It forecasts a plausible RANGE of gain, not a promise.
function growthForecast(){
  const AHEAD=16, N=PROG_WEEKS, K=500;
  const setsS=progMuscleWeekly("sets"), loadS=progMuscleLoad();
  const muscles=MGROUPS.filter(g=>!NO_TARGET.has(g) && setsS[g].some(v=>v>0));
  if(muscles.length<2) return null;                 // need a little history to seed the projection
  const planWk=planWeeklySets(activePlan());
  const mean3=a=>{ const s=a.slice(-3); return s.length ? s.reduce((x,y)=>x+y,0)/s.length : 0; };
  const earl3=a=>{ const s=a.slice(-6,-3); return s.length ? s.reduce((x,y)=>x+y,0)/s.length : 0; };
  const planDose={}, paceDose={};
  muscles.forEach(g=>{ planDose[g]=planWk[g]||0; paceDose[g]=mean3(setsS[g]); });
  // effort efficacy from logged proximity-to-failure (avg effort factor → 0.6..1)
  let ef=0, en=0; Object.keys(hist).forEach(n=>(hist[n]||[]).forEach(e=>{ ef+=effortOf(e); en++; }));
  const effort = en ? Math.min(1, 0.6+0.4*(ef/en)) : 0.85;
  // Per-muscle progressive-overload trend (recent vs earlier), the same signal the growth chips read:
  // the better of effort-weighted-set growth and estimated-1RM growth, so add-weight-drop-reps still counts.
  const trendOf=g=>{ const tS=earl3(setsS[g])>0?mean3(setsS[g])/earl3(setsS[g]):null,
                           tL=earl3(loadS[g])>0?mean3(loadS[g])/earl3(loadS[g]):null;
    return (tS==null&&tL==null)?null:Math.max(tS!=null?tS:0, tL!=null?tL:0); };
  // Overload factor a muscle earns from its own recent trend: building → full, flat → maintenance, easing → less.
  const paceOv=g=>{ const t=trendOf(g); if(t==null) return 0.5; if(t>=1.08) return 1.0; if(t>=0.92) return 0.5;
    return Math.max(0,(t-0.6)/0.32*0.5); };
  // base weekly rate (%/wk at full stimulus). Prefer the lifter's stated experience; otherwise infer it
  // from lifetime logged sessions (newer lifters gain faster — Damas 2016).
  const sess=settings.sessions||0;
  const baseRate = settings.exp==="beginner" ? 0.9 : settings.exp==="intermediate" ? 0.5 : settings.exp==="advanced" ? 0.28
    : sess<40 ? 0.9 : sess<150 ? 0.9-(sess-40)/110*0.5 : Math.max(0.25, 0.4-(sess-150)/500*0.15);
  // age and sex factors. Age: hypertrophy attenuates with age (Peterson 2011), ~1.0 to ~30 then declining.
  // Sex: relative hypertrophy is comparable between sexes (Roberts 2020), so the %-gain factor is ~1 for both
  // (sex is collected mainly for absolute-mass context). Both feed the same MC as multipliers.
  const age=+settings.age||0;
  const ageF = age>30 ? Math.max(0.5, 1-(age-30)*0.008) : 1;
  const sexF = 1;   // ≈ equal relative gains; kept as an explicit lever
  // seeded PRNG so the bands are stable across re-renders; paired draws for a fair plan-vs-pace comparison
  let s=987654321>>>0; const u=()=>((s=(s*1103515245+12345)&0x7fffffff)/0x7fffffff);
  const nrm=(m,sd)=>{ const a=Math.max(1e-9,u()); return m+sd*Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*u()); };
  // Strength → hypertrophy bridge (plan §12b): once the ledger has learned this lifter's strength
  // response (≥10 scored forecasts, posterior tighter than the prior), condition the hypertrophy
  // multiplier on it. ρ is low on purpose — strength is a weak, neural-biased proxy for size — so this
  // shifts the muscle forecast modestly and barely narrows the band. Otherwise draw unconditionally.
  const bridged = !!(calib && calib.nsc>=LG.BMIN && calib.th && calib.th.v < LG.THV);
  const thH = bridged ? lgBridgeThetaH(calib.th.m, calib.th.v) : { m:0, sd:LG.BSIGH };
  const draws=[]; for(let k=0;k<K;k++) draws.push({ indiv:Math.exp(nrm(thH.m, thH.sd)) });
  const q=(arr,p)=>{ const a=arr.slice().sort((x,y)=>x-y); return a[Math.floor(p*(a.length-1))]; };
  // One weekly increment per muscle: hypertrophy above maintenance, atrophy below it (starved → negative).
  const inc=(d,rho,indiv,ov,aF,eff,bR,t)=> d>=WEEKLY_SET_MAINT
    ? bR*indiv*aF*sexF*rho*eff*ov*Math.exp(-t/32)          // hypertrophy
    : -0.4*indiv*(1-d/WEEKLY_SET_MAINT);                    // atrophy below maintenance (~0.4%/wk, Mujika)
  // Whole-body forecast = mean of the per-muscle trajectories, so the chart and the per-muscle bars agree.
  // ovOf(g) is the per-muscle overload factor (plan: full; pace: each muscle's own trend).
  function bands(doseMap,o){
    const ovOf=o.ovOf, eff=o.effort, aF=o.ageF, bR=o.baseRate;
    const rho={}, ov={}; muscles.forEach(g=>{ rho[g]=doseStimulus(doseMap[g]); ov[g]=ovOf(g); });
    const traj=Array.from({length:AHEAD+1},()=>[]);
    draws.forEach(dr=>{ let C=0; traj[0].push(0);
      for(let t=1;t<=AHEAD;t++){ let wk=0;
        muscles.forEach(g=>{ wk+=inc(doseMap[g],rho[g],dr.indiv,ov[g],aF,eff,bR,t); });
        C+=wk/muscles.length; traj[t].push(C);
      } });
    return { p10:traj.map(a=>q(a,0.1)), p50:traj.map(a=>q(a,0.5)), p90:traj.map(a=>q(a,0.9)) };
  }
  const full=()=>1.0, maint=()=>0.5;
  const baseOpts={ ovOf:full, effort, ageF, baseRate };
  const plan=bands(planDose,baseOpts), pace=bands(paceDose,{ ...baseOpts, ovOf:paceOv });
  // sensitivity: week-16 median gain when each key parameter is swung low↔high around the plan baseline
  const w16=b=>b.p50[AHEAD], ageFor=a=>a>30?Math.max(0.5,1-(a-30)*0.008):1, a0=age||30;
  const scaled=(dm,delta)=>{ const o={}; muscles.forEach(g=>o[g]=Math.max(0,dm[g]+delta)); return o; };
  const sens=[
    {label:"effort",       lo:w16(bands(planDose,{...baseOpts,effort:0.6})),        hi:w16(bands(planDose,{...baseOpts,effort:1.0}))},
    {label:"progression",  lo:w16(bands(planDose,{...baseOpts,ovOf:maint})),        hi:w16(bands(planDose,{...baseOpts,ovOf:full}))},
    {label:"volume ±3",    lo:w16(bands(scaled(planDose,-3),baseOpts)),             hi:w16(bands(scaled(planDose,3),baseOpts))},
    {label:"age ±15y",     lo:w16(bands(planDose,{...baseOpts,ageF:ageFor(a0+15)})),hi:w16(bands(planDose,{...baseOpts,ageF:ageFor(Math.max(18,a0-15))}))},
    {label:"experience",   lo:w16(bands(planDose,{...baseOpts,baseRate:0.28})),     hi:w16(bands(planDose,{...baseOpts,baseRate:0.9}))},
  ];
  // per-muscle projected gain — the median run of the SAME per-muscle model the chart averages, so a
  // muscle's bar and the whole-body line stay consistent. The median individual is exp(thH.m): 1 without
  // the bridge, or the strength-personalised centre once the bridge is active (lognormal median).
  const medIndiv=Math.exp(thH.m);
  const permusc=(doseMap, ovOf)=> muscles.map(g=>{
    const d=doseMap[g], rho=doseStimulus(d), ov=ovOf(g); let C=0;
    for(let t=1;t<=AHEAD;t++) C+=inc(d,rho,medIndiv,ov,ageF,effort,baseRate,t);
    return { g, gain:C };
  }).sort((a,b)=>b.gain-a.gain);
  const perMuscle = { plan:permusc(planDose,full), pace:permusc(paceDose,paceOv) };
  return { plan, pace, ahead:AHEAD, n:muscles.length, base:w16(plan), sens, perMuscle, bridged };
}
function drawForecast(f, prog){
  prog = prog==null ? 1 : prog;
  const c=$("fcChart"); if(!c||!f) return;
  _figFns["fcChart"]=(p)=>drawForecast(f,p);
  const sub=$("fcSub"); if(sub) sub.textContent="projected muscle gain over the next "+f.ahead+" weeks · "+f.n+" muscles"+(f.bridged?" · personalised from your strength data":"");
  const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const cs=getComputedStyle(document.documentElement);
  const l3=(cs.getPropertyValue('--l3')||'#888').trim();
  const accent=accentHex(), blue=(cs.getPropertyValue('--series2')||'#4dabf7').trim();   // "current pace": grey under the Blue accent
  const x1=f.ahead, padT=14, padB=32;
  const hi=Math.max(f.plan.p90[x1], f.pace.p90[x1]);
  const lo=Math.min(0, f.plan.p10[x1], f.pace.p10[x1], ...f.plan.p10, ...f.pace.p10);  // allow negative (loss)
  const ymax=Math.max(2, Math.ceil(hi*1.1/2)*2), ymin=Math.min(0, Math.floor(lo*1.1/2)*2);
  const step=(ymax-ymin)>10?4:2, ticks=[];   // whole-number ticks (5 even steps gave 0, 2, 3, 5 …)
  for(let v=Math.ceil(ymin/step)*step; v<=ymax+1e-6; v+=step) ticks.push(v);
  const sgn=v=>(v>=0?"+":"")+v.toFixed(1)+"%";
  ctx.font=cfont(W,"tick"); const padL=Math.ceil(Math.max(...ticks.map(v=>ctx.measureText(v+"%").width)))+14;
  ctx.font=cfont(W,"label"); const lpx=parseInt(ctx.font.split(" ")[1],10)||12, dotR=Math.max(2,lpx*.26);
  const padR=Math.ceil(Math.max(ctx.measureText(sgn(f.plan.p50[x1])).width, ctx.measureText(sgn(f.pace.p50[x1])).width)+dotR*2+lpx*.35)+13;
  const X=w=> padL + (w/x1)*(W-padL-padR);
  const Y=v=> padT + (1-(v-ymin)/(ymax-ymin))*(H-padT-padB);
  ctx.font=cfont(W,"tick"); ctx.textAlign="right";
  ticks.forEach(v=>{ const y=Y(v), zero=Math.abs(v)<1e-6;
    ctx.strokeStyle=hexAlpha(l3, zero?.5:.18); ctx.lineWidth=zero?1.2:1; ctx.beginPath(); ctx.moveTo(padL,y); ctx.lineTo(W-padR,y); ctx.stroke();
    ctx.fillStyle=l3; ctx.fillText(v+"%", padL-6, y+4); });
  // x labels sit inside the plot ends so "now" clears the y-tick column
  ctx.fillStyle=l3; ctx.textAlign="left"; ctx.fillText("now", X(0), H-padB+22); ctx.textAlign="right"; ctx.fillText("+"+x1+"w", X(x1), H-padB+22);
  ctx.save(); ctx.beginPath(); ctx.rect(0,0, padL+prog*(W-padL-padR)+2, H); ctx.clip();   // reveal the bands/lines left→right; axes stay
  const band=(b,hex)=>{ ctx.fillStyle=hexAlpha(hex,.15); ctx.beginPath();
    b.p90.forEach((v,i)=>{ const x=X(i), y=Y(v); i?ctx.lineTo(x,y):ctx.moveTo(x,y); });
    for(let i=b.p10.length-1;i>=0;i--){ ctx.lineTo(X(i), Y(b.p10[i])); }
    ctx.closePath(); ctx.fill(); };
  const line=(pts,color)=>{ ctx.strokeStyle=color; ctx.lineWidth=2.5; ctx.lineJoin="round"; ctx.lineCap="round"; ctx.beginPath(); pts.forEach((v,i)=>{ const x=X(i), y=Y(v); i?ctx.lineTo(x,y):ctx.moveTo(x,y); }); ctx.stroke(); };
  band(f.pace, blue); band(f.plan, accent);
  line(f.pace.p50, blue); line(f.plan.p50, accent);
  ctx.restore();
  // end values sit in the right margin, outside the reveal clip, once the lines have arrived
  if(prog>=1){
    let yp=Y(f.plan.p50[x1]), yc=Y(f.pace.p50[x1]); if(Math.abs(yp-yc)<13){ const m=(yp+yc)/2; yp=m-7; yc=m+7; }
    ctx.font=cfont(W,"label"); ctx.textAlign="left";
    // ink numbers, each led by a dot in its line's colour (the colour stays on the mark, not the text)
    const ink=(cs.getPropertyValue('--ink')||'#1c1c1e').trim();
    const tag=(v,y,col)=>{ ctx.fillStyle=col; ctx.beginPath(); ctx.arc(X(x1)+5+dotR, y+4-lpx*.36, dotR, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle=ink; ctx.fillText(sgn(v), X(x1)+5+dotR*2+lpx*.35, y+4); };
    tag(f.plan.p50[x1], yp, accent); tag(f.pace.p50[x1], yc, blue);
  }
  const lg=$("fcLegend"); if(lg) lg.innerHTML='<span class="fclg"><i style="background:'+accent+'"></i>this plan</span><span class="fclg"><i style="background:'+blue+'"></i>current pace</span><span class="fclg"><i class="fcbandi"></i>10–90% range</span>';
}
// tornado: how much the 16-week median gain swings as each key parameter goes low↔high (around the plan)
function drawForecastSens(f, prog){
  prog = prog==null ? 1 : prog;
  const c=$("fcTornado"); if(!c||!f||!f.sens) return;
  _figFns["fcTornado"]=(p)=>drawForecastSens(f,p);
  // intuitive: rank the levers by how much they move your gain; each bar grows from the left, biggest first
  const rows=f.sens.map(s=>({label:s.label.replace(" ±3",""), impact:Math.abs(s.hi-s.lo)})).sort((a,b)=>b.impact-a.impact);
  if(!rows.length) return;
  c.height = Math.max(150, rows.length*40);          // same row rhythm as the by-muscle chart above
  const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const cs=getComputedStyle(document.documentElement);
  const l3=(cs.getPropertyValue('--l3')||'#888').trim(), ink=(cs.getPropertyValue('--ink')||'#000').trim();
  const accent=accentHex();
  const maxI=Math.max(0.5, ...rows.map(r=>r.impact));
  const val=r=>"±"+r.impact.toFixed(1)+"%";
  ctx.font=cfont(W,"label"); const padL=Math.ceil(Math.max(...rows.map(r=>ctx.measureText(r.label).width)))+18;   // label + 12 gap + 6 edge
  ctx.font=cfont(W,"value"); const padR=Math.ceil(Math.max(...rows.map(r=>ctx.measureText(val(r)).width)))+24;   // bar → value gap 16
  const padT=8, padB=8, rowH=(H-padT-padB)/rows.length;
  const trackX=padL, trackW=W-padL-padR;
  ctx.textBaseline="middle";
  rows.forEach((r,i)=>{ const cy=padT+i*rowH+rowH/2, bw=Math.max(3,trackW*(r.impact/maxI))*prog, bh=Math.min(15,rowH*0.42), rr=bh/2;
    ctx.fillStyle=hexAlpha(accent,.13); if(ctx.roundRect){ctx.beginPath();ctx.roundRect(trackX,cy-bh/2,trackW,bh,rr);ctx.fill();} else ctx.fillRect(trackX,cy-bh/2,trackW,bh);
    ctx.fillStyle=hexAlpha(accent,.9); if(bw>0.6){ if(ctx.roundRect){ctx.beginPath();ctx.roundRect(trackX,cy-bh/2,bw,bh,rr);ctx.fill();} else ctx.fillRect(trackX,cy-bh/2,bw,bh); }
    ctx.fillStyle=l3; ctx.textAlign="right"; ctx.font=cfont(W,"label"); ctx.fillText(r.label, padL-12, cy);
    ctx.fillStyle=ink; ctx.textAlign="right"; ctx.font=cfont(W,"value"); ctx.fillText(val(r), W-8, cy);
  });
  // actionable read-out: the biggest swing among the levers the lifter can actually change
  if(prog<1) return;
  const ACT={ effort:"push a little closer to failure on your hard sets",
              progression:"add a rep or a bit of load most weeks",
              "volume ±3":"add ~2–3 weekly sets to your lagging muscles" };
  const top=f.sens.map(s=>({label:s.label, sw:Math.abs(s.hi-s.lo), act:ACT[s.label]}))
                  .filter(s=>s.act).sort((a,b)=>b.sw-a.sw)[0];
  const cap=$("fcSensCap");
  if(cap) cap.textContent = top
    ? "Longer bar = bigger effect on your "+f.ahead+"-week gain; the % is how much that one thing could move it. Your biggest lever: "+top.label.replace(" ±3","")+" — "+top.act+"."
    : "Longer bar = bigger effect on your "+f.ahead+"-week gain; the % is how much that one thing could move it.";
}
// ================= automatic plan builder =================
const BUILD_POOL={
  chest:["Barbell Bench Press","Incline Barbell Press","Incline DB Press","Machine Chest Press","Weighted Dip","Dumbbell Bench Press","Cable Fly","Incline Dumbbell Fly","Low-to-High Cable Fly","Dumbbell Fly","Cable Crossover","Pec Deck","Machine Chest Fly","Push-Ups","Decline Push-Ups","Diamond Push-Ups","Incline Push-Ups","Kettlebell Floor Press","Dip","Dumbbell Floor Press","High-to-Low Cable Fly","Incline Cable Fly","Decline Cable Fly","Flat Bench Cable Fly","Single-Arm Cable Fly","Seated Cable Fly","Cable Chest Press","Decline Dumbbell Fly","Incline Machine Press","Iso-Lateral Chest Press","Smith Machine Bench Press","Smith Machine Incline Press"],
  lats:["Weighted Pull-Up","Pull-Up","Lat Pulldown","Chin-Up","Straight-Arm Pulldown","Dumbbell Pullover","One-Arm DB Row","Wide-Grip Pull-Up","Neutral-Grip Pull-Up","Neutral-Grip Lat Pulldown","Single-Arm Lat Pulldown","Machine Pullover","Iso-Lateral Pulldown"],
  upperback:["Chest-Supported Row","Bent-Over Row","Seated Row","One-Arm DB Row","T-Bar Row","Meadows Row","Face Pulls","Inverted / Backpack Row","Kettlebell Row","Pendlay Row","Seal Row","Machine High Row","Barbell Shrug","Dumbbell Shrug","Iso-Lateral Row","Low Row Machine","Machine Shrug","Cable Shrug"],
  lowerback:["Back Extension","Good Morning","Rack Pull","Superman","Romanian Deadlift","Reverse Hyperextension","Stiff-Leg Deadlift"],
  forearms:["Wrist Curl","Reverse Wrist Curl","Hammer Curl","Reverse Curl","Farmer's Carry","Dead Hang","Zottman Curl"],
  adductors:["Hip Adduction","Cable Adduction (inner)","Cossack Squat","Copenhagen Plank"],
  "glute med":["Hip Abduction","Cable Abduction","Banded Side Steps","Side-Lying Leg Raise","Clamshell"],
  shoulders:["Overhead Press","Seated DB Press","Machine Shoulder Press","Arnold Press","Pike Push-Ups","Kettlebell Overhead Press","Kettlebell Push Press","Kettlebell Clean & Press","Cable Front Raise","Smith Machine Overhead Press"],
  sidedelts:["Lateral Raise","Cable Lateral Raise","Dumbbell Lateral Raise","Machine Lateral Raise","Upright Row","Kettlebell High Pull","Leaning Cable Lateral Raise"],
  reardelts:["Rear Delt Fly","Face Pulls","Reverse Pec Deck","Cable Rear Delt Fly","Bent-Over Lateral Raise","Band Pull-Aparts","Prone Y-Raise","Cable Y-Raise"],
  triceps:["Overhead Triceps Extension","Triceps Pushdown","Close-Grip Bench Press","Skull Crusher","Diamond Push-Ups","Machine Triceps Extension","Bench Dip","Rope Pushdown","Rope Overhead Triceps Extension","Machine Dip"],
  biceps:["EZ-Bar Curl","Incline DB Curl","Hammer Curl","Cable Curl","Preacher Curl","Chin-Up","Machine Preacher Curl","Zottman Curl","Machine Biceps Curl","Bayesian Cable Curl"],
  quads:["Back Squat","Hack Squat","Leg Press","Front Squat","Goblet Squat","Leg Extension","Bulgarian Split Squat","Walking Lunge","Reverse Lunge","Step-Up","Sissy Squat","Wall Sit","Kettlebell Front Squat","Kettlebell Reverse Lunge","Kettlebell Bulgarian Split Squat","Belt Squat","Smith Machine Squat","Split Squat","Box Squat","Pendulum Squat","V-Squat","Seated Leg Press","Smith Machine Split Squat"],
  hamstrings:["Romanian Deadlift","Seated Leg Curl","Lying Leg Curl","Single-Leg RDL","Nordic Curl","Kettlebell Romanian Deadlift","Two-Hand Kettlebell Swing","Glute-Ham Raise","Stiff-Leg Deadlift","Standing Leg Curl"],
  glutes:["Hip Thrust","Bulgarian Split Squat","Cable Pull-Through","Glute Bridge","Single-Leg Glute Bridge","Reverse Lunge","Two-Hand Kettlebell Swing","One-Arm Kettlebell Swing","Kettlebell Snatch","Sumo Deadlift","Smith Machine Hip Thrust"],
  calves:["Standing Calf Raise","Seated Calf Raise","Leg-Press Calf Raise","Single-Leg Calf Raise","Donkey Calf Raise","Smith Machine Calf Raise"],
  core:["Cable Crunch","Hanging Leg Raise","Hanging Knee Raise","Toes-to-Bar","Ab Wheel Rollout","Pallof Press","Cable Woodchopper","Landmine Rotation","Russian Twist","Plank","Reverse Plank","Hollow Hold (sec)","L-Sit","Side Plank","Bicycle Crunch","Reverse Crunch","V-Up","Decline Sit-Up","Flutter Kicks","Dead Bug","Kettlebell Windmill","Dumbbell Side Bend","Rotary Torso"]
};
const FB_GROUPS=["quads","chest","upperback","lats","shoulders","sidedelts","hamstrings","glutes","core"];
// Kettlebell-only mode: a dedicated per-muscle pool (rep-based moves only — carries & get-ups stay
// manual/library picks since they're timed, not "3 × reps"). Drives access==="kb" in buildPlan.
const KB_POOL={
  chest:["Kettlebell Floor Press"],
  lats:["Kettlebell Row"],
  upperback:["Kettlebell Row","Kettlebell High Pull"],
  lowerback:["Kettlebell Romanian Deadlift","Two-Hand Kettlebell Swing"],
  forearms:[],   // no rep-based KB forearm isolation — carries are timed/manual
  adductors:["Goblet Squat"],
  shoulders:["Kettlebell Overhead Press","Kettlebell Push Press","Kettlebell Clean & Press"],
  sidedelts:["Kettlebell High Pull","Kettlebell Halo"],
  reardelts:["Kettlebell High Pull","Kettlebell Row"],
  triceps:["Kettlebell Overhead Press","Kettlebell Floor Press"],
  biceps:["Kettlebell Row","Kettlebell Clean"],
  quads:["Kettlebell Front Squat","Goblet Squat","Kettlebell Reverse Lunge","Kettlebell Bulgarian Split Squat"],
  hamstrings:["Kettlebell Romanian Deadlift","Two-Hand Kettlebell Swing"],
  glutes:["Two-Hand Kettlebell Swing","One-Arm Kettlebell Swing","Kettlebell Snatch","Kettlebell Reverse Lunge"],
  calves:[],   // no kettlebell calf isolation — KB plans honestly skip it
  core:["Kettlebell Windmill","Kettlebell Halo"]
};
// kettlebell favours full-body days / complexes over barbell U/L/PPL splits (no isolation machines)
function kbSplit(freq){
  const V=[
    {g:["quads","glutes","shoulders","upperback","core"]},
    {g:["hamstrings","glutes","upperback","sidedelts","core"]},
    {g:["quads","hamstrings","shoulders","biceps","core"]},
  ];
  const days=[]; for(let i=0;i<freq;i++) days.push({name:"Full Body "+String.fromCharCode(65+i), g:V[i%3].g.slice()});
  return days;
}
function allowsAt(name, level){ const l=exLevel(name);
  if(level==="gym") return true;
  if(level==="park") return l!=="gym";
  return l==="none"; }
// cap exercise technicality by experience — beginners shouldn't be handed advanced lifts (weighted pull-ups, heavy hinges, OHP…)
function maxDiffFor(exp){ return exp==="beginner" ? 3 : exp==="advanced" ? 5 : 4; }
function suitsExp(name, exp){
  if(difficultyFor(name) > maxDiffFor(exp)) return false;
  // simple technique but a real strength prerequisite — pull-ups/chin-ups/dips are intermediate, not beginner moves
  if(exp==="beginner" && /pull-?up|chin-?up|\bdip\b|pistol|muscle-up/.test(name.toLowerCase())) return false;
  return true;
}
function accessLevels(access, n){
  if(access==="park") return Array(n).fill("park");
  if(access==="home") return Array(n).fill("none");
  if(access==="mostly_gym"){ const home=Math.max(1,Math.round(n/4)), a=[]; for(let i=0;i<n;i++) a.push(i>=n-home?"none":"gym"); return a; }
  if(access==="mostly_home"){ const gym=Math.max(1,Math.round(n/4)), a=[]; for(let i=0;i<n;i++) a.push(i>=n-gym?"gym":"none"); return a; }
  return Array(n).fill("gym");
}
const COMPOUND_GROUPS=["chest","upperback","lats","quads","hamstrings","shoulders"];
// the emphasis radar's spokes — identical to the app-wide analytics groups
const BUILD_GROUPS=MGROUPS;
function buildKey(m){ return ({"Front Delts":"shoulders","Side Delts":"sidedelts","Rear Delts":"reardelts","Upper Back":"upperback","Lower Back":"lowerback"}[m]) || m.toLowerCase(); }
// "Back" in a focus/preset now means the whole back wall — lats + upper back
const BACK_M=["Lats","Upper Back"];
// auxiliary detail groups (NO_TARGET). They never get auto-programmed regardless of emphasis (they're not
// in any split or day domain, and the coverage pass skips NO_TARGET), so "Balanced" can show them equal to
// everything else — a balanced intent reads as a uniform wheel rather than punishing lower back / forearms.
const AUX_EMPH=["Lower Back","Forearms","Adductors","Neck","Glute Med"];
function baseEmphasis(){ const e={}; BUILD_GROUPS.forEach(m=>e[m]=0.5); return e; }
let build={ exp:"intermediate", obj:"muscle", focus:["balanced"], bias:"balanced", time:60, freq:4, split:"auto", injuries:[], access:"gym", supersets:"on", vary:"on", kb:"off",
  emphasis:baseEmphasis() };
function emphasisPreset(focus){
  const e=baseEmphasis();
  const set=(arr,v)=>arr.forEach(m=>e[m]=v);
  const DELTS=["Front Delts","Side Delts","Rear Delts"], UPPER=["Chest"].concat(BACK_M,["Front Delts","Side Delts","Rear Delts","Biceps","Triceps"]), LOWER=["Quads","Hamstrings","Glutes","Calves"];
  if(focus==="upper"){ set(UPPER,0.8); set(LOWER,0.32); }
  else if(focus==="lower"){ set(LOWER,0.85); set(UPPER,0.32); }
  else if(focus==="glutes"){ e.Glutes=1; e.Hamstrings=0.8; e.Quads=0.65; set(["Chest","Biceps","Triceps","Calves","Core"].concat(BACK_M,DELTS),0.4); }
  else if(focus==="arms"){ e.Biceps=1; e.Triceps=1; set(DELTS,0.6); set(["Chest","Quads","Hamstrings","Glutes","Calves","Core"].concat(BACK_M),0.4); }
  else if(focus==="shoulders"){ set(DELTS,1); e["Side Delts"]=1; e["Rear Delts"]=0.95; e["Front Delts"]=0.7; set(["Chest","Biceps","Triceps","Quads","Hamstrings","Glutes","Calves","Core"].concat(BACK_M),0.4); }
  else if(focus==="chest"){ e.Chest=1; e["Front Delts"]=0.65; e.Triceps=0.6; set(BACK_M.concat(["Biceps","Side Delts","Rear Delts","Quads","Hamstrings","Glutes","Calves"]),0.4); }
  else if(focus==="back"){ set(BACK_M,1); e.Biceps=0.65; e["Rear Delts"]=0.7; set(["Chest","Front Delts","Side Delts","Triceps","Quads","Hamstrings","Glutes","Calves"],0.4); }
  else if(focus==="posture"){ e["Rear Delts"]=1; e["Upper Back"]=0.85; e.Lats=0.6; e.Core=0.65; e["Side Delts"]=0.55; e.Glutes=0.55; set(["Chest","Front Delts","Biceps","Triceps","Quads","Hamstrings","Calves"],0.42); }
  return e;
}
// Contraindicated movements per injury, tiered by severity (1 mild → 3 severe). Tiers are cumulative:
// a move is out if it matches any tier from 1 up to the active severity. Higher severity = stronger limits —
// e.g. a moderate ankle keeps leg press & hip thrust, but a severe (painful) one rules them out too.
// Tiers are cumulative. T1 (mild) already pulls the clearly-risky moves; T2 (moderate) pulls most loaded
// patterns, leaving only gentle isolation to substitute to; T3 (severe) is reinforced by INJURY_REGION below,
// which rests the whole body part. Mild/moderate intentionally bite hard — a niggle still deserves real caution.
const INJURY_TIERS={
  lowback:[ /deadlift|good morning|bent-over row|barbell row|t-bar|clean|snatch|swing|high pull|windmill|hyperextension|back extension/,
            /\bsquat\b|romanian|\brdl\b|hip hinge|overhead press|push press|hip thrust|leg press|sit-up|landmine|standing.*press/,
            /\brow\b|pulldown|pull-?up|chin-?up|crunch|leg raise/ ],
  knees:[   /sissy|pistol|\bjump\b|plyo|\bhop\b|\blunge\b|bulgarian|step-up|deep squat/,
            /\bsquat\b|leg press|hack squat|wall sit/,
            /leg extension|leg curl/ ],
  shoulders:[ /overhead press|behind|upright row|arnold|push press|snatch|high pull|pike|lateral raise|\bdip\b/,
              /^(?!.*\bleg\b).*\bpress\b|\bfly\b|pec deck|pulldown|pull-?up|\brow\b|front raise|chin-?up|halo/,   // leg-excluded so "leg press" / "calf raise" don't false-match
              /push-?up|pullover/ ],
  elbows:[  /skull|close-grip|\bdip\b|overhead.*extension|kickback|pushdown/,
            /triceps|chin-?up|pull-?up|^(?!.*\b(?:leg|nordic)\b).*\bcurl\b/,   // arm curls only — not leg/nordic curl
            /^(?!.*\bleg\b).*\bpress\b|bench|push-?up|\brow\b|pulldown|\bfly\b/ ],
  // ankle: T1 impact/balance + standing & single-leg calf + all lunges; T2 all squats, leg press, hip thrust, hinges; T3 whole leg (region)
  ankle:[   /pistol|sissy|\bjump\b|plyo|\bhop\b|skater|single-leg calf|standing calf|leg-press calf|\blunge\b|bulgarian|split squat|step-up|wall sit/,
            /back squat|front squat|goblet squat|hack squat|overhead squat|box squat|\bsquat\b|leg press|hip thrust|glute bridge|\bbridge\b|pull-through|deadlift|romanian|\brdl\b|good morning/,
            /calf raise|leg extension|leg curl/ ]
};
// At SEVERE, the whole body part is off-limits — every muscle here is avoided entirely, leaving only unaffected areas.
const INJURY_REGION={
  ankle:["Quads","Hamstrings","Glutes","Calves"],   // whole lower body — everything is weight-bearing on the ankle
  knees:["Quads","Hamstrings","Glutes"],            // seated calf work spares the knee
  lowback:["Lats","Upper Back","Lower Back"],
  shoulders:["Front Delts","Side Delts","Rear Delts"],
  elbows:["Biceps","Triceps"]
};
// severity defaults to 2 (moderate) for build-time "areas to protect"; active injuries pass each injury's own severity
function injuryBlocks(name, injuries, severity){
  if(!injuries||!injuries.length) return false;
  const n=name.toLowerCase(), sev=Math.max(1,Math.min(3, severity||2)); let muscles=null;
  return injuries.some(k=>{ const tiers=INJURY_TIERS[k]; if(!tiers) return false;
    for(let i=0;i<sev && i<tiers.length;i++) if(tiers[i].test(n)) return true;
    if(sev>=3){ const reg=INJURY_REGION[k]; if(reg){ muscles=muscles||muscleFor(name); if(muscles.some(m=>reg.indexOf(m)>=0)) return true; } }
    return false; });
}
const FOCUS_LABEL={ balanced:"balanced", upper:"upper body", lower:"lower body", glutes:"glutes & legs", arms:"arms", shoulders:"shoulders", chest:"chest", back:"back", posture:"posture" };
function focusGroups(focus){ return ({ upper:["chest","upperback","lats","shoulders"], lower:["quads","hamstrings","glutes"],
  glutes:["glutes","hamstrings"], arms:["biceps","triceps"], chest:["chest"], back:["upperback","lats"], balanced:[] }[focus])||[]; }
function buildSplit(freq, exp){
  const P=["chest","shoulders","sidedelts","triceps"], U=["chest","upperback","lats","shoulders","sidedelts","reardelts","biceps","triceps"], L=["quads","hamstrings","glutes","glute med","adductors","calves"], PL=["upperback","lats","reardelts","biceps"];
  if(freq<=2) return [{name:"Full Body A",g:["quads","chest","upperback","shoulders","core"]},{name:"Full Body B",g:["hamstrings","lats","chest","glutes","sidedelts","core"]}];
  if(freq===3){ if(exp==="beginner") return [{name:"Full Body A",g:["quads","chest","upperback","core"]},{name:"Full Body B",g:["hamstrings","shoulders","lats","glutes"]},{name:"Full Body C",g:["quads","chest","upperback","biceps","triceps"]}];
    return [{name:"Push",g:P},{name:"Pull",g:PL},{name:"Legs",g:L}]; }
  if(freq===4) return [{name:"Upper A",g:U},{name:"Lower A",g:L},{name:"Upper B",g:U},{name:"Lower B",g:L}];
  if(freq===5) return [{name:"Push",g:P},{name:"Pull",g:PL},{name:"Legs",g:L},{name:"Upper",g:U},{name:"Lower",g:L}];
  return [{name:"Push A",g:P},{name:"Pull A",g:PL},{name:"Legs A",g:L},{name:"Push B",g:P},{name:"Pull B",g:PL},{name:"Legs B",g:L}];
}
// Powerlifting (squat/bench/deadlift) split: each day carries an `anchor` — the competition lift it is built
// around (trained heavy, first in the session) — plus the helper muscles its accessories come from.
function sbdSplit(freq, exp){
  const SQ={name:"Squat",sub:"Back squat + leg support",anchor:"Back Squat",g:["quads","hamstrings","glutes","core"]};
  const BN={name:"Bench",sub:"Bench press + pressing support",anchor:"Barbell Bench Press",g:["chest","triceps","shoulders","upperback"]};
  const DL={name:"Deadlift",sub:"Deadlift + posterior support",anchor:"Deadlift",g:["hamstrings","glutes","lowerback","lats","core"]};
  const PR={name:"Press",sub:"Overhead press + upper support",anchor:"Overhead Press",g:["shoulders","sidedelts","triceps","chest"]};
  const SQ2={name:"Squat (variation)",sub:"Front squat + leg support",anchor:"Front Squat",g:["quads","glutes","hamstrings","core"]};
  const BN2={name:"Bench (variation)",sub:"Close-grip bench + pressing support",anchor:"Close-Grip Bench Press",g:["chest","triceps","shoulders","upperback"]};
  if(freq<=2) return [Object.assign({},SQ,{name:"Full Body A",sub:"Squat-focused full body",g:["quads","glutes","chest","upperback","core"]}),
                      Object.assign({},DL,{name:"Full Body B",sub:"Deadlift-focused full body",g:["hamstrings","glutes","chest","shoulders","core"]})];
  if(freq===3) return [SQ,BN,DL];
  if(freq===4) return [SQ,BN,DL,PR];
  if(freq===5) return [SQ,BN,DL,PR,SQ2];
  return [SQ,BN,DL,SQ2,BN2,PR];
}
// ===== user-selectable standard splits =====
// The builder normally chooses a split for you (buildSplit). These let you override that with a named
// classic split. Each generator returns the per-day muscle templates for a given frequency — the same
// {name, g} shape buildSplit produces, fed straight into buildPlan. Powerlifting (sbdSplit) and
// kettlebell-only (kbSplit) keep their own fixed structures and ignore this picker.
const SPLIT_M={
  push:["chest","shoulders","sidedelts","triceps"],
  pull:["upperback","lats","reardelts","biceps"],
  legs:["quads","hamstrings","glutes","calves","core"],
  upper:["chest","upperback","lats","shoulders","sidedelts","reardelts","biceps","triceps"],
  chestback:["chest","lats","upperback","reardelts"],
  shoArms:["shoulders","sidedelts","biceps","triceps"]
};
const AZ=i=>String.fromCharCode(65+i);
// suffix A/B/C only to day names that repeat (Upper, Upper → Upper A, Upper B; a lone Legs stays "Legs")
function suffixRepeats(seq){
  const total={}; seq.forEach(d=>total[d.name]=(total[d.name]||0)+1); const seen={};
  seq.forEach(d=>{ if(total[d.name]>1){ seen[d.name]=(seen[d.name]||0)+1; d.name=d.name+" "+AZ(seen[d.name]-1); } });
  return seq;
}
// cycle a fixed list of day templates out to `freq` days
function cycleDays(freq, tmpls){ const out=[]; for(let i=0;i<freq;i++){ const t=tmpls[i%tmpls.length]; out.push({name:t.name, g:t.g.slice()}); } return suffixRepeats(out); }
const STANDARD_SPLITS=[
  { id:"fullbody", label:"Full Body", freqs:[1,2,3,4,5,6], days:(f)=>cycleDays(f,[
      {name:"Full Body",g:["quads","chest","upperback","shoulders","core"]},
      {name:"Full Body",g:["hamstrings","lats","glutes","sidedelts","biceps","core"]},
      {name:"Full Body",g:["quads","chest","upperback","triceps","glutes","core"]}]) },
  { id:"upperlower", label:"Upper / Lower", freqs:[2,4,6], days:(f)=>{
      const seq=[]; for(let i=0;i<f;i++) seq.push(i%2===0?{name:"Upper",g:SPLIT_M.upper.slice()}:{name:"Lower",g:SPLIT_M.legs.slice()});
      return suffixRepeats(seq); } },
  { id:"ppl", label:"Push / Pull / Legs", freqs:[3,6], days:(f)=>cycleDays(f,[
      {name:"Push",g:SPLIT_M.push.slice().concat(["core"])},{name:"Pull",g:SPLIT_M.pull.slice()},{name:"Legs",g:SPLIT_M.legs.slice()}]) },
  // 2-way push/pull — legs split anatomically: knee-extension (quads/calves) on push, hip-hinge (hams/glutes) on pull
  { id:"pushpull", label:"Push / Pull", freqs:[2,4,6], days:(f)=>{
      const seq=[]; for(let i=0;i<f;i++) seq.push(i%2===0
        ? {name:"Push",g:["chest","shoulders","sidedelts","triceps","quads","calves","core"]}
        : {name:"Pull",g:["lats","upperback","reardelts","biceps","hamstrings","glutes","core"]});
      return suffixRepeats(seq); } },
  { id:"arnold", label:"Arnold", freqs:[3,6], days:(f)=>cycleDays(f,[
      {name:"Chest & Back",g:SPLIT_M.chestback.slice()},{name:"Shoulders & Arms",g:SPLIT_M.shoArms.slice().concat(["core"])},{name:"Legs",g:SPLIT_M.legs.slice()}]) },
  { id:"bro", label:"Body-Part", freqs:[4,5,6], days:(f)=>{
      if(f<=4) return suffixRepeats([{name:"Chest & Triceps",g:["chest","triceps"]},{name:"Back & Biceps",g:["lats","upperback","biceps"]},
        {name:"Shoulders & Core",g:["shoulders","sidedelts","reardelts","core"]},{name:"Legs",g:SPLIT_M.legs.slice()}]);
      const all=[{name:"Chest",g:["chest","triceps"]},{name:"Back",g:["lats","upperback","biceps"]},
        {name:"Shoulders",g:["shoulders","sidedelts","reardelts","core"]},{name:"Legs",g:SPLIT_M.legs.slice()},{name:"Arms",g:["biceps","triceps","forearms"]}];
      return f===5 ? all : all.concat([{name:"Legs & Core",g:["hamstrings","glutes","calves","core"]}]); } }
];
const SPLIT_LABEL={}; STANDARD_SPLITS.forEach(s=>SPLIT_LABEL[s.id]=s.label);
// the splits offered at a given day count — "Recommended" (auto → buildSplit) always leads
function availableSplits(freq){ const list=[{id:"auto",label:"Recommended"}];
  STANDARD_SPLITS.forEach(s=>{ if(s.freqs.indexOf(freq)>=0) list.push({id:s.id,label:s.label}); }); return list; }
// resolve the day templates for a build: an explicit valid split wins, else fall back to the auto pick
function splitDays(b){
  const sel=b.split||"auto";
  if(sel!=="auto"){ const def=STANDARD_SPLITS.find(s=>s.id===sel);
    if(def && def.freqs.indexOf(b.freq)>=0){ const d=def.days(b.freq, b.exp); if(d && d.length) return d; } }
  return buildSplit(b.freq, b.exp);
}
// Concise three-way muscle-mass outlook for the builder preview: from this plan's weekly volume per
// muscle, is it set to increase, hold, or risk losing the size you already carry? Same evidence-based
// landmarks as planForecast (≥WEEKLY_SET_MIN = growth window; <WEEKLY_SET_MAINT = below maintenance).
function buildOutlook(plan){
  const wk=planWeeklySets(plan);
  const major=["Chest","Lats","Upper Back","Front Delts","Side Delts","Rear Delts","Biceps","Triceps","Quads","Hamstrings","Glutes","Calves","Core"];
  const trained=major.filter(m=>(wk[m]||0)>=1), t=trained.length, perWk=planSessionsPerWeek(plan)||0;
  if(t<3) return {v:"maintain", label:"Add a few days", detail:"Pick your days and split to project muscle growth."};
  let grow=0, under=0;
  trained.forEach(m=>{ const s=wk[m]||0; if(s<WEEKLY_SET_MAINT) under++; else if(s>=WEEKLY_SET_MIN) grow++; });
  if(under>=Math.ceil(t/2))
    return {v:"reduce", label:"May reduce muscle", detail:under+" of "+t+" trained muscles get under ~"+WEEKLY_SET_MAINT+" hard sets/week — below what holds size. Add days or sets to grow."};
  if(grow>=Math.round(t*0.5))
    return {v:"grow", label:"Builds muscle", detail:grow+" of "+t+" muscles land in the ~"+WEEKLY_SET_MIN+"+ set growth window"+(perWk<2?" — but ~"+perWk+"×/week limits it; most muscles grow best trained 2×":". Expect gains with steady progressive overload")+"."};
  return {v:"maintain", label:"Maintains muscle", detail:"Volume sits near maintenance — enough to hold size and build strength, short of the ~"+WEEKLY_SET_MIN+"+ sets that drive much new growth."};
}
function exCount(time){ return time<=30?4 : time<=45?5 : time<=60?6 : 8; }
const BUILD_REPS={ strength:{c:"4–6",a:"6–10"}, muscle:{c:"6–10",a:"8–12"}, fatloss:{c:"8–12",a:"12–15"}, fitness:{c:"8–12",a:"10–15"} };
// Evidence-based rep targets by goal × training style. Compounds use lower reps than isolation;
// "intensity" = heavier load / lower reps (not more sets); "volume" = higher reps. (ACSM / Schoenfeld 2021 rep-range guidance.)
const REPSCHEME={
  strength:{ intensity:{c:"1–5",a:"4–6"},  balanced:{c:"3–5",a:"5–8"},  volume:{c:"5–6",a:"6–10"} },
  muscle:{   intensity:{c:"5–6",a:"6–10"},  balanced:{c:"6–10",a:"8–12"}, volume:{c:"8–12",a:"12–20"} },
  fatloss:{  intensity:{c:"6–8",a:"10–12"}, balanced:{c:"8–12",a:"12–15"},volume:{c:"12–15",a:"15–20"} },
  fitness:{  intensity:{c:"5–8",a:"8–12"},  balanced:{c:"8–12",a:"10–15"},volume:{c:"10–15",a:"12–20"} }
};
const BIAS_CAP={ intensity:"Heavier loads, lower reps, and fewer but harder sets with longer rests — strength-leaning.",
  balanced:"A balanced mix of load and reps at 2–3 sets per move — the evidence-based default.",
  volume:"Lighter loads and higher reps for more total work per muscle.",
  power:"Pure powerlifting: a squat / bench / deadlift split, each day built around the big lift trained heavy at 1–5 reps, with accessories to support it. Needs a barbell." };
const UPPER_M=["chest","lats","upperback","shoulders","sidedelts","reardelts","biceps","triceps"], LOWER_M=["quads","hamstrings","glutes","calves"];
function dayDomain(name){ const n=name.toLowerCase();
  if(/full body/.test(n)) return UPPER_M.concat(LOWER_M,["core"]);
  if(/lower|legs/.test(n)) return LOWER_M.concat(["core"]);
  if(/upper/.test(n)) return UPPER_M.concat(["core"]);
  if(/push/.test(n)) return ["chest","shoulders","sidedelts","triceps","core"];
  if(/pull/.test(n)) return ["upperback","lats","reardelts","biceps","core"];
  return UPPER_M.concat(LOWER_M,["core"]); }
// movement family — variants of the same lift share a key, so a workout won't stack e.g. pull-up + weighted pull-up
function familyKey(name){
  const n=String(name).toLowerCase();
  // kettlebell families — keep variants from stacking and let same-family rotation work
  if(/swing/.test(n)) return "swing";
  if(/snatch/.test(n)) return "snatch";
  if(/\bclean\b/.test(n)) return "clean";       // clean & clean-and-press share a family
  if(/high pull/.test(n)) return "highpull";
  if(/get-?up/.test(n)) return "getup";
  if(/windmill/.test(n)) return "windmill";
  if(/halo/.test(n)) return "halo";
  if(/carry/.test(n)) return "carry";
  if(/pull-?up|chin-?up|pulldown|lat pull/.test(n)) return "vpull";
  if(/push-?up/.test(n)) return "pushup";
  if(/(rear[ -]?delt|reverse pec|face pull|bent-?over lateral|pull-?apart|prone y|reverse snow)/.test(n)) return "reardelt";
  if(/upright row/.test(n)) return "upright";
  if(/lateral raise/.test(n)) return "latraise";
  if(/calf raise/.test(n)) return "calf";
  if(/leg curl|nordic/.test(n)) return "legcurl";
  if(/leg extension/.test(n)) return "legext";
  if(/leg press/.test(n)) return "legpress";
  if(/hip thrust|glute bridge/.test(n)) return "hipthrust";
  if(/pull-through/.test(n)) return "pullthrough";
  if(/(romanian|\brdl\b|good morning|deadlift)/.test(n)) return "hinge";
  if(/incline.*(press|bench)/.test(n)) return "inclinepress";
  if(/(bench press|chest press|floor press|\bdip\b)/.test(n)) return "horizpress";
  if(/(overhead press|shoulder press|arnold|push press|pike|handstand)/.test(n)) return "ohp";
  if(/(split squat|bulgarian|\blunge\b|step-up)/.test(n)) return "lunge";
  if(/squat/.test(n)) return "squat";
  if(/\brow\b/.test(n)) return "row";
  if(/(triceps|pushdown|skull|close-grip)/.test(n)) return "tricep";
  if(/wrist curl/.test(n)) return "wristcurl";
  if(/adduction|adductor|cossack|copenhagen/.test(n)) return "adductor";
  if(/curl/.test(n)) return "curl";
  if(/(fly|flye|pec deck|crossover)/.test(n)) return "chestfly";
  if(/abduction|banded side step|clamshell|monster walk|lateral band walk|side.?lying leg|hip abductor|fire.?hydrant/.test(n)) return "abduction";
  if(/superman|back extension|hyperextension/.test(n)) return "backext";
  if(/(crunch|leg raise|plank|hollow|sit-up|ab wheel|dead bug|bicycle|russian twist|mountain climber|bird dog|hold)/.test(n)) return "core";
  return n.replace(/[^a-z]/g,'');
}
// movement role — compound (multi-joint, the day's anchor) vs isolation (single-joint accessory). Explicit,
// so it's right where muscle-array length misleads: Close-Grip Bench is a compound even though triceps is its
// primary. Drives press+fly pairing within a muscle and the powerlifting anchors. A press/row/squat word wins
// even if an isolation word also appears (e.g. "close-grip bench press").
const COMP_RE=/(squat|deadlift|press|\brow\b|pull-?up|chin-?up|pulldown|\bdip\b|lunge|step-up|hip thrust|thruster|good morning|push-?up|clean|snatch|swing)/;
const ISO_RE=/(fly|flye|pec deck|raise|lateral|\bcurl\b|extension|pushdown|skull|crossover|pull-?apart|pull-?through|reverse pec|kickback|shrug|face pull|crunch|leg raise|pullover|adduction|abduction)/;
function roleFor(name){
  const n=String(name).toLowerCase();
  if(COMP_RE.test(n)) return "compound";
  if(ISO_RE.test(n)) return "isolation";
  return "compound";
}
// kettlebell ballistics (swing/snatch/clean/high-pull) are power & conditioning moves — keep them off heavy,
// low-rep days. Grinds always pass. Used to gate the general builder by objective × training style.
function fitsGoal(name, obj, bias){
  if(!KB_BALLISTIC.test(String(name).toLowerCase())) return true;
  if(bias==="intensity" || bias==="power" || obj==="strength") return false;
  return true;
}
// ballistics get power/conditioning rep ranges instead of the plan's hypertrophy scheme (returns null for everything else)
function kbRepOverride(name){
  const n=String(name).toLowerCase();
  if(/two-hand kettlebell swing/.test(n)) return "12–20";
  if(/swing|high pull/.test(n)) return "10–15";   // one-arm — treat as per side
  if(/snatch|\bclean\b/.test(n)) return "8–12";   // per side
  return null;
}
// Cables fatigue less per rep (constant tension, no sticking point) and reward higher rep work — so a
// cable move targets one rep-bracket above its equivalent free-weight accessory.
const REP_LADDER=["3–5","5–8","6–10","8–12","10–12","10–15","12–15","12–20","15–20","15–25"];
function bumpRange(rr){
  if(!rr) return rr;
  const i=REP_LADDER.indexOf(rr);
  if(i>=0 && i<REP_LADDER.length-1) return REP_LADDER[i+1];
  const m=String(rr).match(/(\d+)\s*[–\-]\s*(\d+)/);   // off-ladder range → nudge both ends up
  return m ? (+m[1]+2)+"–"+(+m[2]+4) : rr;
}
function cableRepBump(name, rr){ return (rr && equipFor(name).key==="cable") ? bumpRange(rr) : rr; }
// allocate each day's exercise slots in proportion to the emphasis weights (with contrast), so dragging a spoke really changes volume
function pickWorkoutWeighted(groups, n, injuries, level, W, offset, exp, obj, bias, pool){
  offset=offset||0; pool=pool||BUILD_POOL;
  const avail={}, usable=[];
  // Favour the moves you actually train: bias each muscle's candidate order toward exercises you log often
  // and recently, so suggestions learn from your habits. Ties keep the curated pool order; the shuffle
  // offset still rotates through the rest for variety, and a brand-new user (no history) is unaffected.
  const favScore=name=>{ const h=hist[name]; if(!h||!h.length) return 0; let last=0; h.forEach(e=>{ if(e.d>last) last=e.d; });
    return h.length + ((Date.now()-last)/86400000 < 21 ? 2.5 : 0); };
  groups.forEach(g=>{ const a=(pool[g]||[]).filter(x=>!injuryBlocks(x,injuries)&&allowsAt(x,level)&&suitsExp(x,exp)&&fitsGoal(x,obj,bias));
    a.sort((x,y)=>favScore(y)-favScore(x));   // stable: favourites first, pool order within equal scores
    avail[g]=a; if(a.length) usable.push(g); });
  if(!usable.length) return [];
  // Strength tilts slot allocation toward the big compound groups (chest/back/quads/hams/shoulders),
  // so the day is built around heavy lifts rather than isolation.
  const compBoost = (obj==="strength"||bias==="power") ? 1.6 : 1;
  const wt=g=>Math.pow(Math.max(0.06, W[g]!=null?W[g]:0.5), 1.8) * (COMPOUND_GROUPS.indexOf(g)>=0?compBoost:1), cap=g=>Math.min(avail[g].length,3);
  const wsum=usable.reduce((s,g)=>s+wt(g),0), raw={}, target={}; let assigned=0;
  usable.forEach(g=>{ raw[g]=n*wt(g)/wsum; target[g]=Math.min(cap(g), Math.floor(raw[g])); assigned+=target[g]; });
  let rem=n-assigned, guard=0;
  while(rem>0 && guard++<200){ let best=null, bestR=-1;
    usable.forEach(g=>{ if(target[g]>=cap(g)) return; const r=raw[g]-target[g]; if(r>bestR){ bestR=r; best=g; } });
    if(best===null) break; target[best]++; rem--; }
  // guarantee any emphasised muscle at least one exercise (steal a slot from the largest non-emphasised group)
  usable.forEach(g=>{ if((W[g]!=null?W[g]:0.5)>=0.55 && target[g]===0 && cap(g)>0){
    let donor=null, dbest=-1; usable.forEach(d=>{ if((W[d]!=null?W[d]:0.5)>=0.55) return; if(target[d]>1 && target[d]>dbest){ dbest=target[d]; donor=d; } });
    if(donor){ target[donor]--; target[g]=1; }
  }});
  const idx={}; usable.forEach(g=> idx[g]= Math.min(offset, Math.max(0,avail[g].length-1)) );
  const used=new Set(), usedFam=new Set(), compPrimary=new Set(), chosen=[], compDone=new Set(), left=Object.assign({},target), gcount={}; usable.forEach(g=>gcount[g]=0); let progress=true;
  // For a compound muscle, anchor it with a real compound (first pick), then prefer an isolation for any extra
  // slot — so e.g. a chest day becomes bench (compound) + a fly (isolation), not two presses. Sequential idx
  // scan is kept so the offset still rotates which exercises a repeated-signature day draws.
  // Also refuse a SECOND compound whose primary muscle already has one (across groups too): stops "two squats"
  // — Back Squat then Leg Press / a quad-primary Bulgarian — so the day spreads across different muscles.
  const take=(g)=>{ const arr=avail[g]; const roleAware=COMPOUND_GROUPS.indexOf(g)>=0, wantIso=roleAware && gcount[g]>0;
    let i=idx[g], pick=-1, fallback=-1;
    for(; i<arr.length; i++){ const nm=arr[i]; if(used.has(nm)||usedFam.has(familyKey(nm))) continue;
      if(fallback<0) fallback=i;
      const iso=roleFor(nm)==="isolation";
      if(!iso && compPrimary.has(muscleFor(nm)[0])) continue;    // that muscle already has a compound → seek variety
      if(!roleAware){ pick=i; break; }
      if(wantIso===iso){ pick=i; break; } }
    if(pick<0) pick=fallback;
    if(pick<0){ idx[g]=arr.length; return false; }
    idx[g]=pick+1;
    const nm=arr[pick]; used.add(nm); usedFam.add(familyKey(nm)); gcount[g]++;
    if(roleFor(nm)==="compound") compPrimary.add(muscleFor(nm)[0]);
    const isComp=roleAware && roleFor(nm)==="compound" && !compDone.has(g); if(isComp) compDone.add(g);
    chosen.push({n:nm, comp:isComp}); return true; };
  while(chosen.length<n && progress){ progress=false;
    usable.forEach(g=>{ if(left[g]<=0 || chosen.length>=n) return; if(take(g)){ left[g]--; progress=true; } else left[g]=0; }); }
  // if family/dup skips left the day short, top up from the highest-weighted groups (on a posture day this adds a row, etc.)
  const byW=usable.slice().sort((a,bb)=>wt(bb)-wt(a)); let pass=0;
  while(chosen.length<n && pass++<4){ let any=false; byW.forEach(g=>{ if(chosen.length>=n || gcount[g]>=cap(g)) return; if(take(g)) any=true; }); if(!any) break; }
  return chosen;
}
function buildPlan(b){
  const access=b.access||"gym";
  const isKB = access==="kb";
  const bias=b.bias||"balanced";
  const isPower = bias==="power";             // pure powerlifting: SBD split, big-three anchored heavy
  const POOL = isKB ? KB_POOL : BUILD_POOL;   // kettlebell-only draws from its own pool
  // KB count as gym equipment: the dedicated mode builds at the "gym" level so KB_POOL isn't venue-filtered out
  const primary = isKB ? "gym" : (access==="home"||access==="mostly_home") ? "none" : access==="park" ? "park" : "gym";
  const secondary = access==="mostly_gym" ? "none" : access==="mostly_home" ? "gym" : null;  // the "replacement" environment
  const chosenSplit = (b.split||"auto")!=="auto";
  // power → SBD; kettlebell → KB full-body; home/park with no explicit split → full-body fallback; else the
  // resolved split (an explicit pick overrides, otherwise buildSplit's recommendation).
  const baseDays = isKB ? kbSplit(b.freq)
    : isPower ? sbdSplit(b.freq, b.exp)
    : (primary==="none" && !chosenSplit) ? null
    : splitDays(b);
  // Strength goal = heavy low-rep lifting: one fewer move per day so the session is built around the
  // main compounds, not padded with isolation. (REPSCHEME.strength already drops the rep brackets.) Powerlifting
  // is the purest form of this — its days are anchored on the squat/bench/deadlift below.
  const isStrength = b.obj==="strength" || isPower;
  const base=Math.max(3, exCount(b.time) - (isStrength?1:0));
  const T=b.time, ssMode = (b.supersets==="off"||isPower) ? "off" : (T<=45 ? "aggressive" : "accessory");
  // Powerlifting overrides the objective's rep brackets: accessories support the lift, the anchor is set below.
  const sch=isPower ? {c:"3–5",a:"6–10"} : ((REPSCHEME[b.obj]||REPSCHEME.muscle)[bias]||(REPSCHEME[b.obj]||REPSCHEME.muscle).balanced);
  const reps={c:sch.c, a:sch.a};
  const anchorReps="1–5", anchorSets=5;   // the day's competition lift: heavy, more sets than the other compounds
  // sets stay in the productive 3–4 range; "intensity" works heavier (lower reps), "volume" adds one accessory set
  // 2–3 working sets per exercise is the efficient range. Default 3; drop to 2 for short sessions or heavy "intensity" work.
  // Strength: more work on the heavy compounds (4 sets, or 3 when time/intensity is tight) and only 2 on accessories.
  const lowSets = (T<=45) || (bias==="intensity");
  const compSets = isStrength ? (lowSets?3:4) : (lowSets ? 2 : 3), accSets = isStrength ? 2 : (lowSets ? 2 : 3);
  const seen={};
  const emph=b.emphasis||{}, W={}; BUILD_GROUPS.forEach(m=> W[buildKey(m)] = (emph[m]!=null?emph[m]:0.5));
  const emphG=new Set(); BUILD_GROUPS.forEach(m=>{ if((emph[m]!=null?emph[m]:0.5)>=0.55) emphG.add(m); });
  // day plan: the routine runs entirely in the primary environment; a different environment becomes a non-rotating replacement
  const dayDefs=[];
  for(let di=0; di<b.freq; di++){
    if(baseDays) dayDefs.push({groups:baseDays[di].g.slice(), name:baseDays[di].name, sub:baseDays[di].sub, anchor:baseDays[di].anchor, lvl:primary, rot:true});
    else dayDefs.push({groups:FB_GROUPS.slice(), name:"Full Body "+String.fromCharCode(65+di), lvl:primary, rot:true});
  }
  if(secondary){
    const repName = secondary==="none" ? "Home session" : secondary==="gym" ? "Gym session" : "Park session";
    const repSub  = secondary==="none" ? "Backup — bodyweight, anywhere" : secondary==="gym" ? "When you can get to the gym" : "Backup — at the park";
    dayDefs.push({groups:FB_GROUPS.slice(), name:repName, sub:repSub, lvl:secondary, rot:false});
  }
  // optional dedicated kettlebell day — a full-body KB session drawn from KB_POOL, added on top of the week
  const kbDay = (b.kb==="day" && !isKB);
  if(kbDay) dayDefs.push({groups:["quads","hamstrings","glutes","upperback","shoulders","core"], name:"Kettlebells",
    sub:"Full-body kettlebell session", lvl:"gym", rot:false, pool:KB_POOL});
  // round-robin accessories across muscles within each gym area, so a superset pairs DIFFERENT muscles at one station
  const interleave=(accs)=>{ const byArea={}; accs.forEach(p=>{ const a=exArea(p.n); (byArea[a]=byArea[a]||[]).push(p); });
    const out=[]; Object.keys(byArea).forEach(a=>{ const byM={}; byArea[a].forEach(p=>{ const m=muscleFor(p.n)[0]; (byM[m]=byM[m]||[]).push(p); });
      const ms=Object.keys(byM); let go=true; while(go){ go=false; ms.forEach(m=>{ if(byM[m].length){ out.push(byM[m].shift()); go=true; } }); } });
    return out; };
  // trim lowest-emphasis accessories only if a day runs over its time budget (count is set by the realistic pick below)
  const trimDay=(wk, meta, protect)=>{
    regroupSupersets(wk, ssMode); let guard=0;
    while(workoutMinutes(wk) > T && wk.ex.length>3 && guard++<18){
      let idx=-1, low=Infinity;
      for(let k=0;k<wk.ex.length;k++){ if(meta[k].comp) continue; const g=meta[k].grp;
        if(protect.has(g) && meta.filter(m=>m.grp===g).length<=1) continue;
        const ww=(emph[g]!=null?emph[g]:0.5); if(ww<low){ low=ww; idx=k; } }
      if(idx<0){ if(meta.filter(m=>m.comp).length>2){ for(let k=wk.ex.length-1;k>=0;k--){ if(meta[k].comp){ idx=k; break; } } } if(idx<0) break; }
      wk.ex.splice(idx,1); meta.splice(idx,1); regroupSupersets(wk, ssMode);
    }
  };
  // build one workout for a day at a given selection offset; fixedComps (optional) keeps the same compounds and only re-picks accessories
  const buildVariant=(d, offset, name, fixedComps)=>{
    const dPool = d.pool || POOL;   // a KB day overrides the pool for that day only
    let groups=d.groups.slice(); const dom=dayDomain(d.name);
    Object.keys(W).forEach(g=>{ if(W[g]>=0.55 && dom.indexOf(g)>=0 && groups.indexOf(g)<0 && dPool[g] && dPool[g].length) groups.push(g); });
    // Powerlifting day: reserve the first slot for the competition lift, fill the rest with supporting accessories.
    const anchor = d.anchor || null, need = anchor ? Math.max(1, base-1) : base;
    let picks=pickWorkoutWeighted(groups, need, b.injuries, d.lvl, W, offset, b.exp, b.obj, bias, dPool);
    if(anchor){ const af=familyKey(anchor);
      picks=picks.filter(p=>familyKey(p.n)!==af && p.n!==anchor).slice(0, need);   // never duplicate the anchor's lift family
      picks.unshift({n:anchor, comp:true, anchor:true});
    }
    if(fixedComps) picks=fixedComps.concat(picks.filter(p=>!p.comp));   // keep A's compounds, take this offset's accessories
    const comps=picks.filter(p=>p.comp), accs=interleave(picks.filter(p=>!p.comp));
    const ordered=comps.concat(accs);
    const wk={ name, ex: ordered.map(p=>{ const s=p.anchor?anchorSets:(p.comp?compSets:accSets), rr=p.anchor?anchorReps:cableRepBump(p.n, kbRepOverride(p.n)||(p.comp?reps.c:reps.a)); return {n:p.n, t:s+" × "+rr, s}; }) };
    if(d.sub) wk.sub=d.sub; wk.rotate=d.rot;
    wk._meta=ordered.map(p=>({ comp:p.comp, grp:muscleFor(p.n)[0] }));
    wk._lvl=d.lvl;
    trimDay(wk, wk._meta, emphG);
    return {wk, comps};
  };
  const vary = b.vary==="on";
  const aWorkouts=[], bWorkouts=[], fixedWorkouts=[];
  dayDefs.forEach((d)=>{
    const sig=d.groups.slice().sort().join(",")+"|"+d.lvl, offset=seen[sig]||0;
    if(d.rot!==false){
      seen[sig]=offset+1;
      const built=buildVariant(d, offset, d.name);
      // Variety: one template per slot, with each accessory tagged with a same-muscle rotation pool
      // so the session view cycles it automatically (compounds stay fixed for progression) — instead
      // of doubling into A/B templates. See planSessionsPerWeek / applyRotation.
      if(vary && !isKB) built.wk.ex.forEach((e,i)=>{   // KB-only stays pure — no rotating into bodyweight/free-weight moves
        const m=built.wk._meta[i]; if(!m || m.comp) return;
        const others=built.wk.ex.filter((_,j)=>j!==i);   // don't rotate into a move (or family) already in this session
        const taken={ names:new Set(others.map(x=>x.n)), fams:new Set(others.map(x=>familyKey(x.n))) };
        const pool=rotationPool(e.n, built.wk._lvl, b.injuries, b.exp, taken);
        if(pool.length>1) e.rot=pool;
      });
      aWorkouts.push(built.wk);
    } else {
      fixedWorkouts.push(buildVariant(d, offset, d.name).wk);   // non-rotating replacement → keep last
    }
  });
  // rotating days first, then any non-rotating replacement day last (bWorkouts is unused now that
  // Variety rotates accessories in place rather than emitting separate B templates).
  const workouts=aWorkouts.concat(bWorkouts, fixedWorkouts);
  // coverage: any muscle the user hasn't dialled to zero should get at least some work somewhere in the plan.
  // (Skipped for powerlifting — an SBD program is meant to under-cover some muscles, not chase full balance.)
  if(!isPower) BUILD_GROUPS.forEach(m=>{
    if(NO_TARGET.has(m) || (emph[m]!=null?emph[m]:0.5) < 0.2) return;   // exempt (Neck) or dragged to the centre = excluded
    if((planVolume({workouts}).totals[m]||0) > 0) return;          // already hit (primary or secondary)
    const key=buildKey(m); let bestI=-1, bestLen=99;
    workouts.forEach((wk,i)=>{ if(dayDomain(wk.name).indexOf(key)>=0 && wk.ex.length<bestLen){ bestLen=wk.ex.length; bestI=i; } });
    if(bestI<0) return;
    const cand=(POOL[key]||[]).find(x=>!injuryBlocks(x,b.injuries)&&allowsAt(x,workouts[bestI]._lvl)&&suitsExp(x,b.exp)&&fitsGoal(x,b.obj,bias)&&!workouts[bestI].ex.some(e=>e.n===x||familyKey(e.n)===familyKey(x)));
    if(!cand) return;
    workouts[bestI].ex.push({n:cand, t:accSets+" × "+cableRepBump(cand, kbRepOverride(cand)||reps.a), s:accSets}); workouts[bestI]._meta.push({comp:false, grp:m});
    const protect=new Set(emphG); protect.add(m);                 // keep the new move; trim a lower-priority one to stay near the limit
    trimDay(workouts[bestI], workouts[bestI]._meta, protect);
  });
  // "A little" kettlebell: force a KB move into the days that have none, until a small target is met.
  // An explicit override, so it ignores the gym-only venue rule (the user is saying they have a bell).
  if(b.kb==="some" && !isKB){
    const kbCount = ()=> workouts.reduce((c,wk)=> c + wk.ex.filter(e=>equipFor(e.n).key==="kb").length, 0);
    const target = Math.max(1, Math.min(3, Math.round(b.freq/2)));
    const usedKb=new Set(); let guard=0;
    while(kbCount() < target && guard++ < 12){
      // target the rotating day with the fewest KB moves (then the shortest), skipping fixed/replacement days
      let bestI=-1, bestKb=99, bestLen=99;
      workouts.forEach((wk,i)=>{ if(wk.rotate===false) return;
        const kc=wk.ex.filter(e=>equipFor(e.n).key==="kb").length;
        if(kc<bestKb || (kc===bestKb && wk.ex.length<bestLen)){ bestKb=kc; bestLen=wk.ex.length; bestI=i; } });
      if(bestI<0) break;
      const wk=workouts[bestI], dom=dayDomain(wk.name); let cand=null, fallback=null;
      // prefer a KB move not already used elsewhere in the plan, so days don't all get the same one
      for(const g of dom){ for(const x of (KB_POOL[g]||[])){
        if(injuryBlocks(x,b.injuries)||!suitsExp(x,b.exp)||!fitsGoal(x,b.obj,bias)) continue;
        if(wk.ex.some(e=>e.n===x||familyKey(e.n)===familyKey(x))) continue;
        if(!usedKb.has(x)){ cand=x; break; } if(!fallback) fallback=x;
      } if(cand) break; }
      cand = cand || fallback;
      if(!cand) break;
      usedKb.add(cand);
      wk.ex.push({n:cand, t:accSets+" × "+cableRepBump(cand, kbRepOverride(cand)||reps.a), s:accSets}); wk._meta.push({comp:false, grp:muscleFor(cand)[0]});
      const protect=new Set(emphG); protect.add(muscleFor(cand)[0]);   // keep the forced KB move; trim a lower-priority one for time
      trimDay(wk, wk._meta, protect);
    }
  }
  // Guarantee at least one rotational / anti-rotation core move across the week (transverse-plane work).
  // If the picks left none in, slot one into the rotating day with the most room and trim for time.
  if(!isKB && !isPower && !workouts.some(wk=>wk.ex.some(e=>isRotational(e.n)))){
    const cands=(BUILD_POOL.core||[]).filter(isRotational);
    let bestI=-1, bestLen=99;
    workouts.forEach((wk,i)=>{ if(wk.rotate===false) return; if(dayDomain(wk.name).indexOf("core")<0) return; if(wk.ex.length<bestLen){ bestLen=wk.ex.length; bestI=i; } });
    if(bestI>=0){
      const wk=workouts[bestI];
      const cand=cands.find(x=>!injuryBlocks(x,b.injuries)&&allowsAt(x,wk._lvl)&&suitsExp(x,b.exp)&&!wk.ex.some(e=>e.n===x||familyKey(e.n)===familyKey(x)));
      if(cand){
        wk.ex.push({n:cand, t:accSets+" × "+cableRepBump(cand, reps.a), s:accSets}); wk._meta.push({comp:false, grp:"core"});
        const protect=new Set(emphG); protect.add("core");   // keep the rotational move; trim a lower-priority one for time
        trimDay(wk, wk._meta, protect);
      }
    }
  }
  workouts.forEach(wk=>{ delete wk._meta; delete wk._lvl; });
  const objLbl=isPower ? "Powerlifting" : ({muscle:"Hypertrophy",strength:"Strength",fatloss:"Fat-loss",fitness:"Fitness"}[b.obj]||"Custom");
  const accLbl={gym:"",park:" · park",home:" · home",mostly_gym:" · gym+home",mostly_home:" · home+gym",kb:" · kettlebell"}[access]||"";
  const splitLbl = (!isPower && !isKB && (b.split||"auto")!=="auto" && SPLIT_LABEL[b.split]) ? " · "+SPLIT_LABEL[b.split] : "";
  return { id:"custom-"+Date.now(), name:objLbl+splitLbl+accLbl, level:b.exp, daysPerWeek:b.freq+(kbDay?1:0), workouts };
}
document.querySelectorAll("#sheetBuild .bopt").forEach(seg=>{ const k=seg.dataset.k; seg.querySelectorAll(".s").forEach(s=> s.onclick=()=>{
  seg.querySelectorAll(".s").forEach(x=>x.classList.toggle("active",x===s)); const v=s.dataset.v; build[k]=isNaN(+v)?v:+v; updateBuildPreview(); }); });
document.querySelectorAll('#sheetBuild .bchips:not(.multi):not([data-k="focus"])').forEach(grp=>{ const k=grp.dataset.k; grp.querySelectorAll(".chip").forEach(c=> c.onclick=()=>{
  grp.querySelectorAll(".chip").forEach(x=>x.classList.toggle("on",x===c)); build[k]=c.dataset.v; updateBuildPreview(); }); });
// focus: pick up to TWO areas — emphasis becomes the union (per-muscle max) of their presets; "Balanced" is exclusive
function emphasisFromFocuses(focuses){
  const list=(focuses||[]).filter(Boolean), hasBal=list.indexOf("balanced")>=0, foci=list.filter(f=>f!=="balanced");
  if(!foci.length) return emphasisPreset("balanced");
  const e={}; BUILD_GROUPS.forEach(m=>e[m]=0);
  foci.forEach(f=>{ const p=emphasisPreset(f); BUILD_GROUPS.forEach(m=> e[m]=Math.max(e[m], p[m]!=null?p[m]:0)); });
  if(hasBal) BUILD_GROUPS.forEach(m=>{ e[m]=0.5+(e[m]-0.5)*0.4; });   // "Balanced + X" = a light lean, not a full focus
  return e;
}
document.querySelectorAll('#sheetBuild .bchips[data-k="focus"] .chip').forEach(c=> c.onclick=()=>{
  const v=c.dataset.v; let sel=Array.isArray(build.focus)?build.focus.slice():[];
  const i=sel.indexOf(v);                                              // plain multi-select, cap 2 — Balanced can pair with one area for a light lean
  if(i>=0) sel.splice(i,1); else { sel.push(v); if(sel.length>2) sel.shift(); }
  if(!sel.length) sel=["balanced"];
  build.focus=sel; build.emphasis=emphasisFromFocuses(sel); syncEmphasisChips(); updateBuildPreview();
});
document.querySelectorAll("#sheetBuild .bchips.multi").forEach(grp=>{ const k=grp.dataset.k; grp.querySelectorAll(".chip").forEach(c=> c.onclick=()=>{
  c.classList.toggle("on"); build[k]=[].map.call(grp.querySelectorAll(".chip.on"),x=>x.dataset.v); updateBuildPreview(); }); });
function syncEmphasisChips(){ const sel=Array.isArray(build.focus)?build.focus:(build.focus?[build.focus]:[]);
  document.querySelectorAll('#sheetBuild .bchips[data-k="focus"] .chip').forEach(c=> c.classList.toggle("on", sel.indexOf(c.dataset.v)>=0)); }
// The builder rose uses the same average-normalized curve as the feed/share roses (ROSE_MID/GAMMA).
// Because the render normalizes to the average worked muscle, changing any wedge rescales the others —
// "drag one, the rest move proportionally". The drag logic lives in the pointer handlers below.
let buildExpanded=new Set();   // which rolled-up wedges are split open on the planner's emphasis radar
// emphasis to plot for a display spoke: a collapsed parent shows the mean of its heads, EXCLUDING de-emphasised
// auxiliary heads (e.g. Lower Back) — otherwise a "Balanced" plan reads uneven because Back is dragged down by
// the low default on the erectors. Plain spokes read straight through.
function emphMainSubs(g){ const subs=SUBGROUPS[g].filter(m=>AUX_EMPH.indexOf(m)<0); return subs.length?subs:SUBGROUPS[g]; }
function emphVal(g){
  if(SUBGROUPS[g] && !buildExpanded.has(g)){ const s=emphMainSubs(g).map(m=>build.emphasis[m]!=null?build.emphasis[m]:0.5); return s.reduce((a,b)=>a+b,0)/s.length; }
  return build.emphasis[g]!=null?build.emphasis[g]:0.5;
}
function drawEmphasisRadar(){
  const c=$("buildRadar"); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const G=roseGroups(buildExpanded), cx=W/2, cy=H/2, R=W*0.30, n=G.length;
  const cs=getComputedStyle(document.documentElement), accent=(cs.getPropertyValue("--accent")||"#0a84ff").trim(), lab=(cs.getPropertyValue("--l3")||"#888").trim();
  const pt=(i,rr)=>{ const a=(-90+i*360/n)*Math.PI/180; return [cx+rr*Math.cos(a), cy+rr*Math.sin(a)]; };
  // Sums-to-1 distribution; radius is a gentle curve of each muscle's share (shared roseRadii / ROSE_GAMMA).
  const em={}; G.forEach(g=> em[g]=emphVal(g));
  const frac=roseRadii(G, em);
  ctx.strokeStyle="rgba(128,128,128,.22)"; ctx.lineWidth=1.5;
  [0.5,1].forEach(f=>{ ctx.beginPath(); ctx.arc(cx,cy,R*f,0,Math.PI*2); ctx.stroke(); });
  const half=Math.PI/n - 0.05;
  G.forEach((g,i)=>{ const a=(-90+i*360/n)*Math.PI/180, rr=R*frac[i], col=MCOLOR[g]||accent;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,rr,a-half,a+half); ctx.closePath();
    ctx.fillStyle=col; ctx.globalAlpha=.28; ctx.fill(); ctx.globalAlpha=1; ctx.lineWidth=2.5; ctx.strokeStyle=col; ctx.stroke(); });
  // grab handle at each wedge tip
  G.forEach((g,i)=>{ const [x,y]=pt(i,R*frac[i]); ctx.beginPath(); ctx.arc(x,y,14,0,Math.PI*2); ctx.fillStyle=MCOLOR[g]||accent; ctx.fill(); ctx.lineWidth=3; ctx.strokeStyle="#fff"; ctx.stroke(); });
  ctx.fillStyle=lab; ctx.font=cfont(W,"label"); ctx.textBaseline="middle";
  G.forEach((g,i)=>{ const [x,y]=pt(i,R+50), co=Math.cos((-90+i*360/n)*Math.PI/180); ctx.textAlign=Math.abs(co)<0.3?"center":(co>0?"left":"right");
    const isParent=SUBGROUPS[g] && !buildExpanded.has(g); fitText(ctx, (MSHORT[g]||g)+(isParent?" ›":""), x, y); });
}
// the standard-split picker — repopulated on every preview update so it tracks the chosen day count
// (and steps aside for the power/kettlebell modes, which carry their own fixed structure)
function renderSplitChips(){
  const box=$("buildSplitChips"); if(!box) return;
  const locked = build.bias==="power" ? "Powerlifting uses a fixed Squat · Bench · Deadlift split."
    : build.access==="kb" ? "Kettlebell-only mode runs full-body kettlebell days." : null;
  if(locked){ box.innerHTML='<p class="levelcap" style="margin:2px 0 0;">'+locked+'</p>'; return; }
  const opts=availableSplits(build.freq);
  if(!opts.some(o=>o.id===(build.split||"auto"))) build.split="auto";   // current pick invalid at this day count → revert to recommended
  box.innerHTML=opts.map(o=>'<button class="chip'+((build.split||"auto")===o.id?" on":"")+'" data-split="'+o.id+'">'+esc(o.label)+'</button>').join('');
  box.querySelectorAll(".chip").forEach(c=> c.onclick=()=>{ build.split=c.dataset.split; updateBuildPreview(); });
}
function renderBuildOutlook(plan){
  const box=$("buildOutlook"); if(!box) return;
  const o=buildOutlook(plan);
  box.className="progverd v-"+o.v;
  box.innerHTML='<span class="pvdot"></span><span><b>'+esc(o.label)+'</b> — '+esc(o.detail)+'</span>';
}
function updateBuildPreview(){
  syncEmphasisChips(); drawEmphasisRadar(); renderSplitChips();
  const bc=$("biasCap"); if(bc) bc.textContent=BIAS_CAP[build.bias||"balanced"]||"";
  const plan=buildPlan(build), sc=planScores(plan);
  $("buildPrevScores").innerHTML='<span class="psc"><b>Balance</b> '+sc.balance+'<small>/5</small></span><span class="psc"><b>Hypertrophy</b> '+sc.hyp+'<small>/5</small></span>';
  renderBuildOutlook(plan);
}
(function(){ const c=$("buildRadar"); if(!c) return; let dragging=false, downX=0, downY=0, moved=false;
  const curG=()=>roseGroups(buildExpanded);
  const nearestSpoke=(ev)=>{ const r=c.getBoundingClientRect(); const px=(ev.clientX-r.left)/r.width*c.width, py=(ev.clientY-r.top)/r.height*c.height;
    const G=curG(), n=G.length, cx=c.width/2, cy=c.height/2, ang=Math.atan2(py-cy,px-cx)*180/Math.PI;
    let bestI=0,bestD=999; for(let i=0;i<n;i++){ const a=-90+i*360/n, d=Math.abs(((ang-a+540)%360)-180); if(d<bestD){bestD=d;bestI=i;} } return bestI; };
  // Render is average-normalized: radius ≈ ROSE_MID·(e/mean). setFromFrac sets the spoke so its wedge
  // tracks the finger — at the rim it sits well above the field; at ROSE_MID it matches the average.
  // (Using the OTHER display spokes' mean as the reference; changing one wedge rescales the rest.)
  const meanOther=(g)=>{ const o=curG().filter(m=>m!==g).map(emphVal);
    return Math.max(0.0001, o.reduce((a,b)=>a+b,0)/Math.max(1,o.length)); };
  // a collapsed parent writes its value to all of its heads; a head or plain group writes itself
  const setEmph=(g,e)=>{ e=Math.max(0.04,e); if(SUBGROUPS[g] && !buildExpanded.has(g)) emphMainSubs(g).forEach(s=>build.emphasis[s]=e); else build.emphasis[g]=e; };
  const setFromFrac=(g, frac)=>{ frac=Math.max(0.05, Math.min(1, frac)); const mo=meanOther(g);
    const e = mo*Math.pow(Math.max(0.001,frac)/ROSE_MID, 1/ROSE_GAMMA);   // invert radius=ROSE_MID·(e/mean)
    setEmph(g, e); build.focus=[]; syncEmphasisChips(); updateBuildPreview(); };
  const applyDrag=(ev)=>{ const r=c.getBoundingClientRect(); const px=(ev.clientX-r.left)/r.width*c.width, py=(ev.clientY-r.top)/r.height*c.height;
    const cx=c.width/2, cy=c.height/2, R=c.width*0.30, i=nearestSpoke(ev);
    setFromFrac(curG()[i], Math.hypot(px-cx,py-cy)/R); };
  c.addEventListener("pointerdown", e=>{ dragging=true; downX=e.clientX; downY=e.clientY; moved=false; try{ c.setPointerCapture(e.pointerId); }catch(_){} e.preventDefault(); });
  c.addEventListener("pointermove", e=>{ if(!dragging) return; if(Math.hypot(e.clientX-downX,e.clientY-downY)>7){ moved=true; applyDrag(e); } });
  c.addEventListener("pointerup", e=>{ if(dragging && !moved){
      const g=curG()[nearestSpoke(e)], parent=SUBGROUPS[g]?g:AGG[g];
      if(parent){ if(buildExpanded.has(parent)) buildExpanded.delete(parent); else buildExpanded.add(parent); drawEmphasisRadar(); }   // tap a roll-up (or head) to split/collapse
      else { const mo=meanOther(g); setEmph(g, emphVal(g) > mo*1.25 ? mo : mo*1.8); build.focus=[]; syncEmphasisChips(); updateBuildPreview(); } }   // tap a plain muscle to toggle a boost
    dragging=false; });
  c.addEventListener("pointercancel", ()=>{ dragging=false; });
})();
$("buildPlan").onclick=()=>{ closeSheet("Plans");
  build.focus=(settings.focusAreas||["balanced"]).slice();        // recommend the focus you stated in Me (you can change it)
  build.emphasis=emphasisFromFocuses(build.focus);
  openSheet("Build"); updateBuildPreview(); coach("build","Tap a focus or drag the radar to emphasise muscles — your plan rebuilds around them. Pick your days and time and we choose the split."); };
$("buildClose").onclick=()=>closeSheet("Build");
$("scrimBuild").onclick=()=>closeSheet("Build");
$("buildGo").onclick=async()=>{
  const plan=buildPlan(build);
  plans.push(plan); settings.activePlanId=plan.id; settings.pointers[plan.id]=0; freeMode=false;
  await sset("plans",plans); await sset("settings",settings);
  curWk=nextRotateIndex(plan); if(curWk<0) curWk=0;
  closeSheet("Build"); renderAll();
  toast("Your plan is ready — first workout loaded.", true);
  // if this plan's focus diverges from your stated focus, offer to update it (never forced)
  const bf=(Array.isArray(build.focus)?build.focus:[]).filter(Boolean).slice().sort().join(",");
  const sf=(settings.focusAreas||["balanced"]).slice().sort().join(",");
  if(bf && bf!=="balanced" && bf!==sf){
    const human=listWords((Array.isArray(build.focus)?build.focus:[]).map(f=>FOCUS_LABEL[f]||f));
    confirmAsk("This plan leans toward "+human+", different from your stated focus. Make that your overall focus?","Update focus",async()=>{
      settings.focusAreas=(build.focus||[]).slice(); await sset("settings",settings); renderObjective(); toast("Focus updated to match.");
    });
  }
};

// ================= utils =================
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function hexAlpha(hex,a){ const h=hex.replace('#',''); return 'rgba('+parseInt(h.slice(0,2),16)+','+parseInt(h.slice(2,4),16)+','+parseInt(h.slice(4,6),16)+','+a+')'; }
function accentHex(){ return (getComputedStyle(document.documentElement).getPropertyValue('--accent')||'#c96810').trim(); }
// ===== backup / restore =====
// Backup covers exactly the synced keys (CLOUD_KEYS) — draft stays device-only in both layers.
// Binary base64 codecs (ArrayBuffer ⇄ base64) — distinct from the string b64e/b64d used for plan
// codes above. Kept under separate names so the two never collide in this shared script scope.
function bufToB64(buf){ return btoa(String.fromCharCode.apply(null,new Uint8Array(buf))); }
function b64ToBuf(str){ const bin=atob(str), a=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i); return a; }
// New backups stretch harder. The count MUST travel with each backup: raising it in place would make
// every existing file undecryptable, and the app would report that as "wrong passphrase" — sending you
// hunting for a typo that never happened. Old backups carry no count and are read at the old 150k.
const PBKDF2_ITERS=600000, PBKDF2_LEGACY=150000;
async function deriveKey(pass,salt,iters){
  const base=await crypto.subtle.importKey("raw",new TextEncoder().encode(pass),"PBKDF2",false,["deriveKey"]);
  return crypto.subtle.deriveKey({name:"PBKDF2",salt,iterations:iters||PBKDF2_LEGACY,hash:"SHA-256"},base,{name:"AES-GCM",length:256},false,["encrypt","decrypt"]);
}
// A 5-word phrase from a 60-word list is ~29 bits; paired with 600k PBKDF2 that is far past anything a
// GPU chews through, and it is easier to write down correctly than a string of symbols.
const PASS_WORDS=("anchor amber badge barley beacon birch bramble cedar cinder clover cobalt copper coral crest dapple delta "
 +"drift ember fathom fennel ferry flint garnet gable harbor hazel heron ivory jasper kettle lantern larch linen marble meadow "
 +"mellow mosaic nectar nimbus oaken onyx orchard pebble pewter plum quarry quiver ridge rowan saffron sable sorrel spruce "
 +"thistle timber umber vellum verdant willow zephyr").split(/\s+/).filter(Boolean);
function genPassphrase(){
  const n=5, out=[], r=new Uint32Array(n); crypto.getRandomValues(r);
  for(let i=0;i<n;i++) out.push(PASS_WORDS[r[i]%PASS_WORDS.length]);
  return out.join("-");
}
const PASS_MIN=12;
// Replaces window.prompt(), which no password manager can see. Resolves to the passphrase, or null.
let _passResolve=null;
function askPassphrase(opts){
  opts=opts||{};
  return new Promise(res=>{
    const wrap=$("passWrap"); if(!wrap){ res(null); return; }
    _passResolve=res;
    $("pTitle").textContent=opts.title||"Passphrase";
    $("pNote").textContent=opts.note||"";
    $("pWarn").textContent="";
    const inp=$("passInput");
    inp.value=""; inp.placeholder=opts.placeholder||"Passphrase";
    inp.setAttribute("autocomplete", opts.existing ? "current-password" : "new-password");
    $("passUser").value=(cloudUser&&cloudUser.email)||settings.displayName||"yalla";
    $("passGen").style.display=opts.existing?"none":"";
    $("pYes").textContent=opts.action||(opts.existing?"Unlock":"Save");
    wrap.classList.add("show");
    setTimeout(()=>{ try{ inp.focus(); }catch(e){} },60);
  });
}
function closePass(val){
  const wrap=$("passWrap"); if(wrap) wrap.classList.remove("show");
  const r=_passResolve; _passResolve=null; if(r) r(val);
}
if($("passForm")){
  $("passForm").onsubmit=(e)=>{
    e.preventDefault();
    const v=$("passInput").value||"";
    const existing=$("passInput").getAttribute("autocomplete")==="current-password";
    if(!existing && v.length<PASS_MIN){ $("pWarn").textContent="Use at least "+PASS_MIN+" characters — or tap Suggest."; return; }
    if(!v){ $("pWarn").textContent="Enter your passphrase."; return; }
    closePass(v);
  };
  $("pNo").onclick=()=>closePass(null);
  $("pScrim").onclick=()=>closePass(null);
  $("passGen").onclick=()=>{ const g=genPassphrase(); const i=$("passInput"); i.type="text"; i.value=g;
    $("pWarn").textContent="Write this down — nobody can recover it for you."; };
}
async function gatherData(){ const o={app:"yalla",v:1,exportedAt:Date.now(),data:{}}; for(const k of CLOUD_KEYS){ o.data[k]=await sget(k); } return o; }
async function shareOrDownload(blob,fname){
  try{ const file=new File([blob],fname,{type:blob.type||"application/octet-stream"});
    if(navigator.canShare && navigator.canShare({files:[file]})){ await navigator.share({files:[file],title:"Yalla"}); return; }
  }catch(e){ if(e&&e.name==="AbortError") return; }
  const url=URL.createObjectURL(blob), a=document.createElement("a"); a.href=url; a.download=fname; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),1500);
}
async function doExport(){
  const payload=await gatherData(), json=JSON.stringify(payload); let blob, enc=false, pass="";
  pass = await askPassphrase({
    title:"Encrypt this backup?",
    note:"This file holds your whole training log. A passphrase encrypts it — your password manager can save it. Cancel to download it unencrypted instead.",
    action:"Encrypt"
  }) || "";
  if(pass && crypto && crypto.subtle){
    try{
      const salt=crypto.getRandomValues(new Uint8Array(16)), iv=crypto.getRandomValues(new Uint8Array(12));
      const key=await deriveKey(pass,salt,PBKDF2_ITERS), ct=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,new TextEncoder().encode(json));
      // `iter` travels with the file: without it, any future change to the count makes this backup
      // undecryptable and the app would blame the passphrase
      blob=new Blob([JSON.stringify({app:"yalla",v:1,enc:true,iter:PBKDF2_ITERS,exportedAt:payload.exportedAt,salt:bufToB64(salt),iv:bufToB64(iv),data:bufToB64(ct)})],{type:"application/json"}); enc=true;
    }catch(e){ toast("Couldn't encrypt — export cancelled. Your data was not written unencrypted."); return; }
  } else if(pass){ toast("Encryption unavailable here — export cancelled to keep your passphrase meaningful."); return; }
  if(!blob) blob=new Blob([json],{type:"application/json"});
  await shareOrDownload(blob,"yalla-backup-"+new Date().toISOString().slice(0,10)+(enc?".enc":"")+".json");
  settings.lastBackupAt = Date.now(); await sset("settings", settings);
  toast(enc?"Encrypted backup ready — keep it safe.":"Backup ready — save it to Files or iCloud.");
}
async function applyRestore(obj){
  let data = obj && obj.data;
  if(obj && obj.enc){
    const pass=await askPassphrase({ title:"Unlock this backup", note:"Enter the passphrase this file was encrypted with.", existing:true, action:"Unlock" });
    if(!pass){ toast("Restore cancelled."); return; }
    try{ const key=await deriveKey(pass,b64ToBuf(obj.salt),obj.iter||PBKDF2_LEGACY),
      pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:b64ToBuf(obj.iv)},key,b64ToBuf(obj.data));
      data=JSON.parse(new TextDecoder().decode(pt)).data;
    }catch(e){ toast("Wrong passphrase or corrupt file."); return; }
  }
  if(!data || typeof data!=="object" || !("settings" in data || "history" in data || "plans" in data)){ toast("That doesn't look like a Yalla backup."); return; }
  // sset() marks and pushes, so a restore does NOT stop at this device: the restored data is stamped
  // with now(), beats every other device at the next reconcile, and is adopted everywhere. Say so.
  const reach = cloudReady()
    ? "Restore replaces all current data on this device, in your account, and on your other devices. Continue?"
    : "Restore replaces all current data on this device with the backup. Continue?";
  confirmAsk(reach,"Restore",async()=>{
    // keep an escape hatch: nothing else snapshots the pre-restore state, and there is no undo
    try{ const pre=await gatherData(); if(pre) await _localSet("_preRestore", {t:Date.now(), data:pre}); }catch(e){}
    const prevAccent=isAccent(settings.accent) ? settings.accent : null, preS=settings;
    // the restored target is a target change made now: last week keeps the target it was judged at (stars spec 2.3)
    const wk=starWeekId(), pwk=starWeekId(starWeekRange(wk)[0]-1), pst=preS.stars, preT=pst ? starBaseTarget() : null,
      preTP = !pst ? null : pst.tAt && pst.tAt[pwk]!=null ? pst.tAt[pwk] : pst.tWk && pwk<pst.tWk ? (pst.tPrev||2) : preT;
    for(const k of CLOUD_KEYS){ if(data[k]!=null) await sset(k,data[k]); }
    // stars, badges and deloads only grow: an older backup keeps what was earned since; every other field is the backup's
    settings=mergeGrowingSettings(preS, Object.assign({}, (await sget("settings"))||{}));
    if(pst && settings.stars){ const st=settings.stars=Object.assign({}, settings.stars);
      st.tAt=Object.assign({}, st.tAt, { [pwk]:preTP }); st.tWk=wk; st.tPrev=preT; }
    // a backup from before the accent picker has no accent: keep this device's, as cloud adopt does
    if(prevAccent && !isAccent(settings.accent)) settings.accent=prevAccent;
    plans=(await sget("plans"))||[]; last=(await sget("lastsets"))||{}; bw=(await sget("bodyweight"))||[]; hist=(await sget("history"))||{}; extlog=(await sget("extlog"))||[];
    ledger=(await sget("predledger"))||[]; calib=(await sget("calib"))||lgFreshCalib();
    if(!plans.length) plans=DEFAULT_PLANS.map(p=>JSON.parse(JSON.stringify(p)));
    if(!plans.find(p=>p.id===settings.activePlanId)) settings.activePlanId=plans[0].id;
    starLateBackfill(); if(!settings.stars) seedStars(); else checkStars({silent:true});   // count the restored history; adds only
    await sset("settings",settings);
    curWk=0; freeMode=false; swaps={}; draft={}; await sset("draft", draft);
    applyTheme(); renderAll();
    toast("Backup restored — welcome back.",true);
  });
}
$("exportBtn").onclick=doExport;
$("importBtn").onclick=()=>$("importFile").click();
if($("acctLoginBtn")) $("acctLoginBtn").onclick=()=>{ const e=($("acctEmail").value||"").trim(); if(!e||e.indexOf("@")<0){ toast("Enter your email address."); return; } cloudLogin(e); };
if($("acctVerifyBtn")) $("acctVerifyBtn").onclick=()=>{ const e=($("acctEmail").value||"").trim(); cloudVerify(e, $("acctCode").value); };
if($("acctLogoutBtn")) $("acctLogoutBtn").onclick=cloudLogout;
if($("acctName")) $("acctName").onchange=async()=>{ const v=$("acctName").value.trim().slice(0,24);
  settings.displayName=v; if(!settings.name) settings.name=v; await sset("settings",settings);
  if(cloudReady()){ try{ await sb.from("profiles").upsert({ user_id:cloudUser.id, display_name:v||cloudUser.email.split("@")[0] }); }catch(e){} }
  if($("ovGreet")) $("ovGreet").textContent=ovGreeting(); toast("I'll call you "+(v||"by your email")+"."); };
if($("acctPush")) $("acctPush").onclick=cloudForcePush;
if($("nameSave")) $("nameSave").onclick=saveDisplayName;
if($("acctDelete")) $("acctDelete").onclick=cloudDeleteData;
// Sharing intensity: 0 off · 1 summary · 2 detail (sets×reps) · 3 full (incl. weights).
// This level governs only what YOU publish; you always see friends' posts at the level they chose.
const SHARE_HINTS=[
  "Off — you don't publish anything. You can still see friends' workouts.",
  "Summary — accepted friends see your counts, volume and a muscle map.",
  "Detail — friends also see each exercise with sets & reps (no weights).",
  "Full — friends see everything, including the weights you lifted." ];
function renderShareSeg(){
  const lvl=settings.shareLevel||0;
  document.querySelectorAll("#shareSeg .s").forEach(s=> s.classList.toggle("active", (+s.dataset.lvl)===lvl));
  const hint=$("shareSegHint");
  if(hint) hint.textContent = (SHARE_HINTS[lvl]||"")
    + (!dbHardened && lvl>=2 ? " (Publishing summary-only until the friends features are enabled.)" : "");
}
document.querySelectorAll("#shareSeg .s").forEach(s=>{
  s.onclick=async()=>{ const lvl=+s.dataset.lvl; settings.shareLevel=lvl; settings.shareActivity=lvl>0;
    await sset("settings",settings); renderShareSeg();
    toast(lvl===0?"Sharing off — you won't publish anything." : "Sharing on — "+["","summaries","detail (sets & reps)","full detail incl. weights"][lvl]+"."); };
});

// ---- Friends (visibility, share code, requests, following) ----
// Whole surface depends on the friends-only schema being live (dbHardened); built dynamically.
const VIS_HINTS={ private:"Private — only friends you accept can follow you and see your workouts.",
                  public:"Public — anyone can follow you without approval and see what you share." };
let _myCode="";
// reflect the incoming-request count on the presence rail's "All" tile + the Settings "Manage friends" row
function setFriendsBadge(n){
  const rb=$("railBadge");
  if(rb){ rb.textContent=n>0?String(n):""; rb.hidden=!(n>0); }
  const sub=$("manageFriendsSub");
  if(sub) sub.textContent = n>0 ? (n+" request"+(n>1?"s":"")) : "";
}

// ---- avatars: friends read as people. A user's chosen colour+emoji (from their profile) wins;
// otherwise a deterministic monogram. Per-user prefs are cached as we load them from RPCs/profiles.
const _avatarCache={};   // uid -> { color, emoji, icon, style }
// Only a literal hex or hsl() colour may reach a style attribute. Validated on the way IN so one gate
// covers all 13 render sites. hsl() must stay allowed: avatarColor() below mints hsl(...) and saveAvatar
// stores it, so a hex-only rule would blank the avatar of every user who never picked a swatch.
const AV_COLOR_RE=/^(#[0-9a-f]{3}([0-9a-f]{3})?|hsl\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*\))$/i;
function safeAvColor(c){ c=String(c==null?"":c).trim(); return AV_COLOR_RE.test(c) ? c : null; }
function recordAvatars(rows){ (rows||[]).forEach(r=>{ if(r && r.user_id && ("avatar_color" in r || "avatar_emoji" in r || "avatar_icon" in r || "avatar_style" in r))
  _avatarCache[r.user_id]={ color:safeAvColor(r.avatar_color), emoji:r.avatar_emoji||null, icon:r.avatar_icon||null, style:r.avatar_style||null }; }); }
function avatarColor(seed){ let h=0; const s=String(seed||"?"); for(let i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))>>>0; return "hsl("+(h%360)+",55%,50%)"; }
function initials(name){ const p=String(name||"").trim().split(/\s+/).filter(Boolean); if(!p.length) return "🙂"; return (p[0][0]+(p[1]?p[1][0]:"")).toUpperCase(); }
// background per style — solid colour, a deeper gradient, a hue-shifted duotone, or solid (ring adds a class)
function avatarBg(color, style){
  if(style==="gradient") return "linear-gradient(135deg,"+color+", color-mix(in srgb,"+color+" 60%, #000))";
  if(style==="duotone")  return "linear-gradient(135deg,"+color+", color-mix(in srgb,"+color+" 45%, var(--brand)))";   // brand, not the viewer's accent: an avatar looks the same to everyone
  return color;
}
// ---- generative art avatars: a seeded PRNG paints abstract, deterministic art (colour blends,
// diagonal bands, or facets). Same seed → same art for everyone, so friends see what you picked. ----
function _seedHash(s){ let h=2166136261>>>0; s=String(s); for(let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
function _rng(seed){ let a=_seedHash(seed)||1; return function(){ a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function genAvatarSVG(seed){
  const r=_rng(seed), rnd=(a,b)=>a+(b-a)*r(), ri=(a,b)=>Math.floor(rnd(a,b+1));
  const baseHue=ri(0,359), sat=ri(62,86), lig=ri(46,60);
  const hue=o=>'hsl('+(((baseHue+o)%360+360)%360)+','+sat+'%,'+lig+'%)';
  const pal=[hue(0),hue(ri(20,55)),hue(ri(-55,-20)),hue(ri(120,210))];
  const v=ri(0,2); let s='<rect width="100" height="100" fill="'+pal[0]+'"/>';
  if(v===0){ for(let i=0;i<4;i++) s+='<circle cx="'+ri(8,92)+'" cy="'+ri(8,92)+'" r="'+ri(26,54)+'" fill="'+pal[1+(i%3)]+'" fill-opacity="0.55"/>'; }
  else if(v===1){ s+='<g transform="rotate('+ri(-42,42)+' 50 50)">'; let x=-40,i=0; while(x<140){ const w=ri(9,24); s+='<rect x="'+x+'" y="-40" width="'+w+'" height="180" fill="'+pal[1+(i%3)]+'" fill-opacity="0.85"/>'; x+=w; i++; } s+='</g>'; }
  else { for(let i=0;i<5;i++){ const p=[[ri(0,100),ri(0,100)],[ri(0,100),ri(0,100)],[ri(0,100),ri(0,100)]]; s+='<polygon points="'+p.map(q=>q.join(',')).join(' ')+'" fill="'+pal[1+(i%3)]+'" fill-opacity="0.72"/>'; } }
  return s;
}
function avatarHTML(name, opts){ opts=opts||{}; const sz=opts.size||40, uid=opts.uid, pref=(uid&&_avatarCache[uid])||{};
  const icon  = opts.icon!==undefined ? opts.icon : pref.icon;
  const emoji = opts.emoji!==undefined ? opts.emoji : pref.emoji;
  const style = opts.style!==undefined ? opts.style : pref.style;
  let inner, bg;
  if(icon){ inner='<svg viewBox="0 0 100 100" width="'+sz+'" height="'+sz+'" preserveAspectRatio="xMidYMid slice" style="display:block">'+genAvatarSVG(icon)+'</svg>'; bg='transparent'; }
  else { const color = safeAvColor(opts.color) || safeAvColor(pref.color) || avatarColor(opts.seed||uid||name||"?");
    inner = emoji ? esc(emoji) : esc(initials(name)); bg=esc(avatarBg(color,style)); }
  return '<span class="avatar'+(opts.live?" live":"")+(style==="ring"&&!icon?" r-ring":"")+'" style="width:'+sz+'px;height:'+sz+'px;font-size:'+Math.round(sz*(emoji?0.52:0.4))+'px;background:'+bg+';">'+inner+'</span>'; }
// keep my own cached avatar in sync with my saved prefs (so it shows on my feed posts / Me card)
function syncSelfAvatar(){ if(cloudUser) _avatarCache[cloudUser.id]={ color:safeAvColor(settings.avatarColor), emoji:settings.avatarEmoji||null, icon:settings.avatarIcon||null, style:settings.avatarStyle||null }; }

// palette + symbol options for the editor
const AV_COLORS=["#e8551c","#ff3b30","#ff9500","#ffcc00","#34c759","#00c7be","#30b0c7","#007aff","#5856d6","#af52de","#ff2d55","#8e8e93"];
const AV_EMOJIS=["🔥","💪","⚡","🏋️","🤸","🧠","🦁","🐺","🦅","😈","☠️","🎯","🚀","🥇","⭐","❤️","🌶️","🍑"];
// one-tap "characters" — a complete look (emoji + colour + style)
const AV_PRESETS=[
  {emoji:"🦁",color:"#ff9500",style:"gradient"}, {emoji:"🐺",color:"#30b0c7",style:"duotone"},
  {emoji:"🔥",color:"#ff3b30",style:"gradient"}, {emoji:"🦅",color:"#5856d6",style:"solid"},
  {emoji:"🐉",color:"#34c759",style:"duotone"},  {emoji:"🦄",color:"#af52de",style:"gradient"},
  {emoji:"🏋️",color:"#007aff",style:"ring"},     {emoji:"🥇",color:"#ffcc00",style:"solid"} ];
let _avEditColor=null, _avEditEmoji=null, _avEditStyle="solid", _avEditIcon=null, _avArtSeeds=[];
function freshArtSeeds(){ _avArtSeeds=Array.from({length:12},()=> Math.random().toString(36).slice(2,9)); }
function renderAvatarEditor(){
  const nm=settings.displayName||settings.name||"You";
  const prev=$("avPreview"); if(prev) prev.innerHTML=avatarHTML(nm,{size:92,color:_avEditColor,emoji:_avEditEmoji||undefined,style:_avEditStyle,icon:_avEditIcon});
  // generated art — current pick first, then the shuffled set
  const ag=$("avArt");
  if(ag){ const seeds=[]; if(_avEditIcon) seeds.push(_avEditIcon); _avArtSeeds.forEach(s=>{ if(seeds.indexOf(s)<0) seeds.push(s); });
    ag.innerHTML=seeds.slice(0,12).map(s=>'<button class="artbtn'+(s===_avEditIcon?" sel":"")+'" data-s="'+esc(s)+'">'+avatarHTML("",{size:46,icon:s})+'</button>').join('');
    ag.querySelectorAll(".artbtn").forEach(b=> b.onclick=()=>{ _avEditIcon=b.dataset.s; saveAvatar(); }); }
  const ps=$("avPresets");
  if(ps){ ps.innerHTML=AV_PRESETS.map((p,i)=>'<button class="emojibtn" data-i="'+i+'" style="background:'+avatarBg(p.color,p.style)+';">'+p.emoji+'</button>').join('');
    ps.querySelectorAll(".emojibtn").forEach(b=> b.onclick=()=>{ const p=AV_PRESETS[+b.dataset.i]; _avEditColor=p.color; _avEditEmoji=p.emoji; _avEditStyle=p.style; _avEditIcon=null; saveAvatar(); }); }
  document.querySelectorAll("#avStyleSeg .s").forEach(s=> s.classList.toggle("active", s.dataset.st===_avEditStyle && !_avEditIcon));
  const sw=$("avSwatches");
  if(sw){ sw.innerHTML=AV_COLORS.map(c=>'<span class="swatch'+(c===_avEditColor && !_avEditIcon?" sel":"")+'" data-c="'+c+'" style="background:'+c+';"></span>').join('');
    sw.querySelectorAll(".swatch").forEach(s=> s.onclick=()=>{ _avEditColor=s.dataset.c; _avEditIcon=null; saveAvatar(); }); }
  const eg=$("avEmojis");
  if(eg){ eg.innerHTML=AV_EMOJIS.map(e=>'<button class="emojibtn'+(e===_avEditEmoji && !_avEditIcon?" sel":"")+'" data-e="'+e+'">'+e+'</button>').join('');
    eg.querySelectorAll(".emojibtn").forEach(b=> b.onclick=()=>{ _avEditEmoji=b.dataset.e; _avEditIcon=null; saveAvatar(); }); }
}
function openAvatarEditor(){
  _avEditColor = settings.avatarColor || avatarColor((cloudUser&&cloudUser.id)||settings.displayName||"you");
  _avEditEmoji = settings.avatarEmoji || null;
  _avEditStyle = settings.avatarStyle || "solid";
  _avEditIcon  = settings.avatarIcon || null;
  if(!_avArtSeeds.length) freshArtSeeds();
  renderAvatarEditor(); openSheet("Avatar");
}
async function saveAvatar(){
  settings.avatarColor=_avEditColor||null; settings.avatarEmoji=_avEditEmoji||null; settings.avatarStyle=_avEditStyle||"solid"; settings.avatarIcon=_avEditIcon||null;
  await sset("settings",settings); syncSelfAvatar(); renderAvatarEditor();
  if(cloudReady()){
    // full write; if the DB is only partially migrated (missing icon/style cols), fall back to the legacy pair
    try{ const { error } = await sb.from("profiles").upsert({ user_id:cloudUser.id, avatar_color:settings.avatarColor, avatar_emoji:settings.avatarEmoji, avatar_icon:settings.avatarIcon, avatar_style:settings.avatarStyle }); if(error) throw error; }
    catch(e){ try{ await sb.from("profiles").upsert({ user_id:cloudUser.id, avatar_color:settings.avatarColor, avatar_emoji:settings.avatarEmoji }); }catch(e2){} }
  }
  renderMeProfile(); renderPresenceRail();
  if($("sheetFriends") && $("sheetFriends").classList.contains("show")) renderFriends();
}
document.querySelectorAll("#avStyleSeg .s").forEach(s=> s.onclick=()=>{ _avEditStyle=s.dataset.st; _avEditIcon=null; saveAvatar(); });
if($("avShuffle")) $("avShuffle").onclick=()=>{ freshArtSeeds(); renderAvatarEditor(); };
// ---- presence: am I/are they online? heartbeat keeps my last_seen fresh while the app is visible ----
function isOnline(ts){ try{ return !!(ts && (Date.now()-Date.parse(ts))<2*60*1000); }catch(e){ return false; } }
function statusAvatar(name, opts, online){ return '<span class="av-st">'+avatarHTML(name,opts)+(online?'<span class="pr-dot online"></span>':'')+'</span>'; }
let _presenceTimer=null;
async function touchPresence(){ if(!cloudReady()) return; try{ await sb.from("profiles").update({ last_seen:new Date().toISOString() }).eq("user_id", cloudUser.id); }catch(e){} }
function startPresence(){ if(_presenceTimer) clearInterval(_presenceTimer); if(!cloudReady()) return; touchPresence();
  _presenceTimer=setInterval(()=>{ if(document.visibilityState==="visible") touchPresence(); }, 60000); }
document.addEventListener("visibilitychange",()=>{ if(document.visibilityState==="visible") touchPresence(); });
const RAIL_USERS_SVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c0-3 2.5-4.6 5.5-4.6s5.5 1.6 5.5 4.6"/><path d="M16 5.2a3.2 3.2 0 0 1 0 6"/><path d="M17.5 14.6c2.4.4 4 1.9 4 4.4"/></svg>';

// ---- Overview presence rail: friends as faces, live ones ringed; tap to watch or open a profile ----
async function renderPresenceRail(){
  const rail=$("presenceRail"); if(!rail) return;
  const ovm=$("ovMessages"); if(ovm) ovm.style.display=(cloudReady() && dbHardened)?"":"none";   // chat shortcut visible only when messaging is live
  if(!(cloudReady() && dbHardened)){ rail.style.display="none"; rail.innerHTML=""; return; }
  let following=[], live={}, reqN=0;
  try{ const { data } = await sb.rpc("my_following"); following=(data||[]).filter(u=>u.status==="accepted"); recordAvatars(following); }catch(e){}
  try{ const { data } = await sb.from("live_sessions").select("user_id,updated_at").eq("active",true);
    (data||[]).forEach(r=>{ if(r.user_id!==cloudUser.id && (Date.now()-Date.parse(r.updated_at))<15*60*1000) live[r.user_id]=true; }); }catch(e){}
  try{ const { data } = await sb.rpc("incoming_requests"); reqN=(data||[]).length; }catch(e){}
  rail.style.display="";
  const badge='<span class="pr-badge" id="railBadge"'+(reqN>0?"":" hidden")+'>'+(reqN>0?reqN:"")+'</span>';
  // no friends yet → a single slim entry into the hub
  if(!following.length){
    rail.innerHTML='<div class="railcta" id="railAll">Find your friends <span class="ovchev">›</span>'+badge+'</div>';
    $("railAll").onclick=openFriends; return;
  }
  // presence-first: live, then online, then the rest; surface the around-now count in the header
  const stat=u=> live[u.user_id]?2 : (isOnline(u.last_seen)?1:0);
  following.sort((a,b)=> stat(b)-stat(a) || (a.display_name||"").localeCompare(b.display_name||""));
  const aroundN=following.filter(u=>stat(u)>0).length;
  const faces=following.slice(0,12).map(u=>{ const nm=u.display_name||"Friend", s=stat(u); _nameCache[u.user_id]=nm;
    const sub = s===2 ? '<span class="pr-live">Live</span>' : '<span class="pr-name">'+esc(nm.split(" ")[0])+'</span>';
    const dot = s===1 ? '<span class="pr-dot online"></span>' : '';
    return '<div class="pr-item" data-uid="'+esc(u.user_id)+'" data-nm="'+esc(nm)+'" data-live="'+(s===2?1:0)+'"><span class="pr-av">'
      +avatarHTML(nm,{size:56,live:s===2,uid:u.user_id})+dot+'</span>'+sub+'</div>'; }).join('');
  rail.innerHTML='<div class="railhdr"><span class="ed-label" style="margin:0;">'+(aroundN?"Around now":"Friends")+'</span>'
    +'<span class="railall" id="railAll">All <span class="ovchev">›</span>'+badge+'</span></div>'
    +'<div class="prail">'+faces+'</div>';
  rail.querySelectorAll(".pr-item[data-uid]").forEach(el=>{
    if(el.dataset.live==="1") el.onclick=()=>openLiveView(el.dataset.uid, el.dataset.nm);   // live friend → straight to their session
    else bindFriendTap(el, el.dataset.uid, el.dataset.nm);                                  // else tap → profile, long-press → chat
  });
  const all=$("railAll"); if(all) all.onclick=openFriends;
}

// ---- friend profile: tap an avatar anywhere → their card, follow state, and recent workouts ----
async function openProfile(uid, name){
  if(!uid || (cloudUser && uid===cloudUser.id)) return;
  const body=$("profBody"); if(!body) return;
  name = name || _nameCache[uid] || "Lifter";
  $("profTitle").textContent=name;
  body.innerHTML='<div class="profhdr"><span id="profAv">'+avatarHTML(name,{size:84,uid:uid})+'</span><div class="pname">'+esc(name)+'</div><div class="profmeta" id="profMeta">…</div></div>'
    +'<div id="profAction" style="margin:14px 0 6px;"></div><div id="profActivity"></div>';
  openSheet("Profile");
  // pull their chosen avatar + last_seen (degrades to monogram / no-dot if the columns aren't there yet)
  let online=false;
  try{ const { data, error } = await sb.from("profiles").select("user_id,avatar_color,avatar_emoji,avatar_icon,avatar_style,last_seen").eq("user_id",uid).maybeSingle();
    if(error) throw error;
    if(data){ recordAvatars([data]); online=isOnline(data.last_seen); const pa=$("profAv"); if(pa) pa.innerHTML=statusAvatar(name,{size:84,uid:uid},online); } }
  catch(e){ try{ const { data } = await sb.from("profiles").select("user_id,avatar_color,avatar_emoji").eq("user_id",uid).maybeSingle();
    if(data){ recordAvatars([data]); const pa=$("profAv"); if(pa) pa.innerHTML=avatarHTML(name,{size:84,uid:uid}); } }catch(e2){} }
  let rel=null, live=false;
  try{ const { data } = await sb.rpc("my_following"); rel=(data||[]).find(u=>u.user_id===uid)||null; recordAvatars(data); }catch(e){}
  try{ const { data } = await sb.from("live_sessions").select("active,updated_at").eq("user_id",uid).maybeSingle();
    live = !!(data && data.active!==false && (Date.now()-Date.parse(data.updated_at))<15*60*1000); }catch(e){}
  const relTxt = rel ? (rel.status==="pending"?"Request pending":"You're friends") : "You're not following yet";
  const meta=$("profMeta"); if(meta){ meta.innerHTML = live ? '🔴 Training live' : (online ? '<span style="color:#34c759;">● Online now</span> · '+esc(relTxt) : esc(relTxt)); }
  const act=$("profAction");
  if(act){
    if(live){ act.innerHTML='<button class="btn wide" id="profWatch">🔴 Watch live now</button>';
      $("profWatch").onclick=()=>{ closeSheet("Profile"); openLiveView(uid, name); }; }
    else if(rel && rel.status==="accepted"){ act.innerHTML='<button class="btn wide" id="profMsg">'+ICON.chat+'Message</button>';
      // "Remove friend" intentionally lives in the Friends hub ("Your friends" → Remove), not here — keeps the profile message-first.
      $("profMsg").onclick=()=>{ closeSheet("Profile"); openChat(uid, name); }; }
    else if(rel && rel.status==="pending"){ act.innerHTML='<button class="btn tinted wide" disabled>Request sent</button>'; }
    else { act.innerHTML='<button class="btn wide" id="profFollow">Follow</button>';
      $("profFollow").onclick=async()=>{ await followUser(uid,name); openProfile(uid,name); }; }
  }
  const av=$("profActivity"); if(!av) return;
  let rows=[];
  try{ const { data } = await sb.from("activity").select("id,user_id,created_at,summary").eq("user_id",uid).order("created_at",{ascending:false}).limit(6); rows=data||[]; }catch(e){}
  if(!rows.length){ av.innerHTML='<div class="ed-label">Recent workouts</div><p class="levelcap" style="margin:0;">Nothing shared yet.</p>'; return; }
  av.innerHTML='<div class="ed-label">Recent workouts</div>'+rows.map(r=>{ const s=r.summary||{}, lvl=s.lvl||1, can=(lvl>=2&&s.ex&&s.ex.length);
    if(s.stars!=null) return '<div class="profwo profstar" data-id="'+esc(r.id)+'"><div><div style="font-weight:600;">'+esc(s.name||"")+'</div>'
      +'<div class="levelcap" style="margin-top:3px;">'+esc(agoStr(Date.parse(r.created_at)))+'</div></div>'+feedSkyHTML(s)+'</div>';
    const stats=[ s.exN?s.exN+" ex":null, s.sets!=null?s.sets+" sets":null, s.vol?fmtKg(s.vol):null, s.mins?Math.round(s.mins)+" min":null ].filter(Boolean).join(" · ");
    return '<div class="profwo" data-id="'+esc(r.id)+'" style="padding:10px 4px; border-bottom:.5px solid var(--line); cursor:'+(can?"pointer":"default")+';">'
      +'<div style="font-weight:600;">'+esc(s.name||"Workout")+(can?' <span class="levelcap" style="font-weight:500;">· tap<span class="ovchev lnkchev">›</span></span>':'')+'</div>'
      +'<div class="levelcap" style="margin-top:3px;">'+esc(stats)+' · '+esc(agoStr(Date.parse(r.created_at)))+'</div></div>'; }).join('');
  av.querySelectorAll(".profwo").forEach(el=>{ const r=rows.find(x=>String(x.id)===el.dataset.id); if(!r) return; const s=r.summary||{}, lvl=s.lvl||1;
    if(lvl>=2 && s.ex && s.ex.length) el.onclick=()=>openWorkoutDetail(r, name, lvl); });
}

// ---- Me: your own profile card (avatar + name + follower/following counts) ----
const PENCIL_SVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5l5 5M4 20l1-4L16 5l3 3L8 19z"/></svg>';
let meStatsEl=null;   // the stats strip: a footer inside the profile card, or its own card when there's no profile
async function renderMeProfile(){
  const card=$("meProfile"); if(!card) return;
  const st=meStatsEl=meStatsEl||$("meStats");
  const nm=settings.displayName||settings.name||"";
  if(!cloudConfigured() && !nm){ card.style.display="none"; if(st && st.parentNode===card) card.after(st); return; }
  card.style.display="";
  syncSelfAvatar();
  const av='<span class="avwrap" id="meAvatar">'+avatarHTML(nm||"You",{size:60,uid:(cloudUser&&cloudUser.id),seed:nm||"you"})+'<span class="avedit">'+PENCIL_SVG+'</span></span>';
  if(cloudReady() && dbHardened){
    let fr=0, fo=0;
    try{ const { data } = await sb.rpc("my_following"); fo=(data||[]).filter(u=>u.status==="accepted").length; }catch(e){}
    try{ const { data } = await sb.rpc("my_followers"); fr=(data||[]).length; }catch(e){}
    card.innerHTML=av+'<div class="pctext"><div class="pcname">'+esc(nm||"You")+'</div>'
      +'<div class="pccounts"><span class="pccount"><b>'+fr+'</b><span>followers</span></span>'
      +'<span class="pccount"><b>'+fo+'</b><span>following</span></span></div></div>';
    card.onclick=e=>{ if(!e.target.closest(".stats")) openFriends(); };
  } else {
    card.innerHTML=av+'<div class="pctext"><div class="pcname">'+esc(nm||"You")+'</div>'
      +'<div class="pchint">'+(cloudReady()?"Friends features warming up…":"Sign in to connect with friends<span class=\"ovchev lnkchev\">›</span>")+'</div></div>';
    card.onclick=e=>{ if(!e.target.closest(".stats")) (cloudReady()?openFriends():goAccount()); };
  }
  if(st) card.appendChild(st);
  const avEl=$("meAvatar"); if(avEl) avEl.onclick=(e)=>{ e.stopPropagation(); openAvatarEditor(); };
}

async function renderFriends(){
  renderPresenceRail(); renderMeProfile();
  const on = cloudReady() && dbHardened;
  const box=$("friendsBox"), people=$("friendsPeople"), cta=$("friendsCTA");
  if(box) box.style.display = on ? "" : "none";
  if(people) people.style.display = on ? "" : "none";
  if(cta) cta.style.display = on ? "none" : "";
  if(!on){ setFriendsBadge(0); return; }
  const bsub=$("msgBackupSub"); if(bsub){ e2eBackupExists().then(bk=> bsub.textContent = bk ? "backed up — tap to change passphrase" : "protect your chat history"); }
  // profile visibility + my follow code + my saved avatar (avatar cols degrade if not migrated yet)
  let vis="private";
  try{ const { data, error } = await sb.from("profiles").select("visibility,follow_code,avatar_color,avatar_emoji,avatar_icon,avatar_style").eq("user_id",cloudUser.id).maybeSingle();
    if(error) throw error;
    if(data){ vis=data.visibility||"private"; _myCode=data.follow_code||"";
      if(data.avatar_color!=null) settings.avatarColor=data.avatar_color;
      if(data.avatar_emoji!=null) settings.avatarEmoji=data.avatar_emoji;
      if(data.avatar_icon!=null)  settings.avatarIcon=data.avatar_icon;
      if(data.avatar_style!=null) settings.avatarStyle=data.avatar_style; syncSelfAvatar(); } }
  catch(e){ try{ const { data } = await sb.from("profiles").select("visibility,follow_code").eq("user_id",cloudUser.id).maybeSingle();
    if(data){ vis=data.visibility||"private"; _myCode=data.follow_code||""; } }catch(e2){} }
  document.querySelectorAll("#visSeg .s").forEach(s=> s.classList.toggle("active", s.dataset.vis===vis));
  const vh=$("visHint"); if(vh) vh.textContent=VIS_HINTS[vis]||"";
  const mc=$("myCode"); if(mc) mc.textContent=_myCode||"—";
  // incoming requests + following + suggestions (each carries the person's chosen avatar)
  let reqs=[], following=[], sugg=[];
  try{ const { data } = await sb.rpc("incoming_requests"); reqs=data||[]; recordAvatars(reqs); }catch(e){}
  try{ const { data } = await sb.rpc("my_following"); following=data||[]; recordAvatars(following); }catch(e){}
  try{ const { data } = await sb.rpc("suggested_follows"); sugg=data||[]; recordAvatars(sugg); }catch(e){}
  setFriendsBadge(reqs.length);
  const emptyHint=$("friendsEmpty"); if(emptyHint) emptyHint.style.display=(!reqs.length && !following.length)?"":"none";
  // LIVE NOW — friends training right now, as ringed avatars at the top of the hub
  const liveBox=$("liveNowRow");
  if(liveBox){
    let liveRows=[];
    try{ const { data } = await sb.from("live_sessions").select("user_id,updated_at").eq("active",true);
      liveRows=(data||[]).filter(r=> r.user_id!==cloudUser.id && (Date.now()-Date.parse(r.updated_at))<15*60*1000); }catch(e){}
    const ln={}; following.forEach(u=>{ ln[u.user_id]=u.display_name; });
    liveBox.innerHTML = liveRows.length
      ? '<div class="ed-label">Live now</div><div class="prail" style="padding-bottom:8px;">'
        + liveRows.map(r=>{ const nm=ln[r.user_id]||_nameCache[r.user_id]||"A friend";
            return '<div class="pr-item" data-uid="'+esc(r.user_id)+'" data-nm="'+esc(nm)+'">'+avatarHTML(nm,{size:56,live:true,uid:r.user_id})+'<span class="pr-live">Live</span></div>'; }).join('')
        + '</div>'
      : "";
    liveBox.querySelectorAll(".pr-item[data-uid]").forEach(el=> el.onclick=()=>openLiveView(el.dataset.uid, el.dataset.nm));
  }
  const reqBox=$("reqList");
  if(reqBox){
    reqBox.innerHTML = reqs.length
      ? '<div class="ed-label">Requests</div><div class="flist">'+reqs.map(u=>
          '<div class="fitem" data-uid="'+esc(u.user_id)+'">'+avatarHTML(u.display_name,{size:44,uid:u.user_id})
          +'<div class="fmain"><div class="fnm">'+esc(u.display_name||"A lifter")+'</div><div class="fsub">wants to follow you</div></div>'
          +'<div class="factions"><button class="btn pill reqYes">Accept</button><button class="btn tinted pill reqNo">Decline</button></div></div>').join('')+'</div>'
      : "";
    reqBox.querySelectorAll(".reqYes").forEach(b=> b.onclick=()=>acceptFollow(b.closest("[data-uid]").dataset.uid));
    reqBox.querySelectorAll(".reqNo").forEach(b=> b.onclick=()=>removeFollow(b.closest("[data-uid]").dataset.uid, "follower"));
  }
  const folBox=$("followList");
  if(folBox){
    folBox.innerHTML = following.length
      ? '<div class="ed-label">Your friends</div><div class="flist">'+following.map(u=>{
          const on=isOnline(u.last_seen), sub=u.status==="pending"?'<div class="fsub">pending</div>':(on?'<div class="fsub on">online</div>':'');
          return '<div class="fitem tap folopen" data-uid="'+esc(u.user_id)+'" data-nm="'+esc(u.display_name||"")+'">'+statusAvatar(u.display_name,{size:44,uid:u.user_id},on)
            +'<div class="fmain"><div class="fnm">'+esc(u.display_name||"A lifter")+'</div>'+sub+'</div>'
            +'<div class="factions"><button class="btn tinted pill unfol">Remove</button></div></div>'; }).join('')+'</div>'
      : "";
    folBox.querySelectorAll(".unfol").forEach(b=> b.onclick=(e)=>{ e.stopPropagation(); removeFollow(b.closest("[data-uid]").dataset.uid, "followee"); });
    folBox.querySelectorAll(".folopen").forEach(el=> bindFriendTap(el, el.dataset.uid, el.dataset.nm));   // tap → profile, long-press → chat
  }
  // live-watch grants: which of your accepted followers may watch you train in real time
  const grantBox=$("liveGrantList");
  if(grantBox){
    let followers=[]; try{ const { data } = await sb.rpc("my_followers"); followers=data||[]; recordAvatars(followers); }catch(e){}
    grantBox.innerHTML = followers.length
      ? '<div class="ed-label">Allow to watch me live</div>'
        +'<p class="levelcap" style="margin:0 0 8px; line-height:1.4;">Pick who can watch your workout in real time and cheer you on.</p>'
        +'<div class="flist">'+ followers.map(u=>
          '<label class="fitem" data-uid="'+esc(u.user_id)+'">'+avatarHTML(u.display_name,{size:44,uid:u.user_id})
          +'<div class="fmain"><div class="fnm">'+esc(u.display_name||"A lifter")+'</div></div>'
          +'<input type="checkbox" class="livegrant" style="flex:0 0 auto; width:22px; height:22px; accent-color:var(--red);"'+(u.live?" checked":"")+'></label>').join('')+'</div>'
      : "";
    grantBox.querySelectorAll(".livegrant").forEach(cb=> cb.onchange=()=>{ const row=cb.closest("[data-uid]"); grantLive(row.dataset.uid, cb.checked, cb); });
  }
  const sugBox=$("suggList");
  if(sugBox){
    sugBox.innerHTML = sugg.length
      ? '<div class="ed-label">Suggested</div><div class="flist">'+sugg.map(u=>{
          const label = u.mutuals>0 ? ("followed by "+u.mutuals+" "+(u.mutuals>1?"friends":"friend"))
                       : u.follows_you ? "follows you"
                       : (u.visibility==="public" ? "public profile" : "");
          return '<div class="fitem tap" data-uid="'+esc(u.user_id)+'" data-nm="'+esc(u.display_name||"")+'">'+avatarHTML(u.display_name,{size:44,uid:u.user_id})
            +'<div class="fmain"><div class="fnm">'+esc(u.display_name||"A lifter")+'</div>'+(label?'<div class="fsub">'+esc(label)+'</div>':'')+'</div>'
            +'<div class="factions"><button class="btn pill sugFollow">Follow</button></div></div>';
        }).join('')+'</div>'
      : "";
    sugBox.querySelectorAll(".sugFollow").forEach(b=> b.onclick=(e)=>{ e.stopPropagation(); const row=b.closest("[data-uid]"); followUser(row.dataset.uid, row.dataset.nm); });
    sugBox.querySelectorAll(".fitem.tap").forEach(el=> el.onclick=()=>openProfile(el.dataset.uid, el.dataset.nm));
  }
}
// follow a suggested person directly by id (the insert RLS allows follower = me; the
// trigger auto-accepts if they're public, otherwise it's a pending request)
async function followUser(uid, name){
  if(!cloudReady() || !uid) return;
  try{ await sb.from("follows").insert({ follower:cloudUser.id, followee:uid }); }catch(e){}
  notifyFollow(uid, "follow");
  toast("Added "+(name||"friend")+" — instant if public, otherwise once they accept.");
  renderFriends(); renderFeed();
}
async function acceptFollow(uid){
  if(!cloudReady()) return;
  try{ await sb.from("follows").update({status:"accepted"}).eq("follower",uid).eq("followee",cloudUser.id); }catch(e){}
  notifyFollow(uid, "follow_accept");   // tell them you accepted
  toast("Friend accepted."); renderFriends(); renderFeed();
}
// fire a follow / accept push to the other person (best-effort; no-op if the function isn't deployed)
async function notifyFollow(target, kind){ try{ if(sb && sb.functions && target) await sb.functions.invoke("social-notify",{ body:{ target, kind } }); }catch(e){} }
// dir 'follower' = decline/remove an incoming follower; 'followee' = unfollow someone you follow
async function removeFollow(uid, dir){
  if(!cloudReady()) return;
  try{ const q=sb.from("follows").delete();
    if(dir==="follower"){ await q.eq("follower",uid).eq("followee",cloudUser.id); }
    else { await q.eq("follower",cloudUser.id).eq("followee",uid); }
  }catch(e){}
  renderFriends(); renderFeed();
}
document.querySelectorAll("#visSeg .s").forEach(s=>{
  s.onclick=async()=>{ if(!cloudReady()) return; const vis=s.dataset.vis;
    document.querySelectorAll("#visSeg .s").forEach(x=> x.classList.toggle("active", x===s));
    const vh=$("visHint"); if(vh) vh.textContent=VIS_HINTS[vis]||"";
    try{ await sb.from("profiles").upsert({ user_id:cloudUser.id, visibility:vis }); }catch(e){}
    toast(vis==="public"?"Profile public — anyone can follow you.":"Profile private — you approve followers."); };
});
if($("copyCode")) $("copyCode").onclick=async()=>{ if(!_myCode) return;
  try{ await navigator.clipboard.writeText(_myCode); toast("Friend code copied."); }catch(e){ toast("Your code: "+_myCode); } };
if($("addFriendBtn")) $("addFriendBtn").onclick=async()=>{
  const inp=$("addCode"); const code=((inp&&inp.value)||"").trim(); if(!code) return;
  if(inp) inp.value="";
  await followByCode(code);
};
// shared follow path — used by the manual code box and by tap-to-follow invite links
async function followByCode(code){
  if(!cloudReady()){ pendingAddCode=(code||"").trim().toUpperCase(); toast("Sign in to follow your friend."); goAccount&&goAccount(); return; }
  let res={}; try{ const { data } = await sb.rpc("request_follow",{ code }); res=data||{}; }catch(e){ toast("Couldn't add — try again."); return; }
  if(res.status==="not_found") toast("That code didn't match anyone.");
  else if(res.status==="self") toast("That's your own code 🙂");
  else { notifyFollow(res.id, "follow");
    toast(res.status==="following" ? "Now following "+res.name+" 🎉" : "Request sent to "+res.name+" — they'll get a heads-up to accept.");
    renderFriends(); renderFeed(); }
}
// a tap-to-follow link: friend opens it, signs in if needed, and follows you in one tap
function inviteLink(){ return location.origin + location.pathname + "?add=" + encodeURIComponent(_myCode||""); }
if($("inviteBtn")) $("inviteBtn").onclick=async()=>{
  if(!_myCode){ toast("Your code isn't ready yet — reopen this screen."); return; }
  const url=inviteLink(), who=(settings.displayName||settings.name||"A friend");
  // Include the follow code in the message body: tapping the link opens the browser (iOS
  // can't deep-link an installed PWA), but anyone with the app can just enter the code.
  const text=who+" invited you to follow them on Yalla 💪 Open the app and enter code "+(_myCode||"")+" — or tap the link.";
  try{ if(navigator.share){ await navigator.share({ title:"Yalla", text, url }); return; } }catch(e){ if(e&&e.name==="AbortError") return; }
  try{ await navigator.clipboard.writeText(text+"\n"+url); toast("Invite copied — paste it to a friend."); }catch(e){ toast(text+"\n"+url); }
};
// Me-tab share buttons — same mechanics as inviteBtn but surfaced where new users see them first
if($("meInviteBtn")) $("meInviteBtn").onclick=async()=>{
  if(!_myCode){ toast("Your code isn't ready yet — reopen this screen."); return; }
  const url=inviteLink(), who=(settings.displayName||settings.name||"A friend");
  const text=who+" invited you to follow them on Yalla 💪 Open the app and enter code "+(_myCode||"")+" — or tap the link.";
  try{ if(navigator.share){ await navigator.share({ title:"Yalla", text, url }); return; } }catch(e){ if(e&&e.name==="AbortError") return; }
  try{ await navigator.clipboard.writeText(text+"\n"+url); toast("Invite link copied — paste it to a friend."); }catch(e){ toast(url); }
};
if($("meShareAppBtn")) $("meShareAppBtn").onclick=async()=>{
  const url=location.href.split("?")[0], text="I've been logging my workouts on Yalla — it's free and private. Try it:";
  try{ if(navigator.share){ await navigator.share({ title:"Yalla", text, url }); return; } }catch(e){ if(e&&e.name==="AbortError") return; }
  try{ await navigator.clipboard.writeText(url); toast("App link copied — share it with anyone."); }catch(e){ toast(url); }
};
// process an ?add=CODE invite once we're signed in and the friends schema is live
async function processPendingAdd(){
  if(!pendingAddCode || !cloudReady() || !dbHardened) return;
  const code=pendingAddCode; pendingAddCode=null;
  // A confirmation (not a silent auto-follow) so the invite flow feels intentional —
  // especially when the link opened in the browser rather than the installed app.
  confirmAsk("A friend invited you to follow them on Yalla 💪 Follow them now?",
             "Follow", ()=>followByCode(code), "go");
}
if($("remindToggle")) $("remindToggle").onchange=async(e)=>{
  if(e.target.checked){ const ok=await pushSubscribe(); e.target.checked=ok; settings.remindersOn=ok; if(ok) toast("Reminders on — we’ll nudge you after 2 quiet days."); }
  else { await pushDisable(); settings.remindersOn=false; toast("Reminders off."); }
  await sset("settings",settings);
};
renderAccount();
$("importFile").onchange=(e)=>{ const f=e.target.files&&e.target.files[0]; if(!f) return;
  const r=new FileReader(); r.onload=()=>{ let obj; try{ obj=JSON.parse(r.result); }catch(_){ toast("Couldn't read that file."); return; } applyRestore(obj); e.target.value=""; };
  r.onerror=()=>toast("Couldn't read that file."); r.readAsText(f); };

// ===== per-workout share tile =====
function fmtKgShort(v){ v=Math.round(v); return v>=1000 ? (v/1000).toFixed(v>=10000?0:1).replace(/\.0$/,"")+"k kg" : v+" kg"; }
function rrect(x,X,Y,w,h,r){ x.beginPath(); x.moveTo(X+r,Y); x.arcTo(X+w,Y,X+w,Y+h,r); x.arcTo(X+w,Y+h,X,Y+h,r); x.arcTo(X,Y+h,X,Y,r); x.arcTo(X,Y,X+w,Y,r); x.closePath(); }
function tileRadar(x,cx,cy,R,tot){
  // rose: each wedge's area = that muscle's share of the session (see drawRose) — constant total area.
  // Wedges are colour-coded per muscle (same palette as the in-app radar) with a white rim so the split
  // reads at a glance on the gradient; only trained muscles get a shadowed white label, keeping the ring clean.
  drawRose(x, cx, cy, R, roseGroups(), roseTotals(tot), {
    color:g=>MCOLOR[g]||"#f08020", alpha:.92, stroke:"rgba(255,255,255,.85)", strokeW:2,
    gap:0.08, rings:[0.5,1], grid:"rgba(255,255,255,.30)", gridW:2,
    labels:true, labelColor:"rgba(255,255,255,.96)", labelFont:"700 22px -apple-system,system-ui,sans-serif", labelGap:34, labelShadow:true
  });
}
// app URL shown on the share tile — derived from the live location so it stays right under any
// host (GitHub Pages subpath or a custom domain), minus protocol, trailing file, and trailing slash.
const SHARE_URL=(()=>{ try{ const p=location.pathname.replace(/\/[^/]*\.[^/]*$/,"/").replace(/\/$/,""); return (location.host+p)||"o-frings.github.io/yalla"; }catch(_){ return "o-frings.github.io/yalla"; } })();
function renderShareTile(s){
  const W=1080,H=1350,c=document.createElement("canvas"); c.width=W; c.height=H; const x=c.getContext("2d");
  // the accent's tile fade (ACCENTS tile; Orange: #ee6010 → #ff2f3d), diagonal top-left → bottom-right; canvas has no
  // colour hint, so the 50/50 blend is a stop at the hint
  const ts=ACCENTS[accentId()].tile, g=x.createLinearGradient(0,0,W,H); g.addColorStop(0,ts[0]); g.addColorStop(ts[2],ts[0]);
  g.addColorStop(ts[3],mixHex(ts[0],ts[1],.5)); g.addColorStop(1,ts[1]); x.fillStyle=g; x.fillRect(0,0,W,H);
  x.fillStyle="#fff"; x.font="800 50px -apple-system,system-ui,sans-serif"; x.textAlign="left"; x.textBaseline="alphabetic";
  x.fillText("yalla", 70, 122); const ww=x.measureText("yalla").width; x.fillStyle="rgba(255,255,255,.7)"; x.fillText(".", 72+ww, 122);
  x.font="600 32px -apple-system,system-ui,sans-serif"; x.textAlign="right"; x.fillStyle="rgba(255,255,255,.82)";
  x.fillText(new Date(s.date||Date.now()).toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"}), W-70, 122);
  x.textAlign="left"; x.fillStyle="#fff"; x.font="800 76px -apple-system,system-ui,sans-serif"; x.fillText(s.name, 70, 236);
  x.font="600 36px -apple-system,system-ui,sans-serif"; x.fillStyle="rgba(255,255,255,.9)"; x.fillText(s.sub, 70, 292);
  tileRadar(x, W/2, 600, 250, s.mtot||{});
  const stats=[["VOLUME", fmtKgShort(s.totalVol)],["SETS", ""+s.sets],["TIME", (s.mins||0)+" min"],["PRS", ""+(s.beaten||0)]];
  const n=stats.length, pad=70, gap=20, bw=(W-2*pad-(n-1)*gap)/n, by=968, bh=150;
  stats.forEach((st,i)=>{ const bx=pad+i*(bw+gap); rrect(x,bx,by,bw,bh,22); x.fillStyle="rgba(255,255,255,.16)"; x.fill();
    x.textAlign="center"; x.fillStyle="#fff"; x.font="800 46px -apple-system,system-ui,sans-serif"; x.fillText(st[1], bx+bw/2, by+74);
    x.font="700 23px -apple-system,system-ui,sans-serif"; x.fillStyle="rgba(255,255,255,.95)"; x.fillText(st[0], bx+bw/2, by+118); });
  if(s.top && s.top.w>0){ x.textAlign="center"; x.fillStyle="rgba(255,255,255,.96)"; x.font="700 33px -apple-system,system-ui,sans-serif";
    let t="Top set · "+s.top.name+" · "+s.top.w+"kg × "+s.top.r; if(t.length>46) t="Top · "+s.top.name; x.fillText(t, W/2, 1205); }
  tileFooter(x, W);
  return c;
}
// footer: a join call-to-action + the app URL drawn as a pill, so anyone who sees the shared image can grab the app
function tileFooter(x, W){
  x.textAlign="center"; x.fillStyle="rgba(255,255,255,.82)"; x.font="600 26px -apple-system,system-ui,sans-serif"; x.fillText("Tracked with yalla — join me 💪", W/2, 1262);
  const url=SHARE_URL; x.font="700 28px -apple-system,system-ui,sans-serif"; const uw=x.measureText(url).width, pw=uw+56, ph=56, px=(W-pw)/2, py=1284;
  rrect(x,px,py,pw,ph,28); x.fillStyle="rgba(255,255,255,.18)"; x.fill();
  x.fillStyle="#fff"; x.textBaseline="middle"; x.fillText(url, W/2, py+ph/2+1); x.textBaseline="alphabetic";
}
// ===== star share cards (stars spec §6.3–6.4), 1080×1350 like the workout tile. Counts, figure names, weeks/months and
// "since" dates only: never weights, volume, body data, exercise names, gym, time of day, target, a light week's reason
// or your name. kind: "week" (this week's star on the figure in progress), "const" (o.fig, a completed figure) or "sky"
// (the collection). o.week: the star's week id; o.sessions: the week card's session count (the sheet's switch). The
// accent comes from --accent-hi (the accent tuned for dark surfaces); a PRNG seeded by the week or figure id keeps a
// re-render identical. =====
function canvasSpark(x, X, Y, r){ const k=r*.2; x.beginPath(); x.moveTo(X,Y-r); x.quadraticCurveTo(X+k,Y-k,X+r,Y); x.quadraticCurveTo(X+k,Y+k,X,Y+r);
  x.quadraticCurveTo(X-k,Y+k,X-r,Y); x.quadraticCurveTo(X-k,Y-k,X,Y-r); x.closePath(); }
// one figure fitted into box [x,y,w,h] (aspect kept): lines join lit stars, the rest are faint dots when o.dots
function canvasFigure(x, fig, lit, box, o){
  const xs=fig.pts.map(p=>p[0]), ys=fig.pts.map(p=>p[1]), x0=Math.min(...xs), y0=Math.min(...ys);
  const bw=Math.max(.05,Math.max(...xs)-x0), bh=Math.max(.05,Math.max(...ys)-y0), k=Math.min(box[2]/bw, box[3]/bh);
  const ox=box[0]+(box[2]-bw*k)/2, oy=box[1]+(box[3]-bh*k)/2, P=fig.pts.map(p=>[ox+(p[0]-x0)*k, oy+(p[1]-y0)*k]);
  x.strokeStyle="rgba(255,255,255,.35)"; x.lineWidth=o.lw; x.lineCap="round";
  fig.edges.forEach(([a,b])=>{ if(a<lit && b<lit){ x.beginPath(); x.moveTo(P[a][0],P[a][1]); x.lineTo(P[b][0],P[b][1]); x.stroke(); } });
  P.forEach((p,i)=>{
    if(i>=lit){ if(o.dots){ x.fillStyle="rgba(255,255,255,.2)"; x.beginPath(); x.arc(p[0],p[1],4,0,Math.PI*2); x.fill(); } return; }
    const nw = o.newest && i===lit-1, R = nw ? o.r*1.7 : o.r*(.88+(i%3)*.12);
    if(nw){ const g=x.createRadialGradient(p[0],p[1],0,p[0],p[1],R*3.4); g.addColorStop(0,hexAlpha(o.acc,.55)); g.addColorStop(.45,hexAlpha(mixHex(o.acc,o.acc2||o.acc,.45),.26)); g.addColorStop(1,hexAlpha(o.acc,0));
      x.fillStyle=g; x.beginPath(); x.arc(p[0],p[1],R*3.4,0,Math.PI*2); x.fill(); }
    x.save(); x.shadowColor=o.acc; x.shadowBlur=o.blur; x.fillStyle="#fff"; canvasSpark(x,p[0],p[1],R); x.fill(); x.restore();
  });
}
function renderStarTile(kind, o){
  o=o||{};
  const W=1080, H=1350, c=document.createElement("canvas"); c.width=W; c.height=H; const x=c.getContext("2d");
  const cs=getComputedStyle(document.documentElement), hi=cs.getPropertyValue("--accent-hi").trim(), hib=cs.getPropertyValue("--accent-hi-b").trim();
  const acc=/^#[0-9a-f]{6}$/i.test(hi) ? hi : accentHex(), acc2=/^#[0-9a-f]{6}$/i.test(hib) ? hib : acc;
  const ks=starKeys(), n=ks.length, pg=skyProgress(n), ends={}; let at=0; SKY.forEach(f=>{ at+=f.pts.length; ends[f.id]=at; });
  const week=o.week||starWeekId(), F="-apple-system,system-ui,sans-serif";
  let fig=null, lit=0, dots=false, newest=false, title, sub, seed;
  if(kind==="const" && o.fig){ fig=o.fig; lit=fig.pts.length; seed="c:"+fig.id;
    const first=ks[ends[fig.id]-fig.pts.length];
    title=starCopy("tileConstT",{name:fig.name}); sub=starCopy("tileConst",{n:fig.pts.length, date:first ? fmtStarDate(starWeekRange(first)[0]) : ""}); }
  else if(kind==="week"){ seed=week; newest=true; title=STAR_COPY.tileWeekT;
    if(pg.fig && pg.lit){ fig=pg.fig; lit=pg.lit; dots=true; } else if(pg.done.length && !pg.field){ fig=pg.done[pg.done.length-1]; lit=fig.pts.length; }   // this star finished a figure
    sub=starCopy("tileWeek",{n, month:ks.length ? starMonth(ks[0], true) : ""}); }
  else { seed="sky"; title=STAR_COPY.tileSkyT; sub=starCopy("tileSky",{stars:starsN(n), c:pg.done.length+" constellation"+(pg.done.length===1?"":"s")});
    // the newest completed figure, large (a partial one reads as loose stars without its dots); none yet: the one being filled
    if(pg.done.length && !pg.field){ fig=pg.done[pg.done.length-1]; lit=fig.pts.length; } else if(pg.fig && pg.lit){ fig=pg.fig; lit=pg.lit; } }
  const sky2=fig && fig.sky===2, rnd=starRng(seed), glow = sky2 ? mixHex(acc,"#8ab4ff",.55) : acc, glow2 = sky2 ? mixHex(acc2,"#8ab4ff",.55) : acc2;   // the second sky: cooler, as in the app
  // night sky: accent-tinted ink fading to near-black, an accent glow behind the figure and a fainter one in the second hue, seeded background dots
  const g=x.createLinearGradient(0,0,0,H); g.addColorStop(0,mixHex(acc,"#0a0a12",.78)); g.addColorStop(1,"#07070c"); x.fillStyle=g; x.fillRect(0,0,W,H);
  const gl=x.createRadialGradient(540,560,0,540,560,520); gl.addColorStop(0,hexAlpha(glow,.22)); gl.addColorStop(1,hexAlpha(glow,0)); x.fillStyle=gl; x.fillRect(0,0,W,H);
  const gl2=x.createRadialGradient(230,330,0,230,330,460); gl2.addColorStop(0,hexAlpha(glow2,.2)); gl2.addColorStop(1,hexAlpha(glow2,0)); x.fillStyle=gl2; x.fillRect(0,0,W,H);
  for(let i=0;i<120;i++){ x.fillStyle="rgba(255,255,255,"+(.15+rnd()*.3).toFixed(2)+")"; x.beginPath(); x.arc(rnd()*W, rnd()*H, .5+rnd()*.75, 0, Math.PI*2); x.fill(); }
  // Pink: static glitter flecks (seeded hexagons in --glit-*) in the lower third
  if(accentId()==="pink"){ const gc=[1,2,3,4,5,6].map(i=>cs.getPropertyValue("--glit-"+i).trim()).filter(v=>/^#[0-9a-f]{6}$/i.test(v)).concat(/^#[0-9a-f]{6}$/i.test(acc)?[acc]:[]);
    const gb = kind==="sky" ? 1048+Math.ceil(pg.done.length/6)*90 : 0;   // the sky card's row(s) of figures
    const clear=(X,Y)=>(X>190 && X<890 && Y<1100) || (X>310 && X<770 && Y>1222) || (X>90 && X<990 && Y<gb);   // keep text, figures and the footer readable
    for(let i=0, k=0;i<40 && gc.length && k<400;k++){ const X=rnd()*W, Y=900+rnd()*(H-900), r=3+rnd()*3, rot=rnd()*Math.PI; if(clear(X,Y)) continue; i++;
      x.fillStyle=hexAlpha(gc[Math.floor(rnd()*gc.length)], (.5+rnd()*.4).toFixed(2)); x.beginPath();
      for(let j=0;j<6;j++){ const a=rot+j*Math.PI/3; j ? x.lineTo(X+Math.cos(a)*r, Y+Math.sin(a)*r) : x.moveTo(X+Math.cos(a)*r, Y+Math.sin(a)*r); }
      x.closePath(); x.fill(); } }
  // top row: the wordmark (as on the workout tile) and the date
  x.fillStyle="#fff"; x.font="800 50px "+F; x.textAlign="left"; x.textBaseline="alphabetic";
  x.fillText("yalla", 70, 122); const ww=x.measureText("yalla").width; x.fillStyle="rgba(255,255,255,.7)"; x.fillText(".", 72+ww, 122);
  x.font="600 34px "+F; x.textAlign="right"; x.fillStyle="rgba(255,255,255,.8)"; x.fillText(fmtStarDate(Date.now(), true), W-70, 122);
  // the figure (y 260–860, 760 wide); past 104 stars, the all-time field
  if(fig) canvasFigure(x, fig, lit, [160,260,760,600], { r:16, lw:3, blur:24, acc:glow, acc2:glow2, dots, newest });
  else { const fr=starRng("field"); for(let i=0;i<Math.min(n-ends[SKY[SKY.length-1].id],160);i++){ const X=160+fr()*760, Y=260+fr()*600;
    x.save(); x.globalAlpha=.45+fr()*.55; x.shadowColor=acc; x.shadowBlur=12; x.fillStyle="#fff"; canvasSpark(x,X,Y,4+fr()*6); x.fill(); x.restore(); } }
  x.textAlign="center"; x.fillStyle="#fff"; x.font="800 72px "+F; x.fillText(title, W/2, 950);
  x.font="500 40px "+F; x.fillStyle="rgba(255,255,255,.75)"; x.fillText(sub, W/2, 1012);
  if(kind==="week" && o.sessions){ const r=starWeekRange(week), d=weekStarCredit(week, starDayMap(r[0],r[1])).days;
    const s=d+" session"+(d===1?"":"s"), now=week===starWeekId();   // last week's star, earned late: name its week
    if(d){ x.font="600 32px "+F; x.fillStyle="rgba(255,255,255,.6)"; x.fillText(now ? starCopy("tileSess",{s}) : starCopy("tileSessPast",{s, date:fmtStarDate(r[0])}), W/2, 1066); } }
  // the sky card: a row of the completed figures (two rows past six)
  if(kind==="sky" && pg.done.length){ const D=pg.done, per=6, gw=128, gh=78, gap=16;
    D.forEach((f,i)=>{ const row=Math.floor(i/per), cnt=Math.min(per, D.length-row*per), col=i%per, x0=(W-(cnt*gw+(cnt-1)*gap))/2;
      canvasFigure(x, f, f.pts.length, [x0+col*(gw+gap)+10, 1048+row*(gh+12)+8, gw-20, gh-16], { r:5, lw:1.5, blur:8, acc: f.sky===2 ? mixHex(acc,"#8ab4ff",.55) : acc }); }); }
  tileFooter(x, W);
  return c;
}
// The share sheet holds one card at a time. A finish that also earned the week's star gets a Workout | Star segment
// (Star leads when a figure or milestone landed); a star card on its own hides it. Each card renders when first shown.
let _shareCanvas=null, _shareName="", _shareSt=null;
function openShareTile(session, star){
  try{ _shareSt={ session, star:star||null, k: star && star.lead ? "star" : "workout", sess:true, tiles:{} }; showShareCard(); openSheet("Share"); }
  catch(e){ /* never block the save flow on a render hiccup */ }
}
// star: {kind:"week"|"const"|"sky", fig, week}
function openStarShare(star){
  try{ _shareSt={ session:null, star, k:"star", sess:true, tiles:{} }; showShareCard(); openSheet("Share"); }catch(e){}
}
function shareStarCard(kind, fig){ if(!starCount()) return; openStarShare(kind==="const" ? {kind, fig} : kind==="week" ? {kind, week:starWeekId()} : {kind:"sky"}); }
// a cardio or other log that completed a figure opens its card; a plain week star from a log opens nothing
function logStarShare(sr){ const sk=starShareOf(sr); if(sk && sk.kind==="const") setTimeout(()=>openStarShare(sk), 400); }
function showShareCard(){
  const S=_shareSt; if(!S) return; const star=S.k==="star" && S.star, key=star ? "s"+(S.star.kind==="week" && S.sess ? "+" : "") : "w";
  const c=S.tiles[key]||(S.tiles[key] = star ? renderStarTile(S.star.kind, {fig:S.star.fig, week:S.star.week, sessions:S.sess}) : renderShareTile(S.session));
  _shareCanvas=c; _shareName=(star ? (S.star.kind==="sky" ? "yalla-sky-" : "yalla-star-") : "yalla-")+starDayKey(Date.now())+".png";
  const box=$("sharePreview"); box.innerHTML=""; box.appendChild(c);
  const seg=$("shareKind"), sr=$("shareSessRow"), t=$("shareT"); if(!seg || !sr || !t) return;   // a stale cached index.html
  seg.hidden=!(S.session && S.star);
  seg.querySelectorAll(".s").forEach(el=>{ const on=el.dataset.k===S.k; el.classList.toggle("active",on); el.setAttribute("aria-checked",String(on)); el.tabIndex=on?0:-1; });
  sr.hidden=!(star && S.star.kind==="week"); $("shareSess").checked=S.sess;
  t.textContent = star ? (S.star.kind==="sky" ? STAR_COPY.tileSkyT : S.star.kind==="const" ? starCopy("tileConstT",{name:S.star.fig.name}) : STAR_COPY.tileWeekT)
    : S.session ? "Workout complete" : "";   // the title names the card being shown
}
if($("shareKind")) $("shareKind").querySelectorAll(".s").forEach(el=>{ const go=()=>{ if(!_shareSt || _shareSt.k===el.dataset.k) return; _shareSt.k=el.dataset.k; haptic(8); showShareCard(); };
  el.onclick=go; });   // Space / Enter / arrows: the shared picker helper (segSync)
if($("shareSess")) $("shareSess").onchange=e=>{ if(_shareSt){ _shareSt.sess=e.target.checked; showShareCard(); } };
function shareImage(save){
  if(!_shareCanvas) return;
  _shareCanvas.toBlob(async(blob)=>{ if(!blob){ toast("Couldn't render the image."); return; }
    const fname=_shareName||"yalla-"+starDayKey(Date.now())+".png";
    if(save){ const url=URL.createObjectURL(blob),a=document.createElement("a"); a.href=url; a.download=fname; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),1500); toast("Image saved."); }
    else await shareOrDownload(blob,fname);
  }, "image/png");
}
$("shareImgBtn").onclick=()=>shareImage(false);
$("saveImgBtn").onclick=()=>shareImage(true);
$("shareClose").onclick=()=>closeSheet("Share");
$("scrimShare").onclick=()=>closeSheet("Share");

// cel = a celebration toast (gets the static ✦ under reduced motion). Re-adding .big restarts its pop (and Pink's sheen).
// top: show it at the top of the screen (a sheet is opening over its usual spot)
let tT; function toast(m,big,cel,top){ const t=$("toast");
  if(cel && /^★ /.test(m) && window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) m=m.slice(2);   // the static ✦ prefix stands in for it
  t.textContent=m;
  t.classList.remove("big"); if(big){ void t.offsetWidth; t.classList.add("big"); }
  t.classList.toggle("cel",!!cel); t.classList.toggle("top",!!top); t.classList.add("show"); clearTimeout(tT); tT=setTimeout(()=>t.classList.remove("show"), big?2800:2300); }
// first-open coachmark: show a hint once per id (spreads the "how to use" across the app over time)
function coach(id, msg){
  if(!settings.seenTips) settings.seenTips={};
  if(settings.seenTips[id] || $("coach").classList.contains("show")) return;   // once per id; one at a time
  settings.seenTips[id]=1; sset("settings",settings);
  $("coachTxt").textContent=msg; $("coach").classList.add("show");
}
$("coachX").onclick=()=>$("coach").classList.remove("show");

// keep the app portrait. The manifest already declares orientation:portrait (honored by installed
// PWAs / Android); this is a best-effort runtime lock where the API exists. iOS Safari ignores it.
try{ if(screen.orientation && screen.orientation.lock) screen.orientation.lock("portrait").catch(()=>{}); }catch(e){}

// iOS Safari can't be locked, so show the rotate guard only when actually landscape on a phone-sized
// screen. JS-driven (sets inline display) so it's robust against a stale stylesheet and never lingers.
function updateRotateGuard(){ const g=$("rotateGuard"); if(!g) return;
  const land = !!(window.matchMedia && matchMedia("(orientation:landscape)").matches) && window.innerHeight<=540 && window.innerWidth<=900;
  g.style.display = land ? "flex" : "none"; }
window.addEventListener("resize", updateRotateGuard);
window.addEventListener("orientationchange", updateRotateGuard);
updateRotateGuard();

// Fade out the launch splash. Called when init() finishes; the timeout is a backstop so a thrown
// init() (or an unexpectedly slow load) can never leave the splash stuck over the app.
let splashHidden=false;
function hideSplash(){
  if(splashHidden) return; splashHidden=true;
  const el=document.getElementById("splash"); if(!el) return;
  el.classList.add("gone");
  setTimeout(()=>{ el.remove(); }, 480);   // remove after the fade transition completes
}
setTimeout(hideSplash, 4000);

init();

// Kick off cloud sync if the SDK is already present (it may also self-trigger via its onload).
if(window.supabase && window.__cloudInit) window.__cloudInit();

// iOS standalone PWA cold-launch "blank strip" — fixed in CSS by using 100vh for #shell (see its rule).
// No JS height management: the old --appH override drove the shell from window.innerHeight, which is the
// DYNAMIC viewport and reports ~62px short on a cold launch (not initialized until a geometry change), so it
// REINTRODUCED the very bug it tried to fix. 100vh is the static large viewport and is correct from cold
// start in standalone mode. Removing the JS lets 100vh actually apply.

// ---- segmented pickers: one radiogroup for every .seg / .sexseg row ----
// role=radiogroup on the row, role=radio and a roving tabindex on each option, aria-checked mirrored from .active.
// A MutationObserver keeps that in step, so every existing classList.toggle("active") and every generated row
// (injury severity, the star target, the Learn filter) is covered. Arrows / Home / End move AND select by clicking
// the option, and Space / Enter click it, so each row's own onclick stays its one handler.
const SEG_ROW=".seg, .sexseg";
let _segLbl=0;
function segSync(row){
  if(!row.hasAttribute("role")) row.setAttribute("role","radiogroup");
  if(!row.hasAttribute("aria-label") && !row.hasAttribute("aria-labelledby")){   // no name of its own: the label just above it
    let l=null;
    if(row.parentElement && row.parentElement.classList.contains("merow")) l=row.parentElement.querySelector(":scope > label");
    for(let p=row.previousElementSibling; !l && p; p=p.previousElementSibling){
      if(p.matches(".ed-label, label")) l=p; else if(!p.matches("p")) break; }   // past an intro line, never past another control
    if(l){ if(!l.id) l.id="seglbl"+(++_segLbl); row.setAttribute("aria-labelledby", l.id); } }
  const opts=[...row.children].filter(o=>o.classList.contains("s")), act=opts.find(o=>o.classList.contains("active"));
  opts.forEach(o=>{ const on=o===act, ti=(on || (!act && o===opts[0])) ? 0 : -1;
    if(o.getAttribute("role")!=="radio") o.setAttribute("role","radio");
    if(o.getAttribute("aria-checked")!==String(on)) o.setAttribute("aria-checked", String(on));
    if(o.getAttribute("tabindex")!==String(ti)) o.setAttribute("tabindex", String(ti)); });   // the attribute: a bare <div> already reports tabIndex -1
}
document.querySelectorAll(SEG_ROW).forEach(segSync);
new MutationObserver(recs=>{ const rows=new Set();
  for(const r of recs){
    if(r.type==="attributes"){ const t=r.target; if(t.classList.contains("s") && t.parentElement && t.parentElement.matches(SEG_ROW)) rows.add(t.parentElement); continue; }
    if(r.target.matches && r.target.matches(SEG_ROW)) rows.add(r.target);
    r.addedNodes.forEach(n=>{ if(n.nodeType!==1) return; if(n.matches(SEG_ROW)) rows.add(n);
      if(n.firstElementChild) n.querySelectorAll(SEG_ROW).forEach(x=>rows.add(x)); });
  }
  rows.forEach(segSync);
}).observe(document.body, { subtree:true, childList:true, attributes:true, attributeFilter:["class"] });
// click an option and keep focus on it. A row may be re-rendered by its own click (the Learn filter refills it; injury
// severity and the star target are rebuilt with their sheet), so remember where it was: its id, its injury key, or its
// place on the page
function segPick(row, tgt){
  const k=[...row.children].indexOf(tgt), at=[...document.querySelectorAll(SEG_ROW)].indexOf(row), id=row.id, inj=row.dataset.inj;
  tgt.click();
  const r2 = row.isConnected ? row : (id && document.getElementById(id)) || (inj && document.querySelector('.injsev[data-inj="'+inj+'"]'))
    || document.querySelectorAll(SEG_ROW)[at] || null;
  if(!r2) return;
  segSync(r2);   // now, not on the observer's next tick, so the option is focusable before it is focused
  if($("confirmWrap").classList.contains("show")){ $("cYes").focus(); return; }   // the pick asked first (#wkMode mid-session): the question has focus
  const now = tgt.isConnected ? tgt : r2.children[k]; if(now) now.focus();
}
document.addEventListener("keydown", e=>{
  const o=e.target; if(!o.classList || !o.classList.contains("s")) return;
  const row=o.parentElement; if(!row || !row.matches(SEG_ROW)) return;
  if(e.key===" " || e.key==="Enter"){ e.preventDefault(); segPick(row, o); return; }
  const opts=[...row.children].filter(x=>x.classList.contains("s") && !x.hidden), i=opts.indexOf(o), n=opts.length;
  const j = e.key==="ArrowRight"||e.key==="ArrowDown" ? (i+1)%n : e.key==="ArrowLeft"||e.key==="ArrowUp" ? (i-1+n)%n
    : e.key==="Home" ? 0 : e.key==="End" ? n-1 : -1;
  if(j<0 || j===i) return;
  e.preventDefault(); const tgt=opts[j];
  if(tgt.classList.contains("active")){ segSync(row); tgt.focus(); return; }   // never re-click a picked option (#wkMode's Surprise reshuffles)
  segPick(row, tgt);
});

// Offline support: register the service worker when served over HTTPS (e.g. GitHub Pages).
// Skipped silently on file:// so opening the raw file still works.
// Footer build label = the version of the CODE THAT IS RUNNING (not the service-worker cache), so the
// number is trustworthy: if it doesn't change after an update, the page hasn't reloaded the new code yet.
// Bump APP_VER and the SW CACHE together on every deploy.
const APP_VER="v181";
(function(){ const el=document.getElementById("appVer"); if(el) el.textContent=APP_VER; })();
if("serviceWorker" in navigator && location.protocol==="https:"){
  // Reload once when a new worker takes over so the new code actually runs. We listen on BOTH
  // controllerchange AND the new worker reaching "activated" — iOS standalone PWAs don't always fire
  // controllerchange, so the statechange path is the belt-and-suspenders that gets the reload to happen.
  let _swReloaded=false;
  const reloadOnce=()=>{ if(_swReloaded) return; _swReloaded=true; location.reload(); };
  navigator.serviceWorker.addEventListener("controllerchange", reloadOnce);
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").then(reg=>{
      reg.addEventListener("updatefound", ()=>{ const nw=reg.installing; if(nw) nw.addEventListener("statechange", ()=>{
        if(nw.state==="activated" && navigator.serviceWorker.controller) reloadOnce(); }); });
      reg.update();                                   // check for a newer worker on every launch
      setInterval(()=>reg.update(), 60*60*1000);      // and hourly while open
    }).catch(()=>{});
  });
  // an installed PWA resumes without re-firing "load"; re-check for a new version when it regains focus
  document.addEventListener("visibilitychange", ()=>{ if(document.visibilityState==="visible")
    navigator.serviceWorker.getRegistration().then(reg=>reg&&reg.update()).catch(()=>{}); });
}
