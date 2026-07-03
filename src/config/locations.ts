export interface ClassScheduleItem {
  time: string;
  title: string;
  level: string;
  focus: string;
  shortDesc: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  validity: string;
  features: string[];
  popular: boolean;
}

export interface LocationData {
  slug: string;
  displayName: string;
  regionName: string;
  tagline: string;
  address: string;
  landmarkNotice: string;
  contactNumber1: string;
  contactNumber2: string;
  whatsappLinkText: string;
  mapEmbedUrl: string;
  schedule: ClassScheduleItem[];
  pricing: PricingPackage[];
  intensiveDates: string[];
  intensivePricing: {
    feeINR: string;
    feeUSD: string;
    deposit: string;
  };
  batches: string[];
}

export const locationsConfig: Record<string, LocationData> = {
  dharamshala: {
    slug: "dharamshala",
    displayName: "Dharamshala (Upper Bhagsu)",
    regionName: "Himachal Pradesh, India",
    tagline: "Hatha alignment-based practice in the serene Himalayan mountains.",
    address: "Upper Bhagsu near Beetroot Café, Dharamshala, Himachal Pradesh 176219",
    landmarkNotice: "Quiet neighborhood just above the Bhagsu temple area, away from traffic noise. Walkable from Dharamkot (10 mins) and McLeod Ganj (25 mins).",
    contactNumber1: "+91 77198 78500",
    contactNumber2: "+91 97364 63605",
    whatsappLinkText: "Hi Alpesh, I am inquiring about the Dharamshala classes.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.4093959146193!2d76.33129887627443!3d32.24716497388046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b53dfdcd15d49%3A0xe1c028ea7c55cb85!2sAlpesh%20Yoga!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    schedule: [
      {
        time: "8:30 AM – 10:00 AM",
        title: "Intensive Hatha Alignment",
        level: "All Levels",
        focus: "Intensive adjustment, structural integrity, inversions, and advanced prop placements.",
        shortDesc: "A rigorous session investigating skeletal mechanics, joint safety, and core stabilization using wall ropes, blocks, and straps."
      },
      {
        time: "10:15 AM – 11:45 AM",
        title: "Beginner Friendly Alignment",
        level: "Beginner",
        focus: "Fundamentals of standing postures, basic breathing, introductory prop usage.",
        shortDesc: "Designed for first-timers and those wanting to establish correct habits. Learn the foundations of Hatha alignment safely."
      },
      {
        time: "4:00 PM – 5:30 PM",
        title: "Evening Therapeutic Alignment",
        level: "All Levels",
        focus: "Restorative postures, shoulder/neck release, spinal traction, and deep restoration.",
        shortDesc: "A slow, healing session focusing on releasing physical compression, correcting posture errors, and restorative pranayama."
      }
    ],
    pricing: [
      {
        name: "Single Drop-in",
        price: "₹600",
        validity: "Per class",
        features: ["All props provided", "Individual adjustments", "Drop-in welcome"],
        popular: false
      },
      {
        name: "6-Class Pass",
        price: "₹3,000",
        validity: "Valid for 7 days",
        features: ["Save ₹600", "Access to all daily slots", "Flexible scheduling"],
        popular: true
      },
      {
        name: "12-Class Pass",
        price: "₹5,500",
        validity: "Valid for 14 days",
        features: ["Save ₹1,700", "Access to all daily slots", "Personal posture advice"],
        popular: false
      }
    ],
    intensiveDates: [
      "Starts Every Monday (Year-Round)",
      "Monday, July 6, 2026",
      "Monday, July 13, 2026",
      "Monday, July 20, 2026",
      "Monday, July 27, 2026"
    ],
    intensivePricing: {
      feeINR: "₹12,000",
      feeUSD: "$150 USD",
      deposit: "₹2,500 / $30 USD to reserve a spot"
    },
    batches: [
      "18 June – 9 July",
      "3 July – 24 July",
      "18 July – 8 August",
      "4 August – 25 August",
      "19 August – 9 September",
      "2 September – 23 September",
      "Other / Not sure yet"
    ]
  },
  goa: {
    slug: "goa",
    displayName: "Goa (Coastal Shala)",
    regionName: "Goa, South India",
    tagline: "Hatha alignment-based practice near the warm breezes of the Arabian Sea.",
    address: "Goa Beach Shala, Goa, South India [GOA ADDRESS DETAILS COMING SOON]",
    landmarkNotice: "Quiet nature center within walking distance of the beach. Peaceful, quiet surroundings perfect for alignment and restorative practice. Details to be confirmed by host.",
    contactNumber1: "+91 77198 78500",
    contactNumber2: "+91 97364 63605",
    whatsappLinkText: "Hi Alpesh, I am inquiring about the Goa classes.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123062.2415177242!2d73.91350438183182!3d15.335345759714856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xe24bdc3f6e157285!2sGoa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    schedule: [
      {
        time: "8:30 AM – 10:00 AM",
        title: "Intensive Hatha Alignment [GOA DETAILS COMING SOON]",
        level: "All Levels",
        focus: "Structural integrity, posture corrections, prop use. Goa timings subject to client validation.",
        shortDesc: "Rigorous alignment-focused session adapted to coastal environments. Wall ropes, blocks, and belts provided."
      },
      {
        time: "10:15 AM – 11:45 AM",
        title: "Beginner Friendly Alignment [GOA DETAILS COMING SOON]",
        level: "Beginner",
        focus: "Habit correction, basic posture alignments, prop instruction.",
        shortDesc: "Foundations course helping students practice safely on sandy shalas without shoulder or knee compression."
      },
      {
        time: "4:00 PM – 5:30 PM",
        title: "Evening Therapeutic Alignment [GOA DETAILS COMING SOON]",
        level: "All Levels",
        focus: "Restorative stretches, posture release, pranayama.",
        shortDesc: "Restorative flow designed to stretch fatigue out of structural muscles and balance the nervous system."
      }
    ],
    pricing: [
      {
        name: "Single Drop-in",
        price: "[TBD]",
        validity: "Per class",
        features: ["All props provided", "Individual adjustments", "Drop-in welcome"],
        popular: false
      },
      {
        name: "6-Class Pass",
        price: "[TBD]",
        validity: "Valid for 7 days",
        features: ["Access to all daily slots", "Flexible scheduling", "Props included"],
        popular: true
      },
      {
        name: "12-Class Pass",
        price: "[TBD]",
        validity: "Valid for 14 days",
        features: ["Access to all daily slots", "Individual checks", "Flexible dates"],
        popular: false
      }
    ],
    intensiveDates: [
      "Dates [TBD] — Contact us for next available start date"
    ],
    intensivePricing: {
      feeINR: "[TBD]",
      feeUSD: "[TBD]",
      deposit: "Contact us to reserve spot in Goa course"
    },
    batches: [
      "Dates [TBD] (Contact us for details)"
    ]
  }
};
