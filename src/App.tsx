import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Route,Router} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ConnectedHeaderContainer from "./components/Header/HeaderContainer";
// import UsersContainer from "./components/Users/UsersContainer";
const App = () => {

    return (

        <div className={'app-wrapper'}>
            <ConnectedHeaderContainer />
            <NavBar/>
            <div className={'app-wrapper-content'}>


                    {/*<Route path={"/dialog/*"} element={<DialogsContainer/>}/>*/}
                    {/*<Route path={"/profile/*"} element={<ProfileContainer/>}/>*/}
                    {/*<Route path={"/users"} element={<UsersContainer/>}/>*/}
                    <Route path={"/dialog/*"}>
                        <DialogsContainer/>
                    </Route>
                    <Route path={"/profile/:userId?"}>
                        <ProfileContainer />
                    </Route>
                    <Route path={"/users"}>
                        <UsersContainer/>
                    </Route>


            </div>

        </div>

    );
};

export default App;