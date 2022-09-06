import {v1} from "uuid";
import {AddPostACType, profileReducer} from "./profile-reducer";
import {AddMessageAC, dialogsReducer} from "./dialogs-reducer";

export type PropsDialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type postDataType = {
    id: string
    message: string
}
export type ProfilePageType = {

    post: postDataType[]
}
export type messagePageType = {
    dialogs: PropsDialogType[]
    message: MessageType[]
}
export type AppState = {
    profilePage: ProfilePageType
    dialogsPage: messagePageType

}
export type StoreType = {
    _state: AppState
    getState: () => AppState
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}
export type ActionType = AddPostACType | AddMessageAC

let store: StoreType = {
    _state: {
        profilePage: {

            post: [
                {id: v1(), message: 'post-1'},
                {id: v1(), message: 'post-2'},
                {id: v1(), message: 'post-3'},
                {id: v1(), message: 'post-4'},
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'user-1'},
                {id: v1(), name: 'user-2'},
                {id: v1(), name: 'user-3'},
                {id: v1(), name: 'user-4433'},
            ],
            message: [
                {id: v1(), message: 'user-1'},
                {id: v1(), message: 'user-2'},
                {id: v1(), message: 'user-3'},
                {id: v1(), message: 'user-7545'},
            ],
        }

    },
    _callSubscriber() {
        console.log('grgr')
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
this._state.profilePage= profileReducer(this._state.profilePage, action as AddPostACType )
this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action as AddMessageAC )
    }
}
export const addPostAC = (title: string): AddPostACType => {
    return {
        type: 'ADD-POST', title
    } as const
}
export const addMessageAC = (title: string): AddMessageAC => {
    return {
        type: 'ADD-MESSAGE', title
    } as const
}
export default store