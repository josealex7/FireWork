import React from 'react';
import { Link } from "react-router-dom";
// Material ui
import Toolbar from '@mui/material/Toolbar';
import { NavBarContainer, LogoContainer, ImgLogo, ContainerSearch } from "../../styles/NavBarUno.elements";
import SearchWords from './itemsMenu/SearchWords';
import ItemsMenu from './itemsMenu/ItemsMenu';
//import MessagesNav from './itemsMenu/MessagesNav';
//import NotificationsNav from './itemsMenu/Notifications';
import UserPerfil from './itemsMenu/UserPerfil';

const NavBarUno = () => {

  return (
    <header>
      <NavBarContainer>
        <Toolbar>

          {/* Logo */}
          <Link to="/home" className="links">
            <LogoContainer>
              <ImgLogo src="https://res.cloudinary.com/app-firework1/image/upload/v1645671615/logo/logofirework-white_hqzzrs.svg" alt="logo"/>
            </LogoContainer>
          </Link>
            
          {/* Items menu */}
          <ItemsMenu />


          <ContainerSearch>
          {/* Search */}
          <SearchWords />
          </ContainerSearch>
          
          {/* Menu messages */}
          {/* <MessagesNav /> */}

          {/* Menu notifications */}
          {/* <NotificationsNav /> */}

          {/* Perfil Usuario */}
          <UserPerfil />

        </Toolbar>
      </NavBarContainer>
      </header>
  )
};

export default NavBarUno;