"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { revealVariants } from "@/lib/animations";

export function StorySection() {
  const storyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });

  // Sticky parallax translation on the dot pattern as user scrolls
  const patternY = useTransform(scrollYProgress, [0, 1], ["-70px", "70px"]);

  return (
    <section ref={storyRef} id="story" className="story">
      <motion.div
        className="story-sticky-pattern"
        style={{ y: patternY }}
        aria-hidden="true"
      />
      <div className="site-container story-content">
        <motion.p {...revealVariants}>
          The beauty of Bromo Mountain lies in its stunning landscapes, ranging from vast volcanic
          craters to picturesque savannahs and lush forests. The mountain is surrounded by a sea of
          sand, which gives it a surreal, otherworldly quality that is truly breathtaking.
        </motion.p>
      </div>
    </section>
  );
}
