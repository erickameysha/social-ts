import React from 'react';
import s from "../Dialogs.module.css";
import {MessageType} from "../../../redux/store";


const MessageItem = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}


export default MessageItem;