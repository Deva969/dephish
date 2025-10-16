import React from "react";

export default function MailView({ mail }) {
  if (!mail) {
    return (
      <div className="mail-view placeholder">
        <p>Select an email to start the game.</p>
      </div>
    );
  }

  return (
    <div className="mail-view">
      <div className="mail-header">
        <h2 className="mail-subject">{mail.subject}</h2>
        <div className="mail-from">From: <span className="mail-sender">{mail.sender}</span></div>
      </div>
      <div className="mail-content">
        <p className="mail-body">{mail.body}</p>
      </div>
    </div>
  );
}
