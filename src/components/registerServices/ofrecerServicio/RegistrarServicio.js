import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fileUpload } from '../../../helpers/fileUpload';
import { useDispatch } from 'react-redux';
import { registerServiceAsync } from '../../../actions/actionServices';
import { Link } from "react-router-dom";

// Material UI-------------------
import { Box, Stepper, Step, StepLabel, Button, Typography, TextField, MenuItem } from '@mui/material';
import { FaArrowLeft, FaRegImage, FaCheck, FaMousePointer } from "react-icons/fa";
import '../ofrecerTrabajo/stylesProyectos.css';

const steps = ['Carga imagenes de tu portafolio', 'Carga tu información de servicio', '¡Publica!'];
const Categorias = [{value: 'frontend', label: 'Frontend',}, {value: 'backend', label: 'Backend',}, {value: 'fullstack',label: 'FullStack',}, { value: 'escritorio', label: 'Aplicaciones de escritorio',}, {value: 'movil', label: 'Aplicaciones moviles',}, {value: 'ecommerce', label: 'e-commerce',}, {value: 'disenio', label: 'Diseño UI/UX',}, {value: 'testing', label: 'Testing',}, {value: 'dataescience',label: 'Datae Science',},];

const RegistrarServicio = () => {

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
            portafolio1: "",
            portafolio2: "",
            portafolio3: "",
            banner: "",
            tituloservice: "",
            habilidades: "",
            experiencejob: "",
            lenguajes: "",
            herramientas: "",
            rangopreciomin: "",
            rangopreciomax: "",
            link1: "",
        },
        validationSchema: Yup.object({
            portafolio1: Yup.string().required(),
            portafolio2: Yup.string().required(),
            portafolio3: Yup.string().required(),
            banner: Yup.string().required(),
            tituloservice: Yup.string().required(),
            habilidades: Yup.string().required(),
            experiencejob: Yup.string().required(),
            herramientas: Yup.string().required(),
            rangopreciomin: Yup.string().required(),
            rangopreciomax: Yup.string().required(),
            link1: Yup.string().required(),
        }),
        onSubmit: (data) => {
            setFormRegister(true);
			setTimeout(() => setFormRegister(false), 5000);
            data['categoria'] = seleccionarCategoria();
            console.log(data);
            dispatch(registerServiceAsync(data))
        },
    })

    // IMAGENES ------------------------------------------------------------------------------------------
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
                formik.initialValues.banner = response
                console.log(response);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    //que funcione el click del boton que intercambio por el input
    const handlePictureClick2 = () => {
        document.querySelector('#imagetwo').click();
    }
    //Capturar el evento de guardar la url de la imagen
    const handleFileChanged2 = (e) => {
        const file = e.target.files[0];

        let contenedorDiv = document.getElementById('contenedorTitulosImgs1');
        contenedorDiv.innerHTML+=
        `
        <div>
            <p>Imagen ${file.name} agregada!</p>
        </div>
        <hr/>
        `;
            fileUpload(file)
            .then(response => {
                formik.initialValues.portafolio1 = response
                console.log(response);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    //que funcione el click del boton que intercambio por el input
    const handlePictureClick3 = () => {
        document.querySelector('#imagethree').click();
    }
    //Capturar el evento de guardar la url de la imagen
    const handleFileChanged3 = (e) => {
        const file = e.target.files[0];

        let contenedorDiv = document.getElementById('contenedorTitulosImgs2');
        contenedorDiv.innerHTML+=
        `
        <div>
            <p>Imagen ${file.name} agregada!</p>
        </div>
        <hr/>
        `;
            fileUpload(file)
            .then(response => {
                formik.initialValues.portafolio2 = response
                console.log(response);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    //que funcione el click del boton que intercambio por el input
    const handlePictureClick4 = () => {
        document.querySelector('#imagefour').click();
    }
    //Capturar el evento de guardar la url de la imagen
    const handleFileChanged4 = (e) => {
        const file = e.target.files[0];

        let contenedorDiv = document.getElementById('contenedorTitulosImgs3');
        contenedorDiv.innerHTML+=
        `
        <div>
            <p>Imagen ${file.name} agregada!</p>
        </div>
        <hr/>
        `;
            fileUpload(file)
            .then(response => {
                formik.initialValues.portafolio3 = response
                console.log(response);
            })
            .catch(e => {
                console.log(e.message);
            })
    }
    // IMAGENES ------------------------------------------------------------------------------------------

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
                <h1><strong>Registrar un nuevo servicio</strong></h1>
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
                                <p className="text--register-proyect">Imagen del referencial del servicio</p>

                                <div>
                                    <input
                                        id="imageone"
                                        type="file"
                                        className="form-control"
                                        name="banner"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChanged1}
                                    />

                                    <button
                                        className="btn-register-proyect"
                                        onClick={() => handlePictureClick1()}
                                        type="button"
                                    >
                                        Agregar banner de la publicación
                                        <div className="container-icon-btn">
                                            <FaRegImage />
                                        </div>
                                    </button>
                                </div>

                                <div id='contenedorTitulosImagenes' className="img-agregada"></div>

                                <div>
                                    <input
                                        id="imagetwo"
                                        type="file"
                                        className="form-control"
                                        name="portafolio1"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChanged2}
                                    />

                                    <button
                                        className="btn-register-proyect"
                                        onClick={() => handlePictureClick2()}
                                        type="button"
                                    >
                                        Agregar imagen de muestra de portafolio
                                        <div className="container-icon-btn">
                                            <FaRegImage />
                                        </div>
                                    </button>
                                </div>

                                <div id='contenedorTitulosImgs1' className="img-agregada"></div>

                                <div>
                                    <input
                                        id="imagethree"
                                        type="file"
                                        className="form-control"
                                        name="portafolio2"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChanged3}
                                    />

                                    <button
                                        className="btn-register-proyect"
                                        onClick={() => handlePictureClick3()}
                                        type="button"
                                    >
                                        Agregar imagen de muestra de portafolio
                                        <div className="container-icon-btn">
                                            <FaRegImage />
                                        </div>
                                    </button>
                                </div>

                                <div id='contenedorTitulosImgs2' className="img-agregada"></div>

                                <div>
                                    <input
                                        id="imagefour"
                                        type="file"
                                        className="form-control"
                                        name="portafolio3"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChanged4}
                                    />

                                    <button
                                        className="btn-register-proyect"
                                        onClick={() => handlePictureClick4()}
                                        type="button"
                                    >
                                        Agregar imagen de muestra de portafolio
                                        <div className="container-icon-btn">
                                            <FaRegImage />
                                        </div>
                                    </button>
                                </div>

                                <div id='contenedorTitulosImgs3' className="img-agregada"></div>
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
                                                helperText="Seleccione la categoría del servicio"
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
                                            <TextField sx={{ mb:2 , width: '100%' }} id="filled-basic" label="Titulo del servicio" variant="outlined"
                                                type="text"
                                                className="form-control mt-2"
                                                name="tituloservice"
                                                autoComplete="off"
                                                placeholder="Título del servicio"
                                                onChange={formik.handleChange}
                                            />
                                        </div> 

                                        <div>
                                        <TextField sx={{ mb:2 , width: '100%' }} id="filled-basic" label="Describa sus habilidades de desarrollo" variant="outlined"
                                        type="text"
                                        className="form-control mt-2"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        name="habilidades"
                                        autoComplete="off"
                                        placeholder="Describa sus habilidades de desarrollo"
                                        onChange={formik.handleChange}
                                        />
                                        </div>

                                    </div>

                                    <div className="divider-zero">
                                        <div>
                                    <TextField sx={{ mb:2 , width: '350px' }} id="filled-basic" label="Rango minimo de precio en USD"   
                                        variant="outlined"
                                        type="number"
                                        min="100"
                                        className="form-control mt-4"
                                        name="rangopreciomin"
                                        autoComplete="off"
                                        placeholder="Rango minimo de precio en USD"
                                        onChange={formik.handleChange}
                                    />
                                        </div>

                                        <div>
                                    <TextField sx={{ mb:2 , width: '350px' }} id="filled-basic" label="Rango maximo de precio en USD"   variant="outlined"
                                        type="number"
                                        min="100"
                                        className="form-control mt-4"
                                        name="rangopreciomax"
                                        autoComplete="off"
                                        placeholder="Rango maximo de precio en USD"
                                        onChange={formik.handleChange}
                                    />
                                        </div>
                                        
                                        <div>
                                        <TextField sx={{ mb:4 , width: '350px' }} id="filled-basic" label="Nivel de experiencia en desarrollo" variant="outlined"
                                        type="text"
                                        className="form-control mt-2"
                                        name="experiencejob"
                                        autoComplete="off"
                                        placeholder="Nivel de experiencia como desarrollador"
                                        onChange={formik.handleChange}
                                        />
                                        </div>

                                        <div>
                                        <TextField sx={{ mb:4 , width: '350px' }} id="filled-basic" label="Link de tu portafolio digital" variant="outlined"
                                        type="text"
                                        className="form-control mt-2"
                                        name="link1"
                                        autoComplete="off"
                                        placeholder="Link de tu portafolio digital"
                                        onChange={formik.handleChange}
                                        />
                                        </div>
                                        
                                    </div>
                                
                                    <div className="divider-two">    
                                        <div>
                                        <TextField sx={{ mb:4 , width: '300px' }}id="filled-basic" label="Lenguaje principal" variant="outlined"
                                        type="text"
                                        className="form-control mt-2"
                                        name="lenguajes"
                                        autoComplete="off"
                                        placeholder="Lenguaje o habilidad principal"
                                        onChange={formik.handleChange}
                                        />
                                        </div>

                                        <div>
                                        <TextField sx={{ mb:4 , width: '300px' }} id="filled-basic" label="Herramientas de desarrollo que manejas" variant="outlined"
                                        type="text"
                                        className="form-control mt-2"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        name="herramientas"
                                        autoComplete="off"
                                        placeholder="Herramientas de desarrollo que manejas"
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
                                <p className="text--register-proyect">Publicar</p>
                            
                                <button
                                    value="Publicar proyecto"
                                    type="submit"
                                    className="btn-register-proyect"
                                >
                                    Publicar servicio
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
                            <p className="text--register-proyect">¡Estás listo para encontrar clientes que quieran contratar!</p>
                
                            <Link to="/list" className="links">
                                <button className="btn-register-proyect">
                                    Ver mis servicios publicados
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

export default RegistrarServicio;