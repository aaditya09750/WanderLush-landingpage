import { IMAGES } from "./images";
import type { JourneyItem } from "@/types";

export const JOURNEYS_DATA: JourneyItem[] = [
  {
    className: "feature-wide",
    image: IMAGES.mountain,
    label: "THE BEAUTY OF BROMO",
    title: "Country above the clouds",
    top: "Most Interesting",
    description:
      "Witness golden sunrise hues breaking across the surreal Tengger caldera fog from King Kong Hill.",
    duration: "4.5 Hours",
    altitude: "2,770m ASL",
  },
  {
    className: "feature-tall",
    image: IMAGES.jeep,
    label: "JEEPS GO AROUND BROMO",
    title: "Lava Jeep Tour",
    description:
      "High-octane off-road safari driving vintage 4x4 Land Cruisers across the volcanic Sea of Sand.",
    duration: "3 Hours",
    altitude: "2,200m ASL",
  },
  {
    image: IMAGES.hike,
    label: "MEMORABLE EXPERIENCE",
    title: "Hiking on Bromo",
    description:
      "Trek across the volcanic basin and ascend 250 concrete steps directly to the active crater rim.",
    duration: "2.5 Hours",
    altitude: "2,329m ASL",
  },
  {
    image: IMAGES.temple,
    label: "CULTURE AND TRADITION",
    title: "Luhur Poten Temple",
    description:
      "A sacred Hindu sanctuary carved from natural black volcanic stone beneath Mount Batok.",
    duration: "1.5 Hours",
    altitude: "2,150m ASL",
  },
  {
    image: IMAGES.horse,
    label: "UNFORGETTABLE EXPERIENCE",
    title: "Bromo Horse Riding",
    description:
      "Glide effortlessly across the Sea of Sand on horseback guided by traditional Tenggerese riders.",
    duration: "1 Hour",
    altitude: "2,200m ASL",
  },
];
