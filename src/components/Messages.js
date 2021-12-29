import React from 'react';
import { ContainerPrincipal, Buttons } from "../styles/Messages.elements";

const Messages = () => {
    return (
        <ContainerPrincipal>
            <div>
                <div>
                    <input type="text" placeholder="Buscar"/>
                </div>

                <div>
                    <Buttons type="button">
                        Todos
                    </Buttons>

                    <Buttons type="button">
                        Proyectos en curso
                    </Buttons>

                    <Buttons type="button">
                        Mi equipo
                    </Buttons>
                </div>
            </div>

            <div>
                <div>
                    <img src="https://res.cloudinary.com/app-firework1/image/upload/v1640726611/imagenes/undraw_manage_chats_re_0yoj_dshfcj.svg" alt="imagen" />
                </div>

                <div>
                    <p>Accede a todos tus mensajes, propuestas y miembros de tu equipo desde un solo lugar</p>
                </div>
            </div>
        </ContainerPrincipal>
    )
}

export default Messages
