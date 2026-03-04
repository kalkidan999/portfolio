import React from "react";
import HeroSection from "../../components/sections/HeroSection";
import SkillsSection from "../../components/sections/SkillsSection";
import ProjectsSection from "../../components/sections/ProjectsSection";
import AboutSection from "../../components/sections/AboutSection";
import ContactCTASection from "../../components/sections/ContactCTASection";


const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <HeroSection />

            {/* Skills Section */}
            <SkillsSection />

            {/* Featured Projects Section */}
            <ProjectsSection />
            
            {/* About Preview Section */}
            <AboutSection />

            {/* Contact Call-to-Action Section */}
            <ContactCTASection />

            {/* Footer */}
            {/* <Footer /> */}

        </div>
    )
}

export default Home;