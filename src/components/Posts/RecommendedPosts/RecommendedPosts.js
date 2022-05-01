import React from 'react'
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
/* React Boostrap */
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
/* Services */
import PostsService from "../../../services/posts.service";
/* Utils */
import { displayDate } from "../../../utilities";
/* Styles */
import "./RecommendedPosts.css";

const PostInRow = ({ post }) => {
    return (
        <Card>
        <Container>
            <Row className="mt-2 mb-2">
                <Col md={3}>
                    <Link to={`/posts/${post._id}`}>
                        <Image src={post.mainImage} fluid rounded={true}  style={{ maxWidth: 180, maxHeight: 170 }} className="p-1"></Image>
                    </Link>
                </Col>
                <Col md={7} className="text-start mt-2">
                    <Link to={`/posts/${post._id}`}>
                        <h5>{post.title}</h5>
                    </Link>
                    <p>{post.author}</p>
                    <Container className="p-0">
                        <small>{displayDate(post.createdAt)}</small>
                        <b className="me-3"> </b>
                        {
                            post.isShippable &&
                            <Badge pill bg="success" size="sm" className="mt-1 mb-1 pe-3 ps-3 me-2 ms-0">
                                Kargolanabilir
                            </Badge>

                        }
                        {
                            post.isAvailableForFacetoFaceSelling &&

                            <Badge pill bg="info" className="mb-1 pe-3 ps-3 me-2 ms-0">
                                Yüz Yüze Satışa Uygun
                            </Badge>

                        }
                    </Container>
                </Col>
                <Col md={2} className="align-content-center">
                    <Badge bg="light" className="pe-3 ps-3 p-1 mt-4">
                        <h5>{post.price} ₺ </h5>
                    </Badge>
                </Col>
            </Row>
        </Container>
        </Card>
    );
}

const RecommendedPosts = () => {

    /* Use local state to store the posts */
    const [recommendedPosts, setRecommendedPosts] = useState([]);

    /* When the component is mounted, get the recommended posts */
    useEffect(async () => {
        const posts = await PostsService.getRecommendedPosts();
        setRecommendedPosts(posts);
    }, []);

    return (
        <Container className="mb-4">
            <Row className="text-start mt-3 mb-4">
                <h2>Sizin İçin Önerilenler</h2>
            </Row>
            <Row>
                {   recommendedPosts &&
                    recommendedPosts.map( post => (
                        <Col key={post._id} md={12} className="mb-2">
                            <PostInRow key = {post._id} post = {post}/>
                        </Col>
                    ))}
            </Row>
        </Container>
    )
}

export default RecommendedPosts;
