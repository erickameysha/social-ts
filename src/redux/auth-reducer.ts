import React from "react";
import {AddPostAC} from "./profile-reducer";


export type AuthReducerType = {
    date: {
        id: null | number,
        email: null | string,
        login: null | string
    }
    isAuth: boolean
}


type setUserDateACType = { type: 'SET_USER_DATE',date:{ id:number, login: string, email:string }}
type ActionType = setUserDateACType
const initialState: AuthReducerType = {

    date: {
        id: null,
        email: null,
        login: null

    },
    isAuth:false
}

const authReducer = (state = initialState, action: ActionType): AuthReducerType => {
    switch (action.type) {
        case "SET_USER_DATE":

            return {...state, date:{...action.date} , isAuth: true}

        default:return state
    }

}


export const setUserDateAC = (id:number, login: string, email:string): setUserDateACType => {
    return {
        type: 'SET_USER_DATE',date:{ id, login, email}
    } as const

}
export default authReducer

