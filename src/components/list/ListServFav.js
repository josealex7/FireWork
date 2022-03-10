import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";

import { listServiceAsync, showDetailServiceAsync } from '../../actions/actionServices';
import './styleslistarAll.css';

const ListServFav = () => {

    let history = useNavigate();

    const dispatch = useDispatch();
  
    const { favoritev } = useSelector((store) => store.favoritev);
    console.log(favoritev);

    useEffect(() => {
        dispatch(listServiceAsync());
    }, []);

    return (
        <>

            <div className='container-all-favorites-two'>

                {favoritev.length === 0 ?
                    <div>
                        <h2 className='container-subtitle-favorites'>No tienes servicios favoritos</h2>
                    </div>
                    :
                    <div>
                        <h2 className='container-subtitle-favorites'>Mis servicios favoritos</h2>
                    </div>
                }

                <div className='container-all-cards'>
                    {favoritev.map((fa) => (
                        <div key={fa.tituloservice} className="card-all-projects">
                            <div
                                className="card-part-one"
                                onClick={() => {
                                    dispatch(showDetailServiceAsync(fa.tituloservice))
                                    history("/detail-service")
                                }}
                            >
                                <div className="container-banner-all-projects">
                                    <img src={fa.banner} alt="banner" title="Banner" className="banner-all-projects" />
                                </div>
                                <div className="container-title-card-all">
                                    <p className="title-card-all">{fa.tituloservice}</p>
                                </div>

                                <div className="container-rate-card-all-services">
                                    <p className={fa.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={fa.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={fa.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={fa.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={fa.featuring === 'Más destacados' ? 'good' : 'bad'}><FaStar /></p>
                                </div>
                            </div>
                            <div className="card-part-two">
                                <button
                                    className="btn-fav-project-all"
                                    id={fa.tituloservice}
                                    // onClick={() => 
                                    //     dispatch(addFavoritesSync(fav))
                                    // }
                                >
                                    <FaHeart />
                                </button>

                                <div className='container-pago-all'>
                                    <p className="info-pago-oferta-card-all">Pago entre:</p>
                                    <p className="precio-oferta-card-all">{fa.rangopreciomin}$ <span className="info-pago-oferta-card-all">y</span> {fa.rangopreciomax}$</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
};

export default ListServFav;