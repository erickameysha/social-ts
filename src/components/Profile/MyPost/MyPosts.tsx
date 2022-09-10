import React, {ChangeEvent, useState} from 'react';

import Post from "./Posts/Post";

import {ActionType, postDataType} from "../../../redux/store";

import {AddPostAC} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {DispatchType} from "../../../redux/redux-store";
import StoreContext from '../../../StoreContext';


type MyPostType = {
    dispatch: DispatchType
    postData: Array<postDataType>
}
const MyPost = () => {
    let [title, setTitle] = useState('')
    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                    let state = store.getState()


                    let postElements = state.profileReducer.post.map(m => <Post
                        key={m.id}
                        message={m.message}
                    />)
                    const addPost = () => {
                        setTitle('');
                        store.dispatch(AddPostAC(title))
                    }
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        setTitle(e.currentTarget.value)
                    }
                    return(
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
                    )
                }
            }
        </StoreContext.Consumer>



    );
};

export default MyPost;