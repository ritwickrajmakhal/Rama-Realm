import { useState } from "react";
import React from "react";
const AvatarWithTooltip = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="avatar-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isHovered })
      )}
    </div>
  );
};

const AvatarImage = ({ isHovered, ...props }) => (
  <img
    {...props}
    className={`avatar-image ${isHovered ? "hover-effect" : ""}`}
  />
);

const AvatarTooltip = ({ isHovered, children }) => (
  <div className={`tooltip ${isHovered ? "visible" : ""}`}>{children}</div>
);

// Usage
<AvatarWithTooltip>
  <AvatarImage src="user.jpg" />
  <AvatarTooltip>Level 5 Achiever!</AvatarTooltip>
</AvatarWithTooltip>;
