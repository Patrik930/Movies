import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MenuItem from '@mui/material/MenuItem';
import { Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const pages = [
    {path:'/',name: 'Trendings'},
    {path:'/movies',name: 'Movies'},
    {path:'/series',name: 'Series'},
    {path:'/search',name: 'Search'},

];


export const Header=()=> {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalMoviesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
         
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                
                <NavLink key={page.name} to={page.path}>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <LocalMoviesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <NavLink key={page.name} to={page.path} className={({ isActive }) =>   isActive ? "active" : "inactive" }>
                <Button  onClick={handleCloseNavMenu} sx={{ my: 2, color: 'inherit', display: 'block' }}>{page.name}</Button> 
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet/>
    </>
  );
  
}



