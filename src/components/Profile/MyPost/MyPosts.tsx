import React, {ChangeEvent, useState} from 'react';

import Post from "./Posts/Post";
import {v1} from "uuid";
import {ActionType, addPostAC, AppState, postDataType} from "../../../redux/state";


type MyPostType = {
    dispatch: (action: ActionType) => void
    postData: Array<postDataType>
}
const MyPost = (props: MyPostType) => {
    let [title, setTitle] = useState('')

    let postElements = props.postData.map(m => <Post
            key={m.id}
            message={m.message}
        />)
    const addPost = () => {
        debugger
        setTitle('');
        props.dispatch(addPostAC(title))
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