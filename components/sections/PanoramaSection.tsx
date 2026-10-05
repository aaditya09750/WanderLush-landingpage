"use client";

import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants/images";
import { PEAKS_DATA } from "@/constants/site";
import { revealVariants } from "@/lib/animations";

export function PanoramaSection() {
  const standardPeaks = PEAKS_DATA.filter((p) => !p.isFocal);
  const focalPeak = PEAKS_DATA.find((p) => p.isFocal);

  return (
    <section className="panorama-wrap">
      <div className="site-container">
        <motion.div {...revealVariants} className="panorama">
          <div className="panorama-bg" style={{ backgroundImage: `url(${IMAGES.mountain})` }} />
          <div className="panorama-shade" />

          <h2>
            Enjoy Your
            <br />
            Travel
          </h2>

          {standardPeaks.map((peak) => (
            <span key={peak.name} className={`peak ${peak.className || ""}`}>
              {peak.name}
              <br />
              {peak.elevation}
            </span>
          ))}

          {focalPeak && (
            <div className="color-window">
              <div
                className="color-window-img"
                style={{ backgroundImage: `url(${IMAGES.mountain})` }}
              />
              <span>
                {focalPeak.name}
                <br />
                {focalPeak.elevation}
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
