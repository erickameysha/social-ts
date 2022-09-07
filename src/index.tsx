import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { AppState} from "./redux/store";
import store from "./redux/store"


export let  rerenderEntireTree =(state: AppState)=> {
    ReactDOM.render(
        <App
            dispatch={store.dispatch.bind(store)}
            appState={store}
        />,
        document.getElementById('root'));

}

rerenderEntireTree(store.getState())
store.subscribe(()=>{rerenderEntireTree(store._state)})