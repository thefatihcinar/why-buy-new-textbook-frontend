import React from 'react'
import { useState, useEffect } from "react";
/* Services */
import { PostsService } from "../../../services";

const PostDetails = ( { history, match } ) => {

    /* Use local state to store the post */
    const [post, setPost] = useState({});

    /* When the component is mounted, get the post */
    useEffect( async () => {
        /* get the post id from the route */
        const { id: postID } = match.params;
        const thePost = await PostsService.getSpecificPost(postID);
        setPost(thePost);

    }, [post]);

    return (
        <div>
            {
                post &&
                <div>
                    <h3>--- DETAYLARRR -- -</h3>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            }
        </div>
    )
}

export default PostDetails;
