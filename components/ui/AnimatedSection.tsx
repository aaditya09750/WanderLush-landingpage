"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { revealVariants } from "@/lib/animations";

export interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedSection({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      {...revealVariants}
      transition={{ ...revealVariants.transition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
