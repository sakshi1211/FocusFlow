import React from "react";
import { useContext, useState, useEffect, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);

    // ✅ Load saved theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    // ✅ Toggle dark/light mode
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <div>
            <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export const useTheme = () => useContext(ThemeContext);