import React from 'react'
import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom"
/* React Bootstrap Components */
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-bootstrap/Carousel";
/* Services */
import { PostsService, AuthenticationService } from "../../../services";
/* Utils */
import { displayDate, displayPhoneNumber } from "../../../utilities";
/* Components */
import RecommendedPostsBanner from "../RecommendedPostsBanner";
import {useDispatch, useSelector} from "react-redux";

const PostDetails = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    /* Initialize navigation hook */
    const navigate = useNavigate();

    /* Use local state to store the post */
    const [post, setPost] = useState({});

    const { id } = useParams();

    /* When the component is mounted, get the post */
    useEffect( async () => {

        /* get the post id from the route */
        try{
            const thePost = await PostsService.getSpecificPost(id);
            setPost(thePost);
        }
        catch (error) {
            /* Get the error code and redirect to the error page */
            const code = error && error.response && error.response.status;
            if(code === 404) {
                navigate("/not-found");
            }
            else if (code === 500){
                navigate("/server-error");
            }
        }

    }, []);

    return (
        <div>
            {
                post &&
                <Container>
                    <Row className="mt-4">
                        {/* Post Title */}
                        <Col className="mb-3 text-start">
                            <h3 style={{ userSelect: "auto"}}>{post.title}</h3>
                        </Col>
                        <Row>
                            {/* Product Image Part*/}
                            <Col md={6}>
                                <ListGroup>
                                    <ListGroup.Item style={{ minHeight: 450, maxHeight:500}}>
                                        <Carousel fade >
                                            {
                                                post.images &&
                                                post.images.map((image, index) => {
                                                    return (
                                                        <Carousel.Item key={index} style={{ maxHeight:500}}>
                                                            <Image src={image} alt=""/>
                                                        </Carousel.Item>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            {/* Product Details Part*/}
                            <Col md={3}>
                                <ListGroup variant='light'>
                                    {
                                        post.author &&
                                        <ListGroup.Item>
                                            <b>Yazar</b>
                                            <div className="mb-2"></div>
                                            {post.author}
                                            <div className="mb-2"></div>
                                        </ListGroup.Item>
                                    }

                                    {
                                        post.price &&
                                        <ListGroup.Item>
                                            <h3>{post.price} ₺</h3>
                                        </ListGroup.Item>
                                    }
                                    {
                                        post.createdAt &&
                                        <ListGroup.Item>
                                            <b>Yayınlanma Tarihi</b>
                                            <div className="mb-2"></div>
                                            {displayDate(post.createdAt)}
                                        </ListGroup.Item>
                                    }
                                    {
                                        post.relatedCity &&
                                        <ListGroup.Item>
                                            <b>Konum:</b>
                                            <Badge bg="light" className="ms-3 mt-1 mb-1 pe-3 ps-3">
                                                {post.relatedCity.name}
                                            </Badge>
                                        </ListGroup.Item>
                                    }
                                    {
                                        post.relatedInstitution &&
                                        <ListGroup.Item>
                                            <b>Kurum</b>
                                            <div></div>
                                            <small>{post.relatedInstitution.name}</small>
                                        </ListGroup.Item>
                                    }
                                    <ListGroup.Item>
                                    {
                                        post.isShippable &&
                                        <Badge pill bg="success" className="mt-1 mb-1 pe-3 ps-3">
                                            Kargolanabilir
                                        </Badge>

                                    }
                                    {
                                        post.isAvailableForFacetoFaceSelling &&

                                        <Badge pill bg="info" className="mb-1 pe-2 ps-2">
                                            Yüz Yüze Satışa Uygun
                                        </Badge>

                                    }
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    {
                                        post.condition === "Sıfır" &&
                                        <Badge pill bg="primary" className="mt-1 mb-1 p-1 pe-3 ps-3">
                                            Sıfır
                                        </Badge>
                                    }
                                    {
                                        post.condition === "Temiz, Az Kullanılmış" &&
                                        <Badge pill bg="warning" className="mt-1 mb-1 p-1 pe-3 ps-3">
                                            Temiz, Az Kullanılmış
                                        </Badge>
                                    }
                                    {
                                        post.condition === "Kullanılmış" &&
                                        <Badge pill bg="secondary" className="mt-1 mb-1 p-1  pe-2 ps-2">
                                            Kullanılmış
                                        </Badge>
                                    }
                                    </ListGroup.Item>
                                    {
                                        post.type &&
                                        <ListGroup.Item>
                                            <b>Tür:</b>
                                            <Badge bg="light" className="ms-3 mt-1 mb-1 pe-3 ps-3">
                                                {post.type}
                                            </Badge>
                                        </ListGroup.Item>
                                    }
                                    {
                                        AuthenticationService.isAuthenticated() &&
                                        <ListGroup.Item>
                                            <i className="far fa-heart" style={{ color: "orange", fontSize:30 }}></i>
                                        </ListGroup.Item>
                                    }
                                </ListGroup>
                            </Col>
                            {/* Seller Details Part */}
                            <Col md={3}>
                                {
                                    post && post.seller &&
                                    <ListGroup variant="light">
                                        <ListGroup.Item>
                                            <h5 style={{ userSelect: "auto"}}>Satıcı Detayları</h5>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Image src={ post && post.seller && post.seller.profilePicture} fluid roundedCircle></Image>
                                            <div className="mt-2 mb-2"></div>
                                            <b className="mt-1 mb-1 p-1">{post.seller.name}</b>
                                            <i className="fas fa-badge-check" style={ {color:"darkturquoise"} }></i>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="pt-3 pb-2">
                                            <h5>{displayPhoneNumber(post.seller.phoneNumber)}</h5>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Link to="/">
                                                <Button variant="outline-primary" size="sm"> Tüm İlanlarını Görüntüle</Button>
                                            </Link>
                                        </ListGroup.Item>
                                    </ListGroup>
                                }
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-5">
                            <Col md={12} className="text-start">
                                {/* Description of the Post */}
                                {/* post.description */}
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="mb-3">
                                        <h4>Ürün Detayları</h4>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="mb-5">
                                        {post.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        {
                            userInfo &&
                            <Row className="mt-5 mb-5">
                                <Col md={12} className="text-start">
                                    {/* Recommended Posts */}
                                    {/* post.description */}
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="mb-3">
                                            <h4>Sizin İçin Önerilenler</h4>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="mb-5">
                                            <RecommendedPostsBanner/>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        }
                    </Row>
                </Container>
            }
        </div>
    )
}

export default PostDetails;
