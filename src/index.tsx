import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { AppState} from "./redux/store";
import store, {AppRootStateType, dispatch} from "./redux/redux-store"
import {Provider} from "react-redux";

// import {Provider} from "react-redux";


export let  rerenderEntireTree =(state: AppRootStateType)=> {
    ReactDOM.render(
        <Provider store={store}>
        <App store={state}
            dispatch={dispatch}

        /></Provider>,
        document.getElementById('root'));

}

rerenderEntireTree(store.getState())

store.subscribe(()=>{
    rerenderEntireTree(store.getState())

})