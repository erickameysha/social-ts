import React from 'react';
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType,postDataType} from "../../redux/store";


type ProfileProps = {
    post: Array<postDataType>
    dispatch: (action: ActionType)=>void
}

const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts  dispatch={props.dispatch} postData={props.post} />
        </div>
    )
}

export default Profile;