import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { FaRocket, FaMedal, FaStar } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

// Register GSAP plugins
gsap.registerPlugin(MotionPathPlugin);

const GamificationBadge = ({ xp = 420, level = 3, streak = 5 }) => {
  const rocketRef = useRef(null);
  const xpRef = useRef(null);

  useEffect(() => {
    // XP counter animation
    gsap.from(xpRef.current, {
      innerText: 0,
      duration: 2,
      snap: { innerText: 1 },
      ease: "power1.out"
    });

    // Rocket animation on mount
    gsap.to(rocketRef.current, {
      motionPath: {
        path: [{ x: 0, y: 0 }, { x: 0, y: -20 }, { x: 0, y: 0 }],
        curviness: 1.5
      },
      duration: 2,
      repeat: -1,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="flex items-center gap-4 mr-6">
      {/* XP Progress */}
      <div 
        className="relative w-24 h-2 bg-gray-200 rounded-full"
        data-tooltip-id="xp-tooltip"
      >
        <div 
          className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          style={{ width: `${(xp % 1000) / 10}%` }}
        />
        <span 
          ref={xpRef}
          className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-blue-600"
        >
          {xp} XP
        </span>
      </div>

      {/* Level Badge */}
      <div 
        className="relative group"
        data-tooltip-id="level-tooltip"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          Lv{level}
        </div>
        <FaRocket 
          ref={rocketRef}
          className="absolute -top-4 -right-4 text-blue-500 text-xl animate-float" 
        />
      </div>

      {/* Streak Counter */}
      <div 
        className="flex items-center gap-1"
        data-tooltip-id="streak-tooltip"
      >
        <FaMedal className="text-yellow-500 text-xl" />
        <span className="font-bold text-yellow-600">{streak}</span>
      </div>

      {/* Tooltips */}
      <Tooltip id="xp-tooltip" place="bottom">
        Current XP: {xp} (Level {level})
      </Tooltip>
      <Tooltip id="level-tooltip" place="bottom">
        Next level in {1000 - (xp % 1000)} XP!
      </Tooltip>
      <Tooltip id="streak-tooltip" place="bottom">
        {streak}-day login streak! 🔥
      </Tooltip>
    </div>
  );
};