import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from '../../../actions/actionLogin';
// Material ui
import IconButton from '@mui/material/IconButton';
//import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
// Css
import './UserPerfil.css'
import User from '../../../hooks/User';

const UserPerfil = () => {

  const useUser = User();
  
  const [auth, setAuth] = React.useState(true);
  console.log(setAuth);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Logout
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <div>

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
                <Avatar alt="User profile" src={useUser.photoURL} />
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
                  <Link to="/perfil" className='linkSinEstilos'>
                    <MenuItem onClick={handleClose}>
                      Mi perfil
                    </MenuItem>
                  </Link>
                <Divider />
                {/* <MenuItem onClick={handleClose}>Publicar proyecto</MenuItem> */}

                <Link to="/ayuda" className='linkSinEstilos'>
                     <MenuItem onClick={handleClose}>Ayuda</MenuItem>
                </Link>
                <Divider />
                {/* <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem> */}

                <MenuItem
                  onClick={() => handleLogout()}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
                
              </Menu>
            </div>
            )}
    </div>
  )
};

export default UserPerfil;