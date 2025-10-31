import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Award, Clock, Target, TrendingUp, ArrowRight, RotateCcw } from 'lucide-react';

// Quiz data structure
const quizData = [
  {
    id: 1,
    question: "You receive an email from 'support@paypa1.com' asking you to verify your account. What should you do?",
    options: [
      { id: 'a', text: 'Click the link and enter your credentials', isCorrect: false },
      { id: 'b', text: 'Delete the email immediately and report it', isCorrect: true },
      { id: 'c', text: 'Forward it to your colleagues to check', isCorrect: false },
      { id: 'd', text: 'Reply asking for more information', isCorrect: false }
    ],
    explanation: "This is a classic phishing attempt. Notice the '1' instead of 'l' in 'paypal'. Always verify sender addresses and never click suspicious links.",
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Which of the following is the STRONGEST password?",
    options: [
      { id: 'a', text: 'Password123!', isCorrect: false },
      { id: 'b', text: 'JohnDoe1990', isCorrect: false },
      { id: 'c', text: 'Tr0ub4dor&3', isCorrect: false },
      { id: 'd', text: 'mK$9pL#2qR@7nB', isCorrect: true }
    ],
    explanation: "A strong password should be at least 12 characters long, contain uppercase, lowercase, numbers, and special characters with no dictionary words.",
    difficulty: 'medium'
  },
  {
    id: 3,
    question: "Your CEO sends an urgent email requesting an immediate wire transfer. What's the BEST action?",
    options: [
      { id: 'a', text: 'Process the transfer immediately as requested', isCorrect: false },
      { id: 'b', text: 'Verify through a separate communication channel first', isCorrect: true },
      { id: 'c', text: 'Ask for more details via email reply', isCorrect: false },
      { id: 'd', text: 'Forward to finance team without verification', isCorrect: false }
    ],
    explanation: "CEO fraud (Business Email Compromise) is common. Always verify financial requests through a different communication method like phone call.",
    difficulty: 'medium'
  },
  {
    id: 4,
    question: "What is 'spear phishing'?",
    options: [
      { id: 'a', text: 'A fishing technique using spears', isCorrect: false },
      { id: 'b', text: 'Mass phishing emails sent to thousands', isCorrect: false },
      { id: 'c', text: 'Targeted phishing aimed at specific individuals', isCorrect: true },
      { id: 'd', text: 'Phishing using phone calls only', isCorrect: false }
    ],
    explanation: "Spear phishing is a highly targeted attack aimed at specific individuals using personalized information to appear legitimate.",
    difficulty: 'easy'
  },
  {
    id: 5,
    question: "A link preview shows 'https://amazon.com' but hovering reveals 'http://amaz0n-security.xyz'. What's happening?",
    options: [
      { id: 'a', text: 'Amazons official security page', isCorrect: false },
      { id: 'b', text: 'URL spoofing/phishing attempt', isCorrect: true },
      { id: 'c', text: 'A legitimate subdomain', isCorrect: false },
      { id: 'd', text: 'Amazons international site', isCorrect: false }
    ],
    explanation: "This is URL spoofing. The displayed text doesn't match the actual destination. Always check the actual URL before clicking.",
    difficulty: 'hard'
  }
];

