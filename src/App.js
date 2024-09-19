import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import Dashboard from './components/Dashboard';
import MyProfile from './components/MyProfile';
import Calendar from './components/Calendar';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/employees" />} />
        <Route path="/employees" element={isAuthenticated ? <EmployeeList /> : <Navigate to="/login" />} />
        <Route path="/dashboard/:id" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/profile/:id" element={isAuthenticated ? <MyProfile /> : <Navigate to="/login" />} />
        <Route path="/calendar" element={isAuthenticated ? <Calendar /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;