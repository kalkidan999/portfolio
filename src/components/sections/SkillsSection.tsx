import React from "react";
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

const SkillsSection: React.FC = () => {
     const {ref, isVisible} = useFadeInOnScroll();
    const skills = ["Dart", "Flutter", "Node.Js", "iOS", "Android", "Bloc","Provider", "TypeScript", "React", "REST APIs", "Firebase", "MongoDB"];
    return (
        <section id="skills"  ref={ref} 
        className={
            `py-20 px-4 text-center transition-all duration-700  bg-white dark:bg-neutral-950
            ${isVisible ? "opacity-100 transalte-y-0" : "opacity-0 translate-y-10"}`
          }
        >
            {/* Section Title */}
            <h2 className="text-3xl font-bold mb-8 text-neutral-700 dark:text-neutral-300">
                Core Skills</h2>
            {/* Skills Grid */}
            <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill) => (
                    <span 
                    key={skill}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700  dark:text-gray-300"
                    >
                    {skill}</span>
                ))

                }
            </div>
        </section>
    );
}

export default SkillsSection;