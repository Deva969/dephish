import React, { useState } from "react";

function Avatar({ sender, avatar }) {
  if (avatar) {
    return <img src={avatar} alt={sender} className="avatar-img" />;
  }
  const letter = sender?.charAt(0) || "U";
  return <div className="avatar">{letter}</div>;
}

function ExpandedEmailView({ mail }) {
  const letter = mail.sender?.charAt(0) || "U";
  
  return (
    <div className="mail-expanded">
      <div className="expanded-header">
        <div className="expanded-header-left">
          <div className="expanded-from">
            {mail.avatar ? (
              <img src={mail.avatar} alt={mail.sender} className="expanded-avatar" style={{ backgroundImage: `url(${mail.avatar})`, backgroundSize: 'cover' }} />
            ) : (
              <div className="expanded-avatar">{letter}</div>
            )}
            <div className="expanded-sender-info">
              <div className="expanded-sender-name">{mail.sender}</div>
              <div className="expanded-sender-email">&lt;{mail.email || `${mail.sender.toLowerCase().replace(' ', '')}@email.com`}&gt;</div>
            </div>
          </div>
          
          <div className="expanded-details">
            <span className="detail-label">From:</span>
            <span className="detail-value">{mail.email || `${mail.sender.toLowerCase().replace(' ', '')}@email.com`}</span>
            
            <span className="detail-label">To:</span>
            <span className="detail-value">you@company.com</span>
            
            {mail.replyTo && (
              <>
                <span className="detail-label">Reply-To:</span>
                <span className="detail-value reply-to">{mail.replyTo}</span>
              </>
            )}
          </div>

          <div className="security-badges">
            <div className={`security-badge ${mail.dmarc ? 'pass' : 'fail'}`}>
              DMARC {mail.dmarc ? '✓' : '✗'}
            </div>
            <div className={`security-badge ${mail.spf ? 'pass' : 'fail'}`}>
              SPF {mail.spf ? '✓' : '✗'}
            </div>
            <div className={`security-badge ${mail.dkim ? 'pass' : 'fail'}`}>
              DKIM {mail.dkim ? '✓' : '✗'}
            </div>
          </div>
        </div>
      </div>

      <div className="expanded-body">
        {mail.fullBody || mail.body}
        
        {mail.signature && (
          <div className="expanded-signature">
            {mail.signature}
          </div>
        )}
      </div>

      <div className="expanded-footer">
        <button className="action-btn">
          ↩️ Reply
        </button>
        <button className="action-btn">
          ➤ Forward
        </button>
      </div>
    </div>
  );
}

export default function InboxList({ emails, selected, onSelect }) {
  const [openId, setOpenId] = useState(null);

  const handleToggleExpand = (e, mailId) => {
    e.stopPropagation();
    setOpenId(openId === mailId ? null : mailId);
  };

  return (
    <div className="inbox-list">
      {emails.map((mail) => {
        const isOpen = openId === mail.id;
        const isSelected = selected?.id === mail.id;
        
        return (
          <div
            key={mail.id}
            className={`mail-item ${isSelected ? "selected" : ""} ${isOpen ? "open" : ""}`}
          >
            <div className="mail-left" onClick={() => onSelect(mail)}>
              <Avatar sender={mail.sender} avatar={mail.avatar} />
            </div>

            <div className="mail-main" onClick={() => onSelect(mail)}>
              <div className="mail-sender">{mail.sender}</div>
              <div className="mail-subject">{mail.subject}</div>
              <div className="mail-preview">{mail.body.substring(0, 100)}...</div>
              
              {isOpen && <ExpandedEmailView mail={mail} />}
            </div>

            <div className="mail-meta">
              <div className="mail-time">{mail.time}</div>
              <div className={`status-dot ${mail.isPhish ? "phish" : "safe"}`}></div>
              <button
                className="chev-btn"
                aria-label="expand"
                onClick={(e) => handleToggleExpand(e, mail.id)}
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