// Question Card Component
const QuestionCard = ({ question, selectedAnswer, onAnswer, showFeedback }) => {
  return (
    <div style={{
      background: 'rgba(15, 30, 35, 0.8)',
      border: '1px solid rgba(148, 115, 67, 0.5)',
      borderRadius: '16px',
      padding: '32px',
      marginBottom: '24px'
    }}>
      {/* Difficulty Badge */}
      <div style={{ marginBottom: '16px' }}>
        <span style={{
          display: 'inline-block',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 'bold',
          background: question.difficulty === 'easy' ? 'rgba(16, 185, 129, 0.2)' : 
                     question.difficulty === 'medium' ? 'rgba(245, 158, 11, 0.2)' : 
                     'rgba(239, 68, 68, 0.2)',
          color: question.difficulty === 'easy' ? '#10b981' : 
                 question.difficulty === 'medium' ? '#f59e0b' : '#ef4444',
          border: `1px solid ${question.difficulty === 'easy' ? '#10b981' : 
                               question.difficulty === 'medium' ? '#f59e0b' : '#ef4444'}`
        }}>
          {question.difficulty.toUpperCase()}
        </span>
      </div>

      {/* Question Text */}
      <h2 style={{
        fontSize: '22px',
        fontWeight: '700',
        color: '#ffc979',
        marginBottom: '24px',
        lineHeight: '1.5'
      }}>
        {question.question}
      </h2>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          const isCorrect = option.isCorrect;
          
          let borderColor = 'rgba(148, 115, 67, 0.3)';
          let backgroundColor = 'rgba(15, 30, 35, 0.4)';
          let textColor = '#e8f0f5';
          
          if (showFeedback && isSelected) {
            if (isCorrect) {
              borderColor = '#10b981';
              backgroundColor = 'rgba(16, 185, 129, 0.1)';
            } else {
              borderColor = '#ef4444';
              backgroundColor = 'rgba(239, 68, 68, 0.1)';
            }
          } else if (showFeedback && isCorrect) {
            borderColor = '#10b981';
            backgroundColor = 'rgba(16, 185, 129, 0.1)';
          }

          return (
            <button
              key={option.id}
              onClick={() => !showFeedback && onAnswer(option.id)}
              disabled={showFeedback}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 20px',
                border: `2px solid ${borderColor}`,
                borderRadius: '12px',
                background: backgroundColor,
                color: textColor,
                fontSize: '16px',
                cursor: showFeedback ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                opacity: showFeedback && !isSelected && !isCorrect ? 0.5 : 1
              }}
              onMouseEnter={(e) => {
                if (!showFeedback) {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.borderColor = '#ffc979';
                }
              }}
              onMouseLeave={(e) => {
                if (!showFeedback) {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'rgba(148, 115, 67, 0.3)';
                }
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '2px solid rgba(148, 115, 67, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '14px',
                flexShrink: 0
              }}>
                {option.id.toUpperCase()}
              </div>
              <span style={{ flex: 1 }}>{option.text}</span>
              {showFeedback && isCorrect && (
                <CheckCircle style={{ color: '#10b981', width: 24, height: 24 }} />
              )}
              {showFeedback && isSelected && !isCorrect && (
                <XCircle style={{ color: '#ef4444', width: 24, height: 24 }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showFeedback && (
        <div style={{
          marginTop: '24px',
          padding: '16px',
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '12px',
          animation: 'fadeIn 0.5s ease-in'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Target style={{ color: '#10b981', width: 20, height: 20 }} />
            <span style={{ color: '#10b981', fontWeight: 'bold' }}>Explanation</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

// Progress Bar Component
const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div style={{ marginBottom: '32px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px'
      }}>
        <span style={{ color: '#ffc979', fontSize: '14px', fontWeight: '600' }}>
          Question {current} of {total}
        </span>
        <span style={{ color: '#94a3b8', fontSize: '14px' }}>
          {Math.round(percentage)}% Complete
        </span>
      </div>
      <div style={{
        width: '100%',
        height: '8px',
        background: 'rgba(15, 30, 35, 0.6)',
        borderRadius: '4px',
        overflow: 'hidden',
        border: '1px solid rgba(148, 115, 67, 0.3)'
      }}>
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #ffc979, #947343)',
          transition: 'width 0.5s ease',
          borderRadius: '4px'
        }} />
      </div>
    </div>
  );
}

export default Quiz;;

// Results Screen Component
const ResultsScreen = ({ score, total, correctAnswers, timeTaken, onRestart }) => {
  const percentage = (score / total) * 100;
  
  let grade = '';
  let gradeColor = '';
  let message = '';
  
  if (percentage >= 80) {
    grade = 'Excellent!';
    gradeColor = '#10b981';
    message = 'Outstanding performance! You have excellent cybersecurity awareness.';
  } else if (percentage >= 60) {
    grade = 'Good Job!';
    gradeColor = '#ffc979';
    message = 'Well done! You have solid security knowledge with room for improvement.';
  } else {
    grade = 'Keep Learning!';
    gradeColor = '#ef4444';
    message = 'Don\'t worry! Review the explanations and try again to improve your score.';
  }

  return (
    <div style={{
      background: 'rgba(15, 30, 35, 0.8)',
      border: '2px solid rgba(148, 115, 67, 0.5)',
      borderRadius: '20px',
      padding: '48px',
      textAlign: 'center',
      animation: 'fadeIn 0.5s ease-in'
    }}>
      {/* Award Icon */}
      <div style={{
        display: 'inline-flex',
        padding: '24px',
        background: `${gradeColor}20`,
        borderRadius: '50%',
        marginBottom: '24px'
      }}>
        <Award style={{ width: 64, height: 64, color: gradeColor }} />
      </div>

      {/* Grade */}
      <h1 style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: gradeColor,
        marginBottom: '16px'
      }}>
        {grade}
      </h1>

      {/* Score */}
      <div style={{
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#ffc979',
        marginBottom: '24px'
      }}>
        {score} / {total}
        <span style={{ fontSize: '20px', color: '#94a3b8', marginLeft: '8px' }}>
          ({percentage.toFixed(0)}%)
        </span>
      </div>

      {/* Message */}
      <p style={{
        color: '#94a3b8',
        fontSize: '18px',
        marginBottom: '32px',
        lineHeight: '1.6',
        maxWidth: '500px',
        margin: '0 auto 32px'
      }}>
        {message}
      </p>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginBottom: '32px'
      }}>
        <div style={{
          padding: '20px',
          background: 'rgba(15, 30, 35, 0.4)',
          border: '1px solid rgba(148, 115, 67, 0.3)',
          borderRadius: '12px'
        }}>
          <CheckCircle style={{ width: 32, height: 32, color: '#10b981', margin: '0 auto 8px' }} />
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>
            {correctAnswers}
          </div>
          <div style={{ fontSize: '12px', color: '#94a3b8' }}>Correct</div>
        </div>

        <div style={{
          padding: '20px',
          background: 'rgba(15, 30, 35, 0.4)',
          border: '1px solid rgba(148, 115, 67, 0.3)',
          borderRadius: '12px'
        }}>
          <XCircle style={{ width: 32, height: 32, color: '#ef4444', margin: '0 auto 8px' }} />
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ef4444' }}>
            {total - correctAnswers}
          </div>
          <div style={{ fontSize: '12px', color: '#94a3b8' }}>Incorrect</div>
        </div>

        <div style={{
          padding: '20px',
          background: 'rgba(15, 30, 35, 0.4)',
          border: '1px solid rgba(148, 115, 67, 0.3)',
          borderRadius: '12px'
        }}>
          <Clock style={{ width: 32, height: 32, color: '#ffc979', margin: '0 auto 8px' }} />
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffc979' }}>
            {timeTaken}s
          </div>
          <div style={{ fontSize: '12px', color: '#94a3b8' }}>Time</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <button
          onClick={onRestart}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 32px',
            background: 'linear-gradient(135deg, rgba(148, 115, 67, 0.3), rgba(109, 53, 6, 0.3))',
            border: '2px solid #947343',
            borderRadius: '12px',
            color: '#ffc979',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(148, 115, 67, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <RotateCcw size={20} />
          Try Again
        </button>

        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 32px',
            background: 'transparent',
            border: '2px solid #947343',
            borderRadius: '12px',
            color: '#ffc979',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(148, 115, 67, 0.1)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          View Leaderboard
          <TrendingUp size={20} />
        </button>
      </div>
    </div>
  );
};

