import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import {category} from "../helpers"
import ListaNoticias from '../components/ListaNoticias';

const Formulario = () => {

  const [select, setSelect] = useState("")
  const [noticias, setNoticias] = useState([])


  const obtenerNoticias =  async () => {
    try{
    let res = await fetch(`https://newsapi.org/v2/top-headlines?category=${select}&apiKey=71d25bc62d2f4d5284127ad7b81ac770`)
    let data = await res.json()
    let  arrayObj = data.articles
    setNoticias(arrayObj)
    }
    catch(e){
      console.log(e)
    }
    } 

  return (
    <Col>
    <Form className='m-3 text-center align-items-center'>
        <Form.Group>
      <Row>
        <Col sm={6}>
        <Form.Label>Buscar por categoria:</Form.Label>
        </Col>
        <Col m={6}>
        <Form.Select onChange={e => setSelect(e.target.value)}>
         {
          category.map(item => 
            <option key={item} value={item}>
              {item}
            </option>)
          }

        </Form.Select>
        </Col>
      </Row>
        </Form.Group>  
        <Button className="mt-2" onClick={() => obtenerNoticias()}>Pintar
          </Button>         
    </Form>
    <Row>
  
    {
      noticias.map(item => (
        <ListaNoticias titulo={item.title} key={item.description}autor={item.author} url={item.url} noticia={item.description} imagen={item.urlToImagen}></ListaNoticias>
        
      ))
    }
    </Row>
    </Col>
    
  )
}

export default Formulario