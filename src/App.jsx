import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import Dashboard from './Components/Dashboard.jsx';
import PomoFocus from './Components/PomoFocus.jsx';
import Profile from './Components/Profile.jsx';

function App() {

  // Read from localStorage to persist across reloads
  const [isRegistered, setIsRegistered] = useState(() => {
    return localStorage.getItem("isRegistered") === "true";
  });

  const [isSignedIn, setIsSignedIn] = useState(() => {
    return localStorage.getItem("isSignedIn") === "true";
  });

  // Whenever state changes, update localStorage
  useEffect(() => {
    localStorage.setItem("isRegistered", isRegistered);
  }, [isRegistered]);

  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn);
  }, [isSignedIn]);

  return (
    <div className="app-root">
      <Router>
        <Navbar isSignedIn={isSignedIn} onLogout={() => setIsSignedIn(false)} />

        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={!isSignedIn ? <Home /> : <Navigate to="/dashboard" />}
          />

          {/* Sign Up */}
          <Route
            path="/signup"
            element={<SignUp onSignUp={() => setIsRegistered(true)} />}
          />

          {/* Sign In */}
          <Route
            path="/signin"
            element={
              isRegistered ? (
                <SignIn onSignIn={() => setIsSignedIn(true)} />
              ) : (
                <Navigate to="/signup" />
              )
            }
          />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              isSignedIn ? (
                <Dashboard onLogout={() => setIsSignedIn(false)} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />

          {/* PomoFocus */}
          <Route
            path="/pomofocus"
            element={
              <PomoFocus />
            }
          />

          <Route
            path="/profile"
            element={
              <Profile />
            }
          />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
