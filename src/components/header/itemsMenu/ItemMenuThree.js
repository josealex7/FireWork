import React from 'react';
// Material ui
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ItemMenuThree = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <div>
        
        {/* Boton 3 */}
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{color: '#fff'}}
        >
            Mis finanzas
        </Button>
        
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>Movimientos de cuenta</MenuItem>
            <MenuItem onClick={handleClose}>Opciones de retiro</MenuItem>
            <MenuItem onClick={handleClose}>Datos de facturación</MenuItem>
        </Menu>
    </div>
  )
};

export default ItemMenuThree;