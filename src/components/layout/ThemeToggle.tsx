import { useTheme } from "../../hooks/useTheme";
import { motion } from "framer-motion";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-colors duration-300"
        >   
            <motion.div
                animate={{ x: theme === "dark" ? 20 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-4 h-4 bg-yellow-400 dark:bg-gray-200 rounded-full shadow-md"
            />
        </button>
    );
}

export default ThemeToggle;