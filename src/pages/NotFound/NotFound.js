import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";


const NotFound = () => {

    return (
        <Container style={{ maxWidth: 600}}>
            <Row>
                <Image src="/assets/404.jpg" fluid/>
                <h1>Aradığınız sayfa bulunamadı.</h1>
            </Row>
            <Row className="mb-5">

            </Row>
        </Container>
    )
}

export default NotFound;
