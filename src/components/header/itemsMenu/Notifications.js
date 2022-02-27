import React from 'react';
import { Link } from "react-router-dom";
// Material ui
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationsNav = () => {

  return (
    <>

        {/* Menu notifications */}
        <Link to="/notificaciones" className="links">
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
        </Link>

      </>
  )
};

export default NotificationsNav;