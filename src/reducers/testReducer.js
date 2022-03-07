import {types_Test} from '../types/types';

const initialState = {
    test: []
}

export const testReducer = (state = {}, action) => {
    switch (action.type) {
        case types_Test.obtener:
            return{
                test: action.test
            }
        case types_Test.enviar:
            return{
                test: [...action.test]
            }
        default:
          return state;
    }
}