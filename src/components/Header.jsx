import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './Header.css';

function Header() {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography variant="h6">
          Welcome, Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;