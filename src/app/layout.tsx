import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpesh Yoga | Hatha Alignment Studio Dharamshala, India",
  description: "Experience precision and correct alignment Hatha-based yoga at Alpesh Yoga in Upper Bhagsu, Dharamshala, India. Offering daily classes, 8-Day Intensive Courses, 100-Hour and 200-Hour Yoga Teacher Training Courses (YTTC).",
  keywords: ["Hatha alignment Dharamshala", "yoga classes Bhagsu", "yoga teacher training Dharamshala", "alignment yoga India", "Alpesh Yoga Dharamshala"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-forest-600 font-sans">{children}</body>
    </html>
  );
}
