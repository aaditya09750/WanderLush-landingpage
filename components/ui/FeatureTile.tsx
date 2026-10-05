"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { revealVariants } from "@/lib/animations";
import { cn } from "@/lib/cn";
import type { JourneyItem } from "@/types";

export interface FeatureTileProps {
  item: JourneyItem;
  index: number;
}

export function FeatureTile({ item, index }: FeatureTileProps) {
  const metaBadge = [item.altitude, item.duration].filter(Boolean).join(" • ");

  return (
    <motion.article
      {...revealVariants}
      transition={{ ...revealVariants.transition, delay: index * 0.06 }}
      className={cn("feature", item.className)}
      tabIndex={0}
      role="button"
      aria-label={`${item.title} - ${item.label}`}
    >
      {/* Background image that blurs with cinematic depth on hover */}
      <div
        className="feature-bg"
        style={{ backgroundImage: `url(${item.image})` }}
        aria-hidden="true"
      />

      <div className="image-shade" />

      {/* Top indicator: smooth exit on hover */}
      {item.top ? (
        <span className="feature-top">{item.top}</span>
      ) : (
        <span className="play" aria-label="Play video preview">
          <Play size={12} fill="currentColor" />
        </span>
      )}

      {/* Default Bottom Copy: smoothly fades out on hover to eliminate text overlap */}
      <div className="feature-copy">
        <small>{item.label}</small>
        <h3>{item.title}</h3>
        {index === 0 && (
          <div className="avatars" aria-label="Traveler reviews">
            <i />
            <i />
            <i />
          </div>
        )}
      </div>

      {/* On-Hover Minimal Informative Content Layer */}
      <div className="feature-hover-overlay" aria-hidden="true">
        <div className="feature-hover-inner">
          {metaBadge && (
            <div className="hover-badge">
              <span>{metaBadge}</span>
            </div>
          )}

          <h4>{item.title}</h4>

          {item.description && <p className="hover-desc">{item.description}</p>}

          <div className="hover-action">
            <span>Explore Experience</span>
            <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
