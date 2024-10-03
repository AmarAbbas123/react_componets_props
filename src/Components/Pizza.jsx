import React from 'react'
import "./style.css"



const pizza = (props) => {
  console.log(props)
  return (
    <li className='pizza'>
      <img src={props.pizzaobj.photoName}></img>
    <div>
      <h3>{props.pizzaobj.name}</h3>
      <p>{props.pizzaobj.ingredients}</p>
      <span>{props.pizzaobj.price + 3}</span>
    </div>
    </li>

   
  )
}

export default pizza