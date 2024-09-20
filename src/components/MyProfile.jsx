import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
          <h2>My Profile</h2>
          <div className="profile-card">
            <img src={`https://api.adorable.io/avatars/200/${employee.email}.png`} alt={employee.name} className="profile-image" />
            <h3>{employee.name}</h3>
            <p>{employee.email}</p>
            <p>{employee.phone}</p>
            <p>{employee.website}</p>
            <h4>Address</h4>
            <p>{employee.address.street}, {employee.address.suite}</p>
            <p>{employee.address.city}, {employee.address.zipcode}</p>
            <h4>Company</h4>
            <p>{employee.company.name}</p>
            <p>{employee.company.catchPhrase}</p>
            <p>{employee.company.bs}</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyProfile;