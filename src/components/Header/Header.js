import React from 'react'
/* React Bootstrap Components */
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
/* Configurations */
import configs from "../../configurations";
/* Services */
import authService from "../../services/authentication.service";
import {Form, FormControl} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'

const Header = () => {

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
            <Navbar.Brand href="/">
              <img
                alt=""
                src="https://cdn1.iconfinder.com/data/icons/marketing-1-2-flat/210/cart-buy-purchase-button-cancel-512.png"
                width="33"
                height="33"
                className="d-inline-block align-top"
              />{' '}
              {configs.getConfig('brandName')}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'/>
            <Form className="d-flex">
              <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
              />
              <Button variant="outline-success" onClick={() => { }}>Search</Button>
            </Form>
            <Nav className="me-auto">
              <Button variant="primary">Yeni İlan Ver</Button>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Amaçlarımız</Nav.Link>
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
