import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {v1} from "uuid";
import state, {addTaskHandler} from "./redux/state";
// import {MessageType, PropsDialogType} from "./components/Dialogs/Dialogs";


 export let  rerenderEntireTree =()=> {
    ReactDOM.render(
        <App
            addTaskHandler={addTaskHandler}
            appState={state}
        />,
        document.getElementById('root'));

}
