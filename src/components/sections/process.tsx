"use client";

import { motion } from "motion/react";
import {
  Search,
  Focus,
  PenTool,
  CheckCircle2,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the problem, users, context and product goals before moving into solutions.",
    icon: Search,
  },
  {
    number: "02",
    title: "Define",
    description:
      "Turn research into clear priorities, user flows and a focused design direction.",
    icon: Focus,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Explore interfaces, interactions and visual systems through iterative design.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Test ideas, gather feedback and refine the experience before final delivery.",
    icon: CheckCircle2,
  },
];

export default function Process() {
  return (
    <section
      className="
        relative overflow-hidden
        border-t border-(--border)
        px-6 py-24
        lg:px-10 lg:py-32
      "
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 24, 0],
            y: [0, -16, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -right-32 top-12
            h-80 w-80
            rounded-full
            bg-(--primary)/5
            blur-[120px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-12">
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
                Process
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
                leading-[1.06]
                tracking-[-0.045em]
                md:text-5xl
                lg:text-6xl
              "
            >
              From understanding the problem to shaping a{" "}
              <span className="text-(--primary)">
                meaningful experience.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Process timeline */}
        <div className="relative mt-20">
          {/* Desktop line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-(--border) lg:block" />

          {/* Animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease,
            }}
            className="
              absolute left-0 right-0 top-7
              hidden h-px
              origin-left
              bg-(--primary)
              lg:block
            "
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 28,
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.65,
                        ease,
                      },
                    },
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative pt-0 lg:pt-14"
                >
                  {/* Timeline point */}
                  <div
                    className="
                      absolute left-0 top-2
                      z-10 hidden
                      h-11 w-11
                      items-center justify-center
                      rounded-full
                      border border-(--border)
                      bg-(--background)
                      transition-all duration-300
                      group-hover:border-(--primary)
                      group-hover:bg-(--primary)
                      group-hover:text-white
                      lg:flex
                    "
                  >
                    <Icon size={17} />
                  </div>

                  <div
                    className="
                      h-full
                      rounded-3xl
                      border border-(--border)
                      bg-(--surface)
                      p-6
                      transition-all duration-300
                      group-hover:border-(--primary)
                      lg:p-7
                    "
                  >
                    {/* Mobile icon */}
                    <div
                      className="
                        mb-8 flex h-11 w-11
                        items-center justify-center
                        rounded-xl
                        bg-(--primary)/10
                        text-(--primary)
                        lg:hidden
                      "
                    >
                      <Icon size={18} />
                    </div>

                    <div className="flex items-start justify-between">
                      <p
                        className="
                          text-xs font-medium
                          tracking-[0.14em]
                          text-(--primary)
                        "
                      >
                        {step.number}
                      </p>

                      <motion.span
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="h-2 w-2 rounded-full bg-(--primary)"
                      />
                    </div>

                    <h3
                      className="
                        mt-10
                        text-2xl font-medium
                        tracking-[-0.03em]
                        transition-colors duration-300
                        group-hover:text-(--primary)
                      "
                    >
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-(--muted)">
                      {step.description}
                    </p>

                    <div className="mt-8 h-px w-full bg-(--border)">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "40%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2,
                          ease,
                        }}
                        className="h-full bg-(--primary)"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}