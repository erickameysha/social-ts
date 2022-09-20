import React from 'react';
import {connect} from "react-redux";
import Users from "./UsersC";
import {AppRootStateType, DispatchType} from "../../redux/redux-store";
import {FindUsersType, loc, setUsersAC, toggleFollowAC} from "../../redux/users-reducer";


type MapStateToPropsType ={
    users: FindUsersType
}
type MapDispatchToPropsType = {
    follow:  (userID: string, followed: boolean,)=> void
    setUsers:(users: Array<loc>)=> void
}
export type RenderUsersType =  MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = ( state: AppRootStateType):MapStateToPropsType=> {
    return{ users:state.users}
}
let mapDispatchToProps= (dispacth: DispatchType): MapDispatchToPropsType=> {
    return{
        follow: (userID: string, followed: boolean,)=> {
            dispacth(toggleFollowAC(userID,followed))
        },
        setUsers:(users: Array<loc>)=>{
            dispacth(setUsersAC(users))
    }
    }
}
export const UsersContainer = connect<MapStateToPropsType,MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps,mapDispatchToProps)(Users)