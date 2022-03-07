import React from 'react';
import { Link } from "react-router-dom";
import { ItemsContainer } from '../../../styles/NavBarUno.elements';
// Material ui
import Button from '@mui/material/Button';
import ItemMenuOne from './ItemMenuOne';
import ItemMenuTwo from './ItemMenuTwo';
// import ItemMenuThree from './ItemMenuThree';

const ItemsMenu = () => {

  return (
    <ItemsContainer>
        
        {/* Boton 1 */}
        <ItemMenuOne />
        
        {/* Boton 2 */}
        <ItemMenuTwo />
        
        {/* Boton 3 */}
        {/* <ItemMenuThree /> */}
        
        {/* Boton 4 */}
        <Link to="/test" className="links">
            <Button
                id="basic-button"
                style={{color: '#fff'}}
            >
                Hacer pruebas
            </Button>
        </Link>
        
        {/* Boton 5 */}
        <Link to="/about" className="links">
            <Button
                id="basic-button"
                style={{color: '#fff'}}
            >
                Sobre FireWork
            </Button>
        </Link>
          
    </ItemsContainer>
  )
};

export default ItemsMenu;