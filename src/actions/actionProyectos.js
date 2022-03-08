import { typesProyectos } from '../types/types';
import { addDoc, collection, getDocs, query, where, doc, deleteDoc } from "@firebase/firestore";
import { db } from '../firebase/firebaseConfig';



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
         //console.log(productos);
         dispatch(listCategoriesSync(categories));
     }
 }


//Action List Project Sync
export const listCategoriesSync = (categories) => {
    return {
        type: typesProyectos.categories,
        payload: categories
    }
}




//CATEGORY Project ---------------------------------------------

//Action CATEGORY Project Async
export const categoryProjectAsync = (categoria) => {

    return async (dispatch) => {
        const projCollections = collection(db, "proyectos");
        const q = query(projCollections, where("category", "==", categoria))
        const datos = await getDocs(q);
        //console.log(datos);

        const proyecto = [];
        datos.forEach((doc) => {
            proyecto.push(doc.data())
        })
        //console.log(proyecto);
        dispatch(categoryProjectSync(proyecto))
    }
}

//Action Category Product Sync
export const categoryProjectSync = (categoria) => {
    return {
        type: typesProyectos.category,
        payload: categoria
    }
}




//SEARCH Project ---------------------------------------------

//Action Search Project Async
export const searchProjectAsync = (categoria) => {

    return async (dispatch) => {
        const projCollections = collection(db, "proyectos");
        const q = query(projCollections, where("categoria", "==", categoria))
        const datos = await getDocs(q);
        //console.log(datos);

        const proyecto = [];
        datos.forEach((doc) => {
            proyecto.push(doc.data())
        })
        //console.log(proyecto);
        dispatch(searchProjectSync(proyecto))
    }
}

//Action Search Project Sync
export const searchProjectSync = (project) => {
    return {
        type: typesProyectos.search,
        payload: project
    }
}


//SHOW DETAILS Project ---------------------------------------------

//Action Show Detail Project Async
export const showDetailProjectAsync = (title) => {

    return async (dispatch) => {
        const projCollections = collection(db, "proyectos");
        const q = query(projCollections, where("titleproject", "==", title))
        const datos = await getDocs(q);
        //console.log(datos);

        const proyecto = [];
        datos.forEach((doc) => {
            proyecto.push(doc.data())
        })
        console.log(proyecto);
        dispatch(showDetailProjectSync(proyecto))
    }
}

//Action Show Detail Project Sync
export const showDetailProjectSync = (project) => {
    return {
        type: typesProyectos.detail,
        payload: project
    }
}



//DELETE Project ---------------------------------------------

//Action Delete Project Async
export const deleteProjectAsync = (code) => {
    return async (dispatch) => {
        
        const projCollection = collection(db, "proyectos");
        const q = query(projCollection, where("codeproject", "==", code))
        //console.log(q);

        const datos = await getDocs(q);
        //console.log(datos);

        datos.forEach((docu) => {
            //console.log(docu);
            //console.log(docu.id);
            deleteDoc(doc(db, "proyectos", docu.id));
        })
        dispatch(deleteProjectSync(code));
    }
}

//Action Delete Project Sync
export const deleteProjectSync = (code) => {
    return {
        type: typesProyectos.delete,
        payload: code
    }
}

//LIST PRODUCT ---------------------------------------------

//Action List Project Async
 export const listProjectAsync = () => {
     return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "proyectos"));
        //console.log(querySnapshot);

        const proyectos = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc);
            //console.log(doc.data());
            proyectos.push({
                ...doc.data()
            })
        });
        //console.log(proyectos);
        dispatch(listProjectSync(proyectos));
    }
 }


//Action List Project Sync
export const listProjectSync = (projects) => {
    return {
        type: typesProyectos.list,
        payload: projects
    }
}




//CREATE Project ----------------------------------------------

//Action Create Project Async
export const registerProjectAsync = (newProject) => {
    return (dispatch) => {
        addDoc(collection(db,"proyectos"),newProject)
        .then(resp => {
            dispatch(registerProjectSync(newProject))
            dispatch(listProjectAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
}

//Action Create Project Sync
export const registerProjectSync = (project) => {
    return {
        type: typesProyectos.register,
        payload: project
    }
}