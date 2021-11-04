// el store también cuenta con observables 

import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import { authReducer } from '../reducers/authReducer';

import thunk from 'redux-thunk'

//permite usar middle ware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//permitir al store recibir varios reducers
const reducers = combineReducers({
    auth : authReducer
});

export const store = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(
        applyMiddleware(thunk),
    )
);