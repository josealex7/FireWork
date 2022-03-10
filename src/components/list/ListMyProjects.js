import React from 'react';
import { useSelector } from 'react-redux';
//import { listProjectAsync } from '../../actions/actionProyectos';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import './styleslistarAll.css';

const ListMyProjects = () => {

    const { projects } = useSelector((store) => store.projects);
    //console.log(projects);

    return (
        <div className='first-container-all'>
            <Link to="/home" >
                <button className="container-regresar-all">
                    <div className='container-icon-regresar-all'>
                        <FaArrowLeft />
                    </div>
                    <div>
                        <p className='regresar-all'>Volver al Inicio</p>
                    </div> 
                </button>
            </Link>

            <div className='container-second-all'>
                <div className='container-filter-in-all'>
                    <h1>Mis proyectos</h1>
                </div>

                <div className='container-all-cards'>
                    {projects.map((e, i) => (
                        <div key={i} className="card-all-projects">
                            <div className="card-part-one">
                                <div className="container-banner-all-projects">
                                    <img src={e.oneimage} alt="banner" title="Banner" className="banner-all-projects" />
                                </div>
                                <div className="container-title-card-all">
                                    <p className="title-card-all">{e.titleproject}</p>
                                </div>
                            </div>
                            <div className="card-part-two">
                                <button
                                    className="btn-fav-project-all"
                                    id={e.titleproject}
                                >
                                    <FaHeart />
                                </button>

                                <p className="info-pago-oferta-card-all">Pago de <span className="precio-oferta-card-all">{e.pagoproject}$</span></p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
};

export default ListMyProjects;