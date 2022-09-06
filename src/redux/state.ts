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
type ProfilePageType = {

    post: postDataType[]
}
export type messagePageType = {
    dialogs: PropsDialogType[]
    message: MessageType[]
}
export type AppState = {
    profilePage: ProfilePageType
    messagePage: messagePageType

}


export type StoreType = {
    _state: AppState
    getState: () => AppState
    _callSubscriber: () => void
    _addPost: (title: string) => void
    _addMessage: (title: string)=> void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}


export type ActionType = AddPostACType | AddMessageAC
type AddPostACType = {
    type: 'ADD-POST',
    title: string
}
type AddMessageAC = {
    type: 'ADD-MESSAGE',
    title: string
}
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
    _addPost(title: string) {

        let newPost: postDataType = {id: v1(), message: title}
        this._state.profilePage.post.push(newPost)
        this._callSubscriber()
    },
    _addMessage(title: string){
        let newMessage: MessageType = {
            id: v1(),
            message: title
        }
        this._state.messagePage.message.push(newMessage)
        this._callSubscriber()

    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
           this._addPost(action.title)
        }else if( action.type === 'ADD-MESSAGE'){
            this._addMessage(action.title)
        }
    }
}
export const addPostAC = (title: string): AddPostACType => {
  return{
     type: 'ADD-POST', title
  }as  const
}
export const addMessageAC = (title: string): AddMessageAC => {
  return{
     type: 'ADD-MESSAGE', title
  }as  const
}


export default store