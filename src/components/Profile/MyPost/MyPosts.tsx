import React from 'react';

import Post from "../Posts/Post";
const Profile = () => {

    return (
        <div >
            <div>
                My Posts
                <div>
                    <input placeholder={'message'} type="text"/>
                    <button>ADD-POST</button>
                </div>
                <div>
                  <Post />
                </div>
            </div>
        </div>
    );
};

export default Profile;