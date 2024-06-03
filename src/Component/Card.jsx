import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Carddata(props) {
    const navigate = useNavigate()
  return (
    <div>
      <Card style={{ width: '18rem', margin:'25px', height:"500px", overlay:"false"}}>
      <Card.Img variant="top" src={props.img} style={{ height: "300px" }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button variant="primary" onClick={(e)=>navigate(`/edit?url=${props.img}`)} >Edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
