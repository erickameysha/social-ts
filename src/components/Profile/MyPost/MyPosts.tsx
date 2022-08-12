import React from 'react';

import Post from "./Posts/Post";
import {v1} from "uuid";
import {AppState, postDataType} from "../../../redux/state";


type MyPostType = {
    postData: AppState
}
const MyPost = (props: MyPostType) => {

    let postElements =
        props.postData.profilePage.post.map(m => <Post
            key={m.id}
            message={m.message}/>)

    return (
        <div>
            <div>
                My Posts
                <div>
                    <input placeholder={'message'} type="text"/>
                    <button>ADD-POST</button>
                </div>
                <div>
                    {postElements}

                </div>
            </div>
        </div>
    );
};

export default MyPost;