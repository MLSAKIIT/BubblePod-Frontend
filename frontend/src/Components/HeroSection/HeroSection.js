import React from 'react'
import '../../App.css'
import './HeroSection.css';
import pic from "./image13.svg"
import pic1 from "./leftline.svg"
import pic2 from "./rightline.svg"



function HeroSection() {
  return (
    
    <div className="hero-container">
    <img src={pic} alt="hero"/>
    <img src={pic1}  class="leftline" alt="Left Line"/>
    <img src={pic2} class="rightline" alt="Right Line"/>
    <h1>Start something epic.</h1>
    <div className='hero-btns'>
    <button className='btns' buttonStyle='btn--outline' 
    buttonSize='btn--large'
    >Join Now
    </button>
    </div>
    </div>
  )
}

export default HeroSection