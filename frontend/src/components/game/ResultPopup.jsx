import React from "react";

export default function ResultPopup({ result }) {
  return (
    <div className={`result-popup ${result}`}>
      {result === "correct" ? "✔️ Correct!" : "❌ Wrong!"}
    </div>
  );
}
