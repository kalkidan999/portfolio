import { FaAppStore, FaGooglePlay } from "react-icons/fa"
import type { Project } from "../../types/project"
import { Link } from "react-router-dom"

interface ProjectCardProps {
  project: Project
}


export default function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <Link 
        to={`/projects/${project.id}`}
                    key={project.title}
                    className="border border-gray-300 rounded-md p-6 text-left transition-all duration-300 hover:shadow-lg hover:shadow-blue-900 hover:-translate-y-1 hover:border-gray-300"
                    >
                    <h3 className="text-xl font-semibold mb-2 text-neutral-700 dark:text-neutral-300">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-gray-500 dark:text-gray-400 text-sm"> {tech}</span>
                    ))}
                      <div className="flex gap-4 text-sm font-medium">
                          <div className="flex flex-row items-center gap-4 mt-5"> 
                            <span className="text-blue-600 group-hover:underline">
          View Case Study
        </span>

                            {project.playstoreLink && (
                            <a
                              href={project.playstoreLink}
                              target="_blank"
                               className="text-blue-500 hover:text-blue-400 transition transform hover:scale-150"
                            >
                             <FaGooglePlay size={25}/>
                            </a>
                          )}
                           {project.playstoreLink && (
                            <a
                              href={project.playstoreLink}
                              target="_blank"
                              className="text-blue-500 hover:text-blue-400 transition transform hover:scale-150"
                            >
                             <FaAppStore size={25}/>
                            </a>
                          )}
                          </div>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              className="text-blue-600 hover:underline"
                            >
                              Live Demo
                            </a>
                          )}

                      </div>
                    </Link>
    // <div className="border border-gray-200 dark:border-neutral-800 rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1">

    //   <h3 className="text-xl font-semibold mb-2">
    //     {project.title}
    //   </h3>

    //   <p className="text-gray-600 dark:text-gray-400 mb-4">
    //     {project.description}
    //   </p>

    //   <div className="flex flex-wrap gap-2 mb-4">
    //     {project.tech.map((tech) => (
    //       <span
    //         key={tech}
    //         className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-neutral-800"
    //       >
    //         {tech}
    //       </span>
    //     ))}
    //   </div>

    //   <div className="flex gap-4 text-sm font-medium">

    //     {project.github && (
    //       <a
    //         href={project.github}
    //         target="_blank"
    //         className="text-blue-600 hover:underline"
    //       >
    //         GitHub
    //       </a>
    //     )}

    //     {project.liveUrl && (
    //       <a
    //         href={project.liveUrl}
    //         target="_blank"
    //         className="text-blue-600 hover:underline"
    //       >
    //         Live Demo
    //       </a>
    //     )}

    //   </div>
    // </div>
  )
}