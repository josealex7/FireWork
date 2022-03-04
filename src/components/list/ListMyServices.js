import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { listServiceAsync } from '../../actions/actionServices';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import ListFilters from './ListFilters';
import './styleslistarAll.css';

const ListMyServices = () => {

    const dispatch = useDispatch();

    const { services } = useSelector((store) => store.services);
    console.log(services);

    useEffect(() => {
        //dispatch(listServiceAsync());
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
                    {services.map((e, i) => (
                        <div key={i} className="card-all-projects">
                            <div className="card-part-one">
                                <div className="container-banner-all-projects">
                                    <img src={e.banner} alt="banner" title="Banner" className="banner-all-projects" />
                                </div>
                                <div className="container-title-card-all">
                                    <p className="title-card-all">{e.tituloservice}</p>
                                </div>
                            </div>
                            <div className="card-part-two">
                                <button
                                    className="btn-fav-project-all"
                                    id={e.tituloservice}
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

export default ListMyServices;