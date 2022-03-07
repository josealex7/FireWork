import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { searchProjectAsync } from '../../../actions/actionProyectos';
import { FaSearch } from "react-icons/fa";
import './UserPerfil.css'

const SearchWords = () => {

    let history = useNavigate();

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit: ({ search }) => {
            dispatch(searchProjectAsync(search))
            //console.log(search);
        }
    })
  
    return (
      <div>
          <div className="container-form-search">
                <form onSubmit={formik.handleSubmit}>
          
                <input
                    className="input-search"
                    id="search"
                    name="search"
                    type="text"
                    aria-label="Search Products"
                    placeholder="Buscar por categoría"
                    onChange={formik.handleChange}
                />
                <button
                    className="btn-search"
                    type="submit"
                    onClick={() => history("/busqueda")}
                >
                    <FaSearch />
                </button>
                
               </form>
            </div>
      </div>
    )
}

export default SearchWords
