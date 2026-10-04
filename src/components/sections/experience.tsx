"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const experiences = [
  {
    year: "2026",
    role: "UI/UX Design Intern",
    company: "Company Name",
    description:
      "Worked on user flows, wireframes, visual interfaces and interactive prototypes for real digital products.",
  },
  {
    year: "2025",
    role: "UI/UX Design Intern",
    company: "Company Name",
    description:
      "Contributed to interface design, component systems and UX improvements across multiple product experiences.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative overflow-hidden
        border-t border-(--border)
        px-6 py-24
        lg:px-10 lg:py-32
      "
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 24, 0],
            y: [0, -18, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -left-32 bottom-0
            h-80 w-80
            rounded-full
            bg-(--primary)/5
            blur-[120px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              ease,
            }}
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
                Experience
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
                max-w-3xl
                text-4xl font-medium
                leading-[1.06]
                tracking-[-0.045em]
                md:text-5xl
                lg:text-6xl
              "
            >
              Learning, designing and growing through{" "}
              <span className="text-(--primary)">
                real work.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-20">
          {/* Vertical line */}
          <div
            className="
              absolute left-[23px] top-2 bottom-2
              hidden w-px
              bg-(--border)
              md:block
            "
          />

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <motion.article
                key={`${item.role}-${index}`}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.65,
                  ease,
                }}
                className="
                  group relative
                  rounded-3xl
                  border border-(--border)
                  bg-(--surface)
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-(--primary)
                  md:ml-12
                  lg:p-8
                "
              >
                {/* Timeline dot */}
                <motion.span
                  animate={{
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute -left-[43px] top-8
                    hidden h-4 w-4
                    rounded-full
                    border-4 border-(--background)
                    bg-(--primary)
                    md:block
                  "
                />

                <div className="grid gap-8 lg:grid-cols-[120px_1fr_1.2fr_auto] lg:items-start">
                  {/* Year */}
                  <div>
                    <p
                      className="
                        text-sm font-medium
                        text-(--primary)
                      "
                    >
                      {item.year}
                    </p>

                    <p
                      className="
                        mt-3 text-5xl
                        font-medium
                        leading-none
                        tracking-[-0.06em]
                        text-(--foreground)/5
                      "
                    >
                      0{index + 1}
                    </p>
                  </div>

                  {/* Role */}
                  <div>
                    <p
                      className="
                        text-xs uppercase
                        tracking-[0.14em]
                        text-(--muted)
                      "
                    >
                      Role
                    </p>

                    <h3
                      className="
                        mt-3
                        text-2xl font-medium
                        tracking-[-0.03em]
                      "
                    >
                      {item.role}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm font-medium
                        text-(--primary)
                      "
                    >
                      {item.company}
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <p
                      className="
                        text-xs uppercase
                        tracking-[0.14em]
                        text-(--muted)
                      "
                    >
                      What I worked on
                    </p>

                    <p
                      className="
                        mt-3
                        max-w-xl
                        text-sm leading-7
                        text-(--muted)
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:block">
                    <div
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        border border-(--border)
                        transition-all duration-300
                        group-hover:border-(--primary)
                        group-hover:bg-(--primary)
                        group-hover:text-white
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
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}