import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addTaskHandler, AppState, postDataType} from "../../redux/state";


type ProfileProps = {
    state: AppState
    addTaskHandler: (title: string)=>void
}

const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts  addTaskHandler={props.addTaskHandler} postData={props.state} />
        </div>
    )
}

export default Profile;