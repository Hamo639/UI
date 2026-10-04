"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const contactLinks = [
  {
    label: "Gmail",
    value: "ahmednagdy938@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmednagdy938@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+20 128 897 6465",
    href: "https://wa.me/201288976465",
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    value: "Ahmed Nagdy",
    href: "https://www.linkedin.com/in/ahmed-nagdy-386830422/",
    icon: Mail,
  },
];

export default function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const message = form.get("message")?.toString().trim();

    if (!name || !email || !message) return;

    const phoneNumber = "201288976465";

    const whatsappMessage = `
Hello Ahmed,

My name is ${name}.

Email: ${email}

Project Details:
${message}
    `.trim();

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
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
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -right-32 top-10
            h-96 w-96
            rounded-full
            bg-(--primary)/6
            blur-[130px]
          "
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -left-40 bottom-0
            h-80 w-80
            rounded-full
            bg-(--primary)/4
            blur-[130px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                Contact
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              Have an idea?
              <br />
              Let&apos;s turn it into something{" "}
              <span className="text-(--primary)">
                meaningful.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                ease,
              }}
              className="
                max-w-md
                text-[15px] leading-7
                text-(--muted)
                md:text-base
              "
            >
              Whether you&apos;re building a new product, improving an existing
              experience or simply want to explore an idea, I&apos;d love to
              hear about it.
            </motion.p>

            {/* Contact Links */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="mt-10 space-y-3"
            >
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 16,
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.55,
                          ease,
                        },
                      },
                    }}
                    whileHover={{
                      x: 4,
                    }}
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group flex items-center
                        justify-between
                        border-b border-(--border)
                        py-5
                      "
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="
                            flex h-11 w-11
                            items-center justify-center
                            rounded-xl
                            border border-(--border)
                            bg-(--surface)
                            transition-all duration-300
                            group-hover:border-(--primary)
                            group-hover:bg-(--primary)
                            group-hover:text-white
                          "
                        >
                          <Icon size={18} />
                        </span>

                        <div>
                          <p
                            className="
                              text-xs uppercase
                              tracking-[0.13em]
                              text-(--muted)
                            "
                          >
                            {item.label}
                          </p>

                          <p className="mt-1 text-sm font-medium">
                            {item.value}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="
                          text-(--muted)
                          transition-all duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-(--primary)
                        "
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
              className="mt-8 flex items-center gap-3"
            >
              <motion.span
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-(--primary)"
              />

              <p className="text-xs text-(--muted)">
                Available for selected projects
              </p>
            </motion.div>
          </div>

          {/* FORM */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div
              className="
                relative overflow-hidden
                rounded-[2rem]
                border border-(--border)
                bg-(--surface)
                p-6
                md:p-8
                lg:p-10
              "
            >
              {/* top decoration */}
              <div
                className="
                  absolute right-0 top-0
                  h-28 w-28
                  translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-(--primary)/10
                  blur-2xl
                "
              />

              <div className="relative">
                <div className="mb-8">
                  <p className="text-xl font-medium tracking-[-0.025em]">
                    Tell me about your project.
                  </p>

                  <p className="mt-2 text-sm text-(--muted)">
                    Your message will continue directly on WhatsApp.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="
                          mb-2 block
                          text-xs font-medium
                          uppercase tracking-[0.12em]
                          text-(--muted)
                        "
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="
                          h-12 w-full
                          rounded-xl
                          border border-(--border)
                          bg-(--background)
                          px-4
                          text-sm
                          outline-none
                          transition-all duration-300
                          placeholder:text-(--muted)/50
                          focus:border-(--primary)
                          focus:ring-2
                          focus:ring-(--primary)/10
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="
                          mb-2 block
                          text-xs font-medium
                          uppercase tracking-[0.12em]
                          text-(--muted)
                        "
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="
                          h-12 w-full
                          rounded-xl
                          border border-(--border)
                          bg-(--background)
                          px-4
                          text-sm
                          outline-none
                          transition-all duration-300
                          placeholder:text-(--muted)/50
                          focus:border-(--primary)
                          focus:ring-2
                          focus:ring-(--primary)/10
                        "
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="
                        mb-2 block
                        text-xs font-medium
                        uppercase tracking-[0.12em]
                        text-(--muted)
                      "
                    >
                      Project Details
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      required
                      placeholder="Tell me a little about your project, goals and what you're looking for..."
                      className="
                        w-full resize-none
                        rounded-xl
                        border border-(--border)
                        bg-(--background)
                        px-4 py-4
                        text-sm leading-6
                        outline-none
                        transition-all duration-300
                        placeholder:text-(--muted)/50
                        focus:border-(--primary)
                        focus:ring-2
                        focus:ring-(--primary)/10
                      "
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      group flex h-13 w-full
                      items-center justify-between
                      rounded-full
                      bg-(--primary)
                      px-6
                      text-sm font-medium
                      text-white
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-(--primary-hover)
                    "
                  >
                    Continue on WhatsApp

                    <span
                      className="
                        flex h-8 w-8
                        items-center justify-center
                        rounded-full
                        bg-white/15
                      "
                    >
                      <Send
                        size={15}
                        className="
                          transition-transform duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}