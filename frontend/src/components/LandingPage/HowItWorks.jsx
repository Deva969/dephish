import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="content-container">
        <h2 className="section-heading">How does it work?</h2>
        <p className="section-text">
          Competitors earn points when they learn good practices for data protection, adopt safe habits, 
          report cybersecurity risks, and help out colleagues. The evolution of each player can be followed 
          in the weekly, monthly and overall leaderboards. A player can rank up by:
        </p>
        <div className="methods-container">
          <div className="method-box">
            <div className="method-icon-circle blue-grad">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Taking cybersecurity courses</h4>
          </div>
          <div className="method-box">
            <div className="method-icon-circle orange-grad">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Reporting cybersecurity risks</h4>
          </div>
          <div className="method-box">
            <div className="method-icon-circle green-grad">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Answering quizzes and taking tests</h4>
          </div>
          <div className="method-box">
            <div className="method-icon-circle red-grad">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Not falling victim to phishing messages</h4>
          </div>
          <div className="method-box">
            <div className="method-icon-circle yellow-grad">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Putting safe cyberattitudes into practice</h4>
          </div>
        </div>
        
        <div className="testimonial-box">
          <p className="testimonial-quote">
            "I consider Hacker Rangers' learning method to be very effective. The platform works as an 
            essential factor to facilitate the awareness campaigns in companies in a playful and fun way."
          </p>
          <p className="testimonial-name">
            Stephanie Alexandre, <span className="green-highlight">Security Analyst at PlayKids</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;