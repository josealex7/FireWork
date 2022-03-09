import { typesFavorites } from '../types/types';

export const initialState = {
    favorite: [],
}

export function favoriteReducer(state = initialState, action) {
    switch (action.type) {
        case typesFavorites.addfavorites: {
            let newItem = action.payload
            //console.log(newItem);

            let itemInFavorite = state.favorite.find((item) => item.titleproject === newItem.titleproject);

           return itemInFavorite
           ? {
                ...state,
                favorite: state.favorite.map((item) =>
                item.titleproject === newItem.titleproject
                ? { ...item, quantity: item.quantity + 1 }
                : item
                ),
             }
             : {
                ...state,
                favorite: [...state.favorite, { ...newItem, quantity: 1 }],
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