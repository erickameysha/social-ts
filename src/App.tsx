import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Routes, Route} from "react-router-dom";
// import {postDataType} from "./components/Profile/MyPost/MyPosts";
import {addTaskHandler, AppState, MessageType, postDataType, PropsDialogType} from "./redux/state";

type AppPropsType ={
    appState: AppState
    addTaskHandler: (title: string)=> void
}
const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                {/*<Dialogs/>*/}
                    <Route path={"/dialog/*"} element={<Dialogs state={props.appState}/>}/>
                    <Route path={"/profile"} element={<Profile state={props.appState}  addTaskHandler={props.addTaskHandler}/>}/>
                </Routes>
            </div>

        </div>
        </BrowserRouter>
    );
};

export default App;