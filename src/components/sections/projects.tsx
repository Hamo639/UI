"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    id: "01",
    title: "Fintech Mobile App",
    category: "Product Design · UX Research",
    description:
      "A complete redesign of a digital banking experience focused on clarity, accessibility and faster everyday tasks.",
    image: "/projects/fintech.jpg",
  },
  {
    id: "02",
    title: "Healthcare Platform",
    category: "UX Strategy · UI Design",
    description:
      "A healthcare experience designed to simplify booking, patient journeys and access to essential medical services.",
    image: "/projects/healthcare.jpg",
  },
  {
    id: "03",
    title: "Travel Experience",
    category: "Product Design · Interaction",
    description:
      "A modern travel booking experience built around simplicity, discovery and a smoother planning journey.",
    image: "/projects/travel.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="
        relative overflow-hidden
        border-t border-(--border)
        px-6 py-24
        lg:px-10 lg:py-32
      "
    >
      {/* Ambient motion */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -right-36 top-24
            h-96 w-96
            rounded-full
            bg-(--primary)/5
            blur-[130px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease,
                }}
                className="h-px w-9 origin-left bg-(--primary)"
              />

              <p className="text-sm font-medium text-(--muted)">
                Selected Work
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              ease,
            }}
            className="lg:col-span-8 lg:col-start-5"
          >
            <h2
              className="
                max-w-4xl
                text-4xl font-medium
                leading-[1.05]
                tracking-[-0.045em]
                md:text-5xl
                lg:text-6xl
              "
            >
              Projects built around
              <br />
              <span className="text-(--primary)">
                real problems.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="space-y-28 lg:space-y-40">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.85,
                  ease,
                }}
                className="group"
              >
                <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Image */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isReversed ? 40 : -40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.85,
                      ease,
                    }}
                    className={`
                      relative
                      lg:col-span-8
                      ${
                        isReversed
                          ? "lg:order-2"
                          : "lg:order-1"
                      }
                    `}
                  >
                    <div
                      className="
                        relative aspect-16/10
                        overflow-hidden
                        rounded-4xl
                        border border-(--border)
                        bg-(--surface)
                      "
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.01, 1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        whileHover={{
                          scale: 1.045,
                        }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* overlay */}
                      <div
                        className="
                          absolute inset-0
                          bg-linear-to-t
                          from-black/25
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* project number */}
                      <div className="absolute left-5 top-5">
                        <span
                          className="
                            rounded-full
                            border border-white/15
                            bg-black/25
                            px-3 py-1.5
                            text-xs font-medium
                            text-white
                            backdrop-blur-md
                          "
                        >
                          {project.id}
                        </span>
                      </div>

                      {/* arrow */}
                      <div
                        className="
                          absolute right-5 top-5
                          flex h-12 w-12
                          translate-y-2
                          items-center justify-center
                          rounded-full
                          bg-white
                          text-black
                          opacity-0
                          shadow-lg
                          transition-all duration-300
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        <ArrowUpRight
                          size={18}
                          className="
                            transition-transform duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />
                      </div>

                      {/* Bottom label */}
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-xs uppercase tracking-[0.14em] text-white/60">
                          Case Study
                        </p>

                        <p className="mt-1 text-sm font-medium text-white">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    {/* back frame */}
                    <div
                      className="
                        absolute -bottom-4 -right-4 -z-10
                        h-full w-full
                        rounded-4xl
                        border border-(--primary)/20
                      "
                    />
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isReversed ? -25 : 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.75,
                      delay: 0.08,
                      ease,
                    }}
                    className={`
                      lg:col-span-4
                      lg:pb-6
                      ${
                        isReversed
                          ? "lg:order-1"
                          : "lg:order-2"
                      }
                    `}
                  >
                    <div className="border-b border-(--border) pb-5">
                      <p
                        className="
                          text-xs uppercase
                          tracking-[0.14em]
                          text-(--muted)
                        "
                      >
                        Project {project.id}
                      </p>
                    </div>

                    <motion.h3
                      whileHover={{ x: 4 }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        mt-7
                        text-3xl font-medium
                        tracking-[-0.035em]
                        md:text-4xl
                      "
                    >
                      {project.title}
                    </motion.h3>

                    <p className="mt-3 text-sm font-medium text-(--primary)">
                      {project.category}
                    </p>

                    <p
                      className="
                        mt-5 max-w-sm
                        text-[15px] leading-7
                        text-(--muted)
                      "
                    >
                      {project.description}
                    </p>

                    <button
                      type="button"
                      className="
                        group/button mt-8
                        inline-flex items-center gap-2
                        text-sm font-medium
                        transition-colors duration-300
                        hover:text-(--primary)
                      "
                    >
                      View project

                      <ArrowUpRight
                        size={16}
                        className="
                          transition-transform duration-300
                          group-hover/button:-translate-y-0.5
                          group-hover/button:translate-x-0.5
                        "
                      />
                    </button>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}