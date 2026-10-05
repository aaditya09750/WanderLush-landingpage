"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { RatingBadge } from "./RatingBadge";
import type { StayItem } from "@/types";

export interface StayCardProps {
  stay: StayItem;
  index: number;
}

export function StayCard({ stay, index }: StayCardProps) {
  const imageList = stay.images && stay.images.length > 0 ? stay.images : [stay.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Staggered continuous loop so cards don't flip simultaneously
  useEffect(() => {
    if (imageList.length <= 1) return;
    const intervalMs = 4500 + (index % 3) * 700;
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % imageList.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [imageList.length, index]);

  const currentImage = imageList[activeImageIndex];

  return (
    <article className="stay">
      {/* Background Image Carousel with Blur Transition */}
      <div className="stay-image-stage">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            className="stay-bg-image"
            initial={{ opacity: 0, filter: "blur(18px)", scale: 1.06 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1.0 }}
            exit={{ opacity: 0, filter: "blur(18px)", scale: 0.97 }}
            transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
            style={{ backgroundImage: `url(${currentImage})` }}
          />
        </AnimatePresence>
      </div>

      <div className="image-shade" />

      {/* Interactive Micro Dots for Card Photos */}
      {imageList.length > 1 && (
        <div className="stay-dots" aria-label="Stay gallery indicators">
          {imageList.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(dotIdx);
              }}
              className={`stay-dot ${dotIdx === activeImageIndex ? "active" : ""}`}
              aria-label={`View photo ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}

      <RatingBadge rating={stay.rating || "4.9"} />

      <div className="stay-copy">
        <h3>{stay.name}</h3>
        <p>
          <MapPin size={11} aria-hidden="true" />
          {stay.place}
        </p>
      </div>

      <strong>{stay.price}</strong>
    </article>
  );
}
