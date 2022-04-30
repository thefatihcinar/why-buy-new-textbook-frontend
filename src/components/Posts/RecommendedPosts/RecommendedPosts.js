import React from 'react'
import { useState, useEffect} from "react";
/* React Bookstrap */
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* Services */
import PostsService from "../../../services/posts.service";


const PostInRow = ( {post} ) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href = {`/posts/${post._id}`}>
                <Card.Img src={post.mainImage} variant='top'/>
            </a>
            <Card.Body as = 'div'>
                <a href = {`/posts/${post._id}`}>
                    <Card.Title>
                        <strong>{post.title}</strong>
                    </Card.Title>
                </a>
                <Card.Text as = 'div'>
                    <div className = 'mt-3'>
                        {post.description}
                    </div>
                </Card.Text>
                <Card.Text>
                    {post.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

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
            <Container>
                <h1>Recommended Products</h1>
                <Row>
                    {   recommendedPosts &&
                        recommendedPosts.map( post => (
                        <Col key={post._id}>
                            <PostInRow key = {post._id} post = {post}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default RecommendedPosts;
