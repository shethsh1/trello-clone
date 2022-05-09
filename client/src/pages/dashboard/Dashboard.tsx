import * as React from 'react';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../../components/dashboard/Header'
import Home from '../../components/dashboard/Home'
import SidebarContainer from '../../components/dashboard/SidebarContainer'
import Constants from '../../constants/Constants'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import type { user } from '../../redux/slices/authSlice'
import { authLogout } from '../../redux/slices/authSlice'
import { Main, DrawerHeader } from './StyledComponents'


export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <SidebarContainer open={open} handleDrawerClose={handleDrawerClose} />
      <Main open={open}>
        <DrawerHeader />
        <Home />
      </Main>
    </Box>
  );
}

