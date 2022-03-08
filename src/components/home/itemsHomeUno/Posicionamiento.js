import React from 'react';
//import { Link } from "react-router-dom";
import './stylesItemsHome.elements.css';

const Posicionamiento = () => {
    return (
        <div className="container-posicionamiento">
            <div className="container-one">
                <div className="container-text-posicionamiento">
                    <h2>¡Posicionate realizando nuestras pruebas de conocimiento y encuentra las mejores oportunidades de trabajo freelance!</h2>
                    {/* <Link to="/registro" className='links'>
                        <button className="btn-register">Regístrate</button>
                    </Link> */}
                </div>
                <div>
                    <img src="https://res.cloudinary.com/app-firework1/image/upload/v1640726721/imagenes/undraw_ether_re_y7ft_c4sjwb.svg" alt="firework register" className="container-one-img"/>
                </div>
            </div>
        </div>
    )
};

export default Posicionamiento;