import {FormService} from "../../../services";
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Container, Alert  } from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { PostsService } from '../../../services'


import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const NewPost = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin


  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [isShippable, setIsShippable] = useState(false);
  const [isAvailableForFacetoFaceSelling, setIsAvailableForFacetoFaceSelling] = useState(true);
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState("");



  /* Initialize states for post create form */
  const [relatedCity, setRelatedCity] = useState(null);
  const [relatedInstitution, setRelatedInstitution] = useState(null);
  const [type, setType] = useState(null);
  const [condition, setCondition] = useState(null);

  /* the form elements must be fetched and must be used in the component */
  const [cities, setCities] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [types, setTypes] = useState([]);
  const [conditions, setConditions] = useState([]);



  const validationSchema = yup.object({
    title: yup.string()
              .required("İlan Başlığı Girmek Zorunludur.")
              .min(6, "İlan Başlığı En Az 6 Karakterden Oluşabilir.")
              .max(125, "İlan Başlığı En Fazla 125 Karakterden Oluşabilir."),
          
              
/*               .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                       "Mail Adresi Geçerli Formatta Girilmelidir."), */
    
    description: yup.string()
              .required("İlan Açıklaması Girmek Zorunludur.")
              .min(10, "İlan Açıklaması En Az 10 Karakterden Oluşabilir.")
              .max(20000, "İlan Açıklaması En Fazla 20000 Karakterden Oluşabilir."),

    price: yup.number()
              .typeError("Fiyat Bilgisi Yalnızca Sayı İçerebilir.")
              .required("Fiyat Bilgisi Girmek Zorunludur.")
              .test('len', "Fiyat Bilgisi 10 Basamaktan Az Olmalıdır.", val => val.toString().length <= 10)
              .moreThan(0, "Fiyat Tutarı Sıfırdan Büyük Olmalıdır."),

    author: yup.string()
              .min(1, "Yazar Bilgisi En Az 1 Karakterden Oluşabilir.")
              .max(20, "Yazar Bilgisi En Fazla 20 Karakterden Oluşabilir."),

    relatedCity: yup.string()
              .required("Şehir Seçmek Zorunludur."),

    relatedInstitution: yup.string(),

    condition: yup.string(),

    type: yup.string()
              .required(),

    mainImage: yup.string()
              .required('Lütfen Bir Fotoğraf Linki Giriniz.'),

  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationSchema)});

  useEffect(async () => {

    /* fetch the search form elements, and assign them */
    const postCreateFormElements = await FormService.getCreatePostFormData();
    setCities(postCreateFormElements.cities);
    setInstitutions(postCreateFormElements.institutions);
    setTypes(postCreateFormElements.types);
    setConditions(postCreateFormElements.conditions);

}, [relatedCity, relatedInstitution]);

  const onSubmit = async (event) => {

    let newPost = {
      title: title,
      author: author,
      price: price,
      isShippable: isShippable,
      isAvailableForFacetoFaceSelling: isAvailableForFacetoFaceSelling,
      description: description,
      mainImage: mainImage,
      type: type,
      condition: condition,
      relatedCity: relatedCity,
      relatedInstitution: relatedInstitution,

    }; 

    if(newPost)
    {
      let addedPost = await PostsService.createNewPost(newPost);
      console.log(addedPost);
      //navigate(`/posts/${addedPost.id}`)
    }
  };

  return (
    <Container className='p-5 m-0 ' fluid>
      <Row className='justify-content-md-center m-5'>
        <Card className='p-5' style={{ width: '34rem', height: '75rem' }}>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId='title'>
              <Form.Label className="p-2">İlan Başlığı</Form.Label>
              <Form.Control type="text"
                            name="title"
                            placeholder="İlan Başlığı Giriniz"
                            value={title}
                            {...register("title")}
                            onChange={(e) => (setTitle(e.target.value))}
                            >
              </Form.Control>
              {errors.title && (
                <Form.Text className="text-danger">
                  {errors.title.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label className="p-2">Açıklama</Form.Label>
              <Form.Control type="text"
                            name="description"
                            placeholder="Açıklama Giriniz"
                            value={description}
                            {...register("description")}
                            onChange={(e) => (setDescription(e.target.value))}
                            >
              </Form.Control>
              {errors.description && (
                <Form.Text className="text-danger">
                  {errors.description.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label className="p-2">Fiyat (TL)</Form.Label>
              <Form.Control type="text"
                            name="price"
                            placeholder="Fiyat Giriniz"
                            value={price}
                            {...register("price")}
                            onChange={(e) => (setPrice(e.target.value))}
                            >
              </Form.Control>
              {errors.price && (
                <Form.Text className="text-danger">
                  {errors.price.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId='author'>
              <Form.Label className="p-2">Yazar Adı ve Soyadı</Form.Label>
              <Form.Control type="text"
                            name="author"
                            placeholder="Yazar Adı ve Soyadı Giriniz"
                            value={author}
                            {...register("author")}
                            onChange={(e) => (setAuthor(e.target.value))}
                            >
              </Form.Control>
              {errors.author && (
                <Form.Text className="text-danger">
                  {errors.author.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId='relatedCity'>
              <Form.Label className="mt-2">Şehir</Form.Label>
              <Form.Control as="select"
                            value={relatedCity ? relatedCity : ""}
                            {...register("relatedCity")}
                            onChange={(e) => (setRelatedCity(e.target.value))}
                            >
                            <option value="" disabled>Şehir Seçiniz</option>
                            {
                                cities.map((city) => {
                                    return (
                                        <option value={city._id} key={city._id}>{city.name}</option>
                                    )
                                })
                            }
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='relatedInstitution'>
              <Form.Label className="mt-2">Kurum</Form.Label>
              <Form.Control as="select"
                            value={relatedInstitution ? relatedInstitution : ""}
                            {...register("relatedInstitution")}
                            onChange={(e) => (setRelatedInstitution(e.target.value))}
                            >
                            <option value="" disabled>Kurum Seçiniz</option>
                            {
                                institutions.map((institution) => {
                                    return (
                                        <option value={institution._id} key={institution._id}>{institution.name}</option>
                                    )
                                })
                            }
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='condition'>
              <Form.Label className="mt-2">Durum</Form.Label>
              <Form.Control as="select"
                            value={condition ? condition : ""}
                            {...register("condition")}
                            onChange={(e) => (setCondition(e.target.value))}
                            >
                            <option value="" disabled>Durum Seçiniz</option>
                            {
                                conditions.map((condition) => {
                                    return (
                                        <option value={condition} key={condition}>{condition}</option>
                                    )
                                })
                            }
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='type'>
              <Form.Label className="mt-2">Tür</Form.Label>
              <Form.Control as="select"
                            value={type ? type : ""}
                            {...register("type")}
                            onChange={(e) => (setType(e.target.value))}
                            >
                            <option value="" disabled>Tür Seçiniz</option>
                            {
                                types.map((type) => {
                                    return (
                                        <option value={type} key={type}>{type}</option>
                                    )
                                })
                            }
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='mainImage'>
              <Form.Label className="p-2">Fotoğraf İçin URL Girin</Form.Label>
              <Form.Control type="url"
                            name="mainImage"
                            placeholder="https://www.some-image-URL.png"
                            value={mainImage}
                            {...register("mainImage")}
                            onChange={(e) => (setMainImage(e.target.value))}
                            >
              </Form.Control>
              {errors.mainImage && (
                <Form.Text className="text-danger">
                  {errors.mainImage.message}
                </Form.Text>
              )}
            </Form.Group>
  
            <Button type='submit' variant='primary' className="mt-3">İlan Ekle</Button>
  
          </Form>        
        </Card >
      </Row>
    </Container>
    )


};

export default NewPost;
