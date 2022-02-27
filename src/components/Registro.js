// import { Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import {registroEmailPasswordNombre} from '../actions/actionRegister';
import {useDispatch} from 'react-redux';

export const Registro = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    });

    const { nombre, email, pass1, pass2 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email,pass1,nombre))
    }

    return (
        <div>
            <form onSubmit={handleRegistro}>
                <div className="mb-3">
                    <label>Nombre</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label>Correo</label>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        value={pass1}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label>Repita contraseña</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        value={pass2}
                        onChange={handleInputChange}
                    />
                </div>


                <button variant="primary" type="submit">
                    Registrarse
                </button>

                <Link to="/">Login</Link>

            </form>

        </div>
    )
}