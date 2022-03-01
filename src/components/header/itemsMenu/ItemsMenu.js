import React from 'react';
import { Link } from "react-router-dom";
import { ItemsContainer } from '../../../styles/NavBarUno.elements';
// Material ui
import Button from '@mui/material/Button';
import ItemMenuOne from './ItemMenuOne';
import ItemMenuTwo from './ItemMenuTwo';
import ItemMenuThree from './ItemMenuThree';

const ItemsMenu = () => {

  return (
    <ItemsContainer>
        
        {/* Boton 0 */}
        <Link to="/home" className="links">
            <Button
                id="basic-button"
                style={{color: '#fff'}}
            >
                Inicio
            </Button>
        </Link>
        
        {/* Boton 1 */}
        <ItemMenuOne />
        
        {/* Boton 2 */}
        <ItemMenuTwo />
        
        {/* Boton 3 */}
        <ItemMenuThree />
          
    </ItemsContainer>
  )
};

export default ItemsMenu;