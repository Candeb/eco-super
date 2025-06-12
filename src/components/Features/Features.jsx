import React from 'react'
import bakery from "../../assets/products-slider/1.png"
import greengrocery from "../../assets/products-slider/2.png"
import wspIcon from "../../assets/wsp-icon.png"
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import "./Features.css"


const imageUrls = [
    { src: bakery, text: "Panadería" },
    { src: greengrocery, text: "Verdulería" },
    { src: bakery, text: "Panadería" },
    { src: greengrocery, text: "Verdulería" },
    { src: bakery, text: "Panadería" },
    { src: greengrocery, text: "Verdulería" },

];


const Features = () => {
    return (
        <div className='features-container'>
            <div className='features-content-1'>
                <ImageCarousel images={imageUrls} />

            </div>

            <div className='features-content-2'>
                <div className='features-content-2-container-title'>
                    <img src={wspIcon} alt="" />
                    <h4 className='features-content-2-title'>Seguinos en nuestro canal de WhatsApp</h4>
                </div>

                <p className='features-content-2-subtitle'> y conocé nuestras ofertas semanales</p>
                <button
                    className="features-content-2-btn"
                    onClick={() => window.open('https://chat.whatsapp.com/Hga4GAoIXDIBVnYesxZxah', '_blank')}
                >
                    Ver Canal
                </button>

            </div>
        </div>


    )
}

export default Features