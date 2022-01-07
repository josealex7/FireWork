import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import { NavBarContainer, LogoContainer, ImgLogo, MenuItems, ContainerSearch } from "../styles/NavBarUno.elements";
import SearchWords from './SearchWords';

const NavBarUno = () => {
  
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBarContainer position="static">
        <Toolbar>

          {/* Logo */}
          
            <LogoContainer>
              <ImgLogo src="https://res.cloudinary.com/app-firework1/image/upload/v1640799702/logo/logo2_yk6jcs.svg" alt="..."/>
            </LogoContainer>
            
          {/* Items menu */}
          <MenuItems>Inicio</MenuItems>
          <MenuItems>Busca trabajo</MenuItems>
          <MenuItems>Mis proyectos</MenuItems>
          <MenuItems>Mis finanzas</MenuItems>


          <ContainerSearch>
          {/* Search */}
          <SearchWords />
          </ContainerSearch>
          
          {/* Menu messages */}
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={}
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
          </IconButton>

          {/* Menu notifications */}
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={}
                color="inherit"
              >
                <Badge badgeContent={2} color="error">
                    <NotificationsIcon />
                </Badge>
          </IconButton>

          {/* Menu perfil */}

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt="User profile" src="https://res.cloudinary.com/app-firework1/image/upload/v1641503858/default-user-image_tzk82u.png" />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}> Mi perfil</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>Publicar proyecto</MenuItem>

                <MenuItem onClick={handleClose}>Ayuda</MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
                
              </Menu>
            </div>
            )}
            


        </Toolbar>
      </NavBarContainer>
    </Box>
  )
};
export default NavBarUno;