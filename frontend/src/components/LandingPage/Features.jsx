import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="what-is-dephish" id="features">
      <div className="content-container">
        <h2 className="section-heading">What is Dephish?</h2>
        <p className="section-text">
          Dephish is a gamification platform for user education and engagement in information security. 
          Its purpose is to lead the employees of an organization to adopt "cybersecure" habits through intrinsic motivation.
        </p>
        <div className="features-container">
          <div className="feature-box">
            <div className="feature-icon-box" style={{background: 'linear-gradient(135deg, #0fd4aa, #0a9d7f)'}}>
              <img src="/assets/gameicon.png" alt="Game" />
            </div>
            <h3>Interactive Training</h3>
            <p>Real-world phishing scenarios in an engaging game environment</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon-box" style={{background: 'linear-gradient(135deg, #ffc979, #ff9f40)'}}>
              <img src="/assets/quizicon.png" alt="Quiz" />
            </div>
            <h3>Knowledge Tests</h3>
            <p>Comprehensive quizzes to reinforce learning and track progress</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon-box" style={{background: 'linear-gradient(135deg, #5CC9B1, #32847E)'}}>
              <img src="/assets/dashboardicon.png" alt="Dashboard" />
            </div>
            <h3>Analytics Dashboard</h3>
            <p>Track performance, identify vulnerabilities, and measure ROI</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon-box" style={{background: 'linear-gradient(135deg, #e04343, #943A3A)'}}>
              <img src="/assets/slipupsicon.png" alt="Slipups" />
            </div>
            <h3>Learning from Mistakes</h3>
            <p>Review and learn from past mistakes to prevent future incidents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;