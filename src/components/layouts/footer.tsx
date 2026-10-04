import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-medium">
              AN<span className="text-(--primary)">.</span>
            </p>

            <p className="mt-2 text-sm text-(--muted)">
              Ahmed Nagdy — UI/UX & Product Designer
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm">
            <Link
              href="https://www.linkedin.com/in/ahmed-nagdy-386830422/"
              target="_blank"
              className="group flex items-center gap-1.5 text-(--muted) transition-colors hover:text-(--foreground)"
            >
              LinkedIn
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="text-(--muted) transition-colors hover:text-(--foreground)"
            >
              Contact
            </Link>

            <a
              href="https://wa.me/201288976465"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--muted) transition-colors hover:text-(--foreground)"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-(--border) pt-5 text-xs text-(--muted) sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Mohamed Nagdy
          </p>

          <p>
            Designed with clarity. Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}