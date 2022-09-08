import {postDataType, ProfilePageType} from "./store";
import {v1} from "uuid";

export type ProfileActionType = AddPostACType
    type AddPostACType=ReturnType<typeof AddPostAC>

export const AddPostAC =(title: string)=> {
    return{type: 'ADD-POST',
    title}as const
}
let initialState:ProfilePageType = {

    post: [
        {id: v1(), message: 'post-1'},
        {id: v1(), message: 'post-2'},
        {id: v1(), message: 'post-3'},
        {id: v1(), message: 'post-4'},
    ]
}
export const profileReducer = (state= initialState, action: ProfileActionType) :ProfilePageType=> {

    switch (action.type) {
        case "ADD-POST":
            let newPost: postDataType = {id: v1(), message: action.title}
            state.post.push(newPost)

    }


    return state
}