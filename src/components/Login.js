import React from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword, loginGoogle} from '../actions/actionLogin';

function Login() {

    const dispatch = useDispatch();

    const [ values, handleInputChange, reset ] = useForm({
        email: '',
        password: ''
    })

    const {email,password} = values;

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginEmailPassword(email,password));
    }

    const handleGoogle = () => {
         dispatch(loginGoogle());
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="mb-3">
                <label>Correo</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange} />
            </div>

            <div className="mb-3">
                <label>Contraseña</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange} />
            </div>
            <button variant="primary" type="submit">
                Enviar
            </button>

            <div className="auth__social-networks">
                <div
                    className="google-btn"
                    onClick={handleGoogle}

                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                </div>
            </div>
            <Link to="/registro">Registrarse</Link>

        </form>

    );
}

export default Login;