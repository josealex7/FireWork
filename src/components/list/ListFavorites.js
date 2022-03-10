import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHeart, FaStar } from "react-icons/fa";

import { showDetailProjectAsync, listProjectAsync } from '../../actions/actionProyectos';
import './styleslistarAll.css';

const ListFavorites = () => {

    const dispatch = useDispatch();
  
    const { favorite } = useSelector((store) => store.favorite);
    //console.log(favorite);

    useEffect(() => {
        dispatch(listProjectAsync());
    }, [dispatch]);

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

            <div className='container-all-favorites border-bottom-favorites'>
                <div className='container-filter-in-all'>
                    <h1 className='container-title-favorites'>Favoritos</h1>
                </div>

                {favorite.length === 0 ?
                    <div>
                        <h2 className='container-subtitle-favorites'>No tienes proyectos favoritos</h2>
                    </div>
                    :
                    <div>
                        <h2 className='container-subtitle-favorites'>Mis proyectos favoritos</h2>
                    </div>
                }

                <div className='container-all-cards'>
                    
                    {favorite.map((fav) => (
                        <Link to={"/details-project/" + fav.titleproject} className="links">
                        <div key={fav.titleproject} className="card-all-projects">
                            <button
                                className="card-part-one"
                                onClick={() => {
                                    dispatch(showDetailProjectAsync(fav.titleproject))
                                }}
                            >
                                <div className="container-banner-all-projects">
                                    <img src={fav.oneimage} alt="banner" title="Banner" className="banner-all-projects" />
                                </div>
                                <div className="container-title-card-all">
                                    <p className="title-card-all">{fav.titleproject}</p>
                                </div>
                                <div className="container-rate-card-all">
                                    <p className={fav.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={fav.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={fav.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={fav.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={fav.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                </div>
                            </button>
                            <div className="card-part-two">
                                <button
                                    className="btn-fav-project-all"
                                    id={fav.titleproject}
                                    // onClick={() => 
                                    //     dispatch(addFavoritesSync(e))
                                    // }
                                >
                                    <FaHeart />
                                </button>

                                <p className="info-pago-oferta-card-all">Pago de <span className="precio-oferta-card-all">{fav.pagoproject}$</span></p>
                            </div>
                        </div>
                        </Link>
                    ))}
                    
                </div>
            </div>

        </div>
    )
};

export default ListFavorites;