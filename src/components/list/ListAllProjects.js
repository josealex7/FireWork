import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProjectAsync, showDetailProjectAsync } from '../../actions/actionProyectos';
import { addFavoritesSync } from '../../actions/actionFavoritos';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHeart, FaStar } from "react-icons/fa";
import ListFilters from './ListFilters';
import './styleslistarAll.css';

const ListAllProjects = () => {

    const dispatch = useDispatch();

    const { projects } = useSelector((store) => store.projects);
    //console.log(projects);

    useEffect(() => {
        dispatch(listProjectAsync());
    }, []);

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
                    <ListFilters />
                </div>

                <div className='container-all-cards'>
                    {projects.map((e, i) => (
                        
                        <div key={i} className="card-all-projects">
                            <Link to={"/details-project/" + e.titleproject} className="links">
                            <button
                                className="card-part-one"
                                onClick={() => {
                                    dispatch(showDetailProjectAsync(e.titleproject))
                                }}
                            >
                                <div className="container-banner-all-projects">
                                    <img src={e.oneimage} alt="banner" title="Banner" className="banner-all-projects" />
                                </div>
                                <div className="container-title-card-all">
                                    <p className="title-card-all">{e.titleproject}</p>
                                </div>
                                <div className="container-rate-card-all">
                                    <p className={e.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                </div>
                            </button>
                            </Link>
                            <div className="card-part-two">
                                <button
                                    className="btn-fav-project-all"
                                    id={e.titleproject}
                                    onClick={() => 
                                        dispatch(addFavoritesSync(e))
                                    }
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

export default ListAllProjects;