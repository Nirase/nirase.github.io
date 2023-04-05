import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from './Logo';
import HeaderItemList from './HeaderItemList';


const Header = () => {
  return (
    <AppBar position="static" style={{background:'transparent', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <HeaderItemList />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;