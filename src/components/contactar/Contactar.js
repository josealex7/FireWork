import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { init } from '@emailjs/browser';
import { Button, TextField } from '@mui/material';
import './contacto.css';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { showDetailProjectAsync } from '../../actions/actionProyectos';

init("user_Hk7dtQXhhReHfpL6BpZRy");

const Contactar = () => {

    function sendEmail(e) {
        e.preventDefault();
        console.log(init)
        emailjs.sendForm('service_taqa3pu', 'template_75zehoo', e.target, "user_Hk7dtQXhhReHfpL6BpZRy")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    //Show Detail Redux
    const dispatch = useDispatch();

    const { projects } = useSelector((store) => store.projects);
    console.log(projects);

    useEffect(() => {
        dispatch(showDetailProjectAsync())
    }, []);
    
    return (
        <div>
            <Link to="/buscar-trabajo" >
                <button className="container-regresar">
                    <div className='container-icon-regresar'>
                        <FaArrowLeft />
                    </div>
                    <div>
                        <p className='regresar'>Volver</p>
                    </div> 
                </button>
            </Link>

            <div className='ContenedorContacto'>

                <h1>Contactar</h1>
          <div className='contenedor-Formulario'>
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <TextField fullWidth sx={{mt:2}} required type="text" name="user_name" label='Ingresa tu nombre' variant='filled'/>
              <TextField fullWidth sx={{mt:2}} required label='Escribe tu correo'type="email" name="user_email" variant='filled'/>
              <TextField
              fullWidth
              variant='filled'
              sx={{mt:2}}
              required
              name="message"
              label="Escribe tu mensaje"
              multiline
              rows={4}
              fullWidth
              />
              <Button fullWidth sx={{mt:2, mb:4}} type="submit" variant='contained' className='botonEnviar'>
                  Enviar
              </Button>
            </form>
          </div>
        </div>
        </div>
    )
};

export default Contactar;