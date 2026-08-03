/** Shared course content from Alpesh Yoga welcome kits (DHM & GOA) + 2026 batch dates */

export const COURSE_TOPICS = [
  "How to give a solid and clear demonstration",
  "How to give a clear instruction (working with voice)",
  "Proper alignment of postures",
  "Yoga anatomy",
  "Hands-on adjustment",
  "How to avoid common injury during practice",
  "How to jump backward and forward (vinyasa flow)",
  "How to use props for better postures (as recommended by B.K.S. Iyengar)",
  "Mantra chanting",
  "Yogic breathing (Pranayama) and their benefits",
  "Yogic body cleansing (Kriya yoga)",
  "Mudras, Bandhas and their benefits",
  "Yoga philosophy (Patanjali Yoga Sutra)",
  "Ayurveda and Yoga principle",
  "Assisting yoga class with another teacher",
  "Teaching observation",
  "How to teach 45 minutes to 90 minutes long class",
  "How to teach one to one class",
  "How to teach group class",
] as const;

export const ACCOMMODATION_AMENITIES = [
  "King size double bed",
  "Private bathroom with hot and cold water",
  "Free Wi-Fi",
  "Laundry (extra charge)",
] as const;

export const FOOD_POLICY =
  "During the course we maintain a pure sattvic vegetarian diet. Eggs, meat, and alcohol are strictly not allowed in the accommodation or anywhere on the school premises.";

export const MEAL_INCLUSION = {
  weekdays: "Monday–Friday: Breakfast, Lunch and Dinner",
  saturday: "Saturday: Breakfast and Lunch",
  sunday: "Sunday meals are not included",
  note: "You must arrive one day before the course start.",
};

export const BREAKFAST_MENU = [
  "Paratha (potatoes / mix veg / plain)",
  "Muesli + mix fruit salad + yogurt",
  "Porridge",
  "Poha (Indian breakfast)",
  "Upma (Indian breakfast)",
  "Chilla (Indian breakfast)",
] as const;

export const LUNCH_DINNER_MENU = [
  "Variety of vegetarian curry",
  "Indian style salad",
  "Dal",
  "Biryani",
  "Curd (raita)",
  "Chapatti (wheat flour)",
  "Rice",
  "Poppadum",
  "Sweet (dessert)",
] as const;

export const DRINKS_MENU = ["Masala Chai", "Coffee / tea", "Water"] as const;

export const COURSE_DEPOSIT = {
  amountUSD: 300,
  label: "USD 300 deposit to reserve the seat (non-refundable)",
  balanceNote:
    "Balance is paid upon arrival. Preferred payment: Wise / bank transfer / cash. We accept INR, USD, EUR, and GBP.",
};

export const RECOMMENDED_READINGS = [
  "Yoga Anatomy — Leslie Kaminoff",
  "Yoga Sutra — Patanjali",
  "Light on Life — B.K.S. Iyengar",
  "Asana Pranayama Mudra Bandha — Swami Satyananda Saraswati",
] as const;

export const WHAT_TO_BRING = {
  documents: [
    "Passport",
    "Indian tourist visa",
    "Health insurance",
    "Passport-size photos",
  ],
  clothes: [
    "Comfortable yoga clothes",
    "White cloth for certificate ceremony",
    "Rain jacket or umbrella (Dharamshala)",
    "Swimwear (Goa)",
    "Flashlight or LED headlamp",
    "Towel",
    "Sunglasses",
    "Flip-flops",
  ],
  toiletries: ["Skincare", "Soap, shampoo, and sunscreen"],
  miscellaneous: ["Laptop", "Camera", "Phone charger", "Travel adapter", "Ear plugs"],
};

/** Daily schedule — times from welcome kits (morning self-practice/pranayama slots normalized from kit copy) */
export const DAILY_SCHEDULE_DHARAMSHALA = [
  { time: "06:30 – 07:00", activity: "Self-practice of poses learned on previous days" },
  { time: "07:00 – 08:00", activity: "Mantra chanting, guided meditation & Pranayama" },
  { time: "08:30 – 10:15", activity: "Multi-style yoga (Iyengar, Hatha flow, Vinyasa) — alignment-based" },
  { time: "10:15 – 11:15", activity: "Breakfast" },
  { time: "11:15 – 12:00", activity: "Student discussion & note-making" },
  { time: "12:00 – 13:00", activity: "Yoga philosophy, Indian mythology, chakra & mantra healing" },
  { time: "13:00 – 14:00", activity: "Anatomy or art of teaching" },
  { time: "14:00 – 15:00", activity: "Lunch" },
  { time: "15:00 – 16:30", activity: "Rest & self-study" },
  { time: "16:30 – 18:00", activity: "Hatha Yoga class (Iyengar style) — asana practice" },
  { time: "18:00 – 19:00", activity: "Meditation (varied methods) & Q&A" },
  { time: "19:00 – 20:00", activity: "Dinner" },
  { time: "22:00", activity: "Early bedtime" },
] as const;

