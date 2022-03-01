import React from 'react';
import { Link } from "react-router-dom";

const InviteToTest = () => {
    return (
        <div className='container-invite-test'>
            <div className='invite-test-capa'>
                <div className="container-content">
                    <h2 className='title-invite-test'>
                        ¡Destaca!
                    </h2>
                    <p className="text-invite-test">Realiza nuestras pruebas de conocimiento y obten insignias que te beneficiarán en nuestro buscador de servicios.</p>

                    <Link to="/test" className='link'>
                        <button className="btn-start-test">
                            Realizar pruebas
                        </button>
                    </Link>
                </div>
                <div className="container-img-invite-test">
                    <img src="https://res.cloudinary.com/app-firework1/image/upload/v1640726696/imagenes/undraw_prioritise_re_r5xu_j22q3c.svg" alt="test" className='img-invite-test'/>
                </div>
            </div>
        </div>
    )
};

export default InviteToTest;