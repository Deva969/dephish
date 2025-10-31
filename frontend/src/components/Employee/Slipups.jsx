import { useState } from 'react';
import { AlertTriangle, Mail, HelpCircle, XCircle, CheckCircle, ChevronDown, ChevronUp, Filter, Calendar, Lightbulb, Info } from 'lucide-react';
import CanvasEmp from './CanvasEmp';

// Sample slip-ups data
const slipUpsData = [
  {
    id: 1,
    type: 'phishing',
    date: '2024-10-28',
    timestamp: '14:32',
    subject: 'Urgent: Verify Your Account',
    sender: 'support@paypa1.com',
    mistake: 'Clicked on a phishing link',
    severity: 'high',
    redFlags: [
      'Sender domain uses "1" instead of "l" (paypa1.com vs paypal.com)',
      'Creates sense of urgency with "Urgent" in subject',
      'Requests sensitive account verification',
      'Generic greeting instead of personalized'
    ],
    correctAction: 'Delete the email immediately and report it to IT security. Never click links from suspicious senders.',
    impact: 'Could have compromised account credentials and granted attackers access to sensitive information.'
  },
  {
    id: 2,
    type: 'quiz',
    date: '2024-10-27',
    timestamp: '10:15',
    question: 'What is the strongest password?',
    yourAnswer: 'Password123!',
    correctAnswer: 'mK$9pL#2qR@7nB',
    severity: 'medium',
    explanation: 'A strong password should be at least 12 characters long with a mix of uppercase, lowercase, numbers, and special characters. "Password123!" is too common and predictable.',
    tip: 'Use a password manager to generate and store complex passwords. Consider using passphrases with random words.'
  },
  {
    id: 3,
    type: 'phishing',
    date: '2024-10-26',
    timestamp: '16:45',
    subject: 'CEO Request: Wire Transfer Needed',
    sender: 'ceo@company-urgent.com',
    mistake: 'Almost responded to CEO fraud email',
    severity: 'critical',
    redFlags: [
      'Domain is not official company domain',
      'Unusual request for immediate wire transfer',
      'Sent during unusual hours',
      'No proper authentication or verification process'
    ],
    correctAction: 'Always verify financial requests through a separate communication channel (phone call, in-person) before taking action.',
    impact: 'Could have resulted in significant financial loss and data breach.'
  },
  {
    id: 4,
    type: 'quiz',
    date: '2024-10-25',
    timestamp: '09:20',
    question: 'You receive an urgent email from your CEO requesting a wire transfer. What should you do?',
    yourAnswer: 'Process the transfer immediately as requested',
    correctAnswer: 'Verify through a separate communication channel first',
    severity: 'high',
    explanation: 'CEO fraud (Business Email Compromise) is a common attack. Always verify high-stakes requests through a different method like a direct phone call.',
    tip: 'Establish a company policy that requires dual verification for all financial transactions above a certain threshold.'
  },
  {
    id: 5,
    type: 'phishing',
    date: '2024-10-24',
    timestamp: '11:30',
    subject: 'Your Package Delivery Failed',
    sender: 'delivery@fedx-tracking.net',
    mistake: 'Downloaded suspicious attachment',
    severity: 'critical',
    redFlags: [
      'Misspelled company name (FedX instead of FedEx)',
      'Suspicious domain (fedx-tracking.net)',
      'Unexpected package notification',
      'Attachment with .exe or .zip extension'
    ],
    correctAction: 'Never download attachments from unexpected emails. Verify directly with the shipping company using their official website.',
    impact: 'Could have installed malware on your system, compromising company data and network security.'
  }
];

// Statistics Component
const SlipUpsStats = ({ data }) => {
  const totalSlipUps = data.length;
  const phishingMistakes = data.filter(s => s.type === 'phishing').length;
  const quizMistakes = data.filter(s => s.type === 'quiz').length;
  const criticalMistakes = data.filter(s => s.severity === 'critical').length;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '32px'
    }}>
      <div style={{
        padding: '24px',
        background: 'rgba(15, 30, 35, 0.6)',
        border: '1px solid rgba(92, 201, 177, 0.3)',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#5CC9B1', marginBottom: '8px' }}>
          {totalSlipUps}
        </div>
        <div style={{ fontSize: '12px', color: '#8e98a6', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Total Slip-Ups
        </div>
      </div>

      <div style={{
        padding: '24px',
        background: 'rgba(15, 30, 35, 0.6)',
        border: '1px solid rgba(92, 201, 177, 0.3)',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#5CC9B1', marginBottom: '8px' }}>
          {phishingMistakes}
        </div>
        <div style={{ fontSize: '12px', color: '#8e98a6', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Phishing Errors
        </div>
      </div>

      <div style={{
        padding: '24px',
        background: 'rgba(15, 30, 35, 0.6)',
        border: '1px solid rgba(92, 201, 177, 0.3)',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#5CC9B1', marginBottom: '8px' }}>
          {quizMistakes}
        </div>
        <div style={{ fontSize: '12px', color: '#8e98a6', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Quiz Mistakes
        </div>
      </div>

      <div style={{
        padding: '24px',
        background: 'rgba(15, 30, 35, 0.6)',
        border: '1px solid rgba(92, 201, 177, 0.3)',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#5CC9B1', marginBottom: '8px' }}>
          {criticalMistakes}
        </div>
        <div style={{ fontSize: '12px', color: '#8e98a6', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Critical
        </div>
      </div>
    </div>
  );
};

// Phishing Mistake Card
const PhishingMistakeCard = ({ mistake, isExpanded, onToggle }) => {
  const severityConfig = {
    low: { label: 'LOW', opacity: '0.4' },
    medium: { label: 'MEDIUM', opacity: '0.5' },
    high: { label: 'HIGH', opacity: '0.7' },
    critical: { label: 'CRITICAL', opacity: '0.9' }
  };

  const config = severityConfig[mistake.severity];

  return (
    <div style={{
      background: 'rgba(15, 30, 35, 0.8)',
      border: '1px solid rgba(92, 201, 177, 0.3)',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '16px',
      transition: 'all 0.3s ease'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '16px' }}>
        <div style={{
          padding: '12px',
          background: 'rgba(92, 201, 177, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(92, 201, 177, 0.3)'
        }}>
          <Mail style={{ width: 24, height: 24, color: '#5CC9B1' }} />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <span style={{
              padding: '4px 12px',
              background: `rgba(92, 201, 177, ${config.opacity})`,
              border: '1px solid rgba(92, 201, 177, 0.5)',
              borderRadius: '16px',
              fontSize: '11px',
              fontWeight: 'bold',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {config.label}
            </span>
            <span style={{ fontSize: '13px', color: '#8e98a6', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar style={{ width: 14, height: 14 }} />
              {mistake.date} at {mistake.timestamp}
            </span>
          </div>

          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#5CC9B1',
            marginBottom: '12px',
            lineHeight: '1.4'
          }}>
            {mistake.subject}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '14px', color: '#94a3b8' }}>
              <strong style={{ color: '#5CC9B1' }}>From:</strong> <span style={{ fontFamily: 'monospace', fontSize: '13px' }}>{mistake.sender}</span>
            </div>
            <div style={{ fontSize: '14px', color: '#94a3b8' }}>
              <strong style={{ color: '#5CC9B1' }}>Mistake:</strong> {mistake.mistake}
            </div>
          </div>
        </div>

        <button
          onClick={onToggle}
          style={{
            padding: '8px',
            background: 'rgba(92, 201, 177, 0.1)',
            border: '1px solid rgba(92, 201, 177, 0.3)',
            borderRadius: '8px',
            color: '#5CC9B1',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(92, 201, 177, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(92, 201, 177, 0.1)';
          }}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div style={{ animation: 'fadeIn 0.3s ease-in' }}>
          {/* Warning Signs */}
          <div style={{
            padding: '16px',
            background: 'rgba(92, 201, 177, 0.05)',
            border: '1px solid rgba(92, 201, 177, 0.2)',
            borderRadius: '10px',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <AlertTriangle style={{ width: 18, height: 18, color: '#5CC9B1' }} />
              <span style={{ fontWeight: 'bold', color: '#5CC9B1', fontSize: '14px', letterSpacing: '0.5px' }}>WARNING SIGNS</span>
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1' }}>
              {mistake.redFlags.map((flag, idx) => (
                <li key={idx} style={{ marginBottom: '8px', fontSize: '14px', lineHeight: '1.6' }}>
                  {flag}
                </li>
              ))}
            </ul>
          </div>

          {/* Correct Action */}
          <div style={{
            padding: '16px',
            background: 'rgba(92, 201, 177, 0.05)',
            border: '1px solid rgba(92, 201, 177, 0.2)',
            borderRadius: '10px',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <CheckCircle style={{ width: 18, height: 18, color: '#5CC9B1' }} />
              <span style={{ fontWeight: 'bold', color: '#5CC9B1', fontSize: '14px', letterSpacing: '0.5px' }}>CORRECT ACTION</span>
            </div>
            <p style={{ margin: 0, color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
              {mistake.correctAction}
            </p>
          </div>

          {/* Impact */}
          <div style={{
            padding: '16px',
            background: 'rgba(92, 201, 177, 0.05)',
            border: '1px solid rgba(92, 201, 177, 0.2)',
            borderRadius: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Info style={{ width: 18, height: 18, color: '#5CC9B1' }} />
              <span style={{ fontWeight: 'bold', color: '#5CC9B1', fontSize: '14px', letterSpacing: '0.5px' }}>POTENTIAL IMPACT</span>
            </div>
            <p style={{ margin: 0, color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
              {mistake.impact}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Quiz Mistake Card
const QuizMistakeCard = ({ mistake, isExpanded, onToggle }) => {
  const severityConfig = {
    low: { label: 'LOW', opacity: '0.4' },
    medium: { label: 'MEDIUM', opacity: '0.5' },
    high: { label: 'HIGH', opacity: '0.7' },
    critical: { label: 'CRITICAL', opacity: '0.9' }
  };

  const config = severityConfig[mistake.severity];

  return (
    <div style={{
      background: 'rgba(15, 30, 35, 0.8)',
      border: '1px solid rgba(92, 201, 177, 0.3)',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '16px',
      transition: 'all 0.3s ease'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '16px' }}>
        <div style={{
          padding: '12px',
          background: 'rgba(92, 201, 177, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(92, 201, 177, 0.3)'
        }}>
          <HelpCircle style={{ width: 24, height: 24, color: '#5CC9B1' }} />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <span style={{
              padding: '4px 12px',
              background: `rgba(92, 201, 177, ${config.opacity})`,
              border: '1px solid rgba(92, 201, 177, 0.5)',
              borderRadius: '16px',
              fontSize: '11px',
              fontWeight: 'bold',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {config.label}
            </span>
            <span style={{ fontSize: '13px', color: '#8e98a6', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar style={{ width: 14, height: 14 }} />
              {mistake.date} at {mistake.timestamp}
            </span>
          </div>

          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#e8f0f5',
            marginBottom: '16px',
            lineHeight: '1.5'
          }}>
            {mistake.question}
          </h3>
        </div>

        <button
          onClick={onToggle}
          style={{
            padding: '8px',
            background: 'rgba(92, 201, 177, 0.1)',
            border: '1px solid rgba(92, 201, 177, 0.3)',
            borderRadius: '8px',
            color: '#5CC9B1',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(92, 201, 177, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(92, 201, 177, 0.1)';
          }}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Answer Comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: isExpanded ? '12px' : '0' }}>
        <div style={{
          padding: '14px',
          background: 'rgba(92, 201, 177, 0.05)',
          border: '1px solid rgba(92, 201, 177, 0.2)',
          borderRadius: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <XCircle style={{ width: 16, height: 16, color: '#8e98a6' }} />
            <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#8e98a6', letterSpacing: '0.5px' }}>YOUR ANSWER</span>
          </div>
          <p style={{ margin: 0, color: '#cbd5e1', fontSize: '13px', lineHeight: '1.5' }}>
            {mistake.yourAnswer}
          </p>
        </div>

        <div style={{
          padding: '14px',
          background: 'rgba(92, 201, 177, 0.1)',
          border: '1px solid rgba(92, 201, 177, 0.3)',
          borderRadius: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <CheckCircle style={{ width: 16, height: 16, color: '#5CC9B1' }} />
            <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#5CC9B1', letterSpacing: '0.5px' }}>CORRECT ANSWER</span>
          </div>
          <p style={{ margin: 0, color: '#e8f0f5', fontSize: '13px', lineHeight: '1.5' }}>
            {mistake.correctAnswer}
          </p>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div style={{ animation: 'fadeIn 0.3s ease-in' }}>
          {/* Explanation */}
          <div style={{
            padding: '16px',
            background: 'rgba(92, 201, 177, 0.05)',
            border: '1px solid rgba(92, 201, 177, 0.2)',
            borderRadius: '10px',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Info style={{ width: 18, height: 18, color: '#5CC9B1' }} />
              <span style={{ fontWeight: 'bold', color: '#5CC9B1', fontSize: '14px', letterSpacing: '0.5px' }}>EXPLANATION</span>
            </div>
            <p style={{ margin: 0, color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
              {mistake.explanation}
            </p>
          </div>

          {/* Tip */}
          <div style={{
            padding: '16px',
            background: 'rgba(92, 201, 177, 0.05)',
            border: '1px solid rgba(92, 201, 177, 0.2)',
            borderRadius: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Lightbulb style={{ width: 18, height: 18, color: '#5CC9B1' }} />
              <span style={{ fontWeight: 'bold', color: '#5CC9B1', fontSize: '14px', letterSpacing: '0.5px' }}>PRO TIP</span>
            </div>
            <p style={{ margin: 0, color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
              {mistake.tip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Slip-Ups Component
function SlipUps() {
  const [expandedItems, setExpandedItems] = useState({});
  const [filterType, setFilterType] = useState('all');
  const [filterSeverity, setFilterSeverity] = useState('all');

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter data
  const filteredData = slipUpsData.filter(item => {
    const typeMatch = filterType === 'all' || item.type === filterType;
    const severityMatch = filterSeverity === 'all' || item.severity === filterSeverity;
    return typeMatch && severityMatch;
  });

  return (
    <CanvasEmp path="slipups">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div style={{ height: '100%', overflowY: 'auto', paddingRight: '8px' }}>
        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#5CC9B1',
            marginBottom: '8px'
          }}>
            Your Security Slip-Ups
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>
            Learn from your mistakes to improve your cybersecurity awareness
          </p>
        </div>

        {/* Statistics */}
        <SlipUpsStats data={filteredData} />

        {/* Filters */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '24px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Filter style={{ width: 16, height: 16, color: '#5CC9B1' }} />
            <span style={{ fontSize: '14px', color: '#5CC9B1', fontWeight: '600' }}>Filter:</span>
          </div>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            style={{
              padding: '8px 14px',
              background: 'rgba(15, 30, 35, 0.8)',
              border: '1px solid rgba(92, 201, 177, 0.3)',
              borderRadius: '8px',
              color: '#e8f0f5',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            <option value="all">All Types</option>
            <option value="phishing">Phishing Only</option>
            <option value="quiz">Quiz Only</option>
          </select>

          <select
            value={filterSeverity}
            onChange={(e) => setFilterSeverity(e.target.value)}
            style={{
              padding: '8px 14px',
              background: 'rgba(15, 30, 35, 0.8)',
              border: '1px solid rgba(92, 201, 177, 0.3)',
              borderRadius: '8px',
              color: '#e8f0f5',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            <option value="all">All Severity</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Mistakes List */}
        <div>
          {filteredData.length === 0 ? (
            <div style={{
              padding: '40px',
              textAlign: 'center',
              background: 'rgba(15, 30, 35, 0.8)',
              border: '1px solid rgba(92, 201, 177, 0.3)',
              borderRadius: '12px'
            }}>
              <CheckCircle style={{ width: 48, height: 48, color: '#5CC9B1', margin: '0 auto 16px' }} />
              <p style={{ color: '#5CC9B1', fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>
                No slip-ups found!
              </p>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>
                Keep up the excellent work!
              </p>
            </div>
          ) : (
            filteredData.map(mistake => (
              mistake.type === 'phishing' ? (
                <PhishingMistakeCard
                  key={mistake.id}
                  mistake={mistake}
                  isExpanded={expandedItems[mistake.id]}
                  onToggle={() => toggleExpand(mistake.id)}
                />
              ) : (
                <QuizMistakeCard
                  key={mistake.id}
                  mistake={mistake}
                  isExpanded={expandedItems[mistake.id]}
                  onToggle={() => toggleExpand(mistake.id)}
                />
              )
            ))
          )}
        </div>
      </div>
    </CanvasEmp>
  );
}

export default SlipUps;