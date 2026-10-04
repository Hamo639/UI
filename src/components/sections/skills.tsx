"use client";

import { motion } from "motion/react";
import {
  Boxes,
  
  GitBranch,
  Search,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "2+", label: "Real Projects" },
  { value: "6", label: "Design Tools" },
  { value: "2", label: "Internships" },
  { value: "100%", label: "Craft" },
];

const skills = [
  {
    name: "Figma & Prototyping",
    description: "High-fidelity UI, interactive prototypes and product flows.",
    level: 95,
    icon: GitBranch,
  },
  {
    name: "Design Systems",
    description: "Reusable components, patterns and scalable visual systems.",
    level: 90,
    icon: Boxes,
  },
  {
    name: "Wireframes & User Flows",
    description: "Structuring journeys before moving into visual design.",
    level: 92,
    icon: GitBranch,
  },
  {
    name: "UX Research",
    description: "Understanding users, problems and product requirements.",
    level: 85,
    icon: Search,
  },
  {
    name: "Visual & UI Design",
    description: "Clear hierarchy, typography and polished interfaces.",
    level: 88,
    icon: WandSparkles,
  },
  {
    name: "AI-Assisted Workflow",
    description: "Using AI to accelerate ideation, research and iteration.",
    level: 80,
    icon: Sparkles,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            x: [0, 28, 0],
            y: [0, -18, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -right-32 top-20
            h-80 w-80
            rounded-full
            bg-(--primary)/5
            blur-[120px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
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
                Skills & Numbers
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
              Turning ideas into products through{" "}
              <span className="text-(--primary)">
                design thinking.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 18,
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
              whileHover={{
                y: -5,
              }}
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-(--border)
                bg-(--surface)
                p-6
                transition-colors duration-300
                hover:border-(--primary)
              "
            >
              <span
                className="
                  absolute right-5 top-4
                  text-xs font-medium
                  text-(--muted)
                "
              >
                0{index + 1}
              </span>

              <p
                className="
                  text-4xl font-medium
                  tracking-tighter
                  text-(--primary)
                  md:text-5xl
                "
              >
                {stat.value}
              </p>

              <p
                className="
                  mt-4 text-xs
                  uppercase tracking-[0.14em]
                  text-(--muted)
                "
              >
                {stat.label}
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + index * 0.06,
                  duration: 0.7,
                  ease,
                }}
                className="
                  absolute bottom-0 left-0
                  h-0.5 w-full
                  origin-left
                  bg-(--primary)
                "
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Header */}
        <div className="mt-24 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p
              className="
                text-xs uppercase
                tracking-[0.14em]
                text-(--muted)
              "
            >
              Core capabilities
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p
              className="
                max-w-xl text-[15px]
                leading-7 text-(--muted)
                md:text-base
              "
            >
              A mix of research, product thinking and visual design skills used
              to shape clear and usable digital experiences.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            mt-10 grid gap-4
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.name}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 24,
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
                className="
                  group relative
                  flex min-h-70 flex-col
                  overflow-hidden
                  rounded-3xl
                  border border-(--border)
                  bg-(--surface)
                  p-6
                  transition-colors duration-300
                  hover:border-(--primary)
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      border border-(--border)
                      bg-(--background)
                      transition-all duration-300
                      group-hover:border-(--primary)
                      group-hover:bg-(--primary)
                      group-hover:text-white
                    "
                  >
                    <Icon size={18} />
                  </div>

                  <p className="text-xs font-medium text-(--muted)">
                    {skill.level}%
                  </p>
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3
                    className="
                      text-xl font-medium
                      tracking-[-0.03em]
                      transition-colors duration-300
                      group-hover:text-(--primary)
                    "
                  >
                    {skill.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-(--muted)">
                    {skill.description}
                  </p>
                </div>

                {/* Progress */}
                <div className="mt-auto pt-8">
                  <div className="h-1 overflow-hidden rounded-full bg-(--border)">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        ease,
                      }}
                      className="h-full rounded-full bg-(--primary)"
                    />
                  </div>
                </div>

                {/* Subtle decorative glow */}
                <div
                  className="
                    absolute -bottom-12 -right-12
                    h-32 w-32
                    rounded-full
                    bg-(--primary)/0
                    blur-3xl
                    transition-colors duration-500
                    group-hover:bg-(--primary)/10
                  "
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}