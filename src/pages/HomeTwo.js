import React from 'react';
import Services from '../components/home/itemsHomeDos/Services';
import InviteToTest from '../components/home/itemsHomeDos/InviteToTest';
import '../components/home/itemsHomeDos/stylesHomeTwo.css';

const HomeTwo = () => {
    return (
        <div className='container-home-two'>
            <div className='capa-white-home-two'>
                <Services />
                <InviteToTest />
            </div>
        </div>
    )
}

export default HomeTwo;