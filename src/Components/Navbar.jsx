import { Link, NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext"
import logo from "../assets/FocusFlow2.png";
import "./Navbar.css";


const Navbar = ({ onLogout, isSignedIn }) => {

    const { darkMode, toggleTheme } = useTheme();

    return (
        <nav className="bg-[--color-bg-light] dark:bg-[--color-bg-dark] text-[--color-text-light] dark:text-[--color-text-dark] transition-colors duration-300">
            <div className="nav-div">

                <Link to="/">
                    <img src={logo} className="logo" />
                </Link>

                <div className="hidden md:flex space-x-6 text-[--color-text-light] dark:text-[--color-text-dark] font-medium">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `hover:text-indigo-500 ${isActive ? "text-indigo-500" : ""}`
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/pomofocus"
                        className={({ isActive }) =>
                            `hover:text-indigo-500 ${isActive ? "text-indigo-500" : ""}`
                        }
                    >
                        PomoFocus
                    </NavLink>
                    <NavLink
                        to="/progress"
                        className={({ isActive }) =>
                            `hover:text-indigo-500 ${isActive ? "text-indigo-500" : ""}`
                        }
                    >
                        Progress
                    </NavLink>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:scale-105 transition"
                    >
                        {darkMode ? (
                            <Sun className="w-5 h-5 text-yellow-400" />
                        ) : (
                            <Moon className="w-5 h-5 text-indigo-600" />
                        )}
                    </button>

                    {isSignedIn ? (
                        <Link to="/profile">
                            <button className="profile-btn text-indigo-400">
                                <i className="bi bi-person-circle pe-2"></i>
                                Profile
                            </button>
                        </Link>

                    ) : (
                        <Link to="/signin">
                            <button
                                className="bg-indigo-500 font-bold text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
                                Sign In
                            </button>
                        </Link>
                    )}

                </div>
            </div >
        </nav >
    );
}


export default Navbar;