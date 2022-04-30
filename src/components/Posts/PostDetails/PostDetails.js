import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/* Services */
import { PostsService } from "../../../services";

const PostDetails = () => {

    /* Use local state to store the post */
    const [post, setPost] = useState({});

    const { id } = useParams();

    /* When the component is mounted, get the post */
    useEffect( async () => {

        /* get the post id from the route */
        const thePost = await PostsService.getSpecificPost(id);
        setPost(thePost);

    }, []);

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
