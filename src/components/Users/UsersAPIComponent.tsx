import React from 'react'
import axios from "axios";
import {FindUsersType, loc} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../preloader/Preloader";

type PropsType = {
    follow: (userID: string, followed: boolean,) => void
    setUsers: (users: Array<loc>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleFetching: (isFetching: boolean) => void
    users: FindUsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

class UsersAPIComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.setToggleFetching(true)
        console.log('props:', this.props)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials: true}
        ).then(response => {
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials:true}
        ).then(response => {
            this.props.setToggleFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> : null}

            <Users
                follow={this.props.follow}
                setUsers={this.props.setUsers}
                isFetching={this.props.isFetching}
                setTotalUsersCount={this.props.setTotalUsersCount}
                users={this.props.users} pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged.bind(this)}
            />
        </>
    }

}


export default UsersAPIComponent