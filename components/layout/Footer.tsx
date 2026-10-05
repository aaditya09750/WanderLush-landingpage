"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Mail, Video } from "lucide-react";
import { FOOTER_LINKS } from "@/constants/navigation";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const footerRef = useRef<HTMLElement>(null);

  // Parallax reveal effect as user reaches page bottom
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-70, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.65, 0.88, 1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer ref={footerRef} id="footer">
      <motion.div
        style={{ y: parallaxY, opacity: footerOpacity }}
        className="site-container footer-container"
      >
        <div className="footer-grid">
          {/* Navigation Links Group */}
          <div className="footer-nav-columns">
            <div className="footer-col">
              <h4>About</h4>
              <div className="footer-links-list">
                {FOOTER_LINKS.about.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <div className="footer-links-list">
                {FOOTER_LINKS.support.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4>FAQ</h4>
              <div className="footer-links-list">
                {FOOTER_LINKS.faq.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter & Socials Group */}
          <div className="newsletter">
            <h4>Newsletter</h4>
            <p>
              Don&apos;t miss out on the exciting world of travel - subscribe now and embark on a
              journey of discovery with us.
            </p>

            <form onSubmit={handleSubmit}>
              <Mail size={14} aria-hidden="true" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                placeholder="Enter your email"
                required
                disabled={status === "loading"}
              />
              <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "..." : status === "success" ? "Subscribed!" : "Submit"}
              </button>
            </form>

            {status === "error" && (
              <small style={{ color: "#ff6b6b", display: "block", marginTop: "6px" }}>
                Something went wrong. Please try again.
              </small>
            )}

            <div className="footer-social" aria-label="Social media channels">
              <a href="#" aria-label="Instagram">
                <Camera size={12} />
              </a>
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Youtube">
                <Video size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">©2026 Wanderlush, All Rights Reserved</p>
          <p className="developed-by">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/aaditya09750/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
            >
              Aaditya Gunjal
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
