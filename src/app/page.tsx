import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import TrustBadgesBox from "@/components/TrustBadgesBox";
import Locations from "@/components/Locations";
import KarmaYogaSection from "@/components/KarmaYogaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

/** Homepage section order mirrors https://houseofom.com/ */
export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <FeaturedPrograms />
        <TrustBadgesBox />
        <Locations />
        <KarmaYogaSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
