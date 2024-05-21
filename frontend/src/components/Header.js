import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Urban Planning Tool
      </Typography>
      <Button color="inherit">Home</Button>
      <Button color="inherit">About</Button>
      <Button color="inherit">Contact</Button>
    </Toolbar>
  </AppBar>
);

export default Header;