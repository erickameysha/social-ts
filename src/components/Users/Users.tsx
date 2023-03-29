import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/avatar.jpg";
import {FindUsersType, loc} from "../../redux/users-reducer";
import {Link} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PropsType = {
    follow: (userID: string, followed: boolean,) => void
    setUsers: (users: Array<loc>) => void
    setToggleIsProgress: (isProgress: boolean) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: boolean
    users: FindUsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map((p, key) => {

                return <span key={key} className={props.currentPage === p ? s.selectPage : ''}
                             onClick={() => {

                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}


        </div>
        {
            props.users.users.map(u => <div key={u.id}>
                    <span>
                        <Link to={'/profile/' + u.id}>
                         <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}
                              alt=""/>
                            </Link>
                                 <div>
                             {u.followed ?
                                 <button disabled={props.followingInProgress} onClick={() => {

                                     props.setToggleIsProgress(true)
                                     usersAPI.deleteUser(u.id)
                                         .then(response => {
                                             if (response.data.resultCode == 0) {
                                                 props.follow(u.id, !u.followed)
                                                 props.setToggleIsProgress(false)
                                             }
                                         })
                                 }}>unfollow</button> :
                                 <button disabled={props.followingInProgress} onClick={() => {
                                     props.setToggleIsProgress(true)
                                     usersAPI.addUser(u.id)
                                         .then(response => {
                                             if (response.data.resultCode == 0) {
                                                 props.follow(u.id, !u.followed)
                                                 props.setToggleIsProgress(false)
                                             }
                                         })
                                 }}>follow</button>}
                        </div>
                    </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    </span>
            </div>)
        }
    </div>
};

export default Users;