import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Grid } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import './MyProfile.css';

function MyProfile() {
  const { id } = useParams();
  const employee = useSelector(state => state.employees.list.find(emp => emp.id === parseInt(id)));

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <Header />
      <div className="profile-content">
        <Sidebar />
        <main className="main-content">
          <Container>
            <Typography variant="h4" gutterBottom>
              My Profile
            </Typography>
            <Paper className="profile-paper">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <img src={`https://api.adorable.io/avatars/200/${employee.email}.png`} alt={employee.name} className="profile-image" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h5">{employee.name}</Typography>
                  <Typography>{employee.email}</Typography>
                  <Typography>{employee.phone}</Typography>
                  <Typography>{employee.website}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Address</Typography>
                  <Typography>{employee.address.street}, {employee.address.suite}</Typography>
                  <Typography>{employee.address.city}, {employee.address.zipcode}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Company</Typography>
                  <Typography>{employee.company.name}</Typography>
                  <Typography>{employee.company.catchPhrase}</Typography>
                  <Typography>{employee.company.bs}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default MyProfile;