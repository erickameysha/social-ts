import {messagePageType, MessageType} from "./state";
import {v1} from "uuid";

export type AddMessageAC = {
    type: 'ADD-MESSAGE',
    title: string
}
type messageACType = AddMessageAC
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