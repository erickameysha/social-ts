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
export const dialogsReducer = (state: messagePageType, action: messageACType) => {

    switch (action.type) {
        case "ADD-MESSAGE":

            let newMessage: MessageType = {
                id: v1(),
                message: action.title
            }
            state.message.push(newMessage)
            return state
    }
}