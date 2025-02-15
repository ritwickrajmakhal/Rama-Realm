import { useState,useEffect } from "react";
import React from "react";
const ProgressIndicator = ({ children, value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const animate = setTimeout(() => setProgress(value), 50);
    return () => clearTimeout(animate);
  }, [value]);

  return children({
    progress,
    animatedValue: Math.floor(progress * 100),
  });
};

// Usage in Navbar
<ProgressIndicator value={0.65}>
  {({ progress, animatedValue }) => (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress * 100}%` }} />
      <span className="progress-text">{animatedValue}%</span>
    </div>
  )}
</ProgressIndicator>;
