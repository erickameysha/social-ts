import {postDataType, ProfilePageType} from "./store";
import {v1} from "uuid";

export type ProfileActionType = AddPostACType | updateNewMessageBodyActionType
    type AddPostACType=ReturnType<typeof AddPostAC>
type updateNewMessageBodyActionType  = {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    newMessage: string

}
export const AddPostAC =(title: string)=> {
    return{type: 'ADD-POST',
    title}as const
}
export const updateNewMessageBody = (newMessage: string): updateNewMessageBodyActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        newMessage: newMessage
    }as const
}
let initialState:ProfilePageType = {

    post: [
        {id: v1(), message: 'post-1'},
        {id: v1(), message: 'post-2'},
        {id: v1(), message: 'post-3'},
        {id: v1(), message: 'post-4'},
    ],
    newPostText: ''
}
export const profileReducer = (state= initialState, action: ProfileActionType) :ProfilePageType=> {

    switch (action.type) {
        case "ADD-POST":
            let newPost: postDataType = {id: v1(), message:  state.newPostText}
            return {...state, newPostText: '', post:[newPost,...state.post ]}
        case "UPDATE-NEW-MESSAGE-BODY":
            return {...state, newPostText:action.newMessage }
        default: return state
    }



}