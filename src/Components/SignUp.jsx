import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import Profile from "../assets/profile-logo.png";
import Profile2 from "../assets/profile-logo2.png";
import "./SignInUp.css";

const SignUp = ({onSignUp}) => {
    const { darkMode, toggleTheme } = useTheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        const userInfo = { email, password, userName };

        // ✅ Save user info to localStorage
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        alert("Sign Up Successful!");

        onSignUp();

        navigate("/signin");
    };


    return (

        <div className="flex justify-center align-middle text-center items-center bg-[--color-bg-light] dark:bg-[--color-bg-dark] text-[--color-text-light] dark:text-[--color-text-dark] transition-colors duration-300 ">
            <div className="signup-box m-4 mt-15 border rounded-lg border-gray-500 shadow-lg py-4">
                <h1 className="text-2xl p-4 font-bold">Start Your Productivity Journey!</h1>

                <form onSubmit={handleSignUp} className="text-center flex flex-col justify-center items-center ">

                    {darkMode ? (
                        <img src={Profile2} alt="profile-img" className="w-15" />
                    ) : (
                        <img src={Profile} alt="profile-img" className="w-15" />
                    )
                    }

                    <input
                        type="text"
                        value={userName}
                        placeholder="UserName"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                        className="p-3 m-3 border rounded-lg "
                    />

                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 m-3 border rounded-lg "
                    />

                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 mt-5 border rounded-lg m-3"
                    />

                    {error &&
                        <p className="text-center text-red-500 text-sm">{error}</p>
                    }


                    <button type="submit"
                        className="w-40 bg-indigo-500 mt-5 mb-6 font-bold text-white py-3 rounded-lg hover:bg-indigo-600 transition">
                        Sign Up
                    </button>


                </form>

            </div>
        </div>

    )

}

export default SignUp;

