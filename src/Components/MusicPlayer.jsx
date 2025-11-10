import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Dashboard.css"
import FocusM1 from "../assets/focusMusic1.mp3"
import FocusM2 from "../assets/focusMusic2.mp3"
import FocusM3 from "../assets/focusMusic3.mp3"
import FocusM4 from "../assets/focusMusic4.mp3"

const MusicPlayer = () => {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isRepeat, setIsRepeat] = useState(false);

    const tracks = [
        { title: "Focus Music 1", src: FocusM1 },
        { title: "Focus Music 2", src: FocusM2 },
        { title: "Focus Music 3", src: FocusM3 },
        { title: "Focus Music 4", src: FocusM4 },
    ]

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = tracks[currentTrack].src;
        }
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentTrack])

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        }
        else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    const playPrev = () => {
        let prevTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        setCurrentTrack(prevTrack);
    }


    const playNext = () => {
        let nextTrack = (currentTrack + 1) % tracks.length;
        setCurrentTrack(nextTrack);
    }


    return (
        <div className="music-main-box bg-[--color-bg-light] dark:bg-[--color-bg-dark] text-[--color-text-light] dark:text-[--color-text-dark] transition-colors duration-300">
            <div className="py-4 px-3 rounded-2xl text-center flex flex-col items-center">
                <h2 className="musicH1 text-2xl font-bold mb-4 pb-3">🎧 Focus Music</h2>

                <audio ref={audioRef} src={tracks[currentTrack].src} />

                <div>
                    <button
                        onClick={playPrev}>
                        <i className="bi bi-skip-start  text-2xl "></i>
                    </button>
                    <button
                        onClick={togglePlay} >
                        <i className={`bi ${isPlaying ? "bi-pause-circle-fill" : "bi-play-circle-fill"} text-3xl px-3`}></i>
                    </button>
                    <button
                        onClick={playNext} >
                        <i className="bi bi-skip-end  text-2xl "></i>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default MusicPlayer;