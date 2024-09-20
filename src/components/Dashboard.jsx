import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

function Dashboard() {
  const { id } = useParams();
  const employee = useSelector(state => state.employees.list.find(emp => emp.id === parseInt(id)));

  if (!employee) {
    return <div>Loading...</div>;
  }

  const leaveData = [
    { month: 'Jan', leaves: 1 },
    { month: 'Feb', leaves: 2 },
    { month: 'Mar', leaves: 1 },
    { month: 'Apr', leaves: 0 },
    { month: 'May', leaves: 1 },
    { month: 'Jun', leaves: 2 },
    { month: 'Jul', leaves: 0 },
  ];

  const onLeaveToday = ['Johnson', 'Jenny Kim', 'Robby'];
  const workingRemotely = 'Working Remotely content';

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <h2>Welcome, {employee.name}</h2>
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Profile</h3>
              <div className="profile-content">
                <img src={`https://api.adorable.io/avatars/150/${employee.email}.png`} alt={employee.name} className="profile-image" />
                <p>{employee.name}</p>
                <p>{employee.email}</p>
              </div>
            </div>
            <div className="dashboard-card">
              <h3>Manage Leaves</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={leaveData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="leaves" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="dashboard-card">
              <h3>Recent Applied Leaves</h3>
              <ul>
                <li>Johnson  - 2024-09-01 (Sick Leave)</li>
                <li>Jenny Kim - 2024-09-03 (Annual Leave)</li>
                <li>Robby - 2024-09-04 (Casual Leave)</li>
              </ul>
            </div>
            <div className="dashboard-card">
              <h3>Today's Attendance</h3>
              <p>Check-In Time: 09:08:15</p>
              <p>Total Work Time: 07:00:17</p>
            </div>
            <div className="dashboard-card">
              <h3>On Leave Today</h3>
              <ul>
                {onLeaveToday.map((person, index) => (
                  <li key={index}>{person}</li>
                ))}
              </ul>
            </div>
            <div className="dashboard-card">
              <h3>Working Remotely</h3>
              <p>{workingRemotely}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;