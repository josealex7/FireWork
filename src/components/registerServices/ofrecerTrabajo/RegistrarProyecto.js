import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fileUpload } from '../../../helpers/fileUpload';
import { useDispatch } from 'react-redux';
import { registerProjectAsync } from '../../../actions/actionProyectos';
import { Link } from "react-router-dom";

// Material UI-------------------
import { Box, Stepper, Step, StepLabel, Button, Typography, TextField, MenuItem } from '@mui/material';
import { FaArrowLeft, FaRegImage, FaCheck, FaMousePointer } from "react-icons/fa";
import './stylesProyectos.css';

const steps = ['Carga la imagen del proyecto', 'Carga la información del proyecto', 'Publica tu proyecto'];
const Categorias = [
    {
    value: 'frontend',
    label: 'Frontend',
    },
    {
    value: 'backend',
    label: 'Backend',
    },
    {
    value: 'fullstack',
    label: 'FullStack',
    },
    {
    value: 'escritorio',
    label: 'Aplicaciones de escritorio',
    },
    {
    value: 'movil',
    label: 'Aplicaciones moviles',
    },
    {
    value: 'ecommerce',
    label: 'e-commerce',
    },
    {
    value: 'disenio',
    label: 'Diseño UI/UX',
    },
    {
    value: 'testing',
    label: 'Testing',
    },
    {
    value: 'dataescience',
    label: 'Datae Science',
    },
];

const RegistrarProyecto = () => {

    const [formRegister, setFormRegister] = useState(false);

    const dispatch = useDispatch();

    // Categoria -------------------------------------------------------
    const [categoria, setCategoria] = React.useState('frontend');

    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
    };
    
    const seleccionarCategoria = () =>{
        if(categoria==='frontend'){
            return ['frontend','Frontend']
        } else if (categoria==='backend'){
            return ['backend', 'Backend']
        } else if (categoria==='fullstack'){
            return ['fullstack', 'Fullstack']
        } else if (categoria==='disenio'){
            return ['disenio', 'Diseño UI/UX']
        } else if (categoria==='disenio'){
            return ['dataescience', 'Datae Science']
        } else if (categoria==='escritorio'){
            return ['escritorio', 'Aplicaciones de escritorio']
        } else if (categoria==='movil'){
            return ['movil', 'Aplicaciones moviles']
        } else if (categoria==='ecommerce'){
            return ['ecommerce','e-commerce']
        } else {
            return ['testing','Testing']
        }
    }
    // Categoria -------------------------------------------------------

    // Formulario-------------------------------------------------------
    const formik = useFormik({
        initialValues: {
            oneimage: "",
            titleproject: "",
            descriptionproject: "",
            pagoproject: "",
            dateproject: "",
            requirementsproject: "",
            experiencejob: "",
            lenguajesjob: "",
            herramientasjob: "",
            othersjob: "",
        },
        validationSchema: Yup.object({
            oneimage: Yup.string().required(),
            titleproject: Yup.string().required(),
            descriptionproject: Yup.string().required(),
            pagoproject: Yup.string().required(),
            dateproject: Yup.string().required(),
            requirementsproject: Yup.string().required(),
            experiencejob: Yup.string().required(),
            lenguajesjob: Yup.string().required(),
            herramientasjob: Yup.string().required(),
            othersjob: Yup.string().required(),
        }),
        onSubmit: (data) => {
            setFormRegister(true);
			setTimeout(() => setFormRegister(false), 5000);
            data['categoria'] = seleccionarCategoria();
            console.log(data);
            dispatch(registerProjectAsync(data))
        },
    })

    //que funcione el click del boton que intercambio por el input
    const handlePictureClick1 = () => {
        document.querySelector('#imageone').click();
    }

    //Capturar el evento de guardar la url de la imagen
    const handleFileChanged1 = (e) => {
        const file = e.target.files[0];

        let contenedorDiv = document.getElementById('contenedorTitulosImagenes');
        contenedorDiv.innerHTML+=
        `
        <div>
            <p>${file.name} agregada!</p>
        </div>
        <hr/>
        `;
            fileUpload(file)
            .then(response => {
                formik.initialValues.oneimage = response
                console.log(response);
            })
            .catch(e => {
                console.log(e.message);
            })
    }



    // Material UI-------------------------------------------------------------
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    // Material UI-------------------------------------------------------------

    return (
        <div className="first-container-register-proyect">

            <Link to="/home" >
                <button className="container-regresar-projects">
                    <div className='container-icon-regresar-projects'>
                        <FaArrowLeft />
                    </div>
                    <div>
                        <p className='regresar-projects'>Volver al Inicio</p>
                    </div> 
                </button>
            </Link>

            <div className="title-container-register-proyect">
                <h1><strong>Registrar un nuevo proyecto</strong></h1>
            </div>

            {/* // Material UI--------------------------------------------------------------------- */}
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
      
                <div className="form-container-register-proyect">
                    <form className="form-group" onSubmit={formik.handleSubmit}>
                        
                        {activeStep === 0 &&
                            <div className="container-base-register-proyect">
                                <p className="text--register-proyect">Banner del proyecto</p>

                                <div>
                                    <input
                                        id="imageone"
                                        type="file"
                                        className="form-control"
                                        name="oneimage"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChanged1}
                                    />

                                    <button
                                        className="btn-register-proyect"
                                        onClick={() => handlePictureClick1()}
                                        type="button"
                                    >
                                        Agregar banner del proyecto
                                        <div className="container-icon-btn">
                                            <FaRegImage />
                                        </div>
                                    </button>
                                </div>

                                <div id='contenedorTitulosImagenes' className="img-agregada"></div>
                            </div>
                        }
            
                        {activeStep === 1 &&
                            <div className="container-base-register-proyect">
                                <p className="text--register-proyect">Información del proyecto</p>

                                <div className="container-divider">
                                    <div className="divider-zero">

                                        <div>
                                            <TextField
                                                name='categoria'
                                                color='warning'
                                                id="outlined-select-currency"
                                                select
                                                value={categoria}
                                                onChange={handleChangeCategoria}
                                                fullWidth
                                                helperText="Seleccione la categoría del proyecto"
                                                sx={{ mb:4 , width: '350px' }}
                                            >
                                                {Categorias.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </div>

                                        <div>
                                            <TextField sx={{ mb:2 , width: '100%' }} id="filled-basic"           label="Titulo del proyecto" variant="outlined"
                                                type="text"
                                                className="form-control mt-2"
                                                name="titleproject"
                                                autoComplete="off"
                                                placeholder="Título del proyecto"
                                                onChange={formik.handleChange}
                                            />
                                        </div> 

                                        <div>
                                        <TextField sx={{ mb:2 , width: '100%' }} id="filled-basic" label="Descripcion del proyecto" variant="outlined"
                                        type="text"
                                        className="form-control mt-2"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        name="descriptionproject"
                                        autoComplete="off"
                                        placeholder="Descripción del proyecto"
                                        onChange={formik.handleChange}
                                        />
                                        </div>

                                         <div>
                                    <TextField sx={{ mb:2 , width: '350px' }} id="filled-basic" label="Valor del proyecto en USD"   variant="outlined"
                                        type="number"
                                        min="100"
                                        className="form-control mt-4"
                                        name="pagoproject"
                                        autoComplete="off"
                                        placeholder="Valor del proyecto en USD"
                                        onChange={formik.handleChange}
                                    />
                                        </div>

                                    </div>

                                    <div className="divider-zero">
                                        <div> 
                                    <TextField sx={{ mb:2 ,width: '100%' }} id="filled-basic" variant="outlined"
                                        type="date"
                                        min="2022-03-04"
                                        max="2022-04-31"
                                        className="form-control mt-2"
                                        name="dateproject"
                                        placeholder="Plazo de entrega del proyecto"
                                        onChange={formik.handleChange}
                                        helperText="Seleccione el plazo de entrega del proyecto"
                                    />
                                        </div>

                                        <div>
                                        <TextField sx={{ mb:4 , width: '350px' }} id="filled-basic" label="Nivel de experiencia deseable" variant="outlined"
                                        type="text"
                                        className="form-control mt-2"
                                        name="experiencejob"
                                        autoComplete="off"
                                        placeholder="Nivel de experiencia deseable"
                                        onChange={formik.handleChange}
                                        />
                                        </div>

                                        <div>
                                        <TextField sx={{ mb:4 , width: '350px' }} id="filled-basic" label="Nacesidades del proyecto" variant="outlined"
                                        type="text"
                                        className="form-control mt-2"
                                        multiline
                                        rows={7}
                                        fullWidth
                                        name="requirementsproject"
                                        autoComplete="off"
                                        placeholder="Nacesidades del proyecto"
                                        onChange={formik.handleChange}
                                        />
                                        </div>

                                        
                                    </div>
                                
                                    <div className="divider-two">    
                                        <div>
                                        <TextField sx={{ mb:4 , width: '300px' }}id="filled-basic" label="Lenguaje requerido para el proyecto" variant="outlined"
                                        type="text"
                                        className="form-control mt-2"
                                        name="lenguajesjob"
                                        autoComplete="off"
                                        placeholder="Lenguaje requerido para el proyecto"
                                        onChange={formik.handleChange}
                                        />
                                        </div>

                                        <div>
                                        <TextField sx={{ mb:4 , width: '300px' }} id="filled-basic" label="Herramientas de desarrollo requeridas para el proyecto" variant="outlined"
                                        type="text"
                                        className="form-control mt-2"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        name="herramientasjob"
                                        autoComplete="off"
                                        placeholder="Herramientas de desarrollo requeridas para el proyecto"
                                        onChange={formik.handleChange}
                                        />
                                        </div>

                                        <div>
                                        <TextField sx={{ mb:2 , width: '100%' }} id="filled-basic" label="Otros lenguajes y herramientas de desarrollo requeridas para el proyecto" variant="outlined"
                                        type="text"
                                        className="form-control mt-2"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        name="othersjob"
                                        autoComplete="off"
                                        placeholder="Otros lenguajes y herramientas de desarrollo requeridas para el proyecto"
                                        onChange={formik.handleChange}
                                        />
                                        </div>


                                    
                                </div>
                            </div>
                            </div>
                        }
            
                        {activeStep === 2 &&
                            // Boton enviar 
                            <div className="container-base-register-proyect">
                                <p className="text--register-proyect">Publica el proyecto</p>
                            
                                <button
                                    value="Publicar proyecto"
                                    type="submit"
                                    className="btn-register-proyect"
                                >
                                    Publicar proyecto
                                    <div className="container-icon-btn">
                                        <FaCheck />
                                    </div>
                                </button>
                                {formRegister && <div className="img-agregada"><p>¡Publicación exitosa!</p></div>}
                            </div>
                        }
                    </form>
                </div>
                
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <div className="container-base-register-proyect">
                            <img src="https://res.cloudinary.com/app-firework1/image/upload/v1640799731/logo/Logo2_csgze7.png" alt="logo firework" className="logo-firework-register-proyect" />
                
                            <p className="text--register-proyect">Completaste todos los pasos.</p>
                            <p className="text--register-proyect">¡Estás listo para encontrar profesionales que puedan desarrollar tu proyecto!</p>
                
                            <Link to="/buscar-trabajo" className="links">
                                <button className="btn-register-proyect">
                                    Ver proyectos publicados
                                    <div className="container-icon-btn">
                                        <FaMousePointer />
                                    </div>
                                </button>
                            </Link>
                        </div>
            
                       <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
          <Button onClick={handleReset}>Reset</Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Terminaste' : 'Siguiente'}
            </Button>
          </Box>
        </React.Fragment>
        )}
        </Box>
        {/* // Material UI--------------------------------------------------------------------- */}

        </div>
    )
}

export default RegistrarProyecto;