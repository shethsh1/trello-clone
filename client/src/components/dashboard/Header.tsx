import React from 'react'
import { Toolbar, IconButton, Typography, Avatar, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import constants from '../../constants/Constants' 
import AccountMenu from './AccountMenu'
import Login from './Login'

const { drawerWidth } = constants


type props = {
    open: boolean,
    handleDrawerOpen: () => void
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }



const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

export default function Header({open, handleDrawerOpen} : props) {
  return (
    <AppBar position="fixed" open={open}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Project Management
      </Typography>

      <Box sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end'
      }}>

        <AccountMenu />




      </Box>

     


    </Toolbar>
  </AppBar>
  )
}
