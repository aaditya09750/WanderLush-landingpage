import { IMAGES } from "./images";
import type { HeroSlide } from "@/types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: IMAGES.hero,
    eyebrow: "A Place Where Nature and Adventure Unite",
    titleLine1: "Experience the",
    titleHighlight: "Magic of Bromo",
    ctaText: "Explore Now",
    ctaHref: "#journey",
    note1: "Provides a visual representation of destinations, attractions, and activities.",
    note2: "Provides travelers with more accurate and reliable perspective of the destination.",
  },
  {
    id: 2,
    image: IMAGES.mountain,
    eyebrow: "Untamed Caldera Horizons & Endless Dawn",
    titleLine1: "Witness the",
    titleHighlight: "Golden Sunrise",
    ctaText: "Discover Trails",
    ctaHref: "#panorama",
    note1: "Watch morning fog drift across volcanic craters at 2,400m altitude.",
    note2: "Breathtaking viewpoints overlooking active peaks and glowing skies.",
  },
  {
    id: 3,
    image: IMAGES.jeep,
    eyebrow: "Adrenaline Meets Ancient Volcanic Dunes",
    titleLine1: "Conquer the",
    titleHighlight: "Sea of Sand",
    ctaText: "View Expeditions",
    ctaHref: "#journey",
    note1: "Classic 4x4 safari expedition across lunar-like black volcanic ash.",
    note2: "Guided excursions led by seasoned local Tenggerese expedition masters.",
  },
];
