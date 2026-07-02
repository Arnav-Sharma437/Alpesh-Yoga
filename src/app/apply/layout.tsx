import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Yoga Teacher Training | Alpesh Yoga Dharamshala",
  description: "Register and apply for the 100-Hour, 200-Hour Yoga Teacher Training Course (YTTC) or 8-Day Intensive Alignment Course at Alpesh Yoga in Upper Bhagsu, Dharamshala, India.",
  keywords: [
    "200 hour YTTC application Dharamshala",
    "yoga teacher training apply India",
    "Alpesh Yoga registration",
    "apply yoga course Dharamshala"
  ],
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
