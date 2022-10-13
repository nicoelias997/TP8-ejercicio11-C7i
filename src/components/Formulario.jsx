import React, { useEffect, useState } from 'react'
import {  Col, Form, Row } from 'react-bootstrap'
import {category} from "../helpers"
import ListaNoticias from '../components/ListaNoticias';

const Formulario = () => {

  const [select, setSelect] = useState("")
  const [noticias, setNoticias] = useState([])


  useEffect(() => {

  const obtenerNoticias =  async () => {
    if(select !== ""){
    try{
    let res = await fetch(`https://newsapi.org/v2/top-headlines?category=${select}&apiKey=c9feca5ea4804471950cb2be6275d11d`)
    let data = await res.json()
    let  arrayObj = data.articles
    setNoticias(arrayObj)
    }
    catch(e){
      console.log(e)
    }
  }
    } 
    obtenerNoticias()
  })

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
    </Form>
    <Row>
  
    {
      noticias.map(item => (
        <ListaNoticias titulo={item.title} key={`${item.url}${item.author}`} autor={item.author} url={item.url} noticia={item.description} imagen={item.urlToImage}></ListaNoticias>
        
      ))
    }
    </Row>
    </Col>
    
  )
}

export default Formulario