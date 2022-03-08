import React from 'react';
import { Link } from "react-router-dom";
import './stylesItemsHome.elements.css';

const FuncionesFireWork = () => {
    return (
        <section className="first-container-funciones">
            <div className="container-title-funciones">
                <h2 className="title-funciones">¿Qué puedes hacer en FireWork?</h2>
            </div>

            <div className="container-containers-funciones">
                <div className="container-type-one-funciones">
                    <div className="container-step-funciones">
                        <img src="https://res.cloudinary.com/app-firework1/image/upload/v1640727724/imagenes/undraw_reminder_pa79_tm5boa.svg" alt="trabajar como freelance" className="imgs-funciones" />
                        <h3 className="title-step-funciones">Trabaja como freelance</h3>
                    </div>
                    <div className="container-text-funciones">
                        <p className="text-step">¿Eres freelancer? En FireWork puedes elegir entre cientos de proyectos para trabajar desde cualquier lugar.</p>

                        <Link to="/login" className='links'>
                            <button type="button" className="btns-funciones">Trabajar como freelance</button>
                        </Link>
                    </div>
                </div>
                <div className="container-type-two-funciones">
                   <div className="container-step-funciones">
                        <img src="https://res.cloudinary.com/app-firework1/image/upload/v1640727733/imagenes/undraw_experience_design_eq-3-j_gyv8pq.svg" alt="publica proyectos" className="imgs-funciones" />
                        <h3 className="title-step-funciones">Publica proyectos</h3>
                    </div>
                    <div className="container-text-funciones">
                        <p className="text-step">¿Es tu primera vez en FireWork? Aprende cómo publicar un trabajo y acceder a las propuestas de los freelancers para poner tus ideas a trabajar.</p>

                        <Link to="/login" className='links'>
                            <button type="button" className="btns-funciones">Publicar proyecto</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <Link to="/ayuda" className='links'>
                <button type="button" className="btn-about-funciones">Saber más sobre FireWork</button>
            </Link> */}
            
        </section>
    )
};

export default FuncionesFireWork;