import React from 'react'
import "./Hero.css"
import phoneImage from "../../assets/phone-img.png"

const Hero = () => {
  return (
    <div className='hero-container' id='inicio'>
      <div className='hero-content'>
        <div className='hero-img-container'> 
            <img src={phoneImage} alt="" />
        </div>
        <div className='hero-text-container'>
          <h4 className='hero-title'>TODO
             ELECTRO</h4>
          <p className='hero-subtitle'>
            Retira tu pedido preparado y ahorrá tiempo 
          </p>
          <button className='hero-button' onClick={() => window.location.href = 'https://secure.sig2k.com/webs/paoletti@sigma-ar.defaultKart/sigkart/3.1/'}>    Hacer pedido</button>

        </div>
       

      </div>

    </div>
  )
}  

export default Hero 