import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {ActionType, StoreType} from "./redux/store";
import {AppRootStateType, DispatchType} from "./redux/redux-store";

type AppPropsType = {

    store: AppRootStateType
    dispatch: DispatchType
}
const App = (props: AppPropsType) => {
    const state = props.store
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={"/dialog/*"} element={
                            <Dialogs
                                dispatch={props.dispatch}
                                dialogs={state.dialogsReducer.dialogs}
                                message={state.dialogsReducer.message}
                            />}
                        />
                        <Route path={"/profile"} element={
                            <Profile post={state.profileReducer.post}
                                     dispatch={props.dispatch}/>}
                        />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;