import React from 'react'
import Hero from '../componets/Hero';
import Contacts from '../componets/Contacts';

const Contact = () => {
  return (
    <div>
        <Hero Heading='Contact' Message='submit the form below for more works and quotes.' />
        <Contacts />
    </div>
  )
}

export default Contact;