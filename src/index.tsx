import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {v1} from "uuid";
import state from "./redux/state";
// import {MessageType, PropsDialogType} from "./components/Dialogs/Dialogs";


ReactDOM.render(
    <App

       appState={state}/>,
  document.getElementById('root')
);
