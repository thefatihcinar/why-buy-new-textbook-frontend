import '../../Auth/Login/Login.css'
import Message from '../../Message/Message'
import Loader from '../../Loader/Loader'
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Container, Alert  } from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector} from 'react-redux'
import { userRegisterAction } from '../../../actions/userActions'

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const Register = ( ) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [profilePicture, setProfilePicture] = useState("");


    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const userRegister = useSelector( state => state.userRegister );
    const { loading, userInfo , error } = userRegister;

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

        confirmPassword: yup.string()
                    .required("Şifre Girilmesi Zorunludur.")
                    .min(6, "Şifreniz En Az 6 Karakterden Oluşmalıdır.")
                    .max(50, "Şifreniz En Fazla 50 Karakterden Oluşmalıdır.")
                    .oneOf([yup.ref("password")], "Şifreler Eşleşmiyor."),

        phoneNumber: yup.number()
                    .typeError("Telefon Numarası Sayı İçermelidir.")
                    .required("Telefon Numarası Girilmesi Zorunludur.")
                    .test('len', "Telefon Numaranız 11 Haneli Olmalıdır.", val => val.toString().length === 10),

        profilePicture: yup.string()
                    .required('Lütfen Bir Fotoğraf Linki Giriniz.'),

      }).required();
    
      const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationSchema)});
    

    useEffect( () => {
      /*if there is an authenticated user, 
      redirect him to the where he wants to go */
      if(userInfo) {
        navigate("/")
      }
    }, [userInfo]);


    const onSubmit = (event) => {

        dispatch(userRegisterAction(name, email, password, phoneNumber, profilePicture));
    
    };


    return (
    <Container className='p-5 m-0 orangeContainer' fluid>
        {loading && <Loader/>}
        <Row className='justify-content-md-center m-5'>
          <Card className='p-5' style={{ width: '34rem', height: '57rem' }}>
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

              <Form.Group controlId='password'>
              <Form.Label className="p-2">Şifre</Form.Label>
                <Form.Control type="password"
                              name="password"
                              placeholder="********"
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

              <Form.Group controlId='confirmPassword'>
              <Form.Label className="p-2">Şifrenizi Tekrar Girin</Form.Label>
                <Form.Control type="password"
                              name="confirmPassword"
                              placeholder="********"
                              value={confirmPassword}
                              {...register("confirmPassword")}
                              onChange={(e) => (setConfirmPassword(e.target.value))}
                              >
                </Form.Control>
    
                {errors.confirmPassword && (
                  <Form.Text className="text-danger">
                    {errors.confirmPassword.message}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group controlId='phoneNumber'>
              <Form.Label className="p-2">Telefon Numarası</Form.Label>
                <Form.Control type="tel"
                              name="phoneNumber"
                              placeholder="05xxyyyzzzz"
                              value={phoneNumber}
                              {...register("phoneNumber")}
                              onChange={(e) => (setPhoneNumber(e.target.value))}
                              >
                </Form.Control>
    
                {errors.phoneNumber && (
                  <Form.Text className="text-danger">
                    {errors.phoneNumber.message}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group controlId='profilePicture'>
              <Form.Label className="p-2">Profil Fotoğrafınız İçin URL Girin</Form.Label>
                <Form.Control type="url"
                              name="profilePicture"
                              placeholder="https://www.some-image-URL.png"
                              value={profilePicture}
                              {...register("profilePicture")}
                              onChange={(e) => (setProfilePicture(e.target.value))}
                              >
                </Form.Control>
    
                {errors.profilePicture && (
                  <Form.Text className="text-danger">
                    {errors.profilePicture.message}
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
