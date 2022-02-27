import React from 'react';
import { Link } from "react-router-dom";
// Material ui
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const MessagesNav = () => {

  return (
    <>
          
        {/* Menu messages */}
        <Link to="/mensajes" className="links">
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
        </Link>

    </>
  )
};

export default MessagesNav;