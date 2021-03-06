import React from 'react';
import { Link } from "react-router-dom";
import {
    ContainerPrincipal,
    LogoContainer,
    ContainerTexto,
    P,
    // ContainerIconos,
    // LinkRedes,
    ImgLogo
} from "../../styles/Footer.elements";
// import {
//     FaInstagram,
//     FaGithub,
//     FaTwitter,
//     FaYoutube,
//     FaLinkedin,
//     FaFacebookSquare
// } from "react-icons/fa";

const Footer = () => {
    return (
        <ContainerPrincipal>
            
            <Link to="/home" className="links">
                <LogoContainer>
                    <ImgLogo src="https://res.cloudinary.com/app-firework1/image/upload/v1640799731/logo/Logo2_csgze7.png" alt="logo" />
                </LogoContainer>
            </Link>

                <ContainerTexto>
                    <P>
                        © 2022 | FireWork - Todos los derechos reservados
                    </P>
                </ContainerTexto>

                {/* <ContainerIconos>
                    <LinkRedes href="#" target="_blank"><FaYoutube /></LinkRedes>
                    <LinkRedes href="#"><FaGithub /></LinkRedes>
                    <LinkRedes href="#" target="_blank"><FaInstagram /></LinkRedes>
                    <LinkRedes href="#" target="_blank"><FaTwitter /></LinkRedes>
                    <LinkRedes href="#"><FaFacebookSquare /></LinkRedes>
                    <LinkRedes href="#"><FaLinkedin /></LinkRedes>
                </ContainerIconos> */}

        </ContainerPrincipal>
    )
}

export default Footer
