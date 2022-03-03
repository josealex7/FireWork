import { TextField } from '@mui/material';
import React, { useState } from 'react'
import User from '../../hooks/User';
import  * as Yup from 'yup'
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import {GuardarUsuarioAsync, ActualizaUsuarioAsync} from '../../actions/actionUsuario'
import { ListarUsuarioAsync } from '../../actions/actionUsuario';

// CSS
import './perfil.css'

const Perfil = () => {

    const dispatch = useDispatch();
    dispatch(ListarUsuarioAsync())

    const { datosUsuario } = useSelector(store => store.usuario);
    
    const useUser = User();   

    const formik = useFormik(
        {
        initialValues: {
            habilidades : '',
            portafolio: '',
            sobre_mi: '',
            certificaciones: '',
            idiomas: '',
        },
        validationSchema: Yup.object({
            /*habilidades: Yup.string().required(),
            portafolio: Yup.string().required(),
            sobre_mi: Yup.string().required(),
            certificaciones: Yup.string().required(),
            idiomas: Yup.string().required()*/
        }),
        onSubmit: (data) => {
                
            if(datosUsuario!=null && datosUsuario!=undefined){
                if(datosUsuario!=null){
                    if(data.habilidades==''){
                        data['habilidades']=datosUsuario.habilidades
                    }
                    if(data.portafolio==''){
                        data['portafolio']=datosUsuario.portafolio
                    }
                    if(data.sobre_mi==''){
                        data['sobre_mi']=datosUsuario.sobre_mi
                    }
                    if(data.certificaciones==''){
                        data['certificaciones']=datosUsuario.certificaciones
                    }
                    if(data.idiomas==''){
                        data['idiomas']=datosUsuario.idiomas
                    }
                    data['id']=useUser.uid
                    console.log('actualizar')
                    console.log(data)
                    dispatch(ActualizaUsuarioAsync(datosUsuario.id_coleccion,data))    
                } else {
                    alert('debe ingresar la informacion')
                }
            }else {
                data['id']=useUser.uid
                console.log('agregar')
                console.log(data)
                dispatch(GuardarUsuarioAsync(data))
            }
        },
    })

    return (
    <>
        <h1>Mi perfil</h1>
        <img src={useUser.photoURL}/>
        <h1>{useUser.name}</h1>
        <h1>{useUser.email}</h1>
        <h1>Estrellas</h1>
        <h1>Calificaciones</h1>
        <img className='imagenColombia' src="https://res.cloudinary.com/app-firework1/image/upload/v1646191805/Flag_of_Colombia_tfswhg.png"/>
        <form onSubmit={formik.handleSubmit}>
            <textarea defaultValue={datosUsuario!=null?datosUsuario.habilidades:''} placeholder='Habilidades' name='habilidades' onChange={formik.handleChange}/>
            <textarea defaultValue={datosUsuario!=null?datosUsuario.portafolio:''} placeholder='Portafolio' name='portafolio' onChange={formik.handleChange}/>
            <textarea defaultValue={datosUsuario!=null?datosUsuario.sobre_mi:''} placeholder='Sobre mi' name='sobre_mi' onChange={formik.handleChange}/>
            <textarea
                defaultValue={datosUsuario!=null?datosUsuario.certificaciones:''}
                placeholder='Certificaciones' 
                name='certificaciones' 
                onChange={formik.handleChange}/>
            <textarea defaultValue={datosUsuario!=null?datosUsuario.idiomas:''} placeholder='Idiomas' name='idiomas' onChange={formik.handleChange}/>
            <button type='submit'>{datosUsuario!=null?'Actualizar':'Guardar'}</button>
        </form>
    </>
  )
}
export default Perfil