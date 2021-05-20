import React from 'react'
import ReactDOM from 'react-dom'
import {Card,Button} from 'react-bootstrap'
import { AlignCenter, FileX, Shop } from 'react-bootstrap-icons'
import { useHistory } from "react-router-dom";
import "./item.css"

export default function Grocery(){
    const history = useHistory()
    function Shop1(k){
        var cart=[]
        cart.push(k);
        localStorage.setItem("cart",JSON.stringify(cart))
       history.push("/Home");
    }
    var item1=JSON.parse(localStorage.getItem("items"));
    var c=[]
    for(var i in item1){
        c.push(item1[i])
    }
    return( 
      <div className="item_style"> 
        {
        c.map(i =>{
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
        <Button variant="primary" onClick={()=>Shop1(i)}>Add to cart</Button>
  </Card.Body>
</Card>
</div>
</form>
    )})}
</div>
    )
}
