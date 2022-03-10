import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showDetailProjectAsync } from '../../actions/actionProyectos';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import './details.styles.css';

const DetailProject = () => {

    //Show Detail Redux
    const dispatch = useDispatch();

    const { projects } = useSelector((store) => store.projects);
    console.log(projects);

    useEffect(() => {
        dispatch(showDetailProjectAsync())
    }, [dispatch]);

    return (
        <div className="first-container-details">
            <Link to="/buscar-trabajo" >
                <button className="container-regresar">
                    <div className='container-icon-regresar'>
                        <FaArrowLeft />
                    </div>
                    <div>
                        <p className='regresar'>Volver</p>
                    </div> 
                </button>
            </Link>

            
            {projects.map((e, i) => (
                <div key={i} className='container-details'>
                    <div className='head-details'>
                        <img src={e.oneimage} alt="banner proyecto" title="banner" className="banner-project-detail"/>
                        <div className="container-title-detail-project">
                            <h1 className='title-detail-project text-details'>{e.titleproject}</h1>
                            <h2 className='precio-detail-project'><span className="span-negrita-details">Pago:</span> {e.pagoproject}$</h2>

                            <div className="container-btns-details">
                                <button className='btn-details-one'>Aplicar al proyecto</button>
                                <Link to="/contact">
                                    <button className='btn-details-two'>Contactar para consulta</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='body-details'>
                        <div className='container-left-details border-bottom-details'>
                            <p className="text-details"><span className="span-negrita-details">Categoria del proyecto:</span> {e.categoria}</p>
                            <p className="text-details"><span className="span-negrita-details">Nivel de experiencia deseable:</span> {e.experiencejob}</p>
                            <p className="text-details"><span className="span-negrita-details">Lenguaje requerido:</span> {e.lenguajesjob}</p>
                            <p className="text-details"><span className="span-negrita-details">Herramientas necesarias:</span> {e.herramientasjob}</p>
                            <p className="text-details"><span className="span-negrita-details">Otros lenguajes y herramientas:</span> {e.othersjob}</p>
                        </div>
                        <div className='container-right-details'>
                            <p className="text-details"><span className="span-negrita-details">Descripcion del proyecto:</span> {e.descriptionproject}</p>
                            <p className="text-details"><span className="span-negrita-details">Requerimientos del proyecto:</span> {e.requirementsproject}</p>
                            <p className="text-details"><span className="span-negrita-details">Plazo de entrega del proyecto:</span> {e.dateproject}</p>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
};

export default DetailProject;