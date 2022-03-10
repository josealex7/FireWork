import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { categoryProjectAsync, showDetailProjectAsync } from '../actions/actionProyectos';
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import '../components/list/styleslistarAll.css';

const Busquedas = () => {

    let history = useNavigate();

    const dispatch = useDispatch();

    const { projects } = useSelector((store) => store.projects);
    console.log(projects)

    useEffect(() => {
        dispatch(categoryProjectAsync());
    }, [dispatch]);
    
    return (
        <section className='first-container-all'>

            <Link to="/home" >
                <button className="container-regresar">
                    <div className='container-icon-regresar'>
                        <FaArrowLeft />
                    </div>
                    <div>
                        <p className='regresar'>Volver al inicio</p>
                    </div> 
                </button>
            </Link>

            <h3>Resultados de su búsqueda</h3>

            <>
            {
                projects.map((e, i) => (
                    <div key={i}>
                        
                        <div key={i} className="card-all-projects">
                            <button
                                className="card-part-one"
                                onClick={() => {
                                    dispatch(showDetailProjectAsync(e.titleproject))
                                    history("/detail-project")
                                }}
                            >
                                <div className="container-banner-all-projects">
                                    <img src={e.oneimage} alt="banner" title="Banner" className="banner-all-projects" />
                                </div>
                                <div className="container-title-card-all">
                                    <p className="title-card-all">{e.titleproject}</p>
                                </div>
                            </button>
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
                    </div>
                ))
            }
        </>
        </section>
    )
}

export default Busquedas;