import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";
import {AppRootStateType, dispatch, DispatchType} from "../../redux/redux-store";


export type ProfileUserType ={
    aboutMe: string,
    contacts: {
        facebook:string,
        website: string | null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string |null,
        github: string,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small:string,
        large: string
    }
}


type RenderProps={
    profilePage: null|ProfileUserType
    setUsersProfile: (profile:ProfileUserType)=> void
}
class ProfileContainer extends React.Component<RenderProps> {
 componentDidMount() {
     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2 `
     ).then(response => {
         debugger
this.props.setUsersProfile(response.data)
     })
 }

    render() {

        return (
            <div>
                <Profile profile={this.props.profilePage}  />
            </div>
        );
    }
};


type mapStateToPropsType ={
    profilePage: null|ProfileUserType
}
type mapDispatchToPropsType ={
    setUsersProfile: (profile:ProfileUserType)=> void
}


let mapStateToProps = (state: AppRootStateType): mapStateToPropsType=>{
    return {

        profilePage: state.profilePage.profile
    }
}
let mapDispatchToProps =(dispatch: DispatchType) :mapDispatchToPropsType =>{
    return{
        setUsersProfile: (profile:ProfileUserType)=>{
            dispatch(setUsersProfile(profile))
        }
    }
}

export default  connect<mapStateToPropsType, mapDispatchToPropsType,{}, AppRootStateType>(mapStateToProps, mapDispatchToProps) (ProfileContainer);