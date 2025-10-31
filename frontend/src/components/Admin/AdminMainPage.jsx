import { Link } from "react-router-dom";
import { LayoutDashboard, Target, ClipboardList } from "lucide-react";

const AdminMainPage = () => {
  return (
    <div className="admin-welcome">
      <div className="welcome-header">
        <h1 className="welcome-title">Welcome to Admin Dashboard</h1>
        <p className="welcome-subtitle">Manage your organization's security training and campaigns</p>
      </div>

      <div className="admin-cards-grid">
        <Link to="/admin/dashboard" className="admin-feature-card">
          <div className="card-icon-wrapper dashboard">
            <LayoutDashboard className="card-icon" />
          </div>
          <h3 className="card-title">Analytics Dashboard</h3>
          <p className="card-description">
            View comprehensive analytics, user statistics, and phishing campaign results
          </p>
          <div className="card-footer">
            <span className="card-link">View Dashboard →</span>
          </div>
        </Link>

        <Link to="/admin/phishing-campaign" className="admin-feature-card">
          <div className="card-icon-wrapper campaign">
            <Target className="card-icon" />
          </div>
          <h3 className="card-title">Phishing Campaign</h3>
          <p className="card-description">
            Create and manage phishing simulation campaigns to test employee awareness
          </p>
          <div className="card-footer">
            <span className="card-link">Manage Campaigns →</span>
          </div>
        </Link>

        <Link to="/admin/assigntasks" className="admin-feature-card">
          <div className="card-icon-wrapper tasks">
            <ClipboardList className="card-icon" />
          </div>
          <h3 className="card-title">Assign Tasks</h3>
          <p className="card-description">
            Assign training modules and quizzes to employees and track their progress
          </p>
          <div className="card-footer">
            <span className="card-link">Assign Tasks →</span>
          </div>
        </Link>
      </div>

      <div className="quick-stats">
        <div className="stat-item">
          <div className="stat-label">Total Employees</div>
          <div className="stat-value">247</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Active Campaigns</div>
          <div className="stat-value">5</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Awareness Score</div>
          <div className="stat-value">78%</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Tasks Assigned</div>
          <div className="stat-value">156</div>
        </div>
      </div>
    </div>
  );
};

export default AdminMainPage;