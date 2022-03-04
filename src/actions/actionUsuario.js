import { types_Usuario } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where,doc,deleteDoc, updateDoc} from "@firebase/firestore";
import User from '../hooks/User';


export const GuardarUsuarioAsync =(data)=>{
    console.log(data)
    return async(dispatch)=>{
        addDoc(collection(db,"usuario"),data)
        .then(resp => {
            dispatch(GuardarUsuarioSync(data));
        })
        .catch(error => {
            console.log(error);
        })   
    }
}

export const GuardarUsuarioSync =(data)=>{
    return{
        type: types_Usuario.guardar,
        usuario: data 
    }
}

export const ListarUsuarioAsync = () => {

    const useUser = User();    

    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "usuario"));
        let bandera = true;
        querySnapshot.forEach((doc) => {
            if(doc.data().id==useUser.uid){
                let data = doc.data()
                data['id_coleccion']=doc.id
                dispatch(ListarUsuarioSync(data));
                bandera=false;
            }
        });
        if(bandera){
            dispatch(ListarUsuarioSync(null))
        }
    }
}

export const ListarUsuarioSync = (data) =>{
    return{
        type: types_Usuario.obtener,
        usuario: data
    }
}


export const ActualizaUsuarioAsync = (id, data)=>{
    console.log(id)
    return async(dispatch)=>{
        updateDoc(doc(db, "usuario", id), data);
        dispatch(ActualizaUsuarioSync(data))
        dispatch(ListarUsuarioAsync())
    }
}

export const ActualizaUsuarioSync = (data) => {
    return{
        type: types_Usuario.actualizar,
        usuario: data
    }
}