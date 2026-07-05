import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Star, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Testimonials & Reviews | Alpesh Yoga India",
  description: "Read 5-star Google reviews and testimonials from our Hatha teacher training course (TTC) and retreat alumni in Goa and Dharamshala.",
  keywords: ["Alpesh Yoga reviews", "yoga teacher training reviews", "Alpesh Patwari testimonials", "Arambol yoga reviews"],
};

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Priyam Pandey",
      reviewsCount: 2,
      timeAgo: "10 months ago",
      initial: "P",
      text: "Highly experience yoga teacher!! I feel really blessed to be here in goa and get training from Alpesh!! His props and tools are really good, it helps making the correct pose or asan rather than doing it wrong!! He takes time explaining each pose and make everyone do that in correct form!! He focus on each student and motivate everyone to do our best!! He is our perfect yoga guru!! You should never miss being part of his yoga sessions when in Arambol!!",
    },
    {
      name: "Lisa Markowitz",
      reviewsCount: 8,
      timeAgo: "10 months ago",
      initial: "L",
      text: "Alpesh's studio is a great place for learners of any experience, from beginners to people who have practiced yoga for many years. His Iyengar style technique will help you perfect your alignment and his guidance on using props makes each student's experience individualized, depending on their needs. He truly cares about his students and he also has a great sense of humor! It's a lot of fun to be in his class and I learn a lot from him everyday. He has an attitude toward life that I admire very much.",
    },
    {
      name: "Jessica Albert",
      reviewsCount: 2,
      timeAgo: "2 years ago",
      initial: "J",
      text: "I am so grateful to have met Alpesh and completed my yttc with him. Focusing on alignment and performing correctly and safely every asana, Alpesh has a lot of knowledge and wants to share everything he knows, firmly but with love and affection for each student. The whole course was amazing and I highly recommend the school and all the teachers. I am grateful for the initiation into true yoga. Thank you ji.",
    },
    {
      name: "Dr. Anat Shayovits",
      reviewsCount: 4,
      timeAgo: "a year ago",
      initial: "A",
      text: "In one word-PROFESSIONAL!!! Alpesh is a caring teacher, loves his work and transfers his love to the students. He is full of knowledge, very kind and patient, and takes care of each and every student individually. Loved learning with him, I highly recommend joining his lessons! Thanks for a great experience, dear Alpesh.",
    },
    {
      name: "Ashutosh Agarwal",
      reviewsCount: 2,
      timeAgo: "10 months ago",
      initial: "A",
      text: "I feel extremely blessed and express my gratitude for the wonderful opportunity to be part of a TTC program with Alpesh yoga at Arambol, GOA. All the aspects of the program including Asanas, yoga philosophy, anatomy and meditation were well taken care off. Alpesh Sir has tremendous experience in Yoga asanas practice and he takes care of alignments and modifications very well. Overall the program helped me enhance my knowledge about the yogic practice, right alignment of asanas and improve my health.",
    },
    {
      name: "María Cristina Cepeda Cianci",
      reviewsCount: 1,
      timeAgo: "a year ago",
      initial: "M",
      text: "Yoga class with Alpesh is AMAZING... He really encourage you doing your best, with his classes Ive actually felt the whole benefit of one pose in my whole body, he is aware of so many details and help the student get the best of it. Im beyond happy to had the possibility to attend this class i HIGHLY recommend it to every level it is really good for your mind, soul and body.. Besides, it is REALLY REALLY FUN!!",
    },
    {
      name: "sivan okavi",
      reviewsCount: 3,
      timeAgo: "2 years ago",
      initial: "S",
      text: "Alpesh is a great yoga teacher, tough, demanding and at the same time compassionate and caring. My understanding of my practice evolved and progressed during the 200H TTC I did with him. Since I have graduated I've been teaching full time and secured I've inquired the best foundations to pass on to my students, and always enjoy coming back to India for a good healing practice with Alpesh :)",
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow pt-20">
        
        {/* Page Hero */}
        <section className="relative py-20 bg-forest-700 text-cream-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25 scale-102"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200')`,
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-4">
            <nav className="text-xs uppercase tracking-widest text-cream-200/60 flex items-center justify-center gap-2 mb-2 font-sans font-medium">
              <a href="/" className="hover:text-cream-100 hover:underline">Home</a>
              <span>/</span>
              <span className="text-cream-50">Testimonials</span>
            </nav>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Alumni Testimonials
            </h1>
            <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-2xl mx-auto font-light leading-relaxed">
              Discover what our international students say about their Hatha alignment courses and certifications.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-cream-100/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-semibold mb-2 block">
                Google Reviews
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Verified 5-Star Student Experiences
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((rev, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-3xl border border-sage-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative group"
                >
                  <div className="space-y-4">
                    {/* Stars and date */}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-0.5 text-terracotta-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-terracotta-500" />
                        ))}
                      </div>
                      <span className="text-[10px] font-sans text-sage-500 font-light">{rev.timeAgo}</span>
                    </div>

                    {/* Review text */}
                    <p className="font-sans text-xs sm:text-sm text-forest-600/80 leading-relaxed font-light">
                      "{rev.text}"
                    </p>
                  </div>

                  {/* Reviewer bio */}
                  <div className="pt-6 mt-6 border-t border-sage-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-forest-600 text-white font-serif font-bold text-sm flex items-center justify-center shrink-0">
                      {rev.initial}
                    </div>
                    <div className="text-xs">
                      <h4 className="font-serif font-bold text-forest-700">{rev.name}</h4>
                      <p className="font-sans text-[10px] text-sage-500 font-light">
                        {rev.reviewsCount} {rev.reviewsCount === 1 ? "review" : "reviews"} • Google
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="p-3 bg-cream-100 text-terracotta-500 rounded-full w-fit mx-auto shadow-sm">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
              Join Our Student Community
            </h2>
            <p className="font-sans text-sm sm:text-base text-forest-600/70 max-w-xl mx-auto leading-relaxed font-light">
              Experience traditional yoga alignment, structural biomechanics, and detailed adjustments directly from ranked instructors.
            </p>
            <div className="pt-4">
              <a
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-xs font-bold shadow-md transition-all duration-300"
              >
                <span>Enroll in Our Courses Now</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
