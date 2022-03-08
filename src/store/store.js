import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { proyectosReducer } from '../reducers/proyectosReducer';
import { serviciosReducer } from '../reducers/serviciosReducer';
import { usuarioReducer } from '../reducers/usuarioReducer';
import { testReducer } from '../reducers/testReducer';
import { categoriesReducer } from '../reducers/categoriesReducer';

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    projects: proyectosReducer,
    services: serviciosReducer,
    usuario: usuarioReducer,
    test: testReducer,
    categories: categoriesReducer,
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
   
)