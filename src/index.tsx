import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {v1} from "uuid";
import state, {addTaskHandler} from "./redux/state";
import {rerenderEntireTree} from "./render";
// import {MessageType, PropsDialogType} from "./components/Dialogs/Dialogs";

rerenderEntireTree()