import React from 'react'
import { useState, useEffect} from "react";
/* Services */
import PostsService from "../../../services/posts.service";
/* Components */
import { PostInRow } from "../PostInRow";

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
                <PostInRow key={post.id} post={post} />
            ))}
        </div>
    )
}

export default RecommendedPosts;
