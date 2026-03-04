// src/utils/scrollToSection.ts
// src/utils/scrollToSection.ts
import type { NavigateFunction } from "react-router-dom";

export const scrollToSection = (navigate: NavigateFunction, sectionId: string) => {
  navigate("/"); // Go to home page
  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, 50); // Tiny delay ensures DOM is loaded
};