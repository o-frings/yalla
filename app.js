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
  info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11.5v4.5"/><path d="M12 8h.01"/></svg>',
  warn:'<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
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
  "Hip Thrust Machine":["Glutes","Hamstrings"],"Cable Pull-Through":["Glutes","Hamstrings"],"Hip Abduction":["Glutes"],
  "Banded Side Steps":["Glutes"],"Cable Abduction":["Glutes"],"Side-Lying Leg Raise":["Glutes"],
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
  Quads:"#20c997", Hamstrings:"#51cf66", Glutes:"#f783ac", Calves:"#74c0fc", Core:"#ffd43b", Other:"#adb5bd",
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
  if(/deadlift|\brdl\b|romanian|good morning|hip thrust|glute|bridge|hinge|abduction/.test(n)) return ["Glutes","Hamstrings"];
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
  if(/push.?up|pull.?up|chin.?up|\bdip\b|plank|hollow|hanging|inverted|pike|sit.?up|dead bug|burpee|pistol|nordic|handstand|chair dip|bodyweight|step.?up|bridge|prone|superman|wall slide|wall angel|wall sit|scapular|chin.?tuck|bird.?dog|snow.?angel|cat.?cow/.test(n)) return {key:"body",label:"Bodyweight"};
  if(/cable|pulldown|pushdown|pull-through|kickback|face.?pull|rope|crossover|abduction|woodchop|pallof|band /.test(n)) return {key:"cable",label:"Cable / band"};
  if(/machine|leg press|leg curl|leg extension|pec.?deck|hack|smith|seated row|lat pulldown|ab.?machine|reverse pec/.test(n)) return {key:"machine",label:"Machine"};
  return {key:"free",label:"Free weights"};
}
function listWords(a){ return a.length<2?(a[0]||""):a.slice(0,-1).join(", ")+" and "+a[a.length-1]; }
// extended catalogue — muscle mapping for items the keyword fallback can't place cleanly
Object.assign(MUSCLES, {
  "Incline Bench Press":["Chest","Front Delts","Triceps"], "Decline Bench Press":["Chest","Triceps"],
  "Cable Fly":["Chest"], "Pec Deck":["Chest"], "Dumbbell Fly":["Chest"], "Incline Dumbbell Fly":["Chest"],
  "Cable Crossover":["Chest"], "Low-to-High Cable Fly":["Chest"], "Dumbbell Pullover":["Lats","Chest"],
  "Straight-Arm Pulldown":["Lats"], "T-Bar Row":["Upper Back","Lats","Biceps"], "Chest-Supported Row":["Upper Back","Lats","Biceps"],
  "Meadows Row":["Upper Back","Lats","Biceps"], "Front Raise":["Front Delts"], "Upright Row":["Side Delts","Upper Back"],
  "Rear Delt Fly":["Rear Delts"], "Cable Lateral Raise":["Side Delts"],
  "Dumbbell Lateral Raise":["Side Delts"], "Reverse Pec Deck":["Rear Delts","Upper Back"], "Cable Rear Delt Fly":["Rear Delts"], "Bent-Over Lateral Raise":["Rear Delts"],
  "Concentration Curl":["Biceps"], "Spider Curl":["Biceps"], "Reverse Curl":["Forearms","Biceps"],
  "Triceps Kickback":["Triceps"], "Skull Crusher":["Triceps"], "Close-Grip Bench Press":["Triceps","Chest"],
  "Sissy Squat":["Quads"], "Hack Squat":["Quads","Glutes"], "Walking Lunge":["Quads","Glutes"],
  "Step-Up":["Quads","Glutes"], "Glute Kickback":["Glutes"], "Cable Pull-Through":["Glutes","Hamstrings"],
  "Single-Leg RDL":["Hamstrings","Glutes"], "Nordic Curl":["Hamstrings"], "Good Morning":["Hamstrings","Glutes"],
  "Seated Calf Raise":["Calves"], "Single-Leg Calf Raise":["Calves"], "Leg-Press Calf Raise":["Calves"],
  "Russian Twist":["Core"], "Cable Woodchopper":["Core"], "Pallof Press":["Core"], "Landmine Rotation":["Core"],
  "Cable Rotation":["Core"], "Medicine Ball Rotational Throw":["Core"], "Bicycle Crunch":["Core"],
  "Reverse Crunch":["Core"], "Side Plank":["Core"], "Mountain Climbers":["Core"], "Bird Dog":["Core"],
  "Dead Bug":["Core"], "Superman":["Lower Back"]
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
  "Cable Fly","Pec Deck","Dumbbell Fly","Incline Dumbbell Fly","Cable Crossover","Low-to-High Cable Fly","Diamond Push-Ups","Incline Push-Ups","Decline Push-Ups",
  "Lat Pulldown","Seated Row","Chest-Supported Row","T-Bar Row","One-Arm DB Row","Meadows Row",
  "Chin-Up","Straight-Arm Pulldown","Dumbbell Pullover","Face Pulls",
  "Seated DB Press","Arnold Press","Machine Shoulder Press","Cable Lateral Raise","Rear Delt Fly","Upright Row","Front Raise",
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
  "Lying Leg Raise"
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
  "Hack Squat":2,"Leg Press":1,"Goblet Squat":2,"Pec Deck":1,"Cable Fly":2,
  "Two-Hand Kettlebell Swing":3,"One-Arm Kettlebell Swing":3,"Kettlebell Snatch":5,"Kettlebell Clean":4,
  "Kettlebell High Pull":3,"Kettlebell Clean & Press":4,"Kettlebell Front Squat":3,"Kettlebell Overhead Press":3,
  "Kettlebell Push Press":4,"Kettlebell Romanian Deadlift":3,"Kettlebell Row":3,"Kettlebell Floor Press":3,
  "Kettlebell Reverse Lunge":3,"Kettlebell Bulgarian Split Squat":4,"Turkish Get-Up":5,"Kettlebell Windmill":4,
  "Kettlebell Halo":2,"Kettlebell Suitcase Carry":2,"Kettlebell Farmer's Carry":2 };
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
 "Low-to-High Cable Fly":[3.5,"Targets the upper chest with constant tension; a solid finisher."],
 "Pec Deck":[3.5,"Stable, easy-to-progress chest isolation; limited stretch versus free-weight flyes."],
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
};
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
const VENUE_HOME=["Walking Lunge","Reverse Lunge","Sissy Squat","Single-Leg RDL","Single-Leg Calf Raise","Standing Calf Raise","Bulgarian Split Squat","Glute Kickback","Lying Leg Raise","Superman","Bird Dog","Dead Bug","Side Plank","Bicycle Crunch","Reverse Crunch","Russian Twist","Mountain Climbers","Glute Bridge","Single-Leg Glute Bridge","Step-Up","Inverted / Backpack Row","Backpack Bent-Over Row","Towel Row","Chair Dips"];
function venueFor(name){
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
        else amt = (e.n!=null) ? e.n : 1;
        byEx[name]=(byEx[name]||0)+amt;
        groups.forEach((g,i)=> totals[g]=(totals[g]||0)+(i===0?amt:amt*0.5));
      }
    });
  });
  if(metric==="vol"){
    // expand coarse legacy/cardio muscle tokens into the detailed groups so old logs still land on the radar
    const splitM=m=> m==="Shoulders" ? ["Front Delts","Side Delts","Rear Delts"]
                   : m==="Back" ? ["Lats","Upper Back","Lower Back"] : [m];
    // Only resistance work done elsewhere (kind:"muscle") counts toward muscle volume. Cardio/activities
    // (kind:"cardio"/"activity") are a separate training axis tracked by minutes & zone — never the radar.
    (extlog||[]).forEach(e=>{ if(e.kind!=="muscle") return;
      if(e.d>=cutoff && e.muscles && e.muscles.length){ const per=e.vol/e.muscles.length;
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
function bwLoadFrac(name){
  const n=String(name).toLowerCase();
  if(/plank|hollow|\(sec\)|hold|dead bug/.test(n)) return 0;   // isometric — no rep-volume
  // Postural / neck / scapular activation moves barely move bodyweight — counting them at the 0.65
  // default made e.g. Chin Tucks tally as much tonnage as a push-up. Treat them as a light fraction.
  if(/chin.?tuck|\bneck\b|wall slide|wall angel|scap(ula|ular)|snow.?angel|cat.?cow|bird.?dog|prone (y|t|w|i)\b|y-?raise|t-?raise|w-?raise/.test(n)) return 0.08;
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
function setVol(name, w, r){ const reps=parseInt(r)||0; if(reps<=0) return 0; return Math.round(setLoad(name,w)*reps); }
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
const CLOUD_KEYS = ["plans","lastsets","bodyweight","history","extlog","settings"]; // draft stays device-only
let sb=null, cloudUser=null, _syncMeta={}, _pushTimers={};
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
  cloudUser = user || null;
  renderAccount();
  if(cloudUser && cloudUser.id !== was){
    await ensureProfile();
    await detectHardened();        // does this project have the friends-only schema yet?
    renderAccount(); renderFriends(); updateLiveRow();
    if(dbHardened) startPresence();   // heartbeat so friends see me as online
    if(dbHardened) gymRestore();      // reflect an active gym check-in, if any
    if(dbHardened) await e2eInit();   // publish my message key + subscribe to incoming DMs
    processPendingAdd();           // act on a tap-to-follow invite link, if any
    if(pendingLiveView && dbHardened){ const id=pendingLiveView; pendingLiveView=null; openLiveView(id); }  // a "watch me live" push
    if(pendingDM && dbHardened){ const id=pendingDM; pendingDM=null; openDMFromLink(id); }                  // a "new message" push
    await cloudReconcile();
    if(!settings.displayName) askDisplayName();   // first thing after signing in: how should I address you?
  } else if(!cloudUser){ dbHardened=false; teardownLive(); teardownMessages(); teardownGym();
    if(_presenceTimer){ clearInterval(_presenceTimer); _presenceTimer=null; }
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
  if($("ovGreet")) $("ovGreet").textContent=ovGreetWord()+((settings.displayName||settings.name)?", "+(settings.displayName||settings.name):"");
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
  cloudUser=null; renderAccount();
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
// GDPR: wipe everything this user has in the cloud (synced data, feed posts, profile). Local data is untouched.
async function cloudDeleteData(){
  if(!cloudReady()) return;
  confirmAsk("Delete all your data from the cloud? This removes your synced log, your feed posts, and your profile from the server. The copy on this device stays. This can't be undone.","Delete",async()=>{
    const uid=cloudUser.id;
    try{
      await sb.from("activity").delete().eq("user_id",uid);
      await sb.from("user_data").delete().eq("user_id",uid);
      await sb.from("profiles").delete().eq("user_id",uid);
      _syncMeta={}; await _persistMeta();
      await sb.auth.signOut(); cloudUser=null; renderAccount();
      toast("Your cloud data was deleted. The copy on this device is untouched.", true);
    }catch(e){ toast("Couldn't delete cloud data: "+((e&&e.message)||e)); }
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

// Mark a key dirty and debounce-push it to the cloud. Called on every sset.
function cloudMark(k,v){
  if(k==="_syncMeta" || !cloudReady() || CLOUD_KEYS.indexOf(k)<0) return;
  _syncMeta[k]=Date.now(); _persistMeta();
  clearTimeout(_pushTimers[k]);
  const ts=_syncMeta[k];
  _pushTimers[k]=setTimeout(()=>cloudPush(k, v, ts), 1200);
}
async function cloudPush(k, v, ts){
  if(!cloudReady()) return;
  try{
    await sb.from("user_data").upsert(
      { user_id: cloudUser.id, key:k, value:v, updated_at:new Date(ts).toISOString() },
      { onConflict:"user_id,key" }
    );
  }catch(e){ /* left dirty; next change or reconcile retries */ }
}

// On login / launch: pull cloud rows, adopt any that are newer than local, push any local that are newer/missing.
async function cloudReconcile(){
  if(!cloudReady()) return;
  let rows=[];
  try{ const { data, error } = await sb.from("user_data").select("key,value,updated_at"); if(error) throw error; rows=data||[]; }
  catch(e){ return; }
  const server={}; rows.forEach(r=>{ server[r.key]={ v:r.value, ts:Date.parse(r.updated_at) }; });
  let adopted=false;
  for(const k of CLOUD_KEYS){
    const localTs=_syncMeta[k]||0, s=server[k];
    if(s && s.ts>localTs){ await _localSet(k, s.v); _syncMeta[k]=s.ts; adopted=true; }
    else { const lv=await sget(k); if(lv!=null && (!s || localTs>s.ts)) await cloudPush(k, lv, localTs||Date.now()); }
  }
  await _persistMeta();
  if(adopted) await reloadFromStore();
}
// Re-hydrate the in-memory globals from storage after the sync layer changed them, then repaint.
async function reloadFromStore(){
  settings = Object.assign(settings, (await sget("settings"))||{});
  const sp=await sget("plans"); if(sp) plans=sp;
  last=(await sget("lastsets"))||{}; bw=(await sget("bodyweight"))||[]; hist=(await sget("history"))||{}; extlog=(await sget("extlog"))||[];
  if(!plans.length) plans=DEFAULT_PLANS.map(p=>JSON.parse(JSON.stringify(p)));
  if(!plans.find(p=>p.id===settings.activePlanId)) settings.activePlanId=plans[0].id;
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
// auto-post when all three weekly rings are closed (once per week; needs sign-in + sharing on)
function weekKey(d){ d=d?new Date(d):new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate()-((d.getDay()+6)%7)); return d.toDateString(); }
async function shareRingsClosed(sets){
  if(!cloudReady() || (settings.shareLevel||0)<1) return;
  const wk=weekKey(); if(settings.ringsSharedWk===wk) return;     // once per week
  settings.ringsSharedWk=wk; await sset("settings",settings);
  const row={ user_id:cloudUser.id, kind:"rings",
    summary:{ name:"Closed all 3 rings this week 🎯", sets:Math.round(sets)||0, mins:0, prs:0, mtot:{}, lvl:1 } };
  if(dbHardened) row.level=1;
  try{ await sb.from("activity").insert(row); }catch(e){}
  toast("All rings closed — shared with your crew! 🎯", true);
}

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
    const reg=await navigator.serviceWorker.ready;
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
    const reg=await navigator.serviceWorker.ready;
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
  const lbl=$("liveLbl"); if(lbl) lbl.textContent = liveOn ? "Sharing live" : "Share live";
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
async function endLive(silent){
  if(!liveOn) return; liveOn=false; _liveViewers=[]; _liveAudienceCustom=false; clearTimeout(_liveTimer); updateLiveRow(); renderLivePicks();
  try{ if(cloudReady()) await sb.from("live_sessions").update({ active:false, updated_at:new Date().toISOString() }).eq("user_id",cloudUser.id); }catch(e){}
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
      +'<div class="levelcap" style="margin-top:2px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">'+esc(s.name||"Workout")+(s.exName?' · '+esc(s.exName):'')+' · '+(s.doneSets||0)+' sets</div></div><span class="livego">Watch ›</span>';
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
    box.innerHTML='<div class="ovbig" style="font-size:20px;">'+esc(who||"They")+' finished 🎉</div><p class="levelcap" style="margin-top:6px;">This live session ended — their workout is in the feed below.</p>';
    if(acts) acts.style.display="none"; if(add) add.style.display="none"; return;
  }
  if(acts) acts.style.display=""; if(add) add.style.display="";
  const chips=[["Exercise", s.exName||"—"],["Sets",(s.doneSets||0)+(s.totalSets?"/"+s.totalSets:"")],["Volume", s.vol?fmtKg(s.vol):"—"],["Time",(s.mins||0)+" min"]];
  let h='<div class="ovbig" style="font-size:20px;">'+esc(s.name||"Workout")+'</div>';
  h+='<div style="text-align:center; margin:12px 0 2px;"><canvas id="liveRadar" width="320" height="320" style="width:170px;height:170px;"></canvas></div>';
  h+='<div class="row" style="gap:8px; margin:10px 0;">'+chips.map(c=>'<div style="flex:1; background:var(--row); border-radius:14px; padding:10px 4px; text-align:center;"><div style="font-weight:700; font-size:16px;">'+esc(c[1])+'</div><div class="levelcap" style="margin-top:2px;">'+esc(c[0])+'</div></div>').join('')+'</div>';
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
  let jwk=null; try{ jwk=await _e2eIdbGet(E2E_REC); }catch(e){}
  if(jwk){
    try{
      const priv=await crypto.subtle.importKey("jwk",jwk,{name:"ECDH",namedCurve:"P-256"},true,["deriveBits"]);
      const pub=await crypto.subtle.importKey("jwk",{crv:jwk.crv,kty:jwk.kty,x:jwk.x,y:jwk.y,ext:true},{name:"ECDH",namedCurve:"P-256"},true,[]);
      _e2eKeys={priv,pub,jwk}; return _e2eKeys;
    }catch(e){ jwk=null; }
  }
  const kp=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},true,["deriveBits"]);
  const privJwk=await crypto.subtle.exportKey("jwk",kp.privateKey);
  await _e2eIdbSet(E2E_REC,privJwk);
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
    const key=await deriveKey(pass,salt), ct=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,new TextEncoder().encode(JSON.stringify(keys.jwk)));
    await sb.from("key_backups").upsert({ user_id:cloudUser.id, salt:bufToB64(salt), iv:bufToB64(iv), wrapped:bufToB64(ct), updated_at:new Date().toISOString() });
    return true;
  }catch(e){ return false; }
}
async function e2eRestore(pass){
  if(!cloudReady() || !pass) return false;
  let row=null; try{ const { data } = await sb.from("key_backups").select("salt,iv,wrapped").eq("user_id",cloudUser.id).maybeSingle(); row=data; }catch(e){}
  if(!row) return false;
  try{
    const key=await deriveKey(pass,b64ToBuf(row.salt));
    const pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:b64ToBuf(row.iv)},key,b64ToBuf(row.wrapped));
    const jwk=JSON.parse(new TextDecoder().decode(pt));
    await crypto.subtle.importKey("jwk",jwk,{name:"ECDH",namedCurve:"P-256"},true,["deriveBits"]);   // validate
    await _e2eIdbSet(E2E_REC,jwk);
    _e2eKeys=null; _e2eNeedsRestore=false;
    for(const k in _e2eSecretCache) delete _e2eSecretCache[k];
    await e2eGetKeys(); await e2ePublish();
    return true;
  }catch(e){ return false; }   // wrong passphrase / corrupt
}

// --- transport + state ---
async function e2eInit(){
  if(!cloudReady()) return;
  let jwk=null; try{ jwk=await _e2eIdbGet(E2E_REC); }catch(e){}
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
  try{ await sb.from("direct_messages").update({ read_at:new Date().toISOString() }).eq("recipient",cloudUser.id).eq("sender",uid).is("read_at",null); }catch(e){}
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
    +'<input class="comminput" id="msgRestorePass" type="password" placeholder="Message passphrase" style="margin:12px 0; width:100%;">'
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
  b.innerHTML='<div class="levelcap" style="margin:10px 4px;">Loading…</div>';
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
    h+='<div class="ed-label" style="margin-top:16px;">Start a chat</div>'+fresh.map(f=>{ const nm=f.display_name||"Friend";
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
  let p=""; try{ p=window.prompt("Set a message passphrase to back up your key.\n\nOn a new device you'll enter this to unlock your message history.\n\n⚠️ Forget it with no other device signed in and your history is gone — it can't be recovered.","")||""; }catch(e){ p=""; }
  if(!p) return;
  if(p.length<6){ toast("Use at least 6 characters."); return; }
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
  for(const r of rows){ const em=await e2eDecrypt(friendUid,r); if(em){ (_threadReactions[r.message_id]=_threadReactions[r.message_id]||{})[r.actor]=em; } }
}
async function refreshThreadReactions(friendUid){
  if(!_msgThreadUid || _msgThreadUid!==friendUid) return;
  await loadThreadReactions(_threadMids, friendUid);
  _threadMids.forEach(renderReactionsFor);
}
function renderReactionsFor(mid){
  const host=document.querySelector('[data-chips="'+mid+'"]'); if(!host) return;
  const map=_threadReactions[mid]||{}, emojis=Object.values(map);
  if(!emojis.length){ host.innerHTML=""; return; }
  const counts={}; emojis.forEach(e=> counts[e]=(counts[e]||0)+1);
  const mine=map[cloudUser.id];
  host.innerHTML=Object.keys(counts).map(e=>'<span class="react-chip'+(mine===e?' mine':'')+'" data-e="'+e+'">'+e+(counts[e]>1?' '+counts[e]:'')+'</span>').join('');
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
      +quickEmojis().map(e=>'<button class="react-pick" data-e="'+e+'">'+e+'</button>').join('')
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
const DISPLAY_GROUPS=["Chest","Back","Shoulders","Biceps","Triceps","Forearms","Quads","Adductors","Hamstrings","Glutes","Calves","Core","Neck"];
// the spoke list for a chart: parents stay collapsed unless their name is in `expanded`, then they split
function roseGroups(expanded){ const out=[];
  DISPLAY_GROUPS.forEach(g=>{ if(SUBGROUPS[g] && expanded && expanded.has(g)) Array.prototype.push.apply(out, SUBGROUPS[g]); else out.push(g); });
  return out; }
// roll detailed totals up onto the spoke list (legacy keys expanded first); opened parents keep their heads
function roseTotals(tot, expanded){ const t=expandLegacyMtot(tot||{}), out={};
  Object.keys(t).forEach(k=>{ const p=AGG[k]||k, keep=(SUBGROUPS[p] && expanded && expanded.has(p)); const key=keep?k:p; out[key]=(out[key]||0)+(t[k]||0); });
  return out; }
function drawRose(x, cx, cy, R, G, tot, o){
  // tot is already display-prepared by roseTotals() (legacy keys expanded, heads rolled into Back/Shoulders).
  // Don't expandLegacyMtot here — it would re-split the rolled-up "Back"/"Shoulders" keys and blank those spokes.
  o=o||{}; const n=G.length, frac=roseRadii(G,tot);
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
      x.fillText(MSHORT[G[i]]||G[i], px, py);
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
  renderLiveCards(); subscribeLiveFeed();   // friends training live, streamed in real time
  // Liberal viewing: you see friends' posts even if you share nothing yourself. Each post shows at
  // the level its author published (s.lvl); your own level only governs what you publish.
  list.innerHTML='<div class="levelcap" style="margin:0 4px;">Loading…</div>';
  let rows=[];
  try{
    const { data, error } = await sb.from("activity").select("id,user_id,created_at,summary").order("created_at",{ascending:false}).limit(30);
    if(error) throw error; rows=data||[];
  }catch(e){ list.innerHTML='<div class="levelcap" style="margin:0 4px;">Couldn\'t load the feed.</div>'; return; }
  if(!rows.length){ list.innerHTML='<div class="levelcap" style="margin:0 4px;">No activity yet. Finish a workout to be the first.</div>'; return; }
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
    const stats=[ s.exN?s.exN+" ex":null, s.sets!=null?s.sets+" sets":null, s.vol?fmtKg(s.vol):null,
      s.mins?Math.round(s.mins)+" min":null, s.prs?s.prs+" PR"+(s.prs>1?"s":""):null ].filter(Boolean).join(" · ");
    const t=s.top, topLine = t&&t.name ? ("Top · "+t.name + (viewLvl>=3 && t.w>0 ? " · "+t.w+"kg×"+t.r : "")) : "";
    const mt=s.mtot||{}, hl=muscleLegend(mt, 3);
    const canOpen = viewLvl>=2 && s.ex && s.ex.length;
    txt.innerHTML='<div style="font-weight:600;">'+esc(who)+' · '+esc(s.name||"Workout")+'</div>'+
      '<div class="levelcap" style="margin:4px 0 0;">'+esc(stats)+'</div>'+
      (topLine?'<div class="levelcap" style="margin:2px 0 0;">'+esc(topLine)+'</div>':'')+
      (hl?'<div class="levelcap" style="margin:3px 0 0; opacity:.9;">'+hl+'</div>':'')+
      '<div class="levelcap" style="margin:2px 0 0; opacity:.7;">'+esc(agoStr(Date.parse(r.created_at)))+(canOpen?' · tap for detail ›':'')+'</div>';
    const cv=document.createElement("canvas"); cv.width=72; cv.height=72; cv.style.cssText="flex:0 0 auto; width:60px; height:60px;";
    const avt=document.createElement("div"); avt.style.cssText="flex:0 0 auto;"+(mine?"":" cursor:pointer;"); avt.innerHTML=avatarHTML(who,{size:44,uid:r.user_id});
    if(!mine) bindFriendTap(avt, r.user_id, who);   // tap → profile, long-press → chat
    top.appendChild(avt); top.appendChild(txt); top.appendChild(cv); card.appendChild(top);
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
    miniRadar(cv, s.mtot||{});
  });
  // urgency: a friend who trained in the last day gets surfaced at the top of the overview
  const host=$("ovBody"); if(host){ const old=host.querySelector(".ovfriend"); if(old) old.remove();
    const fresh=rows.find(r=> r.user_id!==cloudUser.id && (Date.now()-Date.parse(r.created_at)) < 24*3600*1000);
    if(fresh){ const who=names[fresh.user_id]||"A friend", s=fresh.summary||{};
      const c=document.createElement("div"); c.className="group ovnudge ovfriend";
      c.innerHTML='<div class="pad"><div class="ovk" style="color:var(--accent);">Friends</div><div class="ovbig" style="font-size:20px;">'+esc(who)+' just trained 🔥</div><p class="ovp" style="margin-top:8px;">'+esc(s.name||"A workout")+' · '+esc(agoStr(Date.parse(fresh.created_at)))+' — your move?</p></div>';
      host.insertBefore(c, host.firstChild);
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
  let h='<div class="ovbig" style="font-size:22px;">'+esc(s.name||"Workout")+'</div>';
  if(when) h+='<div class="levelcap" style="margin:3px 0 16px;">'+esc(when)+'</div>';
  // headline numbers up top
  const chips=[["Volume", s.vol?fmtKg(s.vol):"—"],["Sets", ""+(s.sets||0)],["Time", (s.mins||0)+" min"],["PRs", ""+(s.prs||0)]];
  h+='<div class="wo-stats">'+chips.map(c=>'<div class="wo-stat"><b>'+esc(c[1])+'</b><span>'+esc(c[0])+'</span></div>').join('')+'</div>';
  // muscle split as horizontal bars — clean and never clips (a single session is too lopsided for a radar)
  const at=roseTotals(mt), mg=roseGroups().filter(g=>(at[g]||0)>0).sort((a,b)=>(at[b]||0)-(at[a]||0)), mmax=Math.max(1,...mg.map(g=>at[g]));
  if(mg.length){
    h+='<div class="ed-label" style="margin-top:22px;">Muscles worked</div><div class="wo-mus">';
    h+=mg.map(g=>{ const pct=Math.max(8,Math.round(at[g]/mmax*100)), col=MCOLOR[g]||"#888";
      return '<div class="wo-mrow"><span class="wo-mlab"><i class="wo-mdot" style="background:'+col+'"></i>'+esc(MSHORT[g]||g)+'</span><span class="wo-mtrack"><i class="wo-mbar" style="width:'+pct+'%;background:'+col+'"></i></span></div>'; }).join('');
    h+='</div>';
  }
  if(viewLvl>=2 && s.ex && s.ex.length){
    h+='<div class="ed-label" style="margin-top:22px;">Exercises</div><div class="wo-exlist">';
    h+=s.ex.map(e=>{
      const setsTxt=(e.sets||[]).map(st=>{ const hasW=viewLvl>=3 && st.w!=null && st.w!=="";
        return (hasW ? st.w+"kg×"+(st.r||0) : (st.r||0)+" reps"); }).join(" · ");
      const m=muscleFor(e.name)[0], col=MCOLOR[AGG[m]||m]||"#888";
      return '<div class="wo-ex"><span class="wo-exdot" style="background:'+col+'"></span><div><div class="wo-exn">'+esc(e.name)+'</div><div class="wo-exs">'+esc(setsTxt)+'</div></div></div>';
    }).join('')+'</div>';
    if(viewLvl<3) h+='<p class="levelcap" style="margin:12px 4px 0; opacity:.75;">'+esc(who)+' shared sets &amp; reps but not the weights.</p>';
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
let draft={};   // in-progress entries per workout, kept until the workout is saved: { sig: { t, s:{ exname:[{w,r}] } } }
let swaps={}, swapIdx=null;
let freeMode=false;
let timer={ elapsed:0, startedAt:null, running:false, iv:null };
let rest={ elapsed:0, target:90, startedAt:null, alerted:false, iv:null };
function swapOptions(e){ const set=[]; const add=n=>{ if(n&&!set.includes(n)) set.push(n); };
  add(e.n); (e.alts||[]).forEach(add); (ALTS[e.n]||[]).forEach(add);   // suggested picks first
  const primary=muscleFor(e.n)[0];
  exerciseLibrary().forEach(n=>{ if((muscleFor(n)[0]||"")===primary) add(n); });   // every fitting exercise
  return set; }
function dispName(e,xi){ return swaps[xi] || (rot[xi]!=null && !rotKeep.has(xi) ? rot[xi] : e.n); }
let settings={ activePlanId:null, name:"", displayName:"", pointers:{}, sessions:0, sinceDeload:0, beatTotal:0, goalStart:null, goalTarget:null, heightCm:null, bodyfatPct:null, sex:null, theme:"auto", restSec:90, shareActivity:false, shareLevel:null, planStartAt:null, discRead:{}, focusAreas:["balanced"], activeInjuries:{}, injurySeverity:2, weakSpots:[], slotDone:{} };
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
}
// Pin the session + rest timers to the top while a workout's underway (active timer OR a running
// rest). .stick enables position:sticky; an IntersectionObserver adds .stuck (the backdrop) only once
// the bar actually reaches the top, so nothing changes visually until you scroll.
function updateTimerStick(){
  const w=$("timersBar"); if(!w) return;
  const rb=$("restBar");
  const active = timer.running || timer.elapsed>0 || (rb && rb.classList.contains("show"));
  w.classList.toggle("stick", !!active);
}
function tmrStart(){ if(timer.running) return; timer.startedAt=Date.now(); timer.running=true; timer.iv=setInterval(tmrRender,1000); tmrRender(); }
function tmrPause(){ if(!timer.running) return; timer.elapsed=tmrElapsed(); timer.running=false; timer.startedAt=null; if(timer.iv){clearInterval(timer.iv);timer.iv=null;} tmrRender(); }
function tmrReset(){ timer.elapsed=0; timer.running=false; timer.startedAt=null; if(timer.iv){clearInterval(timer.iv);timer.iv=null;} tmrRender(); }
$("tmrToggle").onclick=()=> timer.running ? tmrPause() : tmrStart();
$("tmrReset").onclick=tmrReset;
tmrRender();
// ---- rest timer between sets ----
let _ac;
function beep(){ try{ _ac=_ac||new (window.AudioContext||window.webkitAudioContext)(); if(_ac.state==="suspended") _ac.resume();
  const o=_ac.createOscillator(), g=_ac.createGain(); o.connect(g); g.connect(_ac.destination);
  o.frequency.value=880; const t=_ac.currentTime; g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.18,t+0.02); g.gain.exponentialRampToValueAtTime(0.0001,t+0.4);
  o.start(t); o.stop(t+0.42); }catch(e){} }
function ensureNotifyPerm(){ try{ if(window.Notification && Notification.permission==="default") Notification.requestPermission(); }catch(e){} }
function restRender(){ const t=rest.elapsed; $("restTime").textContent=tmrFmt(t);
  $("restProg").style.width=(rest.target?Math.max(0,Math.min(100,(t/rest.target)*100)):0)+"%"; }
// counts UP from 0; called fresh every time a set is finished so rest never carries over between sets
function restStart(sec){ rest.target=Math.max(5, sec||settings.restSec||90); rest.elapsed=0; rest.startedAt=Date.now(); rest.alerted=false; ensureNotifyPerm();
  $("restBar").classList.add("show"); $("restBar").classList.remove("done"); restRender(); updateTimerStick();
  if(rest.iv) clearInterval(rest.iv);
  rest.iv=setInterval(()=>{ rest.elapsed=Math.max(0,Math.round((Date.now()-rest.startedAt)/1000)); restRender(); if(!rest.alerted && rest.elapsed>=rest.target) restReached(); }, 250); }
function restStop(){ if(rest.iv){ clearInterval(rest.iv); rest.iv=null; } rest.startedAt=null; $("restBar").classList.remove("show","done"); updateTimerStick(); }
function restReached(){ rest.alerted=true;
  if(navigator.vibrate) try{ navigator.vibrate([0,220,120,220]); }catch(e){}
  try{ if(window.Notification && Notification.permission==="granted") new Notification("Rest done 💪", {body:"Time for your next set.", tag:"yalla-rest", renotify:true}); }catch(e){}
  beep(); toast("Rest target reached — next set!", true);
  $("restBar").classList.add("done"); }  // keep counting up until the next set restarts it (or skip)
function restAdjust(d){ if(!$("restBar").classList.contains("show")) return; rest.target=Math.max(15,Math.min(1800,rest.target+d)); settings.restSec=rest.target; sset("settings",settings); if(rest.elapsed<rest.target){ rest.alerted=false; $("restBar").classList.remove("done"); } restRender(); }
// set the rest target to an exact value (also the saved default for next time)
function restSetTarget(sec){ rest.target=Math.max(5,Math.min(1800,Math.round(sec))); settings.restSec=rest.target; sset("settings",settings);
  if(rest.elapsed<rest.target){ rest.alerted=false; $("restBar").classList.remove("done"); } restRender(); }
function parseRest(v){ v=String(v).trim(); if(!v) return 0;
  if(v.indexOf(":")>=0){ const p=v.split(":"); return (parseInt(p[0])||0)*60+(parseInt(p[1])||0); }
  return parseInt(v)||0; }
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
  const wv=row.querySelector(".w").value.trim(), rv=row.querySelector(".r").value.trim();
  if(wv!==""&&rv!=="") restStart(); captureDraft(); });
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
  applyTheme();
  const stored = await sget("plans");
  plans = stored ? stored : JSON.parse(JSON.stringify(DEFAULT_PLANS));
  last  = (await sget("lastsets")) || {};
  bw    = (await sget("bodyweight")) || [];
  hist  = (await sget("history")) || {};
  extlog= (await sget("extlog")) || [];
  draft = (await sget("draft")) || {};
  if(settings.achUnlocked==null) settings.achUnlocked=unlockedIds();
  if(!settings.planStartAt) settings.planStartAt=Date.now();   // start the "freshen" clock for the active plan
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
  const ni = nextRotateIndex(activePlan()); curWk = ni>=0?ni:0;
  await loadEvidence(); // load canonical evidence.json → builds the coach-tip pool + Learn library
  decideTip();          // pick this launch's coach tip (if any) before the first render
  renderAll();
  showTab("overview");   // open on the coach home
  if(!settings.objective){ const ob=$("onboardWrap"); if(ob) ob.classList.add("show"); }   // ask the objective up front
  try{ if(location.hash && location.hash.indexOf("LIFTLOG1:")>=0){ openImport(decodeURIComponent(location.hash.slice(1))); } }catch(e){}
  maybeBackupNudge();
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
function renderAll(){ renderNav(); renderDash(); renderSeg(); renderWorkout(); }

// ================= dashboard =================
function renderNav(){
  $("ltName").textContent = activePlan().name;
  $("planSub").textContent = planMeta(activePlan());
  $("bwGoalTxt").textContent = settings.goalTarget!=null ? settings.goalTarget+" kg" : "—";
}
// ================= overview (coach home) =================
function ovGreetWord(){ const h=new Date().getHours(); return h<5?"Still up?":h<12?"Good morning":h<18?"Good afternoon":"Good evening"; }
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
// Apple-style activity rings — concentric arcs filling toward each weekly target
function drawRings(id, rings){
  const c=$(id); if(!c) return; const ctx=c.getContext("2d"), W=c.width, cx=W/2, cy=W/2; ctx.clearRect(0,0,W,W);
  const thick=W*0.13, gap=W*0.03; let r=W*0.5-thick/2-2;
  rings.forEach(rg=>{
    const pct=Math.max(0, Math.min(1, rg.target? rg.val/rg.target : 0));
    ctx.lineWidth=thick; ctx.lineCap="round";
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.strokeStyle=hexAlpha(rg.color,.18); ctx.stroke();   // track
    if(pct>0){ const a0=-Math.PI/2; ctx.beginPath(); ctx.arc(cx,cy,r,a0,a0+Math.PI*2*pct); ctx.strokeStyle=rg.color; ctx.stroke(); }
    r-=thick+gap;
  });
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
  ctx.fillStyle=l3; ctx.font="600 17px -apple-system,sans-serif"; ctx.textAlign="left"; ctx.fillText("10w ago",pad,H-5); ctx.textAlign="right"; ctx.fillText("now",W-pad,H-5);
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
  freeMode=true; swaps={};
  renderSeg(); renderFree();
  showTab("workout");
  toast("Home workout ready — no equipment needed. Let's go!");
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
    if(showHeaders && a.category!==last){ h+='<div class="ed-label" style="margin-top:14px;">'+esc(catLabel[a.category]||a.category)+'</div>'; last=a.category; }
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
// surface a tip; which tip is drawn stochastically from the goal-relevant pool, weighted by how long since it
// was last shown (recency). A tip is eligible if it has no `goals`, the user has no objective set, or its
// `goals` include the current objective.
let currentTip=null;
function decideTip(){
  const ts = settings.tipState = settings.tipState || { opens:0, last:{} };
  ts.opens = (ts.opens||0) + 1;
  currentTip = null;
  const every = settings.tipEvery==null ? 3 : settings.tipEvery;   // user-set cadence; 0 = never show tips
  if(every>0 && TIPS.length && ts.opens > 1 && ts.opens % every === 0){   // skip the very first open; then ~every Nth
    const obj = settings.objective;
    const pool = TIPS.filter(tip => !tip.goals || !obj || tip.goals.indexOf(obj) >= 0);
    // weight ∝ opens since last shown; never-shown tips get the highest weight; weak single-cohort tips show rarely
    const w = pool.map(tip => { const at = ts.last[tip.id]; const base = at==null ? ts.opens + 1 : Math.max(0.01, ts.opens - at); return tip.strength==="weak" ? base*0.25 : base; });
    const sum = w.reduce((a,b)=>a+b, 0);
    let r = Math.random() * sum, pick = 0;
    for(let i=0;i<pool.length;i++){ r -= w[i]; if(r <= 0){ pick = i; break; } }
    currentTip = pool[pick];
    ts.last[currentTip.id] = ts.opens;
  }
  sset("settings", settings);
}
function renderOverview(){
  const host=$("ovBody"); if(!host) return;
  $("ovGreet").textContent=ovGreetWord()+((settings.displayName||settings.name)?", "+(settings.displayName||settings.name):"");
  try{ $("ovDate").textContent=new Date().toLocaleDateString(undefined,{weekday:"long",month:"short",day:"numeric"}); }catch(e){}
  const due=(settings.sinceDeload||0)>=DELOAD_AT, p=activePlan(), w=p&&p.workouts[curWk], did=sessionToday();
  let h="";
  // --- Train-at-home nudge (2+ days since the last workout) ---
  const off=daysOff();
  if(off>=2){
    h+='<div class="group ovnudge"><div class="pad"><div class="ovk" style="color:var(--accent);">'+off+' days off</div>'
      +'<div class="ovbig">No gym access right now? Train at home!</div>'
      +'<p class="ovp" style="margin-top:8px;">A quick bodyweight session keeps your streak alive — no equipment needed.</p>'
      +'<button class="btn wide ovhome" style="margin-top:16px;">Start a home workout</button></div></div>';
  }
  // --- Today ---
  h+='<div class="ed-label">Today</div>';
  if(due){
    h+='<div class="group"><div class="pad"><div class="ovk">Deload week</div><div class="ovbig">Take it lighter</div><p class="ovp" style="margin-top:8px;">You’ve trained hard for a while. One easier week (~40% less) lets your body catch up — you’ll come back stronger.</p></div></div>';
  } else if(did){
    h+='<div class="group"><div class="pad"><div class="ovk">Today</div><div class="ovbig">Done for today 💪</div><p class="ovp" style="margin-top:8px;">You’ve logged a session. Rest and refuel — showing up consistently is what builds it.</p></div></div>';
  } else if(w){
    h+='<div class="group ovtap ovstart"><div class="pad ovstartpad"><div class="ovstarttext"><div class="ovk">Next session</div><div class="ovbig">'+esc(w.name)+'</div><div class="ovmeta">≈'+workoutMinutes(w)+' min · '+w.ex.length+' exercise'+(w.ex.length===1?'':'s')+'</div></div><span class="ovchev ovgo">›</span></div></div>';
  } else {
    h+='<div class="group ovtap ovstart"><div class="pad ovstartpad"><div class="ovstarttext"><div class="ovbig">Pick a plan to begin</div></div><span class="ovchev ovgo">›</span></div></div>';
  }
  // a one-line motivator under Today (the full stats live on Me) — counts only real sessions, not token efforts
  const f7=sessionDays(7);
  const motiv = f7>=4?"Strong week — you’re putting in the work." : f7>=2?"Good momentum — keep it rolling." : f7>=1?"You’ve started — one more session lifts the whole week." : "Fresh week. The first session is the hardest — let’s go.";
  h+='<p class="ovp" style="margin:12px 0 0;">'+motiv+'</p>';
  // --- visual snapshot: three activity rings to fill this week + a "vs last month" delta ---
  let ovRings=null;
  if(Object.keys(hist).length){
    const cut=Date.now()-7*86400000; let setsWk=0; const musWk=new Set();
    Object.keys(hist).forEach(n=>{ const gs=muscleFor(n); (hist[n]||[]).forEach(e=>{ if(e.d>=cut){ setsWk+=(e.n||0); gs.forEach(g=>{ if(MGROUPS.indexOf(g)>=0) musWk.add(g); }); } }); });
    const sessTarget=Math.max(2,Math.min(5,planSessionsPerWeek(activePlan())||3)), setsTarget=Math.max(20,sessTarget*18);
    ovRings=[ {label:"Sessions", val:f7, target:sessTarget, color:"#ff6b3d"},
              {label:"Hard sets", val:setsWk, target:setsTarget, color:"#4dabf7"},
              {label:"Muscles", val:musWk.size, target:12, color:"#51cf66"} ];
    if(ovRings.every(r=>r.val>=r.target)) shareRingsClosed(setsWk);   // all rings closed → auto-share (gated inside)
    // month-over-month volume delta
    const vol=(loDays,hiDays)=>{ const lo=Date.now()-loDays*86400000, hi=Date.now()-hiDays*86400000; let v=0; Object.keys(hist).forEach(n=>(hist[n]||[]).forEach(e=>{ if(e.d>=lo&&e.d<hi) v+=(e.v||0); })); return v; };
    const cur=vol(28,0), prev=vol(56,28), delta = prev>0 ? Math.round((cur-prev)/prev*100) : null;
    const legend=ovRings.map(r=>'<span class="rglg"><i style="background:'+r.color+'"></i>'+r.label+' <b>'+Math.round(r.val)+'</b>/'+r.target+'</span>').join('');
    const deltaLine = delta!=null ? '<div class="ovdelta'+(delta>=0?' up':' down')+'">'+(delta>=0?'▲':'▼')+' Volume '+(delta>=0?'+':'')+delta+'% vs the month before</div>' : '';
    h+='<div class="ed-label">This week <span class="subhint">— tap for detail ›</span></div>';
    h+='<div class="group ovtap ovsnap"><div class="pad" style="display:flex; align-items:center; gap:16px;">'
      +'<canvas id="ovRingsC" width="320" height="320" style="width:118px; height:118px; flex:0 0 auto;"></canvas>'
      +'<div style="flex:1; min-width:0;"><div class="rglgwrap">'+legend+'</div>'+deltaLine+'</div>'
      +'</div></div>';
  }
  // --- Discover --- a swipeable deck of tips / not-yet-used features
  const dt=discoverTips();
  if(dt.length){
    h+='<div class="ed-label">Discover'+(dt.length>1?' <span class="subhint">— swipe ›</span>':'')+'</div>';
    h+='<div class="discwrap" id="discWrap">'+dt.map(d=>'<div class="group ovnudge disccard"><div class="pad"><button class="discx" data-tip="'+d.id+'" aria-label="Dismiss">✕</button><div class="ovbig" style="font-size:18px; padding-right:20px;">'+esc(d.t)+'</div><p class="ovp" style="margin-top:8px;">'+esc(d.s)+'</p>'+(d.act?'<button class="btn wide ovdisc" data-act="'+d.act+'" data-tip="'+d.id+'" style="margin-top:16px;">'+esc(d.btn)+'</button>':'')+'</div></div>').join('')+'</div>';
    if(dt.length>1) h+='<div class="discdots" id="discDots">'+dt.map((_,i)=>'<span class="discdot'+(i===0?' on':'')+'"></span>').join('')+'</div>';
  }
  // --- Coach tip --- an occasional research-backed pointer (shown ~every 3rd open; see decideTip).
  // Health tips are observational, so they're flagged "Linked in research"; training tips "Backed by research".
  if(currentTip){
    // observational ('linked') tips are flagged "Linked in research"; causal ('do') tips "Backed by research"
    const linked = currentTip.tone==="linked", url = TIP_DOI[currentTip.id];
    h+='<div class="ed-label">'+(linked?'Health note':'Coach tip')+'</div>';
    const inner='<div class="pad"><div class="ovbig" style="font-size:18px;">'+(linked?'🌱':'💡')+' Did you know?</div>'
      +'<p class="ovp" style="margin-top:8px;">'+esc(currentTip.t)+'</p>'
      +'<div class="tipsrc">'+(linked?'Linked in research — ':'Backed by research — ')+esc(currentTip.src)+'</div>'
      +(url?'<div class="tiplink">Read the study ↗</div>':'')+'</div>';
    // whole panel taps through to the study, like the "Watch a how-to video" button
    h+= url ? '<a class="group tipcard" href="'+esc(url)+'" target="_blank" rel="noopener">'+inner+'</a>'
            : '<div class="group">'+inner+'</div>';
    h+='<div class="libteaser" id="ovLibLink">Browse all coaching tips →</div>';
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
  h+='<div class="ed-label">Your next wins</div>';
  h+='<div class="ovobj">Optimising for <b>'+esc(obj.label)+'</b></div>';
  if(shown.length){ h+='<div class="group"><div class="pad"><ul class="ovtodo">'+shown.map(it=>'<li class="ovtap" data-act="'+it.act+'">'+it.t+'<span class="ovchev">›</span></li>').join('')
    +(more>0?'<li class="ovmore">+'+more+' more</li>':'')+'</ul></div></div>'; }
  else { h+='<div class="group"><div class="pad"><p class="ovp">On track for '+esc(obj.label)+' — every muscle your plan targets is getting enough volume. Keep showing up. 👏</p></div></div>'; }
  host.innerHTML=h;
  const sb=host.querySelector(".ovstart"); if(sb) sb.onclick=()=>showTab("workout");
  const hb=host.querySelector(".ovhome"); if(hb) hb.onclick=startHomeWorkout;
  const ll=host.querySelector("#ovLibLink"); if(ll) ll.onclick=openLibrary;
  if(ovRings && $("ovRingsC")){ drawRings("ovRingsC", ovRings);
    const snap=host.querySelector(".ovsnap"); if(snap) snap.onclick=()=>showTab("me"); }
  host.querySelectorAll(".discx").forEach(x=> x.onclick=(ev)=>{ ev.stopPropagation(); dismissTip(x.dataset.tip, x.closest(".disccard")); });
  host.querySelectorAll(".ovdisc").forEach(b=> b.onclick=()=>{ if(b.dataset.tip){ settings.discRead=settings.discRead||{}; settings.discRead[b.dataset.tip]=1; sset("settings",settings); } ovAct(b.dataset.act); });
  const dw=$("discWrap"), dots=$("discDots");
  if(dw && dots){ const cards=dw.querySelectorAll(".disccard");
    dw.addEventListener("scroll", ()=>{ let best=0, bd=1e9; cards.forEach((c,i)=>{ const d=Math.abs(c.offsetLeft-dw.scrollLeft); if(d<bd){bd=d;best=i;} });
      dots.querySelectorAll(".discdot").forEach((el,i)=> el.classList.toggle("on", i===best)); }, {passive:true}); }
  host.querySelectorAll(".ovtodo .ovtap").forEach(li=> li.onclick=()=>ovAct(li.dataset.act));
  if(settings.objective && !document.querySelector("#onboardWrap.show")) coach("swipe","Swipe left or right to move between your three pages — Overview, Workout and Me.");
}
// route a Needs-attention item to where the user acts on it
function ovAct(act){
  const goto=(id,focus)=>{ showTab("me"); setTimeout(()=>{ const el=$(id); if(el){ el.scrollIntoView({behavior:"smooth",block:"center"}); if(focus) el.focus(); } },80); };
  if(act==="weight") goto("bwInput", true);
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
  const now = bw.length?bw[bw.length-1].kg:null;
  $("bwNow").textContent = now!=null?now.toFixed(1):"—";
  $("bwNow").parentElement.classList.toggle("empty", now==null);
  const s=parseFloat(settings.goalStart), g=parseFloat(settings.goalTarget), hasGoal=!isNaN(s)&&!isNaN(g)&&g!==s;
  const pct = (hasGoal && now!=null) ? Math.max(0,Math.min(100,((now-s)/(g-s))*100)) : 0;
  $("bwBar").style.width = pct+"%";
  $("bwGoalTxt").textContent = hasGoal ? g+" kg" : "—";
  $("bwLeft").textContent = !hasGoal ? "set a goal weight below" : (now!=null ? (now>=g?"goal reached — amazing":(g-now).toFixed(1)+" kg to go") : "log your first weigh-in");
  $("stSessions").textContent = settings.sessions;
  const hrs=(settings.timeTotal||0)/60;
  $("stTime").textContent = hrs>=10 ? Math.round(hrs) : round1(hrs);
  $("stSince").textContent = settings.sinceDeload;
  $("stBeat").textContent = settings.beatTotal||0;
  const due = settings.sinceDeload>=DELOAD_AT;
  $("stSince").classList.toggle("due",due);
  $("deload").style.display = due ? "" : "none";
  $("spark").style.display = bw.length >= 3 ? "" : "none";
  drawSpark();
  drawProgBars();
  if($("heightIn") && document.activeElement!==$("heightIn")) $("heightIn").value = settings.heightCm||"";
  if($("bfIn") && document.activeElement!==$("bfIn")) $("bfIn").value = settings.bodyfatPct||"";
  renderCalc(now);
  renderCalendar();
  renderAchievements();
  renderInsight();
  renderObjective();
}
function renderCalendar(){
  const grid=$("calGrid"); if(!grid) return;
  const trained=new Set();
  Object.keys(hist).forEach(n=> (hist[n]||[]).forEach(e=> trained.add(new Date(e.d).toDateString())));
  (extlog||[]).forEach(e=> trained.add(new Date(e.d).toDateString()));
  const WEEKS=10, today=new Date(); today.setHours(0,0,0,0);
  const dow=(today.getDay()+6)%7;                       // Monday = 0
  const start=new Date(today); start.setDate(today.getDate()-dow-(WEEKS-1)*7);
  let html="";
  for(let i=0;i<WEEKS*7;i++){
    const d=new Date(start); d.setDate(start.getDate()+i);
    const ds=d.toDateString(), cls=[];
    if(d>today) cls.push("future"); else if(trained.has(ds)) cls.push("on");
    if(ds===today.toDateString()) cls.push("today");
    html+='<div class="calcell'+(cls.length?' '+cls.join(' '):'')+'" title="'+ds+'"></div>';
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
  if(bw.length<2){ ctx.fillStyle="#636366"; ctx.font="12px -apple-system,sans-serif";
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
let progMetric="volume", progAnim=1, progRAF=0;
// grow the bars in from the baseline (called when the Me sheet opens or the metric changes)
function animateProgBars(){
  if(typeof requestAnimationFrame!=="function"){ progAnim=1; drawProgBars(); return; }
  cancelAnimationFrame(progRAF); const start=performance.now(), dur=520;
  const step=t=>{ const k=Math.min(1,(t-start)/dur); progAnim=1-Math.pow(1-k,3); drawProgBars(); if(k<1){ progRAF=requestAnimationFrame(step); } else { progAnim=1; } };
  progRAF=requestAnimationFrame(step);
}
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
      es.forEach(e=>{ const w=parseFloat(e.w)||0, r=parseInt(e.r)||0, score=w>0?w*(1+r/30):r;
        if(score>best){ if(best>0){ const i=idx(e.d); if(i>=0) out[i]++; } best=score; } });
    });
    return out;
  }
  // volume (kg) or sets
  Object.keys(hist).forEach(n=>(hist[n]||[]).forEach(e=>{ const i=idx(e.d); if(i>=0) out[i]+= metric==="sets" ? (e.n||0) : (e.v||0); }));
  return out;
}
const PROG_LABELS={ volume:"Weekly volume", sets:"Weekly hard sets", sessions:"Sessions per week", weight:"Avg body weight", prs:"New PRs per week" };
// "are we on track?" verdict per metric, from the last few weeks vs the weeks before
function progVerdict(metric, data){
  const N=data.length, mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
  const recent=mean(data.slice(N-3)), earlier=mean(data.slice(Math.max(0,N-6), N-3));
  if(metric==="weight"){
    const gs=+settings.goalStart, gt=+settings.goalTarget, dir=settings.objective?objectiveDir():((gt>gs+0.5)?"gain":(gt<gs-0.5)?"lose":"maintain");
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
      const amt = metric==="vol" ? effVolume(name,e,"total") : (e.n!=null?e.n:1);
      groups.forEach((g,gi)=>{ if(series[g]) series[g][i]+= gi===0?amt:amt*0.5; }); });
  });
  return series;
}
// ===== Growth signal: is each muscle (and the body overall) being trained enough to grow, hold, or lose size? =====
// Two evidence-based axes, combined per muscle:
//   DOSE  — recent weekly sets vs landmarks. Growth needs ~6–10+ fractional sets/muscle/wk (sch17, drr, rpvol);
//           size is merely *maintained* on as little as ~1/3 of that (bickel); below maintenance, fibres atrophy
//           within weeks (mujika).
//   TREND — recent vs earlier weekly *volume* (load×reps×sets). Hypertrophy requires progressive overload
//           (sch10); it can come from more load OR more reps, so volume — not load alone — is the signal (plotkin).
// Output is an estimate of the TRAINING STIMULUS, not measured muscle size — the app can't see your body.
function growthStatus(){
  const setsS=progMuscleWeekly("sets"), volS=progMuscleWeekly("vol"), N=PROG_WEEKS;
  const mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
  const recent=a=>mean(a.slice(N-3)), earlier=a=>mean(a.slice(Math.max(0,N-6),N-3));
  let activeWeeks=0; for(let i=0;i<N;i++){ if(MGROUPS.some(g=>setsS[g][i]>0)) activeWeeks++; }
  const per=[];
  MGROUPS.forEach(g=>{
    if(NO_TARGET.has(g) || !setsS[g].some(v=>v>0)) return;   // exempt (Neck) or never trained → not shown
    const sets=recent(setsS[g]);                       // current weekly-set dose (last-3-week mean)
    const rv=recent(volS[g]), ev=earlier(volS[g]);
    const trend = ev>0 ? rv/ev : null;                 // null = no earlier baseline (just started this muscle)
    let state, why;
    if(sets < WEEKLY_SET_MAINT){
      state="shrink"; why = sets<0.5 ? "barely trained lately — below what's needed to keep it"
                                     : "below maintenance volume — too little to hold size";
    } else if(trend!==null && trend < 0.75){
      state="shrink"; why="weekly volume has dropped sharply — progress is at risk";
    } else if(sets >= WEEKLY_SET_MIN){                  // adequate growth dose
      if(trend===null || trend >= 1.08){ state="grow"; why="enough volume and still climbing — a growth stimulus"; }
      else if(trend >= 0.92){ state="hold"; why="plenty of volume but it's been flat — maintaining; add a rep or a little load to push growth"; }
      else { state="hold"; why="good volume but easing off — holding for now"; }
    } else {                                            // WEEKLY_SET_MAINT..WEEKLY_SET_MIN: maintenance dose
      if(trend!==null && trend >= 1.15 && sets >= WEEKLY_SET_MIN-1){ state="grow"; why="climbing toward a growth dose"; }
      else { state="hold"; why="around maintenance volume — enough to hold size, under the ~"+WEEKLY_SET_MIN+"–"+WEEKLY_SET_TARGET+" sets that drive growth"; }
    }
    per.push({g, state, sets, trend, why});
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
    cstate="shrink"; cmsg=nShrink+" of "+active+" trained muscles are getting too little to hold size — bump their weekly sets back up before you lose ground.";
  } else if(nGrow>=Math.max(1,Math.round(active*0.4)) && (trendAll===null || trendAll>=0.95)){
    cstate="grow"; cmsg=nGrow+" of "+active+" trained muscles are getting a growth stimulus"+(nHold?", "+nHold+" holding":"")+(nShrink?", "+nShrink+" slipping":"")+". Keep the progressive overload going.";
  } else {
    cstate="hold"; cmsg="You're mostly maintaining — "+nHold+" of "+active+" holding"+(nGrow?", "+nGrow+" growing":"")+(nShrink?", "+nShrink+" slipping":"")+". To grow, nudge load, reps or sets up on the flat groups.";
  }
  return { per, combined:{state:cstate, msg:cmsg, nGrow, nHold, nShrink, active} };
}
const GST_ARROW={grow:"↑", hold:"→", shrink:"↓"};
const GST_HEAD={grow:"Overall: growing", hold:"Overall: holding", shrink:"Overall: at risk", more:"Growth signal"};
function renderGrowth(){
  const box=$("musGrowth"); if(!box) return;
  const r=growthStatus();
  box.style.display="";
  box.className="growth "+r.combined.state;
  let h='<div class="ghead"><span class="gdot '+r.combined.state+'"></span><span class="gtitle">'+esc(GST_HEAD[r.combined.state]||"Growth signal")+'</span></div>';
  h+='<p class="gsub">'+esc(r.combined.msg)+'</p>';
  if(r.per.length && r.combined.state!=="more"){
    h+='<div class="grid">'+r.per.map(p=>'<span class="gchip '+p.state+'" title="'+esc(p.g+" · ~"+round1(p.sets)+" sets/wk — "+p.why)+'">'+esc(MSHORT[p.g]||p.g)+' <span class="garrow">'+GST_ARROW[p.state]+'</span></span>').join('')+'</div>';
    h+='<p class="gsub" style="margin-top:11px;font-size:12px;color:var(--l3);">Per muscle over the last '+PROG_WEEKS+' weeks · ↑ growing · → holding · ↓ shrinking. An estimate of training stimulus, not a body measurement.</p>';
  }
  box.innerHTML=h;
}
function drawProgBars(){
  const c=$("progBars"); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const cap=$("progCap"), ac=accentHex();
  const l3=(getComputedStyle(document.documentElement).getPropertyValue('--l3')||'#888').trim();
  const ink=(getComputedStyle(document.documentElement).getPropertyValue('--ink')||'#000').trim();
  const N=PROG_WEEKS, pad=12, base=H-26, top=12;
  const cx=i=> pad + i*((W-pad*2)/(N-1));
  const empty=()=>{ ctx.fillStyle=l3; ctx.font="13px -apple-system,sans-serif"; ctx.textAlign="center"; ctx.fillText("Log a few workouts to see this build up.", W/2, H/2); if(cap) cap.textContent=""; const v0=$("progVerdict"); if(v0) v0.style.display="none"; };
  const xLabels=()=>{ ctx.fillStyle=l3; ctx.font="600 17px -apple-system,sans-serif"; ctx.textAlign="left"; ctx.fillText(PROG_WEEKS+"w ago", pad, H-6); ctx.textAlign="right"; ctx.fillText("now", W-pad, H-6); };
  const baseline=()=>{ ctx.strokeStyle=hexAlpha(ac,.18); ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(pad,base+0.5); ctx.lineTo(W-pad,base+0.5); ctx.stroke(); };
  const verdict=data=>{ const ve=$("progVerdict"); if(ve){ const v=progVerdict(progMetric, data); ve.style.display="flex"; ve.className="progverd v-"+v.lvl; ve.querySelector(".pvtxt").textContent=v.msg; } };

  // ---- volume / sets → one line per muscle (like the radar, but over time) ----
  if(progMetric==="volume" || progMetric==="sets"){
    const series=progMuscleWeekly(progMetric==="volume"?"vol":"sets");
    const active=MGROUPS.filter(g=> series[g].some(v=>v>0));
    if(!active.length){ empty(); return; }
    let hi=0; active.forEach(g=> series[g].forEach(v=>{ if(v>hi) hi=v; })); hi=hi||1;
    const mapY=v=> base-(v/hi)*(base-top)*progAnim;
    baseline();
    ctx.lineJoin="round"; ctx.lineCap="round";
    active.forEach(g=>{ const col=MCOLOR[g]||l3;
      ctx.strokeStyle=col; ctx.globalAlpha=.9; ctx.lineWidth=3; ctx.beginPath();
      series[g].forEach((v,i)=>{ const x=cx(i), y=mapY(v); i?ctx.lineTo(x,y):ctx.moveTo(x,y); }); ctx.stroke();
      const li=N-1; ctx.globalAlpha=1; ctx.beginPath(); ctx.arc(cx(li), mapY(series[g][li]), 4.5, 0, Math.PI*2); ctx.fillStyle=col; ctx.fill();
    });
    ctx.globalAlpha=1; xLabels();
    if(cap) cap.innerHTML=(progMetric==="volume"?"Weekly volume":"Weekly sets")+' by muscle · last '+PROG_WEEKS+' weeks'
      +'<div class="proglegend">'+active.map(g=>'<span class="pglg"><i style="background:'+(MCOLOR[g]||"#888")+'"></i>'+MSHORT[g]+'</span>').join('')+'</div>';
    verdict(progWeeklyData(progMetric));
    return;
  }

  // ---- sessions / weight / PRs → a single trend line ----
  const data=progWeeklyData(progMetric);
  if(!data.some(v=>v>0)){ empty(); return; }
  let lo=0, hi=Math.max(...data);
  if(progMetric==="weight"){ const nz=data.filter(v=>v>0); lo=Math.min(...nz); hi=Math.max(...nz); const span=Math.max(1,hi-lo); lo=Math.max(0,lo-span*0.2); hi=hi+span*0.1; }
  const mapY=v=> base-(hi>lo?(v-lo)/(hi-lo):0)*(base-top)*progAnim;
  baseline();
  // line + dots over the weeks that have data (weight skips gaps; sessions/PRs plot every week incl. zeros)
  const valid=[]; data.forEach((v,i)=>{ if(progMetric!=="weight" || v>0) valid.push([i,v]); });
  ctx.strokeStyle=ac; ctx.lineWidth=3; ctx.lineJoin="round"; ctx.lineCap="round";
  ctx.beginPath(); valid.forEach(([i,v],k)=>{ const x=cx(i), y=mapY(v); k?ctx.lineTo(x,y):ctx.moveTo(x,y); }); ctx.stroke();
  valid.forEach(([i,v])=>{ ctx.beginPath(); ctx.arc(cx(i), mapY(v), i===N-1?5:3.5, 0, Math.PI*2); ctx.fillStyle = i===N-1?ac:hexAlpha(ac,.55); ctx.fill(); });
  // trend line
  const tp=[]; data.forEach((v,i)=>{ if(v>0) tp.push([i,v]); });
  if(tp.length>=2 && progAnim>=1){
    const k=tp.length, sx=tp.reduce((a,p)=>a+p[0],0), sy=tp.reduce((a,p)=>a+p[1],0),
          sxy=tp.reduce((a,p)=>a+p[0]*p[1],0), sxx=tp.reduce((a,p)=>a+p[0]*p[0],0), den=k*sxx-sx*sx;
    const m=den?(k*sxy-sx*sy)/den:0, b0=(sy-m*sx)/k, i0=tp[0][0], i1=tp[tp.length-1][0];
    ctx.strokeStyle=hexAlpha(ink,.45); ctx.lineWidth=2.5; ctx.setLineDash([5,5]);
    ctx.beginPath(); ctx.moveTo(cx(i0), mapY(m*i0+b0)); ctx.lineTo(cx(i1), mapY(m*i1+b0)); ctx.stroke(); ctx.setLineDash([]);
  }
  xLabels();
  const latest=data[N-1], fmt = progMetric==="weight" ? (latest>0?round1(latest)+" kg":"—") : Math.round(latest);
  if(cap) cap.innerHTML=PROG_LABELS[progMetric]+' · last '+PROG_WEEKS+' weeks · <b>this week: '+(latest>0?fmt:"—")+'</b>';
  verdict(data);
}
document.querySelectorAll("#progMetric .s").forEach(s=> s.onclick=()=>{
  progMetric=s.dataset.pm;
  document.querySelectorAll("#progMetric .s").forEach(x=> x.classList.toggle("active", x===s));
  animateProgBars();
});
$("bwBtn").onclick=async()=>{ const v=parseFloat($("bwInput").value);
  if(isNaN(v)||v<30||v>250){ toast("Enter a valid weight"); return; }
  bw.push({d:Date.now(),kg:v}); await sset("bodyweight",bw); $("bwInput").value=""; renderDash(); toast("Bodyweight logged — staying consistent."); };
$("deloadBtn").onclick=async()=>{ settings.sinceDeload=0; await sset("settings",settings); renderDash(); toast("Deload done — fresh and ready. Go again!"); };

// ================= workout =================
function renderSeg(){
  const p=activePlan(), seg=$("seg"); seg.innerHTML="";
  const ni=nextRotateIndex(p);
  p.workouts.forEach((w,i)=>{
    const s=document.createElement("div"); s.className="s"+(!freeMode && i===curWk?" active":"");
    s.innerHTML=(i===ni?'<span class="ndot"></span>':'')+esc(w.name);
    s.onclick=()=>{ freeMode=false; curWk=i; swaps={}; renderSeg(); renderWorkout(); };
    seg.appendChild(s);
  });
  const fs=document.createElement("div"); fs.className="s"+(freeMode?" active":"");
  fs.innerHTML=ICON.plus+"Free";
  fs.onclick=()=>{ freeMode=true; swaps={}; renderSeg(); renderFree(); };
  seg.appendChild(fs);
  const ab=document.createElement("div"); ab.className="s segabout";   // coach notes for the active plan, far right
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
    btns.push('<button type="button" class="cuebtn raise" data-i="'+xi+'" data-range="'+esc(s.over.range)+'">Raise target → '+esc(s.over.range)+'</button>');
    actions='<div class="cueact">'+btns.join('')+'</div>';
  }
  return { lastText, soft:s.soft, show:s.show, over:!!s.over, cue:'<div class="cue'+(s.soft?' soft':'')+(s.over?' over':'')+'">'+s.cue+actions+'</div>' };
}
function draftSig(){ return freeMode ? "free" : (activePlan().id + "|" + curWk); }
let _draftTimer=null;
// snapshot every set row currently on screen so nothing typed is lost on a re-render or reload
function captureDraft(){
  const sig=draftSig(), map={};
  document.querySelectorAll("#exlist .group").forEach(g=>{
    const name=g.dataset.ex; if(!name) return; const arr=[];
    g.querySelectorAll(".setrow").forEach(r=>{ const w=r.querySelector(".w"), rp=r.querySelector(".r"); arr.push({w:w?w.value:"", r:rp?rp.value:""}); });
    map[name]=arr;
  });
  if(Object.keys(map).length===0) return; // nothing on screen (e.g. mid-unload) — don't clobber a saved draft
  draft[sig]={ t:Date.now(), s:map };
  clearTimeout(_draftTimer); _draftTimer=setTimeout(()=>{ sset("draft", draft); }, 350);
  liveTick();   // if broadcasting, stream the latest set to watchers (throttled)
  renderSessionRose();   // keep the bottom-of-page balance rose in step with what's logged
}
// restore a workout's in-progress entries (values + added/removed set rows) after a render
function applyDraft(){
  const sig=draftSig(), d=draft[sig]; if(!d || !d.s) return;
  if(Date.now()-(d.t||0) > 20*3600*1000){ delete draft[sig]; sset("draft", draft); return; } // forget day-old drafts
  document.querySelectorAll("#exlist .group").forEach(g=>{
    const name=g.dataset.ex, arr=d.s[name]; if(!arr) return;
    while(g.querySelectorAll(".setrow").length < arr.length){
      const n=g.querySelectorAll(".setrow").length+1, tmp=document.createElement("div");
      tmp.innerHTML=freeSetRow(n, null, name); g.querySelector(".freeadd").insertAdjacentElement("beforebegin", tmp.firstChild);
    }
    let els=g.querySelectorAll(".setrow");
    for(let i=els.length-1;i>=arr.length;i--) els[i].remove();
    g.querySelectorAll(".setrow").forEach((r,i)=>{ r.querySelector(".sn").textContent=i+1;
      const dv=arr[i]||{}, w=r.querySelector(".w"), rp=r.querySelector(".r");
      if(w) w.value=dv.w||""; if(rp) rp.value=dv.r||"";
      if((w&&w.value)||(rp&&rp.value)) updateSetVol(r, name);
    });
  });
}
// persist immediately when the app is hidden/closed (iOS may suspend before the debounced save fires)
function flushDraft(){ try{ captureDraft(); clearTimeout(_draftTimer); sset("draft", draft); }catch(e){} }
window.addEventListener("pagehide", flushDraft);
document.addEventListener("visibilitychange", ()=>{ if(document.visibilityState==="hidden") flushDraft(); });
function renderWorkout(){
  if(typeof renderTravelBanner==="function") renderTravelBanner();
  const p=activePlan(), w=p.workouts[curWk], list=$("exlist"); list.innerHTML="";
  // recompute the auto-rotation pick only when the slot (or its completion count) changes, so a manual
  // swap or "keep" re-render doesn't reshuffle the variety or wipe the user's pins.
  const rsig=p.id+"#"+curWk+"#"+((settings.slotDone&&settings.slotDone[p.id+"|"+w.name])||0);
  if(rsig!==_rotSig){ _rotSig=rsig; applyRotation(); }
  $("planSub").textContent = planMeta(p);
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
    const linksHTML='<button class="lnkic menubtn" data-i="'+xi+'" data-ex="'+esc(name)+'" data-swap="'+(canSwap?1:0)+'" aria-label="More actions"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="12" cy="19" r="1.9"/></svg></button>';
    const mcol=MCOLOR[muscleFor(name)[0]]||"#888888";
    const mp=[];
    if(e.t) mp.push('<button type="button" class="tg tgedit" data-i="'+xi+'" title="Edit sets &amp; reps">'+esc(e.t)+' '+ICON.pencil+'</button>');
    if(meta.lastText) mp.push('<span>'+meta.lastText+'</span>');
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
    for(let i=0;i<e.s;i++){ const pv=prev[i];
      const pvVol = pv ? setVol(name, pv.w, pv.r) : 0;
      const pw = pv&&pv.w!=null?esc(pv.w):'', pr = pv&&pv.r!=null?esc(pv.r):'';
      rows+=`<div class="setrow${pvVol?'':' novol'}" data-pvol="${pvVol||''}" data-pw="${pw}" data-pr="${pr}"><span class="sn">${i+1}</span>
        <input class="w" type="text" inputmode="decimal" autocomplete="off" placeholder="${pv&&pv.w?esc(pv.w):'kg'}">
        <span class="x">×</span>
        <input class="r" type="number" inputmode="numeric" placeholder="${pv&&pv.r?esc(pv.r):'reps'}">
        <span class="prtag">PR</span><span class="eq">=</span><span class="vol${pvVol&&(pw||pr)?' fillable':''}" title="${pvVol&&(pw||pr)?'Tap to fill last time':''}">${pvVol?fmtVol(pvVol):''}</span><button class="setdel" aria-label="Remove set">${ICON.minus}</button></div>`;
    }
    g.innerHTML=head+rows+'<div class="freeadd"><a class="demo addset">'+ICON.plus+'add set</a></div>'; list.appendChild(g);
    g.querySelector(".addset").onclick=()=>{ const n=g.querySelectorAll(".setrow").length+1;
      const tmp=document.createElement("div"); tmp.innerHTML=freeSetRow(n, null, name);
      g.querySelector(".freeadd").insertAdjacentElement("beforebegin", tmp.firstChild); captureDraft(); };
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
    let h='<div class="pad" style="padding:16px 20px;"><div class="injfill-h">'+head+'</div>';
    if(sugg.length){
      h+='<p class="injfill-sub">Train an unaffected area instead — picked from your weak spots, focus and where you\'re light this week:</p>'
        +'<div class="injfill-list">'+sugg.map(s=>'<button class="injfill-add" data-add="'+esc(s.name)+'">'+ICON.plus
          +'<span>'+esc(s.name)+'</span><small>'+esc(MSHORT[BUILD_MG[s.key]]||s.key)+'</small></button>').join('')+'</div>';
    } else h+='<p class="injfill-sub">Pick a different day from the tabs above, or take this one as rest.</p>';
    h+='</div>';
    card.innerHTML=h; list.appendChild(card);
    card.querySelectorAll(".injfill-add").forEach(b=> b.onclick=()=> addToCurrentWorkout(b.dataset.add));
  }
  const addBtn=document.createElement("button"); addBtn.className="btn tinted wide"; addBtn.style.marginTop="2px";
  addBtn.innerHTML=ICON.plus+"Add exercise"; addBtn.onclick=()=>openAdd("plan"); list.appendChild(addBtn);
  applyDraft();
  updateRepeatBtn();
  updateLiveRow();
  updateGymRow();
  renderSessionRose();
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
    labels:true, labelFont:"600 11px -apple-system,system-ui,sans-serif", labelGap:10, labelColor:g=>MCOLOR[g]||"#888" });
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
  });
  if(filled){ captureDraft(); toast("Filled in last time — tweak any, then Finish"); }
  else toast("No previous numbers to copy yet");
}
function updateRepeatBtn(){ const btn=$("repeatBtn"); if(!btn) return;
  const any=[...document.querySelectorAll("#exlist .group")].some(g=> g.dataset.ex && last[g.dataset.ex] && last[g.dataset.ex].length);
  btn.style.display = any ? "" : "none";
}
$("repeatBtn").onclick=repeatLastWorkout;
$("saveBtn").onclick=async()=>{
  const savedSig=draftSig();
  const p=activePlan(); const w = freeMode ? null : p.workouts[curWk]; let logged=0, beaten=0;
  // travel tag: 1 = travelling with gym access, 2 = travelling without a gym, 0 = home (normal)
  const tvCode = settings.travelMode==="gym"?1 : settings.travelMode==="nogym"?2 : 0;
  const session={ name: freeMode?"Free workout":(w?w.name:"Workout"), sub:"", totalVol:0, sets:0, beaten:0, top:null, mtot:{}, exercises:[], date:Date.now() };
  document.querySelectorAll("#exlist .group").forEach(g=>{
    const name=g.dataset.ex, pt=topSet(last[name]), sets=[];
    g.querySelectorAll(".setrow").forEach(r=>{ const wv=r.querySelector(".w").value.trim(), rv=r.querySelector(".r").value.trim();
      if(rv!=="") sets.push({w:wv,r:rv}); });
    if(sets.length){ logged++; const nt=topSet(sets);
      if(pt&&nt&&(parseFloat(nt.w)||0)>(parseFloat(pt.w)||0)) beaten++; last[name]=sets;
      const vol=sets.reduce((a,s)=>a+setVol(name, s.w, s.r),0);
      session.totalVol+=vol; session.sets+=sets.length;
      const tw=parseFloat(nt.w)||0, tr=parseInt(nt.r)||0;
      if(!session.top || tw>session.top.w) session.top={name, w:tw, r:tr};
      muscleFor(name).forEach((grp,gi)=> session.mtot[grp]=(session.mtot[grp]||0)+vol*(gi===0?1:0.5));
      session.exercises.push({ name, sets: sets.map(s=>({w:s.w, r:s.r})) });
      const he={d:Date.now(), w:nt.w, r:nt.r, n:sets.length, v:Math.round(vol)}; if(tvCode) he.tv=tvCode;
      (hist[name]=hist[name]||[]).push(he); }
  });
  if(!logged){ toast(freeMode?"Add an exercise and log a set":"Log at least one set first"); return; }
  await sset("lastsets",last);
  await sset("history",hist);
  const mins=Math.round(tmrElapsed()/60);
  if(mins>0){ settings.timeTotal=(settings.timeTotal||0)+mins; }
  session.mins=mins; session.beaten=beaten; session.sub=logged+" exercise"+(logged>1?"s":"");
  tmrReset(); restStop(); endLive(true);   // close any live broadcast; the finished workout posts to the feed below
  // Only a session with real substance (>= QUALIFY_SETS sets) counts toward the lifetime tally,
  // achievements, and the share/feed. The work is still logged below either way (history, PRs, rings-by-set).
  const qualifies = session.sets >= QUALIFY_SETS;
  if(qualifies){ settings.sessions++;
    // travel-vs-home tally, so the user can isolate how travelling shifts their training
    const tkey = tvCode===1?"gym" : tvCode===2?"nogym" : "home";
    const ts=settings.travelStats=settings.travelStats||{};
    const slot=ts[tkey]=ts[tkey]||{n:0,sets:0,vol:0,mins:0};
    slot.n++; slot.sets+=session.sets; slot.vol+=Math.round(session.totalVol); slot.mins+=mins;
  }
  settings.beatTotal = (settings.beatTotal||0) + beaten;
  if(freeMode){ settings.sinceDeload++; }
  else if(w.rotate!==false){
    settings.sinceDeload++;
    const rl=rotateList(p), idx=rl.indexOf(w);
    settings.pointers[p.id]=(idx+1)%rl.length;
    settings.slotDone=settings.slotDone||{};                 // advance this slot's variety rotation
    const sk=p.id+"|"+w.name; settings.slotDone[sk]=(settings.slotDone[sk]||0)+1;
  }
  const fresh=checkAchievements();
  await sset("settings",settings);
  delete draft[savedSig]; await sset("draft", draft);
  swaps={};
  if(freeMode){ renderSeg(); renderFree(); renderDash(); }
  else { const ni=nextRotateIndex(p); if(w.rotate!==false && ni>=0) curWk=ni; renderSeg(); renderWorkout(); renderDash(); }
  if(beaten>0){ celebrate(true); haptic([0,60,40,120]); toast("New best! You beat "+beaten+" lift"+(beaten>1?"s":"")+" — keep climbing.", true); }
  else if(qualifies){ celebrate(false); haptic([0,30,40,70,40,130]); }   // every finished workout gets a buzz + confetti
  if(qualifies){
    openShareTile(session);
    cloudPublish(session);   // post a summary to the friends feed (no raw weights), if signed in + sharing on
  } else if(beaten===0){     // a token effort — log it, but be honest that it won't fill the week's Sessions ring
    const more=QUALIFY_SETS-session.sets;
    toast("Logged "+session.sets+" set"+(session.sets===1?"":"s")+" — "+more+" more and it counts as a full session this week.");
  }
  cloudTouchWorkout();     // reset the 2-day "train at home" reminder timer (any movement keeps the streak alive)
  if(fresh.length) setTimeout(()=>celebrateAch(fresh), beaten>0?1300:1200);
};

