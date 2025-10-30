import { useState } from 'react';
import { Users, Target, TrendingUp, AlertTriangle, ChevronDown, Search, Download, Filter } from 'lucide-react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const AdminDashboard = () => {
  const [selectedSeason, setSelectedSeason] = useState('Current season');
  const [selectedAttitudeType, setSelectedAttitudeType] = useState('Consider all cyberattitude types');

  // Sample user data
  const userData = [
    { name: 'PRDNOGMRV_01', email: 'user1@example.com', category: 'default', invisible: 'No', createdOn: '08/06/2021 at 04:01:42 PM', lastAccess: '09/14/2021 at 06:45:14 PM', group: 'Portugues', rank: 'n00b', reviewed: 1 },
    { name: 'JLAALVCSA_01', email: 'user2@example.com', category: 'default', invisible: 'No', createdOn: '08/09/2021 at 04:45:33 PM', lastAccess: '08/11/2021 at 05:14:47 PM', group: 'Portugues', rank: 'n00b', reviewed: 1 },
    { name: 'CALLOYGRQV_01', email: 'user3@example.com', category: 'default', invisible: 'No', createdOn: '08/10/2021 at 02:32:39 PM', lastAccess: '08/24/2021 at 05:23:13 PM', group: 'Portugues', rank: 'Script Kiddie', reviewed: 2 },
    { name: 'AGOSTUSACON_01', email: 'user4@example.com', category: 'default', invisible: 'No', createdOn: '08/11/2021 at 06:28:24 PM', lastAccess: '07/16/2023 at 12:42:58 PM', group: 'Portugues', rank: 'n00b', reviewed: 1 },
    { name: 'ALINBORTAU_01', email: 'user5@example.com', category: 'default', invisible: 'No', createdOn: '08/13/2021 at 03:21:43 PM', lastAccess: '08/20/2021 at 11:36:08 AM', group: 'Portugues', rank: 'n00b', reviewed: 1 },
    { name: 'ANDBATMRV_01', email: 'user6@example.com', category: 'default', invisible: 'No', createdOn: '08/18/2021 at 10:07:05 PM', lastAccess: '08/18/2021 at 10:42:04 AM', group: 'Portugues', rank: 'n00b', reviewed: 1 },
    { name: 'VLTSLVPROCO_01', email: 'user7@example.com.br', category: 'default', invisible: 'No', createdOn: '09/01/2021 at 10:35:31 AM', lastAccess: '09/01/2021 at 10:58:50 AM', group: 'Portugues', rank: 'n00b', reviewed: 1 },
    { name: 'LUZMELOGPSOF', email: 'user8@example.com.br', category: 'default', invisible: 'No', createdOn: '09/02/2021 at 04:12:05 PM', lastAccess: '09/08/2021 at 11:33:27 AM', group: 'Portugues', rank: 'Script Kiddie', reviewed: 1 },
  ];

  // Phishing statistics data
  const phishingVictimData = {
    labels: ['Safe', 'At Risk'],
    datasets: [{
      data: [69, 31],
      backgroundColor: ['#10b981', '#ef4444'],
      borderWidth: 0,
    }]
  };

  const campaignParticipationData = {
    labels: ['Participated', 'Not Participated'],
    datasets: [{
      data: [23, 77],
      backgroundColor: ['#ef4444', '#e5e7eb'],
      borderWidth: 0,
    }]
  };

  const activeUsersPhishingData = {
    labels: ['Victims', 'Safe'],
    datasets: [{
      data: [50, 50],
      backgroundColor: ['#ef4444', '#e5e7eb'],
      borderWidth: 0,
    }]
  };

  const inactiveUsersPhishingData = {
    labels: ['Victims', 'Safe'],
    datasets: [{
      data: [50, 50],
      backgroundColor: ['#ef4444', '#e5e7eb'],
      borderWidth: 0,
    }]
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      }
    },
    cutout: '70%',
  };

  // Bar chart for user activity
  const activityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Active Users',
      data: [45, 52, 38, 65, 59, 30, 25],
      backgroundColor: '#3b82f6',
    }]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#374151',
        },
        ticks: {
          color: '#9ca3af',
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#9ca3af',
        }
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#fff', padding: '24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '8px' }}>Admin Dashboard</h1>
        <p style={{ color: '#9ca3af' }}>Monitor security awareness and phishing campaigns</p>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', padding: '24px', border: '1px solid #374151' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ padding: '12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderRadius: '8px' }}>
              <Users style={{ width: '24px', height: '24px', color: '#60a5fa' }} />
            </div>
            <span style={{ fontSize: '14px', color: '#10b981' }}>+12%</span>
          </div>
          <h3 style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '4px' }}>Total Users</h3>
          <p style={{ fontSize: '30px', fontWeight: 'bold' }}>247</p>
        </div>

        <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', padding: '24px', border: '1px solid #374151' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ padding: '12px', backgroundColor: 'rgba(239, 68, 68, 0.2)', borderRadius: '8px' }}>
              <AlertTriangle style={{ width: '24px', height: '24px', color: '#f87171' }} />
            </div>
            <span style={{ fontSize: '14px', color: '#ef4444' }}>31%</span>
          </div>
          <h3 style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '4px' }}>Phishing Victims</h3>
          <p style={{ fontSize: '30px', fontWeight: 'bold' }}>76</p>
        </div>

        <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', padding: '24px', border: '1px solid #374151' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ padding: '12px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderRadius: '8px' }}>
              <Target style={{ width: '24px', height: '24px', color: '#34d399' }} />
            </div>
            <span style={{ fontSize: '14px', color: '#10b981' }}>+8%</span>
          </div>
          <h3 style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '4px' }}>Active Campaigns</h3>
          <p style={{ fontSize: '30px', fontWeight: 'bold' }}>5</p>
        </div>

        <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', padding: '24px', border: '1px solid #374151' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ padding: '12px', backgroundColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '8px' }}>
              <TrendingUp style={{ width: '24px', height: '24px', color: '#a78bfa' }} />
            </div>
            <span style={{ fontSize: '14px', color: '#10b981' }}>+23%</span>
          </div>
          <h3 style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '4px' }}>Awareness Score</h3>
          <p style={{ fontSize: '30px', fontWeight: 'bold' }}>78%</p>
        </div>
      </div>

      {/* Phishing Statistics Section */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Phishing Statistics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {/* Card 1 */}
          <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', padding: '24px', border: '1px solid #374151' }}>
            <h3 style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '16px', minHeight: '60px' }}>Users who have fallen victim to a phishing message at least once</h3>
            <div style={{ height: '192px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Doughnut data={phishingVictimData} options={doughnutOptions} />
              <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', inset: 0 }}>
                <span style={{ fontSize: '30px', fontWeight: 'bold' }}>31%</span>
              </div>
            </div>
            <div style={{ marginTop: '16px', fontSize: '12px', color: '#9ca3af' }}>
              <div style={{ marginBottom: '4px' }}>Excellent: 0% - 5%</div>
              <div style={{ marginBottom: '4px' }}>Regular: 6% - 14%</div>
              <div>Unsatisfactory: 15% - 100%</div>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', padding: '24px', border: '1px solid #374151' }}>
            <h3 style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '16px', minHeight: '60px' }}>Users who have fallen victim to all the phishing campaigns in which they have participated</h3>
            <div style={{ height: '192px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Doughnut data={campaignParticipationData} options={doughnutOptions} />
              <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', inset: 0 }}>
                <span style={{ fontSize: '30px', fontWeight: 'bold' }}>23%</span>
              </div>
            </div>
            <div style={{ marginTop: '16px', fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>
              3 of 13 users
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', padding: '24px', border: '1px solid #374151' }}>
            <h3 style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '16px', minHeight: '60px' }}>Active users who have fallen victim to phishing messages</h3>
            <div style={{ height: '192px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Doughnut data={activeUsersPhishingData} options={doughnutOptions} />
              <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', inset: 0 }}>
                <span style={{ fontSize: '30px', fontWeight: 'bold' }}>50%</span>
              </div>
            </div>
            <div style={{ marginTop: '16px', fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>
              2 of 4 users
            </div>
          </div>

          {/* Card 4 */}
          {/* <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', padding: '24px', border: '1px solid #374151' }}>
            <h3 style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '16px', minHeight: '60px' }}>Inactive users who have fallen victim to phishing messages</h3>
            <div style={{ height: '192px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Doughnut data={inactiveUsersPhishingData} options={doughnutOptions} />
              <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', inset: 0 }}>
                <span style={{ fontSize: '30px', fontWeight: 'bold' }}>50%</span>
              </div>
            </div>
            <div style={{ marginTop: '16px', fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>
              2 of 4 users
            </div>
          </div> */}
        </div>
      </div>

      {/* User Activity Chart */}
      <div style={{ marginBottom: '32px', backgroundColor: '#1f2937', borderRadius: '8px', padding: '24px', border: '1px solid #374151' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Weekly User Activity</h2>
        <div style={{ height: '256px' }}>
          <Bar data={activityData} options={barOptions} />
        </div>
      </div>

      {/* Users Table */}
      <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', border: '1px solid #374151' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid #374151' }}>
          {/* <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Users That Had At Least One Of Their Cyberattitudes Reviewed</h2> */}
          
          {/* Filters */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', color: '#9ca3af', marginBottom: '8px' }}>Select a cyberattitude type:</label>
              <div style={{ position: 'relative' }}>
                <select 
                  value={selectedAttitudeType}
                  onChange={(e) => setSelectedAttitudeType(e.target.value)}
                  style={{ 
                    width: '100%', 
                    backgroundColor: '#374151', 
                    border: '1px solid #4b5563', 
                    borderRadius: '8px', 
                    padding: '8px 32px 8px 16px', 
                    color: '#fff',
                    appearance: 'none',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  <option>Consider all cyberattitude types</option>
                  <option>Phishing Awareness</option>
                  <option>Password Security</option>
                  <option>Data Protection</option>
                </select>
                <ChevronDown style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#9ca3af', pointerEvents: 'none' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', color: '#9ca3af', marginBottom: '8px' }}>Select which season you want to get data from:</label>
              <div style={{ position: 'relative' }}>
                <select 
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(e.target.value)}
                  style={{ 
                    width: '100%', 
                    backgroundColor: '#374151', 
                    border: '1px solid #4b5563', 
                    borderRadius: '8px', 
                    padding: '8px 32px 8px 16px', 
                    color: '#fff',
                    appearance: 'none',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  <option>Current season</option>
                  <option>Previous season</option>
                  <option>All seasons</option>
                </select>
                <ChevronDown style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#9ca3af', pointerEvents: 'none' }} />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ padding: '8px', backgroundColor: '#374151', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
              <Search style={{ width: '20px', height: '20px', color: '#fff' }} />
            </button>
            <button style={{ padding: '8px', backgroundColor: '#374151', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
              <Filter style={{ width: '20px', height: '20px', color: '#fff' }} />
            </button>
            <button style={{ padding: '8px', backgroundColor: '#374151', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
              <Download style={{ width: '20px', height: '20px', color: '#fff' }} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#374151' }}>
              <tr>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Invisible</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Created On</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Last Access</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Group</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rank</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Reviewed</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #374151' }}>
                  <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px' }}>{user.name}</td>
                  <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px', color: '#9ca3af' }}>{user.email}</td>
                  <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px' }}>{user.category}</td>
                  <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px' }}>{user.invisible}</td>
                  <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px', color: '#9ca3af' }}>{user.createdOn}</td>
                  <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px', color: '#9ca3af' }}>{user.lastAccess}</td>
                  <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px' }}>{user.group}</td>
                  <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '4px', 
                      fontSize: '12px',
                      backgroundColor: user.rank === 'Script Kiddie' ? 'rgba(234, 179, 8, 0.2)' : '#374151',
                      color: user.rank === 'Script Kiddie' ? '#fbbf24' : '#d1d5db'
                    }}>
                      {user.rank}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px' }}>{user.reviewed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;