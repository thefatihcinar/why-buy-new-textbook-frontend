import React from 'react'
import PostsService from '../../services/posts.service';
/* Components */
import PublishingUser from '../User/PublishingUser';

const Post = () => {
  let [post, setPost] = React.useState({});
  // post = PostsService.getPostWithId(1);
  React.useEffect(async () => {
    const postt = await PostsService.getPostWithId(1);
    setPost(postt);
  }, [post, setPost]);

  return (
      <div>
        <div>{post.title}</div>
        <PublishingUser/>
      </div>
  )
}

export default Post;
