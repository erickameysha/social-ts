import {postDataType, ProfilePageType} from "./state";
import {v1} from "uuid";

type ProfileActionType = AddPostACType

export type AddPostACType = {
    type: 'ADD-POST',
    title: string
}
export const profileReducer = (state: ProfilePageType, action: ProfileActionType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: postDataType = {id: v1(), message: action.title}
            state.post.push(newPost)

    }


    return state
}