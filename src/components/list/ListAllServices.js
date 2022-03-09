import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listServiceAsync, showDetailServiceAsync } from '../../actions/actionServices';
import { addFavoritesServSync } from '../../actions/actionFavoritos';
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHeart, FaStar } from "react-icons/fa";
import ListFilterServices from './ListFilterServices';
import './styleslistarAll.css';

const ListAllServices = () => {

    let history = useNavigate();

    const dispatch = useDispatch();

    const { services } = useSelector((store) => store.services);
    //console.log(services);

    useEffect(() => {
        dispatch(listServiceAsync());
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
                    <ListFilterServices />
                </div>

                <div className='container-all-cards'>
                    {services.map((e, i) => (
                        
                        <div key={i} className="card-all-projects">
                            <Link to={"/detail-service/" + e.tituloservice} className="links">
                            <div
                                className="card-part-one"
                                onClick={() => {
                                    dispatch(showDetailServiceAsync(e.tituloservice))
                                    history("/detail-service")
                                }}
                            >
                                <div className="container-banner-all-projects">
                                    <img src={e.banner} alt="banner" title="Banner" className="banner-all-projects" />
                                </div>
                                <div className="container-title-card-all">
                                    <p className="title-card-all">{e.tituloservice}</p>
                                </div>

                                <div className="container-rate-card-all-services">
                                    <p className={e.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                </div>
                            </div>
                            </Link>
                            <div className="card-part-two">
                                <button
                                    className="btn-fav-project-all"
                                    id={e.tituloservice}
                                    onClick={() => 
                                        dispatch(addFavoritesServSync(e))
                                    }
                                >
                                    <FaHeart />
                                </button>

                                <div className='container-pago-all'>
                                    <p className="info-pago-oferta-card-all">Pago entre:</p>
                                    <p className="precio-oferta-card-all">{e.rangopreciomin}$ <span className="info-pago-oferta-card-all">y</span> {e.rangopreciomax}$</p>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                    
                </div>
            </div>
        </div>
    )
};

export default ListAllServices;