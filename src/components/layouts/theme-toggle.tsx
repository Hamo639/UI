"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-(--border)" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--surface) transition-all duration-300 hover:border-(--primary)"
    >
      {isDark ? (
        <Sun
          size={17}
          className="text-(--primary) transition-transform duration-300 group-hover:rotate-12"
        />
      ) : (
        <Moon
          size={17}
          className="transition-transform duration-300 group-hover:-rotate-12"
        />
      )}
    </button>
  );
}