import React from "react";
import "./Background.css"; // Import CSS for styling

const Background = ({ children }) => {
  // Render the fixed background as a sibling so children remain in normal document flow.
  // Wrapping children inside a fixed container prevents page scrolling and breaks layout.
  return (
    <>
      <div className="background" />
      {children}
    </>
  );
};

export default Background;
