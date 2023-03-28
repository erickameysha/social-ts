import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/avatar.jpg";
import {FindUsersType, loc} from "../../redux/users-reducer";
import {Link} from "react-router-dom";
import {addUser, deleteUser} from "../../api/api";

type PropsType = {
    follow: (userID: string, followed: boolean,) => void
    setUsers: (users: Array<loc>) => void

    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
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
                                 <button onClick={() => {
                                     deleteUser(u.id)
                                         .then(response => {
                                             if (response.data.resultCode == 0) {
                                                 props.follow(u.id, !u.followed)
                                             }
                                         })
                                 }}>unfollow</button> :
                                 <button onClick={() =>
                                     addUser(u.id)
                                         .then(response => {
                                             if (response.data.resultCode == 0) {
                                                 props.follow(u.id, !u.followed)
                                             }
                                         })}>follow</button>}
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