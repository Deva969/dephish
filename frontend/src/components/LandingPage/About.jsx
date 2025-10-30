import React from 'react';
import hackImage from './../../assets/hack.png';
import robotImage from './../../assets/robot-landing-page.png';
import './About.css';

const About = () => {
  return (
    <section className="why-dephish" id="about">
      <div className="content-container">
        <div className="why-layout">
          <div className="why-image-section">
            <img src={robotImage} alt="Cybersecurity Hero" className="why-hero-img" />
          </div>
          <div className="why-text-section">
            <h2 className="section-heading left-align">Why Dephish?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="check-circle">✓</div>
                <div>
                  <h4>Gamified Learning Experience</h4>
                  <p>Transform boring security training into an engaging adventure</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="check-circle">✓</div>
                <div>
                  <h4>Real-World Scenarios</h4>
                  <p>Practice with actual phishing attempts in a safe environment</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="check-circle">✓</div>
                <div>
                  <h4>Measurable Results</h4>
                  <p>Track progress and demonstrate ROI to stakeholders</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="check-circle">✓</div>
                <div>
                  <h4>Continuous Learning</h4>
                  <p>Regular updates with new threats keep training relevant</p>
                </div>
              </div>
            </div>
            <div className="quote-box">
              "Every day, I fall more in love with Dephish. The platform is beautiful and easy to navigate. 
              It is filled with updated and rich content that appeals to the entire company."
              <cite>— Alessandra Pacheco, Ztech Ambev</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;