import React from "react";
import { useState, useEffect } from "react";
import "./Pomodoro.css"
import MusicPlayer from "./MusicPlayer";

const PomoFocus = () => {

    const totalTime = 25 * 60;
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState(totalTime);
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

    const progress = ((totalTime - time) / totalTime) * 100;

    return (

        <div className="pomo-outer-box p-2">

            <div className=" relative w-200 bg-gray-400 h-1 mt-8">
                <div
                    className="absolute top-0 left-0 h-1 bg-indigo-500 transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <div className="pomo-boxP p-5 text-center rounded-2xl mt-5 dark:bg-[--color-bg-dark] text-[--color-text-light] dark:text-[--color-text-dark] transition-colors duration-300">

                <div></div>

                <h1 className="text-xl font-bold mb-3">🕒 Pomodoro Timer</h1>
                <p className="mb-4">Set a Pomodoro and get focused!</p>
                <div className="focusTime text-4xl font-semibold mb-4">
                    {formatTime(time)}
                </div>
                <button
                    onClick={() => setIsRunning(!isRunning)}
                    className={` px-5 mx-3 py-2 rounded-lg font-medium 
                    ${isRunning ? "bg-yellow-600 hover:bg-yellow-500" :
                            "bg-green-600 hover:bg-green-500"
                        } text-white`}
                >
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button
                    onClick={handleReset}
                    className="px-5 mx-3 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg font-medium"
                >
                    Reset
                </button>

            </div>

            <div className="add-one-task m-4">

                <input
                    type="text"
                    className="p-3 outline-none"
                    placeholder="Add one task to focused"
                />

            </div>

            <div className="music-box rounded-2xl shadow-md">
                <MusicPlayer />
            </div>

        </div>

    )
}

export default PomoFocus;