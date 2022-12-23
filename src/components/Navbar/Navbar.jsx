import * as React from 'react';
import { NavLink } from 'react-router-dom'
import Proptypes from 'prop-types';
import styles from './styles/Navbar.module.scss';

import Brandlogo from '../../assets/Icons/Brandlogo';
import CartWidget from '../../containers/CartWidget';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = ({categories}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <div className={styles.navbar}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Brandlogo />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true"
                onClick={handleOpenNavMenu} color="inherit" >
                <MenuIcon />
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
                {categories.map((category) => { 
                  return ( <MenuItem key={category.id} to={category.route} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{category.name}</Typography>
                  </MenuItem>)})}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, color: 'black', display: { xs: 'none', md: 'flex' } }}> {
              categories.map((category) => {
                return ( <NavLink key={category.id} to={category.route} onClick={handleCloseNavMenu}>
                  {category.name} </NavLink> )})}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {/* <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top',
                  horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <CartWidget />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

NavBar.proptype = {
	menus: Proptypes.array.isRequired,
}

export default NavBar;