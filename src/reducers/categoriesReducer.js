import { typesProyectos } from '../types/types';

const initialState = {
    categories: []
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case typesProyectos.categories:
            return {
                categories: [...action.payload]
            }
    
        default:
            return state;
    }
}