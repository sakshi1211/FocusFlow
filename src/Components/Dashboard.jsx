import React from "react";
import { useState, useEffect } from "react";
import Popup from "./Popup.jsx";
import "./Dashboard.css";
import Pomodoro from "./Pomodoro.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import Progress from "./Progress.jsx";

const Dashboard = () => {

  const [userName, setUserName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [taskInput, setTaskInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [quote, setQuote] = useState("");
  const [completedPomodoros, setCompletedPomodoros] = useState(0);


  const quotes = [
    "💪 Push yourself, because no one else is going to do it for you!",
    "🌟 You’re stronger than you think — keep going!",
    "🔥 Don’t stop until you’re proud!",
    "🌈 Every day is a new chance to change your life!",
    "🧠 Train your mind to see the good in every situation!",
    "⏳ Small steps every day lead to big results!",
    "🦁 Be fearless in the pursuit of what sets your soul on fire!",
    "🏆 Success doesn’t come from what you do occasionally, it comes from what you do consistently!",
    "☀️ Rise up, start fresh, and see the bright opportunity in each new day!",
    "⚡ “Your only limit is YOU!",
    "🌻 Grow through what you go through!",
    "💥 Doubt kills more dreams than failure ever will.",
    "🚴 Don’t wish for it. Work for it.",
    "🔑 Discipline is the bridge between goals and success.",
    "🌌 Dream big. Work hard. Stay humble.",
  ];

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  useEffect(() => {

    const storedName = JSON.parse(localStorage.getItem("userInfo"));
    if (storedName && storedName.userName) {
      setUserName(storedName.userName);
    }

    const hasSeenPopup = localStorage.getItem("seenWelcome");
    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("seenWelcome", "true");
    }
  }, []);

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { text: taskInput, completed: false }]);
    setTaskInput("");
  }

  const handleEdit = (index) => {
    setTaskInput(tasks[index].text);
    setEditIndex(index);
  }

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;

    const sortedTasks = [
      ...newTasks.filter((task) => !task.completed),
      ...newTasks.filter((task) => task.completed),

    ]

    setTasks(sortedTasks);

  }

  const completedTasks = tasks.filter(t => t.completed).length;

  return (
    <div className="dash-root flex flex-col justify-center align-middle bg-[--color-bg-light] dark:bg-[--color-bg-dark] text-[--color-text-light] dark:text-[--color-text-dark] transition-colors duration-300">

      {showPopup &&
        <Popup username={userName || "User"} onClose={() => setShowPopup(false)} />
      }

      <div className="dash-main-box flex justify-evenly">

        <div className="left-box">
          <h3 className="font-bold text-xl">Let's Plan Today {userName} ! 🔥</h3>

          <div className="left-inner-box">

            <div className="add-task-box flex-1 p-6 mt-4 w-150">

              <div className="flex mb-4 gap-2">
                <input
                  type="text"
                  placeholder="Add task"
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") addTask();
                  }}
                  className="input-task p-2 outline-none"
                />
                <button
                  onClick={addTask}
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                >+</button>
              </div>

              <ul className="task-list-box space-y-2">
                {/* <p>🔹Active Tasks</p> */}
                {tasks.length === 0 ? (
                  <li className=" p-1 text-gray-400 mt-20 text-center">No tasks added yet
                    <br />
                    &nbsp;&nbsp;&nbsp;Add tasks to stay focused!😊
                  </li>
                ) : (
                  tasks.map((task, index) => (
                    <li
                      key={index}
                      className={`Li-items flex justify-between items-center p-2 rounded transition
                         ${task.completed
                          ? " line-through text-gray-500"
                          : ""
                        }`}
                    >
                      <div className="task-text flex">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => handleComplete(index)}
                          className="w-4 mr-4 h-4 accent-indigo-500 cursor-pointer"
                        />
                        <span className=" ">{task.text}</span>
                      </div>

                      <div className="space-x-3">
                        <button
                          onClick={() => handleEdit(index)}
                          className="hover:text-blue-400 pe-2"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="hover:text-red-500 pe-2"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </li>
                  ))
                )}
              </ul>

              {/* <div className="flex-1 py-6 bg-[--color-bg-light] dark:bg-[--color-bg-dark] transition-colors duration-300">
                <h3 className="mb-4">✅ Completed Tasks</h3>
              </div> */}

            </div>


            <p className="text-center mt-5">{quote}</p>

          </div>

        </div>


        <div className="right-box">

          <div className="dash-music boxShadow p-5 rounded-xl shadow-lg w-100 flex flex-col justify-center align-middle items-center">
            <MusicPlayer />
          </div>

          <div className="pomodoro">
            <Pomodoro />
          </div>

          <div className="dash-progress boxShadow rounded-2xl">
            <Progress
              pomodoroSessions={completedPomodoros}
              totalPomodoroGoal={5}
              tasksCompleted={completedTasks}
              totalTasks={tasks.length}
            // streakDays={streak}
            />
          </div>

        </div>

      </div>

    </div >
  );
};

export default Dashboard;
