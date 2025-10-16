import { useNavigate } from 'react-router-dom';
import CanvasEmp from './CanvasEmp';
import TypingText from './TypingText';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const leaderboardData = [
    { rank: 1, name: "Sarah Chen", score: 2840 },
    { rank: 2, name: "Mike Rodriguez", score: 2650 },
    { rank: 3, name: "Priya Sharma", score: 2430 },
    { rank: 4, name: "James Wilson", score: 2210 },
    { rank: 5, name: "Emma Thompson", score: 2050 },
  ];

  const kyrosParagraphs = [
    "Incoming transmission…",
    "Greetings, Agent. I’m Kyros, your mission handler.",
    "As Head of Cybersecurity, you stand as the organization’s final line of defense against an onslaught of advanced phishing incursions.",
    "Hostile actors are deploying deceptive campaigns designed to infiltrate our systems and compromise critical assets.",
    "Your mission: identify the threats. neutralize the deception. safeguard the network.",
    "Stay sharp, Agent — the enemy is always watching."
  ];

  return (
    <CanvasEmp path="dashboard">
      <div className="dashboard-container">

        {/* Left Section */}
        <div className="dashboard-left">

          {/* Mission Card */}
          <div className="mission-card mission-card-large">
            <div className="robot-image" />
            <div className="mission-text">
              <TypingText paragraphs={kyrosParagraphs} />
            </div>
          </div>

          {/* Bottom section: Stats + Action Buttons */}
          <div className="bottom-left-section">

            {/* Stats Overview */}
            <div className="stats-overview">
              <div className="stat-card">
                <div className="stat-number">156</div>
                <div className="stat-label">Threats Blocked</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">94%</div>
                <div className="stat-label">Accuracy Rate</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">28</div>
                <div className="stat-label">Days Active</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="btn-mission" onClick={() => navigate('/game')}>Enter →</button>
              <button className="btn-quiz" onClick={() => navigate('/quiz')}>Take Quiz →</button>
            </div>

          </div>
        </div>

        {/* Right Section - Leaderboard */}
        <div className="dashboard-right">
          <div className="leaderboard-card">
            <h3>LEADERBOARD</h3>
            <div className="leaderboard-list">
              {leaderboardData.map((player, index) => (
                <div key={player.rank} className={`leaderboard-item top-${index + 1}`}>
                  <div className="rank-circle">{player.rank}</div>
                  <div className="player-info">
                    <div className="player-name">{player.name}</div>
                    <div className="player-rank">Rank #{player.rank}</div>
                  </div>
                  <div className="player-score">{player.score}</div>
                </div>
              ))}
            </div>

            {/* Your Rank */}
            <div className="your-rank">
              <div className="your-rank-inner">
                <div className="rank-circle">12</div>
                <div className="player-info">
                  <div className="player-name">Your Position</div>
                  <div className="player-rank">Current Rank</div>
                </div>
                <div className="player-score">1,850</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </CanvasEmp>
  );
};

export default Dashboard;
