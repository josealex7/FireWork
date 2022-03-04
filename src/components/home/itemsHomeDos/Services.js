import React from 'react';
import { Link } from "react-router-dom";
import './stylesHomeTwo.css';

const Services = () => {
    return (
        <div className='first-container-services'>
            <div className="container-cards">
                <div className="cards-services-one">
                    <div className="white-capa">
                        <h3 className="title-card-service">Quiero ofrecer mis servicios</h3>

                        <div className="container-text-services">
                            <p className="text-services-one">Súmate a la comunidad en donde podrás conectar con cientos de clientes.</p>
                            <p className="text-services-two">¡Comienza a generar ingresos!</p>
                        </div>
                    
                        <Link to="/register-service" className='link'>
                            <button className="btn-service">
                                Publicar servicios
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="cards-services-two">
                    <div className="white-capa">
                        <h3 className="title-card-service">¿Buscas un experto?</h3>

                        <div className="container-text-services">
                            <p className="text-services-one">Expertos en toda Colombia, están dispuestos a realizar tus proyectos.</p>
                            <p className="text-services-two">¡Comienza ahora!</p>
                        </div>
                    
                        <Link to="/register-proyect" className='link'>
                            <button className="btn-service">
                                Publicar proyecto
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;