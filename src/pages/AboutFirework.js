import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import '../styles/About.elements.css';

const AboutFirework = () => {
    return (
        <div className='first-container-about'>
            <div className='capa-white-about'>
                <Link to="/home" >
                    <button className="container-regresar">
                        <div className='container-icon-regresar'>
                            <FaArrowLeft />
                        </div>
                        <div>
                            <p className='regresar'>Volver al Inicio</p>
                        </div> 
                    </button>
                </Link>
                <h1 className='title-about'>FireWork</h1>

                <div className='text-container-about'>
                    <p className='text-presentation-about'>En FireWork, creemos que los profesionales de desarrollo freelancers merecen tener acceso a mejores acuerdos de trabajo con sus clientes. Es nuestra promesa hacia nuestros usuarios ofrecer Calidad, Eficiencia y Valor en el proceso de tratos entre frelancers y clientes a través de una plataforma segura y fácil de usar.</p>
                    <div className='text-explication-about'>
                        <p className='text-about-one'>Con un récord en los índices de desempleo, nunca ha sido más difícil encontrar y conectarse con el mejor talento disponible. Sin embargo, mientras que las agencias de empleo tradicionales afirman que pueden encontrar excelentes candidatos, sus servicios tienen un alto costo en términos de tiempo dedicado a analizar a los candidatos y las tarifas escandalosas que cobran por contratación.</p>
                        <p className='text-about-two'>Creamos FireWork después de escuchar a innumerables empleados y ejecutivos de recursos humanos lamentarse por la falta de una solución simple y económica que permitiera a sus equipos de recursos humanos realizar contrataciones fantásticas sin problemas adicionales. La plataforma FireWork puede ayudarlo a comenzar a realizar excelentes tratos con sus clientes hoy mismo, de esta manera podrá administrar su trabajo como freelancer o como cliente de la mejor forma.</p>
                    </div>
                </div>

                <div className='autores-container-about'>
                    <h2 className='autores-title-about'>Creadores</h2>

                    <div className='fotos-container-autores'>
                        <div className="cards-autores-one">
                            <img src="https://res.cloudinary.com/silviajcn/image/upload/v1646319598/DEMODAY/alexander1_oz5yru.png" alt="perfil autor" title="Alexander Tavera" className="img-autor"/>
                            <h3 className='name-autor'>Alexander Tavera Rojas</h3>
                            <p className='funcion-autor'>Desarrollador Front-End.</p>
                            <div className="container-icons-social">
                                <div className="container-icon">
                                    <a href="https://www.linkedin.com/in/alexander-tavera-rojas/" target="_blanck" aria-label="Linkedin" className='icons-social'><FaLinkedinIn /></a>
                                </div>
                                <div className="container-icon">
                                    <a href="https://github.com/josealex7" target="_blanck" aria-label="GitHub" className='icons-social'><FaGithub /></a>
                                </div>
                                <div className="container-icon">
                                    <a href="https://portafolio-alexander-tavera.vercel.app/" target="_blanck" aria-label="Portfolio" className='icons-social'><GoGlobe /></a>
                                </div>
                            </div>
                        </div>

                        <div className="cards-autores-two">
                            <img src="https://res.cloudinary.com/silviajcn/image/upload/v1646319614/DEMODAY/silvia1_le5hmh.png" alt="perfil autor" title="Silvia Corrales" className="img-autor" />
                            <h3 className='name-autor'>Silvia Corrales Navarro</h3>
                            <p className='funcion-autor'>Desarrolladora Front-End.</p>
                            <div className="container-icons-social">
                                <div className="container-icon">
                                    <a href="https://www.linkedin.com/in/silvia-corrales-navarro/" target="_blanck" aria-label="Linkedin" className='icons-social'><FaLinkedinIn /></a>
                                </div>
                                <div className="container-icon">
                                    <a href="https://github.com/silviajcn" target="_blanck" aria-label="GitHub" className='icons-social'><FaGithub /></a>
                                </div>
                                <div className="container-icon">
                                    <a href="https://mi-portafolio-personal.vercel.app/" target="_blanck" aria-label="Portfolio" className='icons-social'><GoGlobe /></a>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutFirework;