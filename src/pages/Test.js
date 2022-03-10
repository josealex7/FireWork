import React from 'react';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import '../components/quicez/stylesQuicez.css';
import { useSelector } from "react-redux";

const Test = () => {

    const { test } = useSelector((store) => store.test);

    return (
        <div className='first-container-test'>

            <Link to="/home" >
                <button className="container-regresar-quizes">
                    <div className='container-icon-regresar-quizes'>
                        <FaArrowLeft />
                    </div>
                    <div>
                        <p className='regresar-quizes'>Volver al Inicio</p>
                    </div> 
                </button>
            </Link>
            <div>
            {
                test !== undefined?
                <div className="container-cards">
            {
                test.map((testIndividual =>(
                    
                        testIndividual.nombre_prueba==='html'?
                        
                        <div className="cards-test-one">
                        <div className="white-capa-test">
                            <h3 className="title-card-test">Prueba de HTML</h3>
    
                            <div className="container-text-test">
                                <p className="text-test">Responde las preguntas de selección múltiple, si obtienes un puntaje mayor o igual al 80% recibirás una insignia de conocimiento.</p>
                            </div>
                        
                            <Link to="/perfil" className='link'>
                                <button className="btn-take-test btn-take-test-insignia">
                                    Ver insignia
                                </button>
                            </Link>
                        </div>
                    </div>
                        
                    :
                    <div className="cards-test-one">
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
                    
                )))
            }       
            {
                test.map((testIndividual =>(
                    testIndividual.nombre_prueba==='javascript'?
                    <div className="cards-test-two">
                        <div className="white-capa-test">
                            <h3 className="title-card-test">Prueba de JavaScript</h3>

                            <div className="container-text-test">
                                <p className="text-test">Responde las preguntas de selección múltiple, si obtienes un puntaje mayor o igual al 80% recibirás una insignia de conocimiento.</p>
                            </div>
                        
                            <Link to="/perfil" className='link'>
                                <button className="btn-take-test btn-take-test-insignia">
                                    Ver insignia
                                </button>
                            </Link>
                        </div>
                    </div>
                    :
                    <div className="cards-test-two">
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
                )))
                }    
                </div>
                :
                <div className="container-cards">
                <div className="container-cards">
                <div className="cards-test-one">
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

                <div className="cards-test-two">
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
            }
                
                </div>
        </div>
    )
};

export default Test;