import React, {ChangeEvent, useState} from 'react';

import Post from "./Posts/Post";
import {v1} from "uuid";
import {addTaskHandler, AppState, postDataType} from "../../../redux/state";


type MyPostType = {
    addTaskHandler: (title:string)=> void
    postData: AppState
}
const MyPost = (props: MyPostType) => {
    let [title, setTitle] = useState('')

    let postElements =
        props.postData.profilePage.post.map(m => <Post
            key={m.id}
            message={m.message}/>)
    const addPost = () => {
        setTitle('');
        props.addTaskHandler(title)
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