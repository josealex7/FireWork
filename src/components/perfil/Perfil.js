import React from "react";
import User from "../../hooks/User";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  GuardarUsuarioAsync,
  ActualizaUsuarioAsync,
} from "../../actions/actionUsuario";
import { ListarUsuarioAsync } from "../../actions/actionUsuario";

// CSS
import "./perfil.css";

const Perfil = () => {
  
  const dispatch = useDispatch();
  dispatch(ListarUsuarioAsync());

  const { datosUsuario } = useSelector((store) => store.usuario);
  // const { test } = useSelector((store) => store.test);

  const useUser = User();

  const formik = useFormik({
    initialValues: {
      habilidades: "",
      portafolio: "",
      sobre_mi: "",
      certificaciones: "",
      idiomas: "",
    },
    validationSchema: Yup.object({
      /*habilidades: Yup.string().required(),
            portafolio: Yup.string().required(),
            sobre_mi: Yup.string().required(),
            certificaciones: Yup.string().required(),
            idiomas: Yup.string().required()*/
    }),
    onSubmit: (data) => {
      if (datosUsuario != null && datosUsuario !== undefined) {
        if (datosUsuario != null) {
          if (data.habilidades === "") {
            data["habilidades"] = datosUsuario.habilidades;
          }
          if (data.portafolio === "") {
            data["portafolio"] = datosUsuario.portafolio;
          }
          if (data.sobre_mi === "") {
            data["sobre_mi"] = datosUsuario.sobre_mi;
          }
          if (data.certificaciones === "") {
            data["certificaciones"] = datosUsuario.certificaciones;
          }
          if (data.idiomas === "") {
            data["idiomas"] = datosUsuario.idiomas;
          }
          data["id"] = useUser.uid;
          console.log("actualizar");
          console.log(data);
          dispatch(ActualizaUsuarioAsync(datosUsuario.id_coleccion, data));
        } else {
          alert("debe ingresar la informacion");
        }
      } else {
        data["id"] = useUser.uid;
        console.log("agregar");
        console.log(data);
        dispatch(GuardarUsuarioAsync(data));
      }
    },
  });

  return (
    <>
      <h1 className="title">Mi perfil</h1>
      <div className="container">
        <div className="container-info">
          <div className="Row">
            <div className="col">
              <img
                className="photouser"
                src={useUser.photoURL}
                alt="photoUser"
              />
            </div>
            <div className="col">
              <h1 className="title-name">{useUser.name}</h1>
              <h2 className="title-email">{useUser.email}</h2>
              <div className="container-star">
                <img
                  className="imgStar"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646340516/icons8-estrella-relleno-48_sx2tz4.png"
                  alt="star"
                />
                <img
                  className="imgStar"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646340516/icons8-estrella-relleno-48_sx2tz4.png"
                  alt="star"
                />
                <img
                  className="imgStar"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646340516/icons8-estrella-relleno-48_sx2tz4.png"
                  alt="star"
                />
                <img
                  className="imgStar"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646340516/icons8-estrella-relleno-48_sx2tz4.png"
                  alt="star"
                />
                <img
                  className="imgStar"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646340516/icons8-estrella-relleno-48_sx2tz4.png"
                  alt="star"
                />{" "}
                <span className="span-calif">Calificaciòn</span>
              </div>
              <div className="container-pais">
                <img
                  className="imagenColombia"
                  src="https://res.cloudinary.com/app-firework1/image/upload/v1646191805/Flag_of_Colombia_tfswhg.png"
                  alt="bandera colombia"
                />
                <span className="pais">Colombia</span>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="container-area">
            <textarea
              className="text-area-info"
              defaultValue={
                datosUsuario != null ? datosUsuario.habilidades : ""
              }
              placeholder="Habilidades"
              name="habilidades"
              onChange={formik.handleChange}
            />
            <textarea
              className="text-area-info"
              defaultValue={datosUsuario != null ? datosUsuario.portafolio : ""}
              placeholder="Portafolio"
              name="portafolio"
              onChange={formik.handleChange}
            />
            <textarea
              className="text-area-info"
              defaultValue={datosUsuario != null ? datosUsuario.sobre_mi : ""}
              placeholder="Sobre mi"
              name="sobre_mi"
              onChange={formik.handleChange}
            />
            <textarea
              className="text-area-info"
              defaultValue={
                datosUsuario != null ? datosUsuario.certificaciones : ""
              }
              placeholder="Certificaciones"
              name="certificaciones"
              onChange={formik.handleChange}
            />
            <textarea
              className="text-area-info"
              defaultValue={datosUsuario != null ? datosUsuario.idiomas : ""}
              placeholder="Idiomas"
              name="idiomas"
              onChange={formik.handleChange}
            />
          </div>
          <div className="containerBtn">
            <button className="btn-service" type="submit">
              {datosUsuario != null ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
        <div>
          <h2 className="componente_test">Insignias adquiridas</h2>

          <div>
              <p className="cero-insignias">Aún no haz adquirido ninguna insignia</p>
            </div>
          {/* {
            test != undefined?
            <div>
              {
                test.map((testIndividual=>(
                  <div>
                    <h1>{testIndividual.nombre_prueba}</h1>
                    
                  </div>
                )))
              }
            </div>
            :
            <div>
              <h1>Aún no haz adquirido ninguna insignia</h1>
            </div>
          } */}
        </div>
      </div>
    </>
  );
};
export default Perfil;