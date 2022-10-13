import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'


const ListaNoticias = (props) => {  
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="d-flex">
    <Card className='mt-2'>
      <Card.Header>
      <Card.Img variant="top" src={props.imagen}  />
        <Card.Text className='mt-2'>{props.autor}</Card.Text>
      </Card.Header>  
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text className='text-truncate'>{props.noticia}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='text-center mt-1 mb-1'>
        <Button className='btn btn-info rounded-3' target="_blanck" href={props.url}
         >Ver noticia completa</Button>
      </Card.Footer>
    </Card>
    </Col>
  )
}

export default ListaNoticias