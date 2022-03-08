import React from 'react';
import HeaderHome from '../components/home/itemsHomeUno/HeaderHome';
import FuncionesFireWork from '../components/home/itemsHomeUno/FuncionesFireWork';
import CarouselOne from '../components/home/itemsHomeUno/CarouselOne';
import InviteRegister from '../components/home/itemsHomeUno/InviteRegister';
import Posicionamiento from '../components/home/itemsHomeUno/Posicionamiento';

const HomeOne = () => {
    return (
        <div>
            <HeaderHome />
            <FuncionesFireWork />
            <Posicionamiento />
            <CarouselOne />
            <InviteRegister />
        </div>
    )
}

export default HomeOne;
