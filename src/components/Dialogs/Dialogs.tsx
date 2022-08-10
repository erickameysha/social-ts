import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

type PropsDialogType = {

    id: string
    name: string

}
const DialogItem = (props: PropsDialogType) => {
    return <div className={s.dialog}>
        <NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
    </div>
}
type PropsMessage = {
    message: string
}
const Message = (props: PropsMessage) => {
    return <div className={s.message}>{props.message}</div>
}

type DialogsArray = {
    id: string
    name: string
}
type MessageType={
    id: string
    message: string
}

const Dialogs = () => {
    let dialogsData: PropsDialogType[] = [
        {id: v1(), name: 'user-1'},
        {id: v1(), name: 'user-2'},
        {id: v1(), name: 'user-3'},
        {id: v1(), name: 'user-4433'},
    ]

    let messageData: MessageType[] = [
        {id: v1(),message: 'user-1'},
        {id: v1(),message: 'user-2'},
        {id: v1(),message: 'user-3'},
        {id: v1(),message: 'user-7545'},
    ]


    let dialogsElements= dialogsData.map(dialod=>  <DialogItem key= {dialod.id} name={dialod.name} id={dialod.id}/>)
let messageElements = messageData.map(message =>   <Message key= {message.id} message={message.message}/> )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                {/*<Message message={messageData[0].message}/>*/}
                {/*<Message message={messageData[1].message}/>*/}
                {/*<Message message={messageData[2].message}/>*/}

                {
                    messageElements
                }
            </div>
        </div>
    );
};

export default Dialogs;