import React from 'react'
import {item} from './constants'


export default function ItemCard(){
    console.log("items",item)

  const items = (data)=>{
      return(
       <div>{data.name}</div>
      )
  }

    return(
          <div>
              {item.map(i =>{
              return(
                <div>   
                <div>{i.name} </div>
                <div className="items">
                    {items(i)}
                </div>
                    </div> 
              ) 
              })}
          </div>
    )
}
