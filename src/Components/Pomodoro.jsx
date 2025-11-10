import React from "react";
import { useState, useEffect } from "react";
import "./Pomodoro.css";



const Pomodoro = () => {

    const [time, setTime] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((t) => t - 1);
            }, 1000);
        }
        else if (time === 0) {
            alert("⏰ Time’s up! Take a short break! 😌");
            setIsRunning(false);
        }

        return () => clearInterval(timer);

    }, [isRunning, time])

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}
        :
        ${secs.toString().padStart(2, "0")}`;
    }

    const handleReset = () => {
        setIsRunning(false);
        setTime(25 * 60);
    }

    return (

        <div className="pomo-box text-center rounded-2xl dark:bg-[--color-bg-dark] text-[--color-text-light] dark:text-[--color-text-dark] transition-colors duration-300">

            <h1 className="text-xl font-bold">🕒 Pomodoro Timer</h1>
            <p className="p-1">Set a Pomodoro and get focused!</p>
            <div className="text-4xl font-semibold mb-4">
                {formatTime(time)}
            </div>
            <div className="w-full">
                <button
                    onClick={() => setIsRunning(!isRunning)}
                    className={`px-5 py-2 w-1/4 rounded-lg font-medium 
                    ${isRunning ? "bg-yellow-600 hover:bg-yellow-500" :
                            "bg-green-600 hover:bg-green-500"
                        } text-white`}
                >
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button
                    onClick={handleReset}
                    className="px-5 py-2 w-1/4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg font-medium"
                >
                    Reset
                </button>
            </div>

        </div>

    )
}

export default Pomodoro;