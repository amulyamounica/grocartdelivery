import React from 'react'
import ReactDOM from 'react-dom'
import {item} from 'C:/Users/mouni/gitpro/grocartdelivery/src/constants'
import {Card,Button} from 'react-bootstrap'
import { AlignCenter, FileX, Shop } from 'react-bootstrap-icons'
import { useHistory } from "react-router-dom";
import "./Catelog.css";

export default function Catelogue2(){
    const history = useHistory()
    function Shop1(){
       history.push("/items");
    }
    return( 
      <div className="catelog"> 
        {item.map(i =>{
                 return( 
        <div>
        <Card style={{ width: '20rem', height:'500px'}}>
        <Card.Img variant="top" src={i.img} height="200px" />
        <Card.Body>
        <Card.Title>{i.name}</Card.Title>
        <Card.Text>
            {i.desc}
        </Card.Text>
        <Button variant="primary" onClick={Shop1}>Visit the shop</Button>
  </Card.Body>
</Card>
</div>
    )})}
</div>
    )
}
