import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {v1} from "uuid";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
// import {MessageType} from "../../index";
import {ActionType, addMessageAC, AppState, messagePageType, MessageType, PropsDialogType} from "../../redux/state";

type DialogsPropsType = {
    dispatch: (action: ActionType) => void

    message: Array<MessageType>
    dialogs: Array<PropsDialogType>
}
const Dialogs = (props: DialogsPropsType) => {

    let [title, setTitle] = useState('')


    const addPost = () => {
        setTitle('')
props.dispatch(addMessageAC(title))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        setTitle(text)
    }


    let dialogsElements =
        props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements =
        props.message.map(message => <MessageItem key={message.id}
                                                  message={message.message}
                                                  id={message.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                {
                    messageElements
                }
                <input value={title} onChange={onChangeHandler} type="text"/>
                <button onClick={addPost}> post</button>
            </div>
            <div>


            </div>
        </div>
    );
};

export default Dialogs;