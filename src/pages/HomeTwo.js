import React from 'react';
import Services from '../components/home/itemsHomeDos/Services';
//import UltimosAgregados from '../components/ultimos/UltimosAgregados';
import InviteToTest from '../components/home/itemsHomeDos/InviteToTest';
import '../components/home/itemsHomeDos/stylesHomeTwo.css';
import { useDispatch } from 'react-redux';
import { ListarUsuarioAsync } from '../actions/actionUsuario';
import { obtenerAsync } from '../actions/actionTest';

const HomeTwo = () => {

    const dispatch = useDispatch();
    dispatch(ListarUsuarioAsync())
    dispatch(obtenerAsync());
    
    return (
        <div className='container-home-two'>
            <div className='capa-white-home-two'>
                <Services />
                {/* <UltimosAgregados /> */}
                <InviteToTest />
            </div>
        </div>
    )
}

export default HomeTwo;