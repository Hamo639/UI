"use client";

import { motion } from "motion/react";
import {
 
  Boxes,
  PenTool,
  MousePointer2,
  Workflow,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const tools = [
  {
    number: "01",
    name: "Figma",
    description:
      "Interface design, high-fidelity screens and interactive prototypes.",
    icon: PenTool,
  },
  {
    number: "02",
    name: "Design Systems",
    description:
      "Reusable components, patterns and scalable visual foundations.",
    icon: Boxes,
  },
  {
    number: "03",
    name: "Wireframing",
    description:
      "Early structure, layout exploration and product direction.",
    icon: PenTool,
  },
  {
    number: "04",
    name: "Prototyping",
    description:
      "Interactive flows for testing ideas before development.",
    icon: MousePointer2,
  },
  {
    number: "05",
    name: "User Flows",
    description:
      "Mapping journeys, decisions and key product interactions.",
    icon: Workflow,
  },
  {
    number: "06",
    name: "AI Workflow",
    description:
      "Accelerating research, exploration and design iteration.",
    icon: Sparkles,
  },
];

export default function Tools() {
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
            absolute -left-36 top-16
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
                Design Toolkit
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
              The toolkit behind every{" "}
              <span className="text-(--primary)">
                experience.
              </span>
            </h2>

            <p
              className="
                mt-6 max-w-xl
                text-[15px] leading-7
                text-(--muted)
                md:text-base
              "
            >
              From early exploration to polished interfaces, these are the
              methods and tools I use to move ideas toward usable products.
            </p>
          </motion.div>
        </div>

        {/* Toolkit Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            mt-20 grid gap-4
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.article
                key={tool.name}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 26,
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
                  min-h-72
                  overflow-hidden
                  rounded-3xl
                  border border-(--border)
                  bg-(--surface)
                  p-6
                  transition-colors duration-300
                  hover:border-(--primary)
                  lg:p-7
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 4 + index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      flex h-12 w-12
                      items-center justify-center
                      rounded-2xl
                      border border-(--border)
                      bg-(--background)
                      transition-all duration-300
                      group-hover:border-(--primary)
                      group-hover:bg-(--primary)
                      group-hover:text-white
                    "
                  >
                    <Icon size={19} />
                  </motion.div>

                  <span
                    className="
                      text-xs font-medium
                      tracking-[0.12em]
                      text-(--muted)
                    "
                  >
                    {tool.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-12">
                  <h3
                    className="
                      text-2xl font-medium
                      tracking-[-0.035em]
                      transition-colors duration-300
                      group-hover:text-(--primary)
                    "
                  >
                    {tool.name}
                  </h3>

                  <p
                    className="
                      mt-4 max-w-xs
                      text-sm leading-7
                      text-(--muted)
                    "
                  >
                    {tool.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="absolute inset-x-6 bottom-6">
                  <div className="h-px overflow-hidden bg-(--border)">
                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.15 + index * 0.05,
                        duration: 0.75,
                        ease,
                      }}
                      className="
                        h-full w-1/3
                        origin-left
                        bg-(--primary)
                        transition-all duration-500
                        group-hover:w-full
                      "
                    />
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute -bottom-16 -right-16
                    h-40 w-40
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