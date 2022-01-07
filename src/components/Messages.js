import React from 'react';
import { ContainerPrincipal, ContainerUno, InputContainer, InputSearch, BtnContainer, Buttons, ContainerDos, ImgContainer, Img, ContainerText, P } from "../styles/Messages.elements";

const Messages = () => {
    return (
        <ContainerPrincipal>
            <ContainerUno>
                <InputContainer>
                    <InputSearch id="outlined-basic" label="Buscar" variant="outlined" />
                </InputContainer>

                <BtnContainer>
                    <Buttons variant="contained" type="button">
                        Todos
                    </Buttons>

                    <Buttons variant="contained" type="button" size="small">
                        Proyectos en curso
                    </Buttons>

                    <Buttons variant="contained" type="button">
                        Mi equipo
                    </Buttons>
                </BtnContainer>
            </ContainerUno>

            <ContainerDos>
                <ImgContainer>
                    <Img src="https://res.cloudinary.com/app-firework1/image/upload/v1640726611/imagenes/undraw_manage_chats_re_0yoj_dshfcj.svg" alt="imagen" />
                </ImgContainer>

                <ContainerText>
                    <P>Accede a todos tus mensajes, propuestas y miembros de tu equipo desde un solo lugar.</P>
                </ContainerText>
            </ContainerDos>
        </ContainerPrincipal>
    )
}

export default Messages
