import React, { useState } from "react";
const DailyChallenge = () => {
  const [challenges] = useState([
    { task: "Complete 1 lesson", progress: 1 / 1, reward: 50 },
    { task: "Practice 30 minutes", progress: 15 / 30, reward: 100 },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-bold mb-2">Daily Challenges</h3>
      {challenges.map((challenge, index) => (
        <div key={index} className="mb-3">
          <div className="flex justify-between mb-1">
            <span>{challenge.task}</span>
            <span className="text-blue-500">+{challenge.reward}XP</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(challenge.progress * 100, 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
