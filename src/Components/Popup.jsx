import React, { useState, useEffect } from "react";

const WelcomePopup = ({ username, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center w-[90%] max-w-sm transition-all duration-300">
        <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          Welcome {username}!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Let’s plan your day and achieve your goals 🚀
        </p>
        <button
          onClick={onClose}
          className="px-5 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        >
          Let’s Go!
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;