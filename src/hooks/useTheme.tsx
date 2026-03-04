import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
   
  // Determine initial theme
  const getInitialTheme = (): Theme => {
    const saved = localStorage.getItem("theme") as Theme | null;

    if (saved) return saved; // Use user preference if exists

    // Default to system preference if no saved theme
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return systemPrefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme to <html> and sync localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme manually
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};