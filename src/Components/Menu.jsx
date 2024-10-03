import React from 'react'
import Pizza from "./Pizza"
import "./Style.css"
import Footer from './Footer'


const Menu = () => {
  return (
    <main className='menu'>
        <h2>Our Menu</h2>
        
        <Pizza  name =  "Focaccia"
                ingredients =  "Bread with italian olive oil and rosemary"
                price =  "6"
                photoName =  "/focaccia.jpg" />
        
        <Pizza  name =  "Pizza Margherita"
                ingredients =  "Tomato and mozarella"
                price =  "10"
                photoName =  "/margherita.jpg" />
        <Pizza  name =  "Pizza Spinaci"
                ingredients =  "Tomato, mozarella, spinach, and ricotta cheese"
                price =  "12"
                photoName =  "/spinaci.jpg" />
         <Pizza  name =  "Pizza Funghi"
                ingredients =  "Tomato, mozarella, mushrooms, and onion"
                price =  "12"
                photoName =  "/funghi.jpg" />
         <Pizza  name =  "Pizza Salamino"
                ingredients =  "Tomato, mozarella, and pepperoni"
                price =  "15"
                photoName =  "/salamino.jpg" />
        <Pizza  name =  "Pizza Prosciutto"
                ingredients =  "Tomato, mozarella, ham, aragula, and burrata cheese"
                price =  "18"
                photoName =  "/prosciutto.jpg" />
        <Footer />
    </main>
  )
}

export default Menu