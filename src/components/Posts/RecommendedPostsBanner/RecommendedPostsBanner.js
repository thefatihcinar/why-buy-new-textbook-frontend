import React from 'react'
import { useState ,useEffect} from "react";
/* Services */
import { PostsService } from "../../../services";
/* React Bootstrap Components */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
/* Styles */
import "./RecommendedPostsBanner.css";

const RecommendedPostsBanner = () => {

    const [recommendedPosts, setRecommendedPosts] = useState([]);

    useEffect(async () => {
        const posts = await PostsService.getRecommendedPostsForBanner();
        setRecommendedPosts(posts);
    }, []);

    return (
        <Container>
            <Row>
                {
                    recommendedPosts.map((post, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <Container className="p-0">
                                <Card style={{ maxHeight:350, height: 300 }} className="align-content-center p-2">
                                    <Image src={post.mainImage} fluid style={{ maxHeight:180, height: 250 }}></Image>
                                    <Container className="align-content-center pt-3 p-0">
                                        <a href={`/posts/${post._id}`}>{post.title}</a>
                                    </Container>
                                </Card>
                            </Container>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default RecommendedPostsBanner;
