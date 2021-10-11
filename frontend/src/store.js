import data from "./data";
import {applyMiddleware, compose, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";

const initialState = {}; //emptyObJECT IN THE BEGINNING

//reducer function
const reducer = (state,action) =>{
    return {productsData: data} //this dosen't do anything
}
composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;

