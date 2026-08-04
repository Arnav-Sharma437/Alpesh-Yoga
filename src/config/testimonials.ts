export interface Testimonial {
  name: string;
  quote: string;
  source?: string;
  date?: string;
  country?: string;
  reviewsCount?: number;
}

/** Google reviews provided by the client for Alpesh Yoga */
export const testimonials: Testimonial[] = [
  {
    name: "Lisa Markowitz",
    date: "10 months ago",
    source: "Google",
    reviewsCount: 8,
    quote:
      "Alpesh's studio is a great place for learners of any experience, from beginners to people who have practiced yoga for many years. His Iyengar style technique will help you perfect your alignment and his guidance on using props makes each student's experience individualized, depending on their needs. He truly cares about his students and he also has a great sense of humor! It's a lot of fun to be in his class and I learn a lot from him everyday. He has an attitude toward life that I admire very much.",
  },
  {
    name: "Priyam Pandey",
    date: "10 months ago",
    source: "Google",
    reviewsCount: 2,
    quote:
      "Highly experience yoga teacher!! I feel really blessed to be here in goa and get training from Alpesh!! His props and tools are really good, it helps making the correct pose or asan rather than doing it wrong!! He takes time explaining each pose and make everyone do that in correct form!! He focus on each student and motivate everyone to do our best!! He is our perfect yoga guru!! You should never miss being part of his yoga sessions when in Arambol!!",
  },
  {
    name: "Sivan Okavi",
    date: "2 years ago",
    source: "Google",
    reviewsCount: 3,
    quote:
      "Alpesh is a great yoga teacher, tough, demanding and at the same time compassionate and caring. My understanding of my practice evolved and progressed during the 200H TTC I did with him. Since I have graduated I've been teaching full time and I've acquired the best foundations to pass on to my students, and always enjoy coming back to India for a good healing practice with Alpesh :)",
  },
  {
    name: "María Cristina Cepeda Cianci",
    date: "a year ago",
    source: "Google",
    reviewsCount: 1,
    quote:
      "Yoga class with Alpesh is AMAZING... He really encourage you doing your best, with his classes I've actually felt the whole benefit of one pose in my whole body, he is aware of so many details and help the student get the best of it. Im beyond happy to had the possibility to attend this class i HIGHLY recommend it to every level it is really good for your mind, soul and body.. Besides, it is REALLY REALLY FUN!!",
  },
  {
    name: "Ashutosh Agarwal",
    date: "10 months ago",
    source: "Google",
    reviewsCount: 2,
    quote:
      "I feel extremely blessed and express my gratitude for the wonderful opportunity to be part of a TTC program with Alpesh yoga at Arambol, GOA. All the aspects of the program including Asanas, yoga philosophy, anatomy and meditation were well taken care off. Alpesh Sir has tremendous experience in Yoga asanas practice and he takes care of alignments and modifications very well. Overall the program helped me enhance my knowledge about the yogic practice, right alignment of asanas and improve my health.",
  },
  {
    name: "Dr. Anat Shayovits",
    date: "a year ago",
    source: "Google",
    reviewsCount: 4,
    quote:
      "In one word-PROFESSIONAL!!! Alpesh is a caring teacher, loves his work and transfers his love to the students. He is full of knowledge, very kind and patient, and takes care of each and every student individually. Loved learning with him, I highly recommend joining his lessons! Thanks for a great experience, dear Alpesh.",
  },
  {
    name: "Jessica Albert",
    date: "2 years ago",
    source: "Google",
    reviewsCount: 2,
    quote:
      "I am so grateful to have met Alpesh and completed my yttc with him. Focusing on alignment and performing correctly and safely every asana, Alpesh has a lot of knowledge and wants to share everything he knows, firmly but with love and affection for each student. The whole course was amazing and I highly recommend the school and all the teachers. I am grateful for the initiation into true yoga. Thank you ji.",
  },
];
