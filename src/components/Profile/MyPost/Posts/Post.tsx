import React from 'react';
type PostType= {
    message: string

}
const   Post = (props: PostType) => {
    return (
        <div>
            {props.message}
        </div>
    );
};

export default Post;