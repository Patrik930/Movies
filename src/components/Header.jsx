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
    <header className="bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={handleOpenNavMenu}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="block h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 text-white text-2xl font-bold">
                <LocalMoviesIcon className="inline-block mr-2 text-blue-400" /> Movies/Series
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {pages.map((page) => (
                    <NavLink
                      key={page.name}
                      to={page.path}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-white px-3 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      }
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
  
}



