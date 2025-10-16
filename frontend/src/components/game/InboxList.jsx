import React, { useState } from "react";

function Avatar({ sender, avatar }) {
  if (avatar) {
    return <img src={avatar} alt={sender} className="avatar-img" />;
  }
  const letter = sender?.charAt(0) || "U";
  return <div className="avatar">{letter}</div>;
}

export default function InboxList({ emails, selected, onSelect }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="inbox-list">
      {emails.map((mail) => {
        const isOpen = openId === mail.id;
        return (
          <div
            key={mail.id}
            className={`mail-item ${selected?.id === mail.id ? "selected" : ""} ${isOpen ? "open" : ""}`}
          >
            <div className="mail-left" onClick={() => onSelect(mail)}>
              <Avatar sender={mail.sender} avatar={mail.avatar} />
            </div>

            <div className="mail-main" onClick={() => onSelect(mail)}>
              <div className="mail-sender">{mail.sender}</div>
              <div className="mail-preview">{mail.body}</div>
              <div className="mail-subject">{mail.subject}</div>
              {isOpen && <div className="mail-expanded">{mail.body}</div>}
            </div>

            <div className="mail-meta">
              <div className="mail-time">{mail.time}</div>
              <div className={`status-dot ${mail.isPhish ? "phish" : "safe"}`}></div>
              <button
                className="chev-btn"
                aria-label="expand"
                onClick={() => setOpenId(isOpen ? null : mail.id)}
              >
                <span className="chev">▾</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