// confetti burst. big=true (a new PR) → more pieces, gold-leaning palette, wider spread, longer fall.
function celebrate(big){
  if(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const N=big?72:48;
  const colors=big ? ["#ffd60a","#fbbf24","#f5a040","#fff3c4","#ff9f1c","#ff375f","#e8820c"]
                   : ["#f08020","#f5a040","#ff375f","#ffd60a","#fb923c","#fbbf24","#e8820c"];
  const c=document.createElement("div"); c.className="confetti";
  for(let i=0;i<N;i++){ const s=document.createElement("i");
    s.style.left=Math.random()*100+"%";
    s.style.background=colors[i%colors.length];
    s.style.animationDelay=(Math.random()*0.3)+"s";
    s.style.setProperty("--dx",((Math.random()*2-1)*(big?210:150))+"px");
    s.style.setProperty("--sz",(0.7+Math.random()*(big?1.2:0.8)).toFixed(2));   // size variety = depth
    s.style.setProperty("--dur",(1.3+Math.random()*0.9).toFixed(2)+"s");        // staggered fall speed
    if(Math.random()>.5) s.style.borderRadius="50%";
    c.appendChild(s);
  }
  document.body.appendChild(c);
  setTimeout(()=>c.remove(), big?2600:2200);
}

// ================= plans sheet =================
function openSheet(s){ $("scrim"+s).classList.add("show"); $("sheet"+s).classList.add("show"); }
function closeSheet(s){ $("scrim"+s).classList.remove("show"); $("sheet"+s).classList.remove("show"); }
$("openPlans").onclick=()=>{ renderPlanList(); openSheet("Plans"); };
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
$("openSettings").onclick=()=>{ renderDash(); renderAccount(); if($("setRestDefault")) $("setRestDefault").value=tmrFmt(settings.restSec||90); renderTipSeg(); renderTravel(); openSheet("Settings"); };
$("settingsClose").onclick=()=>closeSheet("Settings");
if($("setRestDefault")) $("setRestDefault").onchange=e=>{ const sec=parseRest(e.target.value); if(sec){ settings.restSec=Math.max(5,Math.min(1800,Math.round(sec))); sset("settings",settings); } e.target.value=tmrFmt(settings.restSec||90); };
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
  if(typeof cancelPending==="function") cancelPending();   // drop any unconfirmed objective/focus change on navigation
  if(window.__revealBar) window.__revealBar();             // always show the tab bar when switching tabs
  document.querySelectorAll(".page").forEach(p=> p.classList.toggle("active", p.dataset.tab===name));
  document.querySelectorAll(".tabitem").forEach(t=> t.classList.toggle("active", t.dataset.tab===name));
  if(window.__pageGo) window.__pageGo(name); else { try{ window.scrollTo(0,0); }catch(e){} }
  if(name==="me"){
    $("goalStart").value=settings.goalStart||""; $("goalTarget").value=settings.goalTarget||"";
    $("heightIn").value=settings.heightCm||""; $("bfIn").value=settings.bodyfatPct||""; $("nameIn").value=settings.name||"";
    renderDash(); renderAccount(); animateProgBars();
  } else if(name==="workout"){
    coach("workout","Tap a set to log your weight × reps. The coach tracks each exercise across all your plans, so progress carries over.");
  } else if(name==="overview"){
    renderOverview(); renderAccount();
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
    if(n.matches && n.matches('input,textarea,select,canvas,button,[data-act="grip"],.seg,.sexseg,.appearance,.chips,.tabbar,.sheet')) return true;
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
  const h=parseFloat($("heightIn").value), bf=parseFloat($("bfIn").value);
  settings.heightCm = (!isNaN(h)&&h>=100&&h<=250) ? h : null;
  settings.bodyfatPct = (!isNaN(bf)&&bf>=2&&bf<=60) ? bf : null;
  await sset("settings",settings); renderDash(); toast("Body details saved");
};
document.querySelectorAll("#sexSeg .s").forEach(s=> s.onclick=async()=>{ settings.sex=s.dataset.sex; await sset("settings",settings); renderDash(); });
$("nameIn").onchange=async()=>{ settings.name=$("nameIn").value.trim().slice(0,24); await sset("settings",settings); };

function renderPlanList(){
  const wrap=$("planList"); wrap.innerHTML="";
  plans.forEach(p=>{
    const active=p.id===settings.activePlanId;
    const sc=planScores(p);
    const row=document.createElement("div"); row.className="planrow";
    row.innerHTML=`<div class="check">${active?'✓':''}</div>
      <div class="info"><div class="nm">${esc(p.name)}</div>
        <div class="meta">${esc(planMeta(p))}</div>
        <div class="pscores"><span class="psc pscbtn" data-bal="1"><b>Balance</b> ${sc.balance}<small>/5</small> ›</span><span class="psc"><b>Hypertrophy</b> ${sc.hyp}<small>/5</small></span></div></div>
      <button class="edit share">Share</button><button class="edit">Edit</button>`;
    row.querySelector(".info").onclick=async(ev)=>{ if(ev.target.closest(".pscbtn")) return;   // let the Balance chip open the radar instead of switching
      settings.activePlanId=p.id; settings.planStartAt=Date.now(); freeMode=false; swaps={}; const ni=nextRotateIndex(p); curWk=ni>=0?ni:0;
      await sset("settings",settings); renderAll(); closeSheet("Plans"); toast("Switched to "+p.name); };
    row.querySelector(".pscbtn").onclick=(ev)=>{ ev.stopPropagation(); openMusclesFor(p.id); };
    row.querySelector(".share").onclick=()=>openShare(p);
    row.querySelector(".edit:not(.share)").onclick=()=>{ closeSheet("Plans"); openEditor(p); };
    wrap.appendChild(row);
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
  openSheet("Share");
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
  ta._msg='My Yalla '+(all?'plan':'workout'+(sel.length>1?'s':''))+' “'+obj.name+'”. Open Yalla → Plans → Import a plan, then paste:\n\n'+code;
}
$("shareClose").onclick=()=>closeSheet("Share");
$("scrimShare").onclick=()=>closeSheet("Share");
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
$("importBtn").onclick=async()=>{
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
const MGROUPS=["Chest","Lats","Upper Back","Lower Back","Front Delts","Side Delts","Rear Delts","Biceps","Triceps","Forearms","Quads","Adductors","Hamstrings","Glutes","Calves","Core","Neck"];
// NO_TARGET muscles show a wedge when trained but carry NO weekly-volume target: never flagged as
// under-trained or chased by the plan builder / growth signal. Neck (posture moves), plus the smaller
// detail groups — Lower Back (gets ample work from compounds), Forearms and Adductors (grip/inner-thigh
// accessories most people don't program directly). They're still visible on the radar and emphasizable
// in the builder; they're just not part of the "are you under-training this?" model.
const NO_TARGET=new Set(["Neck","Lower Back","Forearms","Adductors"]);
const MSHORT={Chest:"Chest",Back:"Back",Shoulders:"Delts",Biceps:"Biceps",Triceps:"Triceps",Quads:"Quads",Hamstrings:"Hams",Glutes:"Glutes",Calves:"Calves",Core:"Core","Front Delts":"F·Delt","Side Delts":"S·Delt","Rear Delts":"R·Delt",Neck:"Neck",Lats:"Lats","Upper Back":"U·Back","Lower Back":"L·Back",Forearms:"Forearm",Adductors:"Adduct"};
let musWindow=7, musMetric="sets", musSrc="log", musVolMode="total";
// Evidence-based weekly volume targets (fractional sets per muscle per week).
// Dose-response meta-regressions: benefits accrue across ~10+ hard sets/muscle/wk; ~4–6 is a rough
// lower bound (MEV) below which most trainees under-stimulate growth. One baseline for all groups —
// real per-muscle landmarks differ, but a single target keeps the read honest and legible.
const WEEKLY_SET_TARGET=10, WEEKLY_SET_MIN=6;
// Maintenance volume (MV): size/strength built by a program are held on as little as ~1/3 of the volume
// that built them (Bickel 2011); below roughly a third of the growth dose, fibres slowly atrophy (Mujika 2000).
// ~1/3 of the ~10-set target → a 3-set/wk floor; under this, a previously-trained muscle reads as "shrinking".
const WEEKLY_SET_MAINT=3;
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
$("meBalance").onclick=()=>{ openMuscles(); };
$("musClose").onclick=()=>closeSheet("Mus");
$("scrimMus").onclick=()=>closeSheet("Mus");
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
  h+='<p class="ovp" style="margin:0 2px 4px;color:var(--l3);">'+esc(planMeta(plan))+'</p>';
  h+='<div class="ed-label">Focus</div><p class="ovp">Built for <b>'+esc(obj.label)+'</b>. Run it on a rolling cycle and let the same exercises progress over time.</p>';
  h+='<div class="ed-label">The split</div><p class="ovp"><b>'+esc(sp.type)+'</b> — '+esc(sp.why)+'</p>';
  h+='<div class="ed-label">What I weighted it for</div><p class="ovp">Hypertrophy <b>'+sc.hyp+'/5</b> and balance <b>'+sc.balance+'/5</b> — '+hypTxt+' with '+balTxt+'.</p>';
  h+='<div class="ed-label">Things to look at</div><ul class="ovtodo">'+look.map(x=>'<li>'+x+'</li>').join('')+'</ul>';
  $("aboutTitle").textContent=plan.name;
  $("aboutBody").innerHTML=h;
  openSheet("About");
}
$("aboutClose").onclick=()=>closeSheet("About");
$("scrimAbout").onclick=()=>closeSheet("About");
document.querySelectorAll("#musSeg .s").forEach(s=> s.onclick=()=>{ musWindow=+s.dataset.d; renderMuscles(); });
document.querySelectorAll("#musMetric .s").forEach(s=> s.onclick=()=>{ musMetric=s.dataset.m; renderMuscles(); });
document.querySelectorAll("#musVolMode .s").forEach(s=> s.onclick=()=>{ musVolMode=s.dataset.vm; renderMuscles(); });
const MUS_TIP="This radar shows weekly sets per muscle against the ~10-set growth target. Switch the source to compare your logs and each plan.";
function openMuscles(){ if(!plans.some(p=>p.id===musSrc)) musSrc="log"; renderMuscles(); openSheet("Mus"); coach("muscles",MUS_TIP); }
function openMusclesFor(id){ if(plans.some(p=>p.id===id)){ musSrc=id; renderMuscles(); openSheet("Mus"); coach("muscles",MUS_TIP); } }  // plan-level entry
function buildSrc(){
  const wrap=$("musSrc"); wrap.innerHTML="";
  const mk=(val,label)=>{ const s=document.createElement("div"); s.className="s"+(musSrc===val?" active":"");
    s.textContent=label; s.dataset.src=val; s.onclick=()=>{ musSrc=val; renderMuscles(); }; wrap.appendChild(s); };
  mk("log","Logged");
  plans.forEach(p=> mk(p.id, p.name));
}
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
function drawRadar(totals, canvasId, target, noLabels){
  const c=$(canvasId||"musRadar"); if(!c) return; const ctx=c.getContext("2d"), W=c.width, H=c.height; ctx.clearRect(0,0,W,H);
  const det=expandLegacyMtot(totals||{}), G=roseGroups(musExpanded), n=G.length;
  const cx=W/2, cy=H/2, R=W*(noLabels?0.42:0.33);
  const cs=getComputedStyle(document.documentElement);
  const accent=(cs.getPropertyValue("--accent")||"#0a84ff").trim();
  const lab=(cs.getPropertyValue("--l2")||"#888").trim();
  const grid="rgba(128,128,128,.22)";
  const val=g=>radarVal(det, g, target);
  const max=Math.max(1, ...G.map(val));
  const norm = target ? (g=>Math.min(1,val(g)/target)) : (g=>val(g)/max);
  // Coxcomb rose — same wedge style as the feed/builder. In target mode the rim is the weekly
  // "enough volume" line, so short wedges are the muscles still under target (gaps stay visible).
  ctx.strokeStyle=grid; ctx.lineWidth=1.5;
  [0.5,1].forEach(f=>{ ctx.beginPath(); ctx.arc(cx,cy,R*f,0,Math.PI*2); ctx.stroke(); });
  if(target){ ctx.strokeStyle=accent; ctx.globalAlpha=.45; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.stroke(); ctx.globalAlpha=1; }
  const half=Math.PI/n - 0.05;
  // Auxiliary (NO_TARGET) muscles have no weekly goal, so against the target ring they'd read as
  // permanent gaps. Match the small roses: show an aux spoke/label only when it was actually trained.
  const showSpoke=g=> val(g)>0 || !NO_TARGET.has(g);
  G.forEach((g,i)=>{ if(!showSpoke(g)) return; const rr=R*norm(g); if(rr<=0.5) return;
    const a=(-90+i*360/n)*Math.PI/180, col=MCOLOR[g]||accent;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,rr,a-half,a+half); ctx.closePath();
    ctx.fillStyle=col; ctx.globalAlpha=.30; ctx.fill(); ctx.globalAlpha=1; ctx.lineWidth=2; ctx.strokeStyle=col; ctx.stroke(); });
  if(noLabels) return;
  ctx.fillStyle=lab; ctx.font="600 29px -apple-system,sans-serif"; ctx.textBaseline="middle";
  G.forEach((g,i)=>{ if(!showSpoke(g)) return; const a=(-90+i*360/n)*Math.PI/180, x=cx+(R+52)*Math.cos(a), y=cy+(R+52)*Math.sin(a), co=Math.cos(a);
    ctx.textAlign = Math.abs(co)<0.3 ? "center" : (co>0?"left":"right");
    const isParent=SUBGROUPS[g] && !musExpanded.has(g);
    ctx.fillText((MSHORT[g]||g)+(isParent?" ›":""), x, y); });
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
function renderMuscles(){
  buildSrc();
  const isLog = musSrc==="log";
  $("musSeg").style.display = isLog ? "" : "none";
  $("musMetric").style.display = isLog ? "" : "none";
  if(isLog) renderGrowth(); else { const gb=$("musGrowth"); if(gb) gb.style.display="none"; }   // growth signal reads logged history, not plan projections
  let totals, byEx;
  if(isLog){
    document.querySelectorAll("#musSeg .s").forEach(s=> s.classList.toggle("active", +s.dataset.d===musWindow));
    document.querySelectorAll("#musMetric .s").forEach(s=> s.classList.toggle("active", s.dataset.m===musMetric));
    document.querySelectorAll("#musVolMode .s").forEach(s=> s.classList.toggle("active", s.dataset.vm===musVolMode));
    ({totals, byEx}=muscleVolume(musWindow||null, musMetric, musVolMode));
  } else {
    const plan=plans.find(p=>p.id===musSrc)||activePlan();
    ({totals, byEx}=planVolume(plan));
  }
  const useTarget = isLog && musMetric==="sets";   // sets/week vs a weekly-volume target
  const useKg = isLog && musMetric==="vol";
  if(isLog) $("musIntro").textContent = useTarget
    ? "Sets per muscle per week vs a ~"+WEEKLY_SET_TARGET+"-set target (the outer ring). Reaching the ring means that muscle is getting enough weekly volume to grow; a dent means it's under-dosed."
    : "Total load moved per muscle in this window — bigger means more volume, scaled to your top group.";
  else $("musIntro").textContent="Projected balance if you follow “"+(plans.find(p=>p.id===musSrc)||activePlan()).name+"” — planned sets across one full cycle.";
  const showVolMode = useKg;
  $("musVolMode").style.display = showVolMode ? "" : "none";
  $("musVolNote").style.display = showVolMode ? "" : "none";
  const view = useTarget ? weeklyEquiv(totals, musWindow) : totals;
  drawRadar(view, "musRadar", useTarget ? WEEKLY_SET_TARGET : null);
  const groups=Object.keys(view).filter(g=>view[g]>0).sort((a,b)=>view[b]-view[a]);
  const max=Math.max(1, ...groups.map(g=>view[g]));
  const bars=$("musBars");
  if(!groups.length){ bars.innerHTML='<p class="freehint">'+(isLog?'No sets logged in this window yet — finish a workout to see your split.':'This plan has no exercises yet.')+'</p>'; }
  else {
    bars.innerHTML="";
    groups.forEach(g=>{
      const v=view[g];
      const pct = useTarget ? Math.min(100, Math.round(v/WEEKLY_SET_TARGET*100)) : Math.round(v/max*100);
      const valTxt = useTarget ? (round1(v)+"/wk") : (useKg ? fmtKg(v) : round1(v));
      const row=document.createElement("div"); row.className="mrow"+(useTarget && v<WEEKLY_SET_MIN?" under":"");
      row.innerHTML='<div class="mlab">'+g+'</div>'
        +'<div class="mbarwrap"><div class="mbar" style="width:'+pct+'%;background:'+(MCOLOR[g]||"#888")+'"></div></div>'
        +'<div class="mval">'+valTxt+'</div>';
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
  if(isLog) $("musMethod").innerHTML += " The <b>growth signal</b> above reads each muscle's recent weekly sets against a growth dose (~"+WEEKLY_SET_MIN+"–"+WEEKLY_SET_TARGET+") and a maintenance floor (~"+WEEKLY_SET_MAINT+"), then checks whether its weekly volume is trending up, flat or down — growth needs both an adequate dose and progressive overload; below maintenance, muscle is slowly lost. It estimates the training stimulus, not measured size.";
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
}
document.querySelectorAll("#appSeg .s").forEach(s=>{
  s.onclick=async()=>{ settings.theme=s.dataset.th; await sset("settings",settings); applyTheme(); };
});
try{ matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ()=>{ if((settings.theme||"auto")==="auto") applyTheme(); }); }catch(e){}

// ================= coach-tip cadence =================
function renderTipSeg(){
  const every = settings.tipEvery==null ? 3 : settings.tipEvery;
  document.querySelectorAll("#tipSeg .s").forEach(s=> s.classList.toggle("active", +s.dataset.te===every));
}
document.querySelectorAll("#tipSeg .s").forEach(s=>{
  s.onclick=async()=>{ settings.tipEvery=+s.dataset.te; await sset("settings",settings); renderTipSeg(); };
});

// ================= travel mode (global; tags sessions home / travel+gym / travel-no-gym) =================
const TRAVEL_LBL={ off:"Home", gym:"with gym access", nogym:"no gym" };
function renderTravelSeg(){
  const m = settings.travelMode || "off";
  document.querySelectorAll("#travelSeg .s").forEach(s=> s.classList.toggle("active", s.dataset.tv===m));
}
// banner on the workout page so it's obvious travel tagging is on (and easy to end)
function renderTravelBanner(){
  const b=$("travelBanner"); if(!b) return;
  const m=settings.travelMode||"off";
  if(m==="off"){ b.style.display="none"; return; }
  b.style.display="";
  $("travelBannerTxt").textContent = m==="gym" ? "Travel mode — with gym access" : "Travel mode — no gym";
}
function renderTravelBreakdown(){
  const box=$("travelBreakdown"); if(!box) return;
  const ts=settings.travelStats||{};
  const order=[["home","Home"],["gym","Travel · gym"],["nogym","Travel · no gym"]];
  const rows=order.filter(([k])=>ts[k]&&ts[k].n>0);
  if(rows.length<2){ box.innerHTML=""; return; }   // nothing to compare against until there's travel data
  let h='<div class="ed-label">Travel vs home</div><div class="tvbreak">';
  rows.forEach(([k,lab])=>{ const s=ts[k]; const perSets=(s.sets/s.n), perVol=Math.round(s.vol/s.n);
    h+='<div class="tvrow"><span>'+lab+'</span><span><b>'+s.n+'</b> session'+(s.n===1?'':'s')+' · <b>'+round1(perSets)+'</b> sets · <b>'+fmtKg(perVol)+'</b>/session</span></div>'; });
  h+='</div><p class="levelcap" style="margin:8px 4px 0;">Average sets &amp; load per session in each context — so you can see what travel really costs.</p>';
  box.innerHTML=h;
}
function renderTravel(){ renderTravelSeg(); renderTravelBanner(); renderTravelBreakdown(); }
if($("travelEnd")) $("travelEnd").onclick=async()=>{ settings.travelMode="off"; await sset("settings",settings); renderTravel(); toast("Back home — sessions log as normal."); };
document.querySelectorAll("#travelSeg .s").forEach(s=>{
  s.onclick=async()=>{ settings.travelMode=s.dataset.tv; await sset("settings",settings); renderTravel();
    toast(settings.travelMode==="off" ? "Back home — sessions log as normal." : "Travel mode on — "+TRAVEL_LBL[settings.travelMode].toLowerCase()+". Sessions tagged until you switch back."); };
});

// ================= free workout =================
function exerciseLibrary(){
  const set=new Set(LIBRARY);
  Object.keys(ALTS).forEach(k=>{ set.add(k); ALTS[k].forEach(a=>set.add(a)); });
  plans.forEach(p=>p.workouts.forEach(w=>w.ex.forEach(e=>{ set.add(e.n); (e.alts||[]).forEach(a=>set.add(a)); })));
  Object.keys(hist).forEach(n=>set.add(n));
  return [...set].filter(Boolean).sort((a,b)=>a.localeCompare(b));
}
function freeSetRow(i, pv, name){
  const pvVol = (pv && name) ? setVol(name, pv.w, pv.r) : 0;
  return '<div class="setrow'+(pvVol?'':' novol')+'" data-pvol="'+(pvVol||'')+'"><span class="sn">'+i+'</span>'
    +'<input class="w" type="text" inputmode="decimal" autocomplete="off" placeholder="'+(pv&&pv.w?esc(pv.w):'kg')+'">'
    +'<span class="x">×</span>'
    +'<input class="r" type="number" inputmode="numeric" placeholder="'+(pv&&pv.r?esc(pv.r):'reps')+'">'
    +'<span class="prtag">PR</span><span class="eq">=</span><span class="vol">'+(pvVol?fmtVol(pvVol):'')+'</span><button class="setdel" aria-label="Remove set">'+ICON.minus+'</button></div>';
}
function buildFreeGroup(name){
  const prev=last[name]||[];
  const g=document.createElement("div"); g.className="group"; g.dataset.ex=name;
  let rows=""; for(let i=0;i<3;i++) rows+=freeSetRow(i+1, prev[i], name);
  const meta=metaHTML(name, ""), eq=equipFor(name);
  const mcol=MCOLOR[muscleFor(name)[0]]||"#888888";
  const mp=[]; if(meta.lastText) mp.push('<span>'+meta.lastText+'</span>'); mp.push(scoreTag(name));
  const metaLine='<div class="exmeta">'+mp.join('<span class="dot">·</span>')+'</div>';
  g.innerHTML='<div class="pad" style="padding-bottom:0">'
    +'<div class="exhead"><span class="eqic tinted" style="background:'+hexAlpha(mcol,.15)+';color:'+mcol+'" title="'+esc(eq.label)+'">'+EQUIP[eq.key]+'</span><span class="nm">'+esc(name)+'</span>'
    +'<span class="lnks"><a class="lnkic info" data-ex="'+esc(name)+'" title="Info & demo">'+ICON.info+'</a></span>'
    +'<button class="freedel" title="Remove">×</button></div>'
    +metaLine+(meta.show?meta.cue:'')+'</div>'
    +rows+'<div class="freeadd"><a class="demo addset">'+ICON.plus+'add set</a></div>';
  g.querySelector(".freedel").onclick=()=>{ confirmAsk("Remove "+name+"?", "Remove", ()=>{ const sec=g.closest(".secgrp"); g.remove(); if(sec && !sec.querySelector(".group")) sec.remove(); captureDraft(); }); };
  g.querySelector(".addset").onclick=()=>{ const n=g.querySelectorAll(".setrow").length+1;
    const tmp=document.createElement("div"); tmp.innerHTML=freeSetRow(n,null,name);
    g.querySelector(".freeadd").insertAdjacentElement("beforebegin", tmp.firstChild); captureDraft(); };
  return g;
}
function renderFree(){
  if(typeof renderTravelBanner==="function") renderTravelBanner();
  $("planSub").textContent="Free workout — choose your exercises";
  const list=$("exlist"); list.innerHTML="";
  const hint=document.createElement("p"); hint.className="freehint";
  hint.textContent="A one-off session. Add any exercises you like — grouped by muscle, logged to history just like a plan workout.";
  list.appendChild(hint);
  const addBtn=document.createElement("button"); addBtn.className="btn tinted wide"; addBtn.id="addExBtn";
  addBtn.innerHTML=ICON.plus+"Add exercise"; addBtn.onclick=()=>openAdd("free"); list.appendChild(addBtn);
  const fd=draft["free"];
  if(fd && fd.s && (Date.now()-(fd.t||0) <= 20*3600*1000)){
    Object.keys(fd.s).forEach(name=>{ freeSection(sectionKeyFor(name)).appendChild(buildFreeGroup(name)); });
    applyDraft();
  } else if(fd){ delete draft["free"]; sset("draft", draft); }
  updateRepeatBtn();
  renderSessionRose();
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
  const mk=(key,label,color)=>{ const c=document.createElement("button"); c.className="chip"+((addFilter===key)?" on":"");
    c.innerHTML=(color?'<span class="cdot" style="background:'+color+'"></span>':'')+esc(label);
    c.onclick=()=>{ addFilter=key; renderAddList($("addSearch").value); }; wrap.appendChild(c); };
  mk(null,"All",null);
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
  if(exSort==="score"){
    let arr = addFilter ? (bySec[addFilter]||[]) : matches.slice();
    arr = arr.slice().sort((a,b)=> hScore(b).s-hScore(a).s || a.localeCompare(b));
    arr.slice(0,90).forEach(n=>{ const row=buildExRow(n); row.querySelector(".info").onclick=()=>chooseAdd(n); wrap.appendChild(row); });
    return;
  }
  const keys = (addFilter && bySec[addFilter]) ? [addFilter] : order;
  let shown=0;
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
  const row=document.createElement("div"); row.className="planrow exrow";
  row.innerHTML='<span class="eqic sm" title="'+esc(eq.label)+'">'+EQUIP[eq.key]+'</span>'
    +'<div class="info"><div class="nm"><span class="mdot" style="background:'+mcol+'"></span>'+esc(name)+'</div>'+(opts.meta?'<div class="meta">'+esc(opts.meta)+'</div>':'')+'</div>'
    +'<span class="scoretag">'+ICON.starF+hScore(name).s+'</span>'
    +(opts.checked?'<span class="swapcheck">✓</span>':'')
    +'<a class="lnkic inspect" title="Inspect">'+ICON.info+'</a>';
  row.querySelector(".inspect").onclick=(ev)=>{ ev.stopPropagation(); openInfo(name); };
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
    const xi=+btn.dataset.i, name=btn.dataset.ex, canSwap=btn.dataset.swap==="1";
    const items=[];
    if(canSwap) items.push({c:"swap", ic:ICON.swap, t:"Swap exercise", fn:()=>openSwap(xi)});
    items.push({c:"info", ic:ICON.info, t:"Info & demo", fn:()=>openInfo(name)});
    items.push({c:"rem danger", ic:ICON.trash, t:"Remove", fn:()=>removePlanExercise(xi)});
    pop.innerHTML=items.map((it,k)=>'<div class="mi '+it.c+'" data-k="'+k+'">'+it.ic+'<span>'+it.t+'</span></div>').join("");
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
// tap the previous-session volume to copy last time's weight × reps into an empty row
$("exlist").addEventListener("click", e=>{ const v=e.target.closest(".vol.fillable"); if(!v) return;
  const r=v.closest(".setrow"), g=v.closest(".group"); if(!r||!g) return;
  const wEl=r.querySelector(".w"), rEl=r.querySelector(".r");
  if((wEl&&wEl.value.trim())||(rEl&&rEl.value.trim())) return;   // only fill an untouched row
  const pw=r.dataset.pw||"", pr=r.dataset.pr||""; if(!pw&&!pr) return;
  if(wEl) wEl.value=pw; if(rEl) rEl.value=pr;
  if(!timer.running && timer.elapsed===0) tmrStart();
  updateSetVol(r, g.dataset.ex); captureDraft();
  if(navigator.vibrate) try{ navigator.vibrate(15); }catch(e){} });
function removeSetRow(r){
  if(!r) return; const g=r.closest(".group"); if(!g) return;
  const rows=g.querySelectorAll(".setrow");
  if(rows.length<=1){ const w=r.querySelector(".w"), rp=r.querySelector(".r");
    if(w) w.value=""; if(rp) rp.value=""; r.dataset.pvol=""; updateSetVol(r, g.dataset.ex); captureDraft(); return; }
  r.remove();
  g.querySelectorAll(".setrow .sn").forEach((sn,i)=> sn.textContent=i+1);
  captureDraft();
}
$("exlist").addEventListener("input", e=>{ if(!e.target.classList||(!e.target.classList.contains("w")&&!e.target.classList.contains("r"))) return;
  if(e.target.classList.contains("w")){ let v=e.target.value.replace(/,/g,".").replace(/[^0-9.]/g,""); const i=v.indexOf("."); if(i>=0) v=v.slice(0,i+1)+v.slice(i+1).replace(/\./g,""); if(v!==e.target.value) e.target.value=v; }
  if(!timer.running && timer.elapsed===0 && e.target.value.trim()!=="") tmrStart();
  const r=e.target.closest(".setrow"), g=e.target.closest(".group"); if(r&&g) updateSetVol(r, g.dataset.ex); captureDraft(); });
function updateSetVol(r, name){
  const wv=r.querySelector(".w").value.trim(), rv=r.querySelector(".r").value.trim(), vEl=r.querySelector(".vol");
  if(rv===""&&wv===""){ const pv=r.dataset.pvol; vEl.textContent=pv?fmtVol(+pv):""; vEl.classList.remove("live"); vEl.classList.toggle("fillable", !!pv && !!(r.dataset.pw||r.dataset.pr)); r.classList.toggle("novol", !pv); setRowPR(r,false); return; }
  const vol=setVol(name, wv, rv);
  vEl.textContent = vol?fmtVol(vol):""; vEl.classList.toggle("live", vol>0); vEl.classList.remove("fillable"); r.classList.toggle("novol", !vol);
  const best=bestVol(name);
  setRowPR(r, vol>0 && best>0 && vol>best);
}
function setRowPR(r, on){
  const was=r.classList.contains("pr");
  r.classList.toggle("pr", on);
  if(on && !was){ if(navigator.vibrate) try{ navigator.vibrate([0,55,45,90]); }catch(e){} prCelebrate(r); }
}
function prCelebrate(r){
  if(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const vEl=r.querySelector(".vol"); if(!vEl) return;
  const rect=vEl.getBoundingClientRect(), cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
  const colors=["#f5a040","#ffd60a","#fb923c","#f08020"];
  const wrap=document.createElement("div"); wrap.className="prspark";
  for(let i=0;i<7;i++){ const s=document.createElement("i");
    s.style.left=cx+"px"; s.style.top=cy+"px"; s.style.background=colors[i%colors.length];
    const ang=(i/7)*Math.PI*2, dist=18+Math.random()*16;
    s.style.setProperty("--dx",Math.cos(ang)*dist+"px"); s.style.setProperty("--dy",Math.sin(ang)*dist+"px");
    wrap.appendChild(s); }
  document.body.appendChild(wrap); setTimeout(()=>wrap.remove(),750);
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
  swapIdx=xi; swapScope="today"; const e=activePlan().workouts[curWk].ex[xi];
  $("swapTitle").textContent="Swap: "+e.n;
  document.querySelectorAll("#swapScope .s").forEach(s=> s.classList.toggle("active", s.dataset.scope==="today"));
  syncLevelSeg(); renderSwapList(); openSheet("Swap");
}
function renderSwapList(){
  const e=activePlan().workouts[curWk].ex[swapIdx]; if(!e) return;
  const cur=dispName(e,swapIdx), wrap=$("swapList"); wrap.innerHTML="";
  let opts=swapOptions(e).filter(o=> o===e.n || levelAllows(o));
  if(exSort==="score") opts=opts.slice().sort((a,b)=> hScore(b).s-hScore(a).s || a.localeCompare(b));
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
  b.innerHTML='🩹 <b>'+verb+' '+esc(listWords(inj.map(k=>INJ_LABEL[k]||k)))+'</b> · '+note+' <span class="injmanage">Manage ›</span>';
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
  return '<div class="seg appearance injsev" data-inj="'+k+'">'+[1,2,3].map(n=>{ const l=SEV_LABEL[n];
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
  g.querySelectorAll(".setrow").forEach(r=>{ const wEl=r.querySelector(".w"); if(wEl && !wEl.value.trim()){ wEl.value=wv; updateSetVol(r, g.dataset.ex); any=true; } });
  if(any){ if(!timer.running && timer.elapsed===0) tmrStart(); captureDraft(); toast("Loaded "+wv+"kg — chase the lower end of your range."); } });
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
    listEl.innerHTML='<p style="color:var(--l3);font-size:14px;padding:8px 4px;">Log this lift and your top set will plot here over time.</p>';
  }
  openSheet("Chart");
}
function drawExChart(data){
  const c=$("exChart"), ctx=c.getContext("2d"), W=c.width, H=c.height, P=48; ctx.clearRect(0,0,W,H);
  if(!data.length){ ctx.fillStyle="#636366"; ctx.font="26px -apple-system,sans-serif"; ctx.textAlign="center";
    ctx.fillText("No history yet",W/2,H/2); ctx.textAlign="left"; return; }
  const hasW=data.some(d=>parseFloat(d.w)>0);
  const vals=data.map(d=> hasW?(parseFloat(d.w)||0):(parseFloat(d.r)||0));
  const unit=hasW?"kg (top set)":"reps (top set)";
  let mn=Math.min(...vals), mx=Math.max(...vals);
  if(mn===mx){ mn-=1; mx+=1; } const pad=(mx-mn)*0.18; mn-=pad; mx+=pad; if(mn<0)mn=0;
  const n=data.length;
  const x=i=> n<2? W/2 : P+(i/(n-1))*(W-P-20);
  const y=v=> H-P-((v-mn)/(mx-mn))*(H-P-30);
  ctx.lineWidth=1; ctx.font="20px -apple-system,sans-serif";
  for(let g=0;g<=2;g++){ const v=mn+(mx-mn)*(g/2), yy=y(v);
    ctx.strokeStyle="rgba(84,84,88,.4)"; ctx.beginPath(); ctx.moveTo(P,yy); ctx.lineTo(W-20,yy); ctx.stroke();
    ctx.fillStyle="#98989e"; ctx.fillText(Math.round(v)+'', 8, yy+6); }
  const ac=accentHex();
  const grad=ctx.createLinearGradient(0,0,0,H); grad.addColorStop(0,hexAlpha(ac,.35)); grad.addColorStop(1,hexAlpha(ac,0));
  ctx.beginPath(); data.forEach((d,i)=>{ const px=x(i),py=y(vals[i]); i?ctx.lineTo(px,py):ctx.moveTo(px,py); });
  ctx.lineTo(x(n-1),H-P); ctx.lineTo(x(0),H-P); ctx.closePath(); ctx.fillStyle=grad; ctx.fill();
  ctx.strokeStyle=ac; ctx.lineWidth=3.5; ctx.lineJoin="round"; ctx.beginPath();
  data.forEach((d,i)=>{ const px=x(i),py=y(vals[i]); i?ctx.lineTo(px,py):ctx.moveTo(px,py); }); ctx.stroke();
  ctx.fillStyle=ac; data.forEach((d,i)=>{ ctx.beginPath(); ctx.arc(x(i),y(vals[i]),5,0,7); ctx.fill(); });
  ctx.fillStyle="#636366"; ctx.textAlign="right"; ctx.fillText(unit,W-20,26); ctx.textAlign="left";
}

// ================= other training (external + activities) =================
const MUSCLE_TARGETS={
  Push:["Chest","Front Delts","Side Delts","Triceps"], Pull:["Back","Rear Delts","Biceps"],
  Upper:["Chest","Back","Front Delts","Side Delts","Rear Delts","Biceps","Triceps"],
  Lower:["Quads","Hamstrings","Glutes","Calves"],
  "Full body":["Chest","Back","Front Delts","Side Delts","Rear Delts","Biceps","Triceps","Quads","Hamstrings","Glutes","Calves","Core"],
  Chest:["Chest"], Back:["Back"], Shoulders:["Front Delts","Side Delts","Rear Delts"], Arms:["Biceps","Triceps"],
  Legs:["Quads","Hamstrings","Glutes","Calves"], Core:["Core"] };
const INTENS={ low:0.75, med:1.0, high:1.3 }, INTLBL={ low:"low", med:"medium", high:"high" };
const ACTIVITIES=[
  {n:"Running", muscles:["Quads","Hamstrings","Calves","Glutes"], run:true, k:7},
  {n:"Cycling", muscles:["Quads","Glutes","Calves"], rate:0.5},
  {n:"Swimming", muscles:["Back","Shoulders","Chest","Core"], rate:0.8},
  {n:"Climbing", muscles:["Back","Biceps","Core"], rate:0.7},
  {n:"Bouldering", muscles:["Back","Biceps","Core"], rate:0.6},
  {n:"Rowing", muscles:["Back","Biceps","Quads"], rate:0.8},
  {n:"Boxing", muscles:["Shoulders","Core","Back"], rate:0.9},
  {n:"MMA", muscles:["Shoulders","Core","Back","Quads"], rate:1.0},
  {n:"Hiking", muscles:["Quads","Glutes","Calves"], rate:0.45},
  {n:"Football", muscles:["Quads","Hamstrings","Calves"], rate:0.6},
  {n:"Basketball", muscles:["Quads","Calves","Shoulders"], rate:0.6},
  {n:"Tennis", muscles:["Shoulders","Quads","Core"], rate:0.6},
  {n:"Yoga", muscles:["Core"], rate:0.3}
];
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
    row.querySelector(".rem").onclick=()=>{ confirmAsk("Delete this "+esc(e.name)+" entry?","Delete",()=>{ extlog=extlog.filter(x=>x!==e); sset("extlog",extlog); renderOtherLog(); renderDash(); toast("Deleted"); }); };
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
  const fresh=checkAchievements(); sset("settings",settings);
  renderOtherLog(); updateOtherPreview(); renderDash(); if($("sheetMus").classList.contains("show")) renderMuscles();
  toast("Logged "+entry.name+" — "+entry.vol.toLocaleString()+" kg");
  if(fresh.length) setTimeout(()=>celebrateAch(fresh), 1200);
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
  const dist = act.run ? (parseFloat($("cdDist").value)||0) : 0;
  const ok = act.run ? (dist>0 || mins>0) : mins>0;
  let html;
  if(ok){ const bits=[]; if(mins) bits.push('<b>'+mins+' min</b>'); if(dist) bits.push('<b>'+round1(dist)+' km</b>');
    bits.push(z.lbl+' · Z'+z.z.slice(1)); html=bits.join(' · ');
  } else html='<span style="color:var(--l3)">Add a duration'+(act.run?' or distance':'')+' to log it.</span>';
  $("cdPrev").innerHTML=html;
  $("cdLog").classList.toggle("dim", !ok);
  return {ok, mins, dist};
}
function renderCardioChips(){
  const aw=$("cdActChips"); aw.innerHTML="";
  ACTIVITIES.forEach(a=>{ const c=document.createElement("button"); c.className="chip"+(cdActSel===a.n?" on":""); c.textContent=a.n;
    c.onclick=()=>{ cdActSel=a.n; renderCardioChips(); $("cdRun").style.display=a.run?"":"none"; $("cdDur").style.display=a.run?"none":""; updateCardioPreview(); }; aw.appendChild(c); });
  const act=cdAct(); $("cdRun").style.display=act.run?"":"none"; $("cdDur").style.display=act.run?"none":"";
  const zw=$("cdZoneChips"); zw.innerHTML="";
  CZONES.forEach(z=>{ const c=document.createElement("button"); c.className="chip"+(cdZone===z.z?" on":"");
    c.innerHTML=z.lbl+' <small style="opacity:.55">'+z.sub+'</small>';
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
    const parts=[]; if(e.dist) parts.push(e.dist+"km"); if(e.mins) parts.push(e.mins+"min");
    parts.push(z?z.lbl:(INTLBL[e.intensity]||"")); parts.push(when);
    row.innerHTML='<div class="info"><div class="nm">'+esc(e.name)+'</div><div class="meta">'+esc(parts.filter(Boolean).join(" · "))+'</div></div>'
      +'<a class="lnkic rem" title="Delete">'+ICON.trash+'</a>';
    row.querySelector(".rem").onclick=()=>{ confirmAsk("Delete this "+esc(e.name)+" entry?","Delete",()=>{ extlog=extlog.filter(x=>x!==e); sset("extlog",extlog); renderCardioLog(); renderDash(); toast("Deleted"); }); };
    wrap.appendChild(row);
  });
}
function renderCardio(){ renderCardioChips(); updateCardioPreview(); renderCardioLog(); }
function setTrainMode(m){ trainMode=m;
  const b=$("trainModeBtn"); if(b) b.classList.toggle("cardio", m==="cardio");
  const l=$("trainModeLbl"); if(l) l.textContent = m==="cardio" ? "Cardio" : "Strength";
  $("strengthWrap").style.display = m==="cardio" ? "none" : "";
  $("cardioPanel").style.display  = m==="cardio" ? "" : "none";
  if(m==="cardio") renderCardio();
}
if($("trainModeBtn")) $("trainModeBtn").onclick=()=> setTrainMode(trainMode==="cardio" ? "strength" : "cardio");
["cdDist","cdTime","cdPace"].forEach(id=> $(id).addEventListener("input", cdRunCalc));
$("cdMin").addEventListener("input", updateCardioPreview);
$("cdLog").onclick=()=>{
  const pv=updateCardioPreview(); if(!pv.ok){ toast("Add a duration or distance first"); return; }
  const act=cdAct(), mins=pv.mins, dist=pv.dist;
  const entry={ d:Date.now(), kind:"cardio", name:act.n, zone:cdZone, mins, vol:cardioVol(), muscles:act.muscles.slice(), src:"manual" };
  if(dist){ entry.dist=round1(dist); if(mins) entry.pace=round1(mins/dist); }
  const hr=parseFloat($("cdHr").value)||0; if(hr) entry.avgHr=Math.round(hr);
  const rpe=parseFloat($("cdRpe").value)||0; if(rpe) entry.rpe=Math.min(10,Math.max(1,Math.round(rpe)));
  extlog.push(entry); sset("extlog",extlog);
  const fresh=checkAchievements(); sset("settings",settings);
  ["cdDist","cdTime","cdPace","cdMin","cdHr","cdRpe"].forEach(id=>{ $(id).value=""; });
  renderCardioLog(); updateCardioPreview(); renderDash();
  cloudTouchWorkout();
  toast("Logged "+entry.name+(mins?" — "+mins+" min":"")+(dist?" · "+round1(dist)+" km":""));
  if(fresh.length) setTimeout(()=>celebrateAch(fresh), 1200);
};

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
           vol:lifetimeVolume(), muscles:muscles.size, activities:acts.size, external:(extlog||[]).length };
}
const ACHIEVEMENTS=[
  {id:"first",   icon:"🌱", t:"First Steps",        d:"Log your first workout",      test:s=>s.sessions>=1},
  {id:"ten",     icon:"🔥", t:"Getting Consistent", d:"10 workouts logged",          test:s=>s.sessions>=10},
  {id:"fifty",   icon:"💪", t:"Committed",          d:"50 workouts logged",          test:s=>s.sessions>=50},
  {id:"hundred", icon:"🏆", t:"Centurion",          d:"100 workouts logged",         test:s=>s.sessions>=100},
  {id:"pr10",    icon:"⚡", t:"Record Breaker",     d:"Beat your best 10 times",     test:s=>s.prs>=10},
  {id:"vol100k", icon:"🏋️", t:"Heavy Lifter",       d:"100,000 kg moved",            test:s=>s.vol>=100000},
  {id:"vol1m",   icon:"🗻", t:"Mountain Mover",     d:"1,000,000 kg moved",          test:s=>s.vol>=1000000},
  {id:"time10",  icon:"⏱️", t:"Time Under Tension", d:"10 hours trained",            test:s=>s.hours>=10},
  {id:"rounded", icon:"🎯", t:"Well Rounded",       d:"Trained every muscle group",  test:s=>s.muscles>=8},
  {id:"cross",   icon:"🤸", t:"Cross-Trainer",      d:"Log other training",          test:s=>s.external>=1},
  {id:"explorer",icon:"🧭", t:"Explorer",           d:"Try 3 different activities",  test:s=>s.activities>=3}
];
function unlockedIds(){ const s=achStats(); return ACHIEVEMENTS.filter(a=>a.test(s)).map(a=>a.id); }
function checkAchievements(){
  const have=new Set(settings.achUnlocked||[]);
  const now=unlockedIds(), fresh=now.filter(id=>!have.has(id));
  settings.achUnlocked=now; return fresh;
}
function renderAchievements(){
  const wrap=$("achGrid"); if(!wrap) return;
  const have=new Set(unlockedIds());
  wrap.innerHTML=ACHIEVEMENTS.map(a=>{ const on=have.has(a.id);
    return '<div class="ach'+(on?' on':'')+'"><div class="achi">'+(on?a.icon:'<span class="achlock">'+ICON.lock+'</span>')+'</div><div class="acht">'+esc(a.t)+'</div><div class="achd">'+esc(a.d)+'</div></div>';
  }).join('');
  const v=lifetimeVolume();
  $("achVol").textContent = fmtBigKg(lifetimeVolume("lifted"))+" lifted · "+fmtBigKg(v)+" incl. bodyweight";
}
function celebrateAch(ids){ if(!ids||!ids.length) return; const a=ACHIEVEMENTS.find(x=>x.id===ids[0]); if(!a) return;
  celebrate(); toast("Achievement unlocked  "+a.icon+"  "+a.t+(ids.length>1?"  +"+(ids.length-1)+" more":""), true); }

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

// ================= automatic plan builder =================
const BUILD_POOL={
  chest:["Barbell Bench Press","Incline DB Press","Machine Chest Press","Weighted Dip","Dumbbell Bench Press","Cable Fly","Pec Deck","Push-Ups","Decline Push-Ups","Diamond Push-Ups","Incline Push-Ups","Kettlebell Floor Press"],
  lats:["Weighted Pull-Up","Pull-Up","Lat Pulldown","Chin-Up","Straight-Arm Pulldown","Dumbbell Pullover","One-Arm DB Row"],
  upperback:["Chest-Supported Row","Bent-Over Row","Seated Row","One-Arm DB Row","T-Bar Row","Meadows Row","Face Pulls","Inverted / Backpack Row","Kettlebell Row"],
  lowerback:["Back Extension","Good Morning","Rack Pull","Superman","Romanian Deadlift"],
  forearms:["Wrist Curl","Reverse Wrist Curl","Hammer Curl","Reverse Curl","Farmer's Carry"],
  adductors:["Hip Adduction","Cable Adduction (inner)","Cossack Squat","Copenhagen Plank"],
  shoulders:["Overhead Press","Seated DB Press","Machine Shoulder Press","Arnold Press","Pike Push-Ups","Kettlebell Overhead Press","Kettlebell Push Press","Kettlebell Clean & Press"],
  sidedelts:["Lateral Raise","Cable Lateral Raise","Dumbbell Lateral Raise","Machine Lateral Raise","Upright Row","Kettlebell High Pull"],
  reardelts:["Rear Delt Fly","Face Pulls","Reverse Pec Deck","Cable Rear Delt Fly","Bent-Over Lateral Raise","Band Pull-Aparts","Prone Y-Raise"],
  triceps:["Overhead Triceps Extension","Triceps Pushdown","Close-Grip Bench Press","Skull Crusher","Diamond Push-Ups"],
  biceps:["EZ-Bar Curl","Incline DB Curl","Hammer Curl","Cable Curl","Preacher Curl","Chin-Up"],
  quads:["Back Squat","Hack Squat","Leg Press","Front Squat","Goblet Squat","Leg Extension","Bulgarian Split Squat","Walking Lunge","Reverse Lunge","Step-Up","Sissy Squat","Kettlebell Front Squat","Kettlebell Reverse Lunge","Kettlebell Bulgarian Split Squat"],
  hamstrings:["Romanian Deadlift","Seated Leg Curl","Lying Leg Curl","Single-Leg RDL","Nordic Curl","Kettlebell Romanian Deadlift","Two-Hand Kettlebell Swing"],
  glutes:["Hip Thrust","Bulgarian Split Squat","Cable Pull-Through","Glute Bridge","Single-Leg Glute Bridge","Reverse Lunge","Two-Hand Kettlebell Swing","One-Arm Kettlebell Swing","Kettlebell Snatch"],
  calves:["Standing Calf Raise","Seated Calf Raise","Leg-Press Calf Raise","Single-Leg Calf Raise"],
  core:["Cable Crunch","Hanging Leg Raise","Ab Wheel Rollout","Pallof Press","Cable Woodchopper","Landmine Rotation","Russian Twist","Plank","Hollow Hold (sec)","Side Plank","Bicycle Crunch","Reverse Crunch","Dead Bug","Kettlebell Windmill"]
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
// auxiliary detail groups (NO_TARGET): kept off the default emphasis so plans don't auto-stack forearm/
// adductor/erector isolation — they only enter a plan when the user explicitly emphasizes them.
const AUX_EMPH=["Lower Back","Forearms","Adductors","Neck"];
function baseEmphasis(){ const e={}; BUILD_GROUPS.forEach(m=>e[m]= AUX_EMPH.indexOf(m)>=0 ? 0.12 : 0.5); return e; }
let build={ exp:"intermediate", obj:"muscle", focus:["balanced"], bias:"balanced", time:60, freq:4, injuries:[], access:"gym", supersets:"on", vary:"on", kb:"off",
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
  const P=["chest","shoulders","sidedelts","triceps"], U=["chest","upperback","lats","shoulders","sidedelts","reardelts","biceps","triceps"], L=["quads","hamstrings","glutes","calves"], PL=["upperback","lats","reardelts","biceps"];
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
  if(/(fly|pec deck)/.test(n)) return "chestfly";
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
  groups.forEach(g=>{ const a=(pool[g]||[]).filter(x=>!injuryBlocks(x,injuries)&&allowsAt(x,level)&&suitsExp(x,exp)&&fitsGoal(x,obj,bias)); avail[g]=a; if(a.length) usable.push(g); });
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
  const used=new Set(), usedFam=new Set(), chosen=[], compDone=new Set(), left=Object.assign({},target), gcount={}; usable.forEach(g=>gcount[g]=0); let progress=true;
  // For a compound muscle, anchor it with a real compound (first pick), then prefer an isolation for any extra
  // slot — so e.g. a chest day becomes bench (compound) + a fly (isolation), not two presses. Sequential idx
  // scan is kept so the offset still rotates which exercises a repeated-signature day draws.
  const take=(g)=>{ const arr=avail[g]; const roleAware=COMPOUND_GROUPS.indexOf(g)>=0, wantIso=roleAware && gcount[g]>0;
    let i=idx[g], pick=-1, fallback=-1;
    for(; i<arr.length; i++){ const nm=arr[i]; if(used.has(nm)||usedFam.has(familyKey(nm))) continue;
      if(fallback<0) fallback=i;
      if(!roleAware){ pick=i; break; }
      if(wantIso===(roleFor(nm)==="isolation")){ pick=i; break; } }
    if(pick<0) pick=fallback;
    if(pick<0){ idx[g]=arr.length; return false; }
    idx[g]=pick+1;
    const nm=arr[pick]; used.add(nm); usedFam.add(familyKey(nm)); gcount[g]++;
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
  const baseDays = isKB ? kbSplit(b.freq) : (primary==="none" ? null : (isPower ? sbdSplit(b.freq, b.exp) : buildSplit(b.freq, b.exp)));
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
  return { id:"custom-"+Date.now(), name:objLbl+accLbl, level:b.exp, daysPerWeek:b.freq+(kbDay?1:0), workouts };
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
  const cs=getComputedStyle(document.documentElement), accent=(cs.getPropertyValue("--accent")||"#0a84ff").trim(), lab=(cs.getPropertyValue("--l2")||"#888").trim();
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
  ctx.fillStyle=lab; ctx.font="600 26px -apple-system,sans-serif"; ctx.textBaseline="middle";
  G.forEach((g,i)=>{ const [x,y]=pt(i,R+50), co=Math.cos((-90+i*360/n)*Math.PI/180); ctx.textAlign=Math.abs(co)<0.3?"center":(co>0?"left":"right");
    const isParent=SUBGROUPS[g] && !buildExpanded.has(g); ctx.fillText((MSHORT[g]||g)+(isParent?" ›":""), x, y); });
}
function updateBuildPreview(){
  syncEmphasisChips(); drawEmphasisRadar();
  const bc=$("biasCap"); if(bc) bc.textContent=BIAS_CAP[build.bias||"balanced"]||"";
  const sc=planScores(buildPlan(build));
  $("buildPrevScores").innerHTML='<span class="psc"><b>Balance</b> '+sc.balance+'<small>/5</small></span><span class="psc"><b>Hypertrophy</b> '+sc.hyp+'<small>/5</small></span>';
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
    confirmAsk("This plan leans toward "+esc(human)+", different from your stated focus. Make that your overall focus?","Update focus",async()=>{
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
async function deriveKey(pass,salt){
  const base=await crypto.subtle.importKey("raw",new TextEncoder().encode(pass),"PBKDF2",false,["deriveKey"]);
  return crypto.subtle.deriveKey({name:"PBKDF2",salt,iterations:150000,hash:"SHA-256"},base,{name:"AES-GCM",length:256},false,["encrypt","decrypt"]);
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
  try{ pass=window.prompt("Set a passphrase to encrypt your backup.\nLeave blank for an unencrypted file.","")||""; }catch(e){ pass=""; }
  if(pass && crypto && crypto.subtle){
    try{
      const salt=crypto.getRandomValues(new Uint8Array(16)), iv=crypto.getRandomValues(new Uint8Array(12));
      const key=await deriveKey(pass,salt), ct=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,new TextEncoder().encode(json));
      blob=new Blob([JSON.stringify({app:"yalla",v:1,enc:true,exportedAt:payload.exportedAt,salt:bufToB64(salt),iv:bufToB64(iv),data:bufToB64(ct)})],{type:"application/json"}); enc=true;
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
    let pass=""; try{ pass=window.prompt("Enter the passphrase for this backup:","")||""; }catch(e){ pass=""; }
    if(!pass){ toast("Restore cancelled."); return; }
    try{ const key=await deriveKey(pass,b64ToBuf(obj.salt)),
      pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:b64ToBuf(obj.iv)},key,b64ToBuf(obj.data));
      data=JSON.parse(new TextDecoder().decode(pt)).data;
    }catch(e){ toast("Wrong passphrase or corrupt file."); return; }
  }
  if(!data || typeof data!=="object" || !("settings" in data || "history" in data || "plans" in data)){ toast("That doesn't look like a Yalla backup."); return; }
  confirmAsk("Restore replaces all current data on this device with the backup. Continue?","Restore",async()=>{
    for(const k of CLOUD_KEYS){ if(data[k]!=null) await sset(k,data[k]); }
    settings=Object.assign({}, (await sget("settings"))||{});
    plans=(await sget("plans"))||[]; last=(await sget("lastsets"))||{}; bw=(await sget("bodyweight"))||[]; hist=(await sget("history"))||{}; extlog=(await sget("extlog"))||[];
    if(!plans.length) plans=DEFAULT_PLANS.map(p=>JSON.parse(JSON.stringify(p)));
    if(!plans.find(p=>p.id===settings.activePlanId)) settings.activePlanId=plans[0].id;
    curWk=0; freeMode=false; swaps={}; draft={}; await sset("draft", draft);
    renderAll();
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
  if($("ovGreet")) $("ovGreet").textContent=ovGreetWord()+((settings.displayName||settings.name)?", "+(settings.displayName||settings.name):""); toast("I'll call you "+(v||"by your email")+"."); };
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
function recordAvatars(rows){ (rows||[]).forEach(r=>{ if(r && r.user_id && ("avatar_color" in r || "avatar_emoji" in r || "avatar_icon" in r || "avatar_style" in r))
  _avatarCache[r.user_id]={ color:r.avatar_color||null, emoji:r.avatar_emoji||null, icon:r.avatar_icon||null, style:r.avatar_style||null }; }); }
function avatarColor(seed){ let h=0; const s=String(seed||"?"); for(let i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))>>>0; return "hsl("+(h%360)+",55%,50%)"; }
function initials(name){ const p=String(name||"").trim().split(/\s+/).filter(Boolean); if(!p.length) return "🙂"; return (p[0][0]+(p[1]?p[1][0]:"")).toUpperCase(); }
// background per style — solid colour, a deeper gradient, a hue-shifted duotone, or solid (ring adds a class)
function avatarBg(color, style){
  if(style==="gradient") return "linear-gradient(135deg,"+color+", color-mix(in srgb,"+color+" 60%, #000))";
  if(style==="duotone")  return "linear-gradient(135deg,"+color+", color-mix(in srgb,"+color+" 45%, var(--accent)))";
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
  else { const color = opts.color || pref.color || avatarColor(opts.seed||uid||name||"?"); inner = emoji ? esc(emoji) : esc(initials(name)); bg=avatarBg(color,style); }
  return '<span class="avatar'+(opts.live?" live":"")+(style==="ring"&&!icon?" r-ring":"")+'" style="width:'+sz+'px;height:'+sz+'px;font-size:'+Math.round(sz*(emoji?0.52:0.4))+'px;background:'+bg+';">'+inner+'</span>'; }
// keep my own cached avatar in sync with my saved prefs (so it shows on my feed posts / Me card)
function syncSelfAvatar(){ if(cloudUser) _avatarCache[cloudUser.id]={ color:settings.avatarColor||null, emoji:settings.avatarEmoji||null, icon:settings.avatarIcon||null, style:settings.avatarStyle||null }; }

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
  if(!rows.length){ av.innerHTML='<div class="ed-label">Recent workouts</div><p class="levelcap" style="margin:0 4px;">Nothing shared yet.</p>'; return; }
  av.innerHTML='<div class="ed-label">Recent workouts</div>'+rows.map(r=>{ const s=r.summary||{}, lvl=s.lvl||1, can=(lvl>=2&&s.ex&&s.ex.length);
    const stats=[ s.exN?s.exN+" ex":null, s.sets!=null?s.sets+" sets":null, s.vol?fmtKg(s.vol):null, s.mins?Math.round(s.mins)+" min":null ].filter(Boolean).join(" · ");
    return '<div class="profwo" data-id="'+esc(r.id)+'" style="padding:10px 4px; border-bottom:.5px solid var(--line); cursor:'+(can?"pointer":"default")+';">'
      +'<div style="font-weight:600;">'+esc(s.name||"Workout")+(can?' <span class="levelcap" style="font-weight:500;">· tap ›</span>':'')+'</div>'
      +'<div class="levelcap" style="margin-top:3px;">'+esc(stats)+' · '+esc(agoStr(Date.parse(r.created_at)))+'</div></div>'; }).join('');
  av.querySelectorAll(".profwo").forEach(el=>{ const r=rows.find(x=>String(x.id)===el.dataset.id); if(!r) return; const s=r.summary||{}, lvl=s.lvl||1;
    if(lvl>=2 && s.ex && s.ex.length) el.onclick=()=>openWorkoutDetail(r, name, lvl); });
}

// ---- Me: your own profile card (avatar + name + follower/following counts) ----
const PENCIL_SVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5l5 5M4 20l1-4L16 5l3 3L8 19z"/></svg>';
async function renderMeProfile(){
  const card=$("meProfile"); if(!card) return;
  const nm=settings.displayName||settings.name||"";
  if(!cloudConfigured() && !nm){ card.style.display="none"; return; }
  card.style.display="";
  syncSelfAvatar();
  const av='<span class="avwrap" id="meAvatar">'+avatarHTML(nm||"You",{size:60,uid:(cloudUser&&cloudUser.id),seed:nm||"you"})+'<span class="avedit">'+PENCIL_SVG+'</span></span>';
  if(cloudReady() && dbHardened){
    let fr=0, fo=0;
    try{ const { data } = await sb.rpc("my_following"); fo=(data||[]).filter(u=>u.status==="accepted").length; }catch(e){}
    try{ const { data } = await sb.rpc("my_followers"); fr=(data||[]).length; }catch(e){}
    card.innerHTML=av+'<div style="min-width:0;"><div class="pcname">'+esc(nm||"You")+'</div>'
      +'<div class="pccounts"><span class="pccount"><b>'+fr+'</b><span>followers</span></span>'
      +'<span class="pccount"><b>'+fo+'</b><span>following</span></span></div></div>';
    card.onclick=openFriends;
  } else {
    card.innerHTML=av+'<div style="min-width:0;"><div class="pcname">'+esc(nm||"You")+'</div>'
      +'<div class="pchint">'+(cloudReady()?"Friends features warming up…":"Sign in to connect with friends ›")+'</div></div>';
    card.onclick=()=> (cloudReady()?openFriends():goAccount());
  }
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
        +'<p class="levelcap" style="margin:0 2px 8px; line-height:1.4;">Pick who can watch your workout in real time and cheer you on.</p>'
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
  // match the app's live brand gradient: linear-gradient(135deg,#ff7a18,#ff2f3d) → diagonal top-left→bottom-right
  const g=x.createLinearGradient(0,0,W,H); g.addColorStop(0,"#ff7a18"); g.addColorStop(1,"#ff2f3d"); x.fillStyle=g; x.fillRect(0,0,W,H);
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
    x.font="700 23px -apple-system,system-ui,sans-serif"; x.fillStyle="rgba(255,255,255,.85)"; x.fillText(st[0], bx+bw/2, by+118); });
  if(s.top && s.top.w>0){ x.textAlign="center"; x.fillStyle="rgba(255,255,255,.96)"; x.font="700 33px -apple-system,system-ui,sans-serif";
    let t="Top set · "+s.top.name+" · "+s.top.w+"kg × "+s.top.r; if(t.length>46) t="Top · "+s.top.name; x.fillText(t, W/2, 1205); }
  // footer: a join call-to-action + the app URL drawn as a pill, so anyone who sees the shared image can grab the app
  x.textAlign="center"; x.fillStyle="rgba(255,255,255,.82)"; x.font="600 26px -apple-system,system-ui,sans-serif"; x.fillText("Tracked with yalla — join me 💪", W/2, 1262);
  const url=SHARE_URL; x.font="700 28px -apple-system,system-ui,sans-serif"; const uw=x.measureText(url).width, pw=uw+56, ph=56, px=(W-pw)/2, py=1284;
  rrect(x,px,py,pw,ph,28); x.fillStyle="rgba(255,255,255,.18)"; x.fill();
  x.fillStyle="#fff"; x.textBaseline="middle"; x.fillText(url, W/2, py+ph/2+1); x.textBaseline="alphabetic";
  return c;
}
let _shareCanvas=null;
function openShareTile(session){
  try{ const c=renderShareTile(session); _shareCanvas=c; const box=$("sharePreview"); box.innerHTML=""; box.appendChild(c); openSheet("Share"); }
  catch(e){ /* never block the save flow on a render hiccup */ }
}
function shareImage(save){
  if(!_shareCanvas) return;
  _shareCanvas.toBlob(async(blob)=>{ if(!blob){ toast("Couldn't render the image."); return; }
    const fname="yalla-"+new Date().toISOString().slice(0,10)+".png";
    if(save){ const url=URL.createObjectURL(blob),a=document.createElement("a"); a.href=url; a.download=fname; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),1500); toast("Image saved."); }
    else await shareOrDownload(blob,fname);
  }, "image/png");
}
$("shareImgBtn").onclick=()=>shareImage(false);
$("saveImgBtn").onclick=()=>shareImage(true);
$("shareClose").onclick=()=>closeSheet("Share");

let tT; function toast(m,big){ const t=$("toast"); t.textContent=m; t.classList.toggle("big",!!big); t.classList.add("show"); clearTimeout(tT); tT=setTimeout(()=>t.classList.remove("show"), big?2800:2300); }
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

init();

// Kick off cloud sync if the SDK is already present (it may also self-trigger via its onload).
if(window.supabase && window.__cloudInit) window.__cloudInit();

// iOS standalone PWA cold-launch "blank strip" — fixed in CSS by using 100vh for #shell (see its rule).
// No JS height management: the old --appH override drove the shell from window.innerHeight, which is the
// DYNAMIC viewport and reports ~62px short on a cold launch (not initialized until a geometry change), so it
// REINTRODUCED the very bug it tried to fix. 100vh is the static large viewport and is correct from cold
// start in standalone mode. Removing the JS lets 100vh actually apply.

// Offline support: register the service worker when served over HTTPS (e.g. GitHub Pages).
// Skipped silently on file:// so opening the raw file still works.
if("serviceWorker" in navigator && location.protocol==="https:"){
  // when a new version takes control, reload once so the update shows without a manual re-add
  let _swReloaded=false;
  navigator.serviceWorker.addEventListener("controllerchange", ()=>{ if(_swReloaded) return; _swReloaded=true; location.reload(); });
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").then(reg=>{
      reg.update();                                   // check for a newer worker on every launch
      setInterval(()=>reg.update(), 60*60*1000);      // and hourly while open
    }).catch(()=>{});
  });
  // an installed PWA resumes without re-firing "load"; re-check for a new version when it regains focus
  document.addEventListener("visibilitychange", ()=>{ if(document.visibilityState==="visible")
    navigator.serviceWorker.getRegistration().then(reg=>reg&&reg.update()).catch(()=>{}); });
}
