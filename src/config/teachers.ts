export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

/** Real teachers from https://alpeshyoga.com/our-yoga-teachers/ */
export const teachers: Teacher[] = [
  {
    id: "alpesh-patwari",
    name: "Alpesh Patwari",
    role: "Founder, Alpesh Yoga",
    bio: "Alpesh Patwari has over 20 years of experience teaching traditional yoga. He has trained students from around the world and specializes in Hatha Yoga, Meditation, and Yoga Therapy. Founder of Alpesh Yoga, he is internationally recognized for his expertise in Yoga Teacher Training, Anatomy, Pranayama, Meditation, and holistic wellness. His teaching combines traditional yogic wisdom with modern techniques to help students improve their physical, mental, and spiritual well-being.",
    image: "/teachers/alpesh-patwari.jpg",
  },
  {
    id: "acharya-swami-suresh",
    name: "Acharya Swami Suresh",
    role: "Anatomy Yoga Teacher",
    bio: "Swami Acharya Suresh is a well-known renowned yogi who has organized numerous meditation and yoga retreats across the world. With more than 15 years of teaching experience and a deep yogic journey, he instructs Yoga Philosophy and Yoga Anatomy.",
    image: "/teachers/acharya-swami-suresh.jpg",
  },
  {
    id: "benu",
    name: "Benu",
    role: "The Spiritual Master",
    bio: "Benu has spent much of his life traveling and learning from various spiritual gurus as well as taking formal education and training. He holds a Diploma in Yoga from Kerala University and a Diploma from Bihar School of Yoga. His vast formal education and practical experience give students unique insights into yoga, meditation, and spirituality.",
    image: "/teachers/benu.jpg",
  },
  {
    id: "reejo",
    name: "Reejo Ji",
    role: "E-RYT 500 Yoga Instructor",
    bio: "Reejo Ji is an E-RYT-500 yoga instructor with 10 years of teaching experience, certified by Yoga Alliance USA. A lead trainer formerly at Yoga Vimoksha, Goa, and a yoga & wellness consultant at Sanda Retreats. Certified 200-hour from Sivananda Yoga Vedanta Centre (Kerala) and 300-hour Ashtanga Vinyasa from Ashtanga Yoga Mysore, with deep practice in Osho meditation and classical Hatha.",
    image: "/teachers/reejo.jpg",
  },
  {
    id: "durgesh",
    name: "Durgesh",
    role: "Yoga Teacher",
    bio: "Ms. Durgesh has been practising yoga for more than 15 years across traditional and modern schools. With 8+ years teaching Hatha, Tantra, restorative Vinyasa, Yin, meditation, pranayama, therapeutic and prenatal yoga, anatomy, alignment, shatkarmas, philosophy, Marma therapy, and Ayurveda. She holds a one-year diploma in yoga science and Yoga Alliance 200- and 300-hour certifications.",
    image: "/teachers/durgesh.jpg",
  },
];
