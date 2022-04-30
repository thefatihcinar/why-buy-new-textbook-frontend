import React from 'react';
/* Components */
import { RecommendedPosts } from "../../components/Posts";
import { OurAims } from "../../components/OurAims";


const HomePage = () => {
    return (
        <div>
            <RecommendedPosts/>
            <OurAims/>
        </div>
    );
}

export default HomePage;
