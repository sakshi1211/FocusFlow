import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ( {onSignIn} ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));

    if (!storedUser) {
      setError("No user found. Please sign up first!");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login Successful!");
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("email", email);
      onSignIn();
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center bg-[--color-bg-light] dark:bg-[--color-bg-dark] text-[--color-text-light] dark:text-[--color-text-dark] transition-colors duration-300">
      <div className="p-8 mt-25 shadow-lg w-96 border border-gray-500 rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-center">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-lg mt-4"
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-50 bg-white font-bold text-black py-3 my-4 rounded-lg hover:bg-blue-100 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
