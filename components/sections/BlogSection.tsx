"use client";

import React from "react";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/ui/BlogCard";
import { IMAGES } from "@/constants/images";
import { revealVariants } from "@/lib/animations";
import type { BlogPost } from "@/types";

const MAIN_POST: BlogPost = {
  id: "blog-1",
  category: "TRAVEL",
  title: "Exploring Local Culture and Traditions",
  image: IMAGES.dance,
  alt: "Traditional dancers near Mount Bromo",
  isMain: true,
  author: {
    name: "Pambudi Smith",
    avatar: IMAGES.avatars.author,
    date: "10th May 2023",
  },
};

const SIDE_POSTS: BlogPost[] = [
  {
    id: "blog-2",
    category: "TRAVEL",
    title: "The Beauty of the Sea of Sand",
    image: IMAGES.jeep,
    alt: "Jeep crossing the Bromo sea of sand",
  },
  {
    id: "blog-3",
    category: "TRAVEL",
    title: "Sunrise in Bromo Tengger Semeru",
    image: IMAGES.mountain,
    alt: "Sunrise over Bromo",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="section blog-section">
      <div className="site-container">
        <motion.div {...revealVariants} className="split-intro blog-head">
          <h2>
            Travel Blog
            <br />
            Around Bromo
          </h2>
          <div>
            <p>
              This blog features beautiful photographs and personal experiences, providing insights
              into the local culture and customs, and inspiring travel enthusiasts to explore this
              enchanting destination.
            </p>
            <div className="button-row">
              <button type="button" className="dark-btn">
                Remind me
              </button>
              <a href="#footer" className="line-btn">
                Learn More
              </a>
            </div>
          </div>
        </motion.div>

        <div className="blog-grid">
          <BlogCard post={MAIN_POST} isMain />
          <div className="side-posts">
            {SIDE_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
