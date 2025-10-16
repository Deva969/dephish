import React, { useState } from "react";
import InboxList from "./InboxList";
import MailView from "./MailView";
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
    }, 1500);
  };

  return (
    <div className="inbox-game">
      <header className="game-header">
        <div className="header-left">
          <div className="inbox-title">INBOX</div>
          {/* <div className="inbox-sub">Company training — identify phishing emails</div> */}
        </div>
        <div className="score">Score: {score}</div>
      </header>

      <main className="game-body">
        <aside className="left-nav">
          <button className="nav-btn active" aria-label="inbox">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 3h18v18H3z" fill="rgba(255,255,255,0.02)"/></svg>
          </button>
          <button className="nav-btn" aria-label="send">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="rgba(255,255,255,0.04)"/></svg>
          </button>
          <button className="nav-btn" aria-label="alert">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l9 16H3L12 2z" fill="rgba(255,255,255,0.03)"/></svg>
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
