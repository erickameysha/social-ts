import s from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {DialogType} from "./DialogsContainer";


export const Dialogs = (props: DialogType) => {

    let dialogsElements =
        props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements =
        props.dialogsPage.message.map(message => <MessageItem key={message.id}
                                                                 message={message.message}
                                                                 id={message.id}/>)



    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {
                dialogsElements
            }
        </div>
        <div className={s.messages}>
            {
                messageElements
            }
            <input value={props.dialogsPage.newMessage}
                   onChange={props.onNewMessageChange} type="text"/>
            <button onClick={props.addPost}> post</button>
        </div>
        <div>


        </div>
    </div>
}

