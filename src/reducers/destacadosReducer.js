import { typesProyectos } from '../types/types';

const initialState = {
    featured: []
}

export const destacadosReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case typesProyectos.featured:
            return {
                featured: [...action.payload]
            }
    
        default:
            return state;
    }
}