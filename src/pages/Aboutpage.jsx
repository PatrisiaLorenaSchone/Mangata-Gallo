import React from 'react'
import SecondaryTitle from '../components/SecondaryTitle'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Aboutpage() {
  return (
    <div className='about-page'>
      <div className='about-section'>
      <SecondaryTitle text="Mangata Gallo"/>
      <p>Step into the world of Mangata Gallo, a small business dedicated to bringing you the essence of beauty and well-being. Our carefully curated selection of skincare and haircare products is a celebration of nature's bounty, thoughtfully crafted to enhance your unique radiance.
      Mangata, inspired by the Swedish word for the shimmering, road-like reflection of the moon on water, captures the essence of our brand—beauty that is both ethereal and grounded. </p>
      <p>At Mangata Gallo, we believe in the transformative power of self-care, and our products are designed to be your companions on this journey. 
      Immerse yourself in a range of skincare essentials that embrace simplicity and effectiveness. From rejuvenating cleansers to nourishing moisturizers, each product is a testament to our commitment to quality and authenticity. Our haircare line, meticulously formulated, caters to diverse hair types, ensuring that every strand is treated with the care it deserves.</p>
      <p>As a small business, we take pride in providing a personalized touch to your beauty routine. Every Mangata Gallo product is a result of passion, expertise, and a deep understanding of the connection between inner well-being and outer radiance.
      Welcome to Mangata Gallo—where beauty is not just a destination but a journey, and each product is a step towards embracing the beauty that is uniquely yours.</p>
      </div>
      <div className='about-section'>
      <SecondaryTitle text="Newsletter Subscribtion"/>
      <p>By subscribing to our newsletter you will receive curated insights, exclusive offers, and a touch of refined inspiration.</p>
      <form action="" className='col'>
        <label htmlFor="email">Email Address:</label>
        <input id='email' name='email' type="email" />
        <button className='secondary-btn'>Subscribe</button>
      </form>
      </div>
      <div className='about-section'>
      <SecondaryTitle  text="Follow us "/>
      <div className='row-center'>
      <FaFacebookSquare fontSize={50} fill='#777777'/>
      <FaSquareInstagram fontSize={50} fill='#777777'/>
      <FaSquareXTwitter fontSize={50} fill='#777777'/>
      </div>
      </div>
    </div>
  )
}

export default Aboutpage
