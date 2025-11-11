import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileImg from "../assets/Profile-img.png"
import "./Profile.css";


const Profile = ({onLogout}) => {

    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedName = JSON.parse(localStorage.getItem("userInfo"));
        if (storedName && storedName.userName) {
            setUserName(storedName.userName);
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("isSignedIn");
        localStorage.removeItem("isRegistered");
        localStorage.removeItem("seenWelcome");
        onLogout();
        navigate("/");
    }

    return (

        <div className="profile-container relative items-center p-6 bg-[--color-bg-light] dark:bg-[--color-bg-dark] text-[--color-text-light] dark:text-[--color-text-dark] transition-colors duration-300">
 
            <div>
                <div className="profile-info p-6 text-center">

                    <img
                        src={ProfileImg}
                        alt="Profile"
                        className="profile-img w-44 h-44 rounded-full mx-auto mb-3"
                    />
                    <h2 className="text-xl font-bold">{userName}</h2>

                </div>

            </div>

            <button
                onClick={handleLogout}
                className="logout-btn absolute bottom-2 right-2 font-bold text-red-400 px-4 py-2 rounded-lg"
            >
                Logout
            </button>

        </div >


    )
}

export default Profile;