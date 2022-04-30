import React from 'react'
import { useState, useEffect} from "react";
/* Services */
import PostsService from "../../../services/posts.service";
/* Components */
import PostInRow from "../PostInRow";

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
            <div>
                <div>
                    {
                        recommendedPosts && recommendedPosts.map((post) => (
                            <PostInRow key={post.id} post={post} />
                        ))}
                </div>
            </div>
        </div>
    )
}
/*
export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {
                        recommendedPosts && recommendedPosts.map((post) => (
                            <PostInRow key={post.id} post={post} />
                        ))}
                </Grid>
            </Grid>
        </Box>
    );
}
*/

export default RecommendedPosts;