// Main Quiz Component
function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [startTime] = useState(Date.now());
  const [timeTaken, setTimeTaken] = useState(0);

  const currentQuestion = quizData[currentQuestionIndex];

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleAnswer = (answerId) => {
    setSelectedAnswer(answerId);
    setShowFeedback(true);

    const isCorrect = currentQuestion.options.find(opt => opt.id === answerId)?.isCorrect;
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      const endTime = Date.now();
      setTimeTaken(Math.floor((endTime - startTime) / 1000));
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setCorrectAnswers(0);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <ResultsScreen
            score={score}
            total={quizData.length}
            correctAnswers={correctAnswers}
            timeTaken={timeTaken}
            onRestart={handleRestart}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <ProgressBar
          current={currentQuestionIndex + 1}
          total={quizData.length}
        />

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onAnswer={handleAnswer}
          showFeedback={showFeedback}
        />

        {showFeedback && (
          <button
            onClick={handleNext}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '16px',
              background: 'linear-gradient(135deg, rgba(148, 115, 67, 0.3), rgba(109, 53, 6, 0.3))',
              border: '2px solid #947343',
              borderRadius: '12px',
              color: '#ffc979',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              animation: 'fadeIn 0.5s ease-in'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(148, 115, 67, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {currentQuestionIndex < quizData.length - 1 ? 'Next Question' : 'View Results'}
            <ArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
}