import React from 'react'
import userPhoto from "../../assets/avatar.jpg";
import s from "./Users.module.css";
import axios from "axios";
import {RenderUsersType} from "./UsersContainer";

class Users extends React.Component<RenderUsersType> {
constructor(props: RenderUsersType) {
    super(props);
    if (this.props.users.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }
}
render() {
    return <div>
        {/*<button onClick={this.getUsers}>Get Users</button>*/}
        {
            this.props.users.users.map(u => <div key={u.id}>
                    <span>
                        <div> <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}
                                   alt=""/>
                        </div>
                        <div>
                             {u.followed ? <button onClick={() => this.props.follow(u.id, !u.followed)}>unfollow</button> :
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