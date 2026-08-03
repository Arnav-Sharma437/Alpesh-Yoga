export type ProgramCategory =
  | "all"
  | "200hs"
  | "100hs"
  | "intensive"
  | "retreats"
  | "daily";

export interface ProgramListing {
  id: string;
  title: string;
  category: Exclude<ProgramCategory, "all">;
  location: string;
  locationSlug: "goa" | "dharamshala" | "online";
  duration: string;
  priceUSD: number | null;
  priceLabel: string;
  href: string;
  image: string;
  dates: string[];
  allInclusive?: boolean;
}

export const PROGRAM_FILTERS: { id: ProgramCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "200hs", label: "200hs Training" },
  { id: "100hs", label: "100hs Training" },
  { id: "intensive", label: "8-Day Intensive" },
  { id: "retreats", label: "Retreats" },
  { id: "daily", label: "Daily Classes" },
];

export const programsCatalog: ProgramListing[] = [
  {
    id: "200-goa",
    title: "200-Hour Multi-Style & Alignment YTTC in Goa, Arambol",
    category: "200hs",
    location: "Arambol, Goa",
    locationSlug: "goa",
    duration: "22 Days",
    priceUSD: 950,
    priceLabel: "$950",
    href: "/goa/200-hour-yttc",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=900",
    dates: [
      "15 Nov – 6 Dec 2026",
      "10 Dec – 31 Dec 2026",
      "5 Jan – 26 Jan 2027",
      "1 Feb – 22 Feb 2027",
    ],
    allInclusive: true,
  },
  {
    id: "200-dharamshala",
    title: "200-Hour Multi-Style & Alignment YTTC in Dharamshala",
    category: "200hs",
    location: "Dharamkot, Dharamshala",
    locationSlug: "dharamshala",
    duration: "22 Days",
    priceUSD: 950,
    priceLabel: "$950",
    href: "/dharamshala/200-hour-yttc",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=900",
    dates: [
      "25 Apr – 16 May 2026",
      "23 May – 13 Jun 2026",
      "18 Jun – 9 Jul 2026",
      "18 Jul – 8 Aug 2026",
      "19 Aug – 9 Sep 2026",
    ],
    allInclusive: true,
  },
  {
    id: "100-goa",
    title: "100-Hour Yoga Teacher Training in Goa, Arambol",
    category: "100hs",
    location: "Arambol, Goa",
    locationSlug: "goa",
    duration: "11 Days",
    priceUSD: 550,
    priceLabel: "$550",
    href: "/goa/100-hour-ttc",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=900",
    dates: [
      "15 Nov – 26 Nov 2026",
      "10 Dec – 21 Dec 2026",
      "5 Jan – 16 Jan 2027",
      "1 Feb – 12 Feb 2027",
    ],
    allInclusive: true,
  },
  {
    id: "100-dharamshala",
    title: "100-Hour Yoga Teacher Training in Dharamshala",
    category: "100hs",
    location: "Dharamkot, Dharamshala",
    locationSlug: "dharamshala",
    duration: "11 Days",
    priceUSD: 550,
    priceLabel: "$550",
    href: "/dharamshala/100-hour-ttc",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=900",
    dates: [
      "28 Apr – 8 May 2026",
      "9 May – 19 May 2026",
      "23 May – 2 Jun 2026",
      "5 Jun – 15 Jun 2026",
      "18 Jun – 29 Jun 2026",
      "3 Jul – 13 Jul 2026",
      "18 Jul – 28 Jul 2026",
      "4 Aug – 14 Aug 2026",
      "19 Aug – 29 Aug 2026",
      "2 Sep – 12 Sep 2026",
    ],
    allInclusive: true,
  },
  {
    id: "8day-goa",
    title: "8-Day Intensive Alignment Course in Goa",
    category: "intensive",
    location: "Arambol, Goa",
    locationSlug: "goa",
    duration: "8 Days",
    priceUSD: 150,
    priceLabel: "$150",
    href: "/goa/8-day-intensive",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=900",
    dates: ["Starts every Monday (Winter season)"],
    allInclusive: false,
  },
  {
    id: "8day-dharamshala",
    title: "8-Day Intensive Alignment Yoga Course in Dharamshala",
    category: "intensive",
    location: "Dharamkot, Dharamshala",
    locationSlug: "dharamshala",
    duration: "8 Days",
    priceUSD: 150,
    priceLabel: "$150",
    href: "/dharamshala/8-day-intensive",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=900",
    dates: [
      "28 Apr – 5 May 2026",
      "9 May – 16 May 2026",
      "5 Jun – 12 Jun 2026",
      "3 Jul – 10 Jul 2026",
      "4 Aug – 11 Aug 2026",
      "2 Sep – 9 Sep 2026",
    ],
    allInclusive: false,
  },
  {
    id: "retreat-6",
    title: "6-Day Yoga Retreat",
    category: "retreats",
    location: "Goa",
    locationSlug: "goa",
    duration: "6 Days",
    priceUSD: null,
    priceLabel: "Enquiry",
    href: "/retreats#6-day",
    image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=900",
    dates: ["See retreats page"],
  },
  {
    id: "retreat-10",
    title: "10-Day Yoga Retreat",
    category: "retreats",
    location: "Goa",
    locationSlug: "goa",
    duration: "10 Days",
    priceUSD: null,
    priceLabel: "Enquiry",
    href: "/retreats#10-day",
    image: "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=900",
    dates: ["See retreats page"],
  },
  {
    id: "daily-goa",
    title: "Daily Drop-In Classes in Goa",
    category: "daily",
    location: "Arambol, Goa",
    locationSlug: "goa",
    duration: "90 Mins",
    priceUSD: null,
    priceLabel: "₹600",
    href: "/goa/daily-classes",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=900",
    dates: ["Open daily"],
  },
  {
    id: "daily-dharamshala",
    title: "Daily Drop-In Classes in Dharamshala",
    category: "daily",
    location: "Dharamkot, Dharamshala",
    locationSlug: "dharamshala",
    duration: "90 Mins",
    priceUSD: null,
    priceLabel: "₹600",
    href: "/dharamshala/daily-classes",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=900",
    dates: ["Open daily"],
  },
];
