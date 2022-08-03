import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";
const Profile = () => {

    return (
        <div className={s.content}>
            <div >
                <img src="" alt="content logo"/>
            </div>
            <div>
                ava+ decoration
            </div>
           <MyPosts />
        </div>
    );
};

export default Profile;