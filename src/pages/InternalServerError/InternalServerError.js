import React from 'react'
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const InternalServerError = () => {

    return (
        <Container style={{ maxWidth: 600}} className="mt-5 mb-5">
            <Row className="mt-2">
                <Image src="/assets/500.jpg" fluid/>
                <h1>Sunucu Hatası.</h1>
            </Row>
            <Row className="mb-5">
            </Row>
        </Container>
    )
}

export default InternalServerError;
