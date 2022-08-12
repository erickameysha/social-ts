import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
// import {PropsDialogType} from "../Dialogs";


export type PropsDialogType = {

    id: string
    name: string

}
const DialogItem = (props: PropsDialogType) => {
    return <div className={s.dialog}>
        <NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
    </div>
}

export default DialogItem;