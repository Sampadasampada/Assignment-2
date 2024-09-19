import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Paper, Typography, Box } from '@mui/material';
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
    { month: 'Jan', leaves: 2 },
    { month: 'Feb', leaves: 1 },
    { month: 'Mar', leaves: 0 },
    { month: 'Apr', leaves: 3 },
    { month: 'May', leaves: 2 },
    { month: 'Jun', leaves: 1 },
    { month: 'Jul', leaves: 2 },
  ];

  const onLeaveToday = ['John Doe', 'Jane Smith', 'Robert Brown'];
  const workingRemotely = 'Working Remotely content';

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <Typography variant="h4" gutterBottom>
            Welcome, {employee.name}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card">
                <Typography variant="h6">Profile</Typography>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <img src={`https://api.adorable.io/avatars/150/${employee.email}.png`} alt={employee.name} className="profile-image" />
                  <Typography>{employee.name}</Typography>
                  <Typography>{employee.email}</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card">
                <Typography variant="h6">Manage Leaves</Typography>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={leaveData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="leaves" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card">
                <Typography variant="h6">Recent Applied Leaves</Typography>
                <ul>
                  <li>John Doe - 2024-09-01 (Sick Leave)</li>
                  <li>Jane Smith - 2024-09-03 (Annual Leave)</li>
                  <li>Mike Johnson - 2024-09-04 (Casual Leave)</li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card">
                <Typography variant="h6">Today's Attendance</Typography>
                <Box mt={2}>
                  <Typography>Check-In Time: 14:08:15</Typography>
                  <Typography>Total Work Time: 00:00:17</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card">
                <Typography variant="h6">On Leave Today</Typography>
                <ul>
                  {onLeaveToday.map((person, index) => (
                    <li key={index}>{person}</li>
                  ))}
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card">
                <Typography variant="h6">Working Remotely</Typography>
                <Typography>{workingRemotely}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;