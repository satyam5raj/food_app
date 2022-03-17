import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div 
            className='aboutTop'
            style={{ backgroundImage: `url(${MultiplePizzas})` }}
        ></div>      
        <div className='aboutBottom'>
            <h1> ABOUT US </h1>
            <p>
                rajPizza has turned out to be prestigious for its tremendous, hand-hurled Neapolitan, profound dish, and Sicilian-style pizzas, every one of which invests some energy in a block lined hearth stove before touching base at your table. A few pies are slathered in ‘Organization Name’ signature sauce made from vine-matured San Marzano tomatoes; others are finished with increasingly test fixings, including one that is covered underneath Philly steak and peppers.
                Be that as it may, don’t give the name a chance to trick you: rajPizza really has some expertise in something other than pizza.
                
            </p>
        </div>
    </div>
  )
}

export default About