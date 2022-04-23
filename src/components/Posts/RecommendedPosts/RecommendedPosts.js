import React from 'react'
import { useState, useEffect} from "react";
/* Services */
import PostsService from "../../../services/posts.service";

const RecommendedPosts = () => {

    /* Use local state to store the posts */
    const [recommendedPosts, setRecommendedPosts] = useState([]);

    /* When the component is mounted, get the recommended posts */
    useEffect(async () => {
        const posts = await PostsService.getRecommendedPosts();
        setRecommendedPosts(posts);
    }, [recommendedPosts]);


    return (
        <div>
            {
                recommendedPosts && recommendedPosts.map((post) => (
                <>
                    <p>{post.title}</p>
                    <br/>
                </>

            ))}
        </div>
    )
}

export default RecommendedPosts;
