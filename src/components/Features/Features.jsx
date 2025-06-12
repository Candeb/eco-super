import React from 'react'
import { LuRefrigerator } from "react-icons/lu"; import wspIcon from "../../assets/wsp-icon.png"
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import "./Features.css"
import { RiToolsFill } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa6";
import { TbWashMachine } from "react-icons/tb"; import { FaTv } from "react-icons/fa"; import { LiaBedSolid } from "react-icons/lia";

const icons = [
    { icon: <LuRefrigerator />, text: "Heladeras y Frezzer" },
    { icon: <FaHeadphones />, text: "Audio" },
    { icon: <FaTv />, text: "Video" },
    { icon: <RiToolsFill />, text: "Herramientas" },
    { icon: <TbWashMachine />, text: "Electrodomésticos" },
    { icon: <LiaBedSolid />, text: "Muebles" },
];



const Features = () => {
    return (
        <div className='features-container'>
            <div className='features-content-1'>
                <ImageCarousel images={icons} />

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