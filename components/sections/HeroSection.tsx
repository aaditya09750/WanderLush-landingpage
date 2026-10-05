"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CircleUserRound } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { HERO_SLIDES } from "@/constants";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.8, 0.2]);

  // Continuous looping slideshow every 5.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section ref={heroRef} id="home" className="hero">
      {/* Background Image Slideshow with Cinematic Blur Transition */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide.image}
          className="hero-parallax-bg"
          initial={{ opacity: 0, filter: "blur(24px)", scale: 1.14 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1.05 }}
          exit={{ opacity: 0, filter: "blur(24px)", scale: 0.98 }}
          transition={{ duration: 1.25, ease: [0.25, 1, 0.5, 1] }}
          style={{
            backgroundImage: `url(${currentSlide.image})`,
            y: bgY,
          }}
        />
      </AnimatePresence>

      <div className="hero-shade" />

      <Header />

      {/* Main Hero Content with In-Place Blur Crossfade */}
      <motion.div style={{ opacity: contentOpacity }} className="hero-center site-container">
        <div className="hero-content">
          <div className="hero-text-stage">
            <AnimatePresence>
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, filter: "blur(12px)", pointerEvents: "none" }}
                animate={{ opacity: 1, filter: "blur(0px)", pointerEvents: "auto" }}
                exit={{ opacity: 0, filter: "blur(12px)", pointerEvents: "none" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="hero-text-slide"
              >
                <span className="eyebrow">{currentSlide.eyebrow}</span>
                <h1>
                  {currentSlide.titleLine1}
                  <br />
                  <strong>{currentSlide.titleHighlight}</strong>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hero-actions">
            <a href={currentSlide.ctaHref} className="primary-btn">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={currentSlide.ctaText}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{ display: "inline-block" }}
                >
                  {currentSlide.ctaText}
                </motion.span>
              </AnimatePresence>
              <ArrowRight size={16} />
            </a>

            <div className="hero-indicators" aria-label="Hero carousel navigation">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`hero-dot ${idx === currentIndex ? "active" : ""}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Notes & Social Links */}
      <div className="hero-bottom-wrap site-container">
        <div className="hero-bottom">
          <div className="hero-notes-stage">
            <AnimatePresence>
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, filter: "blur(8px)", pointerEvents: "none" }}
                animate={{ opacity: 1, filter: "blur(0px)", pointerEvents: "auto" }}
                exit={{ opacity: 0, filter: "blur(8px)", pointerEvents: "none" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="hero-notes"
              >
                <div className="note">
                  <span>↗</span>
                  <p>{currentSlide.note1}</p>
                </div>
                <div className="note">
                  <span>
                    <CircleUserRound size={19} />
                  </span>
                  <p>{currentSlide.note2}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
