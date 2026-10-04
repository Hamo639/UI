"use client";

import { motion } from "motion/react";

export default function RevealLine() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-px origin-left bg-(--border)"
    />
  );
}