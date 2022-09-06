import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {postDataType} from "./components/Profile/MyPost/MyPosts";
import {ActionType, AppState, MessageType, postDataType, PropsDialogType, StoreType} from "./redux/state";

type AppPropsType = {

    appState: StoreType
    dispatch: (action: ActionType) => void
}
const App = (props: AppPropsType) => {
    const state = props.appState.getState()
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={"/dialog/*"} element={
                            <Dialogs   dispatch={props.dispatch}
                                dialogs={state.messagePage.dialogs}
                                     message={state.messagePage.message}/>}
                        />
                        <Route path={"/profile"} element={
                            <Profile post={state.profilePage.post}
                                     dispatch={props.dispatch}/>}
                        />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;