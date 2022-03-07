import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";
import './details.styles.css';
import { showDetailServiceAsync } from '../../actions/actionServices';

const DetailService = () => {

    //Show Detail Redux
    const dispatch = useDispatch();

    const { services } = useSelector((store) => store.services);
    //console.log(services);

    useEffect(() => {
        dispatch(showDetailServiceAsync())
    }, []);

    //Image Exchange
    const [imagen, setImagen] = useState();
    const cambiarImagen =(element) => {
        setImagen(element)
    }

    return (
        <div className="first-container-details">
            <Link to="/buscar-servicio" >
                <button className="container-regresar">
                    <div className='container-icon-regresar'>
                        <FaArrowLeft />
                    </div>
                    <div>
                        <p className='regresar'>Volver</p>
                    </div> 
                </button>
            </Link>

            {services.map((e, i) => (
                <div key={i} className='container-details'>
                    <div className='head-details'>
                        <img src={e.banner} alt="banner proyecto" title="banner" className="banner-project-detail"/>
                        <div className="container-title-detail-project">
                            <h1 className='title-detail-project text-details'>{e.tituloservice}</h1>
                            <p className='precio-detail-project'><span className="span-negrita-details">Preferencias de pago:</span> entre USD<span className="span-negrita-details">{e.rangopreciomin}</span> y USD<span className="span-negrita-details">{e.rangopreciomax}</span>.</p>

                            <div className="container-btns-details">
                                <button className='btn-details-one'>Enviar una propuesta</button>
                                <button className='btn-details-two'>Contactar para consulta</button>
                            </div>
                        </div>
                    </div>

                    <div className='body-details'>
                        <div className='container-right-details'>
                            <div className="requisitos-tecnicos-details">
                                <p className="text-details"><span className="span-negrita-details">Categoria:</span> {e.categoria}</p>
                                <p className="text-details"><span className="span-negrita-details">Nivel de experiencia:</span> {e.experiencejob}</p>
                                <p className="text-details"><span className="span-negrita-details">Lenguaje principal:</span> {e.lenguajes}</p>
                                <p className="text-details"><span className="span-negrita-details">Manejo de herramientas:</span> {e.herramientas}</p>
                            </div>
                            <p className="text-details"><span className="span-negrita-details">Mis habilidades:</span> {e.habilidades}</p>
                            <div className="container-icon-link">
                                <p className="text-details"><span className="span-negrita-details">Portafolio personal:</span> </p>
                                <a href={e.link1} aria-label="Mi portafolio" target="_blank" rel="noreferrer" className="link"> Mi portafolio 
                                    <VscGlobe />
                                </a>
                            </div>
                        </div>

                        <div className='container-left-details'>

                            <p className="span-negrita-details text-details">Muestras de mi portafolio:</p>
                            
                            <div className="container-imgs-details">
                                {imagen !== undefined ?
                                    <div className="container-big-img-details">
                                        <img src={imagen} alt="banner" className='img-principal-details' />
                                    </div> :
                                    <div className="container-big-img-details">
                                        <img src={e.portafolio1} alt="banner" className='img-principal-details' />
                                    </div>
                                }
                                <div className="container-litles-img-details">
                                    <div className="container-imgs-portafolio-details">
                                        <img src={e.portafolio1} alt="Portafolio 1" className='imgs-portafolio-details' onClick={()=>cambiarImagen(e.portafolio1)}/>
                                    </div>
                                    <div className="container-imgs-portafolio-details">
                                        <img src={e.portafolio2} alt="Portafolio 2" className='imgs-portafolio-details' onClick={()=>cambiarImagen(e.portafolio2)} />
                                    </div>
                                    <div className="container-imgs-portafolio-details">
                                        <img src={e.portafolio3} alt="Portafolio 3" className='imgs-portafolio-details' onClick={()=>cambiarImagen(e.portafolio3)} />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default DetailService;