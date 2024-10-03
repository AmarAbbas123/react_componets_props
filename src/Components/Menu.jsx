import React from 'react'
import Pizza from "./Pizza"
import "./Style.css"
import Footer from './Footer'

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "/prosciutto.jpg",
      soldOut: false,
    },
  ];

const Menu = () => {
    const pizzas = pizzaData

  return (
    <main className='menu'>
        <header className='header footer'>
            <h1 className=''>Fast React Pizza Co.</h1>
        </header>
        <h2>Our Menu</h2>
        {pizzas && (
        <ul className='pizzas'>
            {pizzaData.map((pizza) => 
            <Pizza pizzaobj = {pizza} 
           key = {pizza.name}

            />
            )}
        </ul>
        )}
        {/*
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
        */}
        <Footer />
    </main>
  )
}

export default Menu