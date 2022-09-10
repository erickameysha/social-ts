import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {ActionType, MessageType, PropsDialogType} from "../../redux/store";
import {AddMessageAC} from "../../redux/dialogs-reducer";
import {DispatchType} from "../../redux/redux-store";
import StoreContext from '../../StoreContext';

type DialogsPropsType = {
    dispatch: DispatchType

    message: Array<MessageType>
    dialogs: Array<PropsDialogType>
}
const Dialogs = () => {

//     let [title, setTitle] = useState('')
//
//
//     const addPost = () => {
//         setTitle('')
// props.dispatch(AddMessageAC(title))
//     }

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     let text = e.currentTarget.value
    //     setTitle(text)
    // }
    //
    let [title, setTitle] = useState('')

    return (
        <StoreContext.Consumer>{(store) => {
            let state = store.getState()




            const addPost = () => {
                setTitle('')
                store.dispatch(AddMessageAC(title))
            }


            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                let text = e.currentTarget.value
                setTitle(text)
            }

            let dialogsElements =
                state.dialogsReducer.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
            let messageElements =
                state.dialogsReducer.message.map(message => <MessageItem key={message.id}
                                                          message={message.message}
                                                          id={message.id}/>)


            return (<div className={s.dialogs}>
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
            </div>)
        }

        }

        </StoreContext.Consumer>
    );
};

export default Dialogs;