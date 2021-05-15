import React from 'react'
import ReactDOM from 'react-dom'
export default function Catelogue(){
    return(
        <div>
           <a href="/Home"><h3>K Mart ( Best Quality and Quantity )</h3></a>
		    <p>One Place for all Groceries with Reasonable Price..Home Delivery and Online App Available..For Home Delivery Contact : 9577 33 6677</p>
            <a href="/Home"><img src='/K_Mart.jpg'></img></a>
            <Shop1/>
            <Shop2/>
        </div>
    )
}
function Shop1(){
    return(
        <div>
            <br></br>
        <a href="/Home"><h3>Srirastu Wholesale Super Market</h3></a>
         <p>Srirasthu whole sale super market having 10000 sft biggest super market in whole sale price in mangalagiri and 15000+ products are available</p>
         <a href="/Home"><img src='/Srirastu.jpg'></img></a>
         <br></br>
     </div>
    )
}

function Shop2(){
    return(
        <div>
            <br></br>
        <a href="/Home"><h3>Vinda Mart</h3></a>
         <p>One stop destination for all your needs.. Affordable Price.. Home Delivery and Online App Available..For Home Delivery Contact : 9668 35 7237</p>
         <a href="/Home"><img src='/Srirastu.jpg'></img></a>
         <br></br>
     </div>
    )
}