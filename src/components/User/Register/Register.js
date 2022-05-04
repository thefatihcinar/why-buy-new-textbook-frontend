import '../../Auth/Login/Login.css'
import Message from '../../Message/Message'
import Loader from '../../Loader/Loader'
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Container, Alert  } from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector} from 'react-redux'
import { register } from '../../../actions/userActions'

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const Register = ( { location, history } ) => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    /* go get learn whether there is an authenticated user or not */
    let userLogin = useSelector( state => state.userLogin );
    let { userInfo: loggedInUser} = userLogin;
    
    /* also fetch the user register global state */
    let { loading, userInfo , error } = useSelector(state => state.userRegister);

    const validationSchema = yup.object({
        name: yup.string()
                 .required("Ad Soyad Girilmesi Zorunludur."),

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
    

    useEffect( () => {
        /* if there is an authenticated user, 
           redirect him to the where he wants to go */
/*         if(userInfo)
            history.push(redirect);
        if(loggedInUser)
            history.push("/"); */

    }, [userInfo, loggedInUser]);


    const onSubmit = (event) => {

        dispatch( register(name, email, password) )
    
      };


    return (
    <Container className='p-5 m-0 orangeContainer' fluid>
        {loading && <Loader/>}
        <Row className='justify-content-md-center m-5'>
          <Card className='p-5' style={{ width: '34rem', height: '35rem' }}>
            <h1 className="mt-3 mb-3 p-4">Kaydol</h1>
            {error && <Message variant="danger">{error}</Message>}
            <Form onSubmit={handleSubmit(onSubmit)}>
    
              <Form.Group controlId='name'>
                <Form.Label className="p-2">Ad Soyad</Form.Label>
                <Form.Control type="text"
                              name="name"
                              placeholder="İsim Soyisim"
                              value={name}
                              {...register("name")}
                              onChange={(e) => (setName(e.target.value))}
                              >
                </Form.Control>
    
                {errors.name && (
                  <Form.Text className="text-danger">
                    {errors.name.message}
                  </Form.Text>
                )}
              </Form.Group>
    
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
    
              <Button type='submit' variant='primary' className="mt-3">Kaydol</Button>
    
            </Form>
    
            <Row className='py-5'>
              <Col>
                Hesabın var mı? <Link to={`/login`}> Giriş Yap</Link>
              </Col>
            </Row>
            
          </Card >
        </Row>
      </Container>
    )
}

export default Register;
