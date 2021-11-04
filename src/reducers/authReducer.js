import { types } from "../types/types";

/* 
    {
        uid : 'nfuisdbfiubds',
        name : 'José'
    }
*/
export const authReducer = (state = {}, action) => {
    /* valor que ayuda a controlar las deciciones que van a pasar aquí */

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.login:
            return {
            
            }

        default :
            return state;
    }
}