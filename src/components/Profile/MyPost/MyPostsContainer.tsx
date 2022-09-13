
import {AppRootStateType} from "../../../redux/redux-store";
import {ChangeEvent} from "react";
import {AddPostAC, updateNewMessageBody} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

import MyPost from "./MyPosts";
import {ProfilePageType} from "../../../redux/store";
import {Dispatch} from "redux";

type mapStateToPropsType={
    postElements: ProfilePageType

}
type mapDispatchToPropsType ={
    onPostChange: (e: ChangeEvent<HTMLInputElement>)=> void
    addPost: (newTitle:string)=> void
}
export type MyPostType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps= (state:AppRootStateType):mapStateToPropsType=>{
    return{
        postElements: state.profilePage,

    }
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return{
        onPostChange: (e: ChangeEvent<HTMLInputElement>)=> {
            let text = e.currentTarget.value
            dispatch(updateNewMessageBody(text))
        },
        addPost: (newTitle:string)=> {

                dispatch(AddPostAC(newTitle))
                dispatch(updateNewMessageBody(''))

        }
    }

}
export const MyPostContainer = connect<mapStateToPropsType, mapDispatchToPropsType,{}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(MyPost)