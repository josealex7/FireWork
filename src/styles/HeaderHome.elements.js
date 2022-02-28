import styled from "styled-components";

export const FirstContainer = styled.section`
    background: url("https://res.cloudinary.com/silviajcn/image/upload/v1645733952/Mi%20Portafolio/SVGs/pngwing.com_1_z7cgtz.png") no-repeat;
    background-size: cover;
    background-position: center;
    background-clip: blue;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerLogoImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    margin-top: -200px;
`

export const LogoImg = styled.img`
    width: 600px;
    height: auto;
`

export const Subtitle = styled.h1`
    width: 500px;
    font-size: 30px;
    margin-top: 30px;
    text-align: center;
    color: #3D56B2;
`

export const SubtitleSpan = styled.span`
    font-style: oblique;
`