import React from 'react';
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType,postDataType} from "../../redux/store";
import {DispatchType} from "../../redux/redux-store";


type ProfileProps = {
    post: Array<postDataType>
    dispatch: DispatchType
}

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts />
        </div>
    )
}

export default Profile;