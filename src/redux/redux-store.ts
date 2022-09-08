import {combineReducers, createStore, legacy_createStore} from "@reduxjs/toolkit";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


let reducers= combineReducers({
    profileReducer,
    dialogsReducer
})


let store = legacy_createStore(reducers)
export const dispatch = store.dispatch

export type AppRootStateType = ReturnType<typeof reducers>
export type StoreType = typeof store
export type DispatchType = typeof store.dispatch
// @ts-ignore
window.store = store
export default store
