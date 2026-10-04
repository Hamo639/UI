"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const skills = [
  "Product Design",
  "UX Research",
  "UI Design",
  "Wireframing",
  "Prototyping",
  "Design Systems",
];

export default function About() {
  return (
    <section
      id="about"
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
            y: [0, -18, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -right-28 top-10
            h-72 w-72
            rounded-full
            bg-(--primary)/5
            blur-[120px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Label */}
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
                About
              </p>
            </div>
          </motion.div>

          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
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
              Good design should make complexity feel{" "}
              <span className="text-(--primary)">
                simple.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* DESCRIPTION GRID */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="
              rounded-3xl
              border border-(--border)
              bg-(--surface)
              p-6
              lg:col-span-4 lg:col-start-5
              lg:p-7
            "
          >
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-(--primary)/10
                text-(--primary)
              "
            >
              <Sparkles size={18} />
            </div>

            <p
              className="
                mt-6
                text-[15px]
                leading-7
                text-(--muted)
                md:text-base
              "
            >
              I&apos;m Ahmed Nagdy, a UI/UX and Product Designer focused on
              building clear, useful and visually consistent digital
              experiences.
            </p>
          </motion.div>

          {/* Right text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.08,
              duration: 0.7,
              ease,
            }}
            className="
              flex flex-col justify-between
              border-t border-(--border)
              pt-6
              lg:col-span-4
              lg:border-t-0
              lg:border-l
              lg:pl-8
              lg:pt-0
            "
          >
            <p
              className="
                text-[15px]
                leading-7
                text-(--muted)
                md:text-base
              "
            >
              My process combines research, product thinking and visual design
              to make complex flows easier to understand and easier to use.
            </p>

            <div className="mt-8">
              <a
                href="#work"
                className="
                  group inline-flex items-center gap-2
                  text-sm font-medium
                  transition-colors duration-300
                  hover:text-(--primary)
                "
              >
                Explore selected work

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
        </div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="mt-20 border-t border-(--border) pt-8"
        >
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p
                className="
                  text-xs uppercase
                  tracking-[0.14em]
                  text-(--muted)
                "
              >
                What I do
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.07,
                    },
                  },
                }}
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 12,
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease,
                        },
                      },
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      rounded-full
                      border border-(--border)
                      bg-(--background)
                      px-4 py-2
                      text-sm
                      transition-colors duration-300
                      hover:border-(--primary)
                      hover:text-(--primary)
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}