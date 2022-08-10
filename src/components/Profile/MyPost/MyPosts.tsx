import React from 'react';

import Post from "./Posts/Post";
import {v1} from "uuid";
type postDataType={
    id: string
    message:string
}
const Profile = () => {
    let postData: postDataType[] = [
        {id: v1(),message: 'post-1'},
        {id: v1(),message: 'post-2'},
        {id: v1(),message: 'post-3'},
        {id: v1(),message: 'post-4'},
    ]
    let postElements = postData.map(m=>  <Post key={m.id}message={m.message}/>)
    return (
        <div >
            <div>
                My Posts
                <div>
                    <input placeholder={'message'} type="text"/>
                    <button>ADD-POST</button>
                </div>
                <div>
                    {
                        postElements
                    }

                </div>
            </div>
        </div>
    );
};

export default Profile;