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
    feeEUR?: string;
    deposit: string;
  };
  /** @deprecated Prefer batches200 / batches100 — kept for backward compatibility */
  batches: string[];
  batches200: string[];
  batches100: string[];
  /** Optional Goa track splits (Alignment vs Multi-Style) */
  batches200Alignment?: string[];
  batches200Multi?: string[];
  batches100Alignment?: string[];
  batches100Multi?: string[];
}

export const locationsConfig: Record<string, LocationData> = {
  dharamshala: {
    slug: "dharamshala",
    displayName: "Dharamshala (Dharamkot)",
    regionName: "Himachal Pradesh, India",
    tagline: "Hatha alignment-based practice in the serene Himalayan mountains.",
    address: "Alpesh Yoga, Upper bhagsu, near beetroot cafe, near Kibbutz, Bhagsu Nag, Dharamshala, Himachal Pradesh 176219",
    landmarkNotice: "Located in the quiet heights of Dharamkot, a short pine forest walk away from traffic. Conveniently positioned before Bodhi Greens and just past Track n Dine.",
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
      "28 April – 5 May 2026",
      "9 May – 16 May 2026",
      "5 June – 12 June 2026",
      "3 July – 10 July 2026",
      "4 August – 11 August 2026",
      "2 September – 9 September 2026",
      "Other / Not sure yet",
    ],
    intensivePricing: {
      feeINR: "₹12,000",
      feeUSD: "$150 USD",
      deposit: "USD 300 to reserve a spot (non-refundable)",
    },
    batches200: [
      "25 April – 16 May 2026",
      "23 May – 13 June 2026",
      "18 June – 9 July 2026",
      "18 July – 8 August 2026",
      "19 August – 9 September 2026",
      "Other / Not sure yet",
    ],
    batches100: [
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
      "Other / Not sure yet",
    ],
    batches: [
      "25 April – 16 May 2026",
      "23 May – 13 June 2026",
      "18 June – 9 July 2026",
      "18 July – 8 August 2026",
      "19 August – 9 September 2026",
      "Other / Not sure yet",
    ],
  },
  goa: {
    slug: "goa",
    displayName: "Goa (Arambol Beach)",
    regionName: "Goa, South India",
    tagline: "Hatha alignment-based practice near the warm breezes of the Arabian Sea.",
    address: "Alpesh Yoga Center, Opposite Arcan Bar, Before Piya Guest House, Madhlo Waddo, Arambol Beach, North Goa 403524",
    landmarkNotice: "Located in peaceful Madhlo Waddo, just opposite Arcan Bar and before Piya Guest House. Easy walk to the shoreline shala.",
    contactNumber1: "+91 77198 78500",
    contactNumber2: "+91 97364 63605",
    whatsappLinkText: "Hi Alpesh, I am inquiring about the Goa classes.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.428514930355!2d73.70494491490278!3d15.698305889110416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfa37c56aa3891%3A0xe9f7cb2f43beec41!2sArambol%20Beach!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    schedule: [
      {
        time: "8:30 AM – 10:15 AM",
        title: "Morning — Indepth Alignment",
        level: "All Levels",
        focus: "Structural integrity, posture corrections, prop use, and inversions.",
        shortDesc: "Indepth alignment yoga class with props, adjustments, and clear instruction.",
      },
      {
        time: "10:15 AM – 11:15 AM",
        title: "Beginner Alignment",
        level: "Beginner",
        focus: "Foundations of standing postures, basic breathing, and prop usage.",
        shortDesc: "Beginner-friendly alignment class to build safe habits from day one.",
      },
      {
        time: "4:30 PM – 6:00 PM",
        title: "Evening Alignment",
        level: "All Levels",
        focus: "Evening alignment practice, footwork, and restorative release.",
        shortDesc: "Evening drop-in class focused on alignment, strength, and recovery.",
      },
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
        features: ["Access to all daily slots", "Flexible scheduling", "Props included"],
        popular: true
      },
      {
        name: "12-Class Pass",
        price: "₹5,500",
        validity: "Valid for 14 days",
        features: ["Access to all daily slots", "Individual checks", "Flexible dates"],
        popular: false
      }
    ],
    intensiveDates: [
      "23 December – 30 December 2026",
      "5 January – 12 January 2027",
      "20 January – 27 January 2027",
      "4 February – 11 February 2027",
      "18 February – 25 February 2027",
      "Other / Contact for dates",
    ],
    intensivePricing: {
      feeINR: "₹25,000",
      feeUSD: "$280 USD",
      feeEUR: "€280",
      deposit: "USD 300 to reserve a spot (non-refundable)",
    },
    batches200Alignment: [
      "4 November – 25 November 2026",
      "3 December – 24 December 2026",
      "6 January – 27 January 2027",
      "4 February – 25 February 2027",
      "2 March – 23 March 2027",
    ],
    batches200Multi: [
      "21 November – 12 December 2026",
      "16 December – 6 January 2027",
      "21 January – 11 February 2027",
      "18 February – 11 March 2027",
      "9 March – 30 March 2027",
    ],
    batches200: [
      "4 November – 25 November 2026 (Alignment)",
      "21 November – 12 December 2026 (Multi-Style)",
      "3 December – 24 December 2026 (Alignment)",
      "16 December – 6 January 2027 (Multi-Style)",
      "6 January – 27 January 2027 (Alignment)",
      "21 January – 11 February 2027 (Multi-Style)",
      "4 February – 25 February 2027 (Alignment)",
      "18 February – 11 March 2027 (Multi-Style)",
      "2 March – 23 March 2027 (Alignment)",
      "9 March – 30 March 2027 (Multi-Style)",
      "Other / Contact for dates",
    ],
    batches100Alignment: [
      "4 November – 14 November 2026",
      "4 December – 14 December 2026",
      "6 January – 16 January 2027",
      "5 February – 15 February 2027",
      "2 March – 12 March 2027",
    ],
    batches100Multi: [
      "21 November – 1 December 2026",
      "16 December – 26 December 2026",
      "21 January – 31 January 2027",
      "18 February – 1 March 2027",
      "9 March – 19 March 2027",
    ],
    batches100: [
      "4 November – 14 November 2026 (Alignment)",
      "21 November – 1 December 2026 (Multi-Style)",
      "4 December – 14 December 2026 (Alignment)",
      "16 December – 26 December 2026 (Multi-Style)",
      "6 January – 16 January 2027 (Alignment)",
      "21 January – 31 January 2027 (Multi-Style)",
      "5 February – 15 February 2027 (Alignment)",
      "18 February – 1 March 2027 (Multi-Style)",
      "2 March – 12 March 2027 (Alignment)",
      "9 March – 19 March 2027 (Multi-Style)",
      "Other / Contact for dates",
    ],
    batches: [
      "4 November – 25 November 2026 (Alignment)",
      "21 November – 12 December 2026 (Multi-Style)",
      "3 December – 24 December 2026 (Alignment)",
      "16 December – 6 January 2027 (Multi-Style)",
      "6 January – 27 January 2027 (Alignment)",
      "21 January – 11 February 2027 (Multi-Style)",
      "4 February – 25 February 2027 (Alignment)",
      "18 February – 11 March 2027 (Multi-Style)",
      "2 March – 23 March 2027 (Alignment)",
      "9 March – 30 March 2027 (Multi-Style)",
      "Other / Contact for dates",
    ],
  },
};
