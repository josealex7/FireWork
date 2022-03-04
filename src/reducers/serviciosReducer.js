import { typesServices } from '../types/types';

const initialState = {
    services: []
}

export const serviciosReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesServices.register:
            return {
                services: [action.payload]
            }
        
        case typesServices.list:
            return {
                services: [...action.payload]
            }
        
        // case typesServices.delete:
        //     return {
        //         services: state.services.filter(serv => serv.codeproject !== action.payload)
        //     }
        
        // case typesServices.search:
        //     return {
        //         services: action.payload
        //     }
        
        case typesServices.detail:
            return {
                services: action.payload
            }

        // case typesServices.category:
        //     return {
        //         services: state.services.filter((serv) => serv.categoryproject === action.payload)
        //     }
    
        default:
            return state;
    }
}