import React from 'react';
import HeaderHome from '../components/home/HeaderHome';
import AboutFirework from '../components/home/itemsHomeUno/AboutFirework';
import InviteRegister from '../components/home/itemsHomeUno/InviteRegister';
import CarouselOne from '../components/home/CarouselOne';

const HomeOne = () => {
    return (
        <div>
            <HeaderHome />
            <AboutFirework />
            <CarouselOne />
            <InviteRegister />
        </div>
    )
}

export default HomeOne;
