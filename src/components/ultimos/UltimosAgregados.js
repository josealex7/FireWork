import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProjectAsync, showDetailProjectAsync } from '../../actions/actionProyectos';
import { Link, useParams } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import './stylesUltimos.css';

const UltimosAgregados = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const [arrayRelacionado, setArrayRelacionado] = useState(null)

    const { projects } = useSelector((store) => store.projects);
    //console.log(projects);

    useEffect(() => {
        dispatch(listProjectAsync());
        productosRelacionados()
    }, [dispatch]);

    const productosRelacionados =()=>{
        let contador=0;
        let arrayNew = []
        let newArray = projects.filter((element=>element.titleproject===id))
        newArray = newArray[0]
        projects.forEach(element => {
            if(element.titleproject[0]===newArray.titleproject[0] && element.titleproject!==newArray.titleproject){
                if(contador<4 ){
                    arrayNew.push(
                        element
                    )
                }
                contador++
            }
        });
        setArrayRelacionado(arrayNew)
    }

    return (
        <div>
            <div className='container-second-all'>
                {arrayRelacionado?.map((e => (
                    <div className='container-all-cards' key={e.titleproject}>
                        {projects.map((e, i) => (
                            <Link to={"/details-project/" + e.titleproject} className="links">
                                <div key={i} className="card-all-projects">
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
                            </Link>
                        ))}
                    
                    </div>
                )))
                }
            </div>
        </div>
    )
};

export default UltimosAgregados;