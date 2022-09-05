import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { AppState} from "./redux/state";
import store from "./redux/state"


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