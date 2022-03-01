import React from 'react';
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
                    
                        <button className="btn-service">
                            Publicar servicios
                        </button>
                    </div>
                </div>

                <div className="cards-services-two">
                    <div className="white-capa">
                        <h3 className="title-card-service">¿Buscas un servicio?</h3>

                        <div className="container-text-services">
                            <p className="text-services-one">Expertos en toda Colombia, están dispuestos a realizar tus proyectos.</p>
                            <p className="text-services-two">¡Comienza ahora!</p>
                        </div>
                    
                        <button className="btn-service">
                            Ver servicios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;