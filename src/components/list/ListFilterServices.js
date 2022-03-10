import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listCategoriesAsync, searchServiceAsync, listServiceAsync, listDestacadosAsync, searchServicesDestAsync } from '../../actions/actionServices';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaSearch } from "react-icons/fa";
import './styleslistarAll.css';

const ListFilterServices = () => {

    const dispatch = useDispatch();

    const { categories } = useSelector((store) => store.categories);
    //console.log(categories);

    const { featured } = useSelector((store) => store.featured);
    //console.log(featured);
    
    useEffect(() => {
        dispatch(listCategoriesAsync());
        dispatch(listDestacadosAsync());
    }, [dispatch]);

    // FORM -------------------------------------------
    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit: ({ search }) => {
            dispatch(searchServiceAsync(search))
            //console.log(search);
        }
    })

    return (
        <div className='first-container-filter'>
            
            <div className='container-title-filter'>
                <h3 className='title-filter'>Filtro de búsqueda</h3>
            </div>

            <div className='container-items-categorias'>
                <h4 className='title-categories-filter'>Buscar por categoría</h4>
                    <div className="categories-checkbox-filter">
                        <form onSubmit={formik.handleSubmit}>
                            <input
                                className="input-search-filter"
                                id="search"
                                name="search"
                                type="text"
                                aria-label="Search"
                                placeholder="Buscar categoría"
                                onChange={formik.handleChange}
                            />
                            <button
                                bg="warning"
                                variant="warning"
                                className="btn-search-filter"
                                type="submit"
                            >
                                <FaSearch />
                            </button>
                        </form>
                    </div>
            </div>

            <div className='container-items-categorias'>
                <h4 className='title-categories-filter'>Destacados y menos destacados</h4>
                <div className="categories-checkbox-filter">
                    {featured.map((e, i) => (
                    <label key={i}>
                        <input
                            className="checkbox-filter"
                            type="checkbox"
                            value={e.id}
                            id={e.id}
                            onClick={() => {
                                dispatch(searchServicesDestAsync(e.id))
                            }}
                        />
                            {e.featuring}
                    </label>
                    ))}
                    <label>
                        <input
                            className="checkbox-filter checkbox-filter-two"
                            type="checkbox"
                            value="all"
                            id="all"
                            onClick={() => {
                                dispatch(listServiceAsync())
                            }}
                        />
                            Todos
                    </label>
                </div>
            </div>

            <div className='container-items-categorias'>
                <h4 className='title-categories-filter'>Categorías</h4>

                    <div className="categories-checkbox-filter">
                        {categories.map((e, i) => (
                            <label key={i}>
                                <input
                                    className="checkbox-filter"
                                    type="checkbox"
                                    value={e.id}
                                    id={e.id}
                                    onClick={() => {
                                        dispatch(searchServiceAsync(e.id))
                                    }}
                                />
                                {e.category}
                            </label>
                        ))}
                        <label>
                                <input
                                    className="checkbox-filter"
                                    type="checkbox"
                                    value="all"
                                    id="all"
                                    onClick={() => {
                                        dispatch(listServiceAsync())
                                    }}
                                />
                                Todas
                            </label>
                    </div>
                    
            </div>
        </div>
    )
};

export default ListFilterServices;