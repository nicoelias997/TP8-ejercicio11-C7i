import React, {useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import {category} from "../helpers"
import ListaNoticias from '../components/ListaNoticias';


const Formulario = () => {

  const [select, setSelect] = useState("")
  const [noticia, setNoticia] = useState([])

//No me sale de esta forma
  // useEffect(() =>  {

  //   async function fetchData(){
  //     console.log(select)
  //     const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${select}&apiKey=71d25bc62d2f4d5284127ad7b81ac770`)
  //     const data = await res.json()
  //     const arrayObj = data.articles  
  //     setNoticia(arrayObj)

  //   }
  //   fetchData()
  //   } )

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=${select}&apiKey=71d25bc62d2f4d5284127ad7b81ac770`)
    .then(res => res.json())
    .then(data => data.articles)
    .then(arrayObj => {
      setNoticia(arrayObj)
      console.log(select)
    })},[select])
        // for(let i = 0; i < arrayObj.length; i++){
        //   setNoticia([{
        //     imagen: arrayObj[i].urlToImage,
        //     titulo: arrayObj[i].title,
        //     autor: arrayObj[i].author,
        //     noticia: arrayObj[i].url,
        //     descripcion: arrayObj[i].description
        //   }])
        // } 

  const noticiaCompleta = (nombre) => {
    console.log(nombre)
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
        {/* <Button className="btn btn-sm rounded-3 btn-light mt-3" onClick={() => obtenerNoticia()}>obtener noticia</Button>    */}
        <Button className="btn btn-sm rounded-3 btn-light mt-3" onClick={() => noticiaCompleta()}> noticia</Button> 
        
    </Form>
    <Row>
    {/* {
      noticia.map(item => (
        <ListaNoticias titulo={item.titulo} autor={item.autor} noticiaCompleta={() => noticiaCompleta(item.descripcion)} noticia={item.descripcion}></ListaNoticias>
      ))
    } */}
    <ListaNoticias></ListaNoticias>
    </Row>
    </Col>
    
  )
}

export default Formulario