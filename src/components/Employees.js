import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../actions/actionLogin';

export const Employees = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }

    return (
        <div>
            <h1>Bienvenido Empleado</h1>
            <button
            onClick={() => handleLogout()}>logout</button>
        </div>
    )
}