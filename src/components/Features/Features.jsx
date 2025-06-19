import React from 'react'
import { LuRefrigerator } from "react-icons/lu"; import wspIcon from "../../assets/wsp-icon.png"
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import "./Features.css"
import { RiToolsFill } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa6";
import { TbWashMachine } from "react-icons/tb"; import { FaTv } from "react-icons/fa"; import { LiaBedSolid } from "react-icons/lia";

const icons = [
    { icon: <LuRefrigerator />, text: "Heladeras", url: "https://secure.sig2k.com/webs/eco@sigma-ar.defaultKart/sigkart/3.1/?catego=RU0029&cateid=RU0029&vista=cuadricula&orden=&ver=" },
    { icon: <FaHeadphones />, text: "Audio", url:"https://secure.sig2k.com/webs/eco@sigma-ar.defaultKart/sigkart/3.1/?catego=RU0035&cateid=RU0035&vista=cuadricula&orden=&ver=" },
    { icon: <FaTv />, text: "Video", url:"https://secure.sig2k.com/webs/eco@sigma-ar.defaultKart/sigkart/3.1/?catego=RU0035&cateid=RU0035&vista=cuadricula&orden=&ver=" },
    { icon: <RiToolsFill />, text: "Herramientas", url:"https://secure.sig2k.com/webs/eco@sigma-ar.defaultKart/sigkart/3.1/?catego=RU0038&cateid=RU0038&vista=cuadricula&orden=&ver=" },
    { icon: <TbWashMachine />, text: "Electrodomésticos", url:"https://secure.sig2k.com/webs/eco@sigma-ar.defaultKart/sigkart/3.1/?catego=RU0030&cateid=RU0030&vista=cuadricula&orden=&ver=" },
    { icon: <LiaBedSolid />, text: "Muebles", url:"https://secure.sig2k.com/webs/eco@sigma-ar.defaultKart/sigkart/3.1/?catego=RU0022&cateid=RU0022&vista=cuadricula&orden=&ver=" },
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
                    onClick={() => window.open('https://chat.whatsapp.com/Hga4GAolXDIBVnYesxZxah', '_blank')}
                >
                    Ver Canal
                </button>

            </div>
        </div>


    )
}

export default Features