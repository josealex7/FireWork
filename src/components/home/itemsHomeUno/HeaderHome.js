import React from 'react';
import { FirstContainer, ContainerLogoImg, LogoImg, Subtitle, SubtitleSpan } from '../../../styles/HeaderHome.elements';
import ReactTypingEffect from 'react-typing-effect';
import './stylesItemsHome.elements.css';

const HeaderHome = () => {
    return (
        <FirstContainer>
            <ContainerLogoImg>
                <LogoImg src="https://res.cloudinary.com/app-firework1/image/upload/v1640799953/logo/logo4_sibvmc.svg" alt="logo" />
            </ContainerLogoImg>
            
            <Subtitle>Encuentra los mejores trabajos <SubtitleSpan>freelance</SubtitleSpan> para desarrolladores</Subtitle>

            <ReactTypingEffect
                text={["Frontend", "Backend", "Fullstack", "Diseño UI/UX", "Data Science", "Aplicaciones de escritorio", "Aplicaciones móviles", "e-commerce", "Testing"]}
                speed="100"
                eraseSpeed="100"
                eraseDelay="100"
                className="typical"
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                    return (
                        <h1>
                            {text.split('').map((char, i) => {
                                const key = `${i}`;
                                    return (
                                        <span
                                            key={key}
                                            style={i%2 === 0 ? { color: '#3D56B2'} : {}}
                                        >
                                            {char}
                                        </span>
                                    );
                            })}
                        </h1>
                    );
                }}   
            />    
        </FirstContainer>
    )
};

export default HeaderHome;