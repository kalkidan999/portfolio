import React, {type ReactNode} from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../sections/Footer";

interface MainLayoutProps {
    children : ReactNode;
}


const MainLayout: React.FC<MainLayoutProps> = ( {children} ) => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
            {/* Top Navigation */}
            <Navbar />

            {/* Page content container */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}



export default MainLayout;