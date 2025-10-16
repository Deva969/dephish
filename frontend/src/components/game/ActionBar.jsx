import React from "react";

export default function ActionBar({ onAction, disabled }) {
  return (
    <div className="action-bar">
      <button
        className="btn report"
        onClick={() => onAction("report")}
        disabled={disabled}
      >
        🚨 Report Phish
      </button>
      <button
        className="btn trust"
        onClick={() => onAction("trust")}
        disabled={disabled}
      >
        ✅ Trust Email
      </button>
    </div>
  );
}
