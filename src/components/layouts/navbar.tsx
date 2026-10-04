"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

import ThemeToggle from "./theme-toggle";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  {
    label: "Work",
    href: "#work",
    section: "work",
  },
  {
    label: "About",
    href: "#about",
    section: "about",
  },
  {
    label: "Experience",
    href: "#experience",
    section: "experience",
  },
  {
    label: "Contact",
    href: "#contact",
    section: "contact",
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.section))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div
        className="
          mx-auto flex h-16 max-w-7xl
          items-center justify-between
          rounded-2xl
          border border-(--border)
          bg-(--background)/80
          px-4
          shadow-[0_8px_30px_rgba(0,0,0,0.05)]
          backdrop-blur-xl
          sm:px-5
          lg:px-6
        "
      >
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-xl
              bg-(--foreground)
              text-sm font-semibold
              text-(--background)
              transition-all duration-300
              group-hover:bg-(--primary)
              group-hover:text-white
            "
          >
            AN
          </span>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[-0.02em]">
              Ahmed Nagdy
            </p>

            <p className="text-[11px] text-(--muted)">
              UI/UX Designer
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;

            return (
              <Link
                key={link.section}
                href={link.href}
                className={`
                  group relative
                  rounded-full
                  px-4 py-2
                  text-sm font-medium
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-(--foreground)"
                      : "text-(--muted) hover:text-(--foreground)"
                  }
                `}
              >
                {link.label}

                <span
                  className={`
                    absolute bottom-1 left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-(--primary)
                    transition-all duration-300
                    ${
                      isActive
                        ? "w-4"
                        : "w-0 group-hover:w-4"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* DESKTOP CTA */}
          <Link
            href="#contact"
            className="
              group hidden
              items-center gap-2
              rounded-full
              bg-(--foreground)
              px-5 py-2.5
              text-sm font-medium
              text-(--background)
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-(--primary)
              hover:text-white
              sm:flex
            "
          >
            Let&apos;s talk

            <ArrowUpRight
              size={15}
              className="
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>

          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open navigation"
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-(--border)
                    bg-(--surface)
                    transition-all duration-300
                    hover:border-(--primary)
                    hover:text-(--primary)
                    md:hidden
                  "
                />
              }
            >
              <Menu size={18} />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                w-[88%]
                border-l border-(--border)
                bg-(--background)
                p-0
                sm:max-w-[420px]
              "
            >
              {/* Accessible title */}
              <SheetTitle className="sr-only">
                Navigation Menu
              </SheetTitle>

              {/* MOBILE HEADER */}
              <SheetHeader className="border-b border-(--border) p-6 text-left">
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-xl
                      bg-(--foreground)
                      text-sm font-semibold
                      text-(--background)
                    "
                  >
                    AN
                  </span>

                  <div>
                    <p className="text-sm font-semibold">
                      Ahmed Nagdy
                    </p>

                    <p className="mt-0.5 text-xs font-normal text-(--muted)">
                      UI/UX & Product Designer
                    </p>
                  </div>
                </div>
              </SheetHeader>

              <div className="flex h-[calc(100dvh-89px)] flex-col p-6">
                {/* MOBILE LINKS */}
                <nav className="flex flex-col">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.section;

                    return (
                      <SheetClose
                        key={link.section}
                        render={
                          <Link
                            href={link.href}
                            className="
                              group flex
                              items-center justify-between
                              border-b border-(--border)
                              py-5
                            "
                          />
                        }
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-(--muted)">
                            0{index + 1}
                          </span>

                          <span
                            className={`
                              text-2xl font-medium
                              tracking-[-0.03em]
                              transition-colors duration-300
                              ${
                                isActive
                                  ? "text-(--primary)"
                                  : "text-(--foreground) group-hover:text-(--primary)"
                              }
                            `}
                          >
                            {link.label}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={18}
                          className="
                            text-(--muted)
                            transition-all duration-300
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                            group-hover:text-(--primary)
                          "
                        />
                      </SheetClose>
                    );
                  })}
                </nav>

                {/* MOBILE BOTTOM */}
                <div className="mt-auto">
                  <SheetClose
                    render={
                      <Link
                        href="#contact"
                        className="
                          group flex w-full
                          items-center justify-between
                          rounded-2xl
                          bg-(--primary)
                          px-5 py-4
                          text-sm font-medium
                          text-white
                          transition-all duration-300
                          hover:-translate-y-0.5
                        "
                      />
                    }
                  >
                    Start a project

                    <ArrowUpRight
                      size={17}
                      className="
                        transition-transform duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </SheetClose>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-xs text-(--muted)">
                      Available for selected projects
                    </p>

                    <span className="h-2 w-2 rounded-full bg-(--primary)" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}