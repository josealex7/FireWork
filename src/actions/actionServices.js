import { typesServices } from '../types/types';
import { addDoc, collection, getDocs, query, where, doc, deleteDoc } from "@firebase/firestore";
import { db } from '../firebase/firebaseConfig';

//CATEGORIES Service ---------------------------------------------

//Action CATEGORY Service Async
export const categoryServiceAsync = (category) => {

    return async (dispatch) => {
        const servCollections = collection(db, "servicios");
        const q = query(servCollections, where("categoryproject", "==", category))
        const datos = await getDocs(q);
        //console.log(datos);

        const servicio = [];
        datos.forEach((doc) => {
            servicio.push(doc.data())
        })
        //console.log(servicio);
        dispatch(categoryServiceSync(servicio))
    }
}

//Action Category Service Sync
export const categoryServiceSync = (category) => {
    return {
        type: typesServices.category,
        payload: category
    }
}




//LIST CATEGORIES ---------------------------------------------

//Action List CATEGORIES Async
 export const listCategoriesAsync = () => {
     return async (dispatch) => {

         const querySnapshot = await getDocs(collection(db, "categories"));
         //console.log(querySnapshot);

         const categories = [];
         querySnapshot.forEach((doc) => {
            //console.log(doc);
            //console.log(doc.data());
             categories.push({
                 ...doc.data()
             })
         });
         //console.log(servicios);
         dispatch(listCategoriesSync(categories));
     }
 }


//Action List Service Sync
export const listCategoriesSync = (categories) => {
    return {
        type: typesServices.categories,
        payload: categories
    }
}






//SEARCH Service ---------------------------------------------

//Action Search Service Async
export const searchServiceAsync = (service) => {

    return async (dispatch) => {
        const servCollections = collection(db, "servicios");
        const q = query(servCollections, where("categoryproject", "==", service))
        const datos = await getDocs(q);
        //console.log(datos);

        const servicio = [];
        datos.forEach((doc) => {
            servicio.push(doc.data())
        })
        //console.log(servicio);
        dispatch(searchServiceSync(servicio))
    }
}

//Action Search Service Sync
export const searchServiceSync = (service) => {
    return {
        type: typesServices.search,
        payload: service
    }
}


//SHOW DETAILS Project ---------------------------------------------

//Action Show Detail Service Async
export const showDetailServiceAsync = (titulo) => {

    return async (dispatch) => {
        const servCollections = collection(db, "servicios");
        const q = query(servCollections, where("tituloservice", "==", titulo))
        const datos = await getDocs(q);
        //console.log(datos);

        const servicio = [];
        datos.forEach((doc) => {
            servicio.push(doc.data())
        })
        console.log(servicio);
        dispatch(showDetailServiceSync(servicio))
    }
}

//Action Show Detail Service Sync
export const showDetailServiceSync = (service) => {
    return {
        type: typesServices.detail,
        payload: service
    }
}



//DELETE Project ---------------------------------------------

//Action Delete Service Async
export const deleteServiceAsync = (code) => {
    return async (dispatch) => {
        
        const projCollection = collection(db, "servicios");
        const q = query(projCollection, where("codeservice", "==", code))
        //console.log(q);

        const datos = await getDocs(q);
        //console.log(datos);

        datos.forEach((docu) => {
            //console.log(docu);
            //console.log(docu.id);
            deleteDoc(doc(db, "servicios", docu.id));
        })
        dispatch(deleteServiceSync(code));
    }
}

//Action Delete Service Sync
export const deleteServiceSync = (code) => {
    return {
        type: typesServices.delete,
        payload: code
    }
}

//LIST PRODUCT ---------------------------------------------

//Action List Service Async
 export const listServiceAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "servicios"));
        //console.log(querySnapshot);

        const servicios = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc);
            //console.log(doc.data());
            servicios.push({
                 ...doc.data()
            })
        });
        //console.log(servicios);
        dispatch(listServiceSync(servicios));
    }
}


//Action List Service Sync
export const listServiceSync = (services) => {
    return {
        type: typesServices.list,
        payload: services
    }
}




//CREATE Service ----------------------------------------------

//Action Create Service Async
export const registerServiceAsync = (newService) => {
    return (dispatch) => {
        addDoc(collection(db,"servicios"),newService)
        .then(resp => {
            dispatch(registerServiceSync(newService))
            //dispatch(listServiceAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
}

//Action Create Service Sync
export const registerServiceSync = (service) => {
    return {
        type: typesServices.register,
        payload: service
    }
}