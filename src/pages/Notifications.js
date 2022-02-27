import React from 'react';
import { ContainerPrincipal, ContainerUno, BtnBack, Left, Title, ContainerDos, ContainerText, P } from "../styles/Notifications.elements";

const Notifications = () => {
    return (
        <ContainerPrincipal>
            <ContainerUno>
                <BtnBack>
                    <Left />
                </BtnBack>

                <Title>
                    Notificaciones
                </Title>
            </ContainerUno>

            <ContainerDos>
                <ContainerText>
                    <P>No posees notificaciones pendientes.</P>
                </ContainerText>
            </ContainerDos>
        </ContainerPrincipal>
    )
}

export default Notifications;
