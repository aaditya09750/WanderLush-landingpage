export const SITE_CONFIG = {
  name: "Wanderlush",
  title: "Wanderlush | Experience the Magic of Bromo",
  tagline: "A Place Where Nature and Adventure Unite",
  description:
    "Discover Mount Bromo, its volcanic landscapes, memorable experiences, and exceptional stays with Wanderlush.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wanderlush-eight.vercel.app",
  author: "Aaditya Gunjal",
  developer: {
    name: "Aaditya Gunjal",
    role: "Full Stack Developer",
    email: "aadigunjal0975@gmail.com",
    phone: "+91 84335 09521",
    linkedin: "https://www.linkedin.com/in/aaditya09750/",
    location: "Dombivli, Maharashtra, India",
  },
  socials: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
};

export const PEAKS_DATA = [
  { name: "Gunung Semeru", elevation: "MT +3676", className: "peak-one" },
  { name: "Gunung Widodaren", elevation: "MT +2614", className: "peak-two" },
  { name: "Gunung Bromo", elevation: "MT +2392", className: "peak-three" },
  { name: "Gunung Batok", elevation: "MT +2400", isFocal: true },
];
