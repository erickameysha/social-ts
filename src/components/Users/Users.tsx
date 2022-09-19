import React from 'react';
import {RenderUsersType} from "./UsersContainer";
import s from  './Users.module.css'
import {v1} from "uuid";
import axios from "axios";
import {loc} from "../../redux/users-reducer";
import userPhoto from  '../../assets/avatar.jpg'
const Users = (props: RenderUsersType) => {


if (props.users.users.length === 0) {

   axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=> {

       props.setUsers(response.data.items)
   })

}

    return (
        <div>
            {
                props.users.users.map(u=> <div key={u.id}>
                    <span>
                        <div> <img src={u.photos.small != null? u.photos.small : userPhoto} className={s.userPhoto} alt=""/>
                        </div>
                        <div>
                             {u.followed? <button onClick={()=> props.follow(u.id, !u.followed)}>unfollow</button>: <button onClick={()=> props.follow(u.id, !u.followed)}>follow</button>}
                        </div>
                    </span>
                    <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                        <span>{'u.location.city'}</span>
                        <span>{'u.location.country'}</span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;