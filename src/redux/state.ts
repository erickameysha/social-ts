import {v1} from "uuid";


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
type ProfilePageType ={

    post: postDataType[]
}
type messagePageType ={
    dialogs: PropsDialogType[]
    message: MessageType[]
}
export type AppState = {
    profilePage: ProfilePageType
    messagePage: messagePageType

}

let state: AppState  = {
    profilePage: {

        post: [
            {id: v1(), message: 'post-1'},
            {id: v1(), message: 'post-2'},
            {id: v1(), message: 'post-3'},
            {id: v1(), message: 'post-4'},
        ]
    },
    messagePage: {
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

}
export default state