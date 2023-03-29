import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType, DispatchType} from "../../redux/redux-store";
import {
    FindUsersType,
    loc,
    setCurrentPageAC, setToggleFetchingAC, setToggleIsProgressAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowAC
} from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";


type MapStateToPropsType = {
    users: FindUsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean

}
type MapDispatchToPropsType = {
    follow: (userID: string, followed: boolean,) => void
    setUsers: (users: Array<loc>) => void
    setCurrentPage:(currentPage: number) => void
    setTotalUsersCount: (totalCount:number) => void
    setToggleFetching: (isFetching: boolean) => void
    setToggleIsProgress: (isProgress: boolean)=> void


}
export type RenderUsersType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
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
        },
        setToggleFetching: (isFetching: boolean)=> {
            dispatch(setToggleFetchingAC(isFetching))
        },
        setToggleIsProgress: (isProgress: boolean)=>{
            dispatch(setToggleIsProgressAC(isProgress))
        }

    }
}


export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)