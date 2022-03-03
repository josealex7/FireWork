import React from 'react';
import { Link } from "react-router-dom";
import '../components/quicez/stylesQuicez.css';

const Test = () => {
    return (
        <div className='first-container-test'>
            <div className="container-cards">
                <div className="cards-test">
                    <div className="white-capa-test">
                        <h3 className="title-card-test">Prueba de HTML</h3>

                        <div className="container-text-test">
                            <p className="text-test">Responde las preguntas de selección múltiple, si obtienes un puntaje mayor o igual al 80% recibirás una insignia de conocimiento.</p>
                        </div>
                    
                        <Link to="/prueba-1" className='link'>
                            <button className="btn-take-test">
                                Iniciar prueba
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="cards-test">
                    <div className="white-capa-test">
                        <h3 className="title-card-test">Prueba de JavaScript</h3>

                        <div className="container-text-test">
                            <p className="text-test">Responde las preguntas de selección múltiple, si obtienes un puntaje mayor o igual al 80% recibirás una insignia de conocimiento.</p>
                        </div>
                    
                        <Link to="/prueba-2" className='link'>
                            <button className="btn-take-test">
                                Iniciar prueba
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Test;