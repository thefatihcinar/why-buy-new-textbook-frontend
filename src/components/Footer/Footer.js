import React from 'react'
import {Container} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'


const Footer = () => {
    return (
      <footer>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect fixed="bottom" style={{height: "2rem"}}>
          <Container>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="py-0 mb-0" >
                Copyright &copy; Ankara Üniversitesi
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </footer>       
    )
}

export default Footer;

