import React from 'react';
/* React Bootstrap Containers */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* Components */
import { RecommendedPosts } from "../../components/Posts";

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <RecommendedPosts />
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
