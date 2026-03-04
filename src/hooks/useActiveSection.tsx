import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) =>{
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // offset for navbar height

            for(const id of sectionIds){
                const element = document.getElementById(id);
                if(!element) continue;

                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;

                if(scrollPosition > offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds]);

    return activeSection;
}