import { typesFavorites, typesFavoritesTwo } from '../types/types';

//Action CREATE FAVORITE PROJECTS Sync
export const addFavoritesSync = (item) => {
    console.log(item);
    return {
        type: typesFavorites.addfavorites,
        payload: item
    }
}

//Action CREATE FAVORITE SERVICES Sync
export const addFavoritesServSync = (item) => {
    console.log(item);
    return {
        type: typesFavoritesTwo.addfavoritesserv,
        payload: item
    }
}

//Action CREATE Product Sync
export const deleteFavoritesSync = (title, all = false) =>
    all
        ? { type: typesFavorites.removeall, payload: title }  
        : { type: typesFavorites.removeone, payload: title };
    