import './LandingPage.css'
import Navbar from './Navbar'
import Background from './Background'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Clients from './Clients'
import About from './About'
import hackImage from './../../assets/hack.png'
import robotImage from './../../assets/robot-landing-page.png'
import Fish from './../../components/LandingPage/Fish'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <Fish />
      <Background>
        <Navbar />
        <img src={hackImage} alt="cant show hackimage" className="looper" />
        <img src={robotImage} alt="cant show robotimage" className="kyros"/>
        
        {/* Hero Section */}
        <div className="hero-wrapper">
          <div className="hero-content-section">
            <div className="hero-badge">🛡️ ENTERPRISE SECURITY TRAINING</div>
            <h1 className="main-title">
              Protect Your Organization from
              <span className="gradient-text"> Phishing Attacks</span>
            </h1>
            <p className="main-subtitle">
              Gamified cybersecurity training platform that transforms employees into your strongest defense line
            </p>
            <div className="hero-action-buttons">
              <Link to="/dashboard" className="primary-button">
                Start Training <span className="arrow">→</span>
              </Link>
              <button className="secondary-button">
                Watch Demo <span className="play">▶</span>
              </button>
            </div>
            <div className="stats-container">
              <div className="stat-box">
                <div className="stat-num">98%</div>
                <div className="stat-text">Success Rate</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">500K+</div>
                <div className="stat-text">Employees Trained</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">1000+</div>
                <div className="stat-text">Companies Trust Us</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Components */}
        <Features />
        <HowItWorks />
        <About />
        <Clients />

        {/* CTA Section */}
        <section className="cta-section">
          <div className="content-container">
            <div className="cta-box">
              <h2>Ready to Secure Your Organization?</h2>
              <p>Join thousands of companies using Dephish to protect their digital assets</p>
              <div className="cta-action-buttons">
                <Link to="/dashboard" className="primary-button large">Start Free Trial</Link>
                <button className="secondary-button large">Schedule a Demo</button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="content-container">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="footer-brand">
                  <img src="/assets/dephishlogoemp.png" alt="Dephish" style={{height: '40px'}} />
                </div>
                <p>Empowering organizations with cutting-edge cybersecurity training</p>
              </div>
              <div className="footer-col">
                <h4>Product</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#demo">Demo</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#docs">Documentation</a></li>
                  <li><a href="#support">Support</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom-bar">
              <p>&copy; 2025 Dephish. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </Background>
    </>
  )
}

export default LandingPage