import React from "react";

const ProgressBox = ({ pomodoroSessions, totalPomodoroGoal, tasksCompleted, totalTasks, streakDays }) => {
  return (
    <div className="py-2 px-5 flex flex-col justify-between bg-[--color-bg-light] dark:bg-[--color-bg-dark] text-[--color-text-light] dark:text-[--color-text-dark] transition-colors duration-300">
      
      <h2 className="text-lg font-bold mb-2">📊 Progress Summary</h2>

      <div className="space-y-2 text-base">
        <p>🕒 Pomodoro Sessions: <strong>{pomodoroSessions}/{totalPomodoroGoal}</strong></p>
        <p>✅ Tasks Completed: <strong>{tasksCompleted}/{totalTasks}</strong></p>
        <p>🎯 Focus Time Today: <strong>{pomodoroSessions * 25} mins</strong></p>
        {/* <p>🔥 Streak: <strong>{streakDays} days</strong></p> */}
      </div>
    </div>
  );
};

export default ProgressBox;
