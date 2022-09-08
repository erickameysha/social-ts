import React, {ChangeEvent, useState} from 'react';

import Post from "./Posts/Post";

import {ActionType, postDataType} from "../../../redux/store";

import {AddPostAC} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {DispatchType} from "../../../redux/redux-store";


type MyPostType = {
    dispatch: DispatchType
    postData: Array<postDataType>
}
const MyPost = (props: MyPostType) => {
    let [title, setTitle] = useState('')
const dispatch =useDispatch()
    let postElements = props.postData.map(m => <Post
            key={m.id}
            message={m.message}
        />)
    const addPost = () => {
        debugger
        setTitle('');
        dispatch(AddPostAC(title))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <div>
            <div>
                My Posts
                <div>
                    <input onChange={onChangeHandler} value={title} placeholder={'message'} type="text"/>
                    <button onClick={addPost}>ADD-POST</button>
                </div>
                <div>
                    {postElements}
                </div>
            </div>
        </div>
    );
};

export default MyPost;