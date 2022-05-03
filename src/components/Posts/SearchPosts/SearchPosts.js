import React from 'react'
import { useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
/* React Boostrap */
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
/* Services */
import PostsService from "../../../services/posts.service";
/* Utils */
import { displayDate } from "../../../utilities";
/* Styles */
import "./SearchPosts.css";
import {FormService} from "../../../services";
import Button from "react-bootstrap/Button";


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
                            <h6>{post.title}</h6>
                        </Link>
                        <p>{post.author}</p>
                        <Container className="p-0">
                            <small>{displayDate(post.createdAt)}</small>
                            <b className="me-3"> </b>
                        </Container>
                    </Col>
                    <Col md={2} className="align-content-center">
                        <Badge bg="light" className="pe-3 ps-3 p-2 mt-4">
                            <h5>{post.price} ₺ </h5>
                        </Badge>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

const SearchPosts = () => {

    const navigate = useNavigate();

    /* initialize the setup for getting the search parameters */
    const [searchParams, setSearchParams] = useSearchParams();
    let searchQuery =  searchParams.get("query")

    /* Initialize states for the search parameters for search form */
    const [searchParameters, setSearchParameters] = useState({ page: 1 });
    const [relatedCity, setRelatedCity] = useState(null);
    const [relatedInstitution, setRelatedInstitution] = useState(null);
    const [type, setType] = useState(null);
    const [condition, setCondition] = useState(null);

    /* the search form elements must be fetched and must be used in the component */
    const [cities, setCities] = useState([]);
    const [institutions, setInstitutions] = useState([]);
    const [types, setTypes] = useState([]);
    const [conditions, setConditions] = useState([]);

    /* Use local state to store the posts */
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        /* Get the search parameters from the url */
        /* assign this query into the search parameters */
        const searchParams = { ...searchParameters};
        searchParams.query = searchQuery;
        setSearchParameters(searchParams);
    }, []);

    useEffect(async () => {

        /* fetch the search form elements, and assign them */
        const searchFormElements = await FormService.getSearchPageData();
        setCities(searchFormElements.cities);
        setInstitutions(searchFormElements.institutions);
        setTypes(searchFormElements.types);
        setConditions(searchFormElements.conditions);

        /* fetch the search results based on the given parameters */
        const searchResults = await PostsService.searchForPosts(searchParameters);
        setPosts(searchResults);

    }, [relatedCity, relatedInstitution, searchParameters]);



    return (
        <Container className="mb-4">
            <Row className="text-start mt-3 mb-4">
                <h2>Arama sonuçlarınız</h2>
            </Row>
            <Row>
                <Col md={3}>
                    <Card className="p-2">
                        <Container>
                            <Row className="text-start mb-2 mt-2">
                                <Container className="">
                                    <h5>Şehir</h5>
                                </Container>
                            </Row>
                            <Row className="mb-2">
                                <Form.Control as="select" value={relatedCity ? relatedCity : ""} onChange={(event) => {
                                    setRelatedCity(event.target.value);
                                    let newSearchParameters = { ...searchParameters };
                                    newSearchParameters.relatedCity = event.target.value;
                                    setSearchParameters(newSearchParameters);
                                }}>
                                    <option value="" disabled>Şehir Seçiniz</option>
                                    {
                                        cities.map((city) => {
                                            return (
                                                <option value={city._id} key={city._id}>{city.name}</option>
                                            )
                                        })
                                    }
                                </Form.Control>
                            </Row>
                            <Row className="text-start mb-2">
                                <Container className="mt-2">
                                    <h5>Kurum</h5>
                                </Container>
                            </Row>
                            <Row>
                                <Form.Control as="select" value={ relatedInstitution ? relatedInstitution : "" } onChange={(e) => {
                                    setRelatedInstitution(e.target.value);
                                    let newSearchParameters = { ...searchParameters };
                                    newSearchParameters.relatedInstitution = e.target.value;
                                    setSearchParameters(newSearchParameters);
                                }}>
                                    <option value="" disabled>Kurum Seçiniz</option>
                                    {
                                        institutions.map((institution) => {
                                            return (
                                                <option value={institution._id} key={institution._id}>{institution.name}</option>
                                            )
                                        })
                                    }
                                </Form.Control>
                            </Row>
                            <Row className="text-start mb-2">
                                <Container className="mt-3">
                                    <h5>Tür</h5>
                                </Container>
                            </Row>
                            <Row>
                                <Form.Control as="select" value={ type ? type : "" } onChange={(e) => {
                                    setType(e.target.value);
                                    let newSearchParameters = { ...searchParameters };
                                    newSearchParameters.type = e.target.value;
                                    setSearchParameters(newSearchParameters);
                                }}>
                                    <option value="" disabled>Tür seçiniz</option>
                                    {
                                        types.map((type) => {
                                            return (
                                                <option value={type} key={type}>{type}</option>
                                            )
                                        })
                                    }
                                </Form.Control>
                            </Row>
                            <Row className="text-start mb-2">
                                <Container className="mt-3">
                                    <h5>Durum</h5>
                                </Container>
                            </Row>
                            <Row>
                                <Form.Control as="select" value={ condition ? condition : "" } onChange={(e) => {
                                    setCondition(e.target.value);
                                    let newSearchParameters = { ...searchParameters };
                                    newSearchParameters.condition = e.target.value;
                                    setSearchParameters(newSearchParameters);
                                }}>
                                    <option value="" disabled>Durum seçiniz</option>
                                    {
                                        conditions.map((condition) => {
                                            return (
                                                <option value={condition} key={condition}>{condition}</option>
                                            )
                                        })
                                    }
                                </Form.Control>
                            </Row>

                            <Row className="mt-4">
                                <Button variant="primary" onClick={() => {
                                }}>Ara</Button>
                            </Row>
                        </Container>
                    </Card>
                </Col>
                <Col md={9}>
                    {   posts &&
                        posts.map( post => (
                            <Col key={post._id} md={12} className="mb-2">
                                <PostInRow key = {post._id} post = {post}/>
                            </Col>
                        ))}
                </Col>

            </Row>
        </Container>
    )
}

export default SearchPosts;
