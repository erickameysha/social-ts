import React from 'react'
import {FindUsersType, loc} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../preloader/Preloader";
import {usersAPI} from "../../api/api";

type PropsType = {
    follow: (userID: string, followed: boolean,) => void
    setUsers: (users: Array<loc>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleFetching: (isFetching: boolean) => void
    setToggleIsProgress: (isProgress: boolean)=> void
    users: FindUsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}

class UsersAPIComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.setToggleFetching(true)
        console.log('props:', this.props)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setToggleFetching(false)
                if (response.data.totalCount >= 1000) {
                    this.props.setTotalUsersCount(response.data.totalCount = 70)
// сервер выдает 1430 пользователей, мы же передаем ему 350
                }
            })

    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setToggleFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> : null}

            <Users
                followingInProgress={ this.props.followingInProgress}
                follow={this.props.follow}
                setUsers={this.props.setUsers}
                isFetching={this.props.isFetching}
                setTotalUsersCount={this.props.setTotalUsersCount}
                users={this.props.users} pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged.bind(this)}
                setToggleIsProgress={ this.props.setToggleIsProgress}

            />
        </>
    }

}


export default UsersAPIComponent