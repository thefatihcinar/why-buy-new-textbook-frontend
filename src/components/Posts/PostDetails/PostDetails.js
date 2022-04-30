import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
/* Services */
import { PostsService } from "../../../services";

const PostDetails = () => {

    /* Initialize navigation hook */
    const navigate = useNavigate();

    /* Use local state to store the post */
    const [post, setPost] = useState({});

    const { id } = useParams();

    /* When the component is mounted, get the post */
    useEffect( async () => {

        /* get the post id from the route */
        try{
            const thePost = await PostsService.getSpecificPost(id);
            setPost(thePost);
        }
        catch (error) {
            /* Get the error code and redirect to the error page */
            const code = error && error.response && error.response.status;
            if(code === 404) {
                navigate("/not-found");
            }
            else if (code === 500){
                navigate("/server-error");
            }
        }

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
