import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostsContainer";
import {ProfileUserType} from "./ProfileContainer";

type profileType ={
    profile: null | ProfileUserType
}
const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;