import { typesProyectos } from '../types/types';

const initialState = {
    projects: []
}

export const proyectosReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProyectos.register:
            return {
                projects: [action.payload]
            }
        
        case typesProyectos.list:
            return {
                projects: [...action.payload]
            }
        
        // case typesProyectos.delete:
        //     return {
        //         projects: state.projects.filter(proj => proj.codeproject !== action.payload)
        //     }
        
        case typesProyectos.search:
            return {
                projects: action.payload
            }
        
        case typesProyectos.detail:
            return {
                projects: action.payload
            }

        case typesProyectos.category:
            return {
                projects: state.projects.filter((proj) => proj.category === action.payload)
            }
    
        default:
            return state;
    }
}