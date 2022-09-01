import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addTask, AppState, subscribe} from "./redux/state";

// import {MessageType, PropsDialogType} from "./components/Dialogs/Dialogs";
export let  rerenderEntireTree =(state: AppState)=> {
    ReactDOM.render(
        <App
            addTaskHandler={addTask}
            appState={state}
        />,
        document.getElementById('root'));

}

rerenderEntireTree(state)
subscribe(()=>{rerenderEntireTree(state)})