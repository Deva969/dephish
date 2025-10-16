import React, { useState } from "react";
import InboxList from "./InboxList";
import ActionBar from "./ActionBar";
import ResultPopup from "./ResultPopup.jsx";
import mockEmails from "./mockEmails";
import "./InboxGame.css";

export default function InboxGame() {
  const [selectedMail, setSelectedMail] = useState(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);

  const handleAction = (action) => {
    if (!selectedMail) return;
    const correct =
      (action === "report" && selectedMail.isPhish) ||
      (action === "trust" && !selectedMail.isPhish);

    setScore((prev) => (correct ? prev + 1 : Math.max(prev - 1, 0)));
    setResult(correct ? "correct" : "wrong");

    setTimeout(() => {
      setResult(null);
      setSelectedMail(null);
    }, 2000);
  };

  return (
    <div className="inbox-game">
      <header className="game-header">
        <div className="header-left">
          <div className="inbox-title">TRAINING INBOX</div>
          <div className="inbox-sub">Identify phishing attempts and protect your organization</div>
        </div>
        <div className="score">Score: {score}</div>
      </header>

      <main className="game-body">
        <aside className="left-nav">
          <button className="nav-btn active" aria-label="inbox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 8L12 13L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="nav-btn" aria-label="send">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="nav-btn" aria-label="alert">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="currentColor"/>
            </svg>
          </button>
        </aside>

        <div className="inbox-only">
          <InboxList
            emails={mockEmails}
            selected={selectedMail}
            onSelect={setSelectedMail}
          />
        </div>
      </main>

      {selectedMail && (
        <ActionBar onAction={handleAction} disabled={!selectedMail} />
      )}

      {result && <ResultPopup result={result} />}
    </div>
  );
}
