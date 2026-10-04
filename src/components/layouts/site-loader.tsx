"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SiteLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            fixed inset-0 z-9999
            flex items-center justify-center
            bg-(--background)
          "
        >
          {/* Background decoration */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-105 w-105
              rounded-full
              bg-(--primary)
              blur-[140px]
            "
          />

          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease,
              }}
              className="
                flex h-20 w-20
                items-center justify-center
                rounded-3xl
                bg-(--foreground)
                text-2xl font-semibold
                text-(--background)
              "
            >
              AN
              <span className="text-(--primary)">.</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.6,
                ease,
              }}
              className="mt-6 text-center"
            >
              <p className="text-lg font-medium">
                Ahmed Nagdy
              </p>

              <p className="mt-1 text-sm text-(--muted)">
                UI/UX & Product Designer
              </p>
            </motion.div>

            {/* Loading line */}
            <div
              className="
                mt-8 h-0.5 w-52
                overflow-hidden
                rounded-full
                bg-(--border)
              "
            >
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 4.3,
                  ease,
                }}
                className="
                  h-full w-full
                  origin-left
                  bg-(--primary)
                "
              />
            </div>

            {/* Loading text */}
            <motion.p
              animate={{
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mt-4 text-xs
                uppercase
                tracking-[0.2em]
                text-(--muted)
              "
            >
              Crafting the experience
            </motion.p>
          </div>

          {/* Corner numbers */}
          <p className="absolute bottom-6 left-6 text-xs text-(--muted)">
            Portfolio © 2026
          </p>

          <p className="absolute bottom-6 right-6 text-xs text-(--muted)">
            00 — 100
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}