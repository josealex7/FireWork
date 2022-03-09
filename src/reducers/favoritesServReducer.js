import { typesFavoritesTwo } from '../types/types';

export const initialState = {
    favoritev: [],
}

export function favoriteServReducer(state = initialState, action) {
    switch (action.type) {
            
         case typesFavoritesTwo.addfavoritesserv: {
            let newItemV = action.payload
            console.log(newItemV);

            let itemInFavoritev = state.favoritev.find((item) => item.tituloservice === newItemV.tituloservice);

           return itemInFavoritev
           ? {
                ...state,
                favoritev: state.favoritev.map((item) =>
                item.tituloservice === newItemV.tituloservice
                ? { ...item, quantity: item.quantity + 1 }
                : item
                ),
             }
             : {
                ...state,
                favoritev: [...state.favoritev, { ...newItemV, quantity: 1 }],
             };
    

        }
        
        // case typesFavorites.removeone: {

        //     let itemToDelete = state.cart.find((item) => item.id === action.payload);

        //     return itemToDelete.quantity > 1
        //         ? {
        //             ...state,
        //             cart: state.cart.map((item) =>
        //             item.id === action.payload
        //         ? { ...item, quantity: item.quantity - 1 }
        //         :    item
        //             ),
        //           }
        //         : {
        //             ...state,
        //             cart: state.cart.filter((item) => item.id !== action.payload),
        //           };
        // }
        
        // case typesFavorites.removeall: {
        //     return {
        //         ...state,
        //         cart: state.cart.filter((item) => item.id !== action.payload),
        //     };
        // }
        
    
        default:
            return state;
    }
}