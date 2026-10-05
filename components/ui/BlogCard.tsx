"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { revealVariants } from "@/lib/animations";
import type { BlogPost } from "@/types";

export interface BlogCardProps {
  post: BlogPost;
  isMain?: boolean;
}

export function BlogCard({ post, isMain = false }: BlogCardProps) {
  if (isMain) {
    return (
      <motion.article {...revealVariants} className="main-post">
        <div style={{ position: "relative", width: "100%", height: "405px" }}>
          <Image
            src={post.image}
            alt={post.alt}
            fill
            sizes="(max-width: 800px) 100vw, 65vw"
            style={{ objectFit: "cover", borderRadius: "8px" }}
            priority
          />
        </div>
        <small>{post.category}</small>
        <h3>{post.title}</h3>
        {post.author && (
          <div className="author">
            <div style={{ position: "relative", width: "35px", height: "35px" }}>
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                sizes="35px"
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </div>
            <p>
              <b>{post.author.name}</b>
              <span>{post.author.date}</span>
            </p>
          </div>
        )}
      </motion.article>
    );
  }

  return (
    <motion.article {...revealVariants}>
      <div style={{ position: "relative", width: "100%", height: "169px" }}>
        <Image
          src={post.image}
          alt={post.alt}
          fill
          sizes="(max-width: 800px) 50vw, 30vw"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </div>
      <small>{post.category}</small>
      <h3>{post.title}</h3>
    </motion.article>
  );
}
