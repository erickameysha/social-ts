import {messagePageType, MessageType} from "./store";
import {v1} from "uuid";


export const AddMessageAC = ( title: string)=> {
  return {
      type: 'ADD-MESSAGE',
      title
  }as const
}
type AddMessageACType = ReturnType<typeof AddMessageAC>
export type messageACType = AddMessageACType

let initialState:messagePageType ={
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
export const dialogsReducer = (state = initialState, action: messageACType): messagePageType => {
debugger
    switch (action.type) {
        case "ADD-MESSAGE":

            let newMessage: MessageType = {
                id: v1(),
                message: action.title
            }
            state.message.push(newMessage)
            return state
        default: return state
    }

}