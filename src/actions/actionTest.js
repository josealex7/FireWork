import { types_Test } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where,doc,deleteDoc, updateDoc} from "@firebase/firestore";
import User from '../hooks/User';


export const enviarTestAsync =(data)=>{
    console.log(data)
    return async(dispatch)=>{
        addDoc(collection(db,"test"),data)
        .then(resp => {
            dispatch(enviarTestSync(data));
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const enviarTestSync =(data)=>{
    return{
        type: types_Test.enviar,
        usuario: data 
    }
}

export const obtenerAsync = () => {
    const useUser = User();
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "test"));
        const productos = [];
        querySnapshot.forEach((doc) => {
            if(doc.data().id_user==useUser.uid){
                productos.push({
                    ...doc.data()
                })
            }            
        });
        console.log(productos)
        if(productos.length==0){
            dispatch(obtenerSync(undefined));
        } else {
            dispatch(obtenerSync(productos));
        }
        
    }
}

export const obtenerSync = (data) =>{
    return{
        type: types_Test.obtener,
        test: data
    }
}