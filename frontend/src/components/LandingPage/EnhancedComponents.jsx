import React from 'react';
import { Shield, Target, TrendingUp, AlertTriangle, Book, Award, Users, CheckCircle, Zap, Lock } from 'lucide-react';

// Enhanced Features Component
export const Features = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Interactive Training',
      description: 'Real-world phishing scenarios in an engaging game environment with instant feedback',
      gradient: 'linear-gradient(135deg, #0fd4aa, #0a9d7f)',
      glowColor: 'rgba(15, 212, 170, 0.4)'
    },
    {
      icon: <Book size={32} />,
      title: 'Knowledge Tests',
      description: 'Comprehensive quizzes to reinforce learning and track progress over time',
      gradient: 'linear-gradient(135deg, #ffc979, #ff9f40)',
      glowColor: 'rgba(255, 201, 121, 0.4)'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Analytics Dashboard',
      description: 'Track performance, identify vulnerabilities, and measure ROI with detailed insights',
      gradient: 'linear-gradient(135deg, #5CC9B1, #32847E)',
      glowColor: 'rgba(92, 201, 177, 0.4)'
    },
    // {
    //   icon: <AlertTriangle size={32} />,
    //   title: 'Learning from Mistakes',
    //   description: 'Review and learn from past mistakes to prevent future security incidents',
    //   gradient: 'linear-gradient(135deg, #e04343, #943A3A)',
    //   glowColor: 'rgba(224, 67, 67, 0.4)'
    // }
  ];

  return (
    <section style={{
      padding: '100px 0',
      position: 'relative',
      zIndex: 10,
      background: 'rgba(15, 23, 42, 0.3)',
      backdropFilter: 'blur(10px)'
    }} id="features">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px var(--glow-color); }
            50% { box-shadow: 0 0 40px var(--glow-color); }
          }
          .feature-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .feature-card:hover {
            transform: translateY(-12px);
          }
          .feature-icon-container {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff, #b5c4d3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Inter, sans-serif'
          }}>
            What is Dephish?
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#b5c4d3',
            maxWidth: '900px',
            margin: '0 auto',
            fontFamily: 'Inter, sans-serif'
          }}>
            Dephish is a gamification platform for user education and engagement in information security. 
            Its purpose is to lead the employees of an organization to adopt "cybersecure" habits through intrinsic motivation.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                background: 'linear-gradient(135deg, rgba(28, 46, 69, 0.6), rgba(15, 30, 35, 0.8))',
                border: '1px solid rgba(15, 212, 170, 0.2)',
                borderRadius: '20px',
                padding: '40px 30px',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(15, 212, 170, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(15, 212, 170, 0.2)';
              }}
            >
              {/* Background Glow */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: `radial-gradient(circle, ${feature.glowColor} 0%, transparent 70%)`,
                opacity: 0.3,
                pointerEvents: 'none'
              }} />

              {/* Icon Container */}
              <div
                className="feature-icon-container"
                style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto 30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: feature.gradient,
                  boxShadow: `0 8px 32px ${feature.glowColor}`,
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div style={{ color: '#ffffff' }}>
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#ffffff',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#b5c4d3',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: feature.gradient,
                opacity: 0.1,
                borderRadius: '20px 0 20px 0'
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced How It Works Component
export const HowItWorks = () => {
  const methods = [
    {
      icon: <Book size={28} />,
      title: 'Taking cybersecurity courses',
      color: '#3b82f6',
      bgGradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
    },
    {
      icon: <Shield size={28} />,
      title: 'Reporting cybersecurity risks',
      color: '#f97316',
      bgGradient: 'linear-gradient(135deg, #f97316, #ea580c)'
    },
    {
      icon: <CheckCircle size={28} />,
      title: 'Answering quizzes and taking tests',
      color: '#10b981',
      bgGradient: 'linear-gradient(135deg, #10b981, #059669)'
    },
   
  ];

  return (
    <section style={{
      padding: '100px 0',
      position: 'relative',
      zIndex: 10
    }} id="how-it-works">
      <style>
        {`
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .method-card {
            animation: slideInLeft 0.6s ease-out forwards;
            opacity: 0;
          }
          .method-card:nth-child(1) { animation-delay: 0.1s; }
          .method-card:nth-child(2) { animation-delay: 0.2s; }
          .method-card:nth-child(3) { animation-delay: 0.3s; }
          .method-card:nth-child(4) { animation-delay: 0.4s; }
        `}
      </style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff, #b5c4d3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Inter, sans-serif'
          }}>
            How does it work?
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#b5c4d3',
            maxWidth: '900px',
            margin: '0 auto',
            fontFamily: 'Inter, sans-serif'
          }}>
            Competitors earn points when they learn good practices for data protection, adopt safe habits, 
            report cybersecurity risks, and help out colleagues. A player can rank up by:
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {methods.map((method, index) => (
            <div
              key={index}
              className="method-card"
              style={{
                background: 'rgba(28, 46, 69, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '32px 24px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = `${method.color}40`;
                e.currentTarget.style.boxShadow = `0 12px 40px ${method.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Number Badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: `${method.color}20`,
                border: `2px solid ${method.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                color: method.color
              }}>
                {index + 1}
              </div>

              {/* Icon Circle */}
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 24px',
                borderRadius: '50%',
                background: method.bgGradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 8px 24px ${method.color}40`
              }}>
                <div style={{ color: '#ffffff' }}>
                  {method.icon}
                </div>
              </div>

              {/* Title */}
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#ffffff',
                lineHeight: '1.5',
                textAlign: 'center',
                fontFamily: 'Inter, sans-serif'
              }}>
                {method.title}
              </h4>

              {/* Bottom Accent Line */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: method.bgGradient,
                opacity: 0.6
              }} />
            </div>
          ))}
        </div>

        {/* Enhanced Testimonial */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 212, 170, 0.1), rgba(15, 212, 170, 0.05))',
          border: '2px solid rgba(15, 212, 170, 0.3)',
          borderRadius: '20px',
          padding: '48px',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)'
        }}>
          {/* Quote Icon */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '30px',
            fontSize: '80px',
            color: 'rgba(15, 212, 170, 0.2)',
            fontFamily: 'Georgia, serif',
            lineHeight: 1
          }}>
            "
          </div>

          {/* Testimonial Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{
              fontSize: '20px',
              fontStyle: 'italic',
              lineHeight: '1.8',
              color: '#e8f0f5',
              marginBottom: '24px',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif'
            }}>
              I consider Hacker Rangers' learning method to be very effective. The platform works as an 
              essential factor to facilitate the awareness campaigns in companies in a playful and fun way.
            </p>

            {/* Author */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0fd4aa, #0a9d7f)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#ffffff'
              }}>
                SA
              </div>
              <div>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#ffffff',
                  margin: 0,
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Stephanie Alexandre
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#0fd4aa',
                  margin: 0,
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Security Analyst at PlayKids
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            right: '-30px',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(15, 212, 170, 0.2), transparent)',
            filter: 'blur(40px)'
          }} />
        </div>
      </div>
    </section>
  );
};

// Export both components as default
export default { Features, HowItWorks };