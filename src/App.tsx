import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import {UsersContainer} from "./components/Users/UsersContainer";
// import UsersContainer from "./components/Users/UsersContainer";
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
                        <Route path={"/users"} element={
                           <UsersContainer/>}
                        />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;