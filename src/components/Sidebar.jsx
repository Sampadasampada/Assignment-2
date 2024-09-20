import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
    { text: 'Dashboard', path: '/dashboard/:id' },
    { text: 'My Profile', path: '/profile/:id' },
    { text: 'Calendar', path: '/calendar' },
    { text: 'Logout', path: '/logout' },
  ];

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.text}
            className={location.pathname === item.path.replace(':id', id) ? 'active' : ''}
            onClick={() => handleNavigation(item.path)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;