export const revealVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

export const heroContentVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

export const scaleHoverVariants = {
  whileHover: { scale: 1.035 },
  transition: { duration: 0.3, ease: "easeOut" as const },
};
