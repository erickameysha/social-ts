import React from 'react';
import {RenderUsersType} from "./UsersContainer";
import s from  './Users.module.css'
import {v1} from "uuid";
const Users = (props: RenderUsersType) => {
    debugger

        props.setUsers([
            {
                id: v1(),
                photoURL:
                    'https://roscongress.org/upload/resize_cache/iblock/16b/289_289_2/dfe711a4_cfb4_4a51_937a_7f9f0ac9a70c.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'am boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photoURL:
                    'https://roscongress.org/upload/resize_cache/iblock/16b/289_289_2/dfe711a4_cfb4_4a51_937a_7f9f0ac9a70c.jpg',
                followed: false,
                fullName: 'sasha',
                status: 'am ',
                location: {city: 'Moscow', country: 'russia'}
            },])


    return (
        <div>
            {
                props.users.users.map(u=> <div key={u.id}>
                    <span>
                        <div> <img src={u.photoURL} className={s.userPhoto} alt=""/>
                        </div>
                        <div>
                             {u.followed? <button onClick={()=> props.follow(u.id, !u.followed)}>unfollow</button>: <button onClick={()=> props.follow(u.id, !u.followed)}>follow</button>}
                        </div>
                    </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                        <span>{u.location.city}</span>
                        <span>{u.location.country}</span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;