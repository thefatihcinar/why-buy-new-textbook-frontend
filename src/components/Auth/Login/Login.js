import './Login.css'
import Message from '../../Message/Message'
import Loader from '../../Loader/Loader'
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Container, Alert  } from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector} from 'react-redux'
import { login } from '../../../actions/userActions'

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const Login = ( ) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* Fetch whether the user has logged in or not from redux */
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const validationSchema = yup.object({
    email: yup.string()
              .email("Geçerli Bir Mail Adresi Girin.")
              .required("Mail Adresi Girilmesi Zorunludur.")
              .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                       "Mail Adresi Geçerli Formatta Girilmelidir."),
    
    password: yup.string()
                .required("Şifre Girilmesi Zorunludur.")
                .min(6, "Şifreniz En Az 6 Karakterden Oluşmalıdır.")
                .max(50, "Şifreniz En Fazla 50 Karakterden Oluşmalıdır."),
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationSchema)});


  useEffect(() => {
    if(userInfo) {
      navigate("/")
    }
  }, [userInfo])


  const onSubmit = (event) => {

    dispatch(login(email, password))

  };

 
  return (
  <Container className='p-5 m-0 orangeContainer' fluid>
    {loading && <Loader/>}
    <Row className='justify-content-md-center m-5'>
      <Card className='p-5' style={{ width: '34rem', height: '35rem' }}>
        <h1 className="mt-3 mb-3 p-4">Giriş Yap</h1>
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group controlId='email'>
            <Form.Label className="p-2">E-Posta Adresi</Form.Label>
            <Form.Control type="email"
                          name="email"
                          placeholder="jsmith@example.com"
                          value={email}
                          {...register("email")}
                          onChange={(e) => (setEmail(e.target.value))}
                          >
            </Form.Control>

            {errors.email && (
              <Form.Text className="text-danger">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label className="mt-2">Şifre</Form.Label>
            <Form.Control type='password'
                          name='password'
                          placeholder = "********"
                          value={password}
                          {...register("password")}
                          onChange={(e) => (setPassword(e.target.value))}
                          >
            </Form.Control>

            {errors.password && (
              <Form.Text className="text-danger">
                {errors.password.message}
              </Form.Text>
            )}
          </Form.Group>

          <Button type='submit' variant='primary' className="mt-3">Giriş</Button>

        </Form>

        <Row className='py-5'>
          <Col>
            Hesabın yok mu? <Link to={`/register`}> Kaydol</Link>
          </Col>
        </Row>
        
      </Card >
    </Row>
  </Container>
  )
}

export default Login