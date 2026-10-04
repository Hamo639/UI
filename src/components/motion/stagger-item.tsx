"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export default function StaggerItem({
  children,
  className = "",
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 22,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}