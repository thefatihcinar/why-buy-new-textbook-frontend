import React from 'react'
import PostsService from '../../services/posts.service';
/* Components */
import PublishingUser from '../User/PublishingUser';

import axios from "axios";

const Post = () => {
  //let [post, setPost] = React.useState({});
  // post = PostsService.getPostWithId(1);
    let [recommendedPosts, setRecommendedPosts] = React.useState([]);
  React.useEffect(async () => {
    //const postt = await PostsService.getPostWithId(1);
    //setPost(postt);
    //const recommendedPosts = await PostsService.getRecommendedPosts();
      //const recommendedPosts = await PostsService.deneme();
      //const recommendedPosts = await axios.get(process.env.REACT_APP_WHY_BUY_NEW_TEXTBOOK_MAIN_API_URL+ '/posts');
    //setRecommendedPosts(recommendedPosts);
    //console.log('recommendedPosts', recommendedPosts);
    //console.log('selam', process.env.REACT_APP_WHY_BUY_NEW_TEXTBOOK_MAIN_API_URL);

    /* star a post */
    await PostsService.starPost("626055fd688ed1fad9fff7aa");
  //}, [post, setPost]);
  }, []);

  return (
      <div>
        <div>post.title</div>
        <PublishingUser/>
      </div>
  )
}

export default Post;
