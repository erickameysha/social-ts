import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
const App = () => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={"/dialog/*"} element={
                            <DialogsContainer />
                        }
                        />
                        <Route path={"/profile"} element={
                            <Profile />}
                        />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;