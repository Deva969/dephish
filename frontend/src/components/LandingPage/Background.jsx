import React from "react";
import "./Background.css"; // Import CSS for styling

const Background = ({ children }) => {
  return <div className="background">{children}</div>;
};

export default Background;
