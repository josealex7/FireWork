import {types_Usuario} from '../types/types';

const initialState = {
    datosUsuario: {}
}

export const usuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case types_Usuario.obtener:

        return{
            datosUsuario: action.usuario
        }
        case types_Usuario.guardar:
            return{
                datosUsuario: action.usuario
            }
        case types_Usuario.actualizar:
            return {
                datosUsuario: action.usuario
            }

        default:
          return state;
    }
}