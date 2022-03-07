import React from 'react';
import { Link } from "react-router-dom";
import './stylesItemsHome.elements.css';

const InviteRegister = () => {
    return (
        <div className="container-inv-regis">
            <div className="container-one">
                <div>
                    <img src="https://res.cloudinary.com/app-firework1/image/upload/v1640726481/imagenes/undraw_hello_re_3evm_ixnijv.svg" alt="firework register" className="container-one-img"/>
                </div>
                <div>
                    <h2>¿Estas listo para  conocer el mundo del freelance?</h2>
                    <Link to="/registro" className='links'>
                        <button className="btn-register">Regístrate</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default InviteRegister;