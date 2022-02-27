import React from 'react';
import { FirstContainer, ContainerLogoImg, LogoImg } from '../../styles/HeaderHome.elements';

const HeaderHome = () => {
    return (
        <FirstContainer>
            <ContainerLogoImg>
                <LogoImg src="https://res.cloudinary.com/app-firework1/image/upload/v1640799953/logo/logo4_sibvmc.svg" alt="logo" />
            </ContainerLogoImg>
        </FirstContainer>
    )
};

export default HeaderHome;