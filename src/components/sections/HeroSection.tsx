import React from "react";
import { useNavigate } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollToSection";

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="hero-section min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-neutral-950">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-neutral-700 dark:text-neutral-300">Senior Mobile & Full-Stack Engineer</h1>
            {/* Subheading */}
            <p className="text-lg md:text-xl mb-6 max-w-xl text-neutral-700 dark:text-neutral-300">
                Building Scalable, Clean, and Minimal Corporate Applications | Mobile & Web Solutions</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
                <button onClick={() => scrollToSection(navigate, "projects")} className="btn-primary px-6 py-3">
          View Projects
        </button>
        <button
        onClick={() => scrollToSection(navigate, "contact")}
        className="btn-secondary px-6 py-3"
      >
        Contact Me
      </button>
            </div>
        </section>
    );
}

export default HeroSection;