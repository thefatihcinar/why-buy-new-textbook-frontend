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

const Header = () => {

  return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="https://cdn1.iconfinder.com/data/icons/marketing-1-2-flat/210/cart-buy-purchase-button-cancel-512.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              {configs.getConfig('brandName')}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'/>
            <Nav className="me-auto">
              <Button variant="success">Create New Post</Button>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              {
                authService.isAuthenticated() ?
                    <Nav.Link href="/logout">
                      <i className="fas fa-sign-out-alt p-1"></i>
                      Logout</Nav.Link> :
                    <Nav.Link href="/login">
                      <i className='fas fa-user p-1'></i>
                      Log In
                    </Nav.Link>
              }
            </Nav>
          </Container>
        </Navbar>
      </header>
  )
}

export default Header;
