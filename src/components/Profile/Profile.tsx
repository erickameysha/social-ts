import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AppState, postDataType} from "../../redux/state";


type ProfileProps = {
    state: AppState
}

const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.state} />
        </div>
    )
}

export default Profile;