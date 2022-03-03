import React from 'react';
import Services from '../components/home/itemsHomeDos/Services';
import InviteToTest from '../components/home/itemsHomeDos/InviteToTest';
import { useDispatch } from 'react-redux';
import { ListarUsuarioAsync } from '../actions/actionUsuario';

const HomeTwo = () => {

    const dispatch = useDispatch();
    dispatch(ListarUsuarioAsync())
    return (
        <div className='container-home-two'>
            <Services />
            <InviteToTest />
        </div>
    )
}

export default HomeTwo;