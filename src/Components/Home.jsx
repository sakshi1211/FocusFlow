import React from "react";
import { Link } from "react-router-dom";
import DashImg from "../assets/Dash-img.png";
import DashImg2 from "../assets/Dash-img-black.png";
import { useTheme } from "./ThemeContext"

const Home = () => {

    const {darkMode, toggleThem} = useTheme();

    return (
        <div className="text-[--color-text-light] dark:text-[--color-text-dark] transition-colors duration-500 min-h-screen">

            {/* Hero Section */}
            <section className="flex flex-row justify-center py-24 px-6">
                <div className="flex flex-col items-start justify-center ">
                    <h1 className="text-6xl font-bold mb-4">
                        Stay <span className="text-indigo-500">focused.</span>
                    </h1>
                    <h1 className="text-6xl font-bold mb-4">
                        Stay
                        <span className="text-blue-600"> consistent.</span>
                    </h1>

                    <p className="w-120 text-lg text-[--color-text-light] dark:text-[--color-text-dark] mb-8 ">
                        FocusFlow helps you track your goals and manage your daily tasks
                        effortlessly — so you can stay disciplined and productive every day.
                    </p>

                    <Link
                        to="/signup"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition"
                    >
                        Get Started
                    </Link>
                </div>
                <div className="ms-25">
                    {darkMode ? (
                        <img className="w-xl" src={DashImg2} alt="dashboard" />
                    ) : (
                        <img className="w-xl" src={DashImg} alt="dashboard" />
                    )
                    }
                </div>
            </section>

        </div>
    )
}

export default Home;