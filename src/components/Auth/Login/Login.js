import './Login.css'
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Container, Alert  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'


const Login = ( ) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = () => console.log({email}, {password});


  useEffect(() => {}, [])

  const submitHandler = (event) => {
      // Do not refresh the page
    event.preventDefault();
  };
 

  return (
  <Container className='p-5 m-0 orangeContainer' fluid>
    <Row className='justify-content-md-center m-5'>
      <Card className='p-5' style={{ width: '34rem', height: '32rem' }}>
        <h1 className="mt-3 mb-3 p-4">Giriş Yap</h1>
        <Form onSubmit={submitHandler, handleSubmit(handleRegistration)}>

          <Form.Group controlId='email'>
            <Form.Label className="p-2 ml-5">E-Posta Adresi</Form.Label>
            <Form.Control type="email"
                          name="email"
                          placeholder="jsmith@example.com"
                          value={email}
                          onChange={(e) => (setEmail(e.target.value))}
                          >
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label className="mt-2">Şifre</Form.Label>
            <Form.Control type='password'
                          name='password'
                          placeholder = "********"
                          value={password}
                          onChange={(e) => (setPassword(e.target.value))}
                          >
            </Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary' className="mt-3">Giriş</Button>

        </Form>

        <Row className='py-5'>
          <Col>
            Hesabın yok mu? <Link to={`/`}> Kaydol</Link>
          </Col>
        </Row>
      </Card >
    </Row>
  </Container>
  )
}

export default Login