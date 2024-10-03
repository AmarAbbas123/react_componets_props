import React from 'react'

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
  return (
    
        <footer className='footer'>
          
              <div className='order'>
                <p>
                  We're open until {closeHour}:00. Come visit us order online.
                </p>
                <button className='btn'>Order</button>
              </div>
            
        </footer>
    
  )
}

export default Footer