import React from "react";
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

const AboutSection: React.FC = () => {
    const {ref, isVisible} = useFadeInOnScroll();
    return (
        <section id="about" 
        ref={ref}
         className={
            `py-20 px-4 text-center transition-all duration-700 bg-white dark:bg-neutral-950
            ${isVisible ? "opacity-100 transalte-y-0" : "opacity-0 translate-y-10"}`
          }
        >
             {/* Section Title */}
            <h2 className="text-3xl font-bold mb-6 text-neutral-700 dark:text-neutral-300">About Me</h2>
             {/* Summary */}
            <p className="text-gray-700 dark:text-neutral-300 mb-6">
                I am a senior Mobile & Full-Stack Engineer with extensive experience designing and delivering scalable, clean, and minimal mobile and web applications. Skilled in building fintech, e-commerce, ride-sharing, and multi-role platforms, including wallets, banking apps, loan management systems, and agricultural service apps. Experienced with Flutter, React, Node.js, MongoDB, Firebase, and modern full-stack architectures, with expertise in state management, secure transactions, real-time systems, and production-grade deployments. Passionate about creating efficient, maintainable, and user-friendly applications that scale globally.
            </p>
             {/* CTA Button */}
            <button className="btn-primary">Download Resume</button>
        </section>
    );
}

export default AboutSection;