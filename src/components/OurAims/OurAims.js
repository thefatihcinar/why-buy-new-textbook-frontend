import React from 'react'
import {Card, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OurAims = () => {

    return (
        <Container className="mb-5">
            <Row className="mt-3 text-start">
                <h1>Hedeflerimiz</h1>
            </Row>
            <Row className="mt-3">
                <Col md={4}>
                    <Card className="p-4" style={ { height: 580 }}>
                        <Card.Img variant="top" src="./illustrations/aims/save-planet.jpeg" />
                        <Card.Title as="h2">Çevreyi korumak.</Card.Title>
                        <Card.Text className="mt-3">
                            "Why Buy New Textbook" yeni nesiller tekrardan ders notları, ders slaytları çıkarmak zorunda kalmazlar. Yeni kağıt israfı önlenmiş olur. Sürdürülebilir çevre amaçlanır.
                        </Card.Text>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="p-4" style={ { height: 580 }}>
                        <Card.Img variant="top" src="./illustrations/aims/tree-cut-not-allowed.jpeg" style={ { maxHeight: 320 }}  />
                        <Card.Title as="h2" className="mt-5">Daha az ağaç kesimi.</Card.Title>
                        <Card.Text className="mt-3">
                            "Why Buy New Textbook" sayesinde alınan kitaplar farklı nesillerce kullanılacağı için yeni ağaç kesimi engellenmiş olur. Ağaçları yaşatın!
                        </Card.Text>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="p-4" style={ { height: 580 }}>
                        <Card.Img variant="top" src="./illustrations/aims/cheap-for-students.jpeg" style={ { height: 350 }} />
                        <Card.Title as="h2">Öğrenciler için bütçe dostu.</Card.Title>
                        <Card.Text className="mt-3">
                            "Why Buy New Textbook" yeni nesiller çok uygun fiyata ders notlarından ve ders kitaplarından faydalabilirler. Kısıtlı bütçelerle harika sonuçlar.
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default OurAims;
