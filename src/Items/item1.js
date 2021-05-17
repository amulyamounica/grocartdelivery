import React from 'react'
import ReactDOM from 'react-dom'
import {item,groceries} from 'C:/Users/SRINIVAS/Grocart/grocartdelivery/src/constants'
import {Card,Button} from 'react-bootstrap'
import { AlignCenter, FileX, Shop } from 'react-bootstrap-icons'
import { useHistory } from "react-router-dom";
import "./item.css"

export default function Grocery(){
    const history = useHistory()
    function Shop1(){
       history.push("/Home");
    }
    return( 
      <div className="item_style"> 
        {groceries.map(i =>{
                 return( 
        <form>
        <div>
        <Card style={{ width: '15rem', height:'400px',backgroundColor:'cornsilk'}}>
        <Card.Img variant="top" src={i.img} height="200px" />
        <Card.Body>
        <Card.Title>{i.name}</Card.Title>
        <Card.Text>
            {i.desc} <br>
            </br>
            Price:{i.price}
        </Card.Text>
        <Button variant="primary" onClick={Shop1}>Add to cart</Button>
  </Card.Body>
</Card>
</div>
</form>
    )})}
</div>
    )
}