export const DAILY_SCHEDULE_GOA = [
  { time: "06:30 – 07:00", activity: "Self-practice of poses learned on previous days" },
  { time: "07:00 – 08:00", activity: "Pranayama, mantra chanting & guided meditation" },
  { time: "08:30 – 10:30", activity: "Multi-style yoga (Iyengar, Hatha flow, Vinyasa) — alignment-based" },
  { time: "10:30 – 11:30", activity: "Breakfast" },
  { time: "11:30 – 12:30", activity: "Student discussion, notes & Yoga Nidra" },
  { time: "12:30 – 13:30", activity: "Yoga philosophy, mythology, chakra, mantra healing, or anatomy" },
  { time: "13:30 – 14:00", activity: "Lunch" },
  { time: "14:00 – 16:00", activity: "Rest & self-study" },
  { time: "16:00 – 17:00", activity: "Karma yoga" },
  { time: "17:00 – 19:00", activity: "Alignment class, art of teaching, or Hatha (Iyengar) asana practice" },
  { time: "19:00 – 19:30", activity: "Dinner" },
  { time: "22:00", activity: "Early bedtime" },
] as const;

export const SCHEDULE_NOTES = [
  "No class on Sunday",
  "Schedule can be changed according to the group and weather",
] as const;

/** Dharamshala 2026 confirmed batches */
export const DATES_2026 = {
  dharamshala: {
    yttc100: [
      "28 April – 8 May 2026",
      "9 May – 19 May 2026",
      "23 May – 2 June 2026",
      "5 June – 15 June 2026",
      "18 June – 29 June 2026",
      "3 July – 13 July 2026",
      "18 July – 28 July 2026",
      "4 August – 14 August 2026",
      "19 August – 29 August 2026",
      "2 September – 12 September 2026",
    ],
    yttc200: [
      "25 April – 16 May 2026",
      "23 May – 13 June 2026",
      "18 June – 9 July 2026",
      "18 July – 8 August 2026",
      "19 August – 9 September 2026",
    ],
    intensive8Day: [
      "28 April – 5 May 2026",
      "9 May – 16 May 2026",
      "5 June – 12 June 2026",
      "3 July – 10 July 2026",
      "4 August – 11 August 2026",
      "2 September – 9 September 2026",
    ],
  },
  /** Goa winter season — confirm exact 2026/27 dates with the school */
  goa: {
    yttc100: [
      "15 November – 26 November 2026",
      "10 December – 21 December 2026",
      "5 January – 16 January 2027",
      "1 February – 12 February 2027",
      "1 March – 12 March 2027",
      "Other / Contact for dates",
    ],
    yttc200: [
      "15 November – 6 December 2026",
      "10 December – 31 December 2026",
      "5 January – 26 January 2027",
      "1 February – 22 February 2027",
      "1 March – 22 March 2027",
      "Other / Contact for dates",
    ],
    intensive8Day: [
      "Starts every Monday (Winter season — Arambol Beach)",
      "Other / Contact for dates",
    ],
  },
} as const;

export type ProgramDateKey = "yttc100" | "yttc200" | "intensive8Day";

export function getProgramDates(
  location: "dharamshala" | "goa",
  program: ProgramDateKey
): string[] {
  return [...DATES_2026[location][program]];
}

export function getDatesForApplyProgram(
  location: string,
  program: string
): string[] {
  const loc = location === "goa" ? "goa" : location === "dharamshala" ? "dharamshala" : null;
  if (!loc) return ["Other / Not sure yet"];

  const lower = program.toLowerCase();
  if (lower.includes("8-day") || lower.includes("intensive")) {
    return [...getProgramDates(loc, "intensive8Day"), "Other / Not sure yet"];
  }
  if (lower.includes("100")) {
    return [...getProgramDates(loc, "yttc100"), "Other / Not sure yet"];
  }
  if (lower.includes("200")) {
    return [...getProgramDates(loc, "yttc200"), "Other / Not sure yet"];
  }
  // Default: show all course dates for the location
  return [
    ...getProgramDates(loc, "yttc200"),
    ...getProgramDates(loc, "yttc100"),
    ...getProgramDates(loc, "intensive8Day"),
    "Other / Not sure yet",
  ];
}
