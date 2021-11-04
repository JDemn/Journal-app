import  { types } from '../types/types';

export const startLoginEmailPassword =(email, password) => {
    return(dispatch)=>{

        // se pueden hacer aqui cualquier petición asincrona, puede ser un fetch, un post de algo etc
        // pueden ser varios dispatch 
        setTimeout(() => {
            dispatch(login(123,'Juan')); 
        }, 3500);
    }
}
export const login = (uid, displayName) => {
    return {
        type : types.login,
        payload : {
            uid,
            displayName
        }
    } 
}