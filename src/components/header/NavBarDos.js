import React from 'react';
import { ContainerPrincipal, LogoContainer, ContainerButtons, Button1, Button2, ImgLogo } from "../../styles/NavBarDos.elements";
import { Link } from "react-router-dom";

const NavBarDos = () => {
    return (
        <ContainerPrincipal>
                <LogoContainer>
                    <Link to="/homeuno" className='link'>
                        <ImgLogo src="https://res.cloudinary.com/app-firework1/image/upload/v1640799731/logo/Logo2_csgze7.png" alt="logo" />
                    </Link>
                </LogoContainer>

                <ContainerButtons>
                    <Button1>
                        <Link to="/login" className='link'>
                            Ingresa
                        </Link>
                    </Button1>

                    <Button2>
                        <Link to="/registro" className='links'>
                            Registrate
                        </Link>
                    </Button2>
                </ContainerButtons>
        </ContainerPrincipal>
    )
}

export default NavBarDos