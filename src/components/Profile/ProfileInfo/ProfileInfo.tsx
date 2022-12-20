import React from 'react';
import {ProfileUserType} from "../ProfileContainer";
import Preloader from "../../preloader/Preloader";
type profileInfoType ={
    profile: null | ProfileUserType
}
const ProfileInfo = (props:profileInfoType) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="" alt="img"/>
            </div>
            <div>
                <img src={props.profile?.photos.large} alt=""/>
                ava+ decore
            </div>
        </div>
    );
};

export default ProfileInfo;