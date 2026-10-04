"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 lg:px-10 lg:pb-24 lg:pt-36">
      {/* Ambient background motion */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -right-24 top-20
            h-80 w-80
            rounded-full
            bg-(--primary)/7
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -left-32 bottom-0
            h-72 w-72
            rounded-full
            bg-(--primary)/5
            blur-[120px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid min-h-[78vh] items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* LEFT */}
          <div className="lg:col-span-7">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-(--primary)" />

              <p className="text-sm font-medium text-(--muted)">
                Ahmed Nagdy · UI/UX & Product Designer
              </p>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease,
              }}
              className="
                max-w-190
                text-[clamp(2.9rem,5.4vw,5.7rem)]
                font-medium
                leading-[0.98]
                tracking-[-0.055em]
              "
            >
              Designing digital
              <br />
              products with{" "}
              <span className="text-(--primary)">
                clarity
              </span>
              <br />
              and meaningful{" "}
              <span className="text-(--primary)">
                experiences.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.18,
                duration: 0.65,
                ease,
              }}
              className="
                mt-7 max-w-xl
                text-[15px] leading-7
                text-(--muted)
                md:text-base
              "
            >
              I transform complex ideas into simple, usable and visually
              consistent digital products through research, systems and
              thoughtful interface design.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.65,
                ease,
              }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <a
                href="#work"
                className="
                  group inline-flex items-center gap-2
                  rounded-full
                  bg-(--foreground)
                  px-5 py-3
                  text-sm font-medium
                  text-(--background)
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-(--primary)
                  hover:text-white
                "
              >
                View selected work

                <ArrowDownRight
                  size={16}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:translate-y-0.5
                  "
                />
              </a>

              <a
                href="#contact"
                className="
                  group inline-flex items-center gap-2
                  text-sm font-medium
                  transition-colors duration-300
                  hover:text-(--primary)
                "
              >
                Let&apos;s work together

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </motion.div>

            {/* Bottom meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="
                mt-14 grid max-w-xl grid-cols-2
                gap-8
                border-t border-(--border)
                pt-5
                sm:grid-cols-3
              "
            >
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-(--muted)">
                  Focus
                </p>

                <p className="mt-2 text-sm font-medium">
                  Product Design
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-(--muted)">
                  Expertise
                </p>

                <p className="mt-2 text-sm font-medium">
                  UI · UX · Systems
                </p>
              </div>

              <div className="hidden sm:block">
                <p className="text-xs uppercase tracking-[0.14em] text-(--muted)">
                  Tools
                </p>

                <p className="mt-2 text-sm font-medium">
                  Figma · AI
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{
                opacity: 0,
                x: 35,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.12,
                duration: 0.9,
                ease,
              }}
              className="relative mx-auto max-w-115 lg:ml-auto"
            >
              {/* floating number */}
              <motion.p
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute -left-12 top-14
                  hidden
                  text-[7rem] font-medium
                  leading-none
                  tracking-[-0.08em]
                  text-(--primary)/10
                  lg:block
                "
              >
                01
              </motion.p>

              {/* portrait */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative aspect-4/5
                  overflow-hidden
                  rounded-[1.8rem]
                  border border-(--border)
                  bg-(--surface)
                "
              >
                <Image
                  src="/mohamed-nagdy.jpg"
                  alt="Ahmed Nagdy"
                  fill
                  priority
                  className="
                    object-cover object-center
                    transition-transform duration-700
                    hover:scale-[1.025]
                  "
                />

                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t from-black/60 via-black/15 to-transparent" />

                {/* top badge */}
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute right-4 top-4
                    flex items-center gap-2
                    rounded-full
                    border border-white/15
                    bg-black/25
                    px-3 py-2
                    text-xs text-white
                    backdrop-blur-md
                  "
                >
                  <Sparkles
                    size={13}
                    className="text-(--primary)"
                  />

                  Available for work
                </motion.div>

                {/* bottom info */}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Ahmed Nagdy
                    </p>

                    <p className="mt-1 text-xs text-white/60">
                      Product & UI/UX Designer
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="
                      group flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      bg-(--primary)
                      text-white
                      transition-transform duration-300
                      hover:scale-105
                    "
                  >
                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>
                </div>
              </motion.div>

              {/* bottom floating card */}
              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute -bottom-7 -left-6
                  hidden
                  rounded-2xl
                  border border-(--border)
                  bg-(--background)/85
                  px-5 py-4
                  shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                  backdrop-blur-xl
                  md:block
                "
              >
                <p className="text-xs uppercase tracking-[0.14em] text-(--muted)">
                  Currently exploring
                </p>

                <p className="mt-2 text-sm font-medium">
                  Product Design · UX
                </p>
              </motion.div>

              {/* back frame */}
              <div
                className="
                  absolute -bottom-4 -right-4 -z-10
                  h-full w-full
                  rounded-[1.8rem]
                  border border-(--primary)/20
                "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}