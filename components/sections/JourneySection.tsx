"use client";

import React from "react";
import { motion } from "framer-motion";
import { FeatureTile } from "@/components/ui/FeatureTile";
import { JOURNEYS_DATA } from "@/constants/journeys";
import { revealVariants } from "@/lib/animations";

export function JourneySection() {
  return (
    <section id="journey" className="section journey-section">
      <div className="site-container">
        <motion.div {...revealVariants} className="section-intro split-intro">
          <h2>
            The Journey Of
            <br />
            Bromo Mountain
          </h2>
          <div>
            <p>
              This journey offers an unforgettable experience that blends adventure, culture, and
              natural beauty. Located in the Bromo Tengger Semeru National Park.
            </p>
            <div className="button-row">
              <button type="button" className="dark-btn">
                Remind me
              </button>
              <a href="#story" className="line-btn">
                Learn More
              </a>
            </div>
          </div>
        </motion.div>

        <div className="journey-grid">
          {JOURNEYS_DATA.map((item, i) => (
            <FeatureTile key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
