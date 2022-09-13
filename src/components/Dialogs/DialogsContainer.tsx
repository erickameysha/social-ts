
import React, {ChangeEvent} from 'react';
import {AddMessageAC, updateNewMessageBody} from "../../redux/dialogs-reducer";

import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import  {AppRootStateType, DispatchType} from "../../redux/redux-store";
import {store} from "../../redux/redux-store";
import {messagePageType} from "../../redux/store";

type MapStatePropsType = {
    dialogsPage: messagePageType
}

type MapDispatchPropsType = {
    onNewMessageChange: (e:ChangeEvent<HTMLInputElement>) => void
    addPost: () => void
}

export type DialogType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType) : MapStatePropsType=>{
    return  {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps= (dispatch: DispatchType)=> {
    return{
        onNewMessageChange :(e:ChangeEvent<HTMLInputElement>) => {
            let text = e.currentTarget.value
        dispatch(updateNewMessageBody(text))
        },
        addPost : () => {
            if (store.getState().dialogsPage.newMessage.trim() !== ''){
            dispatch(AddMessageAC(store.getState().dialogsPage.newMessage))
           dispatch(updateNewMessageBody(''))
        }}
    }
}
export const DialogsContainer = connect<MapStatePropsType,MapDispatchPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)
