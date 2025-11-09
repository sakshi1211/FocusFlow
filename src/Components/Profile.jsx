import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("seenWelcome");
        navigate("/signup");
    }

    return (

        <div>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
                Logout
            </button>
        </div>

    )
}

export default Profile;