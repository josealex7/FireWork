import React from 'react';
import { FirstContainer, ContainerLogoImg, LogoImg, Subtitle, SubtitleSpan } from '../../../styles/HeaderHome.elements';

const HeaderHome = () => {
    return (
        <FirstContainer>
            <ContainerLogoImg>
                <LogoImg src="https://res.cloudinary.com/app-firework1/image/upload/v1640799953/logo/logo4_sibvmc.svg" alt="logo" />
            </ContainerLogoImg>
            <Subtitle>Encuentra los mejores servicios <SubtitleSpan>freelance</SubtitleSpan></Subtitle>

            {/* <p className="scrolldown">
                <a className="smoothscroll" href="#about">bajar</a>
            </p> */}
        </FirstContainer>
    )
};

export default HeaderHome;