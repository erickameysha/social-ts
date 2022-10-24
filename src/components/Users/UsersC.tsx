import React from 'react'
import userPhoto from "../../assets/avatar.jpg";
import s from "./Users.module.css";
import axios from "axios";
import {FindUsersType, loc} from "../../redux/users-reducer";


type PropsType = {
    follow: (userID: string, followed: boolean,) => void
    setUsers: (users: Array<loc>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount:number) => void
    users: FindUsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

class Users extends React.Component<PropsType> {

    componentDidMount() {
        console.log('props:', this.props)
        if (this.props.users.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            ).then(response => {
                this.props.setUsers(response.data.items)

              if (response.data.totalCount >= 1000){
                  this.props.setTotalUsersCount(response.data.totalCount = 70)
// сервер выдает 1430 пользователей, мы же передаем ему 350
              }


            })
        }
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        ).then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {

                    return <span className={this.props.currentPage === p ? s.selectPage : ''}
                                 onClick={() => {
                                     this.onPageChanged(p)
                                 }}>{p}</span>
                })}


            </div>
            {
                this.props.users.users.map(u => <div key={u.id}>
                    <span>
                        <div> <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}
                                   alt=""/>
                        </div>
                        <div>
                             {u.followed ?
                                 <button onClick={() => this.props.follow(u.id, !u.followed)}>unfollow</button> :
                                 <button onClick={() => this.props.follow(u.id, !u.followed)}>follow</button>}
                        </div>
                    </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        {//тут должна быть локация пользователя, но бекенщик мудак
                            /*<span>{'u.location.city'}</span>*/}
                        {/*<span>{'u.location.country'}</span>*/}
                    </span>
                </div>)
            }
        </div>
    }

}


export default Users