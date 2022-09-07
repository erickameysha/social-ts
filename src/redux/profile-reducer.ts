import {postDataType, ProfilePageType} from "./store";
import {v1} from "uuid";

export type ProfileActionType = AddPostACType
    type AddPostACType=ReturnType<typeof AddPostAC>

export const AddPostAC =(title: string)=> {
    return{type: 'ADD-POST',
    title}as const
}
export const profileReducer = (state: ProfilePageType, action: ProfileActionType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: postDataType = {id: v1(), message: action.title}
            state.post.push(newPost)

    }


    return state
}