import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard as DashboardIcon, Person as PersonIcon, CalendarToday as CalendarIcon, ExitToApp as LogoutIcon } from '@mui/icons-material';
import { logout } from '../features/auth/authSlice';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleNavigation = (path) => {
    if (path === '/logout') {
      dispatch(logout());
      navigate('/login');
    } else {
      navigate(path.replace(':id', id));
    }
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard/:id' },
    { text: 'My Profile', icon: <PersonIcon />, path: '/profile/:id' },
    { text: 'Calendar', icon: <CalendarIcon />, path: '/calendar' },
    { text: 'Logout', icon: <LogoutIcon />, path: '/logout' },
  ];

  return (
    <div className="sidebar">
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleNavigation(item.path)}
            selected={location.pathname === item.path.replace(':id', id)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;