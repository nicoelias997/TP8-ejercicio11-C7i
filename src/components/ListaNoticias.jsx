import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'



const ListaNoticias = (props) => {
  return (
    <Col sm={4}>
    <Card className='mt-2'>
      <Card.Header>
      <Card.Img variant="top" src={props.imagen}  />
        <Card.Text className='mt-2'>{props.autor}</Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>{props.noticia}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className='btn btn-info rounded-3' href={props.url}
         >Ver noticia completa</Button>
      </Card.Footer>
    </Card>
    </Col>
  )
}

export default ListaNoticias