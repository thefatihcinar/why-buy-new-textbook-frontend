import React from 'react'
/* React Bootstrap Components */
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
/* Configurations */
import configs from "../../configurations";
import {Form, FormControl} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'
import {Link, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import {LinkContainer} from "react-router-bootstrap";

const Header = () => {

  const navigate = useNavigate();

  /* use local state to store the search query */
  const [searchQuery, setSearchQuery] = React.useState('');

  useEffect(() => {
  }, [searchQuery]);

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch( logout() )
  }

  return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  alt=""
                  src="https://cdn1.iconfinder.com/data/icons/marketing-1-2-flat/210/cart-buy-purchase-button-cancel-512.png"
                  width="33"
                  height="33"
                  className="d-inline-block align-top"
                />{' '}
                {configs.getConfig('brandName')}
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'/>
            <Form className="d-flex me-5">
              <FormControl
                  placeholder="Arama"
                  className="me-2"
                  aria-label="Search"
                  value={searchQuery}
                  onKeyDown={(event) => {
                    if (event.key == "Enter") {
                      event.preventDefault();
                      navigate(`/search?query=${searchQuery}`)
                    }
                  }}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="primary" onClick={(e) => { if(searchQuery) navigate(`/search?query=${searchQuery}`); else navigate(`/search`) }}><i className="fas fa-search"></i></Button>
            </Form>
            <Nav className="me-3">
              {
                userInfo &&               
                    <LinkContainer to="/new-post">
                      <Button variant="primary">Yeni İlan Ver</Button>
                    </LinkContainer>
              }
            </Nav>
            <Nav className="me-3">
              <LinkContainer to="our-aims">
                <Nav.Link>Amaçlarımız</Nav.Link>
              </LinkContainer>

              {
                userInfo ?
                    <Nav.Link href="/logout" onClick={logoutHandler}>
                      <i className="fas fa-sign-out-alt p-1"></i>
                      Çıkış Yap</Nav.Link> :
                    <Nav.Link href="/login">
                      <i className='fas fa-user p-1'></i>
                      Giriş Yap
                    </Nav.Link>
              }
            </Nav>
          </Container>
        </Navbar>
      </header>
  )
}

export default Header;
