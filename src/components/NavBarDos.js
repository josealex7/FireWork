import React from 'react';
import { ContainerPrincipal, LogoContainer, ContainerButtons, Button1, Button2, ImgLogo } from "../styles/NavBarDos.elements";

const NavBarDos = () => {
    return (
        <ContainerPrincipal>
                <LogoContainer>
                    <ImgLogo src="https://res.cloudinary.com/app-firework1/image/upload/v1640799731/logo/Logo2_csgze7.png" alt="logo" />
                </LogoContainer>

                <ContainerButtons>
                    <Button1>
                        Ingresa
                    </Button1>

                    <Button2>
                        Registrate
                    </Button2>
                </ContainerButtons>
        </ContainerPrincipal>
    )
}

export default NavBarDos