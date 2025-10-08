import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <nav>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/assigntasks">Assign Tasks</Link></li>
          <li><Link to="/admin/phishing-campaign">Phishing Campaign</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet /> {/* Renders nested admin pages */}
    </div>
  );
};

export default AdminLayout;
