import React, {ChangeEvent} from 'react';

import Post from "./Posts/Post";
import {ProfilePageType} from "../../../redux/store";
import {MyPostType} from "./MyPostsContainer";



const MyPost = (props: MyPostType) => {

    let postElements = props.postElements.post.map(m => <Post
        key={m.id}
        message={m.message}
    />)

   const addPostHandler = (value: string) => {
     if (value.trim()!== ''){
         props.addPost(value)

     }
   }
    return <div>
        <div>
            My Posts
            <div>
                <input onChange={props.onPostChange} value={props.postElements.newPostText} placeholder={'message'} type="text"/>
                <button onClick={()=> addPostHandler(props.postElements.newPostText)}>ADD-POST</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    </div>

}

export default MyPost;