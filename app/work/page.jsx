import React from 'react'
import Hero from '../componets/Hero';
import Portifolio from '../componets/Portifolio';

const Work = () => {
  return (
    <div>
        <Hero Heading='My Work' Message='This is some of my work traveling the world.' />
        <Portifolio />
    </div>
  )
}

export default Work;