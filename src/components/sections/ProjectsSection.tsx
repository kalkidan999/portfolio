import React from "react";
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";
import projects from "../../data/projects.json"
import { type Project } from "../../types/project";

const projectList: Project[] = projects;



const ProjectsSection: React.FC = () => {
  const {ref, isVisible} = useFadeInOnScroll();

    return (
        <section 
          id="projects" 
          ref={ref}
          className={
            `projects-section py-20 px-4 text-center transition-all duration-700  bg-white dark:bg-neutral-950
            ${isVisible ? "opacity-100 transalte-y-0" : "opacity-0 translate-y-10"}`
          }>
             {/* Section Title */}
            <h2 className="text-3xl font-bold mb-8 text-neutral-700 dark:text-neutral-300">Featured Projects</h2>
             {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-col-3 gap-8">
                {projectList.map((project) => (
                    <div
                    key={project.title}
                    className="border border-gray-300 rounded-md p-6 text-left transition-all duration-300 hover:shadow-lg hover:shadow-blue-900 hover:-translate-y-1 hover:border-gray-300"
                    >
                    <h3 className="text-xl font-semibold mb-2 text-neutral-700 dark:text-neutral-300">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-gray-500 dark:text-gray-400 text-sm"> {tech}</span>
                    ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;