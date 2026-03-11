import React from "react";
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";
import projects from "../../data/projects.json"
import { type Project } from "../../types/project";
import ProjectCard from "./projectsCard";


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
                <ProjectCard key={project.id} project={project}/>
              ))}
            </div>
        </section>
    );
}

export default ProjectsSection;