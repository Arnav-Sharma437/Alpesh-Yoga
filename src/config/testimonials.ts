export interface Testimonial {
  name: string;
  quote: string;
  source?: string;
  date?: string;
  country?: string;
}

/** Real Google reviews featured on https://alpeshyoga.com/ (5.0 · 109+ reviews) */
export const testimonials: Testimonial[] = [
  {
    name: "Ayush Bisaria",
    date: "15 Apr 2024",
    source: "Google",
    quote:
      "Alpesh sir is very knowledgeable, supportive and pays personal attention to each student. His classes are top notch and the course is highly recommended 10/10. He customised all asanas for my pre-hernia recovery — by the end of my 100-hour course the pain in my abdomen was gone for the first time in 18 months. The combination of asana, pranayama, meditation and sattvik food worked wonders.",
  },
  {
    name: "Hemant Sharma",
    date: "16 Feb 2024",
    source: "Google",
    quote:
      "I recently completed a yoga program at Alpesh Yoga School, and I am genuinely impressed with the transformative experience. Alpesh is knowledgeable, patient, and creates a welcoming atmosphere for practitioners of all levels. Highly recommend this yoga school.",
  },
  {
    name: "Steve Corbett",
    date: "10 Feb 2024",
    source: "Google",
    quote:
      "Alpesh is amazing. This was my first time doing yoga properly and I kept going back because he is so loving while at the same time pushing us with love and humour to stay and hold the postures.",
  },
  {
    name: "V. H.",
    date: "6 Feb 2024",
    source: "Google",
    quote:
      "I completed the 5-day pranayama and meditation course with Alpesh and it was much better than I could have hoped. Lessons were structured: breathing, Iyengar yoga, afternoon meditation and yoga philosophy. All teachers were very qualified and committed. I recommend Alpesh Yoga with a clear conscience.",
  },
  {
    name: "Ylva Traxler",
    date: "29 Dec 2023",
    source: "Google",
    quote:
      "Alpesh is the very best yoga teacher I ever got the honor of encountering. His knowledge regarding alignment is vast, and his way of teaching is clear and caring. Taking his TTC and drop-in classes immensely improved my asana practice and had a profound effect on my emotional and spiritual being.",
  },
  {
    name: "Nadja Waterkamp",
    date: "17 Dec 2023",
    source: "Google",
    quote:
      "It was a pleasure practicing with Alpesh. He explains the alignment really well and tells you the benefits of the asanas. Iyengar yoga can be very challenging but he also made it fun. Highly recommend getting more insight on Iyengar yoga with him.",
  },
  {
    name: "Elzė Vy",
    date: "7 Oct 2023",
    source: "Google",
    quote:
      "Learning yoga from Alpesh made me challenge old beliefs about my flexibility and strength and start believing in myself and my body. He teaches with strict love, funky humour and a careful eye — highly recommend for everybody to come and experience.",
  },
  {
    name: "Václav Holenda",
    date: "6 Oct 2023",
    source: "Google",
    quote:
      "Smiling, willing teachers you will definitely find at Alpesh. My first public lesson in Dharamkot was Pincha according to Iyengar and I was very happy that it's not as difficult as it looks. Looking forward to trying the school in Goa too.",
  },
  {
    name: "Priyam Pandey",
    source: "Google",
    quote:
      "Highly experienced yoga teacher!! I feel really blessed to train with Alpesh in Goa. His props help you make the correct pose rather than doing it wrong. He focuses on each student and motivates everyone — never miss his sessions when in Arambol!",
  },
  {
    name: "Jessica Albert",
    source: "Google",
    quote:
      "I am so grateful to have met Alpesh and completed my YTTC with him. Focusing on alignment and performing every asana correctly and safely, Alpesh has a lot of knowledge and wants to share everything he knows, firmly but with love. Highly recommend the school and all the teachers.",
  },
];
