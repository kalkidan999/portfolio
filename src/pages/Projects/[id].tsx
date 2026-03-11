import { useNavigate, useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import type { Project } from "../../types/project";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

const projectList: Project[] = projects;

export default function ProjectDetailPage() {
    const navigate = useNavigate()
    const {id } = useParams<{ id: string }>()
    const project = projectList.find((p) => p.id === parseInt(id ?? ""));

    if(!project) return <p>Project not found</p>

    return (
        <div className="max-w-5xl mx-auto py-12 px-6">
            <button
                onClick={() => navigate("/#projects")}
                className="mb-6 text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                ← Back to projects
                </button>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                    <span 
                        key={tech} 
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-sm">
                        {tech}
                    </span>
                 ))}
            </div>
            {project.screenshots && project.screenshots.length > 0 && (
                <div className=" mb-6 ">
                <h2 className="text-xl font-semibold">Screenshots</h2>
                <div className="flex flex-row gap-4 overflow-auto pb-4 snap-x snap-mandatory scrollbar-hide"> 
                    {project.screenshots.map((src, i) => (
                    <img 
                        key={i} 
                        src={src} 
                        alt={`${project.title} screenshot ${i+1}`} 
                        className="h-100 w-40 md:w-60 object-contain mr-6 rounded-lg shrink-0 snap-center shadow" />
                ))}
                </div>
                </div>
            )}

            {project.contributions && (
                <>
                    <h2 className="text-xl font-semibold mb-2">Contributions</h2>
                    <ul className="list-disc list-inside mb-6">
                        {project.contributions.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                </>
            )}

            <div className="flex gap-4">
                {project.github && (
                <a href={project.github} target="_blank" className="text-blue-600 hover:underline">
                    GitHub
                </a>
                )}
                {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" className="text-blue-600 hover:underline">
                    Live Demo
                </a>
                )}
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

        </div>
    )


}