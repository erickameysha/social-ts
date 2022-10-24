import React from 'react';
import {connect} from "react-redux";
import Users from "./UsersC";
import {AppRootStateType, DispatchType} from "../../redux/redux-store";
import {
    FindUsersType,
    loc,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowAC
} from "../../redux/users-reducer";


type MapStateToPropsType = {
    users: FindUsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number

}
type MapDispatchToPropsType = {
    follow: (userID: string, followed: boolean,) => void
    setUsers: (users: Array<loc>) => void
    setCurrentPage:(currentPage: number) => void
    setTotalUsersCount: (totalCount:number) => void

}
export type RenderUsersType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}
let mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
    return {
        follow: (userID: string, followed: boolean,) => {
            dispatch(toggleFollowAC(userID, followed))
        },
        setUsers: (users: Array<loc>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage: number)=>{

            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(Users)