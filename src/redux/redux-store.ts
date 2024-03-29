import {combineReducers, legacy_createStore} from "@reduxjs/toolkit";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import authReducer from "./auth-reducer";


let rootReducer= combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer
})


export let store = legacy_createStore(rootReducer)
export const dispatch = store.dispatch

export type AppRootStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export type DispatchType = typeof store.dispatch
// @ts-ignore
window.store = store
