import React, { useState } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollToSection";
import { useActiveSection } from "../../hooks/useActiveSection";
import ThemeToggle from "../layout/ThemeToggle";


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();

    const sectionIds = ["about", "skills", "projects", "contact"];
    const activeSection = useActiveSection(sectionIds);
    console.log(activeSection);

    const isHome = location.pathname === "/";

    const linkStyle = (id: string) => `transition ${
            isHome && activeSection === id ? "text-blue-600 font-semibold" : "hover:text-blue-600"
    }`;


        return (
            <nav className="w-full flex justify-between items-center py-6 px-8 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 shadow-sm sticky top-0 z-50">
                
                 {/* Left side: Logo / Name */}
                 <div className="text-2xl font-semibold tracking-tight text-neutral-700 dark:text-neutral-300">Kalkidan Demes</div>
          
                    {/* Desktop Links */}
                 <div
                    className={`md:hidden absolute top-full left-0 w-full bg-white  dark:bg-neutral-950 shadow-md flex flex-col items-center gap-6 overflow-hidden transition-all duration-300 text-gray-700 dark:text-neutral-300  ${
                        isOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
                    }`}
                    >
                    <button onClick={() => scrollToSection(navigate, "about")}>About</button>
                    <button onClick={() => scrollToSection(navigate, "skills")}>Skills</button>
                    <button onClick={() => scrollToSection(navigate, "projects")}>Projects</button>
                    <button onClick={() => scrollToSection(navigate, "contact")}>Contact</button>
                </div>
                 
                
                {/* Right side: Navigation links */}
                <div className="hidden md:flex gap-6  font-medium">
                    <button
                     onClick={() => scrollToSection(navigate, "about")}
                     className={linkStyle("about")}>About </button>
                    <button
                     onClick={() => scrollToSection(navigate, "skills")}
                     className={linkStyle("skills")}>Skills </button>
                    <button
                     onClick={() => scrollToSection(navigate, "projects")}
                     className={linkStyle("projects")}>Projects </button>
                      <button
                    onClick={() => scrollToSection(navigate, "contact")}
                    className={linkStyle("contact")}
                    >
                    Contact
                    </button>
                    <NavLink
                        to="/resume"
                        className={({ isActive }) =>
                        `transition ${
                        isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
                        }`
                    }
                                >Resume</NavLink>
                    <ThemeToggle />
                    
                </div>
                    
                 {/* Hamburger */}
                <button
                    className="md:hidden relative w-6 h-6"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                      <span
                            className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                            isOpen ? "rotate-45 top-3" : "top-1"
                            }`}
                      ></span>

                      <span
                            className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                            isOpen ? "opacity-0" : "top-3"
                            }`}
                      ></span>

                      <span
                            className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                            isOpen ? "-rotate-45 top-3" : "top-5"
                            }`}
                      ></span>
                 </button>
                 {/* Mobile Menu */}
            
            </nav>
        );
}

export default Navbar